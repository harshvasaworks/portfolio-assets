(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Ui(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function of(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},yu,en,Pe,Xn=1e8,Ee=1/Xn,hc=Math.PI*2,wm=hc/4,Am=0,lf=Math.sqrt,Rm=Math.cos,Cm=Math.sin,Je=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},Vi=function(t){return typeof t=="number"},bu=function(t){return typeof t>"u"},bi=function(t){return typeof t=="object"},yn=function(t){return t!==!1},Eu=function(){return typeof window<"u"},Ua=function(t){return ke(t)||Je(t)},cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,dc=/(?:-?\.?\d|\.)+/gi,uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hf=/[+-]=-?[.\d]+/,df=/[^,'"\[\]\s]+/gi,Pm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,pi,fc,Tu,On={},Ao={},ff,pf=function(t){return(Ao=bs(t,On))&&An},wu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},na=function(t,e){return!e&&console.warn(t)},mf=function(t,e){return t&&(On[t]=e)&&Ao&&(Ao[t]=e)||On},ia=function(){return 0},Lm={suppressEvents:!0,isStart:!0,kill:!1},lo={suppressEvents:!0,kill:!1},Dm={suppressEvents:!0},Au={},sr=[],pc={},gf,Dn={},ul={},vh=30,co=[],Ru="",Cu=function(t){var e=t[0],n,r;if(bi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=co.length;r--&&!co[r].targetTest(e););n=co[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new zf(t[r],n)))||t.splice(r,1);return t},Ar=function(t){return t._gsap||Cu(qn(t))[0]._gsap},_f=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():bu(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Xe=function(t){return Math.round(t*1e7)/1e7||0},ps=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},Im=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Ro=function(){var t=sr.length,e=sr.slice(0),n,r;for(pc={},sr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Pu=function(t){return!!(t._initted||t._startAt||t.add)},xf=function(t,e,n,r){sr.length&&!en&&Ro(),t.render(e,n,!!(en&&e<0&&Pu(t))),sr.length&&!en&&Ro()},vf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(df).length<2?e:Je(t)?t.trim():t},Mf=function(t){return t},Bn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Um=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},bs=function(t,e){for(var n in e)t[n]=e[n];return t},Mh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Co=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Zs=function(t){var e=t.parent||Ie,n=t.keyframes?Um(cn(t.keyframes)):Bn;if(yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Nm=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Sf=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},Zo=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},or=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Rr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Fm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},mc=function(t,e,n,r){return t._startAt&&(en?t._startAt.revert(lo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Om=function i(t){return!t||t._ts&&i(t.parent)},Sh=function(t){return t._repeat?Es(t._tTime,t=t.duration()+t._rDelay)*t:0},Es=function(t,e){var n=Math.floor(t=Xe(t/e));return t&&n===t?n-1:n},Po=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Jo=function(t){return t._end=Xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Qo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Jo(t),n._dirty||Rr(n,t)),t},yf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Po(t.rawTime(),e),(!e._dur||Ma(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Rr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},gi=function(t,e,n,r){return e.parent&&or(e),e._start=Xe((Vi(n)?n:n||t!==Ie?Gn(t,n,e):t._time)+e._delay),e._end=Xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Sf(t,e,"_first","_last",t._sort?"_start":0),gc(e)||(t._recent=e),r||yf(t,e),t._ts<0&&Qo(t,t._tTime),t},bf=function(t,e){return(On.ScrollTrigger||wu("scrollTrigger",e))&&On.ScrollTrigger.create(e,t)},Ef=function(t,e,n,r,s){if(Du(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!en&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gf!==In.frame)return sr.push(t),t._lazy=[s,r],1},Bm=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},gc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},km=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&Bm(t)&&!(!t._initted&&gc(t))||(t._ts<0||t._dp._ts<0)&&!gc(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=Ma(0,t._tDur,e),u=Es(l,o),t._yoyo&&u&1&&(a=1-a),u!==Es(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||en||r||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Ef(t,e,r,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&mc(t,e,n,!0),t._onUpdate&&!n&&Nn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Nn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&or(t,1),!n&&!en&&(Nn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},zm=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ts=function(t,e,n,r){var s=t._repeat,a=Xe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Xe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&Qo(t,t._tTime=t._tDur*o),t.parent&&Jo(t),n||Rr(t.parent,t),t},yh=function(t){return t instanceof _n?Rr(t):Ts(t,t._dur)},Vm={_start:0,endTime:ia,totalDuration:ia},Gn=function i(t,e,n){var r=t.labels,s=t._recent||Vm,a=t.duration()>=Xn?s.endTime(!1):t._dur,o,l,c;return Je(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Js=function(t,e,n){var r=Vi(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;a.immediateRender=yn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new We(e[0],a,e[s+1])},cr=function(t,e){return t||t===0?e(t):e},Ma=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!Je(t)||!(e=Pm.exec(t))?"":e[1]},Hm=function(t,e,n){return cr(n,function(r){return Ma(t,e,r)})},_c=[].slice,Tf=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==pi},Gm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Je(r)&&!e||Tf(r,1)?(s=n).push.apply(s,qn(r)):n.push(r)})||n},qn=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):Je(t)&&!n&&(fc||!ws())?_c.call((e||Tu).querySelectorAll(t),0):cn(t)?Gm(t,n):Tf(t)?_c.call(t,0):t?[t]:[]},xc=function(t){return t=qn(t)[0]||na("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qn(e,n.querySelectorAll?n:n===t?na("Invalid scope")||Tu.createElement("div"):t)}},wf=function(t){return t.sort(function(){return .5-Math.random()})},Af=function(t){if(ke(t))return t;var e=bi(t)?t:{each:t},n=Cr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,u=r,d=r;return Je(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,_){var g=(_||e).length,p=a[g],m,b,R,x,S,T,A,v,E;if(!p){if(E=e.grid==="auto"?0:(e.grid||[1,Xn])[1],!E){for(A=-Xn;A<(A=_[E++].getBoundingClientRect().left)&&E<g;);E<g&&E--}for(p=a[g]=[],m=l?Math.min(E,g)*u-.5:r%E,b=E===Xn?0:l?g*d/E-.5:r/E|0,A=0,v=Xn,T=0;T<g;T++)R=T%E-m,x=b-(T/E|0),p[T]=S=c?Math.abs(c==="y"?x:R):lf(R*R+x*x),S>A&&(A=S),S<v&&(v=S);r==="random"&&wf(p),p.max=A-v,p.min=v,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(E>g?g-1:c?c==="y"?g/E:E:Math.max(E,g/E))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=on(e.amount||e.each)||0,n=n&&g<0?Of(n):n}return g=(p[h]-p.min)/p.max||0,Xe(p.b+(n?n(g):g)*p.v)+p.u}},vc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=Xe(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Vi(n)?0:on(n))}},Rf=function(t,e){var n=cn(t),r,s;return!n&&bi(t)&&(r=n=t.radius||Xn,t.values?(t=qn(t.values),(s=!Vi(t[0]))&&(r*=r)):t=vc(t.increment)),cr(e,n?ke(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Xn,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-o,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?t[u]:a,s||u===a||Vi(a)?u:u+on(a)}:vc(t))},Cf=function(t,e,n,r){return cr(cn(t)?!e:n===!0?!!(n=0):!r,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Wm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},Xm=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},qm=function(t,e,n){return Lf(t,e,0,1,n)},Pf=function(t,e,n){return cr(n,function(r){return t[~~e(r)]})},Ym=function i(t,e,n){var r=e-t;return cn(t)?Pf(t,i(0,t.length),e):cr(n,function(s){return(r+(s-t)%r)%r+t})},$m=function i(t,e,n){var r=e-t,s=r*2;return cn(t)?Pf(t,i(0,t.length-1),e):cr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},ra=function(t){for(var e=0,n="",r,s,a,o;~(r=t.indexOf("random(",e));)a=t.indexOf(")",r),o=t.charAt(r+7)==="[",s=t.substr(r+7,a-r-7).match(o?df:dc),n+=t.substr(e,r-e)+Cf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Lf=function(t,e,n,r,s){var a=e-t,o=r-n;return cr(s,function(l){return n+((l-t)/a*o||0)})},Km=function i(t,e,n,r){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Je(t),o={},l,c,u,d,h;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(i(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else r||(t=bs(cn(t)?[]:{},t));if(!u){for(l in e)Lu.call(o,t,l,"get",e[l]);s=function(_){return Nu(_,o)||(a?t.p:t)}}}return cr(n,s)},bh=function(t,e,n){var r=t.labels,s=Xn,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Nn=function(t,e,n){var r=t.vars,s=r[e],a=Pe,o=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&sr.length&&Ro(),o&&(Pe=o),u=l?s.apply(c,l):s.call(c),Pe=a,u},qs=function(t){return or(t),t.scrollTrigger&&t.scrollTrigger.kill(!!en),t.progress()<1&&Nn(t,"onInterrupt"),t},ds,Df=[],If=function(t){if(t)if(t=!t.name&&t.default||t,Eu()||t.headless){var e=t.name,n=ke(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ia,render:Nu,add:Lu,kill:h0,modifier:u0,rawVars:0},a={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(ws(),t!==r){if(Dn[e])return;Bn(r,Bn(Co(t,s),a)),bs(r.prototype,bs(s,Co(t,a))),Dn[r.prop=e]=r,t.targetTest&&(co.push(r),Au[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}mf(e,r),t.register&&t.register(An,r,En)}else Df.push(t)},be=255,Ys={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},hl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},Uf=function(t,e,n){var r=t?Vi(t)?[t>>16,t>>8&be,t&be]:0:Ys.black,s,a,o,l,c,u,d,h,f,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ys[t])r=Ys[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&be,r&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match(dc),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=hl(l+1/3,s,a),r[1]=hl(l,s,a),r[2]=hl(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(uf),n&&r.length<4&&(r[3]=1),r}else r=t.match(dc)||Ys.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/be,a=r[1]/be,o=r[2]/be,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Nf=function(t){var e=[],n=[],r=-1;return t.split(ar).forEach(function(s){var a=s.match(hs)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},Eh=function(t,e,n){var r="",s=(t+r).match(ar),a=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Uf(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Nf(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(ar,"1").split(hs),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ar),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},ar=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ys)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Zm=/hsl[a]?\(/,Ff=function(t){var e=t.join(" "),n;if(ar.lastIndex=0,ar.test(e))return n=Zm.test(e),t[1]=Eh(t[1],n),t[0]=Eh(t[0],n,Nf(t[1])),!0},sa,In=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,_=function g(p){var m=i()-r,b=p===!0,R,x,S,T;if((m>t||m<0)&&(n+=m-e),r+=m,S=r-n,R=S-a,(R>0||b)&&(T=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,a+=R+(R>=s?4:s-R),x=1),b||(l=c(g)),x)for(f=0;f<o.length;f++)o[f](S,h,T,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){ff&&(!fc&&Eu()&&(pi=fc=window,Tu=pi.document||{},On.gsap=An,(pi.gsapVersions||(pi.gsapVersions=[])).push(An.version),pf(Ao||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Df.forEach(If)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,b){var R=m?function(x,S,T,A){p(x,S,T,A),d.remove(R)}:p;return d.remove(p),o[b?"unshift":"push"](R),ws(),R},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),ws=function(){return!sa&&In.wake()},ae={},Jm=/^[\d.\-M][\d.\-,\s]/,Qm=/["']/g,jm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(Qm,"").trim():+c,r=l.substr(o+1).trim();return e},t0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},e0=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[jm(e[1])]:t0(t).split(",").map(vf)):ae._CE&&Jm.test(t)?ae._CE("",t):n},Of=function(t){return function(e){return 1-t(1-e)}},Bf=function i(t,e){for(var n=t._first,r;n;)n instanceof _n?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},Cr=function(t,e){return t&&(ke(t)?t:ae[t]||e0(t))||e},kr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return bn(t,function(o){ae[o]=On[o]=s,ae[a=o.toLowerCase()]=n;for(var l in s)ae[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[o+"."+l]=s[l]}),s},kf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},dl=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/hc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*Cm((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:kf(o);return s=hc/s,l.config=function(c,u){return i(t,c,u)},l},fl=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:kf(n);return r.config=function(s){return i(t,s)},r};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;kr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;kr("Elastic",dl("in"),dl("out"),dl());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);kr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});kr("Circ",function(i){return-(lf(1-i*i)-1)});kr("Sine",function(i){return i===1?1:-Rm(i*wm)+1});kr("Back",fl("in"),fl("out"),fl());ae.SteppedEase=ae.steps=On.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((r*Ma(0,a,o)|0)+s)*n}}};ys.ease=ae["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ru+=i+","+i+"Params,"});var zf=function(t,e){this.id=Am++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_f,this.set=e?e.getSetter:Uu},aa=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ts(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),sa||In.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Qo(this,n),!s._dp||s.parent||yf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ee||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xf(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Es(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Jo(this),Fm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Dm);var r=en;return en=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,yh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,yh(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(Gn(this,n),yn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,yn(r)),this._dur||(this._zTime=-Ee),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this;return new Promise(function(s){var a=ke(n)?n:Mf,o=function(){var c=r.then;r.then=null,ke(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},t.kill=function(){qs(this)},i})();Bn(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var _n=(function(i){of(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yn(n.sortChildren),Ie&&gi(n.parent||Ie,Ui(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&bf(Ui(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Js(0,arguments,this),this},e.from=function(r,s,a){return Js(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Js(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(r,s,Gn(this,a),1),this},e.call=function(r,s,a){return gi(this,We.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new We(r,a,Gn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Zs(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},e.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,Zs(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xe(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,_,g,p,m,b,R,x,S,T,A;if(this!==Ie&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,x=this._start,R=this._ts,m=!R,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Xe(u%p),u===l?(g=this._repeat,h=c):(S=Xe(u/p),g=~~S,g&&g===S&&(h=c,g--),h>c&&(h=c)),S=Es(this._tTime,p),!o&&this._tTime&&S!==g&&this._tTime-S*p-this._dur<=0&&(S=g),T&&g&1&&(h=c-h,A=1),g!==S&&!this._lock){var v=T&&S&1,E=v===(T&&g&1);if(g<S&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Xe(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Bf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=zm(this,Xe(o),Xe(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!S&&(Nn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){b=0,_&&(u+=this._zTime=-Ee);break}}f=_}else{f=this._last;for(var D=r<0?r:h;f;){if(_=f._prev,(f._act||D<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,s,a||en&&Pu(f)),h!==this._time||!this._ts&&!m){b=0,_&&(u+=this._zTime=D?-Ee:Ee);break}}f=_}}if(b&&!s&&(this.pause(),b.render(h>=o?0:-Ee)._zTime=h>=o?1:-1,this._ts))return this._start=x,Jo(this),this.render(r,s,a);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&or(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Nn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Vi(s)||(s=Gn(this,s,r)),!(r instanceof aa)){if(cn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Je(r))return this.addLabel(r,s);if(ke(r))r=We.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Xn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof We?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Je(r)?this.removeLabel(r):ke(r)?this.killTweensOf(r):(r.parent===this&&Zo(this,r),r===this._recent&&(this._recent=this._last),Rr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xe(In.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Gn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=We.delayedCall(0,s||ia,a);return o.data="isPause",this._hasPause=1,gi(this,o,Gn(this,r))},e.removePause=function(r){var s=this._first;for(r=Gn(this,r);s;)s._start===r&&s.data==="isPause"&&or(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)nr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=qn(r),l=this._first,c=Vi(s),u;l;)l instanceof We?Im(l._targets,o)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=Gn(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=We.to(a,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ts(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,Bn({startAt:{time:Gn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),bh(this,Gn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),bh(this,Gn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Rr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Rr(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Xn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,gi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ts(a,a===Ie&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(Ie._ts&&(xf(Ie,Po(r,Ie)),gf=In.frame),In.frame>=vh){vh+=Fn.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&Fn.autoSleep&&In._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||In.sleep()}}},t})(aa);Bn(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var n0=function(t,e,n,r,s,a,o){var l=new En(this._pt,t,e,0,1,qf,null,s),c=0,u=0,d,h,f,_,g,p,m,b;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ra(r)),a&&(b=[n,r],a(b,t,e),n=b[0],r=b[1]),h=n.match(cl)||[];d=cl.exec(r);)_=d[0],g=r.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ps(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=cl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(hf.test(r)||m)&&(l.e=0),this._pt=l,l},Lu=function(t,e,n,r,s,a,o,l,c,u){ke(r)&&(r=r(s||0,t,a));var d=t[e],h=n!=="get"?n:ke(d)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ke(d)?c?o0:Wf:Iu,_;if(Je(r)&&(~r.indexOf("random(")&&(r=ra(r)),r.charAt(1)==="="&&(_=ps(h,r)+(on(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Mc)return!isNaN(h*r)&&r!==""?(_=new En(this._pt,t,e,+h||0,r-(h||0),typeof d=="boolean"?c0:Xf,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!d&&!(e in t)&&wu(e,r),n0.call(this,t,e,h,r,f,l||Fn.stringFilter,c))},i0=function(t,e,n,r,s){if(ke(t)&&(t=Qs(t,s,e,n,r)),!bi(t)||t.style&&t.nodeType||cn(t)||cf(t))return Je(t)?Qs(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Qs(t[o],s,e,n,r);return a},Vf=function(t,e,n,r,s,a){var o,l,c,u;if(Dn[t]&&(o=new Dn[t]).init(s,o.rawVars?e[t]:i0(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},nr,Mc,Du=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,b=m&&m.data==="nested"?m.vars.targets:p,R=t._overwrite==="auto"&&!yu,x=t.timeline,S,T,A,v,E,D,P,I,z,F,k,K,G;if(x&&(!h||!s)&&(s="none"),t._ease=Cr(s,ys.ease),t._yEase=d?Of(Cr(d===!0?s:d,ys.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(I=p[0]?Ar(p[0]).harness:0,K=I&&r[I.prop],S=Co(r,Au),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?lo:Lm),g._lazy=0),a){if(or(t._startAt=We.set(p,Bn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Nn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en||!o&&!f)&&t._startAt.revert(lo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),A=Bn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&yn(l),immediateRender:o,stagger:0,parent:m},S),K&&(A[I.prop]=K),or(t._startAt=We.set(p,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(en?t._startAt.revert(lo):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&yn(l)||l&&!_,T=0;T<p.length;T++){if(E=p[T],P=E._gsap||Cu(p)[T]._gsap,t._ptLookup[T]=F={},pc[P.id]&&sr.length&&Ro(),k=b===p?T:b.indexOf(E),I&&(z=new I).init(E,K||S,t,k,b)!==!1&&(t._pt=v=new En(t._pt,E,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(nt){F[nt]=v}),z.priority&&(D=1)),!I||K)for(A in S)Dn[A]&&(z=Vf(A,S,t,k,E,b))?z.priority&&(D=1):F[A]=v=Lu.call(t,E,A,"get",S[A],k,b,0,r.stringFilter);t._op&&t._op[T]&&t.kill(E,t._op[T]),R&&t._pt&&(nr=t,Ie.killTweensOf(E,F,t.globalTime(e)),G=!t.parent,nr=0),t._pt&&l&&(pc[P.id]=1)}D&&Yf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,h&&e<=0&&x.render(Xn,!0,!0)},r0=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Mc=1,t.vars[e]="+=0",Du(t,o),Mc=0,l?na(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=He(n)+on(d.e)),d.b&&(d.b=u.s+on(d.b))},s0=function(t,e){var n=t[0]?Ar(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=bs({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},a0=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(cn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Qs=function(t,e,n,r,s){return ke(t)?t.call(e,n,r,s):Je(t)&&~t.indexOf("random(")?ra(t):t},Hf=Ru+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gf={};bn(Hf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Gf[i]=1});var We=(function(i){of(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Zs(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,b=r.parent||Ie,R=(cn(n)||cf(n)?Vi(n[0]):"length"in r)?[n]:qn(n),x,S,T,A,v,E,D,P;if(o._targets=R.length?Cu(R):na("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||h||Ua(c)||Ua(u)){if(r=o.vars,x=o.timeline=new _n({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:R}),x.kill(),x.parent=x._dp=Ui(o),x._start=0,h||Ua(c)||Ua(u)){if(A=R.length,D=h&&Af(h),bi(h))for(v in h)~Hf.indexOf(v)&&(P||(P={}),P[v]=h[v]);for(S=0;S<A;S++)T=Co(r,Gf),T.stagger=0,m&&(T.yoyoEase=m),P&&bs(T,P),E=R[S],T.duration=+Qs(c,Ui(o),S,E,R),T.delay=(+Qs(u,Ui(o),S,E,R)||0)-o._delay,!h&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),x.to(E,T,D?D(S,E,R):0),x._ease=ae.none;x.duration()?c=u=0:o.timeline=0}else if(_){Zs(Bn(x.vars.defaults,{ease:"none"})),x._ease=Cr(_.ease||r.ease||"none");var I=0,z,F,k;if(cn(_))_.forEach(function(K){return x.to(R,K,">")}),x.duration();else{T={};for(v in _)v==="ease"||v==="easeEach"||a0(v,_[v],T,_.easeEach);for(v in T)for(z=T[v].sort(function(K,G){return K.t-G.t}),I=0,S=0;S<z.length;S++)F=z[S],k={ease:F.e,duration:(F.t-(S?z[S-1].t:0))/100*c},k[v]=F.v,x.to(R,k,I),I+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!yu&&(nr=Ui(o),Ie.killTweensOf(R),nr=0),gi(b,Ui(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===Xe(b._time)&&yn(d)&&Om(Ui(o))&&b.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-u)||0)),p&&bf(Ui(o),p),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Ee&&!u?l:r<Ee?0:r,h,f,_,g,p,m,b,R,x;if(!c)km(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,R=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(h=Xe(d%g),d===l?(_=this._repeat,h=c):(p=Xe(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(x=this._yEase,h=c-h),p=Es(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(R&&this._yEase&&Bf(R,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Xe(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ef(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(x||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!o&&d&&!s&&!p&&(Nn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;R&&R.render(r<0?r:R._dur*R._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&mc(this,r,s,a),Nn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&mc(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&or(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Nn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){sa||In.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Du(this,c),u=this._ease(c/this._dur),r0(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Qo(this,0),this.parent||Sf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?qs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!en),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,nr&&nr.vars.overwrite!==!0)._first||qs(this),this.parent&&a!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?qn(r):o,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&Nm(o,l))return s==="all"&&(this._pt=0),qs(this);for(d=this._op=this._op||[],s!=="all"&&(Je(s)&&(g={},bn(s,function(b){return g[b]=1}),s=g),s=s0(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Zo(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&qs(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Js(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Js(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return Ie.killTweensOf(r,s,a)},t})(aa);Bn(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(i){We[i]=function(){var t=new _n,e=_c.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Iu=function(t,e,n){return t[e]=n},Wf=function(t,e,n){return t[e](n)},o0=function(t,e,n,r){return t[e](r.fp,n)},l0=function(t,e,n){return t.setAttribute(e,n)},Uu=function(t,e){return ke(t[e])?Wf:bu(t[e])&&t.setAttribute?l0:Iu},Xf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},c0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qf=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Nu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},u0=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},h0=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Zo(this,e,"_pt"):e.dep||(n=1),e=r;return!n},d0=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Yf=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},En=(function(){function i(e,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Xf,this.d=l||this,this.set=c||Iu,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=d0,this.m=n,this.mt=s,this.tween=r},i})();bn(Ru+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Au[i]=1});On.TweenMax=On.TweenLite=We;On.TimelineLite=On.TimelineMax=_n;Ie=new _n({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Ff;var Pr=[],uo={},f0=[],Th=0,p0=0,pl=function(t){return(uo[t]||f0).map(function(e){return e()})},Sc=function(){var t=Date.now(),e=[];t-Th>2&&(pl("matchMediaInit"),Pr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=pi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),pl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Th=t,pl("matchMedia"))},$f=(function(){function i(e,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p0++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ke(n)&&(s=r,r=n,n=ke);var a=this,o=function(){var c=Pe,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=xc(s)),Pe=a,d=r.apply(a,arguments),ke(d)&&a._r.push(d),Pe=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===ke?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=Pe;Pe=null,n(this),Pe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof We&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof We)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Pr.length;a--;)Pr[a].id===this.id&&Pr.splice(a,1)},t.revert=function(n){this.kill(n||{})},i})(),m0=(function(){function i(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){bi(n)||(n={matches:n});var a=new $f(0,s||this.scope),o=a.conditions={},l,c,u;Pe&&!a.selector&&(a.selector=Pe.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Pr.indexOf(a)<0&&Pr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Sc):l.addEventListener("change",Sc)));return u&&r(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Lo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return If(r)})},timeline:function(t){return new _n(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,r){Je(t)&&(t=qn(t)[0]);var s=Ar(t||{}).get,a=n?Mf:vf;return n==="native"&&(n=""),t&&(e?a((Dn[e]&&Dn[e].get||s)(t,e,n,r)):function(o,l,c){return a((Dn[o]&&Dn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=qn(t),t.length>1){var r=t.map(function(u){return An.quickSetter(u,e,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}t=t[0]||{};var a=Dn[e],o=Ar(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;ds._pt=0,d.init(t,n?u+n:u,ds,0,[t]),d.render(1,d),ds._pt&&Nu(1,ds)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var r,s=An.to(t,Bn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Cr(t.ease,ys.ease)),Mh(ys,t||{})},config:function(t){return Mh(Fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Dn[o]&&!On[o]&&na(e+" effect requires "+o+" plugin.")}),ul[e]=function(o,l,c){return n(qn(o),Bn(l||{},s),c)},a&&(_n.prototype[e]=function(o,l,c){return this.add(ul[e](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Cr(e)},parseEase:function(t,e){return arguments.length?Cr(t,e):ae},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _n(t),r,s;for(n.smoothChildTiming=yn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,r=Ie._first;r;)s=r._next,(e||!(!r._dur&&r instanceof We&&r.vars.onComplete===r._targets[0]))&&gi(n,r,r._start-r._delay),r=s;return gi(Ie,n,0),n},context:function(t,e){return t?new $f(t,e):Pe},matchMedia:function(t){return new m0(t)},matchMediaRefresh:function(){return Pr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Sc()},addEventListener:function(t,e){var n=uo[t]||(uo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=uo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Ym,wrapYoyo:$m,distribute:Af,random:Cf,snap:Rf,normalize:qm,getUnit:on,clamp:Hm,splitColor:Uf,toArray:qn,selector:xc,mapRange:Lf,pipe:Wm,unitize:Xm,interpolate:Km,shuffle:wf},install:pf,effects:ul,ticker:In,updateRoot:_n.updateRoot,plugins:Dn,globalTimeline:Ie,core:{PropTween:En,globals:mf,Tween:We,Timeline:_n,Animation:aa,getCache:Ar,_removeLinkedListItem:Zo,reverting:function(){return en},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return yu=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Lo[i]=We[i]});In.add(_n.updateRoot);ds=Lo.to({},{duration:0});var g0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},_0=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=g0(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},ml=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Je(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}_0(o,s)}}}},An=Lo.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ml("roundProps",vc),ml("modifiers"),ml("snap",Rf))||Lo;We.version=_n.version=An.version="3.13.0";ff=1;Eu()&&ws();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wh,ir,ms,Fu,br,Ah,Ou,x0=function(){return typeof window<"u"},Hi={},Sr=180/Math.PI,gs=Math.PI/180,Yr=Math.atan2,Rh=1e8,Bu=/([A-Z])/g,v0=/(left|right|width|margin|padding|x)/i,M0=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},S0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},y0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},b0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Kf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Zf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},E0=function(t,e,n){return t.style[e]=n},T0=function(t,e,n){return t.style.setProperty(e,n)},w0=function(t,e,n){return t._gsap[e]=n},A0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},R0=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},C0=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ue="transform",Tn=Ue+"Origin",P0=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in Hi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ni(r,o)}):this.tfm[t]=a.x?a[t]:Ni(r,t),t===Tn&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(Ue)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},Jf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},L0=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Bu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ou(),(!s||!s.isStart)&&!n[Ue]&&(Jf(n),r.zOrigin&&n[Tn]&&(n[Tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Qf=function(t,e){var n={target:t,props:[],revert:L0,save:P0};return t._gsap||An.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},jf,bc=function(t,e){var n=ir.createElementNS?ir.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ir.createElement(t);return n&&n.style?n:ir.createElement(t)},Yn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Bu,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,As(e)||e,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),As=function(t,e,n){var r=e||br,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ch[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ch[a]:"")+t},Ec=function(){x0()&&window.document&&(wh=window,ir=wh.document,ms=ir.documentElement,br=bc("div")||{style:{}},bc("div"),Ue=As(Ue),Tn=Ue+"Origin",br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jf=!!As("perspective"),Ou=An.core.reverting,Fu=1)},Ph=function(t){var e=t.ownerSVGElement,n=bc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),ms.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),ms.removeChild(n),s},Lh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},tp=function(t){var e,n;try{e=t.getBBox()}catch{e=Ph(t),n=1}return e&&(e.width||e.height)||n||(e=Ph(t)),e&&!e.width&&!e.x&&!e.y?{x:+Lh(t,["x","cx","x1"])||0,y:+Lh(t,["y","cy","y1"])||0,width:0,height:0}:e},ep=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&tp(t))},Lr=function(t,e){if(e){var n=t.style,r;e in Hi&&e!==Tn&&(e=Ue),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Bu,"-$1").toLowerCase())):n.removeAttribute(e)}},rr=function(t,e,n,r,s,a){var o=new En(t._pt,e,n,0,1,a?Zf:Kf);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},Dh={deg:1,rad:1,turn:1},D0={grid:1,flex:1},lr=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=br.style,l=v0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",_,g,p,m;if(r===a||!s||Dh[r]||Dh[a])return s;if(a!=="px"&&!h&&(s=i(t,e,n,"px")),m=t.getCTM&&ep(t),(f||a==="%")&&(Hi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],He(f?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ir||!g.appendChild)&&(g=ir.body),p=g._gsap,p&&f&&p.width&&l&&p.time===In.time&&!p.uncache)return He(s/p.width*d);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+r,_=t[u],b?t.style[e]=b:Lr(t,e)}else(f||a==="%")&&!D0[Yn(g,"display")]&&(o.position=Yn(t,"position")),g===t&&(o.position="static"),g.appendChild(br),_=br[u],g.removeChild(br),o.position="absolute";return l&&f&&(p=Ar(g),p.time=In.time,p.width=g[u]),He(h?_*s/d:_&&s?d/_*s:0)},Ni=function(t,e,n,r){var s;return Fu||Ec(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Hi[e]&&e!=="transform"?(s=la(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Io(Yn(t,Tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Do[e]&&Do[e](t,e,n)||Yn(t,e)||_f(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?lr(t,e,s,n)+n:s},I0=function(t,e,n,r){if(!n||n==="none"){var s=As(e,t,1),a=s&&Yn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Yn(t,"borderTopColor"))}var o=new En(this._pt,t.style,e,0,1,qf),l=0,c=0,u,d,h,f,_,g,p,m,b,R,x,S;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Yn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=Yn(t,e)||r,g?t.style[e]=g:Lr(t,e)),u=[n,r],Ff(u),n=u[0],r=u[1],h=n.match(hs)||[],S=r.match(hs)||[],S.length){for(;d=hs.exec(r);)p=d[0],b=r.substring(l,d.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),p.charAt(1)==="="&&(p=ps(f,p)+x),m=parseFloat(p),R=p.substr((m+"").length),l=hs.lastIndex-R.length,R||(R=R||Fn.units[e]||x,l===r.length&&(r+=R,o.e+=R)),x!==R&&(f=lr(t,e,g,R)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Zf:Kf;return hf.test(r)&&(o.e=0),this._pt=o,o},Ih={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},U0=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Ih[n]||n,e[1]=Ih[r]||r,e.join(" ")},N0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Hi[o]&&(l=1,o=o==="transformOrigin"?Tn:Ue),Lr(n,o);l&&(Lr(n,Ue),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",la(n,1),a.uncache=1,Jf(r)))}},Do={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new En(t._pt,e,n,0,0,N0);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},oa=[1,0,0,1,0,0],np={},ip=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Uh=function(t){var e=Yn(t,Ue);return ip(e)?oa:e.substr(7).match(uf).map(He)},ku=function(t,e){var n=t._gsap||Ar(t),r=t.style,s=Uh(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oa:s):(s===oa&&!t.offsetParent&&t!==ms&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ms.appendChild(t)),s=Uh(t),l?r.display=l:Lr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ms.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Tc=function(t,e,n,r,s,a){var o=t._gsap,l=s||ku(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],b=l[5],R=e.split(" "),x=parseFloat(R[0])||0,S=parseFloat(R[1])||0,T,A,v,E;n?l!==oa&&(A=f*p-_*g)&&(v=x*(p/A)+S*(-g/A)+(g*b-p*m)/A,E=x*(-_/A)+S*(f/A)-(f*b-_*m)/A,x=v,S=E):(T=tp(t),x=T.x+(~R[0].indexOf("%")?x/100*T.width:x),S=T.y+(~(R[1]||R[0]).indexOf("%")?S/100*T.height:S)),r||r!==!1&&o.smooth?(m=x-c,b=S-u,o.xOffset=d+(m*f+b*g)-m,o.yOffset=h+(m*_+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=S,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[Tn]="0px 0px",a&&(rr(a,o,"xOrigin",c,x),rr(a,o,"yOrigin",u,S),rr(a,o,"xOffset",d,o.xOffset),rr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+S)},la=function(t,e){var n=t._gsap||new zf(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Yn(t,Tn)||"0",u,d,h,f,_,g,p,m,b,R,x,S,T,A,v,E,D,P,I,z,F,k,K,G,nt,V,$,j,bt,vt,Ht,Nt;return u=d=h=g=p=m=b=R=x=0,f=_=1,n.svg=!!(t.getCTM&&ep(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),r.scale=r.rotate=r.translate="none"),A=ku(t,n.svg),n.svg&&(n.uncache?(nt=t.getBBox(),c=n.xOrigin-nt.x+"px "+(n.yOrigin-nt.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),Tc(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,T=n.yOrigin||0,A!==oa&&(P=A[0],I=A[1],z=A[2],F=A[3],u=k=A[4],d=K=A[5],A.length===6?(f=Math.sqrt(P*P+I*I),_=Math.sqrt(F*F+z*z),g=P||I?Yr(I,P)*Sr:0,b=z||F?Yr(z,F)*Sr+g:0,b&&(_*=Math.abs(Math.cos(b*gs))),n.svg&&(u-=S-(S*P+T*z),d-=T-(S*I+T*F))):(Nt=A[6],vt=A[7],$=A[8],j=A[9],bt=A[10],Ht=A[11],u=A[12],d=A[13],h=A[14],v=Yr(Nt,bt),p=v*Sr,v&&(E=Math.cos(-v),D=Math.sin(-v),G=k*E+$*D,nt=K*E+j*D,V=Nt*E+bt*D,$=k*-D+$*E,j=K*-D+j*E,bt=Nt*-D+bt*E,Ht=vt*-D+Ht*E,k=G,K=nt,Nt=V),v=Yr(-z,bt),m=v*Sr,v&&(E=Math.cos(-v),D=Math.sin(-v),G=P*E-$*D,nt=I*E-j*D,V=z*E-bt*D,Ht=F*D+Ht*E,P=G,I=nt,z=V),v=Yr(I,P),g=v*Sr,v&&(E=Math.cos(v),D=Math.sin(v),G=P*E+I*D,nt=k*E+K*D,I=I*E-P*D,K=K*E-k*D,P=G,k=nt),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=He(Math.sqrt(P*P+I*I+z*z)),_=He(Math.sqrt(K*K+Nt*Nt)),v=Yr(k,K),b=Math.abs(v)>2e-4?v*Sr:0,x=Ht?1/(Ht<0?-Ht:Ht):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ip(Yn(t,Ue)),G&&t.setAttribute("transform",G))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=He(f),n.scaleY=He(_),n.rotation=He(g)+o,n.rotationX=He(p)+o,n.rotationY=He(m)+o,n.skewX=b+o,n.skewY=R+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Tn]=Io(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?O0:jf?rp:F0,n.uncache=0,n},Io=function(t){return(t=t.split(" "))[0]+" "+t[1]},gl=function(t,e,n){var r=on(e);return He(parseFloat(e)+parseFloat(lr(t,"x",n+"px",r)))+r},F0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rp(t,e)},fr="0deg",Os="0px",pr=") ",rp=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,R=n.zOrigin,x="",S=m==="auto"&&t&&t!==1||m===!0;if(R&&(d!==fr||u!==fr)){var T=parseFloat(u)*gs,A=Math.sin(T),v=Math.cos(T),E;T=parseFloat(d)*gs,E=Math.cos(T),a=gl(b,a,A*E*-R),o=gl(b,o,-Math.sin(T)*-R),l=gl(b,l,v*E*-R+R)}p!==Os&&(x+="perspective("+p+pr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(S||a!==Os||o!==Os||l!==Os)&&(x+=l!==Os||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+pr),c!==fr&&(x+="rotate("+c+pr),u!==fr&&(x+="rotateY("+u+pr),d!==fr&&(x+="rotateX("+d+pr),(h!==fr||f!==fr)&&(x+="skew("+h+", "+f+pr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+pr),b.style[Ue]=x||"translate(0, 0)"},O0=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,R=parseFloat(a),x=parseFloat(o),S,T,A,v,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=gs,c*=gs,S=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=gs,E=Math.tan(c-u),E=Math.sqrt(1+E*E),A*=E,v*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),S*=E,T*=E)),S=He(S),T=He(T),A=He(A),v=He(v)):(S=d,v=h,T=A=0),(R&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(R=lr(f,"x",a,"px"),x=lr(f,"y",o,"px")),(_||g||p||m)&&(R=He(R+_-(_*S+g*A)+p),x=He(x+g-(_*T+g*v)+m)),(r||s)&&(E=f.getBBox(),R=He(R+r/100*E.width),x=He(x+s/100*E.height)),E="matrix("+S+","+T+","+A+","+v+","+R+","+x+")",f.setAttribute("transform",E),b&&(f.style[Ue]=E)},B0=function(t,e,n,r,s){var a=360,o=Je(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Sr:1),c=l-r,u=r+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Rh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Rh)%a-~~(c/a)*a)),t._pt=h=new En(t._pt,e,n,r,c,S0),h.e=u,h.u="deg",t._props.push(n),h},Nh=function(t,e){for(var n in e)t[n]=e[n];return t},k0=function(t,e,n){var r=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ue]=e,o=la(n,1),Lr(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],a[Ue]=e,o=la(n,1),a[Ue]=c);for(l in Hi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=on(c),_=on(u),d=f!==_?lr(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new En(t._pt,o,l,d,h-d,yc),t._pt.u=_||0,t._props.push(l));Nh(o,r)};bn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Do[t>1?"border"+i:i]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(_){return Ni(o,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,f,d)}});var sp={name:"css",register:Ec,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,b,R,x,S,T,A,v;Fu||Ec(),this.styles=this.styles||Qf(t),v=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Dn[g]&&Vf(g,e,n,r,t,s)))){if(f=typeof u,_=Do[g],f==="function"&&(u=u.call(n,r,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ra(u)),_)_(this,t,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ar.lastIndex=0,ar.test(c)||(p=on(c),m=on(u)),m?p!==m&&(c=lr(t,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),v.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,t,s):l[g],Je(c)&&~c.indexOf("random(")&&(c=ra(c)),on(c+"")||c==="auto"||(c+=Fn.units[g]||on(Ni(t,g))||""),(c+"").charAt(1)==="="&&(c=Ni(t,g))):c=Ni(t,g),h=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),g in xi&&(g==="autoAlpha"&&(h===1&&Ni(t,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),rr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),R=g in Hi,R){if(this.styles.save(g),f==="string"&&u.substring(0,6)==="var(--"&&(u=Yn(t,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),x||(S=t._gsap,S.renderTransform&&!e.parseTransform||la(t,e.parseTransform),T=e.smoothOrigin!==!1&&S.smooth,x=this._pt=new En(this._pt,o,Ue,0,1,S.renderTransform,S,0,-1),x.dep=1),g==="scale")this._pt=new En(this._pt,S,"scaleY",S.scaleY,(b?ps(S.scaleY,b+d):d)-S.scaleY||0,yc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){v.push(Tn,0,o[Tn]),u=U0(u),S.svg?Tc(t,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&rr(this,S,"zOrigin",S.zOrigin,m),rr(this,o,g,Io(c),Io(u)));continue}else if(g==="svgOrigin"){Tc(t,u,1,T,0,this);continue}else if(g in np){B0(this,S,g,h,b?ps(h,b+u):u);continue}else if(g==="smoothOrigin"){rr(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){k0(this,u,t);continue}}else g in o||(g=As(g)||g);if(R||(d||d===0)&&(h||h===0)&&!M0.test(u)&&g in o)p=(c+"").substr((h+"").length),d||(d=0),m=on(u)||(g in Fn.units?Fn.units[g]:p),p!==m&&(h=lr(t,g,c,m)),this._pt=new En(this._pt,R?S:o,g,h,(b?ps(h,b+d):d)-h,!R&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?b0:yc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=y0);else if(g in o)I0.call(this,t,g,c,b?b+u:u);else if(g in t)this.add(t,g,c||t[g],b?b+u:u,r,s);else if(g!=="parseTransform"){wu(g,u);continue}R||(g in o?v.push(g,0,o[g]):typeof t[g]=="function"?v.push(g,2,t[g]()):v.push(g,1,c||t[g])),a.push(g)}}A&&Yf(this)},render:function(t,e){if(e.tween._time||!Ou())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ni,aliases:xi,getSetter:function(t,e,n){var r=xi[e];return r&&r.indexOf(",")<0&&(e=r),e in Hi&&e!==Tn&&(t._gsap.x||Ni(t,"x"))?n&&Ah===n?e==="scale"?A0:w0:(Ah=n||{})&&(e==="scale"?R0:C0):t.style&&!bu(t.style[e])?E0:~e.indexOf("-")?T0:Uu(t,e)},core:{_removeProperty:Lr,_getMatrix:ku}};An.utils.checkPrefix=As;An.core.getStyleSaver=Qf;(function(i,t,e,n){var r=bn(i+","+t+","+e,function(s){Hi[s]=1});bn(t,function(s){Fn.units[s]="deg",np[s]=1}),xi[r[13]]=i+","+t,bn(n,function(s){var a=s.split(":");xi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Fn.units[i]="px"});An.registerPlugin(sp);var Bt=An.registerPlugin(sp)||An;Bt.core.Tween;const ti=i=>`./assets/${i}`;new Date().getFullYear();const $r={machine:ti("slot/machine.webp"),charms:{smiley:ti("slot/charm-smiley.webp"),car:ti("slot/charm-car.webp"),mushroom:ti("slot/charm-mushroom.webp"),flower:ti("slot/charm-flower.webp"),ball:ti("slot/charm-ball.webp"),lips:ti("slot/charm-lips.webp"),avocado:ti("slot/charm-avocado.webp"),lock:ti("slot/charm-lock.webp"),star:ti("slot/charm-star.webp")},reels:[["smiley","car","mushroom","lips","avocado","star","flower","ball","lock"],["flower","ball","lips","smiley","lock","car","avocado","mushroom","star"],["avocado","lock","star","ball","flower","mushroom","smiley","lips","car"]],jackpot:"star",hint:{lead:"Enter Vasa's space",sub:""}};[["sap","SAP",40],["ixds","Interaction Design Symposium",33],["mind-alcove","Mind Alcove",42],["reevooy","Reevooy",34],["sparkle","Sparkle Designs",32],["tedx","TEDx Somaiya Vidyavihar",37],["eco-india","ECO India",41],["usi","U&I",50],["srm","SRM IST",72],["riidl","riidl",39],["rotary","Rotary Club of Bombay",36],["springer","Springer",22],["sih","Smart India Hackathon",40],["aicte","AICTE",54],["parvaah","Parvaah",39]].map(([i,t,e])=>({src:ti(`logos/m-${i}.webp`),name:t,h:e}));const ap="thatvasa:muted";let se=null,si=null,Sa=z0();function z0(){try{return localStorage.getItem(ap)==="1"}catch{return!1}}function Ls(){return Sa}function ca(i){Sa=i;try{localStorage.setItem(ap,i?"1":"0")}catch{}si&&si.gain.setTargetAtTime(i?0:.9,se.currentTime,.02),op.forEach(t=>t(i))}function zr(){if(se){se.state==="suspended"&&se.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;se=new i,si=se.createGain(),si.gain.value=Sa?0:.9;const t=se.createDynamicsCompressor();t.threshold.value=-16,t.ratio.value=4,si.connect(t).connect(se.destination)}let Na=null;function zu(){if(!Na){Na=se.createBuffer(1,se.sampleRate*.5,se.sampleRate);const t=Na.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}const i=se.createBufferSource();return i.buffer=Na,i}function ya(i,t,e,n,r){i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(n,t+e),i.gain.exponentialRampToValueAtTime(1e-4,t+e+r)}function Dr(i,t,e,n,r){const s=zu(),a=se.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;const o=se.createGain();ya(o,i,.001,n,r),s.connect(a).connect(o).connect(si),s.start(i,Math.random()*.3,V0(r))}const V0=i=>i+.02,Ds=()=>se&&!Sa,Uo=()=>se?{ctx:se,master:si,noise:zu}:null,ua=()=>!!(se&&!Sa),Vu=i=>{op.push(i)},op=[];function H0(){if(!Ds())return;const i=se.currentTime;Dr(i,2400+Math.random()*600,6,.35,.03),Dr(i+.004,900,3,.18,.04)}function G0(){if(!Ds())return;const i=se.currentTime,t=se.createOscillator(),e=se.createGain();t.type="sine",t.frequency.setValueAtTime(140,i),t.frequency.exponentialRampToValueAtTime(52,i+.18),ya(e,i,.003,.55,.22),t.connect(e).connect(si),t.start(i),t.stop(i+.3),Dr(i,1500,1.5,.5,.08),Dr(i+.06,3200,8,.12,.12)}function ho(i=1){if(!Ds())return;const t=se.currentTime;Dr(t,1800+i*900,5,.12+.1*Math.min(i,1),.025)}function W0(i=0){if(!Ds())return;const t=se.currentTime,e=se.createOscillator(),n=se.createGain();e.type="triangle",e.frequency.setValueAtTime(220-i*18,t),e.frequency.exponentialRampToValueAtTime(70,t+.12),ya(n,t,.002,.45,.16),e.connect(n).connect(si),e.start(t),e.stop(t+.22),Dr(t,1100,2,.4,.06)}function X0(){if(!Ds())return;const i=[1046.5,1318.5,1568,2093,1568,2093];i.forEach((t,e)=>{const n=se.currentTime+e*.085;q0(n,t,e===i.length-1?1.6:.7,.22)});for(let t=0;t<9;t++)Dr(se.currentTime+.45+t*.05+Math.random()*.03,5200+Math.random()*1800,12,.08,.05)}function q0(i,t,e,n){const r=se.createOscillator(),s=se.createOscillator(),a=se.createGain(),o=se.createGain();r.frequency.value=t,s.frequency.value=t*3.5,a.gain.setValueAtTime(t*1.6,i),a.gain.exponentialRampToValueAtTime(1,i+e),s.connect(a).connect(r.frequency),ya(o,i,.004,n,e),r.connect(o).connect(si),r.start(i),s.start(i),r.stop(i+e+.05),s.stop(i+e+.05)}function Y0(i=1){if(!Ds())return;const t=se.currentTime,e=zu(),n=se.createBiquadFilter(),r=se.createGain();n.type="bandpass",n.Q.value=.8,n.frequency.setValueAtTime(500,t),n.frequency.exponentialRampToValueAtTime(2600,t+.22),ya(r,t,.06,.07*i,.2),e.connect(n).connect(r).connect(si),e.start(t,0,.32)}const $0=Object.freeze(Object.defineProperty({__proto__:null,audio:Uo,chime:X0,clunk:G0,isMuted:Ls,live:ua,onMute:Vu,ratchet:H0,setMuted:ca,stop:W0,tick:ho,unlock:zr,whoosh:Y0},Symbol.toStringTag,{value:"Module"})),hi=Object.fromEntries(Object.entries($0).map(([i,t])=>[i,typeof t=="function"?(...e)=>{try{return t(...e)}catch{}}:t])),Fa=158,K0=80,Z0=7,J0=1.75,Q0={smiley:121,car:157,mushroom:120,flower:129,ball:127,lips:141,avocado:104,lock:109,star:135};function j0({reduced:i,onDone:t}){var D;const e=document.getElementById("splash"),n=document.getElementById("slot"),r=n.querySelector(".slot__reels"),s=n.querySelector(".slot__lever");e.querySelector(".splash__lead").textContent=$r.hint.lead,e.querySelector(".splash__sub").textContent=$r.hint.sub,(D=n.querySelector(".slot__engrave"))==null||D.remove(),n.querySelector(".slot__machine").src=$r.machine;const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","0"),a.setAttribute("height","0"),a.style.position="absolute",a.innerHTML="<defs></defs>",e.appendChild(a);const o=a.firstElementChild,l=$r.reels.map(P=>{const I=document.createElement("div");I.className="reel";const z=document.createElement("div");z.className="reel__strip";const F=[];for(let G=0;G<Z0;G++)P.forEach((nt,V)=>{const $=document.createElement("div");if($.className="reel__cell",$.style.top=`calc(${K0-Fa/2+(G*P.length+V)*Fa} * var(--m))`,nt){const j=new Image;j.src=$r.charms[nt],j.alt="",j.decoding="async",j.style.setProperty("--cw",Q0[nt]),$.appendChild(j)}z.appendChild($),F.push({el:$,name:nt})});const k=document.createElement("div");k.className="reel__shade",I.append(z,k),r.appendChild(I);const K=`reel-blur-${r.children.length}`;return o.insertAdjacentHTML("beforeend",`<filter id="${K}" x="0" y="-20%" width="100%" height="140%"><feGaussianBlur stdDeviation="0 0"/></filter>`),z.style.filter=`url(#${K})`,{el:I,strip:z,cells:F,order:P,pos:0,lastTick:0,blur:o.lastElementChild.firstElementChild}});let c=1;const u=()=>{c=n.offsetWidth/1450||c||.3};u(),addEventListener("resize",()=>{u(),l.forEach(d)});function d(P){P.strip.style.transform=`translate3d(0, ${-P.pos*Fa*c}px, 0)`}let h="idle",f=0,_=0;function g(P){f=Math.max(0,Math.min(1,P));const I=1-J0*f;s.style.setProperty("--s",I.toFixed(4)),s.style.setProperty("--bx",`${(-41.6*(1-I)*c).toFixed(2)}px`),s.style.setProperty("--by",`${(279.7*(1-I)*c).toFixed(2)}px`),s.style.setProperty("--bs",(1+.26*(1-Math.abs(I))).toFixed(4));const z=Math.floor(f*9);z!==_&&(z>_&&hi.ratchet(),_=z)}const p=setTimeout(()=>h==="idle"&&s.classList.add("is-nudge"),2200);let m=0,b=0;s.addEventListener("pointerdown",P=>{h==="dragging"&&(Bt.killTweensOf(S),h="idle"),h==="idle"&&(u(),hi.unlock(),h="dragging",clearTimeout(p),s.classList.remove("is-nudge"),s.setPointerCapture(P.pointerId),m=P.clientY,b=f,Bt.killTweensOf(S))}),s.addEventListener("pointermove",P=>{if(h!=="dragging")return;const I=280*c*1.05;g(b+(P.clientY-m)/I),f>=.3&&T()});const R=()=>{if(h==="dragging"){if(f>.1){T();return}if(f<.02){T();return}h="idle",S.v=f,Bt.to(S,{v:0,duration:.5,ease:"back.out(2)",onUpdate:()=>g(S.v)})}};s.addEventListener("pointerup",R),s.addEventListener("pointercancel",R),s.addEventListener("lostpointercapture",R),s.addEventListener("keydown",P=>{h==="idle"&&(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),hi.unlock(),T())}),s.addEventListener("click",P=>{P.detail===0&&h==="idle"&&(hi.unlock(),T())});const x=e.querySelector(".splash__lead");if(x){x.setAttribute("role","button"),x.setAttribute("tabindex","0");const P=()=>{h==="idle"&&(hi.unlock(),clearTimeout(p),s.classList.remove("is-nudge"),f=0,T())};x.addEventListener("click",P),x.addEventListener("keydown",I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),P())})}const S={v:0};function T(){h="pulled",s.disabled=!0,s.classList.remove("is-nudge"),e.classList.add("is-pulled"),S.v=f,Bt.timeline().to(S,{v:1,duration:(1-f)*.28+.06,ease:"power2.in",onUpdate:()=>g(S.v)}).add(()=>{hi.clunk(),A()}).to(S,{v:0,duration:.9,ease:"elastic.out(1, 0.45)",onUpdate:()=>g(S.v)},"+=0.08")}function A(){u(),n.classList.add("is-live");const P=l[0].order.length,I=l.map((k,K)=>{const G=i?0:2+K,nt=k.order.indexOf($r.jackpot)-1;return(G+1)*P+(nt%P+P)%P}),z=i?[.35,.45,.55]:[1.7,2.35,3],F=Bt.timeline({onComplete:()=>{l.forEach((k,K)=>{k.pos=I[K],d(k)}),E()}});l.forEach((k,K)=>{const G=I[K],nt=K*.06;k.pos=0,k.lastTick=0;const V=nt+.14,$=V+z[K];F.to(k,{pos:-.18,duration:.14,ease:"power1.out",onUpdate:()=>v(k)},nt),F.to(k,{pos:G+.2,duration:z[K],ease:"power2.out",onUpdate:()=>v(k)},V),F.add(()=>{hi.stop(K),Bt.fromTo(k.el,{y:0},{y:1.5*c,duration:.06,yoyo:!0,repeat:1})},$),F.to(k,{pos:G,duration:.24,ease:"back.out(3)",onUpdate:()=>v(k)},$)})}function v(P){d(P);const I=Math.abs(P.pos-(P.prev??P.pos));P.prev=P.pos,P.blur.setAttribute("stdDeviation",`0 ${Math.min(14,I*Fa*c*.35).toFixed(2)}`);const z=Math.floor(P.pos);if(z!==P.lastTick&&z>0){const F=Math.min(1,Math.abs(z-P.lastTick)/2);P.lastTick=z,hi.tick(F)}}function E(){l.forEach(z=>{const F=z.cells[Math.round(z.pos)+1];F&&F.el.classList.add("is-pay"),z.el.classList.add("is-win")}),hi.chime();const P=r.getBoundingClientRect(),I={x:P.left+P.width/2,y:P.top+P.height*.45,w:P.width};Bt.delayedCall(i?.3:.75,()=>t&&t(I))}return{skip(){clearTimeout(p),h="pulled"},pull(){return h!=="idle"?!1:(hi.unlock(),clearTimeout(p),f=0,T(),!0)}}}const Wi=()=>Uo(),tg="./",fo={},_l={},eg=i=>globalThis.__VF_ASSETS&&globalThis.__VF_ASSETS["audio/"+i]||`${tg}assets/audio/${i}`,wc=i=>fo[i]?Promise.resolve(fo[i]):Uo()?_l[i]||(_l[i]=fetch(eg(i)).then(t=>t.ok?t.arrayBuffer():Promise.reject(t.status)).then(t=>Uo().ctx.decodeAudioData(t)).then(t=>fo[i]=t).catch(()=>null)):Promise.resolve(null),ng=()=>{wc("lofi-loop.mp3"),wc("spill.mp3")},jo=(i,t)=>{const e=i.createBuffer(1,i.sampleRate*1,i.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;const r=i.createBufferSource();return r.buffer=e,r.loop=!0,r},Ei=1e-4,Fe=(i,{f:t=2e3,q:e=1,type:n="bandpass",peak:r=.3,dec:s=.05,att:a=.002,f2:o}={})=>{if(r<8e-4)return;const{ctx:l,master:c}=Wi(),u=jo(l),d=l.createBiquadFilter(),h=l.createGain();d.type=n,d.frequency.setValueAtTime(t,i),o&&d.frequency.exponentialRampToValueAtTime(o,i+s+a),d.Q.value=e,h.gain.setValueAtTime(Ei,i),h.gain.exponentialRampToValueAtTime(r,i+a),h.gain.exponentialRampToValueAtTime(Ei,i+a+s),u.connect(d).connect(h).connect(c),u.start(i,Math.random()),u.stop(i+a+s+.05)},Te=(i,{f:t=440,f2:e,type:n="sine",peak:r=.3,dec:s=.15,att:a=.004,to:o}={})=>{if(r<8e-4)return;const{ctx:l,master:c}=Wi(),u=l.createOscillator(),d=l.createGain();u.type=n,u.frequency.setValueAtTime(t,i),e&&u.frequency.exponentialRampToValueAtTime(e,i+s),d.gain.setValueAtTime(Ei,i),d.gain.exponentialRampToValueAtTime(r,i+a),d.gain.exponentialRampToValueAtTime(Ei,i+a+s),u.connect(d).connect(o||c),u.start(i),u.stop(i+a+s+.05)},ze=i=>(...t)=>{ua()&&i(Wi().ctx.currentTime,...t)},ai=(i,t)=>i+Math.random()*(t-i),ig=ze((i,t=1)=>{Fe(i,{f:ai(2600,3600),q:3,peak:.1*t,dec:.02}),Te(i,{f:ai(150,190),f2:90,peak:.06*t,dec:.04})}),rg=ze((i,t=1)=>{Te(i,{f:2093,peak:.04*t,dec:.4,type:"sine"})}),sg=ze((i,t=1)=>{const e=(s,a)=>Fe(s,{f:7500,q:1,type:"highpass",peak:a*t,dec:.04}),n=s=>Te(s,{f:150,f2:45,peak:.55*t,dec:.18}),r=(s,a)=>{Te(s,{f:a,peak:.12*t,dec:.45,type:"triangle"}),Te(s,{f:a*2,peak:.04*t,dec:.3})};[0,.4].forEach(s=>{n(i+s),e(i+s+.2,.09)}),Fe(i+.2,{f:1800,q:2,peak:.16*t,dec:.1}),Fe(i+.6,{f:1800,q:2,peak:.16*t,dec:.1}),r(i+.05,523.25),r(i+.4,659.25),r(i+.6,784),r(i+.85,987.8)}),ag=ze((i,t=1)=>{Te(i,{f:1318.5,peak:.14*t,dec:.7}),Te(i+.12,{f:1760,peak:.1*t,dec:.9})}),xl=ze((i,t=1)=>{Fe(i,{f:900,f2:3800,q:.9,peak:.28*t,dec:.22,att:.03}),Fe(i+.2,{f:3e3,q:2,peak:.1*t,dec:.1})}),og=ze((i,t=1.4,e=1)=>{for(let n=0;n<16;n++){const r=i+(n/16)**.8*t;Fe(r,{f:ai(500,1100),q:5,peak:.13*e*(1-n/22),dec:.04})}Fe(i,{f:260,q:.7,type:"lowpass",peak:.16*e,dec:t,att:.1})}),lg=ze((i,t=1)=>{Fe(i,{f:1400,q:6,peak:.25*t,dec:.05}),Te(i,{f:700,f2:480,peak:.1*t,dec:.06,type:"triangle"})}),cg=ze((i,t=1)=>{const e=fo["spill.mp3"];if(e){const{ctx:n,master:r}=Wi(),s=n.createBufferSource(),a=n.createGain();s.buffer=e,a.gain.value=.85*t,s.connect(a).connect(r),s.start(i);return}Fe(i,{f:800,f2:360,q:.7,type:"lowpass",peak:.2*t,dec:.26,att:.01}),[0,.13,.26].forEach((n,r)=>Te(i+.06+n,{f:300-r*30,f2:160-r*14,peak:.1*t,dec:.1}))}),Fh=ze((i,t=1)=>{for(let e=0;e<6;e++){const n=i+e*.1+ai(0,.05);Te(n,{f:ai(1500,2600),f2:ai(900,1400),peak:.13*t,dec:.09}),Fe(n,{f:5200,q:3,peak:.04*t,dec:.03})}}),ug=ze((i,t=5.4,e=1)=>{const{ctx:n,master:r}=Wi(),s=jo(n),a=n.createBiquadFilter(),o=n.createBiquadFilter(),l=n.createGain(),c=n.createOscillator(),u=n.createGain();a.type="bandpass",a.Q.value=.5,a.frequency.setValueAtTime(420,i),a.frequency.linearRampToValueAtTime(900,i+t*.45),a.frequency.linearRampToValueAtTime(520,i+t),o.type="highpass",o.frequency.value=180,c.frequency.value=.7,u.gain.value=.012*e,c.connect(u).connect(l.gain),l.gain.setValueAtTime(Ei,i),l.gain.linearRampToValueAtTime(.05*e,i+.9),l.gain.setValueAtTime(.05*e,i+t-1.3),l.gain.linearRampToValueAtTime(Ei,i+t),s.connect(a).connect(o).connect(l).connect(r),s.start(i,Math.random()),s.stop(i+t+.1),c.start(i),c.stop(i+t+.1)}),hg=ze((i,t=!0,e=1)=>{Fe(i,{f:t?260:520,f2:t?700:240,q:1.1,peak:.26*e,dec:.5,att:.05}),Te(i+(t?.5:.45),{f:130,f2:60,peak:.34*e,dec:.16}),Fe(i+(t?.5:.45),{f:1300,q:2,peak:.18*e,dec:.06})}),dg=ze((i,t=!0,e=1)=>{Fe(i,{f:3200,q:8,peak:.34*e,dec:.02}),Fe(i+.035,{f:1500,q:4,peak:.25*e,dec:.04}),t&&Te(i+.07,{f:118,peak:.05*e,dec:.5,type:"sawtooth"})}),Oa=ze((i,t=1,e=1)=>{Te(i,{f:190*(.8+t*.3),f2:70,peak:.42*e*t,dec:.14}),Fe(i,{f:900,q:1,peak:.12*e*t,dec:.05})}),fg=ze((i,t=3,e=1)=>{Fe(i,{f:180,f2:420,q:.7,type:"lowpass",peak:.28*e,dec:t,att:t*.6});for(let n=0;n<18;n++)Fe(i+(n/18)**1.4*t,{f:ai(400,900),q:4,peak:.07*e,dec:.04})}),pg=ze((i,t=1)=>{Fe(i,{f:320,q:.8,type:"lowpass",peak:.32*t,dec:.07}),Te(i,{f:95,f2:55,peak:.3*t,dec:.09})}),mg=ze((i,t=1)=>{Fe(i,{f:4200,q:5,peak:.34*t,dec:.025}),Fe(i+.055,{f:2600,q:4,peak:.3*t,dec:.04}),Te(i+.02,{f:260,f2:160,peak:.12*t,dec:.06,type:"square"})}),Bs=ze((i,t=480,e=.07,n=1)=>{Te(i,{f:t,peak:.1*n,dec:e,type:"square"})}),Oh=ze((i,t=1)=>{Te(i,{f:988,peak:.1*t,dec:.07,type:"square"}),Te(i+.07,{f:1319,peak:.1*t,dec:.28,type:"square"})}),gg=ze((i,t=1)=>{[392,330,262].forEach((e,n)=>Te(i+n*.13,{f:e,peak:.1*t,dec:.16,type:"square"}))}),Bh=ze((i,t=1)=>{for(let e=0;e<9;e++){const n=i+(e/9)**1.5*.9+ai(0,.03);Fe(n,{f:ai(1800,3600),q:5,peak:.3*t*(1-e/12),dec:.03}),Te(n,{f:ai(300,520),f2:200,peak:.1*t*(1-e/12),dec:.04,type:"triangle"})}}),Ba=ze((i,t=1)=>{Te(i,{f:120,f2:50,peak:.4*t,dec:.18}),Fe(i,{f:700,q:1,type:"lowpass",peak:.2*t,dec:.08})}),vl=ze((i,t=1)=>{Te(i,{f:2400,peak:.1*t,dec:.3}),Te(i+.02,{f:3300,peak:.07*t,dec:.25})});let Wn=null;const _g=[[146.83,220,261.63,329.63,349.23],[196,246.94,293.66,349.23,392],[130.81,196,246.94,329.63,392],[110,164.81,220,261.63,329.63]];function Ml(){!ua()||Wn||(Wn={pending:!0},wc("lofi-loop.mp3").then(i=>{if(!Wn||!Wn.pending)return;if(!ua()){Wn=null;return}if(!i){Wn=null,xg();return}const{ctx:t,master:e}=Wi(),n=t.createBufferSource(),r=t.createGain();n.buffer=i,n.loop=!0,r.gain.setValueAtTime(1e-4,t.currentTime),r.gain.linearRampToValueAtTime(.07,t.currentTime+3),n.connect(r).connect(e),n.start(),Wn={rec:n,bus:r}}))}function xg(){if(!ua()||Wn)return;const{ctx:i,master:t}=Wi(),e=i.createGain();e.gain.value=1e-4;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=1500,e.connect(n).connect(t),e.gain.setTargetAtTime(.34,i.currentTime,1.6);const r=62,s=60/r;let a=i.currentTime+.15,o=0;const l={stop:!1},c=()=>{if(!l.stop)for(;a<i.currentTime+.6;){const _=_g[o%4],g=a;_.slice(1).forEach((p,m)=>{const b=i.createOscillator(),R=i.createOscillator(),x=i.createGain();b.type="sine",R.type="triangle",b.frequency.value=p,R.frequency.value=p*2.003;const S=g+m*.025+ai(0,.012);x.gain.setValueAtTime(Ei,S),x.gain.exponentialRampToValueAtTime(.055,S+.09),x.gain.exponentialRampToValueAtTime(Ei,S+s*3.6),b.connect(x),R.connect(x),x.connect(e),b.start(S),R.start(S),b.stop(S+s*3.7),R.stop(S+s*3.7)}),Te(g,{f:_[0]/2,peak:.1,dec:s*2.2,att:.06,to:e});for(let p=0;p<8;p++){const m=g+p*(s/2)+(p%2?s*.07:0);p===0&&Te(m,{f:110,f2:48,peak:.07,dec:.3,att:.01,to:e}),p%2===1&&vg(e,m,{f:7e3,q:.8,type:"highpass",peak:.012,dec:.05}),Math.random()<.16&&Te(m,{f:[523.25,587.33,659.25,783.99][Math.random()*4|0]*(o%4===3?.84:1),peak:.022,dec:.9,att:.03,to:e})}a+=s*4,o++}},u=jo(i),d=i.createBiquadFilter(),h=i.createGain();d.type="highpass",d.frequency.value=3e3,h.gain.value=.005,u.connect(d).connect(h).connect(t),u.start();const f=setInterval(c,120);c(),Wn={bus:e,iv:f,cr:u,live2:l,cg:h}}const vg=(i,t,e)=>{const{ctx:n}=Wi(),r=jo(n),s=n.createBiquadFilter(),a=n.createGain();s.type=e.type||"bandpass",s.frequency.value=e.f,s.Q.value=e.q||1,a.gain.setValueAtTime(Ei,t),a.gain.exponentialRampToValueAtTime(e.peak,t+.002),a.gain.exponentialRampToValueAtTime(Ei,t+.002+e.dec),r.connect(s).connect(a).connect(i),r.start(t,Math.random()),r.stop(t+e.dec+.05)};function Ac(){if(!Wn)return;const{ctx:i}=Wi()||{},t=Wn;if(Wn=null,!t.pending){if(t.rec){i&&(t.bus.gain.cancelScheduledValues(i.currentTime),t.bus.gain.setTargetAtTime(1e-4,i.currentTime,.7),setTimeout(()=>{try{t.rec.stop(),t.bus.disconnect()}catch{}},4200));return}clearInterval(t.iv),t.live2.stop=!0,i&&(t.bus.gain.setTargetAtTime(1e-4,i.currentTime,.3),t.cg.gain.setTargetAtTime(1e-4,i.currentTime,.3),setTimeout(()=>{try{t.cr.stop(),t.bus.disconnect()}catch{}},1500))}}Vu(i=>{i&&Ac()});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hu="186",Mg=0,kh=1,Sg=2,po=1,yg=2,$s=3,Ir=0,wn=1,_i=2,Bi=0,js=1,yr=2,zh=3,Vh=4,bg=5,cs=100,Eg=101,Tg=102,wg=103,Ag=104,Rg=200,Cg=201,Pg=202,Lg=203,lp=204,cp=205,Dg=206,Ig=207,Ug=208,Ng=209,Fg=210,Og=211,Bg=212,kg=213,zg=214,Rc=0,Cc=1,Pc=2,ha=3,Lc=4,Dc=5,Ic=6,Uc=7,up=0,Vg=1,Hg=2,Si=0,hp=1,dp=2,fp=3,Gu=4,pp=5,mp=6,gp=7,_p=300,Ur=301,Rs=302,Sl=303,yl=304,tl=306,Nc=1e3,Oi=1001,Fc=1002,tn=1003,Gg=1004,ka=1005,ln=1006,bl=1007,Er=1008,Un=1009,xp=1010,vp=1011,da=1012,Wu=1013,Ti=1014,vi=1015,wi=1016,Xu=1017,qu=1018,fa=1020,Mp=35902,Sp=35899,yp=1021,bp=1022,ri=1023,Gi=1026,Tr=1027,Ep=1028,Yu=1029,Nr=1030,$u=1031,Ku=1033,mo=33776,go=33777,_o=33778,xo=33779,Oc=35840,Bc=35841,kc=35842,zc=35843,Vc=36196,Hc=37492,Gc=37496,Wc=37488,Xc=37489,No=37490,qc=37491,Yc=37808,$c=37809,Kc=37810,Zc=37811,Jc=37812,Qc=37813,jc=37814,tu=37815,eu=37816,nu=37817,iu=37818,ru=37819,su=37820,au=37821,ou=36492,lu=36494,cu=36495,uu=36283,hu=36284,Fo=36285,du=36286,Wg=3200,Hh=0,Xg=1,er="",Ze="srgb",Oo="srgb-linear",Bo="linear",ve="srgb",El=7680,qg=519,Yg=512,$g=513,Kg=514,Zu=515,Zg=516,Jg=517,Ju=518,Qg=519,jg=35044,Gh="300 es",Mi=2e3,pa=2001;function t_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ma(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function e_(){const i=ma("canvas");return i.style.display="block",i}const Wh={};function Xh(...i){const t="THREE."+i.shift();console.log(t,...i)}function Tp(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Tp(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function he(...i){i=Tp(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _s(...i){const t=i.join(" ");t in Wh||(Wh[t]=!0,Gt(...i))}function n_(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const i_={[Rc]:Cc,[Pc]:Ic,[Lc]:Uc,[ha]:Dc,[Cc]:Rc,[Ic]:Pc,[Uc]:Lc,[Dc]:ha};class Vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tl=Math.PI/180,fu=180/Math.PI;function ba(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function r_(i,t){return(i%t+t)%t}function wl(i,t,e){return(1-e)*i+e*t}function ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;let oe=hh;class Hr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==h||c!==f||u!==_){let p=l*h+c*f+u*_+d*g;p<0&&(h=-h,f=-f,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const b=Math.acos(p),R=Math.sin(b);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R,l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+u*d+l*f-c*h,t[e+1]=l*_+u*h+c*d-o*f,t[e+2]=c*_+u*f+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dh=class dh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dh.prototype.isVector3=!0;let X=dh;const Al=new X,qh=new Hr,fh=class fh{constructor(t,e,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=r[0],p=r[3],m=r[6],b=r[1],R=r[4],x=r[7],S=r[2],T=r[5],A=r[8];return s[0]=a*g+o*b+l*S,s[3]=a*p+o*R+l*T,s[6]=a*m+o*x+l*A,s[1]=c*g+u*b+d*S,s[4]=c*p+u*R+d*T,s[7]=c*m+u*x+d*A,s[2]=h*g+f*b+_*S,s[5]=h*p+f*R+_*T,s[8]=h*m+f*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,_=e*d+n*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(r*c-u*n)*g,t[2]=(o*n-r*a)*g,t[3]=h*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;let $t=fh;const Rl=new $t,Yh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){const i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ve&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(r.r=xs(r.r),r.g=xs(r.g),r.b=xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?Bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:t,whitePoint:n,transfer:Bo,toXYZ:Yh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Yh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const re=s_();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kr;class a_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Kr===void 0&&(Kr=ma("canvas")),Kr.width=t.width,Kr.height=t.height;const r=Kr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Kr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ma("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let o_=0;class Qu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=ba(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Cl(r[a].image)):s.push(Cl(r[a]))}else s=Cl(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?a_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let l_=0;const Pl=new X;class nn extends Vr{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,n=Oi,r=Oi,s=ln,a=Er,o=ri,l=Un,c=nn.DEFAULT_ANISOTROPY,u=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=ba(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_p)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nc:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nc:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=_p;nn.DEFAULT_ANISOTROPY=1;const ph=class ph{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,x=(f+1)/2,S=(m+1)/2,T=(u+h)/4,A=(d+g)/4,v=(_+p)/4;return R>x&&R>S?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=A/n):x>S?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=v/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=A/s,r=v/s),this.set(n,r,s,e),this}let b=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(d-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;let Ne=ph;class c_ extends Vr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new nn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Qu(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends c_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wp extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends nn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ko=class Ko{constructor(t,e,n,r,s,a,o,l,c,u,d,h,f,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,d,h,f,_,g,p)}set(t,e,n,r,s,a,o,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ko().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Zr.setFromMatrixColumn(t,0).length(),s=1/Zr.setFromMatrixColumn(t,1).length(),a=1/Zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*u,f=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h-g*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,_=o*u,g=o*d;e[0]=l*u,e[4]=_*c-f,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=a*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h_,t,d_)}lookAt(t,e,n){const r=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(n,Pn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(n,Pn)),Ki.normalize(),za.crossVectors(Pn,Ki),r[0]=Ki.x,r[4]=za.x,r[8]=Pn.x,r[1]=Ki.y,r[5]=za.y,r[9]=Pn.y,r[2]=Ki.z,r[6]=za.z,r[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],b=n[3],R=n[7],x=n[11],S=n[15],T=r[0],A=r[4],v=r[8],E=r[12],D=r[1],P=r[5],I=r[9],z=r[13],F=r[2],k=r[6],K=r[10],G=r[14],nt=r[3],V=r[7],$=r[11],j=r[15];return s[0]=a*T+o*D+l*F+c*nt,s[4]=a*A+o*P+l*k+c*V,s[8]=a*v+o*I+l*K+c*$,s[12]=a*E+o*z+l*G+c*j,s[1]=u*T+d*D+h*F+f*nt,s[5]=u*A+d*P+h*k+f*V,s[9]=u*v+d*I+h*K+f*$,s[13]=u*E+d*z+h*G+f*j,s[2]=_*T+g*D+p*F+m*nt,s[6]=_*A+g*P+p*k+m*V,s[10]=_*v+g*I+p*K+m*$,s[14]=_*E+g*z+p*G+m*j,s[3]=b*T+R*D+x*F+S*nt,s[7]=b*A+R*P+x*k+S*V,s[11]=b*v+R*I+x*K+S*$,s[15]=b*E+R*z+x*G+S*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15],b=l*f-c*h,R=o*f-c*d,x=o*h-l*d,S=a*f-c*u,T=a*h-l*u,A=a*d-o*u;return e*(g*b-p*R+m*x)-n*(_*b-p*S+m*T)+r*(_*R-g*S+m*A)-s*(_*x-g*T+p*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],b=e*o-n*a,R=e*l-r*a,x=e*c-s*a,S=n*l-r*o,T=n*c-s*o,A=r*c-s*l,v=u*g-d*_,E=u*p-h*_,D=u*m-f*_,P=d*p-h*g,I=d*m-f*g,z=h*m-f*p,F=b*z-R*I+x*P+S*D-T*E+A*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return t[0]=(o*z-l*I+c*P)*k,t[1]=(r*I-n*z-s*P)*k,t[2]=(g*A-p*T+m*S)*k,t[3]=(h*T-d*A-f*S)*k,t[4]=(l*D-a*z-c*E)*k,t[5]=(e*z-r*D+s*E)*k,t[6]=(p*x-_*A-m*R)*k,t[7]=(u*A-h*x+f*R)*k,t[8]=(a*I-o*D+c*v)*k,t[9]=(n*D-e*I-s*v)*k,t[10]=(_*T-g*x+m*b)*k,t[11]=(d*x-u*T-f*b)*k,t[12]=(o*E-a*P-l*v)*k,t[13]=(e*P-n*E+r*v)*k,t[14]=(g*R-_*S-p*b)*k,t[15]=(u*S-d*R+h*b)*k,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,_=s*d,g=a*u,p=a*d,m=o*d,b=l*c,R=l*u,x=l*d,S=n.x,T=n.y,A=n.z;return r[0]=(1-(g+m))*S,r[1]=(f+x)*S,r[2]=(_-R)*S,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(h+m))*T,r[6]=(p+b)*T,r[7]=0,r[8]=(_+R)*A,r[9]=(p-b)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=Zr.set(r[0],r[1],r[2]).length();const o=Zr.set(r[4],r[5],r[6]).length(),l=Zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const c=1/a,u=1/o,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,e.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=Mi,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Mi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===pa)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Mi,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-r),h=-(e+t)/(e-t),f=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Mi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===pa)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ko.prototype.isMatrix4=!0;let Le=Ko;const Zr=new X,Zn=new Le,h_=new X(0,0,0),d_=new X(1,1,1),Ki=new X,za=new X,Pn=new X,Kh=new Le,Zh=new Hr;class Fr{constructor(t=0,e=0,n=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let f_=0;const Jh=new X,Jr=new Hr,Ci=new Le,Va=new X,zs=new X,p_=new X,m_=new Hr,Qh=new X(1,0,0),jh=new X(0,1,0),td=new X(0,0,1),ed={type:"added"},g_={type:"removed"},Qr={type:"childadded",child:null},Ll={type:"childremoved",child:null};class rn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new X,e=new Fr,n=new Hr,r=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new $t}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,e){return Jr.setFromAxisAngle(t,e),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Va.copy(t):Va.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(zs,Va,this.up):Ci.lookAt(Va,zs,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(he("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):he("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(g_),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,p_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,m_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new X(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fi extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const __={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(__)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class de{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=re.workingColorSpace){if(t=r_(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Il(a,s,t+1/3),this.g=Il(a,s,t),this.b=Il(a,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return re.workingToColorSpace(an.copy(this),t),Math.round(ne(an.r*255,0,255))*65536+Math.round(ne(an.g*255,0,255))*256+Math.round(ne(an.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(an.copy(this),e);const n=an.r,r=an.g,s=an.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Ze){re.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,r=an.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Ha);const n=wl(Zi.h,Ha.h,e),r=wl(Zi.s,Ha.s,e),s=wl(Zi.l,Ha.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new de;de.NAMES=Ap;class x_ extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fr,this.environmentIntensity=1,this.environmentRotation=new Fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Jn=new X,Pi=new X,Ul=new X,Li=new X,jr=new X,ts=new X,nd=new X,Nl=new X,Fl=new X,Ol=new X,Bl=new Ne,kl=new Ne,zl=new Ne;class ii{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Jn.subVectors(t,e),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Jn.subVectors(r,e),Pi.subVectors(n,e),Ul.subVectors(t,e);const a=Jn.dot(Jn),o=Jn.dot(Pi),l=Jn.dot(Ul),c=Pi.dot(Pi),u=Pi.dot(Ul),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),zl.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Bl,s.x),a.addScaledVector(kl,s.y),a.addScaledVector(zl,s.z),a}static isFrontFacing(t,e,n,r){return Jn.subVectors(n,e),Pi.subVectors(t,e),Jn.cross(Pi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ii.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,n),ts.subVectors(s,n),Nl.subVectors(t,n);const l=jr.dot(Nl),c=ts.dot(Nl);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,r);const u=jr.dot(Fl),d=ts.dot(Fl);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(jr,a);Ol.subVectors(t,s);const f=jr.dot(Ol),_=ts.dot(Ol);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ts,o);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return nd.subVectors(s,r),o=(d-u)/(d-u+(f-_)),e.copy(r).addScaledVector(nd,o);const m=1/(p+g+h);return a=g*m,o=h*m,e.copy(n).addScaledVector(jr,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ea{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Wa.subVectors(this.max,Vs),es.subVectors(t.a,Vs),ns.subVectors(t.b,Vs),is.subVectors(t.c,Vs),Ji.subVectors(ns,es),Qi.subVectors(is,ns),mr.subVectors(es,is);let e=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-mr.z,mr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,mr.z,0,-mr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-mr.y,mr.x,0];return!Vl(e,es,ns,is,Wa)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,es,ns,is,Wa))?!1:(Xa.crossVectors(Ji,Qi),e=[Xa.x,Xa.y,Xa.z],Vl(e,es,ns,is,Wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Di=[new X,new X,new X,new X,new X,new X,new X,new X],Qn=new X,Ga=new Ea,es=new X,ns=new X,is=new X,Ji=new X,Qi=new X,mr=new X,Vs=new X,Wa=new X,Xa=new X,gr=new X;function Vl(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gr.fromArray(i,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=t.dot(gr),c=e.dot(gr),u=n.dot(gr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ge=new X,qa=new oe;let v_=0;class yi extends Vr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jg,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qa.fromBufferAttribute(this,e),qa.applyMatrix3(t),this.setXY(e,qa.x,qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends yi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cp extends yi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $n extends yi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const M_=new Ea,Hs=new X,Hl=new X;class th{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):M_.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Hs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Hl)),this.expandByPoint(Hs.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let S_=0;const Hn=new Le,Gl=new rn,rs=new X,Ln=new Ea,Gs=new Ea,Ke=new X;class li extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t_(t)?Cp:Rp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $n(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&he('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){he("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(Ln.min,Gs.min),Ln.expandByPoint(Ke),Ke.addVectors(Ln.max,Gs.max),Ln.expandByPoint(Ke)):(Ln.expandByPoint(Gs.min),Ln.expandByPoint(Gs.max))}Ln.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ke));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Ke.add(rs)),r=Math.max(r,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&he('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){he("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new yi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,d=new X,h=new oe,f=new oe,_=new oe,g=new X,p=new X;function m(v,E,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,D),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,E),_.fromBufferAttribute(s,D),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[v].add(g),o[E].add(g),o[D].add(g),l[v].add(p),l[E].add(p),l[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,E=b.length;v<E;++v){const D=b[v],P=D.start,I=D.count;for(let z=P,F=P+I;z<F;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const R=new X,x=new X,S=new X,T=new X;function A(v){S.fromBufferAttribute(r,v),T.copy(S);const E=o[v];R.copy(E),R.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(T,E);const P=x.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,P)}for(let v=0,E=b.length;v<E;++v){const D=b[v],P=D.start,I=D.count;for(let z=P,F=P+I;z<F;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new yi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new yi(h,u,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new li,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new X,y_=new X,b_=new $t;class tr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Wl.subVectors(n,e).cross(y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(Wl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||b_.getNormalMatrix(t),r=this.coplanarPoint(Wl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let E_=0;class el extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=js,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new tr().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ii=new X,Xl=new X,Ya=new X,$a=new X;class Pp{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Xl.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),$a.copy(this.origin).sub(Xl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ya),o=$a.dot(this.direction),l=-$a.dot(Ya),c=$a.lengthSq(),u=Math.abs(1-a*a);let d,h,f,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xl).addScaledVector(Ya,h),f}intersectSphere(t,e){if(t.radius<0)return null;Ii.subVectors(t.center,this.origin);const n=Ii.dot(this.direction),r=Ii.dot(Ii)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,_=e.x-a.x,g=e.y-a.y,p=e.z-a.z,m=n.x-a.x,b=n.y-a.y,R=n.z-a.z,x=Math.abs(l),S=Math.abs(c),T=Math.abs(u);let A,v,E,D,P,I,z,F,k,K,G,nt;if(x>=S&&x>=T?(E=l,I=d,k=_,nt=m,l>=0?(A=c,v=u,D=h,P=f,z=g,F=p,K=b,G=R):(A=u,v=c,D=f,P=h,z=p,F=g,K=R,G=b)):S>=T?(E=c,I=h,k=g,nt=b,c>=0?(A=u,v=l,D=f,P=d,z=p,F=_,K=R,G=m):(A=l,v=u,D=d,P=f,z=_,F=p,K=m,G=R)):(E=u,I=f,k=p,nt=R,u>=0?(A=l,v=c,D=d,P=h,z=_,F=g,K=m,G=b):(A=c,v=l,D=h,P=d,z=g,F=_,K=b,G=m)),E===0)return null;const V=A/E,$=v/E,j=1/E,bt=D-V*I,vt=P-$*I,Ht=z-V*k,Nt=F-$*k,Vt=K-V*nt,J=G-$*nt,st=Vt*Nt-J*Ht,Et=bt*J-vt*Vt,Ft=Ht*vt-Nt*bt;if(r){if(st<0||Et<0||Ft<0)return null}else if((st<0||Et<0||Ft<0)&&(st>0||Et>0||Ft>0))return null;const Mt=st+Et+Ft;if(Mt===0)return null;const Qt=j*(st*I+Et*k+Ft*nt);return(Mt>0?Qt<0:Qt>0)?null:this.at(Qt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn extends el{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fr,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const id=new Le,_r=new Pp,Ka=new th,rd=new X,Za=new X,Ja=new X,Qa=new X,ql=new X,ja=new X,sd=new X,to=new X;class Be extends rn{constructor(t=new li,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ja.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ql.fromBufferAttribute(d,t),a?ja.addScaledVector(ql,u):ja.addScaledVector(ql.sub(e),u))}e.add(ja)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),_r.copy(t.ray).recast(t.near),!(Ka.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Ka,rd)===null||_r.origin.distanceToSquared(rd)>(t.far-t.near)**2))&&(id.copy(s).invert(),_r.copy(t.ray).applyMatrix4(id),!(n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_r)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],b=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,S=R;x<S;x+=3){const T=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);r=eo(this,m,t,n,c,u,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const b=o.getX(p),R=o.getX(p+1),x=o.getX(p+2);r=eo(this,a,t,n,c,u,d,b,R,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],b=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,S=R;x<S;x+=3){const T=x,A=x+1,v=x+2;r=eo(this,m,t,n,c,u,d,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const b=p,R=p+1,x=p+2;r=eo(this,a,t,n,c,u,d,b,R,x),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function T_(i,t,e,n,r,s,a,o){let l;if(t.side===wn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Ir,o),l===null)return null;to.copy(o),to.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(to);return c<e.near||c>e.far?null:{distance:c,point:to.clone(),object:i}}function eo(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Za),i.getVertexPosition(l,Ja),i.getVertexPosition(c,Qa);const u=T_(i,t,e,n,Za,Ja,Qa,sd);if(u){const d=new X;ii.getBarycoord(sd,Za,Ja,Qa,d),r&&(u.uv=ii.getInterpolatedAttribute(r,o,l,c,d,new oe)),s&&(u.uv1=ii.getInterpolatedAttribute(s,o,l,c,d,new oe)),a&&(u.normal=ii.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};ii.getNormal(Za,Ja,Qa,h.normal),u.face=h,u.barycoord=d}return u}class w_ extends nn{constructor(t=null,e=1,n=1,r,s,a,o,l,c=tn,u=tn,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xr=new th,A_=new oe(.5,.5),no=new X;class eh{constructor(t=new tr,e=new tr,n=new tr,r=new tr,s=new tr,a=new tr){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mi,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],g=s[9],p=s[10],m=s[11],b=s[12],R=s[13],x=s[14],S=s[15];if(r[0].setComponents(c-a,f-u,m-_,S-b).normalize(),r[1].setComponents(c+a,f+u,m+_,S+b).normalize(),r[2].setComponents(c+o,f+d,m+g,S+R).normalize(),r[3].setComponents(c-o,f-d,m-g,S-R).normalize(),n)r[4].setComponents(l,h,p,x).normalize(),r[5].setComponents(c-l,f-h,m-p,S-x).normalize();else if(r[4].setComponents(c-l,f-h,m-p,S-x).normalize(),e===Mi)r[5].setComponents(c+l,f+h,m+p,S+x).normalize();else if(e===pa)r[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){xr.center.set(0,0,0);const e=A_.distanceTo(t.center);return xr.radius=.7071067811865476+e,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(no.x=r.normal.x>0?t.max.x:t.min.x,no.y=r.normal.y>0?t.max.y:t.min.y,no.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lp extends nn{constructor(t=[],e=Ur,n,r,s,a,o,l,c,u){super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class us extends nn{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends nn{constructor(t,e,n=Ti,r,s,a,o=tn,l=tn,c,u=Gi,d=1){if(u!==Gi&&u!==Tr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class R_ extends ga{constructor(t,e=Ti,n=Ur,r,s,a=tn,o=tn,l,c=Gi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dp extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ta extends li{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(d,2));function _(g,p,m,b,R,x,S,T,A,v,E){const D=x/A,P=S/v,I=x/2,z=S/2,F=T/2,k=A+1,K=v+1;let G=0,nt=0;const V=new X;for(let $=0;$<K;$++){const j=$*P-z;for(let bt=0;bt<k;bt++){const vt=bt*D-I;V[g]=vt*b,V[p]=j*R,V[m]=F,c.push(V.x,V.y,V.z),V[g]=0,V[p]=0,V[m]=T>0?1:-1,u.push(V.x,V.y,V.z),d.push(bt/A),d.push(1-$/v),G+=1}}for(let $=0;$<v;$++)for(let j=0;j<A;j++){const bt=h+j+k*$,vt=h+j+k*($+1),Ht=h+(j+1)+k*($+1),Nt=h+(j+1)+k*$;l.push(bt,vt,Nt),l.push(vt,Ht,Nt),nt+=6}o.addGroup(f,nt,E),f+=nt,h+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class C_{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,f=(a-u)/h;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new oe:new X);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new X,r=[],s=[],a=[],o=new X,l=new Le;for(let f=0;f<=t;f++){const _=f/t;r[f]=this.getTangentAt(_,new X)}s[0]=new X,a[0]=new X;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ne(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(ne(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],f*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function nh(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const ad=new X,od=new X,Yl=new nh,$l=new nh,Kl=new nh;class P_ extends C_{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new X){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(od.subVectors(r[0],r[1]).add(r[0]),c=od);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(ad.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ad),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Yl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,p),$l.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,p),Kl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),$l.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Kl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Yl.calc(l),$l.calc(l),Kl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new X().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class mn extends li{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=t/o,h=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const b=m*h-a;for(let R=0;R<c;R++){const x=R*d-s;_.push(x,-b,0),g.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const R=b+c*m,x=b+c*(m+1),S=b+1+c*(m+1),T=b+1+c*m;f.push(R,x,T),f.push(x,S,T)}this.setIndex(f),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}function Cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(ld(r))r.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(ld(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=Cs(i[e]);for(const r in n)t[r]=n[r]}return t}function ld(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function L_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ip(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const D_={clone:Cs,merge:pn};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends el{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=L_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(r.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ne().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Le().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class N_ extends Ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F_ extends el{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O_ extends el{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(cd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!cd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function cd(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class B_{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const k_=new B_;class ih{constructor(t){this.manager=t!==void 0?t:k_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class z_ extends ih{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Zl.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let d=ss.get(a);d===void 0&&(d=[],ss.set(a,d)),d.push({onLoad:e,onError:r})}return a}const o=ma("img");function l(){u(),e&&e(this);const d=ss.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ss.delete(this),s.manager.itemEnd(t)}function c(d){u(),r&&r(d),Zl.remove(`image:${t}`);const h=ss.get(this)||[];for(let f=0;f<h.length;f++){const _=h[f];_.onError&&_.onError(d)}ss.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zl.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class V_ extends ih{constructor(t){super(t)}load(t,e,n,r){const s=new nn,a=new z_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Up extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class H_ extends Up{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Jl=new Le,ud=new X,hd=new X;class G_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jl,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===pa||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const io=new X,ro=new Hr,di=new X;class Np extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(io,ro,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ro,di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(io,ro,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,ro,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new X,dd=new oe,fd=new oe;class ni extends Np{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,dd,fd),e.subVectors(fd,dd)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nl extends Np{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class W_ extends G_{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X_ extends Up{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new W_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const as=-90,os=1;class q_ extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(as,os,t,e);r.layers=this.layers,this.add(r);const s=new ni(as,os,t,e);s.layers=this.layers,this.add(s);const a=new ni(as,os,t,e);a.layers=this.layers,this.add(a);const o=new ni(as,os,t,e);o.layers=this.layers,this.add(o);const l=new ni(as,os,t,e);l.layers=this.layers,this.add(l);const c=new ni(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Y_ extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const pd=new Le;class $_{constructor(t,e,n=0,r=1/0){this.ray=new Pp(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):he("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return pd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pd),this}intersectObject(t,e=!0,n=[]){return pu(t,this,n,e),n.sort(md),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)pu(t[r],this,n,e);return n.sort(md),n}}function md(i,t){return i.distance-t.distance}function pu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)pu(s[a],t,e,!0)}}class K_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Gt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const mh=class mh{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};mh.prototype.isMatrix2=!0;let gd=mh;function _d(i,t,e,n){const r=Z_(n);switch(e){case yp:return i*t;case Ep:return i*t/r.components*r.byteLength;case Yu:return i*t/r.components*r.byteLength;case Nr:return i*t*2/r.components*r.byteLength;case $u:return i*t*2/r.components*r.byteLength;case bp:return i*t*3/r.components*r.byteLength;case ri:return i*t*4/r.components*r.byteLength;case Ku:return i*t*4/r.components*r.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:case zc:return Math.max(i,16)*Math.max(t,8)/4;case Oc:case kc:return Math.max(i,8)*Math.max(t,8)/2;case Vc:case Hc:case Wc:case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gc:case No:case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ou:case lu:case cu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uu:case hu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case du:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z_(i){switch(i){case Un:case xp:return{byteLength:1,components:1};case da:case vp:case wi:return{byteLength:2,components:1};case Xu:case qu:return{byteLength:2,components:4};case Ti:case Wu:case vi:return{byteLength:4,components:1};case Mp:case Sp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hu}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fp(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function J_(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ox=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ev=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ov=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Q_,alphahash_pars_fragment:j_,alphamap_fragment:tx,alphamap_pars_fragment:ex,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:rx,aomap_pars_fragment:sx,batching_pars_vertex:ax,batching_vertex:ox,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:ux,iridescence_fragment:hx,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:_x,color_pars_fragment:xx,color_pars_vertex:vx,color_vertex:Mx,common:Sx,cube_uv_reflection_fragment:yx,defaultnormal_vertex:bx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Tx,emissivemap_fragment:wx,emissivemap_pars_fragment:Ax,colorspace_fragment:Rx,colorspace_pars_fragment:Cx,envmap_fragment:Px,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Dx,envmap_pars_vertex:Ix,envmap_physical_pars_fragment:Wx,envmap_vertex:Ux,fog_vertex:Nx,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:Bx,gradientmap_pars_fragment:kx,lightmap_pars_fragment:zx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:jx,lightprobes_pars_fragment:tv,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:rv,map_fragment:sv,map_pars_fragment:av,map_particle_fragment:ov,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphinstance_vertex:hv,morphcolor_vertex:dv,morphnormal_vertex:fv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:_v,normal_pars_fragment:xv,normal_pars_vertex:vv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:bv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Tv,opaque_fragment:wv,packing:Av,premultiplied_alpha_fragment:Rv,project_vertex:Cv,dithering_fragment:Pv,dithering_pars_fragment:Lv,roughnessmap_fragment:Dv,roughnessmap_pars_fragment:Iv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Ov,skinbase_vertex:Bv,skinning_pars_vertex:kv,skinning_vertex:zv,skinnormal_vertex:Vv,specularmap_fragment:Hv,specularmap_pars_fragment:Gv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:qv,transmission_pars_fragment:Yv,uv_pars_fragment:$v,uv_pars_vertex:Kv,uv_vertex:Zv,worldpos_vertex:Jv,background_vert:Qv,background_frag:jv,backgroundCube_vert:tM,backgroundCube_frag:eM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distance_vert:aM,distance_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:dM,meshbasic_frag:fM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:_M,meshnormal_vert:xM,meshnormal_frag:vM,meshphong_vert:MM,meshphong_frag:SM,meshphysical_vert:yM,meshphysical_frag:bM,meshtoon_vert:EM,meshtoon_frag:TM,points_vert:wM,points_frag:AM,shadow_vert:RM,shadow_frag:CM,sprite_vert:PM,sprite_frag:LM},_t={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},mi={basic:{uniforms:pn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:pn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:pn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:pn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:pn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new de(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:pn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:pn([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:pn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:pn([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:pn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:pn([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:pn([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:pn([_t.lights,_t.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};mi.physical={uniforms:pn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const so={r:0,b:0,g:0},DM=new Le,Op=new $t;Op.set(-1,0,0,0,1,0,0,0,1);function IM(i,t,e,n,r,s){const a=new de(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const x=b.backgroundBlurriness>0;R=t.get(R,x)}return R}function _(b){let R=!1;const x=f(b);x===null?p(a,o):x&&x.isColor&&(p(x,1),R=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,R){const x=f(R);x&&(x.isCubeTexture||x.mapping===tl)?(c===void 0&&(c=new Be(new Ta(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Cs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Op),c.material.toneMapped=re.getTransfer(x.colorSpace)!==ve,(u!==x||d!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Be(new mn(2,2),new Ai({name:"BackgroundMaterial",uniforms:Cs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,R){b.getRGB(so,Ip(i)),e.buffers.color.setClear(so.r,so.g,so.b,R,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:_,addToRenderList:g,dispose:m}}function UM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(P,I,z,F,k){let K=!1;const G=d(P,F,z,I);s!==G&&(s=G,c(s.object)),K=f(P,F,z,k),K&&_(P,F,z,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(P,I,z,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,I,z,F){const k=F.wireframe===!0;let K=n[I.id];K===void 0&&(K={},n[I.id]=K);const G=P.isInstancedMesh===!0?P.id:0;let nt=K[G];nt===void 0&&(nt={},K[G]=nt);let V=nt[z.id];V===void 0&&(V={},nt[z.id]=V);let $=V[k];return $===void 0&&($=h(l()),V[k]=$),$}function h(P){const I=[],z=[],F=[];for(let k=0;k<e;k++)I[k]=0,z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,I,z,F){const k=s.attributes,K=I.attributes;let G=0;const nt=z.getAttributes();for(const V in nt)if(nt[V].location>=0){const j=k[V];let bt=K[V];if(bt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(bt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(bt=P.instanceColor)),j===void 0||j.attribute!==bt||bt&&j.data!==bt.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function _(P,I,z,F){const k={},K=I.attributes;let G=0;const nt=z.getAttributes();for(const V in nt)if(nt[V].location>=0){let j=K[V];j===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const bt={};bt.attribute=j,j&&j.data&&(bt.data=j.data),k[V]=bt,G++}s.attributes=k,s.attributesNum=G,s.index=F}function g(){const P=s.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function p(P){m(P,0)}function m(P,I){const z=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;z[P]=1,F[P]===0&&(i.enableVertexAttribArray(P),F[P]=1),k[P]!==I&&(i.vertexAttribDivisor(P,I),k[P]=I)}function b(){const P=s.newAttributes,I=s.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==P[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function R(P,I,z,F,k,K,G){G===!0?i.vertexAttribIPointer(P,I,z,k,K):i.vertexAttribPointer(P,I,z,F,k,K)}function x(P,I,z,F){g();const k=F.attributes,K=z.getAttributes(),G=I.defaultAttributeValues;for(const nt in K){const V=K[nt];if(V.location>=0){let $=k[nt];if($===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const j=$.normalized,bt=$.itemSize,vt=t.get($);if(vt===void 0)continue;const Ht=vt.buffer,Nt=vt.type,Vt=vt.bytesPerElement,J=Nt===i.INT||Nt===i.UNSIGNED_INT||$.gpuType===Wu;if($.isInterleavedBufferAttribute){const st=$.data,Et=st.stride,Ft=$.offset;if(st.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)m(V.location+Mt,st.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)p(V.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Mt=0;Mt<V.locationSize;Mt++)R(V.location+Mt,bt/V.locationSize,Nt,j,Et*Vt,(Ft+bt/V.locationSize*Mt)*Vt,J)}else{if($.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)m(V.location+st,$.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<V.locationSize;st++)p(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let st=0;st<V.locationSize;st++)R(V.location+st,bt/V.locationSize,Nt,j,bt*Vt,bt/V.locationSize*st*Vt,J)}}else if(G!==void 0){const j=G[nt];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}b()}function S(){E();for(const P in n){const I=n[P];for(const z in I){const F=I[z];for(const k in F){const K=F[k];for(const G in K)u(K[G].object),delete K[G];delete F[k]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const z in I){const F=I[z];for(const k in F){const K=F[k];for(const G in K)u(K[G].object),delete K[G];delete F[k]}}delete n[P.id]}function A(P){for(const I in n){const z=n[I];for(const F in z){const k=z[F];if(k[P.id]===void 0)continue;const K=k[P.id];for(const G in K)u(K[G].object),delete K[G];delete k[P.id]}}}function v(P){for(const I in n){const z=n[I],F=P.isInstancedMesh===!0?P.id:0,k=z[F];if(k!==void 0){for(const K in k){const G=k[K];for(const nt in G)u(G[nt].object),delete G[nt];delete k[K]}delete z[F],Object.keys(z).length===0&&delete n[I]}}}function E(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function NM(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function FM(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ri&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Un&&A!==vi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:x,maxSamples:S,samples:T}}function OM(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new tr,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const b=s?0:n,R=b*4;let x=m.clippingState||null;l.value=x,x=u(_,h,R,f);for(let S=0;S!==R;++S)x[S]=e[S];m.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,x=f;R!==g;++R,x+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}const fs=4,BM=6,kM=20,zM=256,Ws=new nl,xd=new de;let Ql=null,jl=0,tc=0,ec=!1;const VM=new X,vr=new X;class vd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=VM}=s;Ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ql,jl,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ql=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:wi,format:ri,colorSpace:Oo,depthBuffer:!1},r=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=HM(s)),this._blurMaterial=WM(s,t,e),this._ggxMaterial=GM(s,t,e)}return r}_compileMaterial(t){const e=new Be(new li,t);this._renderer.compile(e,Ws)}_sceneToCubeUV(t,e,n,r,s){const l=new ni(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(xd),d.toneMapping=Si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new Ta,new fn({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(xd),m=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):x===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const S=this._cubeSize;ls(r,x*S,R>2?S:0,S,S),d.setRenderTarget(r),m&&d.render(g,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ur||t.mapping===Rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ws)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-fs?n-_+fs:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,ls(s,p,m,3*g,2*g),r.setRenderTarget(s),r.render(o,Ws),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,ls(t,p,m,3*g,2*g),r.setRenderTarget(t),r.render(o,Ws)}_blur(t,e,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-fs?r-this._lodMax+fs:0),h=4*(this._cubeSize-u);ls(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ws)}}function HM(i){const t=[],e=[];let n=i;const r=i-fs+1+BM;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,_=new Float32Array(f*h*d),g=new Float32Array(f*h*d);for(let m=0;m<d;m++){const b=m%3*2/3-1,R=m>2?0:-1,x=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(x,f*h*m);for(let S=0;S<h;S++){const T=u[S*2]*2-1,A=u[S*2+1]*2-1;m===0?vr.set(1,A,T):m===1?vr.set(-T,1,-A):m===2?vr.set(-T,A,1):m===3?vr.set(-1,A,-T):m===4?vr.set(-T,-1,A):vr.set(T,A,-1),vr.toArray(g,(m*h+S)*f)}}const p=new li;p.setAttribute("position",new yi(_,f)),p.setAttribute("outputDirection",new yi(g,f)),e.push(new Be(p,null)),n>fs&&n--}return{lodMeshes:e,sizeLods:t}}function Md(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function GM(i,t,e){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function WM(i,t,e){return new Ai({name:"SphericalGaussianBlur",defines:{SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sd(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function yd(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bp extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Lp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ta(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Bi});s.uniforms.tEquirect.value=e;const a=new Be(r,s),o=e.minFilter;return e.minFilter===Er&&(e.minFilter=ln),new q_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function XM(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Sl||f===yl)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new Bp(_.height);return g.fromEquirectangularTexture(i,h),t.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===Sl||f===yl,g=f===Ur||f===Rs;if(_||g){let p=e.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new vd(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{const b=h.image;return _&&b&&b.height>0||g&&b&&l(b)?(n===null&&(n=new vd(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Sl?h.mapping=Ur:f===yl&&(h.mapping=Rs),h}function l(h){let f=0;const _=6;for(let g=0;g<_;g++)h[g]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function qM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&_s("WebGLRenderer: "+n+" extension not supported."),r}}}function YM(i,t,e,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(f!==null){const b=f.array;g=f.version;for(let R=0,x=b.length;R<x;R+=3){const S=b[R+0],T=b[R+1],A=b[R+2];h.push(S,T,T,A,A,S)}}else{const b=_.array;g=_.version;for(let R=0,x=b.length/3-1;R<x;R+=3){const S=R+0,T=R+1,A=R+2;h.push(S,T,T,A,A,S)}}const p=new(_.count>=65535?Cp:Rp)(h,1);p.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function $M(i,t,e){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let g=0;for(let p=0;p<f;p++)g+=h[p];e.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function KM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:he("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ZM(i,t,e){const n=new WeakMap,r=new Ne;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let S=o.attributes.position.count*x,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*T*4*d),v=new wp(A,S,T,d);v.type=vi,v.needsUpdate=!0;const E=x*4;for(let P=0;P<d;P++){const I=m[P],z=b[P],F=R[P],k=S*T*4*P;for(let K=0;K<I.count;K++){const G=K*E;_===!0&&(r.fromBufferAttribute(I,K),A[k+G+0]=r.x,A[k+G+1]=r.y,A[k+G+2]=r.z,A[k+G+3]=0),g===!0&&(r.fromBufferAttribute(z,K),A[k+G+4]=r.x,A[k+G+5]=r.y,A[k+G+6]=r.z,A[k+G+7]=0),p===!0&&(r.fromBufferAttribute(F,K),A[k+G+8]=r.x,A[k+G+9]=r.y,A[k+G+10]=r.z,A[k+G+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:v,size:new oe(S,T)},n.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function JM(i,t,e,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const QM={[hp]:"LINEAR_TONE_MAPPING",[dp]:"REINHARD_TONE_MAPPING",[fp]:"CINEON_TONE_MAPPING",[Gu]:"ACES_FILMIC_TONE_MAPPING",[mp]:"AGX_TONE_MAPPING",[gp]:"NEUTRAL_TONE_MAPPING",[pp]:"CUSTOM_TONE_MAPPING"};function jM(i,t,e,n,r,s){const a=new oi(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new li;c.setAttribute("position",new $n([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $n([0,2,0,0,2,0],2));const u=new N_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Be(c,u),h=new nl(-1,1,1,-1,0,1);let f=null,_=null,g=!1,p,m=null,b=[],R=!1;this.setSize=function(x,S){a.setSize(x,S),o!==null&&o.setSize(x,S),l!==null&&l.setSize(x,S);for(let T=0;T<b.length;T++){const A=b[T];A.setSize&&A.setSize(x,S)}},this.setEffects=function(x){b=x,R=b.length>0&&b[0].isRenderPass===!0;const S=a.width,T=a.height;b.length>0&&o===null&&(o=new oi(S,T,{type:wi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(S,T,{type:wi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){const v=b[A];v.setSize&&v.setSize(S,T)}},this.begin=function(x,S){if(g||x.toneMapping===Si&&b.length===0)return!1;if(m=S,S!==null){const T=S.width,A=S.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return R===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Si,!0},this.hasRenderPass=function(){return R},this.end=function(x,S){x.toneMapping=p,g=!0;let T=a,A=o;for(let v=0;v<b.length;v++){const E=b[v];E.enabled!==!1&&(E.render(x,A,T,S),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==x.outputColorSpace||_!==x.toneMapping){f=x.outputColorSpace,_=x.toneMapping,u.defines={},re.getTransfer(f)===ve&&(u.defines.SRGB_TRANSFER="");const v=QM[_];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const kp=new nn,mu=new ga(1,1),zp=new wp,Vp=new u_,Hp=new Lp,bd=[],Ed=[],Td=new Float32Array(16),wd=new Float32Array(9),Ad=new Float32Array(4);function Is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=bd[r];if(s===void 0&&(s=new Float32Array(r),bd[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function rl(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function nS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function iS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function rS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ad.set(n),i.uniformMatrix2fv(this.addr,!1,Ad),Ye(e,n)}}function sS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;wd.set(n),i.uniformMatrix3fv(this.addr,!1,wd),Ye(e,n)}}function aS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Ye(e,n)}}function oS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function cS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function uS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function hS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function fS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function pS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function mS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?Ju:Zu,s=mu):s=kp,e.setTexture2D(t||s,r)}function gS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Vp,r)}function _S(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Hp,r)}function xS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||zp,r)}function vS(i){switch(i){case 5126:return tS;case 35664:return eS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return aS;case 5124:case 35670:return oS;case 35667:case 35671:return lS;case 35668:case 35672:return cS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return xS}}function MS(i,t){i.uniform1fv(this.addr,t)}function SS(i,t){const e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function yS(i,t){const e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function bS(i,t){const e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function ES(i,t){const e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function TS(i,t){const e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wS(i,t){const e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function AS(i,t){i.uniform1iv(this.addr,t)}function RS(i,t){i.uniform2iv(this.addr,t)}function CS(i,t){i.uniform3iv(this.addr,t)}function PS(i,t){i.uniform4iv(this.addr,t)}function LS(i,t){i.uniform1uiv(this.addr,t)}function DS(i,t){i.uniform2uiv(this.addr,t)}function IS(i,t){i.uniform3uiv(this.addr,t)}function US(i,t){i.uniform4uiv(this.addr,t)}function NS(i,t,e){const n=this.cache,r=t.length,s=rl(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=mu:a=kp;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function FS(i,t,e){const n=this.cache,r=t.length,s=rl(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Vp,s[a])}function OS(i,t,e){const n=this.cache,r=t.length,s=rl(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Hp,s[a])}function BS(i,t,e){const n=this.cache,r=t.length,s=rl(e,r);qe(n,s)||(i.uniform1iv(this.addr,s),Ye(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||zp,s[a])}function kS(i){switch(i){case 5126:return MS;case 35664:return SS;case 35665:return yS;case 35666:return bS;case 35674:return ES;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return DS;case 36295:return IS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return FS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return BS}}class zS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vS(e.type)}}class VS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kS(e.type)}}class HS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Rd(i,t){i.seq.push(t),i.map[t.id]=t}function GS(i,t,e){const n=i.name,r=n.length;for(nc.lastIndex=0;;){const s=nc.exec(n),a=nc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rd(e,c===void 0?new zS(o,i,t):new VS(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new HS(o),Rd(e,d)),e=d}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);GS(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Cd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const WS=37297;let XS=0;function qS(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Pd=new $t;function YS(i){re._getMatrix(Pd,re.workingColorSpace,i);const t=`mat3( ${Pd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Bo:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+qS(i.getShaderSource(t),o)}else return s}function $S(i,t){const e=YS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const KS={[hp]:"Linear",[dp]:"Reinhard",[fp]:"Cineon",[Gu]:"ACESFilmic",[mp]:"AgX",[gp]:"Neutral",[pp]:"Custom"};function ZS(i,t){const e=KS[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ao=new X;function JS(){re.getLuminanceCoefficients(ao);const i=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function jS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ty(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ks(i){return i!==""}function Dd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(i){return i.replace(ey,iy)}const ny=new Map;function iy(i,t){let e=jt[t];if(e===void 0){const n=ny.get(t);if(n!==void 0)e=jt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gu(e)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(ry,sy)}function sy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ay={[po]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function oy(i){return ay[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ly={[Ur]:"ENVMAP_TYPE_CUBE",[Rs]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};function cy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ly[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const uy={[Rs]:"ENVMAP_MODE_REFRACTION"};function hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dy={[up]:"ENVMAP_BLENDING_MULTIPLY",[Vg]:"ENVMAP_BLENDING_MIX",[Hg]:"ENVMAP_BLENDING_ADD"};function fy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dy[i.combine]||"ENVMAP_BLENDING_NONE"}function py(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function my(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=oy(e),c=cy(e),u=hy(e),d=fy(e),h=py(e),f=QS(e),_=jS(s),g=r.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`)):(p=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),m=[Nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?jt.tonemapping_pars_fragment:"",e.toneMapping!==Si?ZS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,$S("linearToOutputTexel",e.outputColorSpace),JS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),a=gu(a),a=Dd(a,e),a=Id(a,e),o=gu(o),o=Dd(o,e),o=Id(o,e),a=Ud(a),o=Ud(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=b+p+a,x=b+m+o,S=Cd(r,r.VERTEX_SHADER,R),T=Cd(r,r.FRAGMENT_SHADER,x);r.attachShader(g,S),r.attachShader(g,T),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(S)||"",F=r.getShaderInfoLog(T)||"",k=I.trim(),K=z.trim(),G=F.trim();let nt=!0,V=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,S,T);else{const $=Ld(r,S,"vertex"),j=Ld(r,T,"fragment");he("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+$+`
`+j)}else k!==""?Gt("WebGLProgram: Program Info Log:",k):(K===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:nt,programLog:k,vertexShader:{log:K,prefix:p},fragmentShader:{log:G,prefix:m}})}r.deleteShader(S),r.deleteShader(T),v=new vo(r,g),E=ty(r,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(g,WS)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let gy=0;class _y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xy(t),e.set(t,n)),n}}class xy{constructor(t){this.id=gy++,this.code=t,this.usedTimes=0}}function vy(i){return i===Nr||i===No||i===Fo}function My(i,t,e,n,r,s){const a=new ju,o=new _y,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,E,D,P,I,z){const F=P.fog,k=I.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,nt=t.get(v.envMap||K,G),V=nt&&nt.mapping===tl?nt.image.height:null,$=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=j!==void 0?j.length:0;let vt=0;k.morphAttributes.position!==void 0&&(vt=1),k.morphAttributes.normal!==void 0&&(vt=2),k.morphAttributes.color!==void 0&&(vt=3);let Ht,Nt,Vt,J;if($){const ie=mi[$];Ht=ie.vertexShader,Nt=ie.fragmentShader}else{Ht=v.vertexShader,Nt=v.fragmentShader;const ie=o.getVertexShaderStage(v),le=o.getFragmentShaderStage(v);o.update(v,ie,le),Vt=ie.id,J=le.id}const st=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Ft=I.isInstancedMesh===!0,Mt=I.isBatchedMesh===!0,Qt=!!v.map,Oe=!!v.matcap,Zt=!!nt,te=!!v.aoMap,_e=!!v.lightMap,zt=!!v.bumpMap&&v.wireframe===!1,Se=!!v.normalMap,De=!!v.displacementMap,xe=!!v.emissiveMap,ce=!!v.metalnessMap,Re=!!v.roughnessMap,O=v.anisotropy>0,Wt=v.clearcoat>0,fe=v.dispersion>0,w=v.retroreflectivity>0,M=v.iridescence>0,H=v.sheen>0,W=v.transmission>0,tt=O&&!!v.anisotropyMap,ct=Wt&&!!v.clearcoatMap,ft=Wt&&!!v.clearcoatNormalMap,et=Wt&&!!v.clearcoatRoughnessMap,rt=M&&!!v.iridescenceMap,dt=M&&!!v.iridescenceThicknessMap,Dt=H&&!!v.sheenColorMap,pt=H&&!!v.sheenRoughnessMap,ut=!!v.specularMap,It=!!v.specularColorMap,kt=!!v.specularIntensityMap,Xt=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,ht=!!v.gradientMap,it=!!v.alphaMap,lt=v.alphaTest>0,xt=!!v.alphaHash,at=!!v.extensions;let Lt=Si;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const Tt={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ht,fragmentShader:Nt,defines:v.defines,customVertexShaderID:Vt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&I._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&I.instanceColor!==null,instancingMorph:Ft&&I.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Qt,matcap:Oe,envMap:Zt,envMapMode:Zt&&nt.mapping,envMapCubeUVHeight:V,aoMap:te,lightMap:_e,bumpMap:zt,normalMap:Se,displacementMap:De,emissiveMap:xe,normalMapObjectSpace:Se&&v.normalMapType===Xg,normalMapTangentSpace:Se&&v.normalMapType===Hh,packedNormalMap:Se&&v.normalMapType===Hh&&vy(v.normalMap.format),metalnessMap:ce,roughnessMap:Re,anisotropy:O,anisotropyMap:tt,clearcoat:Wt,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:et,dispersion:fe,retroreflection:w,iridescence:M,iridescenceMap:rt,iridescenceThicknessMap:dt,sheen:H,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:ut,specularColorMap:It,specularIntensityMap:kt,transmission:W,transmissionMap:Xt,thicknessMap:U,gradientMap:ht,opaque:v.transparent===!1&&v.blending===js&&v.alphaToCoverage===!1,alphaMap:it,alphaTest:lt,alphaHash:xt,combine:v.combine,mapUv:Qt&&_(v.map.channel),aoMapUv:te&&_(v.aoMap.channel),lightMapUv:_e&&_(v.lightMap.channel),bumpMapUv:zt&&_(v.bumpMap.channel),normalMapUv:Se&&_(v.normalMap.channel),displacementMapUv:De&&_(v.displacementMap.channel),emissiveMapUv:xe&&_(v.emissiveMap.channel),metalnessMapUv:ce&&_(v.metalnessMap.channel),roughnessMapUv:Re&&_(v.roughnessMap.channel),anisotropyMapUv:tt&&_(v.anisotropyMap.channel),clearcoatMapUv:ct&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(v.sheenRoughnessMap.channel),specularMapUv:ut&&_(v.specularMap.channel),specularColorMapUv:It&&_(v.specularColorMap.channel),specularIntensityMapUv:kt&&_(v.specularIntensityMap.channel),transmissionMapUv:Xt&&_(v.transmissionMap.channel),thicknessMapUv:U&&_(v.thicknessMap.channel),alphaMapUv:it&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Se||O),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Qt||it),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Se===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:vt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Qt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:xe&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_i,flipSided:v.side===wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:at&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&v.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)E.push(D),E.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(E,v),b(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function m(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const E=f[v.type];let D;if(E){const P=mi[E];D=D_.clone(P.uniforms)}else D=v.uniforms;return D}function x(v,E){let D=u.get(E);return D!==void 0?++D.usedTimes:(D=new my(i,E,v,r),c.push(D),u.set(E,D)),D}function S(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:R,acquireProgram:x,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:A}}function Sy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function yy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Od(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,g,p,m){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},i[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=_,b.materialVariant=a(h),b.groupOrder=g,b.renderOrder=h.renderOrder,b.z=p,b.group=m),t++,b}function l(h,f,_,g,p,m,b){b.reversedDepth===!0&&(p=-p);const R=o(h,f,_,g,p,m);_.transmission>0?n.push(R):_.transparent===!0?r.push(R):e.push(R)}function c(h,f,_,g,p,m){const b=o(h,f,_,g,p,m);_.transmission>0?n.unshift(b):_.transparent===!0?r.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||yy),n.length>1&&n.sort(f||Fd),r.length>1&&r.sort(f||Fd)}function d(){for(let h=t,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function by(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Od,i.set(n,[a])):r>=s.length?(a=new Od,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ey(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new de};break;case"SpotLight":e={position:new X,direction:new X,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function Ty(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wy=0;function Ay(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ry(i){const t=new Ey,e=Ty(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new Le,a=new Le;function o(c){let u=0,d=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,b=0,R=0,x=0,S=0,T=0,A=0,v=0,E=0,D=0;c.sort(Ay);for(let I=0,z=c.length;I<z;I++){const F=c[I],k=F.color,K=F.intensity,G=F.distance;let nt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Nr?nt=F.shadow.map.texture:nt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*K,d+=k.g*K,h+=k.b*K;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],K);D++}else if(F.isSunLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=e.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[_]=j,n.sunShadowMap[_]=nt;const bt=$.getViewportCount();for(let vt=0;vt<bt;vt++)n.sunShadowMatrix[g+vt]=$.getMatrix(vt),n.sunShadowCascade[g+vt]=$._cascadeData[vt];g+=bt,_++}n.sun[f]=V,f++}else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=e.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=F.shadow.matrix,S++}n.directional[p]=V,p++}else if(F.isSpotLight){const V=t.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(k).multiplyScalar(K),V.distance=G,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[b]=V;const $=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,$.updateMatrices(F),F.castShadow&&E++),n.spotLightMatrix[b]=$.matrix,F.castShadow){const j=e.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=nt,A++}b++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(k).multiplyScalar(K),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=V,R++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const $=F.shadow,j=e.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=F.shadow.matrix,T++}n.point[m]=V,m++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(K),V.groundColor.copy(F.groundColor).multiplyScalar(K),n.hemi[x]=V,x++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==b||P.rectAreaLength!==R||P.hemiLength!==x||P.numSunShadows!==_||P.numDirectionalShadows!==S||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=R,n.point.length=m,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=b,P.rectAreaLength=R,P.hemiLength=x,P.numSunShadows=_,P.numDirectionalShadows=S,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=D,n.version=wy++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){const x=c[b];if(x.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=n.spot[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=n.hemi[p];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Bd(i){const t=new Ry(i),e=[],n=[],r=[];function s(h){d.camera=h,e.length=0,n.length=0,r.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Cy(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Bd(i),t.set(r,[o])):s>=a.length?(o=new Bd(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ly=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Iy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],kd=new Le,Xs=new X,ic=new X;function Uy(i,t,e){let n=new eh;const r=new oe,s=new oe,a=new Ne,o=new F_,l=new O_,c={},u=e.maxTextureSize,d={[Ir]:wn,[wn]:Ir,[_i]:_i},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Py,fragmentShader:Ly}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Be(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let m=this.type;this.render=function(T,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===yg&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=po);const E=i.getRenderTarget(),D=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==this.type;z&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=T.length;F<k;F++){const K=T[F],G=K.shadow;if(G===void 0){Gt("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const nt=G.getFrameExtents();r.multiply(nt),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,G.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===$s){if(K.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new oi(r.x,r.y,{format:Nr,type:wi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new ga(r.x,r.y,vi),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn}else K.isPointLight?(G.map=new Bp(r.x),G.map.depthTexture=new R_(r.x,Ti)):(G.map=new oi(r.x,r.y),G.map.depthTexture=new ga(r.x,r.y,Ti)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Gi,this.type===po?(G.map.depthTexture.compareFunction=V?Ju:Zu,G.map.depthTexture.minFilter=ln,G.map.depthTexture.magFilter=ln):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=tn,G.map.depthTexture.magFilter=tn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const $=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,v);for(let j=0;j<$;j++){const bt=G.getCamera(j);if(K.isPointLight){const vt=G.camera,Ht=G.matrix,Nt=K.distance||vt.far;Nt!==vt.far&&(vt.far=Nt,vt.updateProjectionMatrix()),Xs.setFromMatrixPosition(K.matrixWorld),vt.position.copy(Xs),ic.copy(vt.position),ic.add(Dy[j]),vt.up.copy(Iy[j]),vt.lookAt(ic),vt.updateMatrixWorld(),Ht.makeTranslation(-Xs.x,-Xs.y,-Xs.z),kd.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(kd,vt.coordinateSystem,vt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,j),i.clear();else{j===0&&(i.setRenderTarget(G.map),i.clear());const vt=G.getViewport(j);a.set(s.x*vt.x,s.y*vt.y,s.x*vt.z,s.y*vt.w),I.viewport(a)}n=G.getFrustum(j),x(A,v,bt,K,this.type)}G.isPointLightShadow!==!0&&this.type===$s&&b(G,v),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,D,P)};function b(T,A){const v=t.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new oi(r.x,r.y,{format:Nr,type:wi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,h,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,f,g,null)}function R(T,A,v,E){let D=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=v.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=D.uuid,z=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let k=F[z];k===void 0&&(k=D.clone(),F[z]=k,A.addEventListener("dispose",S)),D=k}if(D.visible=A.visible,D.wireframe=A.wireframe,E===$s?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:d[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=i.properties.get(D);I.light=v}return D}function x(T,A,v,E,D){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===$s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const z=t.update(T),F=T.material;if(Array.isArray(F)){const k=z.groups;for(let K=0,G=k.length;K<G;K++){const nt=k[K],V=F[nt.materialIndex];if(V&&V.visible){const $=R(T,V,E,D);T.onBeforeShadow(i,T,A,v,z,$,nt),i.renderBufferDirect(v,null,z,$,T,nt),T.onAfterShadow(i,T,A,v,z,$,nt)}}}else if(F.visible){const k=R(T,F,E,D);T.onBeforeShadow(i,T,A,v,z,k,null),i.renderBufferDirect(v,null,z,k,T,null),T.onAfterShadow(i,T,A,v,z,k,null)}}const I=T.children;for(let z=0,F=I.length;z<F;z++)x(I[z],A,v,E,D)}function S(T){T.target.removeEventListener("dispose",S);for(const v in c){const E=c[v],D=T.target.uuid;D in E&&(E[D].dispose(),delete E[D])}}}function Ny(i,t){function e(){let U=!1;const ht=new Ne;let it=null;const lt=new Ne(0,0,0,0);return{setMask:function(xt){it!==xt&&!U&&(i.colorMask(xt,xt,xt,xt),it=xt)},setLocked:function(xt){U=xt},setClear:function(xt,at,Lt,Tt,ie){ie===!0&&(xt*=Tt,at*=Tt,Lt*=Tt),ht.set(xt,at,Lt,Tt),lt.equals(ht)===!1&&(i.clearColor(xt,at,Lt,Tt),lt.copy(ht))},reset:function(){U=!1,it=null,lt.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,it=null,lt=null,xt=null;return{setReversed:function(at){if(ht!==at){const Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ht=at;const Tt=xt;xt=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(at){at?st(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(at){it!==at&&!U&&(i.depthMask(at),it=at)},setFunc:function(at){if(ht&&(at=i_[at]),lt!==at){switch(at){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case ha:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=at}},setLocked:function(at){U=at},setClear:function(at){xt!==at&&(xt=at,ht&&(at=1-at),i.clearDepth(at))},reset:function(){U=!1,it=null,lt=null,xt=null,ht=!1}}}function r(){let U=!1,ht=null,it=null,lt=null,xt=null,at=null,Lt=null,Tt=null,ie=null;return{setTest:function(le){U||(le?st(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(le){ht!==le&&!U&&(i.stencilMask(le),ht=le)},setFunc:function(le,un,kn){(it!==le||lt!==un||xt!==kn)&&(i.stencilFunc(le,un,kn),it=le,lt=un,xt=kn)},setOp:function(le,un,kn){(at!==le||Lt!==un||Tt!==kn)&&(i.stencilOp(le,un,kn),at=le,Lt=un,Tt=kn)},setLocked:function(le){U=le},setClear:function(le){ie!==le&&(i.clearStencil(le),ie=le)},reset:function(){U=!1,ht=null,it=null,lt=null,xt=null,at=null,Lt=null,Tt=null,ie=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,b=null,R=null,x=null,S=null,T=null,A=null,v=new de(0,0,0),E=0,D=!1,P=null,I=null,z=null,F=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,nt=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=nt>=2);let $=null,j={};const bt=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Ht=new Ne().fromArray(bt),Nt=new Ne().fromArray(vt);function Vt(U,ht,it,lt){const xt=new Uint8Array(4),at=i.createTexture();i.bindTexture(U,at),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<it;Lt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ht+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return at}const J={};J[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ha),zt(!1),Se(kh),st(i.CULL_FACE),te(Bi);function st(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Et(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Ft(U,ht){return h[U]!==ht?(i.bindFramebuffer(U,ht),h[U]=ht,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(U,ht){let it=_,lt=!1;if(U){it=f.get(ht),it===void 0&&(it=[],f.set(ht,it));const xt=U.textures;if(it.length!==xt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Lt=xt.length;at<Lt;at++)it[at]=i.COLOR_ATTACHMENT0+at;it.length=xt.length,lt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,lt=!0);lt&&i.drawBuffers(it)}function Qt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Oe={[cs]:i.FUNC_ADD,[Eg]:i.FUNC_SUBTRACT,[Tg]:i.FUNC_REVERSE_SUBTRACT};Oe[wg]=i.MIN,Oe[Ag]=i.MAX;const Zt={[Rg]:i.ZERO,[Cg]:i.ONE,[Pg]:i.SRC_COLOR,[lp]:i.SRC_ALPHA,[Fg]:i.SRC_ALPHA_SATURATE,[Ug]:i.DST_COLOR,[Dg]:i.DST_ALPHA,[Lg]:i.ONE_MINUS_SRC_COLOR,[cp]:i.ONE_MINUS_SRC_ALPHA,[Ng]:i.ONE_MINUS_DST_COLOR,[Ig]:i.ONE_MINUS_DST_ALPHA,[Og]:i.CONSTANT_COLOR,[Bg]:i.ONE_MINUS_CONSTANT_COLOR,[kg]:i.CONSTANT_ALPHA,[zg]:i.ONE_MINUS_CONSTANT_ALPHA};function te(U,ht,it,lt,xt,at,Lt,Tt,ie,le){if(U===Bi){p===!0&&(Et(i.BLEND),p=!1);return}if(p===!1&&(st(i.BLEND),p=!0),U!==bg){if(U!==m||le!==D){if((b!==cs||S!==cs)&&(i.blendEquation(i.FUNC_ADD),b=cs,S=cs),le)switch(U){case js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:he("WebGLState: Invalid blending: ",U);break}else switch(U){case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:he("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:he("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:he("WebGLState: Invalid blending: ",U);break}R=null,x=null,T=null,A=null,v.set(0,0,0),E=0,m=U,D=le}return}xt=xt||ht,at=at||it,Lt=Lt||lt,(ht!==b||xt!==S)&&(i.blendEquationSeparate(Oe[ht],Oe[xt]),b=ht,S=xt),(it!==R||lt!==x||at!==T||Lt!==A)&&(i.blendFuncSeparate(Zt[it],Zt[lt],Zt[at],Zt[Lt]),R=it,x=lt,T=at,A=Lt),(Tt.equals(v)===!1||ie!==E)&&(i.blendColor(Tt.r,Tt.g,Tt.b,ie),v.copy(Tt),E=ie),m=U,D=!1}function _e(U,ht){U.side===_i?Et(i.CULL_FACE):st(i.CULL_FACE);let it=U.side===wn;ht&&(it=!it),zt(it),U.blending===js&&U.transparent===!1?te(Bi):te(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const lt=U.stencilWrite;o.setTest(lt),lt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function Se(U){U!==Mg?(st(i.CULL_FACE),U!==I&&(U===kh?i.cullFace(i.BACK):U===Sg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),I=U}function De(U){U!==z&&(G&&i.lineWidth(U),z=U)}function xe(U,ht,it){U?(st(i.POLYGON_OFFSET_FILL),(F!==ht||k!==it)&&(F=ht,k=it,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,it))):Et(i.POLYGON_OFFSET_FILL)}function ce(U){U?st(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function Re(U){U===void 0&&(U=i.TEXTURE0+K-1),$!==U&&(i.activeTexture(U),$=U)}function O(U,ht,it){it===void 0&&($===null?it=i.TEXTURE0+K-1:it=$);let lt=j[it];lt===void 0&&(lt={type:void 0,texture:void 0},j[it]=lt),(lt.type!==U||lt.texture!==ht)&&($!==it&&(i.activeTexture(it),$=it),i.bindTexture(U,ht||J[U]),lt.type=U,lt.texture=ht)}function Wt(){const U=j[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function M(){try{i.texSubImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function H(){try{i.texSubImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function ct(){try{i.texStorage2D(...arguments)}catch(U){he("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){he("WebGLState:",U)}}function et(){try{i.texImage2D(...arguments)}catch(U){he("WebGLState:",U)}}function rt(){try{i.texImage3D(...arguments)}catch(U){he("WebGLState:",U)}}function dt(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Dt(U,ht){d[U]!==ht&&(i.pixelStorei(U,ht),d[U]=ht)}function pt(U){Ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ht.copy(U))}function ut(U){Nt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Nt.copy(U))}function It(U,ht){let it=c.get(ht);it===void 0&&(it=new WeakMap,c.set(ht,it));let lt=it.get(U);lt===void 0&&(lt=i.getUniformBlockIndex(ht,U.name),it.set(U,lt))}function kt(U,ht){const lt=c.get(ht).get(U);l.get(ht)!==lt&&(i.uniformBlockBinding(ht,lt,U.__bindingPointIndex),l.set(ht,lt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},$=null,j={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,b=null,R=null,x=null,S=null,T=null,A=null,v=new de(0,0,0),E=0,D=!1,P=null,I=null,z=null,F=null,k=null,Ht.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:Et,bindFramebuffer:Ft,drawBuffers:Mt,useProgram:Qt,setBlending:te,setMaterial:_e,setFlipSided:zt,setCullFace:Se,setLineWidth:De,setPolygonOffset:xe,setScissorTest:ce,activeTexture:Re,bindTexture:O,unbindTexture:Wt,compressedTexImage2D:fe,compressedTexImage3D:w,texImage2D:et,texImage3D:rt,pixelStorei:Dt,getParameter:dt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:tt,scissor:pt,viewport:ut,reset:Xt}}function Fy(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return _?new OffscreenCanvas(w,M):ma("canvas")}function p(w,M,H){let W=1;const tt=fe(w);if((tt.width>H||tt.height>H)&&(W=H/Math.max(tt.width,tt.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ct=Math.floor(W*tt.width),ft=Math.floor(W*tt.height);h===void 0&&(h=g(ct,ft));const et=M?g(ct,ft):h;return et.width=ct,et.height=ft,et.getContext("2d").drawImage(w,0,0,ct,ft),Gt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+ft+")."),et}else return"data"in w&&Gt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function b(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,M,H,W,tt,ct=!1){if(w!==null){if(i[w]!==void 0)return i[w];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;W&&(ft=t.get("EXT_texture_norm16"),ft||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=M;if(M===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8),H===i.UNSIGNED_SHORT&&ft&&(et=ft.R16_EXT),H===i.SHORT&&ft&&(et=ft.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),M===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8),H===i.UNSIGNED_SHORT&&ft&&(et=ft.RG16_EXT),H===i.SHORT&&ft&&(et=ft.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&ft&&(et=ft.RGB16_EXT),H===i.SHORT&&ft&&(et=ft.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),M===i.RGBA){const rt=ct?Bo:re.getTransfer(tt);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=rt===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ft&&(et=ft.RGBA16_EXT),H===i.SHORT&&ft&&(et=ft.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(w,M){let H;return w?M===null||M===Ti||M===fa?H=i.DEPTH24_STENCIL8:M===vi?H=i.DEPTH32F_STENCIL8:M===da&&(H=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===fa?H=i.DEPTH_COMPONENT24:M===vi?H=i.DEPTH_COMPONENT32F:M===da&&(H=i.DEPTH_COMPONENT16),H}function T(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function v(w){const M=w.target;M.removeEventListener("dispose",v),P(M)}function E(w){const M=n.get(w);if(M.__webglInit===void 0)return;const H=w.source,W=f.get(H);if(W){const tt=W[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&D(w),Object.keys(W).length===0&&f.delete(H)}n.remove(w)}function D(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const H=w.source,W=f.get(H);delete W[M.__cacheKey],a.memory.textures--}function P(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(M.__webglFramebuffer[W]))for(let tt=0;tt<M.__webglFramebuffer[W].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[W][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[W]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[W])}else{if(Array.isArray(M.__webglFramebuffer))for(let W=0;W<M.__webglFramebuffer.length;W++)i.deleteFramebuffer(M.__webglFramebuffer[W]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let W=0;W<M.__webglColorRenderbuffer.length;W++)M.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[W]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=w.textures;for(let W=0,tt=H.length;W<tt;W++){const ct=n.get(H[W]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(w)}let I=0;function z(){I=0}function F(){return I}function k(w){I=w}function K(){const w=I;return w>=r.maxTextures&&Gt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function G(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function nt(w,M){const H=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const W=w.image;if(W===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(H,w,M);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function V(w,M){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Et(H,w,M);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function $(w,M){const H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Et(H,w,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function j(w,M){const H=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&H.__version!==w.version){Ft(H,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}const bt={[Nc]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Fc]:i.MIRRORED_REPEAT},vt={[tn]:i.NEAREST,[Gg]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[Er]:i.LINEAR_MIPMAP_LINEAR},Ht={[Yg]:i.NEVER,[Qg]:i.ALWAYS,[$g]:i.LESS,[Zu]:i.LEQUAL,[Kg]:i.EQUAL,[Ju]:i.GEQUAL,[Zg]:i.GREATER,[Jg]:i.NOTEQUAL};function Nt(w,M){if(M.type===vi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===bl||M.magFilter===ka||M.magFilter===Er||M.minFilter===ln||M.minFilter===bl||M.minFilter===ka||M.minFilter===Er)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,bt[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,bt[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,bt[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,vt[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,vt[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ht[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===tn||M.minFilter!==ka&&M.minFilter!==Er||M.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Vt(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const W=M.source;let tt=f.get(W);tt===void 0&&(tt={},f.set(W,tt));const ct=G(M);if(ct!==w.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),tt[ct].usedTimes++;const ft=tt[w.__cacheKey];ft!==void 0&&(tt[w.__cacheKey].usedTimes--,ft.usedTimes===0&&D(M)),w.__cacheKey=ct,w.__webglTexture=tt[ct].texture}return H}function J(w,M,H){return Math.floor(Math.floor(w/H)/M)}function st(w,M,H,W){const ct=w.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,W,M.data);else{ct.sort((Dt,pt)=>Dt.start-pt.start);let ft=0;for(let Dt=1;Dt<ct.length;Dt++){const pt=ct[ft],ut=ct[Dt],It=pt.start+pt.count,kt=J(ut.start,M.width,4),Xt=J(pt.start,M.width,4);ut.start<=It+1&&kt===Xt&&J(ut.start+ut.count-1,M.width,4)===kt?pt.count=Math.max(pt.count,ut.start+ut.count-pt.start):(++ft,ct[ft]=ut)}ct.length=ft+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Dt=0,pt=ct.length;Dt<pt;Dt++){const ut=ct[Dt],It=Math.floor(ut.start/4),kt=Math.ceil(ut.count/4),Xt=It%M.width,U=Math.floor(It/M.width),ht=kt,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Xt,U,ht,it,H,W,M.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function Et(w,M,H){let W=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(W=i.TEXTURE_3D);const tt=Vt(w,M),ct=M.source;e.bindTexture(W,w.__webglTexture,i.TEXTURE0+H);const ft=n.get(ct);if(ct.version!==ft.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const it=re.getPrimaries(re.workingColorSpace),lt=M.colorSpace===er?null:re.getPrimaries(M.colorSpace),xt=M.colorSpace===er||it===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let rt=p(M.image,!1,r.maxTextureSize);rt=Wt(M,rt);const dt=s.convert(M.format,M.colorSpace),Dt=s.convert(M.type);let pt=x(M.internalFormat,dt,Dt,M.normalized,M.colorSpace,M.isVideoTexture);Nt(W,M);let ut;const It=M.mipmaps,kt=M.isVideoTexture!==!0,Xt=ft.__version===void 0||tt===!0,U=ct.dataReady,ht=T(M,rt);if(M.isDepthTexture)pt=S(M.format===Tr,M.type),Xt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,pt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,dt,Dt,null));else if(M.isDataTexture)if(It.length>0){kt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ht,pt,It[0].width,It[0].height);for(let it=0,lt=It.length;it<lt;it++)ut=It[it],kt?U&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,dt,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,it,pt,ut.width,ut.height,0,dt,Dt,ut.data);M.generateMipmaps=!1}else kt?(Xt&&e.texStorage2D(i.TEXTURE_2D,ht,pt,rt.width,rt.height),U&&st(M,rt,dt,Dt)):e.texImage2D(i.TEXTURE_2D,0,pt,rt.width,rt.height,0,dt,Dt,rt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){kt&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,pt,It[0].width,It[0].height,rt.depth);for(let it=0,lt=It.length;it<lt;it++)if(ut=It[it],M.format!==ri)if(dt!==null)if(kt){if(U)if(M.layerUpdates.size>0){const xt=_d(ut.width,ut.height,M.format,M.type);for(const at of M.layerUpdates){const Lt=ut.data.subarray(at*xt/ut.data.BYTES_PER_ELEMENT,(at+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,at,ut.width,ut.height,1,dt,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,dt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,pt,ut.width,ut.height,rt.depth,0,ut.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,ut.width,ut.height,rt.depth,dt,Dt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,pt,ut.width,ut.height,rt.depth,0,dt,Dt,ut.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{kt&&Xt&&e.texStorage2D(i.TEXTURE_2D,ht,pt,It[0].width,It[0].height);for(let it=0,lt=It.length;it<lt;it++)ut=It[it],M.format!==ri?dt!==null?kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,dt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,it,pt,ut.width,ut.height,0,ut.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ut.width,ut.height,dt,Dt,ut.data):e.texImage2D(i.TEXTURE_2D,it,pt,ut.width,ut.height,0,dt,Dt,ut.data)}else if(M.isDataArrayTexture)if(kt){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,pt,rt.width,rt.height,rt.depth),U)if(M.layerUpdates.size>0){const it=_d(rt.width,rt.height,M.format,M.type);for(const lt of M.layerUpdates){const xt=rt.data.subarray(lt*it/rt.data.BYTES_PER_ELEMENT,(lt+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,rt.width,rt.height,1,dt,Dt,xt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,dt,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,rt.width,rt.height,rt.depth,0,dt,Dt,rt.data);else if(M.isData3DTexture)kt?(Xt&&e.texStorage3D(i.TEXTURE_3D,ht,pt,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,dt,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,pt,rt.width,rt.height,rt.depth,0,dt,Dt,rt.data);else if(M.isFramebufferTexture){if(Xt)if(kt)e.texStorage2D(i.TEXTURE_2D,ht,pt,rt.width,rt.height);else{let it=rt.width,lt=rt.height;for(let xt=0;xt<ht;xt++)e.texImage2D(i.TEXTURE_2D,xt,pt,it,lt,0,dt,Dt,null),it>>=1,lt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),rt.parentNode!==it){it.appendChild(rt),d.add(M),it.onpaint=lt=>{const xt=lt.changedElements;for(const at of d)xt.includes(at.image)&&(at.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const xt=i.RGBA,at=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,at,Lt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(kt&&Xt){const it=fe(It[0]);e.texStorage2D(i.TEXTURE_2D,ht,pt,it.width,it.height)}for(let it=0,lt=It.length;it<lt;it++)ut=It[it],kt?U&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,dt,Dt,ut):e.texImage2D(i.TEXTURE_2D,it,pt,dt,Dt,ut);M.generateMipmaps=!1}else if(kt){if(Xt){const it=fe(rt);e.texStorage2D(i.TEXTURE_2D,ht,pt,it.width,it.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,pt,dt,Dt,rt);m(M)&&b(W),ft.__version=ct.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Ft(w,M,H){if(M.image.length!==6)return;const W=Vt(w,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);const ct=n.get(tt);if(tt.version!==ct.__version||W===!0){e.activeTexture(i.TEXTURE0+H);const ft=re.getPrimaries(re.workingColorSpace),et=M.colorSpace===er?null:re.getPrimaries(M.colorSpace),rt=M.colorSpace===er||ft===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Dt=M.image[0]&&M.image[0].isDataTexture,pt=[];for(let at=0;at<6;at++)!dt&&!Dt?pt[at]=p(M.image[at],!0,r.maxCubemapSize):pt[at]=Dt?M.image[at].image:M.image[at],pt[at]=Wt(M,pt[at]);const ut=pt[0],It=s.convert(M.format,M.colorSpace),kt=s.convert(M.type),Xt=x(M.internalFormat,It,kt,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,ht=ct.__version===void 0||W===!0,it=tt.dataReady;let lt=T(M,ut);Nt(i.TEXTURE_CUBE_MAP,M);let xt;if(dt){U&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,ut.width,ut.height);for(let at=0;at<6;at++){xt=pt[at].mipmaps;for(let Lt=0;Lt<xt.length;Lt++){const Tt=xt[Lt];M.format!==ri?It!==null?U?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,0,0,Tt.width,Tt.height,It,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,Xt,Tt.width,Tt.height,0,Tt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,0,0,Tt.width,Tt.height,It,kt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt,Xt,Tt.width,Tt.height,0,It,kt,Tt.data)}}}else{if(xt=M.mipmaps,U&&ht){xt.length>0&&lt++;const at=fe(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,at.width,at.height)}for(let at=0;at<6;at++)if(Dt){U?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,pt[at].width,pt[at].height,It,kt,pt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Xt,pt[at].width,pt[at].height,0,It,kt,pt[at].data);for(let Lt=0;Lt<xt.length;Lt++){const ie=xt[Lt].image[at].image;U?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,0,0,ie.width,ie.height,It,kt,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,Xt,ie.width,ie.height,0,It,kt,ie.data)}}else{U?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,It,kt,pt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Xt,It,kt,pt[at]);for(let Lt=0;Lt<xt.length;Lt++){const Tt=xt[Lt];U?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,0,0,It,kt,Tt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Lt+1,Xt,It,kt,Tt.image[at])}}}m(M)&&b(i.TEXTURE_CUBE_MAP),ct.__version=tt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Mt(w,M,H,W,tt,ct){const ft=s.convert(H.format,H.colorSpace),et=s.convert(H.type),rt=x(H.internalFormat,ft,et,H.normalized,H.colorSpace),dt=n.get(M),Dt=n.get(H);if(Dt.__renderTarget=M,!dt.__hasExternalTextures){const pt=Math.max(1,M.width>>ct),ut=Math.max(1,M.height>>ct);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,rt,pt,ut,M.depth,0,ft,et,null):e.texImage2D(tt,ct,rt,pt,ut,0,ft,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,tt,Dt.__webglTexture,0,ce(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,tt,Dt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(w,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const W=M.depthTexture,tt=W&&W.isDepthTexture?W.type:null,ct=S(M.stencilBuffer,tt),ft=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(M),ct,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(M),ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{const W=M.textures;for(let tt=0;tt<W.length;tt++){const ct=W[tt],ft=s.convert(ct.format,ct.colorSpace),et=s.convert(ct.type),rt=x(ct.internalFormat,ft,et,ct.normalized,ct.colorSpace);Re(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(M),rt,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(M),rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(w,M,H){const W=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(M.depthTexture);if(tt.__renderTarget=M,(!tt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),tt.__webglTexture===void 0){tt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M.depthTexture);const dt=s.convert(M.depthTexture.format),Dt=s.convert(M.depthTexture.type);let pt;M.depthTexture.format===Gi?pt=i.DEPTH_COMPONENT24:M.depthTexture.format===Tr&&(pt=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,pt,M.width,M.height,0,dt,Dt,null)}}else nt(M.depthTexture,0);const ct=tt.__webglTexture,ft=ce(M),et=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,rt=M.depthTexture.format===Tr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Gi)Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,ct,0);else if(M.depthTexture.format===Tr)Re(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,et,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,rt,et,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(w){const M=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),W){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,W.removeEventListener("dispose",tt)};W.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=W}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)Oe(M.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?Oe(M.__webglFramebuffer[0],w,0):Oe(M.__webglFramebuffer,w,0)}else if(H){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]===void 0)M.__webglDepthbuffer[W]=i.createRenderbuffer(),Qt(M.__webglDepthbuffer[W],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Qt(M.__webglDepthbuffer,w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(w,M,H){const W=n.get(w);M!==void 0&&Mt(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Zt(w)}function _e(w){const M=w.texture,H=n.get(w),W=n.get(M);w.addEventListener("dispose",v);const tt=w.textures,ct=w.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(ft||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=M.version,a.memory.textures++),ct){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let rt=0;rt<M.mipmaps.length;rt++)H.__webglFramebuffer[et][rt]=i.createFramebuffer()}else H.__webglFramebuffer[et]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)H.__webglFramebuffer[et]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ft)for(let et=0,rt=tt.length;et<rt;et++){const dt=n.get(tt[et]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Re(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){const rt=tt[et];H.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[et]);const dt=s.convert(rt.format,rt.colorSpace),Dt=s.convert(rt.type),pt=x(rt.internalFormat,dt,Dt,rt.normalized,rt.colorSpace,w.isXRRenderTarget===!0),ut=ce(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,pt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,H.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Qt(H.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)Mt(H.__webglFramebuffer[et][rt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else Mt(H.__webglFramebuffer[et],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(M)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let et=0,rt=tt.length;et<rt;et++){const dt=tt[et],Dt=n.get(dt);let pt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Dt.__webglTexture),Nt(pt,dt),Mt(H.__webglFramebuffer,w,dt,i.COLOR_ATTACHMENT0+et,pt,0),m(dt)&&b(pt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(et=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,W.__webglTexture),Nt(et,M),M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)Mt(H.__webglFramebuffer[rt],w,M,i.COLOR_ATTACHMENT0,et,rt);else Mt(H.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,et,0);m(M)&&b(et),e.unbindTexture()}w.depthBuffer&&Zt(w)}function zt(w){const M=w.textures;for(let H=0,W=M.length;H<W;H++){const tt=M[H];if(m(tt)){const ct=R(w),ft=n.get(tt).__webglTexture;e.bindTexture(ct,ft),b(ct),e.unbindTexture()}}}const Se=[],De=[];function xe(w){if(w.samples>0){if(Re(w)===!1){const M=w.textures,H=w.width,W=w.height;let tt=i.COLOR_BUFFER_BIT;const ct=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),et=M.length>1;if(et)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const rt=w.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);const Dt=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,tt,i.NEAREST),l===!0&&(Se.length=0,De.length=0,Se.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Se.push(ct),De.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);const Dt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ce(w){return Math.min(r.maxSamples,w.samples)}function Re(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(w){const M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Wt(w,M){const H=w.colorSpace,W=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Oo&&H!==er&&(re.getTransfer(H)===ve?(W!==ri||tt!==Un)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):he("WebGLTextures: Unsupported texture color space:",H)),M}function fe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=nt,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=te,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Oy(i,t){function e(n,r=er){let s;const a=re.getTransfer(r);if(n===Un)return i.UNSIGNED_BYTE;if(n===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xp)return i.BYTE;if(n===vp)return i.SHORT;if(n===da)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===yp)return i.ALPHA;if(n===bp)return i.RGB;if(n===ri)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Tr)return i.DEPTH_STENCIL;if(n===Ep)return i.RED;if(n===Yu)return i.RED_INTEGER;if(n===Nr)return i.RG;if(n===$u)return i.RG_INTEGER;if(n===Ku)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(a===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===kc||n===zc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===No||n===qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vc||n===Hc)return a===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Gc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return s.COMPRESSED_R11_EAC;if(n===Xc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===No)return s.COMPRESSED_RG11_EAC;if(n===qc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yc||n===$c||n===Kc||n===Zc||n===Jc||n===Qc||n===jc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===au)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===su)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return a===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ou||n===lu||n===cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ou)return a===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===hu||n===Fo||n===du)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===uu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ai({vertexShader:By,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vy extends Vr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",p=new zy,m={},b=e.getContextAttributes();let R=null,x=null;const S=[],T=[],A=new oe;let v=null,E=null;const D=new ni;D.viewport=new Ne;const P=new ni;P.viewport=new Ne;const I=[D,P],z=new Y_;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=S[J];return st===void 0&&(st=new Dl,S[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=S[J];return st===void 0&&(st=new Dl,S[J]=st),st.getGripSpace()},this.getHand=function(J){let st=S[J];return st===void 0&&(st=new Dl,S[J]=st),st.getHandSpace()};function K(J){const st=T.indexOf(J.inputSource);if(st===-1)return;const Et=S[st];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",nt);for(let J=0;J<S.length;J++){const st=T[J];st!==null&&(T[J]=null,S[J].disconnect(st))}F=null,k=null,p.reset();for(const J in m)delete m[J];if(t.setRenderTarget(R),f=null,h=null,d=null,r=null,x=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),E!==null){const J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(R=t.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",G),r.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ft=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=b.stencil?Tr:Gi,Ft=b.stencil?fa:Ti);const Qt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Qt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new oi(h.textureWidth,h.textureHeight,{format:ri,type:Un,depthTexture:new ga(h.textureWidth,h.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new oi(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Vt.setContext(r),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(J){for(let st=0;st<J.removed.length;st++){const Et=J.removed[st],Ft=T.indexOf(Et);Ft>=0&&(T[Ft]=null,S[Ft].disconnect(Et))}for(let st=0;st<J.added.length;st++){const Et=J.added[st];let Ft=T.indexOf(Et);if(Ft===-1){for(let Qt=0;Qt<S.length;Qt++)if(Qt>=T.length){T.push(Et),Ft=Qt;break}else if(T[Qt]===null){T[Qt]=Et,Ft=Qt;break}if(Ft===-1)break}const Mt=S[Ft];Mt&&Mt.connect(Et)}}const V=new X,$=new X;function j(J,st,Et){V.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const Ft=V.distanceTo($),Mt=st.projectionMatrix.elements,Qt=Et.projectionMatrix.elements,Oe=Mt[14]/(Mt[10]-1),Zt=Mt[14]/(Mt[10]+1),te=(Mt[9]+1)/Mt[5],_e=(Mt[9]-1)/Mt[5],zt=(Mt[8]-1)/Mt[0],Se=(Qt[8]+1)/Qt[0],De=Oe*zt,xe=Oe*Se,ce=Ft/(-zt+Se),Re=ce*-zt;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(ce),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Mt[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const O=Oe+ce,Wt=Zt+ce,fe=De-Re,w=xe+(Ft-Re),M=te*Zt/Wt*O,H=_e*Zt/Wt*O;J.projectionMatrix.makePerspective(fe,w,M,H,O,Wt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let st=J.near,Et=J.far;p.texture!==null&&(p.depthNear>0&&(st=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),z.near=P.near=D.near=st,z.far=P.far=D.far=Et,(F!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,k=z.far),z.layers.mask=J.layers.mask|6,D.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Ft=J.parent,Mt=z.cameras;bt(z,Ft);for(let Qt=0;Qt<Mt.length;Qt++)bt(Mt[Qt],Ft);Mt.length===2?j(z,D,P):z.projectionMatrix.copy(D.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),vt(J,z,Ft)};function vt(J,st,Et){Et===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let Ht=null;function Nt(J,st){if(u=st.getViewerPose(c||a),_=st,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ft=!1;Et.length!==z.cameras.length&&(z.cameras.length=0,Ft=!0);for(let Zt=0;Zt<Et.length;Zt++){const te=Et[Zt];let _e=null;if(f!==null)_e=f.getViewport(te);else{const Se=d.getViewSubImage(h,te);_e=Se.viewport,Zt===0&&(t.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(x))}let zt=I[Zt];zt===void 0&&(zt=new ni,zt.layers.enable(Zt),zt.viewport=new Ne,I[Zt]=zt),zt.matrix.fromArray(te.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(te.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(_e.x,_e.y,_e.width,_e.height),Zt===0&&(z.matrix.copy(zt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ft===!0&&z.cameras.push(zt)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Zt=d.getDepthInformation(Et[0]);Zt&&Zt.isValid&&Zt.texture&&p.init(Zt,r.renderState)}if(Mt&&Mt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Zt=0;Zt<Et.length;Zt++){const te=Et[Zt].camera;if(te){let _e=m[te];_e||(_e=new Dp,m[te]=_e);const zt=d.getCameraImage(te);_e.sourceTexture=zt}}}}for(let Et=0;Et<S.length;Et++){const Ft=T[Et],Mt=S[Et];Ft!==null&&Mt!==void 0&&Mt.update(Ft,st,c||a)}Ht&&Ht(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const Vt=new Fp;Vt.setAnimationLoop(Nt),this.setAnimationLoop=function(J){Ht=J},this.dispose=function(){}}}const Hy=new Le,Gp=new $t;Gp.set(-1,0,0,0,1,0,0,0,1);function Gy(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ip(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,b,R,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),R=b.envMap,x=b.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Gp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=R*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Wy(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const T=S.program;n.uniformBlockBinding(x,T)}function c(x,S){let T=r[x.id];T===void 0&&(p(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",b));const A=S.program;n.updateUBOMapping(x,A);const v=t.render.frame;s[x.id]!==v&&(h(x),s[x.id]=v)}function u(x){const S=d();x.__bindingPointIndex=S;const T=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return he("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=r[x.id],T=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,E=T.length;v<E;v++){const D=T[v];if(Array.isArray(D))for(let P=0,I=D.length;P<I;P++)f(D[P],v,P,A);else f(D,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,T,A){if(g(x,S,T,A)===!0){const v=x.__offset,E=x.value;if(Array.isArray(E)){let D=0;for(let P=0;P<E.length;P++){const I=E[P],z=m(I);_(I,x.__data,D),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function _(x,S,T){typeof x=="number"||typeof x=="boolean"?S[0]=x:x.isMatrix3?(S[0]=x.elements[0],S[1]=x.elements[1],S[2]=x.elements[2],S[3]=0,S[4]=x.elements[3],S[5]=x.elements[4],S[6]=x.elements[5],S[7]=0,S[8]=x.elements[6],S[9]=x.elements[7],S[10]=x.elements[8],S[11]=0):ArrayBuffer.isView(x)?S.set(new x.constructor(x.buffer,x.byteOffset,S.length)):x.toArray(S,T)}function g(x,S,T,A){const v=x.value,E=S+"_"+T;if(A[E]===void 0)return typeof v=="number"||typeof v=="boolean"?A[E]=v:ArrayBuffer.isView(v)?A[E]=v.slice():A[E]=v.clone(),!0;{const D=A[E];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return A[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function p(x){const S=x.uniforms;let T=0;const A=16;for(let E=0,D=S.length;E<D;E++){const P=Array.isArray(S[E])?S[E]:[S[E]];for(let I=0,z=P.length;I<z;I++){const F=P[I],k=Array.isArray(F.value)?F.value:[F.value];for(let K=0,G=k.length;K<G;K++){const nt=k[K],V=m(nt),$=T%A,j=$%V.boundary,bt=$+j;T+=j,bt!==0&&A-bt<V.storage&&(T+=A-bt),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=V.storage}}}const v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function m(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",x),S}function b(x){const S=x.target;S.removeEventListener("dispose",b);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function R(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const Xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function qy(){return fi===null&&(fi=new w_(Xy,16,16,Nr,wi),fi.name="DFG_LUT",fi.minFilter=ln,fi.magFilter=ln,fi.wrapS=Oi,fi.wrapT=Oi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class Yy{constructor(t={}){const{canvas:e=e_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,p=new Set([Ku,$u,Yu]),m=new Set([Un,Ti,da,fa,Xu,qu]),b=new Uint32Array(4),R=new Int32Array(4),x=new X;let S=null,T=null;const A=[],v=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,I=null,z=null,F=null,k=null;this._outputColorSpace=Ze;let K=0,G=0,nt=null,V=-1,$=null;const j=new Ne,bt=new Ne;let vt=null;const Ht=new de(0);let Nt=0,Vt=e.width,J=e.height,st=1,Et=null,Ft=null;const Mt=new Ne(0,0,Vt,J),Qt=new Ne(0,0,Vt,J);let Oe=!1;const Zt=new eh;let te=!1,_e=!1;const zt=new Le,Se=new X,De=new Ne,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Re(){return nt===null?st:1}let O=n;function Wt(y,B){return e.getContext(y,B)}let fe,w,M,H,W,tt,ct,ft,et,rt,dt,Dt,pt,ut,It,kt,Xt,U,ht,it,lt,xt,at;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hu}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",un,!1),O===null){const B="webgl2";if(O=Wt(B,y),O===null)throw Wt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(y){throw e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",un,!1),he("WebGLRenderer: "+y.message),y}function Lt(){fe=new qM(O),fe.init(),lt=new Oy(O,fe),w=new FM(O,fe,t,lt),M=new Ny(O,fe),w.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),z=O.createFramebuffer(),F=O.createFramebuffer(),k=O.createFramebuffer(),H=new KM(O),W=new Sy,tt=new Fy(O,fe,M,W,w,lt,H),ct=new XM(D),ft=new J_(O),xt=new UM(O,ft),et=new YM(O,ft,H,xt),rt=new JM(O,et,ft,xt,H),U=new ZM(O,w,tt),It=new OM(W),dt=new My(D,ct,fe,w,xt,It),Dt=new Gy(D,W),pt=new by,ut=new Cy(fe),Xt=new IM(D,ct,M,rt,_,l),kt=new Uy(D,rt,w),at=new Wy(O,H,w,M),ht=new NM(O,fe,H),it=new $M(O,fe,H),H.programs=dt.programs,D.capabilities=w,D.extensions=fe,D.properties=W,D.renderLists=pt,D.shadowMap=kt,D.state=M,D.info=H}g!==Un&&(E=new jM(g,e.width,e.height,o,r,s));const Tt=new Vy(D,O);this.xr=Tt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(y){y!==void 0&&(st=y,this.setSize(Vt,J,!1))},this.getSize=function(y){return y.set(Vt,J)},this.setSize=function(y,B,Z=!0){if(Tt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=y,J=B,e.width=Math.floor(y*st),e.height=Math.floor(B*st),Z===!0&&(e.style.width=y+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(Vt*st,J*st).floor()},this.setDrawingBufferSize=function(y,B,Z){Vt=y,J=B,st=Z,e.width=Math.floor(y*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(g===Un){he("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Mt)},this.setViewport=function(y,B,Z,q){y.isVector4?Mt.set(y.x,y.y,y.z,y.w):Mt.set(y,B,Z,q),M.viewport(j.copy(Mt).multiplyScalar(st).round())},this.getScissor=function(y){return y.copy(Qt)},this.setScissor=function(y,B,Z,q){y.isVector4?Qt.set(y.x,y.y,y.z,y.w):Qt.set(y,B,Z,q),M.scissor(bt.copy(Qt).multiplyScalar(st).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(y){M.setScissorTest(Oe=y)},this.setOpaqueSort=function(y){Et=y},this.setTransparentSort=function(y){Ft=y},this.getClearColor=function(y){return y.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,Z=!0){let q=0;if(y){let Y=!1;if(nt!==null){const gt=nt.texture.format;Y=p.has(gt)}if(Y){const gt=nt.texture.type,wt=m.has(gt),mt=Xt.getClearColor(),Ct=Xt.getClearAlpha(),Pt=mt.r,qt=mt.g,Kt=mt.b;wt?(b[0]=Pt,b[1]=qt,b[2]=Kt,b[3]=Ct,O.clearBufferuiv(O.COLOR,0,b)):(R[0]=Pt,R[1]=qt,R[2]=Kt,R[3]=Ct,O.clearBufferiv(O.COLOR,0,R))}else q|=O.COLOR_BUFFER_BIT}B&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Xt.dispose(),pt.dispose(),ut.dispose(),W.dispose(),ct.dispose(),rt.dispose(),xt.dispose(),at.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Us),Tt.removeEventListener("sessionend",Ns),Ri.stop()};function ie(y){y.preventDefault(),Xh("WebGLRenderer: Context Lost."),P=!0}function le(){Xh("WebGLRenderer: Context Restored."),P=!1;const y=H.autoReset,B=kt.enabled,Z=kt.autoUpdate,q=kt.needsUpdate,Y=kt.type;Lt(),H.autoReset=y,kt.enabled=B,kt.autoUpdate=Z,kt.needsUpdate=q,kt.type=Y}function un(y){he("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function kn(y){const B=y.target;B.removeEventListener("dispose",kn),Wr(B)}function Wr(y){xn(y),W.remove(y)}function xn(y){const B=W.get(y).programs;B!==void 0&&(B.forEach(function(Z){dt.releaseProgram(Z)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,Z,q,Y,gt){B===null&&(B=xe);const wt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,mt=qr(y,B,Z,q,Y);M.setMaterial(q,wt);let Ct=Z.index,Pt=1;if(q.wireframe===!0){if(Ct=et.getWireframeAttribute(Z),Ct===void 0)return;Pt=2}const qt=Z.drawRange,Kt=Z.attributes.position;let At=qt.start*Pt,ue=(qt.start+qt.count)*Pt;gt!==null&&(At=Math.max(At,gt.start*Pt),ue=Math.min(ue,(gt.start+gt.count)*Pt)),Ct!==null?(At=Math.max(At,0),ue=Math.min(ue,Ct.count)):Kt!=null&&(At=Math.max(At,0),ue=Math.min(ue,Kt.count));const Me=ue-At;if(Me<0||Me===1/0)return;xt.setup(Y,q,mt,Z,Ct);let ye,ge=ht;if(Ct!==null&&(ye=ft.get(Ct),ge=it,ge.setIndex(ye)),Y.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*Re()),ge.setMode(O.LINES)):ge.setMode(O.TRIANGLES);else if(Y.isLine){let $e=q.linewidth;$e===void 0&&($e=1),M.setLineWidth($e*Re()),Y.isLineSegments?ge.setMode(O.LINES):Y.isLineLoop?ge.setMode(O.LINE_LOOP):ge.setMode(O.LINE_STRIP)}else Y.isPoints?ge.setMode(O.POINTS):Y.isSprite&&ge.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,St=Y._multiDrawCounts,je=Y._multiDrawCount,ee=Ct?ft.get(Ct).bytesPerElement:1,vn=W.get(q).currentProgram.getUniforms();for(let Rn=0;Rn<je;Rn++)vn.setValue(O,"_gl_DrawID",Rn),ge.render($e[Rn]/ee,St[Rn])}else if(Y.isInstancedMesh)ge.renderInstances(At,Me,Y.count);else if(Z.isInstancedBufferGeometry){const $e=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,St=Math.min(Z.instanceCount,$e);ge.renderInstances(At,Me,St)}else ge.render(At,Me)};function Xi(y,B,Z,q){I!==null&&y.isNodeMaterial&&I.setObject(q,y),te===!0&&It.setState(y,Z,!1),y.transparent===!0&&y.side===_i&&y.forceSinglePass===!1?(y.side=wn,y.needsUpdate=!0,Ce(y,B,q),y.side=Ir,y.needsUpdate=!0,Ce(y,B,q),y.side=_i):Ce(y,B,q)}this.compile=function(y,B,Z=null){Z===null&&(Z=y),I!==null&&I.renderStart(y,B,Z),T=ut.get(Z),T.init(B),v.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),y!==Z&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),_e=this.localClippingEnabled,te=It.init(this.clippingPlanes,_e),te===!0&&It.setGlobalState(this.clippingPlanes,B),I!==null&&kt.render(T.state.shadowsArray,Z,B);const q=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gt=Y.material;if(gt)if(Array.isArray(gt))for(let wt=0;wt<gt.length;wt++){const mt=gt[wt];Xi(mt,Z,B,Y),q.add(mt)}else Xi(gt,Z,B,Y),q.add(gt)}),T=v.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(y,B,Z=null){const q=this.compile(y,B,Z);return new Promise(Y=>{function gt(){if(q.forEach(function(wt){const Ct=W.get(wt).currentProgram;(Ct===void 0||Ct.isReady())&&q.delete(wt)}),q.size===0){Y(y);return}setTimeout(gt,10)}fe.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Qe=null;function qi(y){Qe&&Qe(y)}function Us(){Ri.stop()}function Ns(){Ri.start()}const Ri=new Fp;Ri.setAnimationLoop(qi),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(y){Qe=y,Tt.setAnimationLoop(y),y===null?Ri.stop():Ri.start()},Tt.addEventListener("sessionstart",Us),Tt.addEventListener("sessionend",Ns),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){he("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(y,B);const Z=Tt.enabled===!0&&Tt.isPresenting===!0,q=E!==null&&(nt===null||Z)&&E.begin(D,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(B),B=Tt.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,B,nt),T=ut.get(y,v.length),T.init(B),T.state.textureUnits=tt.getTextureUnits(),v.push(T),zt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Zt.setFromProjectionMatrix(zt,Mi,B.reversedDepth),_e=this.localClippingEnabled,te=It.init(this.clippingPlanes,_e),S=pt.get(y,A.length),S.init(),A.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const wt=D.xr.getDepthSensingMesh();wt!==null&&Yi(wt,B,-1/0,D.sortObjects)}Yi(y,B,0,D.sortObjects),S.finish(),I!==null&&I.updateLights(T.state.lightsArray),D.sortObjects===!0&&S.sort(Et,Ft),ce=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ce&&Xt.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&It.beginShadows();const Y=T.state.shadowsArray;if(kt.render(Y,y,B),te===!0&&It.endShadows(),(q&&E.hasRenderPass())===!1){const wt=S.opaque,mt=S.transmissive;if(T.setupLights(),B.isArrayCamera){const Ct=B.cameras;if(mt.length>0)for(let Pt=0,qt=Ct.length;Pt<qt;Pt++){const Kt=Ct[Pt];ci(wt,mt,y,Kt)}ce&&Xt.render(y);for(let Pt=0,qt=Ct.length;Pt<qt;Pt++){const Kt=Ct[Pt];ur(S,y,Kt,Kt.viewport)}}else mt.length>0&&ci(wt,mt,y,B),ce&&Xt.render(y),ur(S,y,B)}nt!==null&&G===0&&(tt.updateMultisampleRenderTarget(nt),tt.updateRenderTargetMipmap(nt)),q&&E.end(D),y.isScene===!0&&y.onAfterRender(D,y,B),xt.resetDefaultState(),V=-1,$=null,v.pop(),v.length>0?(T=v[v.length-1],tt.setTextureUnits(T.state.textureUnits),te===!0&&It.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,I!==null&&I.renderEnd()};function Yi(y,B,Z,q){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Zt)){q&&De.setFromMatrixPosition(y.matrixWorld).applyMatrix4(zt);const wt=rt.update(y),mt=y.material;mt.visible&&S.push(y,wt,mt,Z,De.z,null,B)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Zt))){const wt=rt.update(y),mt=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),De.copy(y.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),De.copy(wt.boundingSphere.center)),De.applyMatrix4(y.matrixWorld).applyMatrix4(zt)),Array.isArray(mt)){const Ct=wt.groups;for(let Pt=0,qt=Ct.length;Pt<qt;Pt++){const Kt=Ct[Pt],At=mt[Kt.materialIndex];At&&At.visible&&S.push(y,wt,At,Z,De.z,Kt,B)}}else mt.visible&&S.push(y,wt,mt,Z,De.z,null,B)}}const gt=y.children;for(let wt=0,mt=gt.length;wt<mt;wt++)Yi(gt[wt],B,Z,q)}function ur(y,B,Z,q){const{opaque:Y,transmissive:gt,transparent:wt}=y;T.setupLightsView(Z),te===!0&&It.setGlobalState(D.clippingPlanes,Z),q&&M.viewport(j.copy(q)),Y.length>0&&zn(Y,B,Z),gt.length>0&&zn(gt,B,Z),wt.length>0&&zn(wt,B,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ci(y,B,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const At=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:At?wi:Un,minFilter:Er,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const gt=T.state.transmissionRenderTarget[q.id],wt=q.viewport||j;gt.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const mt=D.getRenderTarget(),Ct=D.getActiveCubeFace(),Pt=D.getActiveMipmapLevel();D.setRenderTarget(gt),D.getClearColor(Ht),Nt=D.getClearAlpha(),Nt<1&&D.setClearColor(16777215,.5),D.clear(),ce&&Xt.render(Z);const qt=D.toneMapping;D.toneMapping=Si;const Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),te===!0&&It.setGlobalState(D.clippingPlanes,q),zn(y,Z,q),tt.updateMultisampleRenderTarget(gt),tt.updateRenderTargetMipmap(gt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ue=0,Me=B.length;ue<Me;ue++){const ye=B[ue],{object:ge,geometry:$e,material:St,group:je}=ye;if(St.side===_i&&ge.layers.test(q.layers)){const ee=St.side;St.side=wn,St.needsUpdate=!0,Ve(ge,Z,q,$e,St,je),St.side=ee,St.needsUpdate=!0,At=!0}}At===!0&&(tt.updateMultisampleRenderTarget(gt),tt.updateRenderTargetMipmap(gt))}D.setRenderTarget(mt,Ct,Pt),D.setClearColor(Ht,Nt),Kt!==void 0&&(q.viewport=Kt),D.toneMapping=qt}function zn(y,B,Z){const q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,gt=y.length;Y<gt;Y++){const wt=y[Y],{object:mt,geometry:Ct,group:Pt}=wt;let qt=wt.material;qt.allowOverride===!0&&q!==null&&(qt=q),mt.layers.test(Z.layers)&&Ve(mt,B,Z,Ct,qt,Pt)}}function Ve(y,B,Z,q,Y,gt){I!==null&&Y.isNodeMaterial&&I.setObject(y,Y),y.onBeforeRender(D,B,Z,q,Y,gt),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(D,B,Z,q,y,gt),Y.transparent===!0&&Y.side===_i&&Y.forceSinglePass===!1?(Y.side=wn,Y.needsUpdate=!0,D.renderBufferDirect(Z,B,q,Y,y,gt),Y.side=Ir,Y.needsUpdate=!0,D.renderBufferDirect(Z,B,q,Y,y,gt),Y.side=_i):D.renderBufferDirect(Z,B,q,Y,y,gt),y.onAfterRender(D,B,Z,q,Y,gt)}function Ce(y,B,Z){B.isScene!==!0&&(B=xe);const q=W.get(y),Y=T.state.lights,gt=T.state.shadowsArray,wt=Y.state.version,mt=dt.getParameters(y,Y.state,gt,B,Z,T.state.lightProbeGridArray),Ct=dt.getProgramCacheKey(mt);let Pt=q.programs;q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;q.envMap=ct.get(y.envMap||q.environment,qt),q.envMapRotation=q.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Pt===void 0&&(y.addEventListener("dispose",kn),Pt=new Map,q.programs=Pt);let Kt=Pt.get(Ct);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===wt)return Fs(y,mt),Kt}else mt.uniforms=dt.getUniforms(y),I!==null&&y.isNodeMaterial&&I.build(y,Z,mt),y.onBeforeCompile(mt,D),Kt=dt.acquireProgram(mt,Ct),Pt.set(Ct,Kt),q.uniforms=mt.uniforms;const At=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(At.clippingPlanes=It.uniform),Fs(y,mt),q.needsLights=Vn(y),q.lightsStateVersion=wt,q.needsLights&&(At.ambientLightColor.value=Y.state.ambient,At.lightProbe.value=Y.state.probe,At.sunLights.value=Y.state.sun,At.sunLightShadows.value=Y.state.sunShadow,At.directionalLights.value=Y.state.directional,At.directionalLightShadows.value=Y.state.directionalShadow,At.spotLights.value=Y.state.spot,At.spotLightShadows.value=Y.state.spotShadow,At.rectAreaLights.value=Y.state.rectArea,At.ltc_1.value=Y.state.rectAreaLTC1,At.ltc_2.value=Y.state.rectAreaLTC2,At.pointLights.value=Y.state.point,At.pointLightShadows.value=Y.state.pointShadow,At.hemisphereLights.value=Y.state.hemi,At.sunShadowMatrix.value=Y.state.sunShadowMatrix,At.sunShadowCascade.value=Y.state.sunShadowCascade,At.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,At.spotLightMatrix.value=Y.state.spotLightMatrix,At.spotLightMap.value=Y.state.spotLightMap,At.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=Kt,q.uniformsList=null,Kt}function Xr(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=vo.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Fs(y,B){const Z=W.get(y);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function hn(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Z=0,q=y.length;Z<q;Z++){const Y=y[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function qr(y,B,Z,q,Y){B.isScene!==!0&&(B=xe),tt.resetTextureUnits();const gt=B.fog,wt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,mt=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:re.workingColorSpace,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Pt=ct.get(q.envMap||wt,Ct),qt=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Kt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!Z.morphAttributes.position,ue=!!Z.morphAttributes.normal,Me=!!Z.morphAttributes.color;let ye=Si;q.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ye=D.toneMapping);const ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$e=ge!==void 0?ge.length:0,St=W.get(q),je=T.state.lights;if(te===!0&&(_e===!0||y!==$)){const N=y===$&&q.id===V;It.setState(q,y,N)}let ee=!1;q.version===St.__version?(St.needsLights&&St.lightsStateVersion!==je.state.version||St.outputColorSpace!==mt||Y.isBatchedMesh&&St.batching===!1||!Y.isBatchedMesh&&St.batching===!0||Y.isBatchedMesh&&St.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&St.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&St.instancing===!1||!Y.isInstancedMesh&&St.instancing===!0||Y.isSkinnedMesh&&St.skinning===!1||!Y.isSkinnedMesh&&St.skinning===!0||Y.isInstancedMesh&&St.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&St.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&St.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&St.instancingMorph===!1&&Y.morphTexture!==null||St.envMap!==Pt||q.fog===!0&&St.fog!==gt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==It.numPlanes||St.numIntersection!==It.numIntersection)||St.vertexAlphas!==qt||St.vertexTangents!==Kt||St.morphTargets!==At||St.morphNormals!==ue||St.morphColors!==Me||St.toneMapping!==ye||St.morphTargetsCount!==$e||!!St.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,St.__version=q.version);let vn=St.currentProgram;ee===!0&&(vn=Ce(q,B,Y),I&&q.isNodeMaterial&&I.onUpdateProgram(q,vn,St));let Rn=!1,Kn=!1,dr=!1;const pe=vn.getUniforms(),C=St.uniforms;if(M.useProgram(vn.program)&&(Rn=!0,Kn=!0,dr=!0),q.id!==V&&(V=q.id,Kn=!0),St.needsLights){const N=hn(T.state.lightProbeGridArray,Y);St.lightProbeGrid!==N&&(St.lightProbeGrid=N,Kn=!0)}if(Rn||$!==y){M.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pe.setValue(O,"projectionMatrix",y.projectionMatrix),pe.setValue(O,"viewMatrix",y.matrixWorldInverse);const Q=pe.map.cameraPosition;Q!==void 0&&Q.setValue(O,Se.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&pe.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pe.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,Kn=!0,dr=!0)}if(St.needsLights&&(je.state.sunShadowMap.length>0&&pe.setValue(O,"sunShadowMap",je.state.sunShadowMap,tt),je.state.directionalShadowMap.length>0&&pe.setValue(O,"directionalShadowMap",je.state.directionalShadowMap,tt),je.state.spotShadowMap.length>0&&pe.setValue(O,"spotShadowMap",je.state.spotShadowMap,tt),je.state.pointShadowMap.length>0&&pe.setValue(O,"pointShadowMap",je.state.pointShadowMap,tt)),Y.isSkinnedMesh){pe.setOptional(O,Y,"bindMatrix"),pe.setOptional(O,Y,"bindMatrixInverse");const N=Y.skeleton;N&&(N.boneTexture===null&&N.computeBoneTexture(),pe.setValue(O,"boneTexture",N.boneTexture,tt))}Y.isBatchedMesh&&(pe.setOptional(O,Y,"batchingTexture"),pe.setValue(O,"batchingTexture",Y._matricesTexture,tt),pe.setOptional(O,Y,"batchingIdTexture"),pe.setValue(O,"batchingIdTexture",Y._indirectTexture,tt),pe.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(O,"batchingColorTexture",Y._colorsTexture,tt));const L=Z.morphAttributes;if((L.position!==void 0||L.normal!==void 0||L.color!==void 0)&&U.update(Y,Z,vn),(Kn||St.receiveShadow!==Y.receiveShadow)&&(St.receiveShadow=Y.receiveShadow,pe.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(C.envMapIntensity.value=B.environmentIntensity),C.dfgLUT!==void 0&&(C.dfgLUT.value=qy()),Kn){if(pe.setValue(O,"toneMappingExposure",D.toneMappingExposure),St.needsLights&&dn(C,dr),gt&&q.fog===!0&&Dt.refreshFogUniforms(C,gt),Dt.refreshMaterialUniforms(C,q,st,J,T.state.transmissionRenderTarget[y.id]),St.needsLights&&St.lightProbeGrid){const N=St.lightProbeGrid;C.probesSH.value=N.texture,C.probesMin.value.copy(N.boundingBox.min),C.probesMax.value.copy(N.boundingBox.max),C.probesResolution.value.copy(N.resolution)}vo.upload(O,Xr(St),C,tt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vo.upload(O,Xr(St),C,tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pe.setValue(O,"center",Y.center),pe.setValue(O,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(O,"normalMatrix",Y.normalMatrix),pe.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const N=q.uniformsGroups;for(let Q=0,ot=N.length;Q<ot;Q++){const yt=N[Q];at.update(yt,vn),at.bind(yt,vn)}}return vn}function dn(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.sunLights.needsUpdate=B,y.sunLightShadows.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function Vn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,B,Z){const q=W.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=B,W.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const Z=W.get(y);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,Z=0){nt=y,K=B,G=Z;let q=null,Y=!1,gt=!1;if(y){const mt=W.get(y);if(mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,mt.__webglFramebuffer),j.copy(y.viewport),bt.copy(y.scissor),vt=y.scissorTest,M.viewport(j),M.scissor(bt),M.setScissorTest(vt),V=-1;return}else if(mt.__webglFramebuffer===void 0)tt.setupRenderTarget(y);else if(mt.__hasExternalTextures)tt.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qt=y.depthTexture;if(mt.__boundDepthTexture!==qt){if(qt!==null&&W.has(qt)&&(y.width!==qt.image.width||y.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(y)}}const Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(gt=!0);const Pt=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[B])?q=Pt[B][Z]:q=Pt[B],Y=!0):y.samples>0&&tt.useMultisampledRTT(y)===!1?q=W.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?q=Pt[Z]:q=Pt,j.copy(y.viewport),bt.copy(y.scissor),vt=y.scissorTest}else j.copy(Mt).multiplyScalar(st).floor(),bt.copy(Qt).multiplyScalar(st).floor(),vt=Oe;if(Z!==0&&(q=z),M.bindFramebuffer(O.FRAMEBUFFER,q)&&M.drawBuffers(y,q),M.viewport(j),M.scissor(bt),M.setScissorTest(vt),Y){const mt=W.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,Z)}else if(gt){const mt=B;for(let Ct=0;Ct<y.textures.length;Ct++){const Pt=W.get(y.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,Pt.__webglTexture,Z,mt)}}else if(y!==null&&Z!==0){const mt=W.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mt.__webglTexture,Z)}V=-1};function hr(y){const B=W.get(y);return(B.__readFormat!==y.format||B.__readType!==y.type)&&(B.__readFormat=y.format,B.__readType=y.type,B.__formatReadable=w.textureFormatReadable(y.format),B.__typeReadable=w.textureTypeReadable(y.type)),B}this.readRenderTargetPixels=function(y,B,Z,q,Y,gt,wt,mt=0){if(!(y&&y.isWebGLRenderTarget)){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){M.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Pt=y.textures[mt],qt=Pt.format,Kt=Pt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);const At=hr(Pt);if(At.__formatReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){he("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-q&&Z>=0&&Z<=y.height-Y&&O.readPixels(B,Z,q,Y,lt.convert(qt),lt.convert(Kt),gt)}finally{const Pt=nt!==null?W.get(nt).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(y,B,Z,q,Y,gt,wt,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(B>=0&&B<=y.width-q&&Z>=0&&Z<=y.height-Y){M.bindFramebuffer(O.FRAMEBUFFER,Ct);const Pt=y.textures[mt],qt=Pt.format,Kt=Pt.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+mt);const At=hr(Pt);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(B,Z,q,Y,lt.convert(qt),lt.convert(Kt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Me=nt!==null?W.get(nt).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Me);const ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await n_(O,ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ue),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ue),O.deleteSync(ye),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,Z=0){const q=Math.pow(2,-Z),Y=Math.floor(y.image.width*q),gt=Math.floor(y.image.height*q),wt=B!==null?B.x:0,mt=B!==null?B.y:0;tt.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,wt,mt,Y,gt),M.unbindTexture()},this.copyTextureToTexture=function(y,B,Z=null,q=null,Y=0,gt=0){let wt,mt,Ct,Pt,qt,Kt,At,ue,Me;const ye=y.isCompressedTexture?y.mipmaps[gt]:y.image;if(Z!==null)wt=Z.max.x-Z.min.x,mt=Z.max.y-Z.min.y,Ct=Z.isBox3?Z.max.z-Z.min.z:1,Pt=Z.min.x,qt=Z.min.y,Kt=Z.isBox3?Z.min.z:0;else{const C=Math.pow(2,-Y);wt=Math.floor(ye.width*C),mt=Math.floor(ye.height*C),y.isDataArrayTexture?Ct=ye.depth:y.isData3DTexture?Ct=Math.floor(ye.depth*C):Ct=1,Pt=0,qt=0,Kt=0}q!==null?(At=q.x,ue=q.y,Me=q.z):(At=0,ue=0,Me=0);const ge=lt.convert(B.format),$e=lt.convert(B.type);let St;B.isData3DTexture?(tt.setTexture3D(B,0),St=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(tt.setTexture2DArray(B,0),St=O.TEXTURE_2D_ARRAY):(tt.setTexture2D(B,0),St=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const je=M.getParameter(O.UNPACK_ROW_LENGTH),ee=M.getParameter(O.UNPACK_IMAGE_HEIGHT),vn=M.getParameter(O.UNPACK_SKIP_PIXELS),Rn=M.getParameter(O.UNPACK_SKIP_ROWS),Kn=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,ye.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ye.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),M.pixelStorei(O.UNPACK_SKIP_ROWS,qt),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Kt);const dr=y.isDataArrayTexture||y.isData3DTexture,pe=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const C=W.get(y),L=W.get(B),N=W.get(C.__renderTarget),Q=W.get(L.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,N.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ot=0;ot<Ct;ot++)dr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(y).__webglTexture,Y,Kt+ot),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(B).__webglTexture,gt,Me+ot)),O.blitFramebuffer(Pt,qt,wt,mt,At,ue,wt,mt,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||W.has(y)){const C=W.get(y),L=W.get(B);M.bindFramebuffer(O.READ_FRAMEBUFFER,F),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let N=0;N<Ct;N++)dr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,C.__webglTexture,Y,Kt+N):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,C.__webglTexture,Y),pe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,L.__webglTexture,gt,Me+N):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,L.__webglTexture,gt),Y!==0?O.blitFramebuffer(Pt,qt,wt,mt,At,ue,wt,mt,O.COLOR_BUFFER_BIT,O.NEAREST):pe?O.copyTexSubImage3D(St,gt,At,ue,Me+N,Pt,qt,wt,mt):O.copyTexSubImage2D(St,gt,At,ue,Pt,qt,wt,mt);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pe?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(St,gt,At,ue,Me,wt,mt,Ct,ge,$e,ye.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(St,gt,At,ue,Me,wt,mt,Ct,ge,ye.data):O.texSubImage3D(St,gt,At,ue,Me,wt,mt,Ct,ge,$e,ye):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,At,ue,wt,mt,ge,$e,ye.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,At,ue,ye.width,ye.height,ge,ye.data):O.texSubImage2D(O.TEXTURE_2D,gt,At,ue,wt,mt,ge,$e,ye);M.pixelStorei(O.UNPACK_ROW_LENGTH,je),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ee),M.pixelStorei(O.UNPACK_SKIP_PIXELS,vn),M.pixelStorei(O.UNPACK_SKIP_ROWS,Rn),M.pixelStorei(O.UNPACK_SKIP_IMAGES,Kn),gt===0&&B.generateMipmaps&&O.generateMipmap(St),M.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&tt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?tt.setTextureCube(y,0):y.isData3DTexture?tt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?tt.setTexture2DArray(y,0):tt.setTexture2D(y,0),M.unbindTexture()},this.resetState=function(){K=0,G=0,nt=null,M.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Wp="./",zd=i=>globalThis.__VF_ASSETS&&globalThis.__VF_ASSETS[i]||`${Wp}assets/vf/${i}.webp`,Xp=1e3,qp=700,Yp=.7071,$p=.4082,jn=(i,t)=>{const e=(i-Xp)/Yp,n=(t-qp)/$p;return[(n+e)/2,(n-e)/2]},Vd={earbuds:70,glasses:70,postcard:-90,mug:10,camera:20,compass_needle:18,football:4},Hd={cab_inner:-2,cab_drawer:3,cab_calendar:5,cab_plane:7},$y={laptop:"Click: it starts typing",earbuds:"Click: turn it up",plant:"Click: water me",turntable:"Click: drop the needle",lamp:"Click: light on or off",cab_calendar:"Click: check the date",cab_plane:"Click: send it flying",cab_drawer:"Click: rustle the files",cab_body:"Click: rustle the files",compass:"Click: give it a shake",pins:"Click",mac:"Click: play a game",camera:"Click: say cheese",books:"Click: shuffle the stack",pen:"Click: roll it",mug:"Careful with that",glasses:"Click: slide them",postcard:"Click: read the back",hanger:"Click: give it a swing",knight:"Click: watch it move",dice:"Click: roll",football:"Click: send it down the slope"},rc=(i,t)=>{const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(1,t),n.fillStyle=r,n.fillRect(0,0,128,128),new us(e)};async function Ky({scene:i,camera:t}){var pe;const e=globalThis.__VF_META||await(await fetch(`${Wp}assets/vf/meta.json`)).json(),n=new V_,r=new Fi;i.add(r);const s={},a=[],o=[],l=new X,c=new X,u=new X,d=()=>{t.updateMatrixWorld(!0),t.matrixWorld.extractBasis(l,c,u)};d();const h=C=>{const L=n.load(zd(C));return L.colorSpace=Ze,L.anisotropy=16,L};let f;{const C=e.slab;f=new fn({map:h("slab"),transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1});const L=new Be(new mn(C.w,C.h),f),N=new Fi,[Q,ot]=jn(C.cx,C.bot-C.h/2);N.position.set(Q,0,ot),N.quaternion.copy(t.quaternion),N.add(L),L.renderOrder=1,r.add(N)}class _{constructor(L,N={}){const Q=e[L];this.name=L,this.m=Q,this.w=Q.w,this.h=Q.h,this.s=Q.w/Q.pw,this.pw=Q.pw,this.ph=Q.ph,this.state={dx:0,dy:0,rot:0,sc:1,px:0,py:0,alpha:1,lift:0},this.interactive=!0,this.tint=1,this.lit=0,this.flip=1,this.vx=Q.cx,this.vy=Q.bot,this.anchor=new Fi,this.wrap=new Fi,this.face=new Fi,this.anchor.add(this.wrap),this.wrap.add(this.face);const ot=h(L);n.manager.itemEnd,this.mat=new fn({map:ot,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1}),this.mesh=new Be(new mn(this.w,this.h),this.mat),this.mesh.position.y=this.h/2,this.face.add(this.mesh),this.mesh.userData.sprite=this,r.add(this.anchor);const[yt,Yt]=jn(Q.cx,Q.bot);this.anchor.position.set(yt,0,Yt),this.wrap.quaternion.copy(t.quaternion),this.mesh.renderOrder=100+Math.round(Q.bot)+(Vd[L]??0),Hd[L]&&(this.mesh.renderOrder=100+Math.round(e.cab_body.bot)+Hd[L]),N.order&&(this.mesh.renderOrder=N.order),a.push(this.mesh),this.apply(),new Promise(Ut=>{const Ot=new Image;Ot.crossOrigin="anonymous",Ot.onload=()=>Ut(Ot),Ot.src=zd(L)}).then(Ut=>this.mask(Ut))}mask(L){const N=document.createElement("canvas"),Q=128/L.width;N.width=128,N.height=Math.max(1,Math.round(L.height*Q));const ot=N.getContext("2d");ot.drawImage(L,0,0,N.width,N.height),this.alpha={w:N.width,h:N.height,d:ot.getImageData(0,0,N.width,N.height).data}}hit(L){if(!this.alpha)return!0;const{w:N,h:Q,d:ot}=this.alpha,yt=L.x*N|0,Yt=(1-L.y)*Q|0;for(let Ut=-2;Ut<=2;Ut+=2)for(let Ot=-2;Ot<=2;Ot+=2){const Jt=Math.min(N-1,Math.max(0,yt+Ot)),me=Math.min(Q-1,Math.max(0,Yt+Ut));if(ot[(me*N+Jt)*4+3]>60)return!0}return!1}pivot(L,N){return this.state.px=(L-.5)*this.w,this.state.py=N*this.h,this}apply(){const L=this.state,N=Math.cos(L.rot),Q=Math.sin(L.rot),ot=L.px-(N*L.px-Q*L.py)*L.sc,yt=L.py-(Q*L.px+N*L.py)*L.sc;this.wrap.quaternion.copy(t.quaternion),this.face.position.set(L.dx+ot,L.dy+L.lift+yt,6),this.face.rotation.z=L.rot,this.face.scale.set(L.sc*this.flip,L.sc,1),this.mat.opacity=L.alpha,this.mat.color.setRGB(this.tint+.34*this.lit,this.tint+.2*this.lit,this.tint+.02*this.lit)}reset(){Bt.killTweensOf(this.state),Object.assign(this.state,{dx:0,dy:0,rot:0,sc:1,lift:0,alpha:1}),this.apply()}moveView(L,N){this.vx=L,this.vy=N;const[Q,ot]=jn(L,N);this.anchor.position.set(Q,0,ot),this.mesh.renderOrder=100+Math.round(N)+(Vd[this.name]??0)}}const g=s;["books","pen","pins","plant","laptop","glasses","earbuds","cab_body","cab_inner","cab_drawer","cab_calendar","cab_plane","turntable","lamp","compass","compass_needle","football","mac","knight","dice","postcard","mug","camera","hanger"].forEach(C=>{g[C]=new _(C)}),g.cab_plane.pivot(.5,.5),g.compass_needle.pivot(.5,.5),g.compass_needle.interactive=!1,g.hanger.pivot(.5,.92),g.football.pivot(.5,.5),g.plant.pivot(.5,0);const p=(C,L=.95)=>{const N=g[C];return N.anchor.getWorldPosition(new X).addScaledVector(c,N.h*L)},m=(C,L,N)=>{const Q=new li,ot=[];L.forEach(([Yt,Ut])=>ot.push((Yt-C.pw/2)*C.s,(C.ph-Ut)*C.s,.2)),Q.setAttribute("position",new $n(ot,3)),Q.setAttribute("uv",new $n([0,1,1,1,1,0,0,0],2)),Q.setIndex([0,2,1,0,3,2]);const yt=new Be(Q,new fn({map:N,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1}));return yt.renderOrder=C.mesh.renderOrder+2,C.face.add(yt),yt},b=(C,L)=>{const N=document.createElement("canvas");N.width=C,N.height=L;const Q=new us(N);return Q.colorSpace=Ze,{g:N.getContext("2d"),t:Q}},R=b(160,120);m(g.mac,[[46,110],[196,147],[194,291],[43,244]],R.t);const x={v:1,on:!1,bx:80,by:60,vx:70,vy:46,py:60,ay:60,ps:0,as:0},S=()=>{const C=R.g;if(C.fillStyle="#0a1210",C.fillRect(0,0,160,120),!x.on)C.fillStyle="rgba(180,255,200,0.9)",C.font="700 15px Lufga, Gilroy, sans-serif",C.textAlign="center",C.fillText("PRESS TO PLAY",80,58),C.fillRect(52,70,56,2);else{C.fillStyle="rgba(180,255,200,0.25)";for(let L=4;L<116;L+=10)C.fillRect(79,L,2,5);C.fillStyle="#b8ffcf",C.fillRect(10,x.py-12,5,24),C.fillRect(145,x.ay-12,5,24),C.fillRect(x.bx-3,x.by-3,6,6),C.font="700 16px monospace",C.textAlign="center",C.fillText(x.ps,60,18),C.fillText(x.as,100,18)}R.t.needsUpdate=!0};S(),o.push(C=>{if(!x.on)return;const L=Math.min(C,.05);x.bx+=x.vx*L,x.by+=x.vy*L,(x.by<4||x.by>116)&&(x.vy*=-1,Bs(300,.03,x.v*.7)),x.py+=Math.sign(x.by-x.py)*Math.min(Math.abs(x.by-x.py),90*L),x.ay+=Math.sign(x.by-x.ay)*Math.min(Math.abs(x.by-x.ay),62*L),x.bx<16&&Math.abs(x.by-x.py)<14&&(x.vx=Math.abs(x.vx)*1.04,x.vy+=(x.by-x.py)*2,Bs(520,.05,x.v)),x.bx>144&&Math.abs(x.by-x.ay)<14&&(x.vx=-Math.abs(x.vx)*1.04,x.vy+=(x.by-x.ay)*2,Bs(400,.05,x.v)),x.bx<0&&(Bs(180,.18,x.v),x.as++,x.bx=80,x.by=60,x.vx=70),x.bx>160&&(Bs(660,.18,x.v),x.ps++,x.bx=80,x.by=60,x.vx=-70),S()});const T=b(240,150),A=m(g.laptop,[[14,119],[220,15],[256,152],[41,259]],T.t);A.material.opacity=0;const v={p:0},E=()=>{const C=T.g;C.clearRect(0,0,240,150),C.fillStyle="rgba(8,8,10,0.94)",C.fillRect(0,0,240,150);const L=["const work = await brief.untangle();","if (users.areConfused) simplify();","design.system.grow(42);","return story.worthTelling(work);"];C.font="500 11px ui-monospace, Menlo, monospace";let N=Math.floor(v.p*130);L.forEach((Q,ot)=>{C.fillStyle=ot%2?"#e9b97a":"#bfe0a8",C.fillText(Q.slice(0,Math.max(0,Math.min(Q.length,N))),10,26+ot*22),N-=Q.length}),T.t.needsUpdate=!0};E();const D=rc("rgba(255,214,150,0.95)","rgba(255,170,80,0)"),P=e.lamp,I=g.lamp.s,z=132,F=208,k={state:{rot:0},tint:1,apply(){},mesh:g.lamp.mesh,face:g.lamp.face},K=[0,0],G=[-.62,-.78],nt=[P.cx-P.w/2+z*I,P.bot-P.h+F*I],V=618,$=new Be(new mn(1,1),new fn({map:D,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:yr,toneMapped:!1}));$.scale.set(80,80,1),$.position.set((z-P.pw/2)*I,(P.ph-F)*I,.3),$.renderOrder=k.mesh.renderOrder+2,k.face.add($);const j=new Be(new mn(1,1),new fn({map:D,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:yr,toneMapped:!1}));j.rotation.x=-Math.PI/2,j.renderOrder=6,r.add(j);const bt=(()=>{const C=document.createElement("canvas");C.width=128,C.height=64;const L=C.getContext("2d"),N=L.createImageData(128,64);for(let ot=0;ot<64;ot++)for(let yt=0;yt<128;yt++){const Yt=yt/127,Ut=Math.abs(ot/63-.5)*2,Ot=Math.pow(1-Yt,1.35)*Math.pow(Math.max(0,1-Ut*Ut),1.6),Jt=(ot*128+yt)*4;N.data[Jt]=255,N.data[Jt+1]=222,N.data[Jt+2]=168,N.data[Jt+3]=Math.round(Ot*255)}L.putImageData(N,0,0);const Q=new us(C);return Q.colorSpace=Ze,Q})(),vt=new li;vt.setAttribute("position",new yi(new Float32Array(12),3)),vt.setAttribute("uv",new $n([0,0,0,1,1,1,1,0],2)),vt.setIndex([0,1,2,0,2,3]);const Ht=new Be(vt,new fn({map:bt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:yr,toneMapped:!1,side:_i}));Ht.frustumCulled=!1,Ht.renderOrder=k.mesh.renderOrder-1,r.add(Ht);let Nt=!1;const Vt={v:0},J={x:1190,y:V,r:40,k:0},st=C=>{Nt=C,Bt.to(Vt,{v:C?1:0,duration:.55,ease:"power2.out"})},Et=["books","pen","pins","plant","laptop","glasses","earbuds","cab_body","cab_inner","cab_drawer","cab_calendar","cab_plane","turntable","compass","compass_needle","camera","mac","knight","dice","postcard","mug","football","hanger"],Ft=(C,L,N,Q)=>{const[ot,yt]=jn(N,Q);C[L*3]=ot,C[L*3+1]=.5,C[L*3+2]=yt},Mt={pos:new X,pool:new X,rr:40,dir:[G[0],G[1]],k:0},Qt=C=>{const L=k.state.rot,N=Math.cos(L),Q=Math.sin(L),ot=nt[0]+(K[0]*N-K[1]*Q),yt=nt[1]-(K[0]*Q+K[1]*N),Yt=G[0]*N-G[1]*Q,Ut=G[0]*Q+G[1]*N;{const[ol,$i]=jn(ot,yt);Mt.pos.set(ol,0,$i),Mt.dir=[Yt,Ut],Mt.k=Vt.v}const Ot=Math.max(8,V-yt),Jt=Math.max(0,-Ut);let me,Cn;Jt>.12?(me=ot+Ot*Yt/Jt,Cn=0):(me=ot+Math.sign(Yt||-1)*330,Cn=330),me=Math.max(ot-330,Math.min(ot+330,me)),Cn=Math.hypot(me-ot,V-yt);const Ra=Math.min(1,Jt/.45),ui=Vt.v*(.35+.65*Ra)*(1-Math.min(.55,Cn/700)),al=22+Cn*.3;J.x+=(me-J.x)*.35,J.y=V,J.r+=(al-J.r)*.35,J.k=ui;const[Sm,ym]=jn(J.x,V);j.position.set(Sm,1,ym),j.scale.set(J.r*2,J.r*2,1),j.material.opacity=ui*.38;const gh=J.x-ot,_h=V-yt,xh=Math.hypot(gh,_h)||1,Ca=-_h/xh,Pa=gh/xh,La=30,Da=J.r*.95,Ia=vt.attributes.position.array;Ft(Ia,0,ot+Ca*La,yt+Pa*La),Ft(Ia,1,ot-Ca*La,yt-Pa*La),Ft(Ia,2,J.x-Ca*Da,V-Pa*Da),Ft(Ia,3,J.x+Ca*Da,V+Pa*Da),vt.attributes.position.needsUpdate=!0,Ht.material.opacity=ui*.16,Mt.pool.copy(j.position),Mt.rr=J.r,$.material.opacity=Vt.v*(.8+Math.sin(C*6)*.03),Et.forEach(ol=>{const $i=g[ol],bm=$i.m,Em=($i.vx-J.x)/(J.r*1.05),Tm=($i.vy-bm.h*.22-V)/(J.r*.62),ll=Math.max(0,1-Math.hypot(Em,Tm));$i.lit=ll*ll*(3-2*ll)*ui*.55,$i.tint=1-.1*Vt.v,$i.apply()}),f.color.setScalar(1-.05*Vt.v),g.lamp.tint=1+.08*Vt.v,g.lamp.apply()},Oe=rc("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),Zt=[],te=(C,L,N={})=>{for(let Q=0;Q<L;Q++){const ot=new Be(new mn(1,1),new fn({map:N.tex||Oe,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,color:N.color||16777215}));ot.quaternion.copy(t.quaternion),ot.renderOrder=900;const yt=(N.at||(()=>p(C.name,.5)))();ot.position.copy(yt),r.add(ot),Zt.push({m:ot,age:-(N.stagger??.06)*Q,life:N.life??1.2,v:new X().addScaledVector(l,(N.vx??0)+(Math.random()-.5)*(N.spread??30)).addScaledVector(c,(N.vy??30)+Math.random()*20),s0:N.s0??10,s1:N.s1??30,a:N.a??.6,g:N.g??0,sy:N.sy??1})}},_e=(()=>{const C=document.createElement("canvas");C.width=C.height=64;const L=C.getContext("2d");return L.fillStyle="#fff",L.font="700 54px serif",L.textAlign="center",L.fillText("♪",32,50),new us(C)})();o.push(C=>{for(let L=Zt.length-1;L>=0;L--){const N=Zt[L];if(N.age+=C,N.age<0){N.m.visible=!1;continue}N.m.visible=!0;const Q=N.age/N.life;if(Q>=1){r.remove(N.m),N.m.material.dispose(),Zt.splice(L,1);continue}N.g&&N.v.addScaledVector(c,-N.g*C),N.m.position.addScaledVector(N.v,C);const ot=N.s0+(N.s1-N.s0)*Q;N.m.scale.set(ot,ot*N.sy,1),N.m.material.opacity=N.a*(1-Q)*Math.min(1,Q*8)}});const zt={fn:null};let Se;const De={},xe=(C,L,N=2800)=>{var Q;De[C]||(clearTimeout(Se),(Q=zt.fn)==null||Q.call(zt,L,p(C,1)),N&&(Se=setTimeout(()=>{var ot;return(ot=zt.fn)==null?void 0:ot.call(zt,null)},N)))},ce=C=>{let L=Math.floor(Math.random()*C.length);return()=>C[L++%C.length]},Re={},O=(C,L)=>()=>{if(Re[C])return null;Re[C]=!0;const N=Bt.timeline({onComplete:()=>{Re[C]=!1}});return L(N),N},Wt=C=>()=>C.apply(),fe=(C,L,N,Q,ot,yt=.25)=>{const Yt=W;C.add(()=>vl(Yt*.8),ot),C.to(L.state,{dy:N,rot:Q,duration:yt,ease:"power2.out",onUpdate:Wt(L)},ot).to(L.state,{dy:0,rot:0,duration:.55,ease:"bounce.out",onUpdate:Wt(L)},ot+yt)},w={},M={},H=(C,L,N,Q)=>{const ot=ce(L),yt=w[C];w[C]=()=>{yt==null||yt(),Bt.delayedCall(N,()=>xe(C,ot()))}};let W=1,tt=-1;const ct=[36,70,94,125],ft=C=>()=>{E();const L=Math.floor(v.p*130);L!==tt&&(L%3===0&&ig(C),ct.includes(L)&&rg(C*.8),tt=L)};w.laptop=O("laptop",C=>{const L=W;tt=-1,C.set(A.material,{opacity:1}).fromTo(v,{p:0},{p:1,duration:3.2,ease:"none",onUpdate:ft(L)}).to(A.material,{opacity:0,duration:.6},"+=1.2")}),H("laptop",["Shipped. Probably.","Works on my machine.","It was a feature."],3.6),w.earbuds=O("hp",C=>{const L=W;C.add(()=>sg(L),0).add(()=>ag(L),1.15),[0,.25,.5].forEach(N=>C.add(()=>te(g.earbuds,1,{tex:_e,vy:40,spread:20,s0:14,s1:22,life:1.4,a:.9}),N))}),H("earbuds",["Now playing: lo-fi to ship to.","Do not disturb. Mostly.","Track 7 is the good one."],.3);let et=1;const rt=ce(["Thank you for keeping me alive.","Ahh. Hydration.","Growth mindset, literally."]);w.plant=O("plant",C=>{const L=g.plant,N=W;C.add(()=>Fh(N),.02).add(()=>Fh(N*.8),.6);for(let Q=0;Q<4;Q++)C.add(()=>te(L,6,{color:8176895,vy:-150,spread:36,s0:5,s1:7,life:.75,a:.95,stagger:.05,at:()=>p("plant",1.25).addScaledVector(l,(Math.random()-.4)*30)}),Q*.28);et=Math.min(1.14,et+.045),C.to(L.state,{sc:et+.02,rot:.03,duration:.5,ease:"power2.out",onUpdate:Wt(L)},.5).to(L.state,{sc:et,rot:0,duration:.9,ease:"elastic.out(1,0.4)",onUpdate:Wt(L)},1).add(()=>xe("plant",et>=1.13?"Okay, I am a tree now.":rt()),1.2)});const dt=g.cab_drawer,Dt=g.cab_inner,pt=[-83*dt.s,48*dt.s];let ut=!0;const It=(C,L)=>{ut=C;const N=C?0:pt[0],Q=C?0:pt[1],ot=[dt,Dt];ot.forEach(Ot=>Bt.killTweensOf(Ot.state));const yt={t:0},Yt=ot.map(Ot=>[Ot.state.dx,Ot.state.dy]),Ut=Ot=>ot.forEach((Jt,me)=>{Jt.state.dx=Yt[me][0]+(N-Yt[me][0])*Ot,Jt.state.dy=Yt[me][1]+(Q-Yt[me][1])*Ot,Jt.apply()});Bt.to(yt,{t:1,duration:C?.85:.5,ease:C?"power3.out":"power2.in",onUpdate:()=>Ut(yt.t),onComplete:()=>{if(C)return;const Ot={r:0};Bt.to(Ot,{r:1,duration:.09,ease:"power1.out",yoyo:!0,repeat:1,onUpdate:()=>ot.forEach(Jt=>{Jt.state.dx=N+2.2*Ot.r,Jt.state.dy=Q-1.3*Ot.r,Jt.apply()})})}})},kt=ce(["Nothing in here but 2019 drafts.","Filed under: later.","Alphabetical. Ish.","Please do not read the top one."]),Xt=()=>{It(!ut),hg(ut,W),Bt.delayedCall(.35,()=>xe("cab_body",ut?kt():"Shut. Mostly.",1900))};w.cab_drawer=w.cab_inner=w.cab_body=Xt,w.cab_calendar=()=>xe("cab_calendar",ce(["Free on the 12th. Probably.","Every day is a deadline in disguise.","Booked until further notice."])(),2200);const U=g.cab_plane,ht=[U.m.cx,U.m.bot-U.m.h/2],it=[1e3,395],lt=([C,L])=>[it[0]+C*.85,it[1]+L*.85],xt=new P_([ht,lt([-31,33]),lt([0,68]),lt([97,53]),lt([190,0]),lt([97,-54]),lt([0,-95]),lt([-103,-54]),lt([-190,0]),lt([-153,43]),lt([-103,24]),ht].map(([C,L])=>new X(C,L,0)),!1,"centripetal"),at=U.mesh.renderOrder;let Lt=!1;w.cab_plane=()=>{if(Lt)return;Lt=!0;const C=W;ug(5.4,C);const L={u:0};let N=-.1,Q=1,ot=performance.now();const yt=()=>{const Yt=performance.now(),Ut=Math.min(.05,(Yt-ot)/1e3);ot=Yt;const Ot=xt.getPointAt(Math.min(1,L.u)),Jt=xt.getTangentAt(Math.min(1,Math.max(0,L.u))),me=Math.atan2(-Jt.y,Jt.x),Cn=Jt.x>=0;let ui=(Cn?me+.1:me-Math.PI-.1)-N;for(;ui>Math.PI;)ui-=2*Math.PI;for(;ui<-Math.PI;)ui+=2*Math.PI;N+=ui*Math.min(1,Ut*9),Q+=((Cn?1:-1)-Q)*Math.min(1,Ut*11);const al=(Ot.y-it[1])/(95*.85);U.flip=Q,U.state.dx=Ot.x-ht[0],U.state.dy=-(Ot.y-ht[1]),U.state.rot=N,U.state.sc=1+.16*al,U.mesh.renderOrder=800,U.apply()};Bt.to(L,{u:1,duration:5.4,ease:"sine.inOut",onUpdate:yt,onComplete:()=>{U.flip=1,Object.assign(U.state,{dx:0,dy:0,rot:0,sc:1}),U.mesh.renderOrder=at,U.apply(),Lt=!1,Ba(C*.3)}}),xe("cab_plane",ce(["Wheee.","Paperwork, but fun.","Gate B12. Boarding now.","Smooth landing. Always."])(),2200)};const Tt=(()=>{const C=g.turntable,L=C.w/C.pw,N=document.createElement("canvas");N.width=N.height=256;const Q=N.getContext("2d"),ot=128,yt=128,Yt=Q.createConicGradient?Q.createConicGradient(0,ot,yt):null;Yt&&([[0,0],[.04,0],[.1,.42],[.16,0],[.5,0],[.54,0],[.6,.34],[.66,0],[1,0]].forEach(([Cn,Ra])=>Yt.addColorStop(Cn,`rgba(255,255,255,${Ra})`)),Q.fillStyle=Yt,Q.beginPath(),Q.arc(ot,yt,126,0,7),Q.fill());const Ut=Q.createRadialGradient(ot,yt,30,ot,yt,126);Ut.addColorStop(0,"rgba(0,0,0,0.0)"),Ut.addColorStop(.05,"rgba(0,0,0,0)"),Ut.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Ut,Q.fillRect(0,0,256,256),Q.globalCompositeOperation="destination-out";const Ot=Q.createRadialGradient(ot,yt,0,ot,yt,52);Ot.addColorStop(0,"rgba(0,0,0,1)"),Ot.addColorStop(.9,"rgba(0,0,0,1)"),Ot.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Ot,Q.fillRect(0,0,256,256);const Jt=new us(N);Jt.center.set(.5,.5),Jt.colorSpace=Ze;const me=new Be(new mn(2,2),new fn({map:Jt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:yr,toneMapped:!1}));return me.scale.set(137*L,68*L,1),me.position.set((223-C.pw/2)*L,(C.ph-254)*L,.4),me.rotation.z=-.1,me.renderOrder=C.mesh.renderOrder+2,C.face.add(me),{mesh:me,tx:Jt,v:0}})();o.push(C=>{const L=ie?1:0;Tt.v+=(L-Tt.v)*Math.min(1,C*2.5),Tt.mesh.material.opacity=.55*Tt.v,Tt.v>.01&&(Tt.tx.rotation-=C*3.3*Tt.v)});let ie=!1,le=!1;const un=C=>{C!==ie&&(ie=C,le=C,C?Ml():Ac())};Vu(C=>{!C&&le&&Ml()}),w.turntable=()=>{ie=!ie,le=ie,ie?Ml():Ac();const C=()=>{ie&&(te(g.turntable,3,{tex:_e,vy:36,spread:60,s0:16,s1:24,life:1.8,a:.9,stagger:.3}),Bt.delayedCall(2.4,C))};C(),xe("turntable",ie?"Side B, obviously.":"Silence. Lovely.")};const kn=()=>{st(!Nt),dg(Nt,W),Bt.delayedCall(.05,()=>xe("lamp",Nt?"Let there be light.":"Lights out.",1800))};w.lamp=w.lamp_head=kn,w.compass=O("comp",C=>{const L=W,N=g.compass_needle,Q=2+Math.floor(Math.random()*2);C.add(()=>vl(L*.7),.05).set(N.state,{rot:0}).to(N.state,{rot:Math.PI*2*Q,duration:2.1,ease:"power3.out",onUpdate:Wt(N)}),[-.34,.2,-.11,.05,-.02,0].forEach(ot=>C.to(N.state,{rot:Math.PI*2*Q+ot,duration:.3,ease:"sine.inOut",onUpdate:Wt(N)})),C.add(()=>{N.state.rot=0,N.apply()})}),H("compass",["Still pointing at the next project.","North is wherever the brief is.","Lost? Never. Exploring."],2.6),w.pins=O("pins",C=>fe(C,g.pins,10,-.4,0)),H("pins",["Pinned it.","Ouch. Careful."],.3),w.books=O("books",C=>{const L=g.books,N=W;C.add(()=>xl(N),0).add(()=>Ba(N*.5),.2).add(()=>xl(N*.8),.55),C.to(L.state,{dy:8,rot:.03,duration:.2,onUpdate:Wt(L)}).to(L.state,{dy:0,rot:-.02,duration:.2,onUpdate:Wt(L)}).to(L.state,{rot:0,duration:.6,ease:"elastic.out(1,0.4)",onUpdate:Wt(L)})}),H("books",["Overdue by three years.","Great covers. Haven’t read them.","Chapter one, again."],.3);const Wr=document.createElement("canvas");Wr.width=1024,Wr.height=256;const xn=Wr.getContext("2d"),Xi=new us(Wr);Xi.colorSpace=Ze,Xi.anisotropy=8;const Qe={x:628,y:768,len:54,text:"UX designer",p:0,ready:!1},qi=new Be(new mn(Qe.len*1.414,Qe.len*1.414/4),new fn({map:Xi,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1}));{const[C,L]=jn(Qe.x+Qe.len/2,Qe.y+Qe.len*.577/2);qi.position.set(C,.8,L),qi.rotation.set(-Math.PI/2,0,0),qi.renderOrder=60,r.add(qi)}const Us=C=>{if(xn.clearRect(0,0,1024,256),C<=0){Xi.needsUpdate=!0;return}xn.save(),xn.beginPath(),xn.rect(0,0,1024*Math.min(1,C),256),xn.clip();let L=190;xn.font=`600 ${L}px Caveat, "Segoe Script", cursive`;const N=xn.measureText(Qe.text).width;L=Math.floor(L*940/Math.max(N,1)),xn.font=`600 ${L}px Caveat, "Segoe Script", cursive`,xn.textBaseline="alphabetic",xn.fillStyle="rgba(255,255,255,0.96)",xn.fillText(Qe.text,40,168),xn.restore(),Xi.needsUpdate=!0};try{(pe=document.fonts)==null||pe.load("600 120px Caveat").then(()=>{Qe.ready=!0}).catch(()=>{})}catch{}const Ns=[g.pen.m.cx-g.pen.m.w*.48,g.pen.m.bot-g.pen.m.h*.04];w.pen=O("pen",C=>{const L=g.pen.pivot(.02,.04),N=W,Q=Qe.x-Ns[0],ot=-(Qe.y-Ns[1]),yt=Qe.len,Yt=Qe.len*.577,Ut=.95;C.add(()=>{lg(N),Us(0),qi.material.opacity=.95},0).to(L.state,{dx:Q,dy:ot,lift:7,rot:Ut,duration:.9,ease:"power2.inOut",onUpdate:Wt(L)},0).to(L.state,{lift:.6,duration:.15,ease:"power1.in",onUpdate:Wt(L)},.9).add(()=>og(2.5,N*.8),1.05);const Ot={p:0};C.to(Ot,{p:1,duration:2.5,ease:"none",onUpdate:()=>{const Jt=Math.sin(Ot.p*38)*1.2+Math.sin(Ot.p*91)*.6;L.state.dx=Q+yt*Ot.p,L.state.dy=ot-Yt*Ot.p+Jt,L.state.rot=Ut+Math.sin(Ot.p*24)*.04,L.apply(),Us(Ot.p)}},1.05).to(L.state,{lift:7,duration:.2,onUpdate:Wt(L)},3.6).to(L.state,{dx:0,dy:0,lift:0,rot:0,duration:1,ease:"power3.inOut",onUpdate:Wt(L)},3.8).to(qi.material,{opacity:0,duration:1.3,ease:"power1.inOut"},7.6)}),H("pen",["It writes. Sometimes.","Borrowed. Never returned.","Click. Click. Click."],.7),w.camera=O("cam",C=>{const L=g.camera,N=W;C.add(()=>mg(N),.02);const Q=new Be(new mn(1,1),new fn({map:Oe,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:yr,toneMapped:!1}));Q.scale.set(46,46,1),Q.position.set((29-L.pw/2)*L.s,(L.ph-33)*L.s,.3),Q.renderOrder=950,L.face.add(Q),C.to(Q.material,{opacity:1,duration:.05},.02).to(Q.material,{opacity:0,duration:.55},.1).add(()=>{L.face.remove(Q),Q.material.dispose()},.8)}),H("camera",["Say cheese.","You blinked.","Photo 1 of 36."],.5),w.glasses=()=>xe("glasses",ce(["Seeing clearly. Mostly.","Where did I leave these. Oh."])());const Ri=ce(["Postmarked: somewhere nice.","Wish you were here.","First class. Of course."]);w.postcard=O("pc",C=>{const L=g.postcard,N=W;C.add(()=>xl(N),0).to(L.state,{lift:9,rot:.05,duration:.25,ease:"power2.out",onUpdate:Wt(L)}).to(L.state,{lift:0,rot:0,duration:.6,ease:"bounce.out",onUpdate:Wt(L)}).add(()=>xe("postcard",Ri()),.3)}),w.hanger=O("hang",C=>{const L=g.hanger,N=W;C.add(()=>vl(N*.7),.05),[.55,-.4,.28,-.18,.1,-.05,0].forEach(Q=>C.to(L.state,{rot:Q,duration:.3,ease:"sine.inOut",onUpdate:Wt(L)})),C.add(()=>xe("hanger",ce(["Nothing to wear. Everything to wear.","Hung up on it.","Dressed for the occasion."])()),.4)});const Yi=g.knight,ur=28;w.knight=O("kn",C=>{const L=W,N=[-.866*ur,-.5*ur],Q=[-.866*ur,.5*ur],ot=(yt,Yt,Ut,Ot=14)=>{C.to(Yi.state,{dx:`+=${yt}`,dy:`+=${Yt+Ot}`,duration:.27,ease:"power2.out",onUpdate:Wt(Yi)},Ut).to(Yi.state,{dy:`-=${Ot}`,duration:.23,ease:"bounce.out",onUpdate:Wt(Yi)},Ut+.27).add(()=>pg(L),Ut+.46)};ot(N[0]*.5,N[1]*.5,0,8),ot(Q[0],Q[1],.7),ot(Q[0],Q[1],1.2),ot(24.248,-14,2.5),ot(24.248,-14,3),ot(24.248*.5,14*.5,3.5,8)}),H("knight",["Checkmate.","Mate in two.","That was a fork, by the way.","Knights never go straight."],4.1);const ci=g.dice.pivot(.5,.5);w.dice=O("dice",C=>{const L=W;C.add(()=>Bh(L),.05).add(()=>Ba(L*.4),.7).add(()=>Bh(L*.7),1.1),C.to(ci.state,{dx:40,dy:18,rot:-Math.PI*2,duration:.7,ease:"power2.out",onUpdate:Wt(ci)}).to(ci.state,{dy:0,duration:.3,ease:"bounce.out",onUpdate:Wt(ci)}).to(ci.state,{dx:0,rot:-Math.PI*4,duration:.9,ease:"power2.inOut",onUpdate:Wt(ci)},"+=0.2").set(ci.state,{rot:0}),Bt.delayedCall(1.2,()=>{const N=1+Math.floor(Math.random()*6);xe("dice",N===6?"A six. Suspicious.":N===1?"A one. Rigged.":`Rolled a ${N}. Fair and square.`)})});const zn=(C,L=1)=>{x.on=C,x.v=L,C&&(x.ps=x.as=0,x.bx=80,x.by=60,Oh(L)),S()};w.mac=()=>{zn(!x.on,W),xe("mac",x.on?"Insert coin.":"Game over. Come back soon.",1800)},o.push(()=>{if(x.on&&(x.ps>=3||x.as>=3)){const C=x.ps>=x.as;C?Oh(x.v):gg(x.v),x.ps=x.as=0,xe("mac",C?"You win. The machine is sulking.":"Machine wins. Rematch?",2600)}}),ce(["Spotlight!","Ooh, dust.","Found it."]);const Ve=g.football,Ce=g.mug,Xr=[g.football.m.cx,g.football.m.bot];Ve.moveView(...Xr);const Fs=rc("rgba(46,26,16,0.95)","rgba(46,26,16,0)"),hn=new Be(new mn(1,1),new fn({map:Fs,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));{const[C,L]=jn(951,895);hn.rotation.x=-Math.PI/2,hn.position.set(C,.5,L),hn.renderOrder=1100,hn.scale.set(8,8,1),r.add(hn)}const qr=[913,924],dn=new Be(new mn(1,1),new fn({map:Fs,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));{const[C,L]=jn(940,905);dn.rotation.x=-Math.PI/2,dn.position.set(C,.6,L),dn.renderOrder=1101,dn.scale.set(9,6,1),r.add(dn)}const Vn=new Be(new mn(1,1),new fn({color:3809300,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));Vn.quaternion.copy(t.quaternion),Vn.renderOrder=880,r.add(Vn);const hr=(C,L=3.4)=>{const[N,Q]=jn(qr[0]-2,qr[1]+C/2);Vn.position.set(N,0,Q),Vn.scale.set(L,Math.max(.1,C),1)};hr(1);const y=C=>{let L=0;for(let N=0;N<C;N++)L+=.07+Math.random()*.2+N*.012,Bt.delayedCall(L,()=>{const Q=Math.random()<.3;te(Ce,1,{color:3809300,at:()=>{const[ot,yt]=jn(qr[0]-2+(Math.random()-.5)*3,qr[1]+5);return new X(ot,0,yt)},vx:-4+Math.random()*3,vy:-8-Math.random()*10,spread:3,s0:Q?4.2:3,s1:Q?3.4:2.4,sy:2.6+Math.random()*1.2,life:.8+Math.random()*.3,a:.95,g:640+Math.random()*160,stagger:0})})};let B=!1;const Z=[Xr,[1131,729],[1067,784],[1006,838],[960,877]],q=C=>{const L=Z.length-1,N=Math.min(L-1e-6,C*L),Q=Math.floor(N),ot=N-Q,yt=Z[Q],Yt=Z[Q+1];return[yt[0]+(Yt[0]-yt[0])*ot,yt[1]+(Yt[1]-yt[1])*ot]},Y=28,gt=[[2.55,2.93,18],[2.93,3.23,9],[3.23,3.45,3.8],[3.45,3.62,1.4]],wt=C=>{for(const[L,N,Q]of gt)if(C>=L&&C<N)return Q*Math.sin(Math.PI*(C-L)/(N-L));return 0},mt=(C=!1,L=0)=>{if(B)return null;B=!0;const N={t:0};let Q=0,ot=q(0);const yt=Bt.timeline({onComplete:()=>{C||Bt.delayedCall(6,Ct)}}),Yt={s:0};yt.to(Yt,{s:3.6,duration:3.6,ease:"none",onUpdate:()=>{N.t=Math.min(1,(Yt.s/3.6)**2);const[Jt,me]=q(N.t);Q+=Math.hypot(Jt-ot[0],me-ot[1])/Y,ot=[Jt,me],Ve.moveView(Jt,me),Ve.state.rot=-Q,Ve.state.lift=wt(Yt.s)+(Yt.s<2.55?.6*Math.abs(Math.sin(Yt.s*14)):0),Ve.apply()}},.2);const Ut=3.8,Ot=W;return yt.add(()=>fg(2.6,Ot),.2).add(()=>Oa(1,Ot),.2+2.93).add(()=>Oa(.65,Ot),.2+3.23).add(()=>Oa(.38,Ot),.2+3.45).add(()=>Oa(.2,Ot),.2+3.62).add(()=>{Ba(Ot*.6),cg(Ot*.8)},Ut),yt.add(()=>te(Ce,9,{color:4860442,vy:50,vx:-40,spread:70,s0:8,s1:18,life:.9,a:.9,stagger:.02}),Ut),yt.to(Ce.state,{rot:1.35,dx:-8,duration:.5,ease:"power2.in",onUpdate:Wt(Ce)},Ut).to(Ce.state,{rot:3,dx:-26,dy:-15,duration:.95,ease:"power1.inOut",onUpdate:Wt(Ce)},Ut+.5).to(Ce.state,{rot:5.6,dx:-44,dy:-190,duration:1.05,ease:"power2.in",onUpdate:Wt(Ce)},Ut+1.45).to(Ce.state,{alpha:0,duration:.35,ease:"power1.in",onUpdate:Wt(Ce)},Ut+2.15),yt.to(Ve.state,{dx:26,dy:9,duration:1.5,ease:"power3.out",onUpdate:Wt(Ve)},Ut).to(Ve.state,{rot:`+=${Q*0+2.6}`,duration:1.5,ease:"power3.out",onUpdate:Wt(Ve)},Ut),[[7,.2,.2],[3,.16,.6],[1.2,.12,.95]].forEach(([Jt,me,Cn])=>{yt.to(Ve.state,{lift:Jt,duration:me,ease:"power2.out",onUpdate:Wt(Ve)},Ut+Cn).to(Ve.state,{lift:0,duration:me*1.05,ease:"power2.in",onUpdate:Wt(Ve)},Ut+Cn+me)}),yt.to(hn.scale,{x:86,y:46,duration:1.3,ease:"power2.out"},Ut+.1).to(hn.material,{opacity:.9,duration:.5},Ut+.1).to(dn.scale,{x:8,y:62,duration:.9,ease:"power1.in"},Ut+.7).to(dn.material,{opacity:.85,duration:.3},Ut+.7).add(()=>{hr(1),Vn.material.opacity=.9},Ut+1.5).to({L:1},{L:46,duration:.8,ease:"power1.in",onUpdate(){const Jt=this.targets()[0];hr(Jt.L,3.6-1.5*Math.min(1,Jt.L/46))}},Ut+1.5).add(()=>y(26),Ut+1.75).to(Vn.material,{opacity:0,duration:1.2},Ut+3).to(dn.material,{opacity:0,duration:1.4},Ut+2.6).to(hn.material,{opacity:0,duration:2.6,ease:"power1.inOut"},Ut+1.9),C||yt.add(()=>{var Jt;return(Jt=zt.fn)==null?void 0:Jt.call(zt,"Butter fingers.",p("mug",1))},Ut+.35),L>0&&yt.time(.2+L,!0),yt},Ct=()=>{var C;Bt.killTweensOf([Ve.state,Ce.state,hn.scale,hn.material,dn.scale,dn.material,Vn.material]),[hn,dn,Vn].forEach(L=>{L.material.opacity=0}),hn.scale.set(8,8,1),dn.scale.set(9,6,1),hr(1),Ce.state.px=0,Object.assign(Ce.state,{rot:0,dx:0,dy:14,alpha:0,lift:0}),Ce.apply(),Bt.to(Ce.state,{dy:0,alpha:1,duration:.7,ease:"back.out(1.6)",onUpdate:Wt(Ce)}),Ve.reset(),Ve.moveView(...Xr),Ve.pivot(.5,.5),Ve.apply(),(C=zt.fn)==null||C.call(zt,null),B=!1};w.football=()=>{mt()},w.mug=()=>{B||mt()},Ce.pivot(.5,.05);let Pt=0,qt=[],Kt={};const At=(C,L)=>{const N=Bt.delayedCall(C,L);return qt.push(N),N},ue=(C,L,N)=>{[C,"cab_body","cab_drawer","cab_plane","cab_calendar"].forEach(ot=>{De[ot]=!0}),W=N;try{return L()}finally{W=1}},Me=(C,L,N,Q,ot=.5,yt={})=>({key:C,running:!1,timer:null,start(Yt){if(this.running)return;this.running=!0;const Ut=Pt,Ot=()=>{!this.running||Ut!==Pt||(ue(C,L,Q),this.timer=At(N,Ot))};this.timer=At(Yt?.05:ot,Ot),Yt&&(De[C]=!1)},stop(){var Yt,Ut;this.running=!1,(Yt=this.timer)==null||Yt.kill(),(Ut=yt.onStop)==null||Ut.call(yt)}}),ye=(C,L=1.4)=>{Bt.killTweensOf(k.state),Bt.to(k.state,{rot:C,duration:L,ease:"power2.inOut",onUpdate:()=>k.apply()})},ge=()=>{Pt++,qt.forEach(C=>C.kill()),qt=[],Object.values(Kt).forEach(C=>{C.running=!1}),Kt={},un(!1),x.on&&zn(!1),Nt&&st(!1),Math.abs(k.state.rot)>.01&&ye(0,.8)},$e=(C,L)=>{zn(!0,C),At(L,()=>zn(!1))},St=(C,L,N)=>At(N,()=>ue("x",C,L)),je={hello:()=>[Me("laptop",w.laptop,6.2,0,.8),Me("cab_plane",w.cab_plane,8.6,0,1.6),Me("mac",()=>$e(0,4.2),9.5,0,2.6,{onStop:()=>zn(!1)}),Me("plant",w.plant,7.4,0,3.4),Me("pen",w.pen,12,0,4.4)],work:()=>(St(w.laptop,.35,.5),[Me("pen",w.pen,12,0,3.2)]),beyond:()=>(St(()=>{zn(!0,.5),At(6.5,()=>zn(!1))},.5,.5),[]),archive:()=>(St(Xt,.6,1),St(Xt,.6,3.6),St(w.cab_plane,.5,2.2),[]),about:()=>[],process:()=>[Me("compass",w.compass,4.4,0,.8)]},ee={hello:()=>un(!0)},vn={start(C){var N;ge();const L=je[C];L&&L().forEach(Q=>{Kt[Q.key]=Q,Q.start(!1)}),(N=ee[C])==null||N.call(ee)},stop:ge};Object.keys(w).forEach(C=>{const L=w[C];w[C]=(...N)=>{const Q=Kt[C];if(N.length&&Q){Q.running?Q.stop():Q.start(!0);return}return N.length&&(De[C]=!1),L(...N)}});let Rn=!1;const Kn=new Hr(0,0,0,0);return{stopMusic:()=>un(!1),group:r,sprites:s,pickables:a,act:w,drag:M,toast:zt,worldOf:p,say:xe,rig:Mt,auto:vn,loops:()=>Object.fromEntries(Object.entries(Kt).map(([C,L])=>[C,L.running])),interactive:C=>C.interactive!==!1&&(w[C.name]||M[C.name]),tip:C=>/^cab_(body|inner|drawer)$/.test(C.name)?ut?"Click: shut the drawer":"Click: open the drawer":$y[C.name],autoFootball(){},rollHold(C,L=0){if(!mt(!0,L)){C==null||C();return}Bt.delayedCall(Math.max(.3,4.6-L),()=>C==null?void 0:C())},resetSpill:()=>Ct(),fadeSpill:C=>{Bt.to(Ce.state,{alpha:0,duration:.9,onUpdate:()=>Ce.apply()}),[hn,dn,Vn].forEach(L=>Bt.to(L.material,{opacity:0,duration:.9})),Bt.delayedCall(.95,()=>C==null?void 0:C())},tick(C,L){o.forEach(N=>N(C,L)),(Nt||Vt.v>.001||Rn)&&(Qt(L),Rn=Nt||Vt.v>.001)},onBasis(){d(),!Kn.equals(t.quaternion)&&(Kn.copy(t.quaternion),Object.values(s).forEach(C=>C.apply()))}}}const Gd=Math.PI/4,sc=Math.asin(1/Math.sqrt(3)),Wd=new X(Math.cos(sc)*Math.sin(Gd),Math.sin(sc),Math.cos(sc)*Math.cos(Gd));async function Kp(i,{reduced:t=!1,parallax:e=!0}={}){try{await document.fonts.load("700 56px Lufga")}catch{}const n=new Yy({canvas:i,antialias:!1,powerPreference:"high-performance"}),r=Math.min(devicePixelRatio||1,2);n.setPixelRatio(r),n.setClearColor(0,1),n.outputColorSpace=Ze,n.toneMapping=Gu,n.toneMappingExposure=1.15;const s=new x_,a=new nl(-1,1,1,-1,.1,6e3);a.position.copy(Wd).multiplyScalar(2e3),a.lookAt(0,0,0),a.updateMatrixWorld(!0),s.add(new H_(16774894,7234910,.9));const o=new X_(16773598,2.2);o.position.set(-700,1100,500),s.add(o);const l=await Ky({scene:s,camera:a}),c={X:1e3,Y:640,zoom:1,fx:.5,fy:.5};let u=1,d=1,h=1;const f=()=>{n.setPixelRatio(r),u=i.clientWidth||innerWidth,d=i.clientHeight||innerHeight,n.setSize(u,d,!1),h=u/d>1.2?Math.min(u/2e3,d/1250):u/1500};addEventListener("resize",f);try{new ResizeObserver(f).observe(i)}catch{}f();const _=V=>Object.assign(c,V),g={x:0,y:0,tx:0,ty:0,in:!1,cx:0,cy:0},p=new $_,m=new oe;let b=null,R=null,x=null,S=null;const T=()=>{m.set(g.tx,g.ty),p.setFromCamera(m,a);const V=p.intersectObjects(l.pickables,!1).filter($=>{const j=$.object.userData.sprite;return l.interactive(j)&&j.hit($.uv)});return V.length?(V.sort(($,j)=>j.object.renderOrder-$.object.renderOrder),V[0].object.userData.sprite):null},A=V=>{const $=i.getBoundingClientRect();!$.width||!$.height||(g.tx=(V.clientX-$.left)/$.width*2-1,g.ty=-((V.clientY-$.top)/$.height*2-1),g.cx=V.clientX,g.cy=V.clientY)},v=()=>1/(h*c.zoom);let E=null;addEventListener("pointermove",V=>{if(A(V),g.in=V.target===i,K=!0,x){const $=v();x.moved+=Math.abs(V.movementX)+Math.abs(V.movementY),x.moved>6&&l.drag[x.sp.name].move(x.sp,(V.clientX-x.x)*$,-(V.clientY-x.y)*$)}},{passive:!0}),i.addEventListener("pointerdown",V=>{var j;A(V);const $=T();E={s:$,x:V.clientX,y:V.clientY,moved:0},$&&l.drag[$.name]&&(x={sp:$,x:V.clientX,y:V.clientY,moved:0},Bt.killTweensOf($.state),l.drag[$.name].start($),(j=i.setPointerCapture)==null||j.call(i,V.pointerId))}),addEventListener("pointerup",V=>{var bt,vt,Ht,Nt;if(x){const Vt=x;if(x=null,Vt.moved>6){l.drag[Vt.sp.name].end(Vt.sp),E=null;return}(vt=(bt=l.drag[Vt.sp.name]).end)==null||vt.call(bt,Vt.sp)}if(!E)return;const $=Math.hypot(V.clientX-E.x,V.clientY-E.y),j=E.s;E=null,!($>8||!j)&&((Nt=(Ht=l.act)[j.name])==null||Nt.call(Ht,j))}),addEventListener("pointerleave",()=>{g.in=!1});const D=new X,P=new K_,I=new X,z=new X;let F=!0,k=0,K=!0;const G=()=>{if(!F)return;requestAnimationFrame(G);const V=P.getDelta(),$=Math.min(.05,V),j=P.elapsedTime;k++,g.x+=(g.tx-g.x)*Math.min(1,$*3),g.y+=(g.ty-g.y)*Math.min(1,$*3);const bt=h*c.zoom,vt=u/bt,Ht=d/bt,Nt=t||!e?0:7/c.zoom,Vt=c.X-(c.fx-.5)*vt+g.x*Nt,J=c.Y-(c.fy-.5)*Ht-g.y*Nt,st=(Vt-Xp)/Yp,Et=(J-qp)/$p;z.set((Et+st)/2,0,(Et-st)/2),a.left=-vt/2,a.right=vt/2,a.top=Ht/2,a.bottom=-Ht/2,a.updateProjectionMatrix(),a.position.copy(z).addScaledVector(Wd,2e3),a.lookAt(z),a.updateMatrixWorld(!0),D.setFromMatrixColumn(a.matrixWorld,0),o.position.copy(z).add(I.set(-700,1100,500)),l.onBasis(),l.tick($,j);const Ft=g.in&&!x?((k%3===0||K)&&(S=T(),K=!1),S):(x==null?void 0:x.sp)||null;Ft!==b&&(b=Ft,R==null||R(Ft?{name:Ft.name,tip:l.tip(Ft)}:null),i.style.cursor=Ft?x?"grabbing":"pointer":"default"),n.render(s,a)};return requestAnimationFrame(G),{world:l,pose:c,setPose:_,resize:f,project:V=>(I.copy(V).project(a),{x:(I.x*.5+.5)*u,y:(-I.y*.5+.5)*d}),get right(){return D},onHover(V){R=V},stop(){F=!1},get size(){return{W:u,H:d,base:h}}}}const gn=Math.PI*2,rh=matchMedia("(prefers-reduced-motion: reduce)").matches,ko=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),sh=i=>{let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}},Mr=[[0,[236,236,242]],[.5,[196,196,206]],[1,[140,140,152]]],Zp=[],_u=5;for(let i=0;i<=64;i++){const t=i/64;let e=Mr[0],n=Mr[1];for(let a=0;a<Mr.length-1;a++)if(t>=Mr[a][0]&&t<=Mr[a+1][0]){e=Mr[a],n=Mr[a+1];break}const r=(t-e[0])/(n[0]-e[0]||1),s=e[1].map((a,o)=>Math.round(a+(n[1][o]-a)*r));Zp.push(Array.from({length:_u},(a,o)=>`rgba(${s[0]},${s[1]},${s[2]},${(.14+.5*(o/(_u-1))).toFixed(2)})`))}const Zy=(i,t,e,n,r,s=0,a=gn,o=null)=>{const l=[],c=Math.max(e,n)*(a-s),u=Math.max(6,Math.round(c/r));for(let d=0;d<u;d++){const h=s+(a-s)*d/u,f=o?o(h):1;l.push([i+Math.cos(h)*e*f,t+Math.sin(h)*n*f])}return l},Jy=(i,t)=>{if(i._t===t)return;i._t=t;const e=t*i.w,n=i.tilt+Math.sin(t*.13)*.12;i.ca=Math.cos(e),i.sa=Math.sin(e),i.ct=Math.cos(n),i.st=Math.sin(n)},Qy=(i,t,e,n,r,s=0)=>{const a=t*i.ca+n*i.sa,o=-t*i.sa+n*i.ca,l=e*i.ct-o*i.st,c=e*i.st+o*i.ct,u=1/(1+c*.32);return r[s]=a*u,r[s+1]=l*u,c},vs=(i,t,e={})=>({name:i,w:e.w??.16,tilt:e.tilt??.5,init(n){const r=sh(11+i.length*7),s=t(n,r);this.X=new Float32Array(n),this.Y=new Float32Array(n),this.Z=new Float32Array(n),this.pulse=e.pulse;for(let a=0;a<n;a++){const o=s[a%s.length];this.X[a]=o[0],this.Y[a]=o[1],this.Z[a]=o[2]}this.tmp=[0,0]},at(n,r,s){Jy(this,r);let a=this.X[n],o=this.Y[n],l=this.Z[n];if(this.pulse){const u=1+this.pulse*Math.sin(r*1.4-Math.hypot(a,o,l)*5);a*=u,o*=u,l*=u}const c=Qy(this,a,o,l,this.tmp);s.x=this.tmp[0],s.y=this.tmp[1],s.b=ko(.42-c*.5)*.9}}),xu=(i,t,e)=>({name:i,init(n){const r=sh(5+i.length*9),s=t(n,r);this.bx=new Float32Array(n),this.by=new Float32Array(n),this.ph=new Float32Array(n);for(let a=0;a<n;a++){const o=s[a%s.length];this.bx[a]=o[0],this.by[a]=o[1],this.ph[a]=r()*gn}},at(n,r,s){s.x=this.bx[n],s.y=this.by[n],s.b=0,e&&e(n,r,this,s)}}),jy=(i,t,e,n=1)=>{const r=[];let s=0;for(;r.length<i&&s++<i*400;){const a=(t()*2-1)*n,o=(t()*2-1)*n,l=(t()*2-1)*n,c=e(a,o,l);t()<c&&r.push([a,o,l])}for(;r.length<i;)r.push([0,0,0]);return r},t1=[vs("Energy levels",(i,t)=>{const e=[];for(let r=0;r<70;r++)e.push([(t()-.5)*.08,(t()-.5)*.08,(t()-.5)*.08]);const n=6;for(let r=0;r<n;r++){const s=.18+r*.15,a=t()*gn,o=t()*Math.PI,l=Math.round((i-70)/n);for(let c=0;c<l;c++){const u=c/l*gn,d=Math.cos(u)*s,h=Math.sin(u)*s,f=h*Math.cos(o),_=h*Math.sin(o);e.push([d*Math.cos(a)-_*Math.sin(a),f,d*Math.sin(a)+_*Math.cos(a)])}}return e},{w:.2,tilt:.35}),vs("p-orbital",(i,t)=>jy(i,t,(e,n,r)=>{const s=Math.hypot(e,n,r);return ko(r*r/(s*s+1e-4)*Math.exp(-s*2.4)*3.2,0,1)*(s<.98?1:0)}).map(e=>[e[0]*1.05,e[2]*1.2,e[1]*1.05]),{w:.22,tilt:.3}),vs("Supernova",(i,t)=>{const e=[];for(let n=0;n<i;n++){const r=n+.5,s=Math.acos(1-2*r/i),a=Math.PI*(1+Math.sqrt(5))*r,o=n%5===0?.25+t()*.25:.78+(t()-.5)*.06;e.push([Math.cos(a)*Math.sin(s)*o,Math.cos(s)*o,Math.sin(a)*Math.sin(s)*o])}return e},{w:.1,tilt:.4,pulse:.05})],e1=[vs("Attractor",i=>{let t=.1,e=0,n=0;const r=[],s=.006;for(let a=0;a<i*12;a++){const o=10*(e-t),l=t*(28-n)-e,c=t*e-8/3*n;t+=o*s,e+=l*s,n+=c*s,a>400&&a%12===0&&r.push([t/22,(n-25)/24,e/22])}return r},{w:.2,tilt:.15}),vs("Dipole field",(i,t)=>{const e=[],n=[.22,.34,.46,.58,.7,.82,.94],r=12,s=Math.ceil(i/(n.length*r));return n.forEach(a=>{for(let o=0;o<r;o++){const l=o/r*gn;for(let c=0;c<s;c++){const u=.12+c/s*(Math.PI-.24),d=a*Math.sin(u)**2*1;e.push([d*Math.sin(u)*Math.cos(l),d*Math.cos(u)*1.1,d*Math.sin(u)*Math.sin(l)])}}}),Array.from({length:i},(a,o)=>e[Math.floor(o*e.length/i)])},{w:.18,tilt:.35}),xu("Fingerprint",(i,t)=>{const e=[];for(let n=1;n<=30;n++){const r=n*.031;e.push(...Zy(0,0,r*.84,r,.022,0,gn,s=>1+.09*Math.sin(3*s+n*.45)+.05*Math.sin(5*s-n*.8)).filter((s,a)=>Math.sin(a*2.1+n*3.3)>-.8))}return e.map(n=>[n[0],n[1]-.02])},(i,t,e,n)=>{const r=Math.sin(t*.8)*.85,s=Math.abs(n.y-r);s<.12&&(n.x+=Math.sin(n.y*40+t*8)*.014*(1-s/.12),n.b=1-s/.12)})],n1=[xu("Pulsar signal",(i,t)=>{const e=[],r=Math.floor(i/22);for(let s=0;s<22;s++){const a=-.8+s*.0761904761904762;for(let o=0;o<r;o++)e.push([-.92+o/r*1.84,a,s,o/r])}return e},(i,t,e,n)=>{const r=e.bx[i],s=Math.round((e.by[i]+.8)/(1.6/21)),a=Math.exp(-(r*r)*5.5),o=Math.sin(r*23+s*1.7-t*1.4)*Math.sin(s*7.1+t*.5+1);n.y-=a*o*.085*(1+s%3*.3),n.b=a*.7}),xu("Resonance",(i,t)=>{const e=[];for(let n=1;n<=15;n++){const r=n*.062,s=Math.max(8,Math.round(r*gn/.02));for(let a=0;a<s;a++){const o=a/s*gn;e.push([Math.cos(o)*r,Math.sin(o)*r])}}return e},(i,t,e,n)=>{const r=Math.hypot(n.x,n.y),s=Math.atan2(n.y,n.x),a=Math.sin(t*2.2-r*9),o=r+a*.016;n.x=Math.cos(s)*o,n.y=Math.sin(s)*o,n.b=Math.max(0,a)*.85})],ac=(i,t,e)=>vs(i,(n,r)=>{const s=t(r),a=Math.ceil(n/s.length),o=[];for(const l of s)for(let c=0;c<a;c++){const u=(c+.5)/a;o.push([l[0]+(l[3]-l[0])*u,l[1]+(l[4]-l[1])*u,l[2]+(l[5]-l[2])*u])}return Array.from({length:n},(l,c)=>o[Math.floor(c*o.length/n)])},e),i1=[ac("Cosmic web",i=>{const e=Array.from({length:30},()=>{const r=i()*gn,s=Math.acos(2*i()-1),a=Math.cbrt(i())*.85;return[Math.sin(s)*Math.cos(r)*a,Math.cos(s)*a,Math.sin(s)*Math.sin(r)*a]}),n=[];return e.forEach((r,s)=>{e.map((o,l)=>[Math.hypot(r[0]-o[0],r[1]-o[1],r[2]-o[2]),l]).filter(o=>o[1]!==s).sort((o,l)=>o[0]-l[0]).slice(0,3).forEach(([,o])=>n.push([...r,...e[o]]))}),n},{w:.09,tilt:.4}),ac("Icosahedron",()=>{const i=(1+Math.sqrt(5))/2,t=[[-1,i,0],[1,i,0],[-1,-i,0],[1,-i,0],[0,-1,i],[0,1,i],[0,-1,-i],[0,1,-i],[i,0,-1],[i,0,1],[-i,0,-1],[-i,0,1]].map(n=>n.map(r=>r*.42)),e=[];for(let n=0;n<12;n++)for(let r=n+1;r<12;r++)Math.abs(Math.hypot(t[n][0]-t[r][0],t[n][1]-t[r][1],t[n][2]-t[r][2])-.84)<.02&&(e.push([...t[n],...t[r]]),e.push([...t[n].map(s=>s*.5),...t[r].map(s=>s*.5)]));return t.forEach(n=>e.push([...n,...n.map(r=>r*.5)])),e},{w:.2,tilt:.4}),ac("Torus",()=>{const i=[],s=(a,o)=>[(.56+.26*Math.cos(o/7*gn))*Math.cos(a/16*gn),.26*Math.sin(o/7*gn),(.56+.26*Math.cos(o/7*gn))*Math.sin(a/16*gn)];for(let a=0;a<16;a++)for(let o=0;o<7;o++)i.push([...s(a,o),...s(a+1,o)]),i.push([...s(a,o),...s(a,o+1)]);return i},{w:.18,tilt:.9})],Xd="abcdefghijklmnopqrstuvwxyz",r1=(i,t)=>{if(i._sc&&clearInterval(i._sc),rh){i.textContent=t;return}let e=0;i._sc=setInterval(()=>{e++,i.textContent=t.split("").map((n,r)=>n===" "?" ":r<e/1.6?n:Xd[Math.floor(Math.random()*Xd.length)]).join(""),e>t.length*1.6+2&&(clearInterval(i._sc),i.textContent=t)},32)},qd={acc:{shapes:t1,n:1500,line:["Levels, earned one by one","Proof of work, taking shape","Everything adding up to a burst"]},id:{shapes:e1,n:1500,line:["Drawn to people and problems","Pulled toward what matters","One of one, mild eye contact"]},kit:{shapes:i1,n:1500,line:["A web of what I offer","Every skill, connected","Research, strategy, craft, on a loop"]},repeat:{shapes:n1,n:1500,line:["The signal I keep returning to","What stays with you, rings back"]}};class s1{constructor(t,e,n){Object.assign(this,e),this.idx=n,this.el=t,this.cv=t.querySelector("canvas.rc"),this.ctx=this.cv.getContext("2d"),this.nm=t.querySelector(".ln");const r=e.n;this.N=r,e.shapes.forEach(a=>a.init(r)),this.o={x:0,y:0,b:0};const s=sh(90+n);this.r=s,this.P=new Float32Array(r*2),this.V=new Float32Array(r*2),this.del=new Float32Array(r),this.B=new Float32Array(r);for(let a=0;a<r*2;a++)this.P[a]=(s()-.5)*2.2;this.cur=-1,this.sw=0,this.hot=!1,this.mx=-9,this.my=-9,this.nextAt=0,this.t=0,this.W=0,this.go(n%e.shapes.length,0),t.addEventListener("pointerenter",()=>{this.hot=!0,this.go((this.cur+1)%this.shapes.length,this.t)}),t.addEventListener("pointerleave",()=>{this.hot=!1,this.mx=this.my=-9,this.nextAt=this.t+4}),t.addEventListener("pointermove",a=>{const o=this.cv.getBoundingClientRect();this.mx=(a.clientX-o.left-this.cx)/this.S,this.my=(a.clientY-o.top-this.cy)/this.S}),t.addEventListener("pointerdown",a=>{a.target.closest(".hv, a")||this.kick()}),this.resize();try{new ResizeObserver(()=>this.resize()).observe(this.cv)}catch{}}resize(){const t=this.cv.getBoundingClientRect();if(t.width<2)return;const e=Math.min(devicePixelRatio||1,2);this.dpr=e,this.W=Math.max(2,Math.round(t.width*e)),this.H=Math.max(2,Math.round(t.height*e)),this.cv.width=this.W,this.cv.height=this.H,this.S=Math.min(t.width*.86,t.height*.74)*.32,this.cx=t.width/2,this.cy=t.height*.36}go(t,e){this.cur=t,this.sw=e;for(let n=0;n<this.N;n++)this.del[n]=this.r()*.55;r1(this.nm,this.line[t]),this.nextAt=e+(this.hot?2.6:6.5)}kick(){for(let t=0;t<this.N*2;t++)this.V[t]+=(this.r()-.5)*(rh?0:3.2);this.go((this.cur+1)%this.shapes.length,this.t)}step(t,e){this.t=t,t>this.nextAt&&this.go((this.cur+1)%this.shapes.length,t);const n=this.shapes[this.cur],r=this.o,s=this.N,a=this.P,o=this.V,l=62,c=8.4,u=t-this.sw,d=this.mx,h=this.my,f=.42,_=this.hot?1.5:1;for(let g=0;g<s;g++){n.at(g,t,r);const p=u>this.del[g],m=g*2;let b=p?(r.x-a[m])*l-o[m]*c:-o[m]*3,R=p?(r.y-a[m+1])*l-o[m+1]*c:-o[m+1]*3;if(d>-5){const x=a[m]-d,S=a[m+1]-h,T=x*x+S*S;if(T<f*f){const A=Math.sqrt(T)+.001,v=(1-A/f)**2*16*_;b+=x/A*v,R+=S/A*v}}o[m]+=b*e,o[m+1]+=R*e,a[m]+=o[m]*e,a[m+1]+=o[m+1]*e,this.B[g]=r.b}}draw(){if(this.W<2)return;const t=this.ctx,e=this.dpr,n=this.S*e,r=this.cx*e,s=this.cy*e,a=this.P,o=this.V,l=this.N;t.clearRect(0,0,this.W,this.H);let c="";for(let u=0;u<l;u++){const d=u*2,h=a[d],f=a[d+1],_=Math.min(1,(o[d]*o[d]+o[d+1]*o[d+1])*.05),g=ko(.45+_*.7+(this.B[u]||0)*.55),p=Math.round(ko((f*.5+.5)*1.08-.04)*64),m=Math.round(g*(_u-1)),b=Zp[p][m];b!==c&&(t.fillStyle=b,c=b);const R=(.5+g*.5)*e;t.beginPath(),t.arc(r+h*n,s+f*n,R,0,gn),t.fill()}}}function a1(i){if(!i)return;const t=[...i.querySelectorAll(".ac")].filter(o=>qd[o.dataset.s]).map((o,l)=>new s1(o,qd[o.dataset.s],l)),e=new Set,n=new IntersectionObserver(o=>o.forEach(l=>{const c=t.find(u=>u.el===l.target);l.isIntersecting?e.add(c):e.delete(c)}),{threshold:0});t.forEach(o=>n.observe(o.el));let r=performance.now(),s=0;const a=o=>{const l=Math.min(.033,(o-r)/1e3);r=o,s+=rh?l*.3:l,e.forEach(c=>{c.W<2&&c.resize(),c.step(s+c.idx*1.7,l),c.draw()}),requestAnimationFrame(a)};requestAnimationFrame(a)}const Rt=(i,t=document)=>t.querySelector(i),Ae=(i,t=document)=>[...t.querySelectorAll(i)],zi=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),we=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Sn=matchMedia("(prefers-reduced-motion: reduce)").matches,ei=i=>`./assets/${i}`,o1="https://medium.com/@_harshvasa",Jp={echoes:"/projects/interview-echoes",circa:"/projects/circa",ark:"/projects/ark",compass:"/projects/talent-compass"},Qp=[{id:"echoes",t:"Interview Echoes",cat:"Enterprise AI",d:"An AI companion that turns raw interview evidence into recommendations hiring teams can act on.",k:["AI","Enterprise","Insights"],img:ei("work/echoes.webp"),cap:"Turning interview evidence into insight with"},{id:"ark",t:"ARK",cat:"Website & design system",d:"A website and its design system, shaped in six weeks.",k:["Website","UI/UX","Design system"],img:ei("work/ark.webp"),href:"https://thatvasaworks.framer.website/ark",cap:"A website and its design system for"},{id:"circa",t:"Circa",cat:"Product & time",d:"Rethinking how we pass things on, so kids’ gear gets a second home.",k:["Circular economy","Parenting"],img:ei("work/circa.webp"),cap:"A second home for kids’ gear:"},{id:"compass",t:"Talent Compass",cat:"AI-native workflows",d:"Integrity signals at the application level: an AI-led project built around AI-native workflows.",k:["AI-native","Integrity signals","Workflows"],img:ei("work/compass.webp"),cap:"Flagging fraud and anomalies with"},{id:"stambh",t:"Stambh",cat:"Spatial installation",d:"A spatial installation, filed in the archive.",k:["Spatial","Installation"],img:ei("work/stambh.webp"),cap:"A spatial installation:"},{id:"gg",t:"GG",cat:"Game interface",d:"A game interface, filed in the archive.",k:["Game","Interface"],img:ei("work/gg.webp"),cap:"A game interface:"},{id:"groov",t:"Groov",cat:"Multi-modal",d:"A multi-modal experiment, filed in the archive.",k:["Multi-modal","Interaction"],img:ei("work/groov.webp"),href:"https://thatvasaworks.framer.website/groov",cap:"A multi-modal experiment:"},{id:"labyrinth",t:"Labyrinth",cat:"Data visualisation",d:"Data visualisation, documented end to end.",k:["Data viz","Documentation"],img:ei("work/labyrinth.webp"),href:"https://www.figma.com/proto/i9EbSoHhjdpui9ZvgQdOJP/Labyrinth_Documentation?page-id=133%3A10&node-id=133-11&starting-point-node-id=223%3A26226&scaling=scale-down-width&content-scaling=fixed",cap:"Data visualisation, documented end to end:"},{id:"nomad",t:"Nomad",cat:"Mobile concept",d:"Travel planning for people who hate planning travel.",k:["Mobile","Travel","Concept"],img:ei("work/nomad.webp"),cap:"Slow travel planning with"}],jp=Object.fromEntries(Qp.map(i=>[i.id,i])),ta=(i,t)=>i+Math.random()*(t-i),Gr=i=>{Ae("[data-r]",i).forEach(t=>{if(t.dataset.rd)return;t.dataset.rd="1";const e=n=>[...n.childNodes].forEach(r=>{if(r.nodeType===3){const s=document.createDocumentFragment();r.textContent.split(/(\s+)/).forEach(a=>{if(!a)return;if(/^\s+$/.test(a)){s.append(" ");return}const o=document.createElement("span");o.className="sp-w";const l=document.createElement("span");l.className="sp-t",l.textContent=a,o.append(l),s.append(o)}),r.replaceWith(s)}else r.nodeType===1&&!r.classList.contains("sp-w")&&e(r)});e(t)})},wa=(i,{delay:t=0,speed:e=1}={})=>{const n=Bt.timeline({delay:t});let r=0;return Ae(".sp-w",i).forEach(s=>{var g;const a=s.getBoundingClientRect();if(!a.width)return;const o=Rt(".sp-t",s),l=4,c=a.height*.86/l,u=Math.max(1,Math.round(a.width/c)),d=a.width/u,h=r++*.07/e;(g=Rt(".sp-tiles",s))==null||g.remove();const f=document.createElement("span");f.className="sp-tiles",s.append(f);const _=Array.from({length:u*l},(p,m)=>{const b=m%u,R=m/u|0,x=document.createElement("i");return x.style.cssText=`left:${b*d}px;width:${d+.5}px;height:${c+.5}px;top:${a.height*.07+R*c}px`,f.append(x),x});Bt.set(o,{opacity:0}),Bt.set(_,{opacity:0}),_.forEach(p=>{const m=h+ta(0,.28),b=m+ta(.2,.5);n.set(p,{opacity:1,scaleY:ta(.35,1)},m).set(p,{scaleY:1},m+.05).set(p,{opacity:0},b),Math.random()<.4&&n.set(p,{opacity:1},b+.06).set(p,{opacity:0},b+.1)}),n.set(o,{opacity:1},h+.24)}),n},l1=()=>{const i=Math.random();return i<.8?"f0":i<.9?"f1":"f3"},tm=i=>{const t=i.dataset.chaos;i.innerHTML="",i.setAttribute("aria-label",t),t.split(" ").forEach((r,s,a)=>{const o=document.createElement("span");o.style.cssText="white-space:nowrap;display:inline-block",o.setAttribute("aria-hidden","true"),[...r].forEach(l=>{const c=document.createElement("i");c.textContent=l,c.className="f0",o.appendChild(c)}),i.appendChild(o),s<a.length-1&&i.appendChild(document.createTextNode(" "))});const e=()=>Ae("i",i).forEach(r=>{r.className=Math.random()<.4?l1():"f0"}),n=()=>Ae("i",i).forEach(r=>{r.className="f0"});i._wob=e,i._calm=n,i.addEventListener("pointerenter",()=>{if(Sn)return;let r=0;const s=setInterval(()=>{e(),++r>6&&(clearInterval(s),n())},90)})},c1=i=>{if(Sn||!i._wob)return;let t=0;const e=setInterval(()=>{i._wob(),++t>7&&(clearInterval(e),i._calm())},85)};Ae("[data-chaos]").forEach(tm);const u1=(i,t)=>{i.dataset.chaos=t,tm(i)},Or=Rt("#cur"),h1=Rt("b",Or),zo=Rt("#snd");let Mo=innerWidth/2,So=innerHeight/2,em=Mo,nm=So,_a=!1,Vo="",im=!1,Ho=!1;addEventListener("pointermove",i=>{em=i.clientX,nm=i.clientY,im=!0},{passive:!0});const d1=()=>document.body.classList.contains("is-space")&&wr==="space"&&scrollY<innerHeight*.75;var rf;{const i=Rt("#hint"),t=i&&Rt("span",i);if(i&&t){const e=()=>i.style.setProperty("--tw",t.scrollWidth+"px");e(),(rf=document.fonts)==null||rf.ready.then(e),i.addEventListener("pointerenter",e),i.addEventListener("focus",e)}}const f1=()=>{const i=d1();i!==Ho&&(Ho=i,document.body.classList.toggle("cur-on",i),zo.classList.toggle("on",i),Rt("#hint").classList.toggle("on",i),i||(_a=!1,Vo="",rm())),Or.style.opacity=i&&im?"1":"0",Mo+=(em-Mo)*.28,So+=(nm-So)*.28,Or.style.transform=`translate3d(${Mo.toFixed(1)}px, ${So.toFixed(1)}px, 0)`},rm=()=>{Or.classList.toggle("lens",_a),Or.classList.toggle("lbl",!!Vo&&!_a),h1.textContent=Vo};document.addEventListener("pointerdown",()=>Or.classList.add("press"));addEventListener("pointerup",()=>Or.classList.remove("press"));const Go=()=>{const i=Ls();zo.classList.toggle("is-off",i),zo.setAttribute("aria-pressed",String(!i))};let yo=!1;zo.addEventListener("click",()=>{yo=!1,zr(),ca(!Ls()),Go()});Go();addEventListener("scroll",()=>{document.body.classList.contains("is-space")&&(scrollY>40?Ls()||(ca(!0),yo=!0,Go()):scrollY<4&&yo&&(ca(!1),yo=!1,Go()))},{passive:!0});const Ms=document.createElement("div");Ms.className="qtip";document.body.appendChild(Ms);addEventListener("pointermove",i=>{Ms.style.transform=`translate3d(${Math.min(i.clientX+16,innerWidth-270)}px, ${i.clientY+18}px, 0)`},{passive:!0});const p1="",vu=Rt("#statement"),Mu=[];p1.split(" ").filter(Boolean).forEach(i=>{const t=document.createElement("span");t.className="w",t.setAttribute("aria-hidden","true"),i.replace(/[^a-z]/gi,"").toLowerCase(),t.textContent=i,vu.appendChild(t),vu.appendChild(document.createTextNode(" ")),Mu.push(t)});const Su=()=>{const i=vu.getBoundingClientRect(),t=innerHeight,e=zi((t*.95-i.top)/(t*.3));Mu.forEach((n,r)=>n.classList.toggle("on",r/Mu.length<e+.02))},sm=Rt("#introw"),oc=Rt("#intro"),m1=()=>{const i=sm.getBoundingClientRect(),t=innerHeight,e=innerWidth<=900?0:zi((-i.top-t*.24)/(t*.18));oc.style.opacity=String(1-e),oc.style.transform=`translate3d(0, ${(-e*36).toFixed(1)}px, 0)`,oc.style.filter=e>.01?`blur(${(e*10).toFixed(1)}px)`:""},bo=Rt(".sp-hero");Gr(bo);const g1=Rt("#nm"),_1=()=>{bo.classList.add("in"),Bt.killTweensOf(Ae(".sp-t, .sp-tiles i",bo)),wa(bo,{delay:.2,speed:.8}),Bt.fromTo(Rt("img",g1),{yPercent:24,opacity:0},{yPercent:0,opacity:1,duration:Sn?0:1.1,ease:"expo.out",delay:.35,clearProps:"transform"})},x1=i=>{const t=Rt("img",i);if(!t||i._f)return;i._f=1;const e=8,n=10,r=document.createElement("span");r.className="fx__t",r.style.setProperty("--n",e);const s=Array.from({length:e*n},()=>{const o=document.createElement("i");return r.append(o),o});i.append(r),Bt.set(t,{opacity:0}),Bt.set(s,{opacity:0});const a=Bt.timeline();s.forEach(o=>{const l=ta(0,.7),c=l+ta(.2,.5);a.set(o,{opacity:1},l).set(o,{opacity:0},c),Math.random()<.4&&a.set(o,{opacity:1},c+.06).set(o,{opacity:0},c+.1)}),a.set(t,{opacity:1},.5)},am=["echoes","compass","ark","circa"].map(i=>jp[i]);Rt("#selcards").innerHTML=am.map((i,t)=>{const e=`<span class="no">0${t+1}</span><div class="img">${i.img?`<img src="${i.img}" alt="${we(i.t)}" loading="lazy">`:""}</div><div class="cap">${we(i.t)}<span>↳ ${we(i.cat)}</span></div><div class="det"><p>${we(i.d)}</p><div class="kw">${i.k.map(n=>`<span>${we(n)}</span>`).join("")}</div></div>`;return i.href&&!(window.__VP_NAV&&Jp[i.id])?`<a class="card" data-cur="View" href="${we(i.href)}" target="_blank" rel="noopener noreferrer">${e}</a>`:`<button type="button" class="card" data-cur="View" data-id="${i.id}">${e}</button>`}).join("");const ah=Ae("#selcards .card"),Aa=document.createElement("nav");Aa.className="cidx";Aa.setAttribute("aria-label","Curated work");Aa.innerHTML=am.map((i,t)=>`<button type="button" data-i="${t}">${we(i.t)}</button>`).join("");Rt("#sel .stage").appendChild(Aa);const om=Ae("button",Aa);let Yd=-2;om.forEach((i,t)=>{i.onclick=()=>ah[t].scrollIntoView({behavior:"smooth",block:"center"})});const v1=()=>{const i=innerHeight;let t=-1,e=1e9;ah.forEach((n,r)=>{const s=n.getBoundingClientRect(),a=Math.abs(s.top+Math.min(s.height,i*.7)/2-i/2);a<e&&(e=a,t=r)}),e>i*.45&&(t=-1),t!==Yd&&(Yd=t,om.forEach((n,r)=>n.classList.toggle("on",r===t)))},M1=()=>{const i=innerHeight;ah.forEach(t=>{const e=t.getBoundingClientRect();if(e.bottom<-200||e.top>i+200)return;const n=e.top+Math.min(e.height,i*.7)/2,r=Math.abs(n-i/2)/i;t.style.transform=`scale(${(1-zi(r-.18,0,.6)*.16).toFixed(4)})`})},S1=[{n:"Odds & Charms",tool:"Midjourney",img:"odds",pos:"50% 38%",status:"Live as a preloader",note:"A smart machine that deals you a personality.",d:"A 3D machine made in Midjourney and built with Claude Desktop: pull the lever and the charms decide which version of me walks in.",k:["3D","Midjourney","Claude Desktop"],x:12,y:12},{n:"Desk Heroes",tool:"Xcode",img:"desk",pos:"50% 0%",status:"Live on my work MacBook",note:"Marvel figures that keep my work ethic sharp.",d:"Dynamic macOS notification badges, contextual to the meetings ahead and synced with Google Calendar, with pixel Marvel heroes as the nudge.",k:["macOS","Xcode","Pixel"],x:68,y:9},{n:"Qualities",tool:"Xcode",img:"quality",pos:"50% 50%",status:"Coming soon",note:"Music nobody asked for, pressed anyway.",d:"A vinyl player iOS widget that spins your Qualities, synced with your YouTube Music.",k:["iOS widget","Xcode","YouTube Music"],x:14,y:64},{n:"RoxCity",tool:"Claude Code",img:"rox",pos:"50% 40%",status:"Building before year end",note:"A HYROX simulation, one binary code at a time.",d:"A web-based scrollytelling game that trains you for HYROX through AI: play the simulation, learn the sport, build a healthier habit.",k:["Scrollytelling","Web game","AI"],x:66,y:62}],lm=Rt("#exp");S1.forEach((i,t)=>{const e=document.createElement("div");e.className="xt",e.style.cssText=`left:${i.x}%;top:${i.y}%`,e.dataset.x=t,e.innerHTML=`<button class="tag" type="button" data-cur="Tinkering with ${we(i.tool)}">${we(i.status)}</button><div class="box"><img class="bg" src="${ei("work/"+i.img+".webp")}" alt="" style="object-position:${i.pos}" loading="lazy"><div class="txt"><h5>${we(i.n)}</h5><p>${we(i.note)}</p><div class="kw">${i.k.map(n=>`<span>${we(n)}</span>`).join("")}</div></div></div>`,lm.appendChild(e)});const y1=Ae(".xt",lm),b1=()=>{const i=innerHeight;y1.forEach(t=>t.classList.toggle("open",t.getBoundingClientRect().top<i*.6))},E1={search:'<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/>',nodes:'<circle cx="3.5" cy="8" r="1.8"/><circle cx="12.5" cy="3.5" r="1.8"/><circle cx="12.5" cy="12.5" r="1.8"/><path d="M5.2 7.2l5.6-3M5.2 8.8l5.6 3"/>',target:'<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2.4"/>',figma:'<path d="M5.5 1.8h2.5v4.4H5.5a2.2 2.2 0 0 1 0-4.4zM8 1.8h2.5a2.2 2.2 0 0 1 0 4.4H8zM5.5 6.2H8v4.4H5.5a2.2 2.2 0 0 1 0-4.4zM5.5 10.6H8v2a2.5 2.5 0 1 1-2.5-2z"/><circle cx="10.5" cy="8.4" r="2.2"/>',grid:'<rect x="2" y="2" width="5" height="5"/><rect x="9" y="2" width="5" height="5"/><rect x="2" y="9" width="5" height="5"/><rect x="9" y="9" width="5" height="5"/>',cursor:'<path d="M3 2l10 5-4.2 1.3L7.6 12.5z"/>',framer:'<path d="M3 2h10v4H8zM3 6h10l-5 4H3zM3 10h5v4z"/>',cube:'<path d="M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 8.4v6M8 8.4l5.5-3.9M8 8.4L2.5 4.5"/>',wave:'<path d="M1.5 8q2-6 4 0t4 0t4 0"/>',atom:'<ellipse cx="8" cy="8" rx="6.5" ry="2.6"/><ellipse cx="8" cy="8" rx="6.5" ry="2.6" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6.5" ry="2.6" transform="rotate(120 8 8)"/>',wind:'<path d="M2 6h7a2 2 0 1 0-2-2M2 10h9a2 2 0 1 1-2 2M2 8h11"/>',hammer:'<path d="M8.5 2.5l4.5 4.5-2 2-4.5-4.5zM7.5 6L3 11.5 4.5 13 10 8.5"/>',swift:'<path d="M4.5 4.5L2 8l2.5 3.5M11.5 4.5L14 8l-2.5 3.5M9.5 3l-3 10"/>',prompt:'<rect x="1.5" y="2.5" width="13" height="11" rx="2"/><path d="M4.5 6.5L7 8.5l-2.5 2M8.5 10.5h3"/>',branch:'<circle cx="4" cy="3.5" r="1.7"/><circle cx="4" cy="12.5" r="1.7"/><circle cx="12" cy="7" r="1.7"/><path d="M4 5.2v5.6M4 9c0-2 8-1.2 8-0.3"/>',spark:'<path d="M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5 6.4 9.6 1.5 8l4.9-1.6z"/>'},cm=[{n:"Discovery",k:[["UX Research","search"],["Systems Thinking","nodes"],["Product Strategy","target"]],side:"up"},{n:"Craft",k:[["Figma","figma"],["Design Systems","grid"],["Interaction Design","cursor"]],side:"dn"},{n:"Playground",k:[["Framer","framer"],["Three.js","cube"],["Motion","wave"]],side:"dn"},{n:"Engineering",k:[["React","atom"],["Tailwind","wind"],["Xcode","hammer"],["SwiftUI","swift"]],side:"up"},{n:"AI-Native",k:[["Claude Code","prompt"],["Agentic Workflows","branch"],["LLMs","spark"]],side:"dn"}],T1=Rt("#bs .bsstick"),Eo=Rt("#bs"),um=Rt("#bsitems"),ea=Rt("#bsfill"),w1=Rt("#bsbase"),$d=Rt("#bsph"),Kd=Rt("#bsst"),Zd=Rt("#bsgrid"),Wo=cm.map((i,t)=>{const e=document.createElement("div");return e.className="bsi "+i.side,e.dataset.i=t,e.innerHTML=`<i class="dot"></i><i class="lead"></i><div class="bx tb"><b class="bh" data-r>${we(i.n)}</b><p class="bk">${i.k.map(([n,r],s)=>`<span class="sk" data-r><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${E1[r]}</svg>${we(n)}${s<i.k.length-1?'<i class="sp">·</i>':""}</span>`).join(" ")}</p></div>`,um.appendChild(e),e});let Xo=1,To=[],Jd=[];const sl=()=>{const i=Kd.clientWidth,t=Kd.clientHeight;if(!i)return;const e=zi(Math.round(i/40),34,56),n=Math.round(i/2),r=Math.round(t/2);Zd.style.backgroundSize=`${e}px ${e}px`,Zd.style.backgroundPosition=`${n}px ${r}px`;const s=[3,-3,0,3,-3],a=[-9,-3,3,9],o=[[-20,s[0]]];a.forEach((h,f)=>{o.push([h,s[f]],[h,s[f+1]])}),o.push([20,s[4]]);const c="M"+o.map(([h,f])=>[n+h*e+.5,r+f*e+.5]).map(([h,f])=>`${h} ${f}`).join("L");w1.setAttribute("d",c),ea.setAttribute("d",c),Xo=ea.getTotalLength(),ea.style.strokeDasharray=Xo;const u=4*e;um.style.setProperty("--bw",u+"px");const d=[-13,-7,-1,5,11];To=d.map((h,f)=>{let _=0;for(let g=0;g<o.length-1;g++){const[p,m]=o[g],[b,R]=o[g+1];if(m===R&&m===s[f]&&h>=Math.min(p,b)&&h<=Math.max(p,b))return _+Math.abs(h-p)*e;_+=Math.hypot(b-p,R-m)*e}return _}),Wo.forEach((h,f)=>{const _=n+(d[f]-1)*e,g=r+s[f]*e;h.style.left=_+"px",h.style.setProperty("--dx",e+"px"),h.classList.contains("up")?(h.style.bottom=t-(g-28)+"px",h.style.top="auto"):(h.style.top=g+28+"px",h.style.bottom="auto")})};cm.forEach((i,t)=>{Gr(Wo[t]),Ae(".sp-t",Wo[t]).forEach(e=>e.style.opacity=0)});sl();addEventListener("resize",sl);var sf;(sf=document.fonts)==null||sf.ready.then(sl);const A1=()=>{if(!Eo||!To.length&&(sl(),!To.length))return;const i=Eo.getBoundingClientRect(),t=Eo.offsetHeight-innerHeight,e=zi(-i.top/Math.max(1,t)),r=zi((e-.04)/.86)*Xo;ea.style.strokeDashoffset=Xo-r;const s=ea.getPointAtLength(r);$d.style.transform=`translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`,$d.style.opacity=e>.005?1:0,T1.style.opacity=(1-zi((e-.92)/.08)).toFixed(3),Wo.forEach((a,o)=>{const l=r>=To[o]-4;l!==a.classList.contains("on")&&(a.classList.toggle("on",l),l&&!Jd[o]&&(Jd[o]=1,wa(a,{delay:.25,speed:1.1})))})};let lc=!1;const oo={};let Qd=0;const jd=i=>{if(Sn||lc)return;lc=!0;const t=n=>n.preventDefault(),e=n=>{["ArrowDown","ArrowUp","PageDown","PageUp","Home","End"," "].includes(n.key)&&n.preventDefault()};addEventListener("wheel",t,{passive:!1}),addEventListener("touchmove",t,{passive:!1}),addEventListener("keydown",e),setTimeout(()=>{removeEventListener("wheel",t),removeEventListener("touchmove",t),removeEventListener("keydown",e),lc=!1},i)},R1=()=>{const i=scrollY>Qd+.5;if(Qd=scrollY,!i||document.body.classList.contains("is-splash"))return;const t=innerHeight,e=sm.getBoundingClientRect().top;if(!oo.e&&e<t*.3){oo.e=1;const n=Math.abs(e)>2&&e>-t*.6&&!Sn;if(jd((n?1300:0)+2e3),n){const r={y:scrollY},s=scrollY+e;Bt.to(r,{y:s,duration:1.3,ease:"power2.inOut",onUpdate:()=>scrollTo(0,r.y)})}}else!oo.b&&Eo.getBoundingClientRect().top<t*.1&&(oo.b=1,jd(1500))};Rt("#pgrid").innerHTML=Qp.map(i=>`<button type="button" class="pt reveal" data-cur="View" data-id="${i.id}"><span class="im">${i.img?`<img src="${i.img}" alt="${we(i.t)}" loading="lazy">`:""}</span><span class="cp"><span class="cp__t"><b>${we(i.t)}</b><span class="cp__d">${we(i.d)}</span></span><svg class="cp__a" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 11.5l7-7M5.5 4.5h6v6"/></svg></span></button>`).join("");const qo=Rt("#modal"),C1=i=>{Rt("#mimg").innerHTML=i.img?`<img src="${i.img}" alt="${we(i.t)}">`:"",Rt("#mtxt").innerHTML=`<h4 class="ch" id="mt"></h4><p>${we(i.cat||"")}</p><p>${we(i.d)}</p><div class="kw">${i.k.map(t=>`<span>${we(t)}</span>`).join("")}</div>${i.href?`<a class="go" href="${we(i.href)}" target="_blank" rel="noopener noreferrer">Open case study ↗</a>`:'<p style="color:#777;font-size:11px;text-transform:uppercase">Coming soon</p>'}`,u1(Rt("#mt"),i.t),qo.classList.add("on"),Rt("#mx").focus()},Br=()=>{qo.classList.remove("on"),Rt("#amodal").classList.remove("on")};Rt("#mx").onclick=Br;Rt("#ax").onclick=Br;qo.addEventListener("click",i=>{i.target===qo&&Br()});Rt("#amodal").addEventListener("click",i=>{i.target===Rt("#amodal")&&Br()});addEventListener("keydown",i=>{i.key==="Escape"&&Br()});document.addEventListener("click",i=>{const t=i.target.closest(".pt, .card[data-id]");if(t){const e=window.__VP_NAV&&Jp[t.dataset.id];if(e)try{top.location.href=new URL(e,top.location.origin).href;return}catch{}C1(jp[t.dataset.id]);return}});{const i=Ae(".ac"),t=()=>i.forEach(n=>{n.classList.remove("on"),n.setAttribute("aria-expanded","false")});i.forEach(n=>{const r=()=>{const s=n.classList.contains("on");t(),s||(n.classList.add("on"),n.setAttribute("aria-expanded","true"))};n.addEventListener("click",s=>{if(matchMedia("(hover: none)").matches){if(s.target.closest(".xb")){t();return}s.target.closest("a, canvas, .pb")||n.classList.contains("on")&&s.target.closest(".hv")||r()}}),n.addEventListener("keydown",s=>{s.target===n&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r())})}),addEventListener("keydown",n=>{n.key==="Escape"&&t()});const e=Rt('.ac[data-s="hello"] canvas');if(e){const n=e.closest(".pd"),r=e.getContext("2d"),s=Rt(".ps",n);let a=!1,o=!1;const l=s.textContent;r.lineWidth=2,r.lineCap="round",r.lineJoin="round",r.strokeStyle="#0a0a0a";const c=d=>{const h=e.getBoundingClientRect();return[(d.clientX-h.left)*e.width/h.width,(d.clientY-h.top)*e.height/h.height]};e.addEventListener("pointerdown",d=>{a=!0,o=!0,e.setPointerCapture(d.pointerId);const[h,f]=c(d);r.beginPath(),r.moveTo(h,f),r.lineTo(h+.1,f),r.stroke()}),e.addEventListener("pointermove",d=>{if(!a)return;const[h,f]=c(d);r.lineTo(h,f),r.stroke()});const u=()=>{a=!1};e.addEventListener("pointerup",u),e.addEventListener("pointercancel",u),Rt("[data-pc]",n).onclick=()=>{r.clearRect(0,0,e.width,e.height),o=!1,s.textContent=l},Rt("[data-ps]",n).onclick=async()=>{if(!o){s.textContent="Blank is bold, but draw something.";return}const d=document.createElement("canvas");d.width=e.width,d.height=e.height;const h=d.getContext("2d");h.fillStyle="#fff",h.fillRect(0,0,d.width,d.height),h.drawImage(e,0,0);const f=d.toDataURL("image/png");let _=!1;try{const g=window.claude&&await window.claude.use("db"),p=window.claude&&await window.claude.use("user");g&&p&&(await g.collection("doodles").doc(String(await p.id())).set({img:f,at:Date.now()}),_=!0)}catch{}if(!_)try{const g=JSON.parse(localStorage.getItem("vp-doodles")||"[]");g.push({img:f,at:Date.now()}),localStorage.setItem("vp-doodles",JSON.stringify(g.slice(-5)))}catch{}s.textContent=_?"Got it. Thank you.":"Saved on this device only.",r.clearRect(0,0,e.width,e.height),o=!1}}}a1(Rt("#agrid"));const oh=[{n:"Mic Check",tag:"Storyteller",tip:"Mic in hand, slides behind me, mild panic inside. Somehow still the best part of the job.",img:"speaking",pos:"45% 50%",r:-2.5,x:38,y:12,s:.9},{n:"Dance Floor",tag:"Mover",tip:"Professionally unprofessional. The choreography is mostly confidence and the rest is vibes.",img:"dancer",pos:"50% 35%",r:3,x:63,y:22,s:-.8},{n:"Fit Check",tag:"Stylist",tip:"Getting dressed is just UI design for the human body. Yes, the ring is a component.",img:"dresser",pos:"50% 40%",r:-3,x:47,y:34,s:1.1},{n:"Race Day",tag:"Competitor",tip:"I ran a race and did the dab at the finish line. The medal is mostly for the pose.",img:"run",pos:"50% 62%",r:2.5,x:10,y:36,s:-1},{n:"Paddle Mode",tag:"Competitor",tip:"Competitive until the first rally, then I am just here for the banter and the snacks.",img:"paddle",pos:"50% 40%",r:-2,x:14,y:62,s:.8},{n:"Shoe Canvas",tag:"Maker",tip:"If it holds still for five minutes, I will paint on it. The shoe never saw it coming.",img:"creative",pos:"50% 50%",r:3,x:31,y:52,s:-.7},{n:"Charm Hoarder",tag:"Collector",tip:"Every pocket is a tiny museum. This little S has a bigger backstory than my résumé.",img:"hoarder",pos:"50% 40%",r:-2.5,x:85,y:42,s:1},{n:"Tiny Tattoo",tag:"Collector",tip:"Small ink, big commitment. Yes it hurt. No, I am not telling you what it means.",img:"tattoo",pos:"50% 55%",r:2,x:77,y:24,s:-1.1},{n:"Lego Maker",tag:"Tinkerer",tip:"Give me small pieces and a free floor and the whole evening disappears. Worth every minute.",img:"legomaker",pos:"50% 50%",r:-3,x:69,y:60,s:.9},{n:"Bowl Life",tag:"Foodie",tip:"Photographed first, eaten second. The strawberries know their angles.",img:"food",pos:"50% 50%",r:2.5,x:36,y:84,s:-.9},{n:"View Seeker",tag:"Wanderer",tip:"I will cross any room for a good sunset. Window seat is non-negotiable.",img:"viewseeker",pos:"50% 55%",r:-2,x:61,y:82,s:.8},{n:"Goofball",tag:"Clown",tip:"High five? No, that is a palm doodle. I have never been serious, and it shows.",img:"goofball",pos:"50% 28%",r:3,x:25,y:17,s:-.8}],xa=Rt("#chart");oh.forEach((i,t)=>{const e=document.createElement("div");e.className="pi",e.tabIndex=0,e.dataset.i=t,e.style.left=i.x+"%",e.style.top=i.y+"%",e.addEventListener("pointerenter",()=>{Ms.textContent=i.tip,Ms.classList.add("on")}),e.addEventListener("pointerleave",()=>Ms.classList.remove("on")),e.innerHTML=`<div class="in" style="rotate:${i.r}deg"><div class="th"><img src="${ei("me/"+i.img+".webp")}" alt="${we(i.n)}" style="object-position:${i.pos}" loading="lazy"><i class="qtag">${we(i.tag)}</i></div><b>${we(i.n)}</b></div>`,xa.appendChild(e),i.href&&e.addEventListener("click",()=>window.open(i.href,"_blank","noopener"))});const hm=Ae(".pi",xa),tf=oh.map(i=>[i.x,i.y]),lh=()=>{const i=xa.clientWidth,t=xa.clientHeight;if(i<600||t<300)return;const e=52,n=26,r=24,s=[[0,t/2-30,190,t/2+30],[i-190,t/2-30,i,t/2+30],[i/2-120,0,i/2+120,64],[i/2-120,t-64,i/2+120,t]],a=hm.map((o,l)=>{const c=tf[l%tf.length],u=o.offsetWidth,d=o.offsetHeight,h=50+(c[0]-50)*.84,f=c[1];return{el:o,w:u,h:d,x:h/100*i-u/2,y:f/100*t}});for(let o=0;o<400;o++){for(let l=0;l<a.length;l++)for(let c=l+1;c<a.length;c++){const u=a[l],d=a[c],h=Math.min(u.x+u.w+e-d.x,d.x+d.w+e-u.x),f=Math.min(u.y+u.h+e-d.y,d.y+d.h+e-u.y);if(h>0&&f>0)if(h<f){const _=h/2+.5,g=u.x+u.w/2<d.x+d.w/2?-1:1;u.x+=g*_,d.x-=g*_}else{const _=f/2+.5,g=u.y+u.h/2<d.y+d.h/2?-1:1;u.y+=g*_,d.y-=g*_}}a.forEach(l=>{s.forEach(c=>{const u=Math.min(l.x+l.w+n-c[0],c[2]+n-l.x),d=Math.min(l.y+l.h+n-c[1],c[3]+n-l.y);u>0&&d>0&&(u<d?l.x+=l.x+l.w/2<(c[0]+c[2])/2?-u:u:l.y+=l.y+l.h/2<(c[1]+c[3])/2?-d:d)}),l.x=Math.max(r,Math.min(i-r-l.w,l.x)),l.y=Math.max(76,Math.min(t-76-l.h,l.y))})}a.forEach(o=>{o.el.style.left=o.x+"px",o.el.style.top=o.y+"px"})};try{new ResizeObserver(lh).observe(xa)}catch{}lh();var af;(af=document.fonts)==null||af.ready.then(lh);const P1=()=>{const i=innerHeight;hm.forEach(t=>{const e=t.getBoundingClientRect();if(e.bottom<-400||e.top>i+400)return;const n=Rt(".in",t),r=oh[t.dataset.i],s=e.top+e.height/2,a=(s-i/2)*r.s*.05,o=s+a,l=zi(o/(i*.2)),c=zi((i*1.02-o)/(i*.22)),u=Math.min(l,c),d=u*u*(3-2*u);n.style.transform=`translate3d(0, ${a.toFixed(1)}px, 0) scale(${(.94+.06*d).toFixed(3)})`,n.style.opacity=d.toFixed(3),n.style.filter=d<.99?`blur(${((1-d)*9).toFixed(1)}px)`:"none"})};{const i=["Plot twist: there is a life outside Figma.","Now playing: football, badly narrated.","Breaking: designer discovers eggs.","Channel 3: a chess game I am definitely winning.","Static. Even I need a day off."];let t=0;const e=Rt("#tv"),n=Rt("#tvq");e.addEventListener("click",()=>{t=(t+1)%i.length,n.textContent=i[t],e.classList.remove("zap"),e.offsetWidth,e.classList.add("zap");try{zr(),ho==null||ho(1)}catch{}})}const L1={mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',linkedin:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V17M8 7.2v.01M12 17v-3.8a2.3 2.3 0 0 1 4.6 0V17M12 10.5V17"/>',behance:'<path d="M3 6.5h4.8a2.6 2.6 0 0 1 0 5.2H3zM3 11.7h5.4a2.7 2.7 0 0 1 0 5.4H3zM14.5 7.5h5M13.6 13.6h7a3.5 3.5 0 1 0-1.1 2.6"/>',medium:'<ellipse cx="7.5" cy="12" rx="4.5" ry="5"/><ellipse cx="16" cy="12" rx="2" ry="4.6"/><path d="M20.6 7.6v8.8"/>',instagram:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><path d="M17.2 6.8v.01"/>',topmate:'<circle cx="12" cy="12" r="8.5"/><path d="M15.8 9.3a4.6 4.6 0 1 0 0 5.4"/>',resume:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 15.5h5"/>'},D1=[["Email","mail","mailto:harshvasaa@gmail.com"],["LinkedIn","linkedin","https://www.linkedin.com/in/harshvasa/"],["Behance","behance","https://www.behance.net/harshvasa"],["Medium","medium",o1],["Instagram","instagram","https://instagram.com/harshvasa"],["Topmate","topmate","https://topmate.io/harshvasa"],["Resume","resume","https://drive.google.com/file/d/1_8kKlaUWFyda001OMMwjNNAwS0c7pkJr/view?usp=sharing"]].map(([i,t,e])=>`<a href="${e}" aria-label="${i}" title="${i}" data-cur="${i}"${/^https?:|\.pdf/.test(e)?' target="_blank" rel="noopener noreferrer"':""}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${L1[t]}</svg></a>`).join("<i></i>");Ae(".foot__l").forEach(i=>{i.innerHTML=D1});const dm=new IntersectionObserver(i=>i.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),dm.unobserve(t.target))}),{threshold:.12}),ef=()=>Ae(".reveal:not(.in)").forEach(i=>dm.observe(i)),fm=new IntersectionObserver(i=>i.forEach(t=>{t.isIntersecting&&(c1(t.target),fm.unobserve(t.target))}),{threshold:.4}),pm=new IntersectionObserver(i=>i.forEach(t=>{t.isIntersecting&&(x1(t.target),pm.unobserve(t.target))}),{threshold:.3}),ch=new IntersectionObserver(i=>i.forEach(t=>{t.isIntersecting&&(wa(t.target,{speed:1}),ch.unobserve(t.target))}),{threshold:.5});Gr(Rt("#intro"));Ae("#intro [data-r]").forEach(i=>{Ae(".sp-t",i).forEach(t=>t.style.opacity=0),ch.observe(i)});Ae("[data-fx]").forEach(i=>pm.observe(i));Gr(Rt("#aboutw"));Gr(Rt("#quirks"));Ae("#aboutw [data-r], #quirks [data-r]").forEach(i=>{Ae(".sp-t",i).forEach(t=>t.style.opacity=0),ch.observe(i)});const cc={space:Rt("#v-space"),work:Rt("#v-work")},mm=i=>{const t=Rt("#aboutw");if(!t)return;const e=t.getBoundingClientRect().top+scrollY-24;scrollTo({top:e,behavior:i?"smooth":"auto"})};Rt("#nav").innerHTML='<button type="button" data-v="space">Space</button><a class="hp" href="#space" aria-label="Harsh Vasa, home" data-cur="Home"><img src="./assets/logo.webp" alt=""></a><button type="button" data-v="work">Work</button>';let wr="";const uh=()=>{var e,n,r;const i=(location.hash||(window.__VP_HASH?"#"+window.__VP_HASH:"")||"#space").slice(1),t=cc[i]?i:"space";if(i==="about"){t!==wr&&(wr=t,Object.entries(cc).forEach(([s,a])=>a.classList.toggle("on",s===t)),Ae("#nav button").forEach(s=>s.classList.toggle("is-current",s.dataset.v===t)),Br(),ef(),Su()),setTimeout(()=>mm(!1),650);return}if(t!==wr){if(wr=t,Object.entries(cc).forEach(([s,a])=>a.classList.toggle("on",s===t)),Ae("#nav button").forEach(s=>s.classList.toggle("is-current",s.dataset.v===t)),document.body.classList.toggle("is-work",t==="work"),scrollTo(0,0),t==="work")try{(r=(n=(e=window.__space)==null?void 0:e.world)==null?void 0:n.stopMusic)==null||r.call(n)}catch{}Br(),ef(),Ae(".view.on .ch").forEach(s=>fm.observe(s)),Su(),t==="space"&&_1()}};Rt("#nav").addEventListener("click",i=>{const t=i.target.closest("button");if(t){if(t.dataset.v==="about"){wr==="space"?mm(!0):location.hash="#about";return}location.hash==="#"+t.dataset.v?scrollTo({top:0,behavior:"smooth"}):location.hash="#"+t.dataset.v}});addEventListener("hashchange",uh);const gm=()=>{wr==="space"&&(Su(),m1(),A1(),R1(),M1(),v1(),b1(),P1()),f1(),requestAnimationFrame(gm)};let nf=!1;const _m=()=>{nf||(nf=!0,requestAnimationFrame(gm))},Ps=document.body,Yo=Rt("#splash"),wo=Rt('[data-action="mute"]'),xm=()=>{const i=Ls();wo.classList.toggle("is-off",i),wo.title=i?"Sound off":"Sound on",wo.setAttribute("aria-pressed",String(i))};xm();wo.addEventListener("click",()=>{zr(),ca(!Ls()),xm()});const vm="vp-entered";let Mm=!1;try{Mm=sessionStorage.getItem(vm)==="1"}catch{}let Ss=!1;const va=()=>{if(!Ss){Ss=!0;try{sessionStorage.setItem(vm,"1")}catch{}Ps.classList.remove("is-splash","is-sliding"),Ps.classList.add("is-space"),Yo.style.display="none",uh(),_m()}},I1=()=>{if(!Ss){if(Sn){va();return}Ps.classList.add("is-sliding"),Yo.classList.add("is-lifting"),Bt.to(".intro-ui",{opacity:0,duration:.4}),Ps.classList.remove("is-splash"),uh(),_m(),Bt.to(Yo,{yPercent:-100,duration:1.4,ease:"expo.inOut",delay:.25,onComplete:va})}},$o=j0({reduced:Sn,onDone:I1});Mm&&(Yo.style.display="none",setTimeout(()=>{$o.skip(),va()},0));{const i=Rt(".splash__lead");i&&(i.dataset.r="1",Gr(i.parentNode),Bt.delayedCall(.55,()=>wa(i,{speed:.9})))}Rt('[data-action="skip"]').addEventListener("click",()=>{zr(),$o.skip(),va()});Bt.from(".slot",{opacity:0,scale:.96,duration:Sn?0:1.1,ease:"power3.out",delay:.1});document.addEventListener("pointerdown",()=>zr(),{passive:!0});const uc={},U1=(i,t)=>{var h;const e=(h=i.world.sprites)==null?void 0:h[/^cab_/.test(t)?"cab_body":t];if(!e||uc[t]||Sn)return;uc[t]=1;const n=e.state,r=()=>e.apply(),s=()=>{uc[t]=0},a=()=>Bt.timeline({onComplete:s}).to(n,{rot:.05,duration:.14,ease:"power2.out",onUpdate:r}).to(n,{rot:-.04,duration:.2,ease:"power2.inOut",onUpdate:r}).to(n,{rot:0,duration:.35,ease:"elastic.out(1,0.5)",onUpdate:r}),o=()=>Bt.timeline({onComplete:s}).to(n,{rot:-.045,duration:.07,ease:"sine.inOut",onUpdate:r}).to(n,{rot:.045,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:-.03,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:.02,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:0,duration:.14,ease:"sine.out",onUpdate:r}),l=()=>Bt.timeline({onComplete:s}).to(n,{sc:1.2,duration:.22,ease:"power2.out",onUpdate:r}).to(n,{sc:1,duration:.5,delay:.25,ease:"power2.inOut",onUpdate:r}),c=()=>Bt.timeline({onComplete:s}).to(n,{sc:1.12,rot:.04,duration:.2,ease:"power2.out",onUpdate:r}).to(n,{sc:1,rot:0,duration:.5,delay:.2,ease:"elastic.out(1,0.6)",onUpdate:r}),u=()=>Bt.timeline({onComplete:s}).to(e,{flip:-1,duration:.26,ease:"power2.inOut",onUpdate:r}).to(e,{flip:1,duration:.3,ease:"back.out(2)",delay:.4,onUpdate:r}),d=/^(knight|mug|plant)$/.test(t)?[u,a,l]:[a,o,l,c];d[Math.floor(Math.random()*d.length)]()};Kp(Rt(".sp-frame__canvas"),{reduced:Sn}).then(i=>{const t=Rt(".sp-toast");i.setPose({X:1e3,Y:690,zoom:1.12,fx:.5,fy:.475}),i.world.auto.start("hello"),i.world.toast.fn=e=>{if(!e){t.classList.remove("on");return}t.textContent=e,t.classList.add("on")},i.onHover(e=>{_a=!!e&&Ho,_a&&(Vo=""),rm(),e&&Ho&&U1(i,e.name)}),window.__space=i});{const i=Rt("#footcv"),t=Rt("#foot"),e=Rt("#footstage");let n=!1,r=!1,s=!1,a=!1,o=null;const l=document.createElement("div");l.className="foot__tip",l.setAttribute("aria-hidden","true"),e.appendChild(l),Gr(Rt("#footin")),Ae("#footin [data-r]").forEach(p=>Ae(".sp-t",p).forEach(m=>m.style.opacity=0));const c=()=>{a||(a=!0,t.classList.add("go"),Ae("#footin [data-r]").forEach(p=>wa(p,{delay:.35,speed:1})))};let u=null,d=0;const h=()=>{if(!u||!(o!=null&&o.project)){d=0;return}const p=o.project(u);l.style.left=p.x.toFixed(1)+"px",l.style.top=(p.y-4).toFixed(1)+"px",d=requestAnimationFrame(h)},f=()=>{if(!(s||!(o!=null&&o.world))){if(s=!0,l.classList.remove("on"),u=null,Sn){c();return}setTimeout(c,16e3);try{o.world.rollHold(()=>Bt.delayedCall(.9,()=>{try{o.world.fadeSpill(()=>Bt.delayedCall(.35,c))}catch{c()}}))}catch{c()}}},_=()=>{!r||!(o!=null&&o.world)||s||Sn||Bt.delayedCall(1,()=>{s||(o.world.toast.fn=(p,m)=>{if(!p){l.classList.remove("on"),u=null;return}l.textContent=p,u=m,d||h(),l.classList.add("on")},o.world.say("football","Roll me. I dare you.",0))})},g=()=>Kp(i,{reduced:Sn,parallax:!1}).then(p=>{o=p,p.setPose({X:1e3,Y:690,zoom:1.2,fx:.5,fy:.5}),window.__foot=p,requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("rdy")));const m=p.world;Object.keys(m.act).forEach(b=>{b!=="football"&&(m.act[b]=()=>{})}),Object.keys(m.drag||{}).forEach(b=>delete m.drag[b]),m.act.football=f,m.toast.fn=()=>{},_()}).catch(()=>{o={},c()});new IntersectionObserver(p=>{p[0].isIntersecting&&!n&&(n=!0,g())},{rootMargin:"2400px"}).observe(e),new IntersectionObserver(p=>{p[0].isIntersecting&&!r&&(r=!0,Sn?c():_())},{threshold:.25}).observe(t)}{const i=Rt("#footw");new IntersectionObserver(t=>{t[0].isIntersecting&&i.classList.add("go")},{threshold:.3}).observe(i)}{const i=(e,n,r=8)=>{if(!n)return!1;const s=n.getBoundingClientRect();return e.clientX>=s.left-r&&e.clientX<=s.right+r&&e.clientY>=s.top-r&&e.clientY<=s.bottom+r},t=()=>{Ss||$o.pull()};document.addEventListener("click",e=>{if(!(Ss||!Ps.classList.contains("is-splash"))){if(i(e,Rt('[data-action="skip"]'),4)){zr(),$o.skip(),va();return}(i(e,Rt(".splash__lead"),6)||i(e,Rt(".slot__lever"),6))&&t()}},!0),addEventListener("keydown",e=>{var n,r;!Ss&&Ps.classList.contains("is-splash")&&(e.key==="Enter"||e.key===" ")&&!((r=(n=e.target).closest)!=null&&r.call(n,'button, [role="button"]'))&&(e.preventDefault(),t())})}document.addEventListener("pointerdown",()=>ng(),{passive:!0});
