import { Link } from "react-scroll";

export default function MainNav({ sections }) {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-2 text-primary">
        {sections.map((section) => (
          <li key={section.key}>
            <Link
              activeClass="text-accent font-semibold"
              to={section.key}
              spy={true}
              smooth={true}
              duration={500}
              offset={-300}
              className="uppercase cursor-pointer hover:text-accent hover:font-semibold"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
