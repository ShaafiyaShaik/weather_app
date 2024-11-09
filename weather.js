        // Static weather data
        const weatherData = {
            'New York': {
                temperature: 72,
                condition: 'Partly Cloudy',
                humidity: 65,
                windSpeed: 8,
                feelsLike: 74
            },
            'London': {
                temperature: 62,
                condition: 'Rainy',
                humidity: 80,
                windSpeed: 12,
                feelsLike: 60
            },
            'Tokyo': {
                temperature: 78,
                condition: 'Sunny',
                humidity: 55,
                windSpeed: 5,
                feelsLike: 80
            }
        };

        // DOM elements
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        const cityButtons = document.querySelectorAll('.city-button');
        const temperatureDisplay = document.querySelector('.temperature');
        const conditionDisplay = document.querySelector('.condition');
        const detailValues = document.querySelectorAll('.detail-value');

        // Update weather display
        function updateWeather(city) {
            const data = weatherData[city];
            if (data) {
                temperatureDisplay.textContent = `${data.temperature}°F`;
                conditionDisplay.textContent = data.condition;
                detailValues[0].textContent = `${data.feelsLike}°F`;
                detailValues[1].textContent = `${data.humidity}%`;
                detailValues[2].textContent = `${data.windSpeed} mph`;
                
                // Update active button
                cityButtons.forEach(button => {
                    button.classList.toggle('active', button.dataset.city === city);
                });
            }
        }

        // Event listeners
        searchButton.addEventListener('click', () => {
            const city = searchInput.value.trim();
            const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
            if (weatherData[formattedCity]) {
                updateWeather(formattedCity);
                searchInput.value = '';
            }
        });

        cityButtons.forEach(button => {
            button.addEventListener('click', () => {
                updateWeather(button.dataset.city);
            });
        });

        // Handle enter key in search input
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
