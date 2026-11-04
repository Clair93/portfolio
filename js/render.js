/* ================================================================
   render.js — js/data/ 의 내용을 읽어서 화면을 그려주는 코드
   내용 수정은 이 파일이 아니라 js/data/ 의 파일에서 하면 됩니다.
   ================================================================ */

// HTML 특수문자 처리 (내용에 < > 가 있어도 깨지지 않도록)
const esc = s => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rows = list => list.map(([k, v]) => `<div class="row"><span class="key">${esc(k)}</span><span class="val">${esc(v)}</span></div>`).join('');

/* ── 프로필 / About / Contact ── */
function renderProfile(p) {
  document.getElementById('heroName').textContent = p.name;
  document.getElementById('heroIntro').innerHTML = p.intro.map(esc).join('<br>');
  document.getElementById('heroPhoto').src = p.photo;
  document.getElementById('infoRows').innerHTML = rows(p.info);
  document.getElementById('statusRows').innerHTML = rows(p.status);
  document.getElementById('contactBox').innerHTML = `
    <span class="key">github</span><span class="val"><a href="${esc(p.github)}" target="_blank" rel="noopener">${esc(p.github)}</a></span>
    <span class="key">email</span><span class="val">${esc(p.email)}</span>`;
}

/* ── 경력 ── */
function renderExperience(list) {
  document.getElementById('expList').innerHTML = list.map(e => `
    <div class="card exp-card">
      <div>
        <div class="exp-company">${esc(e.company)}</div>
        <div class="exp-role">${esc(e.role)}</div>
      </div>
      <div class="exp-period">${esc(e.start)} – ${esc(e.end || '재직중')}</div>
    </div>`).join('');
}

/* ── 프로젝트 카드 ── */
function categoryClass(cat) {
  if (/team/i.test(cat)) return 'tag-team';
  if (/앱/.test(cat)) return 'tag-app';
  return 'tag-game';
}

function cardHTML(p) {
  const badges = (p.badges || []).map(b => `<span class="tag tag-badge">${esc(b)}</span>`).join('');
  const yt = p.youtube
    ? `<div class="yt"><iframe src="https://www.youtube.com/embed/${esc(p.youtube)}" title="${esc(p.title)} 영상" loading="lazy" allowfullscreen allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe></div>`
    : '';
  const links = (p.links || []).map(l => `<a class="link-btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('');
  return `
    <article class="card proj-card" id="card-${esc(p.id)}" data-target="${esc(p.id)}">
      <div class="proj-head">
        <div>
          <div class="tags"><span class="tag ${categoryClass(p.category)}">${esc(p.category)}</span>${badges}</div>
          <div class="proj-title">${esc(p.title)}</div>
        </div>
        ${p.icon ? `<img class="proj-icon" src="${esc(p.icon)}" alt="${esc(p.title)} 아이콘" loading="lazy">` : ''}
      </div>
      <div class="proj-body">
        <div class="tags">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
        <ul class="meta">${p.meta.map(([i, t]) => `<li><span>${esc(i)}</span><span>${esc(t)}</span></li>`).join('')}</ul>
        ${yt}
        <div class="card-actions">
          ${p.detail ? `<a class="link-btn to-detail" href="#${esc(p.id)}">상세 내용 보기 ↓</a>` : ''}
          ${links}
        </div>
      </div>
    </article>`;
}

/* ── 프로젝트 상세 ── */
const bullets = list => `<ul class="bullets">${list.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
const block = (title, body) => `<div class="detail-block"><h4>${title}</h4>${body}</div>`;
const linkList = list => `<p class="detail-text site-list">${list.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('<br>')}</p>`;

function detailHTML(p, sectionId) {
  const d = p.detail;
  let html = '';
  if (d.intent) html += block('기획의도', Array.isArray(d.intent) ? bullets(d.intent) : `<p class="detail-text">${esc(d.intent)}</p>`);
  if (d.screenshots && d.screenshots.length) {
    html += block('프로젝트 스크린샷', `
      <div class="gallery${d.portrait ? ' portrait' : ''}">
        ${d.screenshots.map((src, i) => `<button type="button" class="shot" data-gallery="${esc(p.id)}" data-index="${i}" aria-label="${esc(p.title)} 스크린샷 ${i + 1} 크게 보기"><img src="${esc(src)}" alt="" loading="lazy"></button>`).join('')}
      </div>`);
  }
  if (d.resources) html += block('프로젝트 관련 자료', linkList(d.resources));
  if (p.links && p.links.length) html += block('배포 사이트', linkList(p.links));
  if (d.work) {
    html += block('프로젝트 개발 및 수행 내용',
      d.work.map(w => `<p class="work-title">${esc(w.title)}</p>${bullets(w.items)}`).join(''));
  }
  if (d.retro) html += block('회고', bullets(d.retro));

  const badges = (p.badges || []).filter(b => b.includes('🏆')).map(b => `<span class="tag tag-badge">${esc(b)}</span>`).join('');
  return `
    <article class="card detail" id="${esc(p.id)}">
      <div class="detail-head">
        ${p.icon ? `<img class="proj-icon" src="${esc(p.icon)}" alt="" loading="lazy">` : ''}
        <div>
          <div class="detail-path">~/${esc(sectionId)}/${esc(p.id)}</div>
          <div class="detail-title">${esc(p.title)} ${badges}</div>
        </div>
        <a class="back-btn" href="#card-${esc(p.id)}">↑ 카드로</a>
      </div>
      ${html}
    </article>`;
}

function renderProjects(list, cardsId, detailsId, sectionId) {
  document.getElementById(cardsId).innerHTML = list.map(cardHTML).join('');
  document.getElementById(detailsId).innerHTML = list.filter(p => p.detail).map(p => detailHTML(p, sectionId)).join('');
}
