const { CapacitorConfig } = require('@capacitor/cli');

const config = {
  appId: 'com.kats.studio',
  appName: 'K-ATS Studio',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  }
};

module.exports = config;
