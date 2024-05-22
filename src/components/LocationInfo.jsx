import { useEffect, useState } from "react";

function LocationInfo({ className }) {
  // Initialize with default location data in case the fetch fails
  const [locationData, setLocationData] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    timezone: "Europe/Istanbul",
    location: "Istanbul, Turkey",
  });

  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch(
          "https://rbahiapi.netlify.app/location.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setLocationData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLocation();
  }, []);
  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: locationData.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    // Clean up interval
    return () => clearInterval(intervalId);
  }, [locationData.timezone]);
  return (
    <div className={`${className}`}>
      <p>
        {locationData.location} - {time}
      </p>
    </div>
  );
}
export default LocationInfo;
