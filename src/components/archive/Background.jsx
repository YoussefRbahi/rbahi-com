import { useState, useEffect } from "react";

function Background({ className }) {
  const [position, setPosition] = useState({
    x: -window.innerWidth / 2,
    y: -window.innerHeight / 2,
  });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const xCentered = clientX - window.innerWidth;
    const yCentered = clientY - window.innerHeight;
    setPosition({ x: xCentered, y: yCentered });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: `${position.x}px ${position.y}px`,
  };

  return (
    <div style={backgroundStyle} className={`gradient-bg ${className}`}></div>
  );
}

export default Background;
