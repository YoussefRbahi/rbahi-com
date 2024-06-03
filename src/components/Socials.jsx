import Instagram from "../assets/images/instagram.svg?react";
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
          <LinkedIn alt="LinkedIn" className="w-6 h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/youssefrbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub alt="GitHub" className="w-6 h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/youssef_rbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XTwitter alt="X/Twitter" className="w-6 h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/youssef.rbahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6 fill-current" />
        </a>
      </li>
      <li>
        <a
          href="https://youssefrbahi.com/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <File alt="Resume" className="w-6 h-6 fill-current" />
        </a>
      </li>
    </ul>
  );
}
