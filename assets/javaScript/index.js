const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY="2e8632aaf4cafb36fca28129a00dbda7"; //API.KEY.for OpenWeatherMap API
const getWeatherDetails =(cityName, lat, lon) => {
    const WEATHER_API_URL= `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL).then(res=> res.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert("An error occurred while fetching the weather forecast!")
    });
}


const getCityCoordinates=() => {
    const cityName = cityInput.value.trim(); // Get user entered city name and remove extra spaces
    if(!cityName) return;//Return if cityName is empty
    const GEOCODING_API_URL= `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
    //Get entered city coordinates (latitude,longitude,and name) from API response 
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if(!data.lenght)return alert (`No coordinates found for ${cityName}`);

        const {name, lat, lon} = data[0]; // ask this part to josh 
        getWeatherDetails();

    }).catch(() => {
        alert("An error occurred while fetching the coordinates!")
    });
}
searchButton.addEventListener("click",getCityCoordinates)
