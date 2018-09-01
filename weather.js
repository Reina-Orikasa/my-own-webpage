function callAjax(url, callback) {
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          var w = JSON.parse(xmlhttp.responseText);

          var weather = w.query.results.channel.item.condition.temp

          var textConditions = w.query.results.channel.item.condition.text
          
          callback(weather, textConditions);
      }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

callAjax(`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from
%20weather.forecast%20where%20woeid%20%3D%202490383&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, function(weather, textConditions) {
seattleWeather(weather, textConditions);
});


callAjax(`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast
%20where%20woeid%20%3D%20615702&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, function(weather, textConditions) {
  tokyoWeather(weather, textConditions);
});
callAjax(`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where
%20woeid%20%3D%201118370&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`, function(weather, textConditions) {
  parisWeather(weather, textConditions);
});

window.displayTime = {}; //global time container

displayTime.time = new Date();

displayTime.month = displayTime.time.getMonth() + 1;

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2); //removes leading zero if needed

displayTime.minute = ('0' + displayTime.time.getMinutes()).slice(-2);

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

function seattleWeather(temp, description) {
  seattleWeatherFahrenheit = temp;
  seattleWeatherDescription = description;

  document.getElementById("SeattleWeatherFahrenheit").innerHTML = "Seattle: " + seattleWeatherFahrenheit + "&#176;F, " + seattleWeatherDescription;

  worldwideTemperatures.SeattleFahrenheitHtml = document.getElementById("SeattleWeatherFahrenheit");
  worldwideTemperatures.SeattleFahrenheitText = worldwideTemperatures.SeattleFahrenheitHtml.textContent;
  worldwideTemperatures.SeattleFahrenheitParse = worldwideTemperatures.SeattleFahrenheitText.replace(/[^0-9]/g, '');
  worldwideTemperatures.SeattleFahrenheit = Number(worldwideTemperatures.SeattleFahrenheitParse);

  worldwideTemperatures.SeattleCelsius = Math.round((worldwideTemperatures.SeattleFahrenheit - 32) * (5 / 9));

  worldwideTemperatures.seattleWeatherDescription = seattleWeatherDescription;

}

function tokyoWeather(temp, description) {
  tokyoWeatherFahrenheit = temp;
  tokyoWeatherDescription = description;

  document.getElementById("TokyoWeatherFahrenheit").innerHTML = "Tokyo: " + tokyoWeatherFahrenheit + "&#176;F, " + tokyoWeatherDescription;

  worldwideTemperatures.TokyoFahrenheitHtml = document.getElementById("TokyoWeatherFahrenheit");
  worldwideTemperatures.TokyoFahrenheitText = worldwideTemperatures.TokyoFahrenheitHtml.textContent;
  worldwideTemperatures.TokyoFahrenheitParse = worldwideTemperatures.TokyoFahrenheitText.replace(/[^0-9]/g, '');
  worldwideTemperatures.TokyoFahrenheit = Number(worldwideTemperatures.TokyoFahrenheitParse);

  worldwideTemperatures.TokyoCelsius = Math.round((worldwideTemperatures.TokyoFahrenheit - 32) * (5 / 9));

  worldwideTemperatures.tokyoWeatherDescription = tokyoWeatherDescription;
}

function parisWeather(temp, description) {
  parisWeatherFahrenheit = temp;
  parisWeatherDescription = description;

  document.getElementById("ParisWeatherFahrenheit").innerHTML = "Paris: " + parisWeatherFahrenheit + "&#176;F, " + parisWeatherDescription;

  worldwideTemperatures.ParisFahrenheitHtml = document.getElementById("ParisWeatherFahrenheit");
  worldwideTemperatures.ParisFahrenheitText = worldwideTemperatures.ParisFahrenheitHtml.textContent;
  worldwideTemperatures.ParisFahrenheitParse = worldwideTemperatures.ParisFahrenheitText.replace(/[^0-9]/g, '');
  worldwideTemperatures.ParisFahrenheit = Number(worldwideTemperatures.ParisFahrenheitParse);

  worldwideTemperatures.ParisCelsius = Math.round((worldwideTemperatures.ParisFahrenheit - 32) * (5 / 9));

  worldwideTemperatures.parisWeatherDescription = parisWeatherDescription;
}

