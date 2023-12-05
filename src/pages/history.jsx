import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/skills.css";
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
            <Link to="/projects" className="menu">
              <p> 프로젝트</p>
            </Link>
            <div className="menu-select">
              <p> 이력사항</p>
              <div className="underline" />
            </div>
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
                  학력 상세
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
                  병력 사항
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
                  경력 사항
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
                  교육 수료
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
                  수상 내역
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
              <h2>학력 상세</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>재학기간</th>
                    <th>학교명</th>
                    <th>학과명</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2012.03~2020.02</td>
                    <td>국립안동대학교</td>
                    <td>행정학과</td>
                    <td>졸업</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="2">
              <h2>병력 사항</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>복무기간</th>
                    <th>병과</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2013.04~2015.01</td>
                    <td>육군</td>
                    <td>병장(만기제대)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="3">
              <h2>경력 사항</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>근무기간</th>
                    <th>근무처</th>
                    <th>근무형태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2021.04~2021.12</td>
                    <td>경상북도 경제 진흥원</td>
                    <td>계약직</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="4">
              <h2>교육 수료</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>수료기간</th>
                    <th>과정명</th>
                    <th>주관기관</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2022.04~2022.09</td>
                    <td>빅데이터 분석 전문가 양성과정</td>
                    <td>경기도일자리재단</td>
                  </tr>
                  <tr>
                    <td>2023.01~2023.12</td>
                    <td>삼성 청년 소프트웨어 아카데미</td>
                    <td>삼성 / 멀티캠퍼스</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <section id="5">
              <h2>수상 내역</h2>
            </section>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>수상명</th>
                    <th>수상일자</th>
                    <th>주관기관</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SSAFY 자율프로젝트 우수상</td>
                    <td>2023.00.00.</td>
                    <td>삼성 청년 소프트웨어 아카데미</td>
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
