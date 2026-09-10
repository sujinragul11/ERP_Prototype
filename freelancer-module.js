/* ============================================================================
   RORIRI ERP - Freelancer Management Module (Admin Prototype)
   ============================================================================ */

(function() {
  'use strict';

  // Ensure MOCK exists
  if (typeof MOCK === 'undefined') {
    window.MOCK = { nextId: 100 };
  }

  // ============================================================================
  // 1. MOCK DATA INITIALIZATION
  // ============================================================================

  if (!MOCK.freelancers) {
    MOCK.freelancers = [
      {
        id: 'FL001',
        name: 'Arun Kumar',
        firstName: 'Arun',
        lastName: 'Kumar',
        email: 'arun.kumar@gmail.com',
        phone: '+91 98401 23456',
        designation: 'Senior Full Stack Developer',
        skills: 'React, Node.js, Python, PostgreSQL, Docker, AWS',
        experience: '6 Years',
        specialization: 'Full Stack Architecture & Cloud APIs',
        availability: 'Available',
        accountStatus: 'Active',
        invitationStatus: 'Accepted',
        workingHours: '8 hrs/day',
        workingDays: 'Mon - Fri',
        rate: 1200,
        payroll: '₹85,000',
        rating: '4.9',
        completedProjects: 8,
        activeProjectsCount: 2,
        currentTask: 'Payment Gateway Integration & Webhooks',
        todayHours: '6.5 hrs',
        paymentStatus: 'Paid',
        lastActivity: '12 mins ago',
        joinDate: '2025-02-10'
      },
      {
        id: 'FL002',
        name: 'Priya S',
        firstName: 'Priya',
        lastName: 'S',
        email: 'priya.design@gmail.com',
        phone: '+91 98402 34567',
        designation: 'Lead UI/UX Designer',
        skills: 'Figma, Design Systems, Mobile UI, Prototyping, Adobe XD',
        experience: '5 Years',
        specialization: 'Enterprise Dashboards & Design Systems',
        availability: 'Busy',
        accountStatus: 'Active',
        invitationStatus: 'Accepted',
        workingHours: '6 hrs/day',
        workingDays: 'Mon - Fri',
        rate: 1000,
        payroll: '₹65,000',
        rating: '4.8',
        completedProjects: 6,
        activeProjectsCount: 2,
        currentTask: 'School ERP Parent Portal High-Fi Mockups',
        todayHours: '5.0 hrs',
        paymentStatus: 'Processing',
        lastActivity: '1 hour ago',
        joinDate: '2025-03-01'
      },
      {
        id: 'FL003',
        name: 'Hari Prasad',
        firstName: 'Hari',
        lastName: 'Prasad',
        email: 'hari.prasad.dev@gmail.com',
        phone: '+91 98403 45678',
        designation: 'Mobile App Specialist',
        skills: 'Flutter, React Native, iOS, Android, Firebase, REST APIs',
        experience: '4.5 Years',
        specialization: 'Cross-Platform Native & Offline Apps',
        availability: 'Available',
        accountStatus: 'Active',
        invitationStatus: 'Accepted',
        workingHours: '8 hrs/day',
        workingDays: 'Mon - Sat',
        rate: 950,
        payroll: '₹70,000',
        rating: '4.7',
        completedProjects: 5,
        activeProjectsCount: 1,
        currentTask: 'Push Notification Service for iOS & Android',
        todayHours: '7.0 hrs',
        paymentStatus: 'Paid',
        lastActivity: '45 mins ago',
        joinDate: '2025-03-15'
      },
      {
        id: 'FL004',
        name: 'Anushiya R',
        firstName: 'Anushiya',
        lastName: 'R',
        email: 'anushiya.cloud@gmail.com',
        phone: '+91 98404 56789',
        designation: 'Backend & Cloud Architect',
        skills: 'Go, Node.js, Kubernetes, Redis, Microservices, MongoDB',
        experience: '7 Years',
        specialization: 'High-Scale Distributed Systems & Data Pipelines',
        availability: 'Busy',
        accountStatus: 'Active',
        invitationStatus: 'Accepted',
        workingHours: '7 hrs/day',
        workingDays: 'Mon - Fri',
        rate: 1500,
        payroll: '₹1,10,000',
        rating: '5.0',
        completedProjects: 11,
        activeProjectsCount: 2,
        currentTask: 'AI Interview Speech-to-Text Pipeline Optimization',
        todayHours: '6.0 hrs',
        paymentStatus: 'Pending',
        lastActivity: '25 mins ago',
        joinDate: '2025-01-20'
      },
      {
        id: 'FL005',
        name: 'Karthik M',
        firstName: 'Karthik',
        lastName: 'M',
        email: 'karthik.qa@gmail.com',
        phone: '+91 98405 67890',
        designation: 'DevOps & QA Automation Engineer',
        skills: 'CI/CD Pipelines, Cypress, Selenium, Terraform, Linux, Grafana',
        experience: '3.5 Years',
        specialization: 'Automated Regression Suites & Staging Deployments',
        availability: 'On Leave',
        accountStatus: 'Active',
        invitationStatus: 'Accepted',
        workingHours: '8 hrs/day',
        workingDays: 'Mon - Fri',
        rate: 800,
        payroll: '₹50,000',
        rating: '4.6',
        completedProjects: 4,
        activeProjectsCount: 1,
        currentTask: 'End-to-End Cypress Integration Tests Suite',
        todayHours: '0.0 hrs',
        paymentStatus: 'Paid',
        lastActivity: '2 days ago',
        joinDate: '2025-04-05'
      }
    ];
  }

  if (!MOCK.freelancerProjects) {
    MOCK.freelancerProjects = [
      {
        id: 'FLP001',
        code: 'PRJ-ERP-2026',
        name: 'ERP Modernization',
        client: 'Roriri Software Solutions',
        clientPerson: 'Ragupathi',
        clientEmail: 'ragupathi@roririsoft.com',
        pm: 'Ragupathi (Super Admin)',
        priority: 'High',
        startDate: '2026-08-01',
        endDate: '2026-11-30',
        status: 'Active',
        progress: 68,
        taskCompletion: 74,
        loggedHours: 342,
        reportCompletion: 85,
        budget: 350000,
        paid: 180000,
        pendingPayment: 85000,
        assignedFreelancers: ['FL001', 'FL004'],
        freelancerCount: 2,
        pendingTasks: 4,
        deliverablesCount: 3,
        termsStatus: 'Accepted',
        termsVersion: '1.1',
        description: 'Comprehensive cloud modernization of internal ERP modules with high-performance responsive UI, dynamic data grids, and microservice APIs.'
      },
      {
        id: 'FLP002',
        code: 'PRJ-SCH-2026',
        name: 'School ERP & Learning Portal',
        client: 'NexGen IT College',
        clientPerson: 'Dr. K. Swaminathan',
        clientEmail: 'principal@nexgenit.edu.in',
        pm: 'Priya (Admin)',
        priority: 'High',
        startDate: '2026-07-15',
        endDate: '2026-10-15',
        status: 'Active',
        progress: 82,
        taskCompletion: 88,
        loggedHours: 420,
        reportCompletion: 92,
        budget: 420000,
        paid: 300000,
        pendingPayment: 60000,
        assignedFreelancers: ['FL002', 'FL003'],
        freelancerCount: 2,
        pendingTasks: 3,
        deliverablesCount: 4,
        termsStatus: 'Accepted',
        termsVersion: '1.0',
        description: 'Complete student academic lifecycle management, attendance tracking, online report cards, and parent mobile application.'
      },
      {
        id: 'FLP003',
        code: 'PRJ-AII-2026',
        name: 'AI Interview Platform',
        client: 'Riya IAS Academy',
        clientPerson: 'M. Senthil Kumar',
        clientEmail: 'director@riyaias.com',
        pm: 'Ragupathi (Super Admin)',
        priority: 'Critical',
        startDate: '2026-08-15',
        endDate: '2026-12-15',
        status: 'Active',
        progress: 45,
        taskCompletion: 50,
        loggedHours: 195,
        reportCompletion: 70,
        budget: 500000,
        paid: 150000,
        pendingPayment: 120000,
        assignedFreelancers: ['FL001', 'FL004'],
        freelancerCount: 2,
        pendingTasks: 7,
        deliverablesCount: 2,
        termsStatus: 'Accepted',
        termsVersion: '1.0',
        description: 'AI-assisted speech evaluation, posture analysis, transcription, and real-time scorecards for civil service mock interviews.'
      },
      {
        id: 'FLP004',
        code: 'PRJ-HMS-2026',
        name: 'Hospital Management System',
        client: 'Roriri Software Solutions',
        clientPerson: 'Ragupathi',
        clientEmail: 'admin@roririsoft.com',
        pm: 'Ragupathi (Super Admin)',
        priority: 'Medium',
        startDate: '2026-09-01',
        endDate: '2027-01-31',
        status: 'Pending Freelancer Acceptance',
        progress: 15,
        taskCompletion: 18,
        loggedHours: 48,
        reportCompletion: 25,
        budget: 480000,
        paid: 0,
        pendingPayment: 0,
        assignedFreelancers: ['FL003', 'FL005'],
        freelancerCount: 2,
        pendingTasks: 8,
        deliverablesCount: 1,
        termsStatus: 'Pending Acceptance',
        termsVersion: '1.0',
        description: 'Outpatient and Inpatient management, computerized prescription issuance, laboratory dispatch, and ward allocation.'
      },
      {
        id: 'FLP005',
        code: 'PRJ-ECO-2026',
        name: 'E-Commerce & Delivery App',
        client: 'Riya NEET Academy',
        clientPerson: 'N. Vimal Raj',
        clientEmail: 'vimal@riyaneet.com',
        pm: 'Priya (Admin)',
        priority: 'Medium',
        startDate: '2026-06-01',
        endDate: '2026-08-30',
        status: 'Completed',
        progress: 100,
        taskCompletion: 100,
        loggedHours: 510,
        reportCompletion: 100,
        budget: 280000,
        paid: 280000,
        pendingPayment: 0,
        assignedFreelancers: ['FL001', 'FL002'],
        freelancerCount: 2,
        pendingTasks: 0,
        deliverablesCount: 5,
        termsStatus: 'Accepted',
        termsVersion: '1.0',
        description: 'Study materials digital storefront, secure live course streaming, instant PDF download vouchers, and courier integration.'
      }
    ];
  }

  if (!MOCK.freelancerAssignments) {
    MOCK.freelancerAssignments = [
      {
        id: 'ASG001',
        freelancerId: 'FL001',
        projectId: 'FLP001',
        role: 'Lead Full Stack Architect',
        responsibilities: 'Core ERP module architecture, PostgreSQL indexing, API development, and secure auth integrations.',
        assignedDate: '2026-08-01',
        deliverables: 'Architecture blueprint, Modular backend services, Payment gateway webhooks',
        accessScope: 'Project Source Code, Staging DB, API Docs',
        termsVersion: '1.1',
        termsStatus: 'Accepted',
        acceptedDate: '2026-08-03',
        arrangement: 'Milestone-based (₹1,50,000)'
      },
      {
        id: 'ASG002',
        freelancerId: 'FL004',
        projectId: 'FLP001',
        role: 'Cloud & Database Engineer',
        responsibilities: 'Kubernetes deployment scripts, Docker containerization, Redis caching layer setup.',
        assignedDate: '2026-08-05',
        deliverables: 'Container manifests, High availability database replication, Redis session store',
        accessScope: 'Dev/Staging Kubernetes cluster, Redis instance',
        termsVersion: '1.1',
        termsStatus: 'Accepted',
        acceptedDate: '2026-08-06',
        arrangement: 'Hourly (₹1,500/hr, max 80 hrs/mo)'
      },
      {
        id: 'ASG003',
        freelancerId: 'FL002',
        projectId: 'FLP002',
        role: 'Lead UI/UX Designer',
        responsibilities: 'User persona research, interactive Figma components, student/parent dashboard wireframes.',
        assignedDate: '2026-07-15',
        deliverables: 'Figma Design System, 32 High-Fidelity App Screens, Clickable prototype',
        accessScope: 'Figma workspace, Project specifications, Brand guidelines',
        termsVersion: '1.0',
        termsStatus: 'Accepted',
        acceptedDate: '2026-07-16',
        arrangement: 'Fixed Project Fee (₹95,000)'
      },
      {
        id: 'ASG004',
        freelancerId: 'FL003',
        projectId: 'FLP002',
        role: 'Mobile App Lead Developer',
        responsibilities: 'Flutter mobile application for iOS and Android, offline caching, push notifications.',
        assignedDate: '2026-07-20',
        deliverables: 'Cross-platform Flutter build, Push notification microservice, App Store APK',
        accessScope: 'Mobile git repository, Firebase console, Staging API',
        termsVersion: '1.0',
        termsStatus: 'Accepted',
        acceptedDate: '2026-07-22',
        arrangement: 'Milestone-based (₹1,40,000)'
      },
      {
        id: 'ASG005',
        freelancerId: 'FL001',
        projectId: 'FLP003',
        role: 'Backend AI Integrator',
        responsibilities: 'Connecting audio streaming pipeline to AI speech recognition engines and latency reduction.',
        assignedDate: '2026-08-15',
        deliverables: 'Audio stream parser, WebSocket real-time transcript dispatcher',
        accessScope: 'AI microservice repo, Staging GPU cluster',
        termsVersion: '1.0',
        termsStatus: 'Accepted',
        acceptedDate: '2026-08-16',
        arrangement: 'Milestone-based (₹1,80,000)'
      }
    ];
  }

  // Teammates: Freelancer Teammate, Company Intern, Company Trainee (Requirements 35 & 36)
  if (!MOCK.freelancerTeam) {
    MOCK.freelancerTeam = [
      {
        id: 'TM001',
        name: 'Vignesh R',
        type: 'Freelancer Teammate',
        role: 'Frontend UI Developer',
        assignedBy: 'Arun Kumar',
        projectId: 'FLP001',
        tasks: 'Navigation & Dashboard Widgets',
        status: 'Active',
        availability: 'Available',
        email: 'vignesh.dev@gmail.com',
        phone: '+91 97890 12345'
      },
      {
        id: 'TM002',
        name: 'Sanjay Kumar',
        type: 'Company Intern',
        role: 'Junior QA & API Tester',
        assignedBy: 'Ragupathi (ERP Admin)',
        projectId: 'FLP001',
        tasks: 'Automated API Test Suite & Postman Collections',
        status: 'Active',
        availability: 'Available',
        email: 'sanjay.intern@roririsoft.com',
        phone: '+91 98401 98765'
      },
      {
        id: 'TM003',
        name: 'Divya M',
        type: 'Company Trainee',
        role: 'Junior React Developer',
        assignedBy: 'Priya (Admin)',
        projectId: 'FLP001',
        tasks: 'Form Validation & Reusable Modal Components',
        status: 'Active',
        availability: 'Busy',
        email: 'divya.trainee@roririsoft.com',
        phone: '+91 98402 87654'
      },
      {
        id: 'TM004',
        name: 'Rahul Nathan',
        type: 'Freelancer Teammate',
        role: 'Mobile UI Slicer',
        assignedBy: 'Hari Prasad',
        projectId: 'FLP002',
        tasks: 'Student Dashboard Screen Layouts',
        status: 'Active',
        availability: 'Available',
        email: 'rahul.flutter@gmail.com',
        phone: '+91 98403 76543'
      },
      {
        id: 'TM005',
        name: 'Pooja S',
        type: 'Company Intern',
        role: 'Documentation Assistant',
        assignedBy: 'Ragupathi (ERP Admin)',
        projectId: 'FLP003',
        tasks: 'AI Interview Prompt Library & User Manuals',
        status: 'Active',
        availability: 'Available',
        email: 'pooja.intern@roririsoft.com',
        phone: '+91 98404 65432'
      }
    ];
  }

  if (!MOCK.freelancerTasks) {
    MOCK.freelancerTasks = [
      {
        id: 'TASK-101',
        task: 'Payment Gateway Integration & Webhooks',
        projectId: 'FLP001',
        freelancerId: 'FL001',
        freelancerName: 'Arun Kumar',
        priority: 'Critical',
        startDate: '2026-09-01',
        dueDate: '2026-09-15',
        progress: 85,
        estimatedHours: 40,
        loggedHours: 34,
        status: 'In Progress',
        description: 'Implement Razorpay & Cashfree auto-reconciliation webhooks with cryptographic signature verification.',
        workNotes: 'Endpoints configured; tested sandbox payments successfully. Handling timeout edge cases.'
      },
      {
        id: 'TASK-102',
        task: 'Redis Distributed Session Cache',
        projectId: 'FLP001',
        freelancerId: 'FL004',
        freelancerName: 'Anushiya R',
        priority: 'High',
        startDate: '2026-08-25',
        dueDate: '2026-09-10',
        progress: 100,
        estimatedHours: 25,
        loggedHours: 24,
        status: 'Completed',
        description: 'Set up redis cluster sentinel for distributed user auth tokens and rapid cache lookups.',
        workNotes: 'Tested failover scenarios. Benchmarked at 18,000 req/sec.'
      },
      {
        id: 'TASK-103',
        task: 'Parent Portal High-Fi Mockups',
        projectId: 'FLP002',
        freelancerId: 'FL002',
        freelancerName: 'Priya S',
        priority: 'High',
        startDate: '2026-09-02',
        dueDate: '2026-09-16',
        progress: 70,
        estimatedHours: 30,
        loggedHours: 22,
        status: 'In Progress',
        description: 'Design all parent view screens including child attendance, report cards, and fee receipts.',
        workNotes: '18 screens completed and shared with client for sign-off.'
      },
      {
        id: 'TASK-104',
        task: 'Push Notification Service for iOS & Android',
        projectId: 'FLP002',
        freelancerId: 'FL003',
        freelancerName: 'Hari Prasad',
        priority: 'Medium',
        startDate: '2026-09-03',
        dueDate: '2026-09-18',
        progress: 60,
        estimatedHours: 28,
        loggedHours: 18,
        status: 'In Progress',
        description: 'Integrate FCM and APNS channels for urgent school announcements and homework alerts.',
        workNotes: 'FCM setup done. Configuring iOS certificates.'
      },
      {
        id: 'TASK-105',
        task: 'AI Speech-to-Text Pipeline Optimization',
        projectId: 'FLP003',
        freelancerId: 'FL004',
        freelancerName: 'Anushiya R',
        priority: 'Critical',
        startDate: '2026-09-04',
        dueDate: '2026-09-20',
        progress: 50,
        estimatedHours: 45,
        loggedHours: 25,
        status: 'In Progress',
        description: 'Reduce inference latency of Whisper engine to under 400ms for live interview feedback.',
        workNotes: 'Model quantization in progress.'
      },
      {
        id: 'TASK-106',
        task: 'Doctor Appointment Scheduling Module',
        projectId: 'FLP004',
        freelancerId: 'FL003',
        freelancerName: 'Hari Prasad',
        priority: 'Medium',
        startDate: '2026-09-10',
        dueDate: '2026-09-28',
        progress: 0,
        estimatedHours: 35,
        loggedHours: 0,
        status: 'Pending',
        description: 'Calendar slot management for hospital outpatient doctors with SMS booking confirmation.',
        workNotes: 'Awaiting client project terms acceptance.'
      },
      {
        id: 'TASK-107',
        task: 'Cypress End-to-End Automated Test Suite',
        projectId: 'FLP001',
        freelancerId: 'FL005',
        freelancerName: 'Karthik M',
        priority: 'Medium',
        startDate: '2026-09-01',
        dueDate: '2026-09-14',
        progress: 30,
        estimatedHours: 20,
        loggedHours: 8,
        status: 'Blocked',
        description: 'Automated smoke tests for login, role changes, client assignment, and invoice creation.',
        workNotes: 'Blocked due to pending staging environment credential updates.'
      }
    ];
  }

  if (!MOCK.timeEntries) {
    MOCK.timeEntries = [
      {
        id: 'TIME-001',
        date: '2026-09-09',
        freelancerId: 'FL001',
        freelancerName: 'Arun Kumar',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        taskId: 'TASK-101',
        taskName: 'Payment Gateway Integration & Webhooks',
        start: '09:30 AM',
        end: '04:00 PM',
        duration: '6h 30m',
        hoursDecimal: 6.5,
        description: 'Configured webhook verification algorithms and updated database transaction schemas.',
        status: 'Approved'
      },
      {
        id: 'TIME-002',
        date: '2026-09-09',
        freelancerId: 'FL002',
        freelancerName: 'Priya S',
        projectId: 'FLP002',
        projectName: 'School ERP',
        taskId: 'TASK-103',
        taskName: 'Parent Portal High-Fi Mockups',
        start: '10:00 AM',
        end: '03:00 PM',
        duration: '5h 00m',
        hoursDecimal: 5.0,
        description: 'Created 4 new mobile screens for attendance history and exam timetables in Figma.',
        status: 'Approved'
      },
      {
        id: 'TIME-003',
        date: '2026-09-09',
        freelancerId: 'FL003',
        freelancerName: 'Hari Prasad',
        projectId: 'FLP002',
        projectName: 'School ERP',
        taskId: 'TASK-104',
        taskName: 'Push Notification Service for iOS & Android',
        start: '09:00 AM',
        end: '04:00 PM',
        duration: '7h 00m',
        hoursDecimal: 7.0,
        description: 'Implemented Firebase Cloud Messaging background notification listeners in Flutter.',
        status: 'Approved'
      },
      {
        id: 'TIME-004',
        date: '2026-09-08',
        freelancerId: 'FL004',
        freelancerName: 'Anushiya R',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        taskId: 'TASK-105',
        taskName: 'AI Speech-to-Text Pipeline Optimization',
        start: '10:00 AM',
        end: '04:30 PM',
        duration: '6h 30m',
        hoursDecimal: 6.5,
        description: 'Profiling GPU memory leaks and configuring multi-threaded batch streaming.',
        status: 'Submitted'
      },
      {
        id: 'TIME-005',
        date: '2026-09-08',
        freelancerId: 'FL001',
        freelancerName: 'Arun Kumar',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        taskId: 'TASK-105',
        taskName: 'Audio stream parser integration',
        start: '02:00 PM',
        end: '06:00 PM',
        duration: '4h 00m',
        hoursDecimal: 4.0,
        description: 'WebSocket data serializer and ping-pong keepalive protocol testing.',
        status: 'Approved'
      }
    ];
  }

  // Daily Work Updates: Operational quick updates (Requirement 15)
  if (!MOCK.dailyWorkUpdates) {
    MOCK.dailyWorkUpdates = [
      {
        id: 'DWU-001',
        date: '2026-09-09',
        freelancerId: 'FL001',
        freelancerName: 'Arun Kumar',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        taskName: 'Payment Gateway Integration & Webhooks',
        completedWork: 'Built webhook endpoint verification and signature check handlers.',
        inProgressWork: 'Writing unit tests for double-credit protection logic.',
        pendingWork: 'Live payment verification with client merchant keys.',
        blockers: 'None',
        hoursWorked: '6.5 hrs',
        notes: 'Ready for admin internal review by tomorrow afternoon.',
        attachments: 'webhook_test_curl.sh, payload_schema.json',
        status: 'Submitted',
        adminComment: 'Great progress. Keep sandbox keys logged separately.'
      },
      {
        id: 'DWU-002',
        date: '2026-09-09',
        freelancerId: 'FL002',
        freelancerName: 'Priya S',
        projectId: 'FLP002',
        projectName: 'School ERP',
        taskName: 'Parent Portal High-Fi Mockups',
        completedWork: 'Designed student fee receipts screen and notification center.',
        inProgressWork: 'Refining parent dashboard card hierarchy and charts.',
        pendingWork: 'Exporting design assets and typography guide for Flutter team.',
        blockers: 'Awaiting client approval on color theme variations.',
        hoursWorked: '5.0 hrs',
        notes: 'Figma share link updated with latest revision.',
        attachments: 'parent_portal_flow.pdf',
        status: 'Submitted',
        adminComment: 'Color palette 2 looks best; let us proceed with that.'
      },
      {
        id: 'DWU-003',
        date: '2026-09-08',
        freelancerId: 'FL004',
        freelancerName: 'Anushiya R',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        taskName: 'Speech-to-Text Pipeline Optimization',
        completedWork: 'Profiled audio chunk sizes and reduced network latency by 32%.',
        inProgressWork: 'Testing streaming concurrency with 20 parallel interview bots.',
        pendingWork: 'Kubernetes autoscaling trigger tuning.',
        blockers: 'Requires additional GPU sandbox instance during stress testing.',
        hoursWorked: '6.5 hrs',
        notes: 'GPU instance quota requested from infra team.',
        attachments: 'benchmark_results_v2.png',
        status: 'Submitted',
        adminComment: 'GPU quota approved for next 48 hours.'
      }
    ];
  }

  // Formal Daily Reports: Structured compliance reports (Requirement 23)
  if (!MOCK.dailyReports) {
    MOCK.dailyReports = [
      {
        id: 'REP-101',
        date: '2026-09-09',
        freelancerId: 'FL001',
        freelancerName: 'Arun Kumar',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        completedTasks: 'TASK-101 Payment Gateway Signature Verification',
        wip: 'TASK-101 Idempotency handlers and auto-refund API',
        pending: 'Admin dashboard payment audit trail view',
        blockers: 'None',
        hours: '6.5 hrs',
        status: 'Submitted',
        submittedDate: '2026-09-09 17:15',
        reviewer: 'Ragupathi (Super Admin)',
        reviewComments: 'Reviewed and verified against test environment.',
        achievements: 'Passed 48/48 edge-case payment failure unit tests.',
        notes: 'Will deploy to dev cluster at 10 AM tomorrow.'
      },
      {
        id: 'REP-102',
        date: '2026-09-08',
        freelancerId: 'FL002',
        freelancerName: 'Priya S',
        projectId: 'FLP002',
        projectName: 'School ERP',
        completedTasks: 'Figma component library v1.2',
        wip: 'Parent portal mobile view specifications',
        pending: 'Teacher grading interface design sprint',
        blockers: 'None',
        hours: '6.0 hrs',
        status: 'Reviewed',
        submittedDate: '2026-09-08 18:30',
        reviewer: 'Priya (Admin)',
        reviewComments: 'Approved design system tokens.',
        achievements: 'Delivered all 18 student module screens on schedule.',
        notes: 'Next milestone deliverable ready by Sept 12.'
      },
      {
        id: 'REP-103',
        date: '2026-09-08',
        freelancerId: 'FL003',
        freelancerName: 'Hari Prasad',
        projectId: 'FLP002',
        projectName: 'School ERP',
        completedTasks: 'Local SQLite offline cache for student timetable',
        wip: 'FCM push notification foreground handler',
        pending: 'Biometric fingerprint login on mobile',
        blockers: 'None',
        hours: '7.0 hrs',
        status: 'Reviewed',
        submittedDate: '2026-09-08 19:00',
        reviewer: 'Ragupathi (Super Admin)',
        reviewComments: 'Good work on the offline sync strategy.',
        achievements: 'Zero latency instant offline app loading demonstrated.',
        notes: 'Ready for device lab testing.'
      }
    ];
  }

  // Deliverables: Formal milestone deliverables (Requirement 21)
  if (!MOCK.deliverables) {
    MOCK.deliverables = [
      {
        id: 'DEL-001',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        taskId: 'TASK-101',
        name: 'Payment Webhook Architecture & Security Specification',
        version: 'v1.2',
        submittedBy: 'Arun Kumar',
        submissionDate: '2026-09-08',
        reviewer: 'Ragupathi (Super Admin)',
        status: 'Under Review',
        fileUrl: 'payment_webhook_spec_v1.2.pdf',
        fileSize: '3.4 MB',
        description: 'Comprehensive cryptographic signature, replay protection, and webhook transaction ledger documentation.',
        reviewerComments: 'Solid security architecture. Please confirm PCI-DSS compliance scope.',
        reviewHistory: [
          { date: '2026-09-05', user: 'Arun Kumar', action: 'Uploaded version v1.0' },
          { date: '2026-09-06', user: 'Ragupathi', action: 'Requested changes: Add HMAC SHA256 example' },
          { date: '2026-09-08', user: 'Arun Kumar', action: 'Uploaded revised version v1.2' }
        ]
      },
      {
        id: 'DEL-002',
        projectId: 'FLP002',
        projectName: 'School ERP',
        taskId: 'TASK-103',
        name: 'School ERP Design System & Parent Portal Prototype',
        version: 'v1.0',
        submittedBy: 'Priya S',
        submissionDate: '2026-09-06',
        reviewer: 'Priya (Admin)',
        status: 'Approved',
        fileUrl: 'school_erp_figma_handoff.zip',
        fileSize: '24.8 MB',
        description: 'Complete Figma design library, typography scale, icon set, and 24 mobile responsive screens.',
        reviewerComments: 'Excellently structured design system. Ready for Flutter implementation.',
        reviewHistory: [
          { date: '2026-09-06', user: 'Priya S', action: 'Uploaded version v1.0' },
          { date: '2026-09-07', user: 'Priya (Admin)', action: 'Approved deliverable' }
        ]
      },
      {
        id: 'DEL-003',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        taskId: 'TASK-105',
        name: 'Real-Time Audio Stream Benchmarking Report',
        version: 'v1.1',
        submittedBy: 'Anushiya R',
        submissionDate: '2026-09-07',
        reviewer: 'Ragupathi (Super Admin)',
        status: 'Changes Required',
        fileUrl: 'audio_benchmark_latency_v1.1.pdf',
        fileSize: '5.1 MB',
        description: 'Performance report of live audio pipeline under 50 simultaneous video streams.',
        reviewerComments: 'Need memory consumption graphs during long (>45 mins) continuous sessions.',
        reviewHistory: [
          { date: '2026-09-07', user: 'Anushiya R', action: 'Uploaded version v1.1' },
          { date: '2026-09-08', user: 'Ragupathi', action: 'Requested memory profiling metrics' }
        ]
      }
    ];
  }

  // Change Requests: Formal CR workflow (Requirement 20)
  if (!MOCK.changeRequests) {
    MOCK.changeRequests = [
      {
        id: 'CR-001',
        crNumber: 'CR-2026-001',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        title: 'Add UPI QR Code Dynamic Generation for Spot Invoices',
        reason: 'Client requested instant UPI payment support alongside conventional credit card gateways.',
        impact: 'Requires dynamic NPCI-compliant UPI QR string generation and instant webhook reconciliation.',
        estimatedEffort: '18 Hours / ₹21,600',
        priority: 'High',
        submittedBy: 'Arun Kumar (Freelancer)',
        date: '2026-09-06',
        status: 'Under Review',
        adminNotes: 'Reviewing scope with finance department. Technically viable.'
      },
      {
        id: 'CR-002',
        crNumber: 'CR-2026-002',
        projectId: 'FLP002',
        projectName: 'School ERP',
        title: 'Multi-Language Support (Tamil & English) for Parent App',
        reason: 'Requested by school management to ensure full accessibility for all rural parents.',
        impact: 'Localization file infrastructure, dynamic font switching, RTL/LTR styling checks.',
        estimatedEffort: '25 Hours / ₹23,750',
        priority: 'Medium',
        submittedBy: 'Hari Prasad (Freelancer)',
        date: '2026-09-04',
        status: 'Approved',
        adminNotes: 'Approved. Extra hours budgeted in Milestone 3.'
      },
      {
        id: 'CR-003',
        crNumber: 'CR-2026-003',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        title: 'Include Facial Micro-Expression & Eye Contact Tracking',
        reason: 'Special request from civil service coaching panel for personality scoring.',
        impact: 'Requires MediaPipe facial landmark model integration on client-side WebAssembly.',
        estimatedEffort: '40 Hours / ₹60,000',
        priority: 'Critical',
        submittedBy: 'Anushiya R (Freelancer)',
        date: '2026-09-02',
        status: 'In Progress',
        adminNotes: 'Approved with additional milestone payment of ₹60,000.'
      }
    ];
  }

  // Issues / Bugs: Issue management (Requirement 19)
  if (!MOCK.freelancerIssues) {
    MOCK.freelancerIssues = [
      {
        id: 'ISS-101',
        title: 'Webhook signature validation fails on special character payloads',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        task: 'TASK-101 Payment Gateway Integration',
        reportedBy: 'Sanjay Kumar (Company Intern)',
        assignee: 'Arun Kumar',
        priority: 'High',
        severity: 'Major',
        createdDate: '2026-09-07',
        status: 'Resolved',
        description: 'JSON payloads with escaped unicode characters produce hash mismatch during HMAC verification.',
        resolutionNotes: 'Updated parser to read raw buffer stream before JSON decode.'
      },
      {
        id: 'ISS-102',
        title: 'Push notifications sound not triggering on iOS silent mode',
        projectId: 'FLP002',
        projectName: 'School ERP',
        task: 'TASK-104 Push Notification Service',
        reportedBy: 'Priya (Admin)',
        assignee: 'Hari Prasad',
        priority: 'Medium',
        severity: 'Moderate',
        createdDate: '2026-09-08',
        status: 'In Progress',
        description: 'Critical emergency broadcast alerts must override default silent profile.',
        resolutionNotes: 'Configuring APNS critical alert entitlement.'
      },
      {
        id: 'ISS-103',
        title: 'Staging environment automated Cypress run blocked by rate limiter',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        task: 'TASK-107 Automated Cypress Test Suite',
        reportedBy: 'Karthik M (Freelancer)',
        assignee: 'Anushiya R',
        priority: 'High',
        severity: 'Blocker',
        createdDate: '2026-09-06',
        status: 'Open',
        description: 'Test suite generates 200 requests/minute triggering IP throttling on staging nginx.',
        resolutionNotes: 'Whitelisting CI runner IP subnet in nginx config.'
      }
    ];
  }

  // Project Deployments (Requirement 22)
  if (!MOCK.deployments) {
    MOCK.deployments = [
      {
        id: 'DEP-001',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        version: 'Build #1042 (v1.2.4-rc)',
        environment: 'Staging',
        deploymentDate: '2026-09-08 16:45',
        deployedBy: 'Ragupathi (Super Admin)',
        status: 'Successful',
        releaseNotes: 'Payment webhook endpoints deployed, Redis sentinel cache enabled, database schema migration v14 completed.'
      },
      {
        id: 'DEP-002',
        projectId: 'FLP002',
        projectName: 'School ERP',
        version: 'Build #820 (v2.1.0-beta)',
        environment: 'Development',
        deploymentDate: '2026-09-07 11:20',
        deployedBy: 'Priya (Admin)',
        status: 'Successful',
        releaseNotes: 'FCM push notification background service, offline timetable cache, parent dashboard mockups.'
      },
      {
        id: 'DEP-003',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        version: 'Build #315 (v0.9.1)',
        environment: 'Staging',
        deploymentDate: '2026-09-05 14:10',
        deployedBy: 'Ragupathi (Super Admin)',
        status: 'Successful',
        releaseNotes: 'Whisper AI audio chunk streaming endpoint with WebSocket duplex channels.'
      },
      {
        id: 'DEP-004',
        projectId: 'FLP005',
        projectName: 'E-Commerce & Delivery App',
        version: 'Build #1200 (v3.0.0-PROD)',
        environment: 'Production',
        deploymentDate: '2026-08-30 20:00',
        deployedBy: 'Ragupathi (Super Admin)',
        status: 'Successful',
        releaseNotes: 'Final production launch build on live App Store & Google Play.'
      }
    ];
  }

  // Messages: Project conversations (Requirement 16)
  if (!MOCK.freelancerMessages) {
    MOCK.freelancerMessages = {
      'FLP001': [
        { id: 1, sender: 'Ragupathi (Admin)', role: 'admin', text: 'Hi Arun, please make sure the payment webhook handles edge-case timeouts gracefully.', time: 'Yesterday 11:30 AM' },
        { id: 2, sender: 'Arun Kumar', role: 'freelancer', text: 'Yes sir, I have implemented idempotency keys with 24-hour expiration in Redis.', time: 'Yesterday 11:45 AM' },
        { id: 3, sender: 'Anushiya R', role: 'freelancer', text: 'I have updated the Redis sentinel failover config on the staging cluster as well.', time: 'Yesterday 02:10 PM' },
        { id: 4, sender: 'Sanjay Kumar (Intern)', role: 'intern', text: 'Postman test collection has been updated with 15 webhook simulation requests.', time: 'Yesterday 04:20 PM' },
        { id: 5, sender: 'Ragupathi (Admin)', role: 'admin', text: 'Excellent team effort. Keep it up!', time: 'Today 09:15 AM' }
      ],
      'FLP002': [
        { id: 1, sender: 'Priya (Admin)', role: 'admin', text: 'Priya and Hari, client requested a quick demo of the parent portal this Friday.', time: 'Yesterday 10:00 AM' },
        { id: 2, sender: 'Priya S', role: 'freelancer', text: 'The Figma prototype is 100% ready for the demo.', time: 'Yesterday 10:15 AM' },
        { id: 3, sender: 'Hari Prasad', role: 'freelancer', text: 'I will have the live Flutter APK running on our test tablet by Thursday.', time: 'Yesterday 11:00 AM' }
      ],
      'FLP003': [
        { id: 1, sender: 'Ragupathi (Admin)', role: 'admin', text: 'Anushiya, we have approved the additional GPU quota for audio model stress tests.', time: 'Today 10:30 AM' },
        { id: 2, sender: 'Anushiya R', role: 'freelancer', text: 'Thank you! Running the 50-stream load benchmark right now.', time: 'Today 10:45 AM' }
      ]
    };
  }

  // Meetings: Scheduled meetings (Requirement 17)
  if (!MOCK.freelancerMeetings) {
    MOCK.freelancerMeetings = [
      {
        id: 'MTG-001',
        title: 'ERP Modernization Sprint 4 Review',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        client: 'Roriri Software Solutions',
        freelancer: 'Arun Kumar, Anushiya R',
        date: '2026-09-11',
        time: '03:30 PM',
        duration: '45 mins',
        participants: 'Ragupathi (Admin), Arun Kumar, Anushiya R, Sanjay Kumar (Intern)',
        status: 'Upcoming',
        location: 'Google Meet (meet.google.com/roriri-erp-sync)',
        agenda: 'Review payment webhook tests, Staging build verification, Milestone 2 sign-off.'
      },
      {
        id: 'MTG-002',
        title: 'School ERP Parent Portal Client Demo',
        projectId: 'FLP002',
        projectName: 'School ERP',
        client: 'NexGen IT College',
        freelancer: 'Priya S, Hari Prasad',
        date: '2026-09-12',
        time: '11:00 AM',
        duration: '60 mins',
        participants: 'Dr. K. Swaminathan (Client), Priya (Admin), Priya S, Hari Prasad',
        status: 'Upcoming',
        location: 'Conference Room 2 & Zoom',
        agenda: 'Live interactive walkthrough of Figma prototype and Flutter Android build.'
      },
      {
        id: 'MTG-003',
        title: 'AI Speech Pipeline Architecture Alignment',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        client: 'Riya IAS Academy',
        freelancer: 'Anushiya R',
        date: '2026-09-09',
        time: '02:00 PM',
        duration: '30 mins',
        participants: 'Ragupathi (Admin), Anushiya R',
        status: 'Today',
        location: 'Google Meet (meet.google.com/ai-interview-sync)',
        agenda: 'GPU quota optimization, latency budget checks, model quantization.'
      },
      {
        id: 'MTG-004',
        title: 'Kickoff & Scope Review - Hospital Management',
        projectId: 'FLP004',
        projectName: 'Hospital Management System',
        client: 'Roriri Software Solutions',
        freelancer: 'Hari Prasad, Karthik M',
        date: '2026-09-02',
        time: '10:00 AM',
        duration: '60 mins',
        participants: 'Ragupathi (Admin), Hari Prasad, Karthik M',
        status: 'Completed',
        location: 'Main Boardroom',
        agenda: 'Project specifications, doctor scheduling workflow, initial milestone definition.'
      }
    ];
  }

  // Files & Documents (Requirement 18)
  if (!MOCK.freelancerDocuments) {
    MOCK.freelancerDocuments = [
      {
        id: 'DOC-001',
        name: 'Master_Freelance_Service_Agreement_v2.pdf',
        category: 'Contracts',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        uploadedBy: 'Ragupathi (Admin)',
        date: '2026-08-01',
        size: '1.8 MB',
        type: 'PDF',
        access: 'Internal & Freelancers'
      },
      {
        id: 'DOC-002',
        name: 'Non_Disclosure_Agreement_Signed.pdf',
        category: 'Contracts',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        uploadedBy: 'Arun Kumar',
        date: '2026-08-02',
        size: '850 KB',
        type: 'PDF',
        access: 'Admin Only'
      },
      {
        id: 'DOC-003',
        name: 'ERP_System_Architecture_Requirements_Spec.pdf',
        category: 'Project Requirements',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        uploadedBy: 'Ragupathi (Admin)',
        date: '2026-08-03',
        size: '4.2 MB',
        type: 'PDF',
        access: 'Project Members'
      },
      {
        id: 'DOC-004',
        name: 'School_ERP_Design_Tokens_and_Icons.fig',
        category: 'Designs',
        projectId: 'FLP002',
        projectName: 'School ERP',
        uploadedBy: 'Priya S',
        date: '2026-08-10',
        size: '18.5 MB',
        type: 'Figma',
        access: 'Project Members'
      },
      {
        id: 'DOC-005',
        name: 'Payment_Webhook_Security_Specification.pdf',
        category: 'Deliverables',
        projectId: 'FLP001',
        projectName: 'ERP Modernization',
        uploadedBy: 'Arun Kumar',
        date: '2026-09-08',
        size: '3.4 MB',
        type: 'PDF',
        access: 'All Authorized'
      },
      {
        id: 'DOC-006',
        name: 'Speech_Latency_Benchmark_Report_v1.1.pdf',
        category: 'Reports',
        projectId: 'FLP003',
        projectName: 'AI Interview Platform',
        uploadedBy: 'Anushiya R',
        date: '2026-09-07',
        size: '5.1 MB',
        type: 'PDF',
        access: 'Project Members'
      }
    ];
  }

  // Earnings & Payments: Admin Finance Ledger (Requirement 24)
  if (!MOCK.freelancerPayments) {
    MOCK.freelancerPayments = [
      {
        id: 'PAY-FL-001',
        project: 'ERP Modernization',
        projectId: 'FLP001',
        freelancer: 'Arun Kumar',
        freelancerId: 'FL001',
        period: 'August 2026 (Milestone 1)',
        amount: 85000,
        paymentDate: '2026-09-02',
        reference: 'TXN-HDFC-991823',
        mode: 'NEFT / Bank Transfer',
        status: 'Paid',
        notes: 'Milestone 1 architecture and database models delivered.'
      },
      {
        id: 'PAY-FL-002',
        project: 'School ERP',
        projectId: 'FLP002',
        freelancer: 'Priya S',
        freelancerId: 'FL002',
        period: 'August 2026 (Design Sprint 1)',
        amount: 55000,
        paymentDate: '2026-09-03',
        reference: 'TXN-ICICI-441209',
        mode: 'Net Banking',
        status: 'Paid',
        notes: 'Initial 24 screens approved by college principal.'
      },
      {
        id: 'PAY-FL-003',
        project: 'School ERP',
        projectId: 'FLP002',
        freelancer: 'Hari Prasad',
        freelancerId: 'FL003',
        period: 'August 2026 (Mobile Sprint 1)',
        amount: 70000,
        paymentDate: '2026-09-04',
        reference: 'TXN-SBI-102948',
        mode: 'IMPS',
        status: 'Paid',
        notes: 'Flutter shell and offline database storage verified.'
      },
      {
        id: 'PAY-FL-004',
        project: 'AI Interview Platform',
        projectId: 'FLP003',
        freelancer: 'Anushiya R',
        freelancerId: 'FL004',
        period: 'August 2026 (Model Pipeline)',
        amount: 85000,
        paymentDate: '2026-09-12 (Scheduled)',
        reference: 'PENDING-AUTH',
        mode: 'NEFT / Bank Transfer',
        status: 'Processing',
        notes: 'Invoice submitted; awaiting finance manager token sign-off.'
      },
      {
        id: 'PAY-FL-005',
        project: 'ERP Modernization',
        projectId: 'FLP001',
        freelancer: 'Arun Kumar',
        freelancerId: 'FL001',
        period: 'September 2026 (Milestone 2)',
        amount: 65000,
        paymentDate: '2026-09-25 (Expected)',
        reference: 'UNBILLED',
        mode: 'NEFT',
        status: 'Pending',
        notes: 'Payable upon approval of payment webhook deliverable.'
      }
    ];
  }

  // Notifications: Admin notification alerts (Requirement 25)
  if (!MOCK.freelancerNotifications) {
    MOCK.freelancerNotifications = [
      {
        id: 'NOTIF-001',
        icon: 'bx-package',
        color: 'var(--primary)',
        title: 'New Deliverable Submitted',
        description: 'Arun Kumar uploaded Payment Webhook Architecture & Security Specification (v1.2).',
        timestamp: '2 hours ago',
        read: false,
        module: 'freelancer-deliverables'
      },
      {
        id: 'NOTIF-002',
        icon: 'bx-git-pull-request',
        color: 'var(--warning)',
        title: 'Change Request Awaiting Review',
        description: 'CR-2026-001 for Dynamic UPI QR Code submitted for ERP Modernization.',
        timestamp: '4 hours ago',
        read: false,
        module: 'freelancer-change-requests'
      },
      {
        id: 'NOTIF-003',
        icon: 'bx-file',
        color: 'var(--success)',
        title: 'Daily Report Submitted',
        description: 'Arun Kumar submitted formal daily report REP-101 for ERP Modernization.',
        timestamp: '5 hours ago',
        read: false,
        module: 'freelancer-daily-reports'
      },
      {
        id: 'NOTIF-004',
        icon: 'bx-bug',
        color: 'var(--danger)',
        title: 'High Priority Issue Reported',
        description: 'Sanjay Kumar reported Webhook signature validation bug (#ISS-101).',
        timestamp: 'Yesterday',
        read: true,
        module: 'freelancer-issues'
      },
      {
        id: 'NOTIF-005',
        icon: 'bx-wallet',
        color: 'var(--info)',
        title: 'Payment Processed Successfully',
        description: '₹85,000 NEFT payout cleared for Arun Kumar (Milestone 1).',
        timestamp: '2 days ago',
        read: true,
        module: 'freelancer-payments'
      }
    ];
  }

  // Terms & Conditions Version History (Requirement 12)
  if (!MOCK.termsHistory) {
    MOCK.termsHistory = {
      'FLP001': [
        {
          version: '1.1',
          publishedDate: '2026-08-01',
          publishedBy: 'Ragupathi (Super Admin)',
          scope: 'Cloud ERP core modules development, PostgreSQL database indexing, REST APIs, and automated test pipelines.',
          responsibilities: 'Adhere to company Git branching model, submit daily reports by 7 PM, maintain 95% test coverage.',
          timeline: 'Start: 01 Aug 2026, Finish: 30 Nov 2026 (120 Calendar Days).',
          paymentRules: 'Milestone-based release upon successful staging deployment and reviewer approval.',
          acceptedBy: 'Arun Kumar (FL001)',
          acceptedOn: '2026-08-03 10:14 AM (IST)',
          status: 'Accepted'
        },
        {
          version: '1.0',
          publishedDate: '2026-07-25',
          publishedBy: 'Ragupathi (Super Admin)',
          scope: 'Initial scoping for ERP frontend and backend architecture.',
          responsibilities: 'Frontend wireframes and database design.',
          timeline: 'Start: 01 Aug 2026, Finish: 15 Nov 2026.',
          paymentRules: 'Bi-weekly billing on logged time entries.',
          acceptedBy: 'Arun Kumar (FL001)',
          acceptedOn: '2026-07-26 04:30 PM (IST)',
          status: 'Superseded by v1.1'
        }
      ]
    };
  }

  // ============================================================================
  // 2. HELPER UTILITIES
  // ============================================================================

  function formatINR(val) {
    const num = Number(val) || 0;
    return '₹' + num.toLocaleString('en-IN');
  }

  function getStatusBadge(status) {
    const s = String(status || '').toLowerCase();
    if (s.includes('active') || s.includes('approved') || s.includes('successful') || s.includes('paid')) {
      return `<span class="badge badge-success">${status}</span>`;
    }
    if (s.includes('available')) {
      return `<span class="badge badge-available"><i class="bx bx-check-circle"></i> Available</span>`;
    }
    if (s.includes('busy')) {
      return `<span class="badge badge-busy"><i class="bx bx-time"></i> Busy</span>`;
    }
    if (s.includes('leave')) {
      return `<span class="badge badge-leave"><i class="bx bx-calendar-x"></i> On Leave</span>`;
    }
    if (s.includes('review') || s.includes('processing')) {
      return `<span class="badge badge-review">${status}</span>`;
    }
    if (s.includes('progress')) {
      return `<span class="badge badge-primary">${status}</span>`;
    }
    if (s.includes('blocked') || s.includes('failed') || s.includes('rejected')) {
      return `<span class="badge badge-danger">${status}</span>`;
    }
    if (s.includes('hold') || s.includes('changes')) {
      return `<span class="badge badge-warning">${status}</span>`;
    }
    return `<span class="badge badge-secondary">${status || 'Pending'}</span>`;
  }

  function getPriorityBadge(p) {
    const pr = String(p || '').toLowerCase();
    if (pr === 'critical') return `<span class="badge badge-danger">Critical</span>`;
    if (pr === 'high') return `<span class="badge badge-warning">High</span>`;
    if (pr === 'medium') return `<span class="badge badge-primary">Medium</span>`;
    return `<span class="badge badge-secondary">Low</span>`;
  }

  // ============================================================================
  // 3. WORKFLOW VISUALIZATION COMPONENT (Requirement 40)
  // ============================================================================

  function renderWorkflowVisualization() {
    const steps = [
      { n: 1, title: 'Create Freelancer', desc: 'ERP Admin invites & provisions account', ic: 'bx-user-plus' },
      { n: 2, title: 'Assign Client Project', desc: 'Select client & define scope', ic: 'bx-briefcase' },
      { n: 3, title: 'Define Terms & Pay', desc: 'Publish terms & payment milestones', ic: 'bx-file' },
      { n: 4, title: 'Assign Freelancer', desc: 'Map role & expected deliverables', ic: 'bx-user-check' },
      { n: 5, title: 'Accepts Terms', desc: 'Freelancer signs project agreement', ic: 'bx-check-shield' },
      { n: 6, title: 'Access Enabled', desc: 'Resource-scoped permissions unlocked', ic: 'bx-lock-open' },
      { n: 7, title: 'Assign Tasks', desc: 'Granular tasks with due dates', ic: 'bx-task' },
      { n: 8, title: 'Time Tracking', desc: 'Log work hours & active timer', ic: 'bx-time-five' },
      { n: 9, title: 'Daily Update', desc: 'Operational quick work logs', ic: 'bx-edit' },
      { n: 10, title: 'Messages & Sync', desc: 'Project chat & video meetings', ic: 'bx-conversation' },
      { n: 11, title: 'Issues & CRs', desc: 'Track bugs & change requests', ic: 'bx-bug' },
      { n: 12, title: 'Deliverables', desc: 'Submit milestone code & designs', ic: 'bx-package' },
      { n: 13, title: 'Daily Report', desc: 'Formal structured compliance report', ic: 'bx-file-blank' },
      { n: 14, title: 'Admin Review', desc: 'Review, approve or request revision', ic: 'bx-check-double' },
      { n: 15, title: 'Deployment', desc: 'Dev → Staging → Production', ic: 'bx-cloud-upload' },
      { n: 16, title: 'Payment Payout', desc: 'Admin clears milestone invoice', ic: 'bx-wallet' },
      { n: 17, title: 'Project Closed', desc: 'Final sign-off & client handoff', ic: 'bx-badge-check' }
    ];

    let html = `
      <div class="workflow-section">
        <div class="workflow-section-title">
          <span><i class="bx bx-git-commit text-primary" style="margin-right:6px;"></i> Freelancer Governance Lifecycle Workflow (ERP Controlled)</span>
          <span class="badge badge-primary font-11">Enterprise Workflow</span>
        </div>
        <div class="workflow-steps-scroll">`;

    steps.forEach((s, idx) => {
      html += `
        <div class="workflow-step-card">
          <div class="workflow-step-num">${s.n}</div>
          <div class="workflow-step-icon"><i class="bx ${s.ic}"></i></div>
          <div class="workflow-step-title">${s.title}</div>
          <div class="workflow-step-desc">${s.desc}</div>
        </div>`;
      if (idx < steps.length - 1) {
        html += `<div class="workflow-arrow"><i class="bx bx-chevron-right"></i></div>`;
      }
    });

    html += `</div></div>`;
    return html;
  }

  // ============================================================================
  // 4. RENDERERS: FREELANCER DASHBOARD (Requirements 4 & 5)
  // ============================================================================

  function renderFreelancerDashboard() {
    const totalFL = MOCK.freelancers.length;
    const activeFL = MOCK.freelancers.filter(f => f.availability !== 'On Leave').length;
    const assignedProjects = MOCK.freelancerProjects.length;
    const activeProjects = MOCK.freelancerProjects.filter(p => p.status === 'Active').length;
    const pendingApprovals = MOCK.changeRequests.filter(c => c.status === 'Under Review').length +
                             MOCK.dailyReports.filter(r => r.status === 'Submitted').length;
    const pendingDeliverables = MOCK.deliverables.filter(d => d.status === 'Under Review' || d.status === 'Changes Required').length;
    const pendingPaymentsSum = MOCK.freelancerPayments
      .filter(p => p.status === 'Pending' || p.status === 'Processing')
      .reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
    const totalHoursMonth = MOCK.timeEntries.reduce((s, t) => s + (Number(t.hoursDecimal) || 0), 0) + 1410; // realistic combined

    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Freelancer Dashboard</h4>
          <div class="font-13 text-secondary">Manage freelancer assignments, projects, work progress, deliverables and payments.</div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary" onclick="navigate('freelancer-reports')"><i class="bx bx-bar-chart-alt-2"></i> Reports</button>
          <button class="btn btn-primary" onclick="showAddFreelancerModal()"><i class="bx bx-user-plus"></i> Add Freelancer</button>
        </div>
      </div>`;

    // 8 Top Summary Cards (Requirement 4)
    html += `
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Total Freelancers</p>
                <h4>${totalFL}</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-trending-up"></i> +3 this month</div>
              </div>
              <div class="stat-icon bg-light-primary text-primary"><i class="bx bx-group"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Active Freelancers</p>
                <h4>${activeFL}</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-check-circle"></i> 80% engaged</div>
              </div>
              <div class="stat-icon bg-light-success text-success"><i class="bx bx-user-check"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Assigned Projects</p>
                <h4>${assignedProjects}</h4>
                <div class="font-11 text-secondary mt-1">Across 4 Clients</div>
              </div>
              <div class="stat-icon bg-light-warning text-warning"><i class="bx bx-briefcase-alt"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Active Projects</p>
                <h4>${activeProjects}</h4>
                <div class="font-11 text-primary mt-1">8 freelancers assigned</div>
              </div>
              <div class="stat-icon bg-light-info text-info"><i class="bx bx-folder-open"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Pending Approvals</p>
                <h4>${pendingApprovals}</h4>
                <div class="font-11 text-danger mt-1"><i class="bx bx-bell"></i> Action required</div>
              </div>
              <div class="stat-icon bg-light-danger text-danger"><i class="bx bx-check-shield"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Pending Deliverables</p>
                <h4>${pendingDeliverables}</h4>
                <div class="font-11 text-warning mt-1">Requires review</div>
              </div>
              <div class="stat-icon bg-light-warning text-warning"><i class="bx bx-package"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Pending Payments</p>
                <h4>${formatINR(pendingPaymentsSum)}</h4>
                <div class="font-11 text-secondary mt-1">2 payments in queue</div>
              </div>
              <div class="stat-icon bg-light-success text-success"><i class="bx bx-wallet"></i></div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Total Hours This Month</p>
                <h4>${totalHoursMonth.toLocaleString()} hrs</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-trending-up"></i> +12% vs last mo</div>
              </div>
              <div class="stat-icon bg-light-primary text-primary"><i class="bx bx-time-five"></i></div>
            </div>
          </div>
        </div>
      </div>`;

    // Visual Workflow Section (Requirement 40)
    html += renderWorkflowVisualization();

    // Section A: Freelancer Overview Table
    html += `
      <div class="data-card mb-4">
        <div class="card-header">
          <h5><i class="bx bx-user-check text-primary" style="margin-right:6px;"></i> Freelancer Overview</h5>
          <div class="d-flex gap-2 align-items-center">
            <input type="text" class="form-control" placeholder="Search freelancer..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this, 'dash-fl-tbody')">
            <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-list')">View All</button>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Freelancer</th>
                  <th>Role</th>
                  <th>Active Projects</th>
                  <th>Current Task</th>
                  <th>Today's Hours</th>
                  <th>Payment Status</th>
                  <th>Availability</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="dash-fl-tbody">`;

    MOCK.freelancers.forEach(f => {
      html += `
        <tr>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="user-avatar" style="width:34px;height:34px;font-size:13px;background:linear-gradient(135deg,#4e73df,#224abe);">${f.firstName.charAt(0)}</div>
              <div>
                <a href="javascript:void(0)" onclick="navigate('freelancer-detail', {id:'${f.id}'})" style="font-weight:600;color:var(--text-dark);">${f.name}</a>
                <div class="font-11 text-secondary">${f.email}</div>
              </div>
            </div>
          </td>
          <td><span class="font-12 fw-600">${f.designation}</span></td>
          <td><span class="badge badge-primary">${f.activeProjectsCount} Projects</span></td>
          <td><span class="font-12 text-secondary" style="max-width:200px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${f.currentTask}">${f.currentTask}</span></td>
          <td><strong>${f.todayHours}</strong></td>
          <td>${getStatusBadge(f.paymentStatus)}</td>
          <td>${getStatusBadge(f.availability)}</td>
          <td><span class="badge badge-success">${f.accountStatus}</span></td>
          <td>
            <div class="d-flex gap-1">
              <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-detail', {id:'${f.id}'})" title="View Workspace"><i class="bx bx-show"></i></button>
              <button class="btn btn-sm btn-outline-success" onclick="showAssignProjectModal('${f.id}')" title="Assign Project"><i class="bx bx-briefcase-alt"></i></button>
            </div>
          </td>
        </tr>`;
    });

    html += `
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    // Row for B: Active Projects + C: Pending Actions + D: Recent Activity
    html += `
      <div class="row">
        <!-- B. Active Projects -->
        <div class="col-lg-8 mb-4">
          <div class="data-card h-100">
            <div class="card-header">
              <h5><i class="bx bx-briefcase text-primary" style="margin-right:6px;"></i> Active Projects</h5>
              <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-projects')">All Projects</button>
            </div>
            <div class="card-body">
              <div class="overflow-x">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Client</th>
                      <th>Freelancers</th>
                      <th>Progress</th>
                      <th>Pending Tasks</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>`;

    MOCK.freelancerProjects.slice(0, 4).forEach(p => {
      html += `
        <tr>
          <td>
            <a href="javascript:void(0)" onclick="navigate('freelancer-project-workspace', {id:'${p.id}'})" style="font-weight:600;color:var(--primary);">${p.name}</a>
            <div class="font-11 text-secondary">${p.code}</div>
          </td>
          <td>${p.client}</td>
          <td><span class="badge badge-secondary">${p.freelancerCount} Assigned</span></td>
          <td style="width:140px;">
            <div class="d-flex justify-content-between font-11 mb-1"><span>${p.progress}%</span></div>
            <div class="progress-bar-custom"><div class="fill" style="width:${p.progress}%;background:var(--primary);"></div></div>
          </td>
          <td><span class="badge badge-warning">${p.pendingTasks} Pending</span></td>
          <td>${getStatusBadge(p.status)}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-project-workspace', {id:'${p.id}'})" title="Open Workspace"><i class="bx bx-desktop"></i></button>
          </td>
        </tr>`;
    });

    html += `
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- C. Pending Actions Widget -->
        <div class="col-lg-4 mb-4">
          <div class="data-card h-100">
            <div class="card-header">
              <h5><i class="bx bx-bell text-danger" style="margin-right:6px;"></i> Pending Admin Actions</h5>
              <span class="badge badge-danger">${pendingApprovals} Pending</span>
            </div>
            <div class="card-body p-3">
              <div class="d-flex flex-column gap-2">
                <div class="p-2 border rounded" style="background:#fff9f9;border-color:#ffdada !important;">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="badge badge-danger font-11">Change Request</span>
                    <span class="font-11 text-secondary">Today</span>
                  </div>
                  <div class="font-12 fw-600">CR-2026-001: UPI QR Dynamic Generation</div>
                  <div class="font-11 text-secondary mb-2">Submitted by Arun Kumar (ERP Modernization)</div>
                  <button class="btn btn-sm btn-primary w-100" onclick="showReviewChangeRequestModal('CR-001')"><i class="bx bx-check-shield"></i> Review Change Request</button>
                </div>

                <div class="p-2 border rounded" style="background:#f8faff;border-color:#dae5ff !important;">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="badge badge-primary font-11">Deliverable</span>
                    <span class="font-11 text-secondary">Yesterday</span>
                  </div>
                  <div class="font-12 fw-600">Payment Webhook Spec (v1.2)</div>
                  <div class="font-11 text-secondary mb-2">Arun Kumar • ERP Modernization</div>
                  <button class="btn btn-sm btn-outline-primary w-100" onclick="showReviewDeliverableModal('DEL-001')"><i class="bx bx-package"></i> Review Deliverable</button>
                </div>

                <div class="p-2 border rounded" style="background:#f9fff9;border-color:#d4f5d4 !important;">
                  <div class="d-flex justify-content-between align-items-center mb-1">
                    <span class="badge badge-success font-11">Daily Report</span>
                    <span class="font-11 text-secondary">Yesterday</span>
                  </div>
                  <div class="font-12 fw-600">Report #REP-101: Webhook Signatures</div>
                  <div class="font-11 text-secondary mb-2">Arun Kumar • 6.5 Logged Hours</div>
                  <button class="btn btn-sm btn-outline-success w-100" onclick="navigate('freelancer-daily-reports')"><i class="bx bx-file"></i> Review Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    // Section D: Recent Freelancer Activity Timeline
    html += `
      <div class="data-card">
        <div class="card-header">
          <h5><i class="bx bx-history text-primary" style="margin-right:6px;"></i> Recent Freelancer Governance Activity</h5>
          <span class="font-12 text-secondary">Real-Time Audit Trail</span>
        </div>
        <div class="card-body" style="padding:0.5rem 1.25rem;">
          <ul class="activity-list">
            <li>
              <div class="activity-icon bg-light-primary text-primary"><i class="bx bx-package"></i></div>
              <div class="activity-text">
                <h6>Deliverable v1.2 Uploaded</h6>
                <p>Arun Kumar submitted <strong>Payment Webhook Security Specification (v1.2)</strong> for project ERP Modernization.</p>
              </div>
              <span class="activity-time">2 hours ago</span>
            </li>
            <li>
              <div class="activity-icon bg-light-warning text-warning"><i class="bx bx-git-pull-request"></i></div>
              <div class="activity-text">
                <h6>Change Request CR-2026-001 Submitted</h6>
                <p>Arun Kumar created change request for <strong>Dynamic UPI QR Code Generation</strong>.</p>
              </div>
              <span class="activity-time">4 hours ago</span>
            </li>
            <li>
              <div class="activity-icon bg-light-success text-success"><i class="bx bx-check-circle"></i></div>
              <div class="activity-text">
                <h6>Task #TASK-102 Completed</h6>
                <p>Anushiya R completed <strong>Redis Distributed Session Cache</strong> on ERP Modernization.</p>
              </div>
              <span class="activity-time">Yesterday</span>
            </li>
            <li>
              <div class="activity-icon bg-light-info text-info"><i class="bx bx-file"></i></div>
              <div class="activity-text">
                <h6>Project Terms Accepted</h6>
                <p>Priya S accepted terms & conditions version <strong>v1.0</strong> for School ERP & Learning Portal.</p>
              </div>
              <span class="activity-time">2 days ago</span>
            </li>
            <li>
              <div class="activity-icon bg-light-success text-success"><i class="bx bx-wallet"></i></div>
              <div class="activity-text">
                <h6>Payment of ₹85,000 Processed</h6>
                <p>Admin processed Milestone 1 payout to Arun Kumar for ERP Modernization via NEFT (TXN-HDFC-991823).</p>
              </div>
              <span class="activity-time">3 days ago</span>
            </li>
          </ul>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 5. RENDERERS: FREELANCERS LIST (Requirement 6)
  // ============================================================================

  function renderFreelancerList() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Freelancers</h4>
          <div class="font-13 text-secondary">Manage freelancer accounts, assignments, availability and project participation.</div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary" onclick="showNotification('Exporting freelancer roster...', 'info')"><i class="bx bx-download"></i> Export</button>
          <button class="btn btn-primary" onclick="showAddFreelancerModal()"><i class="bx bx-user-plus"></i> Add Freelancer</button>
        </div>
      </div>

      <div class="data-card">
        <div class="card-header">
          <div class="filter-bar w-100" style="margin-bottom:0;">
            <div class="filter-group">
              <input type="text" class="form-control" placeholder="Search name, skill, email..." style="width:240px;padding:0.4rem 0.7rem;font-size:13px;" oninput="searchTable(this, 'fl-list-tbody')">
              <select class="form-control" style="width:140px;padding:0.4rem;font-size:13px;" onchange="filterFreelancerAvailability(this.value)">
                <option value="All">All Availability</option>
                <option value="Available">Available</option>
                <option value="Busy">Busy</option>
                <option value="On Leave">On Leave</option>
              </select>
              <select class="form-control" style="width:130px;padding:0.4rem;font-size:13px;" onchange="filterFreelancerStatus(this.value)">
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div class="font-12 text-secondary">Showing <strong>${MOCK.freelancers.length}</strong> Registered Freelancers</div>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Freelancer Name</th>
                  <th>Professional Role</th>
                  <th>Contact Info</th>
                  <th>Active Projects</th>
                  <th>Rate / Payroll</th>
                  <th>Availability</th>
                  <th>Account Status</th>
                  <th>Last Activity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="fl-list-tbody">`;

    MOCK.freelancers.forEach(f => {
      html += `
        <tr data-status="${f.accountStatus}" data-availability="${f.availability}">
          <td>
            <div class="user-avatar" style="width:38px;height:38px;font-size:14px;background:linear-gradient(135deg,#4e73df,#224abe);">${f.firstName.charAt(0)}</div>
          </td>
          <td>
            <a href="javascript:void(0)" onclick="navigate('freelancer-detail', {id:'${f.id}'})" style="font-weight:600;font-size:14px;color:var(--text-dark);">${f.name}</a>
            <div class="font-11 text-secondary">ID: ${f.id} • Rating: <i class="bx bxs-star text-warning"></i> ${f.rating}</div>
          </td>
          <td>
            <div class="fw-600 font-13">${f.designation}</div>
            <div class="font-11 text-secondary" style="max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${f.skills}">${f.skills}</div>
          </td>
          <td>
            <div class="font-12">${f.phone}</div>
            <div class="font-11 text-secondary">${f.email}</div>
          </td>
          <td><span class="badge badge-primary">${f.activeProjectsCount} Projects</span></td>
          <td>
            <div class="font-12 fw-600">${formatINR(f.rate)} / hr</div>
            <div class="font-11 text-secondary">${f.payroll} / mo</div>
          </td>
          <td>${getStatusBadge(f.availability)}</td>
          <td><span class="badge badge-success">${f.accountStatus}</span></td>
          <td class="font-11 text-secondary">${f.lastActivity}</td>
          <td>
            <div class="d-flex gap-1">
              <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-detail', {id:'${f.id}'})" title="View Profile"><i class="bx bx-show"></i></button>
              <button class="btn btn-sm btn-outline-success" onclick="showAssignProjectModal('${f.id}')" title="Assign Project"><i class="bx bx-briefcase-alt"></i></button>
              <button class="btn btn-sm btn-outline-warning" onclick="showEditFreelancerModal('${f.id}')" title="Edit"><i class="bx bx-edit"></i></button>
            </div>
          </td>
        </tr>`;
    });

    html += `
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 6. RENDERERS: FREELANCER DETAIL PAGE (Requirement 8 - 12 TABS)
  // ============================================================================

  function renderFreelancerDetail() {
    const id = window._params?.id || (MOCK.freelancers[0] ? MOCK.freelancers[0].id : '');
    const fl = MOCK.freelancers.find(f => f.id === id) || MOCK.freelancers[0];

    if (!fl) {
      return `<div class="empty-state"><i class="bx bx-user-x"></i><p>Freelancer not found</p><button class="btn btn-primary" onclick="navigate('freelancer-list')">Back to Freelancers</button></div>`;
    }

    const assignedPrjs = MOCK.freelancerProjects.filter(p => (p.assignedFreelancers || []).includes(fl.id));
    const flTasks = MOCK.freelancerTasks.filter(t => t.freelancerId === fl.id);
    const flTime = MOCK.timeEntries.filter(t => t.freelancerId === fl.id);
    const flUpdates = MOCK.dailyWorkUpdates.filter(u => u.freelancerId === fl.id);
    const flReports = MOCK.dailyReports.filter(r => r.freelancerId === fl.id);
    const flDeliverables = MOCK.deliverables.filter(d => d.submittedBy.includes(fl.name));
    const flIssues = MOCK.freelancerIssues.filter(i => i.assignee.includes(fl.name));
    const flCRs = MOCK.changeRequests.filter(c => c.submittedBy.includes(fl.name));
    const flPayments = MOCK.freelancerPayments.filter(p => p.freelancerId === fl.id);

    let html = `
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-primary btn-sm" onclick="navigate('freelancer-list')"><i class="bx bx-arrow-back"></i> Back</button>
          <h4 style="margin:0;font-size:20px;font-weight:700;">${fl.name} — Workspace</h4>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-warning" onclick="showEditFreelancerModal('${fl.id}')"><i class="bx bx-edit"></i> Edit</button>
          <button class="btn btn-sm btn-primary" onclick="showAssignProjectModal('${fl.id}')"><i class="bx bx-briefcase-alt"></i> Assign Project</button>
          <button class="btn btn-sm btn-outline-danger" onclick="toggleFreelancerActive('${fl.id}')">${fl.accountStatus === 'Active' ? 'Deactivate' : 'Activate'}</button>
        </div>
      </div>

      <!-- Header Card -->
      <div class="data-card mb-3 p-3">
        <div class="d-flex align-items-center gap-3 flex-wrap">
          <div class="user-avatar" style="width:64px;height:64px;font-size:26px;border-radius:12px;background:linear-gradient(135deg,#4e73df,#224abe);">${fl.firstName.charAt(0)}</div>
          <div style="flex:1;min-width:240px;">
            <div class="d-flex align-items-center gap-2">
              <h5 style="margin:0;font-size:18px;font-weight:700;">${fl.name}</h5>
              ${getStatusBadge(fl.availability)}
              <span class="badge badge-success">${fl.accountStatus}</span>
            </div>
            <div class="font-13 text-secondary mt-1">${fl.designation} • ${fl.experience} Experience</div>
            <div class="font-12 text-secondary mt-1"><i class="bx bx-envelope"></i> ${fl.email} &bull; <i class="bx bx-phone"></i> ${fl.phone} &bull; <i class="bx bxs-star text-warning"></i> ${fl.rating} Rating</div>
          </div>
          <div class="d-flex gap-3 text-center border-start ps-3">
            <div><div class="font-16 fw-700 text-primary">${assignedPrjs.length}</div><div class="font-11 text-secondary">Active Projects</div></div>
            <div><div class="font-16 fw-700 text-success">${flTasks.length}</div><div class="font-11 text-secondary">Tasks</div></div>
            <div><div class="font-16 fw-700 text-warning">${formatINR(fl.rate)}</div><div class="font-11 text-secondary">Hourly Rate</div></div>
          </div>
        </div>
      </div>

      <!-- 12 TABS (Requirement 8) -->
      <div class="tab-nav" data-tabgroup="fl-tabs">
        <button class="active" onclick="switchTab('fl-tabs','overview')">Overview</button>
        <button onclick="switchTab('fl-tabs','projects')">Projects (${assignedPrjs.length})</button>
        <button onclick="switchTab('fl-tabs','tasks')">Tasks (${flTasks.length})</button>
        <button onclick="switchTab('fl-tabs','time')">Time (${flTime.length})</button>
        <button onclick="switchTab('fl-tabs','daily-updates')">Daily Updates (${flUpdates.length})</button>
        <button onclick="switchTab('fl-tabs','reports')">Reports (${flReports.length})</button>
        <button onclick="switchTab('fl-tabs','deliverables')">Deliverables (${flDeliverables.length})</button>
        <button onclick="switchTab('fl-tabs','issues')">Issues (${flIssues.length})</button>
        <button onclick="switchTab('fl-tabs','change-requests')">Change Requests (${flCRs.length})</button>
        <button onclick="switchTab('fl-tabs','payments')">Payments (${flPayments.length})</button>
        <button onclick="switchTab('fl-tabs','documents')">Documents</button>
        <button onclick="switchTab('fl-tabs','activity')">Activity</button>
      </div>

      <!-- TAB 1: OVERVIEW -->
      <div class="tab-content active" data-tab="fl-tabs" data-tabname="overview">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="data-card h-100">
              <div class="card-header"><h5>Personal & Professional Profile</h5></div>
              <div class="card-body p-3">
                <div class="detail-row"><span class="label">Full Name</span><span class="value">${fl.name}</span></div>
                <div class="detail-row"><span class="label">Email</span><span class="value">${fl.email}</span></div>
                <div class="detail-row"><span class="label">Phone</span><span class="value">${fl.phone}</span></div>
                <div class="detail-row"><span class="label">Designation</span><span class="value">${fl.designation}</span></div>
                <div class="detail-row"><span class="label">Skills</span><span class="value">${fl.skills}</span></div>
                <div class="detail-row"><span class="label">Specialization</span><span class="value">${fl.specialization}</span></div>
                <div class="detail-row"><span class="label">Working Hours</span><span class="value">${fl.workingHours}</span></div>
                <div class="detail-row"><span class="label">Working Days</span><span class="value">${fl.workingDays}</span></div>
                <div class="detail-row"><span class="label">Default Rate</span><span class="value">${formatINR(fl.rate)} / hour</span></div>
                <div class="detail-row"><span class="label">Est. Payroll</span><span class="value">${fl.payroll} / month</span></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="data-card h-100">
              <div class="card-header"><h5>Work Allocation Summary</h5></div>
              <div class="card-body p-3">
                <div class="detail-row"><span class="label">Active Projects</span><span class="value">${assignedPrjs.length} assigned</span></div>
                <div class="detail-row"><span class="label">Completed Projects</span><span class="value">${fl.completedProjects} projects</span></div>
                <div class="detail-row"><span class="label">Pending Tasks</span><span class="value">${flTasks.filter(t=>t.status!=='Completed').length} tasks</span></div>
                <div class="detail-row"><span class="label">Completed Tasks</span><span class="value">${flTasks.filter(t=>t.status==='Completed').length} tasks</span></div>
                <div class="detail-row"><span class="label">Pending Payments</span><span class="value">${formatINR(85000)}</span></div>
                <div class="detail-row"><span class="label">Invitation Status</span><span class="value badge badge-success">${fl.invitationStatus}</span></div>
                <div class="mt-3">
                  <div class="font-12 fw-600 mb-1">Assigned Projects:</div>
                  <div class="d-flex flex-wrap gap-1">
                    ${assignedPrjs.map(p => `<span class="badge badge-primary" style="cursor:pointer;" onclick="navigate('freelancer-project-workspace',{id:'${p.id}'})">${p.name}</span>`).join('') || '<span class="text-secondary font-12">None currently assigned</span>'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: PROJECTS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="projects">
        <div class="data-card">
          <div class="card-header">
            <h5>Assigned Projects</h5>
            <button class="btn btn-sm btn-primary" onclick="showAssignProjectModal('${fl.id}')"><i class="bx bx-plus"></i> Assign New Project</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Project</th><th>Client</th><th>Start Date</th><th>Progress</th><th>Terms</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  ${assignedPrjs.map(p => `
                    <tr>
                      <td><strong>${p.name}</strong><div class="font-11 text-secondary">${p.code}</div></td>
                      <td>${p.client}</td>
                      <td>${p.startDate}</td>
                      <td>
                        <div class="d-flex justify-content-between font-11 mb-1"><span>${p.progress}%</span></div>
                        <div class="progress-bar-custom"><div class="fill" style="width:${p.progress}%;background:var(--primary);"></div></div>
                      </td>
                      <td><span class="badge badge-success">Accepted (v${p.termsVersion})</span></td>
                      <td>${getStatusBadge(p.status)}</td>
                      <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="navigate('freelancer-project-workspace',{id:'${p.id}'})"><i class="bx bx-desktop"></i> Workspace</button>
                      </td>
                    </tr>
                  `).join('') || '<tr><td colspan="7" class="text-center text-secondary py-3">No active project assignments.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: TASKS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="tasks">
        <div class="data-card">
          <div class="card-header">
            <h5>Assigned Tasks</h5>
            <button class="btn btn-sm btn-primary" onclick="showCreateTaskModal('', '${fl.id}')"><i class="bx bx-plus"></i> Assign Task</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Task ID</th><th>Task</th><th>Project</th><th>Priority</th><th>Due Date</th><th>Progress</th><th>Hours</th><th>Status</th></tr></thead>
                <tbody>
                  ${flTasks.map(t => `
                    <tr>
                      <td><strong>${t.id}</strong></td>
                      <td><div class="fw-600">${t.task}</div><div class="font-11 text-secondary">${t.description}</div></td>
                      <td>${t.projectId}</td>
                      <td>${getPriorityBadge(t.priority)}</td>
                      <td>${t.dueDate}</td>
                      <td style="width:120px;">
                        <div class="font-11 mb-1">${t.progress}%</div>
                        <div class="progress-bar-custom"><div class="fill" style="width:${t.progress}%;background:var(--primary);"></div></div>
                      </td>
                      <td>${t.loggedHours} / ${t.estimatedHours} hrs</td>
                      <td>${getStatusBadge(t.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="8" class="text-center text-secondary py-3">No tasks assigned.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: TIME -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="time">
        <div class="data-card">
          <div class="card-header"><h5>Logged Work Time Entries</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Date</th><th>Project</th><th>Task</th><th>Duration</th><th>Description</th><th>Status</th></tr></thead>
                <tbody>
                  ${flTime.map(te => `
                    <tr>
                      <td>${te.date}</td>
                      <td>${te.projectName}</td>
                      <td>${te.taskName}</td>
                      <td><strong>${te.duration}</strong></td>
                      <td>${te.description}</td>
                      <td>${getStatusBadge(te.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No time entries recorded.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 5: DAILY UPDATES -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="daily-updates">
        <div class="data-card">
          <div class="card-header"><h5>Operational Daily Work Updates</h5></div>
          <div class="card-body p-3">
            ${flUpdates.map(u => `
              <div class="p-3 border rounded mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div><strong>${u.date}</strong> — ${u.projectName} &bull; <span class="text-primary fw-600">${u.taskName}</span></div>
                  <div><span class="badge badge-primary">${u.hoursWorked}</span> ${getStatusBadge(u.status)}</div>
                </div>
                <div class="row font-12 mb-2">
                  <div class="col-md-4"><strong>Completed:</strong> <div class="text-secondary">${u.completedWork}</div></div>
                  <div class="col-md-4"><strong>In Progress:</strong> <div class="text-secondary">${u.inProgressWork}</div></div>
                  <div class="col-md-4"><strong>Blockers:</strong> <div class="text-secondary">${u.blockers}</div></div>
                </div>
                <div class="p-2 bg-light rounded font-12 mt-2">
                  <strong>Admin Feedback:</strong> <em>${u.adminComment || 'Reviewed by admin.'}</em>
                </div>
              </div>
            `).join('') || '<div class="text-center text-secondary py-3">No daily work updates submitted yet.</div>'}
          </div>
        </div>
      </div>

      <!-- TAB 6: REPORTS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="reports">
        <div class="data-card">
          <div class="card-header"><h5>Formal Compliance Daily Reports</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Report ID</th><th>Date</th><th>Project</th><th>Completed Tasks</th><th>Hours</th><th>Submitted On</th><th>Status</th></tr></thead>
                <tbody>
                  ${flReports.map(r => `
                    <tr>
                      <td><strong>${r.id}</strong></td>
                      <td>${r.date}</td>
                      <td>${r.projectName}</td>
                      <td>${r.completedTasks}</td>
                      <td>${r.hours}</td>
                      <td>${r.submittedDate}</td>
                      <td>${getStatusBadge(r.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="7" class="text-center text-secondary py-3">No formal daily reports.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 7: DELIVERABLES -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="deliverables">
        <div class="data-card">
          <div class="card-header"><h5>Submitted Deliverables</h5></div>
          <div class="card-body p-3">
            ${flDeliverables.map(d => `
              <div class="review-card">
                <div class="review-header">
                  <div>
                    <h6 style="margin:0 0 4px;font-size:14px;font-weight:700;">${d.name} <span class="badge badge-secondary">${d.version}</span></h6>
                    <div class="font-11 text-secondary">${d.projectName} • Submitted: ${d.submissionDate} • Size: ${d.fileSize}</div>
                  </div>
                  <div>${getStatusBadge(d.status)}</div>
                </div>
                <div class="font-12 text-secondary mb-2">${d.description}</div>
                <div class="font-12 p-2 bg-light rounded mb-2"><strong>Reviewer Feedback:</strong> ${d.reviewerComments}</div>
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading deliverable ${d.fileUrl}...','info')"><i class="bx bx-download"></i> Download</button>
                  <button class="btn btn-sm btn-primary" onclick="showReviewDeliverableModal('${d.id}')"><i class="bx bx-check-shield"></i> Review / Approve</button>
                </div>
              </div>
            `).join('') || '<div class="text-center text-secondary py-3">No deliverables submitted yet.</div>'}
          </div>
        </div>
      </div>

      <!-- TAB 8: ISSUES -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="issues">
        <div class="data-card">
          <div class="card-header"><h5>Assigned Bugs & Issues</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>ID</th><th>Title</th><th>Project</th><th>Priority</th><th>Severity</th><th>Status</th></tr></thead>
                <tbody>
                  ${flIssues.map(i => `
                    <tr>
                      <td><strong>${i.id}</strong></td>
                      <td>${i.title}</td>
                      <td>${i.projectName}</td>
                      <td>${getPriorityBadge(i.priority)}</td>
                      <td><span class="badge badge-danger">${i.severity}</span></td>
                      <td>${getStatusBadge(i.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No issues assigned to this freelancer.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 9: CHANGE REQUESTS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="change-requests">
        <div class="data-card">
          <div class="card-header"><h5>Change Requests</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>CR Number</th><th>Project</th><th>Title</th><th>Effort</th><th>Date</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  ${flCRs.map(c => `
                    <tr>
                      <td><strong>${c.crNumber}</strong></td>
                      <td>${c.projectName}</td>
                      <td>${c.title}</td>
                      <td>${c.estimatedEffort}</td>
                      <td>${c.date}</td>
                      <td>${getStatusBadge(c.status)}</td>
                      <td><button class="btn btn-sm btn-outline-primary" onclick="showReviewChangeRequestModal('${c.id}')"><i class="bx bx-check-shield"></i> Review</button></td>
                    </tr>
                  `).join('') || '<tr><td colspan="7" class="text-center text-secondary py-3">No change requests submitted.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 10: PAYMENTS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="payments">
        <div class="data-card">
          <div class="card-header">
            <h5>Payment History & Milestones</h5>
            <button class="btn btn-sm btn-primary" onclick="showRecordPaymentModal('', '${fl.id}')"><i class="bx bx-plus"></i> Record Payment</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Reference</th><th>Project</th><th>Period / Milestone</th><th>Amount</th><th>Payment Date</th><th>Status</th></tr></thead>
                <tbody>
                  ${flPayments.map(p => `
                    <tr>
                      <td><strong>${p.reference}</strong></td>
                      <td>${p.project}</td>
                      <td>${p.period}</td>
                      <td><strong class="text-primary">${formatINR(p.amount)}</strong></td>
                      <td>${p.paymentDate}</td>
                      <td>${getStatusBadge(p.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No payments recorded.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 11: DOCUMENTS -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="documents">
        <div class="data-card">
          <div class="card-header">
            <h5>Documents & Contracts</h5>
            <button class="btn btn-sm btn-primary" onclick="showUploadDocumentModal()"><i class="bx bx-upload"></i> Upload</button>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-md-6 mb-2">
                <div class="p-3 border rounded d-flex align-items-center justify-content-between">
                  <div>
                    <div class="fw-600 font-13"><i class="bx bx-file text-primary"></i> Master Freelance Service Agreement</div>
                    <div class="font-11 text-secondary">Signed 02 Aug 2026 • 1.8 MB</div>
                  </div>
                  <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading contract...','info')"><i class="bx bx-download"></i></button>
                </div>
              </div>
              <div class="col-md-6 mb-2">
                <div class="p-3 border rounded d-flex align-items-center justify-content-between">
                  <div>
                    <div class="fw-600 font-13"><i class="bx bx-lock-alt text-success"></i> Signed NDA & Security Undertaking</div>
                    <div class="font-11 text-secondary">Verified • 850 KB</div>
                  </div>
                  <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading NDA...','info')"><i class="bx bx-download"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 12: ACTIVITY -->
      <div class="tab-content" data-tab="fl-tabs" data-tabname="activity">
        <div class="data-card">
          <div class="card-header"><h5>Activity Log for ${fl.name}</h5></div>
          <div class="card-body p-3">
            <ul class="activity-list">
              <li>
                <div class="activity-icon bg-light-primary text-primary"><i class="bx bx-edit"></i></div>
                <div class="activity-text">
                  <h6>Daily Work Update Submitted</h6>
                  <p>Logged 6.5 hours on <strong>Payment Gateway Integration & Webhooks</strong>.</p>
                </div>
                <span class="activity-time">Today 17:15</span>
              </li>
              <li>
                <div class="activity-icon bg-light-success text-success"><i class="bx bx-package"></i></div>
                <div class="activity-text">
                  <h6>Deliverable Uploaded (v1.2)</h6>
                  <p>Uploaded Payment Webhook Security Specification to ERP Modernization.</p>
                </div>
                <span class="activity-time">Yesterday</span>
              </li>
              <li>
                <div class="activity-icon bg-light-warning text-warning"><i class="bx bx-git-pull-request"></i></div>
                <div class="activity-text">
                  <h6>Change Request CR-2026-001 Raised</h6>
                  <p>Requested Dynamic UPI QR Code integration.</p>
                </div>
                <span class="activity-time">3 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 7. RENDERERS: FREELANCER PROJECTS & PROJECT WORKSPACE (Requirements 10 & 35 & 36)
  // ============================================================================

  function renderFreelancerProjects() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Freelancer Projects</h4>
          <div class="font-13 text-secondary">Authorized ERP client projects with external freelancer & team allocation.</div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary" onclick="showNotification('Exporting project status...', 'info')"><i class="bx bx-download"></i> Export</button>
          <button class="btn btn-primary" onclick="showAssignProjectModal()"><i class="bx bx-briefcase-alt"></i> Assign New Project</button>
        </div>
      </div>

      <div class="data-card">
        <div class="card-header">
          <div class="filter-bar w-100" style="margin-bottom:0;">
            <div class="filter-group">
              <input type="text" class="form-control" placeholder="Search project name, code, client..." style="width:240px;padding:0.4rem 0.7rem;font-size:13px;" oninput="searchTable(this, 'fl-prj-tbody')">
              <select class="form-control" style="width:140px;padding:0.4rem;font-size:13px;" onchange="filterProjectStatus(this.value)">
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending Freelancer Acceptance">Pending Terms</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div class="font-12 text-secondary">Showing <strong>${MOCK.freelancerProjects.length}</strong> Projects</div>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Freelancers</th>
                  <th>Timeline</th>
                  <th>Progress</th>
                  <th>Tasks</th>
                  <th>Terms</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="fl-prj-tbody">`;

    MOCK.freelancerProjects.forEach(p => {
      html += `
        <tr data-status="${p.status}">
          <td>
            <a href="javascript:void(0)" onclick="navigate('freelancer-project-workspace', {id:'${p.id}'})" style="font-weight:600;font-size:14px;color:var(--primary);">${p.name}</a>
            <div class="font-11 text-secondary">${p.code} • PM: ${p.pm}</div>
          </td>
          <td>${p.client}</td>
          <td><span class="badge badge-primary">${p.freelancerCount} Freelancers</span></td>
          <td class="font-11 text-secondary">${p.startDate}<br>to ${p.endDate}</td>
          <td style="width:130px;">
            <div class="d-flex justify-content-between font-11 mb-1"><span>${p.progress}%</span></div>
            <div class="progress-bar-custom"><div class="fill" style="width:${p.progress}%;background:var(--primary);"></div></div>
          </td>
          <td><span class="badge badge-warning">${p.pendingTasks} Pending</span></td>
          <td><span class="badge badge-success">${p.termsStatus}</span></td>
          <td>
            <div class="font-12 fw-600">${formatINR(p.budget)}</div>
            <div class="font-11 text-success">Paid: ${formatINR(p.paid)}</div>
          </td>
          <td>${getStatusBadge(p.status)}</td>
          <td>
            <button class="btn btn-sm btn-primary" onclick="navigate('freelancer-project-workspace', {id:'${p.id}'})" title="Open Workspace"><i class="bx bx-desktop"></i> Workspace</button>
          </td>
        </tr>`;
    });

    html += `
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // PROJECT WORKSPACE (15 TABS: Requirement 36)
  function renderProjectWorkspace() {
    const id = window._params?.id || (MOCK.freelancerProjects[0] ? MOCK.freelancerProjects[0].id : '');
    const p = MOCK.freelancerProjects.find(x => x.id === id) || MOCK.freelancerProjects[0];

    if (!p) {
      return `<div class="empty-state"><i class="bx bx-folder-x"></i><p>Project not found</p><button class="btn btn-primary" onclick="navigate('freelancer-projects')">Back to Projects</button></div>`;
    }

    const team = MOCK.freelancerTeam.filter(t => t.projectId === p.id);
    const tasks = MOCK.freelancerTasks.filter(t => t.projectId === p.id);
    const timeEntries = MOCK.timeEntries.filter(t => t.projectId === p.id);
    const msgs = MOCK.freelancerMessages[p.id] || [];
    const meetings = MOCK.freelancerMeetings.filter(m => m.projectId === p.id);
    const docs = MOCK.freelancerDocuments.filter(d => d.projectId === p.id);
    const issues = MOCK.freelancerIssues.filter(i => i.projectId === p.id);
    const crs = MOCK.changeRequests.filter(c => c.projectId === p.id);
    const deliverables = MOCK.deliverables.filter(d => d.projectId === p.id);
    const deploys = MOCK.deployments.filter(d => d.projectId === p.id);
    const reports = MOCK.dailyReports.filter(r => r.projectId === p.id);
    const payments = MOCK.freelancerPayments.filter(pay => pay.projectId === p.id);
    const terms = MOCK.termsHistory[p.id] || [
      {
        version: '1.0',
        publishedDate: p.startDate,
        scope: p.description,
        responsibilities: 'Core module delivery and milestone acceptance.',
        timeline: `${p.startDate} to ${p.endDate}`,
        paymentRules: 'Milestone disbursements upon sign-off.',
        status: p.termsStatus,
        acceptedBy: 'Assigned Freelancers',
        acceptedOn: p.startDate
      }
    ];

    let html = `
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-primary btn-sm" onclick="navigate('freelancer-projects')"><i class="bx bx-arrow-back"></i> Back</button>
          <h4 style="margin:0;font-size:20px;font-weight:700;">${p.name}</h4>
          <span class="badge badge-secondary">${p.code}</span>
          ${getStatusBadge(p.status)}
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-sm btn-outline-primary" onclick="showAddTeamMemberModal('${p.id}')"><i class="bx bx-user-plus"></i> Add Team</button>
          <button class="btn btn-sm btn-primary" onclick="showCreateTaskModal('${p.id}')"><i class="bx bx-plus"></i> Add Task</button>
        </div>
      </div>

      <!-- Project Summary Banner -->
      <div class="data-card mb-3 p-3">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="font-13 text-secondary mb-1">Client: <strong>${p.client}</strong> (Contact: ${p.clientPerson} • ${p.clientEmail})</div>
            <div class="font-13 text-secondary mb-2">Project Manager: <strong>${p.pm}</strong> • Priority: ${getPriorityBadge(p.priority)}</div>
            <div class="font-12 text-secondary">${p.description}</div>
          </div>
          <div class="col-lg-5 border-start ps-3">
            <div class="row text-center">
              <div class="col-6 col-md-3 mb-2">
                <div class="font-18 fw-700 text-primary">${p.progress}%</div>
                <div class="font-11 text-secondary">Overall Progress</div>
              </div>
              <div class="col-6 col-md-3 mb-2">
                <div class="font-18 fw-700 text-success">${p.taskCompletion}%</div>
                <div class="font-11 text-secondary">Tasks Done</div>
              </div>
              <div class="col-6 col-md-3 mb-2">
                <div class="font-18 fw-700 text-warning">${p.loggedHours}</div>
                <div class="font-11 text-secondary">Logged Hours</div>
              </div>
              <div class="col-6 col-md-3 mb-2">
                <div class="font-18 fw-700 text-info">${p.reportCompletion}%</div>
                <div class="font-11 text-secondary">Reports Rate</div>
              </div>
            </div>
            <div class="progress-bar-custom mt-2"><div class="fill" style="width:${p.progress}%;background:var(--primary);"></div></div>
          </div>
        </div>
      </div>

      <!-- 15 TABS (Requirements 10 & 36) -->
      <div class="tab-nav" data-tabgroup="prj-tabs">
        <button class="active" onclick="switchTab('prj-tabs','overview')">Overview</button>
        <button onclick="switchTab('prj-tabs','terms')">Terms & Conditions</button>
        <button onclick="switchTab('prj-tabs','team')">Team (${team.length})</button>
        <button onclick="switchTab('prj-tabs','tasks')">Tasks (${tasks.length})</button>
        <button onclick="switchTab('prj-tabs','time')">Time Tracker</button>
        <button onclick="switchTab('prj-tabs','messages')">Messages (${msgs.length})</button>
        <button onclick="switchTab('prj-tabs','meetings')">Meetings (${meetings.length})</button>
        <button onclick="switchTab('prj-tabs','files')">Files & Docs (${docs.length})</button>
        <button onclick="switchTab('prj-tabs','issues')">Issues (${issues.length})</button>
        <button onclick="switchTab('prj-tabs','change-requests')">Change Requests (${crs.length})</button>
        <button onclick="switchTab('prj-tabs','deliverables')">Deliverables (${deliverables.length})</button>
        <button onclick="switchTab('prj-tabs','deployments')">Deployments (${deploys.length})</button>
        <button onclick="switchTab('prj-tabs','daily-reports')">Daily Reports (${reports.length})</button>
        <button onclick="switchTab('prj-tabs','finance')">Finance & Payments</button>
        <button onclick="switchTab('prj-tabs','activity')">Activity</button>
      </div>

      <!-- TAB 1: OVERVIEW -->
      <div class="tab-content active" data-tab="prj-tabs" data-tabname="overview">
        <div class="row">
          <div class="col-lg-6 mb-3">
            <div class="data-card h-100">
              <div class="card-header"><h5>Project Specifications</h5></div>
              <div class="card-body p-3">
                <div class="detail-row"><span class="label">Project Code</span><span class="value">${p.code}</span></div>
                <div class="detail-row"><span class="label">Client Organization</span><span class="value">${p.client}</span></div>
                <div class="detail-row"><span class="label">Start Date</span><span class="value">${p.startDate}</span></div>
                <div class="detail-row"><span class="label">Target End Date</span><span class="value">${p.endDate}</span></div>
                <div class="detail-row"><span class="label">Status</span><span class="value">${getStatusBadge(p.status)}</span></div>
                <div class="detail-row"><span class="label">Total Budget</span><span class="value">${formatINR(p.budget)}</span></div>
                <div class="detail-row"><span class="label">Disbursed</span><span class="value text-success">${formatINR(p.paid)}</span></div>
                <div class="detail-row"><span class="label">Pending Payment</span><span class="value text-warning">${formatINR(p.pendingPayment)}</span></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-3">
            <div class="data-card h-100">
              <div class="card-header"><h5>Assigned Freelancer Leads</h5></div>
              <div class="card-body p-3">
                ${(p.assignedFreelancers || []).map(flId => {
                  const f = MOCK.freelancers.find(x => x.id === flId);
                  if (!f) return '';
                  return `
                    <div class="d-flex align-items-center justify-content-between p-2 border rounded mb-2">
                      <div class="d-flex align-items-center gap-2">
                        <div class="user-avatar" style="width:34px;height:34px;font-size:13px;">${f.firstName.charAt(0)}</div>
                        <div>
                          <a href="javascript:void(0)" onclick="navigate('freelancer-detail',{id:'${f.id}'})" class="fw-600 font-13">${f.name}</a>
                          <div class="font-11 text-secondary">${f.designation}</div>
                        </div>
                      </div>
                      ${getStatusBadge(f.availability)}
                    </div>`;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: TERMS & CONDITIONS (Requirement 12) -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="terms">
        <div class="data-card">
          <div class="card-header">
            <h5>Terms & Conditions (Governance Version History)</h5>
            <span class="badge badge-primary">Version ${p.termsVersion || '1.0'} Active</span>
          </div>
          <div class="card-body p-3">
            ${terms.map(t => `
              <div class="p-3 border rounded mb-3" style="background:#fff;">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <div><strong style="font-size:15px;">Version ${t.version}</strong> <span class="font-11 text-secondary">(Published: ${t.publishedDate})</span></div>
                  <div>${getStatusBadge(t.status)}</div>
                </div>
                <div class="font-13 mb-1"><strong>Scope:</strong> ${t.scope}</div>
                <div class="font-13 mb-1"><strong>Responsibilities:</strong> ${t.responsibilities}</div>
                <div class="font-13 mb-1"><strong>Timeline:</strong> ${t.timeline}</div>
                <div class="font-13 mb-2"><strong>Payment Rules:</strong> ${t.paymentRules}</div>
                <div class="p-2 bg-light rounded font-12 text-secondary">
                  <i class="bx bx-check-shield text-success"></i> Accepted by: <strong>${t.acceptedBy}</strong> on <em>${t.acceptedOn}</em>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- TAB 3: TEAM (Requirements 35 & 36) -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="team">
        <div class="data-card">
          <div class="card-header">
            <div>
              <h5 style="margin:0;">Project Team Allocation</h5>
              <div class="font-12 text-secondary">Freelancer Teammates, Company Interns & Company Trainees (Project-scoped permissions)</div>
            </div>
            <button class="btn btn-sm btn-primary" onclick="showAddTeamMemberModal('${p.id}')"><i class="bx bx-user-plus"></i> Add Team Member</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Member Name</th>
                    <th>Type</th>
                    <th>Role</th>
                    <th>Assigned By</th>
                    <th>Allocated Tasks</th>
                    <th>Availability</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${team.map(m => {
                    let typeBadge = '<span class="badge badge-teammate">Freelancer Teammate</span>';
                    if (m.type === 'Company Intern') typeBadge = '<span class="badge badge-intern">Company Intern</span>';
                    if (m.type === 'Company Trainee') typeBadge = '<span class="badge badge-trainee">Company Trainee</span>';
                    return `
                      <tr>
                        <td>
                          <strong>${m.name}</strong>
                          <div class="font-11 text-secondary">${m.email || ''}</div>
                        </td>
                        <td>${typeBadge}</td>
                        <td class="font-12 fw-600">${m.role}</td>
                        <td class="font-12 text-secondary">${m.assignedBy}</td>
                        <td class="font-12" style="max-width:220px;">${m.tasks}</td>
                        <td>${getStatusBadge(m.availability)}</td>
                        <td><span class="badge badge-success">${m.status}</span></td>
                        <td>
                          <button class="btn btn-sm btn-outline-danger" onclick="removeTeamMember('${m.id}','${p.id}')" title="Remove"><i class="bx bx-trash"></i></button>
                        </td>
                      </tr>`;
                  }).join('') || '<tr><td colspan="8" class="text-center text-secondary py-3">No team members allocated.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 4: TASKS -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="tasks">
        <div class="data-card">
          <div class="card-header">
            <h5>Project Tasks</h5>
            <button class="btn btn-sm btn-primary" onclick="showCreateTaskModal('${p.id}')"><i class="bx bx-plus"></i> Add Task</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Task ID</th><th>Task</th><th>Assignee</th><th>Priority</th><th>Due Date</th><th>Progress</th><th>Hours</th><th>Status</th></tr></thead>
                <tbody>
                  ${tasks.map(t => `
                    <tr>
                      <td><strong>${t.id}</strong></td>
                      <td><strong>${t.task}</strong></td>
                      <td>${t.freelancerName}</td>
                      <td>${getPriorityBadge(t.priority)}</td>
                      <td>${t.dueDate}</td>
                      <td style="width:120px;">
                        <div class="font-11 mb-1">${t.progress}%</div>
                        <div class="progress-bar-custom"><div class="fill" style="width:${t.progress}%;background:var(--primary);"></div></div>
                      </td>
                      <td>${t.loggedHours} / ${t.estimatedHours} hrs</td>
                      <td>${getStatusBadge(t.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="8" class="text-center text-secondary py-3">No tasks found.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 5: TIME -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="time">
        <div class="data-card">
          <div class="card-header"><h5>Logged Time on ${p.name}</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Date</th><th>Freelancer</th><th>Task</th><th>Duration</th><th>Description</th><th>Status</th></tr></thead>
                <tbody>
                  ${timeEntries.map(te => `
                    <tr>
                      <td>${te.date}</td>
                      <td>${te.freelancerName}</td>
                      <td>${te.taskName}</td>
                      <td><strong>${te.duration}</strong></td>
                      <td>${te.description}</td>
                      <td>${getStatusBadge(te.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No time entries.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 6: MESSAGES -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="messages">
        <div class="chat-container">
          <div class="chat-main w-100">
            <div class="chat-main-header">
              <div><strong>${p.name}</strong> Channel</div>
              <span class="badge badge-primary">${msgs.length} messages</span>
            </div>
            <div class="chat-messages-area" id="prj-chat-thread-${p.id}">
              ${msgs.map(m => `
                <div class="chat-bubble ${m.role === 'admin' ? 'sent' : 'received'}">
                  <div style="font-weight:700;font-size:11px;margin-bottom:2px;">${m.sender}</div>
                  <div>${m.text}</div>
                  <div class="chat-bubble-meta">${m.time}</div>
                </div>
              `).join('')}
            </div>
            <div class="chat-input-bar">
              <input type="text" id="prj-chat-input-${p.id}" class="form-control" placeholder="Type a message to project team...">
              <button class="btn btn-primary" onclick="sendProjectMessage('${p.id}')"><i class="bx bx-send"></i> Send</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 7: MEETINGS -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="meetings">
        <div class="data-card">
          <div class="card-header">
            <h5>Project Sync Meetings</h5>
            <button class="btn btn-sm btn-primary" onclick="showScheduleMeetingModal('${p.id}')"><i class="bx bx-video"></i> Schedule Meeting</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Meeting</th><th>Date & Time</th><th>Duration</th><th>Participants</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  ${meetings.map(m => `
                    <tr>
                      <td><strong>${m.title}</strong><div class="font-11 text-secondary">${m.location}</div></td>
                      <td>${m.date} at ${m.time}</td>
                      <td>${m.duration}</td>
                      <td class="font-12" style="max-width:220px;">${m.participants}</td>
                      <td>${getStatusBadge(m.status)}</td>
                      <td><button class="btn btn-sm btn-outline-primary" onclick="showNotification('Opening ${m.location}...','info')">Join</button></td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No meetings scheduled for this project.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 8: FILES -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="files">
        <div class="data-card">
          <div class="card-header">
            <h5>Project Documents & Specifications</h5>
            <button class="btn btn-sm btn-primary" onclick="showUploadDocumentModal('${p.id}')"><i class="bx bx-upload"></i> Upload File</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>File Name</th><th>Category</th><th>Uploaded By</th><th>Date</th><th>Size</th><th>Actions</th></tr></thead>
                <tbody>
                  ${docs.map(d => `
                    <tr>
                      <td><strong><i class="bx bx-file text-primary"></i> ${d.name}</strong></td>
                      <td><span class="badge badge-secondary">${d.category}</span></td>
                      <td>${d.uploadedBy}</td>
                      <td>${d.date}</td>
                      <td>${d.size}</td>
                      <td>
                        <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading ${d.name}...','info')"><i class="bx bx-download"></i> Download</button>
                      </td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No documents uploaded.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 9: ISSUES -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="issues">
        <div class="data-card">
          <div class="card-header">
            <h5>Project Bugs & Issues</h5>
            <button class="btn btn-sm btn-primary" onclick="showReportIssueModal('${p.id}')"><i class="bx bx-plus"></i> Report Issue</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Issue ID</th><th>Title</th><th>Assignee</th><th>Priority</th><th>Severity</th><th>Status</th></tr></thead>
                <tbody>
                  ${issues.map(i => `
                    <tr>
                      <td><strong>${i.id}</strong></td>
                      <td>${i.title}</td>
                      <td>${i.assignee}</td>
                      <td>${getPriorityBadge(i.priority)}</td>
                      <td><span class="badge badge-danger">${i.severity}</span></td>
                      <td>${getStatusBadge(i.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No open issues for this project.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 10: CHANGE REQUESTS -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="change-requests">
        <div class="data-card">
          <div class="card-header"><h5>Project Change Requests</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>CR Number</th><th>Title</th><th>Effort</th><th>Submitted By</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  ${crs.map(c => `
                    <tr>
                      <td><strong>${c.crNumber}</strong></td>
                      <td>${c.title}</td>
                      <td>${c.estimatedEffort}</td>
                      <td>${c.submittedBy}</td>
                      <td>${getStatusBadge(c.status)}</td>
                      <td><button class="btn btn-sm btn-outline-primary" onclick="showReviewChangeRequestModal('${c.id}')">Review</button></td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No change requests on this project.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 11: DELIVERABLES -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="deliverables">
        <div class="data-card">
          <div class="card-header"><h5>Milestone Deliverables</h5></div>
          <div class="card-body p-3">
            ${deliverables.map(d => `
              <div class="review-card">
                <div class="review-header">
                  <div>
                    <h6 style="margin:0 0 4px;font-size:14px;font-weight:700;">${d.name} <span class="badge badge-secondary">${d.version}</span></h6>
                    <div class="font-11 text-secondary">Submitted: ${d.submissionDate} by ${d.submittedBy}</div>
                  </div>
                  <div>${getStatusBadge(d.status)}</div>
                </div>
                <div class="font-12 text-secondary mb-2">${d.description}</div>
                <div class="p-2 bg-light rounded font-12 mb-2"><strong>Reviewer Comments:</strong> ${d.reviewerComments}</div>
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading ${d.fileUrl}...','info')"><i class="bx bx-download"></i> Download</button>
                  <button class="btn btn-sm btn-primary" onclick="showReviewDeliverableModal('${d.id}')"><i class="bx bx-check-shield"></i> Review / Approve</button>
                </div>
              </div>
            `).join('') || '<div class="text-center text-secondary py-3">No deliverables submitted yet.</div>'}
          </div>
        </div>
      </div>

      <!-- TAB 12: DEPLOYMENTS -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="deployments">
        <div class="data-card">
          <div class="card-header">
            <h5>Environment Deployments</h5>
            <button class="btn btn-sm btn-primary" onclick="showRecordDeploymentModal('${p.id}')"><i class="bx bx-cloud-upload"></i> Record Deployment</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Environment</th><th>Version/Build</th><th>Deployed Date</th><th>Deployed By</th><th>Status</th><th>Release Notes</th></tr></thead>
                <tbody>
                  ${deploys.map(dp => `
                    <tr>
                      <td><span class="badge badge-primary">${dp.environment}</span></td>
                      <td><strong>${dp.version}</strong></td>
                      <td>${dp.deploymentDate}</td>
                      <td>${dp.deployedBy}</td>
                      <td>${getStatusBadge(dp.status)}</td>
                      <td class="font-12" style="max-width:280px;">${dp.releaseNotes}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No deployments recorded.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 13: DAILY REPORTS -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="daily-reports">
        <div class="data-card">
          <div class="card-header"><h5>Formal Daily Reports</h5></div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Report ID</th><th>Date</th><th>Freelancer</th><th>Completed Tasks</th><th>Hours</th><th>Status</th></tr></thead>
                <tbody>
                  ${reports.map(r => `
                    <tr>
                      <td><strong>${r.id}</strong></td>
                      <td>${r.date}</td>
                      <td>${r.freelancerName}</td>
                      <td>${r.completedTasks}</td>
                      <td>${r.hours}</td>
                      <td>${getStatusBadge(r.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="6" class="text-center text-secondary py-3">No formal daily reports.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 14: FINANCE -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="finance">
        <div class="data-card">
          <div class="card-header">
            <h5>Project Financial Disbursements</h5>
            <button class="btn btn-sm btn-primary" onclick="showRecordPaymentModal('${p.id}')"><i class="bx bx-plus"></i> Record Payment</button>
          </div>
          <div class="card-body">
            <div class="overflow-x">
              <table class="data-table">
                <thead><tr><th>Reference</th><th>Freelancer</th><th>Period</th><th>Amount</th><th>Status</th></tr></thead>
                <tbody>
                  ${payments.map(pay => `
                    <tr>
                      <td><strong>${pay.reference}</strong></td>
                      <td>${pay.freelancer}</td>
                      <td>${pay.period}</td>
                      <td><strong class="text-primary">${formatINR(pay.amount)}</strong></td>
                      <td>${getStatusBadge(pay.status)}</td>
                    </tr>
                  `).join('') || '<tr><td colspan="5" class="text-center text-secondary py-3">No financial records on this project.</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 15: ACTIVITY -->
      <div class="tab-content" data-tab="prj-tabs" data-tabname="activity">
        <div class="data-card">
          <div class="card-header"><h5>Project Activity Log</h5></div>
          <div class="card-body p-3">
            <ul class="activity-list">
              <li>
                <div class="activity-icon bg-light-primary text-primary"><i class="bx bx-cloud-upload"></i></div>
                <div class="activity-text">
                  <h6>Deployment Successful</h6>
                  <p>Build deployed to Staging environment by Ragupathi.</p>
                </div>
                <span class="activity-time">Yesterday</span>
              </li>
              <li>
                <div class="activity-icon bg-light-success text-success"><i class="bx bx-check-circle"></i></div>
                <div class="activity-text">
                  <h6>Milestone 1 Payment Approved</h6>
                  <p>₹85,000 disbursement marked as Paid.</p>
                </div>
                <span class="activity-time">3 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 8. RENDERERS: TASKS MANAGEMENT (Requirement 13)
  // ============================================================================

  function renderFreelancerTasks() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Freelancer Tasks</h4>
          <div class="font-13 text-secondary">Assign, reassign, track progress, and review logged hours across all projects.</div>
        </div>
        <button class="btn btn-primary" onclick="showCreateTaskModal()"><i class="bx bx-plus"></i> Create & Assign Task</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <div class="filter-bar w-100" style="margin-bottom:0;">
            <div class="filter-group">
              <input type="text" class="form-control" placeholder="Search task, project, assignee..." style="width:240px;padding:0.4rem 0.7rem;font-size:13px;" oninput="searchTable(this, 'tasks-tbody')">
              <select class="form-control" style="width:140px;padding:0.4rem;font-size:13px;" onchange="filterTaskStatus(this.value)">
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Blocked">Blocked</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div class="font-12 text-secondary">Showing <strong>${MOCK.freelancerTasks.length}</strong> Tasks</div>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Task ID</th>
                  <th>Task Name</th>
                  <th>Project</th>
                  <th>Assigned Freelancer</th>
                  <th>Priority</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Progress</th>
                  <th>Logged Hours</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="tasks-tbody">`;

    MOCK.freelancerTasks.forEach(t => {
      html += `
        <tr data-status="${t.status}">
          <td><strong>${t.id}</strong></td>
          <td>
            <div class="fw-600">${t.task}</div>
            <div class="font-11 text-secondary" style="max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${t.description}</div>
          </td>
          <td>${t.projectId}</td>
          <td>
            <div class="fw-600">${t.freelancerName}</div>
          </td>
          <td>${getPriorityBadge(t.priority)}</td>
          <td>${t.startDate}</td>
          <td>${t.dueDate}</td>
          <td style="width:120px;">
            <div class="d-flex justify-content-between font-11 mb-1"><span>${t.progress}%</span></div>
            <div class="progress-bar-custom"><div class="fill" style="width:${t.progress}%;background:var(--primary);"></div></div>
          </td>
          <td><strong>${t.loggedHours}</strong> / ${t.estimatedHours}h</td>
          <td>${getStatusBadge(t.status)}</td>
          <td>
            <button class="btn btn-sm btn-outline-primary" onclick="showTaskDetailModal('${t.id}')" title="Task Details"><i class="bx bx-show"></i></button>
          </td>
        </tr>`;
    });

    html += `
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 9. RENDERERS: TIME TRACKER (Requirement 14)
  // ============================================================================

  let timerInterval = null;
  let timerSeconds = 3600 * 2 + 60 * 15; // default 02:15:00
  let isTimerRunning = false;

  function formatTimer(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
    const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${hrs}:${mins}:${s}`;
  }

  function renderTimeTracker() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Time Tracker</h4>
          <div class="font-13 text-secondary">Real-time stopwatch timer, project allocations, logged entries and weekly analytics.</div>
        </div>
        <button class="btn btn-primary" onclick="showLogTimeModal()"><i class="bx bx-plus"></i> Manual Time Entry</button>
      </div>

      <!-- Top Summary Cards -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Today's Hours</p>
                <h4>18.5 hrs</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-user"></i> 4 freelancers active</div>
              </div>
              <div class="stat-icon bg-light-primary text-primary"><i class="bx bx-time-five"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">This Week</p>
                <h4>142.0 hrs</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-trending-up"></i> +8% vs last week</div>
              </div>
              <div class="stat-icon bg-light-success text-success"><i class="bx bx-calendar-week"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">This Month</p>
                <h4>1,420 hrs</h4>
                <div class="font-11 text-primary mt-1">Target: 1,800 hrs</div>
              </div>
              <div class="stat-icon bg-light-warning text-warning"><i class="bx bx-calendar"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Avg Project Hours</p>
                <h4>284 hrs / prj</h4>
                <div class="font-11 text-secondary mt-1">Across 5 projects</div>
              </div>
              <div class="stat-icon bg-light-info text-info"><i class="bx bx-pie-chart-alt-2"></i></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Timer Widget -->
      <div class="timer-widget">
        <div class="timer-header">
          <div>
            <span class="badge badge-warning mb-1">Live Tracking Console</span>
            <h5 style="margin:0;color:#fff;">Project Time Tracker</h5>
          </div>
          <div class="timer-controls">
            <button id="timer-btn-toggle" class="btn ${isTimerRunning ? 'btn-warning' : 'btn-success'}" onclick="toggleTimer()">
              <i class="bx ${isTimerRunning ? 'bx-pause' : 'bx-play'}"></i> ${isTimerRunning ? 'Pause Timer' : 'Start Timer'}
            </button>
            <button class="btn btn-danger" onclick="stopTimer()"><i class="bx bx-stop"></i> Stop & Save</button>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-6 mb-3 mb-md-0">
            <div class="d-flex align-items-center gap-3">
              <div class="timer-clock" id="live-timer-clock">${formatTimer(timerSeconds)}</div>
              <div class="font-12" style="opacity:0.8;">
                <div>Project: <strong>ERP Modernization (FLP001)</strong></div>
                <div>Task: <strong>Payment Gateway Integration (TASK-101)</strong></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex gap-2">
              <select class="form-control" style="background:#fff;color:#000;">
                <option>FLP001 - ERP Modernization</option>
                <option>FLP002 - School ERP</option>
                <option>FLP003 - AI Interview Platform</option>
              </select>
              <select class="form-control" style="background:#fff;color:#000;">
                <option>TASK-101 Payment Gateway Integration</option>
                <option>TASK-102 Redis Cache Optimization</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section: Hours by Project & Freelancer -->
      <div class="row mb-3">
        <div class="col-lg-6 mb-3">
          <div class="data-card h-100">
            <div class="card-header"><h5>Hours by Project This Month</h5></div>
            <div class="card-body p-3">
              <div class="chart-bar-row">
                <div class="chart-bar-label">ERP Modernization</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:75%;background:#4e73df;"></div></div>
                <div class="chart-bar-val">342 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">School ERP</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:90%;background:#1cc88a;"></div></div>
                <div class="chart-bar-val">420 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">AI Interview</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:45%;background:#36b9cc;"></div></div>
                <div class="chart-bar-val">195 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">Hospital Mgmt</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:15%;background:#f6c23e;"></div></div>
                <div class="chart-bar-val">48 hrs</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-3">
          <div class="data-card h-100">
            <div class="card-header"><h5>Hours by Freelancer This Month</h5></div>
            <div class="card-body p-3">
              <div class="chart-bar-row">
                <div class="chart-bar-label">Arun Kumar</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:85%;background:#4e73df;"></div></div>
                <div class="chart-bar-val">168 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">Hari Prasad</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:80%;background:#1cc88a;"></div></div>
                <div class="chart-bar-val">160 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">Anushiya R</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:72%;background:#6f42c1;"></div></div>
                <div class="chart-bar-val">144 hrs</div>
              </div>
              <div class="chart-bar-row">
                <div class="chart-bar-label">Priya S</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:65%;background:#f6c23e;"></div></div>
                <div class="chart-bar-val">130 hrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Time Entry Log Table -->
      <div class="data-card">
        <div class="card-header">
          <h5>Logged Time Entries</h5>
          <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Exporting timesheet CSV...', 'info')"><i class="bx bx-download"></i> Export Timesheet</button>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Freelancer</th>
                  <th>Project</th>
                  <th>Task</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.timeEntries.map(te => `
                  <tr>
                    <td>${te.date}</td>
                    <td><strong>${te.freelancerName}</strong></td>
                    <td>${te.projectName}</td>
                    <td>${te.taskName}</td>
                    <td>${te.start}</td>
                    <td>${te.end}</td>
                    <td><strong class="text-primary">${te.duration}</strong></td>
                    <td class="font-12" style="max-width:240px;">${te.description}</td>
                    <td>${getStatusBadge(te.status)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // Timer Tick functions
  window.toggleTimer = function() {
    isTimerRunning = !isTimerRunning;
    const btn = document.getElementById('timer-btn-toggle');
    if (isTimerRunning) {
      if (btn) {
        btn.className = 'btn btn-warning';
        btn.innerHTML = '<i class="bx bx-pause"></i> Pause Timer';
      }
      timerInterval = setInterval(() => {
        timerSeconds++;
        const el = document.getElementById('live-timer-clock');
        if (el) el.textContent = formatTimer(timerSeconds);
      }, 1000);
      showNotification('Timer started', 'success');
    } else {
      clearInterval(timerInterval);
      if (btn) {
        btn.className = 'btn btn-success';
        btn.innerHTML = '<i class="bx bx-play"></i> Resume Timer';
      }
      showNotification('Timer paused', 'info');
    }
  };

  window.stopTimer = function() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    showNotification(`Timer stopped. Logged ${formatTimer(timerSeconds)} successfully.`, 'success');
    timerSeconds = 0;
    const el = document.getElementById('live-timer-clock');
    if (el) el.textContent = '00:00:00';
    const btn = document.getElementById('timer-btn-toggle');
    if (btn) {
      btn.className = 'btn btn-success';
      btn.innerHTML = '<i class="bx bx-play"></i> Start Timer';
    }
  };

  // ============================================================================
  // 10. RENDERERS: DAILY WORK UPDATE (Requirement 15 - Operational Quick Update)
  // ============================================================================

  function renderDailyWorkUpdates() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Daily Work Updates</h4>
          <div class="font-13 text-secondary">Operational quick updates submitted by freelancers on active tasks (Distinct from formal reports).</div>
        </div>
        <button class="btn btn-primary" onclick="showDailyWorkUpdateModal()"><i class="bx bx-plus"></i> Submit Quick Update</button>
      </div>

      <div class="data-card mb-3">
        <div class="card-header">
          <h5>Submitted Quick Updates</h5>
          <span class="font-12 text-secondary">Review & Comment</span>
        </div>
        <div class="card-body p-3">
          ${MOCK.dailyWorkUpdates.map(u => `
            <div class="p-3 border rounded mb-3" style="background:#fff;">
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2 pb-2 border-bottom">
                <div>
                  <span class="fw-700 font-14">${u.freelancerName}</span>
                  <span class="text-secondary font-12">• Project: <strong>${u.projectName}</strong> • Task: <span class="text-primary">${u.taskName}</span></span>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span class="badge badge-primary">${u.hoursWorked}</span>
                  ${getStatusBadge(u.status)}
                  <span class="font-11 text-secondary">${u.date}</span>
                </div>
              </div>

              <div class="row font-13 g-2 mb-2">
                <div class="col-md-4">
                  <div class="fw-600 text-success"><i class="bx bx-check-circle"></i> Completed Work:</div>
                  <div class="text-secondary mt-1">${u.completedWork}</div>
                </div>
                <div class="col-md-4">
                  <div class="fw-600 text-primary"><i class="bx bx-loader-circle"></i> Work In-Progress:</div>
                  <div class="text-secondary mt-1">${u.inProgressWork}</div>
                </div>
                <div class="col-md-4">
                  <div class="fw-600 text-danger"><i class="bx bx-error-circle"></i> Blockers / Dependencies:</div>
                  <div class="text-secondary mt-1">${u.blockers}</div>
                </div>
              </div>

              ${u.attachments ? `<div class="font-11 text-secondary mt-1"><i class="bx bx-paperclip"></i> Attachments: <strong>${u.attachments}</strong></div>` : ''}

              <div class="p-2 bg-light rounded font-12 mt-2 d-flex justify-content-between align-items-center">
                <div><strong>Admin Feedback:</strong> <em>${u.adminComment || 'No feedback yet.'}</em></div>
                <button class="btn btn-sm btn-outline-primary" onclick="showCommentWorkUpdateModal('${u.id}')"><i class="bx bx-comment-dots"></i> Add Comment</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 11. RENDERERS: MESSAGES (Requirement 16 - Two-Column Messaging)
  // ============================================================================

  let activeChatPrjId = 'FLP001';

  function renderFreelancerMessages() {
    const prj = MOCK.freelancerProjects.find(p => p.id === activeChatPrjId) || MOCK.freelancerProjects[0];
    const msgs = MOCK.freelancerMessages[activeChatPrjId] || [];

    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Project Messages</h4>
          <div class="font-13 text-secondary">Authorized project-scoped messaging and technical communication hub.</div>
        </div>
      </div>

      <div class="chat-container">
        <!-- Sidebar channels -->
        <div class="chat-sidebar">
          <div class="chat-sidebar-header">Active Project Channels</div>
          <div class="chat-channels-list">
            ${MOCK.freelancerProjects.map(p => `
              <div class="chat-channel-item ${p.id === activeChatPrjId ? 'active' : ''}" onclick="selectChatProject('${p.id}')">
                <div class="user-avatar" style="width:34px;height:34px;font-size:13px;border-radius:8px;">${p.name.charAt(0)}</div>
                <div style="flex:1;min-width:0;">
                  <div class="fw-600 font-13" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</div>
                  <div class="font-11 text-secondary">${p.code} • ${p.freelancerCount} members</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Chat Main Thread -->
        <div class="chat-main">
          <div class="chat-main-header">
            <div>
              <div class="fw-700 font-14">${prj.name}</div>
              <div class="font-11 text-secondary">Client: ${prj.client} &bull; Authorized participants only</div>
            </div>
            <span class="badge badge-primary">${msgs.length} messages</span>
          </div>

          <div class="chat-messages-area" id="main-chat-thread">
            ${msgs.map(m => `
              <div class="chat-bubble ${m.role === 'admin' ? 'sent' : 'received'}">
                <div style="font-weight:700;font-size:11px;margin-bottom:2px;">${m.sender}</div>
                <div>${m.text}</div>
                <div class="chat-bubble-meta">${m.time}</div>
              </div>
            `).join('')}
          </div>

          <div class="chat-input-bar">
            <button class="btn btn-sm btn-outline-secondary" onclick="showNotification('Attach file modal...','info')"><i class="bx bx-paperclip"></i></button>
            <input type="text" id="main-chat-input" class="form-control" placeholder="Write a message to project team..." onkeydown="if(event.key==='Enter')sendMainChatMessage()">
            <button class="btn btn-primary" onclick="sendMainChatMessage()"><i class="bx bx-send"></i> Send</button>
          </div>
        </div>
      </div>`;

    return html;
  }

  window.selectChatProject = function(prjId) {
    activeChatPrjId = prjId;
    navigate('freelancer-messages');
  };

  window.sendMainChatMessage = function() {
    const inp = document.getElementById('main-chat-input');
    if (!inp || !inp.value.trim()) return;
    const text = inp.value.trim();
    if (!MOCK.freelancerMessages[activeChatPrjId]) {
      MOCK.freelancerMessages[activeChatPrjId] = [];
    }
    MOCK.freelancerMessages[activeChatPrjId].push({
      id: Date.now(),
      sender: 'Ragupathi (Super Admin)',
      role: 'admin',
      text: text,
      time: 'Just now'
    });
    inp.value = '';
    navigate('freelancer-messages');
    setTimeout(() => {
      const el = document.getElementById('main-chat-thread');
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  };

  window.sendProjectMessage = function(prjId) {
    const inp = document.getElementById(`prj-chat-input-${prjId}`);
    if (!inp || !inp.value.trim()) return;
    const text = inp.value.trim();
    if (!MOCK.freelancerMessages[prjId]) {
      MOCK.freelancerMessages[prjId] = [];
    }
    MOCK.freelancerMessages[prjId].push({
      id: Date.now(),
      sender: 'Ragupathi (Super Admin)',
      role: 'admin',
      text: text,
      time: 'Just now'
    });
    inp.value = '';
    navigate('freelancer-project-workspace', { id: prjId });
  };

  // ============================================================================
  // 12. RENDERERS: MEETINGS (Requirement 17)
  // ============================================================================

  function renderFreelancerMeetings() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Meetings</h4>
          <div class="font-13 text-secondary">Synchronous audio/video alignment calls with clients and freelancers.</div>
        </div>
        <button class="btn btn-primary" onclick="showScheduleMeetingModal()"><i class="bx bx-video"></i> Schedule Meeting</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <div class="tab-nav" data-tabgroup="mtg-tabs" style="border-bottom:none;margin-bottom:0;">
            <button class="active" onclick="switchTab('mtg-tabs','all')">All Meetings</button>
            <button onclick="switchTab('mtg-tabs','upcoming')">Upcoming</button>
            <button onclick="switchTab('mtg-tabs','today')">Today</button>
            <button onclick="switchTab('mtg-tabs','completed')">Completed</button>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Meeting</th>
                  <th>Project</th>
                  <th>Client</th>
                  <th>Freelancers</th>
                  <th>Date & Time</th>
                  <th>Duration</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.freelancerMeetings.map(m => `
                  <tr>
                    <td><strong>${m.title}</strong><div class="font-11 text-secondary">${m.location}</div></td>
                    <td>${m.projectName}</td>
                    <td>${m.client}</td>
                    <td>${m.freelancer}</td>
                    <td>${m.date} <br><span class="font-11 text-secondary">${m.time}</span></td>
                    <td>${m.duration}</td>
                    <td class="font-12" style="max-width:200px;">${m.participants}</td>
                    <td>${getStatusBadge(m.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Joining ${m.location}...','info')">Join</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 13. RENDERERS: FILES & DOCUMENTS (Requirement 18)
  // ============================================================================

  function renderFreelancerDocuments() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Files & Documents</h4>
          <div class="font-13 text-secondary">Secure enterprise repository for contracts, requirements, designs, and deliverables.</div>
        </div>
        <button class="btn btn-primary" onclick="showUploadDocumentModal()"><i class="bx bx-upload"></i> Upload Document</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <div class="filter-bar w-100" style="margin-bottom:0;">
            <div class="filter-group">
              <input type="text" class="form-control" placeholder="Search files, project..." style="width:240px;padding:0.4rem 0.7rem;font-size:13px;" oninput="searchTable(this, 'docs-tbody')">
              <select class="form-control" style="width:160px;padding:0.4rem;font-size:13px;" onchange="filterDocCategory(this.value)">
                <option value="All">All Categories</option>
                <option value="Contracts">Contracts</option>
                <option value="Project Requirements">Requirements</option>
                <option value="Designs">Designs</option>
                <option value="Deliverables">Deliverables</option>
                <option value="Reports">Reports</option>
              </select>
            </div>
            <div class="font-12 text-secondary">Showing <strong>${MOCK.freelancerDocuments.length}</strong> Files</div>
          </div>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>Category</th>
                  <th>Project</th>
                  <th>Uploaded By</th>
                  <th>Date</th>
                  <th>Size</th>
                  <th>Access Scope</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="docs-tbody">
                ${MOCK.freelancerDocuments.map(d => `
                  <tr data-category="${d.category}">
                    <td><strong><i class="bx bx-file text-primary"></i> ${d.name}</strong></td>
                    <td><span class="badge badge-secondary">${d.category}</span></td>
                    <td>${d.projectName}</td>
                    <td>${d.uploadedBy}</td>
                    <td>${d.date}</td>
                    <td>${d.size}</td>
                    <td><span class="badge badge-info">${d.access}</span></td>
                    <td>
                      <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Previewing ${d.name}...','info')"><i class="bx bx-show"></i></button>
                        <button class="btn btn-sm btn-outline-success" onclick="showNotification('Downloading ${d.name}...','info')"><i class="bx bx-download"></i></button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 14. RENDERERS: ISSUES / BUGS (Requirement 19)
  // ============================================================================

  function renderFreelancerIssues() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Issues / Bugs</h4>
          <div class="font-13 text-secondary">Defect tracking workflow: Created &rarr; Assigned &rarr; In Progress &rarr; Resolved &rarr; Closed.</div>
        </div>
        <button class="btn btn-primary" onclick="showReportIssueModal()"><i class="bx bx-bug"></i> Log Issue</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>Issue Register</h5>
          <span class="badge badge-danger">${MOCK.freelancerIssues.filter(i => i.status !== 'Closed').length} Open</span>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Issue ID</th>
                  <th>Title</th>
                  <th>Project</th>
                  <th>Task</th>
                  <th>Reported By</th>
                  <th>Assignee</th>
                  <th>Priority</th>
                  <th>Severity</th>
                  <th>Created Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.freelancerIssues.map(i => `
                  <tr>
                    <td><strong>${i.id}</strong></td>
                    <td><strong>${i.title}</strong><div class="font-11 text-secondary">${i.description}</div></td>
                    <td>${i.projectName}</td>
                    <td>${i.task}</td>
                    <td>${i.reportedBy}</td>
                    <td>${i.assignee}</td>
                    <td>${getPriorityBadge(i.priority)}</td>
                    <td><span class="badge badge-danger">${i.severity}</span></td>
                    <td>${i.createdDate}</td>
                    <td>${getStatusBadge(i.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary" onclick="showIssueWorkflowModal('${i.id}')"><i class="bx bx-git-commit"></i> Workflow</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 15. RENDERERS: CHANGE REQUESTS (Requirement 20)
  // ============================================================================

  function renderChangeRequests() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Change Requests (CR)</h4>
          <div class="font-13 text-secondary">Controlled project scope changes with effort, budget impact and admin approval gates.</div>
        </div>
        <button class="btn btn-primary" onclick="showSubmitCRModal()"><i class="bx bx-plus"></i> Submit Change Request</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>Change Request Register</h5>
          <span class="badge badge-warning">${MOCK.changeRequests.filter(c => c.status === 'Under Review').length} Awaiting Review</span>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>CR Number</th>
                  <th>Project</th>
                  <th>Title</th>
                  <th>Impact & Reason</th>
                  <th>Estimated Effort</th>
                  <th>Priority</th>
                  <th>Submitted By</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.changeRequests.map(c => `
                  <tr>
                    <td><strong>${c.crNumber}</strong></td>
                    <td>${c.projectName}</td>
                    <td><strong>${c.title}</strong></td>
                    <td class="font-12" style="max-width:220px;">${c.impact}</td>
                    <td><strong class="text-primary">${c.estimatedEffort}</strong></td>
                    <td>${getPriorityBadge(c.priority)}</td>
                    <td>${c.submittedBy}</td>
                    <td>${c.date}</td>
                    <td>${getStatusBadge(c.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-primary" onclick="showReviewChangeRequestModal('${c.id}')"><i class="bx bx-check-shield"></i> Review</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 16. RENDERERS: DELIVERABLES (Requirement 21)
  // ============================================================================

  function renderDeliverables() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Deliverables</h4>
          <div class="font-13 text-secondary">Milestone artifacts submitted by freelancers: Review, Request Changes or Approve.</div>
        </div>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>Submitted Deliverables</h5>
          <span class="badge badge-primary">${MOCK.deliverables.length} Deliverables</span>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Deliverable ID</th>
                  <th>Project</th>
                  <th>Deliverable Name</th>
                  <th>Version</th>
                  <th>Submitted By</th>
                  <th>Submission Date</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.deliverables.map(d => `
                  <tr>
                    <td><strong>${d.id}</strong></td>
                    <td>${d.projectName}</td>
                    <td><strong>${d.name}</strong><div class="font-11 text-secondary">${d.fileSize}</div></td>
                    <td><span class="badge badge-secondary">${d.version}</span></td>
                    <td>${d.submittedBy}</td>
                    <td>${d.submissionDate}</td>
                    <td>${d.reviewer}</td>
                    <td>${getStatusBadge(d.status)}</td>
                    <td>
                      <div class="d-flex gap-1">
                        <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Downloading ${d.fileUrl}...','info')"><i class="bx bx-download"></i></button>
                        <button class="btn btn-sm btn-primary" onclick="showReviewDeliverableModal('${d.id}')"><i class="bx bx-check-shield"></i> Review</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 17. RENDERERS: DEPLOYMENTS (Requirement 22)
  // ============================================================================

  function renderDeployments() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Deployments</h4>
          <div class="font-13 text-secondary">Environment build release tracking across Development, Staging, and Production.</div>
        </div>
        <button class="btn btn-primary" onclick="showRecordDeploymentModal()"><i class="bx bx-cloud-upload"></i> Record Deployment</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>Deployment History</h5>
          <span class="badge badge-success">All Systems Operational</span>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Environment</th>
                  <th>Version/Build</th>
                  <th>Project</th>
                  <th>Deployment Date</th>
                  <th>Deployed By</th>
                  <th>Status</th>
                  <th>Release Notes</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.deployments.map(dp => `
                  <tr>
                    <td><span class="badge badge-primary">${dp.environment}</span></td>
                    <td><strong>${dp.version}</strong></td>
                    <td>${dp.projectName}</td>
                    <td>${dp.deploymentDate}</td>
                    <td>${dp.deployedBy}</td>
                    <td>${getStatusBadge(dp.status)}</td>
                    <td class="font-12" style="max-width:280px;">${dp.releaseNotes}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 18. RENDERERS: DAILY REPORTS (Requirement 23 - Formal Compliance Reports)
  // ============================================================================

  function renderFreelancerDailyReports() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Daily Reports</h4>
          <div class="font-13 text-secondary">Formal daily compliance submissions with admin review, approvals, and corrections.</div>
        </div>
        <button class="btn btn-primary" onclick="showSubmitDailyReportModal()"><i class="bx bx-plus"></i> Submit Daily Report</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>Formal Daily Reports</h5>
          <span class="badge badge-primary">${MOCK.dailyReports.length} Reports</span>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Report ID</th>
                  <th>Date</th>
                  <th>Freelancer</th>
                  <th>Project</th>
                  <th>Completed Tasks</th>
                  <th>Hours</th>
                  <th>Submitted Date</th>
                  <th>Reviewer</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.dailyReports.map(r => `
                  <tr>
                    <td><strong>${r.id}</strong></td>
                    <td>${r.date}</td>
                    <td><strong>${r.freelancerName}</strong></td>
                    <td>${r.projectName}</td>
                    <td class="font-12" style="max-width:220px;">${r.completedTasks}</td>
                    <td><strong>${r.hours}</strong></td>
                    <td>${r.submittedDate}</td>
                    <td>${r.reviewer}</td>
                    <td>${getStatusBadge(r.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-primary" onclick="showReviewDailyReportModal('${r.id}')"><i class="bx bx-check-shield"></i> Review</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 19. RENDERERS: EARNINGS & PAYMENTS (Requirement 24 - Admin Finance Ledger)
  // ============================================================================

  function renderFreelancerPayments() {
    const totalEarnings = MOCK.freelancerPayments.reduce((s, p) => s + (Number(p.amount) || 0), 0);
    const paidSum = MOCK.freelancerPayments.filter(p => p.status === 'Paid').reduce((s, p) => s + (Number(p.amount) || 0), 0);
    const pendingSum = MOCK.freelancerPayments.filter(p => p.status === 'Pending').reduce((s, p) => s + (Number(p.amount) || 0), 0);
    const processingSum = MOCK.freelancerPayments.filter(p => p.status === 'Processing').reduce((s, p) => s + (Number(p.amount) || 0), 0);

    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Earnings & Payments</h4>
          <div class="font-13 text-secondary">Admin finance ledger: Milestone disbursements, payment processing, and audit logs.</div>
        </div>
        <button class="btn btn-primary" onclick="showRecordPaymentModal()"><i class="bx bx-plus"></i> Record Payment</button>
      </div>

      <!-- Top Cards (Requirement 24) -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Total Committed</p>
                <h4>${formatINR(totalEarnings)}</h4>
                <div class="font-11 text-secondary mt-1">Across all projects</div>
              </div>
              <div class="stat-icon bg-light-primary text-primary"><i class="bx bx-wallet"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Paid Out</p>
                <h4>${formatINR(paidSum)}</h4>
                <div class="font-11 text-success mt-1"><i class="bx bx-check-circle"></i> Completed payouts</div>
              </div>
              <div class="stat-icon bg-light-success text-success"><i class="bx bx-check-double"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Processing</p>
                <h4>${formatINR(processingSum)}</h4>
                <div class="font-11 text-warning mt-1">Bank queue</div>
              </div>
              <div class="stat-icon bg-light-warning text-warning"><i class="bx bx-time"></i></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="stat-card">
            <div class="d-flex align-items-center">
              <div class="stat-content">
                <p class="mb-0 text-secondary">Pending Milestones</p>
                <h4>${formatINR(pendingSum)}</h4>
                <div class="font-11 text-danger mt-1">Awaiting completion</div>
              </div>
              <div class="stat-icon bg-light-danger text-danger"><i class="bx bx-hourglass"></i></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Ledger Table -->
      <div class="data-card">
        <div class="card-header">
          <h5>Payment Records</h5>
          <button class="btn btn-sm btn-outline-primary" onclick="showNotification('Exporting financial report CSV...','info')"><i class="bx bx-download"></i> Export CSV</button>
        </div>
        <div class="card-body">
          <div class="overflow-x">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Freelancer</th>
                  <th>Period / Milestone</th>
                  <th>Amount</th>
                  <th>Payment Date</th>
                  <th>Reference</th>
                  <th>Mode</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${MOCK.freelancerPayments.map(p => `
                  <tr>
                    <td><strong>${p.project}</strong></td>
                    <td>${p.freelancer}</td>
                    <td>${p.period}</td>
                    <td><strong class="text-primary font-14">${formatINR(p.amount)}</strong></td>
                    <td>${p.paymentDate}</td>
                    <td><code>${p.reference}</code></td>
                    <td>${p.mode || 'NEFT'}</td>
                    <td>${getStatusBadge(p.status)}</td>
                    <td>
                      <button class="btn btn-sm btn-outline-primary" onclick="showPaymentReceiptModal('${p.id}')"><i class="bx bx-receipt"></i> Details</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 20. RENDERERS: NOTIFICATIONS (Requirement 25)
  // ============================================================================

  function renderFreelancerNotifications() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Notifications Center</h4>
          <div class="font-13 text-secondary">System governance alerts for deliverables, change requests, reports, and payments.</div>
        </div>
        <button class="btn btn-outline-primary" onclick="markAllNotificationsRead()"><i class="bx bx-check-double"></i> Mark All as Read</button>
      </div>

      <div class="data-card">
        <div class="card-header">
          <h5>All Notifications</h5>
          <span class="badge badge-danger">${MOCK.freelancerNotifications.filter(n => !n.read).length} Unread</span>
        </div>
        <div class="card-body p-3">
          ${MOCK.freelancerNotifications.map(n => `
            <div class="p-3 border rounded mb-2 d-flex align-items-center gap-3" style="background:${n.read ? '#fff' : '#f4f7fd'};border-color:${n.read ? 'var(--border-color)' : '#dae5ff'} !important;">
              <div class="stat-icon" style="background:rgba(78,115,223,0.12);color:${n.color};width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">
                <i class="bx ${n.icon}"></i>
              </div>
              <div style="flex:1;">
                <div class="d-flex justify-content-between align-items-center mb-1">
                  <span class="fw-700 font-13">${n.title}</span>
                  <span class="font-11 text-secondary">${n.timestamp}</span>
                </div>
                <div class="font-12 text-secondary">${n.description}</div>
              </div>
              <button class="btn btn-sm btn-outline-primary" onclick="navigate('${n.module}')">Open</button>
            </div>
          `).join('')}
        </div>
      </div>`;

    return html;
  }

  window.markAllNotificationsRead = function() {
    MOCK.freelancerNotifications.forEach(n => n.read = true);
    showNotification('All notifications marked as read', 'success');
    navigate('freelancer-notifications');
  };

  // ============================================================================
  // 21. RENDERERS: REPORTS & ANALYTICS (Requirement 26)
  // ============================================================================

  function renderFreelancerReports() {
    let html = `
      <div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <h4 style="margin:0 0 0.2rem;font-size:22px;font-weight:700;">Freelancer Reports & Analytics</h4>
          <div class="font-13 text-secondary">Exportable performance metrics, project progress, task completions, and payment ledgers.</div>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary" onclick="showNotification('Exporting PDF report...','info')"><i class="bx bxs-file-pdf"></i> Export PDF</button>
          <button class="btn btn-outline-success" onclick="showNotification('Exporting Excel report...','info')"><i class="bx bx-spreadsheet"></i> Export Excel</button>
          <button class="btn btn-outline-secondary" onclick="showNotification('Exporting CSV report...','info')"><i class="bx bx-file"></i> Export CSV</button>
        </div>
      </div>

      <div class="data-card mb-3 p-3">
        <div class="row g-2 align-items-center">
          <div class="col-md-3">
            <label class="form-label">Report Type</label>
            <select class="form-control">
              <option>Freelancer Performance Overview</option>
              <option>Project Progress & Completion</option>
              <option>Time Tracking & Logged Hours</option>
              <option>Deliverables & Approvals</option>
              <option>Financial Disbursements Ledger</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Project</label>
            <select class="form-control">
              <option>All Projects</option>
              <option>ERP Modernization</option>
              <option>School ERP</option>
              <option>AI Interview Platform</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label">Date Range</label>
            <select class="form-control">
              <option>Current Month (Sep 2026)</option>
              <option>Last Month (Aug 2026)</option>
              <option>Last Quarter (Q2 2026)</option>
              <option>Year to Date (2026)</option>
            </select>
          </div>
          <div class="col-md-3" style="padding-top:1.5rem;">
            <button class="btn btn-primary w-100" onclick="showNotification('Generating report preview...','success')"><i class="bx bx-filter"></i> Apply Filters</button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8 mb-3">
          <div class="data-card h-100">
            <div class="card-header"><h5>Performance Breakdown by Freelancer</h5></div>
            <div class="card-body">
              <div class="overflow-x">
                <table class="data-table">
                  <thead><tr><th>Freelancer</th><th>Projects</th><th>Tasks Done</th><th>Logged Hours</th><th>Quality Rating</th><th>On-Time %</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Arun Kumar</strong></td><td>2</td><td>14</td><td>168 hrs</td><td><i class="bx bxs-star text-warning"></i> 4.9</td><td><span class="badge badge-success">96%</span></td></tr>
                    <tr><td><strong>Priya S</strong></td><td>2</td><td>11</td><td>130 hrs</td><td><i class="bx bxs-star text-warning"></i> 4.8</td><td><span class="badge badge-success">94%</span></td></tr>
                    <tr><td><strong>Hari Prasad</strong></td><td>1</td><td>9</td><td>160 hrs</td><td><i class="bx bxs-star text-warning"></i> 4.7</td><td><span class="badge badge-success">92%</span></td></tr>
                    <tr><td><strong>Anushiya R</strong></td><td>2</td><td>15</td><td>144 hrs</td><td><i class="bx bxs-star text-warning"></i> 5.0</td><td><span class="badge badge-success">98%</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div class="data-card h-100">
            <div class="card-header"><h5>Milestone Payout Summary</h5></div>
            <div class="card-body p-3">
              <div class="chart-bar-row mb-3">
                <div class="chart-bar-label">Disbursed</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:72%;background:var(--success);"></div></div>
                <div class="chart-bar-val">₹2.1L</div>
              </div>
              <div class="chart-bar-row mb-3">
                <div class="chart-bar-label">Pending Approval</div>
                <div class="chart-bar-track"><div class="chart-bar-fill" style="width:28%;background:var(--warning);"></div></div>
                <div class="chart-bar-val">₹85K</div>
              </div>
              <div class="p-2 bg-light rounded font-12 text-secondary mt-3">
                All payouts comply with company statutory invoicing and milestone acceptance audits.
              </div>
            </div>
          </div>
        </div>
      </div>`;

    return html;
  }

  // ============================================================================
  // 22. MODALS AND INTERACTIVE ACTIONS
  // ============================================================================

  // ADD FREELANCER (Requirement 7)
  window.showAddFreelancerModal = function() {
    const html = `
      <form id="add-freelancer-form">
        <h6 class="fw-700 text-primary mb-2 font-13 text-uppercase">1. Personal Information</h6>
        <div class="row g-2 mb-3">
          <div class="col-md-6">
            <label class="form-label">Full Name *</label>
            <input type="text" id="fl-name" class="form-control" placeholder="e.g. Anandha Krishnan" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Email Address *</label>
            <input type="email" id="fl-email" class="form-control" placeholder="e.g. anand@gmail.com" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Phone Number *</label>
            <input type="tel" id="fl-phone" class="form-control" placeholder="e.g. +91 98401 55678" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Profile Photo</label>
            <input type="text" id="fl-avatar" class="form-control" placeholder="Avatar URL or Initials">
          </div>
        </div>

        <h6 class="fw-700 text-primary mb-2 font-13 text-uppercase">2. Professional Information</h6>
        <div class="row g-2 mb-3">
          <div class="col-md-6">
            <label class="form-label">Designation *</label>
            <input type="text" id="fl-designation" class="form-control" placeholder="e.g. Senior React Specialist" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Experience</label>
            <input type="text" id="fl-experience" class="form-control" placeholder="e.g. 5 Years">
          </div>
          <div class="col-12">
            <label class="form-label">Skills *</label>
            <input type="text" id="fl-skills" class="form-control" placeholder="e.g. React, TypeScript, Redux, Node.js" required>
          </div>
          <div class="col-12">
            <label class="form-label">Specialization</label>
            <input type="text" id="fl-specialization" class="form-control" placeholder="e.g. High Performance Frontend & SPAs">
          </div>
        </div>

        <h6 class="fw-700 text-primary mb-2 font-13 text-uppercase">3. Account & Work Settings</h6>
        <div class="row g-2 mb-3">
          <div class="col-md-4">
            <label class="form-label">Availability</label>
            <select id="fl-avail" class="form-control">
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Working Hours / Day</label>
            <input type="text" id="fl-hours" class="form-control" value="8 hrs/day">
          </div>
          <div class="col-md-4">
            <label class="form-label">Hourly Rate (₹)</label>
            <input type="number" id="fl-rate" class="form-control" value="1000">
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Add Freelancer Account') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitAddFreelancer', 'Save & Send Invitation')
    );
  };

  window.submitAddFreelancer = function() {
    const name = document.getElementById('fl-name')?.value.trim();
    const email = document.getElementById('fl-email')?.value.trim();
    const phone = document.getElementById('fl-phone')?.value.trim();
    const designation = document.getElementById('fl-designation')?.value.trim();
    const skills = document.getElementById('fl-skills')?.value.trim();
    const exp = document.getElementById('fl-experience')?.value.trim() || '3 Years';
    const spec = document.getElementById('fl-specialization')?.value.trim() || designation;
    const avail = document.getElementById('fl-avail')?.value || 'Available';
    const hours = document.getElementById('fl-hours')?.value || '8 hrs/day';
    const rate = Number(document.getElementById('fl-rate')?.value) || 1000;

    if (!name || !email || !phone || !designation || !skills) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    const newFl = {
      id: genId(MOCK.freelancers, 'FL'),
      name: name,
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1] || '',
      email: email,
      phone: phone,
      designation: designation,
      skills: skills,
      experience: exp,
      specialization: spec,
      availability: avail,
      accountStatus: 'Active',
      invitationStatus: 'Sent',
      workingHours: hours,
      workingDays: 'Mon - Fri',
      rate: rate,
      payroll: `₹${(rate * 80).toLocaleString('en-IN')}`,
      rating: '5.0',
      completedProjects: 0,
      activeProjectsCount: 0,
      currentTask: 'Awaiting project allocation',
      todayHours: '0.0 hrs',
      paymentStatus: 'Paid',
      lastActivity: 'Just created',
      joinDate: today()
    };

    MOCK.freelancers.unshift(newFl);
    closeModal();
    showNotification('Freelancer created successfully.', 'success');
    navigate('freelancer-list');
  };

  // ASSIGN PROJECT (Requirement 9)
  window.showAssignProjectModal = function(preselectedFlId) {
    const flOptions = MOCK.freelancers.map(f => `<option value="${f.id}" ${f.id === preselectedFlId ? 'selected' : ''}>${f.name} (${f.designation})</option>`).join('');
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}">${p.name} (${p.code}) - ${p.client}</option>`).join('');

    const html = `
      <form id="assign-project-form">
        <div class="row g-2 mb-2">
          <div class="col-md-6">
            <label class="form-label">Select Freelancer *</label>
            <select id="asg-fl" class="form-control">${flOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Select Project & Client *</label>
            <select id="asg-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Freelancer Role on Project *</label>
            <input type="text" id="asg-role" class="form-control" placeholder="e.g. Lead API Architect" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Assignment Start Date</label>
            <input type="date" id="asg-date" class="form-control" value="${today()}">
          </div>
          <div class="col-12">
            <label class="form-label">Scope & Responsibilities *</label>
            <textarea id="asg-resp" class="form-control" rows="2" placeholder="Describe expected task responsibilities..."></textarea>
          </div>
          <div class="col-12">
            <label class="form-label">Expected Key Deliverables</label>
            <input type="text" id="asg-deliv" class="form-control" placeholder="e.g. High-performance REST APIs, Swagger docs, test suite">
          </div>
          <div class="col-md-6">
            <label class="form-label">Terms Version & Scope</label>
            <select id="asg-terms" class="form-control">
              <option value="1.0">Terms & Conditions v1.0 (Standard)</option>
              <option value="1.1">Terms & Conditions v1.1 (Extended NDA)</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Payment Arrangement</label>
            <input type="text" id="asg-pay" class="form-control" placeholder="e.g. Milestone-based (₹1,50,000)">
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Assign Freelancer to Project') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitAssignProject', 'Assign Freelancer')
    );
  };

  window.submitAssignProject = function() {
    const flId = document.getElementById('asg-fl')?.value;
    const prjId = document.getElementById('asg-prj')?.value;
    const role = document.getElementById('asg-role')?.value.trim() || 'Technical Specialist';
    const resp = document.getElementById('asg-resp')?.value.trim() || 'Technical project execution';
    const deliv = document.getElementById('asg-deliv')?.value.trim() || 'Project milestones';
    const terms = document.getElementById('asg-terms')?.value || '1.0';
    const pay = document.getElementById('asg-pay')?.value.trim() || 'Standard hourly';

    const fl = MOCK.freelancers.find(f => f.id === flId);
    const prj = MOCK.freelancerProjects.find(p => p.id === prjId);

    if (prj && fl) {
      if (!prj.assignedFreelancers.includes(fl.id)) {
        prj.assignedFreelancers.push(fl.id);
        prj.freelancerCount = prj.assignedFreelancers.length;
      }
      fl.activeProjectsCount++;
    }

    MOCK.freelancerAssignments.push({
      id: 'ASG' + String(Date.now()).slice(-4),
      freelancerId: flId,
      projectId: prjId,
      role: role,
      responsibilities: resp,
      assignedDate: today(),
      deliverables: deliv,
      accessScope: 'Project source code, Staging API',
      termsVersion: terms,
      termsStatus: 'Pending Acceptance',
      arrangement: pay
    });

    closeModal();
    showNotification('Project assigned successfully.', 'success');
    navigate('freelancer-projects');
  };

  // ADD TEAM MEMBER (Requirements 35 & 36)
  window.showAddTeamMemberModal = function(preselectedPrjId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');

    const html = `
      <form id="add-team-member-form">
        <div class="row g-2 mb-2">
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="tm-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Member Type *</label>
            <select id="tm-type" class="form-control">
              <option value="Freelancer Teammate">Freelancer Teammate</option>
              <option value="Company Intern">Company Intern</option>
              <option value="Company Trainee">Company Trainee</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Member Full Name *</label>
            <input type="text" id="tm-name" class="form-control" placeholder="e.g. Vignesh R" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Project Role *</label>
            <input type="text" id="tm-role" class="form-control" placeholder="e.g. Junior Frontend Dev" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Assigned By *</label>
            <input type="text" id="tm-assigned-by" class="form-control" value="Ragupathi (ERP Admin)">
          </div>
          <div class="col-md-6">
            <label class="form-label">Availability</label>
            <select id="tm-avail" class="form-control">
              <option value="Available">Available</option>
              <option value="Busy">Busy</option>
            </select>
          </div>
          <div class="col-12">
            <label class="form-label">Assigned Tasks / Scope *</label>
            <input type="text" id="tm-tasks" class="form-control" placeholder="e.g. UI widgets and validation forms" required>
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Add Project Team Member (Teammate / Intern / Trainee)') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitAddTeamMember', 'Add Team Member')
    );
  };

  window.submitAddTeamMember = function() {
    const prjId = document.getElementById('tm-prj')?.value;
    const type = document.getElementById('tm-type')?.value || 'Freelancer Teammate';
    const name = document.getElementById('tm-name')?.value.trim();
    const role = document.getElementById('tm-role')?.value.trim();
    const by = document.getElementById('tm-assigned-by')?.value.trim() || 'ERP Admin';
    const avail = document.getElementById('tm-avail')?.value || 'Available';
    const tasks = document.getElementById('tm-tasks')?.value.trim() || 'General module tasks';

    if (!name || !role) {
      showNotification('Please enter member name and role.', 'error');
      return;
    }

    MOCK.freelancerTeam.push({
      id: 'TM' + String(Date.now()).slice(-4),
      name: name,
      type: type,
      role: role,
      assignedBy: by,
      projectId: prjId,
      tasks: tasks,
      status: 'Active',
      availability: avail,
      email: `${name.toLowerCase().replace(/\s+/g, '.')}@team.com`
    });

    closeModal();
    showNotification(`Team member (${type}) assigned successfully.`, 'success');
    navigate('freelancer-project-workspace', { id: prjId });
  };

  window.removeTeamMember = function(tmId, prjId) {
    if (confirm('Are you sure you want to remove this member from the project team?')) {
      MOCK.freelancerTeam = MOCK.freelancerTeam.filter(t => t.id !== tmId);
      showNotification('Team member removed from project.', 'info');
      navigate('freelancer-project-workspace', { id: prjId });
    }
  };

  // REVIEW DELIVERABLE MODAL (Requirement 21)
  window.showReviewDeliverableModal = function(delId) {
    const d = MOCK.deliverables.find(x => x.id === delId);
    if (!d) return;

    const html = `
      <div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 style="margin:0;">${d.name} <span class="badge badge-secondary">${d.version}</span></h5>
          ${getStatusBadge(d.status)}
        </div>
        <div class="font-12 text-secondary mb-3">Project: <strong>${d.projectName}</strong> • Submitted by: <strong>${d.submittedBy}</strong> on ${d.submissionDate}</div>
        
        <div class="p-3 border rounded mb-3 bg-light">
          <div class="font-12 fw-600 mb-1">Deliverable Overview & Description:</div>
          <div class="font-13 text-secondary mb-2">${d.description}</div>
          <div class="font-12"><strong>Attached File:</strong> <a href="javascript:void(0)" onclick="showNotification('Downloading ${d.fileUrl}...','info')"><i class="bx bx-download"></i> ${d.fileUrl} (${d.fileSize})</a></div>
        </div>

        <div class="mb-3">
          <label class="form-label">Reviewer Feedback & Comments:</label>
          <textarea id="del-comment" class="form-control" rows="3" placeholder="Enter review remarks...">${d.reviewerComments || ''}</textarea>
        </div>

        <div class="d-flex justify-content-between align-items-center gap-2 pt-2 border-top">
          <button type="button" class="btn btn-outline-danger" onclick="setDeliverableStatus('${d.id}', 'Rejected')"><i class="bx bx-x"></i> Reject</button>
          <button type="button" class="btn btn-outline-warning" onclick="setDeliverableStatus('${d.id}', 'Changes Required')"><i class="bx bx-edit"></i> Request Changes</button>
          <button type="button" class="btn btn-success" onclick="setDeliverableStatus('${d.id}', 'Approved')"><i class="bx bx-check"></i> Approve Deliverable</button>
        </div>
      </div>`;

    openModal(modalHeader('Review Milestone Deliverable') + `<div class="modal-body">${html}</div>`);
  };

  window.setDeliverableStatus = function(delId, newStatus) {
    const d = MOCK.deliverables.find(x => x.id === delId);
    if (d) {
      d.status = newStatus;
      const comment = document.getElementById('del-comment')?.value.trim();
      if (comment) d.reviewerComments = comment;
      d.reviewHistory.push({
        date: today(),
        user: 'Ragupathi (Super Admin)',
        action: `Status marked as ${newStatus}`
      });
    }
    closeModal();
    showNotification(`Deliverable status updated to ${newStatus}.`, 'success');
    navigate(currentPage);
  };

  // REVIEW CHANGE REQUEST MODAL (Requirement 20)
  window.showReviewChangeRequestModal = function(crId) {
    const c = MOCK.changeRequests.find(x => x.id === crId);
    if (!c) return;

    const html = `
      <div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h5 style="margin:0;">${c.crNumber}: ${c.title}</h5>
          ${getStatusBadge(c.status)}
        </div>
        <div class="font-12 text-secondary mb-3">Project: <strong>${c.projectName}</strong> • Submitted by: <strong>${c.submittedBy}</strong> (${c.date})</div>
        
        <div class="p-3 border rounded mb-3 bg-light">
          <div class="font-12 fw-600 mb-1">Reason for Request:</div>
          <div class="font-13 text-secondary mb-2">${c.reason}</div>
          <div class="font-12 fw-600 mb-1">Impact Analysis:</div>
          <div class="font-13 text-secondary mb-2">${c.impact}</div>
          <div class="font-12"><strong>Estimated Effort:</strong> <span class="text-primary fw-600">${c.estimatedEffort}</span></div>
        </div>

        <div class="mb-3">
          <label class="form-label">Admin Approval Remarks:</label>
          <textarea id="cr-remarks" class="form-control" rows="3" placeholder="Enter decision justification...">${c.adminNotes || ''}</textarea>
        </div>

        <div class="d-flex justify-content-end gap-2 pt-2 border-top">
          <button type="button" class="btn btn-outline-danger" onclick="setCRStatus('${c.id}', 'Rejected')"><i class="bx bx-x"></i> Reject CR</button>
          <button type="button" class="btn btn-success" onclick="setCRStatus('${c.id}', 'Approved')"><i class="bx bx-check"></i> Approve Change Request</button>
        </div>
      </div>`;

    openModal(modalHeader('Review Project Change Request') + `<div class="modal-body">${html}</div>`);
  };

  window.setCRStatus = function(crId, newStatus) {
    const c = MOCK.changeRequests.find(x => x.id === crId);
    if (c) {
      c.status = newStatus;
      const remarks = document.getElementById('cr-remarks')?.value.trim();
      if (remarks) c.adminNotes = remarks;
    }
    closeModal();
    showNotification(`Change Request ${c.crNumber} marked as ${newStatus}.`, 'success');
    navigate(currentPage);
  };

  // RECORD PAYMENT MODAL (Requirement 24)
  window.showRecordPaymentModal = function(preselectedPrjId, preselectedFlId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');
    const flOptions = MOCK.freelancers.map(f => `<option value="${f.id}" ${f.id === preselectedFlId ? 'selected' : ''}>${f.name}</option>`).join('');

    const html = `
      <form id="record-payment-form">
        <div class="row g-2 mb-2">
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="pay-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Freelancer *</label>
            <select id="pay-fl" class="form-control">${flOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Period / Milestone Description *</label>
            <input type="text" id="pay-period" class="form-control" placeholder="e.g. Milestone 2 Deliverables" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Amount (₹) *</label>
            <input type="number" id="pay-amount" class="form-control" placeholder="e.g. 75000" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Payment Mode</label>
            <select id="pay-mode" class="form-control">
              <option value="NEFT / Bank Transfer">NEFT / Bank Transfer</option>
              <option value="IMPS">IMPS</option>
              <option value="RTGS">RTGS</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Transaction Reference *</label>
            <input type="text" id="pay-ref" class="form-control" value="TXN-HDFC-${Math.floor(100000 + Math.random() * 900000)}" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Payment Date</label>
            <input type="date" id="pay-date" class="form-control" value="${today()}">
          </div>
          <div class="col-md-6">
            <label class="form-label">Status</label>
            <select id="pay-status" class="form-control">
              <option value="Paid">Paid</option>
              <option value="Processing">Processing</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Record Freelancer Payment') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitRecordPayment', 'Save Payment Record')
    );
  };

  window.submitRecordPayment = function() {
    const prjId = document.getElementById('pay-prj')?.value;
    const flId = document.getElementById('pay-fl')?.value;
    const period = document.getElementById('pay-period')?.value.trim() || 'Milestone Disbursement';
    const amount = Number(document.getElementById('pay-amount')?.value) || 50000;
    const mode = document.getElementById('pay-mode')?.value;
    const ref = document.getElementById('pay-ref')?.value.trim() || 'TXN-REF';
    const date = document.getElementById('pay-date')?.value || today();
    const status = document.getElementById('pay-status')?.value || 'Paid';

    const prj = MOCK.freelancerProjects.find(p => p.id === prjId);
    const fl = MOCK.freelancers.find(f => f.id === flId);

    MOCK.freelancerPayments.unshift({
      id: 'PAY-FL-' + String(Date.now()).slice(-4),
      project: prj ? prj.name : 'ERP Project',
      projectId: prjId,
      freelancer: fl ? fl.name : 'Freelancer',
      freelancerId: flId,
      period: period,
      amount: amount,
      paymentDate: date,
      reference: ref,
      mode: mode,
      status: status,
      notes: 'Recorded by Admin'
    });

    closeModal();
    showNotification('Payment record saved successfully.', 'success');
    navigate('freelancer-payments');
  };

  // CREATE TASK MODAL (Requirement 13)
  window.showCreateTaskModal = function(preselectedPrjId, preselectedFlId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');
    const flOptions = MOCK.freelancers.map(f => `<option value="${f.id}" ${f.id === preselectedFlId ? 'selected' : ''}>${f.name}</option>`).join('');

    const html = `
      <form id="create-task-form">
        <div class="row g-2 mb-2">
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="tsk-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Assign To Freelancer *</label>
            <select id="tsk-fl" class="form-control">${flOptions}</select>
          </div>
          <div class="col-12">
            <label class="form-label">Task Title *</label>
            <input type="text" id="tsk-title" class="form-control" placeholder="e.g. Implement OAuth2 Login Provider" required>
          </div>
          <div class="col-12">
            <label class="form-label">Description</label>
            <textarea id="tsk-desc" class="form-control" rows="2" placeholder="Task technical details..."></textarea>
          </div>
          <div class="col-md-4">
            <label class="form-label">Priority</label>
            <select id="tsk-prio" class="form-control">
              <option value="Critical">Critical</option>
              <option value="High" selected>High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Estimated Hours</label>
            <input type="number" id="tsk-hours" class="form-control" value="20">
          </div>
          <div class="col-md-4">
            <label class="form-label">Due Date</label>
            <input type="date" id="tsk-due" class="form-control" value="${today()}">
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Create & Assign Freelancer Task') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitCreateTask', 'Create Task')
    );
  };

  window.submitCreateTask = function() {
    const prjId = document.getElementById('tsk-prj')?.value;
    const flId = document.getElementById('tsk-fl')?.value;
    const title = document.getElementById('tsk-title')?.value.trim();
    const desc = document.getElementById('tsk-desc')?.value.trim() || title;
    const prio = document.getElementById('tsk-prio')?.value || 'Medium';
    const hours = Number(document.getElementById('tsk-hours')?.value) || 20;
    const due = document.getElementById('tsk-due')?.value || today();

    if (!title) {
      showNotification('Please enter a task title.', 'error');
      return;
    }

    const fl = MOCK.freelancers.find(f => f.id === flId);

    MOCK.freelancerTasks.unshift({
      id: 'TASK-' + (100 + MOCK.freelancerTasks.length + 1),
      task: title,
      projectId: prjId,
      freelancerId: flId,
      freelancerName: fl ? fl.name : 'Freelancer',
      priority: prio,
      startDate: today(),
      dueDate: due,
      progress: 0,
      estimatedHours: hours,
      loggedHours: 0,
      status: 'Pending',
      description: desc,
      workNotes: 'Task assigned by Admin.'
    });

    closeModal();
    showNotification('Task created and assigned successfully.', 'success');
    navigate('freelancer-tasks');
  };

  // SCHEDULE MEETING MODAL (Requirement 17)
  window.showScheduleMeetingModal = function(preselectedPrjId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');

    const html = `
      <form id="schedule-mtg-form">
        <div class="row g-2 mb-2">
          <div class="col-12">
            <label class="form-label">Meeting Title *</label>
            <input type="text" id="mtg-title" class="form-control" placeholder="e.g. Weekly Milestone Alignment" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="mtg-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Duration</label>
            <input type="text" id="mtg-dur" class="form-control" value="45 mins">
          </div>
          <div class="col-md-6">
            <label class="form-label">Date *</label>
            <input type="date" id="mtg-date" class="form-control" value="${today()}">
          </div>
          <div class="col-md-6">
            <label class="form-label">Time *</label>
            <input type="text" id="mtg-time" class="form-control" value="03:00 PM">
          </div>
          <div class="col-12">
            <label class="form-label">Meeting Link / Room *</label>
            <input type="text" id="mtg-loc" class="form-control" value="meet.google.com/roriri-sync-${Math.floor(100+Math.random()*900)}">
          </div>
          <div class="col-12">
            <label class="form-label">Agenda & Notes</label>
            <textarea id="mtg-agenda" class="form-control" rows="2" placeholder="Discussion topics..."></textarea>
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Schedule Project Meeting') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitScheduleMeeting', 'Schedule')
    );
  };

  window.submitScheduleMeeting = function() {
    const title = document.getElementById('mtg-title')?.value.trim();
    const prjId = document.getElementById('mtg-prj')?.value;
    const dur = document.getElementById('mtg-dur')?.value || '45 mins';
    const date = document.getElementById('mtg-date')?.value || today();
    const time = document.getElementById('mtg-time')?.value || '03:00 PM';
    const loc = document.getElementById('mtg-loc')?.value || 'meet.google.com/sync';
    const agenda = document.getElementById('mtg-agenda')?.value.trim() || 'General review';

    if (!title) {
      showNotification('Please enter meeting title.', 'error');
      return;
    }

    const prj = MOCK.freelancerProjects.find(p => p.id === prjId);

    MOCK.freelancerMeetings.unshift({
      id: 'MTG-' + String(Date.now()).slice(-4),
      title: title,
      projectId: prjId,
      projectName: prj ? prj.name : 'Project',
      client: prj ? prj.client : 'Client',
      freelancer: 'Assigned Team',
      date: date,
      time: time,
      duration: dur,
      participants: 'Admin, Freelancer, Interns',
      status: 'Upcoming',
      location: loc,
      agenda: agenda
    });

    closeModal();
    showNotification('Meeting scheduled successfully.', 'success');
    navigate('freelancer-meetings');
  };

  // UPLOAD DOCUMENT MODAL (Requirement 18)
  window.showUploadDocumentModal = function(preselectedPrjId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');

    const html = `
      <form id="upload-doc-form">
        <div class="row g-2 mb-2">
          <div class="col-12">
            <label class="form-label">Document Name *</label>
            <input type="text" id="doc-name" class="form-control" placeholder="e.g. API_Specifications_v2.pdf" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Category *</label>
            <select id="doc-cat" class="form-control">
              <option value="Contracts">Contracts</option>
              <option value="Project Requirements">Project Requirements</option>
              <option value="Designs">Designs</option>
              <option value="Task Attachments">Task Attachments</option>
              <option value="Deliverables">Deliverables</option>
              <option value="Reports">Reports</option>
              <option value="Other Documents">Other Documents</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="doc-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-12">
            <label class="form-label">File Selection (Prototype Simulation)</label>
            <input type="file" class="form-control" onchange="document.getElementById('doc-name').value = this.files[0]?.name || ''">
          </div>
          <div class="col-12">
            <label class="form-label">Access Scope</label>
            <select id="doc-access" class="form-control">
              <option value="All Authorized">All Authorized (Admin & Project Members)</option>
              <option value="Admin Only">Admin Only</option>
              <option value="Project Members">Project Members Only</option>
            </select>
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Upload Project Document') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitUploadDoc', 'Upload Document')
    );
  };

  window.submitUploadDoc = function() {
    const name = document.getElementById('doc-name')?.value.trim();
    const cat = document.getElementById('doc-cat')?.value || 'Other Documents';
    const prjId = document.getElementById('doc-prj')?.value;
    const access = document.getElementById('doc-access')?.value || 'All Authorized';

    if (!name) {
      showNotification('Please provide a document title.', 'error');
      return;
    }

    const prj = MOCK.freelancerProjects.find(p => p.id === prjId);

    MOCK.freelancerDocuments.unshift({
      id: 'DOC-' + String(Date.now()).slice(-4),
      name: name,
      category: cat,
      projectId: prjId,
      projectName: prj ? prj.name : 'Project',
      uploadedBy: 'Ragupathi (Admin)',
      date: today(),
      size: '2.4 MB',
      type: name.split('.').pop().toUpperCase() || 'FILE',
      access: access
    });

    closeModal();
    showNotification('Document uploaded successfully.', 'success');
    navigate('freelancer-documents');
  };

  // REPORT ISSUE MODAL (Requirement 19)
  window.showReportIssueModal = function(preselectedPrjId) {
    const prjOptions = MOCK.freelancerProjects.map(p => `<option value="${p.id}" ${p.id === preselectedPrjId ? 'selected' : ''}>${p.name}</option>`).join('');
    const flOptions = MOCK.freelancers.map(f => `<option value="${f.name}">${f.name}</option>`).join('');

    const html = `
      <form id="report-issue-form">
        <div class="row g-2 mb-2">
          <div class="col-12">
            <label class="form-label">Issue Title *</label>
            <input type="text" id="iss-title" class="form-control" placeholder="e.g. Webhook signature mismatch" required>
          </div>
          <div class="col-md-6">
            <label class="form-label">Project *</label>
            <select id="iss-prj" class="form-control">${prjOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Assignee</label>
            <select id="iss-assignee" class="form-control">${flOptions}</select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Priority</label>
            <select id="iss-prio" class="form-control">
              <option value="Critical">Critical</option>
              <option value="High" selected>High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Severity</label>
            <select id="iss-sev" class="form-control">
              <option value="Blocker">Blocker</option>
              <option value="Major" selected>Major</option>
              <option value="Moderate">Moderate</option>
              <option value="Minor">Minor</option>
            </select>
          </div>
          <div class="col-12">
            <label class="form-label">Description & Steps to Reproduce *</label>
            <textarea id="iss-desc" class="form-control" rows="3" placeholder="Provide details..."></textarea>
          </div>
        </div>
      </form>`;

    openModal(
      modalHeader('Log Issue / Defect') +
      `<div class="modal-body">${html}</div>` +
      modalFooter('submitReportIssue', 'Log Issue')
    );
  };

  window.submitReportIssue = function() {
    const title = document.getElementById('iss-title')?.value.trim();
    const prjId = document.getElementById('iss-prj')?.value;
    const assignee = document.getElementById('iss-assignee')?.value;
    const prio = document.getElementById('iss-prio')?.value || 'High';
    const sev = document.getElementById('iss-sev')?.value || 'Major';
    const desc = document.getElementById('iss-desc')?.value.trim() || title;

    if (!title) {
      showNotification('Please enter an issue title.', 'error');
      return;
    }

    const prj = MOCK.freelancerProjects.find(p => p.id === prjId);

    MOCK.freelancerIssues.unshift({
      id: 'ISS-' + (100 + MOCK.freelancerIssues.length + 1),
      title: title,
      projectId: prjId,
      projectName: prj ? prj.name : 'Project',
      task: 'General Project Defect',
      reportedBy: 'Ragupathi (Admin)',
      assignee: assignee,
      priority: prio,
      severity: sev,
      createdDate: today(),
      status: 'Open',
      description: desc,
      resolutionNotes: 'Investigation in progress.'
    });

    closeModal();
    showNotification('Issue logged successfully.', 'success');
    navigate('freelancer-issues');
  };

  // FILTER TABLE HELPERS
  window.filterFreelancerAvailability = function(val) {
    document.querySelectorAll('#fl-list-tbody tr').forEach(r => {
      r.style.display = (val === 'All' || r.getAttribute('data-availability') === val) ? '' : 'none';
    });
  };

  window.filterFreelancerStatus = function(val) {
    document.querySelectorAll('#fl-list-tbody tr').forEach(r => {
      r.style.display = (val === 'All' || r.getAttribute('data-status') === val) ? '' : 'none';
    });
  };

  window.filterProjectStatus = function(val) {
    document.querySelectorAll('#fl-prj-tbody tr').forEach(r => {
      r.style.display = (val === 'All' || r.getAttribute('data-status') === val) ? '' : 'none';
    });
  };

  window.filterTaskStatus = function(val) {
    document.querySelectorAll('#tasks-tbody tr').forEach(r => {
      r.style.display = (val === 'All' || r.getAttribute('data-status') === val) ? '' : 'none';
    });
  };

  window.filterDocCategory = function(val) {
    document.querySelectorAll('#docs-tbody tr').forEach(r => {
      r.style.display = (val === 'All' || r.getAttribute('data-category') === val) ? '' : 'none';
    });
  };

  // ============================================================================
  // 23. REGISTER ALL RENDERERS IN RENDERERS OBJECT
  // ============================================================================

  if (typeof RENDERERS !== 'undefined') {
    RENDERERS['freelancer-dashboard'] = renderFreelancerDashboard;
    RENDERERS['freelancer-list'] = renderFreelancerList;
    RENDERERS['freelancer-detail'] = renderFreelancerDetail;
    RENDERERS['freelancer-projects'] = renderFreelancerProjects;
    RENDERERS['freelancer-project-workspace'] = renderProjectWorkspace;
    RENDERERS['freelancer-tasks'] = renderFreelancerTasks;
    RENDERERS['freelancer-time'] = renderTimeTracker;
    RENDERERS['freelancer-daily-updates'] = renderDailyWorkUpdates;
    RENDERERS['freelancer-messages'] = renderFreelancerMessages;
    RENDERERS['freelancer-meetings'] = renderFreelancerMeetings;
    RENDERERS['freelancer-documents'] = renderFreelancerDocuments;
    RENDERERS['freelancer-issues'] = renderFreelancerIssues;
    RENDERERS['freelancer-change-requests'] = renderChangeRequests;
    RENDERERS['freelancer-deliverables'] = renderDeliverables;
    RENDERERS['freelancer-deployments'] = renderDeployments;
    RENDERERS['freelancer-daily-reports'] = renderFreelancerDailyReports;
    RENDERERS['freelancer-payments'] = renderFreelancerPayments;
    RENDERERS['freelancer-notifications'] = renderFreelancerNotifications;
    RENDERERS['freelancer-reports'] = renderFreelancerReports;
  }

})();
