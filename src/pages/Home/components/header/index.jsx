import React from "react";
import { useSiteContent } from "../../../../lib/content-context";
import cvPdf from "../document/CV_Jaosoa_Donga_Anelka_EN.pdf";

const wireA = "M126 41 C 170 41, 176 116, 188 131";
const wireB = "M294 41 C 250 41, 244 116, 232 131";
const wireC = "M126 279 C 170 279, 176 204, 188 189";
const wireD = "M294 279 C 250 279, 244 204, 232 189";

function SystemMap() {
  return (
    <figure className="schematic reveal" aria-labelledby="map-caption">
      <svg viewBox="0 0 420 320" role="img" aria-label="Diagram: a web client and a Node/Python service synchronise HubSpot CRM with Sage 100 accounting through an integration hub.">
        {/* wires */}
        <path className="wire" pathLength="1" d={wireA} />
        <path className="wire" pathLength="1" d={wireB} />
        <path className="wire" pathLength="1" d={wireC} />
        <path className="wire" pathLength="1" d={wireD} />

        {/* travelling data, one round trip each side */}
        <circle className="flow" r="3" style={{ offsetPath: `path("${wireA}")` }} />
        <circle className="flow" r="3" style={{ offsetPath: `path("${wireD}")`, animationDelay: "-3.2s" }} />

        {/* nodes */}
        <g>
          <rect className="node-box" x="8" y="18" width="118" height="46" />
          <text className="node-label" x="20" y="37">REACT / NEXT</text>
          <text className="node-sub" x="20" y="50">web client</text>
          <circle className="node-dot" cx="126" cy="41" r="2.5" />
        </g>
        <g>
          <rect className="node-box" x="294" y="18" width="118" height="46" />
          <text className="node-label" x="306" y="37">HUBSPOT</text>
          <text className="node-sub" x="306" y="50">crm · contacts</text>
          <circle className="node-dot" cx="294" cy="41" r="2.5" />
        </g>
        <g>
          <rect className="node-box" x="8" y="256" width="118" height="46" />
          <text className="node-label" x="20" y="275">NODE / PYTHON</text>
          <text className="node-sub" x="20" y="288">services · jobs</text>
          <circle className="node-dot" cx="126" cy="279" r="2.5" />
        </g>
        <g>
          <rect className="node-box" x="294" y="256" width="118" height="46" />
          <text className="node-label" x="306" y="275">SAGE 100</text>
          <text className="node-sub" x="306" y="288">accounting</text>
          <circle className="node-dot" cx="294" cy="279" r="2.5" />
        </g>

        {/* hub */}
        <circle className="node-box" cx="210" cy="160" r="34" />
        <circle className="live-dot" cx="210" cy="131" r="2.5" />
        <text className="node-label" x="210" y="157" textAnchor="middle">
          ELYONE
        </text>
        <text className="node-sub" x="210" y="169" textAnchor="middle">
          sync hub
        </text>
        <text className="node-sub" x="210" y="181" textAnchor="middle">
          api · php
        </text>
      </svg>

      <figcaption id="map-caption">
        <span>Systems map</span>
        <span>HubSpot ↔ Sage 100</span>
      </figcaption>
    </figure>
  );
}

export default function Header() {
  const { content } = useSiteContent();
  const { profile, hero } = content;

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div>
          <p className="hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability} / {profile.location}
          </p>

          <h1 className="hero-title" id="hero-title">
            {hero.headline.map((line) => (
              <span className="line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </h1>

          <p className="hero-lede">{hero.lede}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See selected work
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>

          <p className="hero-meta">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/Kanel0
            </a>
            <a href={cvPdf} download="CV_Jaosoa_Donga_Anelka_EN.pdf">
              CV (PDF)
            </a>
          </p>
        </div>

        <SystemMap />
      </div>
    </section>
  );
}