worldwideTemperatures.SeattleFahrenheitHtml = document.getElementById("SeattleWeatherFahrenheit");
worldwideTemperatures.SeattleFahrenheitText = worldwideTemperatures.SeattleFahrenheitHtml.textContent;
console.log(worldwideTemperatures.SeattleFahrenheitText);
worldwideTemperatures.SeattleFahrenheitParse = worldwideTemperatures.SeattleFahrenheitText.replace(/[^0-9]/g, '');
worldwideTemperatures.SeattleFahrenheit = Number(worldwideTemperatures.SeattleFahrenheitParse);

worldwideTemperatures.TokyoFahrenheitHtml = document.getElementById("TokyoWeatherFahrenheit");
worldwideTemperatures.TokyoFahrenheitText = worldwideTemperatures.TokyoFahrenheitHtml.textContent;
worldwideTemperatures.TokyoFahrenheitParse = worldwideTemperatures.TokyoFahrenheitText.replace(/[^0-9]/g, '');
worldwideTemperatures.TokyoFahrenheit = Number(worldwideTemperatures.TokyoFahrenheitParse);

worldwideTemperatures.ParisFahrenheitHtml = document.getElementById("ParisWeatherFahrenheit");
worldwideTemperatures.ParisFahrenheitText = worldwideTemperatures.ParisFahrenheitHtml.textContent;
worldwideTemperatures.ParisFahrenheitParse = worldwideTemperatures.ParisFahrenheitText.replace(/[^0-9]/g, '');
worldwideTemperatures.ParisFahrenheit = Number(worldwideTemperatures.ParisFahrenheitParse);

worldwideTemperatures.SeattleCelsius = 0;

worldwideTemperatures.TokyoCelsius = 0;

worldwideTemperatures.ParisCelsius = 0

worldwideTemperatures.planeptuneType = '';

worldwideTemperatures.lastationType = '';

worldwideTemperatures.loweeType = '';

worldwideTemperatures.leanboxType = '';

worldwideTemperatures.weatherTypes = ['Sunny', 'Rain', 'Cloudy'];

worldwideTemperatures.weatherTypesNight = ['Clear', 'Rain', 'Cloudy'];

worldwideTemperatures.loweeWeatherTypes = ['Sunny', 'Snow', 'Cloudy'];

worldwideTemperatures.loweeWeatherTypesNight = ['Clear', 'Rain', 'Snow'];

