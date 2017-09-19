describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('https://www.angularjs.org/');

    expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
	element(by.model('yourName')).sendKeys('Praveen');
	var greeting = element(by.binding('yourName')).getText();
	expect(greeting).toEqual('Hello Praveen!');	
  });
});