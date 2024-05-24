import { useEffect, useState } from "react";

function Time({ locationData, showSeconds = true }) {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: locationData.timezone,
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds && { second: "2-digit" }),
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    const intervalId = setInterval(updateTime, 1000);
    updateTime();
    // Clean up interval
    return () => clearInterval(intervalId);
  }, [locationData.timezone]);
  return <>{time}</>;
}
export default Time;
