# Standard Operating Procedure (SOP)
## RORIRI ERP v2 — Feature Plan, Workflow Map & Unified Database Design

**Version:** 2.0
**Last Updated:** September 2026
**Prepared For:** RORIRI Software Solutions
**Production Vision (supersedes the prototype SOP v1)**

---

## 1. Purpose

This SOP is the **build blueprint** for RORIRI ERP v2 — the transition from the frontend-only prototype into a **single unified ERP** where every person in every business line (client, intern, trainee, freelancer, influencer, IV student, candidate, startup, consultancy, staff) is stored in **one master candidate/user table**, and every workflow (enquiry → conversion → project → delivery → payment) flows end-to-end without data being scattered across portals.

---

## 2. Vision & Core Principles

1. **One person = one record.** A client who applies for an internship, registers for an Industrial Visit, and later becomes a freelancer is the *same* row in the master `users` table — never duplicated.
2. **One "enquiry" is the entry point for everything.** No login required. Anyone submits an enquiry, self-selects their role/purpose, and gets tracked until converted.
3. **Every communication is stored and threaded** like WhatsApp — text, voice, images — between client ↔ freelancer ↔ admin.
4. **Every entity is one ERP** — Consultancy, Placement, Startup Company, Workspace, Academy, College, IV, Freelancers, Influencers all share the same engine, the same finance ledger, the same messaging.
5. **The IV dashboard is a recruitment funnel** — visiting students become enquiries, enquiries become interns/jobs, interns become employees/freelancers.

---

## 3. Master Data Architecture — The Unified Candidate/User Table

### 3.1 The Single Source of Truth

All people across **every** module point to one record:

```
┌────────────────────────────────────────────────────────────────────┐
│                     USERS (unified table)                         │
│  Every person in the entire ERP — one row each                    │
├────────────────────────────────────────────────────────────────────┤
│  id            PK  UUID                                            │
│  type          employee | client | intern | trainee | freelancer  │
│                | influencer | iv_student | candidate | startup    │
│                | consultancy | vendor | guest                      │
│  role          role inside their type                             │
│                (e.g. Placement Officer, Supervisor, Project Lead)  │
│  first_name / last_name                                            │
│  email         UNIQUE                                              │
│  phone         UNIQUE  (WhatsApp number = messaging identity)      │
│  company / organization  (or null for individual)                  │
│  location / address / gender / dob                                 │
│  qualification / college / grad_year / experience_years / skills   │
│  avatar                                                            │
│  purpose       internship | job | training | project | placement  │
│                | visit | partnership | consultancy                 │
│  status        new | active | converted | inactive | blocked       │
│  source        enquiry_id that created this record                 │
│  auth          authless | otp | password                           │
│  tags / meta   JSON                                                │
│  created_at / updated_at / last_login                              │
└────────────────────────────────────────────────────────────────────┘
    ▲  ▲  ▲  ▲  ▲  ▲  ▲  ▲  ▲  ▲  ▲  ▲
    │  │  │  │  │  │  │  │  │  │  │  │
    │  │  │  │  │  │  │  │  │  │  │  └──────────→  Vendors, Guests
    │  │  │  │  │  │  │  │  │  │  └─────────────→  Consultancy (candidates)
    │  │  │  │  │  │  │  │  │  └────────────────→  Startup Company (recruiters)
    │  │  │  │  │  │  │  │  └───────────────────→  IV visiting students
    │  │  │  │  │  │  │  └──────────────────────→  Influencers
    │  │  │  │  │  │  └─────────────────────────→  Freelancers / Entrepreneurs
    │  │  │  │  │  └────────────────────────────→  Trainees (Academy)
    │  │  │  │  └───────────────────────────────→  Interns
    │  │  │  └──────────────────────────────────→  Clients
    │  │  └─────────────────────────────────────→  Employees (incl. Placement Officer)
    │  └────────────────────────────────────────→  Candidates joining via enquiry
    └───────────────────────────────────────────→  Applicants via no-login enquiry
```

### 3.2 Business Rules of the Unified Table

