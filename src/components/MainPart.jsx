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
    <div className="relative grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-between md:h-screen md:sticky top-0 md:py-24 w-2/3">
        <div>
          <Bio />
          <div className="hidden md:block h-min text-xl mt-8">
            <MainNav sections={sections} />
          </div>
        </div>
        <Socials />
      </div>

      <div className="grid text-md py-0 md:py-24">
        {sections.map((section, index) => (
          <Element
            key={section.key}
            name={section.key}
            id={section.key}
            className="grid relative"
          >
            <div className="sticky top-0 block py-2 bg-opacity-50 md:hidden">
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
