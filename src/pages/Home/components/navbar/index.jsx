import React, { useEffect, useState } from "react";
import { useSiteContent } from "../../../../lib/content-context";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "capabilities", label: "Capabilities" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { content } = useSiteContent();
  const { profile } = content;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-nav">
        <div className="shell nav-inner">
          <a className="monogram" href="#top" aria-label={`${profile.name} — back to top`}>
            <span className="monogram-mark" aria-hidden="true">
              JD
            </span>
            <span>Donga Anelka</span>
          </a>

          <nav aria-label="Primary" className="nav-links">
            {links.map((link) => (
              <a
                key={link.id}
                className="nav-link"
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="nav-status">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="mobile-panel" id="mobile-menu" hidden={!open}>
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
          Email me
        </a>
      </div>
    </>
  );
}
