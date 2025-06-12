const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
