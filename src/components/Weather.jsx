function Weather({ userData }) {
  return (
    <>
      <img
        src={userData.current.condition.icon}
        alt={userData.current.condition.text}
        title={userData.current.condition.text}
        className="inline-block"
      />{" "}
      {userData.current.temp_c}° C
    </>
  );
}
export default Weather;
