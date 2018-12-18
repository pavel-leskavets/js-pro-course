'use strict';
class Car {
constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
this.name = name;
this.model = model;
this.year = year;
this.color = color;
this.maxSpeed = maxSpeed;
this.fuelCapacity = fuelCapacity || 60;
this.fuelConsumption = fuelConsumption || 10;	
}
getFullName(){
return this.name + " " + this.model

}
getAge(){
let date = new Date;
let nowYear = date.getFullYear();
return nowYear - this.year
}
changeColor(newColor){
	if(newColor == this.color){
		alert("Sorry, you car is already that color")
		
	}
	else{
this.color = newColor;
alert("Now your car is painted in " + newColor + " color" )
}
}
calculateWay(kilometers, fuel, maxSpeed, fuelCapacity, fuelConsumption){
let travelTime = Math.ceil(kilometers / this.maxSpeed);
	console.log("On the road will take " + travelTime + " hours");
if(fuel < 10){
	alert("Refuel please");
	
} else if((fuel / this.fuelConsumption) * 100 >= kilometers){
alert("No refueling on the way")
	
} else{
	let remainingPath = kilometers - ((fuel / this.fuelConsumption) * 100);
	let pathOnOnTank = (this.fuelCapacity / this.fuelConsumption) * 100 ;
	let numberOfRefueling = Math.ceil(remainingPath / pathOnOnTank);
	alert("On the way you need " + numberOfRefueling + " refueling")
	
}
}
}
class BMW extends Car {
	constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
		this.AirСonditioning = false;
	}
	
	
		onAirConditioning(currentTemperature) {
	if(currentTemperature > 22) {
		this.AirСonditioning = true;
		alert("Air conditioning is on")
	}
}


}
class Lada extends Car{
	
	constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
		this.bottom = false;
	}
	

penBottom(currentSpeed) {
	if(currentSpeed > 100) {
		this.bottom = true;
		alert("Now the car will be left without a bottom")
	}
	
}
}
class Mersedes extends Car{
	constructor(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption){
super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
		this.hatchInTheCar = true;
	}

	

sayYea(){

		alert("Yeeeaaa, i\'m drive on Mersedes")
	
	
}
}
const bmw = new BMW("m5", " e-class", 2015, "black", 200, 100, 15);
const lada =  new Lada("lada", "kalina", 2008, "green", 120, 60, 12);
const mers = new Mersedes("Mersedes", "E60 AMG", 2014, "red", 225, 50, 20) 