import{_ as F}from"../chunks/preload-helper.a4192956.js";import{H as st}from"../chunks/control.f5b05b5f.js";import{s as lt}from"../chunks/scheduler.be0e0057.js";import{S as it,i as ct,q as X,g as h,s as S,m as I,r as Y,F as mt,h as v,f,c as V,j as w,n as O,u as ut,k as _,x as c,a as G,v as Z,o as N,t as x,b as _t,d as tt,B as ft,w as et,p as pt}from"../chunks/index.c7c9b348.js";import{e as at}from"../chunks/each.e59479a4.js";import{f as nt}from"../chunks/utils.2fdf1f5e.js";const dt=(n,e)=>{const s=n[e];return s?typeof s=="function"?s():Promise.resolve(s):new Promise((o,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function ht(n,e){return new st(n,e)}new TextEncoder;async function vt({params:n}){try{const e=await dt(Object.assign({"../../posts/environments.md":()=>F(()=>import("../chunks/environments.8a1f3b1d.js"),["../chunks/environments.8a1f3b1d.js","../chunks/scheduler.be0e0057.js","../chunks/index.c7c9b348.js"],import.meta.url),"../../posts/example.md":()=>F(()=>import("../chunks/example.a4732e5d.js"),["../chunks/example.a4732e5d.js","../chunks/scheduler.be0e0057.js","../chunks/index.c7c9b348.js"],import.meta.url),"../../posts/git.md":()=>F(()=>import("../chunks/git.12d30384.js"),["../chunks/git.12d30384.js","../chunks/scheduler.be0e0057.js","../chunks/index.c7c9b348.js"],import.meta.url)}),`../../posts/${n.slug}.md`);return{content:e.default,meta:e.metadata}}catch{throw ht(404,`Could not find ${n.slug}`)}}const jt=Object.freeze(Object.defineProperty({__proto__:null,load:vt},Symbol.toStringTag,{value:"Module"}));function ot(n,e,s){const o=n.slice();return o[1]=e[s],o}function rt(n){let e,s,o=n[1]+"",u;return{c(){e=h("span"),s=I("#"),u=I(o),this.h()},l(m){e=v(m,"SPAN",{class:!0});var p=w(e);s=O(p,"#"),u=O(p,o),p.forEach(f),this.h()},h(){_(e,"class","surface-4 svelte-7tvs4j")},m(m,p){G(m,e,p),c(e,s),c(e,u)},p(m,p){p&1&&o!==(o=m[1]+"")&&N(u,o)},d(m){m&&f(e)}}}function gt(n){let e,s,o,u,m,p,M,d,E,T,A=n[0].meta.title+"",R,q,y,L,D=nt(n[0].meta.date)+"",H,C,$,U,P,r,g;document.title=e=n[0].meta.title;let j=at(n[0].meta.categories),l=[];for(let t=0;t<j.length;t+=1)l[t]=rt(ot(n,j,t));var k=n[0].content;function J(t,i){return{}}return k&&(r=X(k,J())),{c(){s=h("meta"),o=h("meta"),m=h("meta"),M=S(),d=h("article"),E=h("hgroup"),T=h("h1"),R=I(A),q=S(),y=h("p"),L=I("Published at "),H=I(D),C=S(),$=h("div");for(let t=0;t<l.length;t+=1)l[t].c();U=S(),P=h("div"),r&&Y(r.$$.fragment),this.h()},l(t){const i=mt("svelte-1vn9r42",document.head);s=v(i,"META",{property:!0,content:!0}),o=v(i,"META",{property:!0,content:!0}),m=v(i,"META",{property:!0,content:!0}),i.forEach(f),M=V(t),d=v(t,"ARTICLE",{class:!0});var a=w(d);E=v(a,"HGROUP",{});var b=w(E);T=v(b,"H1",{class:!0});var K=w(T);R=O(K,A),K.forEach(f),q=V(b),y=v(b,"P",{class:!0});var z=w(y);L=O(z,"Published at "),H=O(z,D),z.forEach(f),b.forEach(f),C=V(a),$=v(a,"DIV",{class:!0});var Q=w($);for(let B=0;B<l.length;B+=1)l[B].l(Q);Q.forEach(f),U=V(a),P=v(a,"DIV",{class:!0});var W=w(P);r&&ut(r.$$.fragment,W),W.forEach(f),a.forEach(f),this.h()},h(){_(s,"property","og:type"),_(s,"content","article"),_(o,"property","og:title"),_(o,"content",u=n[0].meta.title),_(m,"property","og:image"),_(m,"content",p=n[0].meta.image),_(T,"class","svelte-7tvs4j"),_(y,"class","svelte-7tvs4j"),_($,"class","tags svelte-7tvs4j"),_(P,"class","prose"),_(d,"class","svelte-7tvs4j")},m(t,i){c(document.head,s),c(document.head,o),c(document.head,m),G(t,M,i),G(t,d,i),c(d,E),c(E,T),c(T,R),c(E,q),c(E,y),c(y,L),c(y,H),c(d,C),c(d,$);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m($,null);c(d,U),c(d,P),r&&Z(r,P,null),g=!0},p(t,[i]){if((!g||i&1)&&e!==(e=t[0].meta.title)&&(document.title=e),(!g||i&1&&u!==(u=t[0].meta.title))&&_(o,"content",u),(!g||i&1&&p!==(p=t[0].meta.image))&&_(m,"content",p),(!g||i&1)&&A!==(A=t[0].meta.title+"")&&N(R,A),(!g||i&1)&&D!==(D=nt(t[0].meta.date)+"")&&N(H,D),i&1){j=at(t[0].meta.categories);let a;for(a=0;a<j.length;a+=1){const b=ot(t,j,a);l[a]?l[a].p(b,i):(l[a]=rt(b),l[a].c(),l[a].m($,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=j.length}if(i&1&&k!==(k=t[0].content)){if(r){pt();const a=r;x(a.$$.fragment,1,0,()=>{et(a,1)}),_t()}k?(r=X(k,J()),Y(r.$$.fragment),tt(r.$$.fragment,1),Z(r,P,null)):r=null}},i(t){g||(r&&tt(r.$$.fragment,t),g=!0)},o(t){r&&x(r.$$.fragment,t),g=!1},d(t){t&&(f(M),f(d)),f(s),f(o),f(m),ft(l,t),r&&et(r)}}}function Et(n,e,s){let{data:o}=e;return n.$$set=u=>{"data"in u&&s(0,o=u.data)},[o]}class kt extends it{constructor(e){super(),ct(this,e,Et,gt,lt,{data:0})}}export{kt as component,jt as universal};
