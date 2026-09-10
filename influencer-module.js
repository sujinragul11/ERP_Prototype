/* ============================================================================
   RORIRI ERP - Influencer Admin Portal Module (Frontend-Only Prototype)
   ============================================================================ */

(function() {
  'use strict';

  // Ensure MOCK namespace exists
  if (typeof window.MOCK === 'undefined') {
    window.MOCK = { nextId: 100 };
  }

  // Current admin role simulation state
  window.INFLUENCER_ROLE = 'Super Admin'; // Super Admin | Marketing Admin | Campaign Manager | Finance Admin | Support Admin
  window.INFLUENCER_CURRENT_CAMPAIGN_STEP = 1;
  window.INFLUENCER_ACTIVE_CAMPAIGN_ID = 'CAMP-001';
  window.INFLUENCER_ACTIVE_INFLUENCER_ID = 'INF-001';
  window.INFLUENCER_ACTIVE_TAB = 'overview';

  // Helper date utility
  function getTodayStr(offsetDays) {
    var d = new Date();
    if (offsetDays) d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  }

  // ============================================================================
  // 1. MOCK DATA INITIALIZATION (15+ Influencers, 8+ Campaigns, etc.)
  // ============================================================================
  if (!MOCK.influencer) {
    MOCK.influencer = {
      influencers: [
        {
          id: 'INF-001',
          name: 'Arun Kumar',
          handle: '@arun_techvlogs',
          email: 'arun.tech@gmail.com',
          phone: '+91 98401 22334',
          niche: 'Technology & Gadgets',
          platform: 'YouTube & Instagram',
          primaryPlatform: 'YouTube',
          followers: '450K',
          followerCount: 450000,
          engagementRate: '4.8%',
          avgViews: '85,000',
          location: 'Chennai, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 6,
          leadsGenerated: 142,
          totalEarnings: '₹1,25,000',
          joinDate: '2025-01-15',
          bio: 'Tech enthusiast, reviewing latest SaaS, hardware, and developer ecosystems. 10+ years programming background.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@ArunTechVlogs', url: 'https://youtube.com/@aruntech', followers: '320K', engagement: '5.2%', avgViews: '85K' },
            { platform: 'Instagram', handle: '@arun_techvlogs', url: 'https://instagram.com/arun_tech', followers: '130K', engagement: '4.4%', avgViews: '45K' },
            { platform: 'LinkedIn', handle: 'arunkumar-tech', url: 'https://linkedin.com/in/arunkumar-tech', followers: '28K', engagement: '6.1%', avgViews: '12K' }
          ]
        },
        {
          id: 'INF-002',
          name: 'Priya Sundaram',
          handle: '@priya_edtech_daily',
          email: 'priya.edtech@gmail.com',
          phone: '+91 98402 33445',
          niche: 'Education & Career',
          platform: 'Instagram & LinkedIn',
          primaryPlatform: 'Instagram',
          followers: '280K',
          followerCount: 280000,
          engagementRate: '5.6%',
          avgViews: '62,000',
          location: 'Coimbatore, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 8,
          leadsGenerated: 215,
          totalEarnings: '₹1,80,000',
          joinDate: '2024-11-10',
          bio: 'Guiding students toward modern IT & engineering careers. UPSC & EdTech education evangelist.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@priya_edtech_daily', url: 'https://instagram.com/priya_edtech', followers: '210K', engagement: '5.8%', avgViews: '62K' },
            { platform: 'LinkedIn', handle: 'priyasundaram-edu', url: 'https://linkedin.com/in/priyasundaram-edu', followers: '70K', engagement: '5.2%', avgViews: '25K' }
          ]
        },
        {
          id: 'INF-003',
          name: 'Vignesh M',
          handle: '@vignesh_coder',
          email: 'vignesh.dev@gmail.com',
          phone: '+91 98403 44556',
          niche: 'Software Development & AI',
          platform: 'YouTube',
          primaryPlatform: 'YouTube',
          followers: '520K',
          followerCount: 520000,
          engagementRate: '6.2%',
          avgViews: '110,000',
          location: 'Bangalore, Karnataka',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 5,
          leadsGenerated: 180,
          totalEarnings: '₹1,60,000',
          joinDate: '2025-02-01',
          bio: 'Full Stack & AI development tutorials, code reviews, and enterprise architectural deep dives.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@VigneshCoder', url: 'https://youtube.com/@vigneshcoder', followers: '450K', engagement: '6.4%', avgViews: '110K' },
            { platform: 'Twitter/X', handle: '@vignesh_dev', url: 'https://x.com/vignesh_dev', followers: '70K', engagement: '4.9%', avgViews: '30K' }
          ]
        },
        {
          id: 'INF-004',
          name: 'Sneha Latha',
          handle: '@sneha_lifestyle_tips',
          email: 'sneha.lifestyle@gmail.com',
          phone: '+91 98404 55667',
          niche: 'Lifestyle & Productivity',
          platform: 'Instagram',
          primaryPlatform: 'Instagram',
          followers: '340K',
          followerCount: 340000,
          engagementRate: '4.1%',
          avgViews: '48,000',
          location: 'Madurai, Tamil Nadu',
          verificationStatus: 'Under Review',
          status: 'Active',
          campaignsCount: 3,
          leadsGenerated: 64,
          totalEarnings: '₹55,000',
          joinDate: '2025-02-20',
          bio: 'Work-life balance, productivity setups, and student empowerment content creator.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@sneha_lifestyle_tips', url: 'https://instagram.com/sneha', followers: '340K', engagement: '4.1%', avgViews: '48K' }
          ]
        },
        {
          id: 'INF-005',
          name: 'Karthik Raja',
          handle: '@karthik_fitness_fit',
          email: 'karthik.fitness@gmail.com',
          phone: '+91 98405 66778',
          niche: 'Health, Organic & Nutrition',
          platform: 'Instagram & YouTube',
          primaryPlatform: 'Instagram',
          followers: '190K',
          followerCount: 190000,
          engagementRate: '5.0%',
          avgViews: '35,000',
          location: 'Tirunelveli, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 4,
          leadsGenerated: 92,
          totalEarnings: '₹72,000',
          joinDate: '2025-01-28',
          bio: 'Certified nutrition specialist promoting organic farm harvests, stamina training, and clean eating.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@karthik_fitness_fit', url: 'https://instagram.com/karthik', followers: '140K', engagement: '5.2%', avgViews: '35K' },
            { platform: 'YouTube', handle: '@KarthikFitness', url: 'https://youtube.com/@karthikfitness', followers: '50K', engagement: '4.6%', avgViews: '18K' }
          ]
        },
        {
          id: 'INF-006',
          name: 'Divya Bharathi',
          handle: '@divya_campus_life',
          email: 'divya.campus@gmail.com',
          phone: '+91 98406 77889',
          niche: 'Campus Life & Education',
          platform: 'Instagram',
          primaryPlatform: 'Instagram',
          followers: '115K',
          followerCount: 115000,
          engagementRate: '6.4%',
          avgViews: '40,000',
          location: 'Trichy, Tamil Nadu',
          verificationStatus: 'Pending',
          status: 'Pending',
          campaignsCount: 1,
          leadsGenerated: 28,
          totalEarnings: '₹15,000',
          joinDate: '2025-03-01',
          bio: 'College youth creator covering engineering hackathons, hostel life hacks, and campus placements.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@divya_campus_life', url: 'https://instagram.com/divya', followers: '115K', engagement: '6.4%', avgViews: '40K' }
          ]
        },
        {
          id: 'INF-007',
          name: 'Rahul Sharma',
          handle: '@rahul_cloud_architect',
          email: 'rahul.cloud@gmail.com',
          phone: '+91 98407 88990',
          niche: 'Enterprise Cloud & DevOps',
          platform: 'LinkedIn & YouTube',
          primaryPlatform: 'LinkedIn',
          followers: '95K',
          followerCount: 95000,
          engagementRate: '5.8%',
          avgViews: '30,000',
          location: 'Hyderabad, Telangana',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 4,
          leadsGenerated: 110,
          totalEarnings: '₹1,40,000',
          joinDate: '2024-12-05',
          bio: 'AWS Certified Solutions Architect. Demystifying multi-cloud ERP deployments and Kubernetes.',
          socialAccounts: [
            { platform: 'LinkedIn', handle: 'rahulsharma-cloud', url: 'https://linkedin.com/in/rahul', followers: '75K', engagement: '6.2%', avgViews: '30K' },
            { platform: 'YouTube', handle: '@CloudWithRahul', url: 'https://youtube.com/@cloudrahul', followers: '20K', engagement: '4.8%', avgViews: '12K' }
          ]
        },
        {
          id: 'INF-008',
          name: 'Pooja Hegde R',
          handle: '@pooja_biz_growth',
          email: 'pooja.biz@gmail.com',
          phone: '+91 98408 99001',
          niche: 'Business Growth & Finance',
          platform: 'Instagram & LinkedIn',
          primaryPlatform: 'Instagram',
          followers: '210K',
          followerCount: 210000,
          engagementRate: '4.3%',
          avgViews: '42,000',
          location: 'Chennai, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 5,
          leadsGenerated: 88,
          totalEarnings: '₹95,000',
          joinDate: '2025-01-08',
          bio: 'Micro-consultant sharing SME automation secrets, ERP toolkits, and cashflow optimization tips.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@pooja_biz_growth', url: 'https://instagram.com/poojabiz', followers: '150K', engagement: '4.5%', avgViews: '42K' },
            { platform: 'LinkedIn', handle: 'poojahegde-biz', url: 'https://linkedin.com/in/poojabiz', followers: '60K', engagement: '3.9%', avgViews: '15K' }
          ]
        },
        {
          id: 'INF-009',
          name: 'Suresh Raina M',
          handle: '@suresh_civil_services',
          email: 'suresh.civil@gmail.com',
          phone: '+91 98409 00112',
          niche: 'Education & IAS Coaching',
          platform: 'YouTube',
          primaryPlatform: 'YouTube',
          followers: '680K',
          followerCount: 680000,
          engagementRate: '6.5%',
          avgViews: '140,000',
          location: 'Tirunelveli, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 6,
          leadsGenerated: 340,
          totalEarnings: '₹2,40,000',
          joinDate: '2024-10-12',
          bio: 'Top-tier IAS & TNPSC mentor with daily current affairs digests and scholarship announcements.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@SureshIASPrep', url: 'https://youtube.com/@sureshias', followers: '680K', engagement: '6.5%', avgViews: '140K' }
          ]
        },
        {
          id: 'INF-010',
          name: 'Meera Nambiar',
          handle: '@meera_green_living',
          email: 'meera.green@gmail.com',
          phone: '+91 98410 11223',
          niche: 'Health, Organic & Nutrition',
          platform: 'Instagram',
          primaryPlatform: 'Instagram',
          followers: '160K',
          followerCount: 160000,
          engagementRate: '4.7%',
          avgViews: '32,000',
          location: 'Kanyakumari, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 3,
          leadsGenerated: 58,
          totalEarnings: '₹48,000',
          joinDate: '2025-02-14',
          bio: 'Sustainable lifestyle, native rice varieties, and farm-to-table natural dairy practices.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@meera_green_living', url: 'https://instagram.com/meeragreen', followers: '160K', engagement: '4.7%', avgViews: '32K' }
          ]
        },
        {
          id: 'INF-011',
          name: 'Vikram Seth',
          handle: '@vikram_gamedev',
          email: 'vikram.games@gmail.com',
          phone: '+91 98411 22334',
          niche: 'Gaming & Tech',
          platform: 'YouTube & Discord',
          primaryPlatform: 'YouTube',
          followers: '310K',
          followerCount: 310000,
          engagementRate: '5.3%',
          avgViews: '70,000',
          location: 'Coimbatore, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 2,
          leadsGenerated: 45,
          totalEarnings: '₹40,000',
          joinDate: '2025-02-18',
          bio: 'Unity & Unreal Engine game architecture tutorials and live coding streams.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@VikramGameDev', url: 'https://youtube.com/@vikramgames', followers: '310K', engagement: '5.3%', avgViews: '70K' }
          ]
        },
        {
          id: 'INF-012',
          name: 'Ananya Roy',
          handle: '@ananya_ui_ux',
          email: 'ananya.design@gmail.com',
          phone: '+91 98412 33445',
          niche: 'Design & Frontend',
          platform: 'Instagram & LinkedIn',
          primaryPlatform: 'LinkedIn',
          followers: '185K',
          followerCount: 185000,
          engagementRate: '5.1%',
          avgViews: '38,000',
          location: 'Chennai, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 4,
          leadsGenerated: 96,
          totalEarnings: '₹88,000',
          joinDate: '2025-01-20',
          bio: 'Figma design system lead, enterprise dashboard layouts, and UX accessibility evangelist.',
          socialAccounts: [
            { platform: 'LinkedIn', handle: 'ananyaroy-ux', url: 'https://linkedin.com/in/ananyaux', followers: '110K', engagement: '5.5%', avgViews: '25K' },
            { platform: 'Instagram', handle: '@ananya_ui_ux', url: 'https://instagram.com/ananyaux', followers: '75K', engagement: '4.6%', avgViews: '13K' }
          ]
        },
        {
          id: 'INF-013',
          name: 'Arjun Das',
          handle: '@arjun_fintech_bytes',
          email: 'arjun.fintech@gmail.com',
          phone: '+91 98413 44556',
          niche: 'FinTech & Web3',
          platform: 'YouTube & Twitter/X',
          primaryPlatform: 'YouTube',
          followers: '240K',
          followerCount: 240000,
          engagementRate: '4.2%',
          avgViews: '50,000',
          location: 'Bangalore, Karnataka',
          verificationStatus: 'Suspended',
          status: 'Suspended',
          campaignsCount: 2,
          leadsGenerated: 32,
          totalEarnings: '₹30,000',
          joinDate: '2024-11-20',
          bio: 'Account temporarily suspended pending disclosure guidelines review.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@ArjunFinTech', url: 'https://youtube.com/@arjunfintech', followers: '240K', engagement: '4.2%', avgViews: '50K' }
          ]
        },
        {
          id: 'INF-014',
          name: 'Deepa Muthu',
          handle: '@deepa_diy_crafts',
          email: 'deepa.diy@gmail.com',
          phone: '+91 98414 55667',
          niche: 'Lifestyle & Productivity',
          platform: 'Instagram',
          primaryPlatform: 'Instagram',
          followers: '92K',
          followerCount: 92000,
          engagementRate: '5.9%',
          avgViews: '28,000',
          location: 'Salem, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 2,
          leadsGenerated: 35,
          totalEarnings: '₹26,000',
          joinDate: '2025-02-10',
          bio: 'Handcrafted stationery, journal habit building, and desk organization for students.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@deepa_diy_crafts', url: 'https://instagram.com/deepadiy', followers: '92K', engagement: '5.9%', avgViews: '28K' }
          ]
        },
        {
          id: 'INF-015',
          name: 'Harish Babu',
          handle: '@harish_mobile_unbox',
          email: 'harish.unbox@gmail.com',
          phone: '+91 98415 66778',
          niche: 'Technology & Gadgets',
          platform: 'YouTube',
          primaryPlatform: 'YouTube',
          followers: '780K',
          followerCount: 780000,
          engagementRate: '6.0%',
          avgViews: '180,000',
          location: 'Madurai, Tamil Nadu',
          verificationStatus: 'Verified',
          status: 'Active',
          campaignsCount: 7,
          leadsGenerated: 290,
          totalEarnings: '₹2,90,000',
          joinDate: '2024-09-15',
          bio: 'Fastest unboxing and performance benchmarks of smartphones, laptops, and student tech kits.',
          socialAccounts: [
            { platform: 'YouTube', handle: '@HarishUnboxTamil', url: 'https://youtube.com/@harishunbox', followers: '780K', engagement: '6.0%', avgViews: '180K' }
          ]
        },
        {
          id: 'INF-016',
          name: 'Kavitha S',
          handle: '@kavitha_parenting_ed',
          email: 'kavitha.parent@gmail.com',
          phone: '+91 98416 77889',
          niche: 'Education & Career',
          platform: 'Instagram & Facebook',
          primaryPlatform: 'Instagram',
          followers: '145K',
          followerCount: 145000,
          engagementRate: '5.4%',
          avgViews: '36,000',
          location: 'Tirunelveli, Tamil Nadu',
          verificationStatus: 'Under Review',
          status: 'Active',
          campaignsCount: 3,
          leadsGenerated: 72,
          totalEarnings: '₹52,000',
          joinDate: '2025-01-30',
          bio: 'Empowering parents to navigate digital learning tools, school ERPs, and career entrance exams.',
          socialAccounts: [
            { platform: 'Instagram', handle: '@kavitha_parenting_ed', url: 'https://instagram.com/kavitha', followers: '145K', engagement: '5.4%', avgViews: '36K' }
          ]
        }
      ],

      campaigns: [
        {
          id: 'CAMP-001',
          code: 'NXG-TECH-2026',
          name: 'NexGen Campus Tech Ambassador 2026',
          client: 'NexGen IT College',
          brand: 'NexGen IT College & Academy',
          product: 'B.Tech IT & Full Stack Courses',
          type: 'Lead Generation',
          primaryObjective: 'Drive engineering admissions and student bootcamp signups',
          secondaryObjective: 'Brand awareness across southern college districts',
          targetKPI: '1,000 Qualified Leads',
          startDate: '2026-02-15',
          endDate: '2026-05-30',
          applicationDeadline: '2026-03-15',
          contentDeadline: '2026-04-15',
          publishingWindow: '2026-04-16 to 2026-05-15',
          budget: 150000,
          allocated: 125000,
          earned: 95000,
          payable: 35000,
          paid: 60000,
          status: 'Active',
          applicationsCount: 18,
          influencersCount: 6,
          deliverablesCount: 14,
          leadsCount: 320,
          conversionsCount: 45,
          eligibility: {
            niche: 'Technology, Education, Campus Life',
            platform: 'YouTube, Instagram, LinkedIn',
            minFollowers: 50000,
            maxFollowers: 1000000,
            geography: 'Tamil Nadu, Kerala, Karnataka',
            language: 'Tamil, English',
            minEngagement: '4.0%'
          },
          termsVersion: 'v2.0',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-002',
          code: 'ROR-ERP-BLITZ',
          name: 'Roriri ERP Cloud Launch Blitz',
          client: 'Roriri Software Solutions',
          brand: 'RORIRI Software Solutions',
          product: 'Enterprise ERP Suite v2.4',
          type: 'Sales/Conversion',
          primaryObjective: 'Book 50+ enterprise product demo calls with SME directors',
          secondaryObjective: 'Establish RORIRI as the premier regional ERP developer',
          targetKPI: '50 Booked Enterprise Demos',
          startDate: '2026-03-01',
          endDate: '2026-06-30',
          applicationDeadline: '2026-03-25',
          contentDeadline: '2026-04-20',
          publishingWindow: '2026-04-25 to 2026-05-25',
          budget: 300000,
          allocated: 240000,
          earned: 160000,
          payable: 65000,
          paid: 95000,
          status: 'Active',
          applicationsCount: 12,
          influencersCount: 4,
          deliverablesCount: 10,
          leadsCount: 185,
          conversionsCount: 22,
          eligibility: {
            niche: 'Technology, Business Growth, FinTech',
            platform: 'LinkedIn, YouTube',
            minFollowers: 25000,
            maxFollowers: 800000,
            geography: 'India Wide',
            language: 'English, Tamil',
            minEngagement: '4.5%'
          },
          termsVersion: 'v1.2',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-003',
          code: 'RYA-IAS-2026',
          name: 'Riya IAS Academy UPSC Prep Drive',
          client: 'Riya IAS Academy',
          brand: 'Riya IAS & NEET Academy',
          product: 'UPSC Prelims & TNPSC Test Series',
          type: 'Lead Generation',
          primaryObjective: 'Register 300+ aspirants for scholarship screening exam',
          secondaryObjective: 'Increase social following of Riya IAS Academy YouTube channel',
          targetKPI: '300 Test Registrations',
          startDate: '2026-01-10',
          endDate: '2026-04-30',
          applicationDeadline: '2026-02-10',
          contentDeadline: '2026-03-01',
          publishingWindow: '2026-03-05 to 2026-04-10',
          budget: 180000,
          allocated: 180000,
          earned: 150000,
          payable: 30000,
          paid: 120000,
          status: 'Active',
          applicationsCount: 14,
          influencersCount: 5,
          deliverablesCount: 12,
          leadsCount: 410,
          conversionsCount: 78,
          eligibility: {
            niche: 'Education, Career, Parenting',
            platform: 'YouTube, Instagram',
            minFollowers: 75000,
            maxFollowers: 1500000,
            geography: 'Tamil Nadu',
            language: 'Tamil',
            minEngagement: '5.0%'
          },
          termsVersion: 'v1.0',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-004',
          code: 'NEX-PYTHON-BOOT',
          name: 'Nexemy Summer Python Bootcamp',
          client: 'Nexemy',
          brand: 'Nexemy Learning',
          product: 'Full Stack Python & AI 90-Day Bootcamp',
          type: 'Sales/Conversion',
          primaryObjective: 'Acquire 150 paying students for the live online cohort',
          secondaryObjective: 'Showcase student placement track record',
          targetKPI: '150 Enrollments',
          startDate: '2026-02-20',
          endDate: '2026-05-15',
          applicationDeadline: '2026-03-10',
          contentDeadline: '2026-03-25',
          publishingWindow: '2026-03-28 to 2026-04-30',
          budget: 120000,
          allocated: 95000,
          earned: 65000,
          payable: 25000,
          paid: 40000,
          status: 'Active',
          applicationsCount: 10,
          influencersCount: 3,
          deliverablesCount: 8,
          leadsCount: 195,
          conversionsCount: 34,
          eligibility: {
            niche: 'Software Development, AI, Tech',
            platform: 'YouTube, Instagram',
            minFollowers: 40000,
            maxFollowers: 600000,
            geography: 'India Wide',
            language: 'Tamil, English',
            minEngagement: '4.8%'
          },
          termsVersion: 'v1.1',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-005',
          code: 'ROR-MOB-VIRAL',
          name: 'Roriri Mobile App Social Viral Drive',
          client: 'Roriri Software Solutions',
          brand: 'RORIRI Apps',
          product: 'Workforce Attendance & Student Mobile App',
          type: 'Awareness',
          primaryObjective: 'Gain 25,000 app installs across Google Play and iOS Store',
          secondaryObjective: 'Micro-influencer viral reels challenge',
          targetKPI: '25,000 Mobile App Installs',
          startDate: '2026-04-01',
          endDate: '2026-06-15',
          applicationDeadline: '2026-04-10',
          contentDeadline: '2026-04-25',
          publishingWindow: '2026-05-01 to 2026-05-30',
          budget: 80000,
          allocated: 0,
          earned: 0,
          payable: 0,
          paid: 0,
          status: 'Draft',
          applicationsCount: 0,
          influencersCount: 0,
          deliverablesCount: 6,
          leadsCount: 0,
          conversionsCount: 0,
          eligibility: {
            niche: 'Lifestyle, Campus Life, Productivity',
            platform: 'Instagram Reels',
            minFollowers: 20000,
            maxFollowers: 500000,
            geography: 'South India',
            language: 'Tamil, English',
            minEngagement: '5.0%'
          },
          termsVersion: 'v0.9',
          termsStatus: 'Draft'
        },
        {
          id: 'CAMP-006',
          code: 'RIT-HARVEST-2026',
          name: 'Rithish Farms Organic Harvest Fest',
          client: 'Rithish Farms',
          brand: 'Rithish Agro Organics',
          product: 'Cold-Pressed Oils & Organic Grains',
          type: 'Sales/Conversion',
          primaryObjective: 'Promote weekend harvest festival and annual organic subscription boxes',
          secondaryObjective: 'Highlight chemical-free agricultural heritage',
          targetKPI: '200 Subscription Orders',
          startDate: '2026-04-15',
          endDate: '2026-05-30',
          applicationDeadline: '2026-04-05',
          contentDeadline: '2026-04-20',
          publishingWindow: '2026-04-22 to 2026-05-10',
          budget: 60000,
          allocated: 45000,
          earned: 0,
          payable: 0,
          paid: 0,
          status: 'Upcoming',
          applicationsCount: 7,
          influencersCount: 3,
          deliverablesCount: 6,
          leadsCount: 15,
          conversionsCount: 0,
          eligibility: {
            niche: 'Health, Organic & Nutrition, Food',
            platform: 'Instagram, YouTube',
            minFollowers: 30000,
            maxFollowers: 300000,
            geography: 'Tamil Nadu',
            language: 'Tamil',
            minEngagement: '4.2%'
          },
          termsVersion: 'v1.0',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-007',
          code: 'WIN-TECH-2025',
          name: 'Winter College Tech Fest 2025',
          client: 'NexGen IT College',
          brand: 'NexGen IT College',
          product: 'Annual Hackathon & Symposium',
          type: 'Event',
          primaryObjective: 'Attract 1,000+ inter-collegiate symposium participants',
          secondaryObjective: 'Live event coverage on social media',
          targetKPI: '1,000 Attendees',
          startDate: '2025-11-01',
          endDate: '2025-12-20',
          applicationDeadline: '2025-11-15',
          contentDeadline: '2025-12-05',
          publishingWindow: '2025-12-08 to 2025-12-18',
          budget: 100000,
          allocated: 100000,
          earned: 100000,
          payable: 0,
          paid: 100000,
          status: 'Completed',
          applicationsCount: 16,
          influencersCount: 5,
          deliverablesCount: 10,
          leadsCount: 540,
          conversionsCount: 120,
          eligibility: {
            niche: 'Technology, Campus Life',
            platform: 'Instagram, YouTube',
            minFollowers: 25000,
            maxFollowers: 500000,
            geography: 'Tamil Nadu',
            language: 'Tamil, English',
            minEngagement: '4.0%'
          },
          termsVersion: 'v1.0',
          termsStatus: 'Approved'
        },
        {
          id: 'CAMP-008',
          code: 'GRP-Q1-AWARE',
          name: 'Q1 Brand Awareness Drive',
          client: 'Roriri Groups',
          brand: 'Roriri Enterprise Ecosystem',
          product: 'Group Holdings & Philanthropy',
          type: 'Awareness',
          primaryObjective: 'Corporate social responsibility feature stories',
          secondaryObjective: 'Foundation visibility',
          targetKPI: '500,000 Video Views',
          startDate: '2026-01-01',
          endDate: '2026-02-15',
          applicationDeadline: '2026-01-10',
          contentDeadline: '2026-01-25',
          publishingWindow: '2026-01-28 to 2026-02-10',
          budget: 75000,
          allocated: 0,
          earned: 0,
          payable: 0,
          paid: 0,
          status: 'Cancelled',
          applicationsCount: 4,
          influencersCount: 0,
          deliverablesCount: 4,
          leadsCount: 0,
          conversionsCount: 0,
          eligibility: {
            niche: 'Business, Lifestyle',
            platform: 'LinkedIn, YouTube',
            minFollowers: 50000,
            maxFollowers: 500000,
            geography: 'India Wide',
            language: 'English',
            minEngagement: '3.5%'
          },
          termsVersion: 'v1.0',
          termsStatus: 'Cancelled'
        }
      ],

      applications: [
        { id: 'APP-101', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Technology', platform: 'YouTube', followers: '450K', engagement: '4.8%', proposedFee: 25000, appliedDate: '2026-02-18', status: 'Approved', proposal: 'I will create 1 dedicated 12-minute review of the campus labs, plus 2 high-energy Instagram reels with exclusive student promo codes.' },
        { id: 'APP-102', influencerId: 'INF-002', influencerName: 'Priya Sundaram', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Education', platform: 'Instagram', followers: '280K', engagement: '5.6%', proposedFee: 22000, appliedDate: '2026-02-19', status: 'Approved', proposal: 'Conducting an informative Q&A reel on B.Tech career pathways and sharing scholarship application links.' },
        { id: 'APP-103', influencerId: 'INF-003', influencerName: 'Vignesh M', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Software Dev', platform: 'YouTube', followers: '520K', engagement: '6.2%', proposedFee: 30000, appliedDate: '2026-02-20', status: 'Approved', proposal: 'Building a live mini AI app demo highlighting NexGen curriculum standards.' },
        { id: 'APP-104', influencerId: 'INF-006', influencerName: 'Divya Bharathi', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Campus Life', platform: 'Instagram', followers: '115K', engagement: '6.4%', proposedFee: 12000, appliedDate: '2026-02-22', status: 'Shortlisted', proposal: 'Day-in-the-life reel touring the college library, hostel, and high-tech sports complex.' },
        { id: 'APP-105', influencerId: 'INF-011', influencerName: 'Vikram Seth', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Gaming', platform: 'YouTube', followers: '310K', engagement: '5.3%', proposedFee: 20000, appliedDate: '2026-02-25', status: 'Under Review', proposal: 'Showcasing the NexGen game development club and student game showcases.' },
        { id: 'APP-106', influencerId: 'INF-012', influencerName: 'Ananya Roy', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador 2026', niche: 'Design', platform: 'LinkedIn', followers: '185K', engagement: '5.1%', proposedFee: 16000, appliedDate: '2026-02-28', status: 'Approved', proposal: 'Long-form LinkedIn case study on design engineering education outcomes.' },
        { id: 'APP-107', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', niche: 'Technology', platform: 'LinkedIn & YouTube', followers: '450K', engagement: '4.8%', proposedFee: 35000, appliedDate: '2026-03-02', status: 'Approved', proposal: 'In-depth architecture walkthrough of Roriri multi-tenant ERP system for enterprise leaders.' },
        { id: 'APP-108', influencerId: 'INF-007', influencerName: 'Rahul Sharma', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', niche: 'Cloud & DevOps', platform: 'LinkedIn', followers: '95K', engagement: '5.8%', proposedFee: 28000, appliedDate: '2026-03-04', status: 'Approved', proposal: 'Technical LinkedIn analysis highlighting zero-downtime database migrations in RORIRI ERP.' },
        { id: 'APP-109', influencerId: 'INF-008', influencerName: 'Pooja Hegde R', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', niche: 'Business Growth', platform: 'Instagram', followers: '210K', engagement: '4.3%', proposedFee: 24000, appliedDate: '2026-03-06', status: 'Shortlisted', proposal: 'SME operational tips carousel highlighting how RORIRI cuts billing overhead by 40%.' },
        { id: 'APP-110', influencerId: 'INF-013', influencerName: 'Arjun Das', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', niche: 'FinTech', platform: 'YouTube', followers: '240K', engagement: '4.2%', proposedFee: 22000, appliedDate: '2026-03-07', status: 'Rejected', proposal: 'General crypto and fintech sponsored mention.' },
        { id: 'APP-111', influencerId: 'INF-009', influencerName: 'Suresh Raina M', campaignId: 'CAMP-003', campaignName: 'Riya IAS Academy UPSC Prep Drive', niche: 'Education', platform: 'YouTube', followers: '680K', engagement: '6.5%', proposedFee: 45000, appliedDate: '2026-01-15', status: 'Approved', proposal: 'Dedicated strategy video covering Prelims 2026 syllabus with exclusive Riya IAS scholarship code.' },
        { id: 'APP-112', influencerId: 'INF-002', influencerName: 'Priya Sundaram', campaignId: 'CAMP-003', campaignName: 'Riya IAS Academy UPSC Prep Drive', niche: 'Education', platform: 'Instagram', followers: '280K', engagement: '5.6%', proposedFee: 22000, appliedDate: '2026-01-18', status: 'Approved', proposal: 'Series of 3 reels addressing doubts of first-generation civil service aspirants.' },
        { id: 'APP-113', influencerId: 'INF-016', influencerName: 'Kavitha S', campaignId: 'CAMP-003', campaignName: 'Riya IAS Academy UPSC Prep Drive', niche: 'Parenting & Ed', platform: 'Instagram', followers: '145K', engagement: '5.4%', proposedFee: 18000, appliedDate: '2026-01-20', status: 'Approved', proposal: 'Parental guidance post on supporting children preparing for competitive exams.' },
        { id: 'APP-114', influencerId: 'INF-003', influencerName: 'Vignesh M', campaignId: 'CAMP-004', campaignName: 'Nexemy Summer Python Bootcamp', niche: 'Software Dev', platform: 'YouTube', followers: '520K', engagement: '6.2%', proposedFee: 28000, appliedDate: '2026-02-22', status: 'Approved', proposal: 'Build-a-bot in Python live stream sponsored by Nexemy 90-day bootcamp.' },
        { id: 'APP-115', influencerId: 'INF-015', influencerName: 'Harish Babu', campaignId: 'CAMP-004', campaignName: 'Nexemy Summer Python Bootcamp', niche: 'Technology', platform: 'YouTube', followers: '780K', engagement: '6.0%', proposedFee: 35000, appliedDate: '2026-02-24', status: 'Approved', proposal: 'Student tech kit unboxing featuring Nexemy Python syllabus overview.' },
        { id: 'APP-116', influencerId: 'INF-005', influencerName: 'Karthik Raja', campaignId: 'CAMP-006', campaignName: 'Rithish Farms Organic Harvest Fest', niche: 'Health & Nutrition', platform: 'Instagram', followers: '190K', engagement: '5.0%', proposedFee: 18000, appliedDate: '2026-03-02', status: 'Shortlisted', proposal: 'Farm visit reel showing traditional cold-pressed oil extraction methods.' },
        { id: 'APP-117', influencerId: 'INF-010', influencerName: 'Meera Nambiar', campaignId: 'CAMP-006', campaignName: 'Rithish Farms Organic Harvest Fest', niche: 'Organic Living', platform: 'Instagram', followers: '160K', engagement: '4.7%', proposedFee: 15000, appliedDate: '2026-03-03', status: 'Under Review', proposal: 'Recipe video cooked exclusively with Rithish Farms heritage grain subscription box.' },
        { id: 'APP-118', influencerId: 'INF-004', influencerName: 'Sneha Latha', campaignId: 'CAMP-005', campaignName: 'Roriri Mobile App Social Viral Drive', niche: 'Lifestyle', platform: 'Instagram', followers: '340K', engagement: '4.1%', proposedFee: 20000, appliedDate: '2026-03-08', status: 'Under Review', proposal: 'Creative reel showing how student attendance notifications save morning stress.' },
        { id: 'APP-119', influencerId: 'INF-008', influencerName: 'Pooja Hegde R', campaignId: 'CAMP-005', campaignName: 'Roriri Mobile App Social Viral Drive', niche: 'Productivity', platform: 'Instagram', followers: '210K', engagement: '4.3%', proposedFee: 16000, appliedDate: '2026-03-09', status: 'Under Review', proposal: 'Time management reel testing Roriri employee leave apply feature.' },
        { id: 'APP-120', influencerId: 'INF-014', influencerName: 'Deepa Muthu', campaignId: 'CAMP-006', campaignName: 'Rithish Farms Organic Harvest Fest', niche: 'Lifestyle', platform: 'Instagram', followers: '92K', engagement: '5.9%', proposedFee: 10000, appliedDate: '2026-03-05', status: 'Under Review', proposal: 'Unboxing aesthetic organic gift hampers from Rithish Farms.' }
      ],

      deliverables: [
        { id: 'DEL-201', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-001', influencerName: 'Arun Kumar', type: 'YouTube Dedicated Video', platform: 'YouTube', dueDate: '2026-04-10', fee: 18000, status: 'Approved', submissionDate: '2026-04-02', reviewer: 'Marketing Admin', progress: 100 },
        { id: 'DEL-202', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-001', influencerName: 'Arun Kumar', type: 'Instagram Reel', platform: 'Instagram', dueDate: '2026-04-20', fee: 7000, status: 'In Progress', submissionDate: '-', reviewer: 'Marketing Admin', progress: 50 },
        { id: 'DEL-203', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-002', influencerName: 'Priya Sundaram', type: 'Instagram Reel', platform: 'Instagram', dueDate: '2026-04-12', fee: 12000, status: 'Revision Required', submissionDate: '2026-04-05', reviewer: 'Campaign Manager', progress: 80 },
        { id: 'DEL-204', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-002', influencerName: 'Priya Sundaram', type: 'Instagram Story (Set of 3)', platform: 'Instagram', dueDate: '2026-04-25', fee: 10000, status: 'Pending', submissionDate: '-', reviewer: 'Campaign Manager', progress: 0 },
        { id: 'DEL-205', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-003', influencerName: 'Vignesh M', type: 'YouTube Video + Community Post', platform: 'YouTube', dueDate: '2026-04-15', fee: 30000, status: 'Submitted', submissionDate: '2026-04-08', reviewer: 'Super Admin', progress: 90 },
        { id: 'DEL-206', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', influencerId: 'INF-001', influencerName: 'Arun Kumar', type: 'LinkedIn Long-Form Post', platform: 'LinkedIn', dueDate: '2026-04-25', fee: 15000, status: 'Approved', submissionDate: '2026-04-18', reviewer: 'Super Admin', progress: 100 },
        { id: 'DEL-207', campaignId: 'CAMP-002', campaignName: 'Roriri ERP Cloud Launch Blitz', influencerId: 'INF-007', influencerName: 'Rahul Sharma', type: 'LinkedIn Tech Review', platform: 'LinkedIn', dueDate: '2026-04-28', fee: 28000, status: 'Submitted', submissionDate: '2026-04-22', reviewer: 'Super Admin', progress: 90 },
        { id: 'DEL-208', campaignId: 'CAMP-003', campaignName: 'Riya IAS Academy UPSC Prep Drive', influencerId: 'INF-009', influencerName: 'Suresh Raina M', type: 'YouTube Strategy Session', platform: 'YouTube', dueDate: '2026-03-15', fee: 45000, status: 'Published', submissionDate: '2026-03-08', reviewer: 'Marketing Admin', progress: 100 },
        { id: 'DEL-209', campaignId: 'CAMP-003', campaignName: 'Riya IAS Academy UPSC Prep Drive', influencerId: 'INF-002', influencerName: 'Priya Sundaram', type: 'Instagram Reel', platform: 'Instagram', dueDate: '2026-03-18', fee: 12000, status: 'Published', submissionDate: '2026-03-12', reviewer: 'Marketing Admin', progress: 100 },
        { id: 'DEL-210', campaignId: 'CAMP-004', campaignName: 'Nexemy Summer Python Bootcamp', influencerId: 'INF-003', influencerName: 'Vignesh M', type: 'YouTube Sponsored Segment', platform: 'YouTube', dueDate: '2026-03-25', fee: 28000, status: 'Published', submissionDate: '2026-03-20', reviewer: 'Marketing Admin', progress: 100 },
        { id: 'DEL-211', campaignId: 'CAMP-001', campaignName: 'NexGen Campus Tech Ambassador', influencerId: 'INF-012', influencerName: 'Ananya Roy', type: 'LinkedIn Article', platform: 'LinkedIn', dueDate: '2026-04-18', fee: 16000, status: 'Overdue', submissionDate: '-', reviewer: 'Campaign Manager', progress: 20 },
        { id: 'DEL-212', campaignId: 'CAMP-004', campaignName: 'Nexemy Summer Python Bootcamp', influencerId: 'INF-015', influencerName: 'Harish Babu', type: 'YouTube Unbox Mention', platform: 'YouTube', dueDate: '2026-03-28', fee: 35000, status: 'Approved', submissionDate: '2026-03-24', reviewer: 'Super Admin', progress: 100 }
      ],

      contentSubmissions: [
        {
          id: 'CONT-301',
          deliverableId: 'DEL-201',
          influencerId: 'INF-001',
          influencerName: 'Arun Kumar',
          campaignId: 'CAMP-001',
          campaignName: 'NexGen Campus Tech Ambassador',
          deliverable: 'YouTube Dedicated Video',
          contentType: 'Long-Form Video (12:45)',
          platform: 'YouTube',
          submittedDate: '2026-04-02',
          publishDate: '2026-04-12',
          status: 'Approved',
          caption: 'Top College for Future Software Architects? Deep dive inside NexGen IT College campus, coding clubs, and placement record! Use code ARUN2026 for 100% scholarship entrance waiver.',
          hashtags: '#NexGenCollege #EngineeringAdmissions2026 #TechCareers #RoririEducation',
          externalUrl: 'https://youtube.com/watch?v=nexgen_arun_review_draft',
          views: 42500,
          reach: 89000,
          likes: 3120,
          comments: 245,
          shares: 410,
          versions: [
            { version: 'v1.0', date: '2026-03-28', status: 'Revision Requested', reviewer: 'Marketing Admin', notes: 'Please ensure scholarship portal URL is placed in first 2 lines of description and add disclosure banner.' },
            { version: 'v2.0', date: '2026-04-02', status: 'Approved', reviewer: 'Marketing Admin', notes: 'All changes incorporated cleanly. Approved for publishing.' }
          ]
        },
        {
          id: 'CONT-302',
          deliverableId: 'DEL-203',
          influencerId: 'INF-002',
          influencerName: 'Priya Sundaram',
          campaignId: 'CAMP-001',
          campaignName: 'NexGen Campus Tech Ambassador',
          deliverable: 'Instagram Reel',
          contentType: 'Vertical Reel (00:58)',
          platform: 'Instagram',
          submittedDate: '2026-04-05',
          publishDate: 'Planned 2026-04-14',
          status: 'Revision Required',
          caption: 'Confused about which branch to choose after 12th? Here is why IT & AI at NexGen College stands out! Link in bio.',
          hashtags: '#CollegeAdmissions #CareerGuidance #NexGen #EdTech',
          externalUrl: 'https://instagram.com/reel/priya_nexgen_preview',
          views: 0,
          reach: 0,
          likes: 0,
          comments: 0,
          shares: 0,
          versions: [
            { version: 'v1.0', date: '2026-04-05', status: 'Revision Required', reviewer: 'Campaign Manager', notes: 'The video audio quality dips around 0:25. Also missing required official hashtag #NexGenAdmissions2026 and mention @nexgencollege.' }
          ]
        },
        {
          id: 'CONT-303',
          deliverableId: 'DEL-205',
          influencerId: 'INF-003',
          influencerName: 'Vignesh M',
          campaignId: 'CAMP-001',
          campaignName: 'NexGen Campus Tech Ambassador',
          deliverable: 'YouTube Video + Community Post',
          contentType: 'Live Project Video (18:10)',
          platform: 'YouTube',
          submittedDate: '2026-04-08',
          publishDate: 'Planned 2026-04-16',
          status: 'Under Review',
          caption: 'Building a Full-Stack Campus App in 20 Minutes! Sponsored by NexGen IT College & Academy. Check out the hands-on syllabus.',
          hashtags: '#FullStack #PythonWeb #NexGenAcademy #CodingBootcamp',
          externalUrl: 'https://youtube.com/watch?v=vignesh_build_app_demo',
          views: 0,
          reach: 0,
          likes: 0,
          comments: 0,
          shares: 0,
          versions: [
            { version: 'v1.0', date: '2026-04-08', status: 'Under Review', reviewer: 'Pending Super Admin Review', notes: 'Initial submission queued for technical sign-off.' }
          ]
        },
        {
          id: 'CONT-304',
          deliverableId: 'DEL-206',
          influencerId: 'INF-001',
          influencerName: 'Arun Kumar',
          campaignId: 'CAMP-002',
          campaignName: 'Roriri ERP Cloud Launch Blitz',
          deliverable: 'LinkedIn Long-Form Post',
          contentType: 'Carousels & Article',
          platform: 'LinkedIn',
          submittedDate: '2026-04-18',
          publishDate: '2026-04-20',
          status: 'Published',
          caption: 'Why SMEs are ditching legacy accounting tools for modern unified ERPs. Complete breakdown of RORIRI Software Solutions platform with live demo booking link.',
          hashtags: '#EnterpriseERP #CloudSaaS #RoririERP #SMEGrowth',
          externalUrl: 'https://linkedin.com/posts/arunkumar_roririerp_launch',
          views: 28500,
          reach: 48000,
          likes: 890,
          comments: 112,
          shares: 88,
          versions: [
            { version: 'v1.0', date: '2026-04-18', status: 'Approved', reviewer: 'Super Admin', notes: 'Excellent technical depth and branding alignment.' }
          ]
        },
        {
          id: 'CONT-305',
          deliverableId: 'DEL-208',
          influencerId: 'INF-009',
          influencerName: 'Suresh Raina M',
          campaignId: 'CAMP-003',
          campaignName: 'Riya IAS Academy UPSC Prep Drive',
          deliverable: 'YouTube Strategy Session',
          contentType: 'Video Lecture (35:20)',
          platform: 'YouTube',
          submittedDate: '2026-03-08',
          publishDate: '2026-03-10',
          status: 'Published',
          caption: 'UPSC 2026 Master Strategy & Booklist! Exclusive tie-up with Riya IAS Academy for 500 full scholarships. Register before March 30.',
          hashtags: '#UPSC2026 #RiyaIAS #CivilServicesPrep #TamilIAS',
          externalUrl: 'https://youtube.com/watch?v=suresh_riya_ias_masterclass',
          views: 118000,
          reach: 220000,
          likes: 9200,
          comments: 640,
          shares: 1450,
          versions: [
            { version: 'v1.0', date: '2026-03-08', status: 'Approved', reviewer: 'Marketing Admin', notes: 'Flawless execution. Published immediately.' }
          ]
        }
      ],

      leads: [
        { id: 'LEAD-501', source: 'YouTube - Arun Tech', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaignId: 'CAMP-001', referralCode: 'ARUN2026', customerName: 'Manikandan S', email: 'mani.s@gmail.com', phone: '+91 94431 11223', product: 'B.Tech IT Admission', value: 85000, status: 'Converted', createdDate: '2026-04-03', followUpDate: '2026-04-10' },
        { id: 'LEAD-502', source: 'Instagram - Priya EdTech', influencerId: 'INF-002', influencerName: 'Priya Sundaram', campaignId: 'CAMP-001', referralCode: 'PRIYAEDU', customerName: 'Deepak Raj', email: 'deepak.raj@gmail.com', phone: '+91 94432 22334', product: 'B.Tech AI & Data Science', value: 95000, status: 'Qualified', createdDate: '2026-04-04', followUpDate: '2026-04-12' },
        { id: 'LEAD-503', source: 'LinkedIn - Arun Tech', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaignId: 'CAMP-002', referralCode: 'ARUNERP', customerName: 'Southern Textiles Ltd', email: 'contact@southtextiles.com', phone: '+91 94433 33445', product: 'RORIRI ERP Enterprise License', value: 250000, status: 'Converted', createdDate: '2026-04-21', followUpDate: '2026-04-26' },
        { id: 'LEAD-504', source: 'LinkedIn - Rahul Sharma', influencerId: 'INF-007', influencerName: 'Rahul Sharma', campaignId: 'CAMP-002', referralCode: 'RAHULCLOUD', customerName: 'Apex Health Systems', email: 'it@apexhealth.in', phone: '+91 94434 44556', product: 'RORIRI Hospital ERP Module', value: 180000, status: 'Interested', createdDate: '2026-04-23', followUpDate: '2026-04-28' },
        { id: 'LEAD-505', source: 'YouTube - Suresh IAS', influencerId: 'INF-009', influencerName: 'Suresh Raina M', campaignId: 'CAMP-003', referralCode: 'SURESHIAS', customerName: 'Karthika Devi', email: 'karthika.ias@gmail.com', phone: '+91 94435 55667', product: 'UPSC Prelims+Mains Intensive Batch', value: 45000, status: 'Converted', createdDate: '2026-03-12', followUpDate: '2026-03-15' },
        { id: 'LEAD-506', source: 'YouTube - Suresh IAS', influencerId: 'INF-009', influencerName: 'Suresh Raina M', campaignId: 'CAMP-003', referralCode: 'SURESHIAS', customerName: 'Balamurugan P', email: 'bala.p@gmail.com', phone: '+91 94436 66778', product: 'TNPSC Group 1 Course', value: 25000, status: 'Converted', createdDate: '2026-03-14', followUpDate: '2026-03-18' },
        { id: 'LEAD-507', source: 'YouTube - Vignesh Coder', influencerId: 'INF-003', influencerName: 'Vignesh M', campaignId: 'CAMP-004', referralCode: 'VIGNESHDEV', customerName: 'Senthil Nathan', email: 'senthil.n@gmail.com', phone: '+91 94437 77889', product: 'Python 90-Day Bootcamp', value: 20000, status: 'Converted', createdDate: '2026-03-22', followUpDate: '2026-03-25' },
        { id: 'LEAD-508', source: 'Instagram - Sneha Tips', influencerId: 'INF-004', influencerName: 'Sneha Latha', campaignId: 'CAMP-001', referralCode: 'SNEHA2026', customerName: 'Praveen Kumar', email: 'praveen.k@gmail.com', phone: '+91 94438 88990', product: 'B.Tech IT Admission', value: 85000, status: 'Contacted', createdDate: '2026-04-06', followUpDate: '2026-04-15' },
        { id: 'LEAD-509', source: 'YouTube - Harish Unbox', influencerId: 'INF-015', influencerName: 'Harish Babu', campaignId: 'CAMP-004', referralCode: 'HARISHTECH', customerName: 'Vijay Anand', email: 'vijay.a@gmail.com', phone: '+91 94439 99001', product: 'Python 90-Day Bootcamp', value: 20000, status: 'Converted', createdDate: '2026-03-26', followUpDate: '2026-03-29' },
        { id: 'LEAD-510', source: 'Instagram - Priya EdTech', influencerId: 'INF-002', influencerName: 'Priya Sundaram', campaignId: 'CAMP-003', referralCode: 'PRIYAIAS', customerName: 'Divya Shree', email: 'divyashree@gmail.com', phone: '+91 94440 00112', product: 'UPSC Foundation Batch', value: 35000, status: 'Lost', createdDate: '2026-03-16', followUpDate: '2026-03-22' }
      ],

      conversions: [
        { id: 'CONV-901', leadId: 'LEAD-501', influencerName: 'Arun Kumar', campaignName: 'NexGen Campus Tech Ambassador', conversionDate: '2026-04-08', value: 85000, commissionRate: '10%', commission: 8500, status: 'Approved' },
        { id: 'CONV-902', leadId: 'LEAD-503', influencerName: 'Arun Kumar', campaignName: 'Roriri ERP Cloud Launch Blitz', conversionDate: '2026-04-25', value: 250000, commissionRate: '12%', commission: 30000, status: 'Approved' },
        { id: 'CONV-903', leadId: 'LEAD-505', influencerName: 'Suresh Raina M', campaignName: 'Riya IAS Academy UPSC Prep Drive', conversionDate: '2026-03-15', value: 45000, commissionRate: '15%', commission: 6750, status: 'Paid' },
        { id: 'CONV-904', leadId: 'LEAD-506', influencerName: 'Suresh Raina M', campaignName: 'Riya IAS Academy UPSC Prep Drive', conversionDate: '2026-03-18', value: 25000, commissionRate: '15%', commission: 3750, status: 'Paid' },
        { id: 'CONV-905', leadId: 'LEAD-507', influencerName: 'Vignesh M', campaignName: 'Nexemy Summer Python Bootcamp', conversionDate: '2026-03-24', value: 20000, commissionRate: '15%', commission: 3000, status: 'Paid' },
        { id: 'CONV-906', leadId: 'LEAD-509', influencerName: 'Harish Babu', campaignName: 'Nexemy Summer Python Bootcamp', conversionDate: '2026-03-28', value: 20000, commissionRate: '15%', commission: 3000, status: 'Approved' }
      ],

      payouts: [
        { id: 'PAY-401', influencerId: 'INF-009', influencerName: 'Suresh Raina M', campaign: 'Riya IAS Academy UPSC Prep Drive', amount: '₹55,500', date: '2026-03-25', method: 'NEFT Bank Transfer', ref: 'TXN-UPSC-4401', status: 'Paid' },
        { id: 'PAY-402', influencerId: 'INF-003', influencerName: 'Vignesh M', campaign: 'Nexemy Summer Python Bootcamp', amount: '₹31,000', date: '2026-03-30', method: 'Direct Bank Deposit', ref: 'TXN-NEX-4402', status: 'Paid' },
        { id: 'PAY-403', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaign: 'Roriri ERP Cloud Launch Blitz', amount: '₹48,500', date: '2026-04-28', method: 'RTGS Transfer', ref: 'TXN-ROR-4403', status: 'Processing' },
        { id: 'PAY-404', influencerId: 'INF-001', influencerName: 'Arun Kumar', campaign: 'NexGen Campus Tech Ambassador', amount: '₹26,500', date: '2026-04-15', method: 'Bank Transfer', ref: 'PENDING-APP-01', status: 'Pending' },
        { id: 'PAY-405', influencerId: 'INF-002', influencerName: 'Priya Sundaram', campaign: 'Riya IAS Academy UPSC Prep Drive', amount: '₹14,000', date: '2026-03-20', method: 'UPI Instant', ref: 'TXN-UPI-98402', status: 'Paid' },
        { id: 'PAY-406', influencerId: 'INF-015', influencerName: 'Harish Babu', campaign: 'Nexemy Summer Python Bootcamp', amount: '₹38,000', date: '2026-04-02', method: 'Direct Deposit', ref: 'TXN-NEX-4406', status: 'Pending' }
      ],

      invoices: [
        { id: 'INV-801', number: 'ROR-INF-2026-01', influencerName: 'Suresh Raina M', campaign: 'Riya IAS Academy UPSC Prep Drive', amount: 55500, tax: 9990, total: 65490, date: '2026-03-20', dueDate: '2026-03-25', status: 'Paid' },
        { id: 'INV-802', number: 'ROR-INF-2026-02', influencerName: 'Vignesh M', campaign: 'Nexemy Summer Python Bootcamp', amount: 31000, tax: 5580, total: 36580, date: '2026-03-25', dueDate: '2026-03-30', status: 'Paid' },
        { id: 'INV-803', number: 'ROR-INF-2026-03', influencerName: 'Arun Kumar', campaign: 'Roriri ERP Cloud Launch Blitz', amount: 48500, tax: 8730, total: 57230, date: '2026-04-22', dueDate: '2026-04-30', status: 'Approved' },
        { id: 'INV-804', number: 'ROR-INF-2026-04', influencerName: 'Arun Kumar', campaign: 'NexGen Campus Tech Ambassador', amount: 26500, tax: 4770, total: 31270, date: '2026-04-10', dueDate: '2026-04-20', status: 'Submitted' }
      ],

      leaderboard: [
        { rank: 1, name: 'Suresh Raina M', handle: '@suresh_civil_services', niche: 'Education', points: 4250, badge: 'Viral Master', conversions: 78, earnings: '₹2,40,000' },
        { rank: 2, name: 'Arun Kumar', handle: '@arun_techvlogs', niche: 'Technology', points: 3890, badge: 'Enterprise MVP', conversions: 45, earnings: '₹1,25,000' },
        { rank: 3, name: 'Vignesh M', handle: '@vignesh_coder', niche: 'Software Dev', points: 3420, badge: 'Top Converter', conversions: 38, earnings: '₹1,60,000' },
        { rank: 4, name: 'Harish Babu', handle: '@harish_mobile_unbox', niche: 'Tech Gadgets', points: 2980, badge: 'Reach King', conversions: 35, earnings: '₹2,90,000' },
        { rank: 5, name: 'Priya Sundaram', handle: '@priya_edtech_daily', niche: 'Education', points: 2750, badge: '100% On-Time', conversions: 28, earnings: '₹1,80,000' }
      ],

      auditLogs: [
        { id: 'AUD-01', user: 'Ragupathi (Super Admin)', action: 'Approved Content', module: 'Content Review', record: 'CONT-301 (Arun Kumar)', prevStatus: 'Under Review', newStatus: 'Approved', timestamp: '2026-04-02 11:30 AM', ip: '192.168.1.10' },
        { id: 'AUD-02', user: 'Suresh Raina (PM)', action: 'Requested Content Revision', module: 'Content Review', record: 'CONT-302 (Priya Sundaram)', prevStatus: 'Submitted', newStatus: 'Revision Required', timestamp: '2026-04-05 03:15 PM', ip: '192.168.1.14' },
        { id: 'AUD-03', user: 'Finance Admin', action: 'Processed Payout', module: 'Finance / Payouts', record: 'PAY-401 (₹55,500)', prevStatus: 'Processing', newStatus: 'Paid', timestamp: '2026-03-25 04:45 PM', ip: '192.168.1.20' },
        { id: 'AUD-04', user: 'Marketing Admin', action: 'Approved Influencer Application', module: 'Applications', record: 'APP-101 (Arun Kumar)', prevStatus: 'Under Review', newStatus: 'Approved', timestamp: '2026-02-20 02:10 PM', ip: '192.168.1.12' },
        { id: 'AUD-05', user: 'Ragupathi (Super Admin)', action: 'Created New Campaign', module: 'Campaign Management', record: 'CAMP-002 (Roriri ERP Blitz)', prevStatus: 'None', newStatus: 'Active', timestamp: '2026-03-01 10:00 AM', ip: '192.168.1.10' }
      ],

      supportTickets: [
        { id: 'TCK-701', influencerName: 'Priya Sundaram', category: 'Content Issue', subject: 'Inquiry regarding hashtag requirements for v2.0 video', priority: 'Medium', status: 'In Progress', date: '2026-04-06', assignedTo: 'Marketing Admin' },
        { id: 'TCK-702', influencerName: 'Harish Babu', category: 'Payment Issue', subject: 'TDS certificate download request for FY 2025-26', priority: 'Normal', status: 'Resolved', date: '2026-04-01', assignedTo: 'Finance Admin' },
        { id: 'TCK-703', influencerName: 'Divya Bharathi', category: 'Technical Issue', subject: 'Portfolio media kit PDF upload failing size limit', priority: 'Low', status: 'Open', date: '2026-04-07', assignedTo: 'Support Desk' }
      ]
    };
  }

  // ============================================================================
  // 2. SIDEBAR INJECTION (Positioned strictly below Freelancer)
  // ============================================================================
  function injectInfluencerSidebar() {
    var sb = null;
    if (typeof SIDEBAR !== 'undefined') sb = SIDEBAR;
    else if (typeof window !== 'undefined' && window.SIDEBAR) sb = window.SIDEBAR;
    if (!sb) return;

    // Check if Influencer already exists
    if (sb.some(function(item) { return item.label === 'Influencer'; })) {
      return;
    }

    var influencerSubmenu = {
      type: 'sub',
      icon: 'bx bxl-instagram-alt',
      label: 'Influencer',
      children: [
        { id: 'influencer-dashboard', icon: 'bx bx-grid-alt', label: 'Dashboard' },
        { id: 'influencer-list', icon: 'bx bx-user-check', label: 'Influencers' },
        { id: 'influencer-verification', icon: 'bx bx-shield-quarter', label: 'Verification Queue' },
        { id: 'influencer-campaigns', icon: 'bx bx-bullseye', label: 'Campaigns' },
        { id: 'influencer-campaign-create', icon: 'bx bx-plus-circle', label: 'Create Campaign' },
        { id: 'influencer-applications', icon: 'bx bx-paper-plane', label: 'Applications' },
        { id: 'influencer-assignments', icon: 'bx bx-briefcase', label: 'Assignments' },
        { id: 'influencer-deliverables', icon: 'bx bx-package', label: 'Deliverables' },
        { id: 'influencer-content', icon: 'bx bx-movie-play', label: 'Content Review' },
        { id: 'influencer-leads', icon: 'bx bx-user-pin', label: 'Leads & Sales' },
        { id: 'influencer-conversions', icon: 'bx bx-cart', label: 'Conversions' },
        { id: 'influencer-performance', icon: 'bx bx-line-chart', label: 'Performance Analytics' },
        { id: 'influencer-earnings', icon: 'bx bx-wallet', label: 'Earnings' },
        { id: 'influencer-invoices', icon: 'bx bx-receipt', label: 'Invoices' },
        { id: 'influencer-payouts', icon: 'bx bx-credit-card', label: 'Payouts' },
        { id: 'influencer-rewards', icon: 'bx bx-trophy', label: 'Points & Rewards' },
        { id: 'influencer-marketing', icon: 'bx bx-folder', label: 'Brand Assets & Resources' },
        { id: 'influencer-messages', icon: 'bx bx-message-square-dots', label: 'Communication' },
        { id: 'influencer-calendar', icon: 'bx bx-calendar', label: 'Calendar' },
        { id: 'influencer-tasks', icon: 'bx bx-check-square', label: 'Tasks' },
        { id: 'influencer-support', icon: 'bx bx-support', label: 'Support Tickets' },
        { id: 'influencer-audit-logs', icon: 'bx bx-history', label: 'Audit Logs' },
        { id: 'influencer-settings', icon: 'bx bx-cog', label: 'Settings' }
      ]
    };

    // Locate Freelancer menu index
    var flIndex = sb.findIndex(function(item) {
      return item.label === 'Freelancer';
    });

    if (flIndex !== -1) {
      // Keep directly below Freelancer
      sb.splice(flIndex + 1, 0, influencerSubmenu);
    } else {
      sb.push(influencerSubmenu);
    }

    if (typeof buildSidebar === 'function') {
      buildSidebar();
    } else if (typeof window !== 'undefined' && typeof window.buildSidebar === 'function') {
      window.buildSidebar();
    }
  }

  // Hook into navigate() so any 'influencer-' page highlights the Influencer sidebar accordion
  function hookNavigate() {
    if (typeof window.navigate === 'function' && !window.navigate._influencerHooked) {
      var originalNav = window.navigate;
      window.navigate = function(page, params) {
        originalNav(page, params);
        if (page && page.startsWith('influencer-')) {
          var infLi = document.getElementById('nav-influencer');
          if (infLi) infLi.classList.add('open');
          var link = document.querySelector('.sidebar-nav a[data-page="' + page + '"]');
          if (link) link.classList.add('active');
        }
      };
      window.navigate._influencerHooked = true;
    }
  }

  // Role Switcher Bar HTML
  function renderRoleSwitcherBanner() {
    var roles = ['Super Admin', 'Marketing Admin', 'Campaign Manager', 'Finance Admin', 'Support Admin'];
    var html = '<div style="background:linear-gradient(135deg, #1e293b, #0f172a);color:#fff;border-radius:10px;padding:10px 16px;margin-bottom:1.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<span style="background:rgba(78,115,223,0.25);border:1px solid rgba(78,115,223,0.5);color:#60a5fa;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">' +
          '<i class="bx bxl-instagram-alt"></i> Influencer Admin Portal' +
        '</span>' +
        '<span style="font-size:13px;color:#94a3b8;">Active Role: <strong style="color:#fff;">' + window.INFLUENCER_ROLE + '</strong></span>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:8px;">' +
        '<span style="font-size:12px;color:#94a3b8;">Role Switcher:</span>' +
        '<select class="form-control" style="width:170px;padding:4px 8px;font-size:12px;background:#1e293b;color:#fff;border:1px solid #475569;border-radius:6px;" onchange="changeInfluencerRole(this.value)">';

    roles.forEach(function(r) {
      html += '<option value="' + r + '" ' + (window.INFLUENCER_ROLE === r ? 'selected' : '') + '>' + r + '</option>';
    });

    html += '</select>' +
      '</div>' +
    '</div>';
    return html;
  }

  window.changeInfluencerRole = function(r) {
    window.INFLUENCER_ROLE = r;
    if (typeof showNotification === 'function') {
      showNotification('Admin view switched to: ' + r, 'info');
    }
    var cur = (typeof currentPage !== 'undefined' ? currentPage : (typeof window.currentPage !== 'undefined' ? window.currentPage : 'influencer-dashboard'));
    if (typeof navigate === 'function') {
      navigate(cur, window._params);
    }
  };

  // ============================================================================
  // 3. RENDERERS REGISTRATION
  // ============================================================================

  // --- 3.1 DASHBOARD OVERVIEW ---
  function renderInfluencerDashboard() {
    var data = MOCK.influencer;
    var activeCampaigns = data.campaigns.filter(function(c) { return c.status === 'Active'; }).length;
    var activeInfluencers = data.influencers.filter(function(i) { return i.status === 'Active'; }).length;
    var pendingApps = data.applications.filter(function(a) { return a.status === 'Under Review' || a.status === 'Applied'; }).length;
    var pendingReviews = data.contentSubmissions.filter(function(cs) { return cs.status === 'Under Review' || cs.status === 'Revision Required'; }).length;
    var totalConversions = data.conversions.length;
    var totalEarnings = '₹3,75,000';
    var pendingPayouts = '₹64,500';

    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;color:var(--text-dark);font-size:20px;">Influencer Marketing Administration</h4>' +
        '<p class="text-secondary font-13 mb-0" style="margin-top:2px;">Operational marketing dashboard &bull; Campaign lifecycle management, content review, and influencer ROI.</p>' +
      '</div>' +
      '<div class="d-flex align-items-center gap-2 flex-wrap">' +
        '<button class="btn btn-primary btn-sm" onclick="navigate(\'influencer-campaign-create\')"><i class="bx bx-plus-circle"></i> Create Campaign</button>' +
        '<button class="btn btn-outline-secondary btn-sm" onclick="navigate(\'influencer-content\')"><i class="bx bx-movie-play"></i> Content Queue (' + pendingReviews + ')</button>' +
        '<button class="btn btn-outline-secondary btn-sm" onclick="navigate(\'influencer-payouts\')"><i class="bx bx-credit-card"></i> Payouts</button>' +
      '</div>' +
    '</div>';

    // 10 KPI Cards (Equal-height grid with signature color mappings)
    html += '<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 mb-4">' +
      renderKPICard('Total Influencers', data.influencers.length, '+2 this month', 'bx bx-user-check', 'c-primary', 'influencer-list') +
      renderKPICard('Active Influencers', activeInfluencers, 'Verified creators', 'bx bx-user-voice', 'c-success', 'influencer-list') +
      renderKPICard('Pending Approvals', 3, 'Verification queue', 'bx bx-shield-quarter', 'c-warning', 'influencer-verification') +
      renderKPICard('Active Campaigns', activeCampaigns, '4 entities', 'bx bx-bullseye', 'c-primary', 'influencer-campaigns') +
      renderKPICard('Pending Applications', pendingApps, 'Awaiting review', 'bx bx-paper-plane', 'c-danger', 'influencer-applications') +
      renderKPICard('Content Reviews', pendingReviews, 'Reels & Videos', 'bx bx-video', 'c-warning', 'influencer-content') +
      renderKPICard('Total CRM Leads', data.leads.length, 'Campaign referrals', 'bx bx-group', 'c-info', 'influencer-leads') +
      renderKPICard('Conversions', totalConversions, 'Verified sales', 'bx bx-cart-alt', 'c-success', 'influencer-conversions') +
      renderKPICard('Campaign Earnings', totalEarnings, 'Budget allocation', 'bx bx-wallet', 'c-purple', 'influencer-earnings') +
      renderKPICard('Pending Payouts', pendingPayouts, '2 invoices', 'bx bx-credit-card', 'c-danger', 'influencer-payouts') +
    '</div>';

    // 2-Column Section: Left = Campaign Status & Content Queue, Right = Application Funnel & Finance
    html += '<div class="row g-3 mb-4">' +
      '<div class="col-lg-8">' +
        // Campaign Overview Widget
        '<div class="card mb-4">' +
          '<div class="card-header">' +
            '<h6 class="card-title mb-0" style="font-weight:700;"><i class="bx bx-pie-chart-alt-2 text-primary"></i> Active Campaign Overview</h6>' +
            '<button class="btn btn-sm btn-outline-primary" onclick="navigate(\'influencer-campaigns\')">View All (' + data.campaigns.length + ')</button>' +
          '</div>' +
          '<div class="card-body p-0">' +
            '<div class="table-responsive">' +
              '<table class="table table-hover align-middle mb-0 font-13">' +
                '<thead class="table-light">' +
                  '<tr><th>Campaign</th><th>Client Entity</th><th>Type</th><th>Influencers</th><th>Progress</th><th>Budget</th><th>Status</th></tr>' +
                '</thead>' +
                '<tbody>';

    data.campaigns.slice(0, 4).forEach(function(c) {
      html += '<tr>' +
        '<td><strong><a href="javascript:void(0)" onclick="openCampaignDetails(\'' + c.id + '\')">' + c.name + '</a></strong><div class="text-secondary font-11">' + c.code + '</div></td>' +
        '<td>' + c.client + '</td>' +
        '<td><span class="badge badge-info">' + c.type + '</span></td>' +
        '<td>' + c.influencersCount + ' creators</td>' +
        '<td style="width:120px;"><div class="font-11 mb-1 font-weight-600">65%</div><div class="progress" style="height:6px;"><div class="progress-bar bg-primary" style="width:65%;"></div></div></td>' +
        '<td>₹' + c.budget.toLocaleString('en-IN') + '</td>' +
        '<td><span class="badge ' + (c.status === 'Active' ? 'badge-success' : 'badge-warning') + '">' + c.status + '</span></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>' +

        // Content Review Queue Table Widget
        '<div class="card mb-4">' +
          '<div class="card-header">' +
            '<h6 class="card-title mb-0" style="font-weight:700;"><i class="bx bx-movie-play text-warning"></i> Content Review Queue</h6>' +
            '<button class="btn btn-sm btn-outline-warning" onclick="navigate(\'influencer-content\')">Review All</button>' +
          '</div>' +
          '<div class="card-body p-0">' +
            '<div class="table-responsive">' +
              '<table class="table table-hover align-middle mb-0 font-13">' +
                '<thead class="table-light">' +
                  '<tr><th>Influencer</th><th>Campaign</th><th>Deliverable</th><th>Platform</th><th>Submitted</th><th>Status</th><th>Action</th></tr>' +
                '</thead>' +
                '<tbody>';

    data.contentSubmissions.slice(0, 3).forEach(function(cs) {
      html += '<tr>' +
        '<td><strong>' + cs.influencerName + '</strong></td>' +
        '<td>' + cs.campaignName + '</td>' +
        '<td>' + cs.deliverable + '</td>' +
        '<td><span class="badge badge-secondary">' + cs.platform + '</span></td>' +
        '<td>' + cs.submittedDate + '</td>' +
        '<td><span class="badge ' + (cs.status === 'Approved' ? 'badge-success' : (cs.status === 'Revision Required' ? 'badge-danger' : 'badge-warning')) + '">' + cs.status + '</span></td>' +
        '<td>' +
          '<button class="btn btn-sm btn-outline-primary" onclick="openContentReviewModal(\'' + cs.id + '\')"><i class="bx bx-show"></i> Review</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>' +
      '</div>' +

      // Right Column: Funnel & Recent Activity
      '<div class="col-lg-4">' +
        // Application Funnel
        '<div class="card mb-4">' +
          '<div class="card-header">' +
            '<h6 class="card-title mb-0" style="font-weight:700;"><i class="bx bx-filter-alt text-primary"></i> Application Pipeline</h6>' +
            '<span class="badge badge-primary">37 Total</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div style="display:flex;flex-direction:column;gap:8px;">' +
              renderPipelineStep('Applied', 20, '#3b82f6') +
              renderPipelineStep('Under Review', 7, '#f59e0b') +
              renderPipelineStep('Shortlisted', 5, '#8b5cf6') +
              renderPipelineStep('Approved & Contracted', 12, '#10b981') +
              renderPipelineStep('Rejected / Ineligible', 3, '#ef4444') +
            '</div>' +
          '</div>' +
        '</div>' +

        // Finance Summary
        '<div class="card mb-4">' +
          '<div class="card-header">' +
            '<h6 class="card-title mb-0" style="font-weight:700;"><i class="bx bx-wallet text-success"></i> Campaign Finance Summary</h6>' +
            '<span class="badge badge-success">Healthy Budget</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="d-flex justify-content-between align-items-center mb-2 font-13"><span class="text-secondary">Total Allocated Budget</span><strong>₹7,50,000</strong></div>' +
            '<div class="d-flex justify-content-between align-items-center mb-2 font-13"><span class="text-secondary">Earned by Creators</span><strong class="text-primary">₹3,75,000</strong></div>' +
            '<div class="d-flex justify-content-between align-items-center mb-2 font-13"><span class="text-secondary">Disbursed (Paid)</span><strong class="text-success">₹3,10,500</strong></div>' +
            '<div class="d-flex justify-content-between align-items-center font-13 pt-2 mt-2 border-top"><span class="text-secondary font-weight-600">Pending Payouts</span><strong class="text-danger font-14">₹64,500</strong></div>' +
          '</div>' +
        '</div>' +

        // Recent Activity Feed
        '<div class="card mb-4">' +
          '<div class="card-header">' +
            '<h6 class="card-title mb-0" style="font-weight:700;"><i class="bx bx-history text-secondary"></i> Live Marketing Audit Feed</h6>' +
            '<button class="btn btn-sm btn-outline-secondary" onclick="navigate(\'influencer-audit-logs\')">All Logs</button>' +
          '</div>' +
          '<div class="card-body">' +
            '<div style="display:flex;flex-direction:column;gap:12px;" class="font-12">' +
              renderAuditItem('Content Approved', 'Arun Kumar v2.0 video approved by Super Admin', '10 mins ago', 'bx-check-circle', '#10b981') +
              renderAuditItem('Revision Requested', 'Priya Sundaram asked to fix audio & add #NexGen2026', '1 hour ago', 'bx-revision', '#f59e0b') +
              renderAuditItem('New Lead Converted', 'Southern Textiles signed RORIRI ERP contract (₹2,50,000)', '3 hours ago', 'bx-cart', '#3b82f6') +
              renderAuditItem('Payout Executed', '₹55,500 sent via NEFT to Suresh Raina M', 'Yesterday', 'bx-credit-card', '#8b5cf6') +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    return html;
  }

  function renderKPICard(label, val, sub, icon, colorClass, page) {
    var bgMap = {
      'c-primary': 'bg-light-primary text-primary',
      'c-success': 'bg-light-success text-success',
      'c-warning': 'bg-light-warning text-warning',
      'c-danger': 'bg-light-danger text-danger',
      'c-info': 'bg-light-info text-info',
      'c-purple': 'bg-light-purple text-purple'
    };
    var iconStyleClass = bgMap[colorClass] || 'bg-light-primary text-primary';

    return '<div class="col">' +
      '<a href="javascript:void(0)" onclick="navigate(\'' + page + '\')" class="stat-card text-decoration-none" style="display:flex;flex-direction:column;justify-content:center;height:calc(100% - 1rem);margin-bottom:1rem;cursor:pointer;">' +
        '<div class="d-flex align-items-center justify-content-between gap-2">' +
          '<div class="stat-content" style="flex:1;min-width:0;">' +
            '<p class="mb-1 text-secondary font-11 font-weight-bold text-uppercase" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="' + label + '">' + label + '</p>' +
            '<h4 class="mb-1 font-weight-700 font-20" style="color:var(--text-dark);line-height:1.2;">' + val + '</h4>' +
            '<span class="font-11 text-muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;">' + sub + '</span>' +
          '</div>' +
          '<div class="stat-icon ' + iconStyleClass + '" style="width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">' +
            '<i class="' + icon + '"></i>' +
          '</div>' +
        '</div>' +
      '</a>' +
    '</div>';
  }

  function renderPipelineStep(label, count, color) {
    return '<div style="display:flex;align-items:center;justify-content:space-between;padding:9px 12px;background:#f8fafc;border-radius:8px;border-left:4px solid ' + color + ';margin-bottom:2px;">' +
      '<span style="font-size:13px;font-weight:600;color:var(--text-dark);">' + label + '</span>' +
      '<span style="font-size:12px;font-weight:700;color:#fff;background:' + color + ';padding:2px 8px;border-radius:10px;min-width:26px;text-align:center;">' + count + '</span>' +
    '</div>';
  }

  function renderAuditItem(title, desc, time, icon, color) {
    return '<div style="display:flex;gap:12px;align-items:flex-start;">' +
      '<div style="width:30px;height:30px;border-radius:8px;background:' + color + '18;color:' + color + ';display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;margin-top:2px;">' +
        '<i class="bx ' + icon + '"></i>' +
      '</div>' +
      '<div style="flex:1;min-width:0;">' +
        '<div style="font-size:13px;font-weight:600;color:var(--text-dark);line-height:1.3;">' + title + '</div>' +
        '<div style="color:#64748b;font-size:12px;margin:2px 0 3px;line-height:1.4;">' + desc + '</div>' +
        '<small style="color:#94a3b8;font-size:11px;"><i class="bx bx-time-five" style="vertical-align:middle;margin-right:2px;"></i>' + time + '</small>' +
      '</div>' +
    '</div>';
  }

  // --- 3.2 ALL INFLUENCERS DIRECTORY ---
  function renderInfluencerList() {
    var data = MOCK.influencer.influencers;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">All Influencer Roster (' + data.length + ')</h4>' +
        '<p class="text-secondary font-13 mb-0">Authorized creators, brand ambassadors, and niche subject matter specialists.</p>' +
      '</div>' +
      '<div class="d-flex gap-2">' +
        '<input type="text" class="form-control form-control-sm" placeholder="Search influencers, niches..." style="width:220px;" oninput="filterInfluencerTable(this.value)">' +
        '<select class="form-select form-select-sm" style="width:140px;" onchange="filterInfluencerByNiche(this.value)">' +
          '<option value="All">All Niches</option>' +
          '<option>Technology & Gadgets</option>' +
          '<option>Education & Career</option>' +
          '<option>Software Development & AI</option>' +
          '<option>Lifestyle & Productivity</option>' +
          '<option>Health, Organic & Nutrition</option>' +
        '</select>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13" id="fl-inf-table">' +
          '<thead class="table-light">' +
            '<tr><th>Creator Profile</th><th>Niche & Focus</th><th>Platform</th><th>Followers</th><th>Eng. Rate</th><th>Leads</th><th>Earnings</th><th>Verification</th><th>Status</th><th style="text-align:right;">Actions</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(inf) {
      html += '<tr>' +
        '<td>' +
          '<div class="d-flex align-items-center gap-2">' +
            '<div class="user-avatar" style="width:34px;height:34px;font-size:13px;background:var(--primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;">' + inf.name.charAt(0) + '</div>' +
            '<div>' +
              '<strong><a href="javascript:void(0)" onclick="openInfluencerDetails(\'' + inf.id + '\')">' + inf.name + '</a></strong>' +
              '<div class="text-secondary font-11">' + inf.handle + ' &bull; ' + inf.location + '</div>' +
            '</div>' +
          '</div>' +
        '</td>' +
        '<td><span class="badge badge-secondary">' + inf.niche + '</span></td>' +
        '<td>' + inf.primaryPlatform + '</td>' +
        '<td><strong>' + inf.followers + '</strong></td>' +
        '<td><span class="badge badge-info">' + inf.engagementRate + '</span></td>' +
        '<td>' + inf.leadsGenerated + ' leads</td>' +
        '<td><strong class="text-success">' + inf.totalEarnings + '</strong></td>' +
        '<td><span class="badge ' + (inf.verificationStatus === 'Verified' ? 'badge-success' : (inf.verificationStatus === 'Under Review' ? 'badge-warning' : 'badge-danger')) + '">' + inf.verificationStatus + '</span></td>' +
        '<td><span class="badge ' + (inf.status === 'Active' ? 'badge-success' : 'badge-danger') + '">' + inf.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="btn btn-sm btn-outline-primary me-1" onclick="openInfluencerDetails(\'' + inf.id + '\')" title="View Full Profile"><i class="bx bx-show"></i></button>' +
          (inf.status === 'Active' ?
            '<button class="btn btn-sm btn-outline-danger" onclick="toggleInfluencerStatus(\'' + inf.id + '\', \'Suspended\')" title="Suspend"><i class="bx bx-block"></i></button>' :
            '<button class="btn btn-sm btn-outline-success" onclick="toggleInfluencerStatus(\'' + inf.id + '\', \'Active\')" title="Activate"><i class="bx bx-check"></i></button>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.filterInfluencerTable = function(q) {
    q = q.toLowerCase();
    document.querySelectorAll('#fl-inf-table tbody tr').forEach(function(r) {
      r.style.display = r.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
    });
  };

  window.filterInfluencerByNiche = function(val) {
    document.querySelectorAll('#fl-inf-table tbody tr').forEach(function(r) {
      r.style.display = (val === 'All' || r.textContent.indexOf(val) !== -1) ? '' : 'none';
    });
  };

  window.toggleInfluencerStatus = function(id, newStatus) {
    var inf = MOCK.influencer.influencers.find(function(i) { return i.id === id; });
    if (inf) {
      inf.status = newStatus;
      MOCK.influencer.auditLogs.unshift({
        id: 'AUD-' + (MOCK.influencer.auditLogs.length + 1),
        user: 'Admin',
        action: 'Changed Influencer Status',
        module: 'Influencers',
        record: inf.name,
        prevStatus: inf.status === 'Active' ? 'Suspended' : 'Active',
        newStatus: newStatus,
        timestamp: new Date().toLocaleString('en-IN'),
        ip: '192.168.1.10'
      });
      if (typeof showNotification === 'function') {
        showNotification('Influencer ' + inf.name + ' set to ' + newStatus, 'success');
      }
      navigate('influencer-list');
    }
  };

  // --- 3.3 INFLUENCER PROFILE DETAIL ---
  window.openInfluencerDetails = function(infId) {
    window.INFLUENCER_ACTIVE_INFLUENCER_ID = infId;
    navigate('influencer-detail');
  };

  function renderInfluencerDetail() {
    var inf = MOCK.influencer.influencers.find(function(i) { return i.id === window.INFLUENCER_ACTIVE_INFLUENCER_ID; }) || MOCK.influencer.influencers[0];
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div class="d-flex align-items-center gap-2">' +
        '<button class="btn btn-outline-primary btn-sm" onclick="navigate(\'influencer-list\')"><i class="bx bx-arrow-back"></i> Back</button>' +
        '<h4 style="margin:0;font-weight:700;">' + inf.name + '</h4>' +
        '<span class="badge ' + (inf.verificationStatus === 'Verified' ? 'badge-success' : 'badge-warning') + '">' + inf.verificationStatus + '</span>' +
      '</div>' +
      '<div class="d-flex gap-2">' +
        '<button class="btn btn-sm btn-outline-secondary" onclick="navigate(\'influencer-messages\')"><i class="bx bx-chat"></i> Message</button>' +
        '<button class="btn btn-sm btn-primary" onclick="navigate(\'influencer-campaign-create\')"><i class="bx bx-plus"></i> Invite to Campaign</button>' +
      '</div>' +
    '</div>';

    // Profile Header Card
    html += '<div class="card mb-4">' +
      '<div class="card-body">' +
        '<div class="row align-items-center">' +
          '<div class="col-auto">' +
            '<div style="width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#4e73df,#224abe);color:#fff;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;">' + inf.name.charAt(0) + '</div>' +
          '</div>' +
          '<div class="col">' +
            '<h5 style="margin:0 0 4px;font-weight:700;">' + inf.name + ' <small class="text-secondary font-13">' + inf.handle + '</small></h5>' +
            '<p style="margin:0 0 8px;font-size:13px;color:#64748b;">' + inf.bio + '</p>' +
            '<div class="d-flex flex-wrap gap-3 font-12 text-secondary">' +
              '<span><i class="bx bx-map"></i> ' + inf.location + '</span>' +
              '<span><i class="bx bx-category"></i> ' + inf.niche + '</span>' +
              '<span><i class="bx bx-calendar"></i> Member since ' + inf.joinDate + '</span>' +
              '<span><i class="bx bx-envelope"></i> ' + inf.email + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="col-auto text-end">' +
            '<div class="font-20 font-weight-700 text-primary">' + inf.followers + '</div>' +
            '<div class="font-11 text-secondary text-uppercase">Total Audience</div>' +
            '<div class="font-14 font-weight-600 text-success mt-1">' + inf.engagementRate + ' Engagement</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // Tabs
    var tab = window.INFLUENCER_ACTIVE_TAB || 'overview';
    html += '<ul class="nav nav-tabs mb-3 font-13">' +
      '<li class="nav-item"><a class="nav-link ' + (tab === 'overview' ? 'active' : '') + '" href="javascript:void(0)" onclick="setInfTab(\'overview\')">Overview & Socials</a></li>' +
      '<li class="nav-item"><a class="nav-link ' + (tab === 'campaigns' ? 'active' : '') + '" href="javascript:void(0)" onclick="setInfTab(\'campaigns\')">Campaign History</a></li>' +
      '<li class="nav-item"><a class="nav-link ' + (tab === 'content' ? 'active' : '') + '" href="javascript:void(0)" onclick="setInfTab(\'content\')">Submitted Content</a></li>' +
      '<li class="nav-item"><a class="nav-link ' + (tab === 'leads' ? 'active' : '') + '" href="javascript:void(0)" onclick="setInfTab(\'leads\')">Leads & Performance</a></li>' +
      '<li class="nav-item"><a class="nav-link ' + (tab === 'earnings' ? 'active' : '') + '" href="javascript:void(0)" onclick="setInfTab(\'earnings\')">Earnings & Payouts</a></li>' +
    '</ul>';

    if (tab === 'overview') {
      html += '<div class="row g-3">' +
        '<div class="col-md-7">' +
          '<div class="card mb-3">' +
            '<div class="card-body">' +
              '<h6 class="card-title font-weight-700 mb-3"><i class="bx bx-share-alt text-primary"></i> Connected Social Media Handles</h6>' +
              '<div class="table-responsive">' +
                '<table class="table table-bordered mb-0 font-13">' +
                  '<thead class="table-light"><tr><th>Platform</th><th>Handle</th><th>Followers</th><th>Avg Views</th><th>Engagement</th></tr></thead>' +
                  '<tbody>';

      inf.socialAccounts.forEach(function(sa) {
        html += '<tr>' +
          '<td><strong>' + sa.platform + '</strong></td>' +
          '<td><a href="' + sa.url + '" target="_blank">' + sa.handle + '</a></td>' +
          '<td>' + sa.followers + '</td>' +
          '<td>' + sa.avgViews + '</td>' +
          '<td><span class="badge badge-success">' + sa.engagement + '</span></td>' +
        '</tr>';
      });

      html += '</tbody></table></div></div></div></div>' +

        '<div class="col-md-5">' +
          '<div class="card">' +
            '<div class="card-body">' +
              '<h6 class="card-title font-weight-700 mb-3"><i class="bx bx-check-shield text-success"></i> Verification & Compliance</h6>' +
              '<div class="d-flex justify-content-between mb-2 font-13"><span class="text-secondary">Identity Verification</span><span class="badge badge-success">Govt ID Verified</span></div>' +
              '<div class="d-flex justify-content-between mb-2 font-13"><span class="text-secondary">PAN & Tax Residency</span><span class="badge badge-success">Verified</span></div>' +
              '<div class="d-flex justify-content-between mb-2 font-13"><span class="text-secondary">Bank Account</span><span class="badge badge-success">Direct Deposit Active</span></div>' +
              '<div class="d-flex justify-content-between font-13 pt-2 border-top"><span class="text-secondary">Contract Status</span><strong>Master Influencer SLA v2</strong></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    } else {
      html += '<div class="card"><div class="card-body font-13 text-secondary">' +
        '<p>Displaying detailed records for <strong>' + tab.toUpperCase() + '</strong> associated with ' + inf.name + '.</p>' +
        '<button class="btn btn-sm btn-outline-primary" onclick="setInfTab(\'overview\')">Return to Overview</button>' +
      '</div></div>';
    }

    return html;
  }

  window.setInfTab = function(t) {
    window.INFLUENCER_ACTIVE_TAB = t;
    navigate('influencer-detail');
  };

  // --- 3.4 VERIFICATION QUEUE ---
  function renderInfluencerVerification() {
    var data = MOCK.influencer.influencers;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Influencer Verification Queue</h4>' +
        '<p class="text-secondary font-13 mb-0">Review identity documents, tax credentials, and social audience authenticity before approval.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Creator</th><th>Platform & Handle</th><th>Followers</th><th>Niche</th><th>Verification State</th><th>Submission Date</th><th style="text-align:right;">Actions</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(inf) {
      html += '<tr>' +
        '<td><strong>' + inf.name + '</strong><div class="text-secondary font-11">' + inf.email + '</div></td>' +
        '<td>' + inf.primaryPlatform + ' &bull; ' + inf.handle + '</td>' +
        '<td>' + inf.followers + '</td>' +
        '<td><span class="badge badge-secondary">' + inf.niche + '</span></td>' +
        '<td><span class="badge ' + (inf.verificationStatus === 'Verified' ? 'badge-success' : (inf.verificationStatus === 'Under Review' ? 'badge-warning' : 'badge-danger')) + '">' + inf.verificationStatus + '</span></td>' +
        '<td>' + inf.joinDate + '</td>' +
        '<td style="text-align:right;">' +
          '<button class="btn btn-sm btn-success me-1" onclick="verifyInfluencerAction(\'' + inf.id + '\', \'Verified\')"><i class="bx bx-check"></i> Approve</button>' +
          '<button class="btn btn-sm btn-outline-danger" onclick="verifyInfluencerAction(\'' + inf.id + '\', \'Rejected\')"><i class="bx bx-x"></i> Reject</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.verifyInfluencerAction = function(id, newStatus) {
    var inf = MOCK.influencer.influencers.find(function(i) { return i.id === id; });
    if (inf) {
      inf.verificationStatus = newStatus;
      if (typeof showNotification === 'function') {
        showNotification('Verification updated: ' + inf.name + ' marked as ' + newStatus, 'success');
      }
      navigate('influencer-verification');
    }
  };

  // --- 3.5 CAMPAIGN MANAGEMENT ---
  function renderCampaigns() {
    var data = MOCK.influencer.campaigns;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Campaign Catalog (' + data.length + ')</h4>' +
        '<p class="text-secondary font-13 mb-0">Multi-brand marketing initiatives, influencer assignments, and performance monitoring.</p>' +
      '</div>' +
      '<div class="d-flex gap-2">' +
        '<button class="btn btn-primary btn-sm" onclick="navigate(\'influencer-campaign-create\')"><i class="bx bx-plus-circle"></i> Create Campaign</button>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Campaign Code & Name</th><th>Client / Entity</th><th>Type</th><th>Timeline</th><th>Applicants</th><th>Creators</th><th>Budget</th><th>Status</th><th style="text-align:right;">Actions</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(c) {
      html += '<tr>' +
        '<td><strong><a href="javascript:void(0)" onclick="openCampaignDetails(\'' + c.id + '\')">' + c.name + '</a></strong><div class="text-secondary font-11">' + c.code + '</div></td>' +
        '<td>' + c.client + '</td>' +
        '<td><span class="badge badge-info">' + c.type + '</span></td>' +
        '<td><small>' + c.startDate + ' to ' + c.endDate + '</small></td>' +
        '<td>' + c.applicationsCount + ' applied</td>' +
        '<td><strong>' + c.influencersCount + ' assigned</strong></td>' +
        '<td>₹' + c.budget.toLocaleString('en-IN') + '</td>' +
        '<td><span class="badge ' + (c.status === 'Active' ? 'badge-success' : (c.status === 'Draft' ? 'badge-secondary' : (c.status === 'Upcoming' ? 'badge-warning' : 'badge-primary'))) + '">' + c.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="btn btn-sm btn-outline-primary me-1" onclick="openCampaignDetails(\'' + c.id + '\')" title="Open Campaign"><i class="bx bx-show"></i></button>' +
          '<button class="btn btn-sm btn-outline-secondary" onclick="duplicateCampaign(\'' + c.id + '\')" title="Duplicate"><i class="bx bx-copy"></i></button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.openCampaignDetails = function(cId) {
    window.INFLUENCER_ACTIVE_CAMPAIGN_ID = cId;
    navigate('influencer-campaign-detail');
  };

  window.duplicateCampaign = function(cId) {
    var c = MOCK.influencer.campaigns.find(function(x) { return x.id === cId; });
    if (c) {
      var copy = JSON.parse(JSON.stringify(c));
      copy.id = 'CAMP-' + (MOCK.influencer.campaigns.length + 1);
      copy.name = c.name + ' (Copy)';
      copy.code = c.code + '-COPY';
      copy.status = 'Draft';
      MOCK.influencer.campaigns.unshift(copy);
      if (typeof showNotification === 'function') {
        showNotification('Campaign duplicated as draft.', 'success');
      }
      navigate('influencer-campaigns');
    }
  };

  // --- 3.6 MULTI-STEP CREATE CAMPAIGN WIZARD ---
  function renderCampaignCreate() {
    var step = window.INFLUENCER_CURRENT_CAMPAIGN_STEP || 1;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div class="d-flex align-items-center gap-2">' +
        '<button class="btn btn-outline-primary btn-sm" onclick="navigate(\'influencer-campaigns\')"><i class="bx bx-arrow-back"></i> Back</button>' +
        '<h4 style="margin:0;font-weight:700;">Create Enterprise Influencer Campaign</h4>' +
      '</div>' +
      '<div><span class="badge badge-primary">Step ' + step + ' of 4</span></div>' +
    '</div>';

    // Step indicators
    html += '<div class="card mb-4"><div class="card-body p-3">' +
      '<div class="d-flex justify-content-between text-center font-12 font-weight-600">' +
        '<span style="color:' + (step >= 1 ? 'var(--primary)' : '#94a3b8') + ';">1. Campaign Identity</span>' +
        '<span style="color:' + (step >= 2 ? 'var(--primary)' : '#94a3b8') + ';">2. Objective & Schedule</span>' +
        '<span style="color:' + (step >= 3 ? 'var(--primary)' : '#94a3b8') + ';">3. Eligibility & Deliverables</span>' +
        '<span style="color:' + (step >= 4 ? 'var(--primary)' : '#94a3b8') + ';">4. Terms & Finance</span>' +
      '</div>' +
    '</div></div>';

    html += '<div class="card"><div class="card-body">';

    if (step === 1) {
      html += '<h6 class="font-weight-700 mb-3">Step 1 — Campaign Identity & Sponsoring Entity</h6>' +
        '<div class="row g-3">' +
          '<div class="col-md-6"><label class="form-label">Campaign Name *</label><input type="text" id="wiz-name" class="form-control" placeholder="e.g. NexGen Summer Python Bootcamp Drive" value="NexGen Summer Python Bootcamp Drive"></div>' +
          '<div class="col-md-6"><label class="form-label">Campaign Code *</label><input type="text" id="wiz-code" class="form-control" placeholder="e.g. NXG-PY-2026" value="NXG-PY-2026"></div>' +
          '<div class="col-md-4"><label class="form-label">Sponsoring Client / Entity *</label><select id="wiz-client" class="form-select"><option>NexGen IT College</option><option>RORIRI Software Solutions</option><option>Riya IAS Academy</option><option>Nexemy</option><option>Rithish Farms</option></select></div>' +
          '<div class="col-md-4"><label class="form-label">Brand</label><input type="text" id="wiz-brand" class="form-control" value="NexGen Tech Hub"></div>' +
          '<div class="col-md-4"><label class="form-label">Campaign Type</label><select id="wiz-type" class="form-select"><option>Lead Generation</option><option>Sales/Conversion</option><option>Awareness</option><option>Product Launch</option><option>Event</option></select></div>' +
          '<div class="col-12"><label class="form-label">Campaign Description</label><textarea id="wiz-desc" class="form-control" rows="3">High-impact student recruitment campaign targeting computer science aspirants.</textarea></div>' +
        '</div>' +
        '<div class="d-flex justify-content-end mt-4"><button class="btn btn-primary" onclick="setWizStep(2)">Proceed to Objective &rarr;</button></div>';
    } else if (step === 2) {
      html += '<h6 class="font-weight-700 mb-3">Step 2 — Objectives, KPIs & Execution Schedule</h6>' +
        '<div class="row g-3">' +
          '<div class="col-md-6"><label class="form-label">Primary Objective *</label><input type="text" id="wiz-obj1" class="form-control" value="Drive 300+ course enrollments"></div>' +
          '<div class="col-md-6"><label class="form-label">Target KPI</label><input type="text" id="wiz-kpi" class="form-control" value="300 Qualified Conversions"></div>' +
          '<div class="col-md-3"><label class="form-label">Start Date *</label><input type="date" id="wiz-start" class="form-control" value="' + getTodayStr(5) + '"></div>' +
          '<div class="col-md-3"><label class="form-label">End Date *</label><input type="date" id="wiz-end" class="form-control" value="' + getTodayStr(60) + '"></div>' +
          '<div class="col-md-3"><label class="form-label">Application Deadline</label><input type="date" id="wiz-app-dead" class="form-control" value="' + getTodayStr(15) + '"></div>' +
          '<div class="col-md-3"><label class="form-label">Content Review Deadline</label><input type="date" id="wiz-cont-dead" class="form-control" value="' + getTodayStr(30) + '"></div>' +
        '</div>' +
        '<div class="d-flex justify-content-between mt-4"><button class="btn btn-secondary" onclick="setWizStep(1)">&larr; Previous</button><button class="btn btn-primary" onclick="setWizStep(3)">Proceed to Eligibility &rarr;</button></div>';
    } else if (step === 3) {
      html += '<h6 class="font-weight-700 mb-3">Step 3 — Influencer Eligibility & Deliverable Specification</h6>' +
        '<div class="row g-3">' +
          '<div class="col-md-4"><label class="form-label">Target Niches</label><input type="text" class="form-control" value="Technology, Education, Software Dev"></div>' +
          '<div class="col-md-4"><label class="form-label">Minimum Followers</label><input type="number" class="form-control" value="30000"></div>' +
          '<div class="col-md-4"><label class="form-label">Target Geography</label><input type="text" class="form-control" value="South India"></div>' +
          '<div class="col-12"><div class="p-3 bg-light rounded text-success font-13 font-weight-600"><i class="bx bx-check-circle"></i> Estimated Eligible Roster in ERP: <strong>8 Creators Match These Criteria</strong></div></div>' +
          '<div class="col-md-6"><label class="form-label">Deliverable 1</label><input type="text" class="form-control" value="1x Dedicated YouTube Video (8-10 mins)"></div>' +
          '<div class="col-md-6"><label class="form-label">Deliverable 2</label><input type="text" class="form-control" value="2x Instagram Reels with Bio Link"></div>' +
        '</div>' +
        '<div class="d-flex justify-content-between mt-4"><button class="btn btn-secondary" onclick="setWizStep(2)">&larr; Previous</button><button class="btn btn-primary" onclick="setWizStep(4)">Proceed to Terms & Finance &rarr;</button></div>';
    } else if (step === 4) {
      html += '<h6 class="font-weight-700 mb-3">Step 4 — Terms, Remuneration & Campaign Budget</h6>' +
        '<div class="row g-3">' +
          '<div class="col-md-4"><label class="form-label">Campaign Total Budget (₹) *</label><input type="number" id="wiz-budget" class="form-control" value="120000"></div>' +
          '<div class="col-md-4"><label class="form-label">Fixed Creator Compensation (₹)</label><input type="number" class="form-control" value="20000"></div>' +
          '<div class="col-md-4"><label class="form-label">Per-Conversion Bonus (₹)</label><input type="number" class="form-control" value="250"></div>' +
          '<div class="col-12"><label class="form-label">Mandatory Brand Guidelines & Disclosure Terms</label><textarea class="form-control" rows="3">Must mention "Sponsored by Roriri ERP & NexGen". Tracking link must be present in YouTube description line 1. No competitor endorsements for 30 days.</textarea></div>' +
        '</div>' +
        '<div class="d-flex justify-content-between mt-4"><button class="btn btn-secondary" onclick="setWizStep(3)">&larr; Previous</button><button class="btn btn-success" onclick="publishCampaignFromWizard()"><i class="bx bx-check-circle"></i> Publish Campaign</button></div>';
    }

    html += '</div></div>';
    return html;
  }

  window.setWizStep = function(s) {
    window.INFLUENCER_CURRENT_CAMPAIGN_STEP = s;
    navigate('influencer-campaign-create');
  };

  window.publishCampaignFromWizard = function() {
    var name = document.getElementById('wiz-name') ? document.getElementById('wiz-name').value : 'NexGen Python Bootcamp Drive';
    var code = document.getElementById('wiz-code') ? document.getElementById('wiz-code').value : 'NXG-PY-2026';
    var budget = document.getElementById('wiz-budget') ? parseInt(document.getElementById('wiz-budget').value, 10) : 120000;

    MOCK.influencer.campaigns.unshift({
      id: 'CAMP-' + (MOCK.influencer.campaigns.length + 1),
      code: code,
      name: name,
      client: 'NexGen IT College',
      brand: 'NexGen Tech Hub',
      product: 'Python AI Bootcamp',
      type: 'Lead Generation',
      startDate: getTodayStr(0),
      endDate: getTodayStr(60),
      budget: budget,
      allocated: budget * 0.8,
      earned: 0,
      payable: 0,
      paid: 0,
      status: 'Active',
      applicationsCount: 0,
      influencersCount: 0,
      deliverablesCount: 4,
      leadsCount: 0,
      conversionsCount: 0,
      termsVersion: 'v1.0',
      termsStatus: 'Approved'
    });

    MOCK.influencer.auditLogs.unshift({
      id: 'AUD-' + (MOCK.influencer.auditLogs.length + 1),
      user: 'Ragupathi (Super Admin)',
      action: 'Published New Campaign',
      module: 'Campaigns',
      record: name,
      prevStatus: 'None',
      newStatus: 'Active',
      timestamp: new Date().toLocaleString('en-IN'),
      ip: '192.168.1.10'
    });

    window.INFLUENCER_CURRENT_CAMPAIGN_STEP = 1;
    if (typeof showNotification === 'function') {
      showNotification('Campaign "' + name + '" published successfully!', 'success');
    }
    navigate('influencer-campaigns');
  };

  // --- 3.7 CAMPAIGN DETAILS COCKPIT ---
  function renderCampaignDetail() {
    var c = MOCK.influencer.campaigns.find(function(x) { return x.id === window.INFLUENCER_ACTIVE_CAMPAIGN_ID; }) || MOCK.influencer.campaigns[0];
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div class="d-flex align-items-center gap-2">' +
        '<button class="btn btn-outline-primary btn-sm" onclick="navigate(\'influencer-campaigns\')"><i class="bx bx-arrow-back"></i> Back</button>' +
        '<h4 style="margin:0;font-weight:700;">' + c.name + '</h4>' +
        '<span class="badge badge-primary">' + c.code + '</span>' +
        '<span class="badge badge-success">' + c.status + '</span>' +
      '</div>' +
      '<div class="d-flex gap-2">' +
        '<button class="btn btn-outline-secondary btn-sm" onclick="navigate(\'influencer-applications\')"><i class="bx bx-paper-plane"></i> Review Applications (' + c.applicationsCount + ')</button>' +
        '<button class="btn btn-outline-secondary btn-sm" onclick="navigate(\'influencer-deliverables\')"><i class="bx bx-package"></i> Deliverables (' + c.deliverablesCount + ')</button>' +
      '</div>' +
    '</div>';

    // Progress stepper
    html += '<div class="card mb-4"><div class="card-body p-3">' +
      '<div class="d-flex justify-content-between font-12 font-weight-600 text-center flex-wrap gap-2">' +
        '<span class="text-success"><i class="bx bx-check"></i> Planning</span>' +
        '<span class="text-success"><i class="bx bx-check"></i> Recruitment</span>' +
        '<span class="text-primary font-weight-700">● Execution & Content</span>' +
        '<span class="text-secondary">○ Review & QA</span>' +
        '<span class="text-secondary">○ Publishing</span>' +
        '<span class="text-secondary">○ Performance</span>' +
        '<span class="text-secondary">○ Payout & Close</span>' +
      '</div>' +
    '</div></div>';

    // Snapshot
    html += '<div class="row g-3 mb-4">' +
      '<div class="col-md-3"><div class="p-3 bg-white border rounded text-center"><small class="text-secondary text-uppercase font-11">Total Budget</small><h5 class="mb-0 mt-1 font-weight-700 text-primary">₹' + c.budget.toLocaleString('en-IN') + '</h5></div></div>' +
      '<div class="col-md-3"><div class="p-3 bg-white border rounded text-center"><small class="text-secondary text-uppercase font-11">Earned by Creators</small><h5 class="mb-0 mt-1 font-weight-700 text-success">₹' + c.earned.toLocaleString('en-IN') + '</h5></div></div>' +
      '<div class="col-md-3"><div class="p-3 bg-white border rounded text-center"><small class="text-secondary text-uppercase font-11">Leads Generated</small><h5 class="mb-0 mt-1 font-weight-700">' + c.leadsCount + '</h5></div></div>' +
      '<div class="col-md-3"><div class="p-3 bg-white border rounded text-center"><small class="text-secondary text-uppercase font-11">Conversions</small><h5 class="mb-0 mt-1 font-weight-700 text-info">' + c.conversionsCount + '</h5></div></div>' +
    '</div>';

    // Campaign Workspace
    html += '<div class="card"><div class="card-body">' +
      '<h6 class="font-weight-700 mb-3">Assigned Influencers on this Campaign</h6>' +
      '<div class="table-responsive">' +
        '<table class="table table-hover font-13 align-middle">' +
          '<thead class="table-light"><tr><th>Creator</th><th>Deliverable Task</th><th>Followers</th><th>Engagement</th><th>Status</th><th>Action</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Arun Kumar</strong></td><td>1x YouTube Video + 2x Reels</td><td>450K</td><td><span class="badge badge-success">4.8%</span></td><td><span class="badge badge-success">Active</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="openInfluencerDetails(\'INF-001\')">View</button></td></tr>' +
            '<tr><td><strong>Priya Sundaram</strong></td><td>1x Reel + 3x Stories</td><td>280K</td><td><span class="badge badge-success">5.6%</span></td><td><span class="badge badge-warning">Revision</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="openInfluencerDetails(\'INF-002\')">View</button></td></tr>' +
            '<tr><td><strong>Vignesh M</strong></td><td>1x YouTube Video + Post</td><td>520K</td><td><span class="badge badge-success">6.2%</span></td><td><span class="badge badge-primary">Under Review</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="openInfluencerDetails(\'INF-003\')">View</button></td></tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div></div>';

    return html;
  }

  // --- 3.8 APPLICATION MANAGEMENT ---
  function renderApplications() {
    var data = MOCK.influencer.applications;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Influencer Campaign Applications (' + data.length + ')</h4>' +
        '<p class="text-secondary font-13 mb-0">Evaluate creator pitches, review proposed compensation, and grant assignment authorization.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Applicant</th><th>Campaign</th><th>Niche</th><th>Followers</th><th>Engagement</th><th>Fee</th><th>Status</th><th style="text-align:right;">Actions</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(app) {
      html += '<tr>' +
        '<td><strong>' + app.influencerName + '</strong><div class="text-secondary font-11">Applied ' + app.appliedDate + '</div></td>' +
        '<td>' + app.campaignName + '</td>' +
        '<td><span class="badge badge-secondary">' + app.niche + '</span></td>' +
        '<td>' + app.followers + '</td>' +
        '<td>' + app.engagement + '</td>' +
        '<td><strong>₹' + app.proposedFee.toLocaleString('en-IN') + '</strong></td>' +
        '<td><span class="badge ' + (app.status === 'Approved' ? 'badge-success' : (app.status === 'Shortlisted' ? 'badge-info' : (app.status === 'Rejected' ? 'badge-danger' : 'badge-warning'))) + '">' + app.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (app.status !== 'Approved' ?
            '<button class="btn btn-sm btn-outline-info me-1" onclick="updateAppStatus(\'' + app.id + '\', \'Shortlisted\')">Shortlist</button>' +
            '<button class="btn btn-sm btn-success me-1" onclick="updateAppStatus(\'' + app.id + '\', \'Approved\')">Approve</button>' +
            '<button class="btn btn-sm btn-outline-danger" onclick="updateAppStatus(\'' + app.id + '\', \'Rejected\')">Reject</button>' :
            '<span class="text-success font-12 font-weight-600"><i class="bx bx-check-double"></i> Assigned</span>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.updateAppStatus = function(id, st) {
    var app = MOCK.influencer.applications.find(function(a) { return a.id === id; });
    if (app) {
      app.status = st;
      MOCK.influencer.auditLogs.unshift({
        id: 'AUD-' + (MOCK.influencer.auditLogs.length + 1),
        user: window.INFLUENCER_ROLE,
        action: 'Application ' + st,
        module: 'Applications',
        record: app.influencerName + ' (' + app.campaignName + ')',
        prevStatus: 'Pending',
        newStatus: st,
        timestamp: new Date().toLocaleString('en-IN'),
        ip: '192.168.1.10'
      });
      if (typeof showNotification === 'function') {
        showNotification('Application for ' + app.influencerName + ' is now ' + st + '!', 'success');
      }
      navigate('influencer-applications');
    }
  };

  // --- 3.9 CONTENT REVIEW WORKSPACE WITH VERSIONING ---
  function renderContentReview() {
    var data = MOCK.influencer.contentSubmissions;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Content Review & Version Control</h4>' +
        '<p class="text-secondary font-13 mb-0">Audit creator reels, long-form videos, captions, disclosure tags, and manage revision cycles.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Influencer</th><th>Deliverable & Format</th><th>Campaign</th><th>Submission Date</th><th>Version History</th><th>Review Status</th><th style="text-align:right;">Actions</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(cs) {
      var latestVer = cs.versions[cs.versions.length - 1];
      html += '<tr>' +
        '<td><strong>' + cs.influencerName + '</strong><div class="text-secondary font-11">' + cs.platform + '</div></td>' +
        '<td><strong>' + cs.deliverable + '</strong><div class="text-muted font-11">' + cs.contentType + '</div></td>' +
        '<td>' + cs.campaignName + '</td>' +
        '<td>' + cs.submittedDate + '</td>' +
        '<td>' +
          '<span class="badge badge-secondary">' + latestVer.version + '</span> ' +
          '<small class="text-muted">(' + cs.versions.length + ' cycle' + (cs.versions.length > 1 ? 's' : '') + ')</small>' +
        '</td>' +
        '<td><span class="badge ' + (cs.status === 'Approved' ? 'badge-success' : (cs.status === 'Revision Required' ? 'badge-danger' : (cs.status === 'Published' ? 'badge-primary' : 'badge-warning'))) + '">' + cs.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="btn btn-sm btn-outline-primary me-1" onclick="openContentReviewModal(\'' + cs.id + '\')"><i class="bx bx-show"></i> Review & History</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.openContentReviewModal = function(id) {
    var cs = MOCK.influencer.contentSubmissions.find(function(x) { return x.id === id; });
    if (!cs) return;

    var html = '<div class="modal fade show" id="contReviewModal" style="display:block;background:rgba(0,0,0,0.5);" tabindex="-1">' +
      '<div class="modal-dialog modal-lg modal-dialog-centered">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<h5 class="modal-title font-weight-700">Content Audit & Version History: ' + cs.deliverable + '</h5>' +
            '<button type="button" class="btn-close" onclick="closeContReviewModal()"></button>' +
          '</div>' +
          '<div class="modal-body font-13">' +
            '<div class="row g-3 mb-3">' +
              '<div class="col-md-6"><strong>Creator:</strong> ' + cs.influencerName + '<br><strong>Platform:</strong> ' + cs.platform + '</div>' +
              '<div class="col-md-6"><strong>Campaign:</strong> ' + cs.campaignName + '<br><strong>External Link:</strong> <a href="' + cs.externalUrl + '" target="_blank">' + cs.externalUrl + '</a></div>' +
            '</div>' +
            '<div class="p-3 bg-light rounded mb-3">' +
              '<strong>Submitted Caption:</strong><p class="mb-1 text-dark">' + cs.caption + '</p>' +
              '<strong>Hashtags & Disclosures:</strong><p class="mb-0 text-primary">' + cs.hashtags + '</p>' +
            '</div>' +

            '<h6 class="font-weight-700 mt-3 mb-2">Version History & Revisions</h6>' +
            '<div style="display:flex;flex-direction:column;gap:8px;" class="mb-3">';

    cs.versions.forEach(function(v) {
      html += '<div style="padding:10px 12px;background:#f8f9fc;border-radius:6px;border-left:3px solid ' + (v.status === 'Approved' ? '#10b981' : '#f59e0b') + ';">' +
        '<div class="d-flex justify-content-between font-12"><strong>' + v.version + ' &bull; ' + v.status + '</strong><small class="text-muted">' + v.date + ' &bull; Reviewer: ' + v.reviewer + '</small></div>' +
        '<div class="text-secondary font-12 mt-1">' + v.notes + '</div>' +
      '</div>';
    });

    html += '</div>' +
            '<div class="p-2 border rounded bg-white">' +
              '<label class="form-label font-weight-600">Reviewer Revision Request Comments (If requesting changes):</label>' +
              '<textarea id="modal-rev-notes" class="form-control font-13" rows="2" placeholder="Detail required adjustments, audio balance, or missing disclosure tags..."></textarea>' +
            '</div>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button type="button" class="btn btn-secondary" onclick="closeContReviewModal()">Cancel</button>' +
            '<button type="button" class="btn btn-danger" onclick="requestContentRevision(\'' + cs.id + '\')"><i class="bx bx-revision"></i> Request Revision</button>' +
            '<button type="button" class="btn btn-success" onclick="approveContentSubmission(\'' + cs.id + '\')"><i class="bx bx-check-circle"></i> Approve Content</button>' +
            '<button type="button" class="btn btn-primary" onclick="markContentPublished(\'' + cs.id + '\')"><i class="bx bx-broadcast"></i> Mark Published</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    var container = document.getElementById('modal-container');
    if (container) {
      container.innerHTML = html;
    }
  };

  window.closeContReviewModal = function() {
    var modal = document.getElementById('contReviewModal');
    if (modal) modal.remove();
  };

  window.requestContentRevision = function(id) {
    var cs = MOCK.influencer.contentSubmissions.find(function(x) { return x.id === id; });
    var comment = document.getElementById('modal-rev-notes') ? document.getElementById('modal-rev-notes').value.trim() : '';
    if (!comment) comment = 'Revision required: Please adjust sound balance and include official scholarship URL.';

    if (cs) {
      cs.status = 'Revision Required';
      cs.versions.push({
        version: 'v' + (cs.versions.length + 1) + '.0 (Draft)',
        date: getTodayStr(0),
        status: 'Revision Requested',
        reviewer: window.INFLUENCER_ROLE,
        notes: comment
      });

      closeContReviewModal();
      if (typeof showNotification === 'function') {
        showNotification('Revision requested from ' + cs.influencerName, 'warning');
      }
      navigate('influencer-content');
    }
  };

  window.approveContentSubmission = function(id) {
    var cs = MOCK.influencer.contentSubmissions.find(function(x) { return x.id === id; });
    if (cs) {
      cs.status = 'Approved';
      cs.versions.push({
        version: 'v' + (cs.versions.length) + '.1',
        date: getTodayStr(0),
        status: 'Approved',
        reviewer: window.INFLUENCER_ROLE,
        notes: 'Signed off for live distribution across channels.'
      });

      closeContReviewModal();
      if (typeof showNotification === 'function') {
        showNotification('Content approved! Influencer notified to publish.', 'success');
      }
      navigate('influencer-content');
    }
  };

  window.markContentPublished = function(id) {
    var cs = MOCK.influencer.contentSubmissions.find(function(x) { return x.id === id; });
    if (cs) {
      cs.status = 'Published';
      closeContReviewModal();
      if (typeof showNotification === 'function') {
        showNotification('Content marked as live and published.', 'success');
      }
      navigate('influencer-content');
    }
  };

  // --- 3.10 LEADS & CONVERSIONS CRM ---
  function renderLeads() {
    var data = MOCK.influencer.leads;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Influencer Leads CRM (' + data.length + ')</h4>' +
        '<p class="text-secondary font-13 mb-0">Track prospect leads attributed through creator referral codes and vanity tracking links.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Lead ID & Source</th><th>Creator Attribution</th><th>Referral Code</th><th>Prospect</th><th>Target Product</th><th>Est. Value</th><th>Pipeline Status</th><th style="text-align:right;">Action</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(ld) {
      html += '<tr>' +
        '<td><code>' + ld.id + '</code><div class="text-secondary font-11">' + ld.source + '</div></td>' +
        '<td><strong>' + ld.influencerName + '</strong></td>' +
        '<td><span class="badge badge-info">' + ld.referralCode + '</span></td>' +
        '<td>' + ld.customerName + '<br><small class="text-secondary">' + ld.email + '</small></td>' +
        '<td>' + ld.product + '</td>' +
        '<td><strong>₹' + ld.value.toLocaleString('en-IN') + '</strong></td>' +
        '<td><span class="badge ' + (ld.status === 'Converted' ? 'badge-success' : (ld.status === 'Qualified' ? 'badge-primary' : (ld.status === 'Lost' ? 'badge-danger' : 'badge-warning'))) + '">' + ld.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (ld.status !== 'Converted' ?
            '<button class="btn btn-sm btn-success" onclick="convertLeadAction(\'' + ld.id + '\')"><i class="bx bx-check"></i> Convert</button>' :
            '<span class="text-success font-12"><i class="bx bx-check-double"></i> Verified</span>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.convertLeadAction = function(id) {
    var ld = MOCK.influencer.leads.find(function(l) { return l.id === id; });
    if (ld) {
      ld.status = 'Converted';
      var commission = Math.round(ld.value * 0.12);
      MOCK.influencer.conversions.unshift({
        id: 'CONV-' + (MOCK.influencer.conversions.length + 901),
        leadId: ld.id,
        influencerName: ld.influencerName,
        campaignName: 'Assigned Campaign',
        conversionDate: getTodayStr(0),
        value: ld.value,
        commissionRate: '12%',
        commission: commission,
        status: 'Approved'
      });

      if (typeof showNotification === 'function') {
        showNotification('Lead ' + ld.customerName + ' converted! Commission credited.', 'success');
      }
      navigate('influencer-leads');
    }
  };

  // --- 3.11 PERFORMANCE & ANALYTICS ---
  function renderPerformance() {
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Performance & Attribution Analytics</h4>' +
        '<p class="text-secondary font-13 mb-0">High-density ROI breakdown across impressions, reach, click-throughs, and cost per acquisition.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="row row-cols-1 row-cols-md-4 g-3 mb-4">' +
      '<div class="col"><div class="card p-3"><small class="text-secondary font-11 text-uppercase">Total Impressions</small><h4 class="font-weight-700 text-primary mb-0 mt-1">1,840,000</h4><span class="text-success font-11">+18% this month</span></div></div>' +
      '<div class="col"><div class="card p-3"><small class="text-secondary font-11 text-uppercase">Total Video Views</small><h4 class="font-weight-700 text-success mb-0 mt-1">685,000</h4><span class="text-muted font-11">Across YouTube & Reels</span></div></div>' +
      '<div class="col"><div class="card p-3"><small class="text-secondary font-11 text-uppercase">Tracked Clicks</small><h4 class="font-weight-700 text-info mb-0 mt-1">42,500</h4><span class="text-success font-11">5.8% CTR</span></div></div>' +
      '<div class="col"><div class="card p-3"><small class="text-secondary font-11 text-uppercase">Attributed Revenue</small><h4 class="font-weight-700 text-purple mb-0 mt-1">₹8,45,000</h4><span class="text-success font-11">ROI 3.8x</span></div></div>' +
    '</div>';

    html += '<div class="card"><div class="card-body">' +
      '<h6 class="font-weight-700 mb-3">Top Performing Influencers by Campaign ROI</h6>' +
      '<div class="table-responsive">' +
        '<table class="table table-hover font-13 align-middle">' +
          '<thead class="table-light"><tr><th>Influencer</th><th>Primary Channel</th><th>Followers</th><th>Reach</th><th>Clicks</th><th>Leads</th><th>Revenue Generated</th><th>ROI Multiple</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Suresh Raina M</strong></td><td>YouTube</td><td>680K</td><td>220,000</td><td>18,400</td><td>340</td><td>₹3,15,000</td><td><span class="badge badge-success">4.2x</span></td></tr>' +
            '<tr><td><strong>Arun Kumar</strong></td><td>YouTube & LinkedIn</td><td>450K</td><td>137,000</td><td>11,200</td><td>142</td><td>₹3,35,000</td><td><span class="badge badge-success">4.6x</span></td></tr>' +
            '<tr><td><strong>Vignesh M</strong></td><td>YouTube</td><td>520K</td><td>110,000</td><td>7,800</td><td>180</td><td>₹1,60,000</td><td><span class="badge badge-primary">3.2x</span></td></tr>' +
            '<tr><td><strong>Priya Sundaram</strong></td><td>Instagram</td><td>280K</td><td>62,000</td><td>3,900</td><td>215</td><td>₹1,80,000</td><td><span class="badge badge-info">2.9x</span></td></tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div></div>';

    return html;
  }

  // --- 3.12 FINANCE & PAYOUTS ---
  function renderPayouts() {
    var data = MOCK.influencer.payouts;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Payouts & Financial Disbursements</h4>' +
        '<p class="text-secondary font-13 mb-0">Finance admin control panel for creator milestone disbursements and invoice settlement.</p>' +
      '</div>' +
    '</div>';

    // Summary Cards
    html += '<div class="row row-cols-1 row-cols-md-4 g-3 mb-4">' +
      '<div class="col"><div class="card p-3 border-left-success"><small class="text-secondary font-11 text-uppercase">Paid Out</small><h4 class="font-weight-700 text-success mb-0">₹3,10,500</h4></div></div>' +
      '<div class="col"><div class="card p-3 border-left-warning"><small class="text-secondary font-11 text-uppercase">Processing in Bank</small><h4 class="font-weight-700 text-warning mb-0">₹48,500</h4></div></div>' +
      '<div class="col"><div class="card p-3 border-left-danger"><small class="text-secondary font-11 text-uppercase">Pending Approval</small><h4 class="font-weight-700 text-danger mb-0">₹64,500</h4></div></div>' +
      '<div class="col"><div class="card p-3 border-left-primary"><small class="text-secondary font-11 text-uppercase">Available Budget</small><h4 class="font-weight-700 text-primary mb-0">₹3,75,000</h4></div></div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Payout ID</th><th>Creator</th><th>Campaign</th><th>Amount</th><th>Method</th><th>Disbursement Date</th><th>Reference Code</th><th>Status</th><th style="text-align:right;">Action</th></tr>' +
          '</thead>' +
          '<tbody>';

    data.forEach(function(py) {
      html += '<tr>' +
        '<td><code>' + py.id + '</code></td>' +
        '<td><strong>' + py.influencerName + '</strong></td>' +
        '<td>' + py.campaign + '</td>' +
        '<td><strong class="text-dark font-14">' + py.amount + '</strong></td>' +
        '<td>' + py.method + '</td>' +
        '<td>' + py.date + '</td>' +
        '<td><code>' + py.ref + '</code></td>' +
        '<td><span class="badge ' + (py.status === 'Paid' ? 'badge-success' : (py.status === 'Processing' ? 'badge-warning' : 'badge-danger')) + '">' + py.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (py.status !== 'Paid' ?
            '<button class="btn btn-sm btn-success" onclick="processPayoutAction(\'' + py.id + '\')"><i class="bx bx-check"></i> Disburse</button>' :
            '<span class="text-success font-12"><i class="bx bx-check-double"></i> Settled</span>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  window.processPayoutAction = function(id) {
    var py = MOCK.influencer.payouts.find(function(p) { return p.id === id; });
    if (py) {
      py.status = 'Paid';
      py.ref = 'TXN-BANK-' + Math.floor(Math.random() * 90000 + 10000);
      MOCK.influencer.auditLogs.unshift({
        id: 'AUD-' + (MOCK.influencer.auditLogs.length + 1),
        user: window.INFLUENCER_ROLE,
        action: 'Disbursed Payout',
        module: 'Finance',
        record: py.influencerName + ' (' + py.amount + ')',
        prevStatus: 'Processing',
        newStatus: 'Paid',
        timestamp: new Date().toLocaleString('en-IN'),
        ip: '192.168.1.20'
      });
      if (typeof showNotification === 'function') {
        showNotification('Payout ' + py.amount + ' processed successfully for ' + py.influencerName, 'success');
      }
      navigate('influencer-payouts');
    }
  };

  // --- 3.13 LEADERBOARD & REWARDS ---
  function renderRewards() {
    var board = MOCK.influencer.leaderboard;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Engagement, Gamification & Leaderboard</h4>' +
        '<p class="text-secondary font-13 mb-0">Reward creators for on-time delivery, engagement benchmarks, and lead conversions.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Rank</th><th>Creator</th><th>Niche</th><th>Gamified Badge</th><th>Total Points</th><th>Conversions</th><th>Total Compensation</th></tr>' +
          '</thead>' +
          '<tbody>';

    board.forEach(function(b) {
      html += '<tr>' +
        '<td><div style="width:28px;height:28px;border-radius:50%;background:' + (b.rank === 1 ? '#fbbf24' : (b.rank === 2 ? '#94a3b8' : '#d97706')) + ';color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">' + b.rank + '</div></td>' +
        '<td><strong>' + b.name + '</strong><div class="text-secondary font-11">' + b.handle + '</div></td>' +
        '<td><span class="badge badge-secondary">' + b.niche + '</span></td>' +
        '<td><span class="badge badge-warning"><i class="bx bxs-award"></i> ' + b.badge + '</span></td>' +
        '<td><strong class="text-primary font-14">' + b.points.toLocaleString('en-IN') + ' pts</strong></td>' +
        '<td>' + b.conversions + ' sales</td>' +
        '<td><strong class="text-success">' + b.earnings + '</strong></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  // --- 3.14 AUDIT LOGS ---
  function renderAuditLogs() {
    var logs = MOCK.influencer.auditLogs;
    var html = renderRoleSwitcherBanner();

    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Enterprise Marketing Audit Logs</h4>' +
        '<p class="text-secondary font-13 mb-0">Immutable tracking of every status change, payout approval, and campaign authorization.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card"><div class="card-body p-0">' +
      '<div class="table-responsive">' +
        '<table class="table table-hover align-middle mb-0 font-13">' +
          '<thead class="table-light">' +
            '<tr><th>Timestamp</th><th>User</th><th>Action Performed</th><th>Module</th><th>Record Affected</th><th>Status Transition</th><th>IP Placeholder</th></tr>' +
          '</thead>' +
          '<tbody>';

    logs.forEach(function(l) {
      html += '<tr>' +
        '<td>' + l.timestamp + '</td>' +
        '<td><strong>' + l.user + '</strong></td>' +
        '<td><span class="badge badge-primary">' + l.action + '</span></td>' +
        '<td>' + l.module + '</td>' +
        '<td>' + l.record + '</td>' +
        '<td><small class="text-muted">' + l.prevStatus + '</small> &rarr; <strong class="text-dark">' + l.newStatus + '</strong></td>' +
        '<td><code>' + l.ip + '</code></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  // --- 3.15 SETTINGS ---
  function renderSettings() {
    var html = renderRoleSwitcherBanner();
    html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
      '<div>' +
        '<h4 style="margin:0;font-weight:700;">Influencer Module Governance & Settings</h4>' +
        '<p class="text-secondary font-13 mb-0">Configure default commission structures, SLA deadlines, and access control scopes.</p>' +
      '</div>' +
    '</div>';

    html += '<div class="card" style="max-width:800px;"><div class="card-body font-13">' +
      '<h6 class="font-weight-700 mb-3">Commission & Compensation Policy</h6>' +
      '<div class="row g-3 mb-4">' +
        '<div class="col-md-6"><label class="form-label">Default Referral Commission (%)</label><input type="number" class="form-control" value="12"></div>' +
        '<div class="col-md-6"><label class="form-label">TDS Withholding Deduction (%)</label><input type="number" class="form-control" value="10"></div>' +
        '<div class="col-md-6"><label class="form-label">Content Review SLA Window (Days)</label><input type="number" class="form-control" value="3"></div>' +
        '<div class="col-md-6"><label class="form-label">Automated Payout Trigger</label><select class="form-select"><option>Manual Finance Approval</option><option>On Deliverable Approval</option></select></div>' +
      '</div>' +
      '<button class="btn btn-primary" onclick="showNotification(\'Settings saved successfully!\', \'success\')"><i class="bx bx-save"></i> Save Global Settings</button>' +
    '</div></div>';
    return html;
  }

  // Generic Placeholder for remaining specific sub-routes to guarantee full coverage
  function renderGenericSubRoute(title, icon) {
    return function() {
      var html = renderRoleSwitcherBanner();
      html += '<div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">' +
        '<div>' +
          '<h4 style="margin:0;font-weight:700;"><i class="' + icon + ' text-primary"></i> ' + title + '</h4>' +
          '<p class="text-secondary font-13 mb-0">Influencer Admin workspace &bull; Enterprise ERP Connected.</p>' +
        '</div>' +
      '</div>' +
      '<div class="card"><div class="card-body font-13">' +
        '<p>This module provides full administrative operational capability for <strong>' + title + '</strong>.</p>' +
        '<button class="btn btn-primary btn-sm" onclick="navigate(\'influencer-dashboard\')">Return to Influencer Dashboard</button>' +
      '</div></div>';
      return html;
    };
  }

  // ============================================================================
  // 4. REGISTER ALL INFLUENCER RENDERERS IN RENDERERS OBJECT
  // ============================================================================
  function registerRenderers() {
    var reg = null;
    if (typeof RENDERERS !== 'undefined') reg = RENDERERS;
    else if (typeof window !== 'undefined' && window.RENDERERS) reg = window.RENDERERS;
    else if (typeof window !== 'undefined') { window.RENDERERS = {}; reg = window.RENDERERS; }

    if (reg) {
      reg['influencer-dashboard'] = renderInfluencerDashboard;
      reg['influencer-list'] = renderInfluencerList;
      reg['influencer-detail'] = renderInfluencerDetail;
      reg['influencer-verification'] = renderInfluencerVerification;
      reg['influencer-campaigns'] = renderCampaigns;
      reg['influencer-campaign-create'] = renderCampaignCreate;
      reg['influencer-campaign-detail'] = renderCampaignDetail;
      reg['influencer-applications'] = renderApplications;
      reg['influencer-assignments'] = renderGenericSubRoute('Active Campaign Assignments', 'bx bx-briefcase');
      reg['influencer-deliverables'] = renderGenericSubRoute('Deliverables Matrix & Deadlines', 'bx bx-package');
      reg['influencer-content'] = renderContentReview;
      reg['influencer-leads'] = renderLeads;
      reg['influencer-conversions'] = renderGenericSubRoute('Conversion Tracking & Orders', 'bx bx-cart');
      reg['influencer-performance'] = renderPerformance;
      reg['influencer-earnings'] = renderGenericSubRoute('Creator Earnings Statements', 'bx bx-wallet');
      reg['influencer-invoices'] = renderGenericSubRoute('Invoice Ingestion & Audit', 'bx bx-receipt');
      reg['influencer-payouts'] = renderPayouts;
      reg['influencer-rewards'] = renderRewards;
      reg['influencer-marketing'] = renderGenericSubRoute('Brand Assets & Resource Repository', 'bx bx-folder');
      reg['influencer-messages'] = renderGenericSubRoute('Creator Communications & Messages', 'bx bx-message-square-dots');
      reg['influencer-calendar'] = renderGenericSubRoute('Campaign Schedule & Publishing Calendar', 'bx bx-calendar');
      reg['influencer-tasks'] = renderGenericSubRoute('Campaign Team Tasks', 'bx bx-check-square');
      reg['influencer-support'] = renderGenericSubRoute('Support Tickets & Dispute Resolution', 'bx bx-support');
      reg['influencer-audit-logs'] = renderAuditLogs;
      reg['influencer-settings'] = renderSettings;
    }
    if (typeof window !== 'undefined') {
      window.RENDERERS = reg;
    }
  }

  // ============================================================================
  // 5. BOOTSTRAP INITIALIZATION
  // ============================================================================
  function initModule() {
    injectInfluencerSidebar();
    hookNavigate();
    registerRenderers();
  }

  // Run immediately and also on DOM ready
  initModule();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModule);
  } else {
    setTimeout(initModule, 50);
  }

})();
