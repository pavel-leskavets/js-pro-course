var newRequest = new XMLHttpRequest();

newRequest.open("GET",
"http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");

newRequest.onload = () => {
    var ourWeather = JSON.parse(newRequest.responseText);
    console.log(ourWeather);
}

newRequest.onerror = err => console.error('Ошибка');

newRequest.send();


// var http = require('http');
// var static = require('node-static');
// var file = new static.Server('.');

// http.createServer(function(req, res) {
//   file.serve(req, res);
// }).listen(8080);

// console.log('Server running on port 8080');
// $(document).ready(function(){
// $.get(

//     "http://api.openweathermap.org/data/2.5/weather",
//     {
// "id": "569143",
// "appid": "ef2666e3832e630f61b26d76484c4a1c"

//     },
//     function(data) {
//         console.log(data);
//     }
// );

// });