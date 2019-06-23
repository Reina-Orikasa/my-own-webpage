// Sets the framework for AJAX calls
function callAjax(url, callback) {
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        var w = JSON.parse(xmlhttp.responseText); //parse JSON response
        //callback variables
        var weather = w.main.temp; // weather variable

        var cityName = w.name; // city name variable

        var textConditions = w.weather[0].description; // description var
        if (cityName != "Shuzenji") {
          callback(weather, textConditions, cityName);
        }
        
      }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

// AJAX calls to FCC weather API + Callback function
callAjax(`https://fcc-weather-api.glitch.me/api/current?lat=47.609722&lon=-122.333056`, function(weather, textConditions, cityName) {
  cityWeather(weather, textConditions, cityName);
});

/*callAjax(`https://fcc-weather-api.glitch.me/api/current?lat=35.699612&lon=139.771364`, function(weather, textConditions, cityName) {
  cityWeather(weather, textConditions, cityName);
}) */

// jQuery collapsible for reviewDiv and reviewList
$('.collapsible').click(function(){
  $('.reviewWords').slideToggle('slow');
});

$('.reviewDescription').click(function(){
  $('.reviewList').slideToggle('slow');
});

window.displayTime = {}; //global time container

displayTime.time = new Date(); 

displayTime.month = displayTime.time.getMonth() + 1; // since arrays start at 0 

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2); //removes leading zero if needed

displayTime.minute = ('0' + displayTime.time.getMinutes()).slice(-2); //removes leading zero if needed

document.getElementById('test').innerHTML = "Today's date is: " +
displayTime.month + "/" + displayTime.day + ("<br>") +
"The time is: " + displayTime.hour + ":" + displayTime.minute;

window.worldwideTemperatures = {}; //global weather container

worldwideTemperatures.currentTime = displayTime.time;

worldwideTemperatures.hour = displayTime.hour;

worldwideTemperatures.planeptuneCelsius = 0;

worldwideTemperatures.lastationCelsius = 0;

worldwideTemperatures.loweeCelsius = 0;

worldwideTemperatures.leanboxCelsius = 0;

worldwideTemperatures.planeptuneFahrenheit = 0;

worldwideTemperatures.lastationFahrenheit = 0;

worldwideTemperatures.loweeFahrenheit = 0;

worldwideTemperatures.leanboxFahrenheit = 0;

//callback functions
function cityWeather(temp, description, cityName) {
  weatherCelsius = temp;
  weatherDescription = description;
  cityNameWeather = cityName;

  worldwideTemperatures.cityName = cityName;

  worldwideTemperatures.cityCelsius = temp;

  worldwideTemperatures.cityFahrenheit = Math.round(((worldwideTemperatures.cityCelsius * (9 / 5)) + 32)); // converts to fahrenheit

  worldwideTemperatures.weatherDescription = weatherDescription; // sets weather description for later use 
  
  /*var node = document.createElement("LI");
  var textNode = document.createTextNode(cityName + ": ");
  var tempNode = document.createTextNode(worldwideTemperatures.cityFahrenheit)
  node.appendChild(textNode);
  node.appendChild(tempNode);
  p1 = document.getElementById("worldTemps");
  p1.appendChild(node);*/
  document.getElementById('worldTemps').innerHTML = worldwideTemperatures.cityName + ": " + worldwideTemperatures.cityFahrenheit + "&#176;F <br>" + 
  worldwideTemperatures.weatherDescription;

  document.getElementById("worldHeader").innerHTML = "<u>Elsewhere in the World</u>"
  
}

//weather types for Gamindustri
worldwideTemperatures.planeptuneType = '';

worldwideTemperatures.lastationType = '';

worldwideTemperatures.loweeType = '';

worldwideTemperatures.leanboxType = '';

worldwideTemperatures.weatherTypes = ['Sunny', 'Rain', 'Cloudy', 'Partly Cloudy', 'Mostly Cloudy', 'Thunderstorms', 'Scattered Thunderstorms'];

worldwideTemperatures.weatherTypesNight = ['Clear', 'Rain', 'Cloudy', 'Partly Cloudy', 'Mostly Cloudy', 'Thunderstorms', 'Scattered Thunderstorms'];

// special weather types for Lowee, the land of snow
worldwideTemperatures.loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy', 'Partly Cloudy', 'Mostly Cloudy'];

worldwideTemperatures.loweeWeatherTypesNight = ['Clear', 'Cloudy', 'Snow', 'Partly Cloudy', 'Mostly Cloudy'];

