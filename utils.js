export async function getWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/weather?city=${cityInput}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "tL8D8cQ4nv4rQXcR++vOEA==6PjurvtGvLucGDdx",
        "Content-Type": "application/json",
      },
    },
  );
  const weather = await response.json();
  return weather;
}

export async function getTime() {
  const cityInput = document.getElementById("cityInput");
  const response = await fetch(
    `https://api.api-ninjas.com/v1/worldtime?city=${cityInput.value}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "tL8D8cQ4nv4rQXcR++vOEA==6PjurvtGvLucGDdx",
        "Content-Type": "application/json",
      },
    },
  );
  const time = await response.json();
  return time;
}

export async function getCondition() {
  const cityInput = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/city?name=${cityInput}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "tL8D8cQ4nv4rQXcR++vOEA==6PjurvtGvLucGDdx",
        "Content-Type": "application/json",
      },
    },
  );
  const latlong = await response.json();

  const response2 = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latlong[0].latitude}&longitude=${latlong[0].longitude}&current=weather_code&hourly=weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min`,
  );
  const condition = await response2.json();
  return condition;
}

export function setWeather(condition) {
  const imageElement = document.getElementById("weatherIcon");
  const conditionName = document.getElementById("conditionName");
  if (condition.current.weather_code === 0) {
    imageElement.src = "/WeatherPack/Sunny.png";
    conditionName.textContent = "Clear Sky";
  } else if (condition.current.weather_code === 1) {
    imageElement.src = "/WeatherPack/Sunny.png";
    conditionName.textContent = "Mainly Clear";
  } else if (condition.current.weather_code === 2) {
    imageElement.src = "/WeatherPack/Partly-cloudy.png.png.png";
    conditionName.textContent = "Party Cloudy";
  } else if (condition.current.weather_code === 3) {
    imageElement.src = "/WeatherPack/Cloudy.png";
    conditionName.textContent = "Overcast";
  } else if (condition.current.weather_code === 45) {
    imageElement.src = "/WeatherPack/Fog.png";
    conditionName.textContent = "Foggy";
  } else if (condition.current.weather_code === 51) {
    imageElement.src = "/WeatherPack/Drizzle.png";
    conditionName.textContent = "Drizzle";
  } else if (condition.current.weather_code === 61) {
    imageElement.src = "/WeatherPack/Rain.png";
    conditionName.textContent = "Rain";
  } else if (condition.current.weather_code === 71 || 73 || 75) {
    imageElement.src = "/WeatherPack/Snow.png";
    onditionName.textContent = "Snow";
  } else if ((condition.current.weather_code === 80, 81, 82)) {
    imageElement.src = "/WeatherPack/Heavy-rain.png";
    conditionName.textContent = "Rain showers";
  } else if (condition.current.weather_code === 95) {
    imageElement.src = "/WeatherPack/Sever-thunderstorm.png";
    conditionName.textContent = "Light Thunderstorm";
  } else if ((condition.current.weather_code === 96, 99)) {
    imageElement.src = "/WeatherPack/Rain&Thunderstorm.png";
    conditionName.textContent = "Heavy Thunderstorm";
  }
}
