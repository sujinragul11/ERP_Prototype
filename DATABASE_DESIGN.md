# RORIRI ERP — Laravel Database Design (ERD & Schema)

**Version:** 1.0 — September 2026
**Engine:** MySQL 8 (utf8mb4), accessed via Laravel Eloquent
**Core rule:** Every person = one row in `users`. All other tables reference `users.id`.

---

## 1. Conventions

- PK: `id BIGINT UNSIGNED AUTO_INCREMENT` on every table
- FK: `{table}_id` → referenced table's `id`
- Every table has `created_at` + `updated_at` (Laravel timestamps)
- Money = **integer rupees**; use decimal only where fractional needed
- `type`/`status` = ENUM (or Laravel backed enum)
- Soft deletes (`deleted_at`) for people & money records — never hard delete
- A person keeps one `users` row forever; their *current* identity lives in `users.type`, history in `user_history`

---

## 2. Global ERD

```
                       ┌──────────────────────┐
                       │      USERS (master)  │  one person, all modules
                       └──┬──┬──┬──┬──┬──┬──┬─┘
                          │  │  │  │  │  │  │
   ┌──────────────────────┘  │  │  │  │  │  └───────────────────────┐
   ▼                         │  │  │  │  │                        ▼
ENQUIRIES ◄──────────────────┼──┼──┼──┼──┼── source of every user  │
   │  (creates users)        │  │  │  │  │                         │
   │                         ▼  │  │  │  │                         │
   ├───► COMPANIES  ◄────────┘  │  │  │  │  entities: academies,    │
   │                            │  │  │  │  startups, consultancy    │
   ▼                            │  │  │  └───────────────┐           │
PROJECTS ◄──────────────────────┼──┼──┼──────────────────┼─────┐     │
   ├ PROJECT_ASSIGNMENTS ───────┼──┼──┼──────────┐       │     │     │
   │ PROJECT_MILESTONES         │  │  └──────────┼───────┼─────┼───┐ │
   │ TASK_ASSIGNMENTS           │  │             │       │     │   │ │
   ▼                            │  │             │       │     │   │ │
CONVERSATIONS ◄────────────────┴──┼─────────────┘       │     │   │ │
   │  (project-scoped chat)       │                      │     │   │ │
   ▼                              ▼                      │     │   │ │
CONVERSATION_PARTICIPANTS   TRANSACTIONS (unified)       │     │   │ │
   ▼                          credit/debit all modules   │     │   │ │
MESSAGES ─(attachments)► FILES                            │     │   │ │
                                                          │     │   │ │
   INTERN_*   IV_* (iv_registrations/iv_visitors)         │     │   │ │
   FREELANCER_* (profiles,time_entries,deliverables)      │     │   │ │
   ACADEMY_* (courses,subjects,topics,enrollments)        │     │   │ │
   ASSESSMENTS → ASSESSMENT_RESULTS → PLACEMENT_READINESS │     │   │ │
   STARTUP_OPENINGS → JOB_APPLICATIONS                    │     │   │ │
   WORKSPACES → WORKSPACE_MEMBERS                           │     │ │ │
   ATTENDANCE · DOCUMENTS · NOTIFICATIONS                  └─────┴─┴─┴─┘
```

---

## 3. Master Data Tables

### 3.1 `users` — THE unified candidate/user table

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK, AI | |
| type | ENUM('employee','client','intern','trainee','freelancer','influencer','iv_student','candidate','startup','consultancy','vendor','guest') | NOT NULL | current identity |
| company_id | BIGINT UNSIGNED | NULL, FK→companies.id | staff/startup org |
| first_name | VARCHAR(100) | NOT NULL | |
| last_name | VARCHAR(100) | NULL | |
| email | VARCHAR(190) | UNIQUE, NULL | globally unique |
| phone | VARCHAR(20) | UNIQUE, NULL | WhatsApp identity |
| whatsapp_enabled | TINYINT(1) | default 0 | linked WhatsApp |
| gender | ENUM('male','female','other') | NULL | |
| dob | DATE | NULL | |
| company_title | VARCHAR(150) | NULL | org name if no company |
| location | VARCHAR(150) | NULL | |
| address | TEXT | NULL | |
| qualification | VARCHAR(190) | NULL | |
| college | VARCHAR(190) | NULL | |
| grad_year | SMALLINT | NULL | |
| experience_years | DECIMAL(3,1) | NULL | |
| skills | JSON | NULL | |
| avatar_url | VARCHAR(255) | NULL | |
| purpose | ENUM('project','internship','job','training','placement','visit','partnership','consultancy','other') | NULL | from enquiry |
| auth_type | ENUM('authless','otp','password') | default 'authless' | |
| password | VARCHAR(255) | NULL | only if auth_type=password |
| email_verified_at / phone_verified_at | TIMESTAMP | NULL | |
| status | ENUM('new','active','converted','inactive','blocked') | default 'new' | |
| source | VARCHAR(50) | NULL | enquiry / iv / referral |
| source_enquiry_id | BIGINT UNSIGNED | NULL, FK→enquiries.id | who created me |
| onboarding_step | TINYINT | default 1 | wizard progress |
| last_login_at | TIMESTAMP | NULL | |
| meta | JSON | NULL | |
| deleted_at | TIMESTAMP | NULL | soft delete |

