import { useEffect } from "react";
import { Element, Link, scrollSpy } from "react-scroll";
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

      <div className="grid text-md pt-0 pb-4 md:py-12 lg:py-24">
        {sections.map((section, index) => (
          <Element
            key={section.key}
            name={section.key}
            id={section.key}
            className="grid relative"
          >
            <Link
              activeClass="bg-gradient-to-b from-primary via-primary to-transparent"
              to={section.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={0}
              className="sticky top-0 bg-opacity-0 font-medium text-3xl block pt-4 pb-4 md:hidden pointer-events-none sticky-div z-50"
            >
              <h2>{section.title}</h2>
            </Link>

            {section.component}
            {index !== sections.length - 1 && (
              <div className="block pt-8 md:pb-8">
                <hr />
              </div>
            )}
          </Element>
        ))}
      </div>
    </div>
  );
}
