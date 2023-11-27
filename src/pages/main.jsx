import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import profile from "../img/그림1.jpg";
import github from "../img/image.png";
import { motion } from "framer-motion";

function Main() {
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
      <div className="right">
        <motion.div
          /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="just"
        >
          <h1>My Portfolio</h1>
          <div className="profile">
            <img src={profile} alt="error" className="me" />
            <div>
              <p>이름 : 류성하</p>
              <p>생년월일 : 1993.12.29.</p>
              <p>최종학력 : 국립안동대학교(행정학사)</p>
              <p>연락처 : 010-3952-1559</p>
              <p>E-mail : poi1229@hanmail.net</p>
            </div>
          </div>
          <div className="line">
            <p>저는,</p>
            <p>빠르게 배우고 적응하는</p>
            <p>프론트엔드 개발자</p>
            <span>류성하입니다.</span>
          </div>
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
          <Link to="/history" className="link">
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
              transition: "color 0.2s ease",
            }}
          >
            https://github.com/rockingfisher
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