| Rule | Detail |
|---|---|
| Identity | `email` and `phone` are globally unique. Second submit = lookup, not insert |
| Type change | Type is not fixed; a person can upgrade: `guest → client → freelancer → employee` |
| History | All type changes preserved in `user_history` |
| Deletion | Soft delete only (status), so IV/enquiry/finance records stay linked |
| Login | `auth = authless` (enquiry/IV) → `otp` (first portal login) → `password` (verified users) |

### 3.3 Supporting Tables (grouped by module)

**Organisation backbone**

```
COMPANIES            id, name, type (software|academy|college|consultancy|startup|foundation|farms|nexemy), parent_id, income
DEPARTMENTS          id, company_id, name
ROLES                id, company_id, name, dept_id, permissions
WORKSPACES           id, name, code, cabin/room, lead_user_id, status
WORKSPACE_MEMBERS    workspace_id, user_id, role
```

**Projects & work**

```
PROJECTS             id, company_id, client_user_id, name, services, tech, amount, balance,
                     start_date, due_date, status(new|in_progress|review|delivered|closed), pay_status
PROJECT_ASSIGNMENTS  id, project_id, assignee_user_id, assignee_type (employee|freelancer|startup),
                     role, assigned_by, share/rate, status
PROJECT_MILESTONES   id, project_id, name, due_date, amount, status
TASK_ASSIGNMENTS     id, project_id, assignee_user_id, task, priority, start_date, due_date, status
```

**Messaging (WhatsApp-style, every message stored)**

```
CONVERSATIONS              id, project_id (nullable), type (client–freelancer | team | support), created_at
CONVERSATION_PARTICIPANTS  conversation_id, user_id, role_in_thread
MESSAGES                   id, conversation_id, sender_user_id,
                           body, attachments (JSON file_ids), kind (text|voice|image|file),
                           voice_duration, read_by (JSON), created_at
FILES                      id, owner_user_id, url, mime, size, uploaded_at
```

**Finance (one shared ledger)**

```
TRANSACTIONS   id, ref_type (project|academy|iv|intern|freelancer|consultancy|expense),
               ref_id, direction (credit|debit), amount, mode (cash|gpay|phonepe|netbanking...),
               txn_id, paid_to_user_id, paid_by_user_id, status, date
EXPENSES       id, category_id, sub_category_id, amount, paid_to, method, txn_id, date, description
```

**Enquiry (authless entry for everything)**

```
ENQUIRIES          id, type (project|internship|job|training|consultancy|placement|visit|partnership),
                   name, phone, email, organization, message,
                   intended_purpose, status (new|contacted|qualified|converted|closed),
                   assigned_to_user_id, source_page, created_at
ENQUIRY_METADATA   enquiry_id, field, value, updated_by, updated_at   ← self-service role/purpose updates
USER_HISTORY       user_id, old_type, new_type, note, changed_by, at
```

**Intern module**

```
INTERN_POSTS       id, title, domain, duration, stipend, openings, status
INTERN_APPLICATIONS id, intern_user_id, post_id, applied_on, status (applied|shortlisted|interview|hired|rejected)
INTERN_SUPERVISORS intern_user_id, supervisor_user_id (employee)
INTERN_TASKS       id, intern_user_id, task, due_date, status, reported_by
INTERN_REPORTS     id, intern_user_id, date, hrs, work_done, attachments
```

**Industrial Visit (IV) — recruitment funnel**

```
IV_CLIENTS         id, college/company user link, contact, location, status
IV_ENQUIRIES       id, name, org, phone, email, iv_date, students_count, status
IV_REGISTRATIONS   id, iv_client_id, date, food_package, status
IV_VISITORS        id, registration_id, visitor_user_id (students+staff), role_in_visit (student|staff|hod)
IV_FOOD            id, name, category (veg|nonveg), price, status
IV_PAYMENTS        → TRANSACTIONS (ref_type=iv)
IV_BANNERS         id, image, status
```

**Freelancer / Entrepreneur**

