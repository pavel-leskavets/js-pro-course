import './style.css';


const mainForm = document.querySelector('#mainForm');

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();

  getWeatherOnMyLocation();
});


function getWeatherOnMyLocation() {
  return window.navigator.geolocation.getCurrentPosition((location) => {
    const ab = location.coords.latitude;
    const ba = location.coords.longitude;
    const sum = `${ab},${ba}`;
	 function sendRequest() {
      const newRequest = new XMLHttpRequest();

      newRequest.open('GET', `http://api.apixu.com/v1/current.json?key=b06a844ff9b94ff08c6182022181912&q=${sum}`);

      newRequest.onload = () => {
        const currentWeather = JSON.parse(newRequest.responseText);
        console.log(currentWeather);
        removeDispWeather();
        displayData(currentWeather);
      };

      newRequest.onerror = err => console.error('Ошибка');
      displayError();


      newRequest.send();
    }

    function displayData(currentWeather) {
      const a = document.createElement('table');


      const checkCity = document.body;
      const arr = checkCity.textContent;

      if (arr.indexOf(currentWeather.location.name) === -1) {
        a.innerHTML = `<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${`${currentWeather.current.temp_c} °С`}</td><td>${`${currentWeather.current.temp_f} F`}</td></tr>`;
        table.appendChild(a);
      }
    }

    function removeDispWeather() {
      document.getElementById('weather_info').innerHTML = '';
    }

    function displayError() {
      const div_error = document.createElement('div');
      div_error.className = 'Error';
      div_error.innerHTML = 'An error occured! Please try again';
      document.getElementById('weather_info').appendChild(div_error);
    }
    return sendRequest();
  });
}
const secondForm = document.querySelector('#secondForm');

secondForm.addEventListener('submit', (a) => {
  a.preventDefault();

  sendRequest2();
});
function sendRequest2() {
  const newRequest = new XMLHttpRequest();

  newRequest.open('GET',
    `http://api.apixu.com/v1/current.json?key=b06a844ff9b94ff08c6182022181912&q=${document.getElementById('weatherField').value}`);

  newRequest.onload = () => {
    const currentWeather = JSON.parse(newRequest.responseText);
    console.log(currentWeather);
    removeDispWeather();
    displayData(currentWeather);
  };

  newRequest.onerror = err => console.error('Ошибка');
  displayError();


  newRequest.send();
}
function displayData(currentWeather) {
  const a = document.createElement('table');


  const checkCity = document.body;
  const arr = checkCity.textContent;

  if (arr.indexOf(currentWeather.location.name) === -1) {
    a.innerHTML = `<tr><td>${currentWeather.location.name}</td><td>${currentWeather.location.country}</td><td>${`${currentWeather.current.temp_c} °С`}</td><td>${`${currentWeather.current.temp_f} F`}</td></tr>`;
    table.appendChild(a);
  }
}

function removeDispWeather() {
  document.getElementById('weather_info').innerHTML = '';
}

function displayError() {
  const div_error = document.createElement('div');
  div_error.className = 'Error';
  div_error.innerHTML = 'An error occured! Please try again';
  document.getElementById('weather_info').appendChild(div_error);
}
function clearTable() {
  document.getElementById('table').innerHTML = '';
}
