import { useEffect } from "react";
import { Element, scrollSpy } from "react-scroll";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import MainNav from "./MainNav";
import Bio from "./Bio";
import Socials from "./Socials";

export default function MainPart() {
  const sections = [
    { key: "about", title: "About Me", component: <AboutMe /> },
    { key: "projects", title: "Projects", component: <Projects /> },

    //{ key: "blog", title: "Blog", component: <div>Blog</div> },
    // { key: "contact", title: "Contact", component: <div>Contact</div> },
  ];

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className="relative grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2">
      <div className="flex flex-col justify-between md:h-screen md:sticky top-0 md:py-12 lg:py-24 md:w-4/5 lg:w-2/3 gap-8 md:gap-0">
        <div>
          <Bio />
          <div className="hidden md:block h-min md:text-lg lg:text-xl md:mt-4 lg:mt-8">
            <MainNav sections={sections} />
          </div>
        </div>
        <Socials />
      </div>

      <div className="grid text-md py-0 md:py-12 lg:py-24">
        {sections.map((section, index) => (
          <Element
            key={section.key}
            name={section.key}
            id={section.key}
            className="grid relative"
          >
            <div className="sticky top-0 bg-primary mb-2 font-medium text-3xl block py-2 bg-opacity-80 md:hidden">
              <h2>{section.title}</h2>
            </div>
            {section.component}
            {index !== sections.length - 1 && <hr className="my-8" />}
          </Element>
        ))}
      </div>
    </div>
  );
}