```
FREELANCERS        → USERS (type=freelancer)  + skills, availability, rate, portfolio
FREELANCER_PROJECTS = PROJECT_ASSIGNMENTS (assignee_type=freelancer)
FREELANCER_TASKS   = TASK_ASSIGNMENTS (assignee=freelancer)
TIME_ENTRIES       id, freelancer_user_id, project_id, date, hrs, note
FREELANCER_DELIVERABLES id, assignment_id, file_id, notes, status, submitted_at
MESSAGES           → MESSAGES (conversation between client + freelancer + admin)
FREELANCER_PAYMENTS → TRANSACTIONS (ref_type=freelancer)
```

**Consultancy + Placement + Startup + Workspace**

```
CANDIDATES         → USERS (type=candidate) — sourced from enquiry/intern/IV/trainee
ASSESSMENTS        id, title, category, max_score
ASSESSMENT_RESULTS id, candidate_user_id, assessment_id, score, status
PLACEMENT_READINESS id, candidate_user_id, job_type, prepared_status, remarks, placement_officer_id
STARTUPS           → COMPANIES (type=startup)  + hiring manager user link
STARTUP_OPENINGS   id, startup_id, title, skills, salary_range, location, vacancies, status
APPLICATIONS       → INTERN_APPLICATIONS pattern (candidate_user_id, opening_id, status)
PLACEMENT_OFFICER  → USERS (type=employee, role=Placement Officer) — owns shortlist + matching
WORKSPACES        → team of users (employees/freelancers/consultants) working cabins
```

---

## 4. Authentication & Access Model

```
                      NO LOGIN                    LOGIN
   ┌──────────────────────────────┬─────────────────────────────────────┐
   │ ENQUIRY DASHBOARD            │ CLIENT PORTAL    (password/OTP)     │
   │ IV LANDING / REGISTRATION    │ INTERN PORTAL    (OTP)              │
   │  - submit form               │ FREELANCER HUB  (password/OTP)      │
   │  - self-update role/purpose  │ TRAINEE PORTAL   (OTP)              │
   │  (phone verified via OTP)    │ EMPLOYEE PORTAL  (SSO/password)     │
   │                              │ PLACEMENT PORTAL (employee role)    │
   └──────────────────────────────┴─────────────────────────────────────┘
```

- **Enquiry:** authless submit. Returning user identifies by phone/email + OTP to update purpose.
- **IV student:** registers with OTP → becomes `user(type=iv_student)` → can later click **"Apply for Internship / Job"** which creates an enquiry/linked application without re-entering details.
- **Client:** first invite / OTP creation, then password.
- **Placement Officer / Consultancy / Startup / Workspace leads:** employee accounts with role-based menus.

---

## 5. Module Feature Plans

### 5.1 Client Page

| Feature | Details |
|---|---|
| My Profile | Company, contacts, KYC documents, status |
| My Projects | List of projects, status, milestones, balance due |
| My Team | Which employees + freelancer are assigned to me, their roles |
| Messages | WhatsApp-style thread per project — text, voice, images; stored in `MESSAGES`; history never lost |
| Payments | View invoices, pay, download receipts (→ `TRANSACTIONS`) |
| Documents | Contracts, MOU, NDA, deliverables shared with me |
| Enquiry History | How I entered the system, my original purpose, conversions |

**Who clients talk to:** Assigned account manager (employee) + assigned freelancer/entrepreneur + admin. Each is a participant in the `conversations` table.

### 5.2 Intern Page

| Feature | Details |
|---|---|
| Open Internships | Browse `INTERN_POSTS`, apply in one click |
| My Applications | Status pipeline: Applied → Shortlisted → Interview → Hired → Rejected |
| My Tasks | Tasks assigned by supervisor, with due dates |
| Daily Report | Submit work log + attachments |
| My Supervisor | Assigned mentor (employee) — chat via `MESSAGES` |
| Stipend | Payment records (→ `TRANSACTIONS`) |
| Upgrade Path | Button: "Apply for Job / Convert to Freelancer" — reuses master `users` record |

### 5.3 Industrial Visit (IV) Dashboard

