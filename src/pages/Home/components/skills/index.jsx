import React from "react";
import { useSiteContent } from "../../../../lib/content-context";

export default function Skills() {
  const { content } = useSiteContent();
  const { stack } = content;

  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <div className="shell">
        <div className="section-head">
          <p className="section-label">Stack</p>
          <div>
            <h2 className="section-title" id="stack-title">
              The tools I reach for
            </h2>
          </div>
        </div>

        <dl className="stack-grid">
          {stack.map((group) => (
            <div className="stack-group reveal" key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
