/* portal-common.js - shared data, login, and helpers for the role-based portals */
var PORTAL_DATA = {
  employees: [
    { id:'E001', name:'Anushiya P', role:'Developer', dept:'Development', email:'anushiya@roririsoft.com', phone:'8056775934', joinDate:'2024-04-29' },
    { id:'E002', name:'Hari Krishnan', role:'Developer', dept:'Development', email:'hari@roririsoft.com', phone:'9655335281', joinDate:'2024-06-10' },
    { id:'E003', name:'John Paul', role:'Designer', dept:'Design', email:'john@roririsoft.com', phone:'9876543210', joinDate:'2023-11-01' },
    { id:'E004', name:'Meera S', role:'HR Manager', dept:'HR', email:'meera@roririsoft.com', phone:'9765453210', joinDate:'2022-01-15' },
    { id:'E005', name:'Ravi Kumar', role:'Recruiter', dept:'HR', email:'ravi@roririsoft.com', phone:'9655443321', joinDate:'2024-08-18' }
  ],
  clients: [
    { id:'C001', company:'Jeno University', person:'Jenifer', location:'Tirunelveli', email:'jeniferc312003@gmail.com', phone:'09344555678', status:'Active' },
    { id:'C002', company:'AbdulKhader', person:'Abdul', location:'Madurai', email:'abdul@gmail.com', phone:'9344455678', status:'Active' },
    { id:'C003', company:'Bramman College', person:'Bramman', location:'Chennai', email:'bramman@gmail.com', phone:'9344455679', status:'Active' },
    { id:'C004', company:'Sri Venkateshwara', person:'Venkat', location:'Kanyakumari', email:'venkat@gmail.com', phone:'9344455680', status:'New' }
  ],
  clientEmps: { C001:['E001','E002','E003'], C002:['E004','E005'], C003:['E001'], C004:[] },
  convos: {
    C001: [
      { from:'client', employeeId:'E001', text:'Good morning, please share the progress of the payment module.', time:'09:15 AM' },
      { from:'employee', employeeId:'E001', text:'Hi Jenifer, work is 80% done. I will share the demo build today.', time:'09:32 AM' },
      { from:'client', employeeId:'E002', text:'Can we add an export-to-excel button in the report?', time:'10:05 AM' },
      { from:'employee', employeeId:'E002', text:'Sure, we will add it by tomorrow morning.', time:'10:11 AM' }
    ],
    C002: [
      { from:'client', employeeId:'E004', text:'Please coordinate the project kick-off meeting.', time:'Lunch' },
      { from:'employee', employeeId:'E004', text:'Meeting scheduled for 3 PM today.', time:'12:40 PM' }
    ],
    C003: [
      { from:'employee', employeeId:'E001', text:'Hi Bramman, your college site is live now!', time:'Yesterday' },
      { from:'client', employeeId:'E001', text:'Great work, thanks!', time:'Yesterday' }
    ],
    C004: []
  },
  projects: [
    { id:'P001', name:'College ERP Website', clientId:'C001', tech:'PHP', status:'Running', payStatus:'Paid', amount:150000, balance:0, duration:'8 months', developers:['E001','E002'] },
    { id:'P002', name:'Ecommerce Website + App', clientId:'C002', tech:'PHP', status:'Running', payStatus:'Pending', amount:200000, balance:80000, duration:'10 months', developers:['E004','E005'] },
    { id:'P003', name:'College Website', clientId:'C003', tech:'WordPress', status:'Completed', payStatus:'Paid', amount:120000, balance:21500, duration:'6 months', developers:['E001'] },
    { id:'P004', name:'Portfolio Website', clientId:'C004', tech:'WordPress', status:'New', payStatus:'Pending', amount:40000, balance:0, duration:'3 months', developers:[] }
  ],
  tasks: [
    { id:'T101', task:'Fix payment module bug', project:'College ERP Website', empId:'E001', priority:'High', due:'2026-09-12', status:'In Progress' },
    { id:'T102', task:'Design landing page', project:'College Website', empId:'E001', priority:'Medium', due:'2026-09-15', status:'Pending' },
    { id:'T103', task:'Write API docs', project:'College ERP Website', empId:'E002', priority:'Low', due:'2026-09-18', status:'Pending' },
    { id:'T104', task:'Update company profile', project:'Ecommerce Website + App', empId:'E004', priority:'Medium', due:'2026-09-14', status:'Completed' }
  ],
  attendance: [
    { empId:'E001', date:'2026-09-04', status:'Present' },
    { empId:'E001', date:'2026-09-05', status:'Present' },
    { empId:'E001', date:'2026-09-06', status:'Holiday' },
    { empId:'E001', date:'2026-09-07', status:'Present' }
  ],
  trainees: [
    { id:'T001', name:'Deepika R', course:'Full Stack Development', email:'deepika@gmail.com', phone:'9000000001', feeStatus:'Paid' },
    { id:'T002', name:'Arun Vijay', course:'Front End (MERN)', email:'arun@gmail.com', phone:'9000000002', feeStatus:'Due' },
    { id:'T003', name:'Priya Dharshini', course:'Software Testing', email:'priya@gmail.com', phone:'9000000003', feeStatus:'Paid' },
    { id:'T004', name:'Karthik Raja', course:'Full Stack Development', email:'karthik@gmail.com', phone:'9000000004', feeStatus:'Due' }
  ],
  courses: [
    { id:'CO1', name:'Full Stack Development', duration:'6 months', fee:45000, subjects:['HTML & CSS','JavaScript','PHP','MySQL','React'] },
    { id:'CO2', name:'Front End (MERN)', duration:'5 months', fee:40000, subjects:['HTML & CSS','JavaScript','React','Node','MongoDB'] },
    { id:'CO3', name:'Software Testing', duration:'4 months', fee:30000, subjects:['Manual Testing','SQL','Automation','Agile'] }
  ],
  traineePayments: [
    { traineeId:'T001', amount:45000, date:'2026-08-01', status:'Paid' },
    { traineeId:'T001', amount:10000, date:'2026-06-25', status:'Paid' },
    { traineeId:'T002', amount:40000, date:'2026-07-10', status:'Due' }
  ],
  miniProjects: [
    { id:'MP1', traineeId:'T001', name:'Blood Bank Management', course:'Full Stack Development', status:'Submitted' },
    { id:'MP2', traineeId:'T001', name:'E-Commerce Store', course:'Full Stack Development', status:'In Progress' },
    { id:'MP3', traineeId:'T002', name:'Portfolio Site', course:'Front End (MERN)', status:'Submitted' }
  ],
  internPosts: [
    { id:'IP1', domain:'Web Development', position:'Frontend Intern', duration:'3 months', stipend:'5000', openings:2, status:'Open' },
    { id:'IP2', domain:'Web Development', position:'Backend Intern', duration:'3 months', stipend:'5000', openings:1, status:'Open' },
    { id:'IP3', domain:'Design', position:'UI/UX Intern', duration:'3 months', stipend:'4000', openings:1, status:'Open' },
    { id:'IP4', domain:'Testing', position:'QA Intern', duration:'3 months', stipend:'4000', openings:1, status:'Filled' }
  ],
  internApplications: [
    { id:'IA1', intern:'Sneha L', post:'Frontend Intern', applied:'2026-09-01', status:'Interview' },
    { id:'IA2', intern:'Vignesh M', post:'Backend Intern', applied:'2026-09-03', status:'Reviewed' },
    { id:'IA3', intern:'Divya B', post:'UI/UX Intern', applied:'2026-09-05', status:'Applied' }
  ],
  internTasks: [
    { id:'IT1', intern:'Sneha L', task:'Build landing page layout', mentor:'Anushiya P', status:'In Progress' },
    { id:'IT2', intern:'Vignesh M', task:'Create REST API skeleton', mentor:'Hari Krishnan', status:'Pending' }
  ]
};

