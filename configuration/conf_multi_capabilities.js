// config file for multicapabilities

exports.config = {
  framework: 'jasmine2',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
  }))},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/spec.js'],
  multiCapabilities:[{
	  browserName: 'firefox'
  },{browserName: 'chrome'}]
  }
