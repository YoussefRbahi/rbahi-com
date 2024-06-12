import { useState, useEffect } from "react";
import Time from "./Time";
import Weather from "./Weather";
function Hero({ className, userData, unlockSite }) {
  const titles = [
    { role: "frontend engineer", article: "A" },
    { role: "React developer", article: "A" },
    { role: "UI/UX Designer", article: "A" },
    { role: "SEO expert", article: "An" },
    // { role: "const > let guy", article: "A" },
    // { role: "typography nerd", article: "A" },
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2s seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  });

  return (
    <div className={`${className} grid h-svh relative`}>
      <div className="absolute m-6 top-0 inset-x-0 flex justify-between items-start">
        <div className="   text-lg md:text-xl lg:text-3xl ">
          <p>
            {userData.location.region}, {userData.location.country}
          </p>
          <Weather userData={userData} />
        </div>
        <div className=" text-3xl mt-0.5 ">
          <Time userData={userData} showSeconds={false} />
        </div>
      </div>

      <div className="grid h-full text-center">
        <div className="m-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <p>Hi. I&apos;m Youssef.</p>
            <p>
              {titles[titleIndex].article}
              <span className="text-highcontrast ">
                &nbsp;{titles[titleIndex].role}
              </span>
              .
            </p>
          </h1>
        </div>
        <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 mb-20 ">
          <button
            onClick={unlockSite}
            className="text-2xl md:text-4xl lg:text-5xl hover:text-highcontrast hover:font-medium"
          >
            ↵ Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
