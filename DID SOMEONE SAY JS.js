<<<<<<< HEAD
var displayTime = {}; //global time container

displayTime.time = new Date();

displayTime.month = displayTime.time.getMonth() + 1; //since arrays start at zero ;) 

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2); //slices time for leading zero if needed

displayTime.minute = ('0'+ displayTime.time.getMinutes()).slice(-2); //slices time for leading zero if needed

document.getElementById('test').innerHTML = "Today's date is: " + displayTime.month + "/" + displayTime.day + ("<br>") + "The time is: " + displayTime.hour + ":" + displayTime.minute;

var worldwideTemperatures = {}; //global weather container

worldwideTemperatures.currentTime = displayTime.time; //gets time from container above

worldwideTemperatures.hour = displayTime.hour;

worldwideTemperatures.planeptune = 0;

worldwideTemperatures.lastation = 0;

worldwideTemperatures.lowee = 0;

worldwideTemperatures.leanbox = 0;

worldwideTemperatures.planeptuneType = '';

worldwideTemperatures.lastationType = '';

worldwideTemperatures.loweeType = '';

worldwideTemperatures.leanboxType = '';

worldwideTemperatures.weatherTypes = ['Sunny', 'Rain', 'Cloudy'];

worldwideTemperatures.loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy'];

//checks time and displays temperatures according to time found
if (worldwideTemperatures.hour >= 8 && worldwideTemperatures.hour < 12) {

    worldwideTemperatures.planeptune = 55;
    worldwideTemperatures.lastation = 71;
    worldwideTemperatures.lowee = 22;
    worldwideTemperatures.leanbox = 64;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() * worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];

}

else if (worldwideTemperatures.hour >= 12 && worldwideTemperatures.hour <= 17){
    worldwideTemperatures.planeptune = 72;
    worldwideTemperatures.lastation = 85;
    worldwideTemperatures.lowee = 35;
    worldwideTemperatures.leanbox = 72;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() * worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
}

else { 

    //assumes you are not in any of the time ranges above

    worldwideTemperatures.planeptune = 48;
    worldwideTemperatures.lastation = 63;
    worldwideTemperatures.lowee = 18;
    worldwideTemperatures.leanbox = 54;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() * worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() * worldwideTemperatures.weatherTypes.length)];
}

document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + worldwideTemperatures.planeptune + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + worldwideTemperatures.lastation + "&#176;F" +  ", " + worldwideTemperatures.lastationType + ("<br>") + "Lowee: " + worldwideTemperatures.lowee + "&#176;F" + ", " + worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanbox  + "&#176;F" + ", " + worldwideTemperatures.leanboxType; 
=======
var time = new Date();

var month = time.getMonth() + 1;

var day = time.getDate();

// slice(-2) for the leading zero if necessary
var hour = ('0' + time.getHours()).slice(-2);

// slice (-2) for leading zero in minutes
var minute = mins = ('0'+ time.getMinutes()).slice(-2);

document.getElementById('test').innerHTML = "Today's date is: " + month + "/" + day + ("<br>") + "The time is: " + hour + ":" + minute;

function weather() {
    var localHour = Number(hour);
    
    var planeptuneWeather = 0;
    var lastationWeather = 0;
    var loweeWeather = 0;
    var leanboxWeather = 0;
    var planeptuneWeatherType = '';
    var lastationWeatherType = '';
    var loweeWeatherType = '';
    var leanboxWeatherType = '';
    var weatherTypes = ['Sunny', 'Rain', 'Cloudy'];
    var loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy'];
    
    if (localHour >= 8 && localHour < 12) {
        planeptuneWeather = 55;
        lastationWeather = 71;
        loweeWeather = 22;
        leanboxWeather = 64;

        planeptuneWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        lastationWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        loweeWeatherType = loweeWeatherTypes[Math.floor(Math.random() * loweeWeatherTypes.length)];
        leanboxWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather, planeptuneWeatherType, lastationWeatherType, loweeWeatherType, leanboxWeatherType];
    }
    else if (localHour >= 12 && localHour <= 17){
        planeptuneWeather = 72;
        lastationWeather = 85;
        loweeWeather = 35;
        leanboxWeather = 72;

        planeptuneWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        lastationWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        loweeWeatherType = loweeWeatherTypes[Math.floor(Math.random() * loweeWeatherTypes.length)];
        leanboxWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather, planeptuneWeatherType, lastationWeatherType, loweeWeatherType, leanboxWeatherType];
    }
    else {
        planeptuneWeather = 48;
        lastationWeather = 63;
        loweeWeather = 18;
        leanboxWeather = 54;

        planeptuneWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        lastationWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        loweeWeatherType = loweeWeatherTypes[Math.floor(Math.random() * loweeWeatherTypes.length)];
        leanboxWeatherType = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather, planeptuneWeatherType, lastationWeatherType, loweeWeatherType, leanboxWeatherType];
        
    }

};

weatherData = weather();

var planeptuneWeather = weatherData[0];
var lastationWeather = weatherData[1];
var loweeWeather = weatherData[2];
var leanboxWeather = weatherData[3];
var planeptuneWeatherType = weatherData[4];
var lastationWeatherType = weatherData[5];
var loweeWeatherType = weatherData[6];
var leanboxWeatherType = weatherData[7]


document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + planeptuneWeather + "&#176;F" + ", " + planeptuneWeatherType + ("<br>") + ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + lastationWeather + "&#176;F" +  ", " + lastationWeatherType + ("<br>") + "Lowee: " + loweeWeather + "&#176;F" + ", " + loweeWeatherType + ("<br>") + "Leanbox: " + leanboxWeather  + "&#176;F" + ", " + leanboxWeatherType; 
>>>>>>> 8b0c206855c49acfdaacbb2efc573a12ab3e80fe
