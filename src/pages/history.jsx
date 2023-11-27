import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/history.css";
import github from "../img/image.png";
import { motion } from "framer-motion";

function History() {
  const [hover, setHover] = useState(false);
  const [currentColor, setCurrentColor] = useState({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  });

  const handleMouseOver = () => {
    setHover(true);
    console.log(hover);
  };

  const handleMouseOut = () => {
    setHover(false);
    console.log(hover);
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
  return (
    <div className="App">
      <div className="right-scroll">
        <Link to="/" className="back">
          메인으로
        </Link>
        <motion.div
          /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div>
            <h2>학력 상세</h2>
          </div>
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
          <div>
            <h2>병력 사항</h2>
          </div>
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
          <div>
            <h2>교육 사항</h2>
          </div>
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
          <br />
        </motion.div>
      </div>
      <div className="left">
        <div className="index">
          <h2>목차</h2>
        </div>
        <hr />
        <div className="content">
          <Link to="/skills" className="link">
            기술스택
          </Link>
          <Link to="/projects" className="link">
            프로젝트
          </Link>
          <Link to="/history" className="s-link">
            이력사항
          </Link>
        </div>
        <hr />
        <div className="github">
          <img
            src={github}
            alt="github"
            className="icon"
            style={{
              backgroundColor: hover
                ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                    currentColor.g
                  )}, ${Math.floor(currentColor.b)})`
                : "inherit",
              transition: "background-color 0.2s ease",
            }}
          />
          <a
            href="https://github.com/rockingfisher"
            className="git"
            id="git"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{
              color: hover
                ? `rgb(${Math.floor(currentColor.r)}, ${Math.floor(
                    currentColor.g
                  )}, ${Math.floor(currentColor.b)})`
                : "inherit",
              transition: "background-color 0.5s ease",
            }}
          >
            https://github.com/rockingfisher
          </a>
        </div>
      </div>
    </div>
  );
}

export default History;
