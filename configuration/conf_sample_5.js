exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/testPageObjectspec.js'],
  capabilities: {
  browserName: 'firefox'
  },
  jasmineNodeOpts:{
	  showColors: true
  }
};
