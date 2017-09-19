describe('testing check box', function(){
	
it('navigate to angularjs org page', function(){
	browser.get('https://www.angularjs.org/');	
	expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
});

it('verify to-do list is selected', function(){
	element(By.xpath('//li[2]/label/input')).click();
	var actualSelection = element(by.xpath('//div[2]/div/span')).getText();
	expect(actualSelection).toEqual('0 of 2 remaining');
});
	
it('verify to-do list is unselected all', function(){
	
	element(By.xpath('//li[1]/label/input')).click();
	element(By.xpath('//li[2]/label/input')).click();
	var actualSelection = element(by.xpath('//div[2]/div/span')).getText();
	expect(actualSelection).toEqual('2 of 2 remaining');
	
});

it('verify a new to do list is added', function(){
	element(by.model('todoList.todoText')).sendKeys('testing');
	element(by.xpath('//form/input[@value="add"]')).click();
	var isCheckBoxDisplayed = element(By.xpath('//li[3]/label/input')).isDisplayed();
	expect(isCheckBoxDisplayed).toEqual(true);
});
});