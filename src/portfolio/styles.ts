// ═══════════════════════════════════════════════════════
// GLOBAL CSS
// ═══════════════════════════════════════════════════════
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#080808!important;color:#F0F0F0;font-family:'Instrument Sans',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}

::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#080808}
::-webkit-scrollbar-thumb{background:#B4FF6F;border-radius:2px}
::selection{background:rgba(180,255,111,.2);color:#B4FF6F}

@keyframes pulseRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.4);opacity:0}}
@keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.nav-a{position:relative}
.nav-a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:#B4FF6F;transition:width .25s ease}
.nav-a:hover::after,.nav-a.act::after{width:100%}

input,textarea{font-family:'Instrument Sans',sans-serif}
input::placeholder,textarea::placeholder{color:#404040}
input:focus,textarea:focus{outline:none;border-color:rgba(180,255,111,.5)!important;box-shadow:0 0 0 3px rgba(180,255,111,.08)!important}

@media(max-width:768px){
  .dsk-nav{display:none!important}
  .hero-h{font-size:clamp(48px,11vw,88px)!important;line-height:0.95!important;word-wrap:break-word;overflow-wrap:break-word}
  .two-col{grid-template-columns:1fr!important;gap:40px!important}
  .proj-grid{grid-template-columns:1fr!important}
  .stats-row{grid-template-columns:repeat(2,1fr)!important;gap:20px 32px!important}
  .sp{padding:72px 20px!important}
  body{cursor:auto!important}
}

@media(max-width:480px){
  .hero-h{font-size:clamp(32px,9.5vw,48px)!important;line-height:1!important}
  .stats-row{grid-template-columns:1fr!important;gap:16px!important}
  .sp{padding:60px 16px!important}
}
`;
