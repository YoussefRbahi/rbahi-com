export default function SelectSection({
  sections,
  activeSection,
  setActiveSection,
}) {
  return (
    <div className=" bg-gray-800 my-auto text-white h-full grid  p-4 gap-8 ">
      {sections.map((section) => (
        <button
          key={section.key}
          className={` py-2 px-4 rounded  ${
            section.key === activeSection
              ? "bg-gray-600 text-5xl"
              : "bg-gray-700 text-3xl"
          } hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
          onClick={() => setActiveSection(section.key)}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}
