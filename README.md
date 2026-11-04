# 문재원 포트폴리오

## 폴더 구조

```
portfolio/
├── index.html              ← 페이지 뼈대 (거의 수정할 일 없음)
│
├── js/data/                ← ★ 내용 수정은 대부분 여기서
│   ├── profile.js          이름, 소개 문구, 기본정보, 현재상태, 연락처
│   ├── experience.js       경력 사항
│   ├── projects.js         게임 프로젝트 (카드 + 상세 내용)
│   ├── apps.js             앱 개발 (카드 + 상세 내용)
│   └── background-code.js  배경에 흐르는 C# 코드
│
├── css/                    ← 디자인
│   ├── base.css            색상·폰트 변수(:root), 상단메뉴, Hero, About, 경력, 연락처
│   ├── background.css      IDE 코드 배경 (진하기, 속도)
│   ├── projects.css        프로젝트 카드, 상세 내용, 스크린샷 썸네일
│   └── lightbox.css        스크린샷 크게 보기 화면
│
├── js/                     ← 동작 (내용 수정 시 건드릴 필요 없음)
│   ├── background.js       배경 코드 색칠 + 스크롤
│   ├── render.js           data 내용을 화면으로 그림
│   ├── lightbox.js         스크린샷 크게 보기 / 이전·다음
│   └── main.js             시작 실행, 카드 → 상세 이동, 타이핑 효과
│
└── img/                    ← 프로젝트별 이미지 폴더
    ├── icons/              아이콘
    ├── snowman/  virnect/  unirun/
    └── vr-beat-saber/  dustecho/  vr-bowling/
```

## 자주 하는 작업

| 하고 싶은 것 | 수정할 곳 |
|---|---|
| 프로젝트 내용 수정 | `js/data/projects.js` 또는 `apps.js` 에서 해당 프로젝트 찾아 글자 수정 |
| 새 프로젝트 추가 | 같은 파일에서 `{ ... },` 블록 하나 복사 → 붙여넣기 → 내용 변경 (`id`는 영문, 겹치지 않게) |
| 스크린샷 추가 | `img/<프로젝트폴더>/` 에 파일 넣고 `screenshots` 목록에 경로 추가 |
| 유튜브 영상 추가/변경 | 프로젝트의 `youtube: "영상ID"` (youtu.be/**XXXX** 부분) |
| 경력 추가 | `js/data/experience.js` 에 한 줄 추가 |
| 소개/연락처 수정 | `js/data/profile.js` |
| 전체 색상 변경 | `css/base.css` 맨 위 `:root` |
| 배경 코드 진하기·속도 | `css/background.css` 의 `opacity`, `animation` 시간 |

## 주의
- 데이터 파일에서 글 안에 큰따옴표(`"`)를 쓰려면 `\"` 로 적어주세요.
- 각 항목 끝의 쉼표(`,`)를 지우지 않도록 주의하세요. 화면이 비어 보이면 대부분 쉼표/따옴표 문제입니다
  (브라우저에서 F12 → Console 에 오류 위치가 나옵니다).
