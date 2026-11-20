import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useAuth } from "../../lib/auth-context";

const messages = {
  "auth/invalid-email": "That email address doesn't look right.",
  "auth/user-not-found": "No account matches this email.",
  "auth/wrong-password": "Wrong password. Try again.",
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/invalid-login-credentials": "Email or password is incorrect.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/missing-password": "Enter your password.",
  "auth/too-many-requests": "Too many attempts. Wait a moment, then try again.",
  "auth/network-request-failed": "Network problem. Check your connection.",
  "auth/operation-not-allowed":
    "Email/password sign-in is disabled. Enable it in Firebase Authentication → Sign-in method.",
  "auth/unauthorized-domain":
    "This domain isn't authorised. Add it in Firebase Authentication → Settings → Authorized domains.",
};

export default function Login() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user) {
    return <Navigate to="/dashboard" replace />;
  }

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setErrorCode("");
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      const target = location.state?.from || "/dashboard";
      navigate(target, { replace: true });
    } catch (err) {
      setError(messages[err.code] || "Sign-in failed. Check your credentials.");
      setErrorCode(err.code || "auth/unknown");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <Link className="monogram auth-back" to="/">
          <span className="monogram-mark" aria-hidden="true">
            JD
          </span>
          <span>Donga Anelka</span>
        </Link>

        <div className="auth-card">
          <p className="auth-kicker">Portfolio admin</p>
          <h1>Sign in</h1>
          <p className="auth-note">
            Use the email and password account created in Firebase
            Authentication.
          </p>

          <form className="auth-form" onSubmit={submit} noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="field-with-action">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="field-action"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-pressed={showPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div className="form-error" role="alert">
                <p>{error}</p>
                {errorCode && <code className="form-error-code">{errorCode}</code>}
              </div>
            )}

            <button className="btn btn-primary auth-submit" type="submit" disabled={submitting}>
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="auth-footer">
            <Link to="/">← Back to the site</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
