document.documentElement.classList.add('js');
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
function closeMenu(){nav?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle?.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.querySelectorAll('.animation-toggle').forEach(button=>button.addEventListener('click',()=>{const img=document.getElementById(button.getAttribute('aria-controls'));const playing=button.getAttribute('aria-pressed')!=='true';img.src=playing?button.dataset.animation:button.dataset.poster;button.setAttribute('aria-pressed',String(playing));button.textContent=playing?'Stop animation':'Play animation';}));
