/**
 * Frontend Environment Configuration
 * 
 * For LOCAL development: leave API_URL empty (uses same origin)
 * For RENDER separate deployment: set API_URL to your backend service URL
 * 
 * Example for Render:
 *   window.ENV = { API_URL: 'https://erp-backend.onrender.com' };
 */
window.ENV = window.ENV || {};
window.ENV.API_URL = window.ENV.API_URL || '';