| Feature | Details |
|---|---|
| IV Landing | Banner, upcoming visits, food menu, registration form (authless) |
| College/Company Login | `IV_CLIENTS` managers register visiting batches |
| Visitor Management | Each student + staff → `USERS` (type=iv_student / guest), tracked per registration |
| Payments | Registration + food package via `TRANSACTIONS` |
| **Recruitment Funnel** | Visitor dashboard has "Apply for Internship / Job" → auto-creates `ENQUIRY` pre-filled from their `USERS` row → enters intern/placement pipeline |
| Follow-up | Post-visit nurture: messages, reminders, second visits |

### 5.4 Enquiry Dashboard

| Feature | Details |
|---|---|
| Public Submit | Authless form: name, phone, email, organisation, **purpose selector** (Project, Internship, Job, Training, Consultancy, Placement, Partnership, Industrial Visit) |
| Self-Service Update | Verify via phone OTP → update own role/purpose/notes → stored in `ENQUIRY_METADATA` (full history) |
| Auto User Creation | On submit, a `USERS` row is upserted (dedup by phone/email) with `source=enquiry_id` |
| Admin Pipeline | New → Contacted → Qualified → Converted → Closed; assigned to employee |
| Conversion | Converting pushes the user into the matching module (project/intern/placement/join academy) |

### 5.5 Freelancer / Entrepreneur Assignment & Communication

| Feature | Details |
|---|---|
| Client gives project | Admin or client opens/updates `PROJECTS` |
| Assignment | Admin assigns `PROJECT_ASSIGNMENTS` with `assignee_type=freelancer`, scope, rate, deadline |
| **Client–Freelancer Chat** | Dedicated `CONVERSATIONS` per project; messages support text, **voice notes, images, files**; WhatsApp-number linked for notifications |
| Task & Milestone Tracking | `TASK_ASSIGNMENTS` + `PROJECT_MILESTONES` with amount release |
| Time & Deliverables | `TIME_ENTRIES`, `FREELANCER_DELIVERABLES` (file uploads reviewed by client/admin) |
| Payments | Milestone payments (→ `TRANSACTIONS`), balance shown to both sides |
| Workflow | Client request ↓ review ↓ assign ↓ negotiate ↓ execute ↓ deliver ↓ review ↓ pay ↓ close |

### 5.6 Consultancy + Placement + Startup + Workspace (one ERP)

| Module | How it lives in the ERP |
|---|---|
| Consultancy | Candidate lifecycle: source (enquiry/IV/intern/trainee) → profile in `USERS` → `ASSESSMENT_RESULTS` → `PLACEMENT_READINESS` → match to opening |
| Placement Officer | Employee role. Owns shortlists, interviews, job-match scorecards; sees every candidate from every door |
| Startup Company | A `COMPANIES` row. Posts `STARTUP_OPENINGS`; hires candidates already in the unified table |
| Workspace | Cabins/rooms with member teams (`WORKSPACE_MEMBERS`) — employees, freelancers, consultants work together per project |
| Shared glue | One `TRANSACTIONS` ledger, one `MESSAGES` layer, one `NOTIFICATIONS` hub, one `REPORTS` engine |

---

## 6. Workflow Maps (Flow Charts)

### 6.0 MASTER FLOW — every person enters one door, flows everywhere

```
                     ANYONE
                        │
                        ▼
        ┌───────────────────────────────────┐
        │   NO-LOGIN ENTRY (authless)        │
        │   Enquiry form OR IV registration  │
        └───────────────┬───────────────────┘
                        │  upsert by phone/email
                        ▼
              ┌───────────────────┐
              │   USERS (master)  │  ← one row per person
              └───────┬───────────┘
                      │  purpose-driven branches
    ┌────────┬────────┼────────┬──────────┬──────────┐
    ▼        ▼        ▼        ▼          ▼          ▼
 PROJECT  INTERNSHIP  JOB   TRAINING/  PARTNERSHIP  PLACEMENT
 (client) (intern)   (job)  COLLEGE      (startup) (consultancy)
    │        │        │        │          │            │
    ▼        ▼        ▼        ▼          ▼            ▼
 FREELANCER ASSIGN  EMPLOYEE  TRAINEE   STARTUP     PLACEMENT
 (assignee)  upgrade 🡪 CONVERT  ACADEMY   HIRES     OFFICER match
    │                 │                                        │
    └──── ALL FEED FINANCE, MESSAGING, DOCUMENTS, REPORTS ─────┘
```

