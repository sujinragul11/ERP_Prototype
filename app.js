/* ============================================
   RORIRI ERP - Complete Prototype
   ============================================ */

// ============ MOCK DATA ============
const MOCK = {
  nextId: 100,
  uid() { return 'ID' + (++this.nextId); },

  admin: [
    { id:1, name:'Ragupathi', username:'ragu', password:'pass', role:'Super Admin' },
    { id:2, name:'Priya', username:'priya', password:'pass', role:'Admin' }
  ],

  entities: [
    { id:1, name:'RORIRI SOFTWARE SOLUTIONS', icon:'lni-laptop-phone', color:'#4e73df', income:'0' },
    { id:2, name:'NEXGEN IT COLLEGE', icon:'lni-library', color:'#e74a3b', income:'0' },
    { id:3, name:'NEXGEN IT ACADEMY', icon:'lni-code-alt', color:'#1cc88a', income:'1,25,000' },
    { id:4, name:'RORIRI FOUNDATION', icon:'lni-heart', color:'#e74a3b', income:'0' },
    { id:5, name:'RORIRI GROUPS', icon:'lni-group', color:'#f6c23e', income:'0' },
    { id:6, name:'RIYA IAS ACADEMY', icon:'lni-surf-board', color:'#36b9cc', income:'0' },
    { id:7, name:'RIYA NEET ACADEMY', icon:'lni-target', color:'#1cc88a', income:'0' },
    { id:8, name:'RIYA CONSULTANCY', icon:'lni-star-half', color:'#f6c23e', income:'0' },
    { id:9, name:'RITHISH FARMS', icon:'lni-store', color:'#f6c23e', income:'0' },
    { id:10, name:'NEXEMY', icon:'lni-globe', color:'#1cc88a', income:'32,500' }
  ],

  employees: [
    { id:'E001', firstName:'Anushiya', lastName:'P', name:'Anushiya P', role:'Developer', entity:'Roriri Software', phone:'8056775934', personalEmail:'anushiyapaulraj24@gmail.com', companyEmail:'anushiya@roririsoft.com', status:'Active', joinDate:'2024-04-29', dob:'24-12-2001', bloodGroup:'O+ ve', gender:'Female', maritalStatus:'Single', address:'kalakad', username:'anushiya', password:'24-12-2001', payroll:'15,000', department:'Development', regNo:180001 },
    { id:'E002', firstName:'Hari', lastName:'K', name:'Hari K', role:'Developer', entity:'Roriri Software', phone:'7550300367', personalEmail:'hari@gmail.com', companyEmail:'hari@roririsoft.com', status:'Active', joinDate:'2024-07-04', dob:'25-11-2002', bloodGroup:'AB-', gender:'Male', maritalStatus:'Single', address:'32uhjikikj', username:'hari', password:'2002-11-25', payroll:'18,000', department:'Development', regNo:180021 },
    { id:'E003', firstName:'Sherlin', lastName:'JR', name:'Sherlin JR', role:'Developer', entity:'Roriri Software', phone:'6282657440', personalEmail:'jmsvava3@gmail.com', companyEmail:'sherlin@roririsoft.com', status:'Active', joinDate:'2024-08-01', dob:'02-07-2024', bloodGroup:'O+', gender:'Female', maritalStatus:'Single', address:'Pathanamthitta', username:'sherlinjr', password:'2024-07-02', payroll:'12,000', department:'Development', regNo:180025 },
    { id:'E004', firstName:'Asha', lastName:'T', name:'Asha T', role:'Digital Marketing', entity:'Roriri Software', phone:'9943862030', personalEmail:'ashat@gmail.com', companyEmail:'ashat@roririsoft.com', status:'Active', joinDate:'2024-06-15', dob:'15-06-2000', bloodGroup:'A+', gender:'Female', maritalStatus:'Single', address:'Tirunelveli', username:'ashat', password:'2024-06-15', payroll:'14,000', department:'Marketing', regNo:180022 },
    { id:'E005', firstName:'CDS', lastName:'', name:'CDS', role:'Digital Marketing', entity:'Roriri Software', phone:'8765435432', personalEmail:'swd@gmail.com', companyEmail:'cds@roririsoft.com', status:'Active', joinDate:'2024-07-17', dob:'22-02-2000', bloodGroup:'', gender:'Male', maritalStatus:'Single', address:'gfhghf', username:'cds', password:'2000-02-22', payroll:'12,000', department:'Marketing', regNo:180020 },
    { id:'E006', firstName:'Emp', lastName:'001', name:'Emp 001', role:'Designer', entity:'Roriri Software', phone:'0987654321', personalEmail:'demo11@gmail.com', companyEmail:'emp@roririsoft.com', status:'Active', joinDate:'2024-07-01', dob:'30-06-2000', bloodGroup:'', gender:'Female', maritalStatus:'Single', address:'sdd', username:'emp', password:'2000-06-30', payroll:'10,000', department:'Design', regNo:180019 },
    { id:'E007', firstName:'Sherlin', lastName:'H', name:'Sherlin H', role:'Developer', entity:'Roriri Software', phone:'1234578963', personalEmail:'sherlinhh@gmail.com', companyEmail:'sherlinhh@roririsoft.com', status:'Active', joinDate:'2024-08-01', dob:'01-08-2000', bloodGroup:'', gender:'Female', maritalStatus:'Single', address:'Tirunelveli', username:'sherlinhh', password:'2024-08-01', payroll:'10,000', department:'Development', regNo:180026 },
    { id:'E008', firstName:'GGG', lastName:'', name:'GGG', role:'Trainer', entity:'NexGen IT Academy', phone:'1234569875', personalEmail:'ggg@gmail.com', companyEmail:'ggg@roririsoft.com', status:'Active', joinDate:'2024-08-01', dob:'01-08-2000', bloodGroup:'', gender:'Male', maritalStatus:'Single', address:'Chennai', username:'ggg', password:'2024-08-01', payroll:'11,000', department:'Training', regNo:180027 }
  ],

  clients: [
    { id:'C001', name:'Jeno', company:'Jeno University', location:'Tirunelveli', email:'jeno@gmail.com', phone:'8906745432', status:'Active' },
    { id:'C002', name:'ABC Corp', company:'ABC Corporation', location:'Chennai', email:'abc@gmail.com', phone:'9876543210', status:'Active' },
    { id:'C003', name:'XYZ Ltd', company:'XYZ Industries', location:'Madurai', email:'xyz@gmail.com', phone:'7654321098', status:'Active' },
    { id:'C004', name:'TechStart', company:'TechStart Solutions', location:'Bangalore', email:'info@techstart.com', phone:'8765432109', status:'Inactive' }
  ],

  projects: [
    { id:'P001', name:'Jeno University', services:'ERP, Logo Design', tech:'PHP, React JS', client:'Jeno', clientEmail:'jeno@gmail.com', address:'Tirunelveli', startDate:'2024-07-16', duration:'30 days', amount:10000, balance:10000, description:'University management ERP system', status:'New', payStatus:'Pending', developers:['Anushiya P','Hari K'], payments:[] },
    { id:'P002', name:'Demo Project', services:'ERP, Logo Design', tech:'PHP, React Native', client:'Jeno', clientEmail:'jeno@gmail.com', address:'Tirunelveli', startDate:'2024-07-16', duration:'30 days', amount:10000, balance:9500, description:'Demo project for client', status:'New', payStatus:'Pending', developers:['Sherlin JR'], payments:[{date:'2024-08-01',amount:500,mode:'Cash',receivedBy:'Admin',txnId:'01'}] },
    { id:'P003', name:'Test Portal', services:'Website(Dynamic)', tech:'React JS, Flutter', client:'ABC Corp', clientEmail:'abc@gmail.com', address:'Chennai', startDate:'2024-08-01', duration:'3 days', amount:10000, balance:10000, description:'Test portal development', status:'In Progress', payStatus:'Pending', developers:['Asha T'], payments:[] },
    { id:'P004', name:'E-Commerce Site', services:'Website(Dynamic)', tech:'React JS, PHP', client:'XYZ Ltd', clientEmail:'xyz@gmail.com', address:'Madurai', startDate:'2024-08-10', duration:'45 days', amount:25000, balance:15000, description:'E-commerce website', status:'In Progress', payStatus:'Partially', developers:['Anushiya P','Sherlin JR'], payments:[{date:'2024-08-15',amount:5000,mode:'Net Banking',receivedBy:'Admin',txnId:'02'},{date:'2024-08-20',amount:5000,mode:'Cash',receivedBy:'Admin',txnId:'03'}] }
  ],

  attendance: [
    { date:'2024-08-01', checkIn:'09:02 AM', checkOut:'06:15 PM', hours:'9h 13m', status:'Present' },
    { date:'2024-08-02', checkIn:'09:15 AM', checkOut:'06:30 PM', hours:'9h 15m', status:'Present' },
    { date:'2024-08-03', checkIn:'-', checkOut:'-', hours:'-', status:'Weekend' },
    { date:'2024-08-04', checkIn:'-', checkOut:'-', hours:'-', status:'Weekend' },
    { date:'2024-08-05', checkIn:'09:05 AM', checkOut:'06:10 PM', hours:'9h 05m', status:'Present' },
    { date:'2024-08-06', checkIn:'09:30 AM', checkOut:'06:00 PM', hours:'8h 30m', status:'Present' },
    { date:'2024-08-07', checkIn:'-', checkOut:'-', hours:'-', status:'Absent' }
  ],

  payments: [
    { id:'PAY001', date:'2024-08-01', from:'Jeno', amount:500, mode:'Cash', txnId:'01', status:'Paid' },
    { id:'PAY002', date:'2024-08-01', from:'Jeno', amount:500, mode:'Cash', txnId:'02', status:'Paid' },
    { id:'PAY003', date:'2024-08-01', from:'Jeno', amount:500, mode:'Cash', txnId:'03', status:'Paid' },
    { id:'PAY004', date:'2024-08-01', from:'Jeno', amount:500, mode:'Cash', txnId:'04', status:'Paid' },
    { id:'PAY005', date:'2024-08-01', from:'Jeno', amount:5000, mode:'Cash', txnId:'06', status:'Paid' }
  ],

  trainees: [
    { id:'T001', name:'Demo 001', course:'Full Stack Development', duration:'6 months', fee:25000, phone:'6282657440', email:'demo001@gmail.com', status:'Active', joinDate:'2024-07-27', dob:'12-07-2024', gender:'Female', address:'Pathanamthitta' },
    { id:'T002', name:'Demo 002', course:'Web Development', duration:'3 months', fee:15000, phone:'1234567890', email:'demo002@gmail.com', status:'Active', joinDate:'2024-07-27', dob:'12-07-2024', gender:'Female', address:'Kerala' },
    { id:'T003', name:'Sherlin JR 001', course:'Full Stack Development', duration:'6 months', fee:25000, phone:'6282657440', email:'sherlin001@gmail.com', status:'Active', joinDate:'2024-07-29', dob:'17-07-2024', gender:'Female', address:'Pathanamthitta' },
    { id:'T004', name:'Asha 001', course:'Python Development', duration:'4 months', fee:20000, phone:'9943862039', email:'asha001@gmail.com', status:'Active', joinDate:'2024-07-30', dob:'30-07-2024', gender:'Female', address:'Tirunelveli' },
    { id:'T005', name:'Sherlin JR 002', course:'Mobile App Development', duration:'6 months', fee:25000, phone:'6282657440', email:'sherlin002@gmail.com', status:'Active', joinDate:'2024-07-30', dob:'19-07-2024', gender:'Male', address:'Pathanamthitta' },
    { id:'T006', name:'Sherlin JR 003', course:'Full Stack Development', duration:'12 months', fee:45000, phone:'6282657440', email:'sherlin003@gmail.com', status:'Active', joinDate:'2024-07-30', dob:'18-07-2024', gender:'Female', address:'Pathanamthitta' }
  ],

  courses: [
    { id:'CS001', name:'Full Stack Development', duration:'6 months', fee:25000, subjects:8, status:'Available' },
    { id:'CS002', name:'Web Development', duration:'3 months', fee:15000, subjects:5, status:'Available' },
    { id:'CS003', name:'Python Development', duration:'4 months', fee:20000, subjects:6, status:'Available' },
    { id:'CS004', name:'Mobile App Development', duration:'6 months', fee:25000, subjects:7, status:'Available' },
    { id:'CS005', name:'Digital Marketing', duration:'3 months', fee:12000, subjects:4, status:'Available' }
  ],

  subjects: [
    { id:'SUB001', name:'HTML & CSS', course:'Full Stack Development', topics:5, status:'Active' },
    { id:'SUB002', name:'JavaScript', course:'Full Stack Development', topics:8, status:'Active' },
    { id:'SUB003', name:'React JS', course:'Full Stack Development', topics:6, status:'Active' },
    { id:'SUB004', name:'Node.js', course:'Full Stack Development', topics:7, status:'Active' },
    { id:'SUB005', name:'PHP', course:'Web Development', topics:5, status:'Active' },
    { id:'SUB006', name:'Python Basics', course:'Python Development', topics:4, status:'Active' },
    { id:'SUB007', name:'Flutter', course:'Mobile App Development', topics:6, status:'Active' },
    { id:'SUB008', name:'React Native', course:'Mobile App Development', topics:5, status:'Active' }
  ],

  topics: [
    { id:'TOP001', name:'HTML Basics', subject:'HTML & CSS', order:1, status:'Active' },
    { id:'TOP002', name:'CSS Flexbox', subject:'HTML & CSS', order:2, status:'Active' },
    { id:'TOP003', name:'CSS Grid', subject:'HTML & CSS', order:3, status:'Active' },
    { id:'TOP004', name:'Variables & Types', subject:'JavaScript', order:1, status:'Active' },
    { id:'TOP005', name:'Functions & Scope', subject:'JavaScript', order:2, status:'Active' },
    { id:'TOP006', name:'DOM Manipulation', subject:'JavaScript', order:3, status:'Active' },
    { id:'TOP007', name:'JSX & Components', subject:'React JS', order:1, status:'Active' },
    { id:'TOP008', name:'State & Props', subject:'React JS', order:2, status:'Active' }
  ],

  dailyReports: [
    { id:'DR001', date:'2024-08-01', employee:'Anushiya P', category:'Development', subcategory:'Frontend', task:'Login Page UI', hours:4, status:'Completed', description:'Completed login page with responsive design', url:'' },
    { id:'DR002', date:'2024-08-01', employee:'Hari K', category:'Development', subcategory:'Backend', task:'API Development', hours:6, status:'In Progress', description:'Working on REST API endpoints', url:'' },
    { id:'DR003', date:'2024-08-02', employee:'Anushiya P', category:'Development', subcategory:'Frontend', task:'Dashboard Page', hours:5, status:'In Progress', description:'Dashboard layout and stat cards', url:'' },
    { id:'DR004', date:'2024-08-05', employee:'Sherlin JR', category:'Design', subcategory:'UI/UX', task:'Logo Design', hours:3, status:'Completed', description:'Created logo variations for client', url:'' }
  ],

  taskAssignments: [
    { id:'TA001', project:'Jeno University', employee:'Anushiya P', task:'Login Page Development', startDate:'2024-08-01', dueDate:'2024-08-05', priority:'High', status:'In Progress', description:'Develop login page with validation' },
    { id:'TA002', project:'Jeno University', employee:'Hari K', task:'Database Design', startDate:'2024-07-20', dueDate:'2024-07-30', priority:'High', status:'Completed', description:'Design MySQL database schema' },
    { id:'TA003', project:'Demo Project', employee:'Sherlin JR', task:'Logo Design', startDate:'2024-07-25', dueDate:'2024-07-28', priority:'Medium', status:'Completed', description:'Create company logo' }
  ],

  complaints: [
    { id:'CMP001', date:'2024-08-01', from:'Anushiya P', type:'Workplace', subject:'AC not working', description:'AC in room 201 is not working properly', status:'Open', priority:'Medium' },
    { id:'CMP002', date:'2024-08-03', from:'Hari K', type:'Technical', subject:'Server down', description:'Development server is frequently going down', status:'In Progress', priority:'High' },
    { id:'CMP003', date:'2024-08-05', from:'Sherlin JR', type:'Facility', subject:'Internet issue', description:'Slow internet speed in development area', status:'Resolved', priority:'Low' }
  ],

  idCards: [
    { id:'ID001', employee:'Anushiya P', regNo:180001, entity:'Roriri Software', role:'Developer', bloodGroup:'O+ ve', joinDate:'2024-04-29', status:'Active' },
    { id:'ID002', employee:'Hari K', regNo:180021, entity:'Roriri Software', role:'Developer', bloodGroup:'AB-', joinDate:'2024-07-04', status:'Active' },
    { id:'ID003', employee:'Sherlin JR', regNo:180025, entity:'Roriri Software', role:'Developer', bloodGroup:'O+', joinDate:'2024-08-01', status:'Active' }
  ],

  mous: [
    { id:'MOU001', client:'Jeno University', projectName:'Jeno University ERP', startDate:'2024-07-16', endDate:'2024-08-15', amount:10000, status:'Active', description:'ERP system development for Jeno University' },
    { id:'MOU002', client:'ABC Corp', projectName:'Test Portal', startDate:'2024-08-01', endDate:'2024-08-04', amount:10000, status:'Active', description:'Web portal development for ABC Corp' }
  ],

  documents: [
    { id:'DOC001', employee:'Anushiya P', type:'Aadhar Card', fileName:'anushiya_aadhar.pdf', uploadDate:'2024-07-27', status:'Verified' },
    { id:'DOC002', employee:'Anushiya P', type:'PAN Card', fileName:'anushiya_pan.pdf', uploadDate:'2024-07-27', status:'Verified' },
    { id:'DOC003', employee:'Hari K', type:'Offer Letter', fileName:'hari_offer.pdf', uploadDate:'2024-07-04', status:'Verified' },
    { id:'DOC004', employee:'Sherlin JR', type:'Bank Details', fileName:'sherlin_bank.pdf', uploadDate:'2024-08-01', status:'Pending' }
  ],

  enquiries: [
    { id:'ENQ001', date:'2024-08-01', name:'Tech Solutions', phone:'9876543210', email:'tech@gmail.com', type:'Project', description:'Need ERP for manufacturing', status:'New', assignedTo:'Anushiya P' },
    { id:'ENQ002', date:'2024-08-03', name:'Global Corp', phone:'8765432109', email:'global@gmail.com', type:'Website', description:'Corporate website redesign', status:'Contacted', assignedTo:'Asha T' },
    { id:'ENQ003', date:'2024-08-05', name:'StartUp Inc', phone:'7654321098', email:'startup@gmail.com', type:'App', description:'Mobile app for e-commerce', status:'Closed', assignedTo:'Hari K' }
  ],

  // Academy
  academyPayments: [
    { id:'AP001', date:'2024-08-01', trainee:'Demo 001', amount:5000, method:'Cash', receivedBy:'Admin', status:'Paid' },
    { id:'AP002', date:'2024-08-01', trainee:'Demo 002', amount:3000, method:'Net Banking', receivedBy:'Admin', status:'Paid' },
    { id:'AP003', date:'2024-08-05', trainee:'Sherlin JR 001', amount:5000, method:'Cash', receivedBy:'Admin', status:'Paid' }
  ],

  miniProjects: [
    { id:'MP001', name:'Todo App', course:'Full Stack Development', trainee:'Demo 001', startDate:'2024-07-30', endDate:'2024-08-05', status:'Completed', description:'Build a todo application with CRUD' },
    { id:'MP002', name:'Weather App', course:'Full Stack Development', trainee:'Sherlin JR 001', startDate:'2024-08-01', endDate:'', status:'In Progress', description:'Weather forecast app using API' },
    { id:'MP003', name:'Blog Platform', course:'Web Development', trainee:'Demo 002', startDate:'2024-08-03', endDate:'', status:'In Progress', description:'Simple blog platform with PHP' }
  ],

  // Expense
  expenseCategories: [
    { id:'EXCAT001', name:'Roriri Software', status:'Active' },
    { id:'EXCAT002', name:'IT Academy', status:'Active' },
    { id:'EXCAT003', name:'IAS Academy', status:'Active' },
    { id:'EXCAT004', name:'Roriri IT Park', status:'Active' }
  ],

  expenseSubCategories: [
    { id:'EXSUB001', name:'Office Rent', category:'Roriri Software', status:'Active' },
    { id:'EXSUB002', name:'Salary', category:'IT Academy', status:'Active' },
    { id:'EXSUB003', name:'Internet', category:'Roriri Software', status:'Active' },
    { id:'EXSUB004', name:'Stationery', category:'IAS Academy', status:'Active' },
    { id:'EXSUB005', name:'Maintenance', category:'Roriri IT Park', status:'Active' },
    { id:'EXSUB006', name:'Electricity', category:'IT Academy', status:'Active' },
    { id:'EXSUB007', name:'Travel', category:'Roriri Software', status:'Active' }
  ],

  expenses: [
    { id:'EX001', date:'2024-08-01', category:'Roriri Software', subCategory:'Office Rent', amount:15000, paidTo:'Landlord', method:'Net Banking', txnId:'TXN001', description:'Monthly office rent', status:'Active' },
    { id:'EX002', date:'2024-08-02', category:'IT Academy', subCategory:'Salary', amount:45000, paidTo:'Staff', method:'Net Banking', txnId:'TXN002', description:'Monthly salary disbursement', status:'Active' },
    { id:'EX003', date:'2024-08-03', category:'Roriri Software', subCategory:'Internet', amount:1500, paidTo:'ISP', method:'Online Payment', txnId:'TXN003', description:'Internet bill', status:'Active' },
    { id:'EX004', date:'2024-08-05', category:'IAS Academy', subCategory:'Stationery', amount:2000, paidTo:'Vendor', method:'Cash', txnId:'', description:'Office supplies', status:'Active' },
    { id:'EX005', date:'2024-08-06', category:'Roriri IT Park', subCategory:'Maintenance', amount:5000, paidTo:'Contractor', method:'Cash', txnId:'', description:'Building maintenance', status:'Active' },
    { id:'EX006', date:'2024-08-07', category:'IT Academy', subCategory:'Electricity', amount:3500, paidTo:'Board', method:'Net Banking', txnId:'TXN004', description:'Electricity bill', status:'Active' }
  ],

  futureExpenses: [
    { id:'FEX001', reason:'New Server Purchase', amount:50000, priority:'High', description:'Need new server for development', status:'Pending' },
    { id:'FEX002', reason:'Office Furniture', amount:25000, priority:'Medium', description:'Chairs and desks for new employees', status:'Pending' },
    { id:'FEX003', reason:'Software License', amount:10000, priority:'Low', description:'Annual license renewal', status:'Pending' }
  ],

  // Assets
  assetCategories: [
    { id:'ACAT001', name:'Electronics', status:'Active' },
    { id:'ACAT002', name:'Peripherals', status:'Active' },
    { id:'ACAT003', name:'Furniture', status:'Active' },
    { id:'ACAT004', name:'Software', status:'Active' }
  ],

  assetSubCategories: [
    { id:'ASC001', name:'Laptop', category:'Electronics', quantity:5, status:'Active' },
    { id:'ASC002', name:'Monitor', category:'Electronics', quantity:3, status:'Active' },
    { id:'ASC003', name:'Keyboard', category:'Peripherals', quantity:10, status:'Active' },
    { id:'ASC004', name:'Mouse', category:'Peripherals', quantity:10, status:'Active' },
    { id:'ASC005', name:'Chair', category:'Furniture', quantity:8, status:'Active' },
    { id:'ASC006', name:'Projector', category:'Electronics', quantity:1, status:'Active' }
  ],

  rooms: [
    { id:'RM001', name:'Room 101', status:'Active' },
    { id:'RM002', name:'Room 102', status:'Active' },
    { id:'RM003', name:'Training Hall', status:'Active' },
    { id:'RM004', name:'Conference Room', status:'Active' }
  ],

  vendors: [
    { id:'V001', name:'HP India', company:'Hewlett Packard', phone:'18001024444', email:'sales@hp.com', location:'Chennai', status:'Active' },
    { id:'V002', name:'Dell India', company:'Dell Technologies', phone:'18004254002', email:'sales@dell.com', location:'Bangalore', status:'Active' },
    { id:'V003', name:'Local Furniture', company:'ABC Furnishers', phone:'9876543210', email:'info@furnishers.com', location:'Tirunelveli', status:'Active' }
  ],

  assets: [
    { id:'A001', name:'HP Laptop - 01', subCategory:'Laptop', category:'Electronics', assetNo:'ASSET001', vendor:'HP India', status:'Assigned', assignedTo:'Anushiya P', room:'Room 101', purchaseDate:'2024-04-29', description:'HP Pavilion laptop', condition:'Good' },
    { id:'A002', name:'Dell Monitor - 01', subCategory:'Monitor', category:'Electronics', assetNo:'ASSET002', vendor:'Dell India', status:'Assigned', assignedTo:'Hari K', room:'Room 102', purchaseDate:'2024-05-15', description:'Dell 24 inch monitor', condition:'Good' },
    { id:'A003', name:'Keyboard - 03', subCategory:'Keyboard', category:'Peripherals', assetNo:'ASSET003', vendor:'Local', status:'Repair', assignedTo:'-', room:'-', purchaseDate:'2024-06-01', description:'Logitech keyboard', condition:'Repair' },
    { id:'A004', name:'Office Chair - 05', subCategory:'Chair', category:'Furniture', assetNo:'ASSET004', vendor:'Local Furniture', status:'Not in Use', assignedTo:'-', room:'Room 101', purchaseDate:'2024-03-10', description:'Ergonomic office chair', condition:'Good' },
    { id:'A005', name:'Projector - 01', subCategory:'Projector', category:'Electronics', assetNo:'ASSET005', vendor:'HP India', status:'Assigned', assignedTo:'Training Hall', room:'Training Hall', purchaseDate:'2024-02-15', description:'Epson projector', condition:'Good' }
  ],

  assetServices: [
    { id:'SVC001', product:'Keyboard - 03', category:'Peripherals', serviceDate:'2024-08-01', description:'Key replacement', returnDate:'', amount:500, status:'In Service' },
    { id:'SVC002', product:'HP Laptop - 01', category:'Electronics', serviceDate:'2024-07-15', description:'Battery replacement', returnDate:'2024-07-20', amount:3000, status:'Completed' }
  ],

  // Industrial Visit
  ivClients: [
    { id:'IVC001', name:'ABC Engineering College', phone:'9876543210', email:'abc@gmail.com', location:'Chennai', username:'abc_clg', password:'abc123', status:'Active' },
    { id:'IVC002', name:'XYZ Institute of Technology', phone:'8765432109', email:'xyz@gmail.com', location:'Madurai', username:'xyz_clg', password:'xyz123', status:'Active' },
    { id:'IVC003', name:'PQR Arts & Science College', phone:'7654321098', email:'pqr@gmail.com', location:'Tirunelveli', username:'pqr_clg', password:'pqr123', status:'Inactive' }
  ],

  ivFood: [
    { id:'IVF001', name:'Veg Thali', category:'Veg', description:'Full vegetarian meal with rice, dal, vegetables', price:150, status:'Active' },
    { id:'IVF002', name:'Non-Veg Thali', category:'Non-Veg', description:'Full non-vegetarian meal with chicken curry', price:200, status:'Active' },
    { id:'IVF003', name:'Veg Biryani', category:'Veg', description:'Vegetable biryani with raita', price:120, status:'Active' },
    { id:'IVF004', name:'Chicken Biryani', category:'Non-Veg', description:'Hyderabadi chicken biryani', price:180, status:'Active' }
  ],

  ivPayments: [
    { id:'IVP001', date:'2024-08-01', college:'ABC Engineering College', reason:'IV Registration', amount:5000, method:'GPay', txnId:'IVTXN001', status:'Paid' },
    { id:'IVP002', date:'2024-08-03', college:'XYZ Institute of Technology', reason:'Food Package', amount:3000, method:'Cash', txnId:'', status:'Paid' }
  ],

  ivEnquiries: [
    { id:'IVE001', date:'2024-08-01', name:'LMN College', phone:'9876543210', email:'lmn@gmail.com', ivDate:'2024-08-15', description:'30 students industrial visit', status:'New' },
    { id:'IVE002', date:'2024-08-03', name:'RST Engineering', phone:'8765432109', email:'rst@gmail.com', ivDate:'2024-08-20', description:'45 students industrial visit', status:'Confirmed' }
  ],

  ivBanners: [
    { id:'IVB001', name:'August IV Promotion', image:'banner1.jpg', status:'Active' },
    { id:'IVB002', name:'Tech Visit Special', image:'banner2.jpg', status:'Active' }
  ],

  ivRegistrations: [
    { id:'IVR001', college:'ABC Engineering College', date:'2024-08-01', students:[
      { name:'Student A', phone:'9876543211', email:'a@gmail.com', location:'Chennai' },
      { name:'Student B', phone:'9876543212', email:'b@gmail.com', location:'Chennai' }
    ], status:'Confirmed', food:'Veg Thali' },
    { id:'IVR002', college:'XYZ Institute of Technology', date:'2024-08-03', students:[
      { name:'Student C', phone:'8765432110', email:'c@gmail.com', location:'Madurai' }
    ], status:'Pending', food:'Chicken Biryani' }
  ],

  creditDebit: [
    { date:'2024-08-01', type:'Credit', description:'Project Payment - Jeno', amount:5000, balance:45000 },
    { date:'2024-08-02', type:'Debit', description:'Office Rent', amount:15000, balance:30000 },
    { date:'2024-08-03', type:'Credit', description:'Internship Fee - Student A', amount:3000, balance:33000 },
    { date:'2024-08-05', type:'Debit', description:'Salary Disbursement', amount:45000, balance:-12000 },
    { date:'2024-08-06', type:'Credit', description:'Academy Fee - Demo 001', amount:5000, balance:-7000 },
    { date:'2024-08-07', type:'Credit', description:'Nexemy Revenue', amount:8000, balance:1000 }
  ],

  clientAssignments: [
    { clientId:'C001', employeeId:'E001' },
    { clientId:'C001', employeeId:'E002' },
    { clientId:'C001', employeeId:'E003' },
    { clientId:'C002', employeeId:'E004' },
    { clientId:'C002', employeeId:'E005' },
    { clientId:'C003', employeeId:'E001' }
  ],

  clientMessages: [
    { clientId:'C001', employeeId:'E001', messages:[
      { from:'client', text:'Hi Anushiya, can we get the login module done by Friday?', time:'09:15 AM' },
      { from:'employee', text:'Sure Jeno! Expected to finish by Thursday evening.', time:'09:22 AM' },
      { from:'client', text:'Great, please share the demo link once ready.', time:'09:25 AM' }
    ]},
    { clientId:'C001', employeeId:'E002', messages:[
      { from:'employee', text:'Good morning, shared the database schema for review.', time:'10:05 AM' },
      { from:'client', text:'Received. Looks good, one change in the users table.', time:'10:40 AM' }
    ]},
    { clientId:'C001', employeeId:'E003', messages:[
      { from:'client', text:'Hi Sherlin, do you have the new logo variants?', time:'11:00 AM' },
      { from:'employee', text:'Yes, I will send them over by afternoon.', time:'11:12 AM' }
    ]},
    { clientId:'C002', employeeId:'E004', messages:[
      { from:'employee', text:'Hello ABC Corp team, sharing the marketing plan draft.', time:'12:30 PM' },
      { from:'client', text:'Looks promising, let us finalize the budget section.', time:'01:00 PM' }
    ]},
    { clientId:'C002', employeeId:'E005', messages:[
      { from:'client', text:'Can you schedule a call tomorrow for the portal demo?', time:'03:20 PM' },
      { from:'employee', text:'Sure, I will send the invite shortly.', time:'03:35 PM' }
    ]},
    { clientId:'C003', employeeId:'E001', messages:[
      { from:'client', text:'Anushiya, quick update on the e-commerce project?', time:'04:00 PM' },
      { from:'employee', text:'Product listing module is 80% done.', time:'04:15 PM' }
    ]}
  ],

  roles: ['CEO','CTO','Business Analyst','HR','Project Manager','Developer','Designer','Digital Marketing','Trainer','Trainee','Student'],
  departments: ['Development','Design','Marketing','Training','HR','Management'],
  services: ['ERP','Website(Static)','Website(Dynamic)','Logo Design','Mobile Application','Multimedia','Marketing'],
  technologies: ['PHP','React JS','React Native','Flutter','Python','Node.js','Angular'],
  expenseMethods: ['Cash','Gpay','Phonepe','Cheque','Paytm','Net Banking','Online Payment']
};

