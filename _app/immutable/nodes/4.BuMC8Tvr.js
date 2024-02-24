import{s as ue,j as fe,a as L,e as w,h as de,d as h,c as E,b as x,k as P,g as F,f as $,i as D,l as C,m as X,o as Z,p as me,q as pe,r as he,t as se,u as oe,n as re}from"../chunks/scheduler.8JmcwMnH.js";import{S as _e,i as ge,b as Ce,c as V,a as A,m as G,t as T,d as $e,e as M,f as U,g as ve}from"../chunks/index.B5P41i1h.js";import{A as ye,a as be,C as we,e as ee,b as te,c as xe,d as k}from"../chunks/card_info.BM0SnIA8.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.POPgNpDh.js";function ne(r,t,n){const e=r.slice();return e[11]=t[n],e}function ke(r){let t;return{c(){t=se("Rules")},l(n){t=oe(n,"Rules")},m(n,e){D(n,t,e)},d(n){n&&h(t)}}}function Te(r){let t,n="<li>- Confirmed info is shown at the top</li> <li>- Tags are just specific in Card Text</li> <li>- Includes Curses, Statuses, Created Cards</li> <li>- Unplayable Cards will have a blank cost</li> <li>- There is no Daily Card yet but eventually</li> <li>- Have fun</li>";return{c(){t=w("ul"),t.innerHTML=n,this.h()},l(e){t=x(e,"UL",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-l3e8qe"&&(t.innerHTML=n),this.h()},h(){$(t,"class","list flex flex-col gap-2")},m(e,s){D(e,t,s)},p:re,d(e){e&&h(t)}}}function Ie(r){let t;return{c(){t=se("Info")},l(n){t=oe(n,"Info")},m(n,e){D(n,t,e)},d(n){n&&h(t)}}}function Le(r){let t,n="<li>Made by menddev in chat</li> <li>- I get my first ever a20 win the other day, it was on Ironclad :D</li> <li>- the ui is a big wip dont judge</li> <li>- let me know if you got any suggestions</li> <li>- also if you want me to make any other wordle type games im down</li> <li>- oh by the way no mobile layout yet because im lazy</li>";return{c(){t=w("ul"),t.innerHTML=n,this.h()},l(e){t=x(e,"UL",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1debdvr"&&(t.innerHTML=n),this.h()},h(){$(t,"class","list flex flex-col gap-2")},m(e,s){D(e,t,s)},p:re,d(e){e&&h(t)}}}function Ee(r){let t,n,e,s;return t=new te({props:{$$slots:{content:[Te],summary:[ke]},$$scope:{ctx:r}}}),e=new te({props:{$$slots:{content:[Le],summary:[Ie]},$$scope:{ctx:r}}}),{c(){V(t.$$.fragment),n=L(),V(e.$$.fragment)},l(o){A(t.$$.fragment,o),n=E(o),A(e.$$.fragment,o)},m(o,i){G(t,o,i),D(o,n,i),G(e,o,i),s=!0},p(o,i){const d={};i&16384&&(d.$$scope={dirty:i,ctx:o}),t.$set(d);const I={};i&16384&&(I.$$scope={dirty:i,ctx:o}),e.$set(I)},i(o){s||(T(t.$$.fragment,o),T(e.$$.fragment,o),s=!0)},o(o){M(t.$$.fragment,o),M(e.$$.fragment,o),s=!1},d(o){o&&h(n),U(t,o),U(e,o)}}}function ae(r){let t,n="You Win!";return{c(){t=w("div"),t.textContent=n},l(e){t=x(e,"DIV",{"data-svelte-h":!0}),F(t)!=="svelte-15orc5k"&&(t.textContent=n)},m(e,s){D(e,t,s)},d(e){e&&h(t)}}}function le(r){let t,n;return t=new xe({props:{hiddenCard:r[0],card:r[11]}}),{c(){V(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,s){G(t,e,s),n=!0},p(e,s){const o={};s&1&&(o.hiddenCard=e[0]),s&2&&(o.card=e[11]),t.$set(o)},i(e){n||(T(t.$$.fragment,e),n=!0)},o(e){M(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function Me(r){let t,n,e,s,o,i,d,I,S,y,j,q,_,l,b,m,Y='<div class="text-center text-2xl font-bold">Card</div> <div class="text-center text-2xl font-bold">Color</div> <div class="text-center text-2xl font-bold">Rarity</div> <div class="text-center text-2xl font-bold">Type</div> <div class="text-center text-2xl font-bold">Cost</div>',J,H,B,O,K;function ie(a){r[8](a)}let Q={options:r[4]};r[2]!==void 0&&(Q.input=r[2]),d=new ye({props:Q}),fe.push(()=>Ce(d,"input",ie)),d.$on("selection",r[6]),y=new be({props:{class:"hidden md:block",$$slots:{default:[Ee]},$$scope:{ctx:r}}});let p=r[3]&&ae();l=new we({props:{guesses:r[1],hiddenCard:r[0]}});let R=ee(r[1]),c=[];for(let a=0;a<R.length;a+=1)c[a]=le(ne(r,R,a));const ce=a=>M(c[a],1,1,()=>{c[a]=null});return{c(){t=L(),n=w("div"),e=w("div"),s=w("input"),o=L(),i=w("div"),V(d.$$.fragment),S=L(),V(y.$$.fragment),j=L(),p&&p.c(),q=L(),_=w("div"),V(l.$$.fragment),b=L(),m=w("span"),m.innerHTML=Y,J=L(),H=w("div");for(let a=0;a<c.length;a+=1)c[a].c();this.h()},l(a){de("svelte-9yz0ca",document.head).forEach(h),t=E(a),n=x(a,"DIV",{class:!0});var g=P(n);e=x(g,"DIV",{class:!0});var v=P(e);s=x(v,"INPUT",{class:!0,type:!0,name:!0}),o=E(v),i=x(v,"DIV",{class:!0,tabindex:!0});var N=P(i);A(d.$$.fragment,N),N.forEach(h),S=E(v),A(y.$$.fragment,v),j=E(v),p&&p.l(v),v.forEach(h),q=E(g),_=x(g,"DIV",{class:!0});var u=P(_);A(l.$$.fragment,u),b=E(u),m=x(u,"SPAN",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-19zvs2w"&&(m.innerHTML=Y),J=E(u),H=x(u,"DIV",{class:!0});var z=P(H);for(let W=0;W<c.length;W+=1)c[W].l(z);z.forEach(h),u.forEach(h),g.forEach(h),this.h()},h(){document.title="Spiredle Infinite",$(s,"class","text-black input autocomplete"),$(s,"type","search"),$(s,"name","autocomplete-search"),$(i,"class","card w-full md:max-h-72 max-h-48 overflow-y-scroll relative"),$(i,"tabindex","-1"),$(e,"class","md:w-1/5 w-full flex flex-col gap-2"),$(m,"class","grid grid-cols-5 gap-4"),$(H,"class","flex flex-col-reverse gap-4"),$(_,"class","md:w-4/5 w-full flex flex-col gap-2"),$(n,"class","flex md:flex-row flex-col w-full md:p-4 p-2 gap-4 min-h-screen")},m(a,f){D(a,t,f),D(a,n,f),C(n,e),C(e,s),X(s,r[2]),C(e,o),C(e,i),G(d,i,null),C(e,S),G(y,e,null),C(e,j),p&&p.m(e,null),C(n,q),C(n,_),G(l,_,null),C(_,b),C(_,m),C(_,J),C(_,H);for(let g=0;g<c.length;g+=1)c[g]&&c[g].m(H,null);B=!0,O||(K=[Z(s,"input",r[7]),Z(s,"keydown",r[5])],O=!0)},p(a,[f]){f&4&&s.value!==a[2]&&X(s,a[2]);const g={};!I&&f&4&&(I=!0,g.input=a[2],me(()=>I=!1)),d.$set(g);const v={};f&16384&&(v.$$scope={dirty:f,ctx:a}),y.$set(v),a[3]?p||(p=ae(),p.c(),p.m(e,null)):p&&(p.d(1),p=null);const N={};if(f&2&&(N.guesses=a[1]),f&1&&(N.hiddenCard=a[0]),l.$set(N),f&3){R=ee(a[1]);let u;for(u=0;u<R.length;u+=1){const z=ne(a,R,u);c[u]?(c[u].p(z,f),T(c[u],1)):(c[u]=le(z),c[u].c(),T(c[u],1),c[u].m(H,null))}for(ve(),u=R.length;u<c.length;u+=1)ce(u);$e()}},i(a){if(!B){T(d.$$.fragment,a),T(y.$$.fragment,a),T(l.$$.fragment,a);for(let f=0;f<R.length;f+=1)T(c[f]);B=!0}},o(a){M(d.$$.fragment,a),M(y.$$.fragment,a),M(l.$$.fragment,a),c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)M(c[f]);B=!1},d(a){a&&(h(t),h(n)),U(d),U(y),p&&p.d(),U(l),pe(c,a),O=!1,he(K)}}}function De(r,t,n){let e={},s=[],o=[],i,d=!1;function I(){k.forEach(b=>{o.unshift({label:b.name,value:b.name,keywords:b.name})});let l=Math.floor(Math.random()*k.length);n(0,e.CardName=k[l].name,e),n(0,e.CardColor=k[l].color,e),n(0,e.CardRarity=k[l].rarity,e),n(0,e.CardType=k[l].type,e),n(0,e.CardCost=k[l].cost,e),n(0,e.CardTags=k[l].tags,e)}function S(){let l={},b=!1;k.forEach(m=>{m.name.toLowerCase()===i.toLowerCase()&&(l.CardName=m.name,l.CardColor=m.color,l.CardRarity=m.rarity,l.CardType=m.type,l.CardCost=m.cost,l.CardTags=m.tags,b=!0)}),b&&(l.CardName===e.CardName&&l.CardColor===e.CardColor&&l.CardRarity===e.CardRarity&&l.CardType===e.CardType&&l.CardCost===e.CardCost&&n(3,d=!0),s.push(l),n(1,s))}function y(l){l.code=="Enter"&&(S(),n(2,i=""))}function j(l){n(2,i=l.detail.label),S(),n(2,i="")}I();function q(){i=this.value,n(2,i)}function _(l){i=l,n(2,i)}return[e,s,i,d,o,y,j,q,_]}class Ve extends _e{constructor(t){super(),ge(this,t,De,Me,ue,{})}}export{Ve as component};