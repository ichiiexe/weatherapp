import "./style.css";
import { getWeather, getTime, getCondition, setWeather } from "./utils.js";
import moment from "moment";

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  createHTML();
});

async function createHTML() {
  const [time, weather, condition] = await Promise.all([
    getTime(),
    getWeather(),
    getCondition(),
  ]);

  console.log(time, weather, condition);
  const cityInput = document.getElementById("cityInput").value;
  const app = await document.querySelector("#app");
  console.log(moment.unix(weather.sunrise).format("LT"));
  console.log(moment.unix(weather.sunset).format("LT"));

  app.innerHTML = `<header class="p-10">
  <label class="relative">
  <form id="form" class="flex justify-between">
  <input
    type="text"
    class="bg-transparent pl-10 py-3 text-xl placeholder:"
    id="cityInput"
    value=""
    placeholder="${cityInput}"
  />
  <img
    src="/public/Icons/Group.png"
    class="absolute top-4 left-4 z-10 h-5"
  />
  <form />
</label>
<div class="flex items-center">
<h1 class="text-4xl font-thin italic">Weather App</h1>
</div>
</header>
<main class="flex flex-col items-center">
<h1 class="font-bold text-4xl tracking-widest pt-5">
  ${cityInput}
</h1>
<h1>${time.day_of_week} ${time.day}, ${time.hour}:${time.minute}</h1>
<h1 id="conditionName" class="font-thin text-4xl tracking-widest pt-8"></h1>
<img id="weatherIcon" class="size-36 m-10" src="" />
<h1 class="font-thin text-7xl">${weather.temp}&deg;</h1>
<div class="flex gap-10 my-10">
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="flex justify-center">
      <span class="material-symbols-outlined text-red-500">
        arrow_downward_alt </span
      >min
    </h1>
    <h2>${weather.min_temp}&deg;</h2>
  </div>
  <div
    class="flex flex-col border-gray-400 justify-center border"
  ></div>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="flex justify-center">
      <span class="material-symbols-outlined text-green-500">
        arrow_upward_alt </span
      >max
    </h1>
    <h2>${weather.max_temp}&deg;</h2>
  </div>
</div>
<hr />
<div class="flex w-full justify-evenly items-center p-12">
  <div class="flex flex-col items-center pt-2">
    <span class="material-symbols-outlined pb-2"> water_drop </span>
    <h2>${weather.humidity}%</h2>
    <h2>Humidity</h2>
  </div>
  <div
    class="flex flex-col border-gray-400 h-14 justify-center border"
  ></div>
  <div class="flex flex-col items-center">
    <img class="h-10" src="/IconPack/Frame 10.png" />
    <h2>${weather.cloud_pct}%</h2>
    <h2>Precipitation</h2>
  </div>
  <div
    class="flex flex-col border-gray-400 h-14 justify-center border"
  ></div>
  <div class="flex flex-col items-center">
    <img class="h-10" src="/IconPack/Frame 11.png" />
    <h2>${weather.wind_speed} km/h</h2>
    <h2>Wind Speed</h2>
  </div>
  <div
    class="flex flex-col border-gray-400 h-14 justify-center border"
  ></div>
  <div class="flex flex-col items-center">
    <img class="h-10" src="/IconPack/Frame 13.png" />
    <h2>${moment.unix(weather.sunrise).format("LT")}</h2>
    <h2>Sunrise</h2>
  </div>
  <div
    class="flex flex-col border-gray-400 h-14 justify-center border"
  ></div>
  <div class="flex flex-col items-center">
    <img class="h-10" src="/IconPack/Frame 12.png" />
    <h2>${moment.unix(weather.sunset).format("LT")}</h2>
    <h2>Sunset</h2>
  </div>
</div>
</main>`;
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    createHTML();
  });

  setWeather(condition);
}
