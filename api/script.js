// const $ = require('jquery');


function getWeatherOnMyLocation () {
 return navigator.geolocation.getCurrentPosition(function(location) {
	var ab = location.coords.latitude;
	var ba = location.coords.longitude;
	var sum = ab + "," + ba;
	 function sendRequest() {
	

		var newRequest = new XMLHttpRequest();

		newRequest.open("GET", "http://api.apixu.com/v1/current.json?key=b06a844ff9b94ff08c6182022181912&q=" + sum);

		newRequest.onload = () => {
				var currentWeather = JSON.parse(newRequest.responseText);
				console.log(currentWeather);
				removeDispWeather();
				displayData(currentWeather);
				
		};

		newRequest.onerror = err => 		
			console.error('Ошибка');
			displayError();
		;

		newRequest.send();
	
};

function displayData (currentWeather){
		
		var a = $.create("table");
		
		
		var checkCity = $("body");
		var arr = checkCity.textContent;

		if(arr.indexOf(currentWeather.location.name) === -1){
			

			$("#table").append(`<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${currentWeather.current.temp_c + " °С"}</td><td>${currentWeather.current.temp_f + " F"}</td></tr>`)
		}
		
  

};
function removeDispWeather(){
	$("#weather_info").html("");	
	
};

function displayError(){
	var div_error = $.create('div').$(".Error").$("An error occured! Please try again");
	
	
	$("#weather_info").append(div_error);
};
return sendRequest()
});



};

function sendRequest2() {
			
	var newRequest = new XMLHttpRequest();

	newRequest.open("GET",
	"http://api.apixu.com/v1/current.json?key=b06a844ff9b94ff08c6182022181912&q=" + document.getElementById('weatherField').value);

	newRequest.onload = () => {
			var currentWeather = JSON.parse(newRequest.responseText);
			console.log(currentWeather);
			removeDispWeather();
			displayData(currentWeather);
	};

	newRequest.onerror = err => 		
		console.error('Ошибка');
		displayError();
	

	newRequest.send();


function displayData (currentWeather){
	
	var a = $.create("table");
		
		
		var checkCity = $("body");
		var arr = checkCity.textContent;

		if(arr.indexOf(currentWeather.location.name) === -1){
			

			$("#table").append(`<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${currentWeather.current.temp_c + " °С"}</td><td>${currentWeather.current.temp_f + " F"}</td></tr>`)
		}
		
  

};
function removeDispWeather(){
	$("#weather_info").html("");	
	
};

function displayError(){
	var div_error = $.create('div').$(".Error").$("An error occured! Please try again");
	
	
	$("#weather_info").append(div_error);
};
return sendRequest()
};


	


function clearTable(){
	$("#table").html("");	
	
	};



	