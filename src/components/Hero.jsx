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

      <div className="grid h-svh text-center">
        <div className="m-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <p>Hi. I&apos;m Youssef.</p>
            <p>
              {titles[titleIndex].article}
              <span className="text-accent ">
                &nbsp;{titles[titleIndex].role}
              </span>
              .
            </p>
          </h1>
        </div>
        <button
          onClick={unlockSite}
          className=" absolute left-1/2 -translate-x-1/2 bottom-0 mb-4 md:mb-8 lg:mb-12 animate-fade"
        >
          <span
            className="hidden lg:block text-lg xl:text-xl 2xl:text-2xl hover:text-accent" /*bg-double-width
            animate-textgradient bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent font-semibold transition-colors*/
          >
            Scroll down or press ↵ Enter
          </span>
          <span className="block lg:hidden text-md md:text-xl  ">
            {" "}
            Swipe up to unlock
          </span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
