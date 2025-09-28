const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.expandtesting.com/',
    setupNodeEvents(on, config) {
      // Register the mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
      // You can add other node event listeners here
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports",      // Folder for reports
    charts: true,              // Show charts
    reportPageTitle: "My Test Report", 
    embeddedScreenshots: true, // Embed screenshots in the report
    inlineAssets: true,        // Inline CSS/JS assets
    html: true,                // Generate HTML report
    json: true                 // Generate JSON report as well
  },
});
