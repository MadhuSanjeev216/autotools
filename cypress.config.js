const { defineConfig } = require('cypress')

const logToConsole = {
  log(message){
    console.log(message);
    return null;
  }
};

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    baseUrl: 'http://173.42.113.230:10080',
    numTestsKeptInMemory: 100,
    setupNodeEvents(on, config) {
      on('task', logToConsole)
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args

        if (browser.family === 'chromium') {
          // auto open devtools
          launchOptions.args.push('--explicitly-allowed-ports=10080')
        }
        // whatever you return here becomes the launchOptions
        return launchOptions
      })
    },
  },
})