if (worldwideTemperatures.hour >= 8 && worldwideTemperatures.hour < 12) {

  worldwideTemperatures.world = function(min, max) {
    max = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  worldwideTemperatures.celsiusConversion = function(fahrenheitTemperature) {
    weatherFormula = Math.round((fahrenheitTemperature - 32) * (5 / 9));
    return weatherFormula
  }

  worldwideTemperatures.planeptuneFahrenheit = worldwideTemperatures.world(55, 72);
  worldwideTemperatures.lastationFahrenheit = worldwideTemperatures.world(62, 75);
  worldwideTemperatures.loweeFahrenheit = worldwideTemperatures.world(11, 22);
  worldwideTemperatures.leanboxFahrenheit = worldwideTemperatures.world(45, 70);

  worldwideTemperatures.planeptuneCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.planeptuneFahrenheit);
  worldwideTemperatures.lastationCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.lastationFahrenheit);
  worldwideTemperatures.loweeCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.loweeFahrenheit);
  worldwideTemperatures.leanboxCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.leanboxFahrenheit);

  worldwideTemperatures.SeattleCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.SeattleFahrenheit);
  worldwideTemperatures.TokyoCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.TokyoFahrenheit);
  worldwideTemperatures.ParisCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.ParisFahrenheit);

  worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.loweeWeatherTypes.length)];
  worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];

} else if (worldwideTemperatures.hour >= 12 && worldwideTemperatures.hour <= 20) {

  worldwideTemperatures.world = function(min, max) {
    max = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  worldwideTemperatures.celsiusConversion = function(fahrenheitTemperature) {
    weatherFormula = Math.round((fahrenheitTemperature - 32) * (5 / 9));
    return weatherFormula
  }

  worldwideTemperatures.planeptuneFahrenheit = worldwideTemperatures.world(66, 87);
  worldwideTemperatures.lastationFahrenheit = worldwideTemperatures.world(73, 91);
  worldwideTemperatures.loweeFahrenheit = worldwideTemperatures.world(27, 35);
  worldwideTemperatures.leanboxFahrenheit = worldwideTemperatures.world(65, 76);

  worldwideTemperatures.planeptuneCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.planeptuneFahrenheit)
  worldwideTemperatures.lastationCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.lastationFahrenheit)
  worldwideTemperatures.loweeCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.loweeFahrenheit)
  worldwideTemperatures.leanboxCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.leanboxFahrenheit)

  worldwideTemperatures.SeattleCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.SeattleFahrenheit);
  worldwideTemperatures.TokyoCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.TokyoFahrenheit);
  worldwideTemperatures.ParisCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.ParisFahrenheit);

  worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
  worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.loweeWeatherTypes.length)];
  worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypes.length)];
} else {

  //assumes you are not in any of the time ranges above

  worldwideTemperatures.world = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  worldwideTemperatures.celsiusConversion = function(fahrenheitTemperature) {
    weatherFormula = Math.round((fahrenheitTemperature - 32) * (5 / 9));
    return weatherFormula
  }

  worldwideTemperatures.planeptuneFahrenheit = worldwideTemperatures.world(40, 52);
  worldwideTemperatures.lastationFahrenheit = worldwideTemperatures.world(49, 58);
  worldwideTemperatures.loweeFahrenheit = worldwideTemperatures.world(14, 22);
  worldwideTemperatures.leanboxFahrenheit = worldwideTemperatures.world(52, 56);

  worldwideTemperatures.planeptuneCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.planeptuneFahrenheit)
  worldwideTemperatures.lastationCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.lastationFahrenheit)
  worldwideTemperatures.loweeCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.loweeFahrenheit)
  worldwideTemperatures.leanboxCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.leanboxFahrenheit)

  worldwideTemperatures.SeattleCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.SeattleFahrenheit);
  worldwideTemperatures.TokyoCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.TokyoFahrenheit);
  worldwideTemperatures.ParisCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.ParisFahrenheit);

  worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
  worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
  worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.loweeWeatherTypesNight.length)];
  worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypesNight[Math.floor(Math.random() *
    worldwideTemperatures.weatherTypesNight.length)];
}