**Indexes:** `type`, `status`, `company_id`, `source_enquiry_id`; unique on `email`, `phone`.

### 3.2 `user_roles` — current portal identities (person may hold several)

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| user_id | BIGINT UNSIGNED | FK→users.id | |
| role | ENUM('client','intern','freelancer','candidate','employee','trainee','iv_student','startup_manager','consultant','influencer') | NOT NULL | |
| effective_from / effective_until | DATE | NOT NULL / NULL | null = current |
| status | ENUM('active','expired','superseded') | default 'active' | |

**Unique:** `(user_id, role)`.

### 3.3 `companies` — entities of any kind

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| parent_id | BIGINT UNSIGNED | NULL, FK→companies.id | group tree |
| name | VARCHAR(190) | NOT NULL | |
| type | ENUM('software','academy','college','consultancy','startup','foundation','farms','nexemy','workspace_cabin') | NOT NULL | |
| primary_owner_user_id | BIGINT UNSIGNED | NULL, FK→users.id | |
| contact_email / contact_phone / address | — | NULL | |
| status | ENUM('active','inactive') | default 'active' | |
| meta | JSON | NULL | |

### 3.4 `departments` / `job_titles`

```
departments  id, company_id FK, name, status
job_titles   id, name, department_id FK, permissions JSON
```

---

## 4. Enquiry & Conversion

### 4.1 `enquiries` — authless entry for everything

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| type | ENUM('project','internship','job','training','consultancy','placement','visit','partnership','other') | NOT NULL | |
| name | VARCHAR(150) | NOT NULL | |
| phone | VARCHAR(20) | NULL | OTP verify |
| email | VARCHAR(190) | NULL | |
| organization | VARCHAR(150) | NULL | |
| message | TEXT | NULL | |
| source_page | VARCHAR(100) | NULL | |
| status | ENUM('new','contacted','qualified','converted','closed') | default 'new' | |
| assigned_to_user_id | BIGINT UNSIGNED | NULL, FK→users.id | owner |
| created_user_id | BIGINT UNSIGNED | NULL, FK→users.id | dedup existing person |
| converted_to | JSON | NULL | {module, ref_id} |
| closed_reason | VARCHAR(190) | NULL | won/lost/duplicate |

**Indexes:** `status`, `phone`, `email`, `assigned_to_user_id`.

### 4.2 `enquiry_updates` — self-service role/purpose change log

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| enquiry_id | BIGINT UNSIGNED | FK→enquiries.id | |
| user_id | BIGINT UNSIGNED | FK→users.id | who updated |
| field | VARCHAR(50) | NOT NULL | role/purpose/phone… |
| old_value / new_value | VARCHAR(255) | NULL / NOT NULL | |
| verified_by_otp | TINYINT(1) | default 0 | audit |

### 4.3 `user_history` — conversion audit trail

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| user_id | BIGINT UNSIGNED | FK→users.id | |
| from_type / to_type | ENUM(users.type list) | NULL / NOT NULL | |
| note | VARCHAR(255) | NULL | e.g. "IV→internship" |
| changed_by_user_id | BIGINT UNSIGNED | NULL, FK→users.id | |

---

## 5. Projects & Assignments

