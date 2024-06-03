export default function SelectSection({
  sections,
  activeSection,
  setActiveSection,
}) {
  return (
    <div className=" my-auto h-full grid  p-4 gap-8 ">
      {sections.map((section) => (
        <button
          key={section.key}
          className={` py-2 px-4 text-left  ${
            section.key === activeSection ? "text-5xl text-primary" : "text-3xl"
          } hover:text-primary`}
          onClick={() => setActiveSection(section.key)}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
