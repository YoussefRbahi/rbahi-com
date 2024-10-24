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
          aria-label="LinkedIn"
        >
          <LinkedIn alt="LinkedIn" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/youssefrbahi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHub alt="GitHub" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/youssef_rbahi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <XTwitter alt="X/Twitter" className="h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="mailto:contact@rbahi.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Email alt="Email" className="h-6 fill-current" />
        </a>
      </li>
      {/* <li>
        <a href="/resume" target="_blank" rel="noopener noreferrer" aria-label="Resume">
          <File alt="Resume" className="h-6 fill-current" />
        </a>
      </li> */}
    </ul>
  );
}
