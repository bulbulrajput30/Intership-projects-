async function getWeather() {
  try {
    console.log("Fetching weather...");

    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true"
    );

    const data = await res.json();

    console.log(`Current Temp: ${data.current_weather.temperature}°C`);
    console.log(`Wind Speed: ${data.current_weather.windspeed} km/h`);

  } catch (err) {
    console.error("Error fetching weather:", err);
  }
}

getWeather();