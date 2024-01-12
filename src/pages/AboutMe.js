import React from "react";
import style from "../assets/aboutMe.module.css";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={style.aboutMe}>
      <h2 className={style.smallAbout}>about me</h2>
      <div className={style.about}>
        <h1 className={style.bigAbout}>
          항상 새로운 도전을 하는,
          <br />
          책임감이 강하고 끈기있는
          <br />
          프론트앤드 개발자
          <br />
          <strong>허수인</strong>입니다.
        </h1>
        <div className={style.contact}>
          <h3>CONTACT</h3>
          <a href="https://github.com/suin1">
            <p>
              <img
                src={`${process.env.PUBLIC_URL}/images/github.png`}
                alt="github"
              />
              github
            </p>
          </a>
          <a href="_blank">
            <p>
              <img
                src={`${process.env.PUBLIC_URL}/images/kakao.png`}
                alt="kakao"
              />
              kakaotalk
            </p>
          </a>
          {/*<p>
            <img
              src={`${process.env.PUBLIC_URL}/images/email.png`}
              alt="email"
            />
            email
          </p>
  */}
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
