function sendRequest() {
			
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
			//displayError();
		;

		newRequest.send();
	
};

function displayData (currentWeather){
		var div_city = document.createElement('div');
		div_city.className = "city_weather";
		div_city.innerHTML = currentWeather.location.name + " , " + currentWeather.location.country ;
		document.getElementById("weather_info").appendChild(div_city);
	
		var div_temp = document.createElement('div');
		div_temp.className = "temp_weather";
		div_temp.innerHTML = currentWeather.current.temp_c + " °С";
		document.getElementById("weather_info").appendChild(div_temp);
};

function removeDispWeather(){
	document.getElementById("weather_info").innerHTML="";	
};

function displayError(){
	var div_error = document.ceateElement('div');
	div_error.className = "Error";
	div_error.innerHTML = "An error occured! Please try again" ;
	document.getElementById("weather_info").appendChild(div_error);
};