### 6.1 Client: enquiry → project → assignment → delivery → payment

```
 ENQUIRY (purpose=Project)
      │  admin qualifies
      ▼
 USER created / upgraded to type=client
      │
      ▼
 PROJECTS created (scope, amount, balance)
      │
      ├───────────────────────────┐
      ▼                           ▼
 TEAM assigned               FREELANCER assigned
 (PROJECT_ASSIGNMENTS)      (assignee_type=freelancer)
      │                           │  CONVERSATION created
      │                           │  (client + freelancer + admin)
      │                           ▼
      │                    MILESTONE 1  ← deliverable → client review → pay
      │                           ▼
      │                    MILESTONE 2 .. N   (voice/image msgs throughout)
      │                           │
      └──────────┬────────────────┘
                 ▼
        PROJECT.status = delivered
                 ▼
        Balance settled → TRANSACTIONS (credit)
                 ▼
        Rating/feedback → project closed
```

### 6.2 Intern: browse → apply → hired → work → grow

```
 INTERN POST published
      │
      ▼
 INTERN (user) applies ── INTERN_APPLICATIONS
      │
      ▼
 Shortlist → Interview → HIRED (supervisor assigned)
      │
      ▼
 Tasks assigned (INTERN_TASKS) + Daily reports (INTERN_REPORTS)
      │
      ▼
 Stipend / allowances (TRANSACTIONS)
      │
      ▼
 "Apply for Job" or "Become Freelancer"  →  new purpose on SAME user row
      │
      ▼
 Placement Officer pipeline OR Freelancer onboarding
```

### 6.3 IV Student → Internship / Job (recruitment funnel)

```
 IV BANNER / CAMPAIGN
      │
      ▼
 Student registers (authless) → USERS (type=iv_student) via OTP
      │
      ▼
 Registration batch → IV_REGISTRATIONS + IV_VISITORS (students + staff)
      │
      ▼
 Visit day: food (IV_FOOD), attendance, engagement
      │
      ▼
 Post-visit: student opens IV DASHBOARD
      │
      ▼
 ┌── "Apply for Internship / Job" ──┐
 │   enquiry pre-filled from user row│
 └───────────────┬──────────────────┘
                 ▼
        ENQUIRIES (type=internship/job, source=iv)
                 ▼
        Intern pipeline  OR  Placement pipeline (same user, new purpose)
```

### 6.4 Enquiry Lifecycle (authless, self-updating)

```
 PUBLIC SUBMIT (any page)      ┌── verify phone OTP ──┐
      │                        │                      │
      ▼                        ▼                      ▼
 ENQUIRY created        UPDATE ROLE/PURPOSE  ADD NOTES / FOLLOWUP
      │                 (ENQUIRY_METADATA logs)
      ▼
 USERS row upserted (source=enquiry_id)
      │
      ▼
 Admin assign → status: New → Contacted → Qualified
      │
      ▼
 Convert?  ── yes ──▶ push into module (project/intern/placement/academy)
      │
      ▼
 Closed (won/lost) — record stays linked forever
```

### 6.5 Freelancer Assignment + WhatsApp-style Communication

```
 CLIENT needs a project
      │
      ▼
 Project raised (PROJECTS)
      │
      ▼
 ADMIN reviews scope & budget
      │
      ├──────────────┐
      ▼              ▼
 Assign employee  Assign FREELANCER (project_assignment)
      │              │  rate + deadline agreed
      │              ▼
      │        CONVERSATION opened (project-scoped)
      │        participants: client, freelancer, account manager
      │              │
      │              ▼
      │        MESSAGE      ← text / VOICE / IMAGE / FILE (stored in FILES)
      │              │
      │              ▼
      │        MILESTONE work → deliverable upload → CLIENT review
      │              │
      │              ▼
      │        Approved? → release payment (TRANSACTIONS)
      │              │
      │              ▼
      │        Change request? → loop to milestone
      │              ▼
      └──────► Project delivered & closed
```

