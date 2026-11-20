import React, { useEffect, useRef, useState } from "react";
import { useSiteContent } from "../../../../lib/content-context";
import cvPdf from "../document/CV_Jaosoa_Donga_Anelka_EN.pdf";

export default function Contact() {
  const { content } = useSiteContent();
  const { profile } = content;
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact-panel">
          <p className="contact-kicker">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <h2 className="contact-title" id="contact-title">
            Have two systems that should be talking?
          </h2>

          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact-actions">
            <a className="btn btn-light" href={`mailto:${profile.email}`}>
              Write an email
            </a>
            <button className="btn btn-outline-light" type="button" onClick={copyAddress}>
              {copied ? "Address copied" : "Copy address"}
            </button>
            <span className={`copy-note ${copied ? "is-visible" : ""}`} role="status">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a href={cvPdf} download="CV_Jaosoa_Donga_Anelka_EN.pdf">
              Download CV (PDF)
            </a>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
