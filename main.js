//14cb918beacf21808d7ad879ed6129b0

function getTodaysWeather() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm,se&units=metric&lang=se&APPID=14cb918beacf21808d7ad879ed6129b0')
        .then(function (response) {
            return response.json();
        })
        .then(function (weatherData) {

            currentWeatherDiv.innerHTML +=
                `
                <i class="owf owf-${weatherData.list[0].weather[0].id}"></i>
            <p>
            ${weatherData.list[0].weather[0].description}
            ${weatherData.list[0].main.temp}°C
            <br>
            ${weatherData.list[0].clouds.all}% molnighet
            </p>
            `;

            weatherTomorrow.innerHTML +=
                `
                <i class="owf owf-${weatherData.list[8].weather[0].id}"></i>
            <p>
            ${weatherData.list[8].weather[0].description}
            ${weatherData.list[8].main.temp}°C
            <br>
            ${weatherData.list[8].clouds.all}% molnighet
            </p>
            `;

            weatherDayAfterTomorrow.innerHTML +=
                `
                <i class="owf owf-${weatherData.list[16].weather[0].id}"></i>
            <p>
            ${weatherData.list[16].weather[0].description}
            ${weatherData.list[16].main.temp}°C
            <br>
            ${weatherData.list[16].clouds.all}% molnighet
            </p>
            `;

            weatherThreeDays.innerHTML +=
                `
                <i class="owf owf-${weatherData.list[24].weather[0].id}"></i>
            <p>
            ${weatherData.list[24].weather[0].description}
            ${weatherData.list[24].main.temp}°C
            <br>
            ${weatherData.list[24].clouds.all}% molnighet
            </p>
            `;
        })
        .catch(function (error) {
            console.log(error);
        })
}
getTodaysWeather();