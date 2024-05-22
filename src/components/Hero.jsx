import { useState, useEffect } from "react";
function Hero({ className }) {
  const titles = [
    "frontend engineer",
    "react developer",
    "SEO expert",
    "const > let guy",
    "trivia champion",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2s seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [titles.length]);
  const getArticle = (title) => {
    if (title[0] === title[0].toUpperCase()) {
      return "An";
    }
    return "A";
  };

  return (
    <div className={`${className} grid   h-svh relative`}>

      <div className="grid h-full text-center">
        <div className="m-auto">
          <h1 className="text-8xl">
            <p>Hi. I&apos;m Youssef.</p>
            <p>
              {getArticle(titles[titleIndex])}
              <span className="text-primary ">&nbsp;{titles[titleIndex]}</span>.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
