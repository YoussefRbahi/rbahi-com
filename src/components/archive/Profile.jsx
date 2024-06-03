import { useState } from "react";
import SelectSection from "./SelectSection";
import AboutMe from "../AboutMe";
import Projects from "../Projects";

export default function Profile() {
  const sections = [
    { key: "about", title: "About Me", component: <AboutMe /> },
    { key: "projects", title: "Projects", component: <Projects /> },
  ];
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="hidden md:grid col-span-1 h-screen py-auto sticky top-0">
        <SelectSection
          sections={sections}
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {sections.map((section) => (
          <div
            key={section.key}
            className={`section-content h-full  ${
              section.key === activeSection ? "grid" : "grid md:hidden"
            }`}
          >
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}
