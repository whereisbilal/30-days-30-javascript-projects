const apiKey = "ab568f8279c38b98e1ba6616c7924cc4";
const url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searhBox = document.querySelector(".search input");
  const searhBtn = document.querySelector(".search button");


async function checkWeather(city) {
  const res = await fetch(url + city +`&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searhBtn.addEventListener("click", ()=>{
    checkWeather(searhBox.value);
});
