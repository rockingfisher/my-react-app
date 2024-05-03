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
import py from "../img/py.png";
import sci from "../img/sci.png";
import tb from "../img/tb.png";
import ml1 from "../img/ml1.PNG";
import ml2 from "../img/ml2.PNG";
import ml3 from "../img/ml3.PNG";
import ml4 from "../img/ml4.PNG";
import java from "../img/java.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import rn from "../img/rn.png";
import spring from "../img/spring.png";
import mysql from "../img/mysql.jpg";
import vu from "../img/vu.png";
import react from "../img/re.png";
import rtc from "../img/webrtc.png";
import dj from "../img/django.png";
import sqllite from "../img/sqllite.png";
import boot from "../img/boot.svg";
import movie1 from "../img/django-suth.png";
import movie2 from "../img/database.png";
import movie3 from "../img/lgincode.png";
import movie5 from "../img/vuex.png";
import view1 from "../img/rtccode1.PNG";
import view2 from "../img/rtccode2.PNG";
import view3 from "../img/chat.PNG";
import view4 from "../img/maingimic.PNG";
import view5 from "../img/speak.PNG";
import view6 from "../img/screenshare.PNG";
import pcre1 from "../img/estimate.PNG";
import pcre2 from "../img/control.PNG";
import pcre3 from "../img/loginchoan.PNG";
import pcre4 from "../img/peri.PNG";
import baby1 from "../img/mockup.PNG";
import baby2 from "../img/keychain.PNG";
import baby3 from "../img/logout.PNG";
import baby4 from "../img/loadtk.PNG";
import baby5 from "../img/imagepicker.PNG";
import baby6 from "../img/tts.PNG";
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

  const [projectDetailValue, setProjetDetailValue] = useState(0);

  const projectDetailOne = () => {
    if (projectDetailValue === 1) {
      setProjetDetailValue(0);
      console.log('one to zero')
    } else {
      setProjetDetailValue(1);
      console.log('num to one')
    }
  };
  
  const projectDetailTwo = () => {
    if (projectDetailValue === 2) {
      setProjetDetailValue(0);
      console.log('two to zero')
    } else {
      setProjetDetailValue(2);
      console.log('num to two')
    }
  };
  
  const projectDetailThr = () => {
    if (projectDetailValue === 3) {
      setProjetDetailValue(0);
      console.log('three to zero')
    } else {
      setProjetDetailValue(3);
      console.log('num to three')
    }
  };
  
  const projectDetailFou = () => {
    if (projectDetailValue === 4) {
      setProjetDetailValue(0);
      console.log('four to zero')
    } else {
      setProjetDetailValue(4);
      console.log('num to four')
    }
  };
  
  const projectDetailFiv = () => {
    if (projectDetailValue === 5) {
      setProjetDetailValue(0);
      console.log('five to zero')
    } else {
      setProjetDetailValue(5);
      console.log('num to five')
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
              <p>SSAFT 우수프로젝트 선정작으로 어린이집 시연시 좋은 반응을 받음.</p>
              <button onClick={projectDetailOne} className="detailBtn" >프로젝트 상세</button>
              <div className={`${projectDetailValue === 1? 'projectDetail': 'hideDetail'}`}>
              <div className="detailcontaxt">
                  <span>주요기술스택 : </span>
                  <img src={java} alt="python" className="skillstack"/>
                  <img src={js} alt="python" className="skillstack"/>
                  <img src={ts} alt="python" className="skillstack"/>
                  <img src={rn} alt="python" className="skillstack"/>
                  <img src={spring} alt="python" className="skillstack"/>
                  <img src={mysql} alt="python" className="skillstack"/>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 팀원 : 6명</span>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 기간 : 2023.10.09. ~ 2022.11.17.</span>
                </div>
                <div className="detailcontaxt">
                  <span>맡은 업무 : 유저관련 스크린 프론트엔드 및 토큰관리, 이미지 선택 및 업로드구현, BGM및 TTS구현</span>
                </div>
                <div className="detailImgDiv">
                  <img src={baby1} alt="" className="" />
                </div>
                <div className="detailcontaxt">
                  <span>figma를 이용 목업을 제작하고, 목업을 바탕으로 화면 구성</span>
                </div>
                <div className="detailImgDiv">
                  <img src={baby2} alt="" className="detailImg" />
                  <div className="tempdiv1">
                    <img src={baby4} alt="" className="" />
                    <img src={baby3} alt="" className="" />
                  </div>
                </div>
                <div className="detailcontaxt">
                  <span>유저토큰은 키체인에 저장 및 관리하고, 로그아웃시 키체인에서 토큰이 리셋되도록 구현.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={baby5} alt="" className="detailImg" />
                  <img src={baby6} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>안드로이드 내 갤러리에서 사진을 가져올 수 있도록 하고 TTS를 통해 화면에 맞춰 동화를 읽을수 있도록 개발</span>
                </div>
              </div>
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
              <button onClick={projectDetailTwo} className="detailBtn" >프로젝트 상세</button>
              <div className={`${projectDetailValue === 2? 'projectDetail': 'hideDetail'}`}>
              <div className="detailcontaxt">
                  <span>주요기술스택 : </span>
                  <img src={vu} alt="python" className="skillstack"/>
                  <img src={js} alt="python" className="skillstack"/>
                  <img src={java} alt="scikit" className="skillstack"/>
                  <img src={spring} alt="scikit" className="skillstack"/>
                  <img src={mysql} alt="tableau" className="skillstack"/>
                  <img src={py} alt="tableau" className="skillstack"/>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 팀원 : 7명</span>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 기간 : 2023.08.28. ~ 2022.10.06.</span>
                </div>
                <div className="detailcontaxt">
                  <span>맡은 업무 : PC 및 랩탑 추천 페이지와 주변기기 검색화면 구현</span>
                </div>
                <div className="detailcontaxt">
                  <span>크롤링한 빅데이터를 머신러닝을 통해 분류, 사용자가 입력한 조건에 가장 잘 부합하는 견적을 내는것이 목적인 프로젝트.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={pcre1} alt="" className="detailImg" />
                  <img src={pcre2} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>사용자의 요구사항을 위해 다양한 종류의 컨트롤이 사용되고, 이를 저장해뒀다가 한번에 서버로 넘기는 방식 채용.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={pcre4} alt="" className="detailImg" />
                  <img src={pcre3} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>추가적으로 부품 뿐만 아리라 컴퓨터 주변기기를 검색할 수 있도록 구성. 그 외 로그인 페이지의 초안 등을 추가로 담당.</span>
                </div>
              </div>
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
              <button onClick={projectDetailThr} className="detailBtn" >프로젝트 상세</button>
              <div className={`${projectDetailValue === 3? 'projectDetail': 'hideDetail'}`}>
              <div className="detailcontaxt">
                  <span>주요기술스택 : </span>
                  <img src={js} alt="scikit" className="skillstack"/>
                  <img src={react} alt="scikit" className="skillstack"/>
                  <img src={java} alt="" className="skillstack"/>
                  <img src={spring} alt="tableau" className="skillstack"/>
                  <img src={rtc} alt="tableau" className="skillstack"/>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 팀원 : 6명</span>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 기간 : 2022.07.17. ~ 2022.08.25.</span>
                </div>
                <div className="detailcontaxt">
                  <span>맡은 업무 : 화상채팅화면 구현, 화상채팅 내 텍스트 채팅 구현, 화면공유 구현</span>
                </div>
                <div className="detailImgDiv">
                  <img src={view1} alt="" className="detailImg" />
                  <img src={view2} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>웹RTC를 이용해서 화상채팅 구현. 이때 주요기능인 캠화면 이동 등 자유로운 레이아웃을 위해 기존 라이브러리는 사용하지 않음.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={view3} alt="" className="detailImg" />
                  <img src={view4} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>화상채팅시 택스트 채팅도 가능하도록 하고 내 화면에서 변동된 사항을 다른 사용자에게도 피드백 하도록 구현.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={view6} alt="" className="detailImg" />
                  <img src={view5} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>캠화상 외 현재 보고있는 화면을 공유할 수 있도록 하고, 공유화면이 전체화면일 경우 발화자의 캠화면이 발화시에만 나타나도록 구현.</span>
                </div>
              </div>
            </div>
            <section id="4">
              <h2>MBCD</h2>
            </section>
            <div className="projects">
              <h3>SSAFY-관통 프로젝트(MBCD-영화 추천 웹사이트)</h3>
              <img src={mbcd} alt="mbcd" className="ppt" />
              <img src={mbcd2} alt="mbcd2" className="ppt" />
              <p>오픈 API를 통해 영화를 추천하는 웹서비스</p>
              <p>프론트엔드 뿐만 아니라 백엔드까지 구성했던 프로젝트</p>
              <button onClick={projectDetailFou} className="detailBtn" >프로젝트 상세</button>
              <div className={`${projectDetailValue === 4? 'projectDetail': 'hideDetail'}`}>
              <div className="detailcontaxt">
                  <span>주요기술스택 : </span>
                  <img src={py} alt="python" className="skillstack"/>
                  <img src={dj} alt="scikit" className="skillstack"/>
                  <img src={vu} alt="scikit" className="skillstack"/>
                  <img src={sqllite} alt="scikit" className="skillstack"/>
                  <img src={boot} alt="tableau" className="skillstack"/>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 팀원 : 2명</span>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 기간 : 2022.05.17. ~ 2022.05.26.</span>
                </div>
                <div className="detailcontaxt">
                  <span>맡은 업무 : 회원가입, 로그인, 마이페이지 등 유저관리 기능 및 화면구현</span>
                </div>
                <div className="detailcontaxt">
                  <span>Django REST Framework & Vue API를 이용한 간단한 웹서비스 제작 프로젝트.</span>
                </div>
                <div className="detailImgDivV">
                  <img src={movie1} alt="" className="detailImgV" />
                  <img src={movie2} alt="" className="detailImgV" />
                </div>
                <div className="detailcontaxt">
                  <span>django rest auth를 통해 로그인 기능을 구현하고, sqllite로 데이터를 관리.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={movie3} alt="" className="detailImg" />
                  <img src={movie5} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>부트스트랩과 vue2를 이용해 프론트구성. vuex로 상태관리.</span>
                </div>
              </div>
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
                분석결과를 발표하는 프로젝트로 머신러닝을 통해 아파트 가격 변동에 영향을 미치는 피쳐값을 찾아내는 것을 목표로 함
              </p>
              <button onClick={projectDetailFiv} className="detailBtn" >프로젝트 상세</button>
              <div className={`${projectDetailValue === 5? 'projectDetail': 'hideDetail'}`}>
                <div className="detailcontaxt">
                  <span>주요기술스택 : </span>
                  <img src={py} alt="python" className="skillstack"/>
                  <img src={sci} alt="scikit" className="skillstack"/>
                  <img src={tb} alt="tableau" className="skillstack"/>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 팀원 : 4명</span>
                </div>
                <div className="detailcontaxt">
                  <span>프로젝트 기간 : 2022.07. ~ 2022.09.</span>
                </div>
                <div className="detailcontaxt">
                  <span>맡은 업무 : 데이터 수집/ 정제, 데이터 분석, 시각화</span>
                </div>
                <div className="detailcontaxt">
                  <span>공공데이터포털 외 여러 곳에서 수집한 약 2만개의 데이터를 전처리하는데 무게가 실린 프로젝트.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={ml1} alt="" className="detailImg" />
                  <img src={ml2} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>데이터 전처리를 위해 pandas라이브러리가 사용되었으며, 역세권 등을 판별하기 위해 geopy라이브러리로 위경도값 산출.</span>
                </div>
                <div className="detailImgDiv">
                  <img src={ml3} alt="" className="detailImg" />
                  <img src={ml4} alt="" className="detailImg" />
                </div>
                <div className="detailcontaxt">
                  <span>회귀분석을 통해 유의미한 피쳐값을 찾고 군집분석을 통해 실제 변동이 일어난 군집을 확인, 시각화하는것으로 마무리.</span>
                </div>
              </div>
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
