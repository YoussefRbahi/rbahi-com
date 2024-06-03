import { Link } from "react-scroll";

export default function MainNav({ sections }) {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-2">
        {sections.map((section) => (
          <li key={section.key}>
            <Link
              activeClass="text-highcontrast font-semibold"
              to={section.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="uppercase hover:text-highcontrast hover:font-semibold"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
