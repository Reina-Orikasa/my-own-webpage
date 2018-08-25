var isModule = typeof module !== "undefined" && module.exports;

if (isModule) {
  http = require('https');
  URL = require('url');
}

var Weather = {Utils: {}};

Weather.VERSION = "0.0.3";

var jsonp = Weather.Utils.jsonp = function (uri, callback){
  return new Promise(function(resolve, reject){
    var id = '_' + Math.round(10000 * Math.random());
    var callbackName = 'jsonp_callback_' + id;
    var el = (document.getElementsByTagName('head')[0] || document.body || document.documentElement);
    var script = document.createElement('script');
    var src = uri + '&callback=' + callbackName;

    window[callbackName] = function(data){
      delete window[callbackName];
      var ele = document.getElementById(id);
      ele.parentNode.removeChild(ele);
      resolve(data);
    };

    script.src = src;
    script.id = id;
    script.addEventListener('error', reject);
    el.appendChild(script);
  } );
};

Weather.setApiKey = function (apiKey) {
  Weather.APIKEY = apiKey;
};

Weather.getApiKey = function () {
  return Weather.APIKEY;
};

Weather.kelvinToFahrenheit = function (value) {
  return Math.round((this.kelvinToCelsius(value) * 1.8) + 32);
};

Weather.kelvinToCelsius = function (value) {
  return value - 273.15;
};

Weather.getCurrent = function (city, callback) {
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(city) + "&cnt=1";

  if (Weather.APIKEY) {
    url = url + "&APPID=" + Weather.APIKEY;
  } else {
    console.log('WARNING: You must set an apiKey for openweathermap');
  }

  return this._getJSON(url, function (data) {
    callback(new Weather.Current(data));
  } );
};

Weather.getForecast = function (city, callback) {
  var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + encodeURIComponent(city) + "&cnt=1";

  if (Weather.APIKEY) {
    url = url + "&APPID=" + Weather.APIKEY;
  } else {
    console.log('WARNING: You must set an apiKey for openweathermap');
  }

  return this._getJSON(url, function (data) {
    callback(new Weather.Forecast(data));
  } );
};

Weather._getJSON = function( url, callback ) {
  if (isModule) {
    return http.get(URL.parse(url), function(response) {
      return callback(response.body);
    } );
  } else {
    jsonp(url).then(callback);
  }
};

var maxBy = Weather.Utils.maxBy = function (list, iterator) {
  var max;
  var f = function (memo, d) {
    var val = iterator(d);

    if (memo === null || val > max) {
      max = val;
      memo = d;
    }

    return memo;
  };

  return list.reduce(f, null);
};

var minBy = Weather.Utils.minBy = function (list, iterator) {
  var min;
  var f = function (memo, d) {
    var val = iterator(d);

    if (memo === null || val < min) {
      min = val;
      memo = d;
    }

    return memo;
  };

  return list.reduce(f, null);
};

var isOnDate = Weather.Utils.isOnDate = function (a, b) {
  var sameYear = a.getYear() === b.getYear();
  var sameMonth = a.getMonth() === b.getMonth();
  var sameDate = a.getDate() === b.getDate();

  return sameYear && sameMonth && sameDate;
};

Weather.Forecast = function (data) {
  this.data = data;
};

Weather.Forecast.prototype.startAt = function () {
  return new Date(minBy(this.data.list, function (d) { return d.dt; }).dt * 1000);
};

Weather.Forecast.prototype.endAt = function () {
  return new Date(maxBy(this.data.list, function (d) { return d.dt; }).dt * 1000);
};

Weather.Forecast.prototype.day = function (date) {
  return new Weather.Forecast(this._filter(date));
};

Weather.Forecast.prototype.low = function () {
  if (this.data.list.length === 0) return;

  var output = minBy(this.data.list, function (item) {
    return item.main.temp_min;
  } );

  return output.main.temp_min;
};

Weather.Forecast.prototype.high = function () {
  if (this.data.list.length === 0) return;

  var output = maxBy( this.data.list, function (item) {
    return item.main.temp_max;
  } );

  return output.main.temp_max;
};

Weather.Forecast.prototype._filter = function (date) {
  return {
    list: this.data.list.filter(function (range) {
      var dateTimestamp = (range.dt * 1000);

      if (isOnDate(new Date(dateTimestamp), date)) {
        return range;
      }
    })
  };
};``

Weather.Current = function (data) {
  this.data = data;
};

Weather.Current.prototype.temperature = function () {
  return this.data.list[0].main.temp;
};

Weather.Current.prototype.conditions = function () {
  return this.data.list[0].weather[0].description;
};

if (isModule) { module.exports = Weather; }
else { window.Weather = Weather; }

Weather.setApiKey("5fcfc4d071670bda492cb4cfb5dc4195");

