const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('location');
const cityDisplay = document.getElementById('city');
const temperatureDisplay = document.getElementById('temperature');
const feelslikeDisplay = document.getElementById('feelslike');
const humidityDisplay = document.getElementById('humidity');
const descriptionDisplay = document.getElementById('description');

searchButton.addEventListener('click', getWeather);

const apiKey = 'a41b5998793faeeada6dd60ca7947535';

function getWeather() {
  const city = cityInput.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const cityName = data.name;
        const temperature = Math.floor(data.main.temp - 273.15);
        const description = data.weather[0].main;
        const feelslike = Math.floor(data.main.feels_like - 273.15);
        const humidity = data.main.humidity;

        cityDisplay.textContent = `Weather for ${cityName}:`;
        temperatureDisplay.textContent = `Temperature: ${temperature}°C`;
        feelslikeDisplay.textContent = `Feels like: ${feelslike}°C`;
        descriptionDisplay.textContent = `Sky: ${description}`;
        humidityDisplay.textContent = `Humidity: ${humidity}`;
      } else {
        const error = data.message
        cityDisplay.textContent = `${error}`;
      }
    })
    .catch(error => { 
      cityDisplay.textContent = `Error: ${error}`;
    });
}


