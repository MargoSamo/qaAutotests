const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1280,
    viewportHeight: 1024,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    fixtureFolder: "src/fixtures",
    screenshotsFolder: "src/screenshots",
    videosFolder: "src/videos",
    downloadsFolder: "src/downloads",

    e2e: {
        baseUrl: "http://capital.com",
        video: false,
        videoUploadOnPasses: false,
    },
});