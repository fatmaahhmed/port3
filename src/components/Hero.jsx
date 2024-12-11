import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Fatma Ahmed Abdelfadeel</h1>
        <h2>Software Engineer</h2>
        <p>
          Specializing in backend development and DevOps. I love creating
          efficient and scalable applications.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
