import React, { useState, useEffect } from "react";
import style from "./header.module.css";

const Header = ({ homeRef, skillsRef, projectRef, aboutMeRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className={`${style.navBar} ${isScrolled ? style.scrolled : ""}`}>
      <h1 className={style.hsiiii}>Hsiiiiiiii</h1>
      <menu>
        <li onClick={() => scrollToRef(homeRef)}>home</li>
        <li onClick={() => scrollToRef(skillsRef)}>skill</li>
        <li onClick={() => scrollToRef(projectRef)}>project</li>
        <li onClick={() => scrollToRef(aboutMeRef)}>about me</li>
      </menu>
    </div>
  );
};

export default Header;
