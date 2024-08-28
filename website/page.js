// page.js

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // API key and base URL for the weather API
    const apiKey = 'a51fa5667c8e8b13d162662e81e843f2'; // Replace with your API Key
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

    // DOM elements
    const zipInput = document.getElementById('zip');
    const getWeatherButton = document.getElementById('getWeather');
    const cityNameElement = document.getElementById('cityName');
    const weatherIconElement = document.getElementById('weatherIcon');
    const temperatureElement = document.getElementById('temperature');
    const dateElement = document.getElementById('date');
    const weatherDescriptionElement = document.getElementById('weatherDescription');
    const feelingsElement = document.getElementById('feelings');
    const feelingsInput = document.getElementById('feelingsInput');
    const saveFeelingsButton = document.getElementById('saveFeelings');

    /**
     * Format the date to a readable format with month in English
     * @param {string} dateString - The date string in ISO format
     * @return {string} - The formatted date string
     */
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options); // Use 'en-US' for English month names
    }

    /**
     * Fetch weather data from the API and update the UI
     */
    async function fetchWeatherData() {
        const zip = zipInput.value; // Get ZIP code from input

        if (!zip) {
            alert('Please enter a ZIP code.'); // Alert if no ZIP code is entered
            return;
        }

        try {
            // Fetch weather data from the API
            const response = await fetch(`${baseURL}${zip}&appid=${apiKey}&units=metric`);
            const data = await response.json(); // Parse the JSON response

            if (data.cod === 200) { // Check if the API call was successful
                const { name, weather, main } = data; // Extract data from response
                // Update DOM elements with weather data
                cityNameElement.textContent = name; 
                weatherIconElement.src = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
                temperatureElement.textContent = `Temperature: ${main.temp} °C`;
                dateElement.textContent = `Date: ${formatDate(new Date().toISOString())}`; // Use formatted date
                weatherDescriptionElement.textContent = `Weather: ${weather[0].description}`;
                feelingsElement.textContent = `Feelings: ${feelingsInput.value}`;
            } else {
                alert('Invalid ZIP code or API error.'); // Alert if there was an error with the API
            }
        } catch (error) {
            console.error('Error fetching weather data:', error); // Log error to console
            alert('Error fetching weather data.'); // Alert if there was a fetch error
        }
    }

    /**
     * Save user's feelings to the UI
     */
    function saveFeelings() {
        feelingsElement.textContent = `Feelings: ${feelingsInput.value}`; // Update feelings text
    }

    // Event listeners
    getWeatherButton.addEventListener('click', fetchWeatherData);
    saveFeelingsButton.addEventListener('click', saveFeelings);
});
