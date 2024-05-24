import { useState, useEffect } from "react";
function Weather({ locationData }) {
  const [weather, setWeather] = useState({
    current: {
      temp_c: 23.0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
    },
  });
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=1f2ed526a1cc45e7a55121251242305&q=${locationData.latitude},${locationData.longitude}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeather();
  }, []);

  return (
    <>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        title={weather.current.condition.text}
        className="inline-block"
      />{" "}
      {weather.current.temp_c}° C
    </>
  );
}
export default Weather;
