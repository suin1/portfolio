import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import AboutMe from "../pages/AboutMe";

const Main = () => {
  const homeRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const [showHeader, setShowHeader] = useState(true);
  const aboutMeRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = aboutMeRef.current;
      if (aboutMe) {
        const aboutMeBottom = aboutMe.offsetTop + aboutMe.offsetHeight;
        const isAboutMeCompletelyVisible =
          window.scrollY + window.innerHeight >= aboutMeBottom;

        setShowHeader(!isAboutMeCompletelyVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showHeader && (
        <Header
          homeRef={homeRef}
          skillsRef={skillsRef}
          projectRef={projectRef}
          aboutMeRef={aboutMeRef}
        />
      )}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
    </div>
  );
};

export default Main;
