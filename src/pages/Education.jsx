import "../styles/education.scss";

export default function Education() {
  return (
    <section className="education">
      <h2 className="education__title">Education</h2>

      <div className="education__cards">
        <div className="education__card">
          <h3>Higher Education</h3>
          <div className="education__details">
            <h4>National Aviation University</h4>
            <p>
              Bachelor in Computer Engineering
              <br />
              2022 — 2026, Kyiv, Ukraine
            </p>
          </div>
        </div>

        <div className="education__card">
          <h3>Courses</h3>
          <div className="education__details">
            <h4>Genius Space</h4>
            <p>
              Front-End Developer course covering HTML, CSS, JavaScript, React
              and responsive design principles.
            </p>
          </div>
        </div>

        <div className="education__card">
          <h3>Self-Learning</h3>
          <div className="education__details">
            <h4>Independent Study</h4>
            <p>
              Hands-on learning through online resources, documentation, and
              building real-world projects with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
