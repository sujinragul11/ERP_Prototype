const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database roriri_erp_db...');

  // 1. Clean existing data
  await prisma.notification.deleteMany();
  await prisma.mouDetail.deleteMany();
  await prisma.dailyReport.deleteMany();
  await prisma.attendance.deleteMany();
  await prisma.influencerPayout.deleteMany();
  await prisma.influencerLead.deleteMany();
  await prisma.influencerCampaign.deleteMany();
  await prisma.influencerProfile.deleteMany();
  await prisma.freelancerDeliverable.deleteMany();
  await prisma.freelancerTimeEntry.deleteMany();
  await prisma.freelancerProfile.deleteMany();
  await prisma.jobApplication.deleteMany();
  await prisma.jobOpening.deleteMany();
  await prisma.candidateProfile.deleteMany();
  await prisma.academyMiniProject.deleteMany();
  await prisma.academyEnrollment.deleteMany();
  await prisma.academyTopic.deleteMany();
  await prisma.academySubject.deleteMany();
  await prisma.academyCourse.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.expenseSubCategory.deleteMany();
  await prisma.expenseCategory.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.message.deleteMany();
  await prisma.conversationParticipant.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.taskAssignment.deleteMany();
  await prisma.projectMilestone.deleteMany();
  await prisma.projectAssignment.deleteMany();
  await prisma.project.deleteMany();
  await prisma.ivVisitor.deleteMany();
  await prisma.ivRegistration.deleteMany();
  await prisma.enquiryUpdate.deleteMany();
  await prisma.enquiry.deleteMany();
  await prisma.workspaceMember.deleteMany();
  await prisma.workspace.deleteMany();
  await prisma.userHistory.deleteMany();
  await prisma.userRole.deleteMany();
  await prisma.user.deleteMany();
  await prisma.jobTitle.deleteMany();
  await prisma.department.deleteMany();
  await prisma.company.deleteMany();

  // 2. Companies / Entities
  const companyMap = {};
  const companiesData = [
    { id: 1, name: 'RORIRI SOFTWARE SOLUTIONS', type: 'software', icon: 'lni-laptop-phone', color: '#4e73df', income: '0' },
    { id: 2, name: 'NEXGEN IT COLLEGE', type: 'college', icon: 'lni-library', color: '#e74a3b', income: '0' },
    { id: 3, name: 'NEXGEN IT ACADEMY', type: 'academy', icon: 'lni-code-alt', color: '#1cc88a', income: '1,25,000' },
    { id: 4, name: 'RORIRI FOUNDATION', type: 'foundation', icon: 'lni-heart', color: '#e74a3b', income: '0' },
    { id: 5, name: 'RORIRI GROUPS', type: 'software', icon: 'lni-group', color: '#f6c23e', income: '0' },
    { id: 6, name: 'RIYA IAS ACADEMY', type: 'academy', icon: 'lni-surf-board', color: '#36b9cc', income: '0' },
    { id: 7, name: 'RIYA NEET ACADEMY', type: 'academy', icon: 'lni-target', color: '#1cc88a', income: '0' },
    { id: 8, name: 'RIYA CONSULTANCY', type: 'consultancy', icon: 'lni-star-half', color: '#f6c23e', income: '0' },
    { id: 9, name: 'RITHISH FARMS', type: 'farms', icon: 'lni-store', color: '#f6c23e', income: '0' },
    { id: 10, name: 'NEXEMY', type: 'nexemy', icon: 'lni-globe', color: '#1cc88a', income: '32,500' },
    { id: 11, name: 'WORKSPACE', type: 'workspace_cabin', icon: 'lni-layout', color: '#6f42c1', income: '0' }
  ];

  for (const c of companiesData) {
    const comp = await prisma.company.create({
      data: {
        id: c.id,
        name: c.name,
        type: c.type,
        icon: c.icon,
        color: c.color,
        income: c.income,
        status: 'active'
      }
    });
    companyMap[c.id] = comp;
  }
  console.log(`✅ Created ${companiesData.length} companies`);

  // 3. Departments & Job Titles
  const depts = [
    { name: 'Development', code: 'DEV', icon: 'bx bx-code-alt', roles: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile App Developer', 'Tech Lead'] },
    { name: 'Design & UI/UX', code: 'UIUX', icon: 'bx bx-palette', roles: ['UI Designer', 'UX Researcher', 'Graphic Designer', 'Product Designer'] },
    { name: 'Quality Assurance', code: 'QA', icon: 'bx bx-check-shield', roles: ['QA Engineer', 'Automation Tester', 'Security Auditor'] },
    { name: 'Human Resources', code: 'HR', icon: 'bx bx-user-pin', roles: ['HR Manager', 'Talent Acquisition', 'Recruiter'] },
    { name: 'Marketing & Sales', code: 'MKT', icon: 'bx bx-line-chart', roles: ['Digital Marketer', 'SEO Specialist', 'Content Creator'] },
    { name: 'Training & Academy', code: 'EDU', icon: 'bx bxs-graduation', roles: ['Academy Head', 'Trainer', 'Mentor', 'Course Coordinator'] }
  ];

  const deptMap = {};
  for (const d of depts) {
    const createdDept = await prisma.department.create({
      data: {
        name: d.name,
        code: d.code,
        icon: d.icon,
        companyId: 1
      }
    });
    deptMap[d.name] = createdDept;
    for (const r of d.roles) {
      await prisma.jobTitle.create({
        data: {
          name: r,
          departmentId: createdDept.id
        }
      });
    }
  }
  console.log('✅ Created departments and job titles');

  // Password hash for demo users ('pass')
  const defaultPasswordHash = await bcrypt.hash('pass', 10);

  // 4. Users (Admins, Employees, Clients, Trainees, Freelancers)
  // Super Admin
  const adminUser = await prisma.user.create({
    data: {
      username: 'ragu',
      name: 'Ragupathi',
      firstName: 'Ragupathi',
      email: 'ragu@roririsoft.com',
      phone: '9840123450',
      type: 'employee',
      authType: 'password',
      password: defaultPasswordHash,
      companyId: 1,
      departmentId: deptMap['Development']?.id,
      status: 'active',
      roles: {
        create: [{ role: 'Super Admin' }]
      }
    }
  });

  const priyaUser = await prisma.user.create({
    data: {
      username: 'priya',
      name: 'Priya',
      firstName: 'Priya',
      email: 'priya@roririsoft.com',
      phone: '9840123451',
      type: 'employee',
      authType: 'password',
      password: defaultPasswordHash,
      companyId: 1,
      status: 'active',
      roles: {
        create: [{ role: 'Admin' }]
      }
    }
  });

  // Employees
  const employeesData = [
    { username: 'anushiya', firstName: 'Anushiya', lastName: 'P', name: 'Anushiya P', role: 'Developer', email: 'anushiya@roririsoft.com', phone: '8056775934', dept: 'Development', payroll: '15,000' },
    { username: 'hari', firstName: 'Hari', lastName: 'K', name: 'Hari K', role: 'Developer', email: 'hari@roririsoft.com', phone: '9655335281', dept: 'Development', payroll: '18,000' },
    { username: 'sherlinjr', firstName: 'Sherlin', lastName: 'JR', name: 'Sherlin JR', role: 'Developer', email: 'sherlin@roririsoft.com', phone: '6282657440', dept: 'Development', payroll: '12,000' },
    { username: 'ashat', firstName: 'Asha', lastName: 'T', name: 'Asha T', role: 'Digital Marketing', email: 'ashat@roririsoft.com', phone: '9943862030', dept: 'Marketing & Sales', payroll: '14,000' },
    { username: 'emp', firstName: 'Emp', lastName: '001', name: 'Emp 001', role: 'Designer', email: 'emp@roririsoft.com', phone: '0987654321', dept: 'Design & UI/UX', payroll: '10,000' },
    { username: 'meera', firstName: 'Meera', lastName: 'S', name: 'Meera S', role: 'HR Manager', email: 'meera@roririsoft.com', phone: '9765453210', dept: 'Human Resources', payroll: '22,000' }
  ];

  const empMap = {};
  for (const emp of employeesData) {
    const created = await prisma.user.create({
      data: {
        username: emp.username,
        name: emp.name,
        firstName: emp.firstName,
        lastName: emp.lastName,
        email: emp.email,
        phone: emp.phone,
        type: 'employee',
        authType: 'password',
        password: defaultPasswordHash,
        companyId: 1,
        departmentId: deptMap[emp.dept]?.id,
        payroll: emp.payroll,
        status: 'active',
        roles: {
          create: [{ role: emp.role }]
        }
      }
    });
    empMap[emp.name] = created;
  }
  console.log(`✅ Created ${employeesData.length} employees`);

  // Clients
  const clientsData = [
    { username: 'jeno', name: 'Jenifer', companyTitle: 'Jeno University', location: 'Tirunelveli', email: 'jeniferc312003@gmail.com', phone: '09344555678' },
    { username: 'abdul', name: 'Abdul', companyTitle: 'ABC Corporation', location: 'Madurai', email: 'abdul@gmail.com', phone: '9344455678' },
    { username: 'bramman', name: 'Bramman', companyTitle: 'XYZ Industries', location: 'Chennai', email: 'bramman@gmail.com', phone: '9344455679' },
    { username: 'venkat', name: 'Venkat', companyTitle: 'TechStart Solutions', location: 'Bangalore', email: 'venkat@gmail.com', phone: '9344455680' }
  ];

  const clientMap = {};
  for (const cl of clientsData) {
    const createdClient = await prisma.user.create({
      data: {
        username: cl.username,
        name: cl.name,
        firstName: cl.name,
        companyTitle: cl.companyTitle,
        location: cl.location,
        email: cl.email,
        phone: cl.phone,
        type: 'client',
        authType: 'password',
        password: defaultPasswordHash,
        status: 'active',
        roles: {
          create: [{ role: 'Client' }]
        }
      }
    });
    clientMap[cl.companyTitle] = createdClient;
  }
  console.log(`✅ Created ${clientsData.length} clients`);

  // 5. Projects
  const projectsData = [
    {
      name: 'College ERP Website',
      clientTitle: 'Jeno University',
      services: 'ERP, Logo Design',
      techStack: 'PHP, React JS',
      amount: 150000,
      balance: 0,
      duration: '8 months',
      status: 'in_progress',
      payStatus: 'paid',
      devs: ['Anushiya P', 'Hari K']
    },
    {
      name: 'Ecommerce Website + App',
      clientTitle: 'ABC Corporation',
      services: 'E-Commerce, Mobile App',
      techStack: 'Node.js, Flutter',
      amount: 200000,
      balance: 80000,
      duration: '10 months',
      status: 'in_progress',
      payStatus: 'partial',
      devs: ['Anushiya P']
    },
    {
      name: 'College Website',
      clientTitle: 'XYZ Industries',
      services: 'Website (Dynamic)',
      techStack: 'WordPress, PHP',
      amount: 120000,
      balance: 21500,
      duration: '6 months',
      status: 'delivered',
      payStatus: 'paid',
      devs: ['Hari K']
    }
  ];

  for (const p of projectsData) {
    const client = clientMap[p.clientTitle];
    const project = await prisma.project.create({
      data: {
        name: p.name,
        companyId: 1,
        clientUserId: client?.id,
        clientName: client?.name,
        clientEmail: client?.email,
        services: p.services,
        techStack: p.techStack,
        amount: p.amount,
        balance: p.balance,
        duration: p.duration,
        status: p.status,
        payStatus: p.payStatus,
        startDate: new Date(),
        dueDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000)
      }
    });

    for (const devName of p.devs) {
      const emp = empMap[devName];
      if (emp) {
        await prisma.projectAssignment.create({
          data: {
            projectId: project.id,
            assigneeUserId: emp.id,
            assigneeType: 'employee',
            roleOnProject: 'Developer',
            status: 'active'
          }
        });
      }
    }
  }
  console.log(`✅ Created ${projectsData.length} projects`);

  // 6. Tasks
  if (empMap['Anushiya P']) {
    await prisma.taskAssignment.createMany({
      data: [
        {
          projectName: 'College ERP Website',
          assigneeUserId: empMap['Anushiya P'].id,
          task: 'Fix payment module bug & webhook verification',
          priority: 'high',
          status: 'in_progress',
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
        },
        {
          projectName: 'Ecommerce Website + App',
          assigneeUserId: empMap['Anushiya P'].id,
          task: 'Design landing page responsive layout',
          priority: 'medium',
          status: 'todo',
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
        }
      ]
    });
  }

  // 7. Academy Courses, Subjects, Topics & Trainees
  const fullStackCourse = await prisma.academyCourse.create({
    data: {
      code: 'CO1',
      name: 'Full Stack Development',
      duration: '6 months',
      fee: 45000,
      status: 'Available',
      subjects: {
        create: [
          {
            name: 'HTML & CSS',
            topics: {
              create: [
                { name: 'HTML5 Semantic Tags', order: 1 },
                { name: 'CSS Flexbox & Grid', order: 2 }
              ]
            }
          },
          {
            name: 'JavaScript',
            topics: {
              create: [
                { name: 'ES6+ Async/Await', order: 1 },
                { name: 'DOM & Events', order: 2 }
              ]
            }
          },
          {
            name: 'Node.js & Express',
            topics: {
              create: [
                { name: 'REST APIs & JWT', order: 1 },
                { name: 'PostgreSQL & Prisma', order: 2 }
              ]
            }
          }
        ]
      }
    }
  });

  const mernCourse = await prisma.academyCourse.create({
    data: {
      code: 'CO2',
      name: 'Front End (MERN)',
      duration: '5 months',
      fee: 40000,
      status: 'Available'
    }
  });

  // Trainees
  const traineeUser = await prisma.user.create({
    data: {
      username: 'deepika',
      name: 'Deepika R',
      firstName: 'Deepika',
      email: 'deepika@gmail.com',
      phone: '9000000001',
      type: 'trainee',
      authType: 'password',
      password: defaultPasswordHash,
      status: 'active',
      roles: { create: [{ role: 'Trainee' }] }
    }
  });

  await prisma.academyEnrollment.create({
    data: {
      traineeUserId: traineeUser.id,
      courseId: fullStackCourse.id,
      feePaid: 45000,
      feeDue: 0,
      status: 'Active',
      miniProjects: {
        create: [
          { name: 'Blood Bank Management Portal', status: 'In Progress' }
        ]
      }
    }
  });
  console.log('✅ Created Academy courses and trainees');

  // 8. Freelancers
  const freelancerUser = await prisma.user.create({
    data: {
      username: 'arunfl',
      name: 'Arun Kumar',
      firstName: 'Arun',
      lastName: 'Kumar',
      email: 'arun.freelancer@gmail.com',
      phone: '9840123456',
      type: 'freelancer',
      authType: 'password',
      password: defaultPasswordHash,
      status: 'active',
      roles: { create: [{ role: 'Freelancer' }] },
      freelancerProfile: {
        create: {
          code: 'FL001',
          designation: 'Senior Full Stack Developer',
          skills: 'React, Node.js, Python, PostgreSQL, Docker, AWS',
          hourlyRate: 1200,
          rating: 4.9,
          availability: 'Available',
          completedProjects: 8,
          timeEntries: {
            create: [
              { taskDescription: 'Payment Gateway Integration & Webhooks', hours: 6.5, status: 'Approved' }
            ]
          }
        }
      }
    }
  });
  console.log('✅ Created Freelancer profile');

  // 9. Influencers
  const influencerUser = await prisma.user.create({
    data: {
      username: 'techguru',
      name: 'Ravi Tech',
      firstName: 'Ravi',
      email: 'ravi.tech@creator.com',
      phone: '9840199999',
      type: 'influencer',
      authType: 'password',
      password: defaultPasswordHash,
      status: 'active',
      roles: { create: [{ role: 'Influencer' }] },
      influencerProfile: {
        create: {
          code: 'INF001',
          handle: '@ravitech_official',
          platform: 'Instagram / YouTube',
          followerCount: 125000,
          verificationStatus: 'Verified',
          tier: 'Gold',
          points: 850,
          approvedRevenue: 35000,
          disbursableBalance: 12500
        }
      }
    }
  });
  console.log('✅ Created Influencer profile');

  // 10. Consultancies Candidate
  const candidateUser = await prisma.user.create({
    data: {
      username: 'can_arun',
      name: 'Arun Candidate',
      firstName: 'Arun',
      email: 'arun.candidate@email.com',
      phone: '9876543210',
      type: 'candidate',
      authType: 'password',
      password: defaultPasswordHash,
      college: 'Anna University',
      qualification: 'B.Tech Computer Science',
      gradYear: '2024',
      status: 'active',
      candidateProfile: {
        create: {
          candidateId: 'CAN-1001',
          preferredRole: 'Full Stack Developer',
          preferredLocation: 'Chennai / Bangalore',
          profileCompletion: 90,
          readinessScore: 85.5
        }
      }
    }
  });
  console.log('✅ Created Candidate profile');

  // 11. Enquiries
  await prisma.enquiry.createMany({
    data: [
      {
        name: 'Karthik Raja',
        email: 'karthik.raja@gmail.com',
        phone: '9840112233',
        organization: 'Apex Solutions',
        type: 'project',
        message: 'Looking for enterprise custom ERP development quote',
        sourcePage: 'index.html',
        status: 'new'
      },
      {
        name: 'Sneha L',
        email: 'sneha@gmail.com',
        phone: '9840112244',
        organization: 'Government College of Engineering',
        type: 'internship',
        message: 'Applying for Full Stack Web Developer internship',
        sourcePage: 'intern.html',
        status: 'contacted'
      }
    ]
  });

  // 12. Workspaces
  await prisma.workspace.createMany({
    data: [
      { code: 'CAB-01', name: 'Cabin A1 (Executive Suite)', type: 'Cabin', capacity: 4, leadName: 'Anushiya P', status: 'Occupied' },
      { code: 'CAB-02', name: 'Cabin B2', type: 'Cabin', capacity: 6, leadName: 'Hari K', status: 'Available' },
      { code: 'DESK-HOT', name: 'Open Hot Desks (10 Seats)', type: 'Desk Area', capacity: 10, leadName: 'Meera S', status: 'Available' }
    ]
  });

  // 13. Transactions / Financial Ledger
  await prisma.transaction.createMany({
    data: [
      { code: 'TXN-001', refType: 'project', direction: 'credit', amount: 150000, mode: 'Net Banking', txnId: 'NB998811', status: 'Paid', notes: 'Project Milestone M1 - College ERP Website' },
      { code: 'TXN-002', refType: 'academy', direction: 'credit', amount: 45000, mode: 'GPay', txnId: 'GP776655', status: 'Paid', notes: 'Course Fee - Deepika R' },
      { code: 'TXN-003', refType: 'freelancer', direction: 'debit', amount: 18000, mode: 'Bank Transfer', txnId: 'NEFT443322', status: 'Paid', notes: 'Freelancer Payout - Arun Kumar' },
      { code: 'TXN-004', refType: 'expense', direction: 'debit', amount: 8500, mode: 'Cash', txnId: 'CSH001', status: 'Paid', notes: 'Office High-Speed Internet & Server Infrastructure' }
    ]
  });

  // 14. Attendance Sample
  if (empMap['Anushiya P']) {
    await prisma.attendance.createMany({
      data: [
        { userId: empMap['Anushiya P'].id, checkIn: '09:05 AM', checkOut: '06:15 PM', hours: '9h 10m', status: 'Present', date: new Date() }
      ]
    });
  }

  console.log('🎉 Database seeding completed successfully in roriri_erp_db!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
