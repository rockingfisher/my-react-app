import {Link} from 'react-router-dom';
import '../css/skills.css';
import github from '../img/image.png'
import py from '../img/py.png'
import js from '../img/js.png'
import ts from '../img/ts.png'
import re from '../img/re.png'
import rn from '../img/rn.png'
import vu from '../img/vu.png'
import gh from '../img/gh.png'
import gl from '../img/gl.png'
import st from '../img/st.svg'
import mm from '../img/mm.png'
import gr from '../img/gr.png'

function skills() {
  return (
    <div className="App">
      <div className='right-scroll'>
        <Link to="/" className='back' >메인으로</Link>
        <div>
          <h2>사용 언어</h2>
        </div>
        <div>
          <div className='level'>
            <img src={py} alt="python" />
            <p className='l1'>중</p>
            <p>django를 이용한 서버 구축 및 빅데이터 분석</p>
          </div>
          <div className='level'>
            <img src={js} alt="javascript" />
            <p className='l1'>중</p>
            <p>반응형 웹과 SPA 구축, UI 애니메이션 구현</p>
          </div>
          <div className='level'>
            <img src={ts} alt="typescript" />
            <p className='l1'>중하</p>
            <p>리액트 네이티브와 병용한 앱 구현</p>
          </div>
        </div>
        <div>
          <h2>프레임워크</h2>
        </div>
        <div>
          <div className='level'>
            <img src={re} alt="python" />
            <p className='l1'>중</p>
            <div>
              <p>웹소켓과 웹RTC를 이용한 실시간 통신</p>
              <p>CSS 와 JS를 응용한 UI 애니메이션</p>
            </div>
          </div>
          <div className='level'>
            <img src={rn} alt="javascript" />
            <p className='l1'>중하</p>
            <div>
              <p>라이브러리를 이용한 유저 토큰 관리</p>
            </div>
          </div>
          <div className='level'>
            <img src={vu} alt="typescript" />
            <p className='l1'>중하</p>
            <div>
              <p>CSS프레임워크 사용, 반응형 웹 구현</p>
            </div>
          </div>
        </div>
        <div>
          <h2>협업도구 및 버전관리</h2>
        </div>
        <div>
          <div className='level-a'>
            <img src={gh} alt="python" />
            <img src={gl} alt="python" />
            <img src={st} alt="python" />
            <img src={gr} alt="python" />
            <img src={mm} alt="python" />
          </div>
        </div>
      </div>
      <div className='left'>
        <div className='index'>
          <h2>목차</h2>
        </div>
        <hr />
        <div className='content'>
          <Link to="/skills" className='link' >기술스택</Link>
          <Link to="/projects" className='link' >프로젝트</Link>
          <Link to="/history" className='link' >이력사항</Link>
        </div>
        <hr />
        <div className='github'>
          <img src={github} alt="github" className='icon' />
          <a href="https://github.com/rockingfisher" className='git' id='git' >https://github.com/rockingfisher</a>  
        </div>
      </div>
    </div>
  );
}

export default skills;
