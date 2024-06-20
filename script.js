const apiKey = "3e4b6a0eeae07e89881b180be8e81566";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const wheatherIcon = document.querySelector(".wheather-icon");
const wheatherType = document.querySelector(".wheather-type");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (data.cod == 404) {
    const error = (document.querySelector(".error").style.display = "block");
    document.querySelector(".wheather").style.display = "none";
    console.log(error);
  } else {
    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "  °C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText =
      Math.round(data.wind.speed) + "  km/h";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".wheather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});

searchBtn.addEventListener("search", (e) => {
  e.addEventListener("click", (event) => {
    if (event.key === "Enter") {
      checkWheather(searchBox.value);
    }
  });
});
