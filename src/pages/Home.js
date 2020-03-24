import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
