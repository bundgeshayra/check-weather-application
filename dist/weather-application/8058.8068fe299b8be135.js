"use strict";(self.webpackChunkweather_application=self.webpackChunkweather_application||[]).push([[8058],{8058:(y,v,p)=>{p.r(v),p.d(v,{startTapClick:()=>b});var i=p(6225),u=p(839);const b=s=>{if(void 0===i.d)return;let e,E,a,o=10*-h,r=0;const O=s.getBoolean("animated",!0)&&s.getBoolean("rippleEffect",!0),f=new WeakMap,L=t=>{o=(0,u.u)(t),R(t)},A=()=>{a&&clearTimeout(a),a=void 0,e&&(I(!1),e=void 0)},D=t=>{e||w(g(t),t)},R=t=>{w(void 0,t)},w=(t,n)=>{if(t&&t===e)return;a&&clearTimeout(a),a=void 0;const{x:d,y:c}=(0,u.v)(n);if(e){if(f.has(e))throw new Error("internal error");e.classList.contains(l)||_(e,d,c),I(!0)}if(t){const M=f.get(t);M&&(clearTimeout(M),f.delete(t)),t.classList.remove(l);const S=()=>{_(t,d,c),a=void 0};T(t)?S():a=setTimeout(S,k)}e=t},_=(t,n,d)=>{if(r=Date.now(),t.classList.add(l),!O)return;const c=P(t);null!==c&&(C(),E=c.addRipple(n,d))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},I=t=>{C();const n=e;if(!n)return;const d=m-Date.now()+r;if(t&&d>0&&!T(n)){const c=setTimeout(()=>{n.classList.remove(l),f.delete(n)},m);f.set(n,c)}else n.classList.remove(l)};i.d.addEventListener("ionGestureCaptured",A),i.d.addEventListener("touchstart",t=>{o=(0,u.u)(t),D(t)},!0),i.d.addEventListener("touchcancel",L,!0),i.d.addEventListener("touchend",L,!0),i.d.addEventListener("pointercancel",A,!0),i.d.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.u)(t)-h;o<n&&D(t)},!0),i.d.addEventListener("mouseup",t=>{const n=(0,u.u)(t)-h;o<n&&R(t)},!0)},g=s=>{if(void 0===s.composedPath)return s.target.closest(".ion-activatable");{const o=s.composedPath();for(let r=0;r<o.length-2;r++){const e=o[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},T=s=>s.classList.contains("ion-activatable-instant"),P=s=>{if(s.shadowRoot){const o=s.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return s.querySelector("ion-ripple-effect")},l="ion-activated",k=100,m=150,h=2500}}]);