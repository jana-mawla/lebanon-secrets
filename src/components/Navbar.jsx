import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/Navbar.css";

/* Navbar — logo sits on the RIGHT (first in RTL flow).
   Nav items per spec; "قصص" replaced with "منسيات". */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "الصفحة الرئيسية" },
    { to: "/discover", label: "اكتشف السر" },
    { to: "/forgotten", label: "منسيات" },
    { to: "/about", label: "من نحن" },
    { to: "/contact", label: "تواصل معنا" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* Logo on the right side */}
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <Logo size={70} />
        </NavLink>

        {/* Desktop + mobile links */}
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "nav-item" + (isActive ? " active" : "")
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="navbar-toggle"
          aria-label="القائمة"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