var CURRENT = { name:'Guest', type:'' };

// ---- Shared data store (fed by the admin via localStorage) ----
var LS_KEY = 'roriri_portal_data_v1';
var __lsMem = (typeof window !== 'undefined' && window.__lsMem) ? window.__lsMem : {};
if (typeof window !== 'undefined' && !window.__lsMem) { window.__lsMem = __lsMem; }
function lsGet(k) {
  var v = null;
  try { if (typeof localStorage !== 'undefined') v = localStorage.getItem(k); } catch (e) {}
  if (v != null) { return v; }
  return (k in __lsMem) ? __lsMem[k] : null;
}
function lsSet(k, v) {
  __lsMem[k] = v;
  try { if (typeof localStorage !== 'undefined') localStorage.setItem(k, v); } catch (e) {}
}
(function overlayPortalData() {
  var raw = lsGet(LS_KEY);
  if (!raw) { return; }
  var o; try { o = JSON.parse(raw); } catch (e) { return; }
  ['employees','clients','projects','tasks','attendance','trainees','courses','traineePayments','miniProjects','clientEmps','convos','internApplications','internTasks'].forEach(function (key) {
    if (o && o[key] && Array.isArray(o[key])) { PORTAL_DATA[key] = o[key]; }
  });
})();

function es(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function inr(n) { return '₹ ' + Number(n || 0).toLocaleString('en-IN'); }
function avatar(name) { return es((name || '?').trim().charAt(0).toUpperCase()); }
function findRecord(list, q, keys) {
  var s = String(q || '').trim().toLowerCase();
  if (!s) { return null; }
  return list.find(function (it) {
    return keys.some(function (k) { return String(it[k] || '').toLowerCase().indexOf(s) !== -1; });
  }) || null;
}
function toast(msg, type) {
  var colors = { success:'#27ae60', danger:'#e74c3c', info:'#2e86de' };
  var d = document.createElement('div');
  d.textContent = msg;
  d.style.cssText = 'position:fixed;top:18px;right:18px;z-index:99999;background:' + (colors[type] || colors.info) + ';color:#fff;padding:11px 18px;border-radius:8px;font-size:.85rem;box-shadow:0 6px 18px rgba(0,0,0,.15);transition:opacity .3s;max-width:320px';
  document.body.appendChild(d);
  setTimeout(function () { d.style.opacity = '0'; }, 2600);
  setTimeout(function () { d.remove(); }, 2950);
}
function clStatusBadge(s) {
  s = es(s);
  switch (s) {
    case 'Paid': case 'Present': case 'Completed': case 'Submitted': case 'Active': case 'Open': return '<span class="badge badge-success">' + s + '</span>';
    case 'Pending': case 'Due': case 'New': case 'Reviewed': return '<span class="badge badge-warning">' + s + '</span>';
    case 'Absent': case 'Filled': return '<span class="badge badge-danger">' + s + '</span>';
    default: return '<span class="badge badge-info">' + s + '</span>';
  }
}
function portalLogin(e) {
  if (e && e.preventDefault) e.preventDefault();
  var u = (document.getElementById('login-name') ? document.getElementById('login-name').value.trim() : '') || 'Guest';
  if (typeof window.portalValidate === 'function' && !window.portalValidate(u)) {
    toast('Login failed: "' + u + '" not found in this portal', 'danger');
    return false;
  }
  CURRENT = { name: u, type: window.PORTAL_TYPE || '' };
  document.getElementById('login-page').style.display = 'none';
  var app = document.getElementById('portal-app');
  app.style.display = 'block';
  var uel = document.getElementById('portal-user');
  if (uel) uel.innerHTML = '<b>' + es(u) + '</b><br><small class="color-muted">' + es(window.PORTAL_TYPE || 'Portal') + '</small>';
  if (typeof window.portalDashboard === 'function') { portalDashboard(u); }
  toast('Welcome, ' + u + '!', 'success');
}
function portalLogout() {
  document.getElementById('portal-app').style.display = 'none';
  document.getElementById('login-page').style.display = 'flex';
}
function startPage() {
  var today = new Date().toLocaleDateString('en-IN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  var fmt = document.getElementById('portal-date');
  if (fmt) fmt.textContent = today;
  if (CURRENT && CURRENT.type && typeof window.portalDashboard === 'function') { portalDashboard(CURRENT.name || 'Guest'); }
}