import React from "react";
import { useSiteContent } from "../../../../lib/content-context";

export default function Project() {
  const { content } = useSiteContent();
  const { work } = content;

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-head">
          <p className="section-label">Work</p>
          <div>
            <h2 className="section-title" id="work-title">
              Selected work
            </h2>
            <p className="section-note">
              A product, an integration running in production, and a platform
              used by apprenticeship training centres in France.
            </p>
          </div>
        </div>

        <div className="work-list">
          {work.map((item) => (
            <article className="work-row" key={item.title}>
              <p className="work-kind">{item.kind}</p>

              <div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-desc">{item.description}</p>
                <ul className="work-stack">
                  {item.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              {item.links.length > 0 && (
                <div className="work-links">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {item.image && (
                <img
                  className="work-thumb"
                  src={item.image}
                  alt={`${item.title} interface preview`}
                  width="480"
                  height="300"
                  loading="lazy"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
