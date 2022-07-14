const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#',
    baseUrl: 'https://rahulshettyacademy.com/AutomationPractice',
    specPattern: 'cypress/e2e/UI/*.js',
  },
});