### 6.6 Consultancy / Placement / Startup / Workspace (single pipeline)

```
 SOURCES ── enquiry · intern · IV student · trainee · walk-in
      │
      ▼
 USERS type=candidate  (one unified row)
      │
      ▼
 ASSESSMENT (score → ASSESSMENT_RESULTS)
      │
      ▼
 PLACEMENT_READINESS (prepared_status by POLICY officer)
      │
      ▼
 STARTUP_OPENINGS (from COMPANIES type=startup)
      │
      ▼
 Match → shortlist → interview → HIRED (application status)
      │
      ▼
 Workspace member of hiring team cabin (WORKSPACE_MEMBERS)
      │
      ▼
 Also open to freelance assignments while placed
```

---

## 7. Messaging & Communication Architecture

1. **One `MESSAGES` table** powers client chat, intern-supervisor chat, team chat, support.
2. **Message kinds:** `text`, `voice` (recorded, uploaded to `FILES`, `voice_duration` stored), `image`, `file`.
3. **Thread scoping:** conversations belong to a project (`conversations.project_id`) or a module ref, never free-floating.
4. **Deliverability:** send over WhatsApp via linked phone number (Twilio / Gupshup / Meta WhatsApp API) for public users; in-app web-socket for logged-in users.
5. **History:** nothing is deleted; `read_by` tracks delivery; `attachments` JSON links to `FILES`.
6. **Unified notifications** pushed from messages, task deadlines, payment events, and enquiry assignments.

---

## 8. Dashboarding & Reporting (unified)

| View | What it aggregates |
|---|---|
| Executive Dashboard | Revenue by entity, active projects, conversion rate (enquiry → deal), recruiter funnel |
| Candidate Funnel | Visits → enquiries → candidates → shortlisted → hired (per source) |
| Freelancer Ops | Active assignments, milestone health, payments owed, delivery lag |
| Finance | One ledger (`TRANSACTIONS`) across project / academy / IV / intern / consultancy |
| Communications | Thread volume, response time SLA, voice/image usage |

---

## 9. Roles & Permissions Matrix

| Role | Portal Access |
|---|---|
| Super Admin | Everything, config, permissions |
| Account Manager | Clients, projects, employee task assignment |
| Placement Officer | Candidates, assessments, shortlists, startup openings |
| Consultancy Head | Candidate pool, completions, agreements |
| Client | Own projects, team, messages, payments |
| Freelancer | Own projects/tasks, time, deliverables, messages, earnings |
| Intern | Posts, own applications/tasks/reports, messages, stipend |
| TV/IV Manager | IV clients, registrations, banners, visitors |
| Academy/College | Trainees, students, courses, fees |
| Startup (recruiter) | Own openings + applicants (no access to other orgs) |
| Enquiry Visitor | Own enquiry only (role/purpose self-service) |

---

## 10. Implementation Phases

| Phase | Scope | Exit criteria |
|---|---|---|
| **P1 — Foundation** | `USERS` master table, auth (OTP/password), enquiry module, OTP verify | New enquiry creates one `USERS` row, no duplicates by phone/email |
| **P2 — Client + Project + Freelancer** | project lifecycle, assignment, milestone payments | client project goes enquiry → assigned → paid with full trace |
| **P3 — Messaging** | conversations, text/voice/image, WhatsApp integration | client ↔ freelancer chat with voice + images stored |
| **P4 — Intern + Academy** | posts, applications, tasks, reports, stipend | applicant converts to intern on same user row |
| **P5 — IV funnel** | registration, visitors, banners, food, payments, "apply" CTA | IV student becomes intern/employee without re-entry |
| **P6 — Consultancy + Placement + Startup** | assessments, readiness, openings, matching | candidate hired from unified pool by startup |
| **P7 — Workspace + Reports** | cabins, team membership, unified dashboard | exec dashboard shows all funnels from one source |
| **P8 — Hardening** | tests, backup, RBAC audit, performance, deployment | production launch |

