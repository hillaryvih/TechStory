/*══ script.js══*/

/* ── Estado (carregado do localStorage) ── */
let temaAtual   = localStorage.getItem('ts_tema')      || 'dark';
let idiomaAtual = localStorage.getItem('ts_idioma')    || 'pt';
let carrinho    = JSON.parse(localStorage.getItem('ts_carrinho')  || '[]');
let favoritos   = JSON.parse(localStorage.getItem('ts_favoritos') || '[]');
let catAtiva    = 'all';
import { PRODUTOS } from './src/produtos.js';

document.addEventListener('DOMContentLoaded', () => {
  aplicarTema(temaAtual);
  atualizarIconeTema();
  aplicarIdioma();
  renderizarProdutos();
  atualizarBadges();
  iniciarScroll();
  iniciarIntro();
  bindEventos();
});


window.toggleFavorito = toggleFavorito;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.alterarQtd = alterarQtd;
window.removerDoCarrinho = removerDoCarrinho;
window.fecharDrawer = fecharDrawer;
window.renderizarFavoritos = renderizarFavoritos;

function iniciarIntro() {
  const el = document.getElementById('intro');
  setTimeout(() => el.classList.add('done'), 3500);
}

/* ══════════════════════════════════════════
   TEMA
   ══════════════════════════════════════════ */
function toggleTema() {
  temaAtual = temaAtual === 'dark' ? 'light' : 'dark';
  localStorage.setItem('ts_tema', temaAtual);
  aplicarTema(temaAtual);
  atualizarIconeTema();
}

function atualizarIconeTema() {
  const btn = document.getElementById('btn-theme');
  if (temaAtual === 'dark') {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" width="20" height="20"
           style="color:var(--text2)">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1"  x2="12" y2="3"/>  <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>   <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
      </svg>`;
    btn.className = 'icon-btn';
    btn.title = 'Ativar modo claro';
  } else {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" width="20" height="20"
           style="color:var(--text2)">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>`;
    btn.className = 'icon-btn';
    btn.title = 'Ativar modo escuro';
  }
}

/*==IDIOMA══*/
function toggleIdioma() {
  idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
  localStorage.setItem('ts_idioma', idiomaAtual);
  aplicarIdioma();
  renderizarProdutos();
  renderizarCarrinho();
  renderizarFavoritos();
}

function aplicarIdioma() {
  const t = TRADUCOES[idiomaAtual];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (t[k] !== undefined) el.placeholder = t[k];
  });

  document.getElementById('btn-lang').textContent = idiomaAtual.toUpperCase();
  document.documentElement.lang = idiomaAtual === 'pt' ? 'pt-BR' : 'en';
}

/* Atalho de tradução */
const t = (k) => TRADUCOES[idiomaAtual][k] ?? k;

/* ══════════════════════════════════════════
   PRODUTOS
   ══════════════════════════════════════════ */

/* Ícone de cartão (reutilizado nos cards) */
const CARD_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
  stroke-linecap="round" stroke-linejoin="round">
  <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
