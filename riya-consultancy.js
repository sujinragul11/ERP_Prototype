/* ===================================================
   RORIRI ERP - RIYA CONSULTANCY MODULE
   Candidate Management, Fees & Payments, Performance,
   Placement Readiness, Communication, Documents & Reports
   Vanilla JavaScript - Strict "Candidate" Terminology
   =================================================== */

// ==========================================
// 1. MOCK DATA STORE (Candidate Centric)
// ==========================================
const RC_STORAGE_KEY_CANDIDATES = 'roriri_rc_candidates_v1';
const RC_STORAGE_KEY_MESSAGES = 'roriri_rc_messages_v1';
const RC_STORAGE_KEY_PAYMENTS = 'roriri_rc_payments_v1';

const RC_DEFAULT_CANDIDATES = [
  {
    id: "CAN-1001",
    name: "Arun Kumar",
    gender: "Male",
    dob: "2001-05-14",
    phone: "9876543210",
    email: "arun@email.com",
    address: "42, Anna Nagar, Chennai, Tamil Nadu",
    qualification: "B.Tech Computer Science",
    college: "Anna University Campus",
    department: "Computer Science & Engineering",
    gradYear: "2024",
    preferredRole: "Full Stack Developer",
    preferredLocation: "Chennai / Bangalore",
    experienceLevel: "Fresher",
    careerObjective: "Passionate engineer seeking entry-level software development role in scalable cloud applications.",
    joiningDate: "2026-09-10",
    status: "Active",
    avatar: "AK",
    profileCompletion: 90,
    skills: [
      { name: "Java", category: "Programming", level: "Advanced" },
      { name: "MySQL", category: "Database", level: "Intermediate" },
      { name: "JavaScript", category: "Frontend", level: "Advanced" },
      { name: "Spring Boot", category: "Framework", level: "Intermediate" },
      { name: "Git", category: "Tools", level: "Advanced" }
    ],
    projects: [
      {
        name: "Enterprise ERP Portal",
        desc: "Built complete administrative dashboards, candidate evaluation modules, and financial reporting.",
        tech: ["HTML5", "CSS3", "JavaScript", "MySQL"],
        type: "Full Stack Web App",
        date: "2026-08-15",
        github: "https://github.com/arunkumar/erp-portal",
        demo: "https://demo.roriri.com/erp"
      },
      {
        name: "E-Commerce Microservices Engine",
        desc: "Payment orchestration and catalog synchronization with high concurrency benchmarks.",
        tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
        type: "Backend Microservices",
        date: "2026-07-20",
        github: "https://github.com/arunkumar/ecommerce-core",
        demo: "https://demo.roriri.com/ecommerce"
      }
    ],
    certifications: [
      { name: "Oracle Certified Java SE 11 Developer", issuer: "Oracle University", date: "2026-03-12", id: "OCP-992144" },
      { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2026-06-05", id: "AWS-CLF-8821" }
    ],
    assessments: [
      { type: "Technical Assessment", name: "Core Java & DSA", score: 92, maxScore: 100, performance: "Excellent" },
      { type: "Aptitude Assessment", name: "Analytical & Quantitative", score: 86, maxScore: 100, performance: "Good" },
      { type: "Communication Assessment", name: "Technical Presentation & Soft Skills", score: 88, maxScore: 100, performance: "Good" },
      { type: "Practical Assessment", name: "Live Coding & System Debugging", score: 90, maxScore: 100, performance: "Excellent" },
      { type: "Mock Interview", name: "Round 1 Technical Interview", score: 85, maxScore: 100, performance: "Good" }
    ],
    attendance: {
      totalDays: 60,
      present: 56,
      absent: 4,
      percentage: 93,
      rating: "Excellent Attendance"
    },
    payment: {
      totalFee: 30000,
      paidAmount: 20000,
      pendingAmount: 10000,
      paymentType: "Installment",
      status: "Partially Paid",
      dueDate: "2026-09-25"
    },
    paymentHistory: [
      { receiptNo: "RC-1001", date: "2026-09-10", amount: 10000, method: "UPI", status: "Paid" },
      { receiptNo: "RC-1002", date: "2026-09-20", amount: 10000, method: "Cash", status: "Paid" }
    ],
    placement: {
      readinessScore: 88,
      status: "Ready",
      breakdown: {
        skills: 90,
        projects: 85,
        certifications: 80,
        assessments: 88,
        attendance: 93,
        profileCompletion: 90
      }
    },
    documents: [
      { name: "Arun_Kumar_Resume.pdf", type: "Resume", date: "2026-09-10", status: "Verified" },
      { name: "BTech_Degree_Certificate.pdf", type: "Educational Certificates", date: "2026-09-10", status: "Verified" },
      { name: "Oracle_Java_Certificate.pdf", type: "Professional Certifications", date: "2026-09-11", status: "Verified" },
      { name: "Aadhaar_Card.pdf", type: "Identity Documents", date: "2026-09-10", status: "Verified" }
    ]
  },
  {
    id: "CAN-1002",
    name: "Priya Sharma",
    gender: "Female",
    dob: "2002-08-22",
    phone: "9876543211",
    email: "priya.s@email.com",
    address: "18, T. Nagar, Chennai, Tamil Nadu",
    qualification: "B.E Electronics & Communication",
    college: "PSG College of Technology",
    department: "Electronics & Communication",
    gradYear: "2024",
    preferredRole: "UI/UX & Frontend Developer",
    preferredLocation: "Chennai / Remote",
    experienceLevel: "Fresher",
    careerObjective: "Creative frontend specialist aiming to build intuitive, accessible web interfaces.",
    joiningDate: "2026-09-08",
    status: "Active",
    avatar: "PS",
    profileCompletion: 95,
    skills: [
      { name: "JavaScript", category: "Frontend", level: "Expert" },
      { name: "React", category: "Frontend", level: "Advanced" },
      { name: "CSS3 / Sass", category: "Design", level: "Expert" },
      { name: "Figma", category: "Design", level: "Advanced" },
      { name: "TypeScript", category: "Frontend", level: "Intermediate" }
    ],
    projects: [
      {
        name: "FinTech Dashboard Suite",
        desc: "Interactive financial tracking system with animated SVG analytics charts and responsive data grids.",
        tech: ["React", "TypeScript", "TailwindCSS", "Recharts"],
        type: "Frontend Architecture",
        date: "2026-08-28",
        github: "https://github.com/priyasharma/fintech-dashboard",
        demo: "https://priyasharma.dev/fintech"
      }
    ],
    certifications: [
      { name: "Meta Frontend Developer Professional Certificate", issuer: "Meta / Coursera", date: "2026-04-10", id: "META-FE-4829" }
    ],
    assessments: [
      { type: "Technical Assessment", name: "JavaScript DOM & Modern Web", score: 95, maxScore: 100, performance: "Excellent" },
      { type: "Communication Assessment", name: "Client Presentation & English", score: 92, maxScore: 100, performance: "Excellent" }
    ],
    attendance: {
      totalDays: 60,
      present: 58,
      absent: 2,
      percentage: 97,
      rating: "Excellent Attendance"
    },
    payment: {
      totalFee: 30000,
      paidAmount: 30000,
      pendingAmount: 0,
      paymentType: "Full Payment",
      status: "Paid",
      dueDate: "2026-09-08"
    },
    paymentHistory: [
      { receiptNo: "RC-1003", date: "2026-09-08", amount: 30000, method: "Bank Transfer", status: "Paid" }
    ],
    placement: {
      readinessScore: 92,
      status: "Ready",
      breakdown: {
        skills: 95,
        projects: 90,
        certifications: 88,
        assessments: 94,
        attendance: 97,
        profileCompletion: 95
      }
    },
    documents: [
      { name: "Priya_Sharma_Resume.pdf", type: "Resume", date: "2026-09-08", status: "Verified" },
      { name: "BE_Degree.pdf", type: "Educational Certificates", date: "2026-09-08", status: "Verified" }
    ]
  },
  {
    id: "CAN-1003",
    name: "Karthik Raja",
    gender: "Male",
    dob: "2000-11-19",
    phone: "9876543212",
    email: "karthik.raja@email.com",
    address: "75, Gandhipuram, Coimbatore, Tamil Nadu",
    qualification: "MCA",
    college: "Coimbatore Institute of Technology",
    department: "Computer Applications",
    gradYear: "2023",
    preferredRole: "Python & Data Engineer",
    preferredLocation: "Bangalore / Coimbatore",
    experienceLevel: "1 Year Experience",
    careerObjective: "Data engineer specializing in ETL pipelines, automated analysis, and API design.",
    joiningDate: "2026-08-15",
    status: "Active",
    avatar: "KR",
    profileCompletion: 75,
    skills: [
      { name: "Python", category: "Programming", level: "Advanced" },
      { name: "SQL", category: "Database", level: "Advanced" },
      { name: "Django", category: "Framework", level: "Intermediate" },
      { name: "Docker", category: "DevOps", level: "Beginner" }
    ],
    projects: [
      {
        name: "Automated ETL Data Pipeline",
        desc: "Ingests real-time telemetry streams and populates analytics warehouses with zero data loss.",
        tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
        type: "Data Engineering",
        date: "2026-07-15",
        github: "https://github.com/karthikraja/etl-pipeline",
        demo: "https://demo.karthik.io"
      }
    ],
    certifications: [
      { name: "Python Institute PCAP Certified Associate", issuer: "Python Institute", date: "2025-11-20", id: "PCAP-31-03-91" }
    ],
    assessments: [
      { type: "Technical Assessment", name: "Python Data Structures", score: 72, maxScore: 100, performance: "Average" },
      { type: "Aptitude Assessment", name: "General Reasoning", score: 68, maxScore: 100, performance: "Average" }
    ],
    attendance: {
      totalDays: 60,
      present: 48,
      absent: 12,
      percentage: 80,
      rating: "Good Attendance"
    },
    payment: {
      totalFee: 35000,
      paidAmount: 15000,
      pendingAmount: 20000,
      paymentType: "Installment",
      status: "Partially Paid",
      dueDate: "2026-09-30"
    },
    paymentHistory: [
      { receiptNo: "RC-1004", date: "2026-08-15", amount: 15000, method: "UPI", status: "Paid" }
    ],
    placement: {
      readinessScore: 68,
      status: "Under Review",
      breakdown: {
        skills: 75,
        projects: 70,
        certifications: 65,
        assessments: 70,
        attendance: 80,
        profileCompletion: 75
      }
    },
    documents: [
      { name: "Karthik_Raja_Resume.pdf", type: "Resume", date: "2026-08-15", status: "Verified" }
    ]
  },
  {
    id: "CAN-1004",
    name: "Sneha Nair",
    gender: "Female",
    dob: "2002-03-10",
    phone: "9876543213",
    email: "sneha.nair@email.com",
    address: "12, Marine Drive, Kochi, Kerala",
    qualification: "B.Tech Information Technology",
    college: "CUSAT University",
    department: "Information Technology",
    gradYear: "2024",
    preferredRole: "QA Automation & Cloud Support",
    preferredLocation: "Chennai / Kochi",
    experienceLevel: "Fresher",
    careerObjective: "Detail-oriented QA engineer focused on Selenium, Cypress, and CI/CD quality gates.",
    joiningDate: "2026-09-01",
    status: "Active",
    avatar: "SN",
    profileCompletion: 60,
    skills: [
      { name: "Manual Testing", category: "QA", level: "Advanced" },
      { name: "Selenium", category: "QA", level: "Beginner" },
      { name: "Java Basics", category: "Programming", level: "Beginner" }
    ],
    projects: [],
    certifications: [],
    assessments: [
      { type: "Technical Assessment", name: "Software Testing Fundamentals", score: 58, maxScore: 100, performance: "Average" }
    ],
    attendance: {
      totalDays: 60,
      present: 42,
      absent: 18,
      percentage: 70,
      rating: "Needs Improvement"
    },
    payment: {
      totalFee: 30000,
      paidAmount: 5000,
      pendingAmount: 25000,
      paymentType: "Installment",
      status: "Pending",
      dueDate: "2026-09-15"
    },
    paymentHistory: [
      { receiptNo: "RC-1005", date: "2026-09-01", amount: 5000, method: "Cash", status: "Paid" }
    ],
    placement: {
      readinessScore: 45,
      status: "Needs Improvement",
      breakdown: {
        skills: 45,
        projects: 20,
        certifications: 30,
        assessments: 58,
        attendance: 70,
        profileCompletion: 60
      }
    },
    documents: [
      { name: "Sneha_Nair_Aadhaar.pdf", type: "Identity Documents", date: "2026-09-01", status: "Verified" }
    ]
  },
  {
    id: "CAN-1005",
    name: "Vikram Rathore",
    gender: "Male",
    dob: "2001-09-30",
    phone: "9876543214",
    email: "vikram.r@email.com",
    address: "88, R.S. Puram, Coimbatore, Tamil Nadu",
    qualification: "B.Sc Computer Science",
    college: "Bharathiar University",
    department: "Computer Science",
    gradYear: "2024",
    preferredRole: "React Developer",
    preferredLocation: "Chennai",
    experienceLevel: "Fresher",
    careerObjective: "Frontend engineer building interactive single-page applications.",
    joiningDate: "2026-09-05",
    status: "Active",
    avatar: "VR",
    profileCompletion: 80,
    skills: [
      { name: "React JS", category: "Frontend", level: "Advanced" },
      { name: "Redux", category: "Frontend", level: "Intermediate" },
      { name: "HTML/CSS", category: "Design", level: "Expert" }
    ],
    projects: [
      {
        name: "Hospital Patient Queue Tracker",
        desc: "Live appointment management with token calling and doctor slot allocation.",
        tech: ["React", "Firebase", "Bootstrap"],
        type: "Frontend App",
        date: "2026-08-10",
        github: "https://github.com/vikram/patient-queue",
        demo: "https://demo.vikram.org"
      }
    ],
    certifications: [
      { name: "Frontend Specialist Certificate", issuer: "freeCodeCamp", date: "2026-02-14", id: "FCC-FE-1941" }
    ],
    assessments: [
      { type: "Technical Assessment", name: "React Components & State", score: 84, maxScore: 100, performance: "Good" }
    ],
    attendance: {
      totalDays: 60,
      present: 54,
      absent: 6,
      percentage: 90,
      rating: "Excellent Attendance"
    },
    payment: {
      totalFee: 30000,
      paidAmount: 20000,
      pendingAmount: 10000,
      paymentType: "Installment",
      status: "Partially Paid",
      dueDate: "2026-09-28"
    },
    paymentHistory: [
      { receiptNo: "RC-1006", date: "2026-09-05", amount: 20000, method: "UPI", status: "Paid" }
    ],
    placement: {
      readinessScore: 82,
      status: "Ready",
      breakdown: {
        skills: 85,
        projects: 80,
        certifications: 80,
        assessments: 84,
        attendance: 90,
        profileCompletion: 80
      }
    },
    documents: [
      { name: "Vikram_Resume.pdf", type: "Resume", date: "2026-09-05", status: "Verified" }
    ]
  }
];

// Helper to get all candidates (combining mock + localStorage)
function rcGetCandidates() {
  const stored = localStorage.getItem(RC_STORAGE_KEY_CANDIDATES);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored candidates", e);
    }
  }
  localStorage.setItem(RC_STORAGE_KEY_CANDIDATES, JSON.stringify(RC_DEFAULT_CANDIDATES));
  return RC_DEFAULT_CANDIDATES;
}

function rcSaveCandidates(candidates) {
  localStorage.setItem(RC_STORAGE_KEY_CANDIDATES, JSON.stringify(candidates));
}

function rcGetCandidateById(id) {
  const list = rcGetCandidates();
  return list.find(c => c.id === id) || list[0];
}

// ==========================================
// 2. STATE & SUB-ROUTING
// ==========================================
let rcCurrentSubPage = 'dashboard';
let rcCurrentParams = {};
let rcCandidateTableFilter = {
  search: '',
  status: 'ALL',
  paymentStatus: 'ALL',
  placementStatus: 'ALL',
  joiningDate: '',
  page: 1,
  pageSize: 10
};

