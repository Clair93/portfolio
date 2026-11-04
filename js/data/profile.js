/* ================================================================
   기본 프로필 · 소개 · 연락처
   ----------------------------------------------------------------
   · 상단(Hero), About, Contact 에 표시되는 내용입니다.
   · info 의 각 줄은 [항목, 값] 형식입니다. 줄을 추가/삭제해도 됩니다.
   ================================================================ */
const PROFILE = {
  name: "문재원",
  photo: "https://pds.saramin.co.kr/person/photo/2022/08/rfxujj_u25q-gdyhga_rfxujitxmagdyhgarfxujax07bgdyhgaIMG1007.jpg",

  // 상단 터미널에 순서대로 타이핑되는 명령어
  terminalCommands: ["whoami", "ls ./projects", "unity --build android"],

  // 상단 소개 문구 (줄마다 한 줄씩 표시)
  intro: [
    "개발과 창작을 사랑하는 개발자입니다.",
    "아이디어를 코드로, 현실로 만들어냅니다.",
  ],

  // About Me > 기본 정보
  info: [
    ["이름", "문재원"],
    ["나이", "만 33세"],
    ["거주지", "서울특별시 구로구"],
    ["분야", "개발자 (Developer)"],
  ],

  // About Me > 현재 상태
  status: [
    ["상태", "✅ 개인 프로젝트 진행 중"],
    ["역할", "Solo"],
    ["출시작", "SnowMan's Revenge"],
    ["플랫폼", "Google Play Store"],
  ],

  // Contact
  github: "https://github.com/Clair93",
  email: "mjw9313@gmail.com",
};
