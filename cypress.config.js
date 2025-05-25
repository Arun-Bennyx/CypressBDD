const { defineConfig } = require('cypress');
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/features/**/*.feature',
    stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      return config;
    },
  },
  // Add cucumberPreprocessor configuration
  cucumberPreprocessor: {
    nonGlobalStepDefinitions: false,
    stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
  },
});
