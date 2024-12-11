import "./Projects.css";

const projects = [
  {
    title: "Customizable Quiz Generation Platform",
    description:
      "A platform that allows users to create quizzes by uploading text, PDFs, or topics, with customizable question formats and difficulty levels.",
    technologies: [
      "TypeScript",
      "Next.js",
      "LangChain",
      "PlanetScale",
      "Redis",
    ],
    github: "#",
    demo: "#",
  },
  // Add more projects here
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
