/*config/temas.jS*/

const TEMAS = {

  /*ESCURO*/
  dark: {
    '--bg':          '#09091a',
    '--bg-alt':      '#0e0e22',
    '--bg-card':     '#15152c',
    '--bg-surface':  '#111126',
    '--bg-store':    '#0c0c1f',    
    '--bg-drawer':   '#070d26',    
    '--border':      '#1e1e3c',
    '--border-draw': '#182045',
    '--primary':     '#3d6bc9',
    '--primary-h':   '#527adc',
    '--accent':      '#9e1f2e',
    '--accent-h':    '#b52636',
    '--text':        '#eaeaf8',
    '--text2':       '#8585a8',
    '--text3':       '#4a4a6a',
    '--shadow':      '0 4px 24px rgba(0,0,0,0.6)',
    '--shadow-lg':   '0 12px 48px rgba(0,0,0,0.8)',
  },

  /*CLARO*/
  light: {
    '--bg':          '#f4efe5',
    '--bg-alt':      '#faf7f0',
    '--bg-card':     '#ffffff',
    '--bg-surface':  '#ede8da',
    '--bg-store':    '#ece6d6',  
    '--bg-drawer':   '#f0edf8',   
    '--border':      '#ddd6c2',
    '--border-draw': '#cec8e8',
    '--primary':     '#2c55a8',
    '--primary-h':   '#1e4493',
    '--accent':      '#a82020',
    '--accent-h':    '#8e1818',
    '--text':        '#181830',
    '--text2':       '#525268',
    '--text3':       '#8a8aa2',
    '--shadow':      '0 4px 24px rgba(0,0,0,0.07)',
    '--shadow-lg':   '0 12px 48px rgba(0,0,0,0.13)',
  }
};

function aplicarTema(nome) {
  const vars = TEMAS[nome];
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute('data-theme', nome);
}
// Cria a lanterninha
const lantern = document.createElement('div');
lantern.className = 'lanterninha';
document.body.appendChild(lantern);

document.addEventListener('mousemove', (e) => {
  lantern.style.left = `${e.clientX}px`;
  lantern.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseleave', () => {
  lantern.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
  lantern.style.opacity = 
    document.documentElement.getAttribute('data-theme') === 'light' ? '0.28' : '0.72';
});