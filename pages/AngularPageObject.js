var AngularPageObject = function(){
var inputName = element(by.model('yourName'));
var bindingName = element(by.binding('yourName'));

this.get = function(){
browser.get('https://www.angularjs.org/');
};

this.setName = function(name){
inputName.sendKeys(name);
};

this.getGreetName = function(){
bindingName.getText().then(function(text){
	console.log(text);
});
return bindingName.getText();
};

};

module.exports = AngularPageObject;
