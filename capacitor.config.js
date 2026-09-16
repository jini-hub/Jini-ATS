const { CapacitorConfig } = require('@capacitor/cli');

const config = {
  appId: 'com.kats.studio',
  appName: 'Jini-ATS',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

module.exports = config;