### 5.1 `projects`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| company_id | BIGINT UNSIGNED | FK→companies.id | executing entity |
| client_user_id | BIGINT UNSIGNED | FK→users.id | client |
| name | VARCHAR(190) | NOT NULL | |
| services / tech_stack | JSON | NULL | |
| amount / balance | INTEGER | NOT NULL default 0 | rupees |
| start_date / due_date | DATE | NULL | |
| milestone_count | TINYINT | default 1 | |
| status | ENUM('new','in_progress','review','delivered','closed','cancelled') | default 'new' | |
| pay_status | ENUM('pending','partial','paid') | default 'pending' | |
| description | TEXT | NULL | |
| source_enquiry_id | BIGINT UNSIGNED | NULL, FK→enquiries.id | trace |

### 5.2 `project_assignments` — WHO works (employee/freelancer/startup)

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| project_id | BIGINT UNSIGNED | FK→projects.id | |
| assignee_user_id | BIGINT UNSIGNED | FK→users.id | |
| assignee_type | ENUM('employee','freelancer','startup','agency') | NOT NULL | |
| role_on_project | VARCHAR(100) | NULL | |
| rate | INTEGER | NULL | |
| sharing_pct | DECIMAL(4,2) | NULL | profit share |
| assigned_by_user_id | BIGINT UNSIGNED | FK→users.id | |
| status | ENUM('proposed','negotiating','active','completed','cancelled') | default 'proposed' | |
| started_at / completed_at | TIMESTAMP | NULL | |

**Unique:** `(project_id, assignee_user_id, assignee_type)`.

### 5.3 `project_milestones`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| project_id | BIGINT UNSIGNED | FK→projects.id | |
| name | VARCHAR(190) | NOT NULL | M1 / M2… |
| amount | INTEGER | default 0 | release amount |
| due_date | DATE | NULL | |
| status | ENUM('pending','in_review','approved','paid') | default 'pending' | |
| approved_by_user_id | BIGINT UNSIGNED | NULL, FK→users.id | |
| paid_txn_id | BIGINT UNSIGNED | NULL, FK→transactions.id | |

### 5.4 `task_assignments`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| project_id | BIGINT UNSIGNED | FK→projects.id, nullable | |
| assignee_user_id / assigner_user_id | BIGINT UNSIGNED | FK→users.id | worker / boss |
| task | VARCHAR(255) | NOT NULL | |
| priority | ENUM('low','medium','high','urgent') | default 'medium' | |
| start_date / due_date | DATE | NULL | |
| status | ENUM('todo','in_progress','review','done','cancelled') | default 'todo' | |

---

## 6. Messaging (WhatsApp-style: text / voice / image / file)

### 6.1 `conversations`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| scope_type | ENUM('project','intern','support','system') | NOT NULL | |
| scope_id | BIGINT UNSIGNED | NOT NULL | polymorphic ref |
| title | VARCHAR(190) | NULL | |
| created_by_user_id | BIGINT UNSIGNED | FK→users.id | |

**Index:** `(scope_type, scope_id)` — one thread per project pair.

### 6.2 `conversation_participants`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| conversation_id | BIGINT UNSIGNED | FK→conversations.id | |
| user_id | BIGINT UNSIGNED | FK→users.id | client / freelancer / manager |
| role_in_thread | VARCHAR(50) | NULL | |
| last_read_at | TIMESTAMP | NULL | |

**Unique:** `(conversation_id, user_id)`.

### 6.3 `messages`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| conversation_id | BIGINT UNSIGNED | FK→conversations.id | |
| sender_user_id | BIGINT UNSIGNED | FK→users.id | |
| kind | ENUM('text','voice','image','file','system') | default 'text' | |
| body | TEXT | NULL | caption/transcript |
| attachments | JSON | NULL | [file_id…] |
| voice_duration | SMALLINT UNSIGNED | NULL | seconds |
| replied_to_id | BIGINT UNSIGNED | NULL, FK→messages.id | reply threading |
| delivered_at | TIMESTAMP | NULL | |
| read_by | JSON | NULL | [user_id…] |
| deleted_at | TIMESTAMP | NULL | soft delete |

**Index:** `(conversation_id, id)`, `sender_user_id`.

### 6.4 `files`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| owner_user_id | BIGINT UNSIGNED | FK→users.id | |
| uploadable_type / uploadable_id | VARCHAR + BIGINT | polymorphic | message/document/deliverable |
| path | VARCHAR(255) | NOT NULL | S3/CDN key |
| mime / size_bytes | VARCHAR(100) / BIGINT | NULL | |
| timestamps | — | | |

