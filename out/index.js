var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Klasa za aplikaciju vremenske prognoze
export class WeatherApp {
    constructor(name) {
        this.name = name;
    }
    // Metoda za dohvaćanje imena aplikacije
    getName() {
        return this.name;
    }
    // Metoda za dohvaćanje podataka o vremenu putem API-ja
    fetchWeatherData(location) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apiKey = `8a0c3ba1c19f6130e7cf43ea309c707d`;
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
                const response = yield fetch(url);
                if (!response.ok) {
                    showError(`Nije moguće otvoriti podatke o vremenu!`);
                }
                const weatherData = yield response.json();
                this.displayWeatherData(weatherData);
            }
            catch (error) {
                showError("Nema podataka za traženi grad!");
            }
        });
    }
    // Metoda za prikaz ikonice trenutnog stanja vremenske prognoze
    getWeatherImage(condition) {
        switch (condition) {
            case 'clear':
                return '/assets/imgs/sun.png';
            case 'clouds':
                return '/assets/imgs/cloud.png';
            case 'rain':
                return '/assets/imgs/rainy.png';
            case 'thunderstorm':
                return '/assets/imgs/clouds-and-sun.png';
            case 'snow':
                return '/assets/imgs/snowy.png';
            case 'mist':
                return '/assets/imgs/foggy.png';
        }
    }
    // Metoda za prikaz podataka o vremenu
    displayWeatherData(weatherData) {
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const windSpeed = weatherData.wind.speed;
        const city = weatherData.name;
        const weatherCondition = weatherData.weather[0].main.toLowerCase();
        const weatherImage = this.getWeatherImage(weatherCondition);
        const imageElement = document.querySelector(".weather-img");
        if (imageElement) {
            imageElement.src = weatherImage;
        }
        // Prikaz podataka na aplikaciji
        document.querySelector(".temp").textContent = Math.floor(temperature) + '°C';
        document.querySelector(".city").textContent = city;
        document.querySelector(".hnumber").textContent = humidity + '%';
        document.querySelector(".wnumber").textContent = windSpeed + 'Km/h';
    }
}
// Tagovanje polja za unos i dugmeta za pretragu
const searchInput = document.querySelector('.input-field');
const searchBtn = document.querySelector('.search-img');
// Metoda za prikaz greške
function showError(message) {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        errorElement.innerText = message;
        errorElement.style.display = "block";
    }
    else {
        errorElement.style.display = "none";
    }
}
// Metoda za validaciju unosa
function validateInput(input) {
    const regularExpression = /^[a-zA-Z\s]+$/;
    if (input === "") {
        showError('Polje za pretragu ne smije biti prazno');
        return false;
    }
    else if (!regularExpression.test(input)) {
        showError("Polje za pretragu smije da sadrži samo slova");
        return false;
    }
    else {
        showError("");
        return true;
    }
}
// Event listener za dugme pretrage
searchBtn.addEventListener("click", () => {
    const inputValue = searchInput.value.trim();
    //  Validacija unosa
    if (validateInput(inputValue)) {
        weatherApp.fetchWeatherData(inputValue);
    }
});
// Event listener za uklanjanje grecke pri fokusu na input polje
searchInput.addEventListener("focus", () => {
    showError("");
});
// Sakrivanje intro animacije nakon par sekundi
window.addEventListener("load", () => {
    const introAnimation = document.getElementById("introAnimation");
    // Postavi timeout za trajanje animacije
    setTimeout(() => {
        introAnimation.style.opacity = "0";
        setTimeout(() => {
            introAnimation.style.display = "none";
        }, 1000);
    }, 2000);
});
// Inicijalizacija aplikacije sa pocetnim gradom
const weatherApp = new WeatherApp("WeatherApp");
weatherApp.fetchWeatherData("Belgrade");
