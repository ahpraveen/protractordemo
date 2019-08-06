exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/to-do-list_spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
