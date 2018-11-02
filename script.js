function Person (name) {
	this.name = name;
}

Person.prototype.speak = function() { 
	console.log('Hello!');
}

person.prototype.__proto__ =  Person.prototype;


var person;
person.prototype.speak();


function NEW (constructor, args) {

	
	newObject.prototype.__proto__ = Person.prototype;
	var newObject = {};
	Person.apply(this, arguments);
	return newObject
	
	
}


		var Person = function(name) {
	this.name = name;
}

person = new Person( 'Alexis' );
alert(person instanceof Person);
alert(person.name);
function INSTANCEOF (object, constructor) {
 if(object.hasOwnProperty(__proto__) == false ) {
	 return negative
 }
	if(newObject instanceof Person){
		return positive
	} else if(newObject.__proto__ instanceof Person){
		return  positive
	}
	
}