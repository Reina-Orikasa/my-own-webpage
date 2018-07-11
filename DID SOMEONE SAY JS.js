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
    
    if (localHour > 8 && localHour < 12) {
        planeptuneWeather = 55;
        lastationWeather = 71;
        loweeWeather = 22;
        leanboxWeather = 64;

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather];
    }
    else if (localHour > 12 && localHour < 17){
        planeptuneWeather = 72;
        lastationWeather = 85;
        loweeWeather = 35;
        leanboxWeather = 72;

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather];
    }
    else {
        planeptuneWeather = 48;
        lastationWeather = 63;
        loweeWeather = 18;
        leanboxWeather = 54;

        return [planeptuneWeather, lastationWeather, loweeWeather, leanboxWeather];
        
    }

};

weatherData = weather();

var planeptuneWeather = weatherData[0];
var lastationWeather = weatherData[1];
var loweeWeather = weatherData[2];
var leanboxWeather = weatherData[3];

document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + planeptuneWeather + ("<br>") + ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + "Lastation: " + lastationWeather + ("<br>") + "Lowee: " + loweeWeather + ("<br>") + "Leanbox: " + leanboxWeather; 
