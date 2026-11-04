/* ================================================================
   background.js — 배경 코드에 색을 입히고 줄번호를 붙여 흐르게 함
   (코드 내용 수정은 js/data/background-code.js 에서)
   ================================================================ */
function renderCodeBackground() {
  const el = document.getElementById('codeScroll');
  if (!el || typeof BACKGROUND_CODE === 'undefined') return;

  const KEYWORDS = /^(public|private|protected|class|void|float|int|bool|string|if|else|for|foreach|while|return|yield|new|true|false|null|var|static|using)$/;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 한 줄을 토큰 단위로 나눠 색상 클래스 부여
  const highlight = line => {
    const ci = line.indexOf('//');
    const code = ci >= 0 ? line.slice(0, ci) : line;
    const comment = ci >= 0 ? line.slice(ci) : '';
    const out = code.replace(/("[^"]*")|(\b\d+(?:\.\d+)?f?\b)|(\b[A-Za-z_]\w*\b)|([^"\w]+)/g, (m, str, num, word, other) => {
      if (str) return `<span class="s">${esc(str)}</span>`;
      if (num) return `<span class="n">${num}</span>`;
      if (word) {
        if (KEYWORDS.test(word)) return `<span class="k">${word}</span>`;
        if (/^[A-Z]/.test(word)) return `<span class="t">${word}</span>`;
        return word;
      }
      return esc(other);
    });
    return out + (comment ? `<span class="c">${esc(comment)}</span>` : '');
  };

  const lines = BACKGROUND_CODE.split('\n');
  const block = lines.map((l, i) => `<span class="ln">${i + 1}</span>${highlight(l)}`).join('\n');
  el.innerHTML = block + '\n' + block; // 두 번 이어 붙여 끊김 없이 반복
}
