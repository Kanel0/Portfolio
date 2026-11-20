import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import { AuthProvider } from "./lib/auth-context";
import { SiteContentProvider } from "./lib/content-context";
import RequireAuth from "./lib/RequireAuth";

export const App = () => (
  <AuthProvider>
    <SiteContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </SiteContentProvider>
  </AuthProvider>
);