---

## 7. Finance (one unified ledger)

### 7.1 `transactions`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| ref_type | ENUM('project','academy','college','iv','intern','freelancer','consultancy','expense','other') | NOT NULL | |
| ref_id | BIGINT UNSIGNED | NOT NULL | polymorphic ref |
| direction | ENUM('credit','debit') | NOT NULL | |
| amount | INTEGER | NOT NULL | rupees |
| mode | ENUM('cash','gpay','phonepe','paytm','cheque','netbanking','online') | NOT NULL | |
| txn_id | VARCHAR(100) | NULL | |
| paid_by_user_id / paid_to_user_id | BIGINT UNSIGNED | NULL, FK→users.id | who paid / received |
| company_id | BIGINT UNSIGNED | FK→companies.id | booking entity |
| note | VARCHAR(255) | NULL | |
| recorded_by_user_id | BIGINT UNSIGNED | FK→users.id | admin |
| status | ENUM('pending','paid','reversed') | default 'paid' | |

**Index:** `(ref_type, ref_id)`, `direction`, `company_id`.

### 7.2 Expense book

```
expense_categories     id, name, status
expense_sub_categories id, category_id FK, name, status
expenses               id, category_id FK, sub_category_id FK, amount INTEGER,
                       paid_to VARCHAR, method ENUM, txn_id, note, status
```

---

## 8. Intern Module

### 8.1 `intern_posts`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| title | VARCHAR(190) | NOT NULL | |
| domain | VARCHAR(100) | NULL | |
| duration_months / stipend | TINYINT / INTEGER | default 3 / 0 | |
| openings | SMALLINT | default 1 | |
| skills | JSON | NULL | |
| status | ENUM('open','closed','filled') | default 'open' | |

### 8.2 `intern_applications`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| intern_post_id | BIGINT UNSIGNED | FK→intern_posts.id | |
| intern_user_id | BIGINT UNSIGNED | FK→users.id | unified person |
| supervisor_user_id | BIGINT UNSIGNED | NULL, FK→users.id | employee mentor |
| applied_on | DATE | NOT NULL | |
| status | ENUM('applied','shortlisted','interview','hired','rejected','withdrawn') | default 'applied' | |
| source_enquiry_id | BIGINT UNSIGNED | NULL | IV/placement trace |

**Unique:** `(intern_post_id, intern_user_id)`.

### 8.3 `intern_tasks` / `intern_reports`

```
intern_tasks   id, application_id FK (nullable: intern_user_id FK), assigner FK→users.id,
               task, priority ENUM, due_date DATE, status ENUM
intern_reports id, intern_user_id FK, for_date DATE, hours INTEGER,
               work_done TEXT, attachments JSON, submitted_at TIMESTAMP
```

---

## 9. Academy & College

### 9.1 Academy

```
courses            id, name, code, duration_months, fee INTEGER, status
subjects           id, course_id FK, name, order_no, status
topics             id, subject_id FK, name, order_no, status
trainee_enrollments id, UNIQUE(course_id, trainee_user_id), trainee_user_id FK→users,
                    fee_total INTEGER, due INTEGER, status ENUM(active/completed/dropped)
mini_projects      id, course_id FK, trainee_user_id FK, name, due_date,
                    status ENUM(pending/in_progress/completed), url
```

### 9.2 College

```
college_courses    id, name, fee INTEGER, duration, status
college_enquiries  id, student_user_id FK→users, course_id FK, message, status
```

Fees for both → `transactions` (`ref_type = academy/college`).

---

## 10. Industrial Visit

### 10.1 `iv_clients` — visiting colleges/orgs

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| client_user_id | BIGINT UNSIGNED | NULL, FK→users.id | college coordinator |
| name | VARCHAR(190) | NOT NULL | college name |
| location · contact_phone · contact_email | — | NULL | |
| username / password | — | NULL | manager login or OTP |
| status | ENUM('active','inactive') | default 'active' | |

