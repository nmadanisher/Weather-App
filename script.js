// Mock Weather Data Engine
const mockWeatherData = {
    "karachi": { city: "Karachi, PK", temp: 28, desc: "Sunny", icon: "fa-sun", humidity: "65%", wind: "14 km/h", pressure: "1012 hPa", visibility: "10 km" },
    "lahore": { city: "Lahore, PK", temp: 24, desc: "Haze", icon: "fa-smog", humidity: "70%", wind: "8 km/h", pressure: "1014 hPa", visibility: "6 km" },
    "islamabad": { city: "Islamabad, PK", temp: 21, desc: "Partly Cloudy", icon: "fa-cloud-sun", humidity: "55%", wind: "10 km/h", pressure: "1016 hPa", visibility: "10 km" },
    "london": { city: "London, UK", temp: 15, desc: "Rainy", icon: "fa-cloud-rain", humidity: "82%", wind: "20 km/h", pressure: "1008 hPa", visibility: "8 km" },
    "new york": { city: "New York, US", temp: 18, desc: "Cloudy", icon: "fa-cloud", humidity: "60%", wind: "16 km/h", pressure: "1015 hPa", visibility: "10 km" }
};

const forecastDays = ["Tue", "Wed", "Thu", "Fri", "Sat"];

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const weatherDesc = document.getElementById('weather-desc');
const weatherIcon = document.getElementById('weather-icon');
const tempVal = document.getElementById('temp-val');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const forecastContainer = document.getElementById('forecast-container');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
    const city = cityInput.value.trim().toLowerCase();
    if (!city) return;

    if (mockWeatherData[city]) {
        updateUI(mockWeatherData[city]);
    } else {
        updateUI({
            city: cityInput.value.charAt(0).toUpperCase() + cityInput.value.slice(1),
            temp: Math.floor(Math.random() * 15) + 18,
            desc: "Clear Sky",
            icon: "fa-sun",
            humidity: "58%",
            wind: "12 km/h",
            pressure: "1013 hPa",
            visibility: "10 km"
        });
    }
}

function updateUI(data) {
    cityName.textContent = data.city;
    tempVal.textContent = data.temp;
    weatherDesc.textContent = data.desc;
    weatherIcon.className = `fa-solid ${data.icon} weather-main-icon`;
    humidity.textContent = data.humidity;
    windSpeed.textContent = data.wind;
    pressure.textContent = data.pressure;
    visibility.textContent = data.visibility;

    renderForecast();
}

function renderForecast() {
    forecastContainer.innerHTML = '';
    forecastDays.forEach((day) => {
        const temp = Math.floor(Math.random() * 10) + 20;
        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="forecast-day">${day}</div>
            <i class="fa-solid fa-cloud-sun"></i>
            <div class="forecast-temp">${temp}°C</div>
        `;
        forecastContainer.appendChild(card);
    });
}

// Initial Load
renderForecast();
