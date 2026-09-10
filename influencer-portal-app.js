/* ==========================================================================
   RORIRI SOFTWARE SOLUTIONS ERP — INFLUENCER USER PORTAL APPLICATION ENGINE
   ========================================================================== */

(function() {
  'use strict';

  // Application State
  var state = {
    currentRoute: 'dashboard',
    user: window.INFLUENCER_DB.currentUser,
    selectedCampaignId: 'CMP-101',
    activeTab: 'all',
    selectedLeadFilter: 'all',
    activeConversationId: 'conv-1',
    demoControlsOpen: false
  };

  // DOM Elements cache
  var el = {
    appLayout: document.getElementById('inf-app-layout'),
    authScreen: document.getElementById('inf-auth-screen'),
    pageBody: document.getElementById('inf-page-body'),
    breadcrumbCurrent: document.getElementById('inf-breadcrumb-current'),
    topbarAvatar: document.getElementById('inf-topbar-avatar'),
    topbarName: document.getElementById('inf-topbar-name'),
    topbarRole: document.getElementById('inf-topbar-role'),
    toastContainer: document.getElementById('inf-toast-container'),
    modalBackdrop: document.getElementById('inf-modal-backdrop'),
    modalBox: document.getElementById('inf-modal-box'),
    modalTitle: document.getElementById('inf-modal-title'),
    modalBody: document.getElementById('inf-modal-body'),
    modalFooter: document.getElementById('inf-modal-footer'),
    demoPanel: document.getElementById('inf-demo-panel')
  };

  // Toast Notifications
  window.showInfToast = function(msg, type) {
    type = type || 'info';
    var t = document.createElement('div');
    t.className = 'inf-toast ' + type;
    var icon = type === 'success' ? 'bx-check-circle' : type === 'warning' ? 'bx-error' : type === 'danger' ? 'bx-x-circle' : 'bx-info-circle';
    t.innerHTML = '<i class="bx ' + icon + '" style="font-size:18px;"></i><span>' + msg + '</span>';
    el.toastContainer.appendChild(t);
    setTimeout(function() {
      t.style.opacity = '0';
      t.style.transform = 'translateY(-10px)';
      t.style.transition = 'all 0.2s';
      setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 200);
    }, 3200);
  };

  // Navigation Router
  window.navigateInf = function(route, param) {
    state.currentRoute = route;
    if (param) state.selectedCampaignId = param;

    // Update active nav links in sidebar
    var links = document.querySelectorAll('.inf-nav-link');
    links.forEach(function(lnk) {
      if (lnk.getAttribute('data-route') === route) {
        lnk.classList.add('active');
      } else {
        lnk.classList.remove('active');
      }
    });

    // Update Breadcrumb
    var title = route.replace(/-/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); });
    if (el.breadcrumbCurrent) el.breadcrumbCurrent.textContent = title;

    // Render Page View
    renderCurrentPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Dispatcher
  function renderCurrentPage() {
    var html = '';

    // If account is suspended, show persistent banner on non-settings pages
    if (state.user.accountStatus === 'Suspended') {
      html += '<div class="inf-alert-banner danger">' +
        '<div><i class="bx bx-shield-x" style="font-size:18px;vertical-align:middle;margin-right:6px;"></i>' +
        '<strong>Account Suspended by ERP Administration:</strong> New campaign applications and content submissions are temporarily locked. Historical performance, contracts, and payment records remain accessible for compliance.</div>' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'support-tickets\')"><i class="bx bx-support"></i> Contact Support</button>' +
        '</div>';
    }

    switch (state.currentRoute) {
      case 'dashboard':
        html += renderDashboard();
        break;
      case 'profile':
        html += renderProfile();
        break;
      case 'social-accounts':
        html += renderSocialAccounts();
        break;
      case 'media-kit':
        html += renderMediaKit();
        break;
      case 'portfolio':
        html += renderPortfolio();
        break;
      case 'verification':
        html += renderVerification();
        break;
      case 'documents':
        html += renderDocuments();
        break;
      case 'available-campaigns':
        html += renderAvailableCampaigns();
        break;
      case 'my-campaigns':
        html += renderMyCampaigns();
        break;
      case 'campaign-workspace':
        html += renderCampaignWorkspace(state.selectedCampaignId);
        break;
      case 'applications':
        html += renderApplications();
        break;
      case 'deliverables':
        html += renderDeliverables();
        break;
      case 'contracts':
        html += renderContracts();
        break;
      case 'campaign-history':
        html += renderCampaignHistory();
        break;
      case 'content-library':
        html += renderContentLibrary();
        break;
      case 'content-calendar':
        html += renderContentCalendar();
        break;
      case 'performance':
        html += renderPerformance();
        break;
      case 'analytics':
        html += renderAnalytics();
        break;
      case 'leads':
        html += renderLeads();
        break;
      case 'conversions':
        html += renderConversions();
        break;
      case 'referrals':
        html += renderReferrals();
        break;
      case 'earnings':
        html += renderEarnings();
        break;
      case 'payouts':
        html += renderPayouts();
        break;
      case 'invoices':
        html += renderInvoices();
        break;
      case 'payments':
        html += renderPayments();
        break;
      case 'points':
        html += renderPoints();
        break;
      case 'rewards':
        html += renderRewards();
        break;
      case 'badges':
        html += renderBadges();
        break;
      case 'leaderboard':
        html += renderLeaderboard();
        break;
      case 'promotions':
        html += renderPromotions();
        break;
      case 'resources':
        html += renderResources();
        break;
      case 'brand-assets':
        html += renderBrandAssets();
        break;
      case 'messages':
        html += renderMessages();
        break;
      case 'notifications':
        html += renderNotifications();
        break;
      case 'calendar':
        html += renderCalendar();
        break;
      case 'tasks':
        html += renderTasks();
        break;
      case 'help-center':
      case 'faqs':
        html += renderHelpCenter();
        break;
      case 'support-tickets':
        html += renderSupportTickets();
        break;
      case 'settings':
      case 'security':
        html += renderSettings();
        break;
      default:
        html += renderDashboard();
    }

    el.pageBody.innerHTML = html;
  }

  /* ==========================================================================
     PAGE 1: INFLUENCER DASHBOARD
     ========================================================================== */
  function renderDashboard() {
    var u = state.user;
    var activeCampaigns = window.INFLUENCER_DB.campaigns.filter(function(c) { return c.status === 'Active'; });
    var deliverables = window.INFLUENCER_DB.deliverables;
    var pendingTasksCount = window.INFLUENCER_DB.tasks.filter(function(t) { return t.status !== 'Completed'; }).length;
    var leadsCount = window.INFLUENCER_DB.leads.length;
    var convCount = window.INFLUENCER_DB.conversions.length;
    var fin = window.INFLUENCER_DB.financeSummary;

    var html = '';

    // Welcome Header
    html += '<div class="inf-welcome-header">' +
      '<div class="inf-welcome-left">' +
        '<div class="inf-creator-avatar-wrap">' +
          '<img src="' + u.avatar + '" alt="' + u.name + '" class="inf-creator-avatar">' +
          '<i class="bx bxs-check-circle inf-verified-badge-icon" title="Verified Creator"></i>' +
        '</div>' +
        '<div>' +
          '<h1 class="inf-welcome-title">Good Morning, ' + u.name + ' 👋 ' +
            '<span class="inf-account-status-tag ' + (u.accountStatus === 'Active' ? 'active' : 'suspended') + '">' + u.accountStatus + '</span>' +
          '</h1>' +
          '<div style="font-size:13px;color:var(--inf-text-muted);">' + u.niche + ' &bull; ' + u.tier + ' &bull; Rating: ⭐ ' + u.rating + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="inf-profile-progress-wrap">' +
        '<div class="inf-progress-label">' +
          '<span>Profile Strength</span>' +
          '<span style="color:var(--inf-primary);font-weight:700;">' + u.profileCompletion + '%</span>' +
        '</div>' +
        '<div class="inf-progress-bar-track">' +
          '<div class="inf-progress-bar-fill" style="width:' + u.profileCompletion + '%;"></div>' +
        '</div>' +
        '<div style="text-align:right;"><a href="javascript:void(0)" onclick="navigateInf(\'profile\')" style="font-size:11.5px;color:var(--inf-primary);font-weight:600;text-decoration:none;">Complete your profile &rarr;</a></div>' +
      '</div>' +
    '</div>';

    // Quick Action Bar
    html += '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:1.5rem;">' +
      '<button class="inf-btn inf-btn-primary" onclick="navigateInf(\'available-campaigns\')"><i class="bx bx-search-alt"></i> Browse Campaigns</button>' +
      '<button class="inf-btn inf-btn-outline" onclick="openSubmitContentModal()"><i class="bx bx-cloud-upload"></i> Submit Content</button>' +
      '<button class="inf-btn inf-btn-outline" onclick="openAddLeadModal()"><i class="bx bx-user-plus"></i> Add Attributed Lead</button>' +
      '<button class="inf-btn inf-btn-outline" onclick="navigateInf(\'earnings\')"><i class="bx bx-dollar-circle"></i> View Earnings</button>' +
      '<button class="inf-btn inf-btn-outline" onclick="navigateInf(\'tasks\')"><i class="bx bx-check-square"></i> My Tasks (' + pendingTasksCount + ')</button>' +
    '</div>';

    // 8 Dashboard KPI Cards
    html += '<div class="inf-kpi-grid">' +
      '<div class="inf-kpi-card inf-kpi-primary">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Active Campaigns</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-briefcase"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">' + activeCampaigns.length + '</h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-primary);font-weight:600;">2 deliverables due this week</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-warning">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Pending Tasks</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-task"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">' + pendingTasksCount + '</h3>' +
        '<span class="inf-kpi-sub" style="color:#d97706;">1 critical priority task</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-info">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Total Leads</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-user-voice"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">' + leadsCount + '</h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-success);font-weight:600;"><i class="bx bx-up-arrow-alt"></i> +18% this month</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-success">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Conversions</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-check-shield"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">' + convCount + '</h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-success);font-weight:600;">32.4% conversion rate</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-primary">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Approved Earnings</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-coin-stack"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">$' + fin.approvedEarnings.toLocaleString() + '</h3>' +
        '<span class="inf-kpi-sub">Total verified revenue</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-danger">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Payable Balance</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-wallet-alt"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">$' + fin.payableBalance.toLocaleString() + '</h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-danger);font-weight:600;">Ready for withdrawal request</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-purple">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">My Points</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-award"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">' + window.INFLUENCER_DB.points.currentPoints.toLocaleString() + ' <small style="font-size:12px;">pts</small></h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-purple);font-weight:600;">Tier 3 Elite Standing</span>' +
      '</div>' +
      '<div class="inf-kpi-card inf-kpi-info">' +
        '<div class="inf-kpi-top">' +
          '<span class="inf-kpi-title">Engagement Rate</span>' +
          '<div class="inf-kpi-icon"><i class="bx bx-line-chart"></i></div>' +
        '</div>' +
        '<h3 class="inf-kpi-val">5.7%</h3>' +
        '<span class="inf-kpi-sub" style="color:var(--inf-success);font-weight:600;">Industry benchmark: 3.2%</span>' +
      '</div>' +
    '</div>';

    // Grid: Current Campaigns & Upcoming Deliverables
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(380px, 1fr));gap:1.5rem;margin-bottom:1.5rem;">' +

      // Active Campaigns
      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<h3 class="inf-card-title"><i class="bx bx-rocket"></i> Active Assigned Campaigns</h3>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'my-campaigns\')">View All</button>' +
        '</div>' +
        '<div class="inf-card-body" style="display:flex;flex-direction:column;gap:12px;">';

    activeCampaigns.forEach(function(c) {
      html += '<div style="border:1px solid var(--inf-border);border-radius:8px;padding:14px;background:#fbfcfe;">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">' +
          '<div>' +
            '<strong style="font-size:14px;color:#0f172a;">' + c.name + '</strong>' +
            '<div style="font-size:12px;color:var(--inf-text-muted);">' + c.brand + ' &bull; ' + c.type + '</div>' +
          '</div>' +
          '<span class="inf-badge inf-badge-primary">Progress: ' + c.progress + '%</span>' +
        '</div>' +
        '<div class="inf-progress-bar-track" style="margin-bottom:10px;">' +
          '<div class="inf-progress-bar-fill" style="width:' + c.progress + '%;"></div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;font-size:12px;color:#475569;margin-bottom:12px;">' +
          '<span>Deliverables: <strong>' + c.deliverablesCompleted + ' done / ' + (c.deliverablesCompleted + c.deliverablesRemaining) + ' total</strong></span>' +
          '<span>Next Deadline: <strong style="color:var(--inf-danger);">' + c.nextDeadline + '</strong></span>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;gap:8px;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'campaign-workspace\', \'' + c.id + '\')"><i class="bx bx-folder-open"></i> Workspace</button>' +
          '<button class="inf-btn inf-btn-primary inf-btn-sm" onclick="openSubmitContentModal(\'' + c.id + '\')"><i class="bx bx-upload"></i> Submit Content</button>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div>' +

      // Upcoming Deliverables Table
      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<h3 class="inf-card-title"><i class="bx bx-list-check"></i> Upcoming Deliverables</h3>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'deliverables\')">All Deliverables</button>' +
        '</div>' +
        '<div class="inf-table-responsive">' +
          '<table class="inf-table">' +
            '<thead>' +
              '<tr>' +
                '<th>Deliverable</th>' +
                '<th>Campaign</th>' +
                '<th>Due Date</th>' +
                '<th>Status</th>' +
                '<th style="text-align:right;">Action</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>';

    deliverables.slice(0, 5).forEach(function(d) {
      var badgeClass = d.status === 'Approved' ? 'inf-badge-success' : d.status === 'Revision Required' ? 'inf-badge-danger' : d.status === 'Submitted' ? 'inf-badge-info' : d.status === 'Overdue' ? 'inf-badge-danger' : 'inf-badge-warning';
      html += '<tr>' +
        '<td><strong>' + d.type + '</strong><br><small style="color:var(--inf-text-muted);">' + d.platform + '</small></td>' +
        '<td><span style="font-size:12px;color:#334155;">' + d.campaignName + '</span></td>' +
        '<td><span style="color:' + (d.status === 'Overdue' ? 'var(--inf-danger);font-weight:700;' : '#475569;') + '">' + d.dueDate + '</span></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + d.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (d.status === 'Revision Required'
            ? '<button class="inf-btn inf-btn-danger inf-btn-sm" onclick="openRevisionReviewModal(\'' + d.id + '\')"><i class="bx bx-revision"></i> Resubmit</button>'
            : '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="openSubmitContentModal(\'' + d.campaignId + '\', \'' + d.id + '\')"><i class="bx bx-upload"></i></button>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';

    // Interactive Lead Funnel
    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-filter-alt"></i> Influencer Attributed Lead Pipeline Funnel</h3>' +
        '<span style="font-size:12px;color:var(--inf-text-muted);">Click any stage to inspect attributed leads</span>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div class="inf-funnel-wrapper">' +
          '<div class="inf-funnel-step" onclick="navigateInf(\'leads\')">' +
            '<div class="inf-funnel-step-count">12</div>' +
            '<div class="inf-funnel-step-name">1. New Leads</div>' +
          '</div>' +
          '<div style="color:#cbd5e1;font-size:18px;">&rarr;</div>' +
          '<div class="inf-funnel-step" onclick="navigateInf(\'leads\')">' +
            '<div class="inf-funnel-step-count">8</div>' +
            '<div class="inf-funnel-step-name">2. Contacted</div>' +
          '</div>' +
          '<div style="color:#cbd5e1;font-size:18px;">&rarr;</div>' +
          '<div class="inf-funnel-step" onclick="navigateInf(\'leads\')">' +
            '<div class="inf-funnel-step-count">6</div>' +
            '<div class="inf-funnel-step-name">3. Qualified</div>' +
          '</div>' +
          '<div style="color:#cbd5e1;font-size:18px;">&rarr;</div>' +
          '<div class="inf-funnel-step" onclick="navigateInf(\'leads\')">' +
            '<div class="inf-funnel-step-count">5</div>' +
            '<div class="inf-funnel-step-name">4. Interested</div>' +
          '</div>' +
          '<div style="color:#cbd5e1;font-size:18px;">&rarr;</div>' +
          '<div class="inf-funnel-step" style="border-color:var(--inf-success);background:var(--inf-success-bg);" onclick="navigateInf(\'conversions\')">' +
            '<div class="inf-funnel-step-count" style="color:#047857;">' + convCount + '</div>' +
            '<div class="inf-funnel-step-name" style="color:#047857;">5. Converted</div>' +
          '</div>' +
          '<div style="color:#cbd5e1;font-size:18px;">&bull;</div>' +
          '<div class="inf-funnel-step" style="border-color:#fca5a5;background:#fef2f2;" onclick="navigateInf(\'leads\')">' +
            '<div class="inf-funnel-step-count" style="color:#b91c1c;">2</div>' +
            '<div class="inf-funnel-step-name" style="color:#b91c1c;">Lost / Invalid</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // Earnings Summary (Highlighting Approved != Paid)
    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-money"></i> Financial Summary & Payment Realization</h3>' +
        '<div style="font-size:12px;color:var(--inf-primary);font-weight:600;"><i class="bx bx-info-circle"></i> ERP Policy: Content Approval &ne; Direct Payment</div>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:1.5rem;">' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;font-weight:600;color:var(--inf-text-muted);text-transform:uppercase;">Estimated / In Pipeline</div>' +
            '<div style="font-size:20px;font-weight:700;color:#334155;margin-top:4px;">$' + fin.estimatedEarnings.toLocaleString() + '</div>' +
            '<div style="font-size:11px;color:#64748b;margin-top:2px;">Future milestone value</div>' +
          '</div>' +
          '<div style="background:#eef2ff;padding:12px;border-radius:8px;border:1px solid #c7d2fe;">' +
            '<div style="font-size:11px;font-weight:600;color:#3730a3;text-transform:uppercase;">Approved Deliverables</div>' +
            '<div style="font-size:20px;font-weight:700;color:#312e81;margin-top:4px;">$' + fin.approvedEarnings.toLocaleString() + '</div>' +
            '<div style="font-size:11px;color:#4338ca;margin-top:2px;">Technical signoff complete</div>' +
          '</div>' +
          '<div style="background:#fef3c7;padding:12px;border-radius:8px;border:1px solid #fde68a;">' +
            '<div style="font-size:11px;font-weight:600;color:#92400e;text-transform:uppercase;">Payable (Disbursable)</div>' +
            '<div style="font-size:20px;font-weight:700;color:#78350f;margin-top:4px;">$' + fin.payableBalance.toLocaleString() + '</div>' +
            '<div style="font-size:11px;color:#92400e;margin-top:2px;">Available for withdrawal</div>' +
          '</div>' +
          '<div style="background:#e0f2fe;padding:12px;border-radius:8px;border:1px solid #bae6fd;">' +
            '<div style="font-size:11px;font-weight:600;color:#0369a1;text-transform:uppercase;">In Processing</div>' +
            '<div style="font-size:20px;font-weight:700;color:#075985;margin-top:4px;">$' + fin.processingBalance.toLocaleString() + '</div>' +
            '<div style="font-size:11px;color:#0284c7;margin-top:2px;">Bank ACH queue</div>' +
          '</div>' +
          '<div style="background:#dcfce7;padding:12px;border-radius:8px;border:1px solid #bbf7d0;">' +
            '<div style="font-size:11px;font-weight:600;color:#166534;text-transform:uppercase;">Paid Out</div>' +
            '<div style="font-size:20px;font-weight:700;color:#14532d;margin-top:4px;">$' + fin.totalPaid.toLocaleString() + '</div>' +
            '<div style="font-size:11px;color:#15803d;margin-top:2px;">Received in bank account</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;justify-content:flex-end;">' +
          '<button class="inf-btn inf-btn-primary" onclick="openRequestPayoutModal()"><i class="bx bx-paper-plane"></i> Request Payout Disbursement</button>' +
        '</div>' +
      '</div>' +
    '</div>';

    return html;
  }

  /* ==========================================================================
     PAGE 2: AVAILABLE CAMPAIGNS & DISCOVERY
     ========================================================================== */
  function renderAvailableCampaigns() {
    var camps = window.INFLUENCER_DB.campaigns.filter(function(c) { return c.status === 'Available' || c.status === 'Active'; });
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Available Campaign Marketplace</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Discover brand sponsorships matched to your creator niche, audience demographics, and rate card.</p>' +
      '</div>' +
    '</div>';

    // Filter controls
    html += '<div class="inf-filter-bar">' +
      '<div class="inf-search-box">' +
        '<i class="bx bx-search"></i>' +
        '<input type="text" class="inf-search-input" placeholder="Search campaigns, brands, deliverables..." onkeyup="filterCampaigns(this.value)">' +
      '</div>' +
      '<div style="display:flex;gap:10px;">' +
        '<select class="inf-select" onchange="filterCampaignsByNiche(this.value)">' +
          '<option value="all">All Niches</option>' +
          '<option value="Tech">Developer & Tech</option>' +
          '<option value="Ergonomics">Workspace & Hardware</option>' +
          '<option value="B2B">B2B SaaS</option>' +
        '</select>' +
        '<select class="inf-select">' +
          '<option value="all">Any Compensation</option>' +
          '<option value="5k">$5,000+ Fixed</option>' +
          '<option value="bonus">Bonus Included</option>' +
        '</select>' +
      '</div>' +
    '</div>';

    // Cards Grid
    html += '<div id="inf-campaigns-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:1.25rem;">';

    camps.forEach(function(c) {
      var isAlreadyActive = c.status === 'Active';
      html += '<div class="inf-card" style="margin-bottom:0;display:flex;flex-direction:column;justify-content:space-between;">' +
        '<div>' +
          '<div class="inf-card-header">' +
            '<div>' +
              '<span style="font-size:11px;font-weight:700;color:var(--inf-primary);text-transform:uppercase;letter-spacing:0.5px;">' + c.brand + '</span>' +
              '<h4 style="font-size:15px;font-weight:700;color:#0f172a;margin:2px 0 0 0;">' + c.name + '</h4>' +
            '</div>' +
            '<span class="inf-badge ' + (isAlreadyActive ? 'inf-badge-success' : 'inf-badge-info') + '">' + (isAlreadyActive ? 'Assigned & Active' : 'Eligible to Apply') + '</span>' +
          '</div>' +
          '<div class="inf-card-body">' +
            '<p style="font-size:13px;color:#475569;line-height:1.5;margin:0 0 1rem 0;">' + c.description + '</p>' +
            '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;display:flex;flex-direction:column;gap:6px;margin-bottom:1rem;">' +
              '<div style="display:flex;justify-content:space-between;"><span>Fixed Compensation:</span> <strong style="color:#0f172a;">$' + (c.compensation.fixedFee || 0).toLocaleString() + '</strong></div>' +
              '<div style="display:flex;justify-content:space-between;"><span>Performance Bonus:</span> <strong style="color:var(--inf-success);">+$' + (c.compensation.bonus || 0).toLocaleString() + '</strong></div>' +
              '<div style="display:flex;justify-content:space-between;"><span>Application Deadline:</span> <strong style="color:var(--inf-danger);">' + c.deadline + '</strong></div>' +
            '</div>' +
            '<div style="font-size:11.5px;color:var(--inf-text-muted);"><i class="bx bx-shield-check"></i> Terms Version: <strong>' + c.termsVersion + '</strong></div>' +
          '</div>' +
        '</div>' +
        '<div style="padding:1rem 1.25rem;border-top:1px solid var(--inf-border-light);background:#fbfcfe;display:flex;justify-content:flex-end;gap:8px;">' +
          (isAlreadyActive
            ? '<button class="inf-btn inf-btn-primary inf-btn-sm" onclick="navigateInf(\'campaign-workspace\', \'' + c.id + '\')"><i class="bx bx-folder-open"></i> Go to Workspace</button>'
            : '<button class="inf-btn inf-btn-primary inf-btn-sm" onclick="openApplyCampaignModal(\'' + c.id + '\')" ' + (state.user.accountStatus === 'Suspended' ? 'disabled title="Account suspended"' : '') + '><i class="bx bx-send"></i> Review Terms & Apply</button>') +
        '</div>' +
      '</div>';
    });

    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 3: CAMPAIGN WORKSPACE (The Execution Cockpit)
     ========================================================================== */
  function renderCampaignWorkspace(campId) {
    var c = window.INFLUENCER_DB.campaigns.find(function(x) { return x.id === campId; }) || window.INFLUENCER_DB.campaigns[0];
    var deliverables = window.INFLUENCER_DB.deliverables.filter(function(d) { return d.campaignId === c.id; });
    var submissions = window.INFLUENCER_DB.contentSubmissions.filter(function(s) { return deliverables.some(function(d) { return d.id === s.deliverableId; }); });

    var html = '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;">' +
      '<div>' +
        '<div style="font-size:12px;font-weight:600;color:var(--inf-primary);text-transform:uppercase;"><a href="javascript:void(0)" onclick="navigateInf(\'my-campaigns\')" style="color:var(--inf-primary);text-decoration:none;">&larr; Back to My Campaigns</a></div>' +
        '<h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:4px 0 2px 0;">' + c.name + ' Workspace</h1>' +
        '<div style="font-size:13px;color:var(--inf-text-muted);">' + c.brand + ' &bull; Terms Accepted (' + c.termsVersion + ' on ' + (c.termsAcceptedDate || 'Verified') + ')</div>' +
      '</div>' +
      '<div style="display:flex;gap:10px;">' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'messages\')"><i class="bx bx-message-square-dots"></i> Message Brand Manager</button>' +
        '<button class="inf-btn inf-btn-primary inf-btn-sm" onclick="openSubmitContentModal(\'' + c.id + '\')"><i class="bx bx-upload"></i> Submit Deliverable</button>' +
      '</div>' +
    '</div>';

    // Workspace Summary
    html += '<div class="inf-card">' +
      '<div class="inf-card-body" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:1rem;">' +
        '<div><span style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Overall Progress</span><div style="font-size:22px;font-weight:700;color:#0f172a;">' + c.progress + '%</div></div>' +
        '<div><span style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Fixed Fee Signed</span><div style="font-size:22px;font-weight:700;color:var(--inf-primary);">$' + (c.compensation.fixedFee || 0).toLocaleString() + '</div></div>' +
        '<div><span style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Approved Earnings</span><div style="font-size:22px;font-weight:700;color:var(--inf-success);">$' + c.approvedEarnings.toLocaleString() + '</div></div>' +
        '<div><span style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Final Completion</span><div style="font-size:22px;font-weight:700;color:#e11d48;">' + c.endDate + '</div></div>' +
      '</div>' +
    '</div>';

    // Assigned Deliverables Section
    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-layer"></i> Assigned Deliverables Breakdown (' + deliverables.length + ')</h3>' +
      '</div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Deliverable Type</th>' +
              '<th>Platform</th>' +
              '<th>Due Date</th>' +
              '<th>Publish Window</th>' +
              '<th>Compensation</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    deliverables.forEach(function(d) {
      var badgeClass = d.status === 'Approved' ? 'inf-badge-success' : d.status === 'Revision Required' ? 'inf-badge-danger' : d.status === 'Submitted' ? 'inf-badge-info' : 'inf-badge-warning';
      html += '<tr>' +
        '<td><strong>' + d.type + '</strong><br><small style="color:var(--inf-text-muted);">' + d.notes + '</small></td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + d.platform + '</span></td>' +
        '<td>' + d.dueDate + '</td>' +
        '<td>' + d.publishDeadline + '</td>' +
        '<td><strong style="color:#0f172a;">' + d.compensation + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + d.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (d.status === 'Revision Required'
            ? '<button class="inf-btn inf-btn-danger inf-btn-sm" onclick="openRevisionReviewModal(\'' + d.id + '\')"><i class="bx bx-revision"></i> Resubmit Revision</button>'
            : '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="openSubmitContentModal(\'' + c.id + '\', \'' + d.id + '\')"><i class="bx bx-upload"></i> Submit</button>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';

    // Resources & Guidelines
    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-file"></i> Brand Resources, Briefs & Guidelines</h3>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">' +
          '<div style="background:#f8fafc;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center;">' +
            '<div><i class="bx bxs-file-pdf" style="color:var(--inf-danger);font-size:18px;vertical-align:middle;margin-right:6px;"></i><strong>Campaign Brief & Talking Points</strong> (PDF, 2.4 MB)</div>' +
            '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading Brief PDF\', \'info\')"><i class="bx bx-download"></i> Download</button>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:10px 14px;border-radius:6px;display:flex;justify-content:space-between;align-items:center;">' +
            '<div><i class="bx bxs-file-archive" style="color:var(--inf-primary);font-size:18px;vertical-align:middle;margin-right:6px;"></i><strong>Vector Logos & 4K Product Renders</strong> (ZIP, 48 MB)</div>' +
            '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading Asset Kit\', \'info\')"><i class="bx bx-download"></i> Download</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    return html;
  }

  /* ==========================================================================
     PAGE 4: MY PROFILE & RATE CARD
     ========================================================================== */
  function renderProfile() {
    var u = state.user;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">My Creator Profile & Commercial Terms</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Manage your public media kit parameters, commercial rate card, and primary contact information.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:1.5rem;">' +

      // Basic Information
      '<div class="inf-card">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-user"></i> Basic Creator Information</h3></div>' +
        '<div class="inf-card-body" style="display:flex;flex-direction:column;gap:12px;">' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Full Legal & Creator Name</label><input type="text" id="prof-name" class="inf-search-input" value="' + u.name + '"></div>' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Primary Handle</label><input type="text" class="inf-search-input" value="' + u.handle + '"></div>' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Contact Email</label><input type="email" class="inf-search-input" value="' + u.email + '"></div>' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Location</label><input type="text" class="inf-search-input" value="' + u.location + '"></div>' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Timezone</label><input type="text" class="inf-search-input" value="' + u.timezone + '"></div>' +
          '<div><label style="font-size:12px;font-weight:600;color:#475569;">Bio & Channel Focus</label><textarea class="inf-search-input" rows="3">' + u.bio + '</textarea></div>' +
          '<div style="text-align:right;"><button class="inf-btn inf-btn-primary" onclick="showInfToast(\'Profile details updated\', \'success\')"><i class="bx bx-save"></i> Save Profile Details</button></div>' +
        '</div>' +
      '</div>' +

      // Commercial Rate Card
      '<div class="inf-card">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-credit-card-front"></i> Commercial Rate Card</h3></div>' +
        '<div class="inf-card-body" style="display:flex;flex-direction:column;gap:12px;">' +
          '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">' +
            '<div><strong>Instagram Reel (60s)</strong><br><small style="color:var(--inf-text-muted);">Includes 30-day organic usage rights</small></div>' +
            '<div style="font-size:16px;font-weight:700;color:var(--inf-primary);">$2,500</div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">' +
            '<div><strong>YouTube Dedicated Deep-Dive (8-15m)</strong><br><small style="color:var(--inf-text-muted);">Includes full technical review & code sample</small></div>' +
            '<div style="font-size:16px;font-weight:700;color:var(--inf-primary);">$6,500</div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">' +
            '<div><strong>TikTok Short Tutorial</strong><br><small style="color:var(--inf-text-muted);">High-energy vertical explainer</small></div>' +
            '<div style="font-size:16px;font-weight:700;color:var(--inf-primary);">$1,800</div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;">' +
            '<div><strong>LinkedIn Thought Leadership Post</strong><br><small style="color:var(--inf-text-muted);">B2B SaaS audience reach</small></div>' +
            '<div style="font-size:16px;font-weight:700;color:var(--inf-primary);">$2,200</div>' +
          '</div>' +
          '<div style="margin-top:1rem;background:#eef2ff;padding:12px;border-radius:8px;font-size:12.5px;color:#3730a3;">' +
            '<strong>Preferred Model:</strong> Fixed Fee + 15% Performance Bonus & Commission for verified lead conversion milestones.' +
          '</div>' +
        '</div>' +
      '</div>' +

    '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 5: SOCIAL ACCOUNTS
     ========================================================================== */
  function renderSocialAccounts() {
    var accounts = window.INFLUENCER_DB.socialAccounts;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Connected Social Channels</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Verified social accounts linked to your Roriri ERP creator media kit.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="showInfToast(\'Add Channel modal opened\', \'info\')"><i class="bx bx-plus"></i> Connect Channel</button>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">';
    accounts.forEach(function(a) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<div style="display:flex;align-items:center;gap:10px;">' +
            '<i class="bx ' + a.icon + '" style="font-size:24px;color:' + a.color + ';"></i>' +
            '<div><strong style="font-size:14px;color:#0f172a;">' + a.platform + '</strong><div style="font-size:12px;color:var(--inf-text-muted);">' + a.handle + '</div></div>' +
          '</div>' +
          '<span class="inf-badge inf-badge-success"><i class="bx bx-check-shield"></i> Verified</span>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">' +
            '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">' +
              '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;">Followers</div>' +
              '<div style="font-size:18px;font-weight:700;color:#0f172a;">' + a.followers + '</div>' +
            '</div>' +
            '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;">' +
              '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;">Engagement</div>' +
              '<div style="font-size:18px;font-weight:700;color:var(--inf-success);">' + a.engagementRate + '</div>' +
            '</div>' +
          '</div>' +
          '<div style="font-size:12px;color:#475569;margin-bottom:1rem;"><strong>Audience Demographics:</strong><br>' + a.demographics + '</div>' +
          '<div style="display:flex;justify-content:flex-end;gap:8px;">' +
            '<a href="' + a.url + '" target="_blank" class="inf-btn inf-btn-outline inf-btn-sm"><i class="bx bx-link-external"></i> View Profile</a>' +
            '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Re-syncing analytics metrics\', \'info\')"><i class="bx bx-refresh"></i> Refresh Stats</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 6: MEDIA KIT
     ========================================================================== */
  function renderMediaKit() {
    var mk = window.INFLUENCER_DB.mediaKit;
    var u = state.user;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Media Kit One-Sheet</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Official brand summary generated from verified ERP audit logs.</p>' +
      '</div>' +
      '<div style="display:flex;gap:10px;">' +
        '<button class="inf-btn inf-btn-outline" onclick="showInfToast(\'Media Kit PDF downloaded\', \'success\')"><i class="bx bx-download"></i> Download PDF</button>' +
        '<button class="inf-btn inf-btn-primary" onclick="showInfToast(\'Shareable link copied to clipboard\', \'info\')"><i class="bx bx-share-alt"></i> Share Live Link</button>' +
      '</div>' +
    '</div>';

    html += '<div class="inf-card" style="max-width:900px;margin:0 auto 2rem auto;border:2px solid var(--inf-border);">' +
      '<div style="background:linear-gradient(135deg, #0f172a, #1e3a8a);color:#fff;padding:2rem;display:flex;align-items:center;gap:20px;border-top-left-radius:var(--inf-radius);border-top-right-radius:var(--inf-radius);">' +
        '<img src="' + u.avatar + '" style="width:84px;height:84px;border-radius:50%;border:3px solid #fff;object-fit:cover;">' +
        '<div>' +
          '<div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#93c5fd;">Official Media Kit</div>' +
          '<h1 style="font-size:26px;font-weight:700;margin:4px 0;">' + u.name + ' <span style="font-size:14px;opacity:0.85;font-weight:400;">(' + u.handle + ')</span></h1>' +
          '<div style="font-size:13px;opacity:0.9;">' + u.niche + ' &bull; ' + u.location + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;margin-bottom:1.5rem;">' +
          '<div style="text-align:center;padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Total Audience</div>' +
            '<div style="font-size:24px;font-weight:700;color:var(--inf-primary);">' + mk.totalAudience + '</div>' +
          '</div>' +
          '<div style="text-align:center;padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Monthly Impressions</div>' +
            '<div style="font-size:24px;font-weight:700;color:#0f172a;">' + mk.avgMonthlyImpressions + '</div>' +
          '</div>' +
          '<div style="text-align:center;padding:14px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Avg Engagement</div>' +
            '<div style="font-size:24px;font-weight:700;color:var(--inf-success);">' + mk.overallEngagementRate + '</div>' +
          '</div>' +
        '</div>' +
        '<h4 style="font-size:15px;font-weight:700;margin-bottom:8px;">Core Demographics & Geographic Split</h4>' +
        '<p style="font-size:13px;color:#475569;margin-bottom:1.5rem;">' + mk.topGeographies + ' | Core Age Group: ' + mk.primaryAgeRange + '</p>' +
        '<h4 style="font-size:15px;font-weight:700;margin-bottom:8px;">Commercial Collaboration Offerings</h4>' +
        '<div style="display:flex;flex-direction:column;gap:8px;">';

    mk.commercialServices.forEach(function(s) {
      html += '<div style="display:flex;justify-content:space-between;padding:10px 14px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0;font-size:13px;">' +
        '<span>' + s.name + '</span>' +
        '<strong style="color:var(--inf-primary);">' + s.baseRate + '</strong>' +
      '</div>';
    });

    html += '</div></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE 7: PORTFOLIO
     ========================================================================== */
  function renderPortfolio() {
    var items = window.INFLUENCER_DB.portfolio;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Work Portfolio</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Showcase of verified historical brand campaigns and reach performance.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="showInfToast(\'Add Case Study modal\', \'info\')"><i class="bx bx-plus"></i> Add Portfolio Item</button>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;">';
    items.forEach(function(p) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<img src="' + p.thumbnail + '" style="width:100%;height:160px;object-fit:cover;border-top-left-radius:var(--inf-radius);border-top-right-radius:var(--inf-radius);">' +
        '<div class="inf-card-body">' +
          '<div style="font-size:11px;font-weight:700;color:var(--inf-primary);text-transform:uppercase;">' + p.client + '</div>' +
          '<h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:4px 0 6px 0;">' + p.campaign + '</h3>' +
          '<div style="font-size:12px;color:var(--inf-text-muted);margin-bottom:12px;">' + p.platform + ' &bull; ' + p.type + '</div>' +
          '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center;font-size:11px;margin-bottom:12px;">' +
            '<div><span style="color:var(--inf-text-muted);">Reach</span><br><strong style="font-size:13px;color:#0f172a;">' + p.reach + '</strong></div>' +
            '<div><span style="color:var(--inf-text-muted);">Views</span><br><strong style="font-size:13px;color:#0f172a;">' + p.views + '</strong></div>' +
            '<div><span style="color:var(--inf-text-muted);">Engagement</span><br><strong style="font-size:13px;color:var(--inf-success);">' + p.engagement + '</strong></div>' +
          '</div>' +
          '<p style="font-size:12.5px;color:#475569;margin:0 0 1rem 0;">' + p.highlight + '</p>' +
          '<div style="display:flex;justify-content:flex-end;gap:8px;">' +
            '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Opening campaign details\', \'info\')"><i class="bx bx-show"></i> Preview Case</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 8: VERIFICATION & DOCUMENTS
     ========================================================================== */
  function renderVerification() {
    var vList = window.INFLUENCER_DB.verifications;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Account Verification & Trust Timeline</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Verification statuses recorded inside the Roriri ERP Compliance Ledger.</p>' +
    '</div>';

    html += '<div class="inf-card" style="max-width:750px;">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-shield-check"></i> Verification Milestones</h3></div>' +
      '<div class="inf-card-body">' +
        '<div style="display:flex;flex-direction:column;gap:14px;">';

    vList.forEach(function(v) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">' +
        '<div>' +
          '<strong style="font-size:13.5px;color:#0f172a;">' + v.type + '</strong>' +
          '<div style="font-size:12px;color:var(--inf-text-muted);">Verified on ' + v.date + ' via Enterprise Admin signoff</div>' +
        '</div>' +
        '<span class="inf-badge ' + v.badgeClass + '"><i class="bx bx-check-circle"></i> ' + v.status + '</span>' +
      '</div>';
    });

    html += '</div></div></div>';
    return html;
  }

  function renderDocuments() {
    var docs = window.INFLUENCER_DB.documents;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Document Center & Contracts</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Signed campaign agreements, tax certifications, and brand safety compliance papers.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Document Title</th>' +
              '<th>Category</th>' +
              '<th>Campaign Scope</th>' +
              '<th>Version</th>' +
              '<th>Uploaded Date</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    docs.forEach(function(d) {
      html += '<tr>' +
        '<td><strong><i class="bx bxs-file-pdf" style="color:var(--inf-danger);margin-right:6px;"></i>' + d.name + '</strong></td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + d.category + '</span></td>' +
        '<td>' + d.campaign + '</td>' +
        '<td><span class="inf-badge inf-badge-primary">' + d.version + '</span></td>' +
        '<td>' + d.date + '</td>' +
        '<td><span class="inf-badge inf-badge-success">' + d.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading ' + d.name + '\', \'success\')"><i class="bx bx-download"></i></button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE 9: MY CAMPAIGNS & APPLICATION TRACKING
     ========================================================================== */
  function renderMyCampaigns() {
    var activeTab = state.activeTab || 'all';
    var allCamps = window.INFLUENCER_DB.campaigns;
    var filtered = allCamps;

    if (activeTab === 'active') filtered = allCamps.filter(function(c) { return c.status === 'Active'; });
    else if (activeTab === 'applied') filtered = allCamps.filter(function(c) { return c.status === 'Available'; });

    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">My Campaigns Portfolio</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Track assigned active sponsorships, applied submissions, and campaign execution milestones.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="navigateInf(\'available-campaigns\')"><i class="bx bx-plus"></i> Browse New Campaigns</button>' +
    '</div>';

    // Tabs
    html += '<div class="inf-card">' +
      '<div class="inf-tabs-nav">' +
        '<button class="inf-tab-btn ' + (activeTab === 'all' ? 'active' : '') + '" onclick="setCampaignTab(\'all\')">All Campaigns (' + allCamps.length + ')</button>' +
        '<button class="inf-tab-btn ' + (activeTab === 'active' ? 'active' : '') + '" onclick="setCampaignTab(\'active\')">Active Assigned (4)</button>' +
        '<button class="inf-tab-btn ' + (activeTab === 'applied' ? 'active' : '') + '" onclick="setCampaignTab(\'applied\')">Applied / Under Review (5)</button>' +
      '</div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Campaign Name</th>' +
              '<th>Brand Sponsor</th>' +
              '<th>Type</th>' +
              '<th>Start / End Date</th>' +
              '<th>Progress</th>' +
              '<th>Approved Earnings</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    filtered.forEach(function(c) {
      var badgeClass = c.status === 'Active' ? 'inf-badge-success' : c.status === 'Available' ? 'inf-badge-info' : 'inf-badge-secondary';
      html += '<tr>' +
        '<td><strong>' + c.name + '</strong></td>' +
        '<td>' + c.brand + '</td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + c.type + '</span></td>' +
        '<td>' + c.startDate + ' &rarr; ' + c.endDate + '</td>' +
        '<td>' +
          '<div style="display:flex;align-items:center;gap:6px;width:120px;">' +
            '<div class="inf-progress-bar-track" style="margin-bottom:0;"><div class="inf-progress-bar-fill" style="width:' + c.progress + '%;"></div></div>' +
            '<span style="font-size:11px;font-weight:700;">' + c.progress + '%</span>' +
          '</div>' +
        '</td>' +
        '<td><strong style="color:var(--inf-primary);">$' + c.approvedEarnings.toLocaleString() + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + c.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="navigateInf(\'campaign-workspace\', \'' + c.id + '\')"><i class="bx bx-folder-open"></i> Workspace</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  window.setCampaignTab = function(tab) {
    state.activeTab = tab;
    renderCurrentPage();
  };

  /* ==========================================================================
     PAGE: APPLICATIONS TRACKING
     ========================================================================== */
  function renderApplications() {
    var apps = window.INFLUENCER_DB.applications;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Campaign Applications & Proposals</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Track submission stages from Applied &rarr; Under Review &rarr; Shortlisted &rarr; Approved.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="navigateInf(\'available-campaigns\')"><i class="bx bx-plus"></i> New Application</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Application ID</th>' +
              '<th>Campaign Name</th>' +
              '<th>Brand Sponsor</th>' +
              '<th>Applied Date</th>' +
              '<th>Terms Accepted</th>' +
              '<th>Requested Fee</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    apps.forEach(function(a) {
      var badgeClass = a.status === 'Approved' ? 'inf-badge-success' : a.status === 'Under Review' ? 'inf-badge-warning' : a.status === 'Shortlisted' ? 'inf-badge-primary' : 'inf-badge-secondary';
      html += '<tr>' +
        '<td><code>' + a.id + '</code></td>' +
        '<td><strong>' + a.campaignName + '</strong></td>' +
        '<td>' + a.brand + '</td>' +
        '<td>' + a.appliedDate + '</td>' +
        '<td><span class="inf-badge inf-badge-success"><i class="bx bx-check"></i> ' + a.termsVersion + '</span><br><small style="color:var(--inf-text-muted);">' + (a.termsTimestamp || 'Verified') + '</small></td>' +
        '<td><strong style="color:var(--inf-primary);">' + a.requestedCompensation + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + a.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Proposal: ' + a.proposal.replace(/'/g, "\\'") + '\', \'info\')"><i class="bx bx-show"></i> View Proposal</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE: CONTRACTS & TERMS
     ========================================================================== */
  function renderContracts() {
    var docs = window.INFLUENCER_DB.documents.filter(function(d) { return d.category === 'Campaign Contracts' || d.category === 'Campaign Terms'; });
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Signed Campaign Contracts & Terms</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Legally binding creator agreements, usage rights grants, and FTC compliance schedules.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Contract / Terms Agreement</th>' +
              '<th>Campaign Scope</th>' +
              '<th>Terms Version</th>' +
              '<th>Execution Date</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    docs.forEach(function(d) {
      html += '<tr>' +
        '<td><strong><i class="bx bx-file-blank" style="color:var(--inf-primary);margin-right:6px;"></i>' + d.name + '</strong></td>' +
        '<td>' + d.campaign + '</td>' +
        '<td><span class="inf-badge inf-badge-primary">' + d.version + '</span></td>' +
        '<td>' + d.date + '</td>' +
        '<td><span class="inf-badge inf-badge-success">' + d.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading legal contract PDF\', \'success\')"><i class="bx bx-download"></i> Download Agreement</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE: CAMPAIGN HISTORY
     ========================================================================== */
  function renderCampaignHistory() {
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Completed Campaign Archive & History</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Historical performance audit of fulfilled brand sponsorships and lifetime earned payout logs.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Campaign Name</th>' +
              '<th>Brand Sponsor</th>' +
              '<th>Completion Date</th>' +
              '<th>Deliverables Fulfilled</th>' +
              '<th>Total Impressions</th>' +
              '<th>Attributed Revenue</th>' +
              '<th>Approved Earnings</th>' +
              '<th>Review Score</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td><strong>Notion Enterprise Workspace 2025</strong></td>' +
              '<td>Notion Labs</td>' +
              '<td>2025-12-15</td>' +
              '<td>4 of 4 Completed</td>' +
              '<td>1,420,000</td>' +
              '<td>$28,500</td>' +
              '<td><strong style="color:var(--inf-success);">$9,500.00</strong></td>' +
              '<td>⭐ 5.0 (Exceptional)</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Sony FX30 Cinema Kit Creator Push</strong></td>' +
              '<td>Sony Electronics</td>' +
              '<td>2025-10-30</td>' +
              '<td>5 of 5 Completed</td>' +
              '<td>2,150,000</td>' +
              '<td>$42,000</td>' +
              '<td><strong style="color:var(--inf-success);">$11,200.00</strong></td>' +
              '<td>⭐ 4.9 (High Quality)</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>NordVPN Cyber Protection Campaign</strong></td>' +
              '<td>Nord Security</td>' +
              '<td>2026-07-28</td>' +
              '<td>3 of 3 Completed</td>' +
              '<td>890,000</td>' +
              '<td>$16,800</td>' +
              '<td><strong style="color:var(--inf-success);">$4,750.00</strong></td>' +
              '<td>⭐ 4.9 (High Engagement)</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 10: DELIVERABLES MANAGEMENT
     ========================================================================== */
  function renderDeliverables() {
    var deliverables = window.INFLUENCER_DB.deliverables;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Assigned Deliverables Cockpit</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Granular task list for all agreed deliverables. Never treated as one generic campaign block.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openSubmitContentModal()"><i class="bx bx-upload"></i> Submit Deliverable</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>ID</th>' +
              '<th>Deliverable Spec</th>' +
              '<th>Campaign</th>' +
              '<th>Platform</th>' +
              '<th>Due Date</th>' +
              '<th>Publish Window</th>' +
              '<th>Compensation</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    deliverables.forEach(function(d) {
      var badgeClass = d.status === 'Approved' ? 'inf-badge-success' : d.status === 'Revision Required' ? 'inf-badge-danger' : d.status === 'Submitted' ? 'inf-badge-info' : d.status === 'Overdue' ? 'inf-badge-danger' : 'inf-badge-warning';
      html += '<tr>' +
        '<td><code>' + d.id + '</code></td>' +
        '<td><strong>' + d.type + '</strong><br><small style="color:var(--inf-text-muted);">' + d.notes + '</small></td>' +
        '<td>' + d.campaignName + '</td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + d.platform + '</span></td>' +
        '<td><span style="color:' + (d.status === 'Overdue' ? 'var(--inf-danger);font-weight:700;' : '#334155;') + '">' + d.dueDate + '</span></td>' +
        '<td>' + d.publishDeadline + '</td>' +
        '<td><strong style="color:#0f172a;">' + d.compensation + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + d.status + '</span></td>' +
        '<td style="text-align:right;">' +
          (d.status === 'Revision Required'
            ? '<button class="inf-btn inf-btn-danger inf-btn-sm" onclick="openRevisionReviewModal(\'' + d.id + '\')"><i class="bx bx-revision"></i> Resubmit</button>'
            : '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="openSubmitContentModal(\'' + d.campaignId + '\', \'' + d.id + '\')"><i class="bx bx-upload"></i> Submit</button>') +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE 11: CONTENT SUBMISSIONS & REVIEWS
     ========================================================================== */
  function renderContentLibrary() {
    var subs = window.INFLUENCER_DB.contentSubmissions;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Content Submissions & Review Status</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Track multi-version reviewer feedback, approvals, and verified publication URLs.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openSubmitContentModal()"><i class="bx bx-upload"></i> New Submission</button>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(340px, 1fr));gap:1.5rem;">';
    subs.forEach(function(s) {
      var badgeClass = s.reviewStatus === 'Approved' ? 'inf-badge-success' : s.reviewStatus === 'Revision Required' ? 'inf-badge-danger' : s.reviewStatus === 'Verified' ? 'inf-badge-success' : 'inf-badge-info';
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<div>' +
            '<span style="font-size:11px;font-weight:600;color:var(--inf-text-muted);">' + s.campaignName + '</span>' +
            '<h4 style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0 0 0;">' + s.deliverableName + '</h4>' +
          '</div>' +
          '<span class="inf-badge ' + badgeClass + '">' + s.reviewStatus + ' (' + s.version + ')</span>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<div style="display:flex;gap:12px;margin-bottom:1rem;">' +
            '<img src="' + s.thumbnail + '" style="width:90px;height:90px;border-radius:6px;object-fit:cover;border:1px solid #e2e8f0;">' +
            '<div style="font-size:12.5px;color:#334155;line-height:1.4;">' +
              '<p style="margin:0 0 6px 0;font-style:italic;">"' + s.caption + '"</p>' +
              '<div style="font-size:11px;color:var(--inf-primary);">' + s.hashtags + '</div>' +
            '</div>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;margin-bottom:1rem;">' +
            '<strong>Reviewer:</strong> ' + (s.reviewer || 'ERP Brand Admin') + '<br>' +
            '<span style="color:#475569;">' + (s.reviewerComment || 'Review in progress') + '</span>' +
          '</div>' +
          '<div style="display:flex;justify-content:flex-end;gap:8px;">' +
            (s.reviewStatus === 'Revision Required'
              ? '<button class="inf-btn inf-btn-danger inf-btn-sm" onclick="openRevisionReviewModal(\'' + s.deliverableId + '\')"><i class="bx bx-revision"></i> View Required Edits & Resubmit</button>'
              : (s.publishedUrl ? '<a href="' + s.publishedUrl + '" target="_blank" class="inf-btn inf-btn-outline inf-btn-sm"><i class="bx bx-link-external"></i> Live Post</a>' : '<span style="font-size:11.5px;color:var(--inf-text-muted);align-self:center;">Approved - Ready to publish</span>')) +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE: CONTENT CALENDAR
     ========================================================================== */
  function renderContentCalendar() {
    var events = window.INFLUENCER_DB.calendarEvents;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Content Editorial Calendar</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Plan and track content submission cutoffs, brand review turnaround, and live release dates.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openSubmitContentModal()"><i class="bx bx-upload"></i> Schedule Submission</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-calendar"></i> Publishing & Review Deadlines</h3>' +
        '<div style="display:flex;gap:6px;">' +
          '<button class="inf-btn inf-btn-primary inf-btn-sm">Month View</button>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm">Week View</button>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm">Agenda</button>' +
        '</div>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1rem;">';

    events.forEach(function(e) {
      html += '<div style="background:#f8fafc;padding:14px;border-radius:8px;border-left:4px solid ' + e.color + ';border-top:1px solid #e2e8f0;border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;">' +
          '<div>' +
            '<strong style="font-size:14px;color:#0f172a;">' + e.title + '</strong>' +
            '<div style="font-size:12px;color:var(--inf-primary);margin-top:2px;">' + e.campaign + '</div>' +
          '</div>' +
          '<span class="inf-badge inf-badge-secondary">' + e.type.toUpperCase() + '</span>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;margin-top:10px;font-size:12px;color:#475569;">' +
          '<span><i class="bx bx-calendar"></i> ' + e.date + '</span>' +
          '<span><i class="bx bx-time"></i> ' + e.time + '</span>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE: 3-LEVEL PERFORMANCE DASHBOARD (Section 36)
     ========================================================================== */
  function renderPerformance() {
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Influencer Performance Dashboard</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Three-level telemetry tracking: Overall Creator Impact, Campaign ROI, and Granular Content Metrics.</p>' +
      '</div>' +
      '<div style="display:flex;gap:6px;">' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm">7 Days</button>' +
        '<button class="inf-btn inf-btn-primary inf-btn-sm">30 Days</button>' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm">90 Days</button>' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm">All Time</button>' +
      '</div>' +
    '</div>';

    // Level 1: Overall Performance
    html += '<div class="inf-card">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-globe"></i> Level 1: Overall Creator Performance</h3></div>' +
      '<div class="inf-card-body">' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:12px;">' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Total Reach</div>' +
            '<div style="font-size:22px;font-weight:700;color:#0f172a;margin-top:2px;">2,840,000</div>' +
            '<span style="font-size:11px;color:var(--inf-success);"><i class="bx bx-up-arrow-alt"></i> +24% vs last month</span>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Total Impressions</div>' +
            '<div style="font-size:22px;font-weight:700;color:#0f172a;margin-top:2px;">8,450,000</div>' +
            '<span style="font-size:11px;color:var(--inf-success);"><i class="bx bx-up-arrow-alt"></i> +19% benchmark</span>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Total Views</div>' +
            '<div style="font-size:22px;font-weight:700;color:var(--inf-primary);margin-top:2px;">3,910,000</div>' +
            '<span style="font-size:11px;color:#475569;">Across 4 active platforms</span>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Engagement Rate</div>' +
            '<div style="font-size:22px;font-weight:700;color:var(--inf-success);margin-top:2px;">5.70%</div>' +
            '<span style="font-size:11px;color:var(--inf-success);">Industry avg: 3.2%</span>' +
          '</div>' +
          '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
            '<div style="font-size:11px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Attributed Leads</div>' +
            '<div style="font-size:22px;font-weight:700;color:#0f172a;margin-top:2px;">38 Leads</div>' +
            '<span style="font-size:11px;color:var(--inf-primary);font-weight:600;">16 Converted Deals</span>' +
          '</div>' +
          '<div style="background:#eef2ff;padding:12px;border-radius:8px;border:1px solid #c7d2fe;">' +
            '<div style="font-size:11px;color:#3730a3;text-transform:uppercase;font-weight:600;">Lifetime Revenue Generated</div>' +
            '<div style="font-size:22px;font-weight:700;color:#312e81;margin-top:2px;">$48,500</div>' +
            '<span style="font-size:11px;color:#4338ca;">ROI Multiplier: 4.8x</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

    // Level 2: Campaign-Level Performance
    html += '<div class="inf-card">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-briefcase"></i> Level 2: Campaign Performance Breakdown</h3></div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Campaign</th>' +
              '<th>Brand</th>' +
              '<th>Deliverables Completed</th>' +
              '<th>Campaign Reach</th>' +
              '<th>Engagement</th>' +
              '<th>Clicks</th>' +
              '<th>Leads</th>' +
              '<th>Conversions</th>' +
              '<th>Conversion Rate</th>' +
              '<th style="text-align:right;">Earnings</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td><strong>Hyperion Cloud IDE Global Launch</strong></td>' +
              '<td>Hyperion Dev Labs</td>' +
              '<td>2 of 4 (50%)</td>' +
              '<td>840,000</td>' +
              '<td><strong style="color:var(--inf-success);">6.2%</strong></td>' +
              '<td>8,420</td>' +
              '<td>14</td>' +
              '<td>5</td>' +
              '<td><span class="inf-badge inf-badge-success">35.7%</span></td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$4,250.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Logitech MX Master 4 Ergonomics Blitz</strong></td>' +
              '<td>Logitech Global</td>' +
              '<td>4 of 5 (80%)</td>' +
              '<td>1,120,000</td>' +
              '<td><strong style="color:var(--inf-success);">5.8%</strong></td>' +
              '<td>6,150</td>' +
              '<td>9</td>' +
              '<td>4</td>' +
              '<td><span class="inf-badge inf-badge-success">44.4%</span></td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$4,800.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>NextGen AI Productivity Suite</strong></td>' +
              '<td>FlowState AI</td>' +
              '<td>1 of 4 (25%)</td>' +
              '<td>480,000</td>' +
              '<td><strong style="color:var(--inf-success);">5.4%</strong></td>' +
              '<td>3,890</td>' +
              '<td>8</td>' +
              '<td>2</td>' +
              '<td><span class="inf-badge inf-badge-primary">25.0%</span></td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$1,300.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>UltraSound ANC Studio Headphones</strong></td>' +
              '<td>AudioPro Labs</td>' +
              '<td>1 of 5 (20%)</td>' +
              '<td>240,000</td>' +
              '<td><strong style="color:var(--inf-success);">4.6%</strong></td>' +
              '<td>1,420</td>' +
              '<td>3</td>' +
              '<td>1</td>' +
              '<td><span class="inf-badge inf-badge-primary">33.3%</span></td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$900.00</strong></td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';

    // Level 3: Content-Level Performance
    html += '<div class="inf-card">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-video"></i> Level 3: Individual Content Post Telemetry</h3></div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Content Piece</th>' +
              '<th>Platform</th>' +
              '<th>Views</th>' +
              '<th>Likes</th>' +
              '<th>Comments</th>' +
              '<th>Shares</th>' +
              '<th>Saves</th>' +
              '<th>Watch Time</th>' +
              '<th>Clicks</th>' +
              '<th style="text-align:right;">Conversions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td><strong>Hyperion Cloud IDE Reel (DEL-201)</strong></td>' +
              '<td><span class="inf-badge inf-badge-purple">Instagram</span></td>' +
              '<td><strong>342,000</strong></td>' +
              '<td>24,800</td>' +
              '<td>1,420</td>' +
              '<td>4,100</td>' +
              '<td>8,900</td>' +
              '<td>94% completion</td>' +
              '<td>3,840</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-success);">3 Deals</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Logitech MX Master 4 Short (DEL-205)</strong></td>' +
              '<td><span class="inf-badge inf-badge-danger">YouTube</span></td>' +
              '<td><strong>142,000</strong></td>' +
              '<td>18,400</td>' +
              '<td>980</td>' +
              '<td>2,200</td>' +
              '<td>3,400</td>' +
              '<td>88% completion</td>' +
              '<td>2,150</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-success);">4 Deals</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>FlowState AI Speech-to-PR Reel</strong></td>' +
              '<td><span class="inf-badge inf-badge-secondary">TikTok</span></td>' +
              '<td><strong>210,000</strong></td>' +
              '<td>28,200</td>' +
              '<td>1,650</td>' +
              '<td>5,800</td>' +
              '<td>6,200</td>' +
              '<td>91% completion</td>' +
              '<td>1,890</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-success);">2 Deals</strong></td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';

    return html;
  }

  /* ==========================================================================
     PAGE: ADVANCED ANALYTICS (Section 37)
     ========================================================================== */
  function renderAnalytics() {
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Audience & Campaign Analytics</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Interactive growth telemetry, follower acquisition, click-through rates, and conversion velocity.</p>' +
      '</div>' +
      '<div style="display:flex;gap:10px;">' +
        '<select class="inf-select">' +
          '<option value="30">Last 30 Days</option>' +
          '<option value="7">Last 7 Days</option>' +
          '<option value="90">Last 90 Days</option>' +
          '<option value="all">All Time</option>' +
        '</select>' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Exporting Analytics CSV\', \'success\')"><i class="bx bx-export"></i> Export CSV</button>' +
      '</div>' +
    '</div>';

    // Visual Charts Grid (CSS Bars & Gradients)
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(360px, 1fr));gap:1.5rem;margin-bottom:1.5rem;">' +

      // 1. Follower & Cross-Platform Audience Growth
      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<h3 class="inf-card-title"><i class="bx bx-trending-up"></i> Cross-Platform Audience Growth</h3>' +
          '<span class="inf-badge inf-badge-success">+4.8% net growth</span>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<div style="display:flex;flex-direction:column;gap:14px;">' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span>YouTube (624K Subs)</span><strong>+14,200 this month</strong></div>' +
              '<div class="inf-progress-bar-track"><div class="inf-progress-bar-fill" style="width:78%;background:#ff0000;"></div></div>' +
            '</div>' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span>Instagram (485K Followers)</span><strong>+9,800 this month</strong></div>' +
              '<div class="inf-progress-bar-track"><div class="inf-progress-bar-fill" style="width:65%;background:#e1306c;"></div></div>' +
            '</div>' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span>TikTok (312K Followers)</span><strong>+18,500 this month</strong></div>' +
              '<div class="inf-progress-bar-track"><div class="inf-progress-bar-fill" style="width:85%;background:#0f172a;"></div></div>' +
            '</div>' +
            '<div>' +
              '<div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px;"><span>LinkedIn (44.8K Followers)</span><strong>+2,400 this month</strong></div>' +
              '<div class="inf-progress-bar-track"><div class="inf-progress-bar-fill" style="width:52%;background:#0a66c2;"></div></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      // 2. Click-Through Rate & Lead Velocity Trend
      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<h3 class="inf-card-title"><i class="bx bx-mouse"></i> Click-Through Rate (CTR) & Conversion</h3>' +
          '<span class="inf-badge inf-badge-primary">Avg CTR: 4.82%</span>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<div style="display:flex;align-items:flex-end;gap:12px;height:140px;padding-top:10px;border-bottom:1px solid #e2e8f0;margin-bottom:1rem;">' +
            '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:45px;background:var(--inf-primary);border-radius:4px;"></div><span style="font-size:10px;color:var(--inf-text-muted);">W1</span></div>' +
            '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:68px;background:var(--inf-primary);border-radius:4px;"></div><span style="font-size:10px;color:var(--inf-text-muted);">W2</span></div>' +
            '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:115px;background:var(--inf-primary);border-radius:4px;"></div><span style="font-size:10px;color:var(--inf-text-muted);">W3 (Launch)</span></div>' +
            '<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:85px;background:var(--inf-primary);border-radius:4px;"></div><span style="font-size:10px;color:var(--inf-text-muted);">W4</span></div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;font-size:12px;color:#475569;">' +
            '<span>Total Tracked Link Clicks: <strong>19,880</strong></span>' +
            '<span style="color:var(--inf-success);font-weight:700;">+32% vs prior cycle</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

    '</div>';

    // Conversion & Revenue Attribution Breakdown
    html += '<div class="inf-card">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-dollar-circle"></i> Attribution Telemetry by Channel</h3></div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Platform Channel</th>' +
              '<th>Tracking Clicks</th>' +
              '<th>Attributed Leads</th>' +
              '<th>Paid Conversions</th>' +
              '<th>Conversion Velocity</th>' +
              '<th>Attributed Sales</th>' +
              '<th style="text-align:right;">Creator Commission Earned</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>' +
            '<tr>' +
              '<td><strong><i class="bx bxl-youtube" style="color:#ff0000;margin-right:6px;"></i> YouTube Dedicated & Shorts</strong></td>' +
              '<td>8,420</td>' +
              '<td>16</td>' +
              '<td>7</td>' +
              '<td><span class="inf-badge inf-badge-success">43.7%</span></td>' +
              '<td>$24,200</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$1,245.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong><i class="bx bxl-instagram" style="color:#e1306c;margin-right:6px;"></i> Instagram Reels & Stories</strong></td>' +
              '<td>6,150</td>' +
              '<td>12</td>' +
              '<td>5</td>' +
              '<td><span class="inf-badge inf-badge-success">41.6%</span></td>' +
              '<td>$14,800</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$640.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong><i class="bx bxl-tiktok" style="color:#0f172a;margin-right:6px;"></i> TikTok Explainer Series</strong></td>' +
              '<td>3,890</td>' +
              '<td>8</td>' +
              '<td>3</td>' +
              '<td><span class="inf-badge inf-badge-primary">37.5%</span></td>' +
              '<td>$6,900</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$220.00</strong></td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong><i class="bx bxl-linkedin" style="color:#0a66c2;margin-right:6px;"></i> LinkedIn B2B Thought Posts</strong></td>' +
              '<td>1,420</td>' +
              '<td>2</td>' +
              '<td>1</td>' +
              '<td><span class="inf-badge inf-badge-primary">50.0%</span></td>' +
              '<td>$2,600</td>' +
              '<td style="text-align:right;"><strong style="color:var(--inf-primary);">$45.00</strong></td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
    '</div>';

    return html;
  }

  /* ==========================================================================
     PAGE 12: LEADS CRM, CONVERSIONS & REFERRALS
     ========================================================================== */
  function renderLeads() {
    var leads = window.INFLUENCER_DB.leads;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">My Attributed Leads CRM</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Track customer signups and commercial leads attributed to your promotional links.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openAddLeadModal()"><i class="bx bx-user-plus"></i> Add New Lead</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Lead ID</th>' +
              '<th>Campaign</th>' +
              '<th>Source / Channel</th>' +
              '<th>Referral Code</th>' +
              '<th>Masked Contact</th>' +
              '<th>Product Interest</th>' +
              '<th>Est. Value</th>' +
              '<th>Pipeline Status</th>' +
              '<th>Follow-Up</th>' +
              '<th style="text-align:right;">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    leads.forEach(function(l) {
      var badgeClass = l.status === 'Converted' ? 'inf-badge-success' : l.status === 'Lost' ? 'inf-badge-danger' : l.status === 'Qualified' ? 'inf-badge-primary' : 'inf-badge-warning';
      html += '<tr>' +
        '<td><code>' + l.id + '</code></td>' +
        '<td><strong>' + l.campaign + '</strong></td>' +
        '<td>' + l.source + '</td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + l.referralCode + '</span></td>' +
        '<td><code>' + l.contactMasked + '</code></td>' +
        '<td>' + l.product + '</td>' +
        '<td><strong style="color:#0f172a;">' + l.value + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + l.status + '</span></td>' +
        '<td>' + l.followUpDate + '</td>' +
        '<td style="text-align:right;">' +
          '<select class="inf-select" style="padding:2px 6px;font-size:11px;" onchange="updateLeadStatus(\'' + l.id + '\', this.value)">' +
            '<option value="' + l.status + '">Update: ' + l.status + '</option>' +
            '<option value="Contacted">Contacted</option>' +
            '<option value="Qualified">Qualified</option>' +
            '<option value="Interested">Interested</option>' +
            '<option value="Converted">Converted</option>' +
            '<option value="Lost">Lost</option>' +
          '</select>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  window.updateLeadStatus = function(leadId, newStatus) {
    var l = window.INFLUENCER_DB.leads.find(function(x) { return x.id === leadId; });
    if (l) {
      l.status = newStatus;
      showInfToast('Lead ' + leadId + ' moved to ' + newStatus, 'success');
      renderCurrentPage();
    }
  };

  function renderConversions() {
    var convs = window.INFLUENCER_DB.conversions;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Attributed Conversions & Sales</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Verified checkouts and signups generating affiliate commissions.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Conversion ID</th>' +
              '<th>Campaign</th>' +
              '<th>Original Lead ID</th>' +
              '<th>Conversion Date</th>' +
              '<th>Order Value</th>' +
              '<th>Commission Earned</th>' +
              '<th>Status</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    convs.forEach(function(c) {
      html += '<tr>' +
        '<td><code>' + c.id + '</code></td>' +
        '<td><strong>' + c.campaign + '</strong></td>' +
        '<td><code>' + c.originalLeadId + '</code></td>' +
        '<td>' + c.date + '</td>' +
        '<td><strong style="color:#0f172a;">' + c.orderValue + '</strong></td>' +
        '<td><strong style="color:var(--inf-success);">' + c.commission + '</strong></td>' +
        '<td><span class="inf-badge inf-badge-success">' + c.status + '</span></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  function renderReferrals() {
    var refs = window.INFLUENCER_DB.referrals;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Affiliate Referral Links & Tracking Codes</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Real-time click telemetry and attribution performance.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">';
    refs.forEach(function(r) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<div><strong>' + r.campaign + '</strong><br><small style="color:var(--inf-text-muted);">Code: <code>' + r.code + '</code></small></div>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Copied tracking link: ' + r.link + '\', \'success\')"><i class="bx bx-copy"></i> Copy Link</button>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem;">' +
            '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;"><span style="font-size:11px;color:var(--inf-text-muted);">Clicks</span><div style="font-size:18px;font-weight:700;color:#0f172a;">' + r.clicks.toLocaleString() + '</div></div>' +
            '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;"><span style="font-size:11px;color:var(--inf-text-muted);">Conversions</span><div style="font-size:18px;font-weight:700;color:var(--inf-success);">' + r.conversions + '</div></div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-top:1px solid var(--inf-border-light);">' +
            '<span>Commission Revenue:</span>' +
            '<strong style="color:var(--inf-primary);">' + r.earnedCommission + '</strong>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 13: FINANCE, EARNINGS, INVOICES & PAYOUTS
     ========================================================================== */
  function renderEarnings() {
    var fin = window.INFLUENCER_DB.financeSummary;
    var breakdown = window.INFLUENCER_DB.earningsBreakdown;

    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Earnings & Financial Statements</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Breakdown of fixed fees, per-deliverable milestones, commissions, and performance bonuses.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openRequestPayoutModal()"><i class="bx bx-wallet"></i> Request Payout</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-pie-chart-alt-2"></i> Compensation Breakdown</h3>' +
      '</div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Revenue Category</th>' +
              '<th>Description</th>' +
              '<th style="text-align:right;">Amount</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    breakdown.forEach(function(b) {
      html += '<tr>' +
        '<td><strong>' + b.category + '</strong></td>' +
        '<td style="color:#64748b;">' + b.description + '</td>' +
        '<td style="text-align:right;"><strong style="font-size:14px;color:' + (b.amount < 0 ? 'var(--inf-danger);' : 'var(--inf-primary);') + '">' + (b.amount < 0 ? '-$' + Math.abs(b.amount).toLocaleString() : '$' + b.amount.toLocaleString()) + '</strong></td>' +
      '</tr>';
    });

    html += '<tr style="background:#f8fafc;">' +
      '<td colspan="2"><strong>Total Approved Revenue Liability</strong></td>' +
      '<td style="text-align:right;"><strong style="font-size:16px;color:var(--inf-success);">$' + fin.approvedEarnings.toLocaleString() + '</strong></td>' +
    '</tr>';

    html += '</tbody></table></div></div>';
    return html;
  }

  function renderPayouts() {
    var payouts = window.INFLUENCER_DB.payouts;
    var fin = window.INFLUENCER_DB.financeSummary;

    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Payouts & Bank Disbursements</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Direct ACH bank transfers and PayPal business transactions.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openRequestPayoutModal()"><i class="bx bx-paper-plane"></i> Request New Payout</button>' +
    '</div>';

    // Summary Cards
    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;margin-bottom:1.5rem;">' +
      '<div class="inf-card" style="margin-bottom:0;padding:1.25rem;">' +
        '<span style="font-size:11.5px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Available for Withdrawal</span>' +
        '<div style="font-size:24px;font-weight:700;color:var(--inf-success);margin:6px 0;">$' + fin.payableBalance.toLocaleString() + '</div>' +
        '<span style="font-size:11.5px;color:#64748b;">Ready to process instantly</span>' +
      '</div>' +
      '<div class="inf-card" style="margin-bottom:0;padding:1.25rem;">' +
        '<span style="font-size:11.5px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">In Batch Processing</span>' +
        '<div style="font-size:24px;font-weight:700;color:var(--inf-warning);margin:6px 0;">$' + fin.processingBalance.toLocaleString() + '</div>' +
        '<span style="font-size:11.5px;color:#64748b;">Bank clearing takes 1-2 business days</span>' +
      '</div>' +
      '<div class="inf-card" style="margin-bottom:0;padding:1.25rem;">' +
        '<span style="font-size:11.5px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Lifetime Paid Out</span>' +
        '<div style="font-size:24px;font-weight:700;color:#0f172a;margin:6px 0;">$' + fin.totalPaid.toLocaleString() + '</div>' +
        '<span style="font-size:11.5px;color:#64748b;">Cleared to verified accounts</span>' +
      '</div>' +
    '</div>';

    // Payout History Table
    html += '<div class="inf-card">' +
      '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-history"></i> Payout Audit Log</h3></div>' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Payout ID</th>' +
              '<th>Disbursement Amount</th>' +
              '<th>Payment Method</th>' +
              '<th>Transfer Date</th>' +
              '<th>Bank Reference</th>' +
              '<th>Status</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    payouts.forEach(function(p) {
      var badgeClass = p.status === 'Paid' ? 'inf-badge-success' : p.status === 'Processing' ? 'inf-badge-warning' : 'inf-badge-secondary';
      html += '<tr>' +
        '<td><code>' + p.id + '</code></td>' +
        '<td><strong style="color:#0f172a;font-size:14px;">' + p.amount + '</strong></td>' +
        '<td>' + p.method + '</td>' +
        '<td>' + p.date + '</td>' +
        '<td><code>' + p.reference + '</code></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + p.status + '</span></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  function renderInvoices() {
    var invs = window.INFLUENCER_DB.invoices;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Invoices & Tax Records</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Official invoices generated for completed campaign milestones.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Invoice Number</th>' +
              '<th>Campaign Scope</th>' +
              '<th>Invoice Date</th>' +
              '<th>Due Date</th>' +
              '<th>Total Amount</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Actions</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    invs.forEach(function(i) {
      var badgeClass = i.status === 'Paid' ? 'inf-badge-success' : i.status === 'Processing' ? 'inf-badge-warning' : 'inf-badge-info';
      html += '<tr>' +
        '<td><strong><i class="bx bx-receipt" style="color:var(--inf-primary);margin-right:6px;"></i>' + i.id + '</strong></td>' +
        '<td>' + i.campaign + '</td>' +
        '<td>' + i.invoiceDate + '</td>' +
        '<td>' + i.dueDate + '</td>' +
        '<td><strong style="color:#0f172a;">' + i.total + '</strong></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + i.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading ' + i.id + '.pdf\', \'success\')"><i class="bx bx-download"></i> PDF</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  function renderPayments() {
    return renderPayouts();
  }

  /* ==========================================================================
     PAGE 14: ENGAGEMENT, POINTS, REWARDS, BADGES & LEADERBOARD
     ========================================================================== */
  function renderPoints() {
    var pts = window.INFLUENCER_DB.points;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Points Ledger</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Earn points through on-time deliverables, high engagement rates, and lead conversions.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:1fr 2fr;gap:1.5rem;margin-bottom:1.5rem;">' +
      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-award"></i> Current Points Standing</h3></div>' +
        '<div class="inf-card-body" style="text-align:center;padding:2rem 1.5rem;">' +
          '<div style="font-size:38px;font-weight:800;color:var(--inf-purple);">' + pts.currentPoints.toLocaleString() + ' <small style="font-size:16px;">pts</small></div>' +
          '<div style="font-size:14px;font-weight:600;color:#0f172a;margin-top:6px;">' + pts.currentLevel + '</div>' +
          '<div style="font-size:12px;color:var(--inf-text-muted);margin:12px 0 16px 0;">' + (pts.nextLevelPoints - pts.currentPoints) + ' pts needed to unlock Tier 4 Ambassador</div>' +
          '<button class="inf-btn inf-btn-primary" onclick="navigateInf(\'rewards\')"><i class="bx bx-gift"></i> Redeem Rewards</button>' +
        '</div>' +
      '</div>' +

      '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-list-ul"></i> Points History Activity</h3></div>' +
        '<div class="inf-table-responsive">' +
          '<table class="inf-table">' +
            '<thead>' +
              '<tr>' +
                '<th>Activity</th>' +
                '<th>Campaign</th>' +
                '<th>Date</th>' +
                '<th style="text-align:right;">Points</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>';

    pts.history.forEach(function(h) {
      html += '<tr>' +
        '<td><strong>' + h.activity + '</strong></td>' +
        '<td>' + h.campaign + '</td>' +
        '<td>' + h.date + '</td>' +
        '<td style="text-align:right;"><strong style="color:var(--inf-purple);">' + h.points + '</strong></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div></div>';
    return html;
  }

  function renderRewards() {
    var rewards = window.INFLUENCER_DB.rewards;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Rewards Catalog</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Redeem points for studio hardware, express payout passes, and tech conference badges.</p>' +
      '</div>' +
      '<span class="inf-badge inf-badge-purple" style="font-size:13px;padding:6px 12px;"><i class="bx bx-coin-stack"></i> Available Balance: 3,850 pts</span>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem;">';
    rewards.forEach(function(r) {
      var isAvailable = r.status === 'Available';
      var isRedeemed = r.status === 'Redeemed';
      html += '<div class="inf-card" style="margin-bottom:0;display:flex;flex-direction:column;justify-content:space-between;">' +
        '<div class="inf-card-body">' +
          '<div style="width:48px;height:48px;background:var(--inf-purple-bg);color:var(--inf-purple);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:12px;">' +
            '<i class="bx ' + r.icon + '"></i>' +
          '</div>' +
          '<h3 style="font-size:15px;font-weight:700;color:#0f172a;margin:0 0 6px 0;">' + r.title + '</h3>' +
          '<p style="font-size:12.5px;color:#475569;margin:0 0 12px 0;">' + r.description + '</p>' +
          '<div style="font-size:14px;font-weight:700;color:var(--inf-purple);"><i class="bx bx-diamond"></i> ' + r.cost.toLocaleString() + ' pts</div>' +
        '</div>' +
        '<div style="padding:1rem 1.25rem;border-top:1px solid var(--inf-border-light);background:#fbfcfe;text-align:right;">' +
          (isRedeemed ? '<span class="inf-badge inf-badge-secondary">Redeemed</span>' :
           isAvailable ? '<button class="inf-btn inf-btn-primary inf-btn-sm" onclick="redeemReward(\'' + r.id + '\', ' + r.cost + ')"><i class="bx bx-check"></i> Redeem Perk</button>' :
           '<span class="inf-badge inf-badge-warning"><i class="bx bx-lock-alt"></i> Locked (Need ' + (r.cost - 3850) + ' more pts)</span>') +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  window.redeemReward = function(rewId, cost) {
    showInfToast('Reward unlocked! Processing redemption voucher.', 'success');
    var r = window.INFLUENCER_DB.rewards.find(function(x) { return x.id === rewId; });
    if (r) {
      r.status = 'Redeemed';
      renderCurrentPage();
    }
  };

  function renderBadges() {
    var badges = window.INFLUENCER_DB.badges;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Achievements & Badges</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Milestones awarded for production speed, content excellence, and brand safety compliance.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.25rem;">';
    badges.forEach(function(b) {
      html += '<div class="inf-card" style="margin-bottom:0;text-align:center;padding:1.5rem 1rem;">' +
        '<div style="width:54px;height:54px;margin:0 auto 12px auto;background:' + (b.earned ? 'var(--inf-success-bg)' : '#f1f5f9') + ';color:' + (b.earned ? 'var(--inf-success)' : '#94a3b8') + ';border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px;">' +
          '<i class="bx ' + b.icon + '"></i>' +
        '</div>' +
        '<h3 style="font-size:16px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">' + b.name + '</h3>' +
        '<p style="font-size:12px;color:var(--inf-text-muted);margin:0 0 12px 0;">' + b.requirement + '</p>' +
        '<span class="inf-badge ' + (b.earned ? 'inf-badge-success' : 'inf-badge-secondary') + '">' + (b.earned ? 'Earned ' + b.date : 'Progress: ' + b.progress) + '</span>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderLeaderboard() {
    var board = window.INFLUENCER_DB.leaderboard;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Global Creator Leaderboard</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Rankings updated weekly based on deliverable quality, verified lead generation, and community reach.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Rank</th>' +
              '<th>Influencer</th>' +
              '<th>Campaigns</th>' +
              '<th>Avg. Engagement</th>' +
              '<th>Leads</th>' +
              '<th>Conversions</th>' +
              '<th style="text-align:right;">Total Points</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    board.forEach(function(row) {
      var isMe = row.rank === 2;
      html += '<tr style="' + (isMe ? 'background:#eef2ff;font-weight:600;' : '') + '">' +
        '<td>' + (row.rank === 1 ? '🥇 #1' : row.rank === 2 ? '🥈 #2' : row.rank === 3 ? '🥉 #3' : '#' + row.rank) + '</td>' +
        '<td><strong>' + row.name + '</strong><br><small style="color:var(--inf-text-muted);">' + row.handle + '</small></td>' +
        '<td>' + row.campaigns + '</td>' +
        '<td><span style="color:var(--inf-success);font-weight:700;">' + row.engagement + '</span></td>' +
        '<td>' + row.leads + '</td>' +
        '<td>' + row.conversions + '</td>' +
        '<td style="text-align:right;"><strong style="color:var(--inf-purple);font-size:14px;">' + row.points.toLocaleString() + ' pts</strong></td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE 15: MARKETING, PROMOTIONS, RESOURCES & ASSETS
     ========================================================================== */
  function renderPromotions() {
    var promos = window.INFLUENCER_DB.promotions;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Brand Boost Promotions & Challenges</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Temporary incentives and multiplier challenges offered by brand sponsors.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">';
    promos.forEach(function(pr) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header">' +
          '<div><strong style="font-size:14px;color:#0f172a;">' + pr.name + '</strong><br><small style="color:var(--inf-primary);font-weight:600;">' + pr.campaign + '</small></div>' +
          '<span class="inf-badge inf-badge-success">' + pr.status + '</span>' +
        '</div>' +
        '<div class="inf-card-body">' +
          '<p style="font-size:13px;color:#475569;margin:0 0 12px 0;">' + pr.description + '</p>' +
          '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;font-size:12px;margin-bottom:12px;">' +
            '<div style="display:flex;justify-content:space-between;"><span>Validity:</span> <strong>' + pr.validity + '</strong></div>' +
            '<div style="display:flex;justify-content:space-between;margin-top:4px;"><span>Incentive Perk:</span> <strong style="color:var(--inf-success);">' + pr.benefit + '</strong></div>' +
          '</div>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" style="width:100%;" onclick="showInfToast(\'Promotion tracking activated\', \'success\')"><i class="bx bx-check"></i> Activate Boost</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderResources() {
    var res = window.INFLUENCER_DB.resources;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Creator Resources & Blueprints</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Approved scripts, FTC compliance frameworks, and video presets.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Resource Title</th>' +
              '<th>Category</th>' +
              '<th>File Format</th>' +
              '<th>File Size</th>' +
              '<th style="text-align:right;">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    res.forEach(function(r) {
      html += '<tr>' +
        '<td><strong>' + r.title + '</strong></td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + r.category + '</span></td>' +
        '<td>' + r.type + '</td>' +
        '<td>' + r.size + '</td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Downloading ' + r.title + '\', \'success\')"><i class="bx bx-download"></i> Download</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  function renderBrandAssets() {
    var assets = window.INFLUENCER_DB.brandAssets;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Official Brand Assets Library</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">High-resolution vector logos, product cutouts, and official photography.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:1.25rem;">';
    assets.forEach(function(a) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<img src="' + a.preview + '" style="width:100%;height:140px;object-fit:cover;border-top-left-radius:var(--inf-radius);border-top-right-radius:var(--inf-radius);">' +
        '<div class="inf-card-body">' +
          '<span style="font-size:11px;font-weight:600;color:var(--inf-primary);">' + a.brand + '</span>' +
          '<h4 style="font-size:14px;font-weight:700;color:#0f172a;margin:2px 0 6px 0;">' + a.name + '</h4>' +
          '<div style="font-size:12px;color:var(--inf-text-muted);margin-bottom:12px;">' + a.type + ' &bull; ' + a.size + '</div>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm" style="width:100%;" onclick="showInfToast(\'Downloading ' + a.name + '\', \'success\')"><i class="bx bx-download"></i> Download Asset</button>' +
        '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  /* ==========================================================================
     PAGE 16: MESSAGES & NOTIFICATIONS
     ========================================================================== */
  function renderMessages() {
    var convs = window.INFLUENCER_DB.conversations;
    var activeConv = convs.find(function(c) { return c.id === state.activeConversationId; }) || convs[0];

    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Campaign Communication & Messages</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Secure direct messaging with authorized ERP Campaign Managers and Brand Leads.</p>' +
    '</div>';

    html += '<div class="inf-card" style="display:flex;height:560px;overflow:hidden;">' +

      // Left conversation list
      '<div style="width:300px;border-right:1px solid var(--inf-border);display:flex;flex-direction:column;background:#f8fafc;">' +
        '<div style="padding:12px;border-bottom:1px solid var(--inf-border);font-size:13px;font-weight:700;color:#0f172a;">Active Campaign Threads</div>' +
        '<div style="flex:1;overflow-y:auto;">';

    convs.forEach(function(c) {
      var isSelected = c.id === activeConv.id;
      html += '<div style="padding:12px;border-bottom:1px solid var(--inf-border-light);cursor:pointer;background:' + (isSelected ? '#eef2ff' : '#fff') + ';" onclick="selectConversation(\'' + c.id + '\')">' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
          '<img src="' + c.avatar + '" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">' +
          '<div style="flex:1;min-width:0;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<strong style="font-size:13px;color:#0f172a;">' + c.recipient + '</strong>' +
              '<span style="font-size:10px;color:var(--inf-text-muted);">' + c.lastTime + '</span>' +
            '</div>' +
            '<div style="font-size:11px;color:var(--inf-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + c.campaign + '</div>' +
            '<div style="font-size:12px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px;">' + c.lastMessage + '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div>' +

      // Right chat area
      '<div style="flex:1;display:flex;flex-direction:column;background:#fff;">' +
        '<div style="padding:12px 16px;border-bottom:1px solid var(--inf-border);display:flex;align-items:center;gap:12px;">' +
          '<img src="' + activeConv.avatar + '" style="width:38px;height:38px;border-radius:50%;object-fit:cover;">' +
          '<div>' +
            '<strong style="font-size:14px;color:#0f172a;">' + activeConv.recipient + '</strong>' +
            '<div style="font-size:11.5px;color:var(--inf-text-muted);">' + activeConv.recipientRole + ' &bull; ' + activeConv.campaign + '</div>' +
          '</div>' +
        '</div>' +

        '<div id="inf-chat-stream" style="flex:1;overflow-y:auto;padding:1.25rem;display:flex;flex-direction:column;gap:12px;">';

    activeConv.messages.forEach(function(m) {
      html += '<div style="display:flex;flex-direction:column;align-items:' + (m.isMe ? 'flex-end' : 'flex-start') + ';">' +
        '<div style="max-width:70%;padding:10px 14px;border-radius:10px;font-size:13px;line-height:1.4;' + (m.isMe ? 'background:var(--inf-primary);color:#fff;' : 'background:#f1f5f9;color:#1e293b;') + '">' +
          m.text +
        '</div>' +
        '<span style="font-size:10.5px;color:var(--inf-text-muted);margin-top:3px;">' + m.sender + ' &bull; ' + m.time + '</span>' +
      '</div>';
    });

    html += '</div>' +

        // Chat Input Bar
        '<div style="padding:10px 16px;border-top:1px solid var(--inf-border);display:flex;gap:10px;align-items:center;background:#f8fafc;">' +
          '<input type="text" id="inf-msg-input" class="inf-search-input" placeholder="Type an authorized reply..." onkeydown="if(event.key===\'Enter\') sendCreatorMessage()">' +
          '<button class="inf-btn inf-btn-primary" onclick="sendCreatorMessage()"><i class="bx bx-send"></i> Send</button>' +
        '</div>' +
      '</div>' +

    '</div>';
    return html;
  }

  window.selectConversation = function(id) {
    state.activeConversationId = id;
    renderCurrentPage();
  };

  window.sendCreatorMessage = function() {
    var inp = document.getElementById('inf-msg-input');
    if (!inp || !inp.value.trim()) return;
    var text = inp.value.trim();
    var conv = window.INFLUENCER_DB.conversations.find(function(c) { return c.id === state.activeConversationId; }) || window.INFLUENCER_DB.conversations[0];
    var timeStr = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    conv.messages.push({
      sender: state.user.name + ' (You)',
      time: 'Today ' + timeStr,
      isMe: true,
      text: text
    });
    conv.lastMessage = text;
    conv.lastTime = timeStr;

    inp.value = '';
    renderCurrentPage();
    var stream = document.getElementById('inf-chat-stream');
    if (stream) stream.scrollTop = stream.scrollHeight;
    showInfToast('Message sent to campaign thread', 'success');
  };

  function renderNotifications() {
    var notifs = window.INFLUENCER_DB.notifications;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Notification Center</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">System alerts, deliverable reviews, lead conversions, and payment notices.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-outline" onclick="markAllNotificationsRead()"><i class="bx bx-check-double"></i> Mark All as Read</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div style="display:flex;flex-direction:column;">';

    notifs.forEach(function(n) {
      html += '<div style="padding:14px 18px;border-bottom:1px solid var(--inf-border-light);display:flex;align-items:flex-start;justify-content:space-between;background:' + (n.unread ? '#f8fafc' : '#fff') + ';">' +
        '<div style="display:flex;align-items:flex-start;gap:12px;">' +
          '<div style="width:36px;height:36px;border-radius:8px;background:var(--inf-' + n.color + '-bg);color:var(--inf-' + n.color + ');display:flex;align-items:center;justify-content:center;font-size:20px;">' +
            '<i class="bx ' + n.icon + '"></i>' +
          '</div>' +
          '<div>' +
            '<div style="display:flex;align-items:center;gap:8px;">' +
              '<strong style="font-size:13.5px;color:#0f172a;">' + n.title + '</strong>' +
              (n.unread ? '<span class="inf-badge inf-badge-primary">New</span>' : '') +
            '</div>' +
            '<p style="font-size:13px;color:#475569;margin:2px 0 4px 0;">' + n.message + '</p>' +
            '<span style="font-size:11px;color:var(--inf-text-muted);">' + n.category + ' &bull; ' + n.time + '</span>' +
          '</div>' +
        '</div>' +
        '<button class="inf-btn inf-btn-outline inf-btn-sm" onclick="showInfToast(\'Notification acknowledged\', \'info\')"><i class="bx bx-check"></i></button>' +
      '</div>';
    });

    html += '</div></div>';
    return html;
  }

  window.markAllNotificationsRead = function() {
    window.INFLUENCER_DB.notifications.forEach(function(n) { n.unread = false; });
    showInfToast('All notifications marked as read', 'success');
    renderCurrentPage();
  };

  /* ==========================================================================
     PAGE 17: PRODUCTIVITY, MASTER CALENDAR & TASKS
     ========================================================================== */
  function renderCalendar() {
    var events = window.INFLUENCER_DB.calendarEvents;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Master Content & Campaign Calendar</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Upcoming submission deadlines, brand briefings, and scheduled publishing windows.</p>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-card-header">' +
        '<h3 class="inf-card-title"><i class="bx bx-calendar"></i> September 2026 Schedule</h3>' +
        '<div style="display:flex;gap:6px;">' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm">Month</button>' +
          '<button class="inf-btn inf-btn-outline inf-btn-sm">Week</button>' +
          '<button class="inf-btn inf-btn-primary inf-btn-sm">Agenda</button>' +
        '</div>' +
      '</div>' +
      '<div class="inf-card-body">' +
        '<div style="display:flex;flex-direction:column;gap:10px;">';

    events.forEach(function(e) {
      html += '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:#f8fafc;border-radius:8px;border-left:4px solid ' + e.color + ';border-top:1px solid #e2e8f0;border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;">' +
        '<div>' +
          '<strong style="font-size:13.5px;color:#0f172a;">' + e.title + '</strong>' +
          '<div style="font-size:12px;color:var(--inf-text-muted);">' + e.campaign + ' &bull; Type: ' + e.type.toUpperCase() + '</div>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<div style="font-size:13px;font-weight:700;color:#0f172a;">' + e.date + '</div>' +
          '<div style="font-size:11px;color:#64748b;">' + e.time + '</div>' +
        '</div>' +
      '</div>';
    });

    html += '</div></div></div>';
    return html;
  }

  function renderTasks() {
    var tasks = window.INFLUENCER_DB.tasks;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">My Creator Tasks</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">To-do items linked directly to campaign deliverables.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="showInfToast(\'Add Task modal\', \'info\')"><i class="bx bx-plus"></i> Add Personal Task</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Task Description</th>' +
              '<th>Campaign Scope</th>' +
              '<th>Deliverable Link</th>' +
              '<th>Priority</th>' +
              '<th>Due Date</th>' +
              '<th>Status</th>' +
              '<th style="text-align:right;">Action</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    tasks.forEach(function(t) {
      var isCompleted = t.status === 'Completed';
      html += '<tr style="' + (isCompleted ? 'opacity:0.6;' : '') + '">' +
        '<td><strong>' + t.task + '</strong></td>' +
        '<td>' + t.campaign + '</td>' +
        '<td><code>' + t.deliverable + '</code></td>' +
        '<td><span class="inf-badge ' + (t.priority === 'High' ? 'inf-badge-danger' : t.priority === 'Medium' ? 'inf-badge-warning' : 'inf-badge-secondary') + '">' + t.priority + '</span></td>' +
        '<td>' + t.dueDate + '</td>' +
        '<td><span class="inf-badge ' + (isCompleted ? 'inf-badge-success' : 'inf-badge-warning') + '">' + t.status + '</span></td>' +
        '<td style="text-align:right;">' +
          '<button class="inf-btn ' + (isCompleted ? 'inf-btn-outline' : 'inf-btn-success') + ' inf-btn-sm" onclick="toggleTaskStatus(\'' + t.id + '\')">' + (isCompleted ? '<i class="bx bx-undo"></i>' : '<i class="bx bx-check"></i> Done') + '</button>' +
        '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  window.toggleTaskStatus = function(taskId) {
    var t = window.INFLUENCER_DB.tasks.find(function(x) { return x.id === taskId; });
    if (t) {
      t.status = t.status === 'Completed' ? 'Pending' : 'Completed';
      showInfToast('Task updated: ' + t.status, 'success');
      renderCurrentPage();
    }
  };

  /* ==========================================================================
     PAGE 18: SUPPORT, FAQS & TICKETS
     ========================================================================== */
  function renderHelpCenter() {
    var faqs = window.INFLUENCER_DB.faqs;
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Help Center & Creator Guidelines</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Answers to common billing questions, content revision guidelines, and ERP procedures.</p>' +
    '</div>';

    html += '<div style="display:flex;flex-direction:column;gap:12px;max-width:850px;">';
    faqs.forEach(function(f, i) {
      html += '<div class="inf-card" style="margin-bottom:0;">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-help-circle"></i> ' + f.q + '</h3></div>' +
        '<div class="inf-card-body" style="font-size:13.5px;color:#475569;line-height:1.6;">' + f.a + '</div>' +
      '</div>';
    });
    html += '</div>';
    return html;
  }

  function renderSupportTickets() {
    var tickets = window.INFLUENCER_DB.supportTickets;
    var html = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">' +
      '<div>' +
        '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Support & Dispute Tickets</h2>' +
        '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Open official tickets with ERP Operations for payment inquiries or deadline extensions.</p>' +
      '</div>' +
      '<button class="inf-btn inf-btn-primary" onclick="openCreateTicketModal()"><i class="bx bx-plus"></i> Open Support Ticket</button>' +
    '</div>';

    html += '<div class="inf-card">' +
      '<div class="inf-table-responsive">' +
        '<table class="inf-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Ticket ID</th>' +
              '<th>Category</th>' +
              '<th>Subject</th>' +
              '<th>Campaign</th>' +
              '<th>Priority</th>' +
              '<th>Status</th>' +
              '<th>Latest Staff Response</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    tickets.forEach(function(t) {
      var badgeClass = t.status === 'Resolved' ? 'inf-badge-success' : t.status === 'In Progress' ? 'inf-badge-info' : 'inf-badge-warning';
      html += '<tr>' +
        '<td><code>' + t.id + '</code></td>' +
        '<td><span class="inf-badge inf-badge-secondary">' + t.category + '</span></td>' +
        '<td><strong>' + t.subject + '</strong></td>' +
        '<td>' + t.campaign + '</td>' +
        '<td><span class="inf-badge ' + (t.priority === 'High' ? 'inf-badge-danger' : 'inf-badge-warning') + '">' + t.priority + '</span></td>' +
        '<td><span class="inf-badge ' + badgeClass + '">' + t.status + '</span></td>' +
        '<td style="max-width:280px;font-size:12px;color:#475569;">' + t.response + '</td>' +
      '</tr>';
    });

    html += '</tbody></table></div></div>';
    return html;
  }

  /* ==========================================================================
     PAGE 19: SETTINGS & SECURITY
     ========================================================================== */
  function renderSettings() {
    var html = '<div style="margin-bottom:1.5rem;">' +
      '<h2 style="font-size:20px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Account Preferences & Security</h2>' +
      '<p style="font-size:13px;color:var(--inf-text-muted);margin:0;">Configure notification delivery channels, session management, and two-factor authentication.</p>' +
    '</div>';

    html += '<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));gap:1.5rem;">' +
      '<div class="inf-card">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-bell"></i> Notification Thresholds</h3></div>' +
        '<div class="inf-card-body" style="display:flex;flex-direction:column;gap:12px;font-size:13px;">' +
          '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="checkbox" checked> Email alert on deliverable review signoff</label>' +
          '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="checkbox" checked> SMS urgent alert if deliverable within 24h of deadline</label>' +
          '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="checkbox" checked> Instant notification on new attributed lead conversion</label>' +
          '<label style="display:flex;align-items:center;gap:10px;cursor:pointer;"><input type="checkbox" checked> ACH disbursement transfer clearance alerts</label>' +
          '<button class="inf-btn inf-btn-primary" style="margin-top:1rem;" onclick="showInfToast(\'Preferences updated\', \'success\')"><i class="bx bx-save"></i> Save Settings</button>' +
        '</div>' +
      '</div>' +

      '<div class="inf-card">' +
        '<div class="inf-card-header"><h3 class="inf-card-title"><i class="bx bx-lock"></i> Security & Sessions</h3></div>' +
        '<div class="inf-card-body" style="display:flex;flex-direction:column;gap:12px;font-size:13px;">' +
          '<div><label style="font-size:12px;font-weight:600;">Current Password</label><input type="password" class="inf-search-input" value="••••••••••••"></div>' +
          '<div><label style="font-size:12px;font-weight:600;">New Password</label><input type="password" class="inf-search-input" placeholder="Enter strong new password"></div>' +
          '<div style="background:#f8fafc;padding:10px;border-radius:6px;border:1px solid #e2e8f0;margin-top:4px;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<div><strong>Two-Factor Authentication (2FA)</strong><br><small style="color:var(--inf-success);font-weight:600;">Enforced via Authenticator App</small></div>' +
              '<span class="inf-badge inf-badge-success">Active</span>' +
            '</div>' +
          '</div>' +
          '<button class="inf-btn inf-btn-outline" style="margin-top:0.5rem;" onclick="showInfToast(\'Password updated successfully\', \'success\')"><i class="bx bx-key"></i> Update Security Credentials</button>' +
        '</div>' +
      '</div>' +
    '</div>';
    return html;
  }

  /* ==========================================================================
     INTERACTIVE MODALS
     ========================================================================== */
  function openModal(title, bodyHtml, footerHtml, isLg) {
    el.modalTitle.innerHTML = title;
    el.modalBody.innerHTML = bodyHtml;
    el.modalFooter.innerHTML = footerHtml;
    if (isLg) el.modalBox.classList.add('lg');
    else el.modalBox.classList.remove('lg');
    el.modalBackdrop.classList.add('open');
  }

  window.closeInfModal = function() {
    el.modalBackdrop.classList.remove('open');
  };

  // 1. Campaign Application & Terms Acceptance Modal
  window.openApplyCampaignModal = function(campId) {
    var c = window.INFLUENCER_DB.campaigns.find(function(x) { return x.id === campId; }) || window.INFLUENCER_DB.campaigns[0];
    var title = '<i class="bx bx-briefcase"></i> Apply to ' + c.name;
    var body = '<div style="display:flex;flex-direction:column;gap:14px;">' +
      '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">' +
        '<div style="font-size:12px;color:var(--inf-text-muted);text-transform:uppercase;font-weight:600;">Campaign Brief & Commercial Terms</div>' +
        '<div style="font-size:15px;font-weight:700;color:#0f172a;margin-top:2px;">' + c.name + ' (' + c.brand + ')</div>' +
        '<div style="font-size:12.5px;color:#475569;margin-top:6px;">' + c.description + '</div>' +
        '<div style="display:flex;gap:16px;margin-top:8px;font-size:12px;">' +
          '<span>Fixed Fee: <strong style="color:var(--inf-primary);">$' + (c.compensation.fixedFee || 0).toLocaleString() + '</strong></span>' +
          '<span>Bonus: <strong style="color:var(--inf-success);">+$' + (c.compensation.bonus || 0).toLocaleString() + '</strong></span>' +
          '<span>Commission: <strong>' + (c.compensation.commission || 'N/A') + '</strong></span>' +
        '</div>' +
      '</div>' +

      '<div style="background:#fffbeb;padding:12px;border-radius:8px;border:1px solid #fde68a;font-size:12px;color:#92400e;">' +
        '<strong><i class="bx bx-file"></i> Mandatory Terms Acceptance (' + c.termsVersion + '):</strong><br>' +
        'By applying, you agree to deliver all content according to FTC disclosure rules (#Sponsored) and grant 30-day organic digital usage rights.' +
      '</div>' +

      '<div>' +
        '<label style="display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;color:#0f172a;cursor:pointer;">' +
          '<input type="checkbox" id="inf-terms-agree" style="width:16px;height:16px;"> I have read and accept campaign terms & conditions (' + c.termsVersion + ')' +
        '</label>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Proposal & Creative Concept</label>' +
        '<textarea id="inf-proposal-note" class="inf-search-input" rows="3" placeholder="Describe your video angle, production hook, or target audience alignment..."></textarea>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Requested Commercial Fee (if different from rate card)</label>' +
        '<input type="text" id="inf-proposal-fee" class="inf-search-input" value="$' + (c.compensation.fixedFee || 0).toLocaleString() + '">' +
      '</div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="closeInfModal()">Cancel</button>' +
      '<button class="inf-btn inf-btn-primary" onclick="submitCampaignApplication(\'' + c.id + '\')"><i class="bx bx-send"></i> Submit Application</button>';

    openModal(title, body, footer, true);
  };

  window.submitCampaignApplication = function(campId) {
    var chk = document.getElementById('inf-terms-agree');
    if (!chk || !chk.checked) {
      showInfToast('You must accept the campaign terms to proceed.', 'danger');
      return;
    }

    var c = window.INFLUENCER_DB.campaigns.find(function(x) { return x.id === campId; });
    var note = document.getElementById('inf-proposal-note').value;

    window.INFLUENCER_DB.applications.push({
      id: 'APP-' + Math.floor(Math.random() * 900 + 100),
      campaignId: campId,
      campaignName: c ? c.name : 'Sponsored Campaign',
      brand: c ? c.brand : 'Brand Sponsor',
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Under Review',
      proposal: note || 'Creator proposal submitted.',
      termsAccepted: true,
      termsVersion: c ? c.termsVersion : 'v1.0',
      termsTimestamp: new Date().toLocaleString(),
      requestedCompensation: '$5,000'
    });

    closeInfModal();
    showInfToast('Application submitted! Status: Applied &rarr; Under Review', 'success');
    navigateInf('applications');
  };

  // 2. Submit Content Modal
  window.openSubmitContentModal = function(campId, delId) {
    if (state.user.accountStatus === 'Suspended') {
      showInfToast('Content submissions disabled: Account is currently suspended.', 'danger');
      return;
    }

    var title = '<i class="bx bx-cloud-upload"></i> Submit Deliverable for Review';
    var camps = window.INFLUENCER_DB.campaigns.filter(function(c) { return c.status === 'Active'; });
    var deliverables = window.INFLUENCER_DB.deliverables;

    var body = '<div style="display:flex;flex-direction:column;gap:14px;">' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Select Campaign</label>' +
        '<select id="sub-camp-id" class="inf-select" style="width:100%;">' +
          camps.map(function(c) { return '<option value="' + c.id + '" ' + (c.id === campId ? 'selected' : '') + '>' + c.name + ' (' + c.brand + ')</option>'; }).join('') +
        '</select>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Select Deliverable Item</label>' +
        '<select id="sub-del-id" class="inf-select" style="width:100%;">' +
          deliverables.map(function(d) { return '<option value="' + d.id + '" ' + (d.id === delId ? 'selected' : '') + '>' + d.type + ' (' + d.platform + ' - Due: ' + d.dueDate + ')</option>'; }).join('') +
        '</select>' +
      '</div>' +

      // Mock Drag and Drop Area
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Upload Video / Image Draft (Mock Storage)</label>' +
        '<div style="border:2px dashed #cbd5e1;border-radius:8px;padding:24px;text-align:center;background:#f8fafc;cursor:pointer;" onclick="showInfToast(\'File selected: final_render_1080p.mp4 (412 MB)\', \'info\')">' +
          '<i class="bx bx-cloud-upload" style="font-size:36px;color:var(--inf-primary);"></i>' +
          '<div style="font-size:13px;font-weight:600;color:#0f172a;margin-top:6px;">Drag & Drop high-res video or click to browse</div>' +
          '<div style="font-size:11.5px;color:var(--inf-text-muted);margin-top:2px;">Supports MP4, MOV, ProRes up to 4GB (Simulated)</div>' +
        '</div>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">External Staging / Frame.io / YouTube Unlisted URL</label>' +
        '<input type="url" id="sub-url" class="inf-search-input" placeholder="https://youtube.com/watch?v=unlisted_staging_preview">' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Caption Draft</label>' +
        '<textarea id="sub-caption" class="inf-search-input" rows="2" placeholder="Full proposed post caption including compliance disclosures..."></textarea>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Required Hashtags & Mentions</label>' +
        '<input type="text" id="sub-tags" class="inf-search-input" value="#Sponsored #Ad #HyperionIDE @BrandOfficial">' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Planned Publishing Window</label>' +
        '<input type="date" id="sub-date" class="inf-search-input" value="2026-09-18">' +
      '</div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="showInfToast(\'Draft saved locally\', \'info\');closeInfModal();">Save Draft</button>' +
      '<button class="inf-btn inf-btn-primary" onclick="submitContentForReview()"><i class="bx bx-send"></i> Submit for Review</button>';

    openModal(title, body, footer, true);
  };

  window.submitContentForReview = function() {
    var campSelect = document.getElementById('sub-camp-id');
    var delSelect = document.getElementById('sub-del-id');
    var captionInp = document.getElementById('sub-caption');

    var newSub = {
      id: 'CS-' + Math.floor(Math.random() * 900 + 100),
      deliverableId: delSelect ? delSelect.value : 'DEL-201',
      campaignName: campSelect ? campSelect.options[campSelect.selectedIndex].text : 'Active Campaign',
      deliverableName: delSelect ? delSelect.options[delSelect.selectedIndex].text.split('(')[0] : 'Video Submission',
      platform: 'YouTube',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=350&q=80',
      submittedDate: new Date().toLocaleString(),
      reviewStatus: 'Submitted',
      reviewer: 'ERP Compliance Admin',
      reviewerComment: 'Awaiting technical review and legal compliance signoff.',
      publishedUrl: null,
      caption: captionInp ? captionInp.value : 'New video walkthrough.',
      hashtags: '#Sponsored #Ad',
      version: 'v1.0',
      versionHistory: [
        { version: 'v1.0', date: new Date().toLocaleDateString(), status: 'Submitted', reviewerNote: 'Initial submission under review.' }
      ]
    };

    window.INFLUENCER_DB.contentSubmissions.unshift(newSub);
    closeInfModal();
    showInfToast('Deliverable submitted successfully! Review status: Submitted &rarr; Under Review', 'success');
    navigateInf('content-library');
  };

  // 3. Revision Review & Resubmit Modal
  window.openRevisionReviewModal = function(delId) {
    var sub = window.INFLUENCER_DB.contentSubmissions.find(function(s) { return s.deliverableId === delId; }) || window.INFLUENCER_DB.contentSubmissions[1];
    var title = '<i class="bx bx-revision"></i> Revision Required — ' + sub.deliverableName;

    var body = '<div style="display:flex;flex-direction:column;gap:14px;">' +
      '<div style="background:#fee2e2;border:1px solid #fecaca;padding:12px 16px;border-radius:8px;color:#991b1b;font-size:13px;">' +
        '<strong><i class="bx bx-error-circle"></i> Reviewer Feedback from ' + (sub.reviewer || 'Sarah Jenkins') + ':</strong>' +
        '<div style="margin-top:4px;line-height:1.5;">"' + (sub.reviewerComment || 'Please adjust the segment demonstrating branch previews.') + '"</div>' +
      '</div>' +

      '<div style="background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;font-size:12.5px;">' +
        '<strong>Previous Submission (' + sub.version + '):</strong> ' + sub.caption +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Updated Video Staging URL (Revision v2.0)</label>' +
        '<input type="url" id="rev-url" class="inf-search-input" value="https://youtube.com/watch?v=revised_cut_v2_alex">' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Creator Revision Changelog Notes</label>' +
        '<textarea id="rev-notes" class="inf-search-input" rows="2" placeholder="Detail how you addressed the reviewer feedback..."></textarea>' +
      '</div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="closeInfModal()">Cancel</button>' +
      '<button class="inf-btn inf-btn-danger" onclick="resubmitContentRevision(\'' + sub.id + '\')"><i class="bx bx-upload"></i> Resubmit Revision v2.0</button>';

    openModal(title, body, footer, true);
  };

  window.resubmitContentRevision = function(subId) {
    var s = window.INFLUENCER_DB.contentSubmissions.find(function(x) { return x.id === subId; });
    if (s) {
      s.reviewStatus = 'Resubmitted';
      s.version = 'v2.0';
      s.versionHistory.push({
        version: 'v2.0',
        date: new Date().toLocaleDateString(),
        status: 'Resubmitted',
        reviewerNote: 'Revision v2.0 submitted with git preview clip included.'
      });
      closeInfModal();
      showInfToast('Revision v2.0 resubmitted for brand signoff!', 'success');
      navigateInf('content-library');
    }
  };

  // 4. Add Attributed Lead Modal
  window.openAddLeadModal = function() {
    var title = '<i class="bx bx-user-plus"></i> Log Attributed Commercial Lead';
    var camps = window.INFLUENCER_DB.campaigns;

    var body = '<div style="display:flex;flex-direction:column;gap:12px;">' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Campaign</label>' +
        '<select id="lead-camp" class="inf-select" style="width:100%;">' +
          camps.map(function(c) { return '<option value="' + c.name + '">' + c.name + '</option>'; }).join('') +
        '</select>' +
      '</div>' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Masked Client / Lead Identifier</label>' +
        '<input type="text" id="lead-mask" class="inf-search-input" placeholder="e.g. t***m@cloudagency.io">' +
      '</div>' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Product Interest</label>' +
        '<input type="text" id="lead-prod" class="inf-search-input" placeholder="e.g. Hyperion Enterprise Dedicated Cluster">' +
      '</div>' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Estimated Deal Value</label>' +
        '<input type="text" id="lead-val" class="inf-search-input" placeholder="$2,500">' +
      '</div>' +
      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Referral Code Used</label>' +
        '<input type="text" id="lead-code" class="inf-search-input" value="ALEX-HYPERION-26">' +
      '</div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="closeInfModal()">Cancel</button>' +
      '<button class="inf-btn inf-btn-primary" onclick="submitNewLead()"><i class="bx bx-check"></i> Add to Pipeline</button>';

    openModal(title, body, footer, false);
  };

  window.submitNewLead = function() {
    var camp = document.getElementById('lead-camp').value;
    var mask = document.getElementById('lead-mask').value || 'c***r@techstartup.io';
    var prod = document.getElementById('lead-prod').value || 'Standard Subscription';
    var val = document.getElementById('lead-val').value || '$1,500';
    var code = document.getElementById('lead-code').value || 'ALEX-HYPERION-26';

    window.INFLUENCER_DB.leads.unshift({
      id: 'LD-' + Math.floor(Math.random() * 9000 + 1000),
      campaign: camp,
      source: 'Direct Creator Tracking Link',
      referralCode: code,
      contactMasked: mask,
      product: prod,
      value: val,
      status: 'New',
      createdDate: new Date().toISOString().split('T')[0],
      followUpDate: '2026-09-24'
    });

    closeInfModal();
    showInfToast('New attributed lead recorded in pipeline funnel!', 'success');
    navigateInf('leads');
  };

  // 5. Request Payout Modal
  window.openRequestPayoutModal = function() {
    var fin = window.INFLUENCER_DB.financeSummary;
    var title = '<i class="bx bx-wallet"></i> Request Payout Disbursement';

    var body = '<div style="display:flex;flex-direction:column;gap:14px;">' +
      '<div style="background:#dcfce7;border:1px solid #bbf7d0;padding:14px;border-radius:8px;text-align:center;">' +
        '<div style="font-size:12px;color:#166534;font-weight:600;text-transform:uppercase;">Payable Disbursable Balance</div>' +
        '<div style="font-size:28px;font-weight:800;color:#14532d;margin-top:4px;">$' + fin.payableBalance.toLocaleString() + '</div>' +
        '<div style="font-size:11.5px;color:#15803d;margin-top:2px;">Cleared by ERP Accounting &bull; Ready for instant transfer</div>' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Withdrawal Amount</label>' +
        '<input type="text" id="pay-amt" class="inf-search-input" value="$' + fin.payableBalance.toLocaleString() + '">' +
      '</div>' +

      '<div>' +
        '<label style="font-size:12px;font-weight:600;color:#475569;">Destination Payment Profile</label>' +
        '<select id="pay-dest" class="inf-select" style="width:100%;">' +
          '<option value="Chase ACH">Direct Bank ACH (Chase ****4102) &bull; 0% fee</option>' +
          '<option value="PayPal">PayPal Business (alex.rivera@creator.io) &bull; 1.5% fee</option>' +
        '</select>' +
      '</div>' +

      '<div style="font-size:12px;color:var(--inf-text-muted);">' +
        '<i class="bx bx-shield-quarter"></i> Standard ACH clearing completes within 24-48 hours. W-9 tax documentation is current.' +
      '</div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="closeInfModal()">Cancel</button>' +
      '<button class="inf-btn inf-btn-success" onclick="processPayoutRequest()"><i class="bx bx-check-double"></i> Confirm & Request ACH</button>';

    openModal(title, body, footer, false);
  };

  window.processPayoutRequest = function() {
    var fin = window.INFLUENCER_DB.financeSummary;
    var dest = document.getElementById('pay-dest').value;

    window.INFLUENCER_DB.payouts.unshift({
      id: 'PAY-' + Math.floor(Math.random() * 900 + 100),
      amount: '$' + fin.payableBalance.toLocaleString() + '.00',
      method: dest,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
      reference: 'ACH-REQ-' + Math.floor(Math.random() * 900000 + 100000)
    });

    fin.processingBalance += fin.payableBalance;
    fin.payableBalance = 0;

    closeInfModal();
    showInfToast('Payout request queued successfully! Processing transfer.', 'success');
    navigateInf('payouts');
  };

  // 6. Create Support Ticket Modal
  window.openCreateTicketModal = function() {
    var title = '<i class="bx bx-support"></i> Open ERP Support Ticket';
    var body = '<div style="display:flex;flex-direction:column;gap:12px;">' +
      '<div><label style="font-size:12px;font-weight:600;">Category</label><select id="tck-cat" class="inf-select" style="width:100%;"><option value="Payment Issue">Payment & Payout Inquiry</option><option value="Deliverable Extension">Deliverable Deadline Extension</option><option value="Technical Issue">Technical / Video Upload Issue</option><option value="Compliance">FTC Compliance & Guidelines</option></select></div>' +
      '<div><label style="font-size:12px;font-weight:600;">Campaign Scope</label><input type="text" id="tck-camp" class="inf-search-input" value="Hyperion Cloud IDE Global Launch"></div>' +
      '<div><label style="font-size:12px;font-weight:600;">Subject</label><input type="text" id="tck-subj" class="inf-search-input" placeholder="Summary of your inquiry..."></div>' +
      '<div><label style="font-size:12px;font-weight:600;">Priority</label><select id="tck-pri" class="inf-select" style="width:100%;"><option value="Medium">Medium</option><option value="High">High</option><option value="Low">Low</option></select></div>' +
      '<div><label style="font-size:12px;font-weight:600;">Detailed Description</label><textarea id="tck-desc" class="inf-search-input" rows="3" placeholder="Provide full context for the ERP campaign manager..."></textarea></div>' +
    '</div>';

    var footer = '<button class="inf-btn inf-btn-outline" onclick="closeInfModal()">Cancel</button>' +
      '<button class="inf-btn inf-btn-primary" onclick="submitSupportTicket()"><i class="bx bx-send"></i> Submit Ticket</button>';

    openModal(title, body, footer, false);
  };

  window.submitSupportTicket = function() {
    var cat = document.getElementById('tck-cat').value;
    var camp = document.getElementById('tck-camp').value;
    var subj = document.getElementById('tck-subj').value || 'Inquiry regarding campaign milestones';
    var pri = document.getElementById('tck-pri').value;

    window.INFLUENCER_DB.supportTickets.unshift({
      id: 'TCK-' + Math.floor(Math.random() * 900 + 100),
      category: cat,
      subject: subj,
      campaign: camp,
      priority: pri,
      status: 'In Progress',
      date: new Date().toISOString().split('T')[0],
      response: 'Ticket assigned to ERP creator operations team. Response typically within 4 hours.'
    });

    closeInfModal();
    showInfToast('Support ticket logged successfully', 'success');
    navigateInf('support-tickets');
  };

  /* ==========================================================================
     PROTOTYPE DEMO STATE CONTROLS
     ========================================================================== */
  window.toggleDemoPanel = function() {
    state.demoControlsOpen = !state.demoControlsOpen;
    if (el.demoPanel) {
      if (state.demoControlsOpen) el.demoPanel.classList.add('open');
      else el.demoPanel.classList.remove('open');
    }
  };

  window.demoSwitchAccountStatus = function(status) {
    state.user.accountStatus = status;
    showInfToast('Account Status switched to: ' + status, status === 'Active' ? 'success' : 'danger');
    renderCurrentPage();
  };

  window.demoFastForwardApplication = function() {
    var app = window.INFLUENCER_DB.applications.find(function(a) { return a.status === 'Under Review'; });
    if (app) {
      app.status = 'Approved';
      showInfToast('Application ' + app.id + ' approved by brand!', 'success');
      renderCurrentPage();
    } else {
      showInfToast('No applications currently in Under Review status.', 'info');
    }
  };

  window.demoAdvanceContentReview = function() {
    var sub = window.INFLUENCER_DB.contentSubmissions.find(function(s) { return s.reviewStatus === 'Submitted' || s.reviewStatus === 'Resubmitted'; });
    if (sub) {
      sub.reviewStatus = 'Approved';
      sub.reviewerComment = 'Demo Simulation: Content signed off by ERP Compliance Director!';
      showInfToast('Submission ' + sub.id + ' advanced to Approved!', 'success');
      renderCurrentPage();
    } else {
      showInfToast('No submissions pending review signoff.', 'info');
    }
  };

  window.demoFastForwardPayout = function() {
    var p = window.INFLUENCER_DB.payouts.find(function(x) { return x.status === 'Processing'; });
    if (p) {
      p.status = 'Paid';
      window.INFLUENCER_DB.financeSummary.totalPaid += 2500;
      window.INFLUENCER_DB.financeSummary.processingBalance -= 2500;
      showInfToast('Payout ' + p.id + ' marked Paid by bank ACH network!', 'success');
      renderCurrentPage();
    } else {
      showInfToast('No payouts currently in Processing status.', 'info');
    }
  };

  /* ==========================================================================
     AUTH & INITIALIZATION
     ========================================================================== */
  window.doQuickLogin = function(userId) {
    var target = window.INFLUENCER_DB.demoUsers.find(function(u) { return u.id === userId; });
    if (target) {
      state.user = Object.assign({}, window.INFLUENCER_DB.currentUser, target);
      if (target.id === 'INF-7721') {
        state.user.accountStatus = 'Suspended';
        state.user.name = 'Marcus Vance';
        state.user.handle = '@marcus_vance_fit';
        state.user.niche = 'Fitness & Health';
      } else {
        state.user.accountStatus = 'Active';
      }
    }

    if (el.authScreen) el.authScreen.style.display = 'none';
    if (el.appLayout) el.appLayout.style.display = 'flex';

    if (el.topbarName) el.topbarName.textContent = state.user.name;
    if (el.topbarRole) el.topbarRole.textContent = state.user.tier;
    if (el.topbarAvatar) el.topbarAvatar.textContent = state.user.name.charAt(0);

    navigateInf('dashboard');
    showInfToast('Logged in as ' + state.user.name + ' (' + state.user.accountStatus + ')', 'success');
  };

  window.doInfLogout = function() {
    if (el.appLayout) el.appLayout.style.display = 'none';
    if (el.authScreen) el.authScreen.style.display = 'flex';
    showInfToast('Logged out of Influencer Portal', 'info');
  };

  // Filter Helpers
  window.filterCampaigns = function(q) {
    q = q.toLowerCase();
    var cards = document.querySelectorAll('#inf-campaigns-grid .inf-card');
    cards.forEach(function(c) {
      c.style.display = c.textContent.toLowerCase().indexOf(q) !== -1 ? '' : 'none';
    });
  };

  window.filterCampaignsByNiche = function(niche) {
    var cards = document.querySelectorAll('#inf-campaigns-grid .inf-card');
    cards.forEach(function(c) {
      if (niche === 'all') c.style.display = '';
      else c.style.display = c.textContent.toLowerCase().indexOf(niche.toLowerCase()) !== -1 ? '' : 'none';
    });
  };

  // Toggle Sidebar for Mobile
  window.toggleInfSidebar = function() {
    var sb = document.getElementById('inf-sidebar');
    if (sb) sb.classList.toggle('open');
  };

  // Auto-login on load for immediate interactive exploration
  document.addEventListener('DOMContentLoaded', function() {
    doQuickLogin('INF-8842');
  });

})();
