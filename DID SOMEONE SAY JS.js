var displayTime = {}; //global time container

displayTime.time = new Date();

displayTime.month = displayTime.time.getMonth() + 1;

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2);

displayTime.minute = ('0'+ displayTime.time.getMinutes()).slice(-2);

document.getElementById('test').innerHTML = "Today's date is: " +
 displayTime.month + "/" + displayTime.day + ("<br>") + 
 "The time is: " + displayTime.hour + ":" + displayTime.minute;

var worldwideTemperatures = {}; //global weather container

worldwideTemperatures.currentTime = displayTime.time;

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

if (worldwideTemperatures.hour >= 8 && worldwideTemperatures.hour < 12) {

    worldwideTemperatures.planeptune = 55;
    worldwideTemperatures.lastation = 71;
    worldwideTemperatures.lowee = 22;
    worldwideTemperatures.leanbox = 64;

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
    worldwideTemperatures.planeptune = 72;
    worldwideTemperatures.lastation = 85;
    worldwideTemperatures.lowee = 35;
    worldwideTemperatures.leanbox = 72;

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

    worldwideTemperatures.planeptune = 48;
    worldwideTemperatures.lastation = 63;
    worldwideTemperatures.lowee = 18;
    worldwideTemperatures.leanbox = 54;

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
worldwideTemperatures.planeptune + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + 
("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
worldwideTemperatures.lastation + "&#176;F" +  ", " + worldwideTemperatures.lastationType + 
("<br>") + "Lowee: " + worldwideTemperatures.lowee + "&#176;F" + ", " + 
worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanbox  + 
"&#176;F" + ", " + worldwideTemperatures.leanboxType;

var totalEpisodes = {};

totalEpisodes.happySugarLife = 12;
totalEpisodes.watchedSugarLife = document.getElementById('currentlyWatched');
totalEpisodes.watchedSugarLifeCurrent = totalEpisodes.watchedSugarLife.textContent;
totalEpisodes.currentEpisodesWatched = parseInt(totalEpisodes.watchedSugarLifeCurrent.match(/(\d+)$/)[0], 10);

totalEpisodes.sugarLifeAired = document.getElementById('currentlyAired');
totalEpisodes.sugarLifeAiredTotal = totalEpisodes.sugarLifeAired.textContent;
totalEpisodes.totalSugarLifeAired = parseInt(totalEpisodes.sugarLifeAiredTotal.match(/(\d+)$/)[0], 10);

totalEpisodes.episodesBehind = totalEpisodes.totalSugarLifeAired - totalEpisodes.currentEpisodesWatched;

if (totalEpisodes.episodesBehind === 0 ) { 
    document.getElementById('episodesBehind').innerHTML = "<b>I am currently no episodes behind!</b>";    
}

else if (totalEpisodes.episodesBehind < 0){
    document.getElementById('episodesBehind').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.episodesBehind) + " episodes ahead!";
}

else {
    document.getElementById('episodesBehind').innerHTML = "<b>I am currently " + 
totalEpisodes.episodesBehind + " episodes behind!</b>";
}


document.getElementById('totalEpisodes').innerHTML = "<b>Total episodes: " + 
totalEpisodes.happySugarLife +"</b>";