### 10.2 `iv_registrations`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| iv_client_id | BIGINT UNSIGNED | FK→iv_clients.id | |
| visit_date | DATE | NOT NULL | |
| visitor_count | SMALLINT | NOT NULL | |
| food_package_id | BIGINT UNSIGNED | NULL, FK→iv_food_items.id | |
| amount | INTEGER | default 0 | |
| status | ENUM('confirmed','pending','completed','cancelled') | default 'pending' | |

### 10.3 `iv_visitors` — every student/staff → users

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| registration_id | BIGINT UNSIGNED | FK→iv_registrations.id | |
| visitor_user_id | BIGINT UNSIGNED | FK→users.id | created on registration |
| role_in_visit | ENUM('student','staff','hod','principal') | NOT NULL | |
| attended / food_taken | TINYINT(1) | default 0 | |
| opted_recruitment | ENUM('none','internship','job') | default 'none' | next-step CTA |
| followup_status | ENUM('new','contacted','converted','closed') | default 'new' | |

**Index:** `visitor_user_id`, `opted_recruitment`.

### 10.4 Others

```
iv_food_items  id, name, category ENUM('veg','nonveg'), price INTEGER, status
iv_enquiries   id, name, org, phone, email, iv_date, students_count, status ENUM(new/confirmed/closed)
iv_banners     id, image_url, title, link, status
```

---

## 11. Freelancer Module

### 11.1 `freelancer_profiles` — 1:1 optional extension of users

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| user_id | BIGINT UNSIGNED | UNIQUE, FK→users.id | |
| skills | JSON | NULL | |
| availability | ENUM('available','busy','unavailable') | default 'available' | |
| hourly_rate | INTEGER | NULL | |
| portfolio_url | VARCHAR(255) | NULL | |
| experience_summary | TEXT | NULL | |
| bank_verified | TINYINT(1) | default 0 | payout ready |

### 11.2 `time_entries`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| freelancer_user_id | BIGINT UNSIGNED | FK→users.id | |
| assignment_id | BIGINT UNSIGNED | FK→project_assignments.id | |
| work_date | DATE | NOT NULL | |
| hours | DECIMAL(4,2) | NOT NULL | |
| note | VARCHAR(255) | NULL | |

### 11.3 `deliverables`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| assignment_id | BIGINT UNSIGNED | FK→project_assignments.id | |
| milestone_id | BIGINT UNSIGNED | NULL, FK→project_milestones.id | |
| files | JSON | NULL | [file_id] |
| notes | TEXT | NULL | |
| status | ENUM('submitted','in_review','approved','rejected') | default 'submitted' | |
| reviewed_by_user_id | BIGINT UNSIGNED | NULL, FK→users.id | client/admin |
| review_comment | TEXT | NULL | |
| submitted_at / reviewed_at | TIMESTAMP | NULL | |

New row per revision (full history). Earnings/payouts → `transactions` (`ref_type = freelancer`).

---

## 12. Consultancy · Placement · Startup

### 12.1 `assessments` / `assessment_results`

```
assessments         id, title, category, max_score, status
assessment_results  id, candidate_user_id FK→users, assessment_id FK,
                    score DECIMAL(5,2), status ENUM(pending/passed/failed),
                    conducted_by_user_id FK→users
```

### 12.2 `placement_readiness`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| candidate_user_id | BIGINT UNSIGNED | UNIQUE, FK→users.id | |
| prepared_status | ENUM('not_ready','training','ready','placed') | default 'not_ready' | |
| preferred_job_type / preferred_location | VARCHAR | NULL | |
| expected_salary | INTEGER | NULL | |
| placement_officer_id | BIGINT UNSIGNED | NULL, FK→users.id | employee role |
| remarks | TEXT | NULL | |

### 12.3 `startup_openings` / `job_applications`

```
startup_openings  id, company_id FK→companies(type=startup), title, skills JSON,
                  salary_range VARCHAR, location, vacancies SMALLINT,
                  status ENUM(open/closed/filled)
job_applications  id, opening_id FK, candidate_user_id FK→users,
                  stage ENUM(shortlisted/interview/offer/hired/rejected),
                  applied_from ENUM(placement/iv/intern/direct/consultancy), applied_on
```

**Unique:** `(opening_id, candidate_user_id)` on applications.

---

## 13. Workspace

### 13.1 `workspaces` / `workspace_members`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| name | VARCHAR(190) | NOT NULL | cabin/room |
| code | VARCHAR(50) | UNIQUE | EMP-CBN |
| lead_user_id | BIGINT UNSIGNED | FK→users.id | cabin lead |
| company_id | BIGINT UNSIGNED | NULL, FK→companies.id | |
| status | ENUM('active','inactive') | default 'active' | |

