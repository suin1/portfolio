import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./nutti.module.css";

const Nutti = () => {
  const navigate = useNavigate();
  const onBack = () => navigate("/");
  return (
    <div className={style.nutti}>
      <div className={style.nuttiBox}>
        <button onClick={onBack} className={style.backBtn}>
          <img
            src={`${process.env.PUBLIC_URL}/images/back.png`}
            alt="뒤로가기"
          />
        </button>

        <div className={style.main}>
          <h1>
            나만의 주제별로 기록 할 수 있는
            <br />
            일기장 <strong>NuTTi</strong>
          </h1>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="누띠"
            className={style.logoImg}
          />
        </div>

        <div className={style.filetree}>
          <h2>디렉토리 구성</h2>
          <div className={style.fileWrap}>
            <img
              src={`${process.env.PUBLIC_URL}/images/directory.png`}
              alt="디렉토리 구조"
              className={style.directory}
            />

            <ul className={style.pages}>
              <li className={style.page}>
                Home
                <ul className={style.explanation}>
                  <li>로딩 페이지 이후 로고 이미지</li>
                  <li>회원가입 / 로그인 페이지로 이동하는 버튼</li>
                </ul>
              </li>

              <li className={style.page}>
                Join / Login
                <ul className={style.explanation}>
                  <li>
                    프로필이미지 선택 / 아이디(닉네임) / 비밀번호 / 이메일 입력
                  </li>
                  <li>가입 완료 후 첫페이지(Home)로 이동</li>
                </ul>
              </li>

              <li className={style.page}>
                Month / DailyDiary
                <ul className={style.explanation}>
                  <li>사용자 설정 일기장 추가</li>
                  <li>일기 추가</li>
                </ul>
              </li>

              <li className={style.page}>
                Postiong / ViewPost
                <ul className={style.explanation}>
                  <li>날짜, 제목, 내용 입력</li>
                  <li>작성한 일기 내용 확인, 수정 및 삭제</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.design}>
          <h2>UI디자인</h2>

          <h3>디자인 컨셉</h3>
          <p>귀여운 / 심플 / 다이어리</p>
          <h3>메인 / 서브컬러</h3>
          <img src={`${process.env.PUBLIC_URL}/images/color.png`} alt="color" />
          <h3>일기장 / 프로필 캐릭터 일러스트</h3>
          <ul className={style.illust}>
            <li>
              - 일기장
              <img
                src={`${process.env.PUBLIC_URL}/images/diary.png`}
                alt="diary"
              />
            </li>
            <li>
              - 프로필 캐릭터
              <img
                src={`${process.env.PUBLIC_URL}/images/animal.png`}
                alt="animal"
              />
            </li>
          </ul>
        </div>

        <div className={style.solution}>
          <h2>문제 및 해결 방법</h2>
          <ul className={style.solutionBox}>
            <li>
              <p>
                <strong className={style.redColor}>문제점</strong>
                <br />
                앱을 킬때만 보여야 하는 기능이 다른 페이지에서 글 작성 후 버튼을
                누르면 필요없는 로딩 페이지가 나옴.
              </p>
              <p>
                <strong className={style.blueColor}>해결방법</strong>
                <br />
                처음에 App.js에 설정해둔 로딩 기능을 Home.js 컴포넌트로 옮겨
                로딩 화면을 Home으로 갈때만 보이게 하고 다른 페이지에선 안보이게
                해결함.
              </p>
            </li>

            <li>
              <p>
                <strong className={style.redColor}>문제점</strong>
                <br />
                일기장, 일 별 일기 페이지에선 다른 페이지로 넘어가도 데이터가
                유지 되어야 하는데 useState로 작업해 새로고침 하거나 다른
                페이지로 넘어가서 다시 돌아오면 데이터들이 다 날아감
              </p>
              <p>
                <strong className={style.blueColor}>해결방법</strong>
                <br />
                localStorage를 사용. 키값은 inputText로 설정해서 사용자가
                input에 작성한 텍스트로 생성되게 하고 새로고침 하거나 다른
                페이지 넘어갔다 돌아와도 데이터가 유지되게 함.
              </p>
            </li>

            <li>
              <p>
                <strong className={style.redColor}>문제점</strong>
                <br />
                헤더에 있는 기능에 들어가는 뒤로가기 버튼을 navigate 경로 문자열
                -1로 작성해 뒤로 가기 기능이 실행이 안됨.
              </p>
              <p>
                <strong className={style.blueColor}>해결방법</strong>
                <br />
                -값 빼고 숫자열로 수정 하니 뒤로가기 버튼이 작동됨.
              </p>
            </li>

            <li>
              <p>
                <strong className={style.redColor}>문제점</strong>
                <br />
                작업 초기에 MongoDB 연결 방법을 몰라서 사용자 프로필 이미지를
                랜덤하게 설정하니 일기 모음 페이지, 일기 보기 페이지,
                마이페이지에서 새로고침, 버튼 클릭 등의 동작을 할 때마다 프로필
                이미지가 계속 변경됨.
              </p>
              <p>
                <strong className={style.blueColor}>해결방법</strong>
                <br />
                MongoDB 연결 후, 회원가입 컴포넌트에 미리 만들어둔
                profileDB.js를 연결하여 모달창을 통해 프로필 이미지 선택 기능을
                추가함. 백엔드에서는 회원 정보와 선택한 프로필 이미지가
                유지되도록 설정. 프로필 이미지가 보여지는 컴포넌트에서 랜덤
                프로필 이미지를 지정하는 로직 제거하고 구조를 다시 설정해줌.
              </p>
            </li>
          </ul>
        </div>

        <div className={style.bottomBtn}>
          <button className={style.goBtn}>사이트 바로가기</button>
          <button className={style.goBtn}>
            <a
              href={`${process.env.PUBLIC_URL}/images/project_report.pdf`}
              target="_blank">
              보고서 보러가기
            </a>
          </button>
        </div>
      </div>
      <button className={style.topBtn}>
        <a href="#top">Top</a>
      </button>
    </div>
  );
};

export default Nutti;
