/* Release wheel/touch scrolling to the host page at embedded app boundaries. */
(()=>{if(parent===window)return;try{if(!/^\/solution\/ems\/?$/.test(parent.location.pathname))return}catch{return}
function canScroll(target,delta){for(let e=target instanceof Element?target:target?.parentElement;e;e=e.parentElement){const c=getComputedStyle(e);if(!/(auto|scroll)/.test(c.overflowY)||e.scrollHeight<=e.clientHeight+1)continue;if(delta<0&&e.scrollTop>1||delta>0&&e.scrollTop+e.clientHeight<e.scrollHeight-1)return true}return false}
function release(e,delta){if(!delta||canScroll(e.target,delta))return;if(e.cancelable)e.preventDefault();parent.scrollBy({top:delta,behavior:'instant'})}
addEventListener('wheel',e=>{if(!e.ctrlKey&&Math.abs(e.deltaY)>=Math.abs(e.deltaX))release(e,e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1))},{passive:false,capture:true});
let lastY;addEventListener('touchstart',e=>{lastY=e.touches.length===1?e.touches[0].clientY:undefined},{passive:true});addEventListener('touchmove',e=>{if(lastY===undefined||e.touches.length!==1)return;const y=e.touches[0].clientY,delta=lastY-y;lastY=y;release(e,delta)},{passive:false,capture:true});
})();
