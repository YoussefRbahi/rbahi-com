import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import { fetchLocation } from "./api/fetchLocation";

import "./App.css";
function App() {
  // Initialize with default location data in case the fetch fails
  const [locationData, setLocationData] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    timezone: "Europe/Istanbul",
    location: "Istanbul, Turkey",
  });
  useEffect(() => {
    fetchLocation(setLocationData);
  }, []);

  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-auto  overflow-x-hidden text-slate-800 relative">
        <div className="gradient-bg h-screen overflow-hidden"></div>
        <div className="grid snap-center h-screen ">
          <Hero className="relative" locationData={locationData} />
        </div>
      </div>
    </>
  );
}

export default App;
