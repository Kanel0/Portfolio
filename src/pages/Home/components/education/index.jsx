import React from "react";
import { useSiteContent } from "../../../../lib/content-context";

export default function Education() {
  const { content } = useSiteContent();
  const { education, certifications, community } = content;

  return (
    <section id="background" className="section" aria-labelledby="background-title">
      <div className="shell">
        <div className="section-head">
          <p className="section-label">Background</p>
          <div>
            <h2 className="section-title" id="background-title">
              Training and community
            </h2>
          </div>
        </div>

        <div className="facts">
          <div className="fact-block">
            <h3>Education</h3>
            <ul className="fact-list">
              {education.map((item) => (
                <li key={item.title}>
                  {item.title}
                  <span>{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fact-block">
            <h3>Certifications</h3>
            <ul className="fact-list">
              {certifications.map((item) => (
                <li key={item.title}>
                  {item.title}
                  <span>{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="fact-block">
            <h3>Community</h3>
            <ul className="fact-list">
              {community.map((item) => (
                <li key={item.title}>
                  {item.title}
                  <span>{item.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
