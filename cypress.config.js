import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 10000,
  responseTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