---

## 11. Target File Structure

```
roriri-erp/
├── index.html                 # Admin shell (SPA)
├── client.html                # Client portal
├── intern.html                # Intern portal
├── trainee.html               # Academy portal
├── employee.html              # Employee portal
├── freelance.html             # Freelancer hub
├── iv.html                    # Industrial Visit dashboard
├── enquiry.html               # Authless enquiry + self-service
├── consultancy.html           # Consultancy / Placement portal
├── startup.html               # Startup recruiter portal
├── workspace.html             # Workspace portal
├── admin/                     # Core app (multi-page or SPA)
│   ├── dashboard.js
│   ├── users.js               # unified table CRUD
│   ├── enquiries.js
│   ├── projects.js
│   ├── assignments.js
│   ├── finance.js
│   ├── messaging.js           # text/voice/image chat
│   └── iv.js · internships.js · placements.js
├── api/                       # Backend (Node/Next or Laravel)
│   ├── routes/*.js
│   ├── models/*.js            # users, enquiries, conversations...
│   └── websocket/chat.js
├── db/
│   ├── migrations/
│   └── seeds/
├── components/  ·  styles.css  ·  vercel.json  ·  dev-server.js
```

---

## 12. Data Dictionary (critical tables)

| Table | Purpose | Linked via |
|---|---|---|
| `users` | Every person, all modules | referenced everywhere via `user_id` |
| `enquiries` | Authless entry point | → creates `users` |
| `projects` / `project_assignments` | Work & assignment | `users.id` (client/assignee) |
| `conversations` / `messages` / `files` | WhatsApp-like comms | `users.id`, `project_id` |
| `transactions` | Unified ledger | `users.id`, ref module records |
| `intern_posts` / `intern_applications` / `intern_tasks` | Intern ops | `users.id` |
| `iv_registrations` / `iv_visitors` | Visit batches | `users.id` |
| `assessment_results` / `placement_readiness` | Consultancy | `users.id` |
| `startup_openings` / `applications` | Recruiting | `companies.id`, `users.id` |
| `workspaces` / `workspace_members` | Cabins & teams | `users.id` |

---

## 13. KPIs & Success Metrics

- **Duplicate rate** (same phone/email creating >1 `users` row) → target 0
- **Enquiry → conversion** rate per channel (IV / landing / referral / outbound)
- **IV → intern/placement** conversion rate
- **Client–freelancer** average response time; milestone on-time rate
- **Cash flow visibility**: every credit/debit traceable to one `TRANSACTIONS` row

---

## 14. Testing Plan

| Test | Scenario |
|---|---|
| Dedup | Same phone submits enquiry after being intern → no new row |
| Enquiry self-update | OTP verify → change purpose → history in metadata |
| IV funnel | Register visitor → apply internship → converted with pre-filled data |
| Freelancer assignment | Client project → assign freelancer → milestone pay → balance zero |
| Voice/image thread | Send voice + image → both persisted and re-readable |
| Role boundary | Startup recruiter sees only own openings/applicants |

---

## 15. Deployment

- **Static preview (current stage):** `node dev-server.js` → `http://localhost:8080`; Vercel static via `vercel.json`.
- **Production v2:** API + DB (PostgreSQL) + WebSocket chat + file storage (S3) hosted on Vercel/Railway or a VPS; WhatsApp provider for messaging.

---

## 16. Maintenance

- Daily: unified backup of `users`, ledger, messages
- Weekly: review enquiry backlog and IV follow-ups
- Monthly: permission audit, dedup audit, payment reconciliation

---

## 17. Approvals

| Role | Name | Date |
|---|---|---|
| Prepared By | — | September 2026 |
| Reviewed By | — | — |
| Approved By | — | — |

---

*End of Document*