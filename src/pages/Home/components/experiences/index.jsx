import React from "react";
import { useSiteContent } from "../../../../lib/content-context";

export default function Experience() {
  const { content } = useSiteContent();
  const { experience } = content;

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="shell">
        <div className="section-head">
          <p className="section-label">Experience</p>
          <div>
            <h2 className="section-title" id="experience-title">
              Five roles, one thread: making systems work together
            </h2>
            <p className="section-note">
              Open a role to read what it actually involved.
            </p>
          </div>
        </div>

        <div className="timeline">
          {experience.map((job, index) => (
            <details className="exp-item" key={`${job.company}-${job.period}`}>
              <summary>
                <span className="exp-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="exp-period">{job.period}</span>
                <span className="exp-role">
                  {job.role}
                  <span className="exp-company">
                    {job.company}, {job.place}
                  </span>
                </span>
                <span className="exp-toggle" aria-hidden="true" />
              </summary>

              <div className="exp-body">
                <div>
                  <div className="exp-content">
                    <p className="exp-summary">{job.summary}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>
                          <span aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
