import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      title: "Task Manager Application",
      description:
        "Developed a task management application featuring user authentication, task CRUD operations, and task categorization. Implemented with TypeScript and Docker for containerization.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
      ],
      links: {
        github: "https://github.com/fatmaahhmed/TaskManager.git",
        demo: "#",
      },
    },
    {
      title: "Customizable Quiz Generation Platform",
      description:
        "Developed a web-based platform for customizable quizzes, enabling users to generate quizzes by inputting text, PDFs, or topics. Users can customize question formats and difficulty levels.",
      technologies: ["TypeScript", "Next.js", "LangChain", "PlanetScale"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "E-commerce Store Backend",
      description:
        "Built a backend for an e-commerce store, implementing CRUD operations for categories and products, user authentication, online payment integration, and advanced features like wishlists and shopping carts.",
      technologies: ["Node.js", "Express", "MongoDB"],
      links: {
        github: "https://github.com/fatmaahhmed/RESTful_APIs",
        demo: "#",
      },
    },
    {
      title: "Course Management API",
      description:
        "Designed and developed a RESTful API for course management, supporting CRUD operations, pagination, and robust async error handling.",
      technologies: ["Node.js", "Express", "Express-validator"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Student Affairs Web Application",
      description:
        "Created a web application to manage student records, including CRUD operations and status updates.",
      technologies: ["HTML", "CSS", "JavaScript", "Django", "SQLite"],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ];

  const skills = {
    Backend: ["Node.js", "Express", "TypeScript", "Next.js", "Django"],
    Databases: ["MongoDB", "SQLite", "PlanetScale"],
    DevOps: ["GitHub Actions", "Google Cloud", "Kubernetes", "Docker"],
    Programming: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
  };

  const aboutContent = (
    <p className="text-gray-600 leading-relaxed">
      I'm a Software Engineer with a B.Sc. in Artificial Intelligence (GPA:
      2.84/4.0) from Faculty of Computers and Artificial Intelligence, Cairo
      University (2020-2024). I specialize in backend development and DevOps,
      with experience in building scalable applications and implementing
      efficient CI/CD pipelines.
    </p>
  );

  const experienceContent = (
    <div className="space-y-6">
      {/* Current Job Experience */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Software Engineer, Eyego
        </h3>
        <p className="text-gray-600 mb-4">Nov 2024 – Present</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Worked on production-level project, focusing on DevOps tasks</li>
          <li>
            Implemented CI/CD pipelines using GitHub Actions to automate
            testing, building, and deployment processes
          </li>
          <li>
            Deployed applications on Google Cloud and managed infrastructure
            using Kubernetes (K8s)
          </li>
          <li>
            Ensured smooth delivery pipelines and optimized cloud-based
            deployment workflows
          </li>
        </ul>
      </div>

      {/* Graduation Project */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Graduation Project - Customizable Quiz Generation Platform
        </h3>
        <p className="text-gray-600 mb-4">Grade: Excellent</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            Developed a web-based platform for customizable quizzes, enabling
            users to generate quizzes by inputting text, PDFs, or topics. Users
            can customize question formats (multiple-choice, open-ended,
            true/false) and difficulty levels.
          </li>
          <li>
            Leveraged LangChain for AI-powered prompt generation and question
            formatting.
          </li>
          <li>
            <span className="font-medium">Technologies:</span> TypeScript,
            Next.js, PlanetScale, Redis, LangChain
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Fatma Ahmed</h1>
            <div className="flex space-x-6">
              {["about", "projects", "experience", "skills", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`capitalize ${
                      activeSection === section
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        {activeSection === "about" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About Me
              </h2>
              {aboutContent}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com/fatmaahhmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:fatmaahmed222003@gmail.com"
                  className="text-gray-600 hover:text-blue-500"
                  title="Email me"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.github}
                      className="flex items-center text-gray-600 hover:text-blue-500"
                    >
                      <Github size={20} className="mr-1" /> Code
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center text-gray-600 hover:text-blue-500"
                    >
                      <ExternalLink size={20} className="mr-1" /> Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Experience
            </h2>
            {experienceContent}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Me
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-8 text-center">
                <p className="text-gray-600">
                  Feel free to reach out to me at:{" "}
                  <a
                    href="mailto:fatmaahmed222003@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    fatmaahmed222003@gmail.com
                  </a>
                </p>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
