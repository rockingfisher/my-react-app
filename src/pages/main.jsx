import {Link} from 'react-router-dom';
import '../css/main.css';
import profile from '../img/그림1.jpg'
import github from '../img/image.png'

function Main() {
  return (
    <div className="App">
      <div className='right'>
        <h1>My Portfolio</h1>
        <div className='profile'>
          <img src={profile} alt="error" className='me' />
          <div>
            <p>이름 : 류성하</p>
            <p>생년월일 : 1993.12.29.</p>
            <p>최종학력 : 국립안동대학교(행정학사)</p>
            <p>연락처 : 010-3952-1559</p>
            <p>E-mail : poi1229@hanmail.net</p>
          </div>
        </div>
          <div className='line'>
            <p>저는,</p>
            <p>빠르게 배우고 적응하는</p>
            <p>프론트엔드 개발자</p>
            <span>류성하입니다.</span>
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

export default Main;
