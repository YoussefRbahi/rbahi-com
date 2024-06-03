import { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import MainNav from "./MainNav";
import Bio from "./Bio";
import Socials from "./Socials";

export default function MainPart() {
  const sections = [
    { key: "about", title: "About Me", component: <AboutMe /> },
    { key: "projects", title: "Projects", component: <Projects /> },
    {
      key: "experience",
      title: "Experience",
      component: <div>Experience</div>,
    },
    { key: "blog", title: "Blog", component: <div>Blog</div> },

    { key: "contact", title: "Contact", component: <div>Contact</div> },
  ];
  const [activeSection, setActiveSection] = useState("about");
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.01, // Trigger callback when 1% of the element is visible
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    const targets = sectionsRef.current;

    targets.forEach((target) => {
      if (target) observer.observe(target);
    });

    // Cleanup observer on unmount
    return () => {
      targets.forEach((target) => {
        if (target) observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-between md:h-screen sticky top-0 py-28 w-2/3">
        <div>
          <Bio />
          <div className="hidden md:block h-min text-xl mt-8">
            <MainNav
              sections={sections}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
            />
          </div>
        </div>
        <Socials />
      </div>

      <div className="grid text-md py-28">
        {sections.map((section, index) => (
          <div
            id={section.key}
            key={section.key}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="section-content grid"
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}
