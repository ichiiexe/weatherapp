export async function getWeather() {
  const cityInput = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/weather?city=${cityInput}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "bbHEJw2wL/Mj/8oJLWZjZg==PPGuSGAVow0sfsLi",
        "Content-Type": "application/json",
      },
    },
  );
  const weather = await response.json();
  return weather;
}

export async function getTime() {
  const cityInput = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/worldtime?city=${cityInput}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "bbHEJw2wL/Mj/8oJLWZjZg==PPGuSGAVow0sfsLi",
        "Content-Type": "application/json",
      },
    },
  );
  const time = await response.json();
  return time;
}

export async function getLatLong() {
  const cityInput = document.getElementById("cityInput").value;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/city?name=${cityInput}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": "bbHEJw2wL/Mj/8oJLWZjZg==PPGuSGAVow0sfsLi",
        "Content-Type": "application/json",
      },
    },
  );
  const latlong = await response.json();
  return latlong;
}

export async function getCondition() {
  const latlong = await getLatLong();

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latlong[0].latitude}&longitude=${latlong[0].longitude}&current=weather_code`,
  );
  const condition = await response.json();
  return condition;
}

export async function conditionIcon() {
  const condition = await getCondition();

  const imageElement = document.getElementById("weatherIcon");
  const conditionName = document.getElementById("conditionName");

  if (condition.current.weather_code === 0) {
    imageElement.src = "/Icons/day_clear.png";
    conditionName.textContent = "Clear Sky";
  } else if (condition.current.weather_code === 1) {
    imageElement.src = "/Icons/day_clear.png";
    conditionName.textContent = "Mainly Clear";
  } else if (condition.current.weather_code === 2) {
    imageElement.src = "/Icons/day_partial_cloud.png";
    conditionName.textContent = "Party Cloudy";
  } else if (condition.current.weather_code === 3) {
    imageElement.src = "/Icons/overcast.png";
    conditionName.textContent = "Overcast";
  } else if ((condition.current.weather_code === 45, 48)) {
    imageElement.src = "/Icons/fog.png";
    conditionName.textContent = "Foggy";
  } else if ((condition.current.weather_code === 51, 53, 55)) {
    imageElement.src = "/Icons/day_rain.png";
    conditionName.textContent = "Drizzle";
  } else if ((condition.current.weather_code === 61, 63, 65)) {
    imageElement.src = "/Icons/rain.png";
    conditionName.textContent = "Rain";
  } else if ((condition.current.weather_code === 71, 73, 75)) {
    imageElement.src = "/Icons/snow.png";
    onditionName.textContent = "Snow";
  } else if ((condition.current.weather_code === 80, 81, 82)) {
    imageElement.src = "/Icons/rain.png";
    conditionName.textContent = "Rain showers";
  } else if (condition.current.weather_code === 95) {
    imageElement.src = "/Icons/thunder.png";
    conditionName.textContent = "Light Thunderstorm";
  } else if ((condition.current.weather_code === 96, 99)) {
    imageElement.src = "/Icons/rain_thunder.png";
    conditionName.textContent = "Heavy Thunderstorm";
  }
}
