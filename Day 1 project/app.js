const apiKey = "ab568f8279c38b98e1ba6616c7924cc4";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searhBox = document.querySelector(".search input");
const searhBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(url + city + `&appid=${apiKey}`);
  const data = await res.json(); 

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  
  if (data.weather[0].main == "Clear") {
  weatherIcon.src = "images/clear.png";
} else if (data.weather[0].main == "Clouds") {
  weatherIcon.src = "images/clouds.png";
} else if (data.weather[0].main == "Drizzle") {
  weatherIcon.src = "images/drizzle.png";
} else if (data.weather[0].main == "Mist") {
  weatherIcon.src = "images/mist.png";
} else if (data.weather[0].main == "Rain") {
  weatherIcon.src = "images/rain.png";
} else if (data.weather[0].main == "Snow") {
  weatherIcon.src = "images/snow.png";
}

document.querySelector(".weather").style.display = "block";
}

searhBtn.addEventListener("click", () => {
  checkWeather(searhBox.value);
});