if (worldwideTemperatures.hour >= 8 && worldwideTemperatures.hour < 12) { // assumes you are in the 8AM - 11:59AM time


  worldwideTemperatures.planeptuneFahrenheit = setTemperature(55, 72);
  worldwideTemperatures.lastationFahrenheit = setTemperature(62, 75);
  worldwideTemperatures.loweeFahrenheit = setTemperature(11, 22);
  worldwideTemperatures.leanboxFahrenheit = setTemperature(45, 70);

  worldwideTemperatures.planeptuneCelsius = 
    convertCelsius(worldwideTemperatures.planeptuneFahrenheit);

  worldwideTemperatures.lastationCelsius = 
    convertCelsius(worldwideTemperatures.lastationFahrenheit);

  worldwideTemperatures.loweeCelsius =
    convertCelsius(worldwideTemperatures.loweeFahrenheit);

  worldwideTemperatures.leanboxCelsius =
    convertCelsius(worldwideTemperatures.leanboxFahrenheit);

  setWeatherType();

} else if (worldwideTemperatures.hour >= 12 && worldwideTemperatures.hour <= 20) { // assumes you are in the 12PM - 8PM time

  worldwideTemperatures.planeptuneFahrenheit = setTemperature(66, 87);
  worldwideTemperatures.lastationFahrenheit = setTemperature(73, 91);
  worldwideTemperatures.loweeFahrenheit = setTemperature(27, 35);
  worldwideTemperatures.leanboxFahrenheit = setTemperature(65, 76);
  
  worldwideTemperatures.planeptuneCelsius = 
    convertCelsius(worldwideTemperatures.planeptuneFahrenheit);

  worldwideTemperatures.lastationCelsius = 
    convertCelsius(worldwideTemperatures.lastationFahrenheit);

  worldwideTemperatures.loweeCelsius =
    convertCelsius(worldwideTemperatures.loweeFahrenheit);

  worldwideTemperatures.leanboxCelsius =
    convertCelsius(worldwideTemperatures.leanboxFahrenheit);
  
  setWeatherType();

} else {
  //assumes you are not in any of the time ranges above

  worldwideTemperatures.planeptuneFahrenheit = setTemperature(40, 52);
  worldwideTemperatures.lastationFahrenheit = setTemperature(49, 58);
  worldwideTemperatures.loweeFahrenheit = setTemperature(14, 22);
  worldwideTemperatures.leanboxFahrenheit = setTemperature(52, 56);

  worldwideTemperatures.planeptuneCelsius = 
  convertCelsius(worldwideTemperatures.planeptuneFahrenheit);

  worldwideTemperatures.lastationCelsius = 
  convertCelsius(worldwideTemperatures.lastationFahrenheit);

  worldwideTemperatures.loweeCelsius =
  convertCelsius(worldwideTemperatures.loweeFahrenheit);

  worldwideTemperatures.leanboxCelsius =
  convertCelsius(worldwideTemperatures.leanboxFahrenheit);

  worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
  worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
  worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.loweeWeatherTypesNight.length)];
  worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
}

fillHTML();

// convert weather from F to C and vice versa
worldwideTemperatures.celsius = function() {
  document.getElementById('weather').innerHTML = "<u>Weather Currently</u>" + ("<br>") + "<br>Planeptune: " +
  worldwideTemperatures.planeptuneCelsius + "&#176;C" + " <br>" + worldwideTemperatures.planeptuneType + ("<br>") +
  ("<br>") + "<u>Elsewhere in Gamindustri</u>" + ("<br>") + ("<br>") + "Lastation: " +
  worldwideTemperatures.lastationCelsius + "&#176;C" + " <br>" + worldwideTemperatures.lastationType +
  ("<br><br>") + "Lowee: " + worldwideTemperatures.loweeCelsius + "&#176;C" + " <br>" +
  worldwideTemperatures.loweeType + ("<br><br>") + "Leanbox: " + worldwideTemperatures.leanboxCelsius +
  "&#176;C" + " <br>" + worldwideTemperatures.leanboxType;

  document.getElementById('worldTemps').innerHTML = worldwideTemperatures.cityName + ": " + worldwideTemperatures.cityCelsius + "&#176;C <br> " + 
  worldwideTemperatures.weatherDescription;
}

worldwideTemperatures.fahrenheit = function() {
  fillHTML();

  fillWorldTemps();
  /*
  document.getElementById('TokyoWeatherFahrenheit').innerHTML= "Tokyo: " + worldwideTemperatures.TokyoFahrenheit + "&#176;F, " + 
  worldwideTemperatures.tokyoWeatherDescription;
  document.getElementById('ParisWeatherFahrenheit').innerHTML = "Paris: " + worldwideTemperatures.ParisFahrenheit + "&#176;F, " +
  worldwideTemperatures.parisWeatherDescription;; 
  */
} 

function fillWorldTemps() {
  document.getElementById('worldTemps').innerHTML = worldwideTemperatures.cityName + ": " + worldwideTemperatures.cityFahrenheit + "&#176;F <br> " + 
  worldwideTemperatures.weatherDescription;
}

function fillHTML() {
  document.getElementById('weather').innerHTML = "<u>Weather Currently</u>" + ("<br>") + "<br>Planeptune: " +
  worldwideTemperatures.planeptuneFahrenheit + "&#176;F" + " <br>" + worldwideTemperatures.planeptuneType + ("<br>") +
  ("<br>") + "<u>Elsewhere in Gamindustri</u>" + ("<br>") + ("<br>") + "Lastation: " +
  worldwideTemperatures.lastationFahrenheit + "&#176;F" + " <br>" + worldwideTemperatures.lastationType +
  ("<br><br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + " <br>" +
  worldwideTemperatures.loweeType + ("<br><br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit +
  "&#176;F" + " <br>" + worldwideTemperatures.leanboxType;
}

function setTemperature(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function setWeatherType() {
  worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.loweeWeatherTypes.length)];
  worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
}

function convertCelsius(fahrenheitTemperature) {
  return Math.round((fahrenheitTemperature - 32) * (5 / 9))
}

