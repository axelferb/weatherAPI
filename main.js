//14cb918beacf21808d7ad879ed6129b0

function getTodaysWeather() {
    fetch('api.openweathermap.org/data/2.5/forecast?q=Stockholm,se')
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {
            console.log(weatherData);
        })
        .catch(function (error) {
            console.log(error);
        })
}