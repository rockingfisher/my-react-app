import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/skills.css";
import github from "../img/image.png";
import py from "../img/py.png";
import js from "../img/js.png";
import ts from "../img/ts.png";
import re from "../img/re.png";
import rn from "../img/rn.png";
import vu from "../img/vu.png";
import gh from "../img/gh.png";
import gl from "../img/gl.png";
import st from "../img/st.svg";
import mm from "../img/mm.png";
import gr from "../img/gr.png";
import jr from "../img/jr.png";
import fm from "../img/fm.png";
import ns from "../img/ns.png";
import { motion } from "framer-motion";

function Skills() {
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
            <h2>사용 언어</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>기술</th>
                <th>수준</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={py} alt="python" />
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
                  <img src={js} alt="javascript" />
                </td>
                <td>중</td>
                <td>반응형 웹과 SPA 구축, UI 애니메이션 구현</td>
              </tr>
              <tr>
                <td>
                  <img src={ts} alt="typescript" />
                </td>
                <td>중하</td>
                <td>리액트 네이티브와 병용한 앱 구현</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h2>프레임워크</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>기술</th>
                <th>수준</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={re} alt="python" />
                </td>
                <td>중</td>
                <td>
                  웹소켓과 웹RTC를 이용한 실시간 통신 <br /> CSS 와 JS를 응용한
                  UI 애니메이션
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
                  <img src={rn} alt="javascript" />
                </td>
                <td>중하</td>
                <td>
                  라이브러리를 이용한 유저 토큰 관리
                  <br />
                  <br />
                  리덕스를 이용한 상태관리와 네비게이터를 <br /> 이용한 스크린
                  전환
                </td>
              </tr>
              <tr>
                <td>
                  <img src={vu} alt="typescript" />
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
          <div>
            <h2>협업도구 및 버전관리</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="center">
                  <img src={gh} alt="python" />
                  <p>깃허브</p>
                </td>
                <td className="center">
                  <img src={gl} alt="python" />
                  <p>깃랩</p>
                </td>
                <td className="center">
                  <img src={st} alt="python" />
                  <p>소스트리</p>
                </td>
                <td className="center">
                  <img src={gr} alt="python" />
                  <p>게릿</p>
                </td>
                <td className="center">
                  <img src={mm} alt="python" />
                  <p>메타모스트</p>
                </td>
                <td className="center">
                  <img src={jr} alt="python" />
                  <p>지라</p>
                </td>
                <td className="center">
                  <img src={ns} alt="python" />
                  <p>노션</p>
                </td>
                <td className="center">
                  <img src={fm} alt="python" />
                  <p>피그마</p>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
        <br />
      </div>
      <div className="left">
        <div className="index">
          <h2>목차</h2>
        </div>
        <hr />
        <div className="content">
          <Link to="/skills" className="s-link">
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

export default Skills;
