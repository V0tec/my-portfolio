import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      {/* Бургер іконка для мобільних */}
      <div className="burger" onClick={toggleMenu}>
        {menuOpen ? (
          <FaTimes color="red" size={28} />
        ) : (
          <FaBars color="white" size={28} />
        )}
      </div>

      {/* Основне меню */}
      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="skills" onClick={closeMenu}>
          Skills
        </NavLink>
        <NavLink to="education" onClick={closeMenu}>
          Education
        </NavLink>
        <NavLink to="projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink to="contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
