import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <div>
        <Link to="/" className="btn btn-primary">
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
