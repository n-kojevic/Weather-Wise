WeatherApp

Introduction Animation

On app load, a smooth intro animation runs where two texts (one from the left and one from the right) move toward the center of the screen. When they meet in the middle, they gradually fade out, revealing the main weather forecast page. This animation creates a dynamic and engaging first impression before the user starts using the app.

---

Description

WeatherApp is a simple web application that allows users to enter a city name and get current weather data, including temperature, humidity, wind speed, and weather conditions. Based on the weather conditions, the app dynamically displays a corresponding image, e.g., sunny, cloudy, rainy, etc.

---

Contents

- Technologies  
- Installation  
- Usage  
- Features  
- API  
- Author  

---

Technologies

This application is built using the following technologies:  
- HTML5  
- CSS3  
- TypeScript  
- JavaScript  
- OpenWeather API for fetching weather data  

---

Screenshots

https://github.com/n-kojevic/Weather-Wise/blob/main/assets/imgs/iPad-1750508923252.jpeg?raw=true  
https://github.com/n-kojevic/Weather-Wise/blob/main/assets/imgs/MacBook%20Pro-1750508921971.jpeg?raw=true  

---

Installation

Clone the repository:  
git clone https://github.com/n-kojevic/Weather-Wise.git

Navigate to the project directory:  
cd weather-app

Run the app locally by opening the index.html file in your browser.

---

Usage

- Enter the city name in the search field.  
- Click the search button or press Enter.  
- The app will display current weather data for the entered city, including temperature, humidity, and wind speed.  
- Based on the weather conditions, the app will change the image accordingly (e.g., sunny, cloudy, rain, snow).  

---

Features

- Search weather data for any city using the OpenWeather API.  
- Dynamic input validation:  
  - The search field only accepts letters.  
  - The field cannot be empty.  
  - Shows an error message if an invalid city is entered.  
- Display of weather data including:  
  - Temperature (°C)  
  - Humidity (%)  
  - Wind speed (km/h)  
- Dynamic image changes according to the weather conditions (sunny, cloudy, rainy, snowy).  

---

API

The app uses the OpenWeather API to fetch weather data. An API key is required and used through an HTTP GET request.

API endpoint example:  
https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric

---

Author

Nikola Kojević  
GitHub: https://github.com/n-kojevic
