import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/skills.css";
import p11 from "../img/p11.jpg";
import p15 from "../img/p15.jpg";
import mbcd from "../img/mbcd.PNG";
import mbcd2 from "../img/mbcd2.png";
import wv from "../img/wv.jpg";
import wv2 from "../img/wv2.jpg";
import pc1 from "../img/pc1.png";
import pc2 from "../img/pc2.png";
import lp1 from "../img/lp1.gif";
import lp2 from "../img/lp2.gif";
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
            <Link to="/skills" className="menu">
              <p> 기술스택</p>
            </Link>
            <div className="menu-select">
              <p> 프로젝트</p>
              <div className="underline" />
            </div>
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
                <p className="subindex">2023</p>
                <p
                  className="subindex_sub"
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
                  꼬마화가
                </p>
                <p
                  className="subindex_sub"
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
                  PC.GG
                </p>
                <p
                  className="subindex_sub"
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
                  withview
                </p>
                <p
                  className="subindex_sub"
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
                  MBCD
                </p>
                <p className="subindex">2022</p>
                <p
                  className="subindex_sub"
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
                  아파트마트
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
            <div>
              <h1>2023</h1>
              <hr />
            </div>
            <section id="1">
              <h2>꼬마화가</h2>
            </section>
            <div className="projects">
              {" "}
              <h3>
                SSAFY-자율 프로젝트(꼬마화가-유아용 그림그리기 어플리케이션)
              </h3>
              <img src={lp1} alt="lp1" className="ppt" />
              <img src={lp2} alt="lp2" className="ppt" />
              <p>
                동물 그림그리기와 동화 읽어주기, 직접 찍은 사진을 그릴수 있는
                기능을 추가해 재미요소를 추가한 유아 소근육 발달 및 단어 학습
                어플리케이션
              </p>
              <p>react-native와 typescript를 사용한 프론트엔트 담당</p>
              <p>
                주로 유저 관리와 토근 관리, TTS나 배경음악과 효과음 등을 담당함
              </p>
              <p>SSAFT 우수프로젝트 선정작</p>
            </div>
            <section id="2">
              <h2>PC.GG</h2>
            </section>
            <div className="projects">
              <h3>SSAFY-특화 프로젝트(PC.GG-PC 및 주변기기 추천 웹사이트)</h3>
              <img src={pc1} alt="pc1" className="ppt" />
              <img src={pc2} alt="pc2" className="ppt" />
              <p>
                크롤링을 통해 모은 데이터를 머신러닝으로 분석해서 사용자가
                원하는 수준의 견적 추천
              </p>
              <p>PC 견적뿐만 아니라 랩탑, 주변기기의 데이터도 검색가능</p>
              <p>vue3를 사용해 PC와 랩탑 추천, 주변기기 검색 화면 구현 담당</p>
              <p>디자인적 아쉬움이 남으나 다양한 버튼을 활용한 화면 구성</p>
            </div>
            <section id="3">
              <h2>withview</h2>
            </section>
            <div className="projects">
              <h3>SSAFY-공통 프로젝트(withview-화상 채팅 서비스)</h3>
              <img src={wv2} alt="wv2" className="ppt" />
              <img src={wv} alt="wv" className="ppt" />
              <p>
                기존 화상 채팅과 달리 본인의 캠화면을 자유롭게 움직일 수 있는
                웹서비스
              </p>
              <p>배경과 스티커를 사용해 다양한 보드게임을 할 수 있음</p>
              <p>
                react를 사용해 화상 채팅 화면 구현과 화면공유 모드 구현을 담당
              </p>
              <p>화면공유 모드에서는 발화시에만 캠화면이 나오도록 구현 </p>
            </div>
            <section id="4">
              <h2>MBCD</h2>
            </section>
            <div className="projects">
              <h3>SSAFY-관통 프로젝트(MBCD-영화 추천 웹사이트)</h3>
              <img src={mbcd} alt="mbcd" className="ppt" />
              <img src={mbcd2} alt="mbcd2" className="ppt" />
              <p>오픈 API를 통해 영화를 추천하는 웹서비스</p>
              <p>vue2와 python으로 로그인과 유저의 마이페이지를 주로 담당</p>
              <p>프론트엔드 뿐만 아니라 백엔드까지 구성했던 프로젝트</p>
            </div>
            <br />
            <div>
              <h1>2022</h1>
              <hr />
            </div>
            <section id="5">
              <h2>아파트마트</h2>
            </section>
            <div className="projects">
              <h3>아파트마트 - 아파트 거래 트랜드 탐색 모델링</h3>
              <img src={p11} alt="11" className="ppt" />
              <img src={p15} alt="15" className="ppt" />
              <p>군집 분석을 이용한 서울시 아파트 매매가 변동추이 분석</p>
              <p>
                단순 분석결과를 발표하는 프로젝트로 발표자료를 제외한 산출물
                없음
              </p>
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
