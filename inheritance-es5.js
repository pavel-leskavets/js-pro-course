function Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
this.name = name;
this.model = model;
this.year = year;
this.color = color;
this.maxSpeed = maxSpeed;
this.fuelCapacity = fuelCapacity || 60;
this.fuelConsumption = fuelConsumption || 10;	
}
Car.prototype.getFullName = function(){
return this.name + " " + this.model

}
Car.prototype.getAge = function(){
var date = new Date;
var year = date.getFullYear();
return year - this.year
}
Car.prototype.changeColor = function(newColor){
	if(newColor == this.color){
		alert("Sorry, you car is already that color")
		
	}
	else{
this.color = newColor;
alert("Now your car is painted in " + newColor + " color" )
}
}
Car.prototype.calculateWay = function(kilometers, fuel){
var travelTime = Math.ceil(kilometers / this.maxSpeed);
	console.log("On the road will take " + travelTime + " hours");
if(fuel < 10){
	alert("Refuel please");
	
} else if((fuel / this.fuelConsumption) * 100 >= kilometers){
alert("No refueling on the way")
	
} else{
	var remainingPath = kilometers - ((fuel / this.fuelConsumption) * 100);
	var pathOnOnTank = (this.fuelCapacity / this.fuelConsumption) * 100 ;
	var numberOfRefueling = Math.ceil(remainingPath / pathOnOnTank);
	alert("On the way you need " + numberOfRefueling + " refueling")
	
}
}

function BMW(){
	Car.apply(this, arguments);
	this.AirСonditioning = false;
	
}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;
BMW.prototype.onAirConditioning = function(currentTemperature){
	if(currentTemperature > 22) {
		this.AirСonditioning = true;
		alert("Air conditioning is on")
	}
	
}
function Lada(){
	Car.apply(this, arguments);
	this.bottom = false;
	
}
Lada.prototype = Object.create(Car.prototype);
Lada.prototype.constructor = Lada;
Lada.prototype.openBottom = function(currentSpeed){
	if(currentSpeed > 100) {
		this.bottom = true;
		alert("Now the car will be left without a bottom")
	}
	
}
function Mersedes(){
	Car.apply(this, arguments);
	this.hatchInTheCar = true;
	
}
Mersedes.prototype = Object.create(Car.prototype);
Mersedes.prototype.constructor = Mersedes;
Mersedes.prototype.sayYea = function(){

		alert("Yeeeaaa, i\'m drive on Mersedes")
	
	
}
var m5 = new BMW("m5", " e-class", 2015, "black", 200, 100, 15);
var lada = new Lada("lada", "kalina", 2008, "green", 120, 60, 12);
var mers = new Mersedes("Mersedes", "E60 AMG", 2014, "red", 225, 50, 20)




	
	
	
	
	
	
	
	
	
	