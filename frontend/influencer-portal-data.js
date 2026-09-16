/* ==========================================================================
   RORIRI SOFTWARE SOLUTIONS ERP — INFLUENCER USER PORTAL MOCK DATA
   ========================================================================== */

window.INFLUENCER_DB = {
  // Current Logged-in Influencer Profile
  currentUser: {
    id: 'INF-8842',
    name: 'Alex Rivera',
    handle: '@alexrivera_tech',
    email: 'alex.rivera@creatornetwork.io',
    phone: '+1 (555) 384-9102',
    location: 'San Francisco, CA, USA',
    timezone: 'America/Los_Angeles (PST)',
    languages: ['English', 'Spanish'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    verified: true,
    verificationStatus: 'Verified Creator',
    accountStatus: 'Active', // 'Active' or 'Suspended'
    profileCompletion: 85,
    niche: 'Tech, SaaS & Developer Productivity',
    specialization: 'Developer Workstations, Cloud IDEs, SaaS Reviews & AI Workflows',
    experience: '6+ Years Enterprise & Creator Experience',
    tier: 'Tier 3 Elite Creator',
    rating: 4.95,
    bio: 'Senior tech reviewer and developer advocate with 1.4M+ cross-platform community. Covering developer tooling, enterprise cloud platforms, smart workstations, and AI ergonomics.',
    collaborationPreferences: 'Dedicated YouTube reviews, sponsored reels, B2B thought leadership, annual brand ambassadorship.',
    availability: 'Available for Q3/Q4 Campaigns',
    rateCard: {
      instagramReel: 2500,
      youtubeDedicated: 6500,
      tiktokShort: 1800,
      linkedinArticle: 2200,
      storySet: 1200
    },
    preferredCompensation: 'Fixed Fee + 15% Performance Bonus & Commission'
  },

  // Alternate Demo Users
  demoUsers: [
    {
      id: 'INF-8842',
      name: 'Alex Rivera',
      handle: '@alexrivera_tech',
      niche: 'Tech & Lifestyle',
      accountStatus: 'Active',
      tier: 'Tier 3 Elite'
    },
    {
      id: 'INF-9104',
      name: 'Priya Sundaram',
      handle: '@priyastyle_official',
      niche: 'Fashion & Design',
      accountStatus: 'Active',
      tier: 'Tier 2 Pro'
    },
    {
      id: 'INF-7721',
      name: 'Marcus Vance',
      handle: '@marcus_vance_fit',
      niche: 'Fitness & Health',
      accountStatus: 'Suspended',
      tier: 'Tier 1 Creator'
    }
  ],

  // Connected Social Accounts
  socialAccounts: [
    {
      id: 'soc-1',
      platform: 'Instagram',
      icon: 'bxl-instagram',
      color: '#e1306c',
      handle: '@alexrivera_tech',
      url: 'https://instagram.com/alexrivera_tech',
      followers: '485,200',
      engagementRate: '4.85%',
      avgViews: '124,000',
      demographics: '68% 18-34 yrs, 62% Tech/Dev, USA & UK',
      verified: true,
      status: 'Connected'
    },
    {
      id: 'soc-2',
      platform: 'YouTube',
      icon: 'bxl-youtube',
      color: '#ff0000',
      handle: 'Alex Rivera Tech',
      url: 'https://youtube.com/@alexriveratech',
      followers: '624,000',
      engagementRate: '6.40%',
      avgViews: '185,000',
      demographics: '74% 25-44 yrs, 81% Software Engineers',
      verified: true,
      status: 'Connected'
    },
    {
      id: 'soc-3',
      platform: 'TikTok',
      icon: 'bxl-tiktok',
      color: '#000000',
      handle: '@alexrivera_tech',
      url: 'https://tiktok.com/@alexrivera_tech',
      followers: '312,500',
      engagementRate: '7.92%',
      avgViews: '240,000',
      demographics: '82% 18-28 yrs, Early career developers',
      verified: true,
      status: 'Connected'
    },
    {
      id: 'soc-4',
      platform: 'LinkedIn',
      icon: 'bxl-linkedin',
      color: '#0a66c2',
      handle: 'Alex Rivera',
      url: 'https://linkedin.com/in/alexrivera-tech',
      followers: '44,800',
      engagementRate: '3.65%',
      avgViews: '32,000',
      demographics: 'CTOs, Engineering Managers, Product Leads',
      verified: true,
      status: 'Connected'
    }
  ],

  // Creator Media Kit
  mediaKit: {
    totalAudience: '1,466,500+',
    avgMonthlyImpressions: '8.4 Million',
    overallEngagementRate: '5.7%',
    primaryAgeRange: '21 - 38 (72%)',
    topGeographies: 'USA (48%), Germany (14%), UK (12%), Canada (9%)',
    commercialServices: [
      { name: 'Sponsored YouTube 8-12m Integration', baseRate: '$6,500' },
      { name: 'Multi-Asset Instagram Reel + Story Set', baseRate: '$3,400' },
      { name: 'Cross-Platform B2B SaaS Launch Blitz', baseRate: '$10,500' },
      { name: 'Affiliate Code & Retargeting Lead Gen', baseRate: 'Rev Share (18%)' }
    ]
  },

  // Creator Portfolio
  portfolio: [
    {
      id: 'port-1',
      campaign: 'Logitech MX Master 4 Ecosystem',
      client: 'Logitech Global',
      platform: 'YouTube & Instagram',
      type: 'Sponsored Video & Reels',
      thumbnail: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&q=80',
      reach: '482,000',
      views: '310,000',
      engagement: '6.8%',
      conversions: 240,
      highlight: 'Generated over $38,000 in tracked hardware sales via affiliate link.'
    },
    {
      id: 'port-2',
      campaign: 'Notion 3.0 Workspace Architecture',
      client: 'Notion Labs',
      platform: 'LinkedIn & YouTube',
      type: 'Workflow Masterclass',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
      reach: '620,000',
      views: '415,000',
      engagement: '7.4%',
      conversions: 1850,
      highlight: 'Drove 1,850+ enterprise signups within first 14 days of publication.'
    },
    {
      id: 'port-3',
      campaign: 'NordVPN Cyber Security Suite',
      client: 'Nord Security',
      platform: 'TikTok & Shorts',
      type: 'Short-form Series',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80',
      reach: '890,000',
      views: '740,000',
      engagement: '8.2%',
      conversions: 940,
      highlight: 'Best performing video achieved 4.2M views with viral sound.'
    }
  ],

  // Verification Center
  verifications: [
    { type: 'Identity Verification (Gov ID / Passport)', status: 'Verified', date: '2025-11-14', badgeClass: 'inf-badge-success' },
    { type: 'Primary Social Handles Authentication', status: 'Verified', date: '2025-11-15', badgeClass: 'inf-badge-success' },
    { type: 'RORIRI ERP Creator Background Screening', status: 'Verified', date: '2025-11-16', badgeClass: 'inf-badge-success' },
    { type: 'W-9 / Tax Clearance Certification', status: 'Verified', date: '2026-01-08', badgeClass: 'inf-badge-success' }
  ],

  // Documents
  documents: [
    { id: 'DOC-101', name: 'Master Creator Services Agreement v2.1.pdf', category: 'Campaign Contracts', campaign: 'Global ERP Terms', version: 'v2.1', date: '2026-01-10', status: 'Signed & Active' },
    { id: 'DOC-102', name: 'Brand Safety & Compliance Manual 2026.pdf', category: 'Brand Guidelines', campaign: 'General', version: 'v3.0', date: '2026-01-15', status: 'Acknowledged' },
    { id: 'DOC-103', name: 'Hyperion Cloud IDE Scope & Terms v1.4.pdf', category: 'Campaign Terms', campaign: 'Hyperion Cloud IDE', version: 'v1.4', date: '2026-08-20', status: 'Accepted' },
    { id: 'DOC-104', name: 'Invoice INV-2026-004 Official Signoff.pdf', category: 'Invoices', campaign: 'Logitech MX Launch', version: 'v1.0', date: '2026-08-28', status: 'Approved' },
    { id: 'DOC-105', name: 'AudioPro Anc Testing NDA & Release.pdf', category: 'Campaign Contracts', campaign: 'AudioPro ANC Review', version: 'v1.1', date: '2026-09-02', status: 'Signed' }
  ],

  // Campaigns
  campaigns: [
    {
      id: 'CMP-101',
      name: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      client: 'Hyperion Technologies Corp',
      type: 'Sponsored Video & Social Blitz',
      objective: 'Drive developer signups for next-gen browser IDE with cloud GPU containers.',
      startDate: '2026-08-25',
      endDate: '2026-09-30',
      deadline: '2026-09-18',
      progress: 65,
      deliverablesCompleted: 2,
      deliverablesRemaining: 2,
      nextDeadline: '2026-09-15',
      totalBudget: 8500,
      approvedEarnings: 4250,
      status: 'Active',
      description: 'Hyperion is rolling out its groundbreaking cloud IDE capable of real-time multi-agent AI pair programming. You will demonstrate setting up a project, streaming tokens, and deploying to Kubernetes in under 60 seconds.',
      termsVersion: 'v1.4',
      termsAccepted: true,
      termsAcceptedDate: '2026-08-26 10:45 AM',
      compensation: {
        fixedFee: 6500,
        bonus: 2000,
        commission: '$12 per verified developer signup'
      },
      guidelines: 'Must include #HyperionIDE and #Sponsored. Explicitly mention the free 100 GPU hours tier in the first 90 seconds.',
      resources: ['Hyperion_Brand_Kit_2026.zip', 'Keynote_Screenshots_4K.zip', 'Demo_Kubernetes_Snippet.js']
    },
    {
      id: 'CMP-102',
      name: 'Logitech MX Master 4 Ergonomics Blitz',
      brand: 'Logitech Global',
      client: 'Logitech Business Solutions',
      type: 'Affiliate & Dedicated Review',
      objective: 'Position the new MX Master 4 as the essential tool for developers and creators.',
      startDate: '2026-08-15',
      endDate: '2026-09-28',
      deadline: '2026-09-20',
      progress: 80,
      deliverablesCompleted: 4,
      deliverablesRemaining: 1,
      nextDeadline: '2026-09-16',
      totalBudget: 6000,
      approvedEarnings: 4800,
      status: 'Active',
      description: 'Highlight the haptic scroll wheel, 8000 DPI sensor across glass surfaces, and customizable gesture triggers for VS Code and Figma.',
      termsVersion: 'v2.0',
      termsAccepted: true,
      termsAcceptedDate: '2026-08-16 02:15 PM',
      compensation: {
        fixedFee: 4500,
        bonus: 1500,
        commission: '12% net sales via unique affiliate URL'
      },
      guidelines: 'Clean minimalist desk aesthetic, showcase macro mappings.',
      resources: ['Logitech_MX4_Product_Renders.zip', 'Spec_Sheet_Official.pdf']
    },
    {
      id: 'CMP-103',
      name: 'NextGen AI Productivity Suite',
      brand: 'FlowState AI',
      client: 'FlowState Enterprises',
      type: 'Lead Generation & Reels',
      objective: 'Showcase automated task workflows for busy professionals.',
      startDate: '2026-09-01',
      endDate: '2026-10-15',
      deadline: '2026-09-25',
      progress: 35,
      deliverablesCompleted: 1,
      deliverablesRemaining: 3,
      nextDeadline: '2026-09-18',
      totalBudget: 5200,
      approvedEarnings: 1300,
      status: 'Active',
      description: 'Demonstrate FlowState AI summarizing meeting notes, drafting tickets, and syncing with Google Workspace in real time.',
      termsVersion: 'v1.1',
      termsAccepted: true,
      termsAcceptedDate: '2026-09-02 11:30 AM',
      compensation: {
        fixedFee: 3600,
        bonus: 1600,
        commission: '$8 per active trial initiated'
      },
      guidelines: 'High energy vertical video pacing with dynamic captions.',
      resources: ['FlowState_UI_Mockups.zip', 'Talking_Points_Doc.pdf']
    },
    {
      id: 'CMP-104',
      name: 'UltraSound ANC Studio Headphones',
      brand: 'AudioPro Labs',
      client: 'AudioPro International',
      type: 'Audio Review & Shorts',
      objective: 'Highlight active noise cancellation in open coffee shops and noisy offices.',
      startDate: '2026-09-05',
      endDate: '2026-10-20',
      deadline: '2026-10-02',
      progress: 20,
      deliverablesCompleted: 1,
      deliverablesRemaining: 4,
      nextDeadline: '2026-09-22',
      totalBudget: 4500,
      approvedEarnings: 900,
      status: 'Active',
      description: 'AudioPro ANC delivers 45dB noise suppression. Test side-by-side with keyboard typing and cafe chatter.',
      termsVersion: 'v1.0',
      termsAccepted: true,
      termsAcceptedDate: '2026-09-06 04:20 PM',
      compensation: {
        fixedFee: 3200,
        bonus: 1300,
        commission: '10% affiliate kickback'
      },
      guidelines: 'Crisp audio recording quality mandatory.',
      resources: ['AudioPro_ANC_PressKit.zip']
    },
    {
      id: 'CMP-105',
      name: 'FinFlow Smart Business Banking',
      brand: 'FinFlow ERP',
      client: 'FinFlow Financial Technologies',
      type: 'B2B Thought Leadership & Article',
      objective: 'Educate small tech agencies on zero-fee multi-currency accounts and treasury yield.',
      startDate: '2026-10-01',
      endDate: '2026-11-15',
      deadline: '2026-09-28',
      progress: 0,
      deliverablesCompleted: 0,
      deliverablesRemaining: 3,
      nextDeadline: '2026-10-05',
      totalBudget: 7000,
      approvedEarnings: 0,
      status: 'Available',
      description: 'Write an authoritative breakdown on LinkedIn and publish a carousel detailing how tech founders optimize payroll across 8 countries.',
      termsVersion: 'v1.0',
      termsAccepted: false,
      termsAcceptedDate: null,
      compensation: {
        fixedFee: 5000,
        bonus: 2000,
        commission: '$45 per approved business banking entity'
      },
      guidelines: 'Strict financial compliance; no guarantees of return, disclaimer required.',
      resources: ['FinFlow_Compliance_Checklist.pdf', 'Founders_CaseStudy.pdf']
    },
    {
      id: 'CMP-106',
      name: 'CyberGuard Enterprise VPN v4',
      brand: 'CyberGuard Systems',
      client: 'CyberGuard Network Security',
      type: 'Affiliate Campaign & Review',
      objective: 'Demonstrate zero-trust network encryption for remote engineers.',
      startDate: '2026-10-05',
      endDate: '2026-11-20',
      deadline: '2026-10-01',
      progress: 0,
      deliverablesCompleted: 0,
      deliverablesRemaining: 2,
      nextDeadline: '2026-10-10',
      totalBudget: 3500,
      approvedEarnings: 0,
      status: 'Available',
      description: 'CyberGuard protects developer SSH keys and API secrets when working on public Wi-Fi networks.',
      termsVersion: 'v1.2',
      termsAccepted: false,
      termsAcceptedDate: null,
      compensation: {
        fixedFee: 2500,
        bonus: 1000,
        commission: '25% recurring monthly subscription bounty'
      },
      guidelines: 'Demonstrate terminal packet capture comparison.',
      resources: ['CyberGuard_Brand_Guidelines.pdf']
    },
    {
      id: 'CMP-107',
      name: 'CleanCode Developer Conference 2026',
      brand: 'DevSummit Org',
      client: 'Global Tech Summits LLC',
      type: 'Event Ambassador & Livestream',
      objective: 'Drive ticket sales and host virtual backstage creator Q&A.',
      startDate: '2026-10-15',
      endDate: '2026-11-05',
      deadline: '2026-10-05',
      progress: 0,
      deliverablesCompleted: 0,
      deliverablesRemaining: 4,
      nextDeadline: '2026-10-18',
      totalBudget: 5000,
      approvedEarnings: 0,
      status: 'Available',
      description: 'Official ambassador program including free VIP travel ticket + VIP backstage interview access with top open source maintainers.',
      termsVersion: 'v1.0',
      termsAccepted: false,
      termsAcceptedDate: null,
      compensation: {
        fixedFee: 3500,
        bonus: 1500,
        commission: '$20 per conference pass sold'
      },
      guidelines: 'Highlight keynote speakers and hands-on AI workshops.',
      resources: ['DevSummit_Speaker_Lineup.pdf']
    },
    {
      id: 'CMP-108',
      name: 'ErgoDesk Pro Electric Standing Desk',
      brand: 'ErgoDesign Co',
      client: 'ErgoDesign Workspaces',
      type: 'Unboxing & Studio Build Reel',
      objective: 'Showcase dual-motor lifting, cable management tray, and solid walnut top.',
      startDate: '2026-10-20',
      endDate: '2026-11-30',
      deadline: '2026-10-10',
      progress: 0,
      deliverablesCompleted: 0,
      deliverablesRemaining: 2,
      nextDeadline: '2026-10-25',
      totalBudget: 4200,
      approvedEarnings: 0,
      status: 'Available',
      description: 'Includes delivery of full motorized desk to your studio plus creator fee.',
      termsVersion: 'v1.1',
      termsAccepted: false,
      termsAcceptedDate: null,
      compensation: {
        fixedFee: 3000,
        bonus: 1200,
        commission: '$50 per desk checkout'
      },
      guidelines: 'Cinematic b-roll lighting showcasing wood grain and smooth lift.',
      resources: ['ErgoDesk_Specs_Assembly.pdf']
    }
  ],

  // Applications
  applications: [
    {
      id: 'APP-501',
      campaignId: 'CMP-101',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      appliedDate: '2026-08-20',
      status: 'Approved', // Draft, Applied, Under Review, Shortlisted, Approved, Terms Accepted, Active, Completed, Rejected
      proposal: 'I will film an 11-minute deep-dive building a fullstack Rust microservice live in Hyperion, demonstrating 0s latency and instant cloud compilation.',
      termsAccepted: true,
      termsVersion: 'v1.4',
      termsTimestamp: '2026-08-20 09:12 AM',
      requestedCompensation: '$8,500'
    },
    {
      id: 'APP-502',
      campaignId: 'CMP-102',
      campaignName: 'Logitech MX Master 4 Ergonomics Blitz',
      brand: 'Logitech Global',
      appliedDate: '2026-08-12',
      status: 'Approved',
      proposal: 'Will create an ultra-high aesthetic workspace tour featuring the MX Master 4 with dedicated macro keys configured for VS Code and Docker.',
      termsAccepted: true,
      termsVersion: 'v2.0',
      termsTimestamp: '2026-08-12 04:30 PM',
      requestedCompensation: '$6,000'
    },
    {
      id: 'APP-503',
      campaignId: 'CMP-103',
      campaignName: 'NextGen AI Productivity Suite',
      brand: 'FlowState AI',
      appliedDate: '2026-08-28',
      status: 'Approved',
      proposal: 'A 3-part Instagram Reel series highlighting real-time automated sprint planning with FlowState AI.',
      termsAccepted: true,
      termsVersion: 'v1.1',
      termsTimestamp: '2026-08-28 01:15 PM',
      requestedCompensation: '$5,200'
    },
    {
      id: 'APP-504',
      campaignId: 'CMP-105',
      campaignName: 'FinFlow Smart Business Banking',
      brand: 'FinFlow ERP',
      appliedDate: '2026-09-08',
      status: 'Under Review',
      proposal: 'LinkedIn article + carousel breaking down corporate treasury optimization for boutique dev agencies.',
      termsAccepted: true,
      termsVersion: 'v1.0',
      termsTimestamp: '2026-09-08 11:05 AM',
      requestedCompensation: '$7,000'
    },
    {
      id: 'APP-505',
      campaignId: 'CMP-106',
      campaignName: 'CyberGuard Enterprise VPN v4',
      brand: 'CyberGuard Systems',
      appliedDate: '2026-09-09',
      status: 'Shortlisted',
      proposal: 'Comparison test capturing Wi-Fi packet headers at a busy tech conference to prove encrypted integrity.',
      termsAccepted: true,
      termsVersion: 'v1.2',
      termsTimestamp: '2026-09-09 03:45 PM',
      requestedCompensation: '$3,500'
    }
  ],

  // Deliverables
  deliverables: [
    {
      id: 'DEL-201',
      campaignId: 'CMP-101',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      type: 'Instagram Reel (60s)',
      platform: 'Instagram',
      quantity: 1,
      dueDate: '2026-09-12',
      publishDeadline: '2026-09-14',
      status: 'Approved', // Pending, In Progress, Submitted, Revision Required, Approved, Published, Overdue
      compensation: '$2,000',
      notes: 'Focus on instant zero-install setup and multi-cursor pair programming.'
    },
    {
      id: 'DEL-202',
      campaignId: 'CMP-101',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      type: 'YouTube Dedicated Video (10m+)',
      platform: 'YouTube',
      quantity: 1,
      dueDate: '2026-09-15',
      publishDeadline: '2026-09-18',
      status: 'Revision Required',
      compensation: '$4,500',
      notes: 'Reviewer requested adding 20s segment demonstrating git branch previews.'
    },
    {
      id: 'DEL-203',
      campaignId: 'CMP-101',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      type: 'LinkedIn Carousel & Story',
      platform: 'LinkedIn',
      quantity: 1,
      dueDate: '2026-09-20',
      publishDeadline: '2026-09-22',
      status: 'Submitted',
      compensation: '$1,000',
      notes: 'Slide deck breaking down cloud container security and cost savings.'
    },
    {
      id: 'DEL-204',
      campaignId: 'CMP-101',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      brand: 'Hyperion Dev Labs',
      type: 'Story Set with Swipe-Up Link',
      platform: 'Instagram',
      quantity: 3,
      dueDate: '2026-09-24',
      publishDeadline: '2026-09-25',
      status: 'Pending',
      compensation: '$1,000',
      notes: 'Reminder stories highlighting final 48 hours of 100 free GPU credits.'
    },
    {
      id: 'DEL-205',
      campaignId: 'CMP-102',
      campaignName: 'Logitech MX Master 4 Ergonomics Blitz',
      brand: 'Logitech Global',
      type: 'YouTube Shorts (45s)',
      platform: 'YouTube',
      quantity: 1,
      dueDate: '2026-09-08',
      publishDeadline: '2026-09-09',
      status: 'Published',
      compensation: '$1,200',
      notes: 'Live URL verified. View count exceeded 140,000 within 48 hours.'
    },
    {
      id: 'DEL-206',
      campaignId: 'CMP-102',
      campaignName: 'Logitech MX Master 4 Ergonomics Blitz',
      brand: 'Logitech Global',
      type: 'Instagram Reel & Macro Setup',
      platform: 'Instagram',
      quantity: 1,
      dueDate: '2026-09-14',
      publishDeadline: '2026-09-16',
      status: 'Approved',
      compensation: '$2,400',
      notes: 'Ready for scheduled publication on Thursday 11:00 AM PST.'
    },
    {
      id: 'DEL-207',
      campaignId: 'CMP-103',
      campaignName: 'NextGen AI Productivity Suite',
      brand: 'FlowState AI',
      type: 'TikTok Fast Tutorial (60s)',
      platform: 'TikTok',
      quantity: 1,
      dueDate: '2026-09-18',
      publishDeadline: '2026-09-20',
      status: 'In Progress',
      compensation: '$1,800',
      notes: 'Demonstrate speech-to-PR workflow using FlowState voice model.'
    },
    {
      id: 'DEL-208',
      campaignId: 'CMP-104',
      campaignName: 'UltraSound ANC Studio Headphones',
      brand: 'AudioPro Labs',
      type: 'Audio Comparison Video',
      platform: 'YouTube',
      quantity: 1,
      dueDate: '2026-09-05',
      publishDeadline: '2026-09-07',
      status: 'Overdue',
      compensation: '$2,000',
      notes: 'Deliverable marked overdue. Influencer requested 4-day extension due to audio interface firmware update.'
    }
  ],

  // Content Submissions with Multi-Version Review Lifecycle
  contentSubmissions: [
    {
      id: 'CS-401',
      deliverableId: 'DEL-201',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      deliverableName: 'Instagram Reel (60s)',
      platform: 'Instagram',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=350&q=80',
      submittedDate: '2026-09-10 03:20 PM',
      reviewStatus: 'Approved', // Draft, Submitted, Under Review, Revision Required, Resubmitted, Approved, Published, Verified
      reviewer: 'Sarah Jenkins (Hyperion Marketing Director)',
      reviewerComment: 'Exceptional walkthrough! Crisp pacing, clear visual contrast, and the disclaimer is placed prominently.',
      publishedUrl: 'https://instagram.com/reel/C89_hyperion_dev_alex',
      caption: 'Coding on a MacBook Air with 8x H100 GPUs in the browser? 🤯 Trying out @HyperionDev cloud IDE. Zero install, blazing speed. Link in bio for 100 free GPU hours! #HyperionIDE #DevTools #Sponsored',
      hashtags: '#HyperionIDE #CloudDevelopment #RustLang #WebDevelopment #SoftwareEngineer #CodingTips',
      version: 'v1.0',
      versionHistory: [
        { version: 'v1.0', date: '2026-09-10 03:20 PM', status: 'Approved', reviewerNote: 'Approved without changes required.' }
      ]
    },
    {
      id: 'CS-402',
      deliverableId: 'DEL-202',
      campaignName: 'Hyperion Cloud IDE Global Launch',
      deliverableName: 'YouTube Dedicated Video (10m+)',
      platform: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=350&q=80',
      submittedDate: '2026-09-11 05:40 PM',
      reviewStatus: 'Revision Required',
      reviewer: 'David Chen (Hyperion Technical Lead)',
      reviewerComment: 'Overall benchmark is fantastic, but please add a 20-30s screen recording demonstrating the automated git preview links before the final recap.',
      publishedUrl: null,
      caption: 'The End of Local Development? Hands-on benchmark test of Hyperion Cloud IDE vs M3 Max Local Machine.',
      hashtags: '#HyperionIDE #TechReview #CloudGPU #Coding #Developer',
      version: 'v1.0',
      versionHistory: [
        {
          version: 'v1.0',
          date: '2026-09-11 05:40 PM',
          status: 'Revision Required',
          reviewerNote: 'Add git preview branch demonstration at timestamp 07:15.'
        }
      ]
    },
    {
      id: 'CS-403',
      deliverableId: 'DEL-205',
      campaignName: 'Logitech MX Master 4 Ergonomics Blitz',
      deliverableName: 'YouTube Shorts (45s)',
      platform: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=350&q=80',
      submittedDate: '2026-09-06 10:15 AM',
      reviewStatus: 'Verified',
      reviewer: 'Elena Rostova (Logitech Creator Operations)',
      reviewerComment: 'Verified live URL and engagement metrics. 142,000 views recorded.',
      publishedUrl: 'https://youtube.com/shorts/mx4_desk_setup_alex',
      caption: 'My favorite mouse gesture shortcuts for instant debugging with Logitech MX Master 4 #LogitechMX #DeskSetup #Ad',
      hashtags: '#Logitech #Productivity #Workstation #Developer',
      version: 'v2.0',
      versionHistory: [
        { version: 'v1.0', date: '2026-09-04', status: 'Revision Required', reviewerNote: 'Please adjust lighting on side thumb wheel.' },
        { version: 'v2.0', date: '2026-09-06', status: 'Approved', reviewerNote: 'Perfect b-roll lighting. Approved to publish.' }
      ]
    }
  ],

  // Leads CRM (with Stage Funnel: New -> Contacted -> Qualified -> Interested -> Converted -> Lost)
  leads: [
    { id: 'LD-1001', campaign: 'Hyperion Cloud IDE', source: 'YouTube Video Link', referralCode: 'ALEX-HYPERION-26', contactMasked: 'j***n@synthetix.io', product: 'Hyperion Enterprise Tier', value: '$2,400', status: 'Converted', createdDate: '2026-08-28', followUpDate: '2026-09-04' },
    { id: 'LD-1002', campaign: 'Hyperion Cloud IDE', source: 'Instagram Reel Bio', referralCode: 'ALEX-HYPERION-26', contactMasked: 'm***k@techcorp.co', product: 'Hyperion Team Tier (10 seats)', value: '$1,800', status: 'Converted', createdDate: '2026-08-30', followUpDate: '2026-09-05' },
    { id: 'LD-1003', campaign: 'Logitech MX Master 4', source: 'YouTube Shorts Link', referralCode: 'ALEX-MX4-DEAL', contactMasked: 'c***e@devstudio.design', product: 'MX Master 4 + Mechanical Mini', value: '$280', status: 'Converted', createdDate: '2026-09-01', followUpDate: '2026-09-03' },
    { id: 'LD-1004', campaign: 'Hyperion Cloud IDE', source: 'LinkedIn Post', referralCode: 'ALEX-HYPERION-26', contactMasked: 'd***r@fintechlab.de', product: 'Cloud GPU Dedicated Cluster', value: '$6,500', status: 'Qualified', createdDate: '2026-09-02', followUpDate: '2026-09-14' },
    { id: 'LD-1005', campaign: 'FlowState AI', source: 'TikTok Bio', referralCode: 'FLOW-ALEX-AI', contactMasked: 's***a@agencyglow.com', product: 'FlowState Enterprise Pro', value: '$1,200', status: 'Interested', createdDate: '2026-09-04', followUpDate: '2026-09-15' },
    { id: 'LD-1006', campaign: 'Logitech MX Master 4', source: 'YouTube Description', referralCode: 'ALEX-MX4-DEAL', contactMasked: 'a***v@freelancecoder.org', product: 'MX Master 4 Graphite', value: '$129', status: 'Converted', createdDate: '2026-09-05', followUpDate: '2026-09-06' },
    { id: 'LD-1007', campaign: 'Hyperion Cloud IDE', source: 'Twitter/X Thread', referralCode: 'ALEX-HYPERION-26', contactMasked: 'k***p@venturestudio.ca', product: 'Hyperion Team 5 Seats', value: '$900', status: 'Contacted', createdDate: '2026-09-06', followUpDate: '2026-09-16' },
    { id: 'LD-1008', campaign: 'FlowState AI', source: 'Instagram Story Link', referralCode: 'FLOW-ALEX-AI', contactMasked: 'r***t@saaslaunch.co', product: 'FlowState Team Annual', value: '$1,440', status: 'New', createdDate: '2026-09-07', followUpDate: '2026-09-17' },
    { id: 'LD-1009', campaign: 'AudioPro ANC', source: 'YouTube Community Tab', referralCode: 'AUDIOPRO-ALEX', contactMasked: 't***y@audiophile.net', product: 'AudioPro Studio ANC', value: '$349', status: 'Interested', createdDate: '2026-09-08', followUpDate: '2026-09-18' },
    { id: 'LD-1010', campaign: 'Hyperion Cloud IDE', source: 'Newsletter Mention', referralCode: 'ALEX-HYPERION-26', contactMasked: 'e***h@cybercorp.uk', product: 'Hyperion Enterprise Tier', value: '$3,200', status: 'Contacted', createdDate: '2026-09-09', followUpDate: '2026-09-19' },
    { id: 'LD-1011', campaign: 'Logitech MX Master 4', source: 'YouTube Shorts', referralCode: 'ALEX-MX4-DEAL', contactMasked: 'b***n@gamedev.se', product: 'MX Master 4 Pale Grey', value: '$129', status: 'Lost', createdDate: '2026-08-25', followUpDate: '2026-08-29' },
    { id: 'LD-1012', campaign: 'FlowState AI', source: 'TikTok Bio', referralCode: 'FLOW-ALEX-AI', contactMasked: 'w***m@creativehub.io', product: 'FlowState AI Pro Monthly', value: '$240', status: 'New', createdDate: '2026-09-09', followUpDate: '2026-09-20' }
  ],

  // Conversions
  conversions: [
    { id: 'CNV-801', campaign: 'Hyperion Cloud IDE', originalLeadId: 'LD-1001', date: '2026-09-04', orderValue: '$2,400', commission: '$288.00', status: 'Verified' },
    { id: 'CNV-802', campaign: 'Hyperion Cloud IDE', originalLeadId: 'LD-1002', date: '2026-09-05', orderValue: '$1,800', commission: '$216.00', status: 'Verified' },
    { id: 'CNV-803', campaign: 'Logitech MX Master 4', originalLeadId: 'LD-1003', date: '2026-09-03', orderValue: '$280', commission: '$33.60', status: 'Verified' },
    { id: 'CNV-804', campaign: 'Logitech MX Master 4', originalLeadId: 'LD-1006', date: '2026-09-06', orderValue: '$129', commission: '$15.48', status: 'Verified' },
    { id: 'CNV-805', campaign: 'Notion 3.0 Workspace', originalLeadId: 'LD-0982', date: '2026-08-22', orderValue: '$4,200', commission: '$630.00', status: 'Paid' },
    { id: 'CNV-806', campaign: 'Sony FX30 Kit', originalLeadId: 'LD-0941', date: '2026-08-15', orderValue: '$2,198', commission: '$219.80', status: 'Paid' }
  ],

  // Referrals
  referrals: [
    { code: 'ALEX-HYPERION-26', campaign: 'Hyperion Cloud IDE', link: 'https://hyperion.dev/go/alexrivera', clicks: 8420, leads: 14, conversions: 5, revenue: '$8,900', earnedCommission: '$1,068.00' },
    { code: 'ALEX-MX4-DEAL', campaign: 'Logitech MX Master 4', link: 'https://logitech.com/partner/alex-mx4', clicks: 6150, leads: 9, conversions: 4, revenue: '$1,480', earnedCommission: '$177.60' },
    { code: 'FLOW-ALEX-AI', campaign: 'FlowState AI', link: 'https://flowstate.ai/creators/alexrivera', clicks: 3890, leads: 8, conversions: 2, revenue: '$1,840', earnedCommission: '$220.80' },
    { code: 'AUDIOPRO-ALEX', campaign: 'AudioPro ANC', link: 'https://audiopro.io/ref/alexrivera', clicks: 1420, leads: 3, conversions: 1, revenue: '$349', earnedCommission: '$34.90' }
  ],

  // Finance & Earnings Summary (CRITICAL: Approved != Paid)
  financeSummary: {
    totalLifetimeEarnings: 28450,
    estimatedEarnings: 6500,     // Planned / projected for upcoming deliverables
    approvedEarnings: 18450,      // Content approved by ERP, recognized as payable liability
    payableBalance: 3200,         // Ready for withdrawal / disbursement request
    processingBalance: 2500,      // In batch payout queue
    totalPaid: 12750              // Successfully disbursed to bank/PayPal
  },

  // Earnings Categorization
  earningsBreakdown: [
    { category: 'Fixed Campaign Sponsorships', amount: 12500, description: 'Base deliverables fee signed in campaign agreement' },
    { category: 'Per-Deliverable Milestones', amount: 3200, description: 'Bonus for high-quality production & technical benchmarks' },
    { category: 'Affiliate & Sales Commissions', amount: 2150, description: 'Tracked sales through referral codes and links' },
    { category: 'On-Time Delivery Performance Bonuses', amount: 800, description: 'Tier 3 speed incentives for delivering <= 48h before due date' },
    { category: 'Adjustments & Tax Deductions', amount: -200, description: 'Withholding processing fee as per W-9 schedule' }
  ],

  // Payout History
  payouts: [
    { id: 'PAY-901', amount: '$3,800.00', method: 'Direct Bank ACH (Chase ****4102)', date: '2026-08-30', status: 'Paid', reference: 'ACH-ROR-991823' },
    { id: 'PAY-902', amount: '$4,200.00', method: 'Direct Bank ACH (Chase ****4102)', date: '2026-08-15', status: 'Paid', reference: 'ACH-ROR-988412' },
    { id: 'PAY-903', amount: '$4,750.00', method: 'PayPal Business (alex.rivera@creator.io)', date: '2026-07-28', status: 'Paid', reference: 'PP-TXN-449102' },
    { id: 'PAY-904', amount: '$2,500.00', method: 'Direct Bank ACH (Chase ****4102)', date: '2026-09-08', status: 'Processing', reference: 'BATCH-ACH-090826' }
  ],

  // Invoices
  invoices: [
    { id: 'INV-2026-001', campaign: 'Hyperion Cloud IDE Global Launch', amount: '$4,250.00', tax: '$0.00', total: '$4,250.00', invoiceDate: '2026-09-01', dueDate: '2026-09-15', status: 'Pending Payment' },
    { id: 'INV-2026-002', campaign: 'Logitech MX Master 4 Ergonomics Blitz', amount: '$4,800.00', tax: '$0.00', total: '$4,800.00', invoiceDate: '2026-08-28', dueDate: '2026-09-12', status: 'Processing' },
    { id: 'INV-2026-003', campaign: 'Notion 3.0 Enterprise Push', amount: '$4,200.00', tax: '$0.00', total: '$4,200.00', invoiceDate: '2026-08-14', dueDate: '2026-08-28', status: 'Paid' },
    { id: 'INV-2026-004', campaign: 'NordVPN Cyber Campaign', amount: '$4,750.00', tax: '$0.00', total: '$4,750.00', invoiceDate: '2026-07-25', dueDate: '2026-08-08', status: 'Paid' }
  ],

  // Gamification: Points & Rewards
  points: {
    currentPoints: 3850,
    lifetimePoints: 7400,
    currentLevel: 'Tier 3 Elite Creator',
    nextLevelPoints: 5000,
    history: [
      { activity: 'On-Time Deliverable (Hyperion Reel DEL-201)', points: '+350 pts', date: '2026-09-10', campaign: 'Hyperion Cloud IDE' },
      { activity: 'High Engagement Rate Benchmark (>5%)', points: '+250 pts', date: '2026-09-08', campaign: 'Logitech MX Launch' },
      { activity: 'Converted Lead (Enterprise Cloud IDE)', points: '+400 pts', date: '2026-09-05', campaign: 'Hyperion Cloud IDE' },
      { activity: 'Profile Completion (85% Milestone)', points: '+500 pts', date: '2026-08-25', campaign: 'System Milestone' },
      { activity: 'Campaign Signoff 5-Star Brand Review', points: '+600 pts', date: '2026-08-20', campaign: 'Notion 3.0 Push' }
    ]
  },

  rewards: [
    { id: 'REW-1', title: '24-Hour Express Payout FastPass', cost: 1500, status: 'Available', icon: 'bx-zap', description: 'Bypass regular 5-day ERP accounting queues for instant disbursement.' },
    { id: 'REW-2', title: 'Creator Tech Gear: Elgato StreamDeck XL', cost: 3500, status: 'Available', icon: 'bx-desktop', description: 'Direct brand-sponsored physical hardware shipped to your studio.' },
    { id: 'REW-3', title: 'VIP Pass: Global DevSummit 2026', cost: 4500, status: 'Locked', icon: 'bx-award', description: 'All-access backstage badge + VIP networking dinner in Berlin.' },
    { id: 'REW-4', title: '$250 Amazon Creator Studio Card', cost: 3000, status: 'Redeemed', icon: 'bx-gift', description: 'Redeemed on 2026-08-10. Code applied to Amazon account.' }
  ],

  badges: [
    { id: 'BDG-1', name: 'Profile Pro', requirement: '100% verified profile and 4+ connected channels', progress: '100%', earned: true, date: '2025-11-20', icon: 'bx-user-check' },
    { id: 'BDG-2', name: 'On-Time Creator', requirement: '15+ consecutive deliverables submitted on or ahead of deadline', progress: '100%', earned: true, date: '2026-07-15', icon: 'bx-time-five' },
    { id: 'BDG-3', name: 'Campaign Champion', requirement: '5+ successfully completed enterprise brand sponsorships', progress: '100%', earned: true, date: '2026-08-01', icon: 'bx-trophy' },
    { id: 'BDG-4', name: 'Lead Generator', requirement: 'Generate 25+ verified commercial leads through tracking codes', progress: '100%', earned: true, date: '2026-08-18', icon: 'bx-target-lock' },
    { id: 'BDG-5', name: 'Conversion Star', requirement: 'Facilitate $25,000+ in attributed customer order value', progress: '82%', earned: false, date: 'In Progress (82%)', icon: 'bx-star' },
    { id: 'BDG-6', name: 'Top Performer', requirement: 'Top 3 monthly creator leaderboard standing', progress: '100%', earned: true, date: '2026-08-31', icon: 'bx-crown' }
  ],

  leaderboard: [
    { rank: 1, name: 'Vignesh M', handle: '@vignesh_tech_labs', campaigns: 12, engagement: '6.9%', leads: 54, conversions: 22, points: 5120 },
    { rank: 2, name: 'Alex Rivera (You)', handle: '@alexrivera_tech', campaigns: 9, engagement: '5.8%', leads: 38, conversions: 16, points: 3850 },
    { rank: 3, name: 'Samantha Wu', handle: '@samdesign_saas', campaigns: 8, engagement: '5.2%', leads: 31, conversions: 14, points: 3420 },
    { rank: 4, name: 'David Miller', handle: '@miller_hardware', campaigns: 7, engagement: '4.7%', leads: 28, conversions: 11, points: 2980 },
    { rank: 5, name: 'Chloe Dubois', handle: '@chloe_code_daily', campaigns: 6, engagement: '4.5%', leads: 22, conversions: 9, points: 2650 }
  ],

  // Marketing: Promotions, Resources, Brand Assets
  promotions: [
    { id: 'PRM-1', name: 'Q3 Developer Growth Multiplier', campaign: 'Hyperion Cloud IDE', description: 'Earn an extra $200 per 10 verified signups generated before Sep 30.', validity: 'Expires Sep 30, 2026', benefit: '+20% Commission Boost', status: 'Active' },
    { id: 'PRM-2', name: 'Logitech Ecosystem Bundle Incentive', campaign: 'Logitech MX Master 4', description: 'Sell both MX Master 4 and MX Mechanical keyboard in single cart for 2x bounty.', validity: 'Expires Oct 15, 2026', benefit: '$40 per Dual Cart', status: 'Active' }
  ],

  resources: [
    { id: 'RES-1', title: 'Hyperion Cloud IDE Official Creator Brief & Talking Points', category: 'Campaign Briefs', type: 'PDF Document', size: '2.4 MB' },
    { id: 'RES-2', title: 'FTC & Global Creator Disclosure Guidelines 2026', category: 'Compliance Guidelines', type: 'PDF Document', size: '1.1 MB' },
    { id: 'RES-3', title: 'Cinematic Workstation Lighting & Macro Video Presets', category: 'Templates', type: 'LUT & Premiere Preset', size: '48.5 MB' },
    { id: 'RES-4', title: 'Developer Conversion Script Blueprint (Hook + Demo + CTA)', category: 'Scripts', type: 'Markdown Document', size: '180 KB' }
  ],

  brandAssets: [
    { id: 'AST-1', brand: 'Hyperion Dev Labs', name: 'Hyperion_Logo_Vector_4K.svg', type: 'Vector Logo', size: '420 KB', preview: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80' },
    { id: 'AST-2', brand: 'Logitech Global', name: 'Logitech_MX4_Product_Isolated_PNGs.zip', type: 'Transparent Cutouts', size: '28.4 MB', preview: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=200&q=80' },
    { id: 'AST-3', brand: 'AudioPro Labs', name: 'AudioPro_ANC_Lifestyle_Photography.zip', type: 'High-Res Stills', size: '64.2 MB', preview: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80' }
  ],

  // Communication: Messages & Notifications
  conversations: [
    {
      id: 'conv-1',
      campaign: 'Hyperion Cloud IDE Global Launch',
      recipient: 'Sarah Jenkins',
      recipientRole: 'Campaign Lead @ Hyperion',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Got the v1.0 reel rough cut! The git preview note is noted for the YouTube video.',
      lastTime: '10:45 AM',
      unread: 1,
      messages: [
        { sender: 'Sarah Jenkins', time: 'Yesterday 04:15 PM', isMe: false, text: 'Hi Alex! Just reviewed the script outline. Looks stellar. Please make sure the 100 GPU hours offer is clear.' },
        { sender: 'Alex Rivera (You)', time: 'Yesterday 05:30 PM', isMe: true, text: 'Hey Sarah! Absolutely, having it right at the 01:10 mark with on-screen coupon code.' },
        { sender: 'Sarah Jenkins', time: 'Today 10:45 AM', isMe: false, text: 'Got the v1.0 reel rough cut! The git preview note is noted for the YouTube video.' }
      ]
    },
    {
      id: 'conv-2',
      campaign: 'Logitech MX Master 4 Ergonomics Blitz',
      recipient: 'David Chen',
      recipientRole: 'Brand Manager @ Logitech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
      lastMessage: 'The first short surpassed 140k views already. Super stoked with the numbers!',
      lastTime: 'Sep 09',
      unread: 0,
      messages: [
        { sender: 'David Chen', time: 'Sep 08 02:10 PM', isMe: false, text: 'Alex, the tracking links are active in your ERP dashboard.' },
        { sender: 'Alex Rivera (You)', time: 'Sep 09 11:20 AM', isMe: true, text: 'The first short surpassed 140k views already. Super stoked with the numbers!' }
      ]
    }
  ],

  notifications: [
    { id: 'notif-1', category: 'Content', title: 'Content Approved!', message: 'Hyperion Cloud IDE Reel DEL-201 has been approved by Sarah Jenkins.', time: '1 hour ago', unread: true, icon: 'bx-check-circle', color: 'success' },
    { id: 'notif-2', category: 'Deliverable', title: 'Revision Requested', message: 'Hyperion YouTube Dedicated Video requires 1 minor scene edit.', time: '3 hours ago', unread: true, icon: 'bx-revision', color: 'warning' },
    { id: 'notif-3', category: 'Lead', title: 'New Conversion Attributed!', message: 'Lead LD-1001 converted for $2,400. You earned $288.00 commission.', time: 'Yesterday', unread: true, icon: 'bx-dollar-circle', color: 'success' },
    { id: 'notif-4', category: 'Finance', title: 'Payout Processed', message: 'ACH Transfer of $2,500.00 is in processing with bank.', time: '2 days ago', unread: false, icon: 'bx-wallet', color: 'info' },
    { id: 'notif-5', category: 'Campaign', title: 'New Eligible Campaign', message: 'FinFlow Smart Business Banking is open for applications.', time: '3 days ago', unread: false, icon: 'bx-briefcase', color: 'primary' }
  ],

  // Productivity: Calendar & Tasks
  tasks: [
    { id: 'TSK-1', task: 'Edit and export Hyperion YouTube Video v1.1 with Git Preview scene', campaign: 'Hyperion Cloud IDE', deliverable: 'DEL-202', priority: 'High', dueDate: '2026-09-14', status: 'Pending' },
    { id: 'TSK-2', task: 'Schedule Logitech MX Master 4 Reel publish for Thursday 11 AM PST', campaign: 'Logitech MX Master 4', deliverable: 'DEL-206', priority: 'Medium', dueDate: '2026-09-16', status: 'Pending' },
    { id: 'TSK-3', task: 'Record voiceover tutorial for FlowState AI speech-to-PR demo', campaign: 'FlowState AI', deliverable: 'DEL-207', priority: 'High', dueDate: '2026-09-17', status: 'In Progress' },
    { id: 'TSK-4', task: 'Submit W-9 Q3 update statement for international tax clearance', campaign: 'ERP Administration', deliverable: 'N/A', priority: 'Low', dueDate: '2026-09-20', status: 'Completed' }
  ],

  calendarEvents: [
    { id: 'EVT-1', title: 'Deliverable Due: Hyperion Video v1.1', date: '2026-09-15', time: '05:00 PM', type: 'deadline', campaign: 'Hyperion Cloud IDE', color: '#e74a3b' },
    { id: 'EVT-2', title: 'Publish Window: Logitech MX Reel', date: '2026-09-16', time: '11:00 AM', type: 'publish', campaign: 'Logitech MX Master 4', color: '#1cc88a' },
    { id: 'EVT-3', title: 'Brand Sync: AudioPro Tech Review Scope', date: '2026-09-17', time: '02:30 PM', type: 'meeting', campaign: 'AudioPro ANC', color: '#4e73df' },
    { id: 'EVT-4', title: 'Deliverable Due: FlowState AI TikTok Tutorial', date: '2026-09-18', time: '06:00 PM', type: 'deadline', campaign: 'FlowState AI', color: '#f6c23e' },
    { id: 'EVT-5', title: 'Monthly Payout Disbursement Batch', date: '2026-09-30', time: '12:00 PM', type: 'finance', campaign: 'Finance', color: '#8549ba' }
  ],

  // Support
  supportTickets: [
    { id: 'TCK-801', category: 'Payment Issue', subject: 'Inquiry regarding ACH reference for invoice INV-2026-002', campaign: 'Logitech MX Master 4', priority: 'Medium', status: 'Resolved', date: '2026-09-02', response: 'ACH transaction cleared on Sep 04 under reference ACH-ROR-991823.' },
    { id: 'TCK-802', category: 'Deliverable Extension', subject: 'Requesting 4-day extension for AudioPro ANC comparison video', campaign: 'AudioPro ANC', priority: 'High', status: 'In Progress', date: '2026-09-06', response: 'Forwarded to brand sponsor Amanda Cruz. Awaiting updated cutoff approval.' }
  ],

  faqs: [
    { q: 'When do approved deliverables transition from Approved to Paid?', a: 'Under Roriri ERP finance policy, content approval verifies technical compliance. Invoicing runs on the 15th and 30th of each month, moving approved deliverables into the Payable balance where creators can request withdrawals.' },
    { q: 'Can I negotiate campaign compensation after submitting an application?', a: 'Initial applications include your commercial rate card. If a brand shortlists your profile, the designated ERP Campaign Manager may propose an updated fixed fee or performance tier.' },
    { q: 'What happens if a content submission receives a "Revision Required" status?', a: 'You will receive specific reviewer feedback in your content workspace detailing the necessary changes. Previous versions are preserved in your version history, and you can submit revision v2.0 without re-entering campaign parameters.' }
  ]
};
