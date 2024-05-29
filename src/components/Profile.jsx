import { useState } from "react";
import SelectSection from "./SelectSection";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

export default function Profile() {
  const sections = [
    { key: "about", title: "About Me", component: <AboutMe /> },
    { key: "projects", title: "Projects", component: <Projects /> },
  ];
  const [activeSection, setActiveSection] = useState("about");
  let currentSection = sections.find(
    (section) => section.key === activeSection
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className=" col-span-1 my-auto">
        <SelectSection
          sections={sections}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        ></SelectSection>
      </div>
      <div className="col-span-2">{currentSection.component}</div>
    </div>
  );
}
