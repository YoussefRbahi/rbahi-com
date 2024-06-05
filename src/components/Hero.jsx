import { useState, useEffect } from "react";
import Time from "./Time";
import Weather from "./Weather";
function Hero({ className, userData, unlockSite }) {
  const titles = [
    "frontend engineer",
    "React developer",
    "SEO expert",
    "const > let guy",
    "typography nerd",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2s seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  });
  const getArticle = (title) => {
    if (
      title[0] === title[0].toUpperCase() &&
      title[1] === title[1].toUpperCase()
    ) {
      return "An";
    }
    return "A";
  };

  return (
    <div className={`${className} grid h-svh relative`}>
      <div className="absolute m-6 top-0 start-0 text-3xl ">
        <p>
          {userData.location.region}, {userData.location.country}
        </p>
        <Weather userData={userData} />
      </div>
      <div className="absolute m-6 top-0 end-0 text-4xl ">
        <Time userData={userData} showSeconds={false} />
      </div>

      <div className="grid h-full text-center">
        <div className="m-auto">
          <h1 className="text-7xl">
            <p>Hi. I&apos;m Youssef.</p>
            <p>
              {getArticle(titles[titleIndex])}
              <span className="text-highcontrast ">
                &nbsp;{titles[titleIndex]}
              </span>
              .
            </p>
          </h1>
        </div>
        <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 mb-20">
          <button
            onClick={unlockSite}
            className="text-5xl hover:text-highcontrast hover:font-medium"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
