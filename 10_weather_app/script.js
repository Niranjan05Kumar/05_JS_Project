const temp = document.querySelector(".weather-icon h2");
const feelLike = document.querySelector(".output-bar .feel-like h2");
const cloud = document.querySelector(".output-bar .cloud h2");
const date = document.querySelector(".output-bar .day-info h2");
const place = document.querySelector(".output-bar .location h2");
const humidity = document.querySelector(".highlight-box .humidity-val");
const windSpeed = document.querySelector(".highlight-box .wind-val");
const srVal = document.querySelector(".highlight-box .sr-val");
const ssVal = document.querySelector(".highlight-box .ss-val");
const cloudVal = document.querySelector(".highlight-box .cloud-val");
const pressure = document.querySelector(".highlight-box .pressure-val");
const cloudIcon = document.querySelector(".highlight-box .cloud img");
const converter = document.querySelector("#temp-degree");

const userLocation = document.querySelector("#user-location");
const searchBtn = document.querySelector(".input-bar .ri-search-line");
const weatherIcon = document.querySelector(".weather-icon img");
const error = document.querySelector(".sidebar .error");

const apiKey = "4720c2774994cb26430bad63fa14e4e0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

searchBtn.addEventListener("click", () => {
  checKWeather(userLocation.value);
});

function convertTime(unixTime) {
  let dt = new Date(unixTime * 1000);
  let hours = dt.getHours();
  let minutes = dt.getMinutes();
  let date = dt.getDate();
  let month = dt.getMonth();
  let year = dt.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function convertDate(unixTime) {
  let dt = new Date(unixTime * 1000);
  let date = dt.getDate();
  let month = dt.getMonth();
  let year = dt.getFullYear();

  return date + " " + months[month] + " " + year;
}

function converterDegree(temp){
    let convertedTemp = "";
    let tempValue = Math.round(temp);
    if(converter.value === "degF"){
        convertedTemp = Math.round((tempValue * 9) / 5 + 32) + "°F";
    } else {
        convertedTemp = tempValue + "°C";
    }
    return convertedTemp;
}

async function checKWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    error.style.display = "block";
  } else {
    const data = await response.json();

    console.log(data);

    temp.innerHTML = converterDegree(data.main.temp);
    feelLike.innerHTML = converterDegree(data.main.feels_like);
    cloud.innerHTML = data.weather[0].description;
    date.innerHTML = convertDate(data.dt);
    place.innerHTML = data.name + ", " + data.sys.country;

    humidity.innerHTML = Math.round(data.main.humidity) + "%";
    windSpeed.innerHTML = Math.round(data.wind.speed) + " m/s";
    srVal.innerHTML = convertTime(data.sys.sunrise);
    ssVal.innerHTML = convertTime(data.sys.sunset);
    cloudVal.innerHTML = Math.round(data.clouds.all) + "%";
    pressure.innerHTML = data.main.pressure + "hPa";

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    cloudIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    error.style.display = "none";
  }
}

// Add event listener for temperature unit change
converter.addEventListener("change", () => {
  if (userLocation.value) {
    checKWeather(userLocation.value);
  }
});
