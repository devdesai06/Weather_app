const apiKey = "5b90256bec289d5c5253b7919093bb05"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let search = document.querySelector(".search input")
let src_btn = document.querySelector(".search button")
let weather_img = document.querySelector(".weather_icon")
async function checkWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`)
    var data = await response.json()
    document.querySelector(".temp").innerHTML = data.main.temp + `ºC`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".Speed").innerHTML = data.wind.speed + ` Km/hr`;
    document.querySelector(".Humidity").innerHTML = data.main.humidity + `%`;
    let condition = data.weather[0].main.toLowerCase()
    console.log(condition);

    if (condition == 'clouds') {
        weather_img.src = "clouds.png"
    }


    else if (condition == 'clear') {
        weather_img.src = "clear.png"
    }

    else if (condition == 'rain') {
        weather_img.src = "rain.png"
    }
    else if (condition == 'drizzle') {
        weather_img.src = "drizzle.png"
    }

    else if (condition == 'mist') {
        weather_img.src = "mist.png"
    }
    else if (condition == 'snow') {
        weather_img.src = "snow.png"
    }


    else {
        weather_img.src = "clear.png"
    }
}
src_btn.addEventListener("click", () => {
    checkWeather(search.value)
})