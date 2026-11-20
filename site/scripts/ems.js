export function mountEnergyPage(emsPage) {
document.title='能源管理系统 EMS | Tier0 解决方案';
document.querySelector('[data-build-preview]').onclick=e=>{e.preventDefault();window.open('https://tier0.cn/login','_blank','noopener,noreferrer')};
const promptBox=emsPage.querySelector('#builder-prompt'), promptText=promptBox.defaultValue;
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
 let typed=0;promptBox.value='';
 const timer=setInterval(()=>{promptBox.value=promptText.slice(0,++typed);if(typed>=promptText.length)clearInterval(timer)},45);
 promptBox.addEventListener('focus',()=>{clearInterval(timer);if(typed<promptText.length)promptBox.value=promptText},{once:true});
}
const hero = emsPage.querySelector('#builder');
const stage = hero.parentElement;
const grid = document.querySelector('[data-mes-shell] > .framer-1o0p5mq-container');
const frame = hero.querySelector('.mes-hero-frame');
const app = hero.querySelector('.mes-hero-app');
function fitHero() {
  const desktop = innerWidth >= 1440;
  if (grid) {
    grid.classList.add('mes-native-hero-background');
    grid.removeAttribute('data-mes-hidden');
    const parent = desktop ? stage : hero;
    if (grid.parentElement !== parent) parent.prepend(grid);
  }
  if (desktop) {
    app.style.setProperty('--mes-desktop-preview-scale', (frame.clientWidth - 32) / 950);
    const height = hero.getBoundingClientRect().height;
    const padding = (Math.ceil((height + 96) / 50) * 50 - height) / 2 + 'px';
    stage.style.setProperty('--mes-grid-start-padding', padding);
    stage.style.setProperty('--mes-grid-end-padding', padding);
  } else {
    app.style.removeProperty('--mes-desktop-preview-scale');
    stage.removeAttribute('style');
  }
}
new ResizeObserver(fitHero).observe(hero);
addEventListener('resize',fitHero);
fitHero();
// Preserve the scaffold desktop viewport inside the scaled product-page demonstrations.
for (const preview of emsPage.querySelectorAll('.mes-feature-visual > iframe.ems-screen[src*="panel.html"]')) {
 const container=preview.parentElement;
 const fit=()=>{
   if (innerWidth<1100) {preview.style.cssText='';return;}
   const width=Math.max(856,container.clientWidth);
   const scale=container.clientWidth/width;
   preview.style.cssText='width:'+width+'px;max-width:none;height:'+container.clientHeight/scale+'px;transform-origin:top left;transform:scale('+scale+')';
 };
 new ResizeObserver(fit).observe(container);
 addEventListener('resize',fit);fit();
}
const namespace=emsPage.querySelector('#namespace');
const tree=namespace.querySelector('.namespace');
namespace.querySelectorAll('[data-uns-tab]').forEach(tab=>tab.onclick=()=>{
 const chat=tab.dataset.unsTab==='chat';
 tree.hidden=chat;
 namespace.querySelector('[data-uns-chat]').hidden=!chat;
 namespace.querySelectorAll('[data-uns-tab]').forEach(other=>other.setAttribute('aria-pressed',String(other===tab)));
});
tree.querySelectorAll('[data-topic]').forEach(button=>button.onclick=()=>{tree.querySelector('#topic-detail').textContent=button.dataset.topic});
const process=emsPage.querySelector('.process-viz');
const steps=[...process.querySelectorAll('button')];
const instructions=['记录超限点位、触发时间和阈值，交给当班负责人。','对齐班次、设备运行时段和仪表状态，记录异常原因。','填写处理结果，核对恢复后的读数并关闭告警。'];
steps.forEach((button,index)=>button.onclick=()=>{
 steps.forEach(step=>step.setAttribute('aria-pressed',String(step===button)));
 process.querySelector('p').textContent=instructions[index];
});
const fitNamespace=()=>namespace.style.setProperty('--ems-namespace-top',Math.min(80,innerHeight-namespace.offsetHeight-24)+'px');
new ResizeObserver(fitNamespace).observe(namespace);
addEventListener('resize',fitNamespace);fitNamespace();
const cards = [...emsPage.querySelectorAll('.mes-stack-card')];
let depthFrame=0;const depthState=new WeakMap();
function coverDepth(){
 depthFrame=0;
 const active=innerWidth>=1200&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
 // Read geometry once before changing styles; iframe surfaces make read/write interleaving costly.
 const tops=active?cards.map(card=>card.getBoundingClientRect().top):[];
 const retire=active&&tops.at(-1)<=80.5;
 cards.forEach((card,i)=>{
  const depth=active&&i<cards.length-1?Math.max(0,Math.min(1,(400-tops[i+1])/320)):0;
  const value=Math.round(depth*1000)/1000,retired=!!cards[i+1]&&retire;
  const old=depthState.get(card);
  if(!old||old.depth!==value){card.style.setProperty('--mes-depth-opacity',String(1-value*.78));card.style.setProperty('--mes-depth-blur',value*4+'px');card.classList.toggle('ems-depth-active',value>0&&value<1)}
  if(!old||old.retired!==retired)card.classList.toggle('mes-stack-retired',retired);
  depthState.set(card,{depth:value,retired});
 });
}
function scheduleDepth(){if(!depthFrame)depthFrame=requestAnimationFrame(coverDepth)}
addEventListener('scroll',scheduleDepth,{passive:true});addEventListener('resize',scheduleDepth);
coverDepth();

}
