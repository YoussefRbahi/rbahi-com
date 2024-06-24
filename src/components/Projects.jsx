export default function Projects() {
  const projects = [
    {
      name: "Jeopardy Clone",
      description:
        "A web-based clone of the popular game show Jeopardy, created using only Vanilla JavaScript, HTML, and CSS. The questions and answers are stored in JSON files and are loaded dynamically using JavaScript.",
      image: "/images/jeopardy.png",
      link: "https://github.com/YoussefRbahi/jeopardy",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Hikma Education",
      description:
        "A website for Hikma Education, an agency that provides educational services in the Middle East. It uses Vue and Tailwind CSS for the frontend and Strapi for the Backend. The website is RTL-based but supports LTR and features a responsive design for different screen sizes.",
      image: "/images/hikma-education.png",
      link: "https://hikmaeducation.netlify.app/",

      tags: ["Vue", "Tailwind", "Strapi"],
    },
    {
      name: "rbahi.com",
      description:
        "My portfolio website built from scratch using React and Tailwind CSS. It features a very minimal design heavily inspired by the work of Brittany Chiang and Sean Halpin. The lockscreen is inspired by the iOS lockscreen (and by videogame cutscenes on desktop) and uses ipify and WeatherAPI to get the user's location and weather information.",
      image: "/images/rbahi.png",
      link: "https://rbahi.com",

      tags: ["React", "Tailwind", "REST"],
    },
  ];
  return (
    <ul className="grid gap-8 text-justify">
      {projects.map((project, index) => (
        <li key={index} className="grid gap-4">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className=" md:w-1/3 w-4/5 h-min rounded-sm border border-highcontrast ">
              <img
                src={project.image}
                alt="project-image"
                className="rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-4">
              <a href={project.link} className="relative block">
                <h3 className="text-3xl md:text-2xl font-medium text-highcontrast after:content-['↗'] after:text-2xl after:absolute after:ms-1 after:transition-transform hover:after:-translate-y-1 hover:after:translate-x-1">
                  {project.name}
                </h3>
              </a>

              <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full px-2 py-1 text-xs font-semibold text-primary bg-highcontrast"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm">
            <p>{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
