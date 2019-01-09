function getWeatherOnMyLocation (){
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
		// var div_city = document.createElement('div');
		// div_city.className = "city_weather";
		// div_city.innerHTML = currentWeather.location.name + " , " + currentWeather.location.country ;
		// document.getElementById("weather_info").appendChild(div_city);
	
		// var div_temp = document.createElement('div');
		// div_temp.className = "temp_weather";
		// div_temp.innerHTML = currentWeather.current.temp_c + " °С";
		// document.getElementById("weather_info").appendChild(div_temp);

		// var div_temp_f = document.createElement('div');
		// div_temp_f.className = "temp_weather_f";
		// div_temp_f.innerHTML = currentWeather.current.temp_f + " F";
		// document.getElementById("weather_info").appendChild(div_temp_f);
		var a = document.createElement("table");
		
		
		var checkCity = document.body;
		var arr = checkCity.textContent;

		if(arr.indexOf(currentWeather.location.name) === -1){
			

	
		a.innerHTML = `<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${currentWeather.current.temp_c + " °С"}</td><td>${currentWeather.current.temp_f + " F"}</td></tr>`;
		table.appendChild(a)}
		
  

};

function removeDispWeather(){
	document.getElementById("weather_info").innerHTML="";	
	
};

function displayError(){
	var div_error = document.createElement('div');
	div_error.className = "Error";
	div_error.innerHTML = "An error occured! Please try again" ;
	document.getElementById("weather_info").appendChild(div_error);
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
	;

	newRequest.send();

};
function displayData (currentWeather){
	// var div_city = document.createElement('div');
	// div_city.className = "city_weather";
	// div_city.innerHTML = currentWeather.location.name + " , " + currentWeather.location.country ;
	// document.getElementById("weather_info").appendChild(div_city);

	// var div_temp = document.createElement('div');
	// div_temp.className = "temp_weather";
	// div_temp.innerHTML = currentWeather.current.temp_c + " °С";
	// document.getElementById("weather_info").appendChild(div_temp);

	// var div_temp_f = document.createElement('div');
	// div_temp_f.className = "temp_weather_f";
	// div_temp_f.innerHTML = currentWeather.current.temp_f + " F";
	// document.getElementById("weather_info").appendChild(div_temp_f);
	var a = document.createElement("table");
		
		
	var checkCity = document.body;
	var arr = checkCity.textContent;

	if(arr.indexOf(currentWeather.location.name) === -1){
			

	
		a.innerHTML = `<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${currentWeather.current.temp_c + " °С"}</td><td>${currentWeather.current.temp_f + " F"}</td></tr>`;
		table.appendChild(a)}
	


};

function removeDispWeather(){
document.getElementById("weather_info").innerHTML="";	

};

function displayError(){
var div_error = document.createElement('div');
div_error.className = "Error";
div_error.innerHTML = "An error occured! Please try again" ;
document.getElementById("weather_info").appendChild(div_error);
};
function clearTable(){
	document.getElementById("table").innerHTML="";	
	
	};
	






	function getJsonOfChoosenElementFromLocalStorage (idOfTheChosenElement) {
            
		if (localStorage.getItem('id'+ idOfTheChosenElement.toString()) === null) {
			downloadJsonOfChosenElementFromServer(idOfTheChosenElement);
		} else {
			dropDataToTheTable(JSON.parse(localStorage.getItem('id'+ idOfTheChosenElement.toString())));
		}
	}

	function downloadJsonOfChosenElementFromServer (idOfTheChosenElement) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET','id'+idOfTheChosenElement+'.json', true);
		xhr.send();
		xhr.onreadystatechange = () => {
			if(xhr.readyState != 4) return;
			if(xhr.status != 200) {
				alert( xhr.status + ': ' + xhr.statusText );
			} else {
				saveToLocalStotage(JSON.parse(xhr.responseText), idOfTheChosenElement);
			}
		}
	}

	function saveToLocalStotage (response, id) {
			localStorage.setItem('id'+id+'', JSON.stringify(response));
		dropDataToTheTable(response);
	}

	function dropDataToTheTable (arrOfSingleEmployee) {
		arrOfSingleEmployee.forEach(item => {
			let arrayOfIdData = [];
			arrayOfIdData.push(currentWeather.location.name, currentWeather.location.country, currentWeather.location.temp_c, currentWeather.location.temp_f);

			let tbody = document.getElementsByTagName('tbody')[0];
			const tr = document.createElement('tr');
			tbody.appendChild(tr);
			for (let numOfCell = 0; numOfCell < arrayOfIdData.length; numOfCell++) {
				const td = document.createElement('td');
				tr.appendChild(td);
				td.innerText = arrayOfIdData[numOfCell];
			}
		});
	}

	function clearTableAndLocalStorage() {
		localStorage.clear();
		const tbody = document.getElementsByTagName('tbody')[0];
		const firstTableRow = tbody.firstChild;
		while(firstTableRow.nextSibling) {
			tbody.removeChild(tbody.lastChild);
		}
		const arrOfSpans = document.querySelectorAll('span');
		for (numOfSpan = 0; numOfSpan < arrOfSpans.length; numOfSpan++) {
			let span = document.getElementsByTagName('span')[numOfSpan];
			span.style.background = 'white';
		}
	}