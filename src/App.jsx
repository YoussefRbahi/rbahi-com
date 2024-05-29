import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import { fetchUserIP } from "./api/fetchUserIP";

import "./App.css";
function App() {
  // Initialize with default location data in case the fetch fails
  const [userData, setUserData] = useState({
    location: {
      name: "Kurna",
      region: "Istanbul",
      country: "Turkey",
      lat: 40.95,
      lon: 29.34,
      tz_id: "Europe/Istanbul",
      localtime_epoch: 1716541873,
      localtime: "2024-05-24 12:11",
    },
    current: {
      temp_c: 20.0,
      temp_f: 68.0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_kph: 19.1,
      humidity: 73,
    },
  });

  useEffect(() => {
    async function fetchUserData() {
      const ipAddress = await fetchUserIP();
      if (!ipAddress) {
        return;
      }
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=1f2ed526a1cc45e7a55121251242305&q=${ipAddress}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData();
  }, []);
  console.log(userData);

  return (
    <>
      <div className="snap-y snap-mandatory h-screen w-screen max-w-screen overflow-y-auto  overflow-x-hidden text-slate-800 relative">
        <div className="gradient-bg h-screen overflow-hidden"></div>
        <div className="grid snap-center h-screen ">
          <Hero className="relative" userData={userData} />
        </div>
      </div>
    </>
  );
}

export default App;
