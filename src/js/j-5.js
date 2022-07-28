let weatherNumbers = document.querySelectorAll(".weather__numbers");
let weatherCity = document.querySelector(".weather__city");

let api = 'http://api.openweathermap.org/data/2.5/forecast' + document.location.search + '&appid=907d92955087a69e874b41d207816588';

fetch(api)
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data)
    weatherCity.innerHTML = data.city.name;
    weatherNumbers[0].innerHTML = Math.round((data.list[0].main.temp - 273)) + "&deg;";
    weatherNumbers[1].innerHTML = Math.round((data.list[1].main.temp - 273)) + "&deg;";
    weatherNumbers[2].innerHTML = Math.round((data.list[2].main.temp - 273)) + "&deg;";
  })