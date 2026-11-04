/* ================================================================
   lightbox.js — 스크린샷 크게 보기
   · 스크린샷 클릭 → 크게 보기
   · ‹ › 버튼, 키보드 ← →, 모바일 좌우 스와이프로 이전/다음
   · ✕ 버튼, 배경 클릭, Esc 로 닫기
   ================================================================ */
const Lightbox = (() => {
  const box = document.getElementById('lightbox');
  const img = box.querySelector('.lb-img');
  const title = box.querySelector('.lb-title');
  const count = box.querySelector('.lb-count');
  let images = [], index = 0, lastFocus = null;

  function show(i) {
    index = (i + images.length) % images.length; // 끝에서 처음으로 순환
    img.src = images[index];
    count.textContent = `${index + 1} / ${images.length}`;
    // 다음/이전 이미지 미리 불러오기
    [index + 1, index - 1].forEach(n => { new Image().src = images[(n + images.length) % images.length]; });
  }

  function open(list, start, name) {
    images = list;
    lastFocus = document.activeElement;
    title.textContent = name || '';
    box.classList.toggle('single', list.length < 2);
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    show(start);
    box.querySelector('.lb-close').focus();
  }

  function close() {
    box.hidden = true;
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  box.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  box.querySelector('.lb-close').addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box || e.target.classList.contains('lb-stage')) close(); });

  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'Escape') close();
  });

  // 모바일 스와이프
  let startX = null;
  box.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });

  return { open };
})();
