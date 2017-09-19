var pageObjectAngularHomePage = require('./AngularPageObject.js')
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    var angularHomepage = new pageObjectAngularHomePage();
    angularHomepage.get();

    angularHomepage.setName('Julie');

    expect(angularHomepage.getGreetName()).toEqual('Hello Julie!');
  });
});