document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " +
worldwideTemperatures.planeptuneFahrenheit + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") +
("<br>") + "Elsewhere in Gamindustri" + ("<br>") + ("<br>") + "Lastation: " +
worldwideTemperatures.lastationFahrenheit + "&#176;F" + ", " + worldwideTemperatures.lastationType +
("<br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + ", " +
worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit +
"&#176;F" + ", " + worldwideTemperatures.leanboxType;

//this is where it gets fun
worldwideTemperatures.celsius = function() {
  document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " +
  worldwideTemperatures.planeptuneCelsius + "&#176;C" + ", " + worldwideTemperatures.planeptuneType + ("<br>") +
  ("<br>") + "Elsewhere in Gamindustri" + ("<br>") + ("<br>") + "Lastation: " +
  worldwideTemperatures.lastationCelsius + "&#176;C" + ", " + worldwideTemperatures.lastationType +
  ("<br>") + "Lowee: " + worldwideTemperatures.loweeCelsius + "&#176;C" + ", " +
  worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxCelsius +
  "&#176;C" + ", " + worldwideTemperatures.leanboxType;

  document.getElementById('SeattleWeatherFahrenheit').innerHTML = "Seattle: " + worldwideTemperatures.SeattleCelsius + "&#176;C, " + 
  worldwideTemperatures.seattleWeatherDescription;
  document.getElementById('TokyoWeatherFahrenheit').innerHTML= "Tokyo: " + worldwideTemperatures.TokyoCelsius + "&#176;C, " + 
  worldwideTemperatures.tokyoWeatherDescription;
  document.getElementById('ParisWeatherFahrenheit').innerHTML = "Paris: " + worldwideTemperatures.ParisCelsius + "&#176;C, " + 
  worldwideTemperatures.parisWeatherDescription;
}

worldwideTemperatures.fahrenheit = function() {
  document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " +
  worldwideTemperatures.planeptuneFahrenheit + "&#176;F" + ", " + worldwideTemperatures.planeptuneType + ("<br>") +
  ("<br>") + "Elsewhere in Gamindustri" + ("<br>") + ("<br>") + "Lastation: " +
  worldwideTemperatures.lastationFahrenheit + "&#176;F" + ", " + worldwideTemperatures.lastationType +
  ("<br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + ", " +
  worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit +
  "&#176;F" + ", " + worldwideTemperatures.leanboxType;

  document.getElementById('SeattleWeatherFahrenheit').innerHTML = "Seattle: " + worldwideTemperatures.SeattleFahrenheit + "&#176;F, " + 
  worldwideTemperatures.seattleWeatherDescription;
  document.getElementById('TokyoWeatherFahrenheit').innerHTML= "Tokyo: " + worldwideTemperatures.TokyoFahrenheit + "&#176;F, " + 
  worldwideTemperatures.tokyoWeatherDescription;
  document.getElementById('ParisWeatherFahrenheit').innerHTML = "Paris: " + worldwideTemperatures.ParisFahrenheit + "&#176;F, " +
  worldwideTemperatures.parisWeatherDescription;;
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

if (totalEpisodes.episodesBehindSL === 0) {
  document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently no episodes behind!</b>";
} else if (totalEpisodes.episodesBehindSL < 0) {
  document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.episodesBehindSL) + " episodes ahead!";
} else if (totalEpisodes.episodesBehindSL === 1) {
  document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently " +
    totalEpisodes.episodesBehindSL + " episode behind!</b>";
} else {
  document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently " +
    totalEpisodes.episodesBehindSL + " episodes behind!</b>";
}


document.getElementById('totalEpisodesSugarLife').innerHTML = "<b>Total episodes: " +
  totalEpisodes.happySugarLife + "</b>";

/*totalEpisodes.OngakuShoujo = 12;
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

else if (totalEpisodes.OngakuShoujoBehind < 0) {
    document.getElementById('episodesBehindOngakuShoujo').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.OngakuShoujoBehind) + " episodes ahead!";
}

else {
    document.getElementById('episodesBehindOngakuShoujo').innerHTML = "<b>I am currently " + 
totalEpisodes.OngakuShoujoBehind + " episodes behind!</b>";
}


document.getElementById('totalEpisodesOngakuShojo').innerHTML = "<b>Total episodes: " + 
totalEpisodes.OngakuShoujoAired + "</b>";

*/

// entry for High Score Girl
totalEpisodes.HighScoreGirl = "Unknown at the moment"
totalEpisodes.HighScoreGirlFromHtml = document.getElementById('currentlyWatchedHighScoreGirl');
totalEpisodes.HighScoreGirlFromText = totalEpisodes.HighScoreGirlFromHtml.textContent;
totalEpisodes.HighScoreGirlWatched = parseInt(totalEpisodes.HighScoreGirlFromText.match(/(\d+)$/)[0], 10);

totalEpisodes.HighScoreGirlAiredHtml = document.getElementById('currentlyAiredHighScoreGirl');
totalEpisodes.HighScoreGirlAiredText = totalEpisodes.HighScoreGirlAiredHtml.textContent;
totalEpisodes.HighScoreGirlAired = parseInt(totalEpisodes.HighScoreGirlAiredText.match(/(\d+)$/)[0], 10);

totalEpisodes.HighScoreGirlBehind = totalEpisodes.HighScoreGirlAired - totalEpisodes.HighScoreGirlWatched;

if (totalEpisodes.HighScoreGirlBehind === 0) {
  document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently no episodes behind!</b>";
} else if (totalEpisodes.HighScoreGirlBehind < 0) {
  document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.HighScoreGirlBehind) + " episodes ahead!";
} else if (totalEpisodes.HighScoreGirlBehind === 1) {
  document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently " +
    totalEpisodes.HighScoreGirlBehind + " episode behind!</b>";
} else {
  document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently " +
    totalEpisodes.HighScoreGirlBehind + " episodes behind!</b>";
}

document.getElementById('totalEpisodesHighScoreGirl').innerHTML = "<b>Total episodes: " + totalEpisodes.HighScoreGirl + "</b>";
