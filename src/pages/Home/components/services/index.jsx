import React from "react";
import { useSiteContent } from "../../../../lib/content-context";

export default function Services() {
  const { content } = useSiteContent();
  const { capabilities } = content;

  return (
    <section
      id="capabilities"
      className="section"
      aria-labelledby="capabilities-title"
    >
      <div className="shell">
        <div className="section-head">
          <p className="section-label">Capabilities</p>
          <div>
            <h2 className="section-title" id="capabilities-title">
              What I take on
            </h2>
            <p className="section-note">
              Most engagements start with one of these three problems.
            </p>
          </div>
        </div>

        <div className="capabilities">
          {capabilities.map((item) => (
            <div className="capability reveal" key={item.title}>
              <span className="cap-corner" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.items.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
