import {Link} from 'react-router-dom';
import '../css/projects.css';
import github from '../img/image.png'
import p1 from '../img/p1.jpg'
import p11 from '../img/p11.jpg'
import p15 from '../img/p15.jpg'
import p20 from '../img/p20.jpg'
import p22 from '../img/p22.jpg'

function projects() {
  return (
    <div className="App">
      <div className='right-scroll'>
        <Link to="/" className='back' >메인으로</Link>
        <div>
          <h2>2022</h2>
          <div>
            <h3>아파트마트 - 아파트 거래 트랜드 탐색 모델링</h3>
            <img src={p1} alt="1" className='ppt' />
            <img src={p11} alt="11" className='ppt' />
            <img src={p15} alt="15" className='ppt' />
            <img src={p20} alt="20" className='ppt' />
            <img src={p22} alt="22" className='ppt' />
            <p>군집 분석을 이용한 서울시 아파트 매매가 변동추이 분석</p>
            <p>단순 분석결과를 발표하는 프로젝트로 발표자료를 제외한 산출물 없음</p>
          </div>
        </div>
        <div>
          <h2>2023</h2>
          <div>
            <h3>SSAFY-관통 프로젝트(MBCD-영화 추천 웹사이트)</h3>
            <p>오픈 API를 통해 영화를 추천하는 웹서비스</p>
            <p>vue2와 python으로 로그인과 유저의 마이페이지를 주로 담당</p>
            <p>프론트엔드 뿐만 아니라 백엔드까지 구성했던 프로젝트</p>
          </div>
          <div>
            <h3>SSAFY-공통 프로젝트(withview-화상 채팅 서비스)</h3>
            <p>url 추가예정</p>
            <p>기존 화상 채팅과 달리 본인의 캠화면을 자유롭게 움직일 수 있는 웹서비스</p>
            <p>배경과 스티커를 사용해 다양한 보드게임을 할 수 있음</p>
            <p>react를 사용해 화상 채팅 화면 구현과 화면공유 모드 구현을 담당</p>
            <p>화면공유 모드에서는 발화시에만 캠화면이 나오도록 구현 </p>
          </div>
          <div>
            <h3>SSAFY-특화 프로젝트(PC.GG-PC 및 주변기기 추천 웹사이트)</h3>
            <p>url 추가예정</p>
            <p>크롤링을 통해 모은 데이터를 머신러닝으로 분석해서 사용자가 원하는 수준의 견적 추천</p>
            <p>PC 견적뿐만 아니라 랩탑, 주변기기의 데이터도 검색가능</p>
            <p>vue3를 사용해 PC와 랩탑 추천, 주변기기 검색 화면 구현 담당</p>
            <p>디자인적 아쉬움이 남으나 다양한 버튼을 활용한 화면 구성</p>
          </div>
          <div>
            <h3>SSAFY-자율 프로젝트(꼬마화가-유아용 그림그리기 어플리케이션)</h3>
            <p>apk 다운로드 url 추가예정</p>
            <p>동물 그림그리기와 동화 읽어주기, 직접 찍은 사진을 그릴수 있는 기능을 추가해 재미요소를</p>
            <p>추가한 유아 소근육 발달 및 단어 학습 어플리케이션</p>
            <p>react-native와 typescript를 사용한 프론트엔트 담당</p>
            <p>주로 유저 관리와 토근 관리, TTS나 배경음악과 효과음 등을 담당함</p>
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

export default projects;
