import React from "react";
import style from "../assets/home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.homeModule}>
        <div className={style.port}>
          <h2 className={style.front}>Frontend Developer</h2>
          <h3 className={style.name}>
            <strong className={style.point}>H</strong>eo
            <strong className={style.point}>S</strong>u
            <strong className={style.point}>I</strong>n
          </h3>
        </div>
        <p>#책임감</p>
        <p>#끈기</p>
        <p>#도전정신</p>
        <p>#학습능력</p>
      </div>
    </div>
  );
};

export default Home;