Weather.getCurrent("Seattle", function(current) {
  var seattleWeather = ["Seattle Currently:",current.temperature(),"and",current.conditions()].join(" ");
  var seattleWeatherFahrenheit = Weather.kelvinToFahrenheit(current.temperature());
  document.getElementById("SeattleWeatherFahrenheit").innerHTML = "Seattle: " + seattleWeatherFahrenheit + "&#176;F, " + current.conditions();

});

Weather.getCurrent("Tokyo", function(current) {
    var tokyoWeatherFahrenheit = Weather.kelvinToFahrenheit(current.temperature());
    document.getElementById("TokyoWeatherFahrenheit").innerHTML = "Tokyo: " + tokyoWeatherFahrenheit + "&#176;F, " + current.conditions();
});

Weather.getCurrent("Paris", function(current) {
  var parisWeatherFahrenheit = Weather.kelvinToFahrenheit(current.temperature());
  document.getElementById("parisWeatherFahrenheit").innerHTML = "Paris: " + parisWeatherFahrenheit + "&#176;F, " + current.conditions();
})

window.displayTime = {}; //global time container

displayTime.time = new Date();

displayTime.month = displayTime.time.getMonth() + 1;

displayTime.day = displayTime.time.getDate();

displayTime.hour = ('0' + displayTime.time.getHours()).slice(-2);  //removes leading zero if needed

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
    
    worldwideTemperatures.planeptuneCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.planeptuneFahrenheit)
    worldwideTemperatures.lastationCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.lastationFahrenheit)
    worldwideTemperatures.loweeCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.loweeFahrenheit)
    worldwideTemperatures.leanboxCelsius = worldwideTemperatures.celsiusConversion(worldwideTemperatures.leanboxFahrenheit)

    worldwideTemperatures.planeptuneType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.lastationType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];
    worldwideTemperatures.loweeType = worldwideTemperatures.loweeWeatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.loweeWeatherTypes.length)];
    worldwideTemperatures.leanboxType = worldwideTemperatures.weatherTypes[Math.floor(Math.random() *
        worldwideTemperatures.weatherTypes.length)];

}

else if (worldwideTemperatures.hour >= 12 && worldwideTemperatures.hour <= 20) {
    
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
("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
worldwideTemperatures.lastationFahrenheit + "&#176;F" +  ", " + worldwideTemperatures.lastationType + 
("<br>") + "Lowee: " + worldwideTemperatures.loweeFahrenheit + "&#176;F" + ", " + 
worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxFahrenheit  + 
"&#176;F" + ", " + worldwideTemperatures.leanboxType;

//this is where it gets fun
worldwideTemperatures.celsius = function() {
    document.getElementById('weather').innerHTML = "Weather Currently" + ("<br>") + "Planeptune: " + 
    worldwideTemperatures.planeptuneCelsius + "&#176;C" + ", " + worldwideTemperatures.planeptuneType + ("<br>") + 
    ("<br>") + "Elsewhere in Gameindustri" + ("<br>") + ("<br>") + "Lastation: " + 
    worldwideTemperatures.lastationCelsius + "&#176;C" +  ", " + worldwideTemperatures.lastationType + 
    ("<br>") + "Lowee: " + worldwideTemperatures.loweeCelsius + "&#176;C" + ", " + 
    worldwideTemperatures.loweeType + ("<br>") + "Leanbox: " + worldwideTemperatures.leanboxCelsius  + 
    "&#176;C" + ", " + worldwideTemperatures.leanboxType;
}

worldwideTemperatures.fahrenheit = function() {
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

else if (totalEpisodes.episodesBehindSL < 0) {
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.episodesBehindSL) + " episodes ahead!";
}

else if (totalEpisodes.episodesBehindSL === 1) {
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently " + 
    totalEpisodes.episodesBehindSL + " episode behind!</b>";
} 

else {
    document.getElementById('episodesBehindSugarLife').innerHTML = "<b>I am currently " + 
    totalEpisodes.episodesBehindSL + " episodes behind!</b>";
}


document.getElementById('totalEpisodesSugarLife').innerHTML = "<b>Total episodes: " + 
totalEpisodes.happySugarLife +"</b>";

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

if (totalEpisodes.HighScoreGirlBehind === 0 ) {
    document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently no episodes behind!</b>";
}

else if (totalEpisodes.HighScoreGirlBehind < 0) {
    document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am from the future! I am " +
    Math.abs(totalEpisodes.HighScoreGirlBehind) + " episodes ahead!";
}

else if (totalEpisodes.HighScoreGirlBehind === 1) {
    document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently " + 
    totalEpisodes.HighScoreGirlBehind + " episode behind!</b>";
} 

else {
    document.getElementById('episodesBehindHighScoreGirl').innerHTML = "<b>I am currently " + 
    totalEpisodes.HighScoreGirlBehind + " episodes behind!</b>";
}

document.getElementById('totalEpisodesHighScoreGirl').innerHTML = "<b>Total episodes: " + totalEpisodes.HighScoreGirl + "</b>";


