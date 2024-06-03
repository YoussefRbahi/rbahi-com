export default function MainNav({ sections, setActiveSection, activeSection }) {
  function handleClick(key) {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(key);
    }
  }

  return (
    <nav>
      <ul className="flex flex-col justify-between gap-2">
        {sections.map((section) => (
          <li key={section.key}>
            <button
              onClick={() => handleClick(section.key)}
              className={`uppercase hover:text-highcontrast hover:font-semibold ${
                activeSection === section.key
                  ? "text-highcontrast font-semibold"
                  : " "
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
