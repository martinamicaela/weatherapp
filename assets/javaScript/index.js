const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY="2e8632aaf4cafb36fca28129a00dbda7"; //API.KEY.for OpenWeatherMap API

const getCityCoordinates=() => {
    const cityName = cityInput.value.trim(); // Get user entered city name and remove extra spaces
    if(!cityName) return;//Return if cityName is empty
    const GEOCODING_API_URL= `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}London&limit=1&appid=${API_KEY}`;
    
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data)
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!")
    });
}
searchButton.addEventListener("click",getCityCoordinates)