// ============ SIDEBAR STRUCTURE ============
const SIDEBAR = [
  { type:'item', id:'dashboard', icon:'bx bx-home-alt', label:'Dashboard' },
  { type:'section', label:'Entity' },
  { type:'sub', icon:'lni lni-laptop-phone', label:'Roriri Software Solution', children:[
    { id:'employees', icon:'bx bx-group', label:'Employee' },
    { id:'projects', icon:'bx bx-briefcase', label:'Project' },
    { id:'clients', icon:'bx bx-user-voice', label:'Client' },
    { id:'employee-clients', icon:'bx bxs-user-detail', label:'Clients' },
    { id:'attendance', icon:'bx bx-calendar-check', label:'Attendance' },
    { id:'payments', icon:'bx bx-wallet', label:'Payment' },
    { id:'daily-report', icon:'bx bx-file', label:'Daily Report' },
    { id:'task-assignment', icon:'bx bx-task', label:'Task Assignment' },
    { id:'complaints', icon:'bx bx-error', label:'Complaint' },
    { id:'id-cards', icon:'bx bx-card', label:'ID Card' },
    { id:'mou', icon:'bx bx-file-blank', label:'MOU' },
    { id:'documents', icon:'bx bx-folder', label:'Documents' },
    { id:'enquiries', icon:'bx bx-message-square-detail', label:'Enquiry' }
  ]},
  { type:'sub', icon:'lni lni-code-alt', label:'NexGen IT Academy', children:[
    { id:'academy-trainees', icon:'bx bx-graduation', label:'Trainee' },
    { id:'academy-subjects', icon:'bx bx-pencil', label:'Subject' },
    { id:'academy-courses', icon:'bx bx-book', label:'Course' },
    { id:'academy-applications', icon:'bx bx-stack', label:'Application' },
    { id:'academy-mini-projects', icon:'bx bx-clipboard', label:'Mini Project' },
    { id:'academy-complaints', icon:'bx bx-error-circle', label:'Complaint' },
    { id:'academy-payments', icon:'bx bx-wallet', label:'Payment Report' },
    { id:'academy-project-tasks', icon:'bx bx-user-check', label:'Project Task' },
    { id:'academy-daily-updates', icon:'bx bx-line-chart', label:'Daily Work Update' }
  ]},
  { type:'sub', icon:'lni lni-library', label:'NexGen IT College', children:[
    { id:'college-students', icon:'bx bx-user', label:'Student' },
    { id:'college-courses', icon:'bx bx-book', label:'Course' },
    { id:'college-enquiries', icon:'bx bx-message', label:'Enquiry' },
    { id:'college-payments', icon:'bx bx-money', label:'Payment' }
  ]},
  { type:'sub', icon:'lni lni-world', label:'Other Entities', children:[
    { id:'nexemy', icon:'lni lni-world', label:'Nexemy' },
    { id:'riya-ias', icon:'lni lni-surf-board', label:'Riya IAS Academy' },
    { id:'riya-neet', icon:'lni lni-target', label:'Riya NEET Academy' },
    { id:'riya-consultancy', icon:'lni lni-star-half', label:'Riya Consultancy' },
    { id:'roriri-foundation', icon:'lni lni-heart', label:'Roriri Foundation' },
    { id:'rithish-farms', icon:'lni lni-home', label:'Rithish Farms' }
  ]},
  { type:'section', label:'Domain' },
  { type:'sub', icon:'bx bx-cog', label:'Domain', children:[
    { id:'plans', icon:'bx bx-spreadsheet', label:'Plans' },
    { id:'referral', icon:'bx bx-group', label:'Referral' },
    { id:'college-training', icon:'bx bx-book', label:'College Training' },
    { id:'sales', icon:'bx bx-cart', label:'Sales' },
    { id:'other-domain', icon:'bx bx-network-chart', label:'Other Domain' }
  ]},
  { type:'section', label:'Official Menu' },
  { type:'sub', icon:'bx bx-category', label:'Official Menu', children:[
    { id:'official-documents', icon:'bx bx-file', label:'Official Document' },
    { id:'official-contacts', icon:'bx bx-phone', label:'Official Contact' },
    { id:'permission', icon:'bx bx-lock', label:'Permission' },
    { id:'policy', icon:'bx bx-file', label:'Policy' },
    { id:'credit-debit', icon:'bx bx-money', label:'Credit And Debit' },
    { id:'data', icon:'bx bx-data', label:'Data' }
  ]},
  { type:'item', id:'asset-dashboard', icon:'bx bx-wallet', label:'Asset' },
  { type:'item', id:'iv-dashboard', icon:'bx bx-building', label:'Industrial Visit' },
  { type:'item', id:'expense-dashboard', icon:'bx bx-money', label:'Expense' },
  { type:'item', id:'database-report', icon:'bx bx-merge', label:'Database Report' },
  { type:'item', id:'social-media', icon:'bx bxl-twitter', label:'Social Media' },
  { type:'item', id:'web-tracking', icon:'bx bx-rocket', label:'Web Tracking' }
];

// ============ NAVIGATION ============
let currentPage = 'dashboard';
let currentUser = null;

function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  let html = '';
  SIDEBAR.forEach(item => {
    if (item.type === 'section') {
      html += `<li class="nav-section">${item.label}</li>`;
    } else if (item.type === 'item') {
      html += `<li><a href="javascript:void(0)" data-page="${item.id}" onclick="navigate('${item.id}')"><i class="${item.icon}"></i><span class="menu-text">${item.label}</span></a></li>`;
    } else if (item.type === 'sub') {
      html += `<li id="nav-${item.label.replace(/\s+/g,'-').toLowerCase()}"><a href="javascript:void(0)" onclick="toggleSubmenu(this.parentElement)"><i class="${item.icon}"></i><span class="menu-text">${item.label}</span><i class="bx bx-chevron-right arrow"></i></a><ul class="sub-menu">`;
      item.children.forEach(child => {
        html += `<li><a href="javascript:void(0)" data-page="${child.id}" onclick="navigate('${child.id}')"><i class="${child.icon}"></i> ${child.label}</a></li>`;
      });
      html += `</ul></li>`;
    }
  });
  nav.innerHTML = html;
}

function navigate(page, params) {
  currentPage = page;
  window._params = params || {};
  document.querySelectorAll('.page-view,.page-content-render').forEach(v => v.remove());
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
  const link = document.querySelector(`.sidebar-nav a[data-page="${page}"]`);
  if (link) {
    link.classList.add('active');
    const parentLi = link.closest('.sub-menu')?.closest('li');
    if (parentLi) parentLi.classList.add('open');
  }
  document.querySelector('.sidebar')?.classList.remove('mobile-open');
  window.scrollTo(0,0);
  const container = document.getElementById('page-content');
  if (!container) return;
  container.innerHTML = '';
  const renderer = RENDERERS[page];
  if (renderer) {
    container.innerHTML = renderer();
  } else {
    container.innerHTML = buildPlaceholderPage(page);
  }
}

// ============ RENDERERS ============
const RENDERERS = {
  'dashboard': renderDashboard,
  'employees': renderEmployees,
  'employee-detail': renderEmployeeDetail,
  'clients': renderClients,
  'client-detail': renderClientDetail,
  'projects': renderProjects,
  'project-detail': renderProjectDetail,
  'attendance': renderAttendance,
  'payments': renderPayments,
  'daily-report': renderDailyReport,
  'task-assignment': renderTaskAssignment,
  'complaints': renderComplaints,
  'id-cards': renderIdCards,
  'mou': renderMou,
  'documents': renderDocuments,
  'enquiries': renderEnquiries,
  'employee-clients': renderEmployeeClients,
  'academy-trainees': renderAcademyTrainees,
  'trainee-detail': renderTraineeDetail,
  'academy-subjects': renderAcademySubjects,
  'academy-courses': renderAcademyCourses,
  'academy-applications': renderAcademyApplications,
  'academy-mini-projects': renderAcademyMiniProjects,
  'academy-complaints': renderAcademyComplaints,
  'academy-payments': renderAcademyPayments,
  'academy-project-tasks': renderAcademyProjectTasks,
  'academy-daily-updates': renderAcademyDailyUpdates,
  'college-students': renderCollegeStudents,
  'college-courses': renderCollegeCourses,
  'college-enquiries': renderCollegeEnquiries,
  'college-payments': renderCollegePayments,
  'expense-dashboard': renderExpenseDashboard,
  'expense-categories': renderExpenseCategories,
  'expense-subcategories': renderExpenseSubCategories,
  'expenses': renderExpenses,
  'expense-report': renderExpenseReport,
  'future-expenses': renderFutureExpenses,
  'asset-dashboard': renderAssetDashboard,
  'asset-categories': renderAssetCategories,
  'asset-rooms': renderAssetRooms,
  'asset-vendors': renderAssetVendors,
  'asset-details': renderAssetDetails,
  'asset-services': renderAssetServices,
  'iv-dashboard': renderIvDashboard,
  'iv-clients': renderIvClients,
  'iv-food': renderIvFood,
  'iv-payments': renderIvPayments,
  'iv-enquiries': renderIvEnquiries,
  'iv-registrations': renderIvRegistrations,
  'iv-banners': renderIvBanners,
  'credit-debit': renderCreditDebit,
  'college-students': renderCollegeStudents,
  'college-courses': renderCollegeCourses,
  'college-enquiries': renderCollegeEnquiries,
  'college-payments': renderCollegePayments,
  'plans': renderExternal,
  'referral': renderExternal,
  'college-training': renderExternal,
  'sales': renderExternal,
  'other-domain': renderExternal,
  'official-documents': renderExternal,
  'official-contacts': renderExternal,
  'permission': renderExternal,
  'policy': renderExternal,
  'data': renderExternal,
  'database-report': renderExternal,
  'social-media': renderExternal,
  'web-tracking': renderExternal,
  'nexemy': renderExternal,
  'riya-ias': renderExternal,
  'riya-neet': renderExternal,
  'riya-consultancy': renderExternal,
  'roriri-foundation': renderExternal,
  'rithish-farms': renderExternal
};

