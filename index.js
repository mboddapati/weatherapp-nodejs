var request = require("request");
function getWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=90abe48e313c37343e0b80cd2e743291&units=imperial";
    request(url, function (error, response, body) {
        var x = JSON.parse(body);
        // console.log(x);
        console.log('Weather in ' + city + ' is ' + x.main.temp + 'F ' + x.weather[0].description);
    });
}

getWeather('wichita');

getWeather('dallas');

getWeather('hyderabad');