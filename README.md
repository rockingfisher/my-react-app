# 내 포트폴리오

## 서버켜는법
- poi1229.pem가 있는 폴더에서 터미널 열기
- ssh -i poi1229.pem ubuntu@3.21.33.10(뒤에 숫자는 ec2 퍼블릭 IPv4주소)(ec2를 껐다 키면 IPv4주소가 바뀜)
- ~~node server.js (node server.js &로 하면 터미널을 꺼도 서버가 살아있음)~~
- pm2로 이제 이제 서버가 완전히 백그라운드에서 동작하는 걸로 추정됨
- ~~도메인 연결 기다리는 중~~
- 도메인 연결 완료

## 해야할 일
- 디자인 수정 및 보완
- ~~도메인~~

## 배포를 위해 참고한 블로그
- aws부터 node.js까지
https://3d-yeju.tistory.com/63
- pm2
https://any-ting.tistory.com/74
