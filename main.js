import "./style.css";
import {
  getWeather,
  getTime,
  getLatLong,
  getCondition,
  conditionIcon,
} from "./utils.js";

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cityInput = document.getElementById("cityInput").value;
  createHTML(cityInput);
});

async function createHTML() {
  const [time, weather, condition] = await Promise.all([
    getTime(),
    getWeather(),
    getCondition(),
  ]);

  const app = await document.querySelector("#app");

  app.innerHTML = `<div class="bg-slate-500 bg-opacity-15 rounded-xl w-screen m-10">
  <h1 class="text-6xl font-extrabold p-5">Weather App</h1>
  <form id="form">
    <label class="flex justify-center items-center mb-5"
      ><span class="material-symbols-outlined text-4xl">
        location_on
      </span>
      <input
        type="text"
        id="cityInput"
        value="${cityInput.value}"
        placeholder="${cityInput.value}"
        class="bg-transparent w-48 font-bold py-2 text-center rounded-lg text-2xl outline-none placeholder:flex placeholder:font-bold placeholder:text-center placeholder:text-black placeholder:pl-5 placeholder:text-2xl"
      />
    </label>
  </form>
  <div class="flex flex-col justify-center items-center">
    <h1 class="mb-5">${time.day_of_week} ${time.day}, ${time.hour}:${time.minute}</h1>
    <img
      id="weatherIcon"
      class="max-h-80"
      src=""
    />
    <h1 class="text-4xl font-bold m-5">${weather.temp}&deg;</h1>
    <h1 id="conditionName" class="font-semibold text-1xl"> </h1>
    <div class="flex justify-center gap-5 m-10">
      <h1 class="flex justify-center">
        <span class="material-symbols-outlined text-red-500">
          arrow_downward_alt </span
        >L: ${weather.min_temp}&deg;
      </h1>
      <h1>Feels Like: ${weather.feels_like}&deg;</h1>
      <h1 class="flex justify-center">
        <span class="material-symbols-outlined text-green-500">
          arrow_upward_alt </span
        >H: ${weather.max_temp}&deg;
      </h1>
    </div>
  </div>
  <div class="flex gap-10 justify-center">
    <div class="flex flex-col items-center">
      <span class="material-symbols-outlined"> water_drop </span>
      <h2>${weather.humidity}%</h2>
      <h2>Humidity</h2>
    </div>
    <div class="flex flex-col items-center">
      <span class="material-symbols-outlined"> rainy </span>
      <h2>${weather.cloud_pct}%</h2>
      <h2>Precipitation</h2>
    </div>
    <div class="flex flex-col items-center">
      <span class="material-symbols-outlined"> air </span>
      <h2>${weather.wind_speed} km/h</h2>
      <h2>Wind Speed</h2>
    </div>
  </div>
</div>`;

  const icon = await conditionIcon();
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cityInput = document.getElementById("cityInput").value;
    createHTML(cityInput);
  });
}
