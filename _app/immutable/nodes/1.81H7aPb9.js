import{s as S,e as _,t as d,a as x,b as f,k as g,u as h,d as u,c as k,i as m,l as v,v as $,n as E,w as q}from"../chunks/scheduler.8JmcwMnH.js";import{S as w,i as y}from"../chunks/index.B5P41i1h.js";import{s as C}from"../chunks/entry.D6aKoHex.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),l=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=k(e),i=f(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return q(s,P,n=>r(0,o=n)),[o]}let F=class extends w{constructor(t){super(),y(this,t,z,j,S,{})}};export{F as component};
