/* ================================================================
   main.js — 페이지 시작 시 실행 + 클릭 동작 연결
   ================================================================ */
const ALL_PROJECTS = [...PROJECTS, ...APPS];

renderCodeBackground();
renderProfile(PROFILE);
renderExperience(EXPERIENCE);
renderProjects(PROJECTS, 'projectCards', 'projectDetails', 'projects');
renderProjects(APPS, 'appCards', 'appDetails', 'apps');

/* ── 카드 클릭 → 해당 상세 내용으로 이동 ── */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  history.replaceState(null, '', '#' + id);
  if (el.classList.contains('detail')) {
    el.classList.remove('flash');
    void el.offsetWidth; // 효과 다시 시작
    el.classList.add('flash');
    setTimeout(() => el.classList.remove('flash'), 1600);
  }
}

document.addEventListener('click', e => {
  // 스크린샷 → 크게 보기
  const shot = e.target.closest('.shot');
  if (shot) {
    const p = ALL_PROJECTS.find(x => x.id === shot.dataset.gallery);
    Lightbox.open(p.detail.screenshots, Number(shot.dataset.index), p.title);
    return;
  }
  // "상세 내용 보기" / "↑ 카드로" 버튼
  const jump = e.target.closest('a[href^="#"]');
  if (jump && (jump.classList.contains('to-detail') || jump.classList.contains('back-btn'))) {
    e.preventDefault();
    goTo(jump.getAttribute('href').slice(1));
    return;
  }
  // 카드의 빈 곳 클릭 (외부 링크, 영상은 제외)
  const card = e.target.closest('.proj-card');
  if (card && !e.target.closest('a, button, iframe')) goTo(card.dataset.target);
});

/* ── 상단 터미널 타이핑 효과 ── */
(function typing() {
  const el = document.getElementById('typed');
  const cmds = PROFILE.terminalCommands;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = cmds[0]; return; }
  const wait = ms => new Promise(r => setTimeout(r, ms));
  (async () => {
    for (let i = 0; ; i = (i + 1) % cmds.length) {
      for (const ch of cmds[i]) { el.textContent += ch; await wait(85); }
      await wait(1800);
      while (el.textContent) { el.textContent = el.textContent.slice(0, -1); await wait(35); }
      await wait(400);
    }
  })();
})();

/* 주소에 #프로젝트 가 붙어서 들어오면 그 위치로 */
if (location.hash) setTimeout(() => goTo(location.hash.slice(1)), 300);