function buildPlaceholderPage(page) {
  return `<div class="page-header"><h4>${page.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase())}</h4><div class="font-13 text-secondary">This module is not available in the prototype.</div></div><div class="empty-state"><i class="bx bx-lock"></i><p>Module coming soon</p></div>`;
}

function renderExternal() {
  return `<div class="page-header"><h4>External Link</h4><div class="font-13 text-secondary">This is an external link/module.</div></div><div class="empty-state"><i class="bx bx-link-external"></i><p>External module - opens in new tab in production</p></div>`;
}

// ============ DASHBOARD ============
function renderDashboard() {
  const totalIncome = MOCK.entities.reduce((s,e) => s + parseInt((e.income||'0').replace(/,/g,'')),0);
  let html = `<div class="page-header"><h4>Dashboard</h4><div class="font-13 text-secondary">Welcome back! Here's your overview.</div></div>`;
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4" id="dashboard-cards">`;
  MOCK.entities.forEach(e => {
    html += `<div class="col"><a href="javascript:void(0)" onclick="navigateEntity(${e.id})" class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0">${e.name}</p><h4>₹ ${e.income}</h4></div><div class="stat-icon bg-light-warning" style="color:${e.color}"><i class="lni ${e.icon}"></i></div></div></a></div>`;
  });
  html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">Total Income For The Month</p><h4>₹ ${totalIncome.toLocaleString('en-IN')}</h4></div><div class="stat-icon bg-light-success text-success"><i class="bx bx-wallet"></i></div></div></div></div>`;
  html += `<div class="col"><a href="javascript:void(0)" onclick="navigate('expense-dashboard')" class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">Total Expenses For The Month</p><h4>₹ 72,000</h4></div><div class="stat-icon bg-light-danger text-danger"><i class="bx bx-money-withdraw"></i></div></div></a></div>`;
  html += `</div>`;

  html += `<div class="row" style="margin-top:1rem;"><div class="col-lg-8"><div class="data-card"><div class="card-header"><h5><i class="bx bx-time-five" style="margin-right:6px;"></i>Recent Activity</h5></div><div class="card-body" style="padding:0.5rem 1.25rem;"><ul class="activity-list">`;
  const activities = [
    { icon:'bx-check', cls:'bg-light-success text-success', title:'New project assigned', desc:'Jeno University project assigned to Anushiya and Hari', time:'2 hours ago' },
    { icon:'bx-user-plus', cls:'bg-light-primary text-primary', title:'New trainee enrolled', desc:'Sherlin JR 005 enrolled in Full Stack Development', time:'5 hours ago' },
    { icon:'bx-money', cls:'bg-light-warning text-warning', title:'Payment received', desc:'₹5,000 received from Jeno for Project #P001', time:'1 day ago' },
    { icon:'bx-error', cls:'bg-light-danger text-danger', title:'Expense recorded', desc:'₹15,000 office rent payment for Roriri Software', time:'2 days ago' },
    { icon:'bx-building', cls:'bg-light-info text-info', title:'Asset assigned', desc:'HP Laptop assigned to Sherlin H', time:'3 days ago' }
  ];
  activities.forEach(a => {
    html += `<li><div class="activity-icon ${a.cls}"><i class="bx ${a.icon}"></i></div><div class="activity-text"><h6>${a.title}</h6><p>${a.desc}</p></div><span class="activity-time">${a.time}</span></li>`;
  });
  html += `</ul></div></div></div>`;
  html += `<div class="col-lg-4"><div class="data-card"><div class="card-header"><h5><i class="bx bx-calendar" style="margin-right:6px;"></i>Quick Stats</h5></div><div class="card-body" style="padding:1rem 1.25rem;">`;
  const stats = [{l:'Employees',v:MOCK.employees.length,w:'60%',c:'var(--primary)'},{l:'Trainees',v:MOCK.trainees.length,w:'45%',c:'var(--success)'},{l:'Projects',v:MOCK.projects.length,w:'30%',c:'var(--warning)'},{l:'Clients',v:MOCK.clients.length,w:'35%',c:'var(--info)'},{l:'Courses',v:MOCK.courses.length,w:'50%',c:'var(--danger)'},{l:'Assets',v:MOCK.assets.length,w:'40%',c:'#8a5cf5'}];
  stats.forEach(s => {
    html += `<div style="margin-bottom:1rem;"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;"><span class="text-secondary">${s.l}</span><strong>${s.v}</strong></div><div class="progress-bar-custom"><div class="fill" style="width:${s.w};background:${s.c}"></div></div></div>`;
  });
  html += `</div></div></div></div>`;
  return html;
}

function navigateEntity(id) {
  switch(id) { case 1: navigate('employees'); break; case 3: navigate('academy-trainees'); break; default: showNotification('Module not available in prototype','info'); break; }
}

