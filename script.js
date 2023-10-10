const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoController = document.querySelector(".user-info-container");

























// const API_KEY = 'd399dc2127297039e1c2f393d6ee9f5f';


// console.log('hello')


// async function showWeather() {
//     let city = "patna";

//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)


//     const data = await response.json();
//     console.log("Weather App Data:", data);

//     let newPara = document.createElement('p');
//     newPara.textContent = `${(data?.main?.temp - 273.15).toFixed(2)}°C`;

//     document.body.appendChild(newPara);


// };
// showWeather();