import Email from "../assets/images/envelope-solid.svg?react";
import LinkedIn from "../assets/images/linkedin.svg?react";
import GitHub from "../assets/images/github.svg?react";
import XTwitter from "../assets/images/x-twitter.svg?react";
import File from "../assets/images/file-lines-solid.svg?react";
export default function Socials() {
  return (
    <ul className="flex justify-start gap-6">
      <li>
        <a
          href="https://linkedin.com/in/youssefrbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn alt="LinkedIn" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/youssefrbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub alt="GitHub" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/youssef_rbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XTwitter alt="X/Twitter" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="mailto:contact@rbahi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Email alt="Email" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a href="/resume" target="_blank" rel="noopener noreferrer">
          <File alt="Resume" className="h-6 fill-current" />
        </a>
      </li>
    </ul>
  );
}
