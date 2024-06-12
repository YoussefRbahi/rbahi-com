function Weather({ userData }) {
  return (
    <div className="flex items-center">
      <img
        src={userData.current.condition.icon}
        alt={userData.current.condition.text}
        title={userData.current.condition.text}
        className="inline-block h-8"
      />
      <span className=" "> {Math.round(userData.current.temp_c)}° C</span>
    </div>
  );
}
export default Weather;
