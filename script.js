// script.js
const apiKey = "4698bdfe215df3bc4164bb1b8fd128bc";


function getWeather() {
    const city = document.getElementById('city-name').value;

    if (city === '') {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found!');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

function displayWeather(data) {
    const weatherResults = document.getElementById('weather-results');
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const weatherDescription = data.weather[0].description;
    const time = new Date().toLocaleString();

    const resultHTML = `
        <h3>${data.name}</h3>
        <p>${weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}</p>
        <p>${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${wind} km/h</p>
        <p>Time: ${time}</p>
    `;

    weatherResults.innerHTML = resultHTML;
}
