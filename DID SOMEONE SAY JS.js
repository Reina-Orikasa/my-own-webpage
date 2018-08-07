window.displayTime = {}; //global time container

displayTime.time = new Date();

displayTime.month = displayTime.time.getMonth() + 1;

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2); 

displayTime.minute = ('0'+ displayTime.time.getMinutes()).slice(-2);

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

worldwideTemperatures.planeptuneType = '';

worldwideTemperatures.lastationType = '';

worldwideTemperatures.loweeType = '';

worldwideTemperatures.leanboxType = '';

worldwideTemperatures.weatherTypes = ['Sunny', 'Rain', 'Cloudy'];

worldwideTemperatures.loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy'];

if (worldwideTemperatures.hour >= 8 && worldwideTemperatures.hour < 12) {

    worldwideTemperatures.planeptuneFahrenheit = 55;
    worldwideTemperatures.lastationFahrenheit = 71;
    worldwideTemperatures.loweeFahrenheit = 22;
    worldwideTemperatures.leanboxFahrenheit = 64;

    worldwideTemperatures.planeptuneCelsius = 13;
    worldwideTemperatures.lastationCelsius = 22;
    worldwideTemperatures.loweeCelsius = -6;
    worldwideTemperatures.leanboxCelsius = 18;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];

}

else if (worldwideTemperatures.hour >= 12 && worldwideTemperatures.hour <= 17){
    worldwideTemperatures.planeptuneFahrenheit = 72;
    worldwideTemperatures.lastationFahrenheit = 85;
    worldwideTemperatures.loweeFahrenheit = 35;
    worldwideTemperatures.leanboxFahrenheit = 72;

    worldwideTemperatures.planeptuneCelsius = 22;
    worldwideTemperatures.lastationCelsius = 29;
    worldwideTemperatures.loweeCelsius = 2;
    worldwideTemperatures.leanboxCelsius = 22;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
}

else { 

    //assumes you are not in any of the time ranges above

    worldwideTemperatures.planeptuneFahrenheit = 48;
    worldwideTemperatures.lastationFahrenheit = 63;
    worldwideTemperatures.loweeFahrenheit = 18;
    worldwideTemperatures.leanboxFahrenheit = 54;

    worldwideTemperatures.planeptuneCelsius = 9;
    worldwideTemperatures.lastationCelsius = 17;
    worldwideTemperatures.loweeCelsius = -8;
    worldwideTemperatures.leanboxCelsius = 12;

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
}

document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + 
worldwideTemperatures.planeptuneFahrenheit + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + 
("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
worldwideTemperatures.lastationFahrenheit + "&#176;F" +  ", " + worldwideTemperatures.lastationType + 
("<br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + ", " + 
worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit  + 
"&#176;F" + ", " + worldwideTemperatures.leanboxType;

//this is where it gets fun
worldwideTemperatures.celsius = function(){
    document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + 
    worldwideTemperatures.planeptuneCelsius + "&#176;C" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + 
    ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
    worldwideTemperatures.lastationCelsius + "&#176;C" +  ", " + worldwideTemperatures.lastationType + 
    ("<br>") + "Lowee: " + worldwideTemperatures.loweeCelsius + "&#176;C" + ", " + 
    worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxCelsius  + 
    "&#176;C" + ", " + worldwideTemperatures.leanboxType;
}

worldwideTemperatures.fahrenheit = function(){
    document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + 
    worldwideTemperatures.planeptuneFahrenheit + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + 
    ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
    worldwideTemperatures.lastationFahrenheit + "&#176;F" +  ", " + worldwideTemperatures.lastationType + 
    ("<br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + ", " + 
    worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit  + 
    "&#176;F" + ", " + worldwideTemperatures.leanboxType;
}

window.totalEpisodes = {}; //global container for anime stats. fun stuff.

//beg. Happy Sugar Life
totalEpisodes.happySugarLife = 12;
totalEpisodes.watchedSugarLife = document.getElementById('currentlyWatchedSugarLife');
totalEpisodes.watchedSugarLifeCurrent = totalEpisodes.watchedSugarLife.textContent;
totalEpisodes.currentEpisodesWatchedSL = parseInt(totalEpisodes.watchedSugarLifeCurrent.match(/(\d+)$/)[0], 10);

totalEpisodes.sugarLifeAired = document.getElementById('currentlyAiredSugarLife');
totalEpisodes.sugarLifeAiredTotal = totalEpisodes.sugarLifeAired.textContent;
totalEpisodes.totalSugarLifeAired = parseInt(totalEpisodes.sugarLifeAiredTotal.match(/(\d+)$/)[0], 10);

totalEpisodes.episodesBehindSL = totalEpisodes.totalSugarLifeAired - totalEpisodes.currentEpisodesWatchedSL;

if (totalEpisodes.episodesBehindSL === 0 ) { 
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently no episodes behind!</b>";    
}

else if (totalEpisodes.episodesBehindSL < 0){
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.episodesBehindSL) + " episodes ahead!";
}

else {
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently " + 
totalEpisodes.episodesBehindSL + " episodes behind!</b>";
}


document.getElementById('totalEpisodesSugarLife').innerHTML = "<b>Total episodes: " + 
totalEpisodes.happySugarLife +"</b>";

totalEpisodes.OngakuShoujo = 12;
totalEpisodes.OngakuShoujoFromHtml = document.getElementById('currentlyWatchedOngakuShoujo');
totalEpisodes.OngakuShoujoFromText = totalEpisodes.OngakuShoujoFromHtml.textContent;
totalEpisodes.OngakuShoujoWatched = parseInt(totalEpisodes.OngakuShoujoFromText.match(/(\d+)$/)[0], 10);

totalEpisodes.OngakuShoujoAiredHtml = document.getElementById('currentlyAiredOngakuShoujo');
totalEpisodes.OngakuShoujoAiredText = totalEpisodes.OngakuShoujoAiredHtml.textContent;
totalEpisodes.OngakuShoujoAired = parseInt(totalEpisodes.OngakuShoujoAiredText.match(/(\d+)$/)[0], 10);

totalEpisodes.OngakuShoujoBehind = totalEpisodes.OngakuShoujoAired - totalEpisodes.OngakuShoujoWatched;

if (totalEpisodes.OngakuShoujoBehind === 0 ) { 
    document.getElementById('episodesBehindOngakuShoujo').innerHTML = "<b>I am currently no episodes behind!</b>";    
}

else if (totalEpisodes.OngakuShoujoBehind < 0){
    document.getElementById('episodesBehindOngakuShoujo').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.OngakuShoujoBehind) + " episodes ahead!";
}

else {
    document.getElementById('episodesBehindOngakuShoujo').innerHTML = "<b>I am currently " + 
totalEpisodes.OngakuShoujoBehind + " episodes behind!</b>";
}


document.getElementById('totalEpisodesOngakuShojo').innerHTML = "<b>Total episodes: " + 
totalEpisodes.OngakuShoujo +"</b>";