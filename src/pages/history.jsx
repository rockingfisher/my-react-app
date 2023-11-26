import {Link} from 'react-router-dom';
import '../css/history.css';
import github from '../img/image.png'

function history() {
  return (
    <div className="App">
      <div className='right-scroll'>
        <Link to="/" className='back' >메인으로</Link>
        <div>
          <h2>학력 상세</h2>
        </div>
        <div>
          <div className='level-b'>
            <p>2012.03~2020.02</p>
            <p>국립안동대학교</p>
            <p>행정학과</p>
            <p>졸업</p>
          </div>
        </div>
        <div>
          <h2>병력 사항</h2>
        </div>
        <div>
          <div className='level-b'>
            <p>2013.04~2015.01</p>
            <p>육군</p>
            <p>병장(만기제대)</p>
          </div>
        </div>
        <div>
          <h2>교육 사항</h2>
        </div>
        <div>
          <div className='level-c'>
            <p>2022.04~2022.09</p>
            <p>빅데이터 분석 전문가 양성과정</p>
            <p>경기도일자리재단</p>
          </div>
          <div className='level-c'>
            <p>2023.01~2023.12</p>
            <p>삼성 청년 소프트웨어 아카데미</p>
            <p>삼성 / 멀티캠퍼스</p>
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

export default history;
