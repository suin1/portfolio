import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "../assets/project.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className={style.projects}>
      <div className={style.container}>
        <h2>
          team
          <br />
          project
        </h2>
        <div className={style.project}>
          <div className={style.pofol}>
            <a href="https://github.com/suin1/nutti" target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/1home.png`}
                alt="nutti"
              />
            </a>
          </div>
          <div className={style.pofol}>
            <a
              href="https://github.com/suin1/busan?tab=readme-ov-file"
              target="_blank">
              <img
                src={`${process.env.PUBLIC_URL}/images/busan.png`}
                alt="busan"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={style.container}>
        <h2>
          self
          <br />
          project
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className={style.mySwiper}>
          <SwiperSlide className={style.pofolSlide}>Slide 1</SwiperSlide>
          <SwiperSlide className={style.pofolSlide}>Slide 2</SwiperSlide>
          <SwiperSlide className={style.pofolSlide}>Slide 3</SwiperSlide>
          <SwiperSlide className={style.pofolSlide}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
