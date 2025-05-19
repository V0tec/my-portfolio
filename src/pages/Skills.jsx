import "../styles/skills.scss";
import "../styles/glitchText.scss";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">My Skills</h2>
      <div className="skills__cards">
        <div className="skills__card">
          <div className="skills__icons">
            <FaHtml5 size={40} />
            <FaCss3Alt size={40} />
          </div>
          <h3>HTML & CSS / SCSS</h3>
          <p>
            Semantic HTML5, responsive layouts, Flexbox, Grid, SCSS, BEM, media
            queries.
          </p>
        </div>

        <div className="skills__card">
          <div className="skills__icons">
            <FaJs size={40} />
          </div>
          <h3>JavaScript</h3>
          <p>
            ES6+, DOM manipulation, events, functions, fetch API, async/await,
            localStorage, OOP basics.
          </p>
        </div>

        <div className="skills__card">
          <div className="skills__icons">
            <FaReact size={40} className="skills__reactIcon" />
          </div>
          <h3>React</h3>
          <p>
            Components, React Router, useState/useEffect, props, SPA structure,
            deployment to GitHub Pages.
          </p>
        </div>

        <div className="skills__card">
          <div className="skills__icons">
            <FaTools size={40} />
          </div>
          <h3>Tools & Workflow</h3>
          <p>
            Git & GitHub, version control, Vite, npm, Chrome DevTools, GitHub
            Pages, component structure.
          </p>
        </div>
      </div>
    </div>
  );
}
