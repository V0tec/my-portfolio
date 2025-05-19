import "../styles/projects.scss";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaBirthdayCake,
  FaStore,
  FaDumbbell,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { GiWizardFace } from "react-icons/gi";

const techIcons = {
  React: <FaReact title="React" color="#61DBFB" />,
  Vite: <SiVite title="Vite" color="#646CFF" />,
  HTML: <FaHtml5 title="HTML" color="#E44D26" />,
  CSS: <FaCss3Alt title="CSS" color="#264DE4" />,
  SCSS: <FaSass title="SCSS" color="#CD6799" />,
  JavaScript: <FaJs title="JavaScript" color="#F0DB4F" />,
};

const projectIcons = [
  <FaStore size={40} title="Store Project" />,
  <FaBirthdayCake size={40} title="Birthday App" />,
  <GiWizardFace size={40} title="Harry Potter" />,
  <FaDumbbell size={40} title="Gym Project" />,
];

export default function Projects() {
  const projectData = [
    {
      title: "Tech Store Glance",
      url: "https://v0tec.github.io/TechStoreGlance/",
      description: "Online store of equipment.",
      technologies: ["HTML", "SCSS", "JavaScript"],
    },
    {
      title: "Birthday App",
      url: "https://birthday-tau-gules.vercel.app/",
      description: "Birthday gift list.",
      technologies: ["React", "SCSS", "Vite"],
    },
    {
      title: "Harry Potter Page",
      url: "https://v0tec.github.io/GarryPoter/",
      description: "A page about the world of Harry Potter.",
      technologies: ["HTML", "SCSS", "JavaScript"],
    },
    {
      title: "TrueGym",
      url: "https://v0tec.github.io/TrueGym/",
      description: "Home page for a fitness club.",
      technologies: ["HTML", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__cards">
        {projectData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card"
          >
            <div className="projects__icon">{projectIcons[index]}</div>
            <h3>{project.title}</h3>
            <div className="projects__details">
              <h4>Description</h4>
              <p>{project.description}</p>
              <h4>Technologies</h4>
              <ul className="projects__tech">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="projects__tech-item">
                    {techIcons[tech]} <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