// Sub-Navigation Handler - Synchronized with Main ERP Sidebar
function rcNavigate(subPage, params = {}) {
  rcCurrentSubPage = subPage;
  rcCurrentParams = params;
  
  const pageMap = {
    'dashboard': 'rc-dashboard',
    'all-candidates': 'rc-candidates',
    'candidates': 'rc-candidates',
    'active-candidates': 'rc-candidates',
    'placement-ready-candidates': 'rc-candidates',
    'add-candidate': 'rc-candidates',
    'candidate-profile': 'rc-candidates',
    'fees-payments': 'rc-candidates',
    'candidate-payments': 'rc-candidates',
    'payment-history': 'rc-candidates',
    'pending-payments': 'rc-candidates',
    'revenue-overview': 'rc-dashboard',
    'skills': 'rc-candidates',
    'projects': 'rc-candidates',
    'certifications': 'rc-candidates',
    'assessments': 'rc-assessments',
    'attendance': 'rc-attendance',
    'placement-readiness': 'rc-placement',
    'ready-candidates': 'rc-placement',
    'candidate-improvement': 'rc-placement',
    'candidate-messages': 'rc-messages',
    'announcements': 'rc-announcements',
    'notifications': 'rc-announcements',
    'communication-history': 'rc-announcements',
    'documents': 'rc-documents',
    'reports': 'rc-reports'
  };
  
  const targetId = pageMap[subPage] || ('rc-' + subPage);
  
  // Highlight active sidebar item and expand Riya Consultancy in sidebar
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const link = document.querySelector(`.sidebar-nav a[data-page="${targetId}"]`);
  if (link) {
    link.classList.add('active');
    const parentLi = link.closest('.sub-menu')?.closest('li');
    if (parentLi) parentLi.classList.add('open');
  }
  
  const container = document.getElementById('page-content');
  if (container) {
    container.innerHTML = rcRenderPageWithHeader(subPage, params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Master Render Router for Subpages
function rcRenderCurrentSubPage() {
  switch (rcCurrentSubPage) {
    case 'dashboard':
      return rcRenderDashboard();
    case 'all-candidates':
    case 'candidates':
      return rcRenderCandidatesList('ALL');
    case 'active-candidates':
      return rcRenderCandidatesList('ACTIVE');
    case 'placement-ready-candidates':
      return rcRenderCandidatesList('READY');
    case 'add-candidate':
      return rcRenderAddCandidateForm();
    case 'candidate-profile':
      return rcRenderCandidateProfile(rcCurrentParams.id || (window._params && window._params.id) || 'CAN-1001');
    case 'fees-payments':
    case 'candidate-payments':
      return rcRenderFeesPayments('payments');
    case 'payment-history':
      return rcRenderFeesPayments('history');
    case 'pending-payments':
      return rcRenderFeesPayments('pending');
    case 'revenue-overview':
      return rcRenderRevenueOverview();
    case 'skills':
      return rcRenderSkills();
    case 'projects':
      return rcRenderProjects();
    case 'certifications':
      return rcRenderCertifications();
    case 'assessments':
      return rcRenderAssessments();
    case 'attendance':
      return rcRenderAttendance();
    case 'placement-readiness':
      return rcRenderPlacementReadiness();
    case 'ready-candidates':
      return rcRenderReadyCandidates();
    case 'candidate-improvement':
      return rcRenderCandidateImprovement();
    case 'candidate-messages':
      return rcRenderCandidateMessages();
    case 'announcements':
      return rcRenderAnnouncements();
    case 'notifications':
      return rcRenderNotifications();
    case 'communication-history':
      return rcRenderCommunicationHistory();
    case 'documents':
      return rcRenderDocuments();
    case 'reports':
      return rcRenderReports();
    default:
      return rcRenderDashboard();
  }
}

// ==========================================
// 3. MASTER MODULE SHELL (Sidebar-Native, Clean Layout)
// ==========================================
function rcRenderPageWithHeader(subPage, params = {}) {
  rcCurrentSubPage = subPage || 'dashboard';
  rcCurrentParams = params || {};
  return `
    <div class="rc-module-wrapper">
      <div class="rc-subpage-content" id="rc-subpage-container">
        ${rcRenderCurrentSubPage()}
      </div>
    </div>
  `;
}

function renderRiyaConsultancyModule() {
  return rcRenderPageWithHeader('dashboard');
}


// ==========================================
// 4. FORMATTING & HELPER UTILITIES
// ==========================================
function rcFormatCurrency(amount) {
  return '₹' + Number(amount || 0).toLocaleString('en-IN');
}

function rcFormatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function rcGetPaymentStatusBadge(status) {
  switch ((status || '').toUpperCase()) {
    case 'PAID':
      return '<span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;border:1px solid #c8e6c9;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;"><i class="bx bx-check-circle"></i> Paid</span>';
    case 'PARTIALLY PAID':
      return '<span class="badge badge-warning" style="background:#fff3e0;color:#ef6c00;border:1px solid #ffe0b2;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;"><i class="bx bx-time-five"></i> Partially Paid</span>';
    case 'PENDING':
    default:
      return '<span class="badge badge-danger" style="background:#ffebee;color:#c62828;border:1px solid #ffcdd2;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;"><i class="bx bx-error-circle"></i> Pending</span>';
  }
}

function rcGetPlacementStatusBadge(status) {
  switch ((status || '').toUpperCase()) {
    case 'READY':
      return '<span class="badge" style="background:#e8f5e9;color:#1b5e20;border:1px solid #a5d6a7;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;">🟢 READY</span>';
    case 'UNDER REVIEW':
      return '<span class="badge" style="background:#fff8e1;color:#f57f17;border:1px solid #ffe082;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;">🟡 UNDER REVIEW</span>';
    case 'NEEDS IMPROVEMENT':
    default:
      return '<span class="badge" style="background:#fbe9e7;color:#d84315;border:1px solid #ffccbc;padding:4px 8px;border-radius:4px;font-size:11px;font-weight:600;">🔴 NEEDS IMPROVEMENT</span>';
  }
}

function rcGetPerformanceBadge(perf) {
  switch ((perf || '').toUpperCase()) {
    case 'EXCELLENT':
      return '<span style="background:#e8f5e9;color:#2e7d32;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:700;">Excellent</span>';
    case 'GOOD':
      return '<span style="background:#e3f2fd;color:#1565c0;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:700;">Good</span>';
    case 'AVERAGE':
      return '<span style="background:#fff3e0;color:#ef6c00;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:700;">Average</span>';
    default:
      return '<span style="background:#ffebee;color:#c62828;padding:3px 8px;border-radius:12px;font-size:11px;font-weight:700;">Needs Improvement</span>';
  }
}

function rcToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container') || document.body;
  const toastEl = document.createElement('div');
  const bg = type === 'success' ? '#1cc88a' : (type === 'error' ? '#e74a3b' : '#4e73df');
  toastEl.style.cssText = 'position:fixed;bottom:24px;right:24px;background:' + bg + ';color:#fff;padding:12px 20px;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.2);z-index:99999;font-size:13px;display:flex;align-items:center;gap:10px;animation:fadeIn 0.3s ease;';
  toastEl.innerHTML = '<i class="bx ' + (type === 'success' ? 'bx-check-circle' : 'bx-info-circle') + '" style="font-size:20px;"></i><div><strong>' + title + '</strong><div>' + message + '</div></div>';
  document.body.appendChild(toastEl);
  setTimeout(() => {
    toastEl.style.opacity = '0';
    toastEl.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toastEl.remove(), 400);
  }, 3500);
}

// Modal Helper
function rcOpenModal(html) {
  const container = document.getElementById('modal-container') || document.body;
  let overlay = document.getElementById('rc-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'rc-modal-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(14,34,56,0.6);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;overflow-y:auto;';
    overlay.onclick = (e) => { if (e.target === overlay) rcCloseModal(); };
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = html;
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function rcCloseModal() {
  const overlay = document.getElementById('rc-modal-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.innerHTML = '';
  }
  document.body.style.overflow = '';
}

// ==========================================
// 5. DASHBOARD RENDERER
// ==========================================
function rcRenderDashboard() {
  const candidates = rcGetCandidates();
  
  // Stats Calculation
  const totalCandidates = 250; // mock aggregate
  const activeCandidates = 220;
  const newCandidates = 18;
  const placementReady = 85;
  const underReview = 45;

  const totalRevenue = 1250000;
  const thisMonthRevenue = 180000;
  const pendingPayments = 320000;
  const todayCollection = 25000;

  return `
    <div class="rc-dashboard-container">
      <!-- Welcome Section -->
      <div class="rc-welcome-card" style="background:linear-gradient(135deg, #0e2238 0%, #1a3a5c 100%);color:#fff;border-radius:12px;padding:1.5rem 2rem;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;box-shadow:0 4px 20px rgba(14,34,56,0.15);">
        <div>
          <span style="background:rgba(78,115,223,0.3);color:#8bb2ff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">Riya Consultancy Section</span>
          <h2 style="font-size:24px;font-weight:700;margin:8px 0 4px 0;color:#fff;">Riya Consultancy Dashboard</h2>
          <p style="font-size:13.5px;color:#b0c4de;margin:0;">Welcome to Riya Consultancy Management &bull; Centralized candidate admissions, placement readiness &amp; financial tracking.</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-sm btn-primary" onclick="rcNavigate('add-candidate')" style="background:#4e73df;border-color:#4e73df;font-weight:600;display:inline-flex;align-items:center;gap:6px;padding:8px 16px;">
            <i class="bx bx-user-plus"></i> Add Candidate
          </button>
          <button class="btn btn-sm" onclick="rcOpenRecordPaymentModal()" style="background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.2);font-weight:600;display:inline-flex;align-items:center;gap:6px;padding:8px 16px;">
            <i class="bx bx-wallet"></i> Record Payment
          </button>
        </div>
      </div>

      <!-- Quick Actions Bar -->
      <div class="card mb-4" style="border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.04);border:1px solid #e3e6f0;padding:1rem 1.25rem;">
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#858796;margin-bottom:0.75rem;">
          <i class="bx bx-bolt-circle" style="color:var(--primary);"></i> Quick Actions
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-sm btn-outline-primary" onclick="rcNavigate('add-candidate')" style="display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-plus"></i> Add Candidate
          </button>
          <button class="btn btn-sm btn-outline-success" onclick="rcOpenRecordPaymentModal()" style="display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-wallet"></i> 💰 Record Payment
          </button>
          <button class="btn btn-sm btn-outline-info" onclick="rcNavigate('candidate-messages')" style="display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-chat"></i> 💬 Send Message
          </button>
          <button class="btn btn-sm btn-outline-warning" onclick="rcOpenAnnouncementModal()" style="display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-broadcast"></i> 📢 Create Announcement
          </button>
          <button class="btn btn-sm btn-outline-secondary" onclick="rcNavigate('reports')" style="display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-bar-chart-alt-2"></i> 📊 View Reports
          </button>
        </div>
      </div>

      <!-- CANDIDATE STATISTICS (5 Cards) -->
      <h5 style="font-size:14px;font-weight:700;color:var(--text-dark);margin-bottom:0.85rem;display:flex;align-items:center;gap:6px;">
        <i class="bx bx-group" style="color:var(--primary);"></i> Candidate Statistics
      </h5>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;margin-bottom:1.5rem;">
        <!-- Card 1: Total Candidates -->
        <div class="card" style="border-radius:10px;border-left:4px solid #4e73df;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#4e73df;text-transform:uppercase;">Total Candidates</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${totalCandidates}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">Enrolled in Riya Consultancy</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(78,115,223,0.12);color:#4e73df;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-user"></i>
            </div>
          </div>
        </div>

        <!-- Card 2: Active Candidates -->
        <div class="card" style="border-radius:10px;border-left:4px solid #1cc88a;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#1cc88a;text-transform:uppercase;">Active Candidates</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${activeCandidates}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">88% in active training</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(28,200,138,0.12);color:#1cc88a;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-user-check"></i>
            </div>
          </div>
        </div>

        <!-- Card 3: New Candidates -->
        <div class="card" style="border-radius:10px;border-left:4px solid #36b9cc;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#36b9cc;text-transform:uppercase;">New Candidates</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${newCandidates}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">Joined this month</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(54,185,204,0.12);color:#36b9cc;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-user-plus"></i>
            </div>
          </div>
        </div>

        <!-- Card 4: Placement Ready Candidates -->
        <div class="card" style="border-radius:10px;border-left:4px solid #2e7d32;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#2e7d32;text-transform:uppercase;">Placement Ready</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${placementReady}</div>
              <div style="font-size:11px;color:#2e7d32;margin-top:2px;font-weight:600;">Score &ge; 80% (Ready)</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:#e8f5e9;color:#2e7d32;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-award"></i>
            </div>
          </div>
        </div>

        <!-- Card 5: Candidates Under Review -->
        <div class="card" style="border-radius:10px;border-left:4px solid #f6c23e;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#f6c23e;text-transform:uppercase;">Under Review</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${underReview}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">Score 50% - 79%</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(246,194,62,0.15);color:#d49a12;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-time"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- REVENUE STATISTICS (4 Financial Cards) -->
      <h5 style="font-size:14px;font-weight:700;color:var(--text-dark);margin-bottom:0.85rem;display:flex;align-items:center;gap:6px;">
        <i class="bx bx-wallet" style="color:#1cc88a;"></i> Revenue Statistics
      </h5>
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;margin-bottom:1.5rem;">
        <!-- Rev Card 1: Total Revenue -->
        <div class="card" style="border-radius:10px;border-left:4px solid #1cc88a;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1.15rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#1cc88a;text-transform:uppercase;">💰 Total Revenue</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(totalRevenue)}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">Cumulative candidate fees</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(28,200,138,0.12);color:#1cc88a;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-trending-up"></i>
            </div>
          </div>
        </div>

        <!-- Rev Card 2: This Month Revenue -->
        <div class="card" style="border-radius:10px;border-left:4px solid #4e73df;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1.15rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#4e73df;text-transform:uppercase;">💵 This Month Revenue</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(thisMonthRevenue)}</div>
              <div style="font-size:11px;color:#1cc88a;margin-top:2px;font-weight:600;">&uarr; 15% vs last month</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(78,115,223,0.12);color:#4e73df;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-calendar"></i>
            </div>
          </div>
        </div>

        <!-- Rev Card 3: Pending Payments -->
        <div class="card" style="border-radius:10px;border-left:4px solid #e74a3b;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1.15rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#e74a3b;text-transform:uppercase;">⏳ Pending Payments</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(pendingPayments)}</div>
              <div style="font-size:11px;color:#e74a3b;margin-top:2px;font-weight:600;">Installment balances</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(231,74,59,0.12);color:#e74a3b;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-time-five"></i>
            </div>
          </div>
        </div>

        <!-- Rev Card 4: Today's Collection -->
        <div class="card" style="border-radius:10px;border-left:4px solid #f6c23e;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:1.15rem 1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:11.5px;font-weight:700;color:#d49a12;text-transform:uppercase;">💳 Today's Collection</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(todayCollection)}</div>
              <div style="font-size:11px;color:#858796;margin-top:2px;">3 Candidate transactions</div>
            </div>
            <div style="width:40px;height:40px;border-radius:8px;background:rgba(246,194,62,0.15);color:#d49a12;display:flex;align-items:center;justify-content:center;font-size:20px;">
              <i class="bx bx-credit-card"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- CHARTS SECTION (Revenue Overview Chart & Candidate Status Overview) -->
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:1.25rem;margin-bottom:1.5rem;">
        <!-- Left: Revenue Overview Chart -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;padding:1.25rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <div>
              <h6 style="font-weight:700;margin:0;color:var(--text-dark);">Revenue Overview Chart</h6>
              <small style="color:#858796;">Monthly candidate fee collections in 2026 (in ₹)</small>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="rcNavigate('revenue-overview')" style="font-size:11px;">
              View Full Analytics
            </button>
          </div>
          <!-- Canvas / SVG Bar Chart -->
          <div style="height:220px;display:flex;align-items:flex-end;gap:16px;padding:10px 0 20px 0;border-bottom:1px solid #eaecf4;">
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.2L</div>
              <div style="width:100%;max-width:36px;height:55%;background:#4e73df;border-radius:4px 4px 0 0;" title="January: ₹1,20,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">Jan</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.5L</div>
              <div style="width:100%;max-width:36px;height:70%;background:#4e73df;border-radius:4px 4px 0 0;" title="February: ₹1,50,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">Feb</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.8L</div>
              <div style="width:100%;max-width:36px;height:85%;background:#1cc88a;border-radius:4px 4px 0 0;" title="March: ₹1,80,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">Mar</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.4L</div>
              <div style="width:100%;max-width:36px;height:65%;background:#4e73df;border-radius:4px 4px 0 0;" title="April: ₹1,40,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">Apr</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.6L</div>
              <div style="width:100%;max-width:36px;height:75%;background:#4e73df;border-radius:4px 4px 0 0;" title="May: ₹1,60,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">May</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.7L</div>
              <div style="width:100%;max-width:36px;height:80%;background:#4e73df;border-radius:4px 4px 0 0;" title="June: ₹1,70,000"></div>
              <div style="font-size:11px;color:#858796;margin-top:6px;font-weight:600;">Jun</div>
            </div>
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
              <div style="font-size:10px;color:#858796;margin-bottom:4px;">₹1.8L</div>
              <div style="width:100%;max-width:36px;height:85%;background:#1cc88a;border-radius:4px 4px 0 0;" title="Current Month (Sep): ₹1,80,000"></div>
              <div style="font-size:11px;color:#1cc88a;margin-top:6px;font-weight:700;">Sep</div>
            </div>
          </div>
          <div style="display:flex;justify-content:center;gap:20px;margin-top:12px;font-size:12px;color:#858796;">
            <span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:10px;height:10px;background:#4e73df;border-radius:2px;"></span> Regular Months</span>
            <span style="display:inline-flex;align-items:center;gap:6px;"><span style="width:10px;height:10px;background:#1cc88a;border-radius:2px;"></span> Peak Collection</span>
          </div>
        </div>

        <!-- Right: Candidate Status Overview -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;padding:1.25rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <h6 style="font-weight:700;margin:0 0 4px 0;color:var(--text-dark);">Candidate Status Overview</h6>
          <small style="color:#858796;display:block;margin-bottom:1rem;">Distribution of active candidates</small>
          
          <div style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
              <span>Placement Ready (Score &ge;80%)</span>
              <strong>38% (85)</strong>
            </div>
            <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;">
              <div style="width:38%;height:100%;background:#1cc88a;"></div>
            </div>
          </div>

          <div style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
              <span>Under Review (50% - 79%)</span>
              <strong>42% (95)</strong>
            </div>
            <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;">
              <div style="width:42%;height:100%;background:#f6c23e;"></div>
            </div>
          </div>

          <div style="margin-bottom:1rem;">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;">
              <span>Needs Improvement (&lt;50%)</span>
              <strong>20% (40)</strong>
            </div>
            <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;">
              <div style="width:20%;height:100%;background:#e74a3b;"></div>
            </div>
          </div>

          <div style="background:#f8f9fc;padding:10px;border-radius:8px;border:1px dashed #d1d3e2;margin-top:1.5rem;text-align:center;">
            <div style="font-size:12px;color:#858796;">Average Placement Readiness</div>
            <div style="font-size:20px;font-weight:700;color:#2e7d32;margin-top:2px;">78.4%</div>
            <small style="color:#1cc88a;font-weight:600;">High Employability Rate</small>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN TABLES: Recent Candidates & Recent Payments -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.5rem;">
        <!-- Left: Recent Candidates -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
          <div style="padding:1rem 1.25rem;border-bottom:1px solid #eaecf4;display:flex;align-items:center;justify-content:space-between;">
            <h6 style="font-weight:700;margin:0;color:var(--text-dark);display:flex;align-items:center;gap:6px;">
              <i class="bx bx-user" style="color:var(--primary);"></i> Recent Candidates
            </h6>
            <a href="javascript:void(0)" onclick="rcNavigate('all-candidates')" style="font-size:12px;font-weight:600;">View All &rarr;</a>
          </div>
          <div class="table-responsive" style="max-height:280px;overflow-y:auto;">
            <table class="table table-hover" style="margin:0;font-size:12.5px;">
              <thead style="background:#f8f9fc;color:#5a5c69;">
                <tr>
                  <th>Candidate ID</th>
                  <th>Name</th>
                  <th>Joining Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${candidates.slice(0, 5).map(c => `
                  <tr>
                    <td><strong>${c.id}</strong></td>
                    <td>
                      <div style="display:flex;align-items:center;gap:8px;">
                        <span style="width:24px;height:24px;border-radius:50%;background:#4e73df;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">${c.avatar}</span>
                        <span>${c.name}</span>
                      </div>
                    </td>
                    <td>${rcFormatDate(c.joiningDate)}</td>
                    <td><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;font-size:10.5px;">${c.status}</span></td>
                    <td>
                      <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})" style="padding:2px 8px;font-size:11px;">
                        View
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right: Recent Payments -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
          <div style="padding:1rem 1.25rem;border-bottom:1px solid #eaecf4;display:flex;align-items:center;justify-content:space-between;">
            <h6 style="font-weight:700;margin:0;color:var(--text-dark);display:flex;align-items:center;gap:6px;">
              <i class="bx bx-receipt" style="color:#1cc88a;"></i> Recent Payments
            </h6>
            <a href="javascript:void(0)" onclick="rcNavigate('payment-history')" style="font-size:12px;font-weight:600;">View History &rarr;</a>
          </div>
          <div class="table-responsive" style="max-height:280px;overflow-y:auto;">
            <table class="table table-hover" style="margin:0;font-size:12.5px;">
              <thead style="background:#f8f9fc;color:#5a5c69;">
                <tr>
                  <th>Receipt #</th>
                  <th>Candidate</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>RC-1001</strong></td>
                  <td>Arun Kumar</td>
                  <td style="font-weight:700;color:#1cc88a;">₹10,000</td>
                  <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:2px 6px;border-radius:4px;">UPI</span></td>
                  <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;">Paid</span></td>
                </tr>
                <tr>
                  <td><strong>RC-1002</strong></td>
                  <td>Arun Kumar</td>
                  <td style="font-weight:700;color:#1cc88a;">₹10,000</td>
                  <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:2px 6px;border-radius:4px;">Cash</span></td>
                  <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;">Paid</span></td>
                </tr>
                <tr>
                  <td><strong>RC-1003</strong></td>
                  <td>Priya Sharma</td>
                  <td style="font-weight:700;color:#1cc88a;">₹30,000</td>
                  <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:2px 6px;border-radius:4px;">Bank Transfer</span></td>
                  <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;">Paid</span></td>
                </tr>
                <tr>
                  <td><strong>RC-1004</strong></td>
                  <td>Karthik Raja</td>
                  <td style="font-weight:700;color:#1cc88a;">₹15,000</td>
                  <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:2px 6px;border-radius:4px;">UPI</span></td>
                  <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;">Paid</span></td>
                </tr>
                <tr>
                  <td><strong>RC-1005</strong></td>
                  <td>Sneha Nair</td>
                  <td style="font-weight:700;color:#1cc88a;">₹5,000</td>
                  <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:2px 6px;border-radius:4px;">Cash</span></td>
                  <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:2px 6px;border-radius:4px;">Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- TWO-COLUMN TABLES: Pending Payments & Placement Ready Candidates -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.5rem;">
        <!-- Left: Pending Payments with Send Reminder -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
          <div style="padding:1rem 1.25rem;border-bottom:1px solid #eaecf4;display:flex;align-items:center;justify-content:space-between;">
            <h6 style="font-weight:700;margin:0;color:#c62828;display:flex;align-items:center;gap:6px;">
              <i class="bx bx-error-circle" style="color:#e74a3b;"></i> Pending Payments
            </h6>
            <a href="javascript:void(0)" onclick="rcNavigate('pending-payments')" style="font-size:12px;font-weight:600;">Manage Pending &rarr;</a>
          </div>
          <div class="table-responsive">
            <table class="table table-hover" style="margin:0;font-size:12.5px;">
              <thead style="background:#f8f9fc;">
                <tr>
                  <th>Candidate</th>
                  <th>Total Fee</th>
                  <th>Pending</th>
                  <th>Due Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${candidates.filter(c => c.payment && c.payment.pendingAmount > 0).slice(0, 4).map(c => `
                  <tr>
                    <td><strong>${c.name}</strong><br><small style="color:#858796;">${c.id}</small></td>
                    <td>${rcFormatCurrency(c.payment.totalFee)}</td>
                    <td style="color:#e74a3b;font-weight:700;">${rcFormatCurrency(c.payment.pendingAmount)}</td>
                    <td>${rcFormatDate(c.payment.dueDate)}</td>
                    <td>
                      <button class="btn btn-xs btn-outline-danger" onclick="rcSendPaymentReminder('${c.id}', '${c.name}', ${c.payment.pendingAmount})" style="padding:2px 8px;font-size:11px;">
                        <i class="bx bx-bell"></i> Remind
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Right: Placement Ready Candidates -->
        <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
          <div style="padding:1rem 1.25rem;border-bottom:1px solid #eaecf4;display:flex;align-items:center;justify-content:space-between;">
            <h6 style="font-weight:700;margin:0;color:#2e7d32;display:flex;align-items:center;gap:6px;">
              <i class="bx bx-award" style="color:#2e7d32;"></i> Placement Ready Candidates
            </h6>
            <a href="javascript:void(0)" onclick="rcNavigate('placement-ready-candidates')" style="font-size:12px;font-weight:600;">View Placement &rarr;</a>
          </div>
          <div class="table-responsive">
            <table class="table table-hover" style="margin:0;font-size:12.5px;">
              <thead style="background:#f8f9fc;">
                <tr>
                  <th>Candidate</th>
                  <th>Skills</th>
                  <th>Readiness Score</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${candidates.filter(c => c.placement && c.placement.status === 'Ready').slice(0, 4).map(c => `
                  <tr>
                    <td><strong>${c.name}</strong><br><small style="color:#858796;">${c.id}</small></td>
                    <td><small>${c.skills.slice(0, 2).map(s => s.name).join(', ')}</small></td>
                    <td>
                      <div style="display:flex;align-items:center;gap:6px;">
                        <div style="flex:1;width:60px;height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;">
                          <div style="width:${c.placement.readinessScore}%;height:100%;background:#1cc88a;"></div>
                        </div>
                        <span style="font-weight:700;color:#2e7d32;font-size:12px;">${c.placement.readinessScore}%</span>
                      </div>
                    </td>
                    <td>${rcGetPlacementStatusBadge(c.placement.status)}</td>
                    <td>
                      <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})" style="padding:2px 8px;font-size:11px;">
                        Profile
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- RECENT ACTIVITIES TIMELINE -->
      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;padding:1.25rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <h6 style="font-weight:700;margin:0 0 1rem 0;color:var(--text-dark);display:flex;align-items:center;gap:6px;">
          <i class="bx bx-time-five" style="color:var(--primary);"></i> Recent Activities Timeline
        </h6>
        <div style="border-left:2px solid #eaecf4;margin-left:10px;padding-left:20px;position:relative;">
          <div style="position:relative;margin-bottom:1.25rem;">
            <div style="position:absolute;left:-26px;top:2px;width:12px;height:12px;border-radius:50%;background:#4e73df;border:2px solid #fff;"></div>
            <div style="font-size:11px;color:#858796;font-weight:600;">Today &bull; 10:30 AM</div>
            <div style="font-size:13px;font-weight:600;color:#2c3e50;">New candidate Arun Kumar added.</div>
            <div style="font-size:12px;color:#858796;">Admission registered under Full Stack Development track.</div>
          </div>

          <div style="position:relative;margin-bottom:1.25rem;">
            <div style="position:absolute;left:-26px;top:2px;width:12px;height:12px;border-radius:50%;background:#1cc88a;border:2px solid #fff;"></div>
            <div style="font-size:11px;color:#858796;font-weight:600;">Today &bull; 11:15 AM</div>
            <div style="font-size:13px;font-weight:600;color:#2c3e50;">Payment received from Rahul Kumar.</div>
            <div style="font-size:12px;color:#858796;">Amount of ₹10,000 received via UPI &bull; Receipt RC-1002 generated.</div>
          </div>

          <div style="position:relative;margin-bottom:1.25rem;">
            <div style="position:absolute;left:-26px;top:2px;width:12px;height:12px;border-radius:50%;background:#36b9cc;border:2px solid #fff;"></div>
            <div style="font-size:11px;color:#858796;font-weight:600;">Today &bull; 12:00 PM</div>
            <div style="font-size:13px;font-weight:600;color:#2c3e50;">Java Assessment completed.</div>
            <div style="font-size:12px;color:#858796;">Candidate Arun Kumar scored 92% (Excellent performance).</div>
          </div>

          <div style="position:relative;margin-bottom:1.25rem;">
            <div style="position:absolute;left:-26px;top:2px;width:12px;height:12px;border-radius:50%;background:#f6c23e;border:2px solid #fff;"></div>
            <div style="font-size:11px;color:#858796;font-weight:600;">Today &bull; 02:30 PM</div>
            <div style="font-size:13px;font-weight:600;color:#2c3e50;">New certification added.</div>
            <div style="font-size:12px;color:#858796;">Oracle Certified Java SE 11 Developer verified for Arun Kumar.</div>
          </div>

          <div style="position:relative;">
            <div style="position:absolute;left:-26px;top:2px;width:12px;height:12px;border-radius:50%;background:#e74a3b;border:2px solid #fff;"></div>
            <div style="font-size:11px;color:#858796;font-weight:600;">Today &bull; 03:15 PM</div>
            <div style="font-size:13px;font-weight:600;color:#2c3e50;">Announcement sent to all candidates.</div>
            <div style="font-size:12px;color:#858796;">"Technical Mock Interviews schedule announced for weekend batch".</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 6. CANDIDATES LIST & FILTERING
// ==========================================
function rcRenderCandidatesList(preset = 'ALL') {
  let candidates = rcGetCandidates();

  // Handle Preset shortcuts
  if (preset === 'ACTIVE') {
    rcCandidateTableFilter.status = 'Active';
  } else if (preset === 'READY') {
    rcCandidateTableFilter.placementStatus = 'Ready';
  }

  // Filter logic
  let filtered = candidates.filter(c => {
    const q = (rcCandidateTableFilter.search || '').toLowerCase().trim();
    const skillsStr = (c.skills || []).map(s => s.name).join(' ').toLowerCase();
    const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.phone.includes(q) || skillsStr.includes(q);
    const matchesStatus = rcCandidateTableFilter.status === 'ALL' || c.status.toLowerCase() === rcCandidateTableFilter.status.toLowerCase();
    const matchesPayment = rcCandidateTableFilter.paymentStatus === 'ALL' || (c.payment && c.payment.status.toLowerCase() === rcCandidateTableFilter.paymentStatus.toLowerCase());
    const matchesPlacement = rcCandidateTableFilter.placementStatus === 'ALL' || (c.placement && c.placement.status.toLowerCase() === rcCandidateTableFilter.placementStatus.toLowerCase());
    const matchesDate = !rcCandidateTableFilter.joiningDate || c.joiningDate === rcCandidateTableFilter.joiningDate;

    return matchesSearch && matchesStatus && matchesPayment && matchesPlacement && matchesDate;
  });

  const titleMap = {
    'ALL': 'All Candidates',
    'ACTIVE': 'Active Candidates',
    'READY': 'Placement Ready Candidates'
  };
  const pageTitle = titleMap[preset] || 'Candidates';

  return `
    <div class="rc-candidates-container">
      <!-- Page Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-group" style="color:var(--primary);"></i> ${pageTitle}
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Manage candidate admissions, profiles, payment statuses, and placement evaluations.
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button class="btn btn-sm btn-primary" onclick="rcNavigate('add-candidate')" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
            <i class="bx bx-plus"></i> Add New Candidate
          </button>
        </div>
      </div>

      <!-- Search & Filters Toolbar -->
      <div class="card mb-3" style="border-radius:10px;border:1px solid #e3e6f0;padding:1rem 1.25rem;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;align-items:center;">
          <!-- Search input -->
          <div>
            <label style="font-size:11.5px;font-weight:600;color:#5a5c69;margin-bottom:4px;display:block;">Search Candidate</label>
            <div style="position:relative;">
              <input type="text" class="form-control form-control-sm" placeholder="Name, ID, Skill, Email..." value="${rcCandidateTableFilter.search}" oninput="rcOnCandidateSearch(this.value)" style="padding-left:30px;">
              <i class="bx bx-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#858796;font-size:14px;"></i>
            </div>
          </div>

          <!-- Status filter -->
          <div>
            <label style="font-size:11.5px;font-weight:600;color:#5a5c69;margin-bottom:4px;display:block;">Filter by Status</label>
            <select class="form-select form-select-sm" onchange="rcOnCandidateFilter('status', this.value)">
              <option value="ALL" ${rcCandidateTableFilter.status === 'ALL' ? 'selected' : ''}>All Statuses</option>
              <option value="Active" ${rcCandidateTableFilter.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Inactive" ${rcCandidateTableFilter.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
              <option value="Completed" ${rcCandidateTableFilter.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
          </div>

          <!-- Payment Status filter -->
          <div>
            <label style="font-size:11.5px;font-weight:600;color:#5a5c69;margin-bottom:4px;display:block;">Payment Status</label>
            <select class="form-select form-select-sm" onchange="rcOnCandidateFilter('paymentStatus', this.value)">
              <option value="ALL" ${rcCandidateTableFilter.paymentStatus === 'ALL' ? 'selected' : ''}>All Payments</option>
              <option value="Paid" ${rcCandidateTableFilter.paymentStatus === 'Paid' ? 'selected' : ''}>Paid</option>
              <option value="Partially Paid" ${rcCandidateTableFilter.paymentStatus === 'Partially Paid' ? 'selected' : ''}>Partially Paid</option>
              <option value="Pending" ${rcCandidateTableFilter.paymentStatus === 'Pending' ? 'selected' : ''}>Pending</option>
            </select>
          </div>

          <!-- Placement Status filter -->
          <div>
            <label style="font-size:11.5px;font-weight:600;color:#5a5c69;margin-bottom:4px;display:block;">Placement Status</label>
            <select class="form-select form-select-sm" onchange="rcOnCandidateFilter('placementStatus', this.value)">
              <option value="ALL" ${rcCandidateTableFilter.placementStatus === 'ALL' ? 'selected' : ''}>All Placements</option>
              <option value="Ready" ${rcCandidateTableFilter.placementStatus === 'Ready' ? 'selected' : ''}>Ready (&ge;80%)</option>
              <option value="Under Review" ${rcCandidateTableFilter.placementStatus === 'Under Review' ? 'selected' : ''}>Under Review (50-79%)</option>
              <option value="Needs Improvement" ${rcCandidateTableFilter.placementStatus === 'Needs Improvement' ? 'selected' : ''}>Needs Improvement (&lt;50%)</option>
            </select>
          </div>

          <!-- Joining Date filter -->
          <div>
            <label style="font-size:11.5px;font-weight:600;color:#5a5c69;margin-bottom:4px;display:block;">Joining Date</label>
            <input type="date" class="form-control form-control-sm" value="${rcCandidateTableFilter.joiningDate}" onchange="rcOnCandidateFilter('joiningDate', this.value)">
          </div>
        </div>
      </div>

      <!-- Candidate Data Table -->
      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Candidate ID</th>
                <th style="padding:12px 14px;">Candidate Name</th>
                <th style="padding:12px 14px;">Phone</th>
                <th style="padding:12px 14px;">Email</th>
                <th style="padding:12px 14px;">Joining Date</th>
                <th style="padding:12px 14px;">Primary Skills</th>
                <th style="padding:12px 14px;">Payment Status</th>
                <th style="padding:12px 14px;">Placement Status</th>
                <th style="padding:12px 14px;">Status</th>
                <th style="padding:12px 14px;text-align:center;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="10" style="text-align:center;padding:2.5rem;color:#858796;">
                    <i class="bx bx-user-x" style="font-size:42px;color:#d1d3e2;margin-bottom:6px;"></i>
                    <h6 style="font-weight:700;">No Candidates Found</h6>
                    <p style="font-size:12.5px;margin:0;">No candidate records match your query filters.</p>
                  </td>
                </tr>
              ` : filtered.map(c => `
                <tr>
                  <td style="padding:12px 14px;"><strong>${c.id}</strong></td>
                  <td style="padding:12px 14px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <span style="width:32px;height:32px;border-radius:50%;background:#4e73df;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;">${c.avatar || 'CA'}</span>
                      <div>
                        <div style="font-weight:600;color:var(--text-dark);">${c.name}</div>
                        <small style="color:#858796;">${c.qualification || 'Graduate'}</small>
                      </div>
                    </div>
                  </td>
                  <td style="padding:12px 14px;">${c.phone}</td>
                  <td style="padding:12px 14px;">${c.email}</td>
                  <td style="padding:12px 14px;">${rcFormatDate(c.joiningDate)}</td>
                  <td style="padding:12px 14px;">
                    <div style="display:flex;gap:4px;flex-wrap:wrap;">
                      ${(c.skills || []).slice(0, 2).map(s => `<span class="badge" style="background:#f1f3f9;color:#2c3e50;padding:2px 6px;border-radius:4px;font-size:10.5px;">${s.name}</span>`).join('')}
                      ${(c.skills || []).length > 2 ? `<span class="badge" style="background:#eaecf4;color:#858796;padding:2px 6px;border-radius:4px;font-size:10px;">+${c.skills.length - 2}</span>` : ''}
                    </div>
                  </td>
                  <td style="padding:12px 14px;">${rcGetPaymentStatusBadge(c.payment ? c.payment.status : 'Pending')}</td>
                  <td style="padding:12px 14px;">${rcGetPlacementStatusBadge(c.placement ? c.placement.status : 'Needs Improvement')}</td>
                  <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;padding:4px 8px;border-radius:4px;">${c.status}</span></td>
                  <td style="padding:12px 14px;text-align:center;">
                    <div style="display:inline-flex;gap:6px;">
                      <button class="btn btn-sm btn-outline-primary" title="View Candidate Profile" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})" style="padding:4px 8px;">
                        👁 View
                      </button>
                      <button class="btn btn-sm btn-outline-secondary" title="Edit Candidate" onclick="rcOpenEditCandidateModal('${c.id}')" style="padding:4px 8px;">
                        ✏ Edit
                      </button>
                      <button class="btn btn-sm btn-outline-info" title="Send Message" onclick="rcStartMessageWithCandidate('${c.id}')" style="padding:4px 8px;">
                        💬 Message
                      </button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Pagination UI -->
        <div style="padding:0.75rem 1.25rem;background:#f8f9fc;border-top:1px solid #e3e6f0;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12.5px;color:#858796;">
          <div>Showing <strong>1 to ${filtered.length}</strong> of <strong>${filtered.length}</strong> candidates</div>
          <div style="display:inline-flex;gap:4px;">
            <button class="btn btn-sm btn-light" disabled style="border:1px solid #d1d3e2;padding:2px 10px;">Previous</button>
            <button class="btn btn-sm btn-primary" style="padding:2px 10px;">1</button>
            <button class="btn btn-sm btn-light" disabled style="border:1px solid #d1d3e2;padding:2px 10px;">Next</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function rcOnCandidateSearch(val) {
  rcCandidateTableFilter.search = val;
  const container = document.getElementById('rc-subpage-container');
  if (container) container.innerHTML = rcRenderCandidatesList();
}

function rcOnCandidateFilter(field, val) {
  rcCandidateTableFilter[field] = val;
  const container = document.getElementById('rc-subpage-container');
  if (container) container.innerHTML = rcRenderCandidatesList();
}

// ==========================================
// 7. ADD CANDIDATE 5-SECTION FORM
// ==========================================
function rcRenderAddCandidateForm() {
  const nextId = 'CAN-' + (1000 + rcGetCandidates().length + 1);
  const today = new Date().toISOString().split('T')[0];

  return `
    <div class="rc-add-candidate-container" style="max-width:960px;margin:0 auto;">
      <!-- Page Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-user-plus" style="color:var(--primary);"></i> Add New Candidate
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Enroll a new candidate into Riya Consultancy with academic, career, and fee installment details.
          </p>
        </div>
        <button class="btn btn-sm btn-outline-secondary" onclick="rcNavigate('all-candidates')">
          &larr; Back to Candidates
        </button>
      </div>

      <form id="rc-add-candidate-form" onsubmit="rcSaveCandidateForm(event)">
        <!-- Section 1: Personal Information -->
        <div class="card mb-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="padding:1rem 1.25rem;background:#f8f9fc;border-bottom:1px solid #e3e6f0;font-weight:700;color:#2c3e50;display:flex;align-items:center;gap:8px;">
            <span style="width:24px;height:24px;border-radius:50%;background:#4e73df;color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">1</span>
            Personal Information
          </div>
          <div style="padding:1.25rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Full Name <span style="color:#e74a3b;">*</span></label>
                <input type="text" id="rc-cand-name" class="form-control" placeholder="e.g. Arun Kumar" required>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Gender <span style="color:#e74a3b;">*</span></label>
                <select id="rc-cand-gender" class="form-select" required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Date of Birth</label>
                <input type="date" id="rc-cand-dob" class="form-control" value="2002-01-15">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Phone Number <span style="color:#e74a3b;">*</span></label>
                <input type="tel" id="rc-cand-phone" class="form-control" placeholder="e.g. 9876543210" required>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Email Address <span style="color:#e74a3b;">*</span></label>
                <input type="email" id="rc-cand-email" class="form-control" placeholder="e.g. arun@email.com" required>
              </div>
              <div style="grid-column:1/-1;">
                <label class="form-label" style="font-size:12px;font-weight:600;">Permanent Address</label>
                <textarea id="rc-cand-address" class="form-control" rows="2" placeholder="Street, City, State, PIN"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Education Details -->
        <div class="card mb-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="padding:1rem 1.25rem;background:#f8f9fc;border-bottom:1px solid #e3e6f0;font-weight:700;color:#2c3e50;display:flex;align-items:center;gap:8px;">
            <span style="width:24px;height:24px;border-radius:50%;background:#4e73df;color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">2</span>
            Education Details
          </div>
          <div style="padding:1.25rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;">
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Qualification</label>
                <input type="text" id="rc-cand-qualification" class="form-control" placeholder="e.g. B.Tech Computer Science">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">College / Institution</label>
                <input type="text" id="rc-cand-college" class="form-control" placeholder="e.g. Anna University">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Department</label>
                <input type="text" id="rc-cand-dept" class="form-control" placeholder="e.g. Computer Science & Engg">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Graduation Year</label>
                <select id="rc-cand-gradyear" class="form-select">
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024" selected>2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 3: Career Information -->
        <div class="card mb-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="padding:1rem 1.25rem;background:#f8f9fc;border-bottom:1px solid #e3e6f0;font-weight:700;color:#2c3e50;display:flex;align-items:center;gap:8px;">
            <span style="width:24px;height:24px;border-radius:50%;background:#4e73df;color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">3</span>
            Career Information
          </div>
          <div style="padding:1.25rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;">
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Preferred Job Role</label>
                <input type="text" id="rc-cand-role" class="form-control" placeholder="e.g. Full Stack Developer">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Preferred Location</label>
                <input type="text" id="rc-cand-location" class="form-control" placeholder="e.g. Chennai / Bangalore">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Experience Level</label>
                <select id="rc-cand-experience" class="form-select">
                  <option value="Fresher" selected>Fresher (0 Years)</option>
                  <option value="1-2 Years">1 - 2 Years</option>
                  <option value="3+ Years">3+ Years</option>
                </select>
              </div>
              <div style="grid-column:1/-1;">
                <label class="form-label" style="font-size:12px;font-weight:600;">Career Objective</label>
                <textarea id="rc-cand-objective" class="form-control" rows="2" placeholder="Brief summary of candidate's career aspirations..."></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4: Consultancy Joining Details -->
        <div class="card mb-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="padding:1rem 1.25rem;background:#f8f9fc;border-bottom:1px solid #e3e6f0;font-weight:700;color:#2c3e50;display:flex;align-items:center;gap:8px;">
            <span style="width:24px;height:24px;border-radius:50%;background:#4e73df;color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">4</span>
            Consultancy Joining Details
          </div>
          <div style="padding:1.25rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;">
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Candidate ID</label>
                <input type="text" id="rc-cand-id" class="form-control" value="${nextId}" readonly style="background:#eaecf4;font-weight:700;">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Joining Date</label>
                <input type="date" id="rc-cand-joining" class="form-control" value="${today}">
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Candidate Status</label>
                <select id="rc-cand-status" class="form-select">
                  <option value="Active" selected>Active</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 5: Fee Details (Automatic Formula Calculation) -->
        <div class="card mb-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="padding:1rem 1.25rem;background:#f8f9fc;border-bottom:1px solid #e3e6f0;font-weight:700;color:#2c3e50;display:flex;align-items:center;gap:8px;">
            <span style="width:24px;height:24px;border-radius:50%;background:#1cc88a;color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">5</span>
            Fee Details &amp; Installment Calculation
          </div>
          <div style="padding:1.25rem;">
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;align-items:center;">
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Total Joining Fee (₹) <span style="color:#e74a3b;">*</span></label>
                <input type="number" id="rc-cand-totalfee" class="form-control" value="30000" oninput="rcCalculateFeePending()" required>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Payment Type</label>
                <select id="rc-cand-paytype" class="form-select" onchange="rcOnPayTypeChange(this.value)">
                  <option value="Installment" selected>Installment</option>
                  <option value="Full Payment">Full Payment</option>
                </select>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Initial Amount Paid (₹) <span style="color:#e74a3b;">*</span></label>
                <input type="number" id="rc-cand-paidamount" class="form-control" value="10000" oninput="rcCalculateFeePending()" required>
              </div>
              <div>
                <label class="form-label" style="font-size:12px;font-weight:600;">Pending Amount (₹) <span style="font-size:10px;color:#858796;">(Auto-calculated)</span></label>
                <input type="text" id="rc-cand-pendingamount" class="form-control" value="₹20,000" readonly style="background:#eaecf4;font-weight:700;color:#e74a3b;">
              </div>
            </div>
            
            <div style="background:#f1f4fb;border-radius:6px;padding:10px 14px;margin-top:1rem;display:flex;align-items:center;gap:10px;font-size:12px;color:#2c3e50;">
              <i class="bx bx-info-circle" style="font-size:18px;color:#4e73df;"></i>
              <div>Automatic calculation rule: <strong>Pending Amount = Total Fee - Initial Amount Paid</strong>. Installment schedule will automatically populate in Candidate Payments.</div>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div style="display:flex;align-items:center;justify-content:flex-end;gap:12px;margin-bottom:2rem;">
          <button type="button" class="btn btn-light" onclick="rcNavigate('all-candidates')" style="border:1px solid #d1d3e2;">
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" style="padding:8px 24px;font-weight:600;">
            <i class="bx bx-save"></i> Save Candidate
          </button>
        </div>
      </form>
    </div>
  `;
}

function rcCalculateFeePending() {
  const total = Number(document.getElementById('rc-cand-totalfee')?.value || 0);
  const paid = Number(document.getElementById('rc-cand-paidamount')?.value || 0);
  const pending = Math.max(0, total - paid);
  const pendingInput = document.getElementById('rc-cand-pendingamount');
  if (pendingInput) {
    pendingInput.value = rcFormatCurrency(pending);
  }
}

function rcOnPayTypeChange(type) {
  const totalInput = document.getElementById('rc-cand-totalfee');
  const paidInput = document.getElementById('rc-cand-paidamount');
  if (type === 'Full Payment' && totalInput && paidInput) {
    paidInput.value = totalInput.value;
    rcCalculateFeePending();
  }
}

function rcSaveCandidateForm(e) {
  e.preventDefault();
  const name = document.getElementById('rc-cand-name').value.trim();
  const id = document.getElementById('rc-cand-id').value.trim();
  const phone = document.getElementById('rc-cand-phone').value.trim();
  const email = document.getElementById('rc-cand-email').value.trim();
  const gender = document.getElementById('rc-cand-gender').value;
  const dob = document.getElementById('rc-cand-dob').value;
  const address = document.getElementById('rc-cand-address').value.trim();
  const qualification = document.getElementById('rc-cand-qualification').value.trim();
  const college = document.getElementById('rc-cand-college').value.trim();
  const department = document.getElementById('rc-cand-dept').value.trim();
  const gradYear = document.getElementById('rc-cand-gradyear').value;
  const preferredRole = document.getElementById('rc-cand-role').value.trim();
  const preferredLocation = document.getElementById('rc-cand-location').value.trim();
  const experienceLevel = document.getElementById('rc-cand-experience').value;
  const careerObjective = document.getElementById('rc-cand-objective').value.trim();
  const joiningDate = document.getElementById('rc-cand-joining').value;
  const status = document.getElementById('rc-cand-status').value;

  const totalFee = Number(document.getElementById('rc-cand-totalfee').value || 0);
  const paidAmount = Number(document.getElementById('rc-cand-paidamount').value || 0);
  const pendingAmount = Math.max(0, totalFee - paidAmount);
  const paymentType = document.getElementById('rc-cand-paytype').value;

  const paymentStatus = pendingAmount === 0 ? 'Paid' : (paidAmount > 0 ? 'Partially Paid' : 'Pending');

  const avatar = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'CA';

  const newCandidate = {
    id,
    name,
    gender,
    dob,
    phone,
    email,
    address,
    qualification: qualification || 'B.Tech Graduate',
    college: college || 'Engineering College',
    department: department || 'Information Technology',
    gradYear,
    preferredRole: preferredRole || 'Software Engineer',
    preferredLocation: preferredLocation || 'Chennai',
    experienceLevel,
    careerObjective: careerObjective || 'Eager to build a successful career in software industry.',
    joiningDate,
    status,
    avatar,
    profileCompletion: 80,
    skills: [
      { name: "Core Java", category: "Programming", level: "Intermediate" },
      { name: "SQL", category: "Database", level: "Beginner" }
    ],
    projects: [],
    certifications: [],
    assessments: [
      { type: "Technical Assessment", name: "Initial Screening", score: 75, maxScore: 100, performance: "Good" }
    ],
    attendance: {
      totalDays: 1,
      present: 1,
      absent: 0,
      percentage: 100,
      rating: "Excellent Attendance"
    },
    payment: {
      totalFee,
      paidAmount,
      pendingAmount,
      paymentType,
      status: paymentStatus,
      dueDate: new Date(Date.now() + 15 * 86400000).toISOString().split('T')[0]
    },
    paymentHistory: [
      { receiptNo: 'RC-' + (1000 + Math.floor(Math.random() * 9000)), date: joiningDate, amount: paidAmount, method: 'UPI', status: 'Paid' }
    ],
    placement: {
      readinessScore: 65,
      status: "Under Review",
      breakdown: {
        skills: 65,
        projects: 40,
        certifications: 50,
        assessments: 75,
        attendance: 100,
        profileCompletion: 80
      }
    },
    documents: [
      { name: name.replace(/\s+/g, '_') + '_Application.pdf', type: 'Resume', date: joiningDate, status: 'Verified' }
    ]
  };

  const list = rcGetCandidates();
  list.unshift(newCandidate);
  rcSaveCandidates(list);

  rcToast('Candidate Added', 'Candidate ' + name + ' (' + id + ') registered successfully in Riya Consultancy.', 'success');
  rcNavigate('candidate-profile', { id });
}

// ==========================================
// 8. CANDIDATE PROFILE WITH 12 TABS
// ==========================================
let rcActiveProfileTab = 'overview';

function rcRenderCandidateProfile(candidateId) {
  const c = rcGetCandidateById(candidateId);
  const completion = c.profileCompletion || 85;

  return `
    <div class="rc-profile-container">
      <!-- Profile Header Bar -->
      <div class="card mb-4" style="border-radius:12px;border:1px solid #e3e6f0;box-shadow:0 4px 16px rgba(0,0,0,0.06);overflow:hidden;">
        <div style="background:linear-gradient(135deg, #0e2238 0%, #1a3a5c 100%);padding:1.5rem 2rem;color:#fff;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1.5rem;">
          <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
            <!-- Candidate Photo Avatar -->
            <div style="width:72px;height:72px;border-radius:50%;background:#4e73df;color:#fff;font-size:26px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.25);border:3px solid #fff;">
              ${c.avatar || 'CA'}
            </div>
            <div>
              <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                <h3 style="margin:0;font-size:22px;font-weight:700;color:#fff;">${c.name}</h3>
                <span class="badge" style="background:#e8f5e9;color:#2e7d32;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;">
                  ● ${c.status.toUpperCase()}
                </span>
                <span class="badge" style="background:rgba(255,255,255,0.2);color:#fff;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;">
                  ● ${(c.placement && c.placement.status ? c.placement.status : 'UNDER REVIEW').toUpperCase()}
                </span>
              </div>
              <div style="font-size:13px;color:#b0c4de;margin-top:6px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                <span><strong>Candidate ID:</strong> ${c.id}</span>
                <span><strong>Role Track:</strong> ${c.preferredRole}</span>
                <span><strong>Joining Date:</strong> ${rcFormatDate(c.joiningDate)}</span>
                <span><strong>Phone:</strong> ${c.phone}</span>
              </div>
            </div>
          </div>

          <!-- Profile Completion Bar -->
          <div style="min-width:200px;text-align:right;">
            <div style="font-size:12px;color:#b0c4de;margin-bottom:4px;">Profile Completion: <strong style="color:#fff;font-size:14px;">${completion}%</strong></div>
            <div style="height:8px;background:rgba(255,255,255,0.2);border-radius:4px;overflow:hidden;">
              <div style="width:${completion}%;height:100%;background:#1cc88a;border-radius:4px;"></div>
            </div>
            <div style="margin-top:10px;display:flex;justify-content:flex-end;gap:8px;">
              <button class="btn btn-xs btn-light" onclick="rcOpenRecordPaymentModal('${c.id}')" style="font-size:11.5px;padding:4px 10px;">
                <i class="bx bx-wallet"></i> Pay
              </button>
              <button class="btn btn-xs btn-primary" onclick="rcStartMessageWithCandidate('${c.id}')" style="font-size:11.5px;padding:4px 10px;">
                <i class="bx bx-chat"></i> Message
              </button>
            </div>
          </div>
        </div>

        <!-- 12 PROFILE TABS NAVIGATION -->
        <div style="background:#fff;border-top:1px solid #eaecf4;overflow-x:auto;">
          <ul class="nav nav-tabs rc-profile-tabs" style="border:none;margin:0;padding:0 1rem;display:flex;white-space:nowrap;">
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'overview' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('overview', '${c.id}')">
                <i class="bx bx-home-alt"></i> Overview
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'personal' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('personal', '${c.id}')">
                <i class="bx bx-user"></i> Personal Info
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'education' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('education', '${c.id}')">
                <i class="bx bx-book-open"></i> Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'skills' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('skills', '${c.id}')">
                <i class="bx bx-code-alt"></i> Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'projects' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('projects', '${c.id}')">
                <i class="bx bx-folder"></i> Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'certifications' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('certifications', '${c.id}')">
                <i class="bx bx-certification"></i> Certifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'assessments' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('assessments', '${c.id}')">
                <i class="bx bx-task"></i> Assessments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'attendance' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('attendance', '${c.id}')">
                <i class="bx bx-calendar-check"></i> Attendance
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'payments' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('payments', '${c.id}')" style="color:#2e7d32;font-weight:700;">
                <i class="bx bx-wallet"></i> Payments
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'documents' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('documents', '${c.id}')">
                <i class="bx bx-file"></i> Documents
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'placement' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('placement', '${c.id}')" style="color:#4e73df;font-weight:700;">
                <i class="bx bx-target-lock"></i> Placement Readiness
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${rcActiveProfileTab === 'activity' ? 'active' : ''}" href="javascript:void(0)" onclick="rcSwitchProfileTab('activity', '${c.id}')">
                <i class="bx bx-time-five"></i> Activity
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Active Tab Content Container -->
      <div id="rc-profile-tab-content">
        ${rcRenderProfileTabContent(rcActiveProfileTab, c)}
      </div>
    </div>
  `;
}

function rcSwitchProfileTab(tabName, candidateId) {
  rcActiveProfileTab = tabName;
  const c = rcGetCandidateById(candidateId);
  const tabContent = document.getElementById('rc-profile-tab-content');
  if (tabContent) {
    tabContent.innerHTML = rcRenderProfileTabContent(tabName, c);
  }
  // update active class on tabs
  document.querySelectorAll('.rc-profile-tabs .nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.textContent.toLowerCase().includes(tabName)) {
      link.classList.add('active');
    }
  });
}

function rcRenderProfileTabContent(tab, c) {
  switch (tab) {
    case 'overview':
      return `
        <div style="display:grid;grid-template-columns:2fr 1fr;gap:1.25rem;">
          <!-- Left: Key Stats & Readiness Summary -->
          <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
            <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Overview &amp; Placement Readiness</h6>
            <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:1rem;margin-bottom:1.5rem;">
              <div style="background:#f8f9fc;padding:12px;border-radius:8px;border:1px solid #eaecf4;text-align:center;">
                <div style="font-size:11px;color:#858796;">Readiness Score</div>
                <div style="font-size:22px;font-weight:700;color:#2e7d32;">${c.placement ? c.placement.readinessScore : 85}%</div>
                <span class="badge" style="background:#e8f5e9;color:#2e7d32;font-size:10px;">${c.placement ? c.placement.status : 'Ready'}</span>
              </div>
              <div style="background:#f8f9fc;padding:12px;border-radius:8px;border:1px solid #eaecf4;text-align:center;">
                <div style="font-size:11px;color:#858796;">Attendance</div>
                <div style="font-size:22px;font-weight:700;color:#4e73df;">${c.attendance ? c.attendance.percentage : 90}%</div>
                <small style="font-size:10px;color:#858796;">${c.attendance ? c.attendance.present : 54} / ${c.attendance ? c.attendance.totalDays : 60} Days</small>
              </div>
              <div style="background:#f8f9fc;padding:12px;border-radius:8px;border:1px solid #eaecf4;text-align:center;">
                <div style="font-size:11px;color:#858796;">Fees Status</div>
                <div style="font-size:16px;font-weight:700;color:${c.payment && c.payment.pendingAmount === 0 ? '#1cc88a' : '#e74a3b'};margin-top:4px;">
                  ${c.payment ? c.payment.status : 'Partially Paid'}
                </div>
                <small style="font-size:10px;color:#858796;">Due: ${c.payment ? rcFormatCurrency(c.payment.pendingAmount) : '₹0'}</small>
              </div>
            </div>

            <h6 style="font-weight:700;margin-bottom:0.75rem;color:var(--text-dark);">Verified Skills</h6>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.5rem;">
              ${(c.skills || []).map(s => `
                <div style="background:#f1f4fb;border:1px solid #d4def1;border-radius:6px;padding:6px 12px;display:flex;align-items:center;gap:8px;">
                  <strong>${s.name}</strong>
                  <span class="badge" style="background:#4e73df;color:#fff;font-size:10px;">${s.level}</span>
                </div>
              `).join('')}
            </div>

            <h6 style="font-weight:700;margin-bottom:0.75rem;color:var(--text-dark);">Career Objective</h6>
            <p style="font-size:13px;color:#5a5c69;line-height:1.6;background:#fdfdfe;border-left:3px solid #4e73df;padding:10px 14px;border-radius:0 6px 6px 0;">
              ${c.careerObjective || 'Passionate software engineer ready to contribute to scalable cloud products.'}
            </p>
          </div>

          <!-- Right: Quick Contact & Joining Details -->
          <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
            <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Details</h6>
            <div style="display:flex;flex-direction:column;gap:12px;font-size:13px;">
              <div>
                <span style="color:#858796;display:block;font-size:11px;">Candidate ID</span>
                <strong>${c.id}</strong>
              </div>
              <div>
                <span style="color:#858796;display:block;font-size:11px;">Qualification</span>
                <strong>${c.qualification}</strong>
              </div>
              <div>
                <span style="color:#858796;display:block;font-size:11px;">College / Department</span>
                <strong>${c.college}</strong><br><small style="color:#858796;">${c.department}</small>
              </div>
              <div>
                <span style="color:#858796;display:block;font-size:11px;">Email</span>
                <a href="mailto:${c.email}">${c.email}</a>
              </div>
              <div>
                <span style="color:#858796;display:block;font-size:11px;">Phone</span>
                <strong>${c.phone}</strong>
              </div>
              <div>
                <span style="color:#858796;display:block;font-size:11px;">Preferred Location</span>
                <strong>${c.preferredLocation}</strong>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'personal':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1.25rem;color:var(--text-dark);">Personal Information</h6>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;font-size:13px;">
            <div><span style="color:#858796;display:block;font-size:11px;">Full Name</span><strong>${c.name}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Gender</span><strong>${c.gender || 'Not specified'}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Date of Birth</span><strong>${rcFormatDate(c.dob)}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Phone Number</span><strong>${c.phone}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Email Address</span><strong>${c.email}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Experience Level</span><strong>${c.experienceLevel || 'Fresher'}</strong></div>
            <div style="grid-column:1/-1;"><span style="color:#858796;display:block;font-size:11px;">Address</span><strong>${c.address || 'Chennai, Tamil Nadu'}</strong></div>
          </div>
        </div>
      `;

    case 'education':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1.25rem;color:var(--text-dark);">Education Details</h6>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1.25rem;font-size:13px;">
            <div><span style="color:#858796;display:block;font-size:11px;">Qualification</span><strong>${c.qualification}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">College / Institution</span><strong>${c.college}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Department</span><strong>${c.department}</strong></div>
            <div><span style="color:#858796;display:block;font-size:11px;">Graduation Year</span><strong>${c.gradYear || '2024'}</strong></div>
          </div>
        </div>
      `;

    case 'skills':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <h6 style="font-weight:700;margin:0;color:var(--text-dark);">Candidate Skills Inventory</h6>
            <button class="btn btn-sm btn-outline-primary" onclick="rcOpenAddSkillModal('${c.id}')">+ Add Skill</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;">
            ${(c.skills || []).map(s => `
              <div style="border:1px solid #e3e6f0;border-radius:8px;padding:12px;background:#f8f9fc;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <strong>${s.name}</strong>
                  <span class="badge" style="background:#4e73df;color:#fff;font-size:10px;">${s.level}</span>
                </div>
                <small style="color:#858796;">Category: ${s.category}</small>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'projects':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Projects</h6>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;">
            ${(c.projects || []).length === 0 ? '<p style="color:#858796;">No projects recorded yet for this candidate.</p>' : c.projects.map(p => `
              <div style="border:1px solid #e3e6f0;border-radius:8px;padding:1rem;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.04);">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <h6 style="font-weight:700;margin:0;color:#2c3e50;">${p.name}</h6>
                  <span class="badge" style="background:#e8eaf6;color:#3f51b5;font-size:10px;">${p.type}</span>
                </div>
                <p style="font-size:12.5px;color:#5a5c69;margin:8px 0;line-height:1.5;">${p.desc}</p>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px;">
                  ${(p.tech || []).map(t => `<span class="badge" style="background:#f1f3f9;color:#2c3e50;font-size:10px;">${t}</span>`).join('')}
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:11.5px;border-top:1px solid #eaecf4;padding-top:8px;">
                  <span style="color:#858796;">Completed: ${rcFormatDate(p.date)}</span>
                  <div style="display:flex;gap:8px;">
                    ${p.github ? `<a href="${p.github}" target="_blank" style="color:#4e73df;font-weight:600;"><i class="bx bxl-github"></i> GitHub</a>` : ''}
                    ${p.demo ? `<a href="${p.demo}" target="_blank" style="color:#1cc88a;font-weight:600;"><i class="bx bx-link-external"></i> Demo</a>` : ''}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'certifications':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Certifications</h6>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1rem;">
            ${(c.certifications || []).length === 0 ? '<p style="color:#858796;">No verified certifications yet.</p>' : c.certifications.map(cert => `
              <div style="border:1px solid #e3e6f0;border-radius:8px;padding:1rem;background:#f8f9fc;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                  <i class="bx bx-certification" style="font-size:28px;color:#f6c23e;"></i>
                  <div>
                    <strong style="color:#2c3e50;">${cert.name}</strong>
                    <div style="font-size:11px;color:#858796;">${cert.issuer}</div>
                  </div>
                </div>
                <div style="font-size:11.5px;color:#5a5c69;border-top:1px dashed #d1d3e2;padding-top:6px;margin-top:6px;display:flex;justify-content:space-between;">
                  <span>ID: ${cert.id}</span>
                  <span>Issued: ${rcFormatDate(cert.date)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'assessments':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Assessments &amp; Mock Interviews</h6>
          <div class="table-responsive">
            <table class="table table-hover" style="font-size:13px;margin:0;">
              <thead style="background:#f8f9fc;">
                <tr>
                  <th>Assessment Type</th>
                  <th>Assessment Name</th>
                  <th>Score</th>
                  <th>Max Score</th>
                  <th>Percentage</th>
                  <th>Performance</th>
                </tr>
              </thead>
              <tbody>
                ${(c.assessments || []).map(a => `
                  <tr>
                    <td><strong>${a.type}</strong></td>
                    <td>${a.name}</td>
                    <td><strong>${a.score}</strong></td>
                    <td>${a.maxScore}</td>
                    <td><strong>${Math.round((a.score / a.maxScore) * 100)}%</strong></td>
                    <td>${rcGetPerformanceBadge(a.performance)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'attendance':
      const att = c.attendance || { totalDays: 60, present: 54, absent: 6, percentage: 90, rating: 'Excellent Attendance' };
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Attendance Overview</h6>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:1rem;margin-bottom:1.5rem;">
            <div style="background:#f8f9fc;padding:12px;border-radius:8px;text-align:center;">
              <div style="font-size:11px;color:#858796;">Total Days</div>
              <div style="font-size:22px;font-weight:700;color:#2c3e50;">${att.totalDays}</div>
            </div>
            <div style="background:#e8f5e9;padding:12px;border-radius:8px;text-align:center;">
              <div style="font-size:11px;color:#2e7d32;">Present Days</div>
              <div style="font-size:22px;font-weight:700;color:#2e7d32;">${att.present}</div>
            </div>
            <div style="background:#ffebee;padding:12px;border-radius:8px;text-align:center;">
              <div style="font-size:11px;color:#c62828;">Absent Days</div>
              <div style="font-size:22px;font-weight:700;color:#c62828;">${att.absent}</div>
            </div>
            <div style="background:#e3f2fd;padding:12px;border-radius:8px;text-align:center;">
              <div style="font-size:11px;color:#1565c0;">Attendance %</div>
              <div style="font-size:22px;font-weight:700;color:#1565c0;">${att.percentage}%</div>
              <small style="color:#1565c0;font-weight:600;">${att.rating}</small>
            </div>
          </div>
          <div style="background:#fff;border:1px solid #e3e6f0;border-radius:8px;padding:1rem;">
            <h6 style="font-size:13px;font-weight:700;margin-bottom:8px;">Monthly Attendance Progress</h6>
            <div style="height:12px;background:#eaecf4;border-radius:6px;overflow:hidden;">
              <div style="width:${att.percentage}%;height:100%;background:#1cc88a;"></div>
            </div>
          </div>
        </div>
      `;

    case 'payments':
      // SECTION 5: CANDIDATE PAYMENT DETAILS
      const p = c.payment || { totalFee: 30000, paidAmount: 20000, pendingAmount: 10000, status: 'Partially Paid' };
      const hist = c.paymentHistory || [];
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
            <div>
              <h5 style="font-weight:700;margin:0;color:var(--text-dark);display:flex;align-items:center;gap:8px;">
                <i class="bx bx-wallet" style="color:#1cc88a;"></i> Candidate Fee &amp; Payment Details
              </h5>
              <small style="color:#858796;">Admission fee breakdown and installment history for ${c.name}</small>
            </div>
            <button class="btn btn-sm btn-primary" onclick="rcOpenRecordPaymentModal('${c.id}')" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
              <i class="bx bx-plus"></i> + Record New Payment
            </button>
          </div>

          <!-- 4 Financial Breakdown Metric Cards -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;margin-bottom:1.5rem;">
            <div style="background:#f8f9fc;padding:1.25rem;border-radius:8px;border:1px solid #eaecf4;border-left:4px solid #4e73df;">
              <div style="font-size:11px;font-weight:700;color:#4e73df;text-transform:uppercase;">TOTAL FEE</div>
              <div style="font-size:24px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(p.totalFee)}</div>
              <small style="color:#858796;">Agreed course fee</small>
            </div>

            <div style="background:#f8f9fc;padding:1.25rem;border-radius:8px;border:1px solid #eaecf4;border-left:4px solid #1cc88a;">
              <div style="font-size:11px;font-weight:700;color:#1cc88a;text-transform:uppercase;">AMOUNT PAID</div>
              <div style="font-size:24px;font-weight:700;color:#1cc88a;margin-top:4px;">${rcFormatCurrency(p.paidAmount)}</div>
              <small style="color:#1cc88a;font-weight:600;">Verified collected</small>
            </div>

            <div style="background:#f8f9fc;padding:1.25rem;border-radius:8px;border:1px solid #eaecf4;border-left:4px solid #e74a3b;">
              <div style="font-size:11px;font-weight:700;color:#e74a3b;text-transform:uppercase;">PENDING BALANCE</div>
              <div style="font-size:24px;font-weight:700;color:#e74a3b;margin-top:4px;">${rcFormatCurrency(p.pendingAmount)}</div>
              <small style="color:#e74a3b;font-weight:600;">Due balance</small>
            </div>

            <div style="background:#f8f9fc;padding:1.25rem;border-radius:8px;border:1px solid #eaecf4;border-left:4px solid #f6c23e;">
              <div style="font-size:11px;font-weight:700;color:#f6c23e;text-transform:uppercase;">PAYMENT STATUS</div>
              <div style="margin-top:8px;">${rcGetPaymentStatusBadge(p.status)}</div>
              <small style="color:#858796;">Installment track</small>
            </div>
          </div>

          <!-- Payment History Table -->
          <h6 style="font-weight:700;margin-bottom:0.75rem;color:var(--text-dark);">Payment Transaction History</h6>
          <div class="table-responsive">
            <table class="table table-hover" style="font-size:13px;margin:0;">
              <thead style="background:#0e2238;color:#fff;">
                <tr>
                  <th>Receipt Number</th>
                  <th>Payment Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${hist.length === 0 ? `
                  <tr><td colspan="5" style="text-align:center;padding:1.5rem;color:#858796;">No payment receipts recorded yet.</td></tr>
                ` : hist.map(h => `
                  <tr>
                    <td><strong>${h.receiptNo}</strong></td>
                    <td>${rcFormatDate(h.date)}</td>
                    <td style="font-weight:700;color:#1cc88a;">${rcFormatCurrency(h.amount)}</td>
                    <td><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:3px 8px;border-radius:4px;">${h.method}</span></td>
                    <td><span class="badge" style="background:#e8f5e9;color:#2e7d32;padding:3px 8px;border-radius:4px;">${h.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'documents':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
            <h6 style="font-weight:700;margin:0;color:var(--text-dark);">Candidate Document Repository</h6>
            <button class="btn btn-sm btn-outline-primary" onclick="rcOpenUploadDocModal('${c.id}')">+ Upload Document</button>
          </div>
          <div class="table-responsive">
            <table class="table table-hover" style="font-size:13px;margin:0;">
              <thead style="background:#f8f9fc;">
                <tr>
                  <th>Document Name</th>
                  <th>Document Type</th>
                  <th>Upload Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${(c.documents || []).length === 0 ? '<tr><td colspan="5" style="text-align:center;">No documents uploaded.</td></tr>' : c.documents.map(d => `
                  <tr>
                    <td><i class="bx bx-file" style="color:#4e73df;margin-right:6px;"></i><strong>${d.name}</strong></td>
                    <td><span class="badge" style="background:#f1f3f9;color:#2c3e50;">${d.type}</span></td>
                    <td>${rcFormatDate(d.date)}</td>
                    <td><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;">${d.status}</span></td>
                    <td>
                      <button class="btn btn-xs btn-outline-primary" onclick="rcToast('Download Started', 'Downloading ${d.name}...', 'info')">Download</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'placement':
      // SECTION 13: PLACEMENT READINESS SCORE ENGINE
      const pl = c.placement || { readinessScore: 85, status: 'Ready', breakdown: { skills: 85, projects: 80, certifications: 75, assessments: 88, attendance: 92, profileCompletion: 90 } };
      const bk = pl.breakdown || { skills: 85, projects: 80, certifications: 75, assessments: 88, attendance: 92, profileCompletion: 90 };
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h5 style="font-weight:700;margin-bottom:1.5rem;color:var(--text-dark);display:flex;align-items:center;gap:8px;">
            <i class="bx bx-target-lock" style="color:#4e73df;"></i> Placement Readiness Evaluation
          </h5>

          <div style="display:grid;grid-template-columns:1fr 2fr;gap:1.5rem;align-items:center;margin-bottom:1.5rem;">
            <!-- Readiness Dial Score -->
            <div style="background:#f8f9fc;border:1px solid #eaecf4;border-radius:12px;padding:1.5rem;text-align:center;">
              <div style="font-size:12px;font-weight:700;color:#858796;text-transform:uppercase;margin-bottom:8px;">PLACEMENT READINESS SCORE</div>
              <div style="font-size:48px;font-weight:800;color:${pl.readinessScore >= 80 ? '#2e7d32' : (pl.readinessScore >= 50 ? '#f57f17' : '#d84315')};line-height:1;">
                ${pl.readinessScore}%
              </div>
              <div style="margin-top:10px;">
                ${rcGetPlacementStatusBadge(pl.status)}
              </div>
              <small style="color:#858796;display:block;margin-top:8px;">
                Criteria: &ge;80% Ready &bull; 50-79% Under Review &bull; &lt;50% Needs Improvement
              </small>
            </div>

            <!-- 6 Factors Breakdown -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Skills</span><strong>${bk.skills}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.skills}%;height:100%;background:#4e73df;"></div></div>
              </div>

              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Projects</span><strong>${bk.projects}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.projects}%;height:100%;background:#1cc88a;"></div></div>
              </div>

              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Certifications</span><strong>${bk.certifications}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.certifications}%;height:100%;background:#36b9cc;"></div></div>
              </div>

              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Assessments</span><strong>${bk.assessments}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.assessments}%;height:100%;background:#f6c23e;"></div></div>
              </div>

              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Attendance</span><strong>${bk.attendance}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.attendance}%;height:100%;background:#2e7d32;"></div></div>
              </div>

              <div style="background:#fff;border:1px solid #e3e6f0;padding:10px 14px;border-radius:8px;">
                <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px;">
                  <span>Profile Completion</span><strong>${bk.profileCompletion}%</strong>
                </div>
                <div style="height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;"><div style="width:${bk.profileCompletion}%;height:100%;background:#6f42c1;"></div></div>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'activity':
      return `
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">Candidate Activity Log</h6>
          <div style="border-left:2px solid #eaecf4;margin-left:10px;padding-left:16px;">
            <div style="margin-bottom:1rem;">
              <div style="font-size:11px;color:#858796;">${rcFormatDate(c.joiningDate)} &bull; Admission</div>
              <div style="font-size:13px;font-weight:600;">Candidate ${c.name} enrolled in Riya Consultancy.</div>
            </div>
            <div style="margin-bottom:1rem;">
              <div style="font-size:11px;color:#858796;">${rcFormatDate(c.joiningDate)} &bull; Fee Collection</div>
              <div style="font-size:13px;font-weight:600;">Initial installment of ${rcFormatCurrency(c.payment ? c.payment.paidAmount : 10000)} recorded.</div>
            </div>
            <div>
              <div style="font-size:11px;color:#858796;">Recent &bull; Evaluation</div>
              <div style="font-size:13px;font-weight:600;">Placement readiness calculated: ${c.placement ? c.placement.readinessScore : 85}%.</div>
            </div>
          </div>
        </div>
      `;

    default:
      return '<p>Select a tab above to view candidate information.</p>';
  }
}

// ==========================================
// 9. FEES & PAYMENTS MAIN SECTION
// ==========================================
function rcRenderFeesPayments(activeSub = 'payments') {
  const candidates = rcGetCandidates();

  return `
    <div class="rc-fees-container">
      <!-- Section Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-wallet" style="color:#1cc88a;"></i> Fees &amp; Payments
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Track candidate fee payments, installment receipts, pending balances, and reminders.
          </p>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-sm btn-primary" onclick="rcOpenRecordPaymentModal()" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
            <i class="bx bx-plus"></i> + Record New Payment
          </button>
          <button class="btn btn-sm btn-outline-info" onclick="rcNavigate('revenue-overview')" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
            <i class="bx bx-line-chart"></i> Revenue Overview
          </button>
        </div>
      </div>

      <!-- Nav Pills for Sub-Sections -->
      <div class="card mb-3" style="border-radius:10px;border:1px solid #e3e6f0;padding:0.75rem 1rem;">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-sm ${activeSub === 'payments' ? 'btn-primary' : 'btn-light'}" onclick="rcNavigate('candidate-payments')" style="font-weight:600;">
            Candidate Payments
          </button>
          <button class="btn btn-sm ${activeSub === 'history' ? 'btn-primary' : 'btn-light'}" onclick="rcNavigate('payment-history')" style="font-weight:600;">
            Payment History
          </button>
          <button class="btn btn-sm ${activeSub === 'pending' ? 'btn-primary' : 'btn-light'}" onclick="rcNavigate('pending-payments')" style="font-weight:600;">
            Pending Payments &amp; Reminders
          </button>
        </div>
      </div>

      ${activeSub === 'payments' ? rcRenderCandidatePaymentsTable(candidates) : (activeSub === 'history' ? rcRenderPaymentHistoryTable(candidates) : rcRenderPendingPaymentsTable(candidates))}
    </div>
  `;
}

function rcRenderCandidatePaymentsTable(candidates) {
  return `
    <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
      <div class="table-responsive">
        <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
          <thead style="background:#0e2238;color:#fff;">
            <tr>
              <th style="padding:12px 14px;">Candidate</th>
              <th style="padding:12px 14px;">Candidate ID</th>
              <th style="padding:12px 14px;">Total Fee</th>
              <th style="padding:12px 14px;">Amount Paid</th>
              <th style="padding:12px 14px;">Pending Balance</th>
              <th style="padding:12px 14px;">Payment Status</th>
              <th style="padding:12px 14px;text-align:center;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${candidates.map(c => {
              const p = c.payment || { totalFee: 30000, paidAmount: 20000, pendingAmount: 10000, status: 'Partially Paid' };
              return `
                <tr>
                  <td style="padding:12px 14px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <span style="width:30px;height:30px;border-radius:50%;background:#4e73df;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;">${c.avatar || 'CA'}</span>
                      <div>
                        <strong>${c.name}</strong><br>
                        <small style="color:#858796;">${c.phone}</small>
                      </div>
                    </div>
                  </td>
                  <td style="padding:12px 14px;"><strong>${c.id}</strong></td>
                  <td style="padding:12px 14px;font-weight:600;">${rcFormatCurrency(p.totalFee)}</td>
                  <td style="padding:12px 14px;font-weight:700;color:#1cc88a;">${rcFormatCurrency(p.paidAmount)}</td>
                  <td style="padding:12px 14px;font-weight:700;color:${p.pendingAmount > 0 ? '#e74a3b' : '#2e7d32'};">${rcFormatCurrency(p.pendingAmount)}</td>
                  <td style="padding:12px 14px;">${rcGetPaymentStatusBadge(p.status)}</td>
                  <td style="padding:12px 14px;text-align:center;">
                    <button class="btn btn-sm btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})" style="padding:3px 10px;font-size:11.5px;">
                      View
                    </button>
                    ${p.pendingAmount > 0 ? `
                      <button class="btn btn-sm btn-success" onclick="rcOpenRecordPaymentModal('${c.id}')" style="padding:3px 10px;font-size:11.5px;margin-left:4px;">
                        + Pay
                      </button>
                    ` : ''}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function rcRenderPaymentHistoryTable(candidates) {
  // Aggregate all payments
  let allPayments = [];
  candidates.forEach(c => {
    (c.paymentHistory || []).forEach(h => {
      allPayments.push({
        receiptNo: h.receiptNo,
        candidateName: c.name,
        candidateId: c.id,
        date: h.date,
        amount: h.amount,
        method: h.method,
        status: h.status
      });
    });
  });

  return `
    <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
      <div class="table-responsive">
        <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
          <thead style="background:#0e2238;color:#fff;">
            <tr>
              <th style="padding:12px 14px;">Receipt Number</th>
              <th style="padding:12px 14px;">Candidate</th>
              <th style="padding:12px 14px;">Date</th>
              <th style="padding:12px 14px;">Amount</th>
              <th style="padding:12px 14px;">Payment Method</th>
              <th style="padding:12px 14px;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${allPayments.map(p => `
              <tr>
                <td style="padding:12px 14px;"><strong>${p.receiptNo}</strong></td>
                <td style="padding:12px 14px;">
                  <strong>${p.candidateName}</strong><br>
                  <small style="color:#858796;">${p.candidateId}</small>
                </td>
                <td style="padding:12px 14px;">${rcFormatDate(p.date)}</td>
                <td style="padding:12px 14px;font-weight:700;color:#1cc88a;">${rcFormatCurrency(p.amount)}</td>
                <td style="padding:12px 14px;"><span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:3px 8px;border-radius:4px;">${p.method}</span></td>
                <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;padding:3px 8px;border-radius:4px;">${p.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function rcRenderPendingPaymentsTable(candidates) {
  const pendingList = candidates.filter(c => c.payment && c.payment.pendingAmount > 0);

  return `
    <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
      <div style="padding:1rem 1.25rem;background:#fff8e1;border-bottom:1px solid #ffe082;display:flex;align-items:center;gap:10px;font-size:13px;color:#856404;">
        <i class="bx bx-error" style="font-size:20px;color:#f57f17;"></i>
        <span>There are <strong>${pendingList.length} candidates</strong> with pending fee installments. Use "Send Reminder" to push an alert to their communication tab.</span>
      </div>
      <div class="table-responsive">
        <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
          <thead style="background:#0e2238;color:#fff;">
            <tr>
              <th style="padding:12px 14px;">Candidate</th>
              <th style="padding:12px 14px;">Total Fee</th>
              <th style="padding:12px 14px;">Paid</th>
              <th style="padding:12px 14px;">Pending</th>
              <th style="padding:12px 14px;">Due Date</th>
              <th style="padding:12px 14px;text-align:center;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${pendingList.map(c => `
              <tr>
                <td style="padding:12px 14px;">
                  <strong>${c.name}</strong><br>
                  <small style="color:#858796;">${c.id} &bull; ${c.phone}</small>
                </td>
                <td style="padding:12px 14px;">${rcFormatCurrency(c.payment.totalFee)}</td>
                <td style="padding:12px 14px;color:#1cc88a;font-weight:700;">${rcFormatCurrency(c.payment.paidAmount)}</td>
                <td style="padding:12px 14px;color:#e74a3b;font-weight:700;">${rcFormatCurrency(c.payment.pendingAmount)}</td>
                <td style="padding:12px 14px;">${rcFormatDate(c.payment.dueDate)}</td>
                <td style="padding:12px 14px;text-align:center;">
                  <button class="btn btn-sm btn-outline-danger" onclick="rcSendPaymentReminder('${c.id}', '${c.name}', ${c.payment.pendingAmount})" style="display:inline-flex;align-items:center;gap:4px;font-weight:600;padding:4px 10px;">
                    <i class="bx bx-bell"></i> Send Reminder
                  </button>
                  <button class="btn btn-sm btn-primary" onclick="rcOpenRecordPaymentModal('${c.id}')" style="margin-left:6px;padding:4px 10px;">
                    + Pay
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Payment Modal & Processor
function rcOpenRecordPaymentModal(preselectedId = '') {
  const candidates = rcGetCandidates();
  const options = candidates.map(c => `<option value="${c.id}" ${c.id === preselectedId ? 'selected' : ''}>${c.name} (${c.id}) - Due: ${rcFormatCurrency(c.payment ? c.payment.pendingAmount : 0)}</option>`).join('');
  const today = new Date().toISOString().split('T')[0];

  const html = `
    <div class="card" style="width:100%;max-width:480px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-wallet" style="color:#1cc88a;"></i> Record Candidate Payment
        </h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <form onsubmit="rcSubmitPayment(event)" style="padding:1.5rem;">
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Select Candidate <span style="color:#e74a3b;">*</span></label>
          <select id="rc-modal-cand-select" class="form-select" required onchange="rcOnPaymentModalSelectChange(this.value)">
            ${options}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Payment Amount (₹) <span style="color:#e74a3b;">*</span></label>
          <input type="number" id="rc-modal-pay-amount" class="form-control" value="10000" min="500" required>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Payment Date <span style="color:#e74a3b;">*</span></label>
          <input type="date" id="rc-modal-pay-date" class="form-control" value="${today}" required>
        </div>
        <div class="mb-4">
          <label class="form-label" style="font-size:12px;font-weight:600;">Payment Method <span style="color:#e74a3b;">*</span></label>
          <select id="rc-modal-pay-method" class="form-select" required>
            <option value="UPI" selected>UPI (GPay / PhonePe / Paytm)</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer (NEFT / IMPS)</option>
            <option value="Card">Credit / Debit Card</option>
          </select>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button type="button" class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button type="submit" class="btn btn-primary" style="font-weight:600;">Record Transaction</button>
        </div>
      </form>
    </div>
  `;
  rcOpenModal(html);
}

function rcSubmitPayment(e) {
  e.preventDefault();
  const candId = document.getElementById('rc-modal-cand-select').value;
  const amount = Number(document.getElementById('rc-modal-pay-amount').value || 0);
  const date = document.getElementById('rc-modal-pay-date').value;
  const method = document.getElementById('rc-modal-pay-method').value;

  const candidates = rcGetCandidates();
  const c = candidates.find(item => item.id === candId);
  if (c) {
    if (!c.payment) {
      c.payment = { totalFee: 30000, paidAmount: 0, pendingAmount: 30000, status: 'Pending' };
    }
    c.payment.paidAmount += amount;
    c.payment.pendingAmount = Math.max(0, c.payment.totalFee - c.payment.paidAmount);
    c.payment.status = c.payment.pendingAmount === 0 ? 'Paid' : 'Partially Paid';

    if (!c.paymentHistory) c.paymentHistory = [];
    const receiptNo = 'RC-' + (1000 + Math.floor(Math.random() * 9000));
    c.paymentHistory.push({
      receiptNo,
      date,
      amount,
      method,
      status: 'Paid'
    });

    rcSaveCandidates(candidates);
    rcCloseModal();
    rcToast('Payment Recorded', 'Received ' + rcFormatCurrency(amount) + ' from ' + c.name + ' (' + receiptNo + ').', 'success');

    // Refresh active view
    if (rcCurrentSubPage === 'candidate-profile') {
      rcSwitchProfileTab('payments', candId);
    } else {
      rcNavigate(rcCurrentSubPage);
    }
  }
}

function rcSendPaymentReminder(candId, candName, pendingAmt) {
  // Pre-fill reminder into communication modal
  rcOpenCommunicationReminderModal(candId, candName, pendingAmt);
}

function rcOpenCommunicationReminderModal(candId, candName, pendingAmt) {
  const defaultText = 'Dear ' + candName + ', this is a gentle reminder that an installment balance of ' + rcFormatCurrency(pendingAmt) + ' is due for your Riya Consultancy registration. Kindly settle via UPI or Net Banking. Thank you.';

  const html = `
    <div class="card" style="width:100%;max-width:520px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-bell" style="color:#e74a3b;"></i> Send Payment Reminder
        </h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <div style="padding:1.5rem;">
        <div style="font-size:13px;margin-bottom:1rem;">
          Recipient: <strong>${candName} (${candId})</strong><br>
          Pending Amount: <strong style="color:#e74a3b;">${rcFormatCurrency(pendingAmt)}</strong>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Reminder Message</label>
          <textarea id="rc-reminder-text" class="form-control" rows="4">${defaultText}</textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button class="btn btn-primary" onclick="rcDispatchReminder('${candId}', '${candName}')">
            <i class="bx bx-paper-plane"></i> Send Reminder Now
          </button>
        </div>
      </div>
    </div>
  `;
  rcOpenModal(html);
}

function rcDispatchReminder(candId, candName) {
  const msg = document.getElementById('rc-reminder-text').value;
  rcCloseModal();
  rcToast('Reminder Sent', 'Payment reminder dispatched to ' + candName + ' via SMS &amp; Portal Notification.', 'success');
}

// ==========================================
// 10. REVENUE OVERVIEW & ANALYTICS
// ==========================================
function rcRenderRevenueOverview() {
  const totalRev = 1250000;
  const currentMonth = 180000;
  const lastMonth = 150000;
  const pendingRev = 320000;

  return `
    <div class="rc-revenue-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-line-chart" style="color:var(--primary);"></i> Revenue Overview &amp; Financial Analytics
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Comprehensive cash flow reports, monthly collections, and revenue forecasts for Riya Consultancy.
          </p>
        </div>
        <button class="btn btn-sm btn-outline-secondary" onclick="rcNavigate('candidate-payments')">
          &larr; Back to Payments
        </button>
      </div>

      <!-- 4 Top Financial Highlights -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;margin-bottom:1.5rem;">
        <div class="card p-3" style="border-radius:10px;border-left:4px solid #1cc88a;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size:11px;font-weight:700;color:#1cc88a;text-transform:uppercase;">TOTAL REVENUE</div>
          <div style="font-size:24px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(totalRev)}</div>
          <small style="color:#858796;">Total admissions collected</small>
        </div>

        <div class="card p-3" style="border-radius:10px;border-left:4px solid #4e73df;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size:11px;font-weight:700;color:#4e73df;text-transform:uppercase;">CURRENT MONTH</div>
          <div style="font-size:24px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(currentMonth)}</div>
          <small style="color:#1cc88a;font-weight:600;">+20% growth vs last month</small>
        </div>

        <div class="card p-3" style="border-radius:10px;border-left:4px solid #36b9cc;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size:11px;font-weight:700;color:#36b9cc;text-transform:uppercase;">LAST MONTH</div>
          <div style="font-size:24px;font-weight:700;color:#2c3e50;margin-top:4px;">${rcFormatCurrency(lastMonth)}</div>
          <small style="color:#858796;">August 2026 total</small>
        </div>

        <div class="card p-3" style="border-radius:10px;border-left:4px solid #e74a3b;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="font-size:11px;font-weight:700;color:#e74a3b;text-transform:uppercase;">PENDING REVENUE</div>
          <div style="font-size:24px;font-weight:700;color:#e74a3b;margin-top:4px;">${rcFormatCurrency(pendingRev)}</div>
          <small style="color:#e74a3b;font-weight:600;">32 Candidate balances</small>
        </div>
      </div>

      <!-- 4 ANALYTICS CHARTS (Monthly Revenue, Payment Status Distribution, Collections, Pending vs Collected) -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.5rem;">
        <!-- Chart 1: Monthly Revenue Chart -->
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">1. Monthly Revenue Chart (2026)</h6>
          <div style="height:200px;display:flex;align-items:flex-end;gap:14px;border-bottom:1px solid #eaecf4;padding-bottom:10px;">
            <div style="flex:1;text-align:center;"><div style="height:60%;background:#4e73df;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Jan</div><strong style="font-size:9px;">₹1.2L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:75%;background:#4e73df;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Feb</div><strong style="font-size:9px;">₹1.5L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:90%;background:#1cc88a;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Mar</div><strong style="font-size:9px;">₹1.8L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:70%;background:#4e73df;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Apr</div><strong style="font-size:9px;">₹1.4L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:80%;background:#4e73df;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">May</div><strong style="font-size:9px;">₹1.6L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:85%;background:#4e73df;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Jun</div><strong style="font-size:9px;">₹1.7L</strong></div>
            <div style="flex:1;text-align:center;"><div style="height:90%;background:#1cc88a;border-radius:3px 3px 0 0;"></div><div style="font-size:10px;margin-top:4px;">Sep</div><strong style="font-size:9px;">₹1.8L</strong></div>
          </div>
        </div>

        <!-- Chart 2: Payment Status Distribution -->
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">2. Payment Status Distribution</h6>
          <div style="display:flex;align-items:center;justify-content:space-around;height:190px;">
            <!-- Simple Doughnut Simulation -->
            <div style="width:130px;height:130px;border-radius:50%;background:conic-gradient(#1cc88a 0% 60%, #f6c23e 60% 85%, #e74a3b 85% 100%);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
              <div style="width:70px;height:70px;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:700;font-size:12px;">
                <span>250</span><small style="font-size:9px;color:#858796;">Total</small>
              </div>
            </div>
            <div style="font-size:12px;display:flex;flex-direction:column;gap:8px;">
              <span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;background:#1cc88a;border-radius:2px;"></span> Paid (60% - 150)</span>
              <span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;background:#f6c23e;border-radius:2px;"></span> Partially Paid (25% - 62)</span>
              <span style="display:flex;align-items:center;gap:6px;"><span style="width:12px;height:12px;background:#e74a3b;border-radius:2px;"></span> Pending (15% - 38)</span>
            </div>
          </div>
        </div>

        <!-- Chart 3: Monthly Collections Breakdown -->
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">3. Monthly Collections by Channel</h6>
          <div style="display:flex;flex-direction:column;gap:12px;font-size:12.5px;">
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span>UPI Payments (GooglePay, PhonePe, Paytm)</span><strong>₹1,10,000 (61%)</strong>
              </div>
              <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;"><div style="width:61%;height:100%;background:#4e73df;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span>Net Banking &amp; Direct IMPS Transfer</span><strong>₹45,000 (25%)</strong>
              </div>
              <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;"><div style="width:25%;height:100%;background:#1cc88a;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                <span>Direct Cash Deposits</span><strong>₹25,000 (14%)</strong>
              </div>
              <div style="height:8px;background:#eaecf4;border-radius:4px;overflow:hidden;"><div style="width:14%;height:100%;background:#f6c23e;"></div></div>
            </div>
          </div>
        </div>

        <!-- Chart 4: Pending vs Collected Revenue -->
        <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <h6 style="font-weight:700;margin-bottom:1rem;color:var(--text-dark);">4. Pending vs Collected Revenue</h6>
          <div style="display:flex;flex-direction:column;gap:1rem;justify-content:center;height:160px;">
            <div>
              <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
                <strong style="color:#1cc88a;">Collected Revenue: ₹12,50,000</strong>
                <span>79.6%</span>
              </div>
              <div style="height:12px;background:#eaecf4;border-radius:6px;overflow:hidden;"><div style="width:79.6%;height:100%;background:#1cc88a;"></div></div>
            </div>
            <div>
              <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;">
                <strong style="color:#e74a3b;">Pending Balances: ₹3,20,000</strong>
                <span>20.4%</span>
              </div>
              <div style="height:12px;background:#eaecf4;border-radius:6px;overflow:hidden;"><div style="width:20.4%;height:100%;background:#e74a3b;"></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 11. PERFORMANCE SECTION (Skills, Projects, Certifications, Assessments, Attendance)
// ==========================================
function rcRenderSkills() {
  const candidates = rcGetCandidates();

  return `
    <div class="rc-performance-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-code-alt" style="color:var(--primary);"></i> Candidate Skills Directory
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Technical competencies, programming stacks, database tools, and certified skill levels.
          </p>
        </div>
        <button class="btn btn-sm btn-primary" onclick="rcOpenAddSkillModal()" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
          <i class="bx bx-plus"></i> + Add Skill
        </button>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Candidate Name</th>
                <th style="padding:12px 14px;">Candidate ID</th>
                <th style="padding:12px 14px;">Skill</th>
                <th style="padding:12px 14px;">Category</th>
                <th style="padding:12px 14px;">Skill Level</th>
                <th style="padding:12px 14px;text-align:center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${candidates.flatMap(c => (c.skills || []).map(s => ({ c, s }))).map(item => `
                <tr>
                  <td style="padding:12px 14px;"><strong>${item.c.name}</strong></td>
                  <td style="padding:12px 14px;">${item.c.id}</td>
                  <td style="padding:12px 14px;"><strong>${item.s.name}</strong></td>
                  <td style="padding:12px 14px;"><span class="badge" style="background:#f1f3f9;color:#2c3e50;">${item.s.category}</span></td>
                  <td style="padding:12px 14px;">
                    <span class="badge" style="background:${item.s.level === 'Expert' ? '#e8f5e9;color:#2e7d32;' : (item.s.level === 'Advanced' ? '#e3f2fd;color:#1565c0;' : '#fff8e1;color:#f57f17;')}padding:4px 8px;border-radius:4px;font-weight:700;">
                      ${item.s.level}
                    </span>
                  </td>
                  <td style="padding:12px 14px;text-align:center;">
                    <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${item.c.id}'})">View Profile</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function rcOpenAddSkillModal(preselectedId = '') {
  const candidates = rcGetCandidates();
  const options = candidates.map(c => `<option value="${c.id}" ${c.id === preselectedId ? 'selected' : ''}>${c.name} (${c.id})</option>`).join('');

  const html = `
    <div class="card" style="width:100%;max-width:440px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;">Add Candidate Skill</h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <form onsubmit="rcSubmitAddSkill(event)" style="padding:1.5rem;">
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Candidate</label>
          <select id="rc-skill-cand-id" class="form-select" required>${options}</select>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Skill Name</label>
          <input type="text" id="rc-skill-name" class="form-control" placeholder="e.g. Docker, Spring Boot, React Native" required>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Category</label>
          <select id="rc-skill-category" class="form-select">
            <option value="Programming">Programming</option>
            <option value="Frontend">Frontend</option>
            <option value="Database">Database</option>
            <option value="DevOps & Cloud">DevOps &amp; Cloud</option>
            <option value="QA & Testing">QA &amp; Testing</option>
            <option value="Soft Skills">Soft Skills</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="form-label" style="font-size:12px;font-weight:600;">Skill Level</label>
          <select id="rc-skill-level" class="form-select">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate" selected>Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button type="button" class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save Skill</button>
        </div>
      </form>
    </div>
  `;
  rcOpenModal(html);
}

function rcSubmitAddSkill(e) {
  e.preventDefault();
  const candId = document.getElementById('rc-skill-cand-id').value;
  const name = document.getElementById('rc-skill-name').value.trim();
  const category = document.getElementById('rc-skill-category').value;
  const level = document.getElementById('rc-skill-level').value;

  const candidates = rcGetCandidates();
  const c = candidates.find(item => item.id === candId);
  if (c) {
    if (!c.skills) c.skills = [];
    c.skills.push({ name, category, level });
    rcSaveCandidates(candidates);
    rcCloseModal();
    rcToast('Skill Added', 'Added ' + name + ' (' + level + ') to ' + c.name + '.', 'success');
    if (rcCurrentSubPage === 'candidate-profile') {
      rcSwitchProfileTab('skills', candId);
    } else {
      rcNavigate('skills');
    }
  }
}

function rcRenderProjects() {
  const candidates = rcGetCandidates();
  const allProjects = candidates.flatMap(c => (c.projects || []).map(p => ({ p, c })));

  return `
    <div class="rc-projects-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-folder" style="color:var(--primary);"></i> Candidate Projects Showcase
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Capstone applications, full-stack prototypes, and data engineering projects built by candidates.
          </p>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">
        ${allProjects.map(item => `
          <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <h5 style="font-size:16px;font-weight:700;color:#2c3e50;margin:0;">${item.p.name}</h5>
              <span class="badge" style="background:#e8eaf6;color:#3f51b5;padding:3px 8px;border-radius:4px;font-size:10.5px;">${item.p.type}</span>
            </div>
            <div style="font-size:12px;color:#858796;margin-bottom:8px;">
              Candidate: <strong>${item.c.name}</strong> (${item.c.id})
            </div>
            <p style="font-size:13px;color:#5a5c69;line-height:1.5;margin-bottom:12px;">${item.p.desc}</p>
            <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:12px;">
              ${(item.p.tech || []).map(t => `<span class="badge" style="background:#f1f3f9;color:#2c3e50;font-size:10.5px;">${t}</span>`).join('')}
            </div>
            <div style="border-top:1px solid #eaecf4;padding-top:10px;display:flex;justify-content:space-between;align-items:center;font-size:12px;">
              <span style="color:#858796;">Completed: ${rcFormatDate(item.p.date)}</span>
              <div style="display:flex;gap:10px;">
                ${item.p.github ? `<a href="${item.p.github}" target="_blank" style="color:#4e73df;font-weight:600;"><i class="bx bxl-github"></i> GitHub</a>` : ''}
                ${item.p.demo ? `<a href="${item.p.demo}" target="_blank" style="color:#1cc88a;font-weight:600;"><i class="bx bx-link-external"></i> Live Demo</a>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function rcRenderCertifications() {
  const candidates = rcGetCandidates();
  const allCerts = candidates.flatMap(c => (c.certifications || []).map(cert => ({ cert, c })));

  return `
    <div class="rc-certifications-container">
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-certification" style="color:#f6c23e;"></i> Candidate Certifications
        </h4>
        <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
          Verified industry credentials and cloud certifications earned by candidates.
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem;">
        ${allCerts.map(item => `
          <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
            <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;">
              <div style="width:40px;height:40px;border-radius:8px;background:rgba(246,194,62,0.15);color:#d49a12;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;">
                <i class="bx bx-award"></i>
              </div>
              <div>
                <h6 style="font-weight:700;margin:0 0 3px 0;color:#2c3e50;">${item.cert.name}</h6>
                <div style="font-size:11.5px;color:#858796;">${item.cert.issuer}</div>
              </div>
            </div>
            <div style="font-size:12.5px;color:#5a5c69;border-top:1px dashed #d1d3e2;padding-top:8px;display:flex;justify-content:space-between;">
              <span>Candidate: <strong>${item.c.name}</strong></span>
              <span>Issued: ${rcFormatDate(item.cert.date)}</span>
            </div>
            <div style="font-size:11px;color:#858796;margin-top:4px;">Credential ID: ${item.cert.id}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function rcRenderAssessments() {
  const candidates = rcGetCandidates();
  const allAssessments = candidates.flatMap(c => (c.assessments || []).map(a => ({ a, c })));

  return `
    <div class="rc-assessments-container">
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-task" style="color:var(--primary);"></i> Candidate Assessments &amp; Mock Interviews
        </h4>
        <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
          Technical assessments, aptitude tests, communication evaluations, practical coding, and mock interviews.
        </p>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Candidate</th>
                <th style="padding:12px 14px;">Assessment Type</th>
                <th style="padding:12px 14px;">Assessment Name</th>
                <th style="padding:12px 14px;">Score</th>
                <th style="padding:12px 14px;">Percentage</th>
                <th style="padding:12px 14px;">Performance</th>
                <th style="padding:12px 14px;text-align:center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${allAssessments.map(item => `
                <tr>
                  <td style="padding:12px 14px;">
                    <strong>${item.c.name}</strong><br>
                    <small style="color:#858796;">${item.c.id}</small>
                  </td>
                  <td style="padding:12px 14px;">${item.a.type}</td>
                  <td style="padding:12px 14px;"><strong>${item.a.name}</strong></td>
                  <td style="padding:12px 14px;">${item.a.score} / ${item.a.maxScore}</td>
                  <td style="padding:12px 14px;font-weight:700;">${Math.round((item.a.score / item.a.maxScore) * 100)}%</td>
                  <td style="padding:12px 14px;">${rcGetPerformanceBadge(item.a.performance)}</td>
                  <td style="padding:12px 14px;text-align:center;">
                    <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${item.c.id}'})">View Profile</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function rcRenderAttendance() {
  const candidates = rcGetCandidates();

  return `
    <div class="rc-attendance-container">
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-calendar-check" style="color:#1cc88a;"></i> Candidate Attendance Tracking
        </h4>
        <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
          Daily logs, attendance percentage indicators, and absenteeism monitoring for enrolled candidates.
        </p>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Candidate</th>
                <th style="padding:12px 14px;">Total Days</th>
                <th style="padding:12px 14px;">Present Days</th>
                <th style="padding:12px 14px;">Absent Days</th>
                <th style="padding:12px 14px;">Attendance %</th>
                <th style="padding:12px 14px;">Rating Indicator</th>
                <th style="padding:12px 14px;text-align:center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${candidates.map(c => {
                const att = c.attendance || { totalDays: 60, present: 54, absent: 6, percentage: 90, rating: 'Excellent Attendance' };
                return `
                  <tr>
                    <td style="padding:12px 14px;">
                      <strong>${c.name}</strong><br>
                      <small style="color:#858796;">${c.id}</small>
                    </td>
                    <td style="padding:12px 14px;">${att.totalDays}</td>
                    <td style="padding:12px 14px;color:#2e7d32;font-weight:700;">${att.present}</td>
                    <td style="padding:12px 14px;color:#c62828;font-weight:700;">${att.absent}</td>
                    <td style="padding:12px 14px;">
                      <div style="display:flex;align-items:center;gap:8px;">
                        <div style="flex:1;width:60px;height:6px;background:#eaecf4;border-radius:3px;overflow:hidden;">
                          <div style="width:${att.percentage}%;height:100%;background:${att.percentage >= 85 ? '#1cc88a' : (att.percentage >= 75 ? '#f6c23e' : '#e74a3b')};"></div>
                        </div>
                        <strong style="font-size:12px;">${att.percentage}%</strong>
                      </div>
                    </td>
                    <td style="padding:12px 14px;">
                      <span class="badge" style="background:${att.percentage >= 85 ? '#e8f5e9;color:#2e7d32;' : (att.percentage >= 75 ? '#fff8e1;color:#f57f17;' : '#ffebee;color:#c62828;')}padding:4px 8px;border-radius:4px;font-weight:600;">
                        ${att.rating}
                      </span>
                    </td>
                    <td style="padding:12px 14px;text-align:center;">
                      <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})">View Profile</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 12. PLACEMENT READINESS & CANDIDATE IMPROVEMENT
// ==========================================
function rcRenderPlacementReadiness() {
  const candidates = rcGetCandidates();

  return `
    <div class="rc-placement-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-target-lock" style="color:var(--primary);"></i> Placement Readiness Evaluation
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            6-Factor readiness calculation engine (Skills, Projects, Certifications, Assessments, Attendance, Profile Completion).
          </p>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-sm btn-primary" onclick="rcNavigate('ready-candidates')" style="font-weight:600;">
            Ready Candidates (&ge;80%)
          </button>
          <button class="btn btn-sm btn-outline-warning" onclick="rcNavigate('candidate-improvement')" style="font-weight:600;">
            Candidate Improvement
          </button>
        </div>
      </div>

      <!-- Readiness Guidelines Card -->
      <div class="card p-3 mb-4" style="background:#f8f9fc;border:1px solid #e3e6f0;border-radius:10px;">
        <div style="display:flex;gap:20px;flex-wrap:wrap;font-size:12.5px;color:#2c3e50;">
          <span style="display:inline-flex;align-items:center;gap:6px;">
            <strong style="color:#2e7d32;">80–100%:</strong> 🟢 READY for Corporate Client Interviews
          </span>
          <span style="display:inline-flex;align-items:center;gap:6px;">
            <strong style="color:#f57f17;">50–79%:</strong> 🟡 UNDER REVIEW (Needs Sprint Polishing)
          </span>
          <span style="display:inline-flex;align-items:center;gap:6px;">
            <strong style="color:#d84315;">Below 50%:</strong> 🔴 NEEDS IMPROVEMENT (Remedial Action Required)
          </span>
        </div>
      </div>

      <!-- Placement Readiness Table -->
      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Candidate</th>
                <th style="padding:12px 14px;">Skills (15%)</th>
                <th style="padding:12px 14px;">Projects (20%)</th>
                <th style="padding:12px 14px;">Certs (15%)</th>
                <th style="padding:12px 14px;">Assessments (20%)</th>
                <th style="padding:12px 14px;">Attendance (15%)</th>
                <th style="padding:12px 14px;">Profile (15%)</th>
                <th style="padding:12px 14px;">Readiness Score</th>
                <th style="padding:12px 14px;">Status</th>
                <th style="padding:12px 14px;text-align:center;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${candidates.map(c => {
                const pl = c.placement || { readinessScore: 80, status: 'Ready', breakdown: {} };
                const bk = pl.breakdown || { skills: 80, projects: 80, certifications: 80, assessments: 80, attendance: 90, profileCompletion: 80 };
                return `
                  <tr>
                    <td style="padding:12px 14px;">
                      <strong>${c.name}</strong><br>
                      <small style="color:#858796;">${c.id}</small>
                    </td>
                    <td>${bk.skills || 80}%</td>
                    <td>${bk.projects || 75}%</td>
                    <td>${bk.certifications || 70}%</td>
                    <td>${bk.assessments || 85}%</td>
                    <td>${bk.attendance || 90}%</td>
                    <td>${bk.profileCompletion || 85}%</td>
                    <td style="padding:12px 14px;">
                      <div style="font-size:16px;font-weight:800;color:${pl.readinessScore >= 80 ? '#2e7d32' : (pl.readinessScore >= 50 ? '#f57f17' : '#d84315')};">
                        ${pl.readinessScore}%
                      </div>
                    </td>
                    <td>${rcGetPlacementStatusBadge(pl.status)}</td>
                    <td style="padding:12px 14px;text-align:center;">
                      <button class="btn btn-xs btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})">
                        Evaluate
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function rcRenderReadyCandidates() {
  return rcRenderCandidatesList('READY');
}

function rcRenderCandidateImprovement() {
  const candidates = rcGetCandidates();
  // Filter non-ready candidates
  const needsImprovementList = candidates.filter(c => !c.placement || c.placement.readinessScore < 80);

  return `
    <div class="rc-improvement-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-trending-up" style="color:#e74a3b;"></i> Candidate Improvement Advisory
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Targeted gap analysis and actionable recommendations for candidates who are not placement ready.
          </p>
        </div>
        <button class="btn btn-sm btn-outline-secondary" onclick="rcNavigate('placement-readiness')">
          &larr; Back to Placement Readiness
        </button>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">
        ${needsImprovementList.map(c => {
          const score = c.placement ? c.placement.readinessScore : 65;
          return `
            <div class="card p-4" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);border-left:4px solid ${score >= 50 ? '#f6c23e' : '#e74a3b'};">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div>
                  <h6 style="font-weight:700;margin:0;color:#2c3e50;">${c.name}</h6>
                  <small style="color:#858796;">${c.id} &bull; ${c.preferredRole}</small>
                </div>
                <div style="text-align:right;">
                  <div style="font-size:18px;font-weight:800;color:${score >= 50 ? '#f57f17' : '#d84315'};">${score}%</div>
                  ${rcGetPlacementStatusBadge(c.placement ? c.placement.status : 'Under Review')}
                </div>
              </div>

              <div style="font-size:12px;font-weight:700;color:#5a5c69;text-transform:uppercase;margin:12px 0 8px 0;">
                Improvement Required:
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;font-size:12.5px;">
                <div style="background:#fff3e0;color:#e65100;padding:6px 10px;border-radius:4px;display:flex;align-items:center;gap:6px;">
                  <i class="bx bx-error"></i> Complete JavaScript &amp; Algorithm Assessment
                </div>
                <div style="background:#fff3e0;color:#e65100;padding:6px 10px;border-radius:4px;display:flex;align-items:center;gap:6px;">
                  <i class="bx bx-error"></i> Build &amp; Deploy At Least 2 Full Stack Projects
                </div>
                <div style="background:#fff3e0;color:#e65100;padding:6px 10px;border-radius:4px;display:flex;align-items:center;gap:6px;">
                  <i class="bx bx-error"></i> Improve Attendance (Minimum 85% required)
                </div>
                <div style="background:#fff3e0;color:#e65100;padding:6px 10px;border-radius:4px;display:flex;align-items:center;gap:6px;">
                  <i class="bx bx-error"></i> Upload Verified Resume &amp; Identity Documents
                </div>
                <div style="background:#fff3e0;color:#e65100;padding:6px 10px;border-radius:4px;display:flex;align-items:center;gap:6px;">
                  <i class="bx bx-error"></i> Complete Industry Foundation Certification
                </div>
              </div>

              <div style="margin-top:1rem;border-top:1px solid #eaecf4;padding-top:10px;display:flex;justify-content:flex-end;gap:8px;">
                <button class="btn btn-xs btn-outline-info" onclick="rcStartMessageWithCandidate('${c.id}')">
                  <i class="bx bx-chat"></i> Message Candidate
                </button>
                <button class="btn btn-xs btn-primary" onclick="rcNavigate('candidate-profile', {id:'${c.id}'})">
                  Update Profile
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 13. COMMUNICATION CENTER (Messages, Announcements, Notifications, History)
// ==========================================
let rcActiveChatCandidateId = 'CAN-1001';

function rcGetStoredMessages(candId) {
  const store = JSON.parse(localStorage.getItem(RC_STORAGE_KEY_MESSAGES) || '{}');
  if (!store[candId]) {
    store[candId] = [
      { sender: 'Admin', text: 'Please update your resume and complete the pending Java assessment.', time: '10:00 AM', isMine: true },
      { sender: 'Candidate', text: 'I will update it today by evening. Thank you sir.', time: '10:15 AM', isMine: false }
    ];
    localStorage.setItem(RC_STORAGE_KEY_MESSAGES, JSON.stringify(store));
  }
  return store[candId];
}

function rcSaveMessage(candId, msgObj) {
  const store = JSON.parse(localStorage.getItem(RC_STORAGE_KEY_MESSAGES) || '{}');
  if (!store[candId]) store[candId] = [];
  store[candId].push(msgObj);
  localStorage.setItem(RC_STORAGE_KEY_MESSAGES, JSON.stringify(store));
}

function rcRenderCandidateMessages() {
  const candidates = rcGetCandidates();
  const activeCand = rcGetCandidateById(rcActiveChatCandidateId);
  const msgs = rcGetStoredMessages(activeCand.id);

  return `
    <div class="rc-communication-container">
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-chat" style="color:var(--primary);"></i> Candidate Messages &amp; Direct Support
        </h4>
        <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
          Interactive live 2-column communication channel with candidate conversation threads.
        </p>
      </div>

      <!-- 2-Column Messaging Workspace -->
      <div class="card" style="border-radius:12px;border:1px solid #e3e6f0;box-shadow:0 4px 16px rgba(0,0,0,0.06);display:grid;grid-template-columns:300px 1fr;height:600px;overflow:hidden;">
        <!-- Left Side: Candidate List & Search -->
        <div style="border-right:1px solid #eaecf4;background:#fdfdfe;display:flex;flex-direction:column;">
          <div style="padding:1rem;border-bottom:1px solid #eaecf4;">
            <input type="text" class="form-control form-control-sm" placeholder="Search candidates..." oninput="rcFilterChatCandidates(this.value)">
          </div>
          <div id="rc-chat-candidate-list" style="flex:1;overflow-y:auto;">
            ${candidates.map(c => `
              <div onclick="rcSelectChatCandidate('${c.id}')" style="padding:12px 14px;border-bottom:1px solid #f1f3f9;cursor:pointer;background:${c.id === activeCand.id ? '#edf2fc' : 'transparent'};display:flex;align-items:center;gap:10px;transition:background 0.2s;">
                <div style="width:36px;height:36px;border-radius:50%;background:#4e73df;color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  ${c.avatar || 'CA'}
                </div>
                <div style="flex:1;overflow:hidden;">
                  <div style="font-weight:700;font-size:13px;color:#2c3e50;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.name}</div>
                  <div style="font-size:11px;color:#858796;">${c.id} &bull; ${c.status}</div>
                </div>
                <span class="badge" style="background:#1cc88a;color:#fff;font-size:9px;border-radius:10px;padding:2px 6px;">Active</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Side: Selected Candidate Chat Thread -->
        <div style="display:flex;flex-direction:column;background:#fff;">
          <!-- Chat Header -->
          <div style="padding:1rem 1.25rem;border-bottom:1px solid #eaecf4;display:flex;align-items:center;justify-content:space-between;background:#f8f9fc;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:40px;height:40px;border-radius:50%;background:#4e73df;color:#fff;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;">
                ${activeCand.avatar || 'CA'}
              </div>
              <div>
                <h6 style="margin:0;font-weight:700;color:#2c3e50;">${activeCand.name}</h6>
                <small style="color:#858796;">Candidate ID: ${activeCand.id} &bull; ${activeCand.preferredRole}</small>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="rcNavigate('candidate-profile', {id:'${activeCand.id}'})">
              View Profile
            </button>
          </div>

          <!-- Chat Messages Body -->
          <div id="rc-chat-thread-box" style="flex:1;overflow-y:auto;padding:1.25rem;background:#f9fafc;display:flex;flex-direction:column;gap:12px;">
            ${msgs.map(m => `
              <div style="display:flex;justify-content:${m.isMine ? 'flex-end' : 'flex-start'};">
                <div style="max-width:70%;padding:10px 14px;border-radius:${m.isMine ? '12px 12px 2px 12px' : '12px 12px 12px 2px'};background:${m.isMine ? '#4e73df' : '#fff'};color:${m.isMine ? '#fff' : '#2c3e50'};box-shadow:0 1px 3px rgba(0,0,0,0.08);font-size:13px;">
                  <div>${m.text}</div>
                  <div style="font-size:10px;margin-top:4px;opacity:0.8;text-align:${m.isMine ? 'right' : 'left'};">${m.time} &bull; ${m.sender}</div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Message Composer Input -->
          <div style="padding:0.75rem 1.25rem;border-top:1px solid #eaecf4;background:#fff;display:flex;align-items:center;gap:10px;">
            <button class="btn btn-sm btn-light" onclick="rcAttachChatFile()" title="Attach Document" style="border:1px solid #d1d3e2;">
              <i class="bx bx-paperclip"></i>
            </button>
            <input type="text" id="rc-chat-input-text" class="form-control" placeholder="Type your message..." onkeydown="if(event.key==='Enter') rcSendChatMessage()">
            <button class="btn btn-primary" onclick="rcSendChatMessage()" style="font-weight:600;display:inline-flex;align-items:center;gap:4px;">
              <i class="bx bx-send"></i> Send
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function rcSelectChatCandidate(candId) {
  rcActiveChatCandidateId = candId;
  const container = document.getElementById('rc-subpage-container');
  if (container) container.innerHTML = rcRenderCandidateMessages();
}

function rcStartMessageWithCandidate(candId) {
  rcActiveChatCandidateId = candId;
  rcNavigate('candidate-messages');
}

function rcSendChatMessage() {
  const input = document.getElementById('rc-chat-input-text');
  const text = input ? input.value.trim() : '';
  if (!text) return;

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  rcSaveMessage(rcActiveChatCandidateId, {
    sender: 'Admin',
    text,
    time: now,
    isMine: true
  });
  input.value = '';

  const container = document.getElementById('rc-subpage-container');
  if (container) container.innerHTML = rcRenderCandidateMessages();

  // Scroll to bottom
  setTimeout(() => {
    const box = document.getElementById('rc-chat-thread-box');
    if (box) box.scrollTop = box.scrollHeight;
  }, 50);

  // Simulate Candidate reply after 1.5s
  setTimeout(() => {
    const replies = [
      "Thank you sir, I have noted the feedback and will submit it soon.",
      "Understood sir! I will attend the technical mock interview tomorrow.",
      "Yes sir, fee balance has been paid via UPI. Receipt shared.",
      "I have updated my GitHub profile with the latest project link."
    ];
    const replyText = replies[Math.floor(Math.random() * replies.length)];
    rcSaveMessage(rcActiveChatCandidateId, {
      sender: 'Candidate',
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMine: false
    });
    if (rcCurrentSubPage === 'candidate-messages') {
      const cBox = document.getElementById('rc-subpage-container');
      if (cBox) cBox.innerHTML = rcRenderCandidateMessages();
      const tBox = document.getElementById('rc-chat-thread-box');
      if (tBox) tBox.scrollTop = tBox.scrollHeight;
    }
  }, 1200);
}

function rcAttachChatFile() {
  rcToast('File Attachment', 'Attachment simulator: Select resume or assignment document to send.', 'info');
}

// Announcements & Notifications
function rcRenderAnnouncements() {
  return `
    <div class="rc-announcements-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-broadcast" style="color:var(--primary);"></i> Candidate Announcements
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Broadcast updates, assessment schedules, payment reminders, and interview drives.
          </p>
        </div>
        <button class="btn btn-sm btn-primary" onclick="rcOpenAnnouncementModal()" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
          <i class="bx bx-plus"></i> + Create Announcement
        </button>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">
        <div class="card p-4" style="border-radius:10px;border-left:4px solid #e74a3b;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="badge" style="background:#ffebee;color:#c62828;padding:2px 8px;border-radius:4px;font-size:10.5px;">Urgent Priority</span>
            <small style="color:#858796;">Today &bull; 03:15 PM</small>
          </div>
          <h5 style="font-size:15px;font-weight:700;color:#2c3e50;margin:4px 0 8px 0;">Technical Mock Interviews Scheduled</h5>
          <p style="font-size:13px;color:#5a5c69;line-height:1.5;margin-bottom:10px;">
            All placement-ready candidates are scheduled for technical mock rounds this Saturday. Please ensure your project repos and resumes are up to date.
          </p>
          <div style="font-size:11.5px;color:#858796;border-top:1px dashed #d1d3e2;padding-top:8px;display:flex;justify-content:space-between;">
            <span>Category: <strong>Placement</strong></span>
            <span>Recipients: <strong>Placement Ready Candidates</strong></span>
          </div>
        </div>

        <div class="card p-4" style="border-radius:10px;border-left:4px solid #f6c23e;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="badge" style="background:#fff3e0;color:#ef6c00;padding:2px 8px;border-radius:4px;font-size:10.5px;">Important</span>
            <small style="color:#858796;">Yesterday &bull; 11:30 AM</small>
          </div>
          <h5 style="font-size:15px;font-weight:700;color:#2c3e50;margin:4px 0 8px 0;">Fee Installment Due Date Notice</h5>
          <p style="font-size:13px;color:#5a5c69;line-height:1.5;margin-bottom:10px;">
            Candidates with pending installment balances are kindly requested to clear balances by the 15th to avoid training interruption.
          </p>
          <div style="font-size:11.5px;color:#858796;border-top:1px dashed #d1d3e2;padding-top:8px;display:flex;justify-content:space-between;">
            <span>Category: <strong>Payment</strong></span>
            <span>Recipients: <strong>Candidates With Pending Payments</strong></span>
          </div>
        </div>

        <div class="card p-4" style="border-radius:10px;border-left:4px solid #4e73df;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="badge" style="background:#e3f2fd;color:#1565c0;padding:2px 8px;border-radius:4px;font-size:10.5px;">Normal</span>
            <small style="color:#858796;">05 Sep 2026</small>
          </div>
          <h5 style="font-size:15px;font-weight:700;color:#2c3e50;margin:4px 0 8px 0;">Profile Document Verification Week</h5>
          <p style="font-size:13px;color:#5a5c69;line-height:1.5;margin-bottom:10px;">
            Please upload your degree certificates, mark sheets, and identity proofs to complete profile verification.
          </p>
          <div style="font-size:11.5px;color:#858796;border-top:1px dashed #d1d3e2;padding-top:8px;display:flex;justify-content:space-between;">
            <span>Category: <strong>Profile Update</strong></span>
            <span>Recipients: <strong>All Candidates</strong></span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function rcOpenAnnouncementModal() {
  const html = `
    <div class="card" style="width:100%;max-width:540px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;">Create Candidate Announcement</h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <form onsubmit="rcSubmitAnnouncement(event)" style="padding:1.5rem;">
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Announcement Title</label>
          <input type="text" id="rc-ann-title" class="form-control" placeholder="e.g. Weekend Placement Drive" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Category</label>
            <select id="rc-ann-category" class="form-select">
              <option value="General">General</option>
              <option value="Profile Update">Profile Update</option>
              <option value="Assessment">Assessment</option>
              <option value="Placement">Placement</option>
              <option value="Payment">Payment</option>
              <option value="Documents">Documents</option>
              <option value="Important">Important</option>
            </select>
          </div>
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Priority</label>
            <select id="rc-ann-priority" class="form-select">
              <option value="Normal">Normal</option>
              <option value="Important">Important</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Target Recipients</label>
          <select id="rc-ann-recipients" class="form-select">
            <option value="All Candidates">All Candidates</option>
            <option value="Selected Candidates">Selected Candidates</option>
            <option value="Placement Ready Candidates">Placement Ready Candidates</option>
            <option value="Candidates Under Review">Candidates Under Review</option>
            <option value="Candidates With Pending Payments">Candidates With Pending Payments</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Announcement Message</label>
          <textarea id="rc-ann-message" class="form-control" rows="3" placeholder="Write full details..." required></textarea>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button type="button" class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Broadcast Announcement</button>
        </div>
      </form>
    </div>
  `;
  rcOpenModal(html);
}

function rcSubmitAnnouncement(e) {
  e.preventDefault();
  rcCloseModal();
  rcToast('Announcement Broadcasted', 'Announcement sent to candidate portal dashboards.', 'success');
  rcNavigate('announcements');
}

function rcRenderNotifications() {
  return `
    <div class="rc-notifications-container" style="max-width:800px;margin:0 auto;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-bell" style="color:var(--primary);"></i> Candidate Notifications &amp; Alerts
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Real-time triggers for payments, assessments, profile verification, and interview calls.
          </p>
        </div>
        <button class="btn btn-sm btn-outline-primary" onclick="rcToast('Notifications Cleared', 'All notifications marked as read.', 'info')">
          Mark All as Read
        </button>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="list-group list-group-flush">
          <div class="list-group-item p-3" style="display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#e8f5e9;color:#2e7d32;display:flex;align-items:center;justify-content:center;font-size:18px;">
              <i class="bx bx-award"></i>
            </div>
            <div style="flex:1;">
              <strong>Placement Readiness Updated:</strong> Arun Kumar is now marked <strong>🟢 READY (88%)</strong>.
              <div style="font-size:11px;color:#858796;">10 minutes ago</div>
            </div>
            <button class="btn btn-xs btn-light" onclick="this.closest('.list-group-item').style.opacity='0.5'">Mark as Read</button>
          </div>

          <div class="list-group-item p-3" style="display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#ffebee;color:#c62828;display:flex;align-items:center;justify-content:center;font-size:18px;">
              <i class="bx bx-time-five"></i>
            </div>
            <div style="flex:1;">
              <strong>Payment Pending:</strong> Sneha Nair has installment fee of <strong>₹25,000</strong> due on Sep 15.
              <div style="font-size:11px;color:#858796;">1 hour ago</div>
            </div>
            <button class="btn btn-xs btn-light" onclick="this.closest('.list-group-item').style.opacity='0.5'">Mark as Read</button>
          </div>

          <div class="list-group-item p-3" style="display:flex;align-items:center;gap:12px;">
            <div style="width:36px;height:36px;border-radius:50%;background:#e3f2fd;color:#1565c0;display:flex;align-items:center;justify-content:center;font-size:18px;">
              <i class="bx bx-task"></i>
            </div>
            <div style="flex:1;">
              <strong>New Assessment Added:</strong> Python Full Stack Assessment assigned to Batch 2026.
              <div style="font-size:11px;color:#858796;">3 hours ago</div>
            </div>
            <button class="btn btn-xs btn-light" onclick="this.closest('.list-group-item').style.opacity='0.5'">Mark as Read</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function rcRenderCommunicationHistory() {
  return `
    <div class="rc-history-container">
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
          <i class="bx bx-list-check" style="color:var(--primary);"></i> Communication History Log
        </h4>
        <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
          Audit trail of candidate SMS, portal messages, automated reminders, and announcements.
        </p>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Date</th>
                <th style="padding:12px 14px;">Candidate</th>
                <th style="padding:12px 14px;">Communication Type</th>
                <th style="padding:12px 14px;">Subject</th>
                <th style="padding:12px 14px;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:12px 14px;">10 Sep 2026</td>
                <td style="padding:12px 14px;">Arun Kumar (CAN-1001)</td>
                <td style="padding:12px 14px;"><span class="badge" style="background:#e3f2fd;color:#1565c0;">Message</span></td>
                <td style="padding:12px 14px;">Resume update &amp; assessment review</td>
                <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;">Read</span></td>
              </tr>
              <tr>
                <td style="padding:12px 14px;">09 Sep 2026</td>
                <td style="padding:12px 14px;">Karthik Raja (CAN-1003)</td>
                <td style="padding:12px 14px;"><span class="badge" style="background:#fff3e0;color:#ef6c00;">Payment Reminder</span></td>
                <td style="padding:12px 14px;">Installment reminder for ₹20,000</td>
                <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;">Read</span></td>
              </tr>
              <tr>
                <td style="padding:12px 14px;">08 Sep 2026</td>
                <td style="padding:12px 14px;">All Enrolled Candidates</td>
                <td style="padding:12px 14px;"><span class="badge" style="background:#f3e5f5;color:#6a1b9a;">Announcement</span></td>
                <td style="padding:12px 14px;">Technical Mock Interview schedule</td>
                <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;">Broadcasted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 14. DOCUMENT MANAGEMENT
// ==========================================
function rcRenderDocuments() {
  const candidates = rcGetCandidates();
  const allDocs = candidates.flatMap(c => (c.documents || []).map(d => ({ d, c })));

  return `
    <div class="rc-documents-container">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;">
        <div>
          <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;display:flex;align-items:center;gap:8px;">
            <i class="bx bx-folder-open" style="color:var(--primary);"></i> Candidate Document Repository
          </h4>
          <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
            Resumes, Educational Certificates, Professional Certifications, Project Documents, and Identity Cards.
          </p>
        </div>
        <button class="btn btn-sm btn-primary" onclick="rcOpenUploadDocModal()" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;">
          <i class="bx bx-upload"></i> + Upload Document
        </button>
      </div>

      <div class="card" style="border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);overflow:hidden;">
        <div class="table-responsive">
          <table class="table table-hover align-middle" style="margin:0;font-size:13px;">
            <thead style="background:#0e2238;color:#fff;">
              <tr>
                <th style="padding:12px 14px;">Document Name</th>
                <th style="padding:12px 14px;">Candidate</th>
                <th style="padding:12px 14px;">Document Type</th>
                <th style="padding:12px 14px;">Upload Date</th>
                <th style="padding:12px 14px;">Status</th>
                <th style="padding:12px 14px;text-align:center;">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${allDocs.map(item => `
                <tr>
                  <td style="padding:12px 14px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                      <i class="bx bxs-file-pdf" style="font-size:22px;color:#e74a3b;"></i>
                      <strong>${item.d.name}</strong>
                    </div>
                  </td>
                  <td style="padding:12px 14px;">
                    <strong>${item.c.name}</strong><br>
                    <small style="color:#858796;">${item.c.id}</small>
                  </td>
                  <td style="padding:12px 14px;"><span class="badge" style="background:#f1f3f9;color:#2c3e50;">${item.d.type}</span></td>
                  <td style="padding:12px 14px;">${rcFormatDate(item.d.date)}</td>
                  <td style="padding:12px 14px;"><span class="badge badge-success" style="background:#e8f5e9;color:#2e7d32;">${item.d.status}</span></td>
                  <td style="padding:12px 14px;text-align:center;">
                    <button class="btn btn-xs btn-outline-primary" onclick="rcToast('View Document', 'Previewing ${item.d.name}', 'info')">View</button>
                    <button class="btn btn-xs btn-outline-success" onclick="rcToast('Download', 'Downloading ${item.d.name}', 'success')">Download</button>
                    <button class="btn btn-xs btn-outline-danger" onclick="rcToast('Delete Document', 'Document deleted.', 'error')">Delete</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function rcOpenUploadDocModal(preselectedId = '') {
  const candidates = rcGetCandidates();
  const options = candidates.map(c => `<option value="${c.id}" ${c.id === preselectedId ? 'selected' : ''}>${c.name} (${c.id})</option>`).join('');

  const html = `
    <div class="card" style="width:100%;max-width:440px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;">Upload Candidate Document</h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <form onsubmit="rcSubmitUploadDoc(event)" style="padding:1.5rem;">
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Select Candidate</label>
          <select id="rc-doc-cand-id" class="form-select" required>${options}</select>
        </div>
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Document Type</label>
          <select id="rc-doc-type" class="form-select">
            <option value="Resume">Resume</option>
            <option value="Educational Certificates">Educational Certificates</option>
            <option value="Professional Certifications">Professional Certifications</option>
            <option value="Project Documents">Project Documents</option>
            <option value="Identity Documents">Identity Documents</option>
            <option value="Other Documents">Other Documents</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="form-label" style="font-size:12px;font-weight:600;">Select File (PDF / DOCX)</label>
          <input type="file" id="rc-doc-file" class="form-control" onchange="rcUpdateSelectedFileName(this)">
          <small id="rc-selected-file-label" style="color:#858796;display:block;margin-top:4px;"></small>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button type="button" class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Upload Document</button>
        </div>
      </form>
    </div>
  `;
  rcOpenModal(html);
}

function rcUpdateSelectedFileName(input) {
  const lbl = document.getElementById('rc-selected-file-label');
  if (input.files && input.files[0] && lbl) {
    lbl.textContent = 'Selected: ' + input.files[0].name + ' (' + Math.round(input.files[0].size / 1024) + ' KB)';
  }
}

function rcSubmitUploadDoc(e) {
  e.preventDefault();
  const candId = document.getElementById('rc-doc-cand-id').value;
  const docType = document.getElementById('rc-doc-type').value;
  const fileInput = document.getElementById('rc-doc-file');
  const fileName = (fileInput.files && fileInput.files[0]) ? fileInput.files[0].name : (candId + '_' + docType.replace(/\s+/g, '_') + '.pdf');

  const candidates = rcGetCandidates();
  const c = candidates.find(item => item.id === candId);
  if (c) {
    if (!c.documents) c.documents = [];
    c.documents.push({
      name: fileName,
      type: docType,
      date: new Date().toISOString().split('T')[0],
      status: 'Verified'
    });
    rcSaveCandidates(candidates);
    rcCloseModal();
    rcToast('Document Uploaded', fileName + ' uploaded and attached to ' + c.name + '.', 'success');
    if (rcCurrentSubPage === 'candidate-profile') {
      rcSwitchProfileTab('documents', candId);
    } else {
      rcNavigate('documents');
    }
  }
}

// ==========================================
// 15. REPORTS (12 Aligned Report Cards, Categorized Tabs & CSV Export)
// ==========================================
const RC_REPORTS_LIST = [
  { id: 'cand-report', cat: 'candidate', name: '1. Candidate Report', icon: 'bx bx-group', color: '#4e73df', badge: 'Candidate', desc: 'Complete registry of all registered candidates, contacts, education, and joining status.' },
  { id: 'active-cand-report', cat: 'candidate', name: '2. Active Candidates Report', icon: 'bx bx-user-check', color: '#1cc88a', badge: 'Candidate', desc: 'Candidates currently participating in active training programs and skill tracks.' },
  { id: 'attendance-report', cat: 'candidate', name: '3. Attendance Report', icon: 'bx bx-calendar-check', color: '#36b9cc', badge: 'Candidate', desc: 'Daily attendance percentages, cumulative sessions completed, and leaves.' },
  { id: 'skills-report', cat: 'skills', name: '4. Candidate Skills Report', icon: 'bx bx-code-block', color: '#6f42c1', badge: 'Skills', desc: 'Technical skill proficiencies, framework expertise, and technology stack breakdown.' },
  { id: 'assessment-report', cat: 'skills', name: '5. Assessment Report', icon: 'bx bx-task', color: '#fd7e14', badge: 'Skills', desc: 'Scores, aptitude benchmarks, coding evaluations, and mock technical interviews.' },
  { id: 'certifications-report', cat: 'skills', name: '6. Certifications & Projects Report', icon: 'bx bx-award', color: '#20c997', badge: 'Skills', desc: 'Verified course credentials, capstone projects, repository links, and live demos.' },
  { id: 'payment-report', cat: 'finance', name: '7. Payment & Receipts Report', icon: 'bx bx-wallet', color: '#10b981', badge: 'Finance', desc: 'Comprehensive financial transaction history, payment receipts, and collection channels.' },
  { id: 'pending-payment-report', cat: 'finance', name: '8. Pending Payment Report', icon: 'bx bx-time-five', color: '#e74a3b', badge: 'Finance', desc: 'Outstanding fee balances, overdue installment schedules, and candidate contacts.' },
  { id: 'revenue-report', cat: 'finance', name: '9. Revenue & Forecast Report', icon: 'bx bx-line-chart', color: '#f59e0b', badge: 'Finance', desc: 'Monthly cash collections, gross fee volume, and financial projections for Riya Consultancy.' },
  { id: 'readiness-report', cat: 'placement', name: '10. Placement Readiness Matrix', icon: 'bx bx-analyse', color: '#6366f1', badge: 'Placement', desc: 'Comprehensive 6-factor readiness evaluation, target career tracks, and readiness tiers.' },
  { id: 'placement-ready-report', cat: 'placement', name: '11. Placement Ready Candidates', icon: 'bx bx-target-lock', color: '#0ea5e9', badge: 'Placement', desc: 'Vetted candidates scored ≥80% pre-cleared for immediate corporate partner interviews.' },
  { id: 'placed-candidates-report', cat: 'placement', name: '12. Placed Candidates Registry', icon: 'bx bxs-graduation', color: '#8b5cf6', badge: 'Placement', desc: 'Offer letters confirmed, hiring IT companies, compensation packages, and join dates.' }
];

let rcActiveReportCategory = 'all';

function rcRenderReports() {
  const candidates = rcGetCandidates();
  const totalCands = candidates.length;
  const activeCands = candidates.filter(c => c.status === 'Active').length;
  const readyCands = candidates.filter(c => c.placement && c.placement.readinessScore >= 80).length;
  const totalRevenue = candidates.reduce((sum, c) => sum + (c.payment ? c.payment.paidAmount : 0), 0);

  return `
    <div class="rc-reports-container" style="max-width:1400px;margin:0 auto;">
      <!-- Page Header with Aligned Actions -->
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;flex-wrap:wrap;gap:1rem;background:#fff;padding:1.25rem 1.5rem;border-radius:10px;border:1px solid #e3e6f0;box-shadow:0 2px 6px rgba(0,0,0,0.03);">
        <div style="display:flex;align-items:center;gap:12px;">
          <div style="width:44px;height:44px;border-radius:10px;background:rgba(78,115,223,0.12);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">
            <i class="bx bx-file"></i>
          </div>
          <div>
            <h4 style="font-size:20px;font-weight:700;color:var(--text-dark);margin:0;line-height:1.2;">Riya Consultancy Reports</h4>
            <p style="font-size:13px;color:#858796;margin:3px 0 0 0;">
              Exportable analytics, candidate registries, skill audits, financial receipts, and placement matrices.
            </p>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <div style="position:relative;width:240px;">
            <i class="bx bx-search" style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:#94a3b8;font-size:16px;"></i>
            <input type="text" id="rc-report-search" placeholder="Search reports..." oninput="rcSearchReports(this.value)" style="width:100%;padding:7px 12px 7px 34px;border-radius:8px;border:1px solid #cbd5e1;font-size:13px;outline:none;background:#f8fafc;transition:border-color 0.2s;" onfocus="this.style.borderColor='var(--primary)';this.style.background='#fff';" onblur="this.style.borderColor='#cbd5e1';this.style.background='#f8fafc';">
          </div>
          <button class="btn btn-sm btn-primary" onclick="rcExportAllReportsSummary()" style="display:inline-flex;align-items:center;gap:6px;padding:7px 14px;font-weight:600;border-radius:8px;">
            <i class="bx bx-cloud-download"></i> Master Summary
          </button>
        </div>
      </div>

      <!-- Quick KPI Strip -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;margin-bottom:1.5rem;">
        <div style="background:#fff;padding:1rem 1.25rem;border-radius:10px;border:1px solid #e3e6f0;border-left:4px solid #4e73df;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#4e73df;letter-spacing:0.5px;">Registered Candidates</div>
            <div style="font-size:20px;font-weight:700;color:#2c3e50;margin-top:2px;">${totalCands}</div>
          </div>
          <i class="bx bx-group" style="font-size:28px;color:#d1d3e2;"></i>
        </div>
        <div style="background:#fff;padding:1rem 1.25rem;border-radius:10px;border:1px solid #e3e6f0;border-left:4px solid #1cc88a;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#1cc88a;letter-spacing:0.5px;">In Active Training</div>
            <div style="font-size:20px;font-weight:700;color:#2c3e50;margin-top:2px;">${activeCands}</div>
          </div>
          <i class="bx bx-user-check" style="font-size:28px;color:#d1d3e2;"></i>
        </div>
        <div style="background:#fff;padding:1rem 1.25rem;border-radius:10px;border:1px solid #e3e6f0;border-left:4px solid #0ea5e9;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#0ea5e9;letter-spacing:0.5px;">Placement Ready (&ge;80%)</div>
            <div style="font-size:20px;font-weight:700;color:#2c3e50;margin-top:2px;">${readyCands}</div>
          </div>
          <i class="bx bx-target-lock" style="font-size:28px;color:#d1d3e2;"></i>
        </div>
        <div style="background:#fff;padding:1rem 1.25rem;border-radius:10px;border:1px solid #e3e6f0;border-left:4px solid #f59e0b;display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#f59e0b;letter-spacing:0.5px;">Collected Revenue</div>
            <div style="font-size:20px;font-weight:700;color:#2c3e50;margin-top:2px;">${rcFormatCurrency(totalRevenue)}</div>
          </div>
          <i class="bx bx-wallet" style="font-size:28px;color:#d1d3e2;"></i>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:1.5rem;overflow-x:auto;padding-bottom:4px;border-bottom:1px solid #e2e8f0;">
        <button class="rc-rep-tab ${rcActiveReportCategory === 'all' ? 'active' : ''}" onclick="rcFilterReports('all', this)" style="padding:8px 16px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s;background:${rcActiveReportCategory === 'all' ? 'var(--primary)' : '#f1f5f9'};color:${rcActiveReportCategory === 'all' ? '#fff' : '#64748b'};">
          <i class="bx bx-grid-alt"></i> All Reports (12)
        </button>
        <button class="rc-rep-tab ${rcActiveReportCategory === 'candidate' ? 'active' : ''}" onclick="rcFilterReports('candidate', this)" style="padding:8px 16px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s;background:${rcActiveReportCategory === 'candidate' ? 'var(--primary)' : '#f1f5f9'};color:${rcActiveReportCategory === 'candidate' ? '#fff' : '#64748b'};">
          <i class="bx bx-user"></i> Candidates (3)
        </button>
        <button class="rc-rep-tab ${rcActiveReportCategory === 'skills' ? 'active' : ''}" onclick="rcFilterReports('skills', this)" style="padding:8px 16px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s;background:${rcActiveReportCategory === 'skills' ? 'var(--primary)' : '#f1f5f9'};color:${rcActiveReportCategory === 'skills' ? '#fff' : '#64748b'};">
          <i class="bx bx-code-alt"></i> Skills & Academics (3)
        </button>
        <button class="rc-rep-tab ${rcActiveReportCategory === 'finance' ? 'active' : ''}" onclick="rcFilterReports('finance', this)" style="padding:8px 16px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s;background:${rcActiveReportCategory === 'finance' ? 'var(--primary)' : '#f1f5f9'};color:${rcActiveReportCategory === 'finance' ? '#fff' : '#64748b'};">
          <i class="bx bx-dollar-circle"></i> Finance & Revenue (3)
        </button>
        <button class="rc-rep-tab ${rcActiveReportCategory === 'placement' ? 'active' : ''}" onclick="rcFilterReports('placement', this)" style="padding:8px 16px;border-radius:8px;border:none;font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:6px;transition:all 0.2s;background:${rcActiveReportCategory === 'placement' ? 'var(--primary)' : '#f1f5f9'};color:${rcActiveReportCategory === 'placement' ? '#fff' : '#64748b'};">
          <i class="bx bx-award"></i> Placements (3)
        </button>
      </div>

      <!-- Aligned 3-Column Report Cards Grid -->
      <div id="rc-reports-grid" style="display:grid;grid-template-columns:repeat(auto-fill, minmax(340px, 1fr));gap:1.25rem;">
        ${rcBuildReportCardsHtml(RC_REPORTS_LIST)}
      </div>
    </div>
  `;
}

function rcBuildReportCardsHtml(list) {
  if (!list || list.length === 0) {
    return `
      <div style="grid-column:1/-1;text-align:center;padding:3rem;background:#fff;border-radius:10px;border:1px dashed #cbd5e1;">
        <i class="bx bx-search-alt" style="font-size:40px;color:#94a3b8;margin-bottom:8px;"></i>
        <h5 style="color:#475569;margin:0 0 4px 0;">No matching reports found</h5>
        <p style="color:#94a3b8;font-size:13px;margin:0;">Try adjusting your search terms or category filter.</p>
      </div>
    `;
  }

  const badgeStyles = {
    'candidate': 'background:rgba(78,115,223,0.12);color:#4e73df;',
    'skills': 'background:rgba(111,66,193,0.12);color:#6f42c1;',
    'finance': 'background:rgba(16,185,129,0.12);color:#10b981;',
    'placement': 'background:rgba(14,165,233,0.12);color:#0ea5e9;'
  };

  return list.map(r => `
    <div class="rc-report-card" data-cat="${r.cat}" style="background:#fff;border-radius:12px;border:1px solid #e3e6f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);display:flex;flex-direction:column;justify-content:space-between;padding:1.25rem;transition:transform 0.2s ease, box-shadow 0.2s ease;" onmouseenter="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 16px rgba(0,0,0,0.08)';" onmouseleave="this.style.transform='translateY(0)';this.style.boxShadow='0 2px 8px rgba(0,0,0,0.04)';">
      <div>
        <!-- Top Row: Themed Icon & Category Badge -->
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
          <div style="width:40px;height:40px;border-radius:10px;background:${r.color}15;color:${r.color};display:flex;align-items:center;justify-content:center;font-size:20px;">
            <i class="${r.icon}"></i>
          </div>
          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;padding:3px 10px;border-radius:20px;${badgeStyles[r.cat] || badgeStyles['candidate']}">
            ${r.badge}
          </span>
        </div>

        <!-- Title & Description -->
        <h5 style="font-size:15px;font-weight:700;color:#1e293b;margin:0 0 6px 0;line-height:1.3;">
          ${r.name}
        </h5>
        <p style="font-size:12.5px;color:#64748b;line-height:1.5;margin:0 0 1rem 0;min-height:38px;">
          ${r.desc}
        </p>
      </div>

      <!-- Action Button Row with Strict Baseline Alignment -->
      <div style="display:flex;gap:8px;border-top:1px solid #f1f5f9;padding-top:12px;margin-top:auto;">
        <button class="btn btn-sm btn-outline-primary" style="flex:1;font-weight:600;padding:7px 10px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;gap:6px;" onclick="rcViewReportModal('${r.id}', '${r.name}')">
          <i class="bx bx-show"></i> View Report
        </button>
        <button class="btn btn-sm btn-primary" style="flex:1;font-weight:600;padding:7px 10px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;gap:6px;" onclick="rcExportCSV('${r.id}', '${r.name}')">
          <i class="bx bx-download"></i> Export CSV
        </button>
      </div>
    </div>
  `).join('');
}

function rcFilterReports(category, btnElement) {
  rcActiveReportCategory = category;
  document.querySelectorAll('.rc-rep-tab').forEach(b => {
    b.style.background = '#f1f5f9';
    b.style.color = '#64748b';
  });
  if (btnElement) {
    btnElement.style.background = 'var(--primary)';
    btnElement.style.color = '#fff';
  }

  const searchVal = (document.getElementById('rc-report-search')?.value || '').toLowerCase().trim();
  let filtered = RC_REPORTS_LIST;

  if (category !== 'all') {
    filtered = filtered.filter(r => r.cat === category);
  }
  if (searchVal) {
    filtered = filtered.filter(r => r.name.toLowerCase().includes(searchVal) || r.desc.toLowerCase().includes(searchVal));
  }

  const grid = document.getElementById('rc-reports-grid');
  if (grid) grid.innerHTML = rcBuildReportCardsHtml(filtered);
}

function rcSearchReports(query) {
  const searchVal = (query || '').toLowerCase().trim();
  let filtered = RC_REPORTS_LIST;

  if (rcActiveReportCategory !== 'all') {
    filtered = filtered.filter(r => r.cat === rcActiveReportCategory);
  }
  if (searchVal) {
    filtered = filtered.filter(r => r.name.toLowerCase().includes(searchVal) || r.desc.toLowerCase().includes(searchVal));
  }

  const grid = document.getElementById('rc-reports-grid');
  if (grid) grid.innerHTML = rcBuildReportCardsHtml(filtered);
}

// Live Report Preview Modal with Searchable Table & Perfect Column Alignment
function rcViewReportModal(reportId, reportName) {
  const candidates = rcGetCandidates();
  let previewData = [];
  let columns = [];

  switch (reportId) {
    case 'cand-report':
      columns = ['ID', 'Candidate Name', 'Phone', 'Email', 'Preferred Role', 'Status'];
      previewData = candidates.map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        c.phone,
        c.email,
        c.preferredRole || 'Software Engineer',
        `<span class="badge ${c.status === 'Active' ? 'bg-success' : 'bg-secondary'}" style="padding:4px 8px;border-radius:12px;font-size:11px;">${c.status}</span>`
      ]);
      break;

    case 'active-cand-report':
      columns = ['ID', 'Candidate Name', 'Track', 'Qualification', 'Profile Completion', 'Status'];
      previewData = candidates.filter(c => c.status === 'Active').map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        c.preferredRole || 'Full Stack',
        c.qualification || 'B.E/B.Tech',
        `<div style="display:flex;align-items:center;gap:6px;"><div style="flex:1;background:#e2e8f0;height:6px;border-radius:3px;overflow:hidden;"><div style="width:${c.profileCompletion || 85}%;background:#1cc88a;height:100%;"></div></div><span style="font-size:11px;font-weight:600;">${c.profileCompletion || 85}%</span></div>`,
        `<span class="badge bg-success" style="padding:4px 8px;border-radius:12px;font-size:11px;">Active</span>`
      ]);
      break;

    case 'attendance-report':
      columns = ['ID', 'Candidate Name', 'Total Sessions', 'Attended', 'Absence', 'Attendance %'];
      previewData = candidates.map(c => {
        const attPct = c.attendance ? c.attendance.percentage : Math.floor(80 + Math.random() * 18);
        return [
          `<strong>${c.id}</strong>`,
          c.name,
          '48',
          Math.round(48 * (attPct / 100)),
          48 - Math.round(48 * (attPct / 100)),
          `<span style="font-weight:700;color:${attPct >= 85 ? '#10b981' : attPct >= 75 ? '#f59e0b' : '#ef4444'};">${attPct}%</span>`
        ];
      });
      break;

    case 'skills-report':
      columns = ['ID', 'Candidate Name', 'Primary Skills', 'Level', 'Certifications', 'Placement Track'];
      previewData = candidates.map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        (c.skills && c.skills.length > 0) ? c.skills.slice(0, 3).map(s => `<span style="background:#f1f5f9;color:#334155;padding:2px 6px;border-radius:4px;font-size:11px;margin-right:3px;">${s.name}</span>`).join('') : 'Java, SQL',
        (c.skills && c.skills[0] && c.skills[0].level) || 'Advanced',
        (c.certifications ? c.certifications.length : 2) + ' Certified',
        c.preferredRole || 'Backend Track'
      ]);
      break;

    case 'assessment-report':
      columns = ['ID', 'Candidate Name', 'Technical Test', 'Aptitude', 'Mock Interview', 'Overall Grade'];
      previewData = candidates.map(c => {
        const tech = Math.floor(75 + Math.random() * 20);
        const apt = Math.floor(70 + Math.random() * 25);
        const mock = Math.floor(78 + Math.random() * 18);
        const avg = Math.round((tech + apt + mock) / 3);
        const grade = avg >= 85 ? 'A+' : avg >= 78 ? 'A' : 'B+';
        return [
          `<strong>${c.id}</strong>`,
          c.name,
          `${tech}/100`,
          `${apt}/100`,
          `${mock}/100`,
          `<span class="badge ${grade.startsWith('A') ? 'bg-primary' : 'bg-warning'}" style="padding:4px 8px;border-radius:6px;font-size:11px;font-weight:700;">${grade} (${avg}%)</span>`
        ];
      });
      break;

    case 'certifications-report':
      columns = ['ID', 'Candidate Name', 'Top Certification', 'Issuer', 'Issue Date', 'Project Portfolio'];
      previewData = candidates.map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        (c.certifications && c.certifications[0] ? c.certifications[0].name : 'Full Stack Web Dev Certification'),
        (c.certifications && c.certifications[0] ? c.certifications[0].issuer : 'Roriri Academy'),
        '2026-08-15',
        `<span style="color:#4e73df;font-weight:600;"><i class="bx bx-link-external"></i> ${(c.projects ? c.projects.length : 1)} Projects Active</span>`
      ]);
      break;

    case 'payment-report':
      columns = ['ID', 'Candidate Name', 'Total Fee', 'Paid Amount', 'Pending Due', 'Payment Status'];
      previewData = candidates.map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        rcFormatCurrency(c.payment ? c.payment.totalFee : 45000),
        `<span style="color:#10b981;font-weight:600;">${rcFormatCurrency(c.payment ? c.payment.paidAmount : 30000)}</span>`,
        `<span style="color:#ef4444;font-weight:600;">${rcFormatCurrency(c.payment ? c.payment.pendingAmount : 15000)}</span>`,
        `<span class="badge ${c.payment && c.payment.status === 'Paid' ? 'bg-success' : 'bg-warning'}" style="padding:4px 8px;border-radius:12px;font-size:11px;">${c.payment ? c.payment.status : 'Partial'}</span>`
      ]);
      break;

    case 'pending-payment-report':
      columns = ['ID', 'Candidate Name', 'Phone', 'Total Fee', 'Overdue Amount', 'Status'];
      previewData = candidates.filter(c => c.payment && c.payment.pendingAmount > 0).map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        c.phone,
        rcFormatCurrency(c.payment.totalFee),
        `<span style="color:#ef4444;font-weight:700;">${rcFormatCurrency(c.payment.pendingAmount)}</span>`,
        `<span class="badge bg-danger" style="padding:4px 8px;border-radius:12px;font-size:11px;">Pending Due</span>`
      ]);
      break;

    case 'revenue-report':
      columns = ['Category', 'Candidate Ref', 'Fee Model', 'Collections', 'Outstanding', 'Collection Rate'];
      previewData = [
        ['Full Stack Engineering', `${candidates.length} Candidates`, 'Standard Curriculum', rcFormatCurrency(385000), rcFormatCurrency(65000), '<span style="font-weight:700;color:#10b981;">85.5%</span>'],
        ['UI/UX Design Track', '6 Candidates', 'Design Track', rcFormatCurrency(210000), rcFormatCurrency(30000), '<span style="font-weight:700;color:#10b981;">87.5%</span>'],
        ['Data & Python Track', '8 Candidates', 'Enterprise Tier', rcFormatCurrency(320000), rcFormatCurrency(40000), '<span style="font-weight:700;color:#10b981;">88.8%</span>']
      ];
      break;

    case 'readiness-report':
      columns = ['ID', 'Candidate Name', 'Role', 'Technical', 'Soft Skills', 'Readiness Score'];
      previewData = candidates.map(c => {
        const score = c.placement ? c.placement.readinessScore : 84;
        return [
          `<strong>${c.id}</strong>`,
          c.name,
          c.preferredRole || 'Full Stack Developer',
          '88%',
          '82%',
          `<span style="font-weight:700;padding:3px 8px;border-radius:6px;background:${score >= 80 ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'};color:${score >= 80 ? '#10b981' : '#f59e0b'};">${score}%</span>`
        ];
      });
      break;

    case 'placement-ready-report':
      columns = ['ID', 'Candidate Name', 'Target Role', 'Score', 'Matched IT Companies', 'Status'];
      previewData = candidates.filter(c => c.placement && c.placement.readinessScore >= 80).map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        c.preferredRole || 'Full Stack Developer',
        `<span style="font-weight:700;color:#10b981;">${c.placement.readinessScore}%</span>`,
        'ABC Infotech, CloudCore, NovaTech',
        `<span class="badge bg-success" style="padding:4px 8px;border-radius:12px;font-size:11px;">Interview Cleared</span>`
      ]);
      break;

    case 'placed-candidates-report':
      columns = ['ID', 'Candidate Name', 'Placed Company', 'Role', 'Package (LPA)', 'Joining Date'];
      previewData = candidates.slice(0, 5).map((c, i) => [
        `<strong>${c.id}</strong>`,
        c.name,
        ['ABC Infotech Ltd', 'XYZ Solutions', 'TechNova Technologies', 'Cognitive Labs', 'Infosun'][i % 5],
        c.preferredRole || 'Software Engineer',
        `₹${(4.5 + (i * 0.75)).toFixed(1)} LPA`,
        `2026-09-${15 + i}`
      ]);
      break;

    default:
      columns = ['ID', 'Candidate Name', 'Role', 'Score', 'Status'];
      previewData = candidates.map(c => [
        `<strong>${c.id}</strong>`,
        c.name,
        c.preferredRole,
        `${c.placement ? c.placement.readinessScore : 85}%`,
        `<span class="badge bg-success">${c.status}</span>`
      ]);
  }

  const tableHeaderHtml = columns.map(col => `<th style="padding:10px 14px;background:#f8fafc;color:#475569;font-weight:600;font-size:11.5px;letter-spacing:0.4px;border-bottom:2px solid #e2e8f0;white-space:nowrap;">${col}</th>`).join('');
  const tableRowsHtml = previewData.map(row => `
    <tr style="transition:background 0.15s;" onmouseenter="this.style.background='#f8fafc';" onmouseleave="this.style.background='#fff';">
      ${row.map(cell => `<td style="padding:10px 14px;border-bottom:1px solid #f1f5f9;font-size:12.5px;color:#334155;vertical-align:middle;white-space:nowrap;">${cell}</td>`).join('')}
    </tr>
  `).join('');

  const html = `
    <div class="card" style="width:100%;max-width:920px;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,0.3);overflow:hidden;border:none;" onclick="event.stopPropagation()">
      <!-- Modal Header -->
      <div style="background:#0e2238;color:#fff;padding:1.1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.1);">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-size:18px;">
            <i class="bx bx-spreadsheet"></i>
          </div>
          <div>
            <h5 style="margin:0;font-size:16px;font-weight:700;color:#fff;">${reportName}</h5>
            <span style="font-size:11px;color:#94a3b8;">${previewData.length} records generated &bull; Live Preview</span>
          </div>
        </div>
        <button onclick="rcCloseModal()" style="background:rgba(255,255,255,0.1);border:none;color:#fff;width:32px;height:32px;border-radius:6px;font-size:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background 0.2s;" onmouseenter="this.style.background='rgba(255,255,255,0.2)';" onmouseleave="this.style.background='rgba(255,255,255,0.1)';">&times;</button>
      </div>

      <!-- Modal Body -->
      <div style="padding:1.25rem 1.5rem;background:#fff;">
        <!-- Filter toolbar inside modal -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:10px;flex-wrap:wrap;">
          <div style="position:relative;width:260px;">
            <i class="bx bx-search" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#94a3b8;font-size:15px;"></i>
            <input type="text" placeholder="Filter in preview..." oninput="rcFilterPreviewTable(this.value)" style="width:100%;padding:6px 10px 6px 30px;border-radius:6px;border:1px solid #cbd5e1;font-size:12.5px;outline:none;">
          </div>
          <div style="font-size:12px;color:#64748b;">
            Showing <strong>${previewData.length}</strong> entries
          </div>
        </div>

        <!-- Scrollable Table -->
        <div style="max-height:380px;overflow-x:auto;overflow-y:auto;border:1px solid #e2e8f0;border-radius:8px;">
          <table id="rc-modal-preview-table" style="width:100%;border-collapse:collapse;text-align:left;">
            <thead style="position:sticky;top:0;z-index:1;">
              <tr>${tableHeaderHtml}</tr>
            </thead>
            <tbody>
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal Footer -->
      <div style="padding:1rem 1.5rem;background:#f8fafc;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div style="font-size:12px;color:#64748b;display:flex;align-items:center;gap:6px;">
          <i class="bx bx-check-shield" style="color:#10b981;font-size:16px;"></i>
          Verified against Riya Consultancy mock database.
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-sm btn-light" onclick="rcCloseModal()" style="font-weight:600;padding:7px 14px;border:1px solid #cbd5e1;border-radius:6px;">
            Close
          </button>
          <button class="btn btn-sm btn-primary" onclick="rcExportCSV('${reportId}', '${reportName}'); rcCloseModal();" style="font-weight:600;padding:7px 16px;border-radius:6px;display:inline-flex;align-items:center;gap:6px;">
            <i class="bx bx-download"></i> Export as CSV
          </button>
        </div>
      </div>
    </div>
  `;
  rcOpenModal(html);
}

function rcFilterPreviewTable(query) {
  const table = document.getElementById('rc-modal-preview-table');
  if (!table) return;
  const q = (query || '').toLowerCase().trim();
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(tr => {
    const text = tr.innerText.toLowerCase();
    tr.style.display = text.includes(q) ? '' : 'none';
  });
}

function rcExportCSV(reportId, reportName) {
  const candidates = rcGetCandidates();
  let csvContent = 'data:text/csv;charset=utf-8,';

  if (reportId === 'payment-report' || reportId === 'pending-payment-report') {
    csvContent += 'Candidate ID,Candidate Name,Phone,Total Fee,Paid Amount,Pending Amount,Status\n';
    candidates.forEach(c => {
      csvContent += `${c.id},"${c.name}",${c.phone},${c.payment ? c.payment.totalFee : 45000},${c.payment ? c.payment.paidAmount : 30000},${c.payment ? c.payment.pendingAmount : 15000},${c.payment ? c.payment.status : 'Partial'}\n`;
    });
  } else if (reportId === 'attendance-report') {
    csvContent += 'Candidate ID,Candidate Name,Phone,Total Sessions,Attended Sessions,Absence,Attendance Percentage\n';
    candidates.forEach(c => {
      const attPct = c.attendance ? c.attendance.percentage : 88;
      csvContent += `${c.id},"${c.name}",${c.phone},48,${Math.round(48 * (attPct / 100))},${48 - Math.round(48 * (attPct / 100))},${attPct}%\n`;
    });
  } else if (reportId === 'skills-report') {
    csvContent += 'Candidate ID,Candidate Name,Primary Skill,Secondary Skills,Overall Rating,Track\n';
    candidates.forEach(c => {
      const primary = (c.skills && c.skills[0] ? c.skills[0].name : 'Java');
      const secondaries = (c.skills ? c.skills.slice(1).map(s => s.name).join('; ') : 'SQL, HTML');
      csvContent += `${c.id},"${c.name}","${primary}","${secondaries}",Advanced,"${c.preferredRole || 'Backend Track'}"\n`;
    });
  } else if (reportId === 'readiness-report' || reportId === 'placement-ready-report') {
    csvContent += 'Candidate ID,Candidate Name,Phone,Email,Preferred Role,Placement Score,Status\n';
    candidates.forEach(c => {
      csvContent += `${c.id},"${c.name}",${c.phone},${c.email},"${c.preferredRole}",${c.placement ? c.placement.readinessScore : 85}%,${c.status}\n`;
    });
  } else if (reportId === 'placed-candidates-report') {
    csvContent += 'Candidate ID,Candidate Name,Placed Company,Role,Package LPA,Joining Date\n';
    candidates.forEach((c, i) => {
      csvContent += `${c.id},"${c.name}","${['ABC Infotech Ltd', 'XYZ Solutions', 'TechNova Technologies'][i % 3]}","${c.preferredRole || 'Software Engineer'}",${(4.5 + (i * 0.75)).toFixed(1)} LPA,2026-09-${15 + i}\n`;
    });
  } else {
    csvContent += 'Candidate ID,Candidate Name,Phone,Email,Joining Date,Preferred Role,Placement Score,Status\n';
    candidates.forEach(c => {
      csvContent += `${c.id},"${c.name}",${c.phone},${c.email},${c.joiningDate},"${c.preferredRole}",${c.placement ? c.placement.readinessScore : 85}%,${c.status}\n`;
    });
  }

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', reportName.replace(/[^a-zA-Z0-9]/g, '_') + '.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  rcToast('Report Exported', 'Downloaded ' + reportName + ' as CSV successfully.', 'success');
}

function rcExportAllReportsSummary() {
  const candidates = rcGetCandidates();
  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Riya Consultancy - Master Summary Report\n';
  csvContent += `Generated Date,${new Date().toISOString().split('T')[0]}\n`;
  csvContent += `Total Enrolled Candidates,${candidates.length}\n`;
  csvContent += `Active in Training,${candidates.filter(c => c.status === 'Active').length}\n`;
  csvContent += `Placement Ready (>=80%),${candidates.filter(c => c.placement && c.placement.readinessScore >= 80).length}\n\n`;
  csvContent += 'ID,Name,Phone,Email,Role,Placement Score,Fee Paid,Fee Due,Status\n';
  candidates.forEach(c => {
    csvContent += `${c.id},"${c.name}",${c.phone},${c.email},"${c.preferredRole}",${c.placement ? c.placement.readinessScore : 85}%,${c.payment ? c.payment.paidAmount : 0},${c.payment ? c.payment.pendingAmount : 0},${c.status}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'Riya_Consultancy_Master_Summary.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  rcToast('Master Summary Exported', 'Downloaded complete Riya Consultancy summary report.', 'success');
}

// Edit Candidate Modal
function rcOpenEditCandidateModal(candId) {
  const c = rcGetCandidateById(candId);
  const html = `
    <div class="card" style="width:100%;max-width:540px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.3);overflow:hidden;" onclick="event.stopPropagation()">
      <div style="background:#0e2238;color:#fff;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;">
        <h5 style="margin:0;font-size:16px;font-weight:700;">Edit Candidate Details</h5>
        <button onclick="rcCloseModal()" style="background:none;border:none;color:#fff;font-size:22px;cursor:pointer;">&times;</button>
      </div>
      <form onsubmit="rcSubmitEditCandidate(event, '${c.id}')" style="padding:1.5rem;">
        <div class="mb-3">
          <label class="form-label" style="font-size:12px;font-weight:600;">Full Name</label>
          <input type="text" id="rc-edit-name" class="form-control" value="${c.name}" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Phone</label>
            <input type="tel" id="rc-edit-phone" class="form-control" value="${c.phone}" required>
          </div>
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Email</label>
            <input type="email" id="rc-edit-email" class="form-control" value="${c.email}" required>
          </div>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Preferred Role</label>
            <input type="text" id="rc-edit-role" class="form-control" value="${c.preferredRole}">
          </div>
          <div class="col-6">
            <label class="form-label" style="font-size:12px;font-weight:600;">Candidate Status</label>
            <select id="rc-edit-status" class="form-select">
              <option value="Active" ${c.status === 'Active' ? 'selected' : ''}>Active</option>
              <option value="Under Review" ${c.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
              <option value="Inactive" ${c.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
            </select>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-end;gap:10px;">
          <button type="button" class="btn btn-light" onclick="rcCloseModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Update Candidate</button>
        </div>
      </form>
    </div>
  `;
  rcOpenModal(html);
}

function rcSubmitEditCandidate(e, candId) {
  e.preventDefault();
  const candidates = rcGetCandidates();
  const c = candidates.find(item => item.id === candId);
  if (c) {
    c.name = document.getElementById('rc-edit-name').value.trim();
    c.phone = document.getElementById('rc-edit-phone').value.trim();
    c.email = document.getElementById('rc-edit-email').value.trim();
    c.preferredRole = document.getElementById('rc-edit-role').value.trim();
    c.status = document.getElementById('rc-edit-status').value;

    rcSaveCandidates(candidates);
    rcCloseModal();
    rcToast('Candidate Updated', 'Updated profile information for ' + c.name + '.', 'success');
    if (rcCurrentSubPage === 'candidate-profile') {
      rcNavigate('candidate-profile', { id: candId });
    } else {
      rcNavigate(rcCurrentSubPage);
    }
  }
}
