import React from "react";
import style from "../assets/skills.module.css";

const Skills = () => {
  return (
    <div className={style.skills}>
      <h2 className={style.skillH2}>skills</h2>
      <div className={style.skillbox}>
        <div className={style.skill}>
          <h3 className={style.smallSkill}>frontend</h3>
          <div className={style.smallbox}>
            <h4>HTML5 & CSS3</h4>
            <ul>
              <li>웹 표준과 웹 접근성을 고려한 시맨틱 마크업</li>
              <li>CSS Animation을 활용한 모션 구현</li>
              <li>미디어 쿼리를 이용한 반응형 웹 제작</li>
              <li>CSS 변수 선언해 동일한 스타일 일관성 유지</li>
            </ul>
          </div>
          <div className={style.smallbox}>
            <h4>JavaScript (ES6+)</h4>
            <ul>
              <li>ES6+ 문법 활용</li>
              <li>
                input, change, submit 이벤트 / form 접근 프로퍼티로 변화에 따른
                이벤트
              </li>
              <li>setTimeout, setInterval 함수를 활용해 비동기 동작 처리</li>
              <li>async, await, promise 함수를 활용한 비동기 통신</li>
              <li>Fetch API, Axios 라이브러리를 사용</li>
              <li>REST API를 활용해 외부 데이터 가져오기</li>
            </ul>
          </div>
          <div className={style.smallbox}>
            <h4>React</h4>
            <ul>
              <li>컴포넌트 라이프 사이클에 대한 이해</li>
              <li>
                useState, useEffect, useRef, useNavigate, useParams 등의 Hook
                활용
              </li>
              <li>styled-components를 활용한 디자인</li>
              <li>Context API, Redux Toolkit으로 전역 상태 관리</li>
              <li>React-Router-Dom을 활용한 단일 웹페이지 제작</li>
              <li>
                Bootstrap을 이용한 반응형 레이아웃과 모던한 UI컴포넌트 설계,
                CSS클래스를 활용한 효율적인 스타일링.
              </li>
            </ul>
          </div>
        </div>
        <div className={style.skill}>
          <h3 className={style.smallSkill}>backend</h3>
          <div className={style.smallbox}>
            <h4>Node.js</h4>
            <ul>
              <li>
                Express 프레임워크를 이용한 서버 구축 및 API를 통한
                클라이언트와의 데이터 통신
              </li>
              <li>Sha256해시 함수 사용해 데이터 보안</li>
              <li>
                express-session, cors, static, json등 다양한 Express의 미들웨어
                활용
              </li>
            </ul>
          </div>
          <div className={style.smallbox}>
            <h4>DB & DEPLOYMENT</h4>
            <ul>
              <li>MongoDB를 사용해 회원가입, 로그인 등 데이터베이스 관리</li>
              <li>Cloudtype을 통해 배포</li>
            </ul>
          </div>
        </div>
        <div className={style.skill}>
          <h3 className={style.smallSkill}>tool</h3>
          <div className={style.smallbox}>
            <h4>Git & Github</h4>
            <ul>
              <li>GitBash 사용</li>
              <li>GitHub를 이용한 작업물 저장 및 버전 관리</li>
              <li>GitHub를 통해 팀 프로젝트 실시간 공유 및 협업 경험</li>
            </ul>
          </div>
          <div className={style.smallbox}>
            <h4>Illustrator / Photoshop / Figma</h4>
            <ul>
              <li>이미지 편집 및 디자인</li>
              <li>UI/UX 이미지 소스 제작</li>
              <li>Figma를 이용한 와이어프레임 및 프로토타입 제작</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