```
workspace_members  id, workspace_id FK, user_id FK, role_in_workspace VARCHAR
                   UNIQUE (workspace_id, user_id), timestamps
```

---

## 14. HR & Support

### 14.1 `attendance_records`

| Column | Type | Constraints | Notes |
|---|---|---|---|
| id | BIGINT UNSIGNED | PK | |
| user_id | BIGINT UNSIGNED | FK→users.id | employee/freelancer/intern |
| work_date | DATE | NOT NULL | |
| check_in / check_out | TIME / NULL | NULL | |
| hours | DECIMAL(4,2) | NULL | |
| status | ENUM('present','absent','weekend','leave') | NOT NULL | |

**Unique:** `(user_id, work_date)`.

### 14.2 `documents` — KYC / offer / contracts

```
documents   id, ref_type ENUM(employee/intern/freelancer/candidate/company),
            ref_id, document_type VARCHAR, file_id FK→files, verify_status
            ENUM(pending/verified/rejected), verified_by_user_id FK→users
```

### 14.3 `notifications`

```
notifications  id, user_id FK→users, type VARCHAR, title, body, data JSON,
               read_at TIMESTAMP NULL, created_at
```

### 14.4 Laravel core (standard)

```
password_reset_tokens   email, token, created_at
personal_access_tokens  (Sanctum) tokenable polymorphic, name, token, abilities, last_used_at
```

---

## 15. Laravel Mapping Cheat-Sheet

| Table | Model | Key relations |
|---|---|---|
| users | User | hasOne(freelancer_profile, placement_readiness); hasMany(projects→client) |
| enquiries | Enquiry | morphs? no — has relation `convertedTo` JSON; belongsTo(assignee) |
| projects | Project | belongsTo(client); hasMany(assignments, milestones, tasks) |
| project_assignments | ProjectAssignment | belongsTo(project, assignee=User) |
| conversations/messages | Conversation, Message | polymorphic scope; Message hasMany files via morphMany |
| transactions | Transaction | morphTo? uses ref_type/ref_id — implement as `morphs` pair instead |
| intern_applications | InternApplication | belongsTo(post, intern=User) |
| iv_visitors | IvVisitor | belongsTo(registration); belongsTo(visitor=User) |
| deliverables | Deliverable | belongsTo(assignment); morphMany files |
| workspaces | Workspace | belongsToMany(User, 'workspace_members') |

**Tip:** consider `morphs('ref')` for `transactions`, `files`, `notifications` instead of raw enum+id — cleaner Eloquent polymorphism.

---

## 16. Creation Order (migrations)

1. users, companies, departments, job_titles
2. enquiries, enquiry_updates, user_history, user_roles
3. projects, project_milestones, project_assignments, task_assignments
4. conversations, conversation_participants, messages
5. files, transactions, expense_categories/sub_categories, expenses
6. intern_posts, intern_applications, intern_tasks, intern_reports
7. courses, subjects, topics, trainee_enrollments, mini_projects, college_courses, college_enquiries
8. iv_clients, iv_registrations, iv_visitors, iv_food_items, iv_enquiries, iv_banners
9. freelancer_profiles, time_entries, deliverables
10. assessments, assessment_results, placement_readiness, startup_openings, job_applications
11. workspaces, workspace_members
12. attendance_records, documents, notifications

Run `php artisan make:migration` in this order — every FK resolves bottom-up.

---

## 17. Key Indexes Summary

| Table | Index | Purpose |
|---|---|---|
| users | UNIQUE email, phone; idx type, status | dedup + portal filters |
| enquiries | idx phone, email, status, assignee | search pipeline |
| messages | idx (conversation_id, id) | fast thread scroll |
| transactions | idx (ref_type, ref_id), company_id | ledger queries |
| intern_applications | UNIQUE (intern_post_id, intern_user_id) | prevent dup apply |
| iv_visitors | idx visitor_user_id, opted_recruitment | recruitment funnel |
| job_applications | UNIQUE (opening_id, candidate_user_id) | prevent dup apply |
| attendance_records | UNIQUE (user_id, work_date) | one row per day |

---

*End of Document*