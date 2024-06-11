import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import { fetchUserIP } from "./api/fetchUserIP";
import "./App.css";
import MainPart from "./components/MainPart";
import Background from "./components/Background";
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
  const [siteUnlocked, setSiteUnlocked] = useState(false);
  const unlockSite = () => {
    setSiteUnlocked(!siteUnlocked);
  };
  console.log(userData);

  return (
    <>
      <div className="h-screen max-h-screen text-white">
        <div className="fixed top-0 left-0 -z-50 h-full w-full bg-primary"></div>
        <Background className=" fixed top-0 left-0 -z-50 md:h-full w-full gradient-bg"></Background>
        <Hero
          className={`grid transition-opacity duration-1000 ${
            siteUnlocked ? "opacity-0 -z-50" : "opacity-100 overflow-y-scroll"
          }`}
          userData={userData}
          unlockSite={unlockSite}
        />
        <div
          name="main"
          className={`grid transition-all duration-1000 delay-300 top-0 ${
            siteUnlocked
              ? "min-h-screen opacity-100 z-50 visible"
              : "h-0 opacity-0 -z-50 invisible overflow-hidden"
          } absolute mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-48 lg:py-0 text-left font-light text-lowcontrast `}
        >
          <MainPart />
        </div>
      </div>
    </>
  );
}

export default App;
