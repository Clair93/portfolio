/* ================================================================
   앱 개발 (Apps 섹션)
   ----------------------------------------------------------------
   · 여기 있는 순서대로 카드와 상세 내용이 화면에 그려집니다.
   · 프로젝트 추가: 아래 { ... } 블록 하나를 복사해서 내용만 바꾸세요.
   · 이미지: img/<프로젝트폴더>/ 에 넣고 경로를 적어주세요.
   · 상세 항목(intent, resources, work, retro)은 없으면 지워도 됩니다.
     - intent  : 기획의도 (배열이면 목록, 문자열이면 문단)
     - resources : 관련 자료 링크
     - work    : 개발 및 수행 내용
     - retro   : 회고
   · links 는 카드 버튼 + 상세의 "배포 사이트"에 함께 쓰입니다.
   ================================================================ */
const APPS = [
  {
    id: "solpick",            // 상세 영역 주소 (#solpick)
    title: "솔픽",
    category: "앱개발",
    icon: "https://resources-fe.toss.im/image-optimize/width=198,quality=75/https%3A%2F%2Fstatic.toss.im%2Fappsintoss%2F94037%2Fmcp-images%2Fe43f7488-adcb-4c8b-aeea-aec3edb885fc%2F0.png",
    tags: ["앱개발", "개인프로젝트", "앱인토스 출시"],
    meta: [
      ["📅", "1일"],
      ["💡", "하루의 운세 등을 가볍게 볼 수 있는 앱"],
      ["📱", "플랫폼: 앱인토스 (토스 미니앱)"],
    ],
    youtube: "",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
      { label: "📲 앱인토스에서 보기", url: "https://tossminiapp.com/s/dAR2kAFo" },
    ],
    detail: {
      intent: [
        "하루의 운세 등 부담 없이 가볍게 즐길 수 있는 콘텐츠를 제공",
        "앱인토스에 출시하여 별도 설치 없이 토스 앱 안에서 바로 이용할 수 있도록 구성",
      ],
      screenshots: [
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/2.png",
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/3.png",
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/4.png",
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/5.png",
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/6.png",
        "https://static.toss.im/appsintoss/94037/mcp-images/e43f7488-adcb-4c8b-aeea-aec3edb885fc/7.png",
      ],
      portrait: true,          // 세로형 스크린샷
      work: [
        {
          title: "1. SOLID 원칙 기반 구조화 및 AI 협업 개발",
          items: [
            "초기 기획 단계에서 서비스의 핵심 가치와 화면별 노출 데이터를 구체적으로 정의한 후 개발에 착수했습니다. 객체지향 설계의 SOLID 원칙을 적용하여 모듈 간 의존성을 낮추고 확장성을 확보했으며, AI 스킬을 활용해 단계별로 시스템 구조를 다듬어 나갔습니다.",
          ],
        },
        {
          title: "2. 단계별 검증 및 앱인토스(App in Toss) 출시",
          items: [
            "AI와의 주기적인 코드 리뷰 및 기능 검토를 거쳐 불필요한 스펙은 덜어내고 필요한 로직을 신속히 추가하는 다듬기 작업을 수행했습니다. 철저한 예외 처리와 로컬 테스트를 거쳐 서비스 안정성을 확보한 후 앱인토스 환경에 성공적으로 등록·출시했습니다.",
          ],
        },
      ],
      retro: [
        "SOLID 원칙을 프로젝트 구조 설계에 직접 적용해 봄으로써 모듈의 독립성과 코드 재사용성의 중요성을 체감했습니다. 또한 AI를 단순 보조 도구가 아닌 기획·설계 검증 파트너로 적극 활용하여 개발 기간을 단축하고 제품 완성도를 높이는 파이프라인을 경험했습니다.",
      ],
    },
  },

  {
    id: "picknpick",            // 상세 영역 주소 (#picknpick)
    title: "픽앤뽑기",
    category: "앱개발",
    icon: "https://resources-fe.toss.im/image-optimize/width=198,quality=75/https%3A%2F%2Fstatic.toss.im%2Fappsintoss%2F94037%2Flive-managed-v1-55b0b4e7-6636-4206-ba68-5415693319b3.png",
    tags: ["앱개발", "개인프로젝트", "앱인토스 출시"],
    meta: [
      ["📅", "1주일"],
      ["💡", "사다리 · 룰렛 · 제비뽑기로 소소한 내기를 정하는 앱"],
      ["📱", "플랫폼: 앱인토스 (토스 미니앱)"],
    ],
    youtube: "",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
      { label: "📲 앱인토스에서 보기", url: "https://tossminiapp.com/s/ZzcPcKmg" },
    ],
    detail: {
      intent: [
        "친구나 지인과 밥값 내기, 커피 사기, 설거지, 청소 등 소소한 내기를 재미있고 공정하게 정할 수 있도록 기획",
        "사다리타기, 룰렛, 제비뽑기 등 상황에 맞게 고를 수 있는 다양한 뽑기 방식 제공",
        "앱인토스에 출시하여 토스 앱 안에서 바로 이용할 수 있도록 구성",
      ],
      screenshots: [
        "https://static.toss.im/appsintoss/94037/live-managed-v1-d69c0f18-417e-41bf-b665-1da54d67d529.png",
      ],
      portrait: true,          // 세로형 스크린샷
      work: [
        {
          title: "1. 아이디어 구체화 및 기획 고도화",
          items: [
            "기존에 구상했던 아이디어를 바탕으로 초기 기획서를 정교하게 도출하며 프로젝트를 시작했습니다. AI와의 상호 검토를 진행하며 사용자 동선과 기능 명세를 한 단계씩 구체화하고, 완성도를 극대화할 수 있는 요소들을 단계적으로 추가했습니다.",
          ],
        },
        {
          title: "2. 방향성 유지 및 오류 예방 중심 개발",
          items: [
            "기능 구현 과정에서 개발 방향성을 잃지 않도록 AI 스킬 기반 가이드를 적용하여 예외 상황과 런타임 오류를 선제적으로 점검했습니다. 기획과 구현 사이의 차이를 줄이는 피드백 루프를 통해 개발의 안정성을 유지하며 완성했습니다.",
          ],
        },
      ],
      retro: [
        "추상적인 아이디어를 구체적인 기획서로 디테일하게 발전시키는 프로세스를 확립했습니다. AI를 활용해 의도치 않은 로직 오류를 미리 차단하고 프로젝트의 본래 목적과 방향성을 단단하게 유지하며 개발을 이끌어내는 경험을 쌓았습니다.",
      ],
    },
  },
];
