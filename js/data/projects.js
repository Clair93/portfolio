/* ================================================================
   게임 프로젝트 (Projects 섹션)
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
const PROJECTS = [
  {
    id: "snowman",            // 상세 영역 주소 (#snowman)
    title: "SnowMan's Revenge",
    category: "모바일게임",
    icon: "https://play-lh.googleusercontent.com/DzwYB3pIvBUypUr_3eJGj96Ab3eTl6fTyZVhHf-S7d7jiMpHfyPrCpQucxwpoveC7dO_fCasRgST_vPUf_bFVRQ=w480-h960-rw",
    tags: ["Unity", "C#", "3D", "Dodge", "개인프로젝트", "구글 플레이 스토어 출시"],
    meta: [
      ["📅", "2026.04.01 – 2026.04.23 (약 23일)"],
      ["🎮", "장르: 회피형 게임"],
      ["📱", "플랫폼: Android (Google Play)"],
    ],
    youtube: "lpOlYOBH-10",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
      { label: "▶ Google Play에서 보기", url: "https://play.google.com/store/apps/details?id=com.dayofthemoon.snowmansrevenge" },
    ],
    detail: {
      intent: [
        "특정 구역에서만 회피하고 벗어날 수 없도록 설계",
        "당근을 발사하는 SnowMan들이 시간을 두고 랜덤하게 등장",
        "펭귄이 물고기를 먹으면 일시적으로 무적효과 제공",
      ],
      screenshots: [
        "img/snowman/Dodgeintro.JPG",
        "img/snowman/DodgeMode.JPG",
        "img/snowman/DodgeGame.JPG",
        "img/snowman/DodgeGame2.JPG",
        "img/snowman/DodgeGame3.JPG",
        "img/snowman/DodgeEnding.JPG",
      ],
      work: [
        {
          title: "1. 정해진 시간마다 등장하는 적 (Spawner System)",
          items: [
            "Random.Range()를 사용하여 SnowMan을 생성",
            "Quaternion 사용하여 플레이어를 따라 몸이 회전하도록 설정",
          ],
        },
        {
          title: "2. 아이템 구현 (OnTriggerEnter, Object Tag)",
          items: [
            "Tag가 Player인 오브젝트와 충돌 시 효과 발동",
            "isInvincible로 3초간 무적 상태 유지",
          ],
        },
      ],
      retro: [
        "유니티를 배운지 1주일 안되서 만든 게임이지만 많은 것을 배울 수 있었던 게임",
        "스크립트 오류 등 디버깅을 통해 해결을 해볼 수 있어서 좋았다.",
        "첫 플레이 스토어에 정식 등록 된 게임",
      ],
    },
  },

  {
    id: "virnect",            // 상세 영역 주소 (#virnect)
    title: "미래내일일경험",
    category: "Team Project",
    badges: ["👑 팀장", "🏆 금상 수상"],
    icon: "https://play-lh.googleusercontent.com/U71z8ARJH-Hhvu7QFD2Qvk0PrBIz9WTiA4HnP_CAIDqLC4IQEqs1p6TLfHuRNEw7eVeWf58UYnhQgzWAGj126UI=w240-h480-rw",
    tags: ["미래내일일경험 프로젝트", "AR", "팀프로젝트"],
    meta: [
      ["📅", "2026.05.18 – 2026.07.12"],
      ["⏱️", "총 8주 진행"],
      ["🏷️", "역할: 팀장 (Leader)"],
      ["🏆", "수상: 금상"],
      ["🔄", "완료"],
    ],
    youtube: "_c5XmK_zT80",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
    ],
    detail: {
      intent: "PC 업그레이드 수요는 높지만 고가 부품 파손 우려와 사설 수리점 이용에 대한 불안으로 자가 교체를 포기하는 사용자가 많다. 기존 2D 영상 매뉴얼의 시점 차이와 직관성 부족을 AR 안내로 보완하고자 하였다.",
      screenshots: [
        "img/virnect/VIRNECT1.JPG",
        "img/virnect/VIRNECT2.JPG",
        "img/virnect/VIRNECT3.JPG",
        "img/virnect/VIRNECT4.JPG",
        "img/virnect/VIRNECT5.JPG",
      ],
      resources: [
        { label: "🔗 발표PPT", url: "https://drive.google.com/file/d/1blQo_gfLzOYOzVKY-6AI6Hg0ldo4JstL/view?usp=drive_link" },
      ],
      work: [
        {
          title: "1. AR 콘텐츠 기획 및 디자인",
          items: [
            "PC조립 가이드 중 교체 부분 절차만 선별",
            "불필요한 내용은 제거하고, AR환경에 맞는 워크플로우 작성",
            "사용자 입장에서 편하게 사용하고 볼 수 있는 구조 설계",
          ],
        },
        {
          title: "2. XR VIRNECT Make&View 활용",
          items: [
            "버넥트 Make & View 를 사용하여 AR 콘텐츠를 제작하고 실행",
            "이미지 증강을 통한 모바일 뷰어 연결 및 실시간 콘텐츠 제공",
          ],
        },
        {
          title: "3. 사용자 경험(UX) 강화",
          items: [
            "메인보드에 3D 입체로 증강표시",
            "가이드 영상 및 TTS 제공",
            "실제 테스틑 통한 개선: 버튼 및 가이드 영상 위치 거리 문제 해결",
          ],
        },
      ],
      retro: [
        "노코드 기반의 툴을 처음 접하며 초반에 기능 습득에 어려움을 겪었지만, 점차 익숙해져 사용에 익숙해졌다.",
        "제일 어려운 부분은 월드 좌표를 기반으로 한 오브젝트 배치였는데 미세하게 배치하는 데 많은 테스트를 통해 해결할 수 있었다.",
        "실제 사용을 해보면서 가이드 영상이 어디에 배치되면 좋을지 TTS 음성 안내만 나오는 것과 글이 같이 나오는 것이 어떤 것이 더 좋은지 테스트를 통해 개선할 수 있었다.",
      ],
    },
  },

  {
    id: "unirun",            // 상세 영역 주소 (#unirun)
    title: "위인런:영웅들의 질주",
    category: "모바일게임",
    icon: "https://play-lh.googleusercontent.com/AjJ4bRFTyE3VmFKhBkyP1LXYeEb8mLocVgjeJkMoUEKIeFv4KH4AL4iVy3uGsUuzMq9pWbTYSWXYUdoLJPKdy5c=w480-h960-rw",
    tags: ["Unity", "C#", "2D", "UniRun", "개인프로젝트", "구글 플레이 스토어 출시예정"],
    meta: [
      ["📅", "2026.06.02 – 2026.06.30"],
      ["🎮", "장르: 횡스크롤 점프형 게임"],
      ["📱", "Android (Google Play)"],
    ],
    youtube: "9dX-jGunsVo",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
    ],
    detail: {
      intent: [
        "한글을 모티브로 한글이 한글이 가득한 게임을 기획",
        "한 번에 끝나면 난이도가 어려울 것 같아, 목숨을 추가하여 난이도를 조절",
        "배경음 또한 한국적인 느낌을 주는 요소로 기획",
      ],
      screenshots: [
        "img/unirun/UniRun1.JPG",
        "img/unirun/UniRun2.JPG",
        "img/unirun/UniRun3.JPG",
        "img/unirun/UniRun4.JPG",
        "img/unirun/UniRun5.JPG",
        "img/unirun/UniRun6.JPG",
      ],
      work: [
        {
          title: "1. 레이어 개념과 점수시스템",
          items: [
            "Sorting Layer로 화면에 먼저 보일 오브젝트를 설정",
            "Grounded를 사용하여 플레이어가 땅에 붙어있는지 확인하고, 다음 Platform을 밟으면 점수 시스템을 도입",
          ],
        },
        {
          title: "2. 달리는 듯한 모션 (Sprite Animation, BackgroundLoop)",
          items: [
            "transform.position.x <= width를 사용하여 화면이 계속 움직이도록 설정",
            "sprite animation을 더하여 마치 계속 달리는 듯한 느낌을 연출",
          ],
        },
        {
          title: "3. 장애물 및 아이템 구현 (OnTriggerEnter, Object Tag)",
          items: [
            "장애물 Script에 Tag가 Player인 오브젝트와 충돌 시 목숨 감소 및 게임 오버 발생하도록 설정",
            "OnTriggerEnter를 사용하여 Item과 충돌 시 속도 증가, 감소, 무적 효과를 부여",
          ],
        },
      ],
      retro: [
        "포토샵이나 프리미어에서 Layer 라는 개념이 여기서 사용되어 이해하는 것에는 크게 어려움이 없어서 다행이였다.",
        "업데이트를 추가한다면 캐릭터와 맵을 추가하고, 코인을 추가하여 먹었을 때 보유한 코인으로 아이템을 구매 또는 강화효과를 넣어 게임을 더 재밌게 만들고 싶다.",
      ],
    },
  },

  {
    id: "vr-beat-saber",            // 상세 영역 주소 (#vr-beat-saber)
    title: "VR Beat Saber",
    category: "VR게임",
    icon: "img/icons/VRbeatSaber.png",
    tags: ["Unity", "C#", "VR", "Beat Game", "개인프로젝트", "GameJolt · Itch.io 업로드"],
    meta: [
      ["📅", "2026.05.06 – 2026.06.16"],
      ["🎮", "장르: VR Beat Game"],
      ["📱", "플랫폼: GameJolt · Itch.io"],
    ],
    youtube: "8gbsfgdyqcA",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
      { label: "🎮 GameJolt에서 보기", url: "https://gamejolt.com/games/VRBeatSaber/1112648" },
      { label: "🕹️ Itch.io에서 보기", url: "https://clair93.itch.io/vr-beat-saber" },
    ],
    detail: {
      intent: [
        "플레이어가 음악을 선택하기 전 미리 들을 수 있는 기능을 제공",
        "음악의 비트에 맞게 노트가 나와 비트에 맞춰 게임을 할 수 있도록 설계",
      ],
      screenshots: [
        "img/vr-beat-saber/VRBS1.JPG",
        "img/vr-beat-saber/VRBS2.JPG",
        "img/vr-beat-saber/VRBS3.JPG",
        "img/vr-beat-saber/VRBS4.JPG",
        "img/vr-beat-saber/VRBS5.JPG",
      ],
      work: [
        {
          title: "1. 노트를 비트에 맞추는 작업 (오디오 실크 및 노트 생성 최적화)",
          items: [
            "Unity 내부 오디오 시스템의 한계로 외부 도구를 사용하여 음악을 비트에 맞추는 작업을 수행",
            "노트가 플레이어에게 도달하는 시간이 비트에 맞지 않아 노트 이동 속도와 거리를 기반으로 생성 타이밍 설정",
          ],
        },
        {
          title: "2. 비트게임에 맞는 음악 선택",
          items: [
            "외부에서 하이라이트 부분까지 제공하여 .previewClip 으로 음악선택 전 미리 듣기 구현",
          ],
        },
      ],
      retro: [
        "유니티 내부적으로 음악을 비트에 맞추려고 하였으나 한계가 있었고, 외부 프로그램의 도움을 받아 비트에 맞춰 노트를 생성할 수 있었다. 단, 플레이어 앞에까지 노트가 도달하는 시간과 노트가 생성되는 시간의 차이가 있어 플레이어가 노트를 치는 타이밍이 비트에 맞지 않는 문제가 발생하였고 여러번 테스트 끝에 비트에 맞출 수 있었다.",
        "UI 면에서 3D와 2D 게임처럼 UI를 설정하면 VR에 맞지 않는 UI가 되어 또 만들게 될 시 VR에 맞는 UI를 설정해야겠다고 느꼈다.",
      ],
    },
  },

  {
    id: "dustecho",            // 상세 영역 주소 (#dustecho)
    title: "DustEcho",
    category: "모바일게임",
    icon: "https://lh3.googleusercontent.com/wIDjK_s5xrh_bM4iMTJEBUdRTbiSXf0jZ5CKonqHOH6vnhQwmDEiU-uNXVvhPr18DmPicnE3PTjpTV9xkF7l",
    tags: ["Unity", "C#", "3D", "TPS", "개인프로젝트", "구글 플레이 스토어 출시예정"],
    meta: [
      ["📅", "기간 입력 예정"],
      ["🎮", "장르: TPS (3인칭 슈팅)"],
      ["📱", "플랫폼: Android (Google Play 출시 예정)"],
    ],
    youtube: "4SKpVD0E5cM",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
    ],
    detail: {
      intent: [
        "좀비를 잡는 게임을 생각하며 TPS 게임을 제작",
        "몰입감을 위해 기본 총알 수를 제한으로 두고 필드에서 획득할 수 있도록 기획",
        "밀리터리 컨셉으로 하늘에서 공중 보급이 나오도록 기획",
        "로비에서 강화 및 무기를 구매할 수 있도록 구성",
      ],
      screenshots: [
        "img/dustecho/dustecho1.png",
        "img/dustecho/dustecho2.png",
        "img/dustecho/dustecho3.png",
        "img/dustecho/dustecho4.png",
        "img/dustecho/dustecho5.png",
        "img/dustecho/dustecho6.png",
      ],
      work: [
        {
          title: "1. IK 작업으로 총과 손 위치 일치",
          items: [
            "코드를 먼저 작성한 후, 총 프리팹과 플레이어 손이 일치할 수 있도록 세팅",
            "애니메이션 작동 시 제대로 맞지 않는 점을 발견하여 IK 의존도를 조정하며 수정 완료",
          ],
        },
        {
          title: "2. ScriptableObject를 활용한 데이터 관리",
          items: [
            "좀비마다 각각의 스크립트로 체력, 속도, 공격력 등을 설정하는 것이 아닌 Data 파일로 설정",
            "총에도 똑같이 적용하여 스크립트를 간소화",
            "강화 작업은 Data 파일을 하나 더 만들어 적용될 수 있도록 수정",
          ],
        },
        {
          title: "3. Scoop Mode (듀얼 카메라)",
          items: [
            "카메라 하나로 설정하는 것이 아닌 카메라 한 대를 더 추가하여, Scoop 시 다른 카메라가 작동되도록 적용",
            "기존 카메라는 캐릭터 뒤를 비추고, Scoop일 때만 다른 카메라 한 대가 작동되도록 수정",
          ],
        },
      ],
      retro: [
        "Data를 알기 전까지는 각각의 스크립트 또는 인터페이스를 활용해야 하는 것으로 인지했으나, Scriptable로 할 수 있고 서버와 연결한다면 서버에서 관리할 수 있다는 것을 알게 되어 서버에 대해서도 알아가는 중이다.",
        "IK를 작업하면서 의존도 설정부터 Mask 설정까지 잘 해야 하며, 이 과정에서 애니메이션이 캐릭터와 맞지 않을 경우 편집을 통해 맞추는 작업을 해야 한다는 것도 알게 되었다.",
      ],
    },
  },

  {
    id: "vr-bowling",            // 상세 영역 주소 (#vr-bowling)
    title: "VR Bowling",
    category: "VR게임",
    icon: "img/icons/VR_Bowling.png",
    tags: ["Unity", "C#", "VR", "개인프로젝트", "GameJolt · Itch.io 업로드"],
    meta: [
      ["📅", "기간 입력 예정"],
      ["🎮", "장르: VR 볼링 (스포츠)"],
      ["🌐", "플랫폼: GameJolt · Itch.io"],
    ],
    youtube: "GUdTApEN7Sw",          // youtu.be/XXXX 의 XXXX, 없으면 ""
    links: [
      { label: "🎮 GameJolt에서 보기", url: "https://gamejolt.com/games/Leon-Bowling/1108833" },
      { label: "🕹️ Itch.io에서 보기", url: "https://clair93.itch.io/leon-bowling" },
    ],
    detail: {
      intent: [
        "단순히 공을 굴리고 핀을 쓰러뜨리는 구조만 있다면 심심하다고 생각하여 실제 볼링 구조를 반영",
        "배경음악을 넣어 음악을 들으면서 게임을 즐길 수 있도록 기획",
      ],
      screenshots: [
        "img/vr-bowling/VRBowling1.png",
        "img/vr-bowling/VRBowling2.png",
        "img/vr-bowling/VRBowling3.png",
        "img/vr-bowling/VRBowling4.png",
        "img/vr-bowling/VRBowling5.png",
      ],
      work: [
        {
          title: "1. 볼링공 리셋 기능 (Socket)",
          items: [
            "볼링공을 던진 뒤 새로 생성하는 것이 아니라, 소켓에 장착된 첫 위치값을 저장",
            "일정 거리를 벗어나면 볼링공이 다시 소켓 위치로 돌아오도록 설정",
          ],
        },
        {
          title: "2. 볼링공 추적 카메라 (Follow Camera)",
          items: [
            "메인 카메라가 아닌 오직 볼링공만 쫓는 Follow Camera 설정",
            "UI RawImage에 매핑하여 실시간 방송처럼 송출",
            "공이 던져진 순간부터 공을 추적하도록 설정",
          ],
        },
      ],
      retro: [
        "VR 볼링 게임을 만들면서 소켓 기능을 알게 되었고, 공을 던지거나 멀리 보냈을 때 파괴 후 다시 생성하는 것이 아니라 위치값을 저장하여 되돌아오게 하면 성능이나 비용 면에서 효율적이라고 느껴 사용하였다.",
      ],
    },
  },
];
