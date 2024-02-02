import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/skills.css";
import py from "../img/py.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import re from "../img/re.png";
import rn from "../img/rn.png";
import vu from "../img/vu.png";
import gh from "../img/gh.png";
import gl from "../img/gl.png";
import st from "../img/st.svg";
import gr from "../img/gr.png";
import jr from "../img/jr.png";
import fm from "../img/fm.png";
import ns from "../img/ns.png";
import bi from "../img/bi.png";
import tb from "../img/tb.png";
import { motion } from "framer-motion";

function Skills() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [currentColor, setCurrentColor] = useState({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  });

  const handleMouseOver1 = () => {
    setHover1(true);
    console.log(hover1);
  };

  const handleMouseOut1 = () => {
    setHover1(false);
    console.log(hover1);
  };
  const handleMouseOver2 = () => {
    setHover2(true);
  };

  const handleMouseOut2 = () => {
    setHover2(false);
  };
  const handleMouseOver3 = () => {
    setHover3(true);
  };

  const handleMouseOut3 = () => {
    setHover3(false);
  };
  const handleMouseOver4 = () => {
    setHover4(true);
  };

  const handleMouseOut4 = () => {
    setHover4(false);
  };
  const handleMouseOver5 = () => {
    setHover5(true);
    console.log(hover5);
  };

  const handleMouseOut5 = () => {
    setHover5(false);
    console.log(hover5);
  };

  const increment = 0.1;

  const interpolate = (start, end, t) => {
    return start + (end - start) * t;
  };

  const targetColor = {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor((prevColor) => {
        return {
          r: interpolate(prevColor.r, targetColor.r, increment),
          g: interpolate(prevColor.g, targetColor.g, increment),
          b: interpolate(prevColor.b, targetColor.b, increment),
        };
      });
    }, 32); // 약 60프레임으로 설정 (1000 / 60)

    return () => clearInterval(intervalId);
  }, [currentColor, targetColor.b, targetColor.g, targetColor.r]);

  const handleMenuClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div>
        <header>
          <h1>My Portfolio</h1>
          <div className="menus">
            <div className="menu-select">
              <p> 기술스택</p>
              <div className="underline" />
            </div>
            <Link to="/projects" className="menu">
              <p> 프로젝트</p>
            </Link>
            <Link to="/history" className="menu">
              <p> 이력사항</p>
            </Link>
            <Link to="/" className="menu">
              <p> 메인으로</p>
            </Link>
          </div>
        </header>
        <body>
          <div className="Lside">
            <div>
              <h2>목차</h2>
              <div>
                <p
                  className="subindex"
                  style={{
                    color: hover1
                      ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                          currentColor.g
                        )}, ${Math.floor(currentColor.b)})`
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={handleMouseOver1}
                  onMouseOut={handleMouseOut1}
                  onClick={() => handleMenuClick("1")}
                >
                  사용 언어
                </p>
                <p
                  className="subindex"
                  style={{
                    color: hover2
                      ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                          currentColor.g
                        )}, ${Math.floor(currentColor.b)})`
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={handleMouseOver2}
                  onMouseOut={handleMouseOut2}
                  onClick={() => handleMenuClick("2")}
                >
                  프레임워크
                </p>
                <p
                  className="subindex"
                  style={{
                    color: hover3
                      ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                          currentColor.g
                        )}, ${Math.floor(currentColor.b)})`
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={handleMouseOver3}
                  onMouseOut={handleMouseOut3}
                  onClick={() => handleMenuClick("3")}
                >
                  협업 도구
                </p>
                <p
                  className="subindex"
                  style={{
                    color: hover4
                      ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                          currentColor.g
                        )}, ${Math.floor(currentColor.b)})`
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={handleMouseOver4}
                  onMouseOut={handleMouseOut4}
                  onClick={() => handleMenuClick("4")}
                >
                  버전 관리
                </p>
                <p
                  className="subindex"
                  style={{
                    color: hover5
                      ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                          currentColor.g
                        )}, ${Math.floor(currentColor.b)})`
                      : "inherit",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={handleMouseOver5}
                  onMouseOut={handleMouseOut5}
                  onClick={() => handleMenuClick("5")}
                >
                  기타
                </p>
              </div>
            </div>
          </div>
          <motion.div
            /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="Rbody"
          >
            <section id="1">
              <h2>사용 언어</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>사용 언어</th>
                    <th>수준</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img src={py} alt="" />
                        <span>python</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      SWEA 소프트웨어 역량 테스트 IM수준
                      <br /> 문제해결능력
                      <br />
                      <br />
                      django를 이용한 서버 구축 및
                      <br /> 빅데이터 분석
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={js} alt="" />
                        <span>javascript</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      반응형 웹과 SPA 구축, <br /> UI 애니메이션 구현
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={ts} alt="" />
                        <span>typescript</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>리액트 네이티브와 병용한 앱 구현</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="2">
              <h2>프레임워크</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>프레임워크</th>
                    <th>수준</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img src={re} alt="python" />
                        <span>react.js</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      웹소켓과 웹RTC를 이용한 실시간 통신 <br /> CSS 와 JS를
                      응용한 UI 애니메이션
                      <br />
                      <br />
                      AWS EC2를 이용한 프론트 페이지 배포
                      <br />
                      <br />
                      리덕스를 이용한 상태관리와 라우터를 <br /> 이용한 SPA구축
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={rn} alt="python" />
                        <span>react-native</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>
                      라이브러리를 이용한 유저 토큰 관리
                      <br />
                      <br />
                      리덕스를 이용한 상태관리와 네비게이터를 <br /> 이용한
                      스크린 전환
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={vu} alt="python" />
                        <span>vue.js</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>
                      공식문서에 기반한 프로젝트 초기설정
                      <br />
                      <br />
                      부트스트랩 등 CSS프레임워크를 사용해 <br /> 반응형 웹 구현
                      <br />
                      <br />
                      vue3 외 vue2 사용 경험도 있음
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="3">
              <h2>협업 도구</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>협업 도구</th>
                    <th>수준</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img src={jr} alt="" />
                        <span>jira</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>
                      프로젝트 목표를 이슈별로 분할, 매주 <br />
                      월요일 스프린트를 구성해 작업
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={fm} alt="" />
                        <span>figma</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      피그마를 이용한 목업 제작
                      <br />
                      <br /> 공동편집을 이용해서 팀원 간 디자인 조율
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={ns} alt="" />
                        <span>notion</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>리액트 네이티브와 병용한 앱 구현</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="4">
              <h2>버전 관리</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>버전 관리 툴</th>
                    <th>수준</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img src={gh} alt="" />
                        <span>github</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>빅데이터 분석 프로젝트에서 협업을 위한 버전관리 툴로 사용
                    <br /><br /> 현재 프로젝트 아카이브로 활용중
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={gl} alt="" />
                        <span>gitlab</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      SSAFY프로젝트의 버전관리 툴로 활용. jira나 gerrit등 다른 툴과 병용해서 사용함.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={st} alt="" />
                        <span>sourcetree</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>시각적인 효과와 간단한 사용법으로 내가 사용하는 브랜치 뿐만아니라 다른 브랜치의 상황도 확인할 수 있음 </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <img src={gr} alt="" />
                        <span>gerrit</span>
                      </div>
                    </td>
                    <td>중하</td>
                    <td>깃랩과 병용해 실험적으로 사용, <br /> 버전 충돌을 줄여주는 효과가 있었음</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="5">
              <h2>기타</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>기타 사용 툴</th>
                    <th>수준</th>
                    <th>예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <div className="sight">
                          <img src={bi} alt="" />
                          <img src={tb} alt="" />
                        </div>
                        <span>power bi & tableau</span>
                      </div>
                    </td>
                    <td>중</td>
                    <td>
                      분석한 빅데이터 자료를 기반으로 시각화된 보고서 작성 가능
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            <br />
          </motion.div>
          <div className="footer"></div>
        </body>
      </div>
    </div>
  );
}

export default Skills;
