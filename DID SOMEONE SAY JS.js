var time = new Date();

var month = time.getMonth() + 1;

var day = time.getDate();

var hour = ('0' + time.getHours()).slice(-2);

var minute = mins = ('0'+time.getMinutes()).slice(-2);

document.getElementById('test').innerHTML = "Today's date is: " + month + "/" + day + ("<br>") + "The time is: " + hour + ":" + minute;

function weather() {
    var localHour = Number(hour);
    
    var planeptuneWeather = 0;
    var lastationWeather = 0;
    var loweeWeather = 0;
    var leanboxWeather = 0;
    var planeptuneWeatherType = ''
    var lastationWeatherType = ''
    var loweeWeatherType = ''
    var leanboxWeatherType = ''
    var weatherTypes = ['Sunny', 'Rain', 'Cloudy'];
    var loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy']
    
    if (localHour > 8 && localHour < 12) {
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
    else if (localHour > 12 && localHour < 17){
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