</svg>`;

/* Nomes das categorias para exibir no card */
const CAT_LABEL = {
  headsets:    { pt: 'Headset',         en: 'Headset' },
  keyboards:   { pt: 'Teclado',         en: 'Keyboard' },
  chairs:      { pt: 'Cadeira Gamer',   en: 'Gaming Chair' },
  accessories: { pt: 'Utensílio Gamer', en: 'Gamer Gear' },
};

function renderizarProdutos(cat) {
  if (cat !== undefined) catAtiva = cat;

  const lista = catAtiva === 'all'
    ? PRODUTOS
    : PRODUTOS.filter(p => p.categoria === catAtiva);

  const grid = document.getElementById('products-grid');
  grid.innerHTML = lista.map((p, i) => criarCard(p, i)).join('');

  atualizarCorações();
}

function criarCard(p, idx) {
  const nome  = p.nome[idiomaAtual];
  const desc  = p.desc[idiomaAtual];
  const preco = brl(p.preco);
  const parc  = brl(p.preco / 12);
  const fav   = favoritos.includes(p.id);
  const cat   = CAT_LABEL[p.categoria]?.[idiomaAtual] || '';

  return `
    <div class="product-card" style="animation-delay:${idx * 35}ms">
      <div class="card-img">
        <img
          src="${p.img}"
          alt="${nome}"
          loading="lazy"
          onerror="this.src='https://placehold.co/400x300/15152c/3d6bc9?text=TECH+Story'"
        />
        <button class="btn-fav-card ${fav ? 'active' : ''}"
                data-id="${p.id}"
                onclick="toggleFavorito(${p.id})"
                title="Favoritar">
          <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-info">
        <p class="card-cat">${cat}</p>
        <p class="card-name">${nome}</p>
        <p class="card-desc">${desc}</p>
        <div class="card-price">
          <span class="price-cash">${preco}</span>
          <span class="price-install">
            ${CARD_ICON}
            ${t('cartInstall')} ${parc} ${t('cartNoInterest')}
          </span>
        </div>
        <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
               stroke-linecap="round" stroke-linejoin="round" width="14" height="14">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          ${t('btnAdd')}
        </button>
      </div>
    </div>`;
}

function atualizarCorações() {
  document.querySelectorAll('.btn-fav-card').forEach(btn => {
    const id   = parseInt(btn.dataset.id);
    const ativ = favoritos.includes(id);
    btn.classList.toggle('active', ativ);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', ativ ? 'currentColor' : 'none');
  });
}

/*══CARRINHO==*/
function adicionarAoCarrinho(id) {
  const item = carrinho.find(i => i.id === id);
  item ? item.qty++ : carrinho.push({ id, qty: 1 });
  salvarCarrinho();
  atualizarBadges();
  mostrarToast(t('toastAdded'));
  animarBadge('cart-badge');
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(i => i.id !== id);
  salvarCarrinho();
  atualizarBadges();
  renderizarCarrinho();
}

function alterarQtd(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removerDoCarrinho(id); return; }
  salvarCarrinho();
  renderizarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem('ts_carrinho', JSON.stringify(carrinho));
}

function renderizarCarrinho() {
  const body   = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');

  if (!carrinho.length) {
    body.innerHTML = `<p class="empty-msg">${t('cartEmpty')}</p>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'flex';
  let total = 0;

  body.innerHTML = carrinho.map(item => {
    const p = PRODUTOS.find(x => x.id === item.id);
    if (!p) return '';
    const nome = p.nome[idiomaAtual];
    const sub  = p.preco * item.qty;
    total += sub;
    return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.img}" alt="${nome}"
             onerror="this.src='https://placehold.co/74x58/15152c/3d6bc9?text=TS'" />
        <div>
          <p class="cart-item-name">${nome}</p>
          <p class="cart-item-price">${brl(p.preco)} × ${item.qty} = <strong>${brl(sub)}</strong></p>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="alterarQtd(${item.id},-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="alterarQtd(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="btn-remove-item" onclick="removerDoCarrinho(${item.id})" title="${t('btnRemove')}">✕</button>
      </div>`;
  }).join('');

  document.getElementById('cart-total-cash').textContent    = brl(total);
  document.getElementById('cart-total-install').textContent = brl(total / 12);
}

/*==FAVORITOS==*/
function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
    animarBadge('fav-badge');
  }
  localStorage.setItem('ts_favoritos', JSON.stringify(favoritos));
  atualizarBadges();
  atualizarCorações();
}

function renderizarFavoritos() {
  const body = document.getElementById('fav-items');
  if (!favoritos.length) {
    body.innerHTML = `<p class="empty-msg">${t('favEmpty')}</p>`;
    return;
  }
  body.innerHTML = favoritos.map(id => {
    const p = PRODUTOS.find(x => x.id === id);
    if (!p) return '';
    const nome = p.nome[idiomaAtual];
    return `
      <div class="fav-item">
        <img class="fav-item-img" src="${p.img}" alt="${nome}"
             onerror="this.src='https://placehold.co/70x56/15152c/3d6bc9?text=TS'" />
        <div>
          <p class="fav-item-name">${nome}</p>
          <p class="fav-item-price">${brl(p.preco)}</p>
          <div class="fav-item-btns">
            <button class="btn-fav-cart"
                    onclick="adicionarAoCarrinho(${id}); fecharDrawer('fav-drawer')"
                    data-i18n="btnAddFromFav">${t('btnAddFromFav')}</button>
            <button class="btn-fav-rem"
                    onclick="toggleFavorito(${id}); renderizarFavoritos()"
                    data-i18n="btnRemove">${t('btnRemove')}</button>
          </div>
        </div>
      </div>`;
  }).join('');
}
function abrirDrawer(id) {
  if (id === 'cart-drawer') renderizarCarrinho();
  if (id === 'fav-drawer')  renderizarFavoritos();
  document.getElementById(id).classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function fecharDrawer(id) {
  document.getElementById(id).classList.remove('open');
  verificarOverlay();
}

function verificarOverlay() {
  const abertos = ['cart-drawer','fav-drawer'].some(
    d => document.getElementById(d).classList.contains('open')
  );
  if (!abertos) {
    document.getElementById('overlay').classList.remove('active');
    document.body.style.overflow = '';
  }
}

function abrirModal()  { document.getElementById('checkout-modal').classList.add('open'); }
function fecharModal() { document.getElementById('checkout-modal').classList.remove('open'); }

function fecharTudo() {
  fecharDrawer('cart-drawer');
  fecharDrawer('fav-drawer');
  fecharModal();
}

function atualizarBadges() {
  const totalCart = carrinho.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cart-badge').textContent = totalCart;
  document.getElementById('fav-badge').textContent  = favoritos.length;
}

function animarBadge(id) {
  const b = document.getElementById(id);
  b.classList.remove('pop');
  void b.offsetWidth;
  b.classList.add('pop');
}

let toastTimer;
function mostrarToast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

function iniciarScroll() {
 
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach(el => obs.observe(el));
}

/*==EVENTOS==*/
function bindEventos() {
  /* Tema e idioma */
  document.getElementById('btn-theme').addEventListener('click', toggleTema);
  document.getElementById('btn-lang').addEventListener('click', toggleIdioma);

  /* Logo → topo */
  document.getElementById('logo-link').addEventListener('click', e => {
    e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Favoritos */
  document.getElementById('btn-fav').addEventListener('click',  () => abrirDrawer('fav-drawer'));
  document.getElementById('close-fav').addEventListener('click', () => fecharDrawer('fav-drawer'));

  /* Carrinho */
  document.getElementById('btn-cart').addEventListener('click',   () => abrirDrawer('cart-drawer'));
  document.getElementById('close-cart').addEventListener('click', () => fecharDrawer('cart-drawer'));

  /* Overlay fecha tudo */
  document.getElementById('overlay').addEventListener('click', fecharTudo);

  /* Categorias */
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderizarProdutos(btn.dataset.cat);
    });
  });

  /* Cupom */
  document.getElementById('btn-coupon').addEventListener('click', () => {
    const msg = document.getElementById('coupon-msg');
    msg.classList.add('visible');
    setTimeout(() => msg.classList.remove('visible'), 4000);
  });

  /* Checkout */
  document.getElementById('btn-checkout').addEventListener('click', () => {
    aplicarIdioma();
    abrirModal();
  });
  document.getElementById('btn-modal-ok').addEventListener('click', fecharModal);
  document.getElementById('checkout-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) fecharModal();
  });

  /* Escape fecha tudo */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharTudo();
  });
}
function brl(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}