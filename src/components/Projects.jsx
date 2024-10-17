export default function Projects() {
  const projects = [
    {
      name: "IRL Chat",
      description:
        "Real-time chat web app built using react-peer-rooms (see below) and Next.js. It allows you have a chat screen for live events where attendees can send and see messages from everyone in real-time. Connecting is as simple as opening a link or scanning a QR code and entering a nickname.",
      image: "/images/irlchat.png",
      github: "https://github.com/youssefrbahi/irl-chat",
      link: "https://irlchat.netlify.app",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      name: "react-peer-rooms",
      description:
        "React hooks library for centralized yet serverless P2P communication. It allows you to easily create PeerJS-based WebRTC rooms for data exchange using a host/client(s) model. ",
      image: "/images/npm.png",
      github: "https://github.com/youssefrbahi/react-peer-rooms",
      link: "https://www.npmjs.com/package/react-peer-rooms",
      tags: ["React", "TypeScript", "PeerJS"],
    },
    {
      name: "Fontcetera",
      description:
        "Chrome extension developed with React and crxjs that enables users to effortlessly format text with various Unicode fonts and styles. It offers a real-time preview and easy copy-to-clipboard functionality within a simple and intuitive user interface.",
      image: "/images/fontcetera.png",
      github: "https://github.com/youssefrbahi/fontcetera",
      link: "https://chromewebstore.google.com/detail/fontcetera-unicode-text-f/efpedoejhnkhmjeclomcoamlbmohcaie?hl=en",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    // {
    //   name: "Jeopardy Clone",
    //   description:
    //     "A web-based clone of the popular game show Jeopardy, created using only Vanilla JavaScript, HTML, and CSS. The questions and answers are stored in JSON files and are loaded dynamically using JavaScript.",
    //   image: "/images/jeopardy.png",
    //   link: "https://github.com/YoussefRbahi/jeopardy",
    //   tags: ["HTML", "CSS", "JavaScript"],
    // },
    // {
    //   name: "Hikma Education",
    //   description:
    //     "A website for Hikma Education, an agency that provides educational services in the Middle East. It uses Vue and Tailwind CSS for the frontend and Strapi for the Backend. The website is RTL-based but supports LTR and features a responsive design for different screen sizes.",
    //   image: "/images/hikma-education.png",
    //   link: "https://hikmaeducation.netlify.app/",
    //   tags: ["Vue", "Tailwind", "Strapi"],
    // },
    {
      name: "rbahi.com",
      description:
        "Portfolio website built using React and Tailwind CSS. It features a very minimal design heavily inspired by the work of Brittany Chiang and Sean Halpin. The lockscreen is inspired by the iOS lockscreen (and by videogame cutscenes on desktop) and uses ipify and WeatherAPI to get the user's location and weather information.",
      image: "/images/rbahi.png",
      link: "https://rbahi.com",
      github: "https://github.com/YoussefRbahi/rbahi-com",

      tags: ["React", "Tailwind", "REST"],
    },
  ];
  return (
    <ul className="grid gap-8 text-justify">
      {projects.map((project, index) => (
        <li key={index} className="grid gap-4 relative group">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="hidden absolute -inset-x-4 -inset-y-4 z-0 lg:block min-w-full min-h-full group-hover:bg-primary/10 duration-75 transition-colors"></div>
            <div className=" md:w-1/3 w-4/5 h-min rounded-sm ">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block text-accent"
              >
                <img
                  src={project.image}
                  alt="project-image"
                  className="rounded-sm"
                />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block text-primary"
              >
                <h3 className="text-3xl md:text-2xl font-medium text-nowrap">
                  {/* <h3 className="text-3xl md:text-2xl font-medium after:content-['🡕'] after:text-2xl after:absolute after:ms-2 after:transition-transform hover:after:-translate-y-1 hover:after:translate-x-1"> */}
                  {project.name}
                </h3>
              </a>

              <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full px-2 py-1 text-xs font-semibold text-accent bg-accent bg-opacity-25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p>
              {project.description} &nbsp;
              {project.link && (
                <a
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="relative inline-block font-medium text-accent underline"
                >
                  Github
                </a>
              )}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
