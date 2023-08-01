const apiKey = "e0440c485154a514cd5bff94e47ac22a";
let search = '';
cityForm = document.getElementById("cityForm");
cityInput = document.getElementById("cityInput");

cityName = document.getElementById("cityName");
temperature = document.getElementById("temperature");
feelsLike = document.getElementById("feelsLike");
windSpeed = document.getElementById("windSpeed");
weatherIcon = document.getElementById("weatherIcon");

cityForm.addEventListener('submit',event => {
    event.preventDefault();
    search = cityInput.value;



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp;
    feelsLike.innerHTML = data.main.feels_like;
    windSpeed.innerHTML = data.wind.speed;

    

    let iconLink = data.weather[0].icon
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`)
})
})