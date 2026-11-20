import React from "react";
import { Link } from "react-router-dom";
import { useSiteContent } from "../../../../lib/content-context";

export default function Footer() {
  const { content } = useSiteContent();
  const { profile } = content;

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>
          {profile.fullName} · {profile.role}
        </span>
        <span>Mahajanga, Madagascar · {new Date().getFullYear()}</span>
        <span className="footer-links">
          <Link to="/login">Admin</Link>
          <a href="#top">Back to top</a>
        </span>
      </div>
    </footer>
  );
}
