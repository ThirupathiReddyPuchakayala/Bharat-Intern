const weatherForm = document.getElementById('weatherForm');
const locationInput = document.getElementById('locationInput');
const weatherInfo = document.getElementById('weatherInfo');

const apiKey ='be4f09a8dfece935e30e3cbb3fa0f1c2'

weatherForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const location = locationInput.value;

    // Fetch weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Display weather information
        const { name, main, weather } = data;
        const temperature = main.temp;
        const description = weather[0].description;

        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${temperature} °C</p>
            <p>Description: ${description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
});
