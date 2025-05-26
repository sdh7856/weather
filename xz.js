const apiKey = "09a33fcbf62c7c1679984b37009c5c3c";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weathericon =document.querySelector('.weather-icon')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '°с';
    document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == "Clouds"){
        weathericon.src = 'images/clouds.png';
    }else if(data.weather[0].main == "Clear"){
        weathericon.src = 'images/clear.png';
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = 'images/rain.png';
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = 'images/mist.png';
    };

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
checkWeather();

