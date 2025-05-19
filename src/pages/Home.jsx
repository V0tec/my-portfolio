import { useState, useEffect } from "react";
import "../styles/home.scss";

export default function Home() {
  const images = [
    "/images/My_Photo.PNG",
    "/images/glitch1.png",
    "/images/glitch2.png",
    "/images/glitch3.png",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const runGlitchSequence = () => {
      setIsGlitching(true);
      setCurrentImage(images[1]);

      setTimeout(() => {
        setCurrentImage(images[2]);
      }, 200);

      setTimeout(() => {
        setCurrentImage(images[3]);
      }, 400);

      setTimeout(() => {
        setCurrentImage(images[0]);
        setIsGlitching(false);
      }, 600);
    };

    runGlitchSequence();

    const glitchInterval = setInterval(() => {
      runGlitchSequence();
    }, 3100);

    return () => clearInterval(glitchInterval);
  }, []);

  const codeContent = (
    <>
      <p>const hello = 'world';</p>
      <p>let name = 'Vladislav';</p>
      <p>console.log(name);</p>
      <p>function greet() &#123; return 'Hello, ' + name; &#125;</p>
      <p>const skills = ['HTML', 'CSS', 'JavaScript', 'React'];</p>
      <p>const experience = 3; // years</p>
      <p>
        if (skills.includes('React')) &#123; console.log('React Developer!');
        &#125;
      </p>
      <p>
        for (let i = 0; i &lt; skills.length; i++) &#123;
        console.log(skills[i]); &#125;
      </p>
      <p>const projects = [];</p>
      <p>projects.push('Portfolio');</p>
      <p>projects.push('E-commerce');</p>
      <p>projects.push('Dashboard');</p>
      <p>async function fetchData() &#123;</p>
      <p> const response = await fetch('/api/skills');</p>
      <p> const data = await response.json();</p>
      <p> return data;</p>
      <p>&#125;</p>
      <p>const theme = &#123;</p>
      <p> primary: '#ff0000',</p>
      <p> secondary: '#000000',</p>
      <p> background: '#1f1e1e'</p>
      <p>&#125;;</p>
      <p>document.addEventListener('DOMContentLoaded', () = &#123;</p>
      <p> console.log('Portfolio loaded!');</p>
      <p>&#125;);</p>
    </>
  );

  return (
    <div className="home">
      <div className="home__text">
        <h1>Hello</h1>
        <h2>
          I'm <span>Vladislav Zhakun</span> Frontend Developer.
        </h2>
        <p>
          I specialize in creating responsive websites using HTML, CSS,
          JavaScript, and React.
        </p>
      </div>

      <div className="home__img">
        <div className="home__background"></div>
        <div className="home__codes">
          <div className="home__code-block">{codeContent}</div>
          <div className="home__code-block">{codeContent}</div>
        </div>
        <img
          src={currentImage}
          alt="My Photo"
          className={isGlitching ? "glitch-image" : ""}
        />
      </div>
    </div>
  );
}
