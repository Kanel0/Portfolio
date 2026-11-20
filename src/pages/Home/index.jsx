import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Project from "./components/project";
import Experience from "./components/experiences";
import Services from "./components/services";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Header />
        <Project />
        <Experience />
        <Services />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