// ============ EMPLOYEES ============
function renderEmployees() {
  let html = pageHeader('Employees','Manage Roriri Software employees',`<button class="btn btn-primary" onclick="showEmployeeAddModal()"><i class="bx bx-plus"></i> Add Employee</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Employee List</h5><div class="d-flex gap-2 align-items-center"><select class="form-control" style="width:120px;padding:0.4rem;font-size:12px;" onchange="filterEmployeeStatus(this.value)"><option value="Active">Active</option><option value="Inactive">Inactive</option><option value="All">All</option></select><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'employee-tbody')"></div></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>S.No</th><th>Name</th><th>ID</th><th>Phone</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead><tbody id="employee-tbody">`;
  MOCK.employees.forEach((e,i) => {
    html += `<tr data-status="${e.status}"><td>${i+1}</td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:32px;height:32px;font-size:12px;">${e.firstName.charAt(0)}</div><div><div style="font-weight:600">${e.name}</div><div class="font-11 text-secondary">${e.companyEmail}</div></div></div></td><td>${e.regNo}</td><td>${e.phone}</td><td>${e.companyEmail}</td><td><span class="badge ${e.status==='Active'?'badge-success':'badge-danger'}">${e.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="navigate('employee-detail',{id:'${e.id}'})" title="View"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showEmployeeEditModal('${e.id}')" title="Edit"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteEmployee('${e.id}')" title="Delete"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderEmployeeDetail() {
  const emp = MOCK.employees.find(e => e.id === window._params.id);
  if (!emp) return '<div class="empty-state"><p>Employee not found</p></div>';
  let html = `<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4"><div class="d-flex align-items-center gap-2"><button class="btn btn-outline-primary btn-sm" onclick="navigate('employees')"><i class="bx bx-arrow-back"></i> Back</button><h4 style="margin:0;">${emp.name}</h4></div></div>`;
  html += `<div class="row"><div class="col-lg-4"><div class="profile-card"><div class="profile-cover"></div><div class="profile-avatar">${emp.firstName.charAt(0)}</div><div class="profile-info"><h5>${emp.name}</h5><p>${emp.role} - ${emp.entity}</p></div><div class="profile-details">`;
  const fields = [['Company Email',emp.companyEmail],['Personal Email',emp.personalEmail],['Blood Group',emp.bloodGroup],['Marital Status',emp.maritalStatus],['Mobile',emp.phone],['Address',emp.address],['DOB',emp.dob],['Joining Date',emp.joinDate],['Reg No',emp.regNo],['Gender',emp.gender],['Department',emp.department],['Payroll','₹ '+emp.payroll],['Status',emp.status]];
  fields.forEach(f => { html += `<div class="detail-row"><span class="label">${f[0]}</span><span class="value">${f[1]||'-'}</span></div>`; });
  html += `</div></div></div>`;
  html += `<div class="col-lg-8">`;
  html += `<div class="tab-nav" data-tabgroup="emp-detail">`;
  const tabs = ['Projects','PayRoll','Documents','Coordinator','Clients'];
  tabs.forEach((t,i) => { html += `<button class="${i===0?'active':''}" onclick="switchTab('emp-detail','${t.toLowerCase()}')">${t}</button>`; });
  html += `</div>`;
  html += `<div class="tab-content active" data-tab="emp-detail" data-tabname="projects"><div class="data-card"><div class="card-body"><table class="data-table"><thead><tr><th>S.No</th><th>Project Name</th><th>Services</th><th>Technology</th><th>Status</th><th>Start Date</th></tr></thead><tbody>`;
  MOCK.projects.filter(p => p.developers.includes(emp.name)).forEach((p,i) => {
    html += `<tr><td>${i+1}</td><td>${p.name}</td><td>${p.services}</td><td>${p.tech}</td><td><span class="badge badge-info">${p.status}</span></td><td>${p.startDate}</td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  html += `<div class="tab-content" data-tab="emp-detail" data-tabname="payroll"><div class="data-card"><div class="card-body"><table class="data-table"><thead><tr><th>S.No</th><th>Salary</th><th>Date</th><th>Status</th></tr></thead><tbody><tr><td>1</td><td>₹ ${emp.payroll}</td><td>2024-08-01</td><td><span class="badge badge-success">Paid</span></td></tr></tbody></table></div></div></div>`;
  html += `<div class="tab-content" data-tab="emp-detail" data-tabname="documents"><div class="data-card"><div class="card-body" style="padding:1rem;"><div class="row row-cols-1 row-cols-md-2">`;
  MOCK.documents.filter(d => d.employee === emp.name).forEach(d => {
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center gap-2"><i class="bx bx-file" style="font-size:24px;color:var(--primary)"></i><div><div style="font-weight:600;font-size:13px">${d.type}</div><div class="font-11 text-secondary">${d.fileName} - ${d.uploadDate}</div></div><span class="badge badge-info ms-auto">${d.status}</span></div></div></div>`;
  });
  html += `</div></div></div></div>`;
  html += `<div class="tab-content" data-tab="emp-detail" data-tabname="coordinator"><div class="data-card"><div class="card-body" style="padding:1rem;"><div class="empty-state"><i class="bx bx-briefcase"></i><p>No coordinator assignments yet</p></div></div></div></div>`;
  html += `<div class="tab-content" data-tab="emp-detail" data-tabname="clients">`;
  const empClients = getClientsForEmployee(emp.id);
  html += `<div class="data-card"><div class="card-header"><h5>Assigned Clients</h5><span class="badge badge-info">${empClients.length} client(s)</span></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>S.No</th><th>Client</th><th>Company</th><th>Location</th><th>Email</th><th>Phone</th><th>Conversations</th><th>Actions</th></tr></thead><tbody>`;
  if (empClients.length === 0) {
    html += `<tr><td colspan="8" class="text-center" style="padding:2rem;">No clients assigned yet</td></tr>`;
  }
  empClients.forEach((c, i) => {
    const conv = getConversation(c.id, emp.id);
    const msgCount = conv ? conv.messages.length : 0;
    html += `<tr><td>${i+1}</td><td><strong>${c.name}</strong></td><td>${c.company}</td><td>${c.location}</td><td>${c.email}</td><td>${c.phone}</td><td><span class="badge badge-primary">${msgCount} msg(s)</span></td><td><button class="btn btn-sm btn-outline-success" onclick="viewClientConversations('${c.id}')"><i class="bx bx-message-rounded"></i> Watch</button></td></tr>`;
  });
  html += `</tbody></table></div></div></div></div>`;
  html += `</div></div>`;
  return html;
}

// ============ CLIENTS ============
function renderClients() {
  let html = pageHeader('Clients','Manage all clients',`<button class="btn btn-primary" onclick="showClientAddModal()"><i class="bx bx-plus"></i> Add Client</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Client List</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'client-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Company</th><th>Location</th><th>Email</th><th>Phone</th><th>Status</th><th>Actions</th></tr></thead><tbody id="client-tbody">`;
  MOCK.clients.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td>${c.company}</td><td>${c.location}</td><td>${c.email}</td><td>${c.phone}</td><td><span class="badge ${c.status==='Active'?'badge-success':'badge-danger'}">${c.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="navigate('client-detail',{id:'${c.id}'})"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showClientEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteClient('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderClientDetail() {
  const client = MOCK.clients.find(c => c.id === window._params.id);
  if (!client) return '<div class="empty-state"><p>Client not found</p></div>';
  let html = `<div class="d-flex align-items-center gap-2 mb-4"><button class="btn btn-outline-primary btn-sm" onclick="navigate('clients')"><i class="bx bx-arrow-back"></i> Back</button><h4 style="margin:0;">${client.name}</h4></div>`;
  html += `<div class="row"><div class="col-lg-4"><div class="data-card"><div class="card-header"><h5>Client Details</h5></div><div class="card-body" style="padding:1rem;">`;
  [['Full Name',client.name],['Company',client.company],['Email',client.email],['Phone',client.phone],['Location',client.location],['Status',client.status]].forEach(f => {
    html += `<div class="detail-row"><span class="label">${f[0]}</span><span class="value">${f[1]}</span></div>`;
  });
  html += `</div></div></div>`;
  html += `<div class="col-lg-8"><div class="data-card"><div class="card-header"><h5>Projects</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>S.No</th><th>Project Name</th><th>Total Amount</th><th>Start Date</th><th>Status</th><th>Payment Status</th></tr></thead><tbody>`;
  MOCK.projects.filter(p => p.client === client.name).forEach((p,i) => {
    html += `<tr><td>${i+1}</td><td>${p.name}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.startDate}</td><td><span class="badge badge-info">${p.status}</span></td><td><span class="badge ${p.payStatus==='Paid'?'badge-success':p.payStatus==='Partially'?'badge-warning':'badge-danger'}">${p.payStatus}</span></td></tr>`;
  });
  html += `</tbody></table></div></div></div></div></div>`;
  return html;
}

// ============ PROJECTS ============
function renderProjects() {
  let html = pageHeader('Projects','Manage all projects',`<button class="btn btn-primary" onclick="showProjectAddModal()"><i class="bx bx-plus"></i> Add Project</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Project List</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'project-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Client</th><th>Services</th><th>Technology</th><th>Amount</th><th>Status</th><th>Pay Status</th><th>Actions</th></tr></thead><tbody id="project-tbody">`;
  MOCK.projects.forEach(p => {
    const sBadge = p.status==='New'?'badge-info':p.status==='In Progress'?'badge-warning':'badge-success';
    const pBadge = p.payStatus==='Paid'?'badge-success':p.payStatus==='Partially'?'badge-warning':'badge-danger';
    html += `<tr><td><strong>${p.id}</strong></td><td>${p.name}</td><td>${p.client}</td><td>${p.services}</td><td>${p.tech}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td><span class="badge ${sBadge}">${p.status}</span></td><td><span class="badge ${pBadge}">${p.payStatus}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="navigate('project-detail',{id:'${p.id}'})"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showProjectEditModal('${p.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteProject('${p.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderProjectDetail() {
  const proj = MOCK.projects.find(p => p.id === window._params.id);
  if (!proj) return '<div class="empty-state"><p>Project not found</p></div>';
  let html = `<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4"><div class="d-flex align-items-center gap-2"><button class="btn btn-outline-primary btn-sm" onclick="navigate('projects')"><i class="bx bx-arrow-back"></i> Back</button><h4 style="margin:0;">${proj.name}</h4></div><button class="btn btn-primary btn-sm" onclick="showPaymentAddModal('${proj.id}')"><i class="bx bx-plus"></i> Add Payment</button></div>`;
  html += `<div class="row"><div class="col-lg-6"><div class="data-card"><div class="card-header"><h5>Project Details</h5></div><div class="card-body" style="padding:1rem;">`;
  [['Project Name',proj.name],['Client',proj.client],['Email',proj.clientEmail],['Address',proj.address],['Services',proj.services],['Technology',proj.tech],['Description',proj.description],['Start Date',proj.startDate],['Duration',proj.duration],['Total Amount','₹ '+proj.amount.toLocaleString('en-IN')],['Balance','₹ '+proj.balance.toLocaleString('en-IN')],['Status',proj.status],['Payment Status',proj.payStatus],['Developers',proj.developers.join(', ')]].forEach(f => {
    html += `<div class="detail-row"><span class="label">${f[0]}</span><span class="value">${f[1]||'-'}</span></div>`;
  });
  html += `</div></div></div>`;
  html += `<div class="col-lg-6"><div class="data-card"><div class="card-header"><h5>Payment History</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>Date</th><th>Amount</th><th>Mode</th><th>Received By</th></tr></thead><tbody>`;
  if (proj.payments.length === 0) {
    html += `<tr><td colspan="4" class="text-center" style="padding:2rem;">No payments yet</td></tr>`;
  } else {
    proj.payments.forEach(p => {
      html += `<tr><td>${p.date}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.mode}</td><td>${p.receivedBy}</td></tr>`;
    });
  }
  html += `</tbody></table></div></div></div></div></div>`;
  return html;
}

// ============ ATTENDANCE ============
function renderAttendance() {
  let html = pageHeader('Attendance','View attendance records');
  html += `<div class="data-card"><div class="card-header"><h5>Attendance Records</h5><div class="d-flex gap-2 align-items-center"><input type="date" class="form-control" style="width:160px;padding:0.4rem;font-size:12px;"><button class="btn btn-sm btn-primary"><i class="bx bx-filter"></i> Filter</button></div></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>Date</th><th>Check In</th><th>Check Out</th><th>Hours</th><th>Status</th></tr></thead><tbody>`;
  MOCK.attendance.forEach(a => {
    const badge = a.status==='Present'?'badge-success':a.status==='Absent'?'badge-danger':'badge-secondary';
    html += `<tr><td>${a.date}</td><td>${a.checkIn}</td><td>${a.checkOut}</td><td>${a.hours}</td><td><span class="badge ${badge}">${a.status}</span></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ PAYMENTS ============
function renderPayments() {
  let html = pageHeader('Payments','Project payments and receipts',`<button class="btn btn-primary" onclick="showPaymentGlobalAddModal()"><i class="bx bx-plus"></i> Add Payment</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Payment Records</h5><button class="btn btn-sm btn-outline-primary"><i class="bx bx-download"></i> Export</button></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>From</th><th>Amount</th><th>Method</th><th>Txn ID</th><th>Status</th></tr></thead><tbody>`;
  MOCK.payments.forEach(p => {
    html += `<tr><td><strong>${p.id}</strong></td><td>${p.date}</td><td>${p.from}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.mode}</td><td>${p.txnId}</td><td><span class="badge badge-success">${p.status}</span></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ DAILY REPORT ============
function renderDailyReport() {
  let html = pageHeader('Daily Report','Track daily work reports',`<button class="btn btn-primary" onclick="showDailyReportAddModal()"><i class="bx bx-plus"></i> Add Task</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Daily Reports</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'dr-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>Employee</th><th>Category</th><th>Task</th><th>Hours</th><th>Status</th><th>Actions</th></tr></thead><tbody id="dr-tbody">`;
  MOCK.dailyReports.forEach(d => {
    html += `<tr><td><strong>${d.id}</strong></td><td>${d.date}</td><td>${d.employee}</td><td>${d.category}</td><td>${d.task}</td><td>${d.hours}h</td><td><span class="badge ${d.status==='Completed'?'badge-success':'badge-warning'}">${d.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="viewDailyReport('${d.id}')"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showDailyReportEditModal('${d.id}')"><i class="bx bx-edit"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ TASK ASSIGNMENT ============
function renderTaskAssignment() {
  let html = pageHeader('Task Assignment','Assign tasks to employees',`<button class="btn btn-primary" onclick="showTaskAssignAddModal()"><i class="bx bx-plus"></i> Assign Task</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Task Assignments</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Project</th><th>Employee</th><th>Task</th><th>Start Date</th><th>Due Date</th><th>Priority</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.taskAssignments.forEach(t => {
    const priBadge = t.priority==='High'?'badge-danger':t.priority==='Medium'?'badge-warning':'badge-info';
    const stBadge = t.status==='Completed'?'badge-success':t.status==='In Progress'?'badge-warning':'badge-info';
    html += `<tr><td><strong>${t.id}</strong></td><td>${t.project}</td><td>${t.employee}</td><td>${t.task}</td><td>${t.startDate}</td><td>${t.dueDate}</td><td><span class="badge ${priBadge}">${t.priority}</span></td><td><span class="badge ${stBadge}">${t.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showTaskAssignEditModal('${t.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteTaskAssignment('${t.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ COMPLAINTS ============
function renderComplaints() {
  let html = pageHeader('Complaints','Manage complaints',`<button class="btn btn-primary" onclick="showComplaintAddModal()"><i class="bx bx-plus"></i> Add Complaint</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Complaint List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>From</th><th>Type</th><th>Subject</th><th>Priority</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.complaints.forEach(c => {
    const stBadge = c.status==='Open'?'badge-danger':c.status==='In Progress'?'badge-warning':'badge-success';
    const priBadge = c.priority==='High'?'badge-danger':c.priority==='Medium'?'badge-warning':'badge-info';
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.date}</td><td>${c.from}</td><td>${c.type}</td><td>${c.subject}</td><td><span class="badge ${priBadge}">${c.priority}</span></td><td><span class="badge ${stBadge}">${c.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showComplaintEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteComplaint('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ID CARDS ============
function renderIdCards() {
  let html = pageHeader('ID Cards','Manage employee ID cards',`<button class="btn btn-primary" onclick="showIdCardAddModal()"><i class="bx bx-plus"></i> Generate ID Card</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>ID Card List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Employee</th><th>Reg No</th><th>Entity</th><th>Role</th><th>Blood Group</th><th>Join Date</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.idCards.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.employee}</td><td>${c.regNo}</td><td>${c.entity}</td><td>${c.role}</td><td>${c.bloodGroup}</td><td>${c.joinDate}</td><td><span class="badge badge-success">${c.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="showNotification('ID Card preview','info')"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-primary" onclick="showNotification('ID Card print','info')"><i class="bx bx-printer"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ MOU ============
function renderMou() {
  let html = pageHeader('MOU','Memorandum of Understanding',`<button class="btn btn-primary" onclick="showMouAddModal()"><i class="bx bx-plus"></i> Add MOU</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>MOU List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Client</th><th>Project</th><th>Start Date</th><th>End Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.mous.forEach(m => {
    html += `<tr><td><strong>${m.id}</strong></td><td>${m.client}</td><td>${m.projectName}</td><td>${m.startDate}</td><td>${m.endDate}</td><td>₹ ${m.amount.toLocaleString('en-IN')}</td><td><span class="badge badge-success">${m.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showMouEditModal('${m.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteMou('${m.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ DOCUMENTS ============
function renderDocuments() {
  let html = pageHeader('Documents','Manage employee documents',`<button class="btn btn-primary" onclick="showDocumentAddModal()"><i class="bx bx-plus"></i> Add Document</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Document List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Employee</th><th>Type</th><th>File Name</th><th>Upload Date</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.documents.forEach(d => {
    html += `<tr><td><strong>${d.id}</strong></td><td>${d.employee}</td><td>${d.type}</td><td>${d.fileName}</td><td>${d.uploadDate}</td><td><span class="badge ${d.status==='Verified'?'badge-success':'badge-warning'}">${d.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="showNotification('Document preview','info')"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteDocument('${d.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ENQUIRIES ============
function renderEnquiries() {
  let html = pageHeader('Enquiries','Manage all enquiries',`<button class="btn btn-primary" onclick="showEnquiryAddModal()"><i class="bx bx-plus"></i> Add Enquiry</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Enquiry List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>Name</th><th>Phone</th><th>Email</th><th>Type</th><th>Status</th><th>Assigned To</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.enquiries.forEach(e => {
    const stBadge = e.status==='New'?'badge-info':e.status==='Contacted'?'badge-warning':'badge-success';
    html += `<tr><td><strong>${e.id}</strong></td><td>${e.date}</td><td>${e.name}</td><td>${e.phone}</td><td>${e.email}</td><td>${e.type}</td><td><span class="badge ${stBadge}">${e.status}</span></td><td>${e.assignedTo}</td><td><button class="btn btn-sm btn-outline-warning" onclick="showEnquiryEditModal('${e.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteEnquiry('${e.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ACADEMY TRAINEES ============
function renderAcademyTrainees() {
  let html = pageHeader('Trainees - NexGen IT Academy','Manage academy trainees',`<button class="btn btn-primary" onclick="showTraineeAddModal()"><i class="bx bx-plus"></i> Add Trainee</button>`);
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">`;
  [{l:'Total Trainees',v:MOCK.trainees.length,ic:'lni-graduation',cls:'bg-light-success text-success'},{l:'Total Trainers',v:2,ic:'lni-user',cls:'bg-light-info text-info'},{l:'Total Courses',v:MOCK.courses.length,ic:'lni-book',cls:'bg-light-warning text-warning'},{l:'Month Income',v:'₹ 1,25,000',ic:'bx-wallet',cls:'bg-light-primary text-primary'}].forEach(s => {
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${s.l}</p><h4>${s.v}</h4></div><div class="stat-icon ${s.cls} ms-auto"><i class="lni ${s.ic}"></i></div></div></div></div>`;
  });
  html += `</div>`;
  html += `<div class="data-card"><div class="card-header"><h5>Trainee List</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'trainee-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Course</th><th>Duration</th><th>Fee</th><th>Phone</th><th>Status</th><th>Actions</th></tr></thead><tbody id="trainee-tbody">`;
  MOCK.trainees.forEach(t => {
    html += `<tr><td><strong>${t.id}</strong></td><td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:32px;height:32px;font-size:12px;background:var(--success);">${t.name.charAt(0)}</div><div><div style="font-weight:600">${t.name}</div><div class="font-11 text-secondary">${t.email}</div></div></div></td><td>${t.course}</td><td>${t.duration}</td><td>₹ ${t.fee.toLocaleString('en-IN')}</td><td>${t.phone}</td><td><span class="badge badge-success">${t.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="navigate('trainee-detail',{id:'${t.id}'})"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showTraineeEditModal('${t.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteTrainee('${t.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderTraineeDetail() {
  const t = MOCK.trainees.find(x => x.id === window._params.id);
  if (!t) return '<div class="empty-state"><p>Trainee not found</p></div>';
  let html = `<div class="d-flex align-items-center gap-2 mb-4"><button class="btn btn-outline-primary btn-sm" onclick="navigate('academy-trainees')"><i class="bx bx-arrow-back"></i> Back</button><h4 style="margin:0;">${t.name}</h4></div>`;
  html += `<div class="row"><div class="col-lg-4"><div class="profile-card"><div class="profile-cover" style="background:linear-gradient(135deg,#1cc88a,#0d9e6e)"></div><div class="profile-avatar" style="background:var(--success)">${t.name.charAt(0)}</div><div class="profile-info"><h5>${t.name}</h5><p>${t.course}</p></div><div class="profile-details">`;
  [['Course',t.course],['Duration',t.duration],['Fee','₹ '+t.fee.toLocaleString('en-IN')],['Phone',t.phone],['Email',t.email],['Join Date',t.joinDate],['DOB',t.dob],['Gender',t.gender],['Address',t.address],['Status',t.status]].forEach(f => {
    html += `<div class="detail-row"><span class="label">${f[0]}</span><span class="value">${f[1]||'-'}</span></div>`;
  });
  html += `</div></div></div>`;
  html += `<div class="col-lg-8"><div class="data-card"><div class="card-header"><h5>Payment History</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>Date</th><th>Amount</th><th>Method</th><th>Status</th></tr></thead><tbody>`;
  MOCK.academyPayments.filter(p => p.trainee === t.name).forEach(p => {
    html += `<tr><td>${p.date}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.method}</td><td><span class="badge badge-success">${p.status}</span></td></tr>`;
  });
  html += `</tbody></table></div></div></div></div></div>`;
  return html;
}

// ============ ACADEMY SUBJECTS ============
function renderAcademySubjects() {
  let html = pageHeader('Subjects','Manage academy subjects',`<button class="btn btn-primary" onclick="showSubjectAddModal()"><i class="bx bx-plus"></i> Add Subject</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Subject List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Subject Name</th><th>Course</th><th>Topics</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.subjects.forEach(s => {
    html += `<tr><td><strong>${s.id}</strong></td><td>${s.name}</td><td>${s.course}</td><td>${s.topics}</td><td><span class="badge badge-success">${s.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showSubjectEditModal('${s.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteSubject('${s.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ACADEMY COURSES ============
function renderAcademyCourses() {
  let html = pageHeader('Courses','Manage academy courses',`<button class="btn btn-primary" onclick="showAcademyCourseAddModal()"><i class="bx bx-plus"></i> Add Course</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Course List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Course Name</th><th>Duration</th><th>Fee</th><th>Subjects</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.courses.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td>${c.duration}</td><td>₹ ${c.fee.toLocaleString('en-IN')}</td><td>${c.subjects}</td><td><span class="badge badge-success">${c.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showAcademyCourseEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteAcademyCourse('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ACADEMY APPLICATIONS ============
function renderAcademyApplications() {
  let html = pageHeader('Applications','Manage course applications');
  html += `<div class="empty-state"><i class="bx bx-stack"></i><p>No applications yet</p></div>`;
  return html;
}

// ============ ACADEMY MINI PROJECTS ============
function renderAcademyMiniProjects() {
  let html = pageHeader('Mini Projects','Manage trainee mini projects',`<button class="btn btn-primary" onclick="showMiniProjectAddModal()"><i class="bx bx-plus"></i> Add Mini Project</button>`);
  html += `<div class="data-card"><div class="card-header"><h5>Mini Project List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Course</th><th>Trainee</th><th>Start Date</th><th>End Date</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.miniProjects.forEach(p => {
    const stBadge = p.status==='Completed'?'badge-success':'badge-warning';
    html += `<tr><td><strong>${p.id}</strong></td><td>${p.name}</td><td>${p.course}</td><td>${p.trainee}</td><td>${p.startDate}</td><td>${p.endDate||'-'}</td><td><span class="badge ${stBadge}">${p.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showMiniProjectEditModal('${p.id}')"><i class="bx bx-edit"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ACADEMY COMPLAINTS ============
function renderAcademyComplaints() {
  return renderComplaints(); // Same complaint system
}

// ============ ACADEMY PAYMENTS ============
function renderAcademyPayments() {
  let html = pageHeader('Payment Report','Academy payment records');
  html += `<div class="data-card"><div class="card-header"><h5>Payment Records</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>Trainee</th><th>Amount</th><th>Method</th><th>Received By</th><th>Status</th></tr></thead><tbody>`;
  MOCK.academyPayments.forEach(p => {
    html += `<tr><td><strong>${p.id}</strong></td><td>${p.date}</td><td>${p.trainee}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.method}</td><td>${p.receivedBy}</td><td><span class="badge badge-success">${p.status}</span></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============ ACADEMY PROJECT TASKS ============
function renderAcademyProjectTasks() {
  return renderTaskAssignment(); // Same task system
}

// ============ ACADEMY DAILY UPDATES ============
function renderAcademyDailyUpdates() {
  return renderDailyReport(); // Same report system
}

// ============ COLLEGE ============
function renderCollegeStudents() {
  let html = pageHeader('Students - NexGen IT College','Manage college students',`<button class="btn btn-primary" onclick="showNotification('Add Student','info')"><i class="bx bx-plus"></i> Add Student</button>`);
  html += `<div class="empty-state"><i class="bx bx-graduation"></i><p>College student module - coming soon</p></div>`;
  return html;
}
function renderCollegeCourses() {
  let html = pageHeader('Courses - NexGen IT College','Manage college courses');
  html += `<div class="empty-state"><i class="bx bx-book"></i><p>College course module - coming soon</p></div>`;
  return html;
}
function renderCollegeEnquiries() {
  let html = pageHeader('Enquiries - NexGen IT College','Manage college enquiries');
  html += `<div class="empty-state"><i class="bx bx-message"></i><p>College enquiry module - coming soon</p></div>`;
  return html;
}
function renderCollegePayments() {
  let html = pageHeader('Payments - NexGen IT College','Manage college payments');
  html += `<div class="empty-state"><i class="bx bx-money"></i><p>College payment module - coming soon</p></div>`;
  return html;
}

// ============ EXPENSE ============
function renderExpenseDashboard() {
  let html = pageHeader('Expense Dashboard','Overview of all expenses');
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">`;
  [{l:'Today Expenses',v:'₹ 3,500',ic:'bx-dollar-circle',cls:'bg-light-success text-success',pg:'expenses'},
   {l:'Total Expenses this Month',v:'₹ 72,000',ic:'bx-calendar',cls:'bg-light-primary text-primary',pg:'expenses'},
   {l:'Roriri Software - This Month',v:'₹ 16,500',ic:'bx-building-house',cls:'bg-light-dark text-dark',pg:'expense-report'},
   {l:'IT Academy - This Month',v:'₹ 48,500',ic:'bx-school',cls:'bg-light-warning text-warning',pg:'expense-report'},
   {l:'IAS Academy - This Month',v:'₹ 2,000',ic:'bx-book',cls:'bg-light-info text-info',pg:'expense-report'},
   {l:'Roriri IT Park - This Month',v:'₹ 5,000',ic:'bx-buildings',cls:'bg-light-danger text-danger',pg:'expense-report'}
  ].forEach(s => {
    html += `<div class="col"><a href="javascript:void(0)" onclick="navigate('${s.pg}')" class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${s.l}</p><h4>${s.v}</h4></div><div class="stat-icon ${s.cls} ms-auto"><i class="bx ${s.ic}"></i></div></div></a></div>`;
  });
  html += `</div>`;
  html += `<div class="sub-module-nav mt-3"><a href="javascript:void(0)" onclick="navigate('expense-categories')" class="active">Category</a><a href="javascript:void(0)" onclick="navigate('expense-subcategories')">Sub Category</a><a href="javascript:void(0)" onclick="navigate('expenses')">Expenses</a><a href="javascript:void(0)" onclick="navigate('expense-report')">Expense Report</a><a href="javascript:void(0)" onclick="navigate('future-expenses')">Future Expense</a></div>`;
  return html;
}

function renderExpenseCategories() {
  let html = pageHeader('Expense Categories','Manage expense categories',`<button class="btn btn-primary" onclick="showExpenseCategoryAddModal()"><i class="bx bx-plus"></i> Add Category</button>`);
  html += expenseSubNav('categories');
  html += `<div class="data-card"><div class="card-header"><h5>Category List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Category Name</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.expenseCategories.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td><span class="badge badge-success">${c.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showExpenseCategoryEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteExpenseCategory('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderExpenseSubCategories() {
  let html = pageHeader('Expense Sub-Categories','Manage expense sub-categories',`<button class="btn btn-primary" onclick="showExpenseSubCategoryAddModal()"><i class="bx bx-plus"></i> Add Sub Category</button>`);
  html += expenseSubNav('subcategories');
  html += `<div class="data-card"><div class="card-header"><h5>Sub-Category List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Sub-Category Name</th><th>Category</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.expenseSubCategories.forEach(s => {
    html += `<tr><td><strong>${s.id}</strong></td><td>${s.name}</td><td>${s.category}</td><td><span class="badge badge-success">${s.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showExpenseSubCategoryEditModal('${s.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteExpenseSubCategory('${s.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderExpenses() {
  let html = pageHeader('Expenses','All expense records',`<button class="btn btn-primary" onclick="showExpenseAddModal()"><i class="bx bx-plus"></i> Add Expense</button>`);
  html += expenseSubNav('expenses');
  html += `<div class="data-card"><div class="card-header"><h5>Expense Records</h5><div class="d-flex gap-2"><select class="form-control" style="width:180px;padding:0.4rem;font-size:12px;"><option>All Categories</option>${MOCK.expenseCategories.map(c=>'<option>'+c.name+'</option>').join('')}</select><button class="btn btn-sm btn-outline-primary"><i class="bx bx-download"></i> Export</button></div></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>Category</th><th>Sub Category</th><th>Amount</th><th>Paid To</th><th>Method</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.expenses.forEach(e => {
    html += `<tr><td><strong>${e.id}</strong></td><td>${e.date}</td><td>${e.category}</td><td>${e.subCategory}</td><td>₹ ${e.amount.toLocaleString('en-IN')}</td><td>${e.paidTo}</td><td>${e.method}</td><td><span class="badge badge-success">${e.status}</span></td><td><button class="btn btn-sm btn-outline-success" onclick="viewExpense('${e.id}')"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showExpenseEditModal('${e.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteExpense('${e.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderExpenseReport() {
  let html = pageHeader('Expense Report','Monthly expense breakdown');
  html += expenseSubNav('report');
  const total = MOCK.expenses.reduce((s,e) => s+e.amount,0);
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">`;
  MOCK.expenseCategories.forEach(c => {
    const catTotal = MOCK.expenses.filter(e=>e.category===c.name).reduce((s,e)=>s+e.amount,0);
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${c.name}</p><h4>₹ ${catTotal.toLocaleString('en-IN')}</h4></div></div></div></div>`;
  });
  html += `</div>`;
  html += `<div class="data-card"><div class="card-header"><h5>Expense Details</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>Date</th><th>Category</th><th>Sub Category</th><th>Amount</th><th>Paid To</th><th>Method</th></tr></thead><tbody>`;
  MOCK.expenses.forEach(e => {
    html += `<tr><td>${e.date}</td><td>${e.category}</td><td>${e.subCategory}</td><td>₹ ${e.amount.toLocaleString('en-IN')}</td><td>${e.paidTo}</td><td>${e.method}</td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderFutureExpenses() {
  let html = pageHeader('Future Expenses','Plan upcoming expenses',`<button class="btn btn-primary" onclick="showFutureExpenseAddModal()"><i class="bx bx-plus"></i> Add Future Expense</button>`);
  html += expenseSubNav('future');
  html += `<div class="data-card"><div class="card-header"><h5>Future Expense List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Reason</th><th>Amount</th><th>Priority</th><th>Description</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.futureExpenses.forEach(f => {
    const priBadge = f.priority==='High'?'badge-danger':f.priority==='Medium'?'badge-warning':'badge-info';
    html += `<tr><td><strong>${f.id}</strong></td><td>${f.reason}</td><td>₹ ${f.amount.toLocaleString('en-IN')}</td><td><span class="badge ${priBadge}">${f.priority}</span></td><td>${f.description}</td><td><span class="badge badge-warning">${f.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showFutureExpenseEditModal('${f.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteFutureExpense('${f.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function expenseSubNav(active) {
  const items = [{id:'categories',label:'Category'},{id:'subcategories',label:'Sub Category'},{id:'expenses',label:'Expenses'},{id:'report',label:'Expense Report'},{id:'future',label:'Future Expense'}];
  let h = `<div class="sub-module-nav">`;
  items.forEach(i => {
    const pg = i.id==='categories'?'expense-categories':i.id==='subcategories'?'expense-subcategories':i.id==='report'?'expense-report':i.id==='future'?'future-expenses':i.id;
    h += `<a href="javascript:void(0)" onclick="navigate('${pg}')" class="${active===i.id?'active':''}">${i.label}</a>`;
  });
  return h + `</div>`;
}

// ============ ASSET ============
function renderAssetDashboard() {
  let html = pageHeader('Asset Dashboard','Overview of company assets');
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">`;
  [{l:'Not Received Products',v:2,ic:'bx-truck',cls:'bg-light-success text-success'},{l:'Total Repaired Products',v:1,ic:'bx-wrench',cls:'bg-light-info text-info'},{l:'Not Assigned Products',v:1,ic:'bx-package',cls:'bg-light-danger text-danger'}].forEach(s => {
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${s.l}</p><h4>${s.v}</h4></div><div class="stat-icon ${s.cls} ms-auto"><i class="bx ${s.ic}"></i></div></div></div></div>`;
  });
  html += `</div>`;
  html += `<div class="sub-module-nav mt-3"><a href="javascript:void(0)" onclick="navigate('asset-categories')" class="active">Category</a><a href="javascript:void(0)" onclick="navigate('asset-rooms')">Room</a><a href="javascript:void(0)" onclick="navigate('asset-vendors')">Vendor</a><a href="javascript:void(0)" onclick="navigate('asset-details')">Asset Details</a><a href="javascript:void(0)" onclick="navigate('asset-services')">Service</a></div>`;
  return html;
}

function renderAssetCategories() {
  let html = pageHeader('Asset Categories','Manage asset categories & sub-categories',`<button class="btn btn-primary" onclick="showAssetCategoryAddModal()"><i class="bx bx-plus"></i> Add Category</button>`);
  html += assetSubNav('categories');
  html += `<div class="data-card"><div class="card-header"><h5>Category List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Category Name</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.assetCategories.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td><span class="badge badge-success">${c.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showAssetCategoryEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteAssetCategory('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  html += `<div class="data-card mt-3"><div class="card-header"><h5>Sub-Category List</h5><button class="btn btn-sm btn-primary" onclick="showAssetSubCategoryAddModal()"><i class="bx bx-plus"></i> Add Sub-Category</button></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Sub-Category Name</th><th>Category</th><th>Quantity</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.assetSubCategories.forEach(s => {
    html += `<tr><td><strong>${s.id}</strong></td><td>${s.name}</td><td>${s.category}</td><td>${s.quantity}</td><td><span class="badge badge-success">${s.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showAssetSubCategoryEditModal('${s.id}')"><i class="bx bx-edit"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderAssetRooms() {
  let html = pageHeader('Rooms','Manage rooms',`<button class="btn btn-primary" onclick="showRoomAddModal()"><i class="bx bx-plus"></i> Add Room</button>`);
  html += assetSubNav('rooms');
  html += `<div class="data-card"><div class="card-header"><h5>Room List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Room Name</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.rooms.forEach(r => {
    html += `<tr><td><strong>${r.id}</strong></td><td>${r.name}</td><td><span class="badge badge-success">${r.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showRoomEditModal('${r.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteRoom('${r.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderAssetVendors() {
  let html = pageHeader('Vendors','Manage asset vendors',`<button class="btn btn-primary" onclick="showVendorAddModal()"><i class="bx bx-plus"></i> Add Vendor</button>`);
  html += assetSubNav('vendors');
  html += `<div class="data-card"><div class="card-header"><h5>Vendor List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Vendor Name</th><th>Company</th><th>Phone</th><th>Email</th><th>Location</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.vendors.forEach(v => {
    html += `<tr><td><strong>${v.id}</strong></td><td>${v.name}</td><td>${v.company}</td><td>${v.phone}</td><td>${v.email}</td><td>${v.location}</td><td><button class="btn btn-sm btn-outline-warning" onclick="showVendorEditModal('${v.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteVendor('${v.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderAssetDetails() {
  let html = pageHeader('Asset Details','Manage all company assets',`<button class="btn btn-primary" onclick="showAssetAddModal()"><i class="bx bx-plus"></i> Add Asset</button>`);
  html += assetSubNav('details');
  html += `<div class="data-card"><div class="card-header"><h5>Asset List</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'asset-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Asset No</th><th>Vendor</th><th>Status</th><th>Assigned To</th><th>Purchase Date</th><th>Condition</th><th>Actions</th></tr></thead><tbody id="asset-tbody">`;
  MOCK.assets.forEach(a => {
    const badge = a.status==='Assigned'?'badge-success':a.status==='Repair'?'badge-warning':'badge-secondary';
    html += `<tr><td><strong>${a.id}</strong></td><td>${a.name}</td><td>${a.category}</td><td>${a.assetNo}</td><td>${a.vendor}</td><td><span class="badge ${badge}">${a.status}</span></td><td>${a.assignedTo}</td><td>${a.purchaseDate}</td><td>${a.condition}</td><td><button class="btn btn-sm btn-outline-success" onclick="viewAsset('${a.id}')"><i class="bx bx-show"></i></button> <button class="btn btn-sm btn-outline-warning" onclick="showAssetEditModal('${a.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-info" onclick="showAssetAssignModal('${a.id}')"><i class="bx bx-user"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderAssetServices() {
  let html = pageHeader('Service Details','Manage asset services',`<button class="btn btn-primary" onclick="showAssetServiceAddModal()"><i class="bx bx-plus"></i> Add Service</button>`);
  html += assetSubNav('services');
  html += `<div class="data-card"><div class="card-header"><h5>Service List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Product</th><th>Category</th><th>Service Date</th><th>Description</th><th>Return Date</th><th>Amount</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.assetServices.forEach(s => {
    const badge = s.status==='Completed'?'badge-success':'badge-warning';
    html += `<tr><td><strong>${s.id}</strong></td><td>${s.product}</td><td>${s.category}</td><td>${s.serviceDate}</td><td>${s.description}</td><td>${s.returnDate||'-'}</td><td>₹ ${s.amount.toLocaleString('en-IN')}</td><td><span class="badge ${badge}">${s.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showAssetServiceEditModal('${s.id}')"><i class="bx bx-edit"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function assetSubNav(active) {
  const items = [{id:'categories',label:'Category',pg:'asset-categories'},{id:'rooms',label:'Room',pg:'asset-rooms'},{id:'vendors',label:'Vendor',pg:'asset-vendors'},{id:'details',label:'Asset Details',pg:'asset-details'},{id:'services',label:'Service',pg:'asset-services'}];
  let h = `<div class="sub-module-nav">`;
  items.forEach(i => { h += `<a href="javascript:void(0)" onclick="navigate('${i.pg}')" class="${active===i.id?'active':''}">${i.label}</a>`; });
  return h + `</div>`;
}

// ============ INDUSTRIAL VISIT ============
function renderIvDashboard() {
  let html = pageHeader('Industrial Visit Dashboard','Overview of industrial visits');
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 mb-3">`;
  [{l:'Total Registrations',v:MOCK.ivRegistrations.length,ic:'bx-group',cls:'bg-light-primary text-primary'},{l:'Total Enquiries',v:MOCK.ivEnquiries.length,ic:'bx-message',cls:'bg-light-info text-info'},{l:'Total Revenue',v:'₹ 8,000',ic:'bx-wallet',cls:'bg-light-success text-success'}].forEach(s => {
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${s.l}</p><h4>${s.v}</h4></div><div class="stat-icon ${s.cls} ms-auto"><i class="bx ${s.ic}"></i></div></div></div></div>`;
  });
  html += `</div>`;
  html += `<div class="sub-module-nav"><a href="javascript:void(0)" onclick="navigate('iv-clients')" class="active">Client</a><a href="javascript:void(0)" onclick="navigate('iv-food')">Food Packages</a><a href="javascript:void(0)" onclick="navigate('iv-payments')">Payment</a><a href="javascript:void(0)" onclick="navigate('iv-enquiries')">Enquiry</a><a href="javascript:void(0)" onclick="navigate('iv-registrations')">Registration</a><a href="javascript:void(0)" onclick="navigate('iv-banners')">Banner</a></div>`;
  return html;
}

function renderIvClients() {
  let html = pageHeader('IV Clients','Manage industrial visit clients',`<button class="btn btn-primary" onclick="showIvClientAddModal()"><i class="bx bx-plus"></i> Add Client</button>`);
  html += ivSubNav('clients');
  html += `<div class="data-card"><div class="card-header"><h5>Client List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>College Name</th><th>Phone</th><th>Email</th><th>Location</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivClients.forEach(c => {
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td>${c.phone}</td><td>${c.email}</td><td>${c.location}</td><td><span class="badge ${c.status==='Active'?'badge-success':'badge-danger'}">${c.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvClientEditModal('${c.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteIvClient('${c.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderIvFood() {
  let html = pageHeader('Food Packages','Manage IV food packages',`<button class="btn btn-primary" onclick="showIvFoodAddModal()"><i class="bx bx-plus"></i> Add Food Package</button>`);
  html += ivSubNav('food');
  html += `<div class="data-card"><div class="card-header"><h5>Food Package List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Description</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivFood.forEach(f => {
    html += `<tr><td><strong>${f.id}</strong></td><td>${f.name}</td><td><span class="badge ${f.category==='Veg'?'badge-success':'badge-danger'}">${f.category}</span></td><td>${f.description}</td><td>₹ ${f.price}</td><td><span class="badge badge-success">${f.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvFoodEditModal('${f.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteIvFood('${f.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderIvPayments() {
  let html = pageHeader('IV Payments','Manage industrial visit payments',`<button class="btn btn-primary" onclick="showIvPaymentAddModal()"><i class="bx bx-plus"></i> Add Payment</button>`);
  html += ivSubNav('payments');
  html += `<div class="data-card"><div class="card-header"><h5>Payment List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>College</th><th>Reason</th><th>Amount</th><th>Method</th><th>Txn ID</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivPayments.forEach(p => {
    html += `<tr><td><strong>${p.id}</strong></td><td>${p.date}</td><td>${p.college}</td><td>${p.reason}</td><td>₹ ${p.amount.toLocaleString('en-IN')}</td><td>${p.method}</td><td>${p.txnId||'-'}</td><td><span class="badge badge-success">${p.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvPaymentEditModal('${p.id}')"><i class="bx bx-edit"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderIvEnquiries() {
  let html = pageHeader('IV Enquiries','Manage industrial visit enquiries',`<button class="btn btn-primary" onclick="showIvEnquiryAddModal()"><i class="bx bx-plus"></i> Add Enquiry</button>`);
  html += ivSubNav('enquiries');
  html += `<div class="data-card"><div class="card-header"><h5>Enquiry List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Date</th><th>College Name</th><th>Phone</th><th>Email</th><th>IV Date</th><th>Description</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivEnquiries.forEach(e => {
    const stBadge = e.status==='New'?'badge-info':e.status==='Confirmed'?'badge-success':'badge-warning';
    html += `<tr><td><strong>${e.id}</strong></td><td>${e.date}</td><td>${e.name}</td><td>${e.phone}</td><td>${e.email}</td><td>${e.ivDate}</td><td>${e.description}</td><td><span class="badge ${stBadge}">${e.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvEnquiryEditModal('${e.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteIvEnquiry('${e.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderIvRegistrations() {
  let html = pageHeader('IV Registrations','Manage registration details',`<button class="btn btn-primary" onclick="showIvRegistrationAddModal()"><i class="bx bx-plus"></i> Add Registration</button>`);
  html += ivSubNav('registrations');
  html += `<div class="data-card"><div class="card-header"><h5>Registration List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>College</th><th>Date</th><th>Students</th><th>Food</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivRegistrations.forEach(r => {
    const stBadge = r.status==='Confirmed'?'badge-success':'badge-warning';
    html += `<tr><td><strong>${r.id}</strong></td><td>${r.college}</td><td>${r.date}</td><td>${r.students.length}</td><td>${r.food}</td><td><span class="badge ${stBadge}">${r.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvRegistrationEditModal('${r.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteIvRegistration('${r.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function renderIvBanners() {
  let html = pageHeader('IV Banners','Manage promotional banners',`<button class="btn btn-primary" onclick="showIvBannerAddModal()"><i class="bx bx-plus"></i> Add Banner</button>`);
  html += ivSubNav('banners');
  html += `<div class="data-card"><div class="card-header"><h5>Banner List</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Banner Name</th><th>Image</th><th>Status</th><th>Actions</th></tr></thead><tbody>`;
  MOCK.ivBanners.forEach(b => {
    html += `<tr><td><strong>${b.id}</strong></td><td>${b.name}</td><td>${b.image}</td><td><span class="badge badge-success">${b.status}</span></td><td><button class="btn btn-sm btn-outline-warning" onclick="showIvBannerEditModal('${b.id}')"><i class="bx bx-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="deleteIvBanner('${b.id}')"><i class="bx bx-trash"></i></button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

function ivSubNav(active) {
  const items = [{id:'clients',label:'Client',pg:'iv-clients'},{id:'food',label:'Food Packages',pg:'iv-food'},{id:'payments',label:'Payment',pg:'iv-payments'},{id:'enquiries',label:'Enquiry',pg:'iv-enquiries'},{id:'registrations',label:'Registration',pg:'iv-registrations'},{id:'banners',label:'Banner',pg:'iv-banners'}];
  let h = `<div class="sub-module-nav">`;
  items.forEach(i => { h += `<a href="javascript:void(0)" onclick="navigate('${i.pg}')" class="${active===i.id?'active':''}">${i.label}</a>`; });
  return h + `</div>`;
}

// ============ CREDIT / DEBIT ============
function renderCreditDebit() {
  let html = pageHeader('Credit & Debit','Track all credits and debits');
  const totalCredit = MOCK.creditDebit.filter(c=>c.type==='Credit').reduce((s,c)=>s+c.amount,0);
  const totalDebit = MOCK.creditDebit.filter(c=>c.type==='Debit').reduce((s,c)=>s+c.amount,0);
  const balance = totalCredit - totalDebit;
  html += `<div class="row row-cols-1 row-cols-md-3 mb-3">`;
  html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">Total Credits</p><h4 class="text-success">₹ ${totalCredit.toLocaleString('en-IN')}</h4></div><div class="stat-icon bg-light-success text-success ms-auto"><i class="bx bx-down-arrow-alt"></i></div></div></div></div>`;
  html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">Total Debits</p><h4 class="text-danger">₹ ${totalDebit.toLocaleString('en-IN')}</h4></div><div class="stat-icon bg-light-danger text-danger ms-auto"><i class="bx bx-up-arrow-alt"></i></div></div></div></div>`;
  html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">Current Balance</p><h4>₹ ${balance.toLocaleString('en-IN')}</h4></div><div class="stat-icon bg-light-primary text-primary ms-auto"><i class="bx bx-wallet"></i></div></div></div></div>`;
  html += `</div>`;
  html += `<div class="data-card"><div class="card-header"><h5>Transaction History</h5></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>Date</th><th>Type</th><th>Description</th><th>Amount</th><th>Balance</th></tr></thead><tbody>`;
  MOCK.creditDebit.forEach(c => {
    html += `<tr><td>${c.date}</td><td><span class="badge ${c.type==='Credit'?'badge-success':'badge-danger'}">${c.type}</span></td><td>${c.description}</td><td>₹ ${c.amount.toLocaleString('en-IN')}</td><td><strong>₹ ${c.balance.toLocaleString('en-IN')}</strong></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ============================================
// RUNTIME - HELPERS & APP SHELL
// ============================================

function today() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function pageHeader(title, subtitle, actions) {
  return `<div class="page-header" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;"><div><h4 style="margin:0 0 0.2rem;">${title}</h4><div class="font-13 text-secondary">${subtitle || ''}</div></div>${actions ? `<div>${actions}</div>` : ''}</div>`;
}

function showNotification(msg, type) {
  const colors = { success: '#1cc88a', error: '#e74a3b', info: '#4e73df', warning: '#f6c23e' };
  const color = colors[type] || colors.success;
  const toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = `position:fixed;top:20px;right:20px;background:${color};color:#fff;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:600;z-index:2000;box-shadow:0 4px 12px rgba(0,0,0,0.15);opacity:0;transform:translateY(-10px);transition:all 0.3s;`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)'; });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
function successNotif(m) { showNotification(m, 'success'); }
function errorNotif(m) { showNotification(m, 'error'); }
function infoNotif(m) { showNotification(m, 'info'); }

// ---------- MODAL FRAMEWORK ----------
function openModal(html) {
  const c = document.getElementById('modal-container');
  if (!c) return;
  c.innerHTML = `<div class="modal-overlay show" id="modal-overlay" onclick="if(event.target===this)closeModal()"><div class="modal-box">${html}</div></div>`;
}
function closeModal() {
  const c = document.getElementById('modal-container');
  if (c) c.innerHTML = '';
}
function modalHeader(title) {
  return `<div class="modal-header"><h5>${title}</h5><button type="button" class="btn btn-sm btn-outline-danger" onclick="closeModal()" style="padding:0.15rem 0.45rem;"><i class="bx bx-x"></i></button></div>`;
}
function modalFooter(saveHandler, label) {
  return `<div class="modal-footer"><button type="button" class="btn" style="background:#eef0f6;color:var(--text-dark);" onclick="closeModal()">Cancel</button><button type="button" class="btn btn-primary" onclick="${saveHandler}()">${label || 'Save'}</button></div>`;
}
function field(f, values) {
  values = values || {};
  const v = (values[f.name] === undefined || values[f.name] === null) ? (f.value || '') : values[f.name];
  const req = f.required ? ' required' : '';
  const id = 'fld-' + f.name;
  if (f.type === 'hidden') return `<input type="hidden" name="${f.name}" value="${v}">`;
  let html = `<div class="form-group" style="margin-bottom:1rem;">`;
  if (f.label) html += `<label class="form-label" for="${id}">${f.label}${f.required ? ' *' : ''}</label>`;
  if (f.type === 'textarea') {
    html += `<textarea id="${id}" name="${f.name}" class="form-control" rows="${f.rows || 3}" placeholder="${f.placeholder || ''}"${req}>${v}</textarea>`;
  } else if (f.type === 'select') {
    html += `<select id="${id}" name="${f.name}" class="form-control"${req}>`;
    (f.options || []).forEach(o => {
      const ov = typeof o === 'object' ? o.value : o;
      const ol = typeof o === 'object' ? o.label : o;
      html += `<option value="${ov}" ${String(v) === String(ov) ? 'selected' : ''}>${ol}</option>`;
    });
    html += `</select>`;
  } else {
    html += `<input id="${id}" name="${f.name}" type="${f.type || 'text'}" class="form-control" value="${v}" placeholder="${f.placeholder || ''}"${req}>`;
  }
  html += `</div>`;
  return html;
}
function openFormModal(opts) {
  const fieldsHtml = (opts.fields || []).map(f => field(f, opts.values || {})).join('');
  const body = `<form id="modal-form" novalidate>` + fieldsHtml + `</form>`;
  openModal(modalHeader(opts.title) + body + modalFooter(opts.submit, opts.submitLabel || 'Save'));
}
function serializeForm(id) {
  const form = document.getElementById(id);
  const obj = {};
  if (!form) return obj;
  form.querySelectorAll('input,select,textarea').forEach(el => {
    if (el.type === 'checkbox') obj[el.name] = el.checked;
    else if (el.type === 'radio' && el.checked) obj[el.name] = el.value;
    else obj[el.name] = el.value;
  });
  return obj;
}
function genId(list, prefix) {
  let max = 0;
  (list || []).forEach(x => {
    const n = parseInt(String(x.id).replace(/[^0-9]/g, ''), 10);
    if (!isNaN(n) && n > max) max = n;
  });
  return prefix + String(max + 1).padStart(3, '0');
}
function viewModal(title, rows) {
  let h = modalHeader(title);
  h += `<div class="modal-body">`;
  rows.forEach(r => {
    h += `<div class="detail-row" style="display:flex;padding:0.5rem 0;border-bottom:1px solid var(--border-color);"><span class="label" style="color:var(--text-secondary);display:inline-block;width:130px;flex-shrink:0;font-size:13px;">${r[0]}</span><span class="value" style="font-weight:600;font-size:13px;">${r[1]}</span></div>`;
  });
  h += `</div>`;
  h += `<div class="modal-footer"><button type="button" class="btn" style="background:#eef0f6;color:var(--text-dark);" onclick="closeModal()">Close</button></div>`;
  openModal(h);
}
function confirmDelete(message, fn) {
  let h = modalHeader('Confirm Delete');
  h += `<div class="modal-body" style="font-size:14px;color:var(--text-dark);">${message}</div>`;
  h += `<div class="modal-footer"><button type="button" class="btn" style="background:#eef0f6;color:var(--text-dark);" onclick="closeModal()">Cancel</button><button type="button" class="btn btn-danger" onclick="closeModal();${fn}">Delete</button></div>`;
  openModal(h);
}
function doDelete(listKey, id, msg) {
  MOCK[listKey] = (MOCK[listKey] || []).filter(x => String(x.id) !== String(id));
  showNotification(msg || 'Record deleted successfully', 'success');
  navigate(currentPage);
}

// ---------- TOGGLES ----------
function toggleSubmenu(li) { li.classList.toggle('open'); }
function toggleSidebar() { document.querySelector('.sidebar').classList.toggle('collapsed'); }
function toggleMobileSidebar() { document.querySelector('.sidebar').classList.toggle('mobile-open'); }
function toggleDropdown(id) { const el = document.getElementById(id); if (el) el.classList.toggle('show'); }
function togglePasswordVisibility() {
  const inp = document.getElementById('login-password');
  const icon = document.querySelector('.password-toggle i');
  if (!inp) return;
  if (inp.type === 'password') { inp.type = 'text'; if (icon) icon.className = 'bx bx-show'; }
  else { inp.type = 'password'; if (icon) icon.className = 'bx bx-hide'; }
}
function switchTab(group, name) {
  document.querySelectorAll(`.tab-nav[data-tabgroup="${group}"] button`).forEach(b => b.classList.toggle('active', b.textContent.trim().toLowerCase() === name));
  document.querySelectorAll(`.tab-content[data-tab="${group}"]`).forEach(c => c.classList.toggle('active', c.getAttribute('data-tabname') === name));
}
function searchTable(input, tbodyId) {
  const q = (input.value || '').toLowerCase();
  document.querySelectorAll('#' + tbodyId + ' tr').forEach(r => {
    r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}
function filterEmployeeStatus(status) {
  document.querySelectorAll('#employee-tbody tr').forEach(r => {
    if (status === 'All') r.style.display = '';
    else r.style.display = r.getAttribute('data-status') === status ? '' : 'none';
  });
}

// ---------- LOGIN / LOGOUT ----------
function doLogin(e) {
  e.preventDefault();
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value;
  let user = MOCK.admin.find(a => a.username === u && a.password === p);
  if (!user && MOCK.admin.length) user = MOCK.admin[0];
  currentUser = user;
  window._params = {};
  document.getElementById('login-page').style.display = 'none';
  document.getElementById('app-page').style.display = 'flex';
  document.getElementById('topbar-user-name').textContent = user.name.split(' ')[0];
  document.getElementById('topbar-user-role').textContent = user.role;
  document.getElementById('topbar-user-avatar').textContent = user.name.charAt(0);
  buildSidebar();
  navigate('dashboard');
  showNotification('Welcome back, ' + user.name + '!', 'success');
}
function doLogout() {
  currentUser = null;
  document.getElementById('app-page').style.display = 'none';
  document.getElementById('login-page').style.display = '';
  showNotification('Logged out successfully', 'info');
}
function showModal(id) {
  if (id === 'editPasswordModal') { showPasswordModal(); return; }
  showNotification('Modal: ' + id, 'info');
}
function showPasswordModal() {
  openFormModal({
    title: 'Edit Password',
    submit: 'submitPassword',
    fields: [
      { name: 'currentPassword', label: 'Current Password', type: 'password' },
      { name: 'newPassword', label: 'New Password', type: 'password' },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
    ]
  });
}
function submitPassword() {
  const v = serializeForm('modal-form');
  if (!v.newPassword) { showNotification('New password is required', 'error'); return; }
  if (v.newPassword !== v.confirmPassword) { showNotification('Passwords do not match', 'error'); return; }
  if (currentUser) {
    currentUser.password = v.newPassword;
    const admin = MOCK.admin.find(a => a.username === currentUser.username);
    if (admin) admin.password = v.newPassword;
  }
  closeModal();
  showNotification('Password updated successfully', 'success');
}
// ============================================
// RUNTIME - MAIN MODULE CRUD
// ============================================

// ---------- EMPLOYEES ----------
function employeeFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'firstName', label: 'First Name', required: true },
    { name: 'lastName', label: 'Last Name' },
    { name: 'role', label: 'Role', type: 'select', options: MOCK.roles },
    { name: 'entity', label: 'Entity', type: 'select', options: ['Roriri Software', 'NexGen IT Academy', 'NexGen IT College'] },
    { name: 'department', label: 'Department', type: 'select', options: MOCK.departments },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'personalEmail', label: 'Personal Email', type: 'email' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'bloodGroup', label: 'Blood Group', type: 'select', options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', ''] },
    { name: 'maritalStatus', label: 'Marital Status', type: 'select', options: ['Single', 'Married'] },
    { name: 'address', label: 'Address', type: 'textarea', rows: 2 },
    { name: 'joinDate', label: 'Joining Date', type: 'date', value: today() },
    { name: 'payroll', label: 'Payroll (₹)', type: 'number' },
    { name: 'regNo', label: 'Reg No', type: 'number' }
  ];
}
function showEmployeeAddModal() {
  openFormModal({ title: 'Add Employee', submit: 'submitEmployee', fields: employeeFields() });
}
function showEmployeeEditModal(id) {
  const emp = MOCK.employees.find(x => x.id === id);
  if (!emp) return;
  openFormModal({ title: 'Edit Employee', submit: 'submitEmployee', fields: employeeFields(), values: emp });
}
function submitEmployee() {
  const v = serializeForm('modal-form');
  if (!v.firstName) { showNotification('First name is required', 'error'); return; }
  const emp = MOCK.employees.find(x => x.id === v.id);
  const base = {
    firstName: v.firstName,
    lastName: v.lastName || '',
    name: (v.firstName + ' ' + (v.lastName || '')).trim(),
    role: v.role, entity: v.entity, phone: v.phone, personalEmail: v.personalEmail,
    gender: v.gender, dob: v.dob, bloodGroup: v.bloodGroup, maritalStatus: v.maritalStatus,
    address: v.address, department: v.department, payroll: v.payroll || '0',
    regNo: Number(v.regNo) || 0, joinDate: v.joinDate, status: (emp ? emp.status : 'Active')
  };
  if (!emp) base.companyEmail = v.firstName.toLowerCase() + '@roririsoft.com';
  if (emp) Object.assign(emp, base);
  else MOCK.employees.push(Object.assign({ id: genId(MOCK.employees, 'E') }, base));
  closeModal(); navigate('employees');
  showNotification('Employee saved successfully', 'success');
}
function deleteEmployee(id) {
  confirmDelete('Are you sure you want to delete employee ' + id + '?', `doDelete('employees','${id}','Employee deleted successfully')`);
}

// ---------- CLIENTS ----------
function clientFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Name', required: true },
    { name: 'company', label: 'Company' },
    { name: 'location', label: 'Location' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showClientAddModal() {
  openFormModal({ title: 'Add Client', submit: 'submitClient', fields: clientFields() });
}
function showClientEditModal(id) {
  const c = MOCK.clients.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit Client', submit: 'submitClient', fields: clientFields(), values: c });
}
function submitClient() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Client name is required', 'error'); return; }
  const c = MOCK.clients.find(x => x.id === v.id);
  const base = { name: v.name, company: v.company, location: v.location, email: v.email, phone: v.phone, status: v.status };
  if (c) Object.assign(c, base);
  else MOCK.clients.push(Object.assign({ id: genId(MOCK.clients, 'C') }, base));
  closeModal(); navigate('clients');
  showNotification('Client saved successfully', 'success');
}
function deleteClient(id) {
  confirmDelete('Are you sure you want to delete client ' + id + '?', `doDelete('clients','${id}','Client deleted successfully')`);
}

// ---------- PROJECTS ----------
function projectFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Project Name', required: true },
    { name: 'client', label: 'Client', type: 'select', options: MOCK.clients.map(c => c.name) },
    { name: 'clientEmail', label: 'Client Email', type: 'email' },
    { name: 'address', label: 'Address' },
    { name: 'services', label: 'Services', type: 'select', options: MOCK.services },
    { name: 'tech', label: 'Technology', type: 'select', options: MOCK.technologies },
    { name: 'duration', label: 'Duration' },
    { name: 'startDate', label: 'Start Date', type: 'date', value: today() },
    { name: 'amount', label: 'Total Amount (₹)', type: 'number' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'developers', label: 'Developers (comma separated)', type: 'textarea', rows: 2 },
    { name: 'status', label: 'Status', type: 'select', options: ['New', 'In Progress', 'Completed'], value: 'New' },
    { name: 'payStatus', label: 'Payment Status', type: 'select', options: ['Pending', 'Partially', 'Paid'], value: 'Pending' }
  ];
}
function showProjectAddModal() {
  openFormModal({ title: 'Add Project', submit: 'submitProject', fields: projectFields() });
}
function showProjectEditModal(id) {
  const p = MOCK.projects.find(x => x.id === id);
  if (!p) return;
  openFormModal({ title: 'Edit Project', submit: 'submitProject', fields: projectFields(), values: Object.assign({}, p, { developers: (p.developers || []).join(', ') }) });
}
function submitProject() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Project name is required', 'error'); return; }
  const existing = MOCK.projects.find(p => p.id === v.id);
  const base = {
    name: v.name, services: v.services, tech: v.tech, client: v.client, clientEmail: v.clientEmail,
    address: v.address, startDate: v.startDate, duration: v.duration,
    amount: Number(v.amount) || 0, balance: existing ? (existing.balance !== undefined ? existing.balance : Number(v.amount) || 0) : Number(v.amount) || 0,
    description: v.description, status: v.status, payStatus: v.payStatus,
    developers: (v.developers || '').split(',').map(s => s.trim()).filter(Boolean),
    payments: existing ? existing.payments : []
  };
  if (existing) Object.assign(existing, base);
  else MOCK.projects.push(Object.assign({ id: genId(MOCK.projects, 'P') }, base));
  closeModal(); navigate('projects');
  showNotification('Project saved successfully', 'success');
}
function deleteProject(id) {
  confirmDelete('Are you sure you want to delete project ' + id + '?', `doDelete('projects','${id}','Project deleted successfully')`);
}
// ---------- PROJECT PAYMENTS (detail page) ----------
let _paymentProject = null;
function showPaymentAddModal(projectId) {
  _paymentProject = projectId;
  openFormModal({
    title: 'Add Payment', submit: 'submitProjectPayment',
    fields: [
      { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
      { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
      { name: 'mode', label: 'Payment Mode', type: 'select', options: ['Cash', 'Cheque', 'Net Banking', 'GPay', 'Phonepe', 'Paytm'] },
      { name: 'receivedBy', label: 'Received By', value: 'Admin' },
      { name: 'txnId', label: 'Txn ID' }
    ]
  });
}
function submitProjectPayment() {
  const v = serializeForm('modal-form');
  const proj = MOCK.projects.find(p => p.id === _paymentProject);
  if (!proj) { showNotification('Project not found', 'error'); return; }
  const amt = Number(v.amount) || 0;
  if (!amt) { showNotification('Amount is required', 'error'); return; }
  proj.payments.push({ date: v.date, amount: amt, mode: v.mode, receivedBy: v.receivedBy, txnId: v.txnId || '' });
  proj.balance = Math.max(0, (proj.balance !== undefined ? proj.balance : proj.amount) - amt);
  proj.payStatus = proj.balance <= 0 ? 'Paid' : 'Partially';
  MOCK.payments.push({ id: genId(MOCK.payments, 'PAY'), date: v.date, from: proj.client, amount: amt, mode: v.mode, txnId: v.txnId || '', status: 'Paid' });
  closeModal(); navigate('project-detail', { id: proj.id });
  showNotification('Payment added successfully', 'success');
}
// ---------- PAYMENTS (global) ----------
function showPaymentGlobalAddModal() {
  openFormModal({
    title: 'Add Payment', submit: 'submitPaymentGlobal',
    fields: [
      { name: 'date', label: 'Date', type: 'date', value: today() },
      { name: 'from', label: 'From', type: 'select', options: MOCK.clients.map(c => c.name) },
      { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
      { name: 'mode', label: 'Method', type: 'select', options: ['Cash', 'Cheque', 'Net Banking', 'GPay', 'Phonepe', 'Paytm', 'Online Payment'] },
      { name: 'txnId', label: 'Txn ID' },
      { name: 'status', label: 'Status', type: 'select', options: ['Paid', 'Pending'], value: 'Paid' }
    ]
  });
}
function submitPaymentGlobal() {
  const v = serializeForm('modal-form');
  if (!v.amount) { showNotification('Amount is required', 'error'); return; }
  MOCK.payments.push({ id: genId(MOCK.payments, 'PAY'), date: v.date, from: v.from, amount: Number(v.amount) || 0, mode: v.mode, txnId: v.txnId || '', status: v.status });
  closeModal(); navigate('payments');
  showNotification('Payment added successfully', 'success');
}

// ---------- DAILY REPORT ----------
function dailyReportFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'employee', label: 'Employee', type: 'select', options: MOCK.employees.map(e => e.name) },
    { name: 'category', label: 'Category', type: 'select', options: ['Development', 'Design', 'Marketing', 'Training', 'Management'] },
    { name: 'subcategory', label: 'Sub Category' },
    { name: 'task', label: 'Task', required: true },
    { name: 'hours', label: 'Hours', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Completed', 'In Progress', 'Pending'] },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'url', label: 'URL' }
  ];
}
function showDailyReportAddModal() {
  openFormModal({ title: 'Add Daily Report', submit: 'submitDailyReport', fields: dailyReportFields() });
}
function showDailyReportEditModal(id) {
  const d = MOCK.dailyReports.find(x => x.id === id);
  if (!d) return;
  openFormModal({ title: 'Edit Daily Report', submit: 'submitDailyReport', fields: dailyReportFields(), values: d });
}
function submitDailyReport() {
  const v = serializeForm('modal-form');
  if (!v.task) { showNotification('Task is required', 'error'); return; }
  const existing = MOCK.dailyReports.find(x => x.id === v.id);
  const base = { date: v.date, employee: v.employee, category: v.category, subcategory: v.subcategory, task: v.task, hours: Number(v.hours) || 0, status: v.status, description: v.description, url: v.url || '' };
  if (existing) Object.assign(existing, base);
  else MOCK.dailyReports.push(Object.assign({ id: genId(MOCK.dailyReports, 'DR') }, base));
  closeModal(); navigate('daily-report');
  showNotification('Daily report saved successfully', 'success');
}
function viewDailyReport(id) {
  const d = MOCK.dailyReports.find(x => x.id === id);
  if (!d) return;
  viewModal('Daily Report - ' + d.id, [
    ['Date', d.date], ['Employee', d.employee], ['Category', d.category + (d.subcategory ? ' / ' + d.subcategory : '')],
    ['Task', d.task], ['Hours', d.hours + 'h'], ['Status', d.status], ['Description', d.description], ['URL', d.url || '-']
  ]);
}
function deleteDailyReport(id) {
  confirmDelete('Are you sure you want to delete report ' + id + '?', `doDelete('dailyReports','${id}','Daily report deleted successfully')`);
}

// ---------- TASK ASSIGNMENT ----------
function taskFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'project', label: 'Project', type: 'select', options: MOCK.projects.map(p => p.name) },
    { name: 'employee', label: 'Employee', type: 'select', options: MOCK.employees.map(e => e.name) },
    { name: 'task', label: 'Task', required: true },
    { name: 'startDate', label: 'Start Date', type: 'date', value: today() },
    { name: 'dueDate', label: 'Due Date', type: 'date' },
    { name: 'priority', label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'], value: 'Medium' },
    { name: 'status', label: 'Status', type: 'select', options: ['In Progress', 'Completed', 'Pending'] },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 }
  ];
}
function showTaskAssignAddModal() {
  openFormModal({ title: 'Assign Task', submit: 'submitTaskAssignment', fields: taskFields() });
}
function showTaskAssignEditModal(id) {
  const t = MOCK.taskAssignments.find(x => x.id === id);
  if (!t) return;
  openFormModal({ title: 'Edit Task Assignment', submit: 'submitTaskAssignment', fields: taskFields(), values: t });
}
function submitTaskAssignment() {
  const v = serializeForm('modal-form');
  if (!v.task) { showNotification('Task is required', 'error'); return; }
  const existing = MOCK.taskAssignments.find(x => x.id === v.id);
  const base = { project: v.project, employee: v.employee, task: v.task, startDate: v.startDate, dueDate: v.dueDate, priority: v.priority, status: v.status, description: v.description };
  if (existing) Object.assign(existing, base);
  else MOCK.taskAssignments.push(Object.assign({ id: genId(MOCK.taskAssignments, 'TA') }, base));
  closeModal(); navigate('task-assignment');
  showNotification('Task assignment saved successfully', 'success');
}
function deleteTaskAssignment(id) {
  confirmDelete('Are you sure you want to delete task ' + id + '?', `doDelete('taskAssignments','${id}','Task assignment deleted successfully')`);
}

// ---------- COMPLAINTS ----------
function complaintFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'from', label: 'From', type: 'select', options: MOCK.employees.map(e => e.name) },
    { name: 'type', label: 'Type', type: 'select', options: ['Workplace', 'Technical', 'Facility', 'Other'] },
    { name: 'subject', label: 'Subject', required: true },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'priority', label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'], value: 'Medium' },
    { name: 'status', label: 'Status', type: 'select', options: ['Open', 'In Progress', 'Resolved'], value: 'Open' }
  ];
}
function showComplaintAddModal() {
  openFormModal({ title: 'Add Complaint', submit: 'submitComplaint', fields: complaintFields() });
}
function showComplaintEditModal(id) {
  const c = MOCK.complaints.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit Complaint', submit: 'submitComplaint', fields: complaintFields(), values: c });
}
function submitComplaint() {
  const v = serializeForm('modal-form');
  if (!v.subject) { showNotification('Subject is required', 'error'); return; }
  const existing = MOCK.complaints.find(x => x.id === v.id);
  const base = { date: v.date, from: v.from, type: v.type, subject: v.subject, description: v.description, priority: v.priority, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.complaints.push(Object.assign({ id: genId(MOCK.complaints, 'CMP') }, base));
  closeModal(); navigate('complaints');
  showNotification('Complaint saved successfully', 'success');
}
function deleteComplaint(id) {
  confirmDelete('Are you sure you want to delete complaint ' + id + '?', `doDelete('complaints','${id}','Complaint deleted successfully')`);
}

// ---------- ID CARDS ----------
function showIdCardAddModal() {
  openFormModal({
    title: 'Generate ID Card', submit: 'submitIdCard',
    fields: [
      { name: 'employee', label: 'Employee', type: 'select', options: MOCK.employees.map(e => e.name), required: true }
    ]
  });
}
function submitIdCard() {
  const v = serializeForm('modal-form');
  const emp = MOCK.employees.find(e => e.name === v.employee);
  if (!emp) { showNotification('Please select an employee', 'error'); return; }
  if (MOCK.idCards.some(c => c.employee === emp.name)) { showNotification('ID card already exists for this employee', 'error'); return; }
  MOCK.idCards.push({ id: genId(MOCK.idCards, 'ID'), employee: emp.name, regNo: emp.regNo, entity: emp.entity, role: emp.role, bloodGroup: emp.bloodGroup, joinDate: emp.joinDate, status: 'Active' });
  closeModal(); navigate('id-cards');
  showNotification('ID card generated successfully', 'success');
}

// ---------- MOU ----------
function mouFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'client', label: 'Client', type: 'select', options: MOCK.clients.map(c => c.name) },
    { name: 'projectName', label: 'Project Name' },
    { name: 'startDate', label: 'Start Date', type: 'date', value: today() },
    { name: 'endDate', label: 'End Date', type: 'date' },
    { name: 'amount', label: 'Amount (₹)', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Expired'], value: 'Active' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 }
  ];
}
function showMouAddModal() {
  openFormModal({ title: 'Add MOU', submit: 'submitMou', fields: mouFields() });
}
function showMouEditModal(id) {
  const m = MOCK.mous.find(x => x.id === id);
  if (!m) return;
  openFormModal({ title: 'Edit MOU', submit: 'submitMou', fields: mouFields(), values: m });
}
function submitMou() {
  const v = serializeForm('modal-form');
  const existing = MOCK.mous.find(x => x.id === v.id);
  const base = { client: v.client, projectName: v.projectName, startDate: v.startDate, endDate: v.endDate, amount: Number(v.amount) || 0, status: v.status, description: v.description };
  if (existing) Object.assign(existing, base);
  else MOCK.mous.push(Object.assign({ id: genId(MOCK.mous, 'MOU') }, base));
  closeModal(); navigate('mou');
  showNotification('MOU saved successfully', 'success');
}
function deleteMou(id) {
  confirmDelete('Are you sure you want to delete MOU ' + id + '?', `doDelete('mous','${id}','MOU deleted successfully')`);
}

// ---------- DOCUMENTS ----------
function showDocumentAddModal() {
  openFormModal({
    title: 'Add Document', submit: 'submitDocument',
    fields: [
      { name: 'employee', label: 'Employee', type: 'select', options: MOCK.employees.map(e => e.name), required: true },
      { name: 'type', label: 'Type', type: 'select', options: ['Aadhar Card', 'PAN Card', 'Offer Letter', 'Bank Details', 'Degree Certificate', 'Other'] },
      { name: 'fileName', label: 'File Name' },
      { name: 'uploadDate', label: 'Upload Date', type: 'date', value: today() },
      { name: 'status', label: 'Status', type: 'select', options: ['Verified', 'Pending'], value: 'Pending' }
    ]
  });
}
function submitDocument() {
  const v = serializeForm('modal-form');
  if (!v.employee) { showNotification('Please select an employee', 'error'); return; }
  MOCK.documents.push({ id: genId(MOCK.documents, 'DOC'), employee: v.employee, type: v.type, fileName: v.fileName, uploadDate: v.uploadDate, status: v.status });
  closeModal(); navigate('documents');
  showNotification('Document added successfully', 'success');
}
function deleteDocument(id) {
  confirmDelete('Are you sure you want to delete document ' + id + '?', `doDelete('documents','${id}','Document deleted successfully')`);
}

// ---------- ENQUIRIES ----------
function enquiryFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'name', label: 'Name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'type', label: 'Type', type: 'select', options: ['Project', 'Website', 'App', 'Other'] },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'status', label: 'Status', type: 'select', options: ['New', 'Contacted', 'Closed'], value: 'New' },
    { name: 'assignedTo', label: 'Assigned To', type: 'select', options: MOCK.employees.map(e => e.name) }
  ];
}
function showEnquiryAddModal() {
  openFormModal({ title: 'Add Enquiry', submit: 'submitEnquiry', fields: enquiryFields() });
}
function showEnquiryEditModal(id) {
  const e = MOCK.enquiries.find(x => x.id === id);
  if (!e) return;
  openFormModal({ title: 'Edit Enquiry', submit: 'submitEnquiry', fields: enquiryFields(), values: e });
}
function submitEnquiry() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Name is required', 'error'); return; }
  const existing = MOCK.enquiries.find(x => x.id === v.id);
  const base = { date: v.date, name: v.name, phone: v.phone, email: v.email, type: v.type, description: v.description, status: v.status, assignedTo: v.assignedTo };
  if (existing) Object.assign(existing, base);
  else MOCK.enquiries.push(Object.assign({ id: genId(MOCK.enquiries, 'ENQ') }, base));
  closeModal(); navigate('enquiries');
  showNotification('Enquiry saved successfully', 'success');
}
function deleteEnquiry(id) {
  confirmDelete('Are you sure you want to delete enquiry ' + id + '?', `doDelete('enquiries','${id}','Enquiry deleted successfully')`);
}
// ============================================
// RUNTIME - ACADEMY / EXPENSE / ASSET / IV CRUD
// ============================================

// ---------- TRAINEES ----------
function traineeFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Name', required: true },
    { name: 'course', label: 'Course', type: 'select', options: MOCK.courses.map(c => c.name) },
    { name: 'duration', label: 'Duration', type: 'select', options: ['3 months', '4 months', '6 months', '12 months'], value: '6 months' },
    { name: 'fee', label: 'Fees (₹)', type: 'number' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'] },
    { name: 'dob', label: 'Date of Birth', type: 'date' },
    { name: 'address', label: 'Address', type: 'textarea', rows: 2 },
    { name: 'joinDate', label: 'Join Date', type: 'date', value: today() },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showTraineeAddModal() {
  openFormModal({ title: 'Add Trainee', submit: 'submitTrainee', fields: traineeFields() });
}
function showTraineeEditModal(id) {
  const t = MOCK.trainees.find(x => x.id === id);
  if (!t) return;
  openFormModal({ title: 'Edit Trainee', submit: 'submitTrainee', fields: traineeFields(), values: t });
}
function submitTrainee() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Name is required', 'error'); return; }
  const existing = MOCK.trainees.find(x => x.id === v.id);
  const base = { name: v.name, course: v.course, duration: v.duration, fee: Number(v.fee) || 0, phone: v.phone, email: v.email, gender: v.gender, dob: v.dob, address: v.address, joinDate: v.joinDate, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.trainees.push(Object.assign({ id: genId(MOCK.trainees, 'T') }, base));
  closeModal(); navigate('academy-trainees');
  showNotification('Trainee saved successfully', 'success');
}
function deleteTrainee(id) {
  confirmDelete('Are you sure you want to delete trainee ' + id + '?', `doDelete('trainees','${id}','Trainee deleted successfully')`);
}

// ---------- SUBJECTS ----------
function subjectFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Subject Name', required: true },
    { name: 'course', label: 'Course', type: 'select', options: MOCK.courses.map(c => c.name) },
    { name: 'topics', label: 'Topics', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showSubjectAddModal() {
  openFormModal({ title: 'Add Subject', submit: 'submitSubject', fields: subjectFields() });
}
function showSubjectEditModal(id) {
  const s = MOCK.subjects.find(x => x.id === id);
  if (!s) return;
  openFormModal({ title: 'Edit Subject', submit: 'submitSubject', fields: subjectFields(), values: s });
}
function submitSubject() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Subject name is required', 'error'); return; }
  const existing = MOCK.subjects.find(x => x.id === v.id);
  const base = { name: v.name, course: v.course, topics: Number(v.topics) || 0, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.subjects.push(Object.assign({ id: genId(MOCK.subjects, 'SUB') }, base));
  closeModal(); navigate('academy-subjects');
  showNotification('Subject saved successfully', 'success');
}
function deleteSubject(id) {
  confirmDelete('Are you sure you want to delete subject ' + id + '?', `doDelete('subjects','${id}','Subject deleted successfully')`);
}

// ---------- ACADEMY COURSES ----------
function academyCourseFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Course Name', required: true },
    { name: 'duration', label: 'Duration', type: 'select', options: ['3 months', '4 months', '6 months', '12 months'], value: '6 months' },
    { name: 'fee', label: 'Fees (₹)', type: 'number' },
    { name: 'subjects', label: 'Subjects', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Available', 'Not Available'], value: 'Available' }
  ];
}
function showAcademyCourseAddModal() {
  openFormModal({ title: 'Add Course', submit: 'submitAcademyCourse', fields: academyCourseFields() });
}
function showAcademyCourseEditModal(id) {
  const c = MOCK.courses.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit Course', submit: 'submitAcademyCourse', fields: academyCourseFields(), values: c });
}
function submitAcademyCourse() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Course name is required', 'error'); return; }
  const existing = MOCK.courses.find(x => x.id === v.id);
  const base = { name: v.name, duration: v.duration, fee: Number(v.fee) || 0, subjects: Number(v.subjects) || 0, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.courses.push(Object.assign({ id: genId(MOCK.courses, 'CS') }, base));
  closeModal(); navigate('academy-courses');
  showNotification('Course saved successfully', 'success');
}
function deleteAcademyCourse(id) {
  confirmDelete('Are you sure you want to delete course ' + id + '?', `doDelete('courses','${id}','Course deleted successfully')`);
}

// ---------- MINI PROJECTS ----------
function miniProjectFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Project Name', required: true },
    { name: 'course', label: 'Course', type: 'select', options: MOCK.courses.map(c => c.name) },
    { name: 'trainee', label: 'Trainee', type: 'select', options: MOCK.trainees.map(t => t.name) },
    { name: 'startDate', label: 'Start Date', type: 'date', value: today() },
    { name: 'endDate', label: 'End Date', type: 'date' },
    { name: 'status', label: 'Status', type: 'select', options: ['In Progress', 'Completed'], value: 'In Progress' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 }
  ];
}
function showMiniProjectAddModal() {
  openFormModal({ title: 'Add Mini Project', submit: 'submitMiniProject', fields: miniProjectFields() });
}
function showMiniProjectEditModal(id) {
  const p = MOCK.miniProjects.find(x => x.id === id);
  if (!p) return;
  openFormModal({ title: 'Edit Mini Project', submit: 'submitMiniProject', fields: miniProjectFields(), values: p });
}
function submitMiniProject() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Project name is required', 'error'); return; }
  const existing = MOCK.miniProjects.find(x => x.id === v.id);
  const base = { name: v.name, course: v.course, trainee: v.trainee, startDate: v.startDate, endDate: v.endDate, status: v.status, description: v.description };
  if (existing) Object.assign(existing, base);
  else MOCK.miniProjects.push(Object.assign({ id: genId(MOCK.miniProjects, 'MP') }, base));
  closeModal(); navigate('academy-mini-projects');
  showNotification('Mini project saved successfully', 'success');
}

// ============ EXPENSE ============
// ---------- EXPENSE CATEGORIES ----------
function showExpenseCategoryAddModal() {
  openFormModal({
    title: 'Add Expense Category', submit: 'submitExpenseCategory',
    fields: [
      { name: 'id', type: 'hidden' },
      { name: 'name', label: 'Category Name', required: true },
      { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
    ]
  });
}
function showExpenseCategoryEditModal(id) {
  const c = MOCK.expenseCategories.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit Expense Category', submit: 'submitExpenseCategory', fields: [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Category Name', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ], values: c });
}
function submitExpenseCategory() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Category name is required', 'error'); return; }
  const c = MOCK.expenseCategories.find(x => x.id === v.id);
  const base = { name: v.name, status: v.status };
  if (c) Object.assign(c, base);
  else MOCK.expenseCategories.push(Object.assign({ id: genId(MOCK.expenseCategories, 'EXCAT') }, base));
  closeModal(); navigate('expense-categories');
  showNotification('Expense category saved successfully', 'success');
}
function deleteExpenseCategory(id) {
  confirmDelete('Are you sure you want to delete expense category ' + id + '?', `doDelete('expenseCategories','${id}','Expense category deleted successfully')`);
}

// ---------- EXPENSE SUB-CATEGORIES ----------
function expenseSubCategoryFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Sub-Category Name', required: true },
    { name: 'category', label: 'Category', type: 'select', options: MOCK.expenseCategories.map(c => c.name) },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showExpenseSubCategoryAddModal() {
  openFormModal({ title: 'Add Expense Sub-Category', submit: 'submitExpenseSubCategory', fields: expenseSubCategoryFields() });
}
function showExpenseSubCategoryEditModal(id) {
  const s = MOCK.expenseSubCategories.find(x => x.id === id);
  if (!s) return;
  openFormModal({ title: 'Edit Expense Sub-Category', submit: 'submitExpenseSubCategory', fields: expenseSubCategoryFields(), values: s });
}
function submitExpenseSubCategory() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Sub-category name is required', 'error'); return; }
  const s = MOCK.expenseSubCategories.find(x => x.id === v.id);
  const base = { name: v.name, category: v.category, status: v.status };
  if (s) Object.assign(s, base);
  else MOCK.expenseSubCategories.push(Object.assign({ id: genId(MOCK.expenseSubCategories, 'EXSUB') }, base));
  closeModal(); navigate('expense-subcategories');
  showNotification('Expense sub-category saved successfully', 'success');
}
function deleteExpenseSubCategory(id) {
  confirmDelete('Are you sure you want to delete sub-category ' + id + '?', `doDelete('expenseSubCategories','${id}','Expense sub-category deleted successfully')`);
}

// ---------- EXPENSES ----------
function expenseFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'category', label: 'Category', type: 'select', options: MOCK.expenseCategories.map(c => c.name) },
    { name: 'subCategory', label: 'Sub Category', type: 'select', options: MOCK.expenseSubCategories.map(s => s.name) },
    { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
    { name: 'paidTo', label: 'Paid To' },
    { name: 'method', label: 'Method', type: 'select', options: MOCK.expenseMethods },
    { name: 'txnId', label: 'Txn ID' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Paid'], value: 'Active' }
  ];
}
function showExpenseAddModal() {
  openFormModal({ title: 'Add Expense', submit: 'submitExpense', fields: expenseFields() });
}
function showExpenseEditModal(id) {
  const e = MOCK.expenses.find(x => x.id === id);
  if (!e) return;
  openFormModal({ title: 'Edit Expense', submit: 'submitExpense', fields: expenseFields(), values: e });
}
function submitExpense() {
  const v = serializeForm('modal-form');
  if (!v.amount) { showNotification('Amount is required', 'error'); return; }
  const existing = MOCK.expenses.find(x => x.id === v.id);
  const base = { date: v.date, category: v.category, subCategory: v.subCategory, amount: Number(v.amount) || 0, paidTo: v.paidTo, method: v.method, txnId: v.txnId || '', description: v.description, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.expenses.push(Object.assign({ id: genId(MOCK.expenses, 'EX') }, base));
  closeModal(); navigate('expenses');
  showNotification('Expense saved successfully', 'success');
}
function deleteExpense(id) {
  confirmDelete('Are you sure you want to delete expense ' + id + '?', `doDelete('expenses','${id}','Expense deleted successfully')`);
}
function viewExpense(id) {
  const e = MOCK.expenses.find(x => x.id === id);
  if (!e) return;
  viewModal('Expense - ' + e.id, [
    ['Date', e.date], ['Category', e.category], ['Sub Category', e.subCategory],
    ['Amount', '₹ ' + Number(e.amount).toLocaleString('en-IN')], ['Paid To', e.paidTo],
    ['Method', e.method], ['Txn ID', e.txnId || '-'], ['Description', e.description]
  ]);
}

// ---------- FUTURE EXPENSES ----------
function futureExpenseFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'reason', label: 'Reason', required: true },
    { name: 'amount', label: 'Amount (₹)', type: 'number' },
    { name: 'priority', label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'], value: 'Medium' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'status', label: 'Status', type: 'select', options: ['Pending', 'Approved', 'Done'], value: 'Pending' }
  ];
}
function showFutureExpenseAddModal() {
  openFormModal({ title: 'Add Future Expense', submit: 'submitFutureExpense', fields: futureExpenseFields() });
}
function showFutureExpenseEditModal(id) {
  const f = MOCK.futureExpenses.find(x => x.id === id);
  if (!f) return;
  openFormModal({ title: 'Edit Future Expense', submit: 'submitFutureExpense', fields: futureExpenseFields(), values: f });
}
function submitFutureExpense() {
  const v = serializeForm('modal-form');
  if (!v.reason) { showNotification('Reason is required', 'error'); return; }
  const existing = MOCK.futureExpenses.find(x => x.id === v.id);
  const base = { reason: v.reason, amount: Number(v.amount) || 0, priority: v.priority, description: v.description, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.futureExpenses.push(Object.assign({ id: genId(MOCK.futureExpenses, 'FEX') }, base));
  closeModal(); navigate('future-expenses');
  showNotification('Future expense saved successfully', 'success');
}
function deleteFutureExpense(id) {
  confirmDelete('Are you sure you want to delete future expense ' + id + '?', `doDelete('futureExpenses','${id}','Future expense deleted successfully')`);
}

// ============ ASSET ============
// ---------- ASSET CATEGORIES ----------
function showAssetCategoryAddModal() {
  openFormModal({
    title: 'Add Asset Category', submit: 'submitAssetCategory',
    fields: [
      { name: 'id', type: 'hidden' },
      { name: 'name', label: 'Category Name', required: true },
      { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
    ]
  });
}
function showAssetCategoryEditModal(id) {
  const c = MOCK.assetCategories.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit Asset Category', submit: 'submitAssetCategory', fields: [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Category Name', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ], values: c });
}
function submitAssetCategory() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Category name is required', 'error'); return; }
  const c = MOCK.assetCategories.find(x => x.id === v.id);
  const base = { name: v.name, status: v.status };
  if (c) Object.assign(c, base);
  else MOCK.assetCategories.push(Object.assign({ id: genId(MOCK.assetCategories, 'ACAT') }, base));
  closeModal(); navigate('asset-categories');
  showNotification('Asset category saved successfully', 'success');
}
function deleteAssetCategory(id) {
  confirmDelete('Are you sure you want to delete asset category ' + id + '?', `doDelete('assetCategories','${id}','Asset category deleted successfully')`);
}

// ---------- ASSET SUB-CATEGORIES ----------
function assetSubCategoryFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Sub-Category Name', required: true },
    { name: 'category', label: 'Category', type: 'select', options: MOCK.assetCategories.map(c => c.name) },
    { name: 'quantity', label: 'Quantity', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showAssetSubCategoryAddModal() {
  openFormModal({ title: 'Add Asset Sub-Category', submit: 'submitAssetSubCategory', fields: assetSubCategoryFields() });
}
function showAssetSubCategoryEditModal(id) {
  const s = MOCK.assetSubCategories.find(x => x.id === id);
  if (!s) return;
  openFormModal({ title: 'Edit Asset Sub-Category', submit: 'submitAssetSubCategory', fields: assetSubCategoryFields(), values: s });
}
function submitAssetSubCategory() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Sub-category name is required', 'error'); return; }
  const s = MOCK.assetSubCategories.find(x => x.id === v.id);
  const base = { name: v.name, category: v.category, quantity: Number(v.quantity) || 0, status: v.status };
  if (s) Object.assign(s, base);
  else MOCK.assetSubCategories.push(Object.assign({ id: genId(MOCK.assetSubCategories, 'ASC') }, base));
  closeModal(); navigate('asset-categories');
  showNotification('Asset sub-category saved successfully', 'success');
}

// ---------- ROOMS ----------
function roomFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Room Name', required: true },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showRoomAddModal() {
  openFormModal({ title: 'Add Room', submit: 'submitRoom', fields: roomFields() });
}
function showRoomEditModal(id) {
  const r = MOCK.rooms.find(x => x.id === id);
  if (!r) return;
  openFormModal({ title: 'Edit Room', submit: 'submitRoom', fields: roomFields(), values: r });
}
function submitRoom() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Room name is required', 'error'); return; }
  const r = MOCK.rooms.find(x => x.id === v.id);
  const base = { name: v.name, status: v.status };
  if (r) Object.assign(r, base);
  else MOCK.rooms.push(Object.assign({ id: genId(MOCK.rooms, 'RM') }, base));
  closeModal(); navigate('asset-rooms');
  showNotification('Room saved successfully', 'success');
}
function deleteRoom(id) {
  confirmDelete('Are you sure you want to delete room ' + id + '?', `doDelete('rooms','${id}','Room deleted successfully')`);
}

// ---------- VENDORS ----------
function vendorFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Vendor Name', required: true },
    { name: 'company', label: 'Company' },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'location', label: 'Location' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showVendorAddModal() {
  openFormModal({ title: 'Add Vendor', submit: 'submitVendor', fields: vendorFields() });
}
function showVendorEditModal(id) {
  const vnd = MOCK.vendors.find(x => x.id === id);
  if (!vnd) return;
  openFormModal({ title: 'Edit Vendor', submit: 'submitVendor', fields: vendorFields(), values: vnd });
}
function submitVendor() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Vendor name is required', 'error'); return; }
  const vnd = MOCK.vendors.find(x => x.id === v.id);
  const base = { name: v.name, company: v.company, phone: v.phone, email: v.email, location: v.location, status: v.status };
  if (vnd) Object.assign(vnd, base);
  else MOCK.vendors.push(Object.assign({ id: genId(MOCK.vendors, 'V') }, base));
  closeModal(); navigate('asset-vendors');
  showNotification('Vendor saved successfully', 'success');
}
function deleteVendor(id) {
  confirmDelete('Are you sure you want to delete vendor ' + id + '?', `doDelete('vendors','${id}','Vendor deleted successfully')`);
}

// ---------- ASSETS ----------
function assetFields() {
  const assignTargets = MOCK.employees.map(e => e.name).concat(MOCK.rooms.map(r => r.name));
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Asset Name', required: true },
    { name: 'category', label: 'Category', type: 'select', options: MOCK.assetCategories.map(c => c.name) },
    { name: 'subCategory', label: 'Sub-Category', type: 'select', options: MOCK.assetSubCategories.map(s => s.name) },
    { name: 'assetNo', label: 'Asset No' },
    { name: 'vendor', label: 'Vendor', type: 'select', options: MOCK.vendors.map(v => v.name) },
    { name: 'purchaseDate', label: 'Purchase Date', type: 'date', value: today() },
    { name: 'condition', label: 'Condition', type: 'select', options: ['Good', 'Repair', 'Poor'], value: 'Good' },
    { name: 'status', label: 'Status', type: 'select', options: ['Not in Use', 'Assigned', 'Repair'], value: 'Not in Use' },
    { name: 'assignedTo', label: 'Assigned To', type: 'select', options: assignTargets },
    { name: 'room', label: 'Room', type: 'select', options: MOCK.rooms.map(r => r.name) },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 }
  ];
}
function showAssetAddModal() {
  openFormModal({ title: 'Add Asset', submit: 'submitAsset', fields: assetFields() });
}
function showAssetEditModal(id) {
  const a = MOCK.assets.find(x => x.id === id);
  if (!a) return;
  openFormModal({ title: 'Edit Asset', submit: 'submitAsset', fields: assetFields(), values: a });
}
function submitAsset() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Asset name is required', 'error'); return; }
  const sub = MOCK.assetSubCategories.find(s => s.name === v.subCategory);
  const existing = MOCK.assets.find(x => x.id === v.id);
  const base = {
    name: v.name, category: sub ? sub.category : v.category, subCategory: v.subCategory,
    assetNo: v.assetNo, vendor: v.vendor, purchaseDate: v.purchaseDate, condition: v.condition,
    status: v.status, assignedTo: v.assignedTo || '-', room: v.room || '-', description: v.description
  };
  if (existing) Object.assign(existing, base);
  else MOCK.assets.push(Object.assign({ id: genId(MOCK.assets, 'A') }, base));
  closeModal(); navigate('asset-details');
  showNotification('Asset saved successfully', 'success');
}
let _assignAsset = null;
function showAssetAssignModal(id) {
  _assignAsset = id;
  const a = MOCK.assets.find(x => x.id === id);
  if (!a) return;
  const assignTargets = MOCK.employees.map(e => e.name).concat(MOCK.rooms.map(r => r.name));
  openFormModal({
    title: 'Assign Asset - ' + a.name, submit: 'submitAssetAssign',
    values: { assignedTo: a.assignedTo || '', room: a.room || '' },
    fields: [
      { name: 'assignedTo', label: 'Assign To', type: 'select', options: assignTargets },
      { name: 'room', label: 'Room', type: 'select', options: MOCK.rooms.map(r => r.name) },
      { name: 'status', label: 'Status', type: 'select', options: ['Assigned', 'Not in Use', 'Repair'], value: a.status || 'Assigned' }
    ]
  });
}
function submitAssetAssign() {
  const v = serializeForm('modal-form');
  const a = MOCK.assets.find(x => x.id === _assignAsset);
  if (!a) { showNotification('Asset not found', 'error'); return; }
  a.assignedTo = v.assignedTo || '-';
  a.room = v.room || '-';
  a.status = v.status || 'Assigned';
  closeModal(); navigate('asset-details');
  showNotification('Asset assigned successfully', 'success');
}
function viewAsset(id) {
  const a = MOCK.assets.find(x => x.id === id);
  if (!a) return;
  viewModal('Asset - ' + a.id, [
    ['Name', a.name], ['Category', a.category + (a.subCategory ? ' / ' + a.subCategory : '')],
    ['Asset No', a.assetNo], ['Vendor', a.vendor], ['Status', a.status], ['Assigned To', a.assignedTo],
    ['Room', a.room], ['Purchase Date', a.purchaseDate], ['Condition', a.condition], ['Description', a.description]
  ]);
}

// ---------- ASSET SERVICES ----------
function assetServiceFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'product', label: 'Product', type: 'select', options: MOCK.assets.map(a => a.name) },
    { name: 'category', label: 'Category', type: 'select', options: MOCK.assetCategories.map(c => c.name) },
    { name: 'serviceDate', label: 'Service Date', type: 'date', value: today() },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'returnDate', label: 'Return Date', type: 'date' },
    { name: 'amount', label: 'Amount (₹)', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['In Service', 'Completed'], value: 'In Service' }
  ];
}
function showAssetServiceAddModal() {
  openFormModal({ title: 'Add Service', submit: 'submitAssetService', fields: assetServiceFields() });
}
function showAssetServiceEditModal(id) {
  const s = MOCK.assetServices.find(x => x.id === id);
  if (!s) return;
  openFormModal({ title: 'Edit Service', submit: 'submitAssetService', fields: assetServiceFields(), values: s });
}
function submitAssetService() {
  const v = serializeForm('modal-form');
  const existing = MOCK.assetServices.find(x => x.id === v.id);
  const base = { product: v.product, category: v.category, serviceDate: v.serviceDate, description: v.description, returnDate: v.returnDate || '', amount: Number(v.amount) || 0, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.assetServices.push(Object.assign({ id: genId(MOCK.assetServices, 'SVC') }, base));
  closeModal(); navigate('asset-services');
  showNotification('Service saved successfully', 'success');
}

// ============ INDUSTRIAL VISIT ============
// ---------- IV CLIENTS ----------
function ivClientFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'College Name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'location', label: 'Location' },
    { name: 'username', label: 'Username' },
    { name: 'password', label: 'Password', type: 'password' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showIvClientAddModal() {
  openFormModal({ title: 'Add IV Client', submit: 'submitIvClient', fields: ivClientFields() });
}
function showIvClientEditModal(id) {
  const c = MOCK.ivClients.find(x => x.id === id);
  if (!c) return;
  openFormModal({ title: 'Edit IV Client', submit: 'submitIvClient', fields: ivClientFields(), values: c });
}
function submitIvClient() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('College name is required', 'error'); return; }
  const c = MOCK.ivClients.find(x => x.id === v.id);
  const base = { name: v.name, phone: v.phone, email: v.email, location: v.location, username: v.username, password: v.password, status: v.status };
  if (c) Object.assign(c, base);
  else MOCK.ivClients.push(Object.assign({ id: genId(MOCK.ivClients, 'IVC') }, base));
  closeModal(); navigate('iv-clients');
  showNotification('IV client saved successfully', 'success');
}
function deleteIvClient(id) {
  confirmDelete('Are you sure you want to delete IV client ' + id + '?', `doDelete('ivClients','${id}','IV client deleted successfully')`);
}

// ---------- IV FOOD ----------
function ivFoodFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Package Name', required: true },
    { name: 'category', label: 'Category', type: 'select', options: ['Veg', 'Non-Veg'], value: 'Veg' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'price', label: 'Price (₹)', type: 'number' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showIvFoodAddModal() {
  openFormModal({ title: 'Add Food Package', submit: 'submitIvFood', fields: ivFoodFields() });
}
function showIvFoodEditModal(id) {
  const f = MOCK.ivFood.find(x => x.id === id);
  if (!f) return;
  openFormModal({ title: 'Edit Food Package', submit: 'submitIvFood', fields: ivFoodFields(), values: f });
}
function submitIvFood() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Package name is required', 'error'); return; }
  const f = MOCK.ivFood.find(x => x.id === v.id);
  const base = { name: v.name, category: v.category, description: v.description, price: Number(v.price) || 0, status: v.status };
  if (f) Object.assign(f, base);
  else MOCK.ivFood.push(Object.assign({ id: genId(MOCK.ivFood, 'IVF') }, base));
  closeModal(); navigate('iv-food');
  showNotification('Food package saved successfully', 'success');
}
function deleteIvFood(id) {
  confirmDelete('Are you sure you want to delete food package ' + id + '?', `doDelete('ivFood','${id}','Food package deleted successfully')`);
}

// ---------- IV PAYMENTS ----------
function showIvPaymentAddModal() {
  openFormModal({
    title: 'Add IV Payment', submit: 'submitIvPayment',
    fields: [
      { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
      { name: 'college', label: 'College', type: 'select', options: MOCK.ivClients.map(c => c.name), required: true },
      { name: 'reason', label: 'Reason', type: 'select', options: ['IV Registration', 'Food Package', 'Transport', 'Other'] },
      { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
      { name: 'method', label: 'Method', type: 'select', options: ['Cash', 'GPay', 'Phonepe', 'Net Banking'] },
      { name: 'txnId', label: 'Txn ID' },
      { name: 'status', label: 'Status', type: 'select', options: ['Paid', 'Pending'], value: 'Paid' }
    ]
  });
}
function showIvPaymentEditModal(id) {
  const p = MOCK.ivPayments.find(x => x.id === id);
  if (!p) return;
  openFormModal({ title: 'Edit IV Payment', submit: 'submitIvPayment', fields: [
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'college', label: 'College', type: 'select', options: MOCK.ivClients.map(c => c.name), required: true },
    { name: 'reason', label: 'Reason', type: 'select', options: ['IV Registration', 'Food Package', 'Transport', 'Other'] },
    { name: 'amount', label: 'Amount (₹)', type: 'number', required: true },
    { name: 'method', label: 'Method', type: 'select', options: ['Cash', 'GPay', 'Phonepe', 'Net Banking'] },
    { name: 'txnId', label: 'Txn ID' },
    { name: 'status', label: 'Status', type: 'select', options: ['Paid', 'Pending'], value: 'Paid' }
  ], values: p });
}
function submitIvPayment() {
  const v = serializeForm('modal-form');
  if (!v.amount) { showNotification('Amount is required', 'error'); return; }
  const existing = MOCK.ivPayments.find(x => x.id === v.id);
  const base = { date: v.date, college: v.college, reason: v.reason, amount: Number(v.amount) || 0, method: v.method, txnId: v.txnId || '', status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.ivPayments.push(Object.assign({ id: genId(MOCK.ivPayments, 'IVP') }, base));
  closeModal(); navigate('iv-payments');
  showNotification('IV payment saved successfully', 'success');
}

// ---------- IV ENQUIRIES ----------
function ivEnquiryFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'name', label: 'College Name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'ivDate', label: 'IV Date', type: 'date' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 2 },
    { name: 'status', label: 'Status', type: 'select', options: ['New', 'Contacted', 'Confirmed'], value: 'New' }
  ];
}
function showIvEnquiryAddModal() {
  openFormModal({ title: 'Add IV Enquiry', submit: 'submitIvEnquiry', fields: ivEnquiryFields() });
}
function showIvEnquiryEditModal(id) {
  const e = MOCK.ivEnquiries.find(x => x.id === id);
  if (!e) return;
  openFormModal({ title: 'Edit IV Enquiry', submit: 'submitIvEnquiry', fields: ivEnquiryFields(), values: e });
}
function submitIvEnquiry() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('College name is required', 'error'); return; }
  const existing = MOCK.ivEnquiries.find(x => x.id === v.id);
  const base = { date: v.date, name: v.name, phone: v.phone, email: v.email, ivDate: v.ivDate, description: v.description, status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.ivEnquiries.push(Object.assign({ id: genId(MOCK.ivEnquiries, 'IVE') }, base));
  closeModal(); navigate('iv-enquiries');
  showNotification('IV enquiry saved successfully', 'success');
}
function deleteIvEnquiry(id) {
  confirmDelete('Are you sure you want to delete IV enquiry ' + id + '?', `doDelete('ivEnquiries','${id}','IV enquiry deleted successfully')`);
}

// ---------- IV REGISTRATIONS ----------
function ivRegistrationFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'college', label: 'College', type: 'select', options: MOCK.ivClients.map(c => c.name), required: true },
    { name: 'date', label: 'Date', type: 'date', value: today(), required: true },
    { name: 'food', label: 'Food Package', type: 'select', options: MOCK.ivFood.map(f => f.name) },
    { name: 'students', label: 'Students (one per line)', type: 'textarea', rows: 3 },
    { name: 'status', label: 'Status', type: 'select', options: ['Pending', 'Confirmed'], value: 'Pending' }
  ];
}
function showIvRegistrationAddModal() {
  openFormModal({ title: 'Add Registration', submit: 'submitIvRegistration', fields: ivRegistrationFields() });
}
function showIvRegistrationEditModal(id) {
  const r = MOCK.ivRegistrations.find(x => x.id === id);
  if (!r) return;
  openFormModal({ title: 'Edit Registration', submit: 'submitIvRegistration', fields: ivRegistrationFields(), values: Object.assign({}, r, { students: (r.students || []).map(s => s.name).join('\n') }) });
}
function submitIvRegistration() {
  const v = serializeForm('modal-form');
  if (!v.college) { showNotification('College is required', 'error'); return; }
  const students = (v.students || '').split('\n').map(s => s.trim()).filter(Boolean).map(n => ({ name: n, phone: '', email: '', location: '' }));
  const existing = MOCK.ivRegistrations.find(x => x.id === v.id);
  const base = { college: v.college, date: v.date, food: v.food, students: students.length ? students : (existing ? existing.students : []), status: v.status };
  if (existing) Object.assign(existing, base);
  else MOCK.ivRegistrations.push(Object.assign({ id: genId(MOCK.ivRegistrations, 'IVR') }, base));
  closeModal(); navigate('iv-registrations');
  showNotification('Registration saved successfully', 'success');
}
function deleteIvRegistration(id) {
  confirmDelete('Are you sure you want to delete registration ' + id + '?', `doDelete('ivRegistrations','${id}','Registration deleted successfully')`);
}

// ---------- IV BANNERS ----------
function ivBannerFields() {
  return [
    { name: 'id', type: 'hidden' },
    { name: 'name', label: 'Banner Name', required: true },
    { name: 'image', label: 'Image File' },
    { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], value: 'Active' }
  ];
}
function showIvBannerAddModal() {
  openFormModal({ title: 'Add Banner', submit: 'submitIvBanner', fields: ivBannerFields() });
}
function showIvBannerEditModal(id) {
  const b = MOCK.ivBanners.find(x => x.id === id);
  if (!b) return;
  openFormModal({ title: 'Edit Banner', submit: 'submitIvBanner', fields: ivBannerFields(), values: b });
}
function submitIvBanner() {
  const v = serializeForm('modal-form');
  if (!v.name) { showNotification('Banner name is required', 'error'); return; }
  const b = MOCK.ivBanners.find(x => x.id === v.id);
  const base = { name: v.name, image: v.image || '', status: v.status };
  if (b) Object.assign(b, base);
  else MOCK.ivBanners.push(Object.assign({ id: genId(MOCK.ivBanners, 'IVB') }, base));
  closeModal(); navigate('iv-banners');
  showNotification('Banner saved successfully', 'success');
}
function deleteIvBanner(id) {
  confirmDelete('Are you sure you want to delete banner ' + id + '?', `doDelete('ivBanners','${id}','Banner deleted successfully')`);
}

// ============ INIT ============
function initApp() {
  document.getElementById('app-page').style.display = 'none';
  buildSidebar();
}
document.addEventListener('DOMContentLoaded', initApp);
// ============================================
// EMPLOYEE CLIENT ASSIGNMENT & CONVERSATIONS
// ============================================
function getEmployeesForClient(clientId) {
  return (MOCK.clientAssignments || []).filter(a => a.clientId === clientId).map(a => MOCK.employees.find(e => e.id === a.employeeId)).filter(Boolean);
}
function getClientsForEmployee(employeeId) {
  return (MOCK.clientAssignments || []).filter(a => a.employeeId === employeeId).map(a => MOCK.clients.find(c => c.id === a.clientId)).filter(Boolean);
}
function getConversation(clientId, employeeId) {
  return (MOCK.clientMessages || []).find(c => c.clientId === clientId && c.employeeId === employeeId) || null;
}
function ensureConversation(clientId, employeeId) {
  let conv = getConversation(clientId, employeeId);
  if (!conv) {
    conv = { clientId, employeeId, messages: [{ from: 'client', text: 'Hello! Thanks for taking on this account.', time: nowTime() }] };
    MOCK.clientMessages.push(conv);
  }
  return conv;
}
function lastClientMessage(clientId) {
  let last = null;
  (MOCK.clientMessages || []).filter(c => c.clientId === clientId).forEach(c => {
    (c.messages || []).forEach(m => { last = m; });
  });
  return last;
}
function nowTime() {
  const d = new Date();
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return h + ':' + m + ' ' + ap;
}

function renderEmployeeClients() {
  let html = pageHeader('Clients – Assign & Monitor', 'Assign clients to employees and watch all their conversations', `<button class="btn btn-primary" onclick="showNotification('Use the Assign button to link clients to employees','info')"><i class="bx bx-help-circle"></i> Help</button>`);
  const assignedClients = new Set((MOCK.clientAssignments || []).map(a => a.clientId)).size;
  const assignedEmps = new Set((MOCK.clientAssignments || []).map(a => a.employeeId)).size;
  html += `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 mb-3">`;
  [{ l: 'Total Clients', v: MOCK.clients.length, ic: 'bx-user-voice', cls: 'bg-light-primary text-primary' },
   { l: 'Clients With Assignment', v: assignedClients, ic: 'bx-check-shield', cls: 'bg-light-success text-success' },
   { l: 'Active Employees', v: assignedEmps, ic: 'bx-group', cls: 'bg-light-info text-info' },
   { l: 'Total Assignments', v: (MOCK.clientAssignments || []).length, ic: 'bx-link', cls: 'bg-light-warning text-warning' }].forEach(s => {
    html += `<div class="col"><div class="stat-card"><div class="d-flex align-items-center"><div class="stat-content"><p class="mb-0 text-secondary">${s.l}</p><h4>${s.v}</h4></div><div class="stat-icon ${s.cls} ms-auto"><i class="bx ${s.ic}"></i></div></div></div></div>`;
  });
  html += `</div>`;
  html += `<div class="data-card"><div class="card-header"><h5>Client List – Employee Assignment</h5><input type="text" class="form-control" placeholder="Search..." style="width:200px;padding:0.4rem 0.7rem;font-size:12px;" oninput="searchTable(this,'empclient-tbody')"></div><div class="card-body"><div class="overflow-x"><table class="data-table"><thead><tr><th>ID</th><th>Client</th><th>Company</th><th>Location</th><th>Assigned Employees</th><th>Last Message</th><th>Actions</th></tr></thead><tbody id="empclient-tbody">`;
  MOCK.clients.forEach(c => {
    const emps = getEmployeesForClient(c.id);
    const last = lastClientMessage(c.id);
    const empNames = emps.length ? emps.map(e => `<span class="badge badge-secondary">${e.name}</span>`).join(' ') : '<span class="font-11 text-secondary">-</span>';
    const lastHtml = last ? `<div style="font-size:12px;color:var(--text-dark);max-width:220px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${last.text}</div><div class="font-11 text-secondary">${last.time}</div>` : '<span class="font-11 text-secondary">-</span>';
    html += `<tr><td><strong>${c.id}</strong></td><td>${c.name}</td><td>${c.company}</td><td>${c.location}</td><td style="min-width:180px;">${empNames}</td><td>${lastHtml}</td><td><button class="btn btn-sm btn-outline-primary" onclick="showClientAssignModal('${c.id}')"><i class="bx bx-user-plus"></i> Assign</button> <button class="btn btn-sm btn-outline-success" onclick="viewClientConversations('${c.id}')"><i class="bx bx-message-rounded"></i> Watch</button></td></tr>`;
  });
  html += `</tbody></table></div></div></div>`;
  return html;
}

// ---------- ASSIGN POPUP (employee list from superadmin page) ----------
function showClientAssignModal(clientId) {
  const client = MOCK.clients.find(c => c.id === clientId);
  if (!client) return;
  let rows = `<table class="data-table"><thead><tr><th style="width:30px;"></th><th>Employee</th><th>ID</th><th>Role</th><th>Assigned Clients</th><th>Status</th></tr></thead><tbody>`;
  MOCK.employees.forEach(emp => {
    const isAssigned = (MOCK.clientAssignments || []).some(a => a.clientId === clientId && a.employeeId === emp.id);
    const empClientCount = (MOCK.clientAssignments || []).filter(a => a.employeeId === emp.id).length;
    rows += `<tr id="assign-row-${clientId}-${emp.id}">
      <td><input type="checkbox" ${isAssigned ? 'checked' : ''} onchange="toggleEmployeeAssignment('${clientId}','${emp.id}',this.checked)"></td>
      <td><div class="d-flex align-items-center gap-2"><div class="user-avatar" style="width:30px;height:30px;font-size:11px;">${emp.firstName.charAt(0)}</div><div><div style="font-weight:600">${emp.name}</div><div class="font-11 text-secondary">${emp.companyEmail || emp.email}</div></div></div></td>
      <td><strong>${emp.id}</strong></td><td>${emp.role}</td><td><span class="badge badge-info">${empClientCount}</span></td><td><span class="badge ${emp.status === 'Active' ? 'badge-success' : 'badge-danger'}">${emp.status}</span></td></tr>`;
  });
  rows += `</tbody></table>`;
  const assignedCount = (MOCK.clientAssignments || []).filter(a => a.clientId === clientId).length;
  const body = `<div style="font-size:13px;color:var(--text-secondary);margin-bottom:1rem;">Select employees who will work for <strong>${client.name}</strong>. One employee can work for multiple clients, and one client can be assigned to multiple employees.</div>
    <div class="overflow-x" style="max-height:320px;overflow-y:auto;">${rows}</div>
    <div id="assign-count" style="margin-top:0.75rem;font-size:13px;color:var(--text-dark);"><strong>${assignedCount}</strong> employee(s) assigned</div>`;
  openModal(modalHeader('Assign Employees – ' + client.name) + `<div class="modal-body">${body}</div>` + modalFooter('closeModal', 'Done'));
}

function toggleEmployeeAssignment(clientId, employeeId, checked) {
  const idx = MOCK.clientAssignments.findIndex(a => a.clientId === clientId && a.employeeId === employeeId);
  if (checked) {
    if (idx === -1) {
      MOCK.clientAssignments.push({ clientId, employeeId });
      ensureConversation(clientId, employeeId);
      showNotification('Client assigned to employee', 'success');
    }
  } else {
    if (idx !== -1) {
      MOCK.clientAssignments.splice(idx, 1);
      showNotification('Assignment removed', 'info');
    }
  }
  const count = MOCK.clientAssignments.filter(a => a.clientId === clientId).length;
  const el = document.getElementById('assign-count');
  if (el) el.innerHTML = `<strong>${count}</strong> employee(s) assigned`;
}

// ---------- WATCH CONVERSATIONS ----------
function viewClientConversations(clientId) {
  const client = MOCK.clients.find(c => c.id === clientId);
  if (!client) return;
  const empList = getEmployeesForClient(clientId);
  if (empList.length === 0) {
    openModal(modalHeader('Conversations – ' + client.name) + `<div class="modal-body"><div class="empty-state"><i class="bx bxs-chat"></i><p>No employees assigned yet. Assign employees to start conversations.</p></div></div>` + modalFooter('closeModal', 'Close'));
    return;
  }
  let opts = '<option value="">-- Select employee --</option>';
  empList.forEach(emp => { opts += `<option value="${emp.id}">${emp.name}</option>`; });
  const body = `<div style="margin-bottom:1rem;"><label class="form-label">Employee</label><select id="conv-select" class="form-control" onchange="renderConversationThread('${clientId}')">${opts}</select></div>
    <div id="conv-thread" style="min-height:200px;"></div>
    <div style="display:flex;gap:8px;margin-top:1rem;"><input type="text" id="conv-input" class="form-control" placeholder="Type a message as the employee..."><button type="button" class="btn btn-primary" onclick="sendClientMessage('${clientId}')"><i class="bx bx-send"></i></button></div>`;
  openModal(modalHeader('Conversations – ' + client.name) + `<div class="modal-body">${body}</div>` + modalFooter('closeModal', 'Close'));
}

function renderConversationThread(clientId) {
  const sel = document.getElementById('conv-select');
  const empId = sel ? sel.value : '';
  const thread = document.getElementById('conv-thread');
  if (!thread) return;
  if (!empId) {
    thread.innerHTML = '<div class="text-center" style="padding:2rem;color:#aaa;font-size:13px;">Select an employee to view the conversation</div>';
    return;
  }
  const conv = ensureConversation(clientId, empId);
  const emp = MOCK.employees.find(e => e.id === empId);
  let html = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:0.75rem;font-size:13px;color:var(--text-dark);"><i class="bx bxs-chat"></i> Conversation with <strong>${emp ? emp.name : empId}</strong></div>`;
  html += `<div style="background:#f7f8fc;border:1px solid var(--border-color);border-radius:10px;padding:1rem;max-height:300px;overflow-y:auto;">`;
  (conv.messages || []).forEach(m => {
    const mine = m.from === 'employee';
    html += `<div style="display:flex;justify-content:${mine ? 'flex-end' : 'flex-start'};margin-bottom:0.6rem;">`;
    html += `<div style="max-width:75%;background:${mine ? 'var(--primary)' : '#fff'};color:${mine ? '#fff' : 'var(--text-dark)'};padding:0.45rem 0.75rem;border-radius:${mine ? '12px 12px 2px 12px' : '12px 12px 12px 2px'};box-shadow:0 1px 2px rgba(0,0,0,0.08);font-size:13px;"><div>${m.text}</div><div style="font-size:10px;opacity:0.75;margin-top:3px;text-align:${mine ? 'right' : 'left'};">${m.time}</div></div></div>`;
  });
  html += `</div>`;
  thread.innerHTML = html;
}

function sendClientMessage(clientId) {
  const sel = document.getElementById('conv-select');
  const empId = sel ? sel.value : '';
  const input = document.getElementById('conv-input');
  const text = input ? input.value.trim() : '';
  if (!empId) { showNotification('Select an employee first', 'error'); return; }
  if (!text) return;
  const conv = ensureConversation(clientId, empId);
  conv.messages.push({ from: 'employee', text, time: nowTime() });
  if (input) input.value = '';
  renderConversationThread(clientId);
}