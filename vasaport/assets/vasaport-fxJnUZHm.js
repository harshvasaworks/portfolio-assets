(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hh(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xs={duration:.5,overwrite:!1,delay:0},pu,tn,Rt,Wn=1e8,bt=1/Wn,rc=Math.PI*2,lm=rc/4,cm=0,Wh=Math.sqrt,um=Math.cos,dm=Math.sin,Jt=function(e){return typeof e=="string"},kt=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},mu=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},_u=function(){return typeof window<"u"},Ca=function(e){return kt(e)||Jt(e)},Xh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,sc=/(?:-?\.?\d|\.)+/gi,qh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,il=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yh=/[+-]=-?[.\d]+/,$h=/[^,'"\[\]\s]+/gi,hm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,hi,ac,gu,Fn={},yo={},Kh,Zh=function(e){return(yo=vs(e,Fn))&&Tn},xu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},js=function(e,t){return!t&&console.warn(e)},Jh=function(e,t){return e&&(Fn[e]=t)&&yo&&(yo[e]=t)||Fn},ea=function(){return 0},fm={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},pm={suppressEvents:!0},vu={},nr=[],oc={},Qh,Pn={},rl={},ad=30,ro=[],Su="",Mu=function(e){var t=e[0],n,r;if(Mi(t)||kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ro.length;r--&&!ro[r].targetTest(t););n=ro[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ef(e[r],n)))||e.splice(r,1);return e},br=function(e){return e._gsap||Mu(Xn(e))[0]._gsap},jh=function(e,t,n){return(n=e[t])&&kt(n)?e[t]():mu(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},ds=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},mm=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Eo=function(){var e=nr.length,t=nr.slice(0),n,r;for(oc={},nr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},yu=function(e){return!!(e._initted||e._startAt||e.add)},ef=function(e,t,n,r){nr.length&&!tn&&Eo(),e.render(t,n,!!(tn&&t<0&&yu(e))),nr.length&&!tn&&Eo()},tf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($h).length<2?t:Jt(e)?e.trim():e},nf=function(e){return e},On=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_m=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vs=function(e,t){for(var n in t)e[n]=t[n];return e},od=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},bo=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ys=function(e){var t=e.parent||Lt,n=e.keyframes?_m(cn(e.keyframes)):On;if(Sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},gm=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},rf=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Wo=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},lc=function(e,t,n,r){return e._startAt&&(tn?e._startAt.revert(io):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vm=function i(e){return!e||e._ts&&i(e.parent)},ld=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},To=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xo=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},qo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xo(e),n._dirty||Tr(n,e)),e},sf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=To(e.rawTime(),t),(!t._dur||_a(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},pi=function(e,t,n,r){return t.parent&&rr(t),t._start=Xt((Bi(n)?n:n||e!==Lt?Gn(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rf(e,t,"_first","_last",e._sort?"_start":0),cc(t)||(e._recent=t),r||sf(e,t),e._ts<0&&qo(e,e._tTime),e},af=function(e,t){return(Fn.ScrollTrigger||xu("scrollTrigger",t))&&Fn.ScrollTrigger.create(t,e)},of=function(e,t,n,r,s){if(bu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qh!==Ln.frame)return nr.push(e),e._lazy=[s,r],1},Sm=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Mm=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Sm(e)&&!(!e._initted&&cc(e))||(e._ts<0||e._dp._ts<0)&&!cc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=_a(0,e._tDur,t),u=Ss(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ss(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||tn||r||e._zTime===bt||!t&&e._zTime){if(!e._initted&&of(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&lc(e,t,n,!0),e._onUpdate&&!n&&In(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rr(e,1),!n&&!tn&&(In(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ym=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ms=function(e,t,n,r){var s=e._repeat,a=Xt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Xt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&qo(e,e._tTime=e._tDur*o),e.parent&&Xo(e),n||Tr(e.parent,e),e},cd=function(e){return e instanceof mn?Tr(e):Ms(e,e._dur)},Em={_start:0,endTime:ea,totalDuration:ea},Gn=function i(e,t,n){var r=e.labels,s=e._recent||Em,a=e.duration()>=Wn?s.endTime(!1):e._dur,o,l,c;return Jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},$s=function(e,t,n){var r=Bi(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;a.immediateRender=Sn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},or=function(e,t){return e||e===0?t(e):t},_a=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Jt(e)||!(t=hm.exec(e))?"":t[1]},bm=function(e,t,n){return or(n,function(r){return _a(e,t,r)})},uc=[].slice,lf=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==hi},Tm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Jt(r)&&!t||lf(r,1)?(s=n).push.apply(s,Xn(r)):n.push(r)})||n},Xn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Jt(e)&&!n&&(ac||!ys())?uc.call((t||gu).querySelectorAll(e),0):cn(e)?Tm(e,n):lf(e)?uc.call(e,0):e?[e]:[]},dc=function(e){return e=Xn(e)[0]||js("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Xn(t,n.querySelectorAll?n:n===e?js("Invalid scope")||gu.createElement("div"):e)}},cf=function(e){return e.sort(function(){return .5-Math.random()})},uf=function(e){if(kt(e))return e;var t=Mi(e)?e:{each:e},n=wr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,h=r;return Jt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],h=r[1]),function(d,f,g){var _=(g||t).length,p=a[_],m,E,R,x,M,T,A,v,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!b){for(A=-Wn;A<(A=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(p=a[_]=[],m=l?Math.min(b,_)*u-.5:r%b,E=b===Wn?0:l?_*h/b-.5:r/b|0,A=0,v=Wn,T=0;T<_;T++)R=T%b-m,x=E-(T/b|0),p[T]=M=c?Math.abs(c==="y"?x:R):Wh(R*R+x*x),M>A&&(A=M),M<v&&(v=M);r==="random"&&cf(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=on(t.amount||t.each)||0,n=n&&_<0?Sf(n):n}return _=(p[d]-p.min)/p.max||0,Xt(p.b+(n?n(_):_)*p.v)+p.u}},hc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Bi(n)?0:on(n))}},df=function(e,t){var n=cn(e),r,s;return!n&&Mi(e)&&(r=n=e.radius||Wn,e.values?(e=Xn(e.values),(s=!Bi(e[0]))&&(r*=r)):e=hc(e.increment)),or(t,n?kt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Wn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:a,s||u===a||Bi(a)?u:u+on(a)}:hc(e))},hf=function(e,t,n,r){return or(cn(e)?!t:n===!0?!!(n=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},wm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Am=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},Rm=function(e,t,n){return pf(e,t,0,1,n)},ff=function(e,t,n){return or(n,function(r){return e[~~t(r)]})},Cm=function i(e,t,n){var r=t-e;return cn(e)?ff(e,i(0,e.length),t):or(n,function(s){return(r+(s-e)%r)%r+e})},Pm=function i(e,t,n){var r=t-e,s=r*2;return cn(e)?ff(e,i(0,e.length-1),t):or(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ta=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?$h:sc),n+=e.substr(t,r-t)+hf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},pf=function(e,t,n,r,s){var a=t-e,o=r-n;return or(s,function(l){return n+((l-e)/a*o||0)})},Lm=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Jt(e),o={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else r||(e=vs(cn(e)?[]:{},e));if(!u){for(l in t)Eu.call(o,e,l,"get",t[l]);s=function(g){return Au(g,o)||(a?e.p:e)}}}return or(n,s)},ud=function(e,t,n){var r=e.labels,s=Wn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},In=function(e,t,n){var r=e.vars,s=r[t],a=Rt,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&nr.length&&Eo(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},Hs=function(e){return rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&In(e,"onInterrupt"),e},cs,mf=[],_f=function(e){if(e)if(e=!e.name&&e.default||e,_u()||e.headless){var t=e.name,n=kt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ea,render:Au,add:Eu,kill:Ym,modifier:qm,rawVars:0},a={targetTest:0,get:0,getSetter:wu,aliases:{},register:0};if(ys(),e!==r){if(Pn[t])return;On(r,On(bo(e,s),a)),vs(r.prototype,vs(s,bo(e,a))),Pn[r.prop=t]=r,e.targetTest&&(ro.push(r),vu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jh(t,r),e.register&&e.register(Tn,r,yn)}else mf.push(e)},Et=255,Ws={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},sl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},gf=function(e,t,n){var r=e?Bi(e)?[e>>16,e>>8&Et,e&Et]:0:Ws.black,s,a,o,l,c,u,h,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ws[e])r=Ws[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(sc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=sl(l+1/3,s,a),r[1]=sl(l,s,a),r[2]=sl(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(qh),n&&r.length<4&&(r[3]=1),r}else r=e.match(sc)||Ws.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,a=r[1]/Et,o=r[2]/Et,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},xf=function(e){var t=[],n=[],r=-1;return e.split(ir).forEach(function(s){var a=s.match(ls)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},dd=function(e,t,n){var r="",s=(e+r).match(ir),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=gf(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=xf(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ir,"1").split(ls),h=c.length-1;o<h;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ir),h=c.length-1;o<h;o++)r+=c[o]+s[o];return r+c[h]},ir=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ws)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),Dm=/hsl[a]?\(/,vf=function(e){var t=e.join(" "),n;if(ir.lastIndex=0,ir.test(t))return n=Dm.test(t),e[1]=dd(e[1],n),e[0]=dd(e[0],n,xf(e[1])),!0},na,Ln=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,g=function _(p){var m=i()-r,E=p===!0,R,x,M,T;if((m>e||m<0)&&(n+=m-t),r+=m,M=r-n,R=M-a,(R>0||E)&&(T=++h.frame,d=M-h.time*1e3,h.time=M=M/1e3,a+=R+(R>=s?4:s-R),x=1),E||(l=c(_)),x)for(f=0;f<o.length;f++)o[f](M,d,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Kh&&(!ac&&_u()&&(hi=ac=window,gu=hi.document||{},Fn.gsap=Tn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Tn.version),Zh(yo||hi.GreenSockGlobals||!hi.gsap&&hi||{}),mf.forEach(_f)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},na=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),na=0,c=ea},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,m,E){var R=m?function(x,M,T,A){p(x,M,T,A),h.remove(R)}:p;return h.remove(p),o[E?"unshift":"push"](R),ys(),R},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},h})(),ys=function(){return!na&&Ln.wake()},at={},Im=/^[\d.\-M][\d.\-,\s]/,Um=/["']/g,Nm=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(Um,"").trim():+c,r=l.substr(o+1).trim();return t},Fm=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Om=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Nm(t[1])]:Fm(e).split(",").map(tf)):at._CE&&Im.test(e)?at._CE("",e):n},Sf=function(e){return function(t){return 1-e(1-t)}},Mf=function i(e,t){for(var n=e._first,r;n;)n instanceof mn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},wr=function(e,t){return e&&(kt(e)?e:at[e]||Om(e))||t},Fr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Mn(e,function(o){at[o]=Fn[o]=s,at[a=o.toLowerCase()]=n;for(var l in s)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=s[l]}),s},yf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},al=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/rc*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*dm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:yf(o);return s=rc/s,l.config=function(c,u){return i(e,c,u)},l},ol=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:yf(n);return r.config=function(s){return i(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Fr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Fr("Elastic",al("in"),al("out"),al());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};Fr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Fr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Fr("Circ",function(i){return-(Wh(1-i*i)-1)});Fr("Sine",function(i){return i===1?1:-um(i*lm)+1});Fr("Back",ol("in"),ol("out"),ol());at.SteppedEase=at.steps=Fn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((r*_a(0,a,o)|0)+s)*n}}};xs.ease=at["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Su+=i+","+i+"Params,"});var Ef=function(e,t){this.id=cm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:jh,this.set=t?t.getSetter:wu},ia=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ms(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),na||Ln.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qo(this,n),!s._dp||s.parent||sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ef(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ld(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ld(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ss(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?To(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(_a(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Xo(this),xm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?To(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=pm);var r=tn;return tn=n,yu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,cd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Gn(this,n),Sn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Sn(r)),this._dur||(this._zTime=-bt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=kt(n)?n:nf,o=function(){var c=r.then;r.then=null,kt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Hs(this)},i})();On(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var mn=(function(i){Hh(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Sn(n.sortChildren),Lt&&pi(n.parent||Lt,Di(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&af(Di(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return $s(0,arguments,this),this},t.from=function(r,s,a){return $s(1,arguments,this),this},t.fromTo=function(r,s,a,o){return $s(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(r,s,Gn(this,a),1),this},t.call=function(r,s,a){return pi(this,Wt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(r,a,Gn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ys(a).immediateRender=Sn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,h){return o.startAt=a,Ys(o).immediateRender=Sn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,h)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,f,g,_,p,m,E,R,x,M,T,A;if(this!==Lt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),d=u,x=this._start,R=this._ts,m=!R,h&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(d=Xt(u%p),u===l?(_=this._repeat,d=c):(M=Xt(u/p),_=~~M,_&&_===M&&(d=c,_--),d>c&&(d=c)),M=Ss(this._tTime,p),!o&&this._tTime&&M!==_&&this._tTime-M*p-this._dur<=0&&(M=_),T&&_&1&&(d=c-d,A=1),_!==M&&!this._lock){var v=T&&M&1,b=v===(T&&_&1);if(_<M&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Xt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Mf(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=ym(this,Xt(o),Xt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!R,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!M&&(In(this,"onStart"),this._tTime!==u))return this;if(d>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=-bt);break}}f=g}else{f=this._last;for(var D=r<0?r:d;f;){if(g=f._prev,(f._act||D<=f._end)&&f._ts&&E!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,s,a||tn&&yu(f)),d!==this._time||!this._ts&&!m){E=0,g&&(u+=this._zTime=D?-bt:bt);break}}f=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-bt)._zTime=d>=o?1:-1,this._ts))return this._start=x,Xo(this),this.render(r,s,a);this._onUpdate&&!s&&In(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(R)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(In(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Bi(s)||(s=Gn(this,s,r)),!(r instanceof ia)){if(cn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Jt(r))return this.addLabel(r,s);if(kt(r))r=Wt.delayedCall(0,r);else return this}return this!==r?pi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Wn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Jt(r)?this.removeLabel(r):kt(r)?this.killTweensOf(r):(r.parent===this&&Wo(this,r),r===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Gn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Wt.delayedCall(0,s||ea,a);return o.data="isPause",this._hasPause=1,pi(this,o,Gn(this,r))},t.removePause=function(r){var s=this._first;for(r=Gn(this,r);s;)s._start===r&&s.data==="isPause"&&rr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Xn(r),l=this._first,c=Bi(s),u;l;)l instanceof Wt?mm(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Gn(a,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=Wt.to(a,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ms(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,On({startAt:{time:Gn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ud(this,Gn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ud(this,Gn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Tr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Tr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Wn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,pi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ms(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Lt._ts&&(ef(Lt,To(r,Lt)),Qh=Ln.frame),Ln.frame>=ad){ad+=Nn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Nn.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e})(ia);On(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Bm=function(e,t,n,r,s,a,o){var l=new yn(this._pt,e,t,0,1,Cf,null,s),c=0,u=0,h,d,f,g,_,p,m,E;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ta(r)),a&&(E=[n,r],a(E,e,t),n=E[0],r=E[1]),d=n.match(il)||[];h=il.exec(r);)g=h[0],_=r.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ds(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=il.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Yh.test(r)||m)&&(l.e=0),this._pt=l,l},Eu=function(e,t,n,r,s,a,o,l,c,u){kt(r)&&(r=r(s||0,e,a));var h=e[t],d=n!=="get"?n:kt(h)?c?e[t.indexOf("set")||!kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=kt(h)?c?Hm:Af:Tu,g;if(Jt(r)&&(~r.indexOf("random(")&&(r=ta(r)),r.charAt(1)==="="&&(g=ds(d,r)+(on(d)||0),(g||g===0)&&(r=g))),!u||d!==r||fc)return!isNaN(d*r)&&r!==""?(g=new yn(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?Xm:Rf,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&xu(t,r),Bm.call(this,e,t,d,r,f,l||Nn.stringFilter,c))},km=function(e,t,n,r,s){if(kt(e)&&(e=Ks(e,s,t,n,r)),!Mi(e)||e.style&&e.nodeType||cn(e)||Xh(e))return Jt(e)?Ks(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Ks(e[o],s,t,n,r);return a},bf=function(e,t,n,r,s,a){var o,l,c,u;if(Pn[e]&&(o=new Pn[e]).init(s,o.rawVars?t[e]:km(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==cs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,fc,bu=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:p,R=e._overwrite==="auto"&&!pu,x=e.timeline,M,T,A,v,b,D,P,I,z,F,k,K,H;if(x&&(!d||!s)&&(s="none"),e._ease=wr(s,xs.ease),e._yEase=h?Sf(wr(h===!0?s:h,xs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!r.runBackwards,!x||d&&!r.stagger){if(I=p[0]?br(p[0]).harness:0,K=I&&r[I.prop],M=bo(r,vu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?io:fm),_._lazy=0),a){if(rr(e._startAt=Wt.set(p,On({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return In(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!f)&&e._startAt.revert(io),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=On({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Sn(l),immediateRender:o,stagger:0,parent:m},M),K&&(A[I.prop]=K),rr(e._startAt=Wt.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(io):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Sn(l)||l&&!g,T=0;T<p.length;T++){if(b=p[T],P=b._gsap||Mu(p)[T]._gsap,e._ptLookup[T]=F={},oc[P.id]&&nr.length&&Eo(),k=E===p?T:E.indexOf(b),I&&(z=new I).init(b,K||M,e,k,E)!==!1&&(e._pt=v=new yn(e._pt,b,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ne){F[ne]=v}),z.priority&&(D=1)),!I||K)for(A in M)Pn[A]&&(z=bf(A,M,e,k,b,E))?z.priority&&(D=1):F[A]=v=Eu.call(e,b,A,"get",M[A],k,E,0,r.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),R&&e._pt&&(ji=e,Lt.killTweensOf(b,F,e.globalTime(t)),H=!e.parent,ji=0),e._pt&&l&&(oc[P.id]=1)}D&&Pf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&x.render(Wn,!0,!0)},zm=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return fc=1,e.vars[t]="+=0",bu(e,o),fc=0,l?js(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+on(h.e)),h.b&&(h.b=u.s+on(h.b))},Vm=function(e,t){var n=e[0]?br(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=vs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Gm=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ks=function(e,t,n,r,s){return kt(e)?e.call(t,n,r,s):Jt(e)&&~e.indexOf("random(")?ta(e):e},Tf=Su+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",wf={};Mn(Tf+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return wf[i]=1});var Wt=(function(i){Hh(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ys(r))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,E=r.parent||Lt,R=(cn(n)||Xh(n)?Bi(n[0]):"length"in r)?[n]:Xn(n),x,M,T,A,v,b,D,P;if(o._targets=R.length?Mu(R):js("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ca(c)||Ca(u)){if(r=o.vars,x=o.timeline=new mn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:R}),x.kill(),x.parent=x._dp=Di(o),x._start=0,d||Ca(c)||Ca(u)){if(A=R.length,D=d&&uf(d),Mi(d))for(v in d)~Tf.indexOf(v)&&(P||(P={}),P[v]=d[v]);for(M=0;M<A;M++)T=bo(r,wf),T.stagger=0,m&&(T.yoyoEase=m),P&&vs(T,P),b=R[M],T.duration=+Ks(c,Di(o),M,b,R),T.delay=(+Ks(u,Di(o),M,b,R)||0)-o._delay,!d&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),x.to(b,T,D?D(M,b,R):0),x._ease=at.none;x.duration()?c=u=0:o.timeline=0}else if(g){Ys(On(x.vars.defaults,{ease:"none"})),x._ease=wr(g.ease||r.ease||"none");var I=0,z,F,k;if(cn(g))g.forEach(function(K){return x.to(R,K,">")}),x.duration();else{T={};for(v in g)v==="ease"||v==="easeEach"||Gm(v,g[v],T,g.easeEach);for(v in T)for(z=T[v].sort(function(K,H){return K.t-H.t}),I=0,M=0;M<z.length;M++)F=z[M],k={ease:F.e,duration:(F.t-(M?z[M-1].t:0))/100*c},k[v]=F.v,x.to(R,k,I),I+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!pu&&(ji=Di(o),Lt.killTweensOf(R),ji=0),pi(E,Di(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(h||!c&&!g&&o._start===Xt(E._time)&&Sn(h)&&vm(Di(o))&&E.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-u)||0)),p&&af(Di(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-bt&&!u?l:r<bt?0:r,d,f,g,_,p,m,E,R,x;if(!c)Mm(this,r,s,a);else if(h!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,R=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(d=Xt(h%_),h===l?(g=this._repeat,d=c):(p=Xt(h/_),g=~~p,g&&g===p?(d=c,g--):d>c&&(d=c)),m=this._yoyo&&g&1,m&&(x=this._yEase,d=c-d),p=Ss(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(R&&this._yEase&&Mf(R,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(of(this,u?r:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(x||this._ease)(d/c),this._from&&(this.ratio=E=1-E),!o&&h&&!s&&!p&&(In(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(E,f.d),f=f._next;R&&R.render(r<0?r:R._dur*R._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&lc(this,r,s,a),In(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&lc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!s&&!(u&&!o)&&(h||o||m)&&(In(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){na||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||bu(this,c),u=this._ease(c/this._dur),zm(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(qo(this,0),this.parent||rf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Hs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ji&&ji.vars.overwrite!==!0)._first||Hs(this),this.parent&&a!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Xn(r):o,c=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&gm(o,l))return s==="all"&&(this._pt=0),Hs(this);for(h=this._op=this._op||[],s!=="all"&&(Jt(s)&&(_={},Mn(s,function(E){return _[E]=1}),s=_),s=Vm(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Wo(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Hs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return $s(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return $s(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Lt.killTweensOf(r,s,a)},e})(ia);On(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(i){Wt[i]=function(){var e=new mn,t=uc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Tu=function(e,t,n){return e[t]=n},Af=function(e,t,n){return e[t](n)},Hm=function(e,t,n,r){return e[t](r.fp,n)},Wm=function(e,t,n){return e.setAttribute(t,n)},wu=function(e,t){return kt(e[t])?Af:mu(e[t])&&e.setAttribute?Wm:Tu},Rf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Xm=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cf=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Au=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},qm=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},Ym=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Wo(this,t,"_pt"):t.dep||(n=1),t=r;return!n},$m=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Pf=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},yn=(function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Rf,this.d=l||this,this.set=c||Tu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=$m,this.m=n,this.mt=s,this.tween=r},i})();Mn(Su+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return vu[i]=1});Fn.TweenMax=Fn.TweenLite=Wt;Fn.TimelineLite=Fn.TimelineMax=mn;Lt=new mn({sortChildren:!1,defaults:xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=vf;var Ar=[],so={},Km=[],hd=0,Zm=0,ll=function(e){return(so[e]||Km).map(function(t){return t()})},pc=function(){var e=Date.now(),t=[];e-hd>2&&(ll("matchMediaInit"),Ar.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=hi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ll("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),hd=e,ll("matchMedia"))},Lf=(function(){function i(t,n){this.selector=n&&dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Zm++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){kt(n)&&(s=r,r=n,n=kt);var a=this,o=function(){var c=Rt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=dc(s)),Rt=a,h=r.apply(a,arguments),kt(h)&&a._r.push(h),Rt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===kt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Rt;Rt=null,n(this),Rt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Wt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ar.length;a--;)Ar[a].id===this.id&&Ar.splice(a,1)},e.revert=function(n){this.kill(n||{})},i})(),Jm=(function(){function i(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Mi(n)||(n={matches:n});var a=new Lf(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=hi.matchMedia(n[c]),l&&(Ar.indexOf(a)<0&&Ar.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(pc):l.addEventListener("change",pc)));return u&&r(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),wo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return _f(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Jt(e)&&(e=Xn(e)[0]);var s=br(e||{}).get,a=n?nf:tf;return n==="native"&&(n=""),e&&(t?a((Pn[t]&&Pn[t].get||s)(e,t,n,r)):function(o,l,c){return a((Pn[o]&&Pn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Xn(e),e.length>1){var r=e.map(function(u){return Tn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var a=Pn[t],o=br(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;cs._pt=0,h.init(e,n?u+n:u,cs,0,[e]),h.render(1,h),cs._pt&&Au(1,cs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Tn.to(e,On((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wr(e.ease,xs.ease)),od(xs,e||{})},config:function(e){return od(Nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Pn[o]&&!Fn[o]&&js(t+" effect requires "+o+" plugin.")}),rl[t]=function(o,l,c){return n(Xn(o),On(l||{},s),c)},a&&(mn.prototype[t]=function(o,l,c){return this.add(rl[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=wr(t)},parseEase:function(e,t){return arguments.length?wr(e,t):at},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),r,s;for(n.smoothChildTiming=Sn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,r=Lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Wt&&r.vars.onComplete===r._targets[0]))&&pi(n,r,r._start-r._delay),r=s;return pi(Lt,n,0),n},context:function(e,t){return e?new Lf(e,t):Rt},matchMedia:function(e){return new Jm(e)},matchMediaRefresh:function(){return Ar.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||pc()},addEventListener:function(e,t){var n=so[e]||(so[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=so[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Cm,wrapYoyo:Pm,distribute:uf,random:hf,snap:df,normalize:Rm,getUnit:on,clamp:bm,splitColor:gf,toArray:Xn,selector:dc,mapRange:pf,pipe:wm,unitize:Am,interpolate:Lm,shuffle:cf},install:Zh,effects:rl,ticker:Ln,updateRoot:mn.updateRoot,plugins:Pn,globalTimeline:Lt,core:{PropTween:yn,globals:Jh,Tween:Wt,Timeline:mn,Animation:ia,getCache:br,_removeLinkedListItem:Wo,reverting:function(){return tn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return pu=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return wo[i]=Wt[i]});Ln.add(mn.updateRoot);cs=wo.to({},{duration:0});var Qm=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jm=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Qm(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},cl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Jt(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jm(o,s)}}}},Tn=wo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cl("roundProps",hc),cl("modifiers"),cl("snap",df))||wo;Wt.version=mn.version=Tn.version="3.13.0";Kh=1;_u()&&ys();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fd,er,hs,Ru,Sr,pd,Cu,e0=function(){return typeof window<"u"},ki={},xr=180/Math.PI,fs=Math.PI/180,Wr=Math.atan2,md=1e8,Pu=/([A-Z])/g,t0=/(left|right|width|margin|padding|x)/i,n0=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Df=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},If=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},a0=function(e,t,n){return e.style[t]=n},o0=function(e,t,n){return e.style.setProperty(t,n)},l0=function(e,t,n){return e._gsap[t]=n},c0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u0=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},d0=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},It="transform",En=It+"Origin",h0=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ii(r,o)}):this.tfm[e]=a.x?a[e]:Ii(r,e),e===En&&(this.tfm.zOrigin=a.zOrigin);else return _i.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},Uf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},f0=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Cu(),(!s||!s.isStart)&&!n[It]&&(Uf(n),r.zOrigin&&n[En]&&(n[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Nf=function(e,t){var n={target:e,props:[],revert:f0,save:h0};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Ff,_c=function(e,t){var n=er.createElementNS?er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):er.createElement(e);return n&&n.style?n:er.createElement(e)},qn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Es(t)||t,1)||""},_d="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var r=t||Sr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_d[a]+e in s););return a<0?null:(a===3?"ms":a>=0?_d[a]:"")+e},gc=function(){e0()&&window.document&&(fd=window,er=fd.document,hs=er.documentElement,Sr=_c("div")||{style:{}},_c("div"),It=Es(It),En=It+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ff=!!Es("perspective"),Cu=Tn.core.reverting,Ru=1)},gd=function(e){var t=e.ownerSVGElement,n=_c("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),hs.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),hs.removeChild(n),s},xd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Of=function(e){var t,n;try{t=e.getBBox()}catch{t=gd(e),n=1}return t&&(t.width||t.height)||n||(t=gd(e)),t&&!t.width&&!t.x&&!t.y?{x:+xd(e,["x","cx","x1"])||0,y:+xd(e,["y","cy","y1"])||0,width:0,height:0}:t},Bf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Of(e))},Rr=function(e,t){if(t){var n=e.style,r;t in ki&&t!==En&&(t=It),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Pu,"-$1").toLowerCase())):n.removeAttribute(t)}},tr=function(e,t,n,r,s,a){var o=new yn(e._pt,t,n,0,1,a?If:Df);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},vd={deg:1,rad:1,turn:1},p0={grid:1,flex:1},sr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Sr.style,l=t0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",f=r==="%",g,_,p,m;if(r===a||!s||vd[r]||vd[a])return s;if(a!=="px"&&!d&&(s=i(e,t,n,"px")),m=e.getCTM&&Bf(e),(f||a==="%")&&(ki[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Gt(f?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===er||!_.appendChild)&&(_=er.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Ln.time&&!p.uncache)return Gt(s/p.width*h);if(f&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+r,g=e[u],E?e.style[t]=E:Rr(e,t)}else(f||a==="%")&&!p0[qn(_,"display")]&&(o.position=qn(e,"position")),_===e&&(o.position="static"),_.appendChild(Sr),g=Sr[u],_.removeChild(Sr),o.position="absolute";return l&&f&&(p=br(_),p.time=Ln.time,p.width=_[u]),Gt(d?g*s/h:g&&s?h/g*s:0)},Ii=function(e,t,n,r){var s;return Ru||gc(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),ki[t]&&t!=="transform"?(s=sa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ro(qn(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ao[t]&&Ao[t](e,t,n)||qn(e,t)||jh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?sr(e,t,s,n)+n:s},m0=function(e,t,n,r){if(!n||n==="none"){var s=Es(t,e,1),a=s&&qn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=qn(e,"borderTopColor"))}var o=new yn(this._pt,e.style,t,0,1,Cf),l=0,c=0,u,h,d,f,g,_,p,m,E,R,x,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=qn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=qn(e,t)||r,_?e.style[t]=_:Rr(e,t)),u=[n,r],vf(u),n=u[0],r=u[1],d=n.match(ls)||[],M=r.match(ls)||[],M.length){for(;h=ls.exec(r);)p=h[0],E=r.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),p.charAt(1)==="="&&(p=ds(f,p)+x),m=parseFloat(p),R=p.substr((m+"").length),l=ls.lastIndex-R.length,R||(R=R||Nn.units[t]||x,l===r.length&&(r+=R,o.e+=R)),x!==R&&(f=sr(e,t,_,R)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?If:Df;return Yh.test(r)&&(o.e=0),this._pt=o,o},Sd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_0=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Sd[n]||n,t[1]=Sd[r]||r,t.join(" ")},g0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ki[o]&&(l=1,o=o==="transformOrigin"?En:It),Rr(n,o);l&&(Rr(n,It),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sa(n,1),a.uncache=1,Uf(r)))}},Ao={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new yn(e._pt,t,n,0,0,g0);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ra=[1,0,0,1,0,0],kf={},zf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Md=function(e){var t=qn(e,It);return zf(t)?ra:t.substr(7).match(qh).map(Gt)},Lu=function(e,t){var n=e._gsap||br(e),r=e.style,s=Md(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!e.offsetParent&&e!==hs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,hs.appendChild(e)),s=Md(e),l?r.display=l:Rr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xc=function(e,t,n,r,s,a){var o=e._gsap,l=s||Lu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],E=l[5],R=t.split(" "),x=parseFloat(R[0])||0,M=parseFloat(R[1])||0,T,A,v,b;n?l!==ra&&(A=f*p-g*_)&&(v=x*(p/A)+M*(-_/A)+(_*E-p*m)/A,b=x*(-g/A)+M*(f/A)-(f*E-g*m)/A,x=v,M=b):(T=Of(e),x=T.x+(~R[0].indexOf("%")?x/100*T.width:x),M=T.y+(~(R[1]||R[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&o.smooth?(m=x-c,E=M-u,o.xOffset=h+(m*f+E*_)-m,o.yOffset=d+(m*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[En]="0px 0px",a&&(tr(a,o,"xOrigin",c,x),tr(a,o,"yOrigin",u,M),tr(a,o,"xOffset",h,o.xOffset),tr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},sa=function(e,t){var n=e._gsap||new Ef(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=qn(e,En)||"0",u,h,d,f,g,_,p,m,E,R,x,M,T,A,v,b,D,P,I,z,F,k,K,H,ne,V,$,j,Ee,ve,Ge,Ne;return u=h=d=_=p=m=E=R=x=0,f=g=1,n.svg=!!(e.getCTM&&Bf(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),r.scale=r.rotate=r.translate="none"),A=Lu(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),c=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),xc(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,T=n.yOrigin||0,A!==ra&&(P=A[0],I=A[1],z=A[2],F=A[3],u=k=A[4],h=K=A[5],A.length===6?(f=Math.sqrt(P*P+I*I),g=Math.sqrt(F*F+z*z),_=P||I?Wr(I,P)*xr:0,E=z||F?Wr(z,F)*xr+_:0,E&&(g*=Math.abs(Math.cos(E*fs))),n.svg&&(u-=M-(M*P+T*z),h-=T-(M*I+T*F))):(Ne=A[6],ve=A[7],$=A[8],j=A[9],Ee=A[10],Ge=A[11],u=A[12],h=A[13],d=A[14],v=Wr(Ne,Ee),p=v*xr,v&&(b=Math.cos(-v),D=Math.sin(-v),H=k*b+$*D,ne=K*b+j*D,V=Ne*b+Ee*D,$=k*-D+$*b,j=K*-D+j*b,Ee=Ne*-D+Ee*b,Ge=ve*-D+Ge*b,k=H,K=ne,Ne=V),v=Wr(-z,Ee),m=v*xr,v&&(b=Math.cos(-v),D=Math.sin(-v),H=P*b-$*D,ne=I*b-j*D,V=z*b-Ee*D,Ge=F*D+Ge*b,P=H,I=ne,z=V),v=Wr(I,P),_=v*xr,v&&(b=Math.cos(v),D=Math.sin(v),H=P*b+I*D,ne=k*b+K*D,I=I*b-P*D,K=K*b-k*D,P=H,k=ne),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Gt(Math.sqrt(P*P+I*I+z*z)),g=Gt(Math.sqrt(K*K+Ne*Ne)),v=Wr(k,K),E=Math.abs(v)>2e-4?v*xr:0,x=Ge?1/(Ge<0?-Ge:Ge):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!zf(qn(e,It)),H&&e.setAttribute("transform",H))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(f*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Gt(f),n.scaleY=Gt(g),n.rotation=Gt(_)+o,n.rotationX=Gt(p)+o,n.rotationY=Gt(m)+o,n.skewX=E+o,n.skewY=R+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[En]=Ro(c)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?v0:Ff?Vf:x0,n.uncache=0,n},Ro=function(e){return(e=e.split(" "))[0]+" "+e[1]},ul=function(e,t,n){var r=on(t);return Gt(parseFloat(t)+parseFloat(sr(e,"x",n+"px",r)))+r},x0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vf(e,t)},dr="0deg",Is="0px",hr=") ",Vf=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,E=n.target,R=n.zOrigin,x="",M=m==="auto"&&e&&e!==1||m===!0;if(R&&(h!==dr||u!==dr)){var T=parseFloat(u)*fs,A=Math.sin(T),v=Math.cos(T),b;T=parseFloat(h)*fs,b=Math.cos(T),a=ul(E,a,A*b*-R),o=ul(E,o,-Math.sin(T)*-R),l=ul(E,l,v*b*-R+R)}p!==Is&&(x+="perspective("+p+hr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(M||a!==Is||o!==Is||l!==Is)&&(x+=l!==Is||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+hr),c!==dr&&(x+="rotate("+c+hr),u!==dr&&(x+="rotateY("+u+hr),h!==dr&&(x+="rotateX("+h+hr),(d!==dr||f!==dr)&&(x+="skew("+d+", "+f+hr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+hr),E.style[It]=x||"translate(0, 0)"},v0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,E=n.forceCSS,R=parseFloat(a),x=parseFloat(o),M,T,A,v,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fs,c*=fs,M=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(u*=fs,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,v*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),M*=b,T*=b)),M=Gt(M),T=Gt(T),A=Gt(A),v=Gt(v)):(M=h,v=d,T=A=0),(R&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(R=sr(f,"x",a,"px"),x=sr(f,"y",o,"px")),(g||_||p||m)&&(R=Gt(R+g-(g*M+_*A)+p),x=Gt(x+_-(g*T+_*v)+m)),(r||s)&&(b=f.getBBox(),R=Gt(R+r/100*b.width),x=Gt(x+s/100*b.height)),b="matrix("+M+","+T+","+A+","+v+","+R+","+x+")",f.setAttribute("transform",b),E&&(f.style[It]=b)},S0=function(e,t,n,r,s){var a=360,o=Jt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?xr:1),c=l-r,u=r+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*md)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*md)%a-~~(c/a)*a)),e._pt=d=new yn(e._pt,t,n,r,c,i0),d.e=u,d.u="deg",e._props.push(n),d},yd=function(e,t){for(var n in t)e[n]=t[n];return e},M0=function(e,t,n){var r=yd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=sa(n,1),Rr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],a[It]=t,o=sa(n,1),a[It]=c);for(l in ki)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=on(c),g=on(u),h=f!==g?sr(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new yn(e._pt,o,l,h,d-h,mc),e._pt.u=g||0,e._props.push(l));yd(o,r)};Mn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});Ao[e>1?"border"+i:i]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(g){return Ii(o,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Gf={name:"css",register:gc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,g,_,p,m,E,R,x,M,T,A,v;Ru||gc(),this.styles=this.styles||Nf(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Pn[_]&&bf(_,t,n,r,e,s)))){if(f=typeof u,g=Ao[_],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ta(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(p=on(c),m=on(u)),m?p!==m&&(c=sr(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Jt(c)&&~c.indexOf("random(")&&(c=ta(c)),on(c+"")||c==="auto"||(c+=Nn.units[_]||on(Ii(e,_))||""),(c+"").charAt(1)==="="&&(c=Ii(e,_))):c=Ii(e,_),d=parseFloat(c),E=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(d===1&&Ii(e,"visibility")==="hidden"&&h&&(d=0),v.push("visibility",0,o.visibility),tr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),R=_ in ki,R){if(this.styles.save(_),f==="string"&&u.substring(0,6)==="var(--"&&(u=qn(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||sa(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new yn(this._pt,o,It,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new yn(this._pt,M,"scaleY",M.scaleY,(E?ds(M.scaleY,E+h):h)-M.scaleY||0,mc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(En,0,o[En]),u=_0(u),M.svg?xc(e,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&tr(this,M,"zOrigin",M.zOrigin,m),tr(this,o,_,Ro(c),Ro(u)));continue}else if(_==="svgOrigin"){xc(e,u,1,T,0,this);continue}else if(_ in kf){S0(this,M,_,d,E?ds(d,E+u):u);continue}else if(_==="smoothOrigin"){tr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){M0(this,u,e);continue}}else _ in o||(_=Es(_)||_);if(R||(h||h===0)&&(d||d===0)&&!n0.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),m=on(u)||(_ in Nn.units?Nn.units[_]:p),p!==m&&(d=sr(e,_,c,m)),this._pt=new yn(this._pt,R?M:o,_,d,(E?ds(d,E+h):h)-d,!R&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?s0:mc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=r0);else if(_ in o)m0.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,r,s);else if(_!=="parseTransform"){xu(_,u);continue}R||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}A&&Pf(this)},render:function(e,t){if(t.tween._time||!Cu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ii,aliases:_i,getSetter:function(e,t,n){var r=_i[t];return r&&r.indexOf(",")<0&&(t=r),t in ki&&t!==En&&(e._gsap.x||Ii(e,"x"))?n&&pd===n?t==="scale"?c0:l0:(pd=n||{})&&(t==="scale"?u0:d0):e.style&&!mu(e.style[t])?a0:~t.indexOf("-")?o0:wu(e,t)},core:{_removeProperty:Rr,_getMatrix:Lu}};Tn.utils.checkPrefix=Es;Tn.core.getStyleSaver=Nf;(function(i,e,t,n){var r=Mn(i+","+e+","+t,function(s){ki[s]=1});Mn(e,function(s){Nn.units[s]="deg",kf[s]=1}),_i[r[13]]=i+","+e,Mn(n,function(s){var a=s.split(":");_i[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Nn.units[i]="px"});Tn.registerPlugin(Gf);var ke=Tn.registerPlugin(Gf)||Tn;ke.core.Tween;const jn=i=>`./assets/${i}`;new Date().getFullYear();const Xr={machine:jn("slot/machine.webp"),charms:{smiley:jn("slot/charm-smiley.webp"),car:jn("slot/charm-car.webp"),mushroom:jn("slot/charm-mushroom.webp"),flower:jn("slot/charm-flower.webp"),ball:jn("slot/charm-ball.webp"),lips:jn("slot/charm-lips.webp"),avocado:jn("slot/charm-avocado.webp"),lock:jn("slot/charm-lock.webp"),star:jn("slot/charm-star.webp")},reels:[["smiley","car","mushroom","lips","avocado","star","flower","ball","lock"],["flower","ball","lips","smiley","lock","car","avocado","mushroom","star"],["avocado","lock","star","ball","flower","mushroom","smiley","lips","car"]],jackpot:"star",hint:{lead:"Enter Vasa's space",sub:""}};[["sap","SAP",40],["ixds","Interaction Design Symposium",33],["mind-alcove","Mind Alcove",42],["reevooy","Reevooy",34],["sparkle","Sparkle Designs",32],["tedx","TEDx Somaiya Vidyavihar",37],["eco-india","ECO India",41],["usi","U&I",50],["srm","SRM IST",72],["riidl","riidl",39],["rotary","Rotary Club of Bombay",36],["springer","Springer",22],["sih","Smart India Hackathon",40],["aicte","AICTE",54],["parvaah","Parvaah",39]].map(([i,e,t])=>({src:jn(`logos/m-${i}.webp`),name:e,h:t}));const Hf="thatvasa:muted";let st=null,ii=null,ga=y0();function y0(){try{return localStorage.getItem(Hf)==="1"}catch{return!1}}function As(){return ga}function aa(i){ga=i;try{localStorage.setItem(Hf,i?"1":"0")}catch{}ii&&ii.gain.setTargetAtTime(i?0:.9,st.currentTime,.02),Wf.forEach(e=>e(i))}function Or(){if(st){st.state==="suspended"&&st.resume();return}const i=window.AudioContext||window.webkitAudioContext;if(!i)return;st=new i,ii=st.createGain(),ii.gain.value=ga?0:.9;const e=st.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4,ii.connect(e).connect(st.destination)}let Pa=null;function Du(){if(!Pa){Pa=st.createBuffer(1,st.sampleRate*.5,st.sampleRate);const e=Pa.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}const i=st.createBufferSource();return i.buffer=Pa,i}function xa(i,e,t,n,r){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(n,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+t+r)}function Cr(i,e,t,n,r){const s=Du(),a=st.createBiquadFilter();a.type="bandpass",a.frequency.value=e,a.Q.value=t;const o=st.createGain();xa(o,i,.001,n,r),s.connect(a).connect(o).connect(ii),s.start(i,Math.random()*.3,E0(r))}const E0=i=>i+.02,Rs=()=>st&&!ga,Co=()=>st?{ctx:st,master:ii,noise:Du}:null,oa=()=>!!(st&&!ga),Iu=i=>{Wf.push(i)},Wf=[];function b0(){if(!Rs())return;const i=st.currentTime;Cr(i,2400+Math.random()*600,6,.35,.03),Cr(i+.004,900,3,.18,.04)}function T0(){if(!Rs())return;const i=st.currentTime,e=st.createOscillator(),t=st.createGain();e.type="sine",e.frequency.setValueAtTime(140,i),e.frequency.exponentialRampToValueAtTime(52,i+.18),xa(t,i,.003,.55,.22),e.connect(t).connect(ii),e.start(i),e.stop(i+.3),Cr(i,1500,1.5,.5,.08),Cr(i+.06,3200,8,.12,.12)}function ao(i=1){if(!Rs())return;const e=st.currentTime;Cr(e,1800+i*900,5,.12+.1*Math.min(i,1),.025)}function w0(i=0){if(!Rs())return;const e=st.currentTime,t=st.createOscillator(),n=st.createGain();t.type="triangle",t.frequency.setValueAtTime(220-i*18,e),t.frequency.exponentialRampToValueAtTime(70,e+.12),xa(n,e,.002,.45,.16),t.connect(n).connect(ii),t.start(e),t.stop(e+.22),Cr(e,1100,2,.4,.06)}function A0(){if(!Rs())return;const i=[1046.5,1318.5,1568,2093,1568,2093];i.forEach((e,t)=>{const n=st.currentTime+t*.085;R0(n,e,t===i.length-1?1.6:.7,.22)});for(let e=0;e<9;e++)Cr(st.currentTime+.45+e*.05+Math.random()*.03,5200+Math.random()*1800,12,.08,.05)}function R0(i,e,t,n){const r=st.createOscillator(),s=st.createOscillator(),a=st.createGain(),o=st.createGain();r.frequency.value=e,s.frequency.value=e*3.5,a.gain.setValueAtTime(e*1.6,i),a.gain.exponentialRampToValueAtTime(1,i+t),s.connect(a).connect(r.frequency),xa(o,i,.004,n,t),r.connect(o).connect(ii),r.start(i),s.start(i),r.stop(i+t+.05),s.stop(i+t+.05)}function C0(i=1){if(!Rs())return;const e=st.currentTime,t=Du(),n=st.createBiquadFilter(),r=st.createGain();n.type="bandpass",n.Q.value=.8,n.frequency.setValueAtTime(500,e),n.frequency.exponentialRampToValueAtTime(2600,e+.22),xa(r,e,.06,.07*i,.2),t.connect(n).connect(r).connect(ii),t.start(e,0,.32)}const P0=Object.freeze(Object.defineProperty({__proto__:null,audio:Co,chime:A0,clunk:T0,isMuted:As,live:oa,onMute:Iu,ratchet:b0,setMuted:aa,stop:w0,tick:ao,unlock:Or,whoosh:C0},Symbol.toStringTag,{value:"Module"})),ci=Object.fromEntries(Object.entries(P0).map(([i,e])=>[i,typeof e=="function"?(...t)=>{try{return e(...t)}catch{}}:e])),La=158,L0=80,D0=7,I0=1.75,U0={smiley:121,car:157,mushroom:120,flower:129,ball:127,lips:141,avocado:104,lock:109,star:135};function N0({reduced:i,onDone:e}){var D;const t=document.getElementById("splash"),n=document.getElementById("slot"),r=n.querySelector(".slot__reels"),s=n.querySelector(".slot__lever");t.querySelector(".splash__lead").textContent=Xr.hint.lead,t.querySelector(".splash__sub").textContent=Xr.hint.sub,(D=n.querySelector(".slot__engrave"))==null||D.remove(),n.querySelector(".slot__machine").src=Xr.machine;const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","0"),a.setAttribute("height","0"),a.style.position="absolute",a.innerHTML="<defs></defs>",t.appendChild(a);const o=a.firstElementChild,l=Xr.reels.map(P=>{const I=document.createElement("div");I.className="reel";const z=document.createElement("div");z.className="reel__strip";const F=[];for(let H=0;H<D0;H++)P.forEach((ne,V)=>{const $=document.createElement("div");if($.className="reel__cell",$.style.top=`calc(${L0-La/2+(H*P.length+V)*La} * var(--m))`,ne){const j=new Image;j.src=Xr.charms[ne],j.alt="",j.decoding="async",j.style.setProperty("--cw",U0[ne]),$.appendChild(j)}z.appendChild($),F.push({el:$,name:ne})});const k=document.createElement("div");k.className="reel__shade",I.append(z,k),r.appendChild(I);const K=`reel-blur-${r.children.length}`;return o.insertAdjacentHTML("beforeend",`<filter id="${K}" x="0" y="-20%" width="100%" height="140%"><feGaussianBlur stdDeviation="0 0"/></filter>`),z.style.filter=`url(#${K})`,{el:I,strip:z,cells:F,order:P,pos:0,lastTick:0,blur:o.lastElementChild.firstElementChild}});let c=1;const u=()=>{c=n.offsetWidth/1450||c||.3};u(),addEventListener("resize",()=>{u(),l.forEach(h)});function h(P){P.strip.style.transform=`translate3d(0, ${-P.pos*La*c}px, 0)`}let d="idle",f=0,g=0;function _(P){f=Math.max(0,Math.min(1,P));const I=1-I0*f;s.style.setProperty("--s",I.toFixed(4)),s.style.setProperty("--bx",`${(-41.6*(1-I)*c).toFixed(2)}px`),s.style.setProperty("--by",`${(279.7*(1-I)*c).toFixed(2)}px`),s.style.setProperty("--bs",(1+.26*(1-Math.abs(I))).toFixed(4));const z=Math.floor(f*9);z!==g&&(z>g&&ci.ratchet(),g=z)}const p=setTimeout(()=>d==="idle"&&s.classList.add("is-nudge"),2200);let m=0,E=0;s.addEventListener("pointerdown",P=>{d==="dragging"&&(ke.killTweensOf(M),d="idle"),d==="idle"&&(u(),ci.unlock(),d="dragging",clearTimeout(p),s.classList.remove("is-nudge"),s.setPointerCapture(P.pointerId),m=P.clientY,E=f,ke.killTweensOf(M))}),s.addEventListener("pointermove",P=>{if(d!=="dragging")return;const I=280*c*1.05;_(E+(P.clientY-m)/I),f>=.3&&T()});const R=()=>{if(d==="dragging"){if(f>.1){T();return}if(f<.02){T();return}d="idle",M.v=f,ke.to(M,{v:0,duration:.5,ease:"back.out(2)",onUpdate:()=>_(M.v)})}};s.addEventListener("pointerup",R),s.addEventListener("pointercancel",R),s.addEventListener("lostpointercapture",R),s.addEventListener("keydown",P=>{d==="idle"&&(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),ci.unlock(),T())}),s.addEventListener("click",P=>{P.detail===0&&d==="idle"&&(ci.unlock(),T())});const x=t.querySelector(".splash__lead");if(x){x.setAttribute("role","button"),x.setAttribute("tabindex","0");const P=()=>{d==="idle"&&(ci.unlock(),clearTimeout(p),s.classList.remove("is-nudge"),f=0,T())};x.addEventListener("click",P),x.addEventListener("keydown",I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),P())})}const M={v:0};function T(){d="pulled",s.disabled=!0,s.classList.remove("is-nudge"),t.classList.add("is-pulled"),M.v=f,ke.timeline().to(M,{v:1,duration:(1-f)*.28+.06,ease:"power2.in",onUpdate:()=>_(M.v)}).add(()=>{ci.clunk(),A()}).to(M,{v:0,duration:.9,ease:"elastic.out(1, 0.45)",onUpdate:()=>_(M.v)},"+=0.08")}function A(){u(),n.classList.add("is-live");const P=l[0].order.length,I=l.map((k,K)=>{const H=i?0:2+K,ne=k.order.indexOf(Xr.jackpot)-1;return(H+1)*P+(ne%P+P)%P}),z=i?[.35,.45,.55]:[1.7,2.35,3],F=ke.timeline({onComplete:()=>{l.forEach((k,K)=>{k.pos=I[K],h(k)}),b()}});l.forEach((k,K)=>{const H=I[K],ne=K*.06;k.pos=0,k.lastTick=0;const V=ne+.14,$=V+z[K];F.to(k,{pos:-.18,duration:.14,ease:"power1.out",onUpdate:()=>v(k)},ne),F.to(k,{pos:H+.2,duration:z[K],ease:"power2.out",onUpdate:()=>v(k)},V),F.add(()=>{ci.stop(K),ke.fromTo(k.el,{y:0},{y:1.5*c,duration:.06,yoyo:!0,repeat:1})},$),F.to(k,{pos:H,duration:.24,ease:"back.out(3)",onUpdate:()=>v(k)},$)})}function v(P){h(P);const I=Math.abs(P.pos-(P.prev??P.pos));P.prev=P.pos,P.blur.setAttribute("stdDeviation",`0 ${Math.min(14,I*La*c*.35).toFixed(2)}`);const z=Math.floor(P.pos);if(z!==P.lastTick&&z>0){const F=Math.min(1,Math.abs(z-P.lastTick)/2);P.lastTick=z,ci.tick(F)}}function b(){l.forEach(z=>{const F=z.cells[Math.round(z.pos)+1];F&&F.el.classList.add("is-pay"),z.el.classList.add("is-win")}),ci.chime();const P=r.getBoundingClientRect(),I={x:P.left+P.width/2,y:P.top+P.height*.45,w:P.width};ke.delayedCall(i?.3:.75,()=>e&&e(I))}return{skip(){clearTimeout(p),d="pulled"},pull(){return d!=="idle"?!1:(ci.unlock(),clearTimeout(p),f=0,T(),!0)}}}const Vi=()=>Co(),F0="./",oo={},dl={},O0=i=>globalThis.__VF_ASSETS&&globalThis.__VF_ASSETS["audio/"+i]||`${F0}assets/audio/${i}`,vc=i=>oo[i]?Promise.resolve(oo[i]):Co()?dl[i]||(dl[i]=fetch(O0(i)).then(e=>e.ok?e.arrayBuffer():Promise.reject(e.status)).then(e=>Co().ctx.decodeAudioData(e)).then(e=>oo[i]=e).catch(()=>null)):Promise.resolve(null),B0=()=>{vc("lofi-loop.mp3"),vc("spill.mp3")},Yo=(i,e)=>{const t=i.createBuffer(1,i.sampleRate*1,i.sampleRate),n=t.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;const r=i.createBufferSource();return r.buffer=t,r.loop=!0,r},yi=1e-4,Nt=(i,{f:e=2e3,q:t=1,type:n="bandpass",peak:r=.3,dec:s=.05,att:a=.002,f2:o}={})=>{if(r<8e-4)return;const{ctx:l,master:c}=Vi(),u=Yo(l),h=l.createBiquadFilter(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(e,i),o&&h.frequency.exponentialRampToValueAtTime(o,i+s+a),h.Q.value=t,d.gain.setValueAtTime(yi,i),d.gain.exponentialRampToValueAtTime(r,i+a),d.gain.exponentialRampToValueAtTime(yi,i+a+s),u.connect(h).connect(d).connect(c),u.start(i,Math.random()),u.stop(i+a+s+.05)},Tt=(i,{f:e=440,f2:t,type:n="sine",peak:r=.3,dec:s=.15,att:a=.004,to:o}={})=>{if(r<8e-4)return;const{ctx:l,master:c}=Vi(),u=l.createOscillator(),h=l.createGain();u.type=n,u.frequency.setValueAtTime(e,i),t&&u.frequency.exponentialRampToValueAtTime(t,i+s),h.gain.setValueAtTime(yi,i),h.gain.exponentialRampToValueAtTime(r,i+a),h.gain.exponentialRampToValueAtTime(yi,i+a+s),u.connect(h).connect(o||c),u.start(i),u.stop(i+a+s+.05)},zt=i=>(...e)=>{oa()&&i(Vi().ctx.currentTime,...e)},ri=(i,e)=>i+Math.random()*(e-i),k0=zt((i,e=1)=>{Nt(i,{f:ri(2600,3600),q:3,peak:.1*e,dec:.02}),Tt(i,{f:ri(150,190),f2:90,peak:.06*e,dec:.04})}),z0=zt((i,e=1)=>{Tt(i,{f:2093,peak:.04*e,dec:.4,type:"sine"})}),V0=zt((i,e=1)=>{const t=(s,a)=>Nt(s,{f:7500,q:1,type:"highpass",peak:a*e,dec:.04}),n=s=>Tt(s,{f:150,f2:45,peak:.55*e,dec:.18}),r=(s,a)=>{Tt(s,{f:a,peak:.12*e,dec:.45,type:"triangle"}),Tt(s,{f:a*2,peak:.04*e,dec:.3})};[0,.4].forEach(s=>{n(i+s),t(i+s+.2,.09)}),Nt(i+.2,{f:1800,q:2,peak:.16*e,dec:.1}),Nt(i+.6,{f:1800,q:2,peak:.16*e,dec:.1}),r(i+.05,523.25),r(i+.4,659.25),r(i+.6,784),r(i+.85,987.8)}),G0=zt((i,e=1)=>{Tt(i,{f:1318.5,peak:.14*e,dec:.7}),Tt(i+.12,{f:1760,peak:.1*e,dec:.9})}),hl=zt((i,e=1)=>{Nt(i,{f:900,f2:3800,q:.9,peak:.28*e,dec:.22,att:.03}),Nt(i+.2,{f:3e3,q:2,peak:.1*e,dec:.1})}),H0=zt((i,e=1.4,t=1)=>{for(let n=0;n<16;n++){const r=i+(n/16)**.8*e;Nt(r,{f:ri(500,1100),q:5,peak:.13*t*(1-n/22),dec:.04})}Nt(i,{f:260,q:.7,type:"lowpass",peak:.16*t,dec:e,att:.1})}),W0=zt((i,e=1)=>{Nt(i,{f:1400,q:6,peak:.25*e,dec:.05}),Tt(i,{f:700,f2:480,peak:.1*e,dec:.06,type:"triangle"})}),X0=zt((i,e=1)=>{const t=oo["spill.mp3"];if(t){const{ctx:n,master:r}=Vi(),s=n.createBufferSource(),a=n.createGain();s.buffer=t,a.gain.value=.85*e,s.connect(a).connect(r),s.start(i);return}Nt(i,{f:800,f2:360,q:.7,type:"lowpass",peak:.2*e,dec:.26,att:.01}),[0,.13,.26].forEach((n,r)=>Tt(i+.06+n,{f:300-r*30,f2:160-r*14,peak:.1*e,dec:.1}))}),Ed=zt((i,e=1)=>{for(let t=0;t<6;t++){const n=i+t*.1+ri(0,.05);Tt(n,{f:ri(1500,2600),f2:ri(900,1400),peak:.13*e,dec:.09}),Nt(n,{f:5200,q:3,peak:.04*e,dec:.03})}}),q0=zt((i,e=5.4,t=1)=>{const{ctx:n,master:r}=Vi(),s=Yo(n),a=n.createBiquadFilter(),o=n.createBiquadFilter(),l=n.createGain(),c=n.createOscillator(),u=n.createGain();a.type="bandpass",a.Q.value=.5,a.frequency.setValueAtTime(420,i),a.frequency.linearRampToValueAtTime(900,i+e*.45),a.frequency.linearRampToValueAtTime(520,i+e),o.type="highpass",o.frequency.value=180,c.frequency.value=.7,u.gain.value=.012*t,c.connect(u).connect(l.gain),l.gain.setValueAtTime(yi,i),l.gain.linearRampToValueAtTime(.05*t,i+.9),l.gain.setValueAtTime(.05*t,i+e-1.3),l.gain.linearRampToValueAtTime(yi,i+e),s.connect(a).connect(o).connect(l).connect(r),s.start(i,Math.random()),s.stop(i+e+.1),c.start(i),c.stop(i+e+.1)}),Y0=zt((i,e=!0,t=1)=>{Nt(i,{f:e?260:520,f2:e?700:240,q:1.1,peak:.26*t,dec:.5,att:.05}),Tt(i+(e?.5:.45),{f:130,f2:60,peak:.34*t,dec:.16}),Nt(i+(e?.5:.45),{f:1300,q:2,peak:.18*t,dec:.06})}),$0=zt((i,e=!0,t=1)=>{Nt(i,{f:3200,q:8,peak:.34*t,dec:.02}),Nt(i+.035,{f:1500,q:4,peak:.25*t,dec:.04}),e&&Tt(i+.07,{f:118,peak:.05*t,dec:.5,type:"sawtooth"})}),Da=zt((i,e=1,t=1)=>{Tt(i,{f:190*(.8+e*.3),f2:70,peak:.42*t*e,dec:.14}),Nt(i,{f:900,q:1,peak:.12*t*e,dec:.05})}),K0=zt((i,e=3,t=1)=>{Nt(i,{f:180,f2:420,q:.7,type:"lowpass",peak:.28*t,dec:e,att:e*.6});for(let n=0;n<18;n++)Nt(i+(n/18)**1.4*e,{f:ri(400,900),q:4,peak:.07*t,dec:.04})}),Z0=zt((i,e=1)=>{Nt(i,{f:320,q:.8,type:"lowpass",peak:.32*e,dec:.07}),Tt(i,{f:95,f2:55,peak:.3*e,dec:.09})}),J0=zt((i,e=1)=>{Nt(i,{f:4200,q:5,peak:.34*e,dec:.025}),Nt(i+.055,{f:2600,q:4,peak:.3*e,dec:.04}),Tt(i+.02,{f:260,f2:160,peak:.12*e,dec:.06,type:"square"})}),Us=zt((i,e=480,t=.07,n=1)=>{Tt(i,{f:e,peak:.1*n,dec:t,type:"square"})}),bd=zt((i,e=1)=>{Tt(i,{f:988,peak:.1*e,dec:.07,type:"square"}),Tt(i+.07,{f:1319,peak:.1*e,dec:.28,type:"square"})}),Q0=zt((i,e=1)=>{[392,330,262].forEach((t,n)=>Tt(i+n*.13,{f:t,peak:.1*e,dec:.16,type:"square"}))}),Td=zt((i,e=1)=>{for(let t=0;t<9;t++){const n=i+(t/9)**1.5*.9+ri(0,.03);Nt(n,{f:ri(1800,3600),q:5,peak:.3*e*(1-t/12),dec:.03}),Tt(n,{f:ri(300,520),f2:200,peak:.1*e*(1-t/12),dec:.04,type:"triangle"})}}),Ia=zt((i,e=1)=>{Tt(i,{f:120,f2:50,peak:.4*e,dec:.18}),Nt(i,{f:700,q:1,type:"lowpass",peak:.2*e,dec:.08})}),fl=zt((i,e=1)=>{Tt(i,{f:2400,peak:.1*e,dec:.3}),Tt(i+.02,{f:3300,peak:.07*e,dec:.25})});let Hn=null;const j0=[[146.83,220,261.63,329.63,349.23],[196,246.94,293.66,349.23,392],[130.81,196,246.94,329.63,392],[110,164.81,220,261.63,329.63]];function pl(){!oa()||Hn||(Hn={pending:!0},vc("lofi-loop.mp3").then(i=>{if(!Hn||!Hn.pending)return;if(!oa()){Hn=null;return}if(!i){Hn=null,e_();return}const{ctx:e,master:t}=Vi(),n=e.createBufferSource(),r=e.createGain();n.buffer=i,n.loop=!0,r.gain.setValueAtTime(1e-4,e.currentTime),r.gain.linearRampToValueAtTime(.07,e.currentTime+3),n.connect(r).connect(t),n.start(),Hn={rec:n,bus:r}}))}function e_(){if(!oa()||Hn)return;const{ctx:i,master:e}=Vi(),t=i.createGain();t.gain.value=1e-4;const n=i.createBiquadFilter();n.type="lowpass",n.frequency.value=1500,t.connect(n).connect(e),t.gain.setTargetAtTime(.34,i.currentTime,1.6);const r=62,s=60/r;let a=i.currentTime+.15,o=0;const l={stop:!1},c=()=>{if(!l.stop)for(;a<i.currentTime+.6;){const g=j0[o%4],_=a;g.slice(1).forEach((p,m)=>{const E=i.createOscillator(),R=i.createOscillator(),x=i.createGain();E.type="sine",R.type="triangle",E.frequency.value=p,R.frequency.value=p*2.003;const M=_+m*.025+ri(0,.012);x.gain.setValueAtTime(yi,M),x.gain.exponentialRampToValueAtTime(.055,M+.09),x.gain.exponentialRampToValueAtTime(yi,M+s*3.6),E.connect(x),R.connect(x),x.connect(t),E.start(M),R.start(M),E.stop(M+s*3.7),R.stop(M+s*3.7)}),Tt(_,{f:g[0]/2,peak:.1,dec:s*2.2,att:.06,to:t});for(let p=0;p<8;p++){const m=_+p*(s/2)+(p%2?s*.07:0);p===0&&Tt(m,{f:110,f2:48,peak:.07,dec:.3,att:.01,to:t}),p%2===1&&t_(t,m,{f:7e3,q:.8,type:"highpass",peak:.012,dec:.05}),Math.random()<.16&&Tt(m,{f:[523.25,587.33,659.25,783.99][Math.random()*4|0]*(o%4===3?.84:1),peak:.022,dec:.9,att:.03,to:t})}a+=s*4,o++}},u=Yo(i),h=i.createBiquadFilter(),d=i.createGain();h.type="highpass",h.frequency.value=3e3,d.gain.value=.005,u.connect(h).connect(d).connect(e),u.start();const f=setInterval(c,120);c(),Hn={bus:t,iv:f,cr:u,live2:l,cg:d}}const t_=(i,e,t)=>{const{ctx:n}=Vi(),r=Yo(n),s=n.createBiquadFilter(),a=n.createGain();s.type=t.type||"bandpass",s.frequency.value=t.f,s.Q.value=t.q||1,a.gain.setValueAtTime(yi,e),a.gain.exponentialRampToValueAtTime(t.peak,e+.002),a.gain.exponentialRampToValueAtTime(yi,e+.002+t.dec),r.connect(s).connect(a).connect(i),r.start(e,Math.random()),r.stop(e+t.dec+.05)};function Sc(){if(!Hn)return;const{ctx:i}=Vi()||{},e=Hn;if(Hn=null,!e.pending){if(e.rec){i&&(e.bus.gain.cancelScheduledValues(i.currentTime),e.bus.gain.setTargetAtTime(1e-4,i.currentTime,.7),setTimeout(()=>{try{e.rec.stop(),e.bus.disconnect()}catch{}},4200));return}clearInterval(e.iv),e.live2.stop=!0,i&&(e.bus.gain.setTargetAtTime(1e-4,i.currentTime,.3),e.cg.gain.setTargetAtTime(1e-4,i.currentTime,.3),setTimeout(()=>{try{e.cr.stop(),e.bus.disconnect()}catch{}},1500))}}Iu(i=>{i&&Sc()});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="186",n_=0,wd=1,i_=2,lo=1,r_=2,Xs=3,Pr=0,bn=1,mi=2,Fi=0,Zs=1,vr=2,Ad=3,Rd=4,s_=5,as=100,a_=101,o_=102,l_=103,c_=104,u_=200,d_=201,h_=202,f_=203,Xf=204,qf=205,p_=206,m_=207,__=208,g_=209,x_=210,v_=211,S_=212,M_=213,y_=214,Mc=0,yc=1,Ec=2,la=3,bc=4,Tc=5,wc=6,Ac=7,Yf=0,E_=1,b_=2,vi=0,$f=1,Kf=2,Zf=3,Nu=4,Jf=5,Qf=6,jf=7,ep=300,Lr=301,bs=302,ml=303,_l=304,$o=306,Rc=1e3,Ni=1001,Cc=1002,en=1003,T_=1004,Ua=1005,ln=1006,gl=1007,Mr=1008,Dn=1009,tp=1010,np=1011,ca=1012,Fu=1013,Ei=1014,gi=1015,bi=1016,Ou=1017,Bu=1018,ua=1020,ip=35902,rp=35899,sp=1021,ap=1022,ni=1023,zi=1026,yr=1027,op=1028,ku=1029,Dr=1030,zu=1031,Vu=1033,co=33776,uo=33777,ho=33778,fo=33779,Pc=35840,Lc=35841,Dc=35842,Ic=35843,Uc=36196,Nc=37492,Fc=37496,Oc=37488,Bc=37489,Po=37490,kc=37491,zc=37808,Vc=37809,Gc=37810,Hc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,$c=37816,Kc=37817,Zc=37818,Jc=37819,Qc=37820,jc=37821,eu=36492,tu=36494,nu=36495,iu=36283,ru=36284,Lo=36285,su=36286,w_=3200,Cd=0,A_=1,Qi="",Zt="srgb",Do="srgb-linear",Io="linear",vt="srgb",xl=7680,R_=519,C_=512,P_=513,L_=514,Gu=515,D_=516,I_=517,Hu=518,U_=519,N_=35044,Pd="300 es",xi=2e3,da=2001;function F_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function O_(){const i=ha("canvas");return i.style.display="block",i}const Ld={};function Dd(...i){const e="THREE."+i.shift();console.log(e,...i)}function lp(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=lp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=lp(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ps(...i){const e=i.join(" ");e in Ld||(Ld[e]=!0,He(...i))}function B_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const k_={[Mc]:yc,[Ec]:wc,[bc]:Ac,[la]:Tc,[yc]:Mc,[wc]:Ec,[Ac]:bc,[Tc]:la};class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,au=180/Math.PI;function va(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function z_(i,e){return(i%e+e)%e}function Sl(i,e,t){return(1-t)*i+t*e}function Ns(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qu=class Qu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qu.prototype.isVector2=!0;let ot=Qu;class kr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(h!==_||l!==d||c!==f||u!==g){let p=l*d+c*f+u*g+h*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const E=Math.acos(p),R=Math.sin(E);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R,l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o}else{l=l*m+d*o,c=c*m+f*o,u=u*m+g*o,h=h*m+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ju=class ju{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ml.copy(this).projectOnVector(e),this.sub(Ml)}reflect(e){return this.sub(Ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ju.prototype.isVector3=!0;let X=ju;const Ml=new X,Id=new kr,ed=class ed{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=r[0],p=r[3],m=r[6],E=r[1],R=r[4],x=r[7],M=r[2],T=r[5],A=r[8];return s[0]=a*_+o*E+l*M,s[3]=a*p+o*R+l*T,s[6]=a*m+o*x+l*A,s[1]=c*_+u*E+h*M,s[4]=c*p+u*R+h*T,s[7]=c*m+u*x+h*A,s[2]=d*_+f*E+g*M,s[5]=d*p+f*R+g*T,s[8]=d*m+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ps("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yl.makeScale(e,t)),this}rotate(e){return ps("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return ps("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ed.prototype.isMatrix3=!0;let $e=ed;const yl=new $e,Ud=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V_(){const i={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qi?Io:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ps("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ps("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Do]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const rt=V_();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qr;class G_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=ha("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Oi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Oi(t[n]/255)*255):t[n]=Oi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class Wu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(El(r[a].image)):s.push(El(r[a]))}else s=El(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function El(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?G_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let W_=0;const bl=new X;class nn extends Br{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=Ni,r=Ni,s=ln,a=Mr,o=ni,l=Dn,c=nn.DEFAULT_ANISOTROPY,u=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=va(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rc:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rc:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ep;nn.DEFAULT_ANISOTROPY=1;const td=class td{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(c+1)/2,x=(f+1)/2,M=(m+1)/2,T=(u+d)/4,A=(h+_)/4,v=(g+p)/4;return R>x&&R>M?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=A/n):x>M?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=v/s),this.set(n,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};td.prototype.isVector4=!0;let Ut=td;class X_ extends Br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new nn(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends X_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cp extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class q_ extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ho=class Ho{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,p)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,$_)}lookAt(e,t,n){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),qi.crossVectors(n,Rn),qi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),qi.crossVectors(n,Rn)),qi.normalize(),Na.crossVectors(Rn,qi),r[0]=qi.x,r[4]=Na.x,r[8]=Rn.x,r[1]=qi.y,r[5]=Na.y,r[9]=Rn.y,r[2]=qi.z,r[6]=Na.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],E=n[3],R=n[7],x=n[11],M=n[15],T=r[0],A=r[4],v=r[8],b=r[12],D=r[1],P=r[5],I=r[9],z=r[13],F=r[2],k=r[6],K=r[10],H=r[14],ne=r[3],V=r[7],$=r[11],j=r[15];return s[0]=a*T+o*D+l*F+c*ne,s[4]=a*A+o*P+l*k+c*V,s[8]=a*v+o*I+l*K+c*$,s[12]=a*b+o*z+l*H+c*j,s[1]=u*T+h*D+d*F+f*ne,s[5]=u*A+h*P+d*k+f*V,s[9]=u*v+h*I+d*K+f*$,s[13]=u*b+h*z+d*H+f*j,s[2]=g*T+_*D+p*F+m*ne,s[6]=g*A+_*P+p*k+m*V,s[10]=g*v+_*I+p*K+m*$,s[14]=g*b+_*z+p*H+m*j,s[3]=E*T+R*D+x*F+M*ne,s[7]=E*A+R*P+x*k+M*V,s[11]=E*v+R*I+x*K+M*$,s[15]=E*b+R*z+x*H+M*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],E=l*f-c*d,R=o*f-c*h,x=o*d-l*h,M=a*f-c*u,T=a*d-l*u,A=a*h-o*u;return t*(_*E-p*R+m*x)-n*(g*E-p*M+m*T)+r*(g*R-_*M+m*A)-s*(g*x-_*T+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],E=t*o-n*a,R=t*l-r*a,x=t*c-s*a,M=n*l-r*o,T=n*c-s*o,A=r*c-s*l,v=u*_-h*g,b=u*p-d*g,D=u*m-f*g,P=h*p-d*_,I=h*m-f*_,z=d*m-f*p,F=E*z-R*I+x*P+M*D-T*b+A*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*z-l*I+c*P)*k,e[1]=(r*I-n*z-s*P)*k,e[2]=(_*A-p*T+m*M)*k,e[3]=(d*T-h*A-f*M)*k,e[4]=(l*D-a*z-c*b)*k,e[5]=(t*z-r*D+s*b)*k,e[6]=(p*x-g*A-m*R)*k,e[7]=(u*A-d*x+f*R)*k,e[8]=(a*I-o*D+c*v)*k,e[9]=(n*D-t*I-s*v)*k,e[10]=(g*T-_*x+m*E)*k,e[11]=(h*x-u*T-f*E)*k,e[12]=(o*b-a*P-l*v)*k,e[13]=(t*P-n*b+r*v)*k,e[14]=(_*R-g*M-p*E)*k,e[15]=(u*M-h*R+d*E)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,_=a*u,p=a*h,m=o*h,E=l*c,R=l*u,x=l*h,M=n.x,T=n.y,A=n.z;return r[0]=(1-(_+m))*M,r[1]=(f+x)*M,r[2]=(g-R)*M,r[3]=0,r[4]=(f-x)*T,r[5]=(1-(d+m))*T,r[6]=(p+E)*T,r[7]=0,r[8]=(g+R)*A,r[9]=(p-E)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=xi,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===xi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===da)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=xi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===xi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===da)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ho.prototype.isMatrix4=!0;let Ct=Ho;const Yr=new X,Kn=new Ct,Y_=new X(0,0,0),$_=new X(1,1,1),qi=new X,Na=new X,Rn=new X,Fd=new Ct,Od=new kr;class Ir{constructor(e=0,t=0,n=0,r=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Od.setFromEuler(this),this.setFromQuaternion(Od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const Bd=new X,$r=new kr,Ai=new Ct,Fa=new X,Fs=new X,Z_=new X,J_=new kr,kd=new X(1,0,0),zd=new X(0,1,0),Vd=new X(0,0,1),Gd={type:"added"},Q_={type:"removed"},Kr={type:"childadded",child:null},Tl={type:"childremoved",child:null};class rn extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new X,t=new Ir,n=new kr,r=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,t){return $r.setFromAxisAngle(e,t),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(zd,e)}rotateZ(e){return this.rotateOnAxis(Vd,e)}translateOnAxis(e,t){return Bd.copy(e).applyQuaternion(this.quaternion),this.position.add(Bd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(zd,e)}translateZ(e){return this.translateOnAxis(Vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Fs,Fa,this.up):Ai.lookAt(Fa,Fs,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(Ai),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q_),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gd),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}rn.DEFAULT_UP=new X(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ui extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const up={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=z_(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Al(a,s,e+1/3),this.g=Al(a,s,e),this.b=Al(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=up[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return rt.workingToColorSpace(an.copy(this),e),Math.round(nt(an.r*255,0,255))*65536+Math.round(nt(an.g*255,0,255))*256+Math.round(nt(an.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(an.copy(this),t);const n=an.r,r=an.g,s=an.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Zt){rt.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,r=an.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Oa);const n=Sl(Yi.h,Oa.h,t),r=Sl(Yi.s,Oa.s,t),s=Sl(Yi.l,Oa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new ht;ht.NAMES=up;class eg extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Zn=new X,Ri=new X,Rl=new X,Ci=new X,Zr=new X,Jr=new X,Hd=new X,Cl=new X,Pl=new X,Ll=new X,Dl=new Ut,Il=new Ut,Ul=new Ut;class ti{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Zn.subVectors(r,t),Ri.subVectors(n,t),Rl.subVectors(e,t);const a=Zn.dot(Zn),o=Zn.dot(Ri),l=Zn.dot(Rl),c=Ri.dot(Ri),u=Ri.dot(Rl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return Dl.setScalar(0),Il.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(e,t),Il.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dl,s.x),a.addScaledVector(Il,s.y),a.addScaledVector(Ul,s.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Ri.subVectors(e,t),Zn.cross(Ri).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Zn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,n),Jr.subVectors(s,n),Cl.subVectors(e,n);const l=Zr.dot(Cl),c=Jr.dot(Cl);if(l<=0&&c<=0)return t.copy(n);Pl.subVectors(e,r);const u=Zr.dot(Pl),h=Jr.dot(Pl);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Zr,a);Ll.subVectors(e,s);const f=Zr.dot(Ll),g=Jr.dot(Ll);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Jr,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Hd.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Hd,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(Zr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sa{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ka.subVectors(this.max,Os),Qr.subVectors(e.a,Os),jr.subVectors(e.b,Os),es.subVectors(e.c,Os),$i.subVectors(jr,Qr),Ki.subVectors(es,jr),fr.subVectors(Qr,es);let t=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-fr.z,fr.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,fr.z,0,-fr.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-fr.y,fr.x,0];return!Nl(t,Qr,jr,es,ka)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,Qr,jr,es,ka))?!1:(za.crossVectors($i,Ki),t=[za.x,za.y,za.z],Nl(t,Qr,jr,es,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new X,new X,new X,new X,new X,new X,new X,new X],Jn=new X,Ba=new Sa,Qr=new X,jr=new X,es=new X,$i=new X,Ki=new X,fr=new X,Os=new X,ka=new X,za=new X,pr=new X;function Nl(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){pr.fromArray(i,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ht=new X,Va=new ot;let tg=0;class Si extends Br{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=N_,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class dp extends Si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hp extends Si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yn extends Si{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ng=new Sa,Bs=new X,Fl=new X;class qu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Bs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Fl)),this.expandByPoint(Bs.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ig=0;const Vn=new Ct,Ol=new rn,ts=new X,Cn=new Sa,ks=new Sa,Kt=new X;class ai extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?hp:dp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,n){return Vn.makeTranslation(e,t,n),this.applyMatrix4(Vn),this}scale(e,t,n){return Vn.makeScale(e,t,n),this.applyMatrix4(Vn),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Cn.min,ks.min),Cn.expandByPoint(Kt),Kt.addVectors(Cn.max,ks.max),Cn.expandByPoint(Kt)):(Cn.expandByPoint(ks.min),Cn.expandByPoint(ks.max))}Cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(ts.fromBufferAttribute(e,c),Kt.add(ts)),r=Math.max(r,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Si(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,h=new X,d=new ot,f=new ot,g=new ot,_=new X,p=new X;function m(v,b,D){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,D),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,D),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),o[v].add(_),o[b].add(_),o[D].add(_),l[v].add(p),l[b].add(p),l[D].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,b=E.length;v<b;++v){const D=E[v],P=D.start,I=D.count;for(let z=P,F=P+I;z<F;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const R=new X,x=new X,M=new X,T=new X;function A(v){M.fromBufferAttribute(r,v),T.copy(M);const b=o[v];R.copy(b),R.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(T,b);const P=x.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,P)}for(let v=0,b=E.length;v<b;++v){const D=E[v],P=D.start,I=D.count;for(let z=P,F=P+I;z<F;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[f++]}return new Si(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new X,rg=new X,sg=new $e;class Ji{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Bl.subVectors(n,t).cross(rg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Bl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sg.getNormalMatrix(e),r=this.coplanarPoint(Bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ag=0;class Ko extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Zs,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=qf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xl,this.stencilZFail=xl,this.stencilZPass=xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ji().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new X,kl=new X,Ga=new X,Ha=new X;class fp{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){kl.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(kl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ga),o=Ha.dot(this.direction),l=-Ha.dot(Ga),c=Ha.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(kl).addScaledVector(Ga,d),f}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),r=Li.dot(Li)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,E=n.y-a.y,R=n.z-a.z,x=Math.abs(l),M=Math.abs(c),T=Math.abs(u);let A,v,b,D,P,I,z,F,k,K,H,ne;if(x>=M&&x>=T?(b=l,I=h,k=g,ne=m,l>=0?(A=c,v=u,D=d,P=f,z=_,F=p,K=E,H=R):(A=u,v=c,D=f,P=d,z=p,F=_,K=R,H=E)):M>=T?(b=c,I=d,k=_,ne=E,c>=0?(A=u,v=l,D=f,P=h,z=p,F=g,K=R,H=m):(A=l,v=u,D=h,P=f,z=g,F=p,K=m,H=R)):(b=u,I=f,k=p,ne=R,u>=0?(A=l,v=c,D=h,P=d,z=g,F=_,K=m,H=E):(A=c,v=l,D=d,P=h,z=_,F=g,K=E,H=m)),b===0)return null;const V=A/b,$=v/b,j=1/b,Ee=D-V*I,ve=P-$*I,Ge=z-V*k,Ne=F-$*k,Ve=K-V*ne,J=H-$*ne,se=Ve*Ne-J*Ge,be=Ee*J-ve*Ve,Fe=Ge*ve-Ne*Ee;if(r){if(se<0||be<0||Fe<0)return null}else if((se<0||be<0||Fe<0)&&(se>0||be>0||Fe>0))return null;const Se=se+be+Fe;if(Se===0)return null;const Qe=j*(se*I+be*k+Fe*ne);return(Se>0?Qe<0:Qe>0)?null:this.at(Qe/Se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn extends Ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wd=new Ct,mr=new fp,Wa=new qu,Xd=new X,Xa=new X,qa=new X,Ya=new X,zl=new X,$a=new X,qd=new X,Ka=new X;class Bt extends rn{constructor(e=new ai,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){$a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(zl.fromBufferAttribute(h,e),a?$a.addScaledVector(zl,u):$a.addScaledVector(zl.sub(t),u))}t.add($a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Wa.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Wa,Xd)===null||mr.origin.distanceToSquared(Xd)>(e.far-e.near)**2))&&(Wd.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Wd),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),R=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let x=E,M=R;x<M;x+=3){const T=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);r=Za(this,m,e,n,c,u,h,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=o.getX(p),R=o.getX(p+1),x=o.getX(p+2);r=Za(this,a,e,n,c,u,h,E,R,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],E=Math.max(p.start,f.start),R=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=E,M=R;x<M;x+=3){const T=x,A=x+1,v=x+2;r=Za(this,m,e,n,c,u,h,T,A,v),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const E=p,R=p+1,x=p+2;r=Za(this,a,e,n,c,u,h,E,R,x),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function og(i,e,t,n,r,s,a,o){let l;if(e.side===bn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Pr,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:i}}function Za(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Xa),i.getVertexPosition(l,qa),i.getVertexPosition(c,Ya);const u=og(i,e,t,n,Xa,qa,Ya,qd);if(u){const h=new X;ti.getBarycoord(qd,Xa,qa,Ya,h),r&&(u.uv=ti.getInterpolatedAttribute(r,o,l,c,h,new ot)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,l,c,h,new ot)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,h,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};ti.getNormal(Xa,qa,Ya,d.normal),u.face=d,u.barycoord=h}return u}class lg extends nn{constructor(e=null,t=1,n=1,r,s,a,o,l,c=en,u=en,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _r=new qu,cg=new ot(.5,.5),Ja=new X;class Yu{constructor(e=new Ji,t=new Ji,n=new Ji,r=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xi,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],E=s[12],R=s[13],x=s[14],M=s[15];if(r[0].setComponents(c-a,f-u,m-g,M-E).normalize(),r[1].setComponents(c+a,f+u,m+g,M+E).normalize(),r[2].setComponents(c+o,f+h,m+_,M+R).normalize(),r[3].setComponents(c-o,f-h,m-_,M-R).normalize(),n)r[4].setComponents(l,d,p,x).normalize(),r[5].setComponents(c-l,f-d,m-p,M-x).normalize();else if(r[4].setComponents(c-l,f-d,m-p,M-x).normalize(),t===xi)r[5].setComponents(c+l,f+d,m+p,M+x).normalize();else if(t===da)r[5].setComponents(l,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const t=cg.distanceTo(e.center);return _r.radius=.7071067811865476+t,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends nn{constructor(e=[],t=Lr,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class os extends nn{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends nn{constructor(e,t,n=Ei,r,s,a,o=en,l=en,c,u=zi,h=1){if(u!==zi&&u!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ug extends fa{constructor(e,t=Ei,n=Lr,r,s,a=en,o=en,l,c=zi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mp extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends ai{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(h,2));function g(_,p,m,E,R,x,M,T,A,v,b){const D=x/A,P=M/v,I=x/2,z=M/2,F=T/2,k=A+1,K=v+1;let H=0,ne=0;const V=new X;for(let $=0;$<K;$++){const j=$*P-z;for(let Ee=0;Ee<k;Ee++){const ve=Ee*D-I;V[_]=ve*E,V[p]=j*R,V[m]=F,c.push(V.x,V.y,V.z),V[_]=0,V[p]=0,V[m]=T>0?1:-1,u.push(V.x,V.y,V.z),h.push(Ee/A),h.push(1-$/v),H+=1}}for(let $=0;$<v;$++)for(let j=0;j<A;j++){const Ee=d+j+k*$,ve=d+j+k*($+1),Ge=d+(j+1)+k*($+1),Ne=d+(j+1)+k*$;l.push(Ee,ve,Ne),l.push(ve,Ge,Ne),ne+=6}o.addGroup(f,ne,b),f+=ne,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ot:new X);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new X,r=[],s=[],a=[],o=new X,l=new Ct;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new X)}s[0]=new X,a[0]=new X;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(nt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(nt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function $u(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Yd=new X,$d=new X,Vl=new $u,Gl=new $u,Hl=new $u;class hg extends dg{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new X){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:($d.subVectors(r[0],r[1]).add(r[0]),c=$d);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Yd.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Yd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Vl.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,p),Gl.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,p),Hl.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Gl.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Hl.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Vl.calc(l),Gl.calc(l),Hl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new X().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class pn extends ai{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const E=m*d-a;for(let R=0;R<c;R++){const x=R*h-s;g.push(x,-E,0),_.push(0,0,1),p.push(R/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const R=E+c*m,x=E+c*(m+1),M=E+1+c*(m+1),T=E+1+c*m;f.push(R,x,T),f.push(x,M,T)}this.setIndex(f),this.setAttribute("position",new Yn(g,3)),this.setAttribute("normal",new Yn(_,3)),this.setAttribute("uv",new Yn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Kd(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Kd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const r in n)e[r]=n[r]}return e}function Kd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _p(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const pg={clone:Ts,merge:fn};var mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new X().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gg extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xg extends Ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vg extends Ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Zd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Zd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zd(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Sg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mg=new Sg;class Ku{constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ku.DEFAULT_MATERIAL_NAME="__DEFAULT";const ns=new WeakMap;class yg extends Ku{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Wl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=ns.get(a);h===void 0&&(h=[],ns.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=ha("img");function l(){u(),t&&t(this);const h=ns.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}ns.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),Wl.remove(`image:${e}`);const d=ns.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}ns.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Eg extends Ku{constructor(e){super(e)}load(e,t,n,r){const s=new nn,a=new yg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class gp extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class bg extends gp{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Xl=new Ct,Jd=new X,Qd=new X;class Tg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yu,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===da||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qa=new X,ja=new kr,ui=new X;class xp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,ja,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,ja,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new X,jd=new ot,eh=new ot;class ei extends xp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=au*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return au*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,jd,eh),t.subVectors(eh,jd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zo extends xp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wg extends Tg{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends gp{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new wg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const is=-90,rs=1;class Rg extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ei(is,rs,e,t);r.layers=this.layers,this.add(r);const s=new ei(is,rs,e,t);s.layers=this.layers,this.add(s);const a=new ei(is,rs,e,t);a.layers=this.layers,this.add(a);const o=new ei(is,rs,e,t);o.layers=this.layers,this.add(o);const l=new ei(is,rs,e,t);l.layers=this.layers,this.add(l);const c=new ei(is,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cg extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const th=new Ct;class Pg{constructor(e,t,n=0,r=1/0){this.ray=new fp(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(nh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ou(e[r],this,n,t);return n.sort(nh),n}}function nh(i,e){return i.distance-e.distance}function ou(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ou(s[a],e,t,!0)}}class Lg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const nd=class nd{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};nd.prototype.isMatrix2=!0;let ih=nd;function rh(i,e,t,n){const r=Dg(n);switch(t){case sp:return i*e;case op:return i*e/r.components*r.byteLength;case ku:return i*e/r.components*r.byteLength;case Dr:return i*e*2/r.components*r.byteLength;case zu:return i*e*2/r.components*r.byteLength;case ap:return i*e*3/r.components*r.byteLength;case ni:return i*e*4/r.components*r.byteLength;case Vu:return i*e*4/r.components*r.byteLength;case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Pc:case Dc:return Math.max(i,8)*Math.max(e,8)/2;case Uc:case Nc:case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Po:case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eu:case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case iu:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lo:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(i){switch(i){case Dn:case tp:return{byteLength:1,components:1};case ca:case np:case bi:return{byteLength:2,components:1};case Ou:case Bu:return{byteLength:2,components:4};case Ei:case Fu:case gi:return{byteLength:4,components:1};case ip:case rp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vp(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ig(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ng=`#ifdef USE_ALPHAHASH
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
#endif`,Fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
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
#endif`,Hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yg=`#ifdef USE_IRIDESCENCE
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
#endif`,$g=`#ifdef USE_BUMPMAP
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
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ix=`#define PI 3.141592653589793
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
} // validated`,rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hx=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`uniform sampler2D dfgLUT;
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
}`,Ix=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wx=`#if defined( USE_POINTS_UV )
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
#endif`,Xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ev=`#ifdef USE_SKINNING
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
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Av=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
}`,Gv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`uniform float scale;
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
}`,Yv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,eS=`#define NORMAL
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
}`,tS=`#define NORMAL
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
}`,nS=`#define PHONG
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
}`,iS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,sS=`#define STANDARD
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
}`,aS=`#define TOON
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
}`,oS=`#define TOON
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
}`,lS=`uniform float size;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,dS=`uniform vec3 color;
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
}`,hS=`uniform float rotation;
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
}`,fS=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ug,alphahash_pars_fragment:Ng,alphamap_fragment:Fg,alphamap_pars_fragment:Og,alphatest_fragment:Bg,alphatest_pars_fragment:kg,aomap_fragment:zg,aomap_pars_fragment:Vg,batching_pars_vertex:Gg,batching_vertex:Hg,begin_vertex:Wg,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:Yg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:jg,color_pars_fragment:ex,color_pars_vertex:tx,color_vertex:nx,common:ix,cube_uv_reflection_fragment:rx,defaultnormal_vertex:sx,displacementmap_pars_vertex:ax,displacementmap_vertex:ox,emissivemap_fragment:lx,emissivemap_pars_fragment:cx,colorspace_fragment:ux,colorspace_pars_fragment:dx,envmap_fragment:hx,envmap_common_pars_fragment:fx,envmap_pars_fragment:px,envmap_pars_vertex:mx,envmap_physical_pars_fragment:wx,envmap_vertex:_x,fog_vertex:gx,fog_pars_vertex:xx,fog_fragment:vx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:yx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:bx,lights_pars_begin:Tx,lights_toon_fragment:Ax,lights_toon_pars_fragment:Rx,lights_phong_fragment:Cx,lights_phong_pars_fragment:Px,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Ix,lights_fragment_maps:Ux,lights_fragment_end:Nx,lightprobes_pars_fragment:Fx,logdepthbuf_fragment:Ox,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:zx,map_fragment:Vx,map_pars_fragment:Gx,map_particle_fragment:Hx,map_particle_pars_fragment:Wx,metalnessmap_fragment:Xx,metalnessmap_pars_fragment:qx,morphinstance_vertex:Yx,morphcolor_vertex:$x,morphnormal_vertex:Kx,morphtarget_pars_vertex:Zx,morphtarget_vertex:Jx,normal_fragment_begin:Qx,normal_fragment_maps:jx,normal_pars_fragment:ev,normal_pars_vertex:tv,normal_vertex:nv,normalmap_pars_fragment:iv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:sv,clearcoat_pars_fragment:av,iridescence_pars_fragment:ov,opaque_fragment:lv,packing:cv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:hv,dithering_pars_fragment:fv,roughnessmap_fragment:pv,roughnessmap_pars_fragment:mv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:gv,shadowmap_vertex:xv,shadowmask_pars_fragment:vv,skinbase_vertex:Sv,skinning_pars_vertex:Mv,skinning_vertex:yv,skinnormal_vertex:Ev,specularmap_fragment:bv,specularmap_pars_fragment:Tv,tonemapping_fragment:wv,tonemapping_pars_fragment:Av,transmission_fragment:Rv,transmission_pars_fragment:Cv,uv_pars_fragment:Pv,uv_pars_vertex:Lv,uv_vertex:Dv,worldpos_vertex:Iv,background_vert:Uv,background_frag:Nv,backgroundCube_vert:Fv,backgroundCube_frag:Ov,cube_vert:Bv,cube_frag:kv,depth_vert:zv,depth_frag:Vv,distance_vert:Gv,distance_frag:Hv,equirect_vert:Wv,equirect_frag:Xv,linedashed_vert:qv,linedashed_frag:Yv,meshbasic_vert:$v,meshbasic_frag:Kv,meshlambert_vert:Zv,meshlambert_frag:Jv,meshmatcap_vert:Qv,meshmatcap_frag:jv,meshnormal_vert:eS,meshnormal_frag:tS,meshphong_vert:nS,meshphong_frag:iS,meshphysical_vert:rS,meshphysical_frag:sS,meshtoon_vert:aS,meshtoon_frag:oS,points_vert:lS,points_frag:cS,shadow_vert:uS,shadow_frag:dS,sprite_vert:hS,sprite_frag:fS},ge={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},fi={basic:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:fn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:fn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:fn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ht(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:fn([ge.points,ge.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:fn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:fn([ge.common,ge.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:fn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:fn([ge.sprite,ge.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:fn([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:fn([ge.lights,ge.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};fi.physical={uniforms:fn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const eo={r:0,b:0,g:0},pS=new Ct,Sp=new $e;Sp.set(-1,0,0,0,1,0,0,0,1);function mS(i,e,t,n,r,s){const a=new ht(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function f(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){const x=E.backgroundBlurriness>0;R=e.get(R,x)}return R}function g(E){let R=!1;const x=f(E);x===null?p(a,o):x&&x.isColor&&(p(x,1),R=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,R){const x=f(R);x&&(x.isCubeTexture||x.mapping===$o)?(c===void 0&&(c=new Bt(new Ma(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Ts(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pS.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sp),c.material.toneMapped=rt.getTransfer(x.colorSpace)!==vt,(u!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Bt(new pn(2,2),new Ti({name:"BackgroundMaterial",uniforms:Ts(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=rt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,R){E.getRGB(eo,_p(i)),t.buffers.color.setClear(eo.r,eo.g,eo.b,R,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:g,addToRenderList:_,dispose:m}}function _S(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(P,I,z,F,k){let K=!1;const H=h(P,F,z,I);s!==H&&(s=H,c(s.object)),K=f(P,F,z,k),K&&g(P,F,z,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,x(P,I,z,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,I,z,F){const k=F.wireframe===!0;let K=n[I.id];K===void 0&&(K={},n[I.id]=K);const H=P.isInstancedMesh===!0?P.id:0;let ne=K[H];ne===void 0&&(ne={},K[H]=ne);let V=ne[z.id];V===void 0&&(V={},ne[z.id]=V);let $=V[k];return $===void 0&&($=d(l()),V[k]=$),$}function d(P){const I=[],z=[],F=[];for(let k=0;k<t;k++)I[k]=0,z[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,I,z,F){const k=s.attributes,K=I.attributes;let H=0;const ne=z.getAttributes();for(const V in ne)if(ne[V].location>=0){const j=k[V];let Ee=K[V];if(Ee===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Ee=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Ee=P.instanceColor)),j===void 0||j.attribute!==Ee||Ee&&j.data!==Ee.data)return!0;H++}return s.attributesNum!==H||s.index!==F}function g(P,I,z,F){const k={},K=I.attributes;let H=0;const ne=z.getAttributes();for(const V in ne)if(ne[V].location>=0){let j=K[V];j===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const Ee={};Ee.attribute=j,j&&j.data&&(Ee.data=j.data),k[V]=Ee,H++}s.attributes=k,s.attributesNum=H,s.index=F}function _(){const P=s.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function p(P){m(P,0)}function m(P,I){const z=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;z[P]=1,F[P]===0&&(i.enableVertexAttribArray(P),F[P]=1),k[P]!==I&&(i.vertexAttribDivisor(P,I),k[P]=I)}function E(){const P=s.newAttributes,I=s.enabledAttributes;for(let z=0,F=I.length;z<F;z++)I[z]!==P[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function R(P,I,z,F,k,K,H){H===!0?i.vertexAttribIPointer(P,I,z,k,K):i.vertexAttribPointer(P,I,z,F,k,K)}function x(P,I,z,F){_();const k=F.attributes,K=z.getAttributes(),H=I.defaultAttributeValues;for(const ne in K){const V=K[ne];if(V.location>=0){let $=k[ne];if($===void 0&&(ne==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),ne==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const j=$.normalized,Ee=$.itemSize,ve=e.get($);if(ve===void 0)continue;const Ge=ve.buffer,Ne=ve.type,Ve=ve.bytesPerElement,J=Ne===i.INT||Ne===i.UNSIGNED_INT||$.gpuType===Fu;if($.isInterleavedBufferAttribute){const se=$.data,be=se.stride,Fe=$.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se,se.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<V.locationSize;Se++)p(V.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Se=0;Se<V.locationSize;Se++)R(V.location+Se,Ee/V.locationSize,Ne,j,be*Ve,(Fe+Ee/V.locationSize*Se)*Ve,J)}else{if($.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)m(V.location+se,$.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let se=0;se<V.locationSize;se++)R(V.location+se,Ee/V.locationSize,Ne,j,Ee*Ve,Ee/V.locationSize*se*Ve,J)}}else if(H!==void 0){const j=H[ne];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}E()}function M(){b();for(const P in n){const I=n[P];for(const z in I){const F=I[z];for(const k in F){const K=F[k];for(const H in K)u(K[H].object),delete K[H];delete F[k]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const z in I){const F=I[z];for(const k in F){const K=F[k];for(const H in K)u(K[H].object),delete K[H];delete F[k]}}delete n[P.id]}function A(P){for(const I in n){const z=n[I];for(const F in z){const k=z[F];if(k[P.id]===void 0)continue;const K=k[P.id];for(const H in K)u(K[H].object),delete K[H];delete k[P.id]}}}function v(P){for(const I in n){const z=n[I],F=P.isInstancedMesh===!0?P.id:0,k=z[F];if(k!==void 0){for(const K in k){const H=k[K];for(const ne in H)u(H[ne].object),delete H[ne];delete k[K]}delete z[F],Object.keys(z).length===0&&delete n[I]}}}function b(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function gS(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Dn&&A!==gi&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:x,maxSamples:M,samples:T}}function vS(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ji,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,R=E*4;let x=m.clippingState||null;l.value=x,x=u(g,d,R,f);for(let M=0;M!==R;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let R=0,x=f;R!==_;++R,x+=4)a.copy(h[R]).applyMatrix4(E,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const us=4,SS=6,MS=20,yS=256,zs=new Zo,sh=new ht;let ql=null,Yl=0,$l=0,Kl=!1;const ES=new X,gr=new X;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=ES}=s;ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=Kl,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),Kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:bi,format:ni,colorSpace:Do,depthBuffer:!1},r=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bS(s)),this._blurMaterial=wS(s,e,t),this._ggxMaterial=TS(s,e,t)}return r}_compileMaterial(e){const t=new Bt(new ai,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,r,s){const l=new ei(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Ma,new hn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,m=!0):(p.color.copy(sh),m=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[R],s.y,s.z)):x===1?(l.up.set(0,0,c[R]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[R],s.z)):(l.up.set(0,c[R],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[R]));const M=this._cubeSize;ss(r,x*M,R>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Lr||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=c*1.25,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-us?n-g+us:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ss(s,p,m,3*_,2*_),r.setRenderTarget(s),r.render(o,zs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ss(e,p,m,3*_,2*_),r.setRenderTarget(e),r.render(o,zs)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-us?r-this._lodMax+us:0),d=4*(this._cubeSize-u);ss(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(l,zs)}}function bS(i){const e=[],t=[];let n=i;const r=i-us+1+SS;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,d=6,f=3,g=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let m=0;m<h;m++){const E=m%3*2/3-1,R=m>2?0:-1,x=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];g.set(x,f*d*m);for(let M=0;M<d;M++){const T=u[M*2]*2-1,A=u[M*2+1]*2-1;m===0?gr.set(1,A,T):m===1?gr.set(-T,1,-A):m===2?gr.set(-T,A,1):m===3?gr.set(-1,A,-T):m===4?gr.set(-T,-1,A):gr.set(T,A,-1),gr.toArray(_,(m*d+M)*f)}}const p=new ai;p.setAttribute("position",new Si(g,f)),p.setAttribute("outputDirection",new Si(_,f)),t.push(new Bt(p,null)),n>us&&n--}return{lodMeshes:t,sizeLods:e}}function oh(i,e,t){const n=new si(i,e,t);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function TS(i,e,t){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function wS(i,e,t){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:MS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function lh(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ch(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mp extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ma(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:Fi});s.uniforms.tEquirect.value=t;const a=new Bt(r,s),o=t.minFilter;return t.minFilter===Mr&&(t.minFilter=ln),new Rg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function AS(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===ml||f===_l)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Mp(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===ml||f===_l,_=f===Lr||f===bs;if(g||_){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new ah(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const E=d.image;return g&&E&&E.height>0||_&&E&&l(E)?(n===null&&(n=new ah(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===ml?d.mapping=Lr:f===_l&&(d.mapping=bs),d}function l(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function RS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ps("WebGLRenderer: "+n+" extension not supported."),r}}}function CS(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const E=f.array;_=f.version;for(let R=0,x=E.length;R<x;R+=3){const M=E[R+0],T=E[R+1],A=E[R+2];d.push(M,T,T,A,A,M)}}else{const E=g.array;_=g.version;for(let R=0,x=E.length/3-1;R<x;R+=3){const M=R+0,T=R+1,A=R+2;d.push(M,T,T,A,A,M)}}const p=new(g.count>=65535?hp:dp)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function PS(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function LS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function DS(i,e,t){const n=new WeakMap,r=new Ut;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let D=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",D)};var f=D;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let M=o.attributes.position.count*x,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*T*4*h),v=new cp(A,M,T,h);v.type=gi,v.needsUpdate=!0;const b=x*4;for(let P=0;P<h;P++){const I=m[P],z=E[P],F=R[P],k=M*T*4*P;for(let K=0;K<I.count;K++){const H=K*b;g===!0&&(r.fromBufferAttribute(I,K),A[k+H+0]=r.x,A[k+H+1]=r.y,A[k+H+2]=r.z,A[k+H+3]=0),_===!0&&(r.fromBufferAttribute(z,K),A[k+H+4]=r.x,A[k+H+5]=r.y,A[k+H+6]=r.z,A[k+H+7]=0),p===!0&&(r.fromBufferAttribute(F,K),A[k+H+8]=r.x,A[k+H+9]=r.y,A[k+H+10]=r.z,A[k+H+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:v,size:new ot(M,T)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function IS(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const US={[$f]:"LINEAR_TONE_MAPPING",[Kf]:"REINHARD_TONE_MAPPING",[Zf]:"CINEON_TONE_MAPPING",[Nu]:"ACES_FILMIC_TONE_MAPPING",[Qf]:"AGX_TONE_MAPPING",[jf]:"NEUTRAL_TONE_MAPPING",[Jf]:"CUSTOM_TONE_MAPPING"};function NS(i,e,t,n,r,s){const a=new si(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new ai;c.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const u=new gg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bt(c,u),d=new Zo(-1,1,1,-1,0,1);let f=null,g=null,_=!1,p,m=null,E=[],R=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let T=0;T<E.length;T++){const A=E[T];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){E=x,R=E.length>0&&E[0].isRenderPass===!0;const M=a.width,T=a.height;E.length>0&&o===null&&(o=new si(M,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new si(M,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<E.length;A++){const v=E[A];v.setSize&&v.setSize(M,T)}},this.begin=function(x,M){if(_||x.toneMapping===vi&&E.length===0)return!1;if(m=M,M!==null){const T=M.width,A=M.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return R===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=vi,!0},this.hasRenderPass=function(){return R},this.end=function(x,M){x.toneMapping=p,_=!0;let T=a,A=o;for(let v=0;v<E.length;v++){const b=E[v];b.enabled!==!1&&(b.render(x,A,T,M),b.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},rt.getTransfer(f)===vt&&(u.defines.SRGB_TRANSFER="");const v=US[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(h,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const yp=new nn,lu=new fa(1,1),Ep=new cp,bp=new q_,Tp=new pp,uh=[],dh=[],hh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uh[r];if(s===void 0&&(s=new Float32Array(r),uh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qo(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function FS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function OS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function BS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function kS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function zS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),Yt(t,n)}}function VS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),Yt(t,n)}}function GS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),Yt(t,n)}}function HS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function WS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function XS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function qS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function YS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function KS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function ZS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function JS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=t.isReversedDepthBuffer()?Hu:Gu,s=lu):s=yp,t.setTexture2D(e||s,r)}function QS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bp,r)}function jS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tp,r)}function eM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ep,r)}function tM(i){switch(i){case 5126:return FS;case 35664:return OS;case 35665:return BS;case 35666:return kS;case 35674:return zS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return HS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return qS;case 5125:return YS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return eM}}function nM(i,e){i.uniform1fv(this.addr,e)}function iM(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function rM(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function sM(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function aM(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oM(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lM(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cM(i,e){i.uniform1iv(this.addr,e)}function uM(i,e){i.uniform2iv(this.addr,e)}function dM(i,e){i.uniform3iv(this.addr,e)}function hM(i,e){i.uniform4iv(this.addr,e)}function fM(i,e){i.uniform1uiv(this.addr,e)}function pM(i,e){i.uniform2uiv(this.addr,e)}function mM(i,e){i.uniform3uiv(this.addr,e)}function _M(i,e){i.uniform4uiv(this.addr,e)}function gM(i,e,t){const n=this.cache,r=e.length,s=Qo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=lu:a=yp;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function xM(i,e,t){const n=this.cache,r=e.length,s=Qo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||bp,s[a])}function vM(i,e,t){const n=this.cache,r=e.length,s=Qo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Tp,s[a])}function SM(i,e,t){const n=this.cache,r=e.length,s=Qo(t,r);qt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ep,s[a])}function MM(i){switch(i){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return SM}}class yM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tM(t.type)}}class EM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MM(t.type)}}class bM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zl=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function TM(i,e,t){const n=i.name,r=n.length;for(Zl.lastIndex=0;;){const s=Zl.exec(n),a=Zl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mh(t,c===void 0?new yM(o,i,e):new EM(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new bM(o),mh(t,h)),t=h}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);TM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function _h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const wM=37297;let AM=0;function RM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const gh=new $e;function CM(i){rt._getMatrix(gh,rt.workingColorSpace,i);const e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Io:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+RM(i.getShaderSource(e),o)}else return s}function PM(i,e){const t=CM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const LM={[$f]:"Linear",[Kf]:"Reinhard",[Zf]:"Cineon",[Nu]:"ACESFilmic",[Qf]:"AgX",[jf]:"Neutral",[Jf]:"Custom"};function DM(i,e){const t=LM[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const to=new X;function IM(){rt.getLuminanceCoefficients(to);const i=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function NM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function FM(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qs(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(OM,kM)}const BM=new Map;function kM(i,e){let t=je[e];if(t===void 0){const n=BM.get(e);if(n!==void 0)t=je[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cu(t)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(zM,VM)}function VM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const GM={[lo]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function HM(i){return GM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WM={[Lr]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function XM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":WM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const qM={[bs]:"ENVMAP_MODE_REFRACTION"};function YM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $M={[Yf]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[b_]:"ENVMAP_BLENDING_ADD"};function KM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$M[i.combine]||"ENVMAP_BLENDING_NONE"}function ZM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function JM(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=HM(t),c=XM(t),u=YM(t),h=KM(t),d=ZM(t),f=UM(t),g=NM(s),_=r.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`)):(p=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?je.tonemapping_pars_fragment:"",t.toneMapping!==vi?DM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,PM("linearToOutputTexel",t.outputColorSpace),IM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=cu(a),a=vh(a,t),a=Sh(a,t),o=cu(o),o=vh(o,t),o=Sh(o,t),a=Mh(a),o=Mh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=E+p+a,x=E+m+o,M=_h(r,r.VERTEX_SHADER,R),T=_h(r,r.FRAGMENT_SHADER,x);r.attachShader(_,M),r.attachShader(_,T),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(M)||"",F=r.getShaderInfoLog(T)||"",k=I.trim(),K=z.trim(),H=F.trim();let ne=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,M,T);else{const $=xh(r,M,"vertex"),j=xh(r,T,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+$+`
`+j)}else k!==""?He("WebGLProgram: Program Info Log:",k):(K===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:ne,programLog:k,vertexShader:{log:K,prefix:p},fragmentShader:{log:H,prefix:m}})}r.deleteShader(M),r.deleteShader(T),v=new po(r,_),b=FM(r,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(_,wM)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}let QM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ey(e),t.set(e,n)),n}}class ey{constructor(e){this.id=QM++,this.code=e,this.usedTimes=0}}function ty(i){return i===Dr||i===Po||i===Lo}function ny(i,e,t,n,r,s){const a=new Xu,o=new jM,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,b,D,P,I,z){const F=P.fog,k=I.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ne=e.get(v.envMap||K,H),V=ne&&ne.mapping===$o?ne.image.height:null,$=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const j=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ee=j!==void 0?j.length:0;let ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let Ge,Ne,Ve,J;if($){const it=fi[$];Ge=it.vertexShader,Ne=it.fragmentShader}else{Ge=v.vertexShader,Ne=v.fragmentShader;const it=o.getVertexShaderStage(v),lt=o.getFragmentShaderStage(v);o.update(v,it,lt),Ve=it.id,J=lt.id}const se=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Se=I.isBatchedMesh===!0,Qe=!!v.map,Ot=!!v.matcap,Ze=!!ne,et=!!v.aoMap,gt=!!v.lightMap,ze=!!v.bumpMap&&v.wireframe===!1,Mt=!!v.normalMap,Pt=!!v.displacementMap,xt=!!v.emissiveMap,ct=!!v.metalnessMap,wt=!!v.roughnessMap,O=v.anisotropy>0,We=v.clearcoat>0,ft=v.dispersion>0,w=v.retroreflectivity>0,S=v.iridescence>0,G=v.sheen>0,W=v.transmission>0,ee=O&&!!v.anisotropyMap,ce=We&&!!v.clearcoatMap,fe=We&&!!v.clearcoatNormalMap,te=We&&!!v.clearcoatRoughnessMap,re=S&&!!v.iridescenceMap,he=S&&!!v.iridescenceThicknessMap,De=G&&!!v.sheenColorMap,pe=G&&!!v.sheenRoughnessMap,ue=!!v.specularMap,Ie=!!v.specularColorMap,Be=!!v.specularIntensityMap,Xe=W&&!!v.transmissionMap,U=W&&!!v.thicknessMap,de=!!v.gradientMap,ie=!!v.alphaMap,le=v.alphaTest>0,xe=!!v.alphaHash,ae=!!v.extensions;let Le=vi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Te={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:Ne,defines:v.defines,customVertexShaderID:Ve,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Se,batchingColor:Se&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Qe,matcap:Ot,envMap:Ze,envMapMode:Ze&&ne.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:gt,bumpMap:ze,normalMap:Mt,displacementMap:Pt,emissiveMap:xt,normalMapObjectSpace:Mt&&v.normalMapType===A_,normalMapTangentSpace:Mt&&v.normalMapType===Cd,packedNormalMap:Mt&&v.normalMapType===Cd&&ty(v.normalMap.format),metalnessMap:ct,roughnessMap:wt,anisotropy:O,anisotropyMap:ee,clearcoat:We,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:te,dispersion:ft,retroreflection:w,iridescence:S,iridescenceMap:re,iridescenceThicknessMap:he,sheen:G,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:ue,specularColorMap:Ie,specularIntensityMap:Be,transmission:W,transmissionMap:Xe,thicknessMap:U,gradientMap:de,opaque:v.transparent===!1&&v.blending===Zs&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:le,alphaHash:xe,combine:v.combine,mapUv:Qe&&g(v.map.channel),aoMapUv:et&&g(v.aoMap.channel),lightMapUv:gt&&g(v.lightMap.channel),bumpMapUv:ze&&g(v.bumpMap.channel),normalMapUv:Mt&&g(v.normalMap.channel),displacementMapUv:Pt&&g(v.displacementMap.channel),emissiveMapUv:xt&&g(v.emissiveMap.channel),metalnessMapUv:ct&&g(v.metalnessMap.channel),roughnessMapUv:wt&&g(v.roughnessMap.channel),anisotropyMapUv:ee&&g(v.anisotropyMap.channel),clearcoatMapUv:ce&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:Ie&&g(v.specularColorMap.channel),specularIntensityMapUv:Be&&g(v.specularIntensityMap.channel),transmissionMapUv:Xe&&g(v.transmissionMap.channel),thicknessMapUv:U&&g(v.thicknessMap.channel),alphaMapUv:ie&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||O),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Qe||ie),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&Mt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ve,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Qe&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:xt&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ae&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&v.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(b,v),E(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const b=f[v.type];let D;if(b){const P=fi[b];D=pg.clone(P.uniforms)}else D=v.uniforms;return D}function x(v,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new JM(i,b,v,r),c.push(D),u.set(b,D)),D}function M(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:R,acquireProgram:x,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:A}}function iy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ry(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,p,m){let E=i[e];return E===void 0?(E={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},i[e]=E):(E.id=d.id,E.object=d,E.geometry=f,E.material=g,E.materialVariant=a(d),E.groupOrder=_,E.renderOrder=d.renderOrder,E.z=p,E.group=m),e++,E}function l(d,f,g,_,p,m,E){E.reversedDepth===!0&&(p=-p);const R=o(d,f,g,_,p,m);g.transmission>0?n.push(R):g.transparent===!0?r.push(R):t.push(R)}function c(d,f,g,_,p,m){const E=o(d,f,g,_,p,m);g.transmission>0?n.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function u(d,f){t.length>1&&t.sort(d||ry),n.length>1&&n.sort(f||Eh),r.length>1&&r.sort(f||Eh)}function h(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function sy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new bh,i.set(n,[a])):r>=s.length?(a=new bh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ay(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new ht};break;case"SpotLight":t={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return i[e.id]=t,t}}}function oy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ly=0;function cy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uy(i){const e=new ay,t=oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const r=new X,s=new Ct,a=new Ct;function o(c){let u=0,h=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,E=0,R=0,x=0,M=0,T=0,A=0,v=0,b=0,D=0;c.sort(cy);for(let I=0,z=c.length;I<z;I++){const F=c[I],k=F.color,K=F.intensity,H=F.distance;let ne=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Dr?ne=F.shadow.map.texture:ne=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*K,h+=k.g*K,d+=k.b*K;else if(F.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(F.sh.coefficients[V],K);D++}else if(F.isSunLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ne;const Ee=$.getViewportCount();for(let ve=0;ve<Ee;ve++)n.sunShadowMatrix[_+ve]=$.getMatrix(ve),n.sunShadowCascade[_+ve]=$._cascadeData[ve];_+=Ee,g++}n.sun[f]=V,f++}else if(F.isDirectionalLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=F.shadow.matrix,M++}n.directional[p]=V,p++}else if(F.isSpotLight){const V=e.get(F);V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(k).multiplyScalar(K),V.distance=H,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,n.spot[E]=V;const $=F.shadow;if(F.map&&(n.spotLightMap[v]=F.map,v++,$.updateMatrices(F),F.castShadow&&b++),n.spotLightMatrix[E]=$.matrix,F.castShadow){const j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[E]=j,n.spotShadowMap[E]=ne,A++}E++}else if(F.isRectAreaLight){const V=e.get(F);V.color.copy(k).multiplyScalar(K),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),n.rectArea[R]=V,R++}else if(F.isPointLight){const V=e.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity),V.distance=F.distance,V.decay=F.decay,F.castShadow){const $=F.shadow,j=t.get(F);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=F.shadow.matrix,T++}n.point[m]=V,m++}else if(F.isHemisphereLight){const V=e.get(F);V.skyColor.copy(F.color).multiplyScalar(K),V.groundColor.copy(F.groundColor).multiplyScalar(K),n.hemi[x]=V,x++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==E||P.rectAreaLength!==R||P.hemiLength!==x||P.numSunShadows!==g||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=p,n.spot.length=E,n.rectArea.length=R,n.point.length=m,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-b,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=E,P.rectAreaLength=R,P.hemiLength=x,P.numSunShadows=g,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=D,n.version=ly++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let E=0,R=c.length;E<R;E++){const x=c[E];if(x.isSunLight){const M=n.sun[h];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),h++}else if(x.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(x.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const M=n.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Th(i){const e=new uy(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function dy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Th(i),e.set(r,[o])):s>=a.length?(o=new Th(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
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
}`,py=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],my=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],wh=new Ct,Vs=new X,Jl=new X;function _y(i,e,t){let n=new Yu;const r=new ot,s=new ot,a=new Ut,o=new xg,l=new vg,c={},u=t.maxTextureSize,h={[Pr]:bn,[bn]:Pr,[mi]:mi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:hy,fragmentShader:fy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ai;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lo;let m=this.type;this.render=function(T,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===r_&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lo);const b=i.getRenderTarget(),D=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==this.type;z&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=T.length;F<k;F++){const K=T[F],H=K.shadow;if(H===void 0){He("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ne=H.getFrameExtents();r.multiply(ne),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,H.mapSize.y=s.y));const V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xs){if(K.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new si(r.x,r.y,{format:Dr,type:bi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new fa(r.x,r.y,gi),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=zi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en}else K.isPointLight?(H.map=new Mp(r.x),H.map.depthTexture=new ug(r.x,Ei)):(H.map=new si(r.x,r.y),H.map.depthTexture=new fa(r.x,r.y,Ei)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=zi,this.type===lo?(H.map.depthTexture.compareFunction=V?Hu:Gu,H.map.depthTexture.minFilter=ln,H.map.depthTexture.magFilter=ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();K.isPointLight!==!0&&H.updateMatrices(K,v);for(let j=0;j<$;j++){const Ee=H.getCamera(j);if(K.isPointLight){const ve=H.camera,Ge=H.matrix,Ne=K.distance||ve.far;Ne!==ve.far&&(ve.far=Ne,ve.updateProjectionMatrix()),Vs.setFromMatrixPosition(K.matrixWorld),ve.position.copy(Vs),Jl.copy(ve.position),Jl.add(py[j]),ve.up.copy(my[j]),ve.lookAt(Jl),ve.updateMatrixWorld(),Ge.makeTranslation(-Vs.x,-Vs.y,-Vs.z),wh.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),H._frustum.setFromProjectionMatrix(wh,ve.coordinateSystem,ve.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,j),i.clear();else{j===0&&(i.setRenderTarget(H.map),i.clear());const ve=H.getViewport(j);a.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),I.viewport(a)}n=H.getFrustum(j),x(A,v,Ee,K,this.type)}H.isPointLightShadow!==!0&&this.type===Xs&&E(H,v),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,D,P)};function E(T,A){const v=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new si(r.x,r.y,{format:Dr,type:bi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,v,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,v,f,_,null)}function R(T,A,v,b){let D=null;const P=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)D=P;else if(D=v.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=D.uuid,z=A.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let k=F[z];k===void 0&&(k=D.clone(),F[z]=k,A.addEventListener("dispose",M)),D=k}if(D.visible=A.visible,D.wireframe=A.wireframe,b===Xs?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:h[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=i.properties.get(D);I.light=v}return D}function x(T,A,v,b,D){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Xs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const z=e.update(T),F=T.material;if(Array.isArray(F)){const k=z.groups;for(let K=0,H=k.length;K<H;K++){const ne=k[K],V=F[ne.materialIndex];if(V&&V.visible){const $=R(T,V,b,D);T.onBeforeShadow(i,T,A,v,z,$,ne),i.renderBufferDirect(v,null,z,$,T,ne),T.onAfterShadow(i,T,A,v,z,$,ne)}}}else if(F.visible){const k=R(T,F,b,D);T.onBeforeShadow(i,T,A,v,z,k,null),i.renderBufferDirect(v,null,z,k,T,null),T.onAfterShadow(i,T,A,v,z,k,null)}}const I=T.children;for(let z=0,F=I.length;z<F;z++)x(I[z],A,v,b,D)}function M(T){T.target.removeEventListener("dispose",M);for(const v in c){const b=c[v],D=T.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}function gy(i,e){function t(){let U=!1;const de=new Ut;let ie=null;const le=new Ut(0,0,0,0);return{setMask:function(xe){ie!==xe&&!U&&(i.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ae,Le,Te,it){it===!0&&(xe*=Te,ae*=Te,Le*=Te),de.set(xe,ae,Le,Te),le.equals(de)===!1&&(i.clearColor(xe,ae,Le,Te),le.copy(de))},reset:function(){U=!1,ie=null,le.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,ie=null,le=null,xe=null;return{setReversed:function(ae){if(de!==ae){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=ae;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return de},setTest:function(ae){ae?se(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!U&&(i.depthMask(ae),ie=ae)},setFunc:function(ae){if(de&&(ae=k_[ae]),le!==ae){switch(ae){case Mc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case la:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){U=ae},setClear:function(ae){xe!==ae&&(xe=ae,de&&(ae=1-ae),i.clearDepth(ae))},reset:function(){U=!1,ie=null,le=null,xe=null,de=!1}}}function r(){let U=!1,de=null,ie=null,le=null,xe=null,ae=null,Le=null,Te=null,it=null;return{setTest:function(lt){U||(lt?se(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(lt){de!==lt&&!U&&(i.stencilMask(lt),de=lt)},setFunc:function(lt,_n,Bn){(ie!==lt||le!==_n||xe!==Bn)&&(i.stencilFunc(lt,_n,Bn),ie=lt,le=_n,xe=Bn)},setOp:function(lt,_n,Bn){(ae!==lt||Le!==_n||Te!==Bn)&&(i.stencilOp(lt,_n,Bn),ae=lt,Le=_n,Te=Bn)},setLocked:function(lt){U=lt},setClear:function(lt){it!==lt&&(i.clearStencil(lt),it=lt)},reset:function(){U=!1,de=null,ie=null,le=null,xe=null,ae=null,Le=null,Te=null,it=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,E=null,R=null,x=null,M=null,T=null,A=null,v=new ht(0,0,0),b=0,D=!1,P=null,I=null,z=null,F=null,k=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ne=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=ne>=2);let $=null,j={};const Ee=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ge=new Ut().fromArray(Ee),Ne=new Ut().fromArray(ve);function Ve(U,de,ie,le){const xe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(U,ae),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ie;Le++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(de+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ae}const J={};J[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(la),ze(!1),Mt(wd),se(i.CULL_FACE),et(Fi);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function be(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Fe(U,de){return d[U]!==de?(i.bindFramebuffer(U,de),d[U]=de,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=de),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Se(U,de){let ie=g,le=!1;if(U){ie=f.get(de),ie===void 0&&(ie=[],f.set(de,ie));const xe=U.textures;if(ie.length!==xe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Le=xe.length;ae<Le;ae++)ie[ae]=i.COLOR_ATTACHMENT0+ae;ie.length=xe.length,le=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,le=!0);le&&i.drawBuffers(ie)}function Qe(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const Ot={[as]:i.FUNC_ADD,[a_]:i.FUNC_SUBTRACT,[o_]:i.FUNC_REVERSE_SUBTRACT};Ot[l_]=i.MIN,Ot[c_]=i.MAX;const Ze={[u_]:i.ZERO,[d_]:i.ONE,[h_]:i.SRC_COLOR,[Xf]:i.SRC_ALPHA,[x_]:i.SRC_ALPHA_SATURATE,[__]:i.DST_COLOR,[p_]:i.DST_ALPHA,[f_]:i.ONE_MINUS_SRC_COLOR,[qf]:i.ONE_MINUS_SRC_ALPHA,[g_]:i.ONE_MINUS_DST_COLOR,[m_]:i.ONE_MINUS_DST_ALPHA,[v_]:i.CONSTANT_COLOR,[S_]:i.ONE_MINUS_CONSTANT_COLOR,[M_]:i.CONSTANT_ALPHA,[y_]:i.ONE_MINUS_CONSTANT_ALPHA};function et(U,de,ie,le,xe,ae,Le,Te,it,lt){if(U===Fi){p===!0&&(be(i.BLEND),p=!1);return}if(p===!1&&(se(i.BLEND),p=!0),U!==s_){if(U!==m||lt!==D){if((E!==as||M!==as)&&(i.blendEquation(i.FUNC_ADD),E=as,M=as),lt)switch(U){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case Ad:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",U);break}else switch(U){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ad:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rd:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",U);break}R=null,x=null,T=null,A=null,v.set(0,0,0),b=0,m=U,D=lt}return}xe=xe||de,ae=ae||ie,Le=Le||le,(de!==E||xe!==M)&&(i.blendEquationSeparate(Ot[de],Ot[xe]),E=de,M=xe),(ie!==R||le!==x||ae!==T||Le!==A)&&(i.blendFuncSeparate(Ze[ie],Ze[le],Ze[ae],Ze[Le]),R=ie,x=le,T=ae,A=Le),(Te.equals(v)===!1||it!==b)&&(i.blendColor(Te.r,Te.g,Te.b,it),v.copy(Te),b=it),m=U,D=!1}function gt(U,de){U.side===mi?be(i.CULL_FACE):se(i.CULL_FACE);let ie=U.side===bn;de&&(ie=!ie),ze(ie),U.blending===Zs&&U.transparent===!1?et(Fi):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const le=U.stencilWrite;o.setTest(le),le&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function Mt(U){U!==n_?(se(i.CULL_FACE),U!==I&&(U===wd?i.cullFace(i.BACK):U===i_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=U}function Pt(U){U!==z&&(H&&i.lineWidth(U),z=U)}function xt(U,de,ie){U?(se(i.POLYGON_OFFSET_FILL),(F!==de||k!==ie)&&(F=de,k=ie,a.getReversed()&&(de=-de),i.polygonOffset(de,ie))):be(i.POLYGON_OFFSET_FILL)}function ct(U){U?se(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function wt(U){U===void 0&&(U=i.TEXTURE0+K-1),$!==U&&(i.activeTexture(U),$=U)}function O(U,de,ie){ie===void 0&&($===null?ie=i.TEXTURE0+K-1:ie=$);let le=j[ie];le===void 0&&(le={type:void 0,texture:void 0},j[ie]=le),(le.type!==U||le.texture!==de)&&($!==ie&&(i.activeTexture(ie),$=ie),i.bindTexture(U,de||J[U]),le.type=U,le.texture=de)}function We(){const U=j[$];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function S(){try{i.texSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function G(){try{i.texSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function ee(){try{i.compressedTexSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function ce(){try{i.texStorage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function fe(){try{i.texStorage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function te(){try{i.texImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function re(){try{i.texImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function he(U){return h[U]!==void 0?h[U]:i.getParameter(U)}function De(U,de){h[U]!==de&&(i.pixelStorei(U,de),h[U]=de)}function pe(U){Ge.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ge.copy(U))}function ue(U){Ne.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ne.copy(U))}function Ie(U,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let le=ie.get(U);le===void 0&&(le=i.getUniformBlockIndex(de,U.name),ie.set(U,le))}function Be(U,de){const le=c.get(de).get(U);l.get(de)!==le&&(i.uniformBlockBinding(de,le,U.__bindingPointIndex),l.set(de,le))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,j={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,E=null,R=null,x=null,M=null,T=null,A=null,v=new ht(0,0,0),b=0,D=!1,P=null,I=null,z=null,F=null,k=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:be,bindFramebuffer:Fe,drawBuffers:Se,useProgram:Qe,setBlending:et,setMaterial:gt,setFlipSided:ze,setCullFace:Mt,setLineWidth:Pt,setPolygonOffset:xt,setScissorTest:ct,activeTexture:wt,bindTexture:O,unbindTexture:We,compressedTexImage2D:ft,compressedTexImage3D:w,texImage2D:te,texImage3D:re,pixelStorei:De,getParameter:he,updateUBOMapping:Ie,uniformBlockBinding:Be,texStorage2D:ce,texStorage3D:fe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:W,compressedTexSubImage3D:ee,scissor:pe,viewport:ue,reset:Xe}}function xy(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,h=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,S){return g?new OffscreenCanvas(w,S):ha("canvas")}function p(w,S,G){let W=1;const ee=ft(w);if((ee.width>G||ee.height>G)&&(W=G/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor(W*ee.width),fe=Math.floor(W*ee.height);d===void 0&&(d=_(ce,fe));const te=S?_(ce,fe):d;return te.width=ce,te.height=fe,te.getContext("2d").drawImage(w,0,0,ce,fe),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ce+"x"+fe+")."),te}else return"data"in w&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,S,G,W,ee,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe;W&&(fe=e.get("EXT_texture_norm16"),fe||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===i.RED&&(G===i.FLOAT&&(te=i.R32F),G===i.HALF_FLOAT&&(te=i.R16F),G===i.UNSIGNED_BYTE&&(te=i.R8),G===i.UNSIGNED_SHORT&&fe&&(te=fe.R16_EXT),G===i.SHORT&&fe&&(te=fe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.R8UI),G===i.UNSIGNED_SHORT&&(te=i.R16UI),G===i.UNSIGNED_INT&&(te=i.R32UI),G===i.BYTE&&(te=i.R8I),G===i.SHORT&&(te=i.R16I),G===i.INT&&(te=i.R32I)),S===i.RG&&(G===i.FLOAT&&(te=i.RG32F),G===i.HALF_FLOAT&&(te=i.RG16F),G===i.UNSIGNED_BYTE&&(te=i.RG8),G===i.UNSIGNED_SHORT&&fe&&(te=fe.RG16_EXT),G===i.SHORT&&fe&&(te=fe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RG8UI),G===i.UNSIGNED_SHORT&&(te=i.RG16UI),G===i.UNSIGNED_INT&&(te=i.RG32UI),G===i.BYTE&&(te=i.RG8I),G===i.SHORT&&(te=i.RG16I),G===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGB8UI),G===i.UNSIGNED_SHORT&&(te=i.RGB16UI),G===i.UNSIGNED_INT&&(te=i.RGB32UI),G===i.BYTE&&(te=i.RGB8I),G===i.SHORT&&(te=i.RGB16I),G===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),G===i.UNSIGNED_INT&&(te=i.RGBA32UI),G===i.BYTE&&(te=i.RGBA8I),G===i.SHORT&&(te=i.RGBA16I),G===i.INT&&(te=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_SHORT&&fe&&(te=fe.RGB16_EXT),G===i.SHORT&&fe&&(te=fe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),S===i.RGBA){const re=ce?Io:rt.getTransfer(ee);G===i.FLOAT&&(te=i.RGBA32F),G===i.HALF_FLOAT&&(te=i.RGBA16F),G===i.UNSIGNED_BYTE&&(te=re===vt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&fe&&(te=fe.RGBA16_EXT),G===i.SHORT&&fe&&(te=fe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(w,S){let G;return w?S===null||S===Ei||S===ua?G=i.DEPTH24_STENCIL8:S===gi?G=i.DEPTH32F_STENCIL8:S===ca&&(G=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ei||S===ua?G=i.DEPTH_COMPONENT24:S===gi?G=i.DEPTH_COMPONENT32F:S===ca&&(G=i.DEPTH_COMPONENT16),G}function T(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&h.delete(S)}function v(w){const S=w.target;S.removeEventListener("dispose",v),P(S)}function b(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,W=f.get(G);if(W){const ee=W[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(w),Object.keys(W).length===0&&f.delete(G)}n.remove(w)}function D(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const G=w.source,W=f.get(G);delete W[S.__cacheKey],a.memory.textures--}function P(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(S.__webglFramebuffer[W]))for(let ee=0;ee<S.__webglFramebuffer[W].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[W][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[W]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[W])}else{if(Array.isArray(S.__webglFramebuffer))for(let W=0;W<S.__webglFramebuffer.length;W++)i.deleteFramebuffer(S.__webglFramebuffer[W]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let W=0;W<S.__webglColorRenderbuffer.length;W++)S.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[W]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let W=0,ee=G.length;W<ee;W++){const ce=n.get(G[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(G[W])}n.remove(w)}let I=0;function z(){I=0}function F(){return I}function k(w){I=w}function K(){const w=I;return w>=r.maxTextures&&He("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function H(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function ne(w,S){const G=n.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){const W=w.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{be(G,w,S);return}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function V(w,S){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){be(G,w,S);return}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function $(w,S){const G=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){be(G,w,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function j(w,S){const G=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&G.__version!==w.version){Fe(G,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const Ee={[Rc]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Cc]:i.MIRRORED_REPEAT},ve={[en]:i.NEAREST,[T_]:i.NEAREST_MIPMAP_NEAREST,[Ua]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[gl]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},Ge={[C_]:i.NEVER,[U_]:i.ALWAYS,[P_]:i.LESS,[Gu]:i.LEQUAL,[L_]:i.EQUAL,[Hu]:i.GEQUAL,[D_]:i.GREATER,[I_]:i.NOTEQUAL};function Ne(w,S){if(S.type===gi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===gl||S.magFilter===Ua||S.magFilter===Mr||S.minFilter===ln||S.minFilter===gl||S.minFilter===Ua||S.minFilter===Mr)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ee[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ee[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ee[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ve[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===en||S.minFilter!==Ua&&S.minFilter!==Mr||S.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const W=S.source;let ee=f.get(W);ee===void 0&&(ee={},f.set(W,ee));const ce=H(S);if(ce!==w.__cacheKey){ee[ce]===void 0&&(ee[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[ce].usedTimes++;const fe=ee[w.__cacheKey];fe!==void 0&&(ee[w.__cacheKey].usedTimes--,fe.usedTimes===0&&D(S)),w.__cacheKey=ce,w.__webglTexture=ee[ce].texture}return G}function J(w,S,G){return Math.floor(Math.floor(w/G)/S)}function se(w,S,G,W){const ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,W,S.data);else{ce.sort((De,pe)=>De.start-pe.start);let fe=0;for(let De=1;De<ce.length;De++){const pe=ce[fe],ue=ce[De],Ie=pe.start+pe.count,Be=J(ue.start,S.width,4),Xe=J(pe.start,S.width,4);ue.start<=Ie+1&&Be===Xe&&J(ue.start+ue.count-1,S.width,4)===Be?pe.count=Math.max(pe.count,ue.start+ue.count-pe.start):(++fe,ce[fe]=ue)}ce.length=fe+1;const te=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),he=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let De=0,pe=ce.length;De<pe;De++){const ue=ce[De],Ie=Math.floor(ue.start/4),Be=Math.ceil(ue.count/4),Xe=Ie%S.width,U=Math.floor(Ie/S.width),de=Be,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Xe,U,de,ie,G,W,S.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,he)}}function be(w,S,G){let W=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=i.TEXTURE_3D);const ee=Ve(w,S),ce=S.source;t.bindTexture(W,w.__webglTexture,i.TEXTURE0+G);const fe=n.get(ce);if(ce.version!==fe.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=rt.getPrimaries(rt.workingColorSpace),le=S.colorSpace===Qi?null:rt.getPrimaries(S.colorSpace),xe=S.colorSpace===Qi||ie===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=p(S.image,!1,r.maxTextureSize);re=We(S,re);const he=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let pe=x(S.internalFormat,he,De,S.normalized,S.colorSpace,S.isVideoTexture);Ne(W,S);let ue;const Ie=S.mipmaps,Be=S.isVideoTexture!==!0,Xe=fe.__version===void 0||ee===!0,U=ce.dataReady,de=T(S,re);if(S.isDepthTexture)pe=M(S.format===yr,S.type),Xe&&(Be?t.texStorage2D(i.TEXTURE_2D,1,pe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,pe,re.width,re.height,0,he,De,null));else if(S.isDataTexture)if(Ie.length>0){Be&&Xe&&t.texStorage2D(i.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ie=0,le=Ie.length;ie<le;ie++)ue=Ie[ie],Be?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(i.TEXTURE_2D,ie,pe,ue.width,ue.height,0,he,De,ue.data);S.generateMipmaps=!1}else Be?(Xe&&t.texStorage2D(i.TEXTURE_2D,de,pe,re.width,re.height),U&&se(S,re,he,De)):t.texImage2D(i.TEXTURE_2D,0,pe,re.width,re.height,0,he,De,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,pe,Ie[0].width,Ie[0].height,re.depth);for(let ie=0,le=Ie.length;ie<le;ie++)if(ue=Ie[ie],S.format!==ni)if(he!==null)if(Be){if(U)if(S.layerUpdates.size>0){const xe=rh(ue.width,ue.height,S.format,S.type);for(const ae of S.layerUpdates){const Le=ue.data.subarray(ae*xe/ue.data.BYTES_PER_ELEMENT,(ae+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ae,ue.width,ue.height,1,he,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,re.depth,he,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,pe,ue.width,ue.height,re.depth,0,ue.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ue.width,ue.height,re.depth,he,De,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,pe,ue.width,ue.height,re.depth,0,he,De,ue.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Be&&Xe&&t.texStorage2D(i.TEXTURE_2D,de,pe,Ie[0].width,Ie[0].height);for(let ie=0,le=Ie.length;ie<le;ie++)ue=Ie[ie],S.format!==ni?he!==null?Be?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,pe,ue.width,ue.height,0,ue.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(i.TEXTURE_2D,ie,pe,ue.width,ue.height,0,he,De,ue.data)}else if(S.isDataArrayTexture)if(Be){if(Xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,pe,re.width,re.height,re.depth),U)if(S.layerUpdates.size>0){const ie=rh(re.width,re.height,S.format,S.type);for(const le of S.layerUpdates){const xe=re.data.subarray(le*ie/re.data.BYTES_PER_ELEMENT,(le+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,re.width,re.height,1,he,De,xe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,De,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,re.width,re.height,re.depth,0,he,De,re.data);else if(S.isData3DTexture)Be?(Xe&&t.texStorage3D(i.TEXTURE_3D,de,pe,re.width,re.height,re.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,De,re.data)):t.texImage3D(i.TEXTURE_3D,0,pe,re.width,re.height,re.depth,0,he,De,re.data);else if(S.isFramebufferTexture){if(Xe)if(Be)t.texStorage2D(i.TEXTURE_2D,de,pe,re.width,re.height);else{let ie=re.width,le=re.height;for(let xe=0;xe<de;xe++)t.texImage2D(i.TEXTURE_2D,xe,pe,ie,le,0,he,De,null),ie>>=1,le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),h.add(S),ie.onpaint=le=>{const xe=le.changedElements;for(const ae of h)xe.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const xe=i.RGBA,ae=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ae,Le,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Be&&Xe){const ie=ft(Ie[0]);t.texStorage2D(i.TEXTURE_2D,de,pe,ie.width,ie.height)}for(let ie=0,le=Ie.length;ie<le;ie++)ue=Ie[ie],Be?U&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,he,De,ue):t.texImage2D(i.TEXTURE_2D,ie,pe,he,De,ue);S.generateMipmaps=!1}else if(Be){if(Xe){const ie=ft(re);t.texStorage2D(i.TEXTURE_2D,de,pe,ie.width,ie.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,De,re)}else t.texImage2D(i.TEXTURE_2D,0,pe,he,De,re);m(S)&&E(W),fe.__version=ce.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Fe(w,S,G){if(S.image.length!==6)return;const W=Ve(w,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+G);const ce=n.get(ee);if(ee.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+G);const fe=rt.getPrimaries(rt.workingColorSpace),te=S.colorSpace===Qi?null:rt.getPrimaries(S.colorSpace),re=S.colorSpace===Qi||fe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let ae=0;ae<6;ae++)!he&&!De?pe[ae]=p(S.image[ae],!0,r.maxCubemapSize):pe[ae]=De?S.image[ae].image:S.image[ae],pe[ae]=We(S,pe[ae]);const ue=pe[0],Ie=s.convert(S.format,S.colorSpace),Be=s.convert(S.type),Xe=x(S.internalFormat,Ie,Be,S.normalized,S.colorSpace),U=S.isVideoTexture!==!0,de=ce.__version===void 0||W===!0,ie=ee.dataReady;let le=T(S,ue);Ne(i.TEXTURE_CUBE_MAP,S);let xe;if(he){U&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Xe,ue.width,ue.height);for(let ae=0;ae<6;ae++){xe=pe[ae].mipmaps;for(let Le=0;Le<xe.length;Le++){const Te=xe[Le];S.format!==ni?Ie!==null?U?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Xe,Te.width,Te.height,0,Te.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,0,0,Te.width,Te.height,Ie,Be,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le,Xe,Te.width,Te.height,0,Ie,Be,Te.data)}}}else{if(xe=S.mipmaps,U&&de){xe.length>0&&le++;const ae=ft(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(De){U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,pe[ae].width,pe[ae].height,Ie,Be,pe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,pe[ae].width,pe[ae].height,0,Ie,Be,pe[ae].data);for(let Le=0;Le<xe.length;Le++){const it=xe[Le].image[ae].image;U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,it.width,it.height,Ie,Be,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Xe,it.width,it.height,0,Ie,Be,it.data)}}else{U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,Be,pe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,Ie,Be,pe[ae]);for(let Le=0;Le<xe.length;Le++){const Te=xe[Le];U?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,0,0,Ie,Be,Te.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Le+1,Xe,Ie,Be,Te.image[ae])}}}m(S)&&E(i.TEXTURE_CUBE_MAP),ce.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,G,W,ee,ce){const fe=s.convert(G.format,G.colorSpace),te=s.convert(G.type),re=x(G.internalFormat,fe,te,G.normalized,G.colorSpace),he=n.get(S),De=n.get(G);if(De.__renderTarget=S,!he.__hasExternalTextures){const pe=Math.max(1,S.width>>ce),ue=Math.max(1,S.height>>ce);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ce,re,pe,ue,S.depth,0,fe,te,null):t.texImage2D(ee,ce,re,pe,ue,0,fe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,ee,De.__webglTexture,0,ct(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,ee,De.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(w,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const W=S.depthTexture,ee=W&&W.isDepthTexture?W.type:null,ce=M(S.stencilBuffer,ee),fe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(S),ce,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(S),ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,w)}else{const W=S.textures;for(let ee=0;ee<W.length;ee++){const ce=W[ee],fe=s.convert(ce.format,ce.colorSpace),te=s.convert(ce.type),re=x(ce.internalFormat,fe,te,ce.normalized,ce.colorSpace);wt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(S),re,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(w,S,G){const W=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(S.depthTexture);if(ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,S.depthTexture);const he=s.convert(S.depthTexture.format),De=s.convert(S.depthTexture.type);let pe;S.depthTexture.format===zi?pe=i.DEPTH_COMPONENT24:S.depthTexture.format===yr&&(pe=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,pe,S.width,S.height,0,he,De,null)}}else ne(S.depthTexture,0);const ce=ee.__webglTexture,fe=ct(S),te=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,re=S.depthTexture.format===yr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===zi)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,ce,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,ce,0);else if(S.depthTexture.format===yr)wt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,ce,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,re,te,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),W){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=W}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let W=0;W<6;W++)Ot(S.__webglFramebuffer[W],w,W);else{const W=w.texture.mipmaps;W&&W.length>0?Ot(S.__webglFramebuffer[0],w,0):Ot(S.__webglFramebuffer,w,0)}else if(G){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]===void 0)S.__webglDepthbuffer[W]=i.createRenderbuffer(),Qe(S.__webglDepthbuffer[W],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Qe(S.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(w,S,G){const W=n.get(w);S!==void 0&&Se(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ze(w)}function gt(w){const S=w.texture,G=n.get(w),W=n.get(S);w.addEventListener("dispose",v);const ee=w.textures,ce=w.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=S.version,a.memory.textures++),ce){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let re=0;re<S.mipmaps.length;re++)G.__webglFramebuffer[te][re]=i.createFramebuffer()}else G.__webglFramebuffer[te]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)G.__webglFramebuffer[te]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(fe)for(let te=0,re=ee.length;te<re;te++){const he=n.get(ee[te]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&wt(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const re=ee[te];G.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[te]);const he=s.convert(re.format,re.colorSpace),De=s.convert(re.type),pe=x(re.internalFormat,he,De,re.normalized,re.colorSpace,w.isXRRenderTarget===!0),ue=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,pe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,G.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Se(G.__webglFramebuffer[te][re],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else Se(G.__webglFramebuffer[te],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(S)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let te=0,re=ee.length;te<re;te++){const he=ee[te],De=n.get(he);let pe=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,De.__webglTexture),Ne(pe,he),Se(G.__webglFramebuffer,w,he,i.COLOR_ATTACHMENT0+te,pe,0),m(he)&&E(pe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(te=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,W.__webglTexture),Ne(te,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)Se(G.__webglFramebuffer[re],w,S,i.COLOR_ATTACHMENT0,te,re);else Se(G.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,te,0);m(S)&&E(te),t.unbindTexture()}w.depthBuffer&&Ze(w)}function ze(w){const S=w.textures;for(let G=0,W=S.length;G<W;G++){const ee=S[G];if(m(ee)){const ce=R(w),fe=n.get(ee).__webglTexture;t.bindTexture(ce,fe),E(ce),t.unbindTexture()}}}const Mt=[],Pt=[];function xt(w){if(w.samples>0){if(wt(w)===!1){const S=w.textures,G=w.width,W=w.height;let ee=i.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(w),te=S.length>1;if(te)for(let he=0;he<S.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const re=w.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<S.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const De=n.get(S[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,G,W,0,0,G,W,ee,i.NEAREST),l===!0&&(Mt.length=0,Pt.length=0,Mt.push(i.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Mt.push(ce),Pt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let he=0;he<S.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const De=n.get(S[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ct(w){return Math.min(r.maxSamples,w.samples)}function wt(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function We(w,S){const G=w.colorSpace,W=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Do&&G!==Qi&&(rt.getTransfer(G)===vt?(W!==ni||ee!==Dn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),S}function ft(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=et,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vy(i,e){function t(n,r=Qi){let s;const a=rt.getTransfer(r);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===rp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tp)return i.BYTE;if(n===np)return i.SHORT;if(n===ca)return i.UNSIGNED_SHORT;if(n===Fu)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===sp)return i.ALPHA;if(n===ap)return i.RGB;if(n===ni)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===op)return i.RED;if(n===ku)return i.RED_INTEGER;if(n===Dr)return i.RG;if(n===zu)return i.RG_INTEGER;if(n===Vu)return i.RGBA_INTEGER;if(n===co||n===uo||n===ho||n===fo)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Lc||n===Dc||n===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===Po||n===kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uc||n===Nc)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oc)return s.COMPRESSED_R11_EAC;if(n===Bc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return s.COMPRESSED_RG11_EAC;if(n===kc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Kc||n===Zc||n===Jc||n===Qc||n===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===zc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eu||n===tu||n===nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===eu)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===ru||n===Lo||n===su)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===iu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ua?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`;class yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:Sy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ey extends Br{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new yy,m={},E=t.getContextAttributes();let R=null,x=null;const M=[],T=[],A=new ot;let v=null,b=null;const D=new ei;D.viewport=new Ut;const P=new ei;P.viewport=new Ut;const I=[D,P],z=new Cg;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=M[J];return se===void 0&&(se=new wl,M[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=M[J];return se===void 0&&(se=new wl,M[J]=se),se.getGripSpace()},this.getHand=function(J){let se=M[J];return se===void 0&&(se=new wl,M[J]=se),se.getHandSpace()};function K(J){const se=T.indexOf(J.inputSource);if(se===-1)return;const be=M[se];be!==void 0&&(be.update(J.inputSource,J.frame,c||a),be.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",ne);for(let J=0;J<M.length;J++){const se=T[J];se!==null&&(T[J]=null,M[J].disconnect(se))}F=null,k=null,p.reset();for(const J in m)delete m[J];if(e.setRenderTarget(R),f=null,d=null,h=null,r=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),b!==null){const J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",H),r.addEventListener("inputsourceschange",ne),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=E.stencil?yr:zi,Fe=E.stencil?ua:Ei);const Qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new si(d.textureWidth,d.textureHeight,{format:ni,type:Dn,depthTexture:new fa(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new si(f.framebufferWidth,f.framebufferHeight,{format:ni,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(J){for(let se=0;se<J.removed.length;se++){const be=J.removed[se],Fe=T.indexOf(be);Fe>=0&&(T[Fe]=null,M[Fe].disconnect(be))}for(let se=0;se<J.added.length;se++){const be=J.added[se];let Fe=T.indexOf(be);if(Fe===-1){for(let Qe=0;Qe<M.length;Qe++)if(Qe>=T.length){T.push(be),Fe=Qe;break}else if(T[Qe]===null){T[Qe]=be,Fe=Qe;break}if(Fe===-1)break}const Se=M[Fe];Se&&Se.connect(be)}}const V=new X,$=new X;function j(J,se,be){V.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(be.matrixWorld);const Fe=V.distanceTo($),Se=se.projectionMatrix.elements,Qe=be.projectionMatrix.elements,Ot=Se[14]/(Se[10]-1),Ze=Se[14]/(Se[10]+1),et=(Se[9]+1)/Se[5],gt=(Se[9]-1)/Se[5],ze=(Se[8]-1)/Se[0],Mt=(Qe[8]+1)/Qe[0],Pt=Ot*ze,xt=Ot*Mt,ct=Fe/(-ze+Mt),wt=ct*-ze;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(wt),J.translateZ(ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const O=Ot+ct,We=Ze+ct,ft=Pt-wt,w=xt+(Fe-wt),S=et*Ze/We*O,G=gt*Ze/We*O;J.projectionMatrix.makePerspective(ft,w,S,G,O,We),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let se=J.near,be=J.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(be=p.depthFar)),z.near=P.near=D.near=se,z.far=P.far=D.far=be,(F!==z.near||k!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,k=z.far),z.layers.mask=J.layers.mask|6,D.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Fe=J.parent,Se=z.cameras;Ee(z,Fe);for(let Qe=0;Qe<Se.length;Qe++)Ee(Se[Qe],Fe);Se.length===2?j(z,D,P):z.projectionMatrix.copy(D.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),ve(J,z,Fe)};function ve(J,se,be){be===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=au*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let Ge=null;function Ne(J,se){if(u=se.getViewerPose(c||a),g=se,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Fe=!1;be.length!==z.cameras.length&&(z.cameras.length=0,Fe=!0);for(let Ze=0;Ze<be.length;Ze++){const et=be[Ze];let gt=null;if(f!==null)gt=f.getViewport(et);else{const Mt=h.getViewSubImage(d,et);gt=Mt.viewport,Ze===0&&(e.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(x))}let ze=I[Ze];ze===void 0&&(ze=new ei,ze.layers.enable(Ze),ze.viewport=new Ut,I[Ze]=ze),ze.matrix.fromArray(et.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(et.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(gt.x,gt.y,gt.width,gt.height),Ze===0&&(z.matrix.copy(ze.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Fe===!0&&z.cameras.push(ze)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Ze=h.getDepthInformation(be[0]);Ze&&Ze.isValid&&Ze.texture&&p.init(Ze,r.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Ze=0;Ze<be.length;Ze++){const et=be[Ze].camera;if(et){let gt=m[et];gt||(gt=new mp,m[et]=gt);const ze=h.getCameraImage(et);gt.sourceTexture=ze}}}}for(let be=0;be<M.length;be++){const Fe=T[be],Se=M[be];Fe!==null&&Se!==void 0&&Se.update(Fe,se,c||a)}Ge&&Ge(J,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const Ve=new vp;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(J){Ge=J},this.dispose=function(){}}}const by=new Ct,wp=new $e;wp.set(-1,0,0,0,1,0,0,0,1);function Ty(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_p(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,E,R,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,E,R):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===bn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===bn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),R=E.envMap,x=E.envMapRotation;R&&(p.envMap.value=R,p.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(wp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,E,R){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=R*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function wy(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const T=M.program;n.uniformBlockBinding(x,T)}function c(x,M){let T=r[x.id];T===void 0&&(p(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",E));const A=M.program;n.updateUBOMapping(x,A);const v=e.render.frame;s[x.id]!==v&&(d(x),s[x.id]=v)}function u(x){const M=h();x.__bindingPointIndex=M;const T=i.createBuffer(),A=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],T=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,b=T.length;v<b;v++){const D=T[v];if(Array.isArray(D))for(let P=0,I=D.length;P<I;P++)f(D[P],v,P,A);else f(D,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,M,T,A){if(_(x,M,T,A)===!0){const v=x.__offset,b=x.value;if(Array.isArray(b)){let D=0;for(let P=0;P<b.length;P++){const I=b[P],z=m(I);g(I,x.__data,D),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(D+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function g(x,M,T){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,T)}function _(x,M,T,A){const v=x.value,b=M+"_"+T;if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{const D=A[b];if(typeof v=="number"||typeof v=="boolean"){if(D!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(D.equals(v)===!1)return D.copy(v),!0}}return!1}function p(x){const M=x.uniforms;let T=0;const A=16;for(let b=0,D=M.length;b<D;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let I=0,z=P.length;I<z;I++){const F=P[I],k=Array.isArray(F.value)?F.value:[F.value];for(let K=0,H=k.length;K<H;K++){const ne=k[K],V=m(ne),$=T%A,j=$%V.boundary,Ee=$+j;T+=j,Ee!==0&&A-Ee<V.storage&&(T+=A-Ee),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=V.storage}}}const v=T%A;return v>0&&(T+=A-v),x.__size=T,x.__cache={},this}function m(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):He("WebGLRenderer: Unsupported uniform value type.",x),M}function E(x){const M=x.target;M.removeEventListener("dispose",E);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function R(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:R}}const Ay=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function Ry(){return di===null&&(di=new lg(Ay,16,16,Dr,bi),di.name="DFG_LUT",di.minFilter=ln,di.magFilter=ln,di.wrapS=Ni,di.wrapT=Ni,di.generateMipmaps=!1,di.needsUpdate=!0),di}class Cy{constructor(e={}){const{canvas:t=O_(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Dn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([Vu,zu,ku]),m=new Set([Dn,Ei,ca,ua,Ou,Bu]),E=new Uint32Array(4),R=new Int32Array(4),x=new X;let M=null,T=null;const A=[],v=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1,I=null,z=null,F=null,k=null;this._outputColorSpace=Zt;let K=0,H=0,ne=null,V=-1,$=null;const j=new Ut,Ee=new Ut;let ve=null;const Ge=new ht(0);let Ne=0,Ve=t.width,J=t.height,se=1,be=null,Fe=null;const Se=new Ut(0,0,Ve,J),Qe=new Ut(0,0,Ve,J);let Ot=!1;const Ze=new Yu;let et=!1,gt=!1;const ze=new Ct,Mt=new X,Pt=new Ut,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function wt(){return ne===null?se:1}let O=n;function We(y,B){return t.getContext(y,B)}let ft,w,S,G,W,ee,ce,fe,te,re,he,De,pe,ue,Ie,Be,Xe,U,de,ie,le,xe,ae;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",_n,!1),O===null){const B="webgl2";if(O=We(B,y),O===null)throw We(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(y){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),dt("WebGLRenderer: "+y.message),y}function Le(){ft=new RS(O),ft.init(),le=new vy(O,ft),w=new xS(O,ft,e,le),S=new gy(O,ft),w.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),z=O.createFramebuffer(),F=O.createFramebuffer(),k=O.createFramebuffer(),G=new LS(O),W=new iy,ee=new xy(O,ft,S,W,w,le,G),ce=new AS(D),fe=new Ig(O),xe=new _S(O,fe),te=new CS(O,fe,G,xe),re=new IS(O,te,fe,xe,G),U=new DS(O,w,ee),Ie=new vS(W),he=new ny(D,ce,ft,w,xe,Ie),De=new Ty(D,W),pe=new sy,ue=new dy(ft),Xe=new mS(D,ce,S,re,g,l),Be=new _y(D,re,w),ae=new wy(O,G,w,S),de=new gS(O,ft,G),ie=new PS(O,ft,G),G.programs=he.programs,D.capabilities=w,D.extensions=ft,D.properties=W,D.renderLists=pe,D.shadowMap=Be,D.state=S,D.info=G}_!==Dn&&(b=new NS(_,t.width,t.height,o,r,s));const Te=new Ey(D,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const y=ft.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ft.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(y){y!==void 0&&(se=y,this.setSize(Ve,J,!1))},this.getSize=function(y){return y.set(Ve,J)},this.setSize=function(y,B,Z=!0){if(Te.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=y,J=B,t.width=Math.floor(y*se),t.height=Math.floor(B*se),Z===!0&&(t.style.width=y+"px",t.style.height=B+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,y,B)},this.getDrawingBufferSize=function(y){return y.set(Ve*se,J*se).floor()},this.setDrawingBufferSize=function(y,B,Z){Ve=y,J=B,se=Z,t.width=Math.floor(y*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,y,B)},this.setEffects=function(y){if(_===Dn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let B=0;B<y.length;B++)if(y[B].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(j)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,B,Z,q){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,B,Z,q),S.viewport(j.copy(Se).multiplyScalar(se).round())},this.getScissor=function(y){return y.copy(Qe)},this.setScissor=function(y,B,Z,q){y.isVector4?Qe.set(y.x,y.y,y.z,y.w):Qe.set(y,B,Z,q),S.scissor(Ee.copy(Qe).multiplyScalar(se).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(y){S.setScissorTest(Ot=y)},this.setOpaqueSort=function(y){be=y},this.setTransparentSort=function(y){Fe=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(y=!0,B=!0,Z=!0){let q=0;if(y){let Y=!1;if(ne!==null){const _e=ne.texture.format;Y=p.has(_e)}if(Y){const _e=ne.texture.type,we=m.has(_e),me=Xe.getClearColor(),Re=Xe.getClearAlpha(),Pe=me.r,qe=me.g,Ke=me.b;we?(E[0]=Pe,E[1]=qe,E[2]=Ke,E[3]=Re,O.clearBufferuiv(O.COLOR,0,E)):(R[0]=Pe,R[1]=qe,R[2]=Ke,R[3]=Re,O.clearBufferiv(O.COLOR,0,R))}else q|=O.COLOR_BUFFER_BIT}B&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),I=y},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Xe.dispose(),pe.dispose(),ue.dispose(),W.dispose(),ce.dispose(),re.dispose(),xe.dispose(),ae.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Ps),Te.removeEventListener("sessionend",Ls),wi.stop()};function it(y){y.preventDefault(),Dd("WebGLRenderer: Context Lost."),P=!0}function lt(){Dd("WebGLRenderer: Context Restored."),P=!1;const y=G.autoReset,B=Be.enabled,Z=Be.autoUpdate,q=Be.needsUpdate,Y=Be.type;Le(),G.autoReset=y,Be.enabled=B,Be.autoUpdate=Z,Be.needsUpdate=q,Be.type=Y}function _n(y){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bn(y){const B=y.target;B.removeEventListener("dispose",Bn),Vr(B)}function Vr(y){gn(y),W.remove(y)}function gn(y){const B=W.get(y).programs;B!==void 0&&(B.forEach(function(Z){he.releaseProgram(Z)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,B,Z,q,Y,_e){B===null&&(B=xt);const we=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,me=Hr(y,B,Z,q,Y);S.setMaterial(q,we);let Re=Z.index,Pe=1;if(q.wireframe===!0){if(Re=te.getWireframeAttribute(Z),Re===void 0)return;Pe=2}const qe=Z.drawRange,Ke=Z.attributes.position;let Ae=qe.start*Pe,ut=(qe.start+qe.count)*Pe;_e!==null&&(Ae=Math.max(Ae,_e.start*Pe),ut=Math.min(ut,(_e.start+_e.count)*Pe)),Re!==null?(Ae=Math.max(Ae,0),ut=Math.min(ut,Re.count)):Ke!=null&&(Ae=Math.max(Ae,0),ut=Math.min(ut,Ke.count));const St=ut-Ae;if(St<0||St===1/0)return;xe.setup(Y,q,me,Z,Re);let yt,_t=de;if(Re!==null&&(yt=fe.get(Re),_t=ie,_t.setIndex(yt)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*wt()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if(Y.isLine){let $t=q.linewidth;$t===void 0&&($t=1),S.setLineWidth($t*wt()),Y.isLineSegments?_t.setMode(O.LINES):Y.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else Y.isPoints?_t.setMode(O.POINTS):Y.isSprite&&_t.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))_t.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $t=Y._multiDrawStarts,Me=Y._multiDrawCounts,jt=Y._multiDrawCount,tt=Re?fe.get(Re).bytesPerElement:1,xn=W.get(q).currentProgram.getUniforms();for(let wn=0;wn<jt;wn++)xn.setValue(O,"_gl_DrawID",wn),_t.render($t[wn]/tt,Me[wn])}else if(Y.isInstancedMesh)_t.renderInstances(Ae,St,Y.count);else if(Z.isInstancedBufferGeometry){const $t=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Me=Math.min(Z.instanceCount,$t);_t.renderInstances(Ae,St,Me)}else _t.render(Ae,St)};function Gi(y,B,Z,q){I!==null&&y.isNodeMaterial&&I.setObject(q,y),et===!0&&Ie.setState(y,Z,!1),y.transparent===!0&&y.side===mi&&y.forceSinglePass===!1?(y.side=bn,y.needsUpdate=!0,At(y,B,q),y.side=Pr,y.needsUpdate=!0,At(y,B,q),y.side=mi):At(y,B,q)}this.compile=function(y,B,Z=null){Z===null&&(Z=y),I!==null&&I.renderStart(y,B,Z),T=ue.get(Z),T.init(B),v.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),y!==Z&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),gt=this.localClippingEnabled,et=Ie.init(this.clippingPlanes,gt),et===!0&&Ie.setGlobalState(this.clippingPlanes,B),I!==null&&Be.render(T.state.shadowsArray,Z,B);const q=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _e=Y.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){const me=_e[we];Gi(me,Z,B,Y),q.add(me)}else Gi(_e,Z,B,Y),q.add(_e)}),T=v.pop(),I!==null&&I.renderEnd(),q},this.compileAsync=function(y,B,Z=null){const q=this.compile(y,B,Z);return new Promise(Y=>{function _e(){if(q.forEach(function(we){const Re=W.get(we).currentProgram;(Re===void 0||Re.isReady())&&q.delete(we)}),q.size===0){Y(y);return}setTimeout(_e,10)}ft.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Qt=null;function Hi(y){Qt&&Qt(y)}function Ps(){wi.stop()}function Ls(){wi.start()}const wi=new vp;wi.setAnimationLoop(Hi),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(y){Qt=y,Te.setAnimationLoop(y),y===null?wi.stop():wi.start()},Te.addEventListener("sessionstart",Ps),Te.addEventListener("sessionend",Ls),this.render=function(y,B){if(B!==void 0&&B.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(y,B);const Z=Te.enabled===!0&&Te.isPresenting===!0,q=b!==null&&(ne===null||Z)&&b.begin(D,ne);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(B),B=Te.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,B,ne),T=ue.get(y,v.length),T.init(B),T.state.textureUnits=ee.getTextureUnits(),v.push(T),ze.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ze.setFromProjectionMatrix(ze,xi,B.reversedDepth),gt=this.localClippingEnabled,et=Ie.init(this.clippingPlanes,gt),M=pe.get(y,A.length),M.init(),A.push(M),Te.enabled===!0&&Te.isPresenting===!0){const we=D.xr.getDepthSensingMesh();we!==null&&Wi(we,B,-1/0,D.sortObjects)}Wi(y,B,0,D.sortObjects),M.finish(),I!==null&&I.updateLights(T.state.lightsArray),D.sortObjects===!0&&M.sort(be,Fe),ct=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,ct&&Xe.addToRenderList(M,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&Ie.beginShadows();const Y=T.state.shadowsArray;if(Be.render(Y,y,B),et===!0&&Ie.endShadows(),(q&&b.hasRenderPass())===!1){const we=M.opaque,me=M.transmissive;if(T.setupLights(),B.isArrayCamera){const Re=B.cameras;if(me.length>0)for(let Pe=0,qe=Re.length;Pe<qe;Pe++){const Ke=Re[Pe];oi(we,me,y,Ke)}ct&&Xe.render(y);for(let Pe=0,qe=Re.length;Pe<qe;Pe++){const Ke=Re[Pe];lr(M,y,Ke,Ke.viewport)}}else me.length>0&&oi(we,me,y,B),ct&&Xe.render(y),lr(M,y,B)}ne!==null&&H===0&&(ee.updateMultisampleRenderTarget(ne),ee.updateRenderTargetMipmap(ne)),q&&b.end(D),y.isScene===!0&&y.onAfterRender(D,y,B),xe.resetDefaultState(),V=-1,$=null,v.pop(),v.length>0?(T=v[v.length-1],ee.setTextureUnits(T.state.textureUnits),et===!0&&Ie.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,I!==null&&I.renderEnd()};function Wi(y,B,Z,q){if(y.visible===!1)return;if(y.layers.test(B.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(B);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(Ze)){q&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ze);const we=re.update(y),me=y.material;me.visible&&M.push(y,we,me,Z,Pt.z,null,B)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(Ze))){const we=re.update(y),me=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Pt.copy(we.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(ze)),Array.isArray(me)){const Re=we.groups;for(let Pe=0,qe=Re.length;Pe<qe;Pe++){const Ke=Re[Pe],Ae=me[Ke.materialIndex];Ae&&Ae.visible&&M.push(y,we,Ae,Z,Pt.z,Ke,B)}}else me.visible&&M.push(y,we,me,Z,Pt.z,null,B)}}const _e=y.children;for(let we=0,me=_e.length;we<me;we++)Wi(_e[we],B,Z,q)}function lr(y,B,Z,q){const{opaque:Y,transmissive:_e,transparent:we}=y;T.setupLightsView(Z),et===!0&&Ie.setGlobalState(D.clippingPlanes,Z),q&&S.viewport(j.copy(q)),Y.length>0&&kn(Y,B,Z),_e.length>0&&kn(_e,B,Z),we.length>0&&kn(we,B,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function oi(y,B,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const Ae=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new si(1,1,{generateMipmaps:!0,type:Ae?bi:Dn,minFilter:Mr,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const _e=T.state.transmissionRenderTarget[q.id],we=q.viewport||j;_e.setSize(we.z*D.transmissionResolutionScale,we.w*D.transmissionResolutionScale);const me=D.getRenderTarget(),Re=D.getActiveCubeFace(),Pe=D.getActiveMipmapLevel();D.setRenderTarget(_e),D.getClearColor(Ge),Ne=D.getClearAlpha(),Ne<1&&D.setClearColor(16777215,.5),D.clear(),ct&&Xe.render(Z);const qe=D.toneMapping;D.toneMapping=vi;const Ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),et===!0&&Ie.setGlobalState(D.clippingPlanes,q),kn(y,Z,q),ee.updateMultisampleRenderTarget(_e),ee.updateRenderTargetMipmap(_e),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ut=0,St=B.length;ut<St;ut++){const yt=B[ut],{object:_t,geometry:$t,material:Me,group:jt}=yt;if(Me.side===mi&&_t.layers.test(q.layers)){const tt=Me.side;Me.side=bn,Me.needsUpdate=!0,Vt(_t,Z,q,$t,Me,jt),Me.side=tt,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(ee.updateMultisampleRenderTarget(_e),ee.updateRenderTargetMipmap(_e))}D.setRenderTarget(me,Re,Pe),D.setClearColor(Ge,Ne),Ke!==void 0&&(q.viewport=Ke),D.toneMapping=qe}function kn(y,B,Z){const q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,_e=y.length;Y<_e;Y++){const we=y[Y],{object:me,geometry:Re,group:Pe}=we;let qe=we.material;qe.allowOverride===!0&&q!==null&&(qe=q),me.layers.test(Z.layers)&&Vt(me,B,Z,Re,qe,Pe)}}function Vt(y,B,Z,q,Y,_e){I!==null&&Y.isNodeMaterial&&I.setObject(y,Y),y.onBeforeRender(D,B,Z,q,Y,_e),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(D,B,Z,q,y,_e),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=bn,Y.needsUpdate=!0,D.renderBufferDirect(Z,B,q,Y,y,_e),Y.side=Pr,Y.needsUpdate=!0,D.renderBufferDirect(Z,B,q,Y,y,_e),Y.side=mi):D.renderBufferDirect(Z,B,q,Y,y,_e),y.onAfterRender(D,B,Z,q,Y,_e)}function At(y,B,Z){B.isScene!==!0&&(B=xt);const q=W.get(y),Y=T.state.lights,_e=T.state.shadowsArray,we=Y.state.version,me=he.getParameters(y,Y.state,_e,B,Z,T.state.lightProbeGridArray),Re=he.getProgramCacheKey(me);let Pe=q.programs;q.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;const qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;q.envMap=ce.get(y.envMap||q.environment,qe),q.envMapRotation=q.environment!==null&&y.envMap===null?B.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",Bn),Pe=new Map,q.programs=Pe);let Ke=Pe.get(Re);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===we)return Ds(y,me),Ke}else me.uniforms=he.getUniforms(y),I!==null&&y.isNodeMaterial&&I.build(y,Z,me),y.onBeforeCompile(me,D),Ke=he.acquireProgram(me,Re),Pe.set(Re,Ke),q.uniforms=me.uniforms;const Ae=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),Ds(y,me),q.needsLights=zn(y),q.lightsStateVersion=we,q.needsLights&&(Ae.ambientLightColor.value=Y.state.ambient,Ae.lightProbe.value=Y.state.probe,Ae.sunLights.value=Y.state.sun,Ae.sunLightShadows.value=Y.state.sunShadow,Ae.directionalLights.value=Y.state.directional,Ae.directionalLightShadows.value=Y.state.directionalShadow,Ae.spotLights.value=Y.state.spot,Ae.spotLightShadows.value=Y.state.spotShadow,Ae.rectAreaLights.value=Y.state.rectArea,Ae.ltc_1.value=Y.state.rectAreaLTC1,Ae.ltc_2.value=Y.state.rectAreaLTC2,Ae.pointLights.value=Y.state.point,Ae.pointLightShadows.value=Y.state.pointShadow,Ae.hemisphereLights.value=Y.state.hemi,Ae.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ae.sunShadowCascade.value=Y.state.sunShadowCascade,Ae.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ae.spotLightMatrix.value=Y.state.spotLightMatrix,Ae.spotLightMap.value=Y.state.spotLightMap,Ae.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=Ke,q.uniformsList=null,Ke}function Gr(y){if(y.uniformsList===null){const B=y.currentProgram.getUniforms();y.uniformsList=po.seqWithValue(B.seq,y.uniforms)}return y.uniformsList}function Ds(y,B){const Z=W.get(y);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function un(y,B){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Z=0,q=y.length;Z<q;Z++){const Y=y[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function Hr(y,B,Z,q,Y){B.isScene!==!0&&(B=xt),ee.resetTextureUnits();const _e=B.fog,we=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,me=ne===null?D.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:rt.workingColorSpace,Re=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Pe=ce.get(q.envMap||we,Re),qe=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color;let yt=vi;q.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=D.toneMapping);const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$t=_t!==void 0?_t.length:0,Me=W.get(q),jt=T.state.lights;if(et===!0&&(gt===!0||y!==$)){const N=y===$&&q.id===V;Ie.setState(q,y,N)}let tt=!1;q.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==jt.state.version||Me.outputColorSpace!==me||Y.isBatchedMesh&&Me.batching===!1||!Y.isBatchedMesh&&Me.batching===!0||Y.isBatchedMesh&&Me.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Me.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Me.instancing===!1||!Y.isInstancedMesh&&Me.instancing===!0||Y.isSkinnedMesh&&Me.skinning===!1||!Y.isSkinnedMesh&&Me.skinning===!0||Y.isInstancedMesh&&Me.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Me.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Me.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Me.instancingMorph===!1&&Y.morphTexture!==null||Me.envMap!==Pe||q.fog===!0&&Me.fog!==_e||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ie.numPlanes||Me.numIntersection!==Ie.numIntersection)||Me.vertexAlphas!==qe||Me.vertexTangents!==Ke||Me.morphTargets!==Ae||Me.morphNormals!==ut||Me.morphColors!==St||Me.toneMapping!==yt||Me.morphTargetsCount!==$t||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Me.__version=q.version);let xn=Me.currentProgram;tt===!0&&(xn=At(q,B,Y),I&&q.isNodeMaterial&&I.onUpdateProgram(q,xn,Me));let wn=!1,$n=!1,ur=!1;const pt=xn.getUniforms(),C=Me.uniforms;if(S.useProgram(xn.program)&&(wn=!0,$n=!0,ur=!0),q.id!==V&&(V=q.id,$n=!0),Me.needsLights){const N=un(T.state.lightProbeGridArray,Y);Me.lightProbeGrid!==N&&(Me.lightProbeGrid=N,$n=!0)}if(wn||$!==y){S.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(O,"projectionMatrix",y.projectionMatrix),pt.setValue(O,"viewMatrix",y.matrixWorldInverse);const Q=pt.map.cameraPosition;Q!==void 0&&Q.setValue(O,Mt.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&pt.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),$!==y&&($=y,$n=!0,ur=!0)}if(Me.needsLights&&(jt.state.sunShadowMap.length>0&&pt.setValue(O,"sunShadowMap",jt.state.sunShadowMap,ee),jt.state.directionalShadowMap.length>0&&pt.setValue(O,"directionalShadowMap",jt.state.directionalShadowMap,ee),jt.state.spotShadowMap.length>0&&pt.setValue(O,"spotShadowMap",jt.state.spotShadowMap,ee),jt.state.pointShadowMap.length>0&&pt.setValue(O,"pointShadowMap",jt.state.pointShadowMap,ee)),Y.isSkinnedMesh){pt.setOptional(O,Y,"bindMatrix"),pt.setOptional(O,Y,"bindMatrixInverse");const N=Y.skeleton;N&&(N.boneTexture===null&&N.computeBoneTexture(),pt.setValue(O,"boneTexture",N.boneTexture,ee))}Y.isBatchedMesh&&(pt.setOptional(O,Y,"batchingTexture"),pt.setValue(O,"batchingTexture",Y._matricesTexture,ee),pt.setOptional(O,Y,"batchingIdTexture"),pt.setValue(O,"batchingIdTexture",Y._indirectTexture,ee),pt.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(O,"batchingColorTexture",Y._colorsTexture,ee));const L=Z.morphAttributes;if((L.position!==void 0||L.normal!==void 0||L.color!==void 0)&&U.update(Y,Z,xn),($n||Me.receiveShadow!==Y.receiveShadow)&&(Me.receiveShadow=Y.receiveShadow,pt.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(C.envMapIntensity.value=B.environmentIntensity),C.dfgLUT!==void 0&&(C.dfgLUT.value=Ry()),$n){if(pt.setValue(O,"toneMappingExposure",D.toneMappingExposure),Me.needsLights&&dn(C,ur),_e&&q.fog===!0&&De.refreshFogUniforms(C,_e),De.refreshMaterialUniforms(C,q,se,J,T.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.lightProbeGrid){const N=Me.lightProbeGrid;C.probesSH.value=N.texture,C.probesMin.value.copy(N.boundingBox.min),C.probesMax.value.copy(N.boundingBox.max),C.probesResolution.value.copy(N.resolution)}po.upload(O,Gr(Me),C,ee)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(po.upload(O,Gr(Me),C,ee),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(O,"center",Y.center),pt.setValue(O,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(O,"normalMatrix",Y.normalMatrix),pt.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const N=q.uniformsGroups;for(let Q=0,oe=N.length;Q<oe;Q++){const ye=N[Q];ae.update(ye,xn),ae.bind(ye,xn)}}return xn}function dn(y,B){y.ambientLightColor.needsUpdate=B,y.lightProbe.needsUpdate=B,y.sunLights.needsUpdate=B,y.sunLightShadows.needsUpdate=B,y.directionalLights.needsUpdate=B,y.directionalLightShadows.needsUpdate=B,y.pointLights.needsUpdate=B,y.pointLightShadows.needsUpdate=B,y.spotLights.needsUpdate=B,y.spotLightShadows.needsUpdate=B,y.rectAreaLights.needsUpdate=B,y.hemisphereLights.needsUpdate=B}function zn(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(y,B,Z){const q=W.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=B,W.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,B){const Z=W.get(y);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(y,B=0,Z=0){ne=y,K=B,H=Z;let q=null,Y=!1,_e=!1;if(y){const me=W.get(y);if(me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),j.copy(y.viewport),Ee.copy(y.scissor),ve=y.scissorTest,S.viewport(j),S.scissor(Ee),S.setScissorTest(ve),V=-1;return}else if(me.__webglFramebuffer===void 0)ee.setupRenderTarget(y);else if(me.__hasExternalTextures)ee.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);const Pe=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?q=Pe[B][Z]:q=Pe[B],Y=!0):y.samples>0&&ee.useMultisampledRTT(y)===!1?q=W.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[Z]:q=Pe,j.copy(y.viewport),Ee.copy(y.scissor),ve=y.scissorTest}else j.copy(Se).multiplyScalar(se).floor(),Ee.copy(Qe).multiplyScalar(se).floor(),ve=Ot;if(Z!==0&&(q=z),S.bindFramebuffer(O.FRAMEBUFFER,q)&&S.drawBuffers(y,q),S.viewport(j),S.scissor(Ee),S.setScissorTest(ve),Y){const me=W.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,Z)}else if(_e){const me=B;for(let Re=0;Re<y.textures.length;Re++){const Pe=W.get(y.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,Pe.__webglTexture,Z,me)}}else if(y!==null&&Z!==0){const me=W.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,Z)}V=-1};function cr(y){const B=W.get(y);return(B.__readFormat!==y.format||B.__readType!==y.type)&&(B.__readFormat=y.format,B.__readType=y.type,B.__formatReadable=w.textureFormatReadable(y.format),B.__typeReadable=w.textureTypeReadable(y.type)),B}this.readRenderTargetPixels=function(y,B,Z,q,Y,_e,we,me=0){if(!(y&&y.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){S.bindFramebuffer(O.FRAMEBUFFER,Re);try{const Pe=y.textures[me],qe=Pe.format,Ke=Pe.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const Ae=cr(Pe);if(Ae.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=y.width-q&&Z>=0&&Z<=y.height-Y&&O.readPixels(B,Z,q,Y,le.convert(qe),le.convert(Ke),_e)}finally{const Pe=ne!==null?W.get(ne).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,B,Z,q,Y,_e,we,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(B>=0&&B<=y.width-q&&Z>=0&&Z<=y.height-Y){S.bindFramebuffer(O.FRAMEBUFFER,Re);const Pe=y.textures[me],qe=Pe.format,Ke=Pe.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me);const Ae=cr(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,_e.byteLength,O.STREAM_READ),O.readPixels(B,Z,q,Y,le.convert(qe),le.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const St=ne!==null?W.get(ne).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,St);const yt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await B_(O,yt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,_e),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ut),O.deleteSync(yt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,B=null,Z=0){const q=Math.pow(2,-Z),Y=Math.floor(y.image.width*q),_e=Math.floor(y.image.height*q),we=B!==null?B.x:0,me=B!==null?B.y:0;ee.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,we,me,Y,_e),S.unbindTexture()},this.copyTextureToTexture=function(y,B,Z=null,q=null,Y=0,_e=0){let we,me,Re,Pe,qe,Ke,Ae,ut,St;const yt=y.isCompressedTexture?y.mipmaps[_e]:y.image;if(Z!==null)we=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Re=Z.isBox3?Z.max.z-Z.min.z:1,Pe=Z.min.x,qe=Z.min.y,Ke=Z.isBox3?Z.min.z:0;else{const C=Math.pow(2,-Y);we=Math.floor(yt.width*C),me=Math.floor(yt.height*C),y.isDataArrayTexture?Re=yt.depth:y.isData3DTexture?Re=Math.floor(yt.depth*C):Re=1,Pe=0,qe=0,Ke=0}q!==null?(Ae=q.x,ut=q.y,St=q.z):(Ae=0,ut=0,St=0);const _t=le.convert(B.format),$t=le.convert(B.type);let Me;B.isData3DTexture?(ee.setTexture3D(B,0),Me=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ee.setTexture2DArray(B,0),Me=O.TEXTURE_2D_ARRAY):(ee.setTexture2D(B,0),Me=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const jt=S.getParameter(O.UNPACK_ROW_LENGTH),tt=S.getParameter(O.UNPACK_IMAGE_HEIGHT),xn=S.getParameter(O.UNPACK_SKIP_PIXELS),wn=S.getParameter(O.UNPACK_SKIP_ROWS),$n=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,yt.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,yt.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(O.UNPACK_SKIP_ROWS,qe),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);const ur=y.isDataArrayTexture||y.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(y.isDepthTexture){const C=W.get(y),L=W.get(B),N=W.get(C.__renderTarget),Q=W.get(L.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,N.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let oe=0;oe<Re;oe++)ur&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(y).__webglTexture,Y,Ke+oe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,W.get(B).__webglTexture,_e,St+oe)),O.blitFramebuffer(Pe,qe,we,me,Ae,ut,we,me,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||W.has(y)){const C=W.get(y),L=W.get(B);S.bindFramebuffer(O.READ_FRAMEBUFFER,F),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let N=0;N<Re;N++)ur?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,C.__webglTexture,Y,Ke+N):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,C.__webglTexture,Y),pt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,L.__webglTexture,_e,St+N):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,L.__webglTexture,_e),Y!==0?O.blitFramebuffer(Pe,qe,we,me,Ae,ut,we,me,O.COLOR_BUFFER_BIT,O.NEAREST):pt?O.copyTexSubImage3D(Me,_e,Ae,ut,St+N,Pe,qe,we,me):O.copyTexSubImage2D(Me,_e,Ae,ut,Pe,qe,we,me);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else pt?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Me,_e,Ae,ut,St,we,me,Re,_t,$t,yt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,_e,Ae,ut,St,we,me,Re,_t,yt.data):O.texSubImage3D(Me,_e,Ae,ut,St,we,me,Re,_t,$t,yt):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,_e,Ae,ut,we,me,_t,$t,yt.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,_e,Ae,ut,yt.width,yt.height,_t,yt.data):O.texSubImage2D(O.TEXTURE_2D,_e,Ae,ut,we,me,_t,$t,yt);S.pixelStorei(O.UNPACK_ROW_LENGTH,jt),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),S.pixelStorei(O.UNPACK_SKIP_PIXELS,xn),S.pixelStorei(O.UNPACK_SKIP_ROWS,wn),S.pixelStorei(O.UNPACK_SKIP_IMAGES,$n),_e===0&&B.generateMipmaps&&O.generateMipmap(Me),S.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&ee.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ee.setTextureCube(y,0):y.isData3DTexture?ee.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ee.setTexture2DArray(y,0):ee.setTexture2D(y,0),S.unbindTexture()},this.resetState=function(){K=0,H=0,ne=null,S.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Ap="./",Ah=i=>globalThis.__VF_ASSETS&&globalThis.__VF_ASSETS[i]||`${Ap}assets/vf/${i}.webp`,Rp=1e3,Cp=700,Pp=.7071,Lp=.4082,Qn=(i,e)=>{const t=(i-Rp)/Pp,n=(e-Cp)/Lp;return[(n+t)/2,(n-t)/2]},Rh={earbuds:70,glasses:70,postcard:-90,mug:10,camera:20,compass_needle:18,football:4},Ch={cab_inner:-2,cab_drawer:3,cab_calendar:5,cab_plane:7},Py={laptop:"Click: it starts typing",earbuds:"Click: turn it up",plant:"Click: water me",turntable:"Click: drop the needle",lamp:"Click: light on or off",cab_calendar:"Click: check the date",cab_plane:"Click: send it flying",cab_drawer:"Click: rustle the files",cab_body:"Click: rustle the files",compass:"Click: give it a shake",pins:"Click",mac:"Click: play a game",camera:"Click: say cheese",books:"Click: shuffle the stack",pen:"Click: roll it",mug:"Careful with that",glasses:"Click: slide them",postcard:"Click: read the back",hanger:"Click: give it a swing",knight:"Click: watch it move",dice:"Click: roll",football:"Click: send it down the slope"},Ql=(i,e)=>{const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);return r.addColorStop(0,i),r.addColorStop(1,e),n.fillStyle=r,n.fillRect(0,0,128,128),new os(t)};async function Ly({scene:i,camera:e}){var pt;const t=globalThis.__VF_META||await(await fetch(`${Ap}assets/vf/meta.json`)).json(),n=new Eg,r=new Ui;i.add(r);const s={},a=[],o=[],l=new X,c=new X,u=new X,h=()=>{e.updateMatrixWorld(!0),e.matrixWorld.extractBasis(l,c,u)};h();const d=C=>{const L=n.load(Ah(C));return L.colorSpace=Zt,L.anisotropy=16,L};let f;{const C=t.slab;f=new hn({map:d("slab"),transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1});const L=new Bt(new pn(C.w,C.h),f),N=new Ui,[Q,oe]=Qn(C.cx,C.bot-C.h/2);N.position.set(Q,0,oe),N.quaternion.copy(e.quaternion),N.add(L),L.renderOrder=1,r.add(N)}class g{constructor(L,N={}){const Q=t[L];this.name=L,this.m=Q,this.w=Q.w,this.h=Q.h,this.s=Q.w/Q.pw,this.pw=Q.pw,this.ph=Q.ph,this.state={dx:0,dy:0,rot:0,sc:1,px:0,py:0,alpha:1,lift:0},this.interactive=!0,this.tint=1,this.lit=0,this.flip=1,this.vx=Q.cx,this.vy=Q.bot,this.anchor=new Ui,this.wrap=new Ui,this.face=new Ui,this.anchor.add(this.wrap),this.wrap.add(this.face);const oe=d(L);n.manager.itemEnd,this.mat=new hn({map:oe,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1}),this.mesh=new Bt(new pn(this.w,this.h),this.mat),this.mesh.position.y=this.h/2,this.face.add(this.mesh),this.mesh.userData.sprite=this,r.add(this.anchor);const[ye,Ye]=Qn(Q.cx,Q.bot);this.anchor.position.set(ye,0,Ye),this.wrap.quaternion.copy(e.quaternion),this.mesh.renderOrder=100+Math.round(Q.bot)+(Rh[L]??0),Ch[L]&&(this.mesh.renderOrder=100+Math.round(t.cab_body.bot)+Ch[L]),N.order&&(this.mesh.renderOrder=N.order),a.push(this.mesh),this.apply(),new Promise(Ue=>{const Oe=new Image;Oe.crossOrigin="anonymous",Oe.onload=()=>Ue(Oe),Oe.src=Ah(L)}).then(Ue=>this.mask(Ue))}mask(L){const N=document.createElement("canvas"),Q=128/L.width;N.width=128,N.height=Math.max(1,Math.round(L.height*Q));const oe=N.getContext("2d");oe.drawImage(L,0,0,N.width,N.height),this.alpha={w:N.width,h:N.height,d:oe.getImageData(0,0,N.width,N.height).data}}hit(L){if(!this.alpha)return!0;const{w:N,h:Q,d:oe}=this.alpha,ye=L.x*N|0,Ye=(1-L.y)*Q|0;for(let Ue=-2;Ue<=2;Ue+=2)for(let Oe=-2;Oe<=2;Oe+=2){const Je=Math.min(N-1,Math.max(0,ye+Oe)),mt=Math.min(Q-1,Math.max(0,Ye+Ue));if(oe[(mt*N+Je)*4+3]>60)return!0}return!1}pivot(L,N){return this.state.px=(L-.5)*this.w,this.state.py=N*this.h,this}apply(){const L=this.state,N=Math.cos(L.rot),Q=Math.sin(L.rot),oe=L.px-(N*L.px-Q*L.py)*L.sc,ye=L.py-(Q*L.px+N*L.py)*L.sc;this.wrap.quaternion.copy(e.quaternion),this.face.position.set(L.dx+oe,L.dy+L.lift+ye,6),this.face.rotation.z=L.rot,this.face.scale.set(L.sc*this.flip,L.sc,1),this.mat.opacity=L.alpha,this.mat.color.setRGB(this.tint+.34*this.lit,this.tint+.2*this.lit,this.tint+.02*this.lit)}reset(){ke.killTweensOf(this.state),Object.assign(this.state,{dx:0,dy:0,rot:0,sc:1,lift:0,alpha:1}),this.apply()}moveView(L,N){this.vx=L,this.vy=N;const[Q,oe]=Qn(L,N);this.anchor.position.set(Q,0,oe),this.mesh.renderOrder=100+Math.round(N)+(Rh[this.name]??0)}}const _=s;["books","pen","pins","plant","laptop","glasses","earbuds","cab_body","cab_inner","cab_drawer","cab_calendar","cab_plane","turntable","lamp","compass","compass_needle","football","mac","knight","dice","postcard","mug","camera","hanger"].forEach(C=>{_[C]=new g(C)}),_.cab_plane.pivot(.5,.5),_.compass_needle.pivot(.5,.5),_.compass_needle.interactive=!1,_.hanger.pivot(.5,.92),_.football.pivot(.5,.5),_.plant.pivot(.5,0);const p=(C,L=.95)=>{const N=_[C];return N.anchor.getWorldPosition(new X).addScaledVector(c,N.h*L)},m=(C,L,N)=>{const Q=new ai,oe=[];L.forEach(([Ye,Ue])=>oe.push((Ye-C.pw/2)*C.s,(C.ph-Ue)*C.s,.2)),Q.setAttribute("position",new Yn(oe,3)),Q.setAttribute("uv",new Yn([0,1,1,1,1,0,0,0],2)),Q.setIndex([0,2,1,0,3,2]);const ye=new Bt(Q,new hn({map:N,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1}));return ye.renderOrder=C.mesh.renderOrder+2,C.face.add(ye),ye},E=(C,L)=>{const N=document.createElement("canvas");N.width=C,N.height=L;const Q=new os(N);return Q.colorSpace=Zt,{g:N.getContext("2d"),t:Q}},R=E(160,120);m(_.mac,[[46,110],[196,147],[194,291],[43,244]],R.t);const x={v:1,on:!1,bx:80,by:60,vx:70,vy:46,py:60,ay:60,ps:0,as:0},M=()=>{const C=R.g;if(C.fillStyle="#0a1210",C.fillRect(0,0,160,120),!x.on)C.fillStyle="rgba(180,255,200,0.9)",C.font="700 15px Lufga, Gilroy, sans-serif",C.textAlign="center",C.fillText("PRESS TO PLAY",80,58),C.fillRect(52,70,56,2);else{C.fillStyle="rgba(180,255,200,0.25)";for(let L=4;L<116;L+=10)C.fillRect(79,L,2,5);C.fillStyle="#b8ffcf",C.fillRect(10,x.py-12,5,24),C.fillRect(145,x.ay-12,5,24),C.fillRect(x.bx-3,x.by-3,6,6),C.font="700 16px monospace",C.textAlign="center",C.fillText(x.ps,60,18),C.fillText(x.as,100,18)}R.t.needsUpdate=!0};M(),o.push(C=>{if(!x.on)return;const L=Math.min(C,.05);x.bx+=x.vx*L,x.by+=x.vy*L,(x.by<4||x.by>116)&&(x.vy*=-1,Us(300,.03,x.v*.7)),x.py+=Math.sign(x.by-x.py)*Math.min(Math.abs(x.by-x.py),90*L),x.ay+=Math.sign(x.by-x.ay)*Math.min(Math.abs(x.by-x.ay),62*L),x.bx<16&&Math.abs(x.by-x.py)<14&&(x.vx=Math.abs(x.vx)*1.04,x.vy+=(x.by-x.py)*2,Us(520,.05,x.v)),x.bx>144&&Math.abs(x.by-x.ay)<14&&(x.vx=-Math.abs(x.vx)*1.04,x.vy+=(x.by-x.ay)*2,Us(400,.05,x.v)),x.bx<0&&(Us(180,.18,x.v),x.as++,x.bx=80,x.by=60,x.vx=70),x.bx>160&&(Us(660,.18,x.v),x.ps++,x.bx=80,x.by=60,x.vx=-70),M()});const T=E(240,150),A=m(_.laptop,[[14,119],[220,15],[256,152],[41,259]],T.t);A.material.opacity=0;const v={p:0},b=()=>{const C=T.g;C.clearRect(0,0,240,150),C.fillStyle="rgba(8,8,10,0.94)",C.fillRect(0,0,240,150);const L=["const work = await brief.untangle();","if (users.areConfused) simplify();","design.system.grow(42);","return story.worthTelling(work);"];C.font="500 11px ui-monospace, Menlo, monospace";let N=Math.floor(v.p*130);L.forEach((Q,oe)=>{C.fillStyle=oe%2?"#e9b97a":"#bfe0a8",C.fillText(Q.slice(0,Math.max(0,Math.min(Q.length,N))),10,26+oe*22),N-=Q.length}),T.t.needsUpdate=!0};b();const D=Ql("rgba(255,214,150,0.95)","rgba(255,170,80,0)"),P=t.lamp,I=_.lamp.s,z=132,F=208,k={state:{rot:0},tint:1,apply(){},mesh:_.lamp.mesh,face:_.lamp.face},K=[0,0],H=[-.62,-.78],ne=[P.cx-P.w/2+z*I,P.bot-P.h+F*I],V=618,$=new Bt(new pn(1,1),new hn({map:D,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:vr,toneMapped:!1}));$.scale.set(80,80,1),$.position.set((z-P.pw/2)*I,(P.ph-F)*I,.3),$.renderOrder=k.mesh.renderOrder+2,k.face.add($);const j=new Bt(new pn(1,1),new hn({map:D,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vr,toneMapped:!1}));j.rotation.x=-Math.PI/2,j.renderOrder=6,r.add(j);const Ee=(()=>{const C=document.createElement("canvas");C.width=128,C.height=64;const L=C.getContext("2d"),N=L.createImageData(128,64);for(let oe=0;oe<64;oe++)for(let ye=0;ye<128;ye++){const Ye=ye/127,Ue=Math.abs(oe/63-.5)*2,Oe=Math.pow(1-Ye,1.35)*Math.pow(Math.max(0,1-Ue*Ue),1.6),Je=(oe*128+ye)*4;N.data[Je]=255,N.data[Je+1]=222,N.data[Je+2]=168,N.data[Je+3]=Math.round(Oe*255)}L.putImageData(N,0,0);const Q=new os(C);return Q.colorSpace=Zt,Q})(),ve=new ai;ve.setAttribute("position",new Si(new Float32Array(12),3)),ve.setAttribute("uv",new Yn([0,0,0,1,1,1,1,0],2)),ve.setIndex([0,1,2,0,2,3]);const Ge=new Bt(ve,new hn({map:Ee,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:vr,toneMapped:!1,side:mi}));Ge.frustumCulled=!1,Ge.renderOrder=k.mesh.renderOrder-1,r.add(Ge);let Ne=!1;const Ve={v:0},J={x:1190,y:V,r:40,k:0},se=C=>{Ne=C,ke.to(Ve,{v:C?1:0,duration:.55,ease:"power2.out"})},be=["books","pen","pins","plant","laptop","glasses","earbuds","cab_body","cab_inner","cab_drawer","cab_calendar","cab_plane","turntable","compass","compass_needle","camera","mac","knight","dice","postcard","mug","football","hanger"],Fe=(C,L,N,Q)=>{const[oe,ye]=Qn(N,Q);C[L*3]=oe,C[L*3+1]=.5,C[L*3+2]=ye},Se={pos:new X,pool:new X,rr:40,dir:[H[0],H[1]],k:0},Qe=C=>{const L=k.state.rot,N=Math.cos(L),Q=Math.sin(L),oe=ne[0]+(K[0]*N-K[1]*Q),ye=ne[1]-(K[0]*Q+K[1]*N),Ye=H[0]*N-H[1]*Q,Ue=H[0]*Q+H[1]*N;{const[tl,Xi]=Qn(oe,ye);Se.pos.set(tl,0,Xi),Se.dir=[Ye,Ue],Se.k=Ve.v}const Oe=Math.max(8,V-ye),Je=Math.max(0,-Ue);let mt,An;Je>.12?(mt=oe+Oe*Ye/Je,An=0):(mt=oe+Math.sign(Ye||-1)*330,An=330),mt=Math.max(oe-330,Math.min(oe+330,mt)),An=Math.hypot(mt-oe,V-ye);const Ea=Math.min(1,Je/.45),li=Ve.v*(.35+.65*Ea)*(1-Math.min(.55,An/700)),el=22+An*.3;J.x+=(mt-J.x)*.35,J.y=V,J.r+=(el-J.r)*.35,J.k=li;const[im,rm]=Qn(J.x,V);j.position.set(im,1,rm),j.scale.set(J.r*2,J.r*2,1),j.material.opacity=li*.38;const id=J.x-oe,rd=V-ye,sd=Math.hypot(id,rd)||1,ba=-rd/sd,Ta=id/sd,wa=30,Aa=J.r*.95,Ra=ve.attributes.position.array;Fe(Ra,0,oe+ba*wa,ye+Ta*wa),Fe(Ra,1,oe-ba*wa,ye-Ta*wa),Fe(Ra,2,J.x-ba*Aa,V-Ta*Aa),Fe(Ra,3,J.x+ba*Aa,V+Ta*Aa),ve.attributes.position.needsUpdate=!0,Ge.material.opacity=li*.16,Se.pool.copy(j.position),Se.rr=J.r,$.material.opacity=Ve.v*(.8+Math.sin(C*6)*.03),be.forEach(tl=>{const Xi=_[tl],sm=Xi.m,am=(Xi.vx-J.x)/(J.r*1.05),om=(Xi.vy-sm.h*.22-V)/(J.r*.62),nl=Math.max(0,1-Math.hypot(am,om));Xi.lit=nl*nl*(3-2*nl)*li*.55,Xi.tint=1-.1*Ve.v,Xi.apply()}),f.color.setScalar(1-.05*Ve.v),_.lamp.tint=1+.08*Ve.v,_.lamp.apply()},Ot=Ql("rgba(255,255,255,0.9)","rgba(255,255,255,0)"),Ze=[],et=(C,L,N={})=>{for(let Q=0;Q<L;Q++){const oe=new Bt(new pn(1,1),new hn({map:N.tex||Ot,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,color:N.color||16777215}));oe.quaternion.copy(e.quaternion),oe.renderOrder=900;const ye=(N.at||(()=>p(C.name,.5)))();oe.position.copy(ye),r.add(oe),Ze.push({m:oe,age:-(N.stagger??.06)*Q,life:N.life??1.2,v:new X().addScaledVector(l,(N.vx??0)+(Math.random()-.5)*(N.spread??30)).addScaledVector(c,(N.vy??30)+Math.random()*20),s0:N.s0??10,s1:N.s1??30,a:N.a??.6,g:N.g??0,sy:N.sy??1})}},gt=(()=>{const C=document.createElement("canvas");C.width=C.height=64;const L=C.getContext("2d");return L.fillStyle="#fff",L.font="700 54px serif",L.textAlign="center",L.fillText("♪",32,50),new os(C)})();o.push(C=>{for(let L=Ze.length-1;L>=0;L--){const N=Ze[L];if(N.age+=C,N.age<0){N.m.visible=!1;continue}N.m.visible=!0;const Q=N.age/N.life;if(Q>=1){r.remove(N.m),N.m.material.dispose(),Ze.splice(L,1);continue}N.g&&N.v.addScaledVector(c,-N.g*C),N.m.position.addScaledVector(N.v,C);const oe=N.s0+(N.s1-N.s0)*Q;N.m.scale.set(oe,oe*N.sy,1),N.m.material.opacity=N.a*(1-Q)*Math.min(1,Q*8)}});const ze={fn:null};let Mt;const Pt={},xt=(C,L,N=2800)=>{var Q;Pt[C]||(clearTimeout(Mt),(Q=ze.fn)==null||Q.call(ze,L,p(C,1)),N&&(Mt=setTimeout(()=>{var oe;return(oe=ze.fn)==null?void 0:oe.call(ze,null)},N)))},ct=C=>{let L=Math.floor(Math.random()*C.length);return()=>C[L++%C.length]},wt={},O=(C,L)=>()=>{if(wt[C])return null;wt[C]=!0;const N=ke.timeline({onComplete:()=>{wt[C]=!1}});return L(N),N},We=C=>()=>C.apply(),ft=(C,L,N,Q,oe,ye=.25)=>{const Ye=W;C.add(()=>fl(Ye*.8),oe),C.to(L.state,{dy:N,rot:Q,duration:ye,ease:"power2.out",onUpdate:We(L)},oe).to(L.state,{dy:0,rot:0,duration:.55,ease:"bounce.out",onUpdate:We(L)},oe+ye)},w={},S={},G=(C,L,N,Q)=>{const oe=ct(L),ye=w[C];w[C]=()=>{ye==null||ye(),ke.delayedCall(N,()=>xt(C,oe()))}};let W=1,ee=-1;const ce=[36,70,94,125],fe=C=>()=>{b();const L=Math.floor(v.p*130);L!==ee&&(L%3===0&&k0(C),ce.includes(L)&&z0(C*.8),ee=L)};w.laptop=O("laptop",C=>{const L=W;ee=-1,C.set(A.material,{opacity:1}).fromTo(v,{p:0},{p:1,duration:3.2,ease:"none",onUpdate:fe(L)}).to(A.material,{opacity:0,duration:.6},"+=1.2")}),G("laptop",["Shipped. Probably.","Works on my machine.","It was a feature."],3.6),w.earbuds=O("hp",C=>{const L=W;C.add(()=>V0(L),0).add(()=>G0(L),1.15),[0,.25,.5].forEach(N=>C.add(()=>et(_.earbuds,1,{tex:gt,vy:40,spread:20,s0:14,s1:22,life:1.4,a:.9}),N))}),G("earbuds",["Now playing: lo-fi to ship to.","Do not disturb. Mostly.","Track 7 is the good one."],.3);let te=1;const re=ct(["Thank you for keeping me alive.","Ahh. Hydration.","Growth mindset, literally."]);w.plant=O("plant",C=>{const L=_.plant,N=W;C.add(()=>Ed(N),.02).add(()=>Ed(N*.8),.6);for(let Q=0;Q<4;Q++)C.add(()=>et(L,6,{color:8176895,vy:-150,spread:36,s0:5,s1:7,life:.75,a:.95,stagger:.05,at:()=>p("plant",1.25).addScaledVector(l,(Math.random()-.4)*30)}),Q*.28);te=Math.min(1.14,te+.045),C.to(L.state,{sc:te+.02,rot:.03,duration:.5,ease:"power2.out",onUpdate:We(L)},.5).to(L.state,{sc:te,rot:0,duration:.9,ease:"elastic.out(1,0.4)",onUpdate:We(L)},1).add(()=>xt("plant",te>=1.13?"Okay, I am a tree now.":re()),1.2)});const he=_.cab_drawer,De=_.cab_inner,pe=[-83*he.s,48*he.s];let ue=!0;const Ie=(C,L)=>{ue=C;const N=C?0:pe[0],Q=C?0:pe[1],oe=[he,De];oe.forEach(Oe=>ke.killTweensOf(Oe.state));const ye={t:0},Ye=oe.map(Oe=>[Oe.state.dx,Oe.state.dy]),Ue=Oe=>oe.forEach((Je,mt)=>{Je.state.dx=Ye[mt][0]+(N-Ye[mt][0])*Oe,Je.state.dy=Ye[mt][1]+(Q-Ye[mt][1])*Oe,Je.apply()});ke.to(ye,{t:1,duration:C?.85:.5,ease:C?"power3.out":"power2.in",onUpdate:()=>Ue(ye.t),onComplete:()=>{if(C)return;const Oe={r:0};ke.to(Oe,{r:1,duration:.09,ease:"power1.out",yoyo:!0,repeat:1,onUpdate:()=>oe.forEach(Je=>{Je.state.dx=N+2.2*Oe.r,Je.state.dy=Q-1.3*Oe.r,Je.apply()})})}})},Be=ct(["Nothing in here but 2019 drafts.","Filed under: later.","Alphabetical. Ish.","Please do not read the top one."]),Xe=()=>{Ie(!ue),Y0(ue,W),ke.delayedCall(.35,()=>xt("cab_body",ue?Be():"Shut. Mostly.",1900))};w.cab_drawer=w.cab_inner=w.cab_body=Xe,w.cab_calendar=()=>xt("cab_calendar",ct(["Free on the 12th. Probably.","Every day is a deadline in disguise.","Booked until further notice."])(),2200);const U=_.cab_plane,de=[U.m.cx,U.m.bot-U.m.h/2],ie=[1e3,395],le=([C,L])=>[ie[0]+C*.85,ie[1]+L*.85],xe=new hg([de,le([-31,33]),le([0,68]),le([97,53]),le([190,0]),le([97,-54]),le([0,-95]),le([-103,-54]),le([-190,0]),le([-153,43]),le([-103,24]),de].map(([C,L])=>new X(C,L,0)),!1,"centripetal"),ae=U.mesh.renderOrder;let Le=!1;w.cab_plane=()=>{if(Le)return;Le=!0;const C=W;q0(5.4,C);const L={u:0};let N=-.1,Q=1,oe=performance.now();const ye=()=>{const Ye=performance.now(),Ue=Math.min(.05,(Ye-oe)/1e3);oe=Ye;const Oe=xe.getPointAt(Math.min(1,L.u)),Je=xe.getTangentAt(Math.min(1,Math.max(0,L.u))),mt=Math.atan2(-Je.y,Je.x),An=Je.x>=0;let li=(An?mt+.1:mt-Math.PI-.1)-N;for(;li>Math.PI;)li-=2*Math.PI;for(;li<-Math.PI;)li+=2*Math.PI;N+=li*Math.min(1,Ue*9),Q+=((An?1:-1)-Q)*Math.min(1,Ue*11);const el=(Oe.y-ie[1])/(95*.85);U.flip=Q,U.state.dx=Oe.x-de[0],U.state.dy=-(Oe.y-de[1]),U.state.rot=N,U.state.sc=1+.16*el,U.mesh.renderOrder=800,U.apply()};ke.to(L,{u:1,duration:5.4,ease:"sine.inOut",onUpdate:ye,onComplete:()=>{U.flip=1,Object.assign(U.state,{dx:0,dy:0,rot:0,sc:1}),U.mesh.renderOrder=ae,U.apply(),Le=!1,Ia(C*.3)}}),xt("cab_plane",ct(["Wheee.","Paperwork, but fun.","Gate B12. Boarding now.","Smooth landing. Always."])(),2200)};const Te=(()=>{const C=_.turntable,L=C.w/C.pw,N=document.createElement("canvas");N.width=N.height=256;const Q=N.getContext("2d"),oe=128,ye=128,Ye=Q.createConicGradient?Q.createConicGradient(0,oe,ye):null;Ye&&([[0,0],[.04,0],[.1,.42],[.16,0],[.5,0],[.54,0],[.6,.34],[.66,0],[1,0]].forEach(([An,Ea])=>Ye.addColorStop(An,`rgba(255,255,255,${Ea})`)),Q.fillStyle=Ye,Q.beginPath(),Q.arc(oe,ye,126,0,7),Q.fill());const Ue=Q.createRadialGradient(oe,ye,30,oe,ye,126);Ue.addColorStop(0,"rgba(0,0,0,0.0)"),Ue.addColorStop(.05,"rgba(0,0,0,0)"),Ue.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Ue,Q.fillRect(0,0,256,256),Q.globalCompositeOperation="destination-out";const Oe=Q.createRadialGradient(oe,ye,0,oe,ye,52);Oe.addColorStop(0,"rgba(0,0,0,1)"),Oe.addColorStop(.9,"rgba(0,0,0,1)"),Oe.addColorStop(1,"rgba(0,0,0,0)"),Q.fillStyle=Oe,Q.fillRect(0,0,256,256);const Je=new os(N);Je.center.set(.5,.5),Je.colorSpace=Zt;const mt=new Bt(new pn(2,2),new hn({map:Je,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:vr,toneMapped:!1}));return mt.scale.set(137*L,68*L,1),mt.position.set((223-C.pw/2)*L,(C.ph-254)*L,.4),mt.rotation.z=-.1,mt.renderOrder=C.mesh.renderOrder+2,C.face.add(mt),{mesh:mt,tx:Je,v:0}})();o.push(C=>{const L=it?1:0;Te.v+=(L-Te.v)*Math.min(1,C*2.5),Te.mesh.material.opacity=.55*Te.v,Te.v>.01&&(Te.tx.rotation-=C*3.3*Te.v)});let it=!1,lt=!1;const _n=C=>{C!==it&&(it=C,lt=C,C?pl():Sc())};Iu(C=>{!C&&lt&&pl()}),w.turntable=()=>{it=!it,lt=it,it?pl():Sc();const C=()=>{it&&(et(_.turntable,3,{tex:gt,vy:36,spread:60,s0:16,s1:24,life:1.8,a:.9,stagger:.3}),ke.delayedCall(2.4,C))};C(),xt("turntable",it?"Side B, obviously.":"Silence. Lovely.")};const Bn=()=>{se(!Ne),$0(Ne,W),ke.delayedCall(.05,()=>xt("lamp",Ne?"Let there be light.":"Lights out.",1800))};w.lamp=w.lamp_head=Bn,w.compass=O("comp",C=>{const L=W,N=_.compass_needle,Q=2+Math.floor(Math.random()*2);C.add(()=>fl(L*.7),.05).set(N.state,{rot:0}).to(N.state,{rot:Math.PI*2*Q,duration:2.1,ease:"power3.out",onUpdate:We(N)}),[-.34,.2,-.11,.05,-.02,0].forEach(oe=>C.to(N.state,{rot:Math.PI*2*Q+oe,duration:.3,ease:"sine.inOut",onUpdate:We(N)})),C.add(()=>{N.state.rot=0,N.apply()})}),G("compass",["Still pointing at the next project.","North is wherever the brief is.","Lost? Never. Exploring."],2.6),w.pins=O("pins",C=>ft(C,_.pins,10,-.4,0)),G("pins",["Pinned it.","Ouch. Careful."],.3),w.books=O("books",C=>{const L=_.books,N=W;C.add(()=>hl(N),0).add(()=>Ia(N*.5),.2).add(()=>hl(N*.8),.55),C.to(L.state,{dy:8,rot:.03,duration:.2,onUpdate:We(L)}).to(L.state,{dy:0,rot:-.02,duration:.2,onUpdate:We(L)}).to(L.state,{rot:0,duration:.6,ease:"elastic.out(1,0.4)",onUpdate:We(L)})}),G("books",["Overdue by three years.","Great covers. Haven’t read them.","Chapter one, again."],.3);const Vr=document.createElement("canvas");Vr.width=1024,Vr.height=256;const gn=Vr.getContext("2d"),Gi=new os(Vr);Gi.colorSpace=Zt,Gi.anisotropy=8;const Qt={x:628,y:768,len:54,text:"UX designer",p:0,ready:!1},Hi=new Bt(new pn(Qt.len*1.414,Qt.len*1.414/4),new hn({map:Gi,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1}));{const[C,L]=Qn(Qt.x+Qt.len/2,Qt.y+Qt.len*.577/2);Hi.position.set(C,.8,L),Hi.rotation.set(-Math.PI/2,0,0),Hi.renderOrder=60,r.add(Hi)}const Ps=C=>{if(gn.clearRect(0,0,1024,256),C<=0){Gi.needsUpdate=!0;return}gn.save(),gn.beginPath(),gn.rect(0,0,1024*Math.min(1,C),256),gn.clip();let L=190;gn.font=`600 ${L}px Caveat, "Segoe Script", cursive`;const N=gn.measureText(Qt.text).width;L=Math.floor(L*940/Math.max(N,1)),gn.font=`600 ${L}px Caveat, "Segoe Script", cursive`,gn.textBaseline="alphabetic",gn.fillStyle="rgba(255,255,255,0.96)",gn.fillText(Qt.text,40,168),gn.restore(),Gi.needsUpdate=!0};try{(pt=document.fonts)==null||pt.load("600 120px Caveat").then(()=>{Qt.ready=!0}).catch(()=>{})}catch{}const Ls=[_.pen.m.cx-_.pen.m.w*.48,_.pen.m.bot-_.pen.m.h*.04];w.pen=O("pen",C=>{const L=_.pen.pivot(.02,.04),N=W,Q=Qt.x-Ls[0],oe=-(Qt.y-Ls[1]),ye=Qt.len,Ye=Qt.len*.577,Ue=.95;C.add(()=>{W0(N),Ps(0),Hi.material.opacity=.95},0).to(L.state,{dx:Q,dy:oe,lift:7,rot:Ue,duration:.9,ease:"power2.inOut",onUpdate:We(L)},0).to(L.state,{lift:.6,duration:.15,ease:"power1.in",onUpdate:We(L)},.9).add(()=>H0(2.5,N*.8),1.05);const Oe={p:0};C.to(Oe,{p:1,duration:2.5,ease:"none",onUpdate:()=>{const Je=Math.sin(Oe.p*38)*1.2+Math.sin(Oe.p*91)*.6;L.state.dx=Q+ye*Oe.p,L.state.dy=oe-Ye*Oe.p+Je,L.state.rot=Ue+Math.sin(Oe.p*24)*.04,L.apply(),Ps(Oe.p)}},1.05).to(L.state,{lift:7,duration:.2,onUpdate:We(L)},3.6).to(L.state,{dx:0,dy:0,lift:0,rot:0,duration:1,ease:"power3.inOut",onUpdate:We(L)},3.8).to(Hi.material,{opacity:0,duration:1.3,ease:"power1.inOut"},7.6)}),G("pen",["It writes. Sometimes.","Borrowed. Never returned.","Click. Click. Click."],.7),w.camera=O("cam",C=>{const L=_.camera,N=W;C.add(()=>J0(N),.02);const Q=new Bt(new pn(1,1),new hn({map:Ot,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:vr,toneMapped:!1}));Q.scale.set(46,46,1),Q.position.set((29-L.pw/2)*L.s,(L.ph-33)*L.s,.3),Q.renderOrder=950,L.face.add(Q),C.to(Q.material,{opacity:1,duration:.05},.02).to(Q.material,{opacity:0,duration:.55},.1).add(()=>{L.face.remove(Q),Q.material.dispose()},.8)}),G("camera",["Say cheese.","You blinked.","Photo 1 of 36."],.5),w.glasses=()=>xt("glasses",ct(["Seeing clearly. Mostly.","Where did I leave these. Oh."])());const wi=ct(["Postmarked: somewhere nice.","Wish you were here.","First class. Of course."]);w.postcard=O("pc",C=>{const L=_.postcard,N=W;C.add(()=>hl(N),0).to(L.state,{lift:9,rot:.05,duration:.25,ease:"power2.out",onUpdate:We(L)}).to(L.state,{lift:0,rot:0,duration:.6,ease:"bounce.out",onUpdate:We(L)}).add(()=>xt("postcard",wi()),.3)}),w.hanger=O("hang",C=>{const L=_.hanger,N=W;C.add(()=>fl(N*.7),.05),[.55,-.4,.28,-.18,.1,-.05,0].forEach(Q=>C.to(L.state,{rot:Q,duration:.3,ease:"sine.inOut",onUpdate:We(L)})),C.add(()=>xt("hanger",ct(["Nothing to wear. Everything to wear.","Hung up on it.","Dressed for the occasion."])()),.4)});const Wi=_.knight,lr=28;w.knight=O("kn",C=>{const L=W,N=[-.866*lr,-.5*lr],Q=[-.866*lr,.5*lr],oe=(ye,Ye,Ue,Oe=14)=>{C.to(Wi.state,{dx:`+=${ye}`,dy:`+=${Ye+Oe}`,duration:.27,ease:"power2.out",onUpdate:We(Wi)},Ue).to(Wi.state,{dy:`-=${Oe}`,duration:.23,ease:"bounce.out",onUpdate:We(Wi)},Ue+.27).add(()=>Z0(L),Ue+.46)};oe(N[0]*.5,N[1]*.5,0,8),oe(Q[0],Q[1],.7),oe(Q[0],Q[1],1.2),oe(24.248,-14,2.5),oe(24.248,-14,3),oe(24.248*.5,14*.5,3.5,8)}),G("knight",["Checkmate.","Mate in two.","That was a fork, by the way.","Knights never go straight."],4.1);const oi=_.dice.pivot(.5,.5);w.dice=O("dice",C=>{const L=W;C.add(()=>Td(L),.05).add(()=>Ia(L*.4),.7).add(()=>Td(L*.7),1.1),C.to(oi.state,{dx:40,dy:18,rot:-Math.PI*2,duration:.7,ease:"power2.out",onUpdate:We(oi)}).to(oi.state,{dy:0,duration:.3,ease:"bounce.out",onUpdate:We(oi)}).to(oi.state,{dx:0,rot:-Math.PI*4,duration:.9,ease:"power2.inOut",onUpdate:We(oi)},"+=0.2").set(oi.state,{rot:0}),ke.delayedCall(1.2,()=>{const N=1+Math.floor(Math.random()*6);xt("dice",N===6?"A six. Suspicious.":N===1?"A one. Rigged.":`Rolled a ${N}. Fair and square.`)})});const kn=(C,L=1)=>{x.on=C,x.v=L,C&&(x.ps=x.as=0,x.bx=80,x.by=60,bd(L)),M()};w.mac=()=>{kn(!x.on,W),xt("mac",x.on?"Insert coin.":"Game over. Come back soon.",1800)},o.push(()=>{if(x.on&&(x.ps>=3||x.as>=3)){const C=x.ps>=x.as;C?bd(x.v):Q0(x.v),x.ps=x.as=0,xt("mac",C?"You win. The machine is sulking.":"Machine wins. Rematch?",2600)}}),ct(["Spotlight!","Ooh, dust.","Found it."]);const Vt=_.football,At=_.mug,Gr=[_.football.m.cx,_.football.m.bot];Vt.moveView(...Gr);const Ds=Ql("rgba(46,26,16,0.95)","rgba(46,26,16,0)"),un=new Bt(new pn(1,1),new hn({map:Ds,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));{const[C,L]=Qn(951,895);un.rotation.x=-Math.PI/2,un.position.set(C,.5,L),un.renderOrder=1100,un.scale.set(8,8,1),r.add(un)}const Hr=[913,924],dn=new Bt(new pn(1,1),new hn({map:Ds,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));{const[C,L]=Qn(940,905);dn.rotation.x=-Math.PI/2,dn.position.set(C,.6,L),dn.renderOrder=1101,dn.scale.set(9,6,1),r.add(dn)}const zn=new Bt(new pn(1,1),new hn({color:3809300,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));zn.quaternion.copy(e.quaternion),zn.renderOrder=880,r.add(zn);const cr=(C,L=3.4)=>{const[N,Q]=Qn(Hr[0]-2,Hr[1]+C/2);zn.position.set(N,0,Q),zn.scale.set(L,Math.max(.1,C),1)};cr(1);const y=C=>{let L=0;for(let N=0;N<C;N++)L+=.07+Math.random()*.2+N*.012,ke.delayedCall(L,()=>{const Q=Math.random()<.3;et(At,1,{color:3809300,at:()=>{const[oe,ye]=Qn(Hr[0]-2+(Math.random()-.5)*3,Hr[1]+5);return new X(oe,0,ye)},vx:-4+Math.random()*3,vy:-8-Math.random()*10,spread:3,s0:Q?4.2:3,s1:Q?3.4:2.4,sy:2.6+Math.random()*1.2,life:.8+Math.random()*.3,a:.95,g:640+Math.random()*160,stagger:0})})};let B=!1;const Z=[Gr,[1131,729],[1067,784],[1006,838],[960,877]],q=C=>{const L=Z.length-1,N=Math.min(L-1e-6,C*L),Q=Math.floor(N),oe=N-Q,ye=Z[Q],Ye=Z[Q+1];return[ye[0]+(Ye[0]-ye[0])*oe,ye[1]+(Ye[1]-ye[1])*oe]},Y=28,_e=[[2.55,2.93,18],[2.93,3.23,9],[3.23,3.45,3.8],[3.45,3.62,1.4]],we=C=>{for(const[L,N,Q]of _e)if(C>=L&&C<N)return Q*Math.sin(Math.PI*(C-L)/(N-L));return 0},me=(C=!1,L=0)=>{if(B)return null;B=!0;const N={t:0};let Q=0,oe=q(0);const ye=ke.timeline({onComplete:()=>{C||ke.delayedCall(6,Re)}}),Ye={s:0};ye.to(Ye,{s:3.6,duration:3.6,ease:"none",onUpdate:()=>{N.t=Math.min(1,(Ye.s/3.6)**2);const[Je,mt]=q(N.t);Q+=Math.hypot(Je-oe[0],mt-oe[1])/Y,oe=[Je,mt],Vt.moveView(Je,mt),Vt.state.rot=-Q,Vt.state.lift=we(Ye.s)+(Ye.s<2.55?.6*Math.abs(Math.sin(Ye.s*14)):0),Vt.apply()}},.2);const Ue=3.8,Oe=W;return ye.add(()=>K0(2.6,Oe),.2).add(()=>Da(1,Oe),.2+2.93).add(()=>Da(.65,Oe),.2+3.23).add(()=>Da(.38,Oe),.2+3.45).add(()=>Da(.2,Oe),.2+3.62).add(()=>{Ia(Oe*.6),X0(Oe*.8)},Ue),ye.add(()=>et(At,9,{color:4860442,vy:50,vx:-40,spread:70,s0:8,s1:18,life:.9,a:.9,stagger:.02}),Ue),ye.to(At.state,{rot:1.35,dx:-8,duration:.5,ease:"power2.in",onUpdate:We(At)},Ue).to(At.state,{rot:3,dx:-26,dy:-15,duration:.95,ease:"power1.inOut",onUpdate:We(At)},Ue+.5).to(At.state,{rot:5.6,dx:-44,dy:-190,duration:1.05,ease:"power2.in",onUpdate:We(At)},Ue+1.45).to(At.state,{alpha:0,duration:.35,ease:"power1.in",onUpdate:We(At)},Ue+2.15),ye.to(Vt.state,{dx:26,dy:9,duration:1.5,ease:"power3.out",onUpdate:We(Vt)},Ue).to(Vt.state,{rot:`+=${Q*0+2.6}`,duration:1.5,ease:"power3.out",onUpdate:We(Vt)},Ue),[[7,.2,.2],[3,.16,.6],[1.2,.12,.95]].forEach(([Je,mt,An])=>{ye.to(Vt.state,{lift:Je,duration:mt,ease:"power2.out",onUpdate:We(Vt)},Ue+An).to(Vt.state,{lift:0,duration:mt*1.05,ease:"power2.in",onUpdate:We(Vt)},Ue+An+mt)}),ye.to(un.scale,{x:86,y:46,duration:1.3,ease:"power2.out"},Ue+.1).to(un.material,{opacity:.9,duration:.5},Ue+.1).to(dn.scale,{x:8,y:62,duration:.9,ease:"power1.in"},Ue+.7).to(dn.material,{opacity:.85,duration:.3},Ue+.7).add(()=>{cr(1),zn.material.opacity=.9},Ue+1.5).to({L:1},{L:46,duration:.8,ease:"power1.in",onUpdate(){const Je=this.targets()[0];cr(Je.L,3.6-1.5*Math.min(1,Je.L/46))}},Ue+1.5).add(()=>y(26),Ue+1.75).to(zn.material,{opacity:0,duration:1.2},Ue+3).to(dn.material,{opacity:0,duration:1.4},Ue+2.6).to(un.material,{opacity:0,duration:2.6,ease:"power1.inOut"},Ue+1.9),C||ye.add(()=>{var Je;return(Je=ze.fn)==null?void 0:Je.call(ze,"Butter fingers.",p("mug",1))},Ue+.35),L>0&&ye.time(.2+L,!0),ye},Re=()=>{var C;ke.killTweensOf([Vt.state,At.state,un.scale,un.material,dn.scale,dn.material,zn.material]),[un,dn,zn].forEach(L=>{L.material.opacity=0}),un.scale.set(8,8,1),dn.scale.set(9,6,1),cr(1),At.state.px=0,Object.assign(At.state,{rot:0,dx:0,dy:14,alpha:0,lift:0}),At.apply(),ke.to(At.state,{dy:0,alpha:1,duration:.7,ease:"back.out(1.6)",onUpdate:We(At)}),Vt.reset(),Vt.moveView(...Gr),Vt.pivot(.5,.5),Vt.apply(),(C=ze.fn)==null||C.call(ze,null),B=!1};w.football=()=>{me()},w.mug=()=>{B||me()},At.pivot(.5,.05);let Pe=0,qe=[],Ke={};const Ae=(C,L)=>{const N=ke.delayedCall(C,L);return qe.push(N),N},ut=(C,L,N)=>{[C,"cab_body","cab_drawer","cab_plane","cab_calendar"].forEach(oe=>{Pt[oe]=!0}),W=N;try{return L()}finally{W=1}},St=(C,L,N,Q,oe=.5,ye={})=>({key:C,running:!1,timer:null,start(Ye){if(this.running)return;this.running=!0;const Ue=Pe,Oe=()=>{!this.running||Ue!==Pe||(ut(C,L,Q),this.timer=Ae(N,Oe))};this.timer=Ae(Ye?.05:oe,Oe),Ye&&(Pt[C]=!1)},stop(){var Ye,Ue;this.running=!1,(Ye=this.timer)==null||Ye.kill(),(Ue=ye.onStop)==null||Ue.call(ye)}}),yt=(C,L=1.4)=>{ke.killTweensOf(k.state),ke.to(k.state,{rot:C,duration:L,ease:"power2.inOut",onUpdate:()=>k.apply()})},_t=()=>{Pe++,qe.forEach(C=>C.kill()),qe=[],Object.values(Ke).forEach(C=>{C.running=!1}),Ke={},_n(!1),x.on&&kn(!1),Ne&&se(!1),Math.abs(k.state.rot)>.01&&yt(0,.8)},$t=(C,L)=>{kn(!0,C),Ae(L,()=>kn(!1))},Me=(C,L,N)=>Ae(N,()=>ut("x",C,L)),jt={hello:()=>[St("laptop",w.laptop,6.2,0,.8),St("cab_plane",w.cab_plane,8.6,0,1.6),St("mac",()=>$t(0,4.2),9.5,0,2.6,{onStop:()=>kn(!1)}),St("plant",w.plant,7.4,0,3.4),St("pen",w.pen,12,0,4.4)],work:()=>(Me(w.laptop,.35,.5),[St("pen",w.pen,12,0,3.2)]),beyond:()=>(Me(()=>{kn(!0,.5),Ae(6.5,()=>kn(!1))},.5,.5),[]),archive:()=>(Me(Xe,.6,1),Me(Xe,.6,3.6),Me(w.cab_plane,.5,2.2),[]),about:()=>[],process:()=>[St("compass",w.compass,4.4,0,.8)]},tt={hello:()=>_n(!0)},xn={start(C){var N;_t();const L=jt[C];L&&L().forEach(Q=>{Ke[Q.key]=Q,Q.start(!1)}),(N=tt[C])==null||N.call(tt)},stop:_t};Object.keys(w).forEach(C=>{const L=w[C];w[C]=(...N)=>{const Q=Ke[C];if(N.length&&Q){Q.running?Q.stop():Q.start(!0);return}return N.length&&(Pt[C]=!1),L(...N)}});let wn=!1;const $n=new kr(0,0,0,0);return{group:r,sprites:s,pickables:a,act:w,drag:S,toast:ze,worldOf:p,say:xt,rig:Se,auto:xn,loops:()=>Object.fromEntries(Object.entries(Ke).map(([C,L])=>[C,L.running])),interactive:C=>C.interactive!==!1&&(w[C.name]||S[C.name]),tip:C=>/^cab_(body|inner|drawer)$/.test(C.name)?ue?"Click: shut the drawer":"Click: open the drawer":Py[C.name],autoFootball(){},rollHold(C,L=0){if(!me(!0,L)){C==null||C();return}ke.delayedCall(Math.max(.3,4.6-L),()=>C==null?void 0:C())},resetSpill:()=>Re(),fadeSpill:C=>{ke.to(At.state,{alpha:0,duration:.9,onUpdate:()=>At.apply()}),[un,dn,zn].forEach(L=>ke.to(L.material,{opacity:0,duration:.9})),ke.delayedCall(.95,()=>C==null?void 0:C())},tick(C,L){o.forEach(N=>N(C,L)),(Ne||Ve.v>.001||wn)&&(Qe(L),wn=Ne||Ve.v>.001)},onBasis(){h(),!$n.equals(e.quaternion)&&($n.copy(e.quaternion),Object.values(s).forEach(C=>C.apply()))}}}const Ph=Math.PI/4,jl=Math.asin(1/Math.sqrt(3)),Lh=new X(Math.cos(jl)*Math.sin(Ph),Math.sin(jl),Math.cos(jl)*Math.cos(Ph));async function Dp(i,{reduced:e=!1,parallax:t=!0}={}){try{await document.fonts.load("700 56px Lufga")}catch{}const n=new Cy({canvas:i,antialias:!1,powerPreference:"high-performance"}),r=Math.min(devicePixelRatio||1,2);n.setPixelRatio(r),n.setClearColor(0,1),n.outputColorSpace=Zt,n.toneMapping=Nu,n.toneMappingExposure=1.15;const s=new eg,a=new Zo(-1,1,1,-1,.1,6e3);a.position.copy(Lh).multiplyScalar(2e3),a.lookAt(0,0,0),a.updateMatrixWorld(!0),s.add(new bg(16774894,7234910,.9));const o=new Ag(16773598,2.2);o.position.set(-700,1100,500),s.add(o);const l=await Ly({scene:s,camera:a}),c={X:1e3,Y:640,zoom:1,fx:.5,fy:.5};let u=1,h=1,d=1;const f=()=>{n.setPixelRatio(r),u=i.clientWidth||innerWidth,h=i.clientHeight||innerHeight,n.setSize(u,h,!1),d=u/h>1.2?Math.min(u/2e3,h/1250):u/1500};addEventListener("resize",f);try{new ResizeObserver(f).observe(i)}catch{}f();const g=V=>Object.assign(c,V),_={x:0,y:0,tx:0,ty:0,in:!1,cx:0,cy:0},p=new Pg,m=new ot;let E=null,R=null,x=null,M=null;const T=()=>{m.set(_.tx,_.ty),p.setFromCamera(m,a);const V=p.intersectObjects(l.pickables,!1).filter($=>{const j=$.object.userData.sprite;return l.interactive(j)&&j.hit($.uv)});return V.length?(V.sort(($,j)=>j.object.renderOrder-$.object.renderOrder),V[0].object.userData.sprite):null},A=V=>{const $=i.getBoundingClientRect();!$.width||!$.height||(_.tx=(V.clientX-$.left)/$.width*2-1,_.ty=-((V.clientY-$.top)/$.height*2-1),_.cx=V.clientX,_.cy=V.clientY)},v=()=>1/(d*c.zoom);let b=null;addEventListener("pointermove",V=>{if(A(V),_.in=V.target===i,K=!0,x){const $=v();x.moved+=Math.abs(V.movementX)+Math.abs(V.movementY),x.moved>6&&l.drag[x.sp.name].move(x.sp,(V.clientX-x.x)*$,-(V.clientY-x.y)*$)}},{passive:!0}),i.addEventListener("pointerdown",V=>{var j;A(V);const $=T();b={s:$,x:V.clientX,y:V.clientY,moved:0},$&&l.drag[$.name]&&(x={sp:$,x:V.clientX,y:V.clientY,moved:0},ke.killTweensOf($.state),l.drag[$.name].start($),(j=i.setPointerCapture)==null||j.call(i,V.pointerId))}),addEventListener("pointerup",V=>{var Ee,ve,Ge,Ne;if(x){const Ve=x;if(x=null,Ve.moved>6){l.drag[Ve.sp.name].end(Ve.sp),b=null;return}(ve=(Ee=l.drag[Ve.sp.name]).end)==null||ve.call(Ee,Ve.sp)}if(!b)return;const $=Math.hypot(V.clientX-b.x,V.clientY-b.y),j=b.s;b=null,!($>8||!j)&&((Ne=(Ge=l.act)[j.name])==null||Ne.call(Ge,j))}),addEventListener("pointerleave",()=>{_.in=!1});const D=new X,P=new Lg,I=new X,z=new X;let F=!0,k=0,K=!0;const H=()=>{if(!F)return;requestAnimationFrame(H);const V=P.getDelta(),$=Math.min(.05,V),j=P.elapsedTime;k++,_.x+=(_.tx-_.x)*Math.min(1,$*3),_.y+=(_.ty-_.y)*Math.min(1,$*3);const Ee=d*c.zoom,ve=u/Ee,Ge=h/Ee,Ne=e||!t?0:7/c.zoom,Ve=c.X-(c.fx-.5)*ve+_.x*Ne,J=c.Y-(c.fy-.5)*Ge-_.y*Ne,se=(Ve-Rp)/Pp,be=(J-Cp)/Lp;z.set((be+se)/2,0,(be-se)/2),a.left=-ve/2,a.right=ve/2,a.top=Ge/2,a.bottom=-Ge/2,a.updateProjectionMatrix(),a.position.copy(z).addScaledVector(Lh,2e3),a.lookAt(z),a.updateMatrixWorld(!0),D.setFromMatrixColumn(a.matrixWorld,0),o.position.copy(z).add(I.set(-700,1100,500)),l.onBasis(),l.tick($,j);const Fe=_.in&&!x?((k%3===0||K)&&(M=T(),K=!1),M):(x==null?void 0:x.sp)||null;Fe!==E&&(E=Fe,R==null||R(Fe?{name:Fe.name,tip:l.tip(Fe)}:null),i.style.cursor=Fe?x?"grabbing":"pointer":"default"),n.render(s,a)};return requestAnimationFrame(H),{world:l,pose:c,setPose:g,resize:f,project:V=>(I.copy(V).project(a),{x:(I.x*.5+.5)*u,y:(-I.y*.5+.5)*h}),get right(){return D},onHover(V){R=V},stop(){F=!1},get size(){return{W:u,H:h,base:d}}}}const Ce=(i,e=document)=>e.querySelector(i),Ft=(i,e=document)=>[...e.querySelectorAll(i)],ar=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Dt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Un=matchMedia("(prefers-reduced-motion: reduce)").matches,Gs=i=>`./assets/${i}`,uu="https://medium.com/@_harshvasa",Ip={echoes:"/projects/interview-echoes",circa:"/projects/circa",ark:"/projects/ark"},Up=[{id:"echoes",t:"Interview Echoes",cat:"Enterprise AI",d:"An AI companion that turns raw interview evidence into recommendations hiring teams can act on.",k:["AI","Enterprise","Insights"],cap:"Turning interview evidence into insight with"},{id:"ark",t:"ARK",cat:"Website & design system",d:"A website and its design system, shaped in six weeks.",k:["Website","UI/UX","Design system"],img:Gs("work/ark.webp"),href:"https://thatvasaworks.framer.website/ark",cap:"A website and its design system for"},{id:"circa",t:"Circa",cat:"Product & time",d:"Rethinking how we pass things on, so kids’ gear gets a second home.",k:["Circular economy","Parenting"],cap:"A second home for kids’ gear:"},{id:"compass",t:"Talent Compass",cat:"Trust & data viz",d:"Integrity signals that flag fraud and anomalies across high-volume candidate applications.",k:["Trust","Data viz","Systems"],cap:"Flagging fraud and anomalies with"},{id:"nomad",t:"Nomad",cat:"Mobile concept",d:"Travel planning for people who hate planning travel.",k:["Mobile","Travel","Concept"],cap:"Slow travel planning with"},{id:"observ",t:"Candidate Observability",cat:"Enterprise systems",d:"System observability from the candidate’s side: seeing what the hiring machine is doing to the person inside it.",k:["Observability","Enterprise","Systems"],cap:"System observability, candidate side:"},{id:"labyrinth",t:"Labyrinth",cat:"Data visualisation",d:"Data visualisation, documented end to end.",k:["Data viz","Documentation"],img:Gs("work/labyrinth.webp"),href:"https://www.figma.com/proto/i9EbSoHhjdpui9ZvgQdOJP/Labyrinth_Documentation?page-id=133%3A10&node-id=133-11&starting-point-node-id=223%3A26226&scaling=scale-down-width&content-scaling=fixed",cap:"Data visualisation, documented end to end:"},{id:"skippr",t:"Skippr",cat:"Tangible product",d:"A tangible product you can pick up.",k:["Tangible","Product"],img:Gs("work/skippr.webp"),href:"https://thatvasaworks.framer.website/skippr",cap:"A tangible product to pick up:"},{id:"groov",t:"Groov",cat:"Multi-modal",d:"A multi-modal experiment, filed in the archive.",k:["Multi-modal","Interaction"],img:Gs("work/groov.webp"),href:"https://thatvasaworks.framer.website/groov",cap:"A multi-modal experiment:"},{id:"tattva",t:"Tattva",cat:"Physical computing",d:"Physical computing: screens stepping off the glass.",k:["Physical computing","Hardware"],img:Gs("work/tattva.webp"),href:"https://thatvasaworks.framer.website/tattva",cap:"Physical computing for"},{id:"gg",t:"GG",cat:"Game interface",d:"A game interface, filed in the archive.",k:["Game","Interface"],cap:"A game interface:"},{id:"stambh",t:"Stambh",cat:"Spatial installation",d:"A spatial installation, filed in the archive.",k:["Spatial","Installation"],cap:"A spatial installation:"}],Np=Object.fromEntries(Up.map(i=>[i.id,i])),Js=(i,e)=>i+Math.random()*(e-i),zr=i=>{Ft("[data-r]",i).forEach(e=>{if(e.dataset.rd)return;e.dataset.rd="1";const t=n=>[...n.childNodes].forEach(r=>{if(r.nodeType===3){const s=document.createDocumentFragment();r.textContent.split(/(\s+)/).forEach(a=>{if(!a)return;if(/^\s+$/.test(a)){s.append(" ");return}const o=document.createElement("span");o.className="sp-w";const l=document.createElement("span");l.className="sp-t",l.textContent=a,o.append(l),s.append(o)}),r.replaceWith(s)}else r.nodeType===1&&!r.classList.contains("sp-w")&&t(r)});t(e)})},ya=(i,{delay:e=0,speed:t=1}={})=>{const n=ke.timeline({delay:e});let r=0;return Ft(".sp-w",i).forEach(s=>{var _;const a=s.getBoundingClientRect();if(!a.width)return;const o=Ce(".sp-t",s),l=4,c=a.height*.86/l,u=Math.max(1,Math.round(a.width/c)),h=a.width/u,d=r++*.07/t;(_=Ce(".sp-tiles",s))==null||_.remove();const f=document.createElement("span");f.className="sp-tiles",s.append(f);const g=Array.from({length:u*l},(p,m)=>{const E=m%u,R=m/u|0,x=document.createElement("i");return x.style.cssText=`left:${E*h}px;width:${h+.5}px;height:${c+.5}px;top:${a.height*.07+R*c}px`,f.append(x),x});ke.set(o,{opacity:0}),ke.set(g,{opacity:0}),g.forEach(p=>{const m=d+Js(0,.28),E=m+Js(.2,.5);n.set(p,{opacity:1,scaleY:Js(.35,1)},m).set(p,{scaleY:1},m+.05).set(p,{opacity:0},E),Math.random()<.4&&n.set(p,{opacity:1},E+.06).set(p,{opacity:0},E+.1)}),n.set(o,{opacity:1},d+.24)}),n},Dy=()=>{const i=Math.random();return i<.8?"f0":i<.9?"f1":"f3"},Fp=i=>{const e=i.dataset.chaos;i.innerHTML="",i.setAttribute("aria-label",e),e.split(" ").forEach((r,s,a)=>{const o=document.createElement("span");o.style.cssText="white-space:nowrap;display:inline-block",o.setAttribute("aria-hidden","true"),[...r].forEach(l=>{const c=document.createElement("i");c.textContent=l,c.className="f0",o.appendChild(c)}),i.appendChild(o),s<a.length-1&&i.appendChild(document.createTextNode(" "))});const t=()=>Ft("i",i).forEach(r=>{r.className=Math.random()<.4?Dy():"f0"}),n=()=>Ft("i",i).forEach(r=>{r.className="f0"});i._wob=t,i._calm=n,i.addEventListener("pointerenter",()=>{if(Un)return;let r=0;const s=setInterval(()=>{t(),++r>6&&(clearInterval(s),n())},90)})},Iy=i=>{if(Un||!i._wob)return;let e=0;const t=setInterval(()=>{i._wob(),++e>7&&(clearInterval(t),i._calm())},85)};Ft("[data-chaos]").forEach(Fp);const Uy=(i,e)=>{i.dataset.chaos=e,Fp(i)},Ur=Ce("#cur"),Ny=Ce("b",Ur),Uo=Ce("#snd");let mo=innerWidth/2,_o=innerHeight/2,Op=mo,Bp=_o,pa=!1,No="",kp=!1,Fo=!1;addEventListener("pointermove",i=>{Op=i.clientX,Bp=i.clientY,kp=!0},{passive:!0});const Fy=()=>document.body.classList.contains("is-space")&&Er==="space"&&scrollY<innerHeight*.75;var Vh;{const i=Ce("#hint"),e=i&&Ce("span",i);if(i&&e){const t=()=>i.style.setProperty("--tw",e.scrollWidth+"px");t(),(Vh=document.fonts)==null||Vh.ready.then(t),i.addEventListener("pointerenter",t),i.addEventListener("focus",t)}}const Oy=()=>{const i=Fy();i!==Fo&&(Fo=i,document.body.classList.toggle("cur-on",i),Uo.classList.toggle("on",i),Ce("#hint").classList.toggle("on",i),i||(pa=!1,No="",zp())),Ur.style.opacity=i&&kp?"1":"0",mo+=(Op-mo)*.28,_o+=(Bp-_o)*.28,Ur.style.transform=`translate3d(${mo.toFixed(1)}px, ${_o.toFixed(1)}px, 0)`},zp=()=>{Ur.classList.toggle("lens",pa),Ur.classList.toggle("lbl",!!No&&!pa),Ny.textContent=No};document.addEventListener("pointerdown",()=>Ur.classList.add("press"));addEventListener("pointerup",()=>Ur.classList.remove("press"));const Oo=()=>{const i=As();Uo.classList.toggle("is-off",i),Uo.setAttribute("aria-pressed",String(!i))};let go=!1;Uo.addEventListener("click",()=>{go=!1,Or(),aa(!As()),Oo()});Oo();addEventListener("scroll",()=>{document.body.classList.contains("is-space")&&(scrollY>40?As()||(aa(!0),go=!0,Oo()):scrollY<4&&go&&(aa(!1),go=!1,Oo()))},{passive:!0});const _s=document.createElement("div");_s.className="qtip";document.body.appendChild(_s);addEventListener("pointermove",i=>{_s.style.transform=`translate3d(${Math.min(i.clientX+16,innerWidth-270)}px, ${i.clientY+18}px, 0)`},{passive:!0});const By="",du=Ce("#statement"),hu=[];By.split(" ").filter(Boolean).forEach(i=>{const e=document.createElement("span");e.className="w",e.setAttribute("aria-hidden","true"),i.replace(/[^a-z]/gi,"").toLowerCase(),e.textContent=i,du.appendChild(e),du.appendChild(document.createTextNode(" ")),hu.push(e)});const fu=()=>{const i=du.getBoundingClientRect(),e=innerHeight,t=ar((e*.95-i.top)/(e*.3));hu.forEach((n,r)=>n.classList.toggle("on",r/hu.length<t+.02))},Vp=Ce("#introw"),ec=Ce("#intro"),ky=()=>{const i=Vp.getBoundingClientRect(),e=innerHeight,t=innerWidth<=900?0:ar((-i.top-e*.04)/(e*.2));ec.style.opacity=String(1-t),ec.style.transform=`translate3d(0, ${(-t*36).toFixed(1)}px, 0)`,ec.style.filter=t>.01?`blur(${(t*10).toFixed(1)}px)`:""},xo=Ce(".sp-hero");zr(xo);const zy=Ce("#nm"),Vy=()=>{xo.classList.add("in"),ke.killTweensOf(Ft(".sp-t, .sp-tiles i",xo)),ya(xo,{delay:.2,speed:.8}),ke.fromTo(Ce("img",zy),{yPercent:24,opacity:0},{yPercent:0,opacity:1,duration:Un?0:1.1,ease:"expo.out",delay:.35,clearProps:"transform"})},Gy=i=>{const e=Ce("img",i);if(!e||i._f)return;i._f=1;const t=8,n=10,r=document.createElement("span");r.className="fx__t",r.style.setProperty("--n",t);const s=Array.from({length:t*n},()=>{const o=document.createElement("i");return r.append(o),o});i.append(r),ke.set(e,{opacity:0}),ke.set(s,{opacity:0});const a=ke.timeline();s.forEach(o=>{const l=Js(0,.7),c=l+Js(.2,.5);a.set(o,{opacity:1},l).set(o,{opacity:0},c),Math.random()<.4&&a.set(o,{opacity:1},c+.06).set(o,{opacity:0},c+.1)}),a.set(e,{opacity:1},.5)},Hy=["echoes","ark","circa"].map(i=>Np[i]);Ce("#selcards").innerHTML=Hy.map((i,e)=>{const t=`<span class="no">0${e+1}</span><div class="img">${i.img?`<img src="${i.img}" alt="${Dt(i.t)}" loading="lazy">`:""}</div><div class="cap">${Dt(i.t)}<span>↳ ${Dt(i.cat)}</span></div><div class="det"><p>${Dt(i.d)}</p><div class="kw">${i.k.map(n=>`<span>${Dt(n)}</span>`).join("")}</div></div>`;return i.href&&!(window.__VP_NAV&&Ip[i.id])?`<a class="card" data-cur="View" href="${Dt(i.href)}" target="_blank" rel="noopener noreferrer">${t}</a>`:`<button type="button" class="card" data-cur="View" data-id="${i.id}">${t}</button>`}).join("");const Wy=Ft("#selcards .card"),Xy=()=>{const i=innerHeight;Wy.forEach(e=>{const t=e.getBoundingClientRect();if(t.bottom<-200||t.top>i+200)return;const n=t.top+Math.min(t.height,i*.7)/2,r=Math.abs(n-i/2)/i;e.style.transform=`scale(${(1-ar(r-.18,0,.6)*.16).toFixed(4)})`})},Gp=[{n:"Odds & Charms",tool:"Midjourney",note:"A slot machine that deals you a personality.",d:"Nine charms, three reels and one jackpot: pull the lever and the machine decides which version of me walks in. It is also the front door of Vasa Space.",k:["Interaction","Play","Sound"],x:12,y:12},{n:"Desk Heroes",tool:"Claude",note:"The objects that quietly carry my workday.",d:"The lamp, the laptop, the mug that never stays full. A small study of the objects that carry a working day, rendered in chrome.",k:["3D","Objects","Still life"],x:68,y:9},{n:"Side B",tool:"Suno",note:"The tracks nobody asked for, pressed anyway.",d:"A turntable that plays the tracks nobody asked for. Drop the needle in Vasa Space and the room hums along with a lo-fi loop.",k:["Sound","Music","Interaction"],x:14,y:64},{n:"RoxCity",tool:"Claude Code",note:"A tiny city, one block at a time.",d:"A tiny city built one block at a time: a weekend rabbit hole about how small decisions add up to a neighbourhood.",k:["Worldbuilding","Systems","Play"],x:66,y:62}],Hp=Ce("#exp");Gp.forEach((i,e)=>{const t=document.createElement("div");t.className="xt",t.style.cssText=`left:${i.x}%;top:${i.y}%`,t.dataset.x=e,t.innerHTML=`<button class="tag" type="button" data-cur="Tinkering with ${Dt(i.tool)}"><b>${e+1}</b>${Dt(i.n)}</button><div class="box"><span class="soon">Coming soon</span><div class="txt"><h5>${Dt(i.n)}</h5><p>${Dt(i.note)}</p><div class="kw">${i.k.map(n=>`<span>${Dt(n)}</span>`).join("")}<span>${Dt(i.tool)}</span></div></div></div>`,Hp.appendChild(t)});const qy=Ft(".xt",Hp),Yy=()=>{const i=innerHeight;qy.forEach(e=>e.classList.toggle("open",e.getBoundingClientRect().top<i*.6))},$y={search:'<circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/>',nodes:'<circle cx="3.5" cy="8" r="1.8"/><circle cx="12.5" cy="3.5" r="1.8"/><circle cx="12.5" cy="12.5" r="1.8"/><path d="M5.2 7.2l5.6-3M5.2 8.8l5.6 3"/>',target:'<circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2.4"/>',figma:'<path d="M5.5 1.8h2.5v4.4H5.5a2.2 2.2 0 0 1 0-4.4zM8 1.8h2.5a2.2 2.2 0 0 1 0 4.4H8zM5.5 6.2H8v4.4H5.5a2.2 2.2 0 0 1 0-4.4zM5.5 10.6H8v2a2.5 2.5 0 1 1-2.5-2z"/><circle cx="10.5" cy="8.4" r="2.2"/>',grid:'<rect x="2" y="2" width="5" height="5"/><rect x="9" y="2" width="5" height="5"/><rect x="2" y="9" width="5" height="5"/><rect x="9" y="9" width="5" height="5"/>',cursor:'<path d="M3 2l10 5-4.2 1.3L7.6 12.5z"/>',framer:'<path d="M3 2h10v4H8zM3 6h10l-5 4H3zM3 10h5v4z"/>',cube:'<path d="M8 1.5l5.5 3v7L8 14.5l-5.5-3v-7zM8 8.4v6M8 8.4l5.5-3.9M8 8.4L2.5 4.5"/>',wave:'<path d="M1.5 8q2-6 4 0t4 0t4 0"/>',atom:'<ellipse cx="8" cy="8" rx="6.5" ry="2.6"/><ellipse cx="8" cy="8" rx="6.5" ry="2.6" transform="rotate(60 8 8)"/><ellipse cx="8" cy="8" rx="6.5" ry="2.6" transform="rotate(120 8 8)"/>',wind:'<path d="M2 6h7a2 2 0 1 0-2-2M2 10h9a2 2 0 1 1-2 2M2 8h11"/>',hammer:'<path d="M8.5 2.5l4.5 4.5-2 2-4.5-4.5zM7.5 6L3 11.5 4.5 13 10 8.5"/>',swift:'<path d="M4.5 4.5L2 8l2.5 3.5M11.5 4.5L14 8l-2.5 3.5M9.5 3l-3 10"/>',prompt:'<rect x="1.5" y="2.5" width="13" height="11" rx="2"/><path d="M4.5 6.5L7 8.5l-2.5 2M8.5 10.5h3"/>',branch:'<circle cx="4" cy="3.5" r="1.7"/><circle cx="4" cy="12.5" r="1.7"/><circle cx="12" cy="7" r="1.7"/><path d="M4 5.2v5.6M4 9c0-2 8-1.2 8-0.3"/>',spark:'<path d="M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5 6.4 9.6 1.5 8l4.9-1.6z"/>'},Wp=[{n:"Discovery",k:[["UX Research","search"],["Systems Thinking","nodes"],["Product Strategy","target"]],side:"up"},{n:"Craft",k:[["Figma","figma"],["Design Systems","grid"],["Interaction Design","cursor"]],side:"dn"},{n:"Playground",k:[["Framer","framer"],["Three.js","cube"],["Motion","wave"]],side:"dn"},{n:"Engineering",k:[["React","atom"],["Tailwind","wind"],["Xcode","hammer"],["SwiftUI","swift"]],side:"up"},{n:"AI-Native",k:[["Claude Code","prompt"],["Agentic Workflows","branch"],["LLMs","spark"]],side:"dn"}],vo=Ce("#bs"),Xp=Ce("#bsitems"),Qs=Ce("#bsfill"),Ky=Ce("#bsbase"),Dh=Ce("#bsph"),Ih=Ce("#bsst"),Uh=Ce("#bsgrid"),Bo=Wp.map((i,e)=>{const t=document.createElement("div");return t.className="bsi "+i.side,t.dataset.i=e,t.innerHTML=`<i class="dot"></i><i class="lead"></i><div class="bx tb"><b class="bh" data-r>${Dt(i.n)}</b><p class="bk">${i.k.map(([n,r],s)=>`<span class="sk" data-r><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$y[r]}</svg>${Dt(n)}${s<i.k.length-1?'<i class="sp">·</i>':""}</span>`).join(" ")}</p></div>`,Xp.appendChild(t),t});let ko=1,So=[],Nh=[];const jo=()=>{const i=Ih.clientWidth,e=Ih.clientHeight;if(!i)return;const t=ar(Math.round(i/40),34,56),n=Math.round(i/2),r=Math.round(e/2);Uh.style.backgroundSize=`${t}px ${t}px`,Uh.style.backgroundPosition=`${n}px ${r}px`;const s=[3,-3,0,3,-3],a=[-9,-3,3,9],o=[[-20,s[0]]];a.forEach((d,f)=>{o.push([d,s[f]],[d,s[f+1]])}),o.push([20,s[4]]);const c="M"+o.map(([d,f])=>[n+d*t+.5,r+f*t+.5]).map(([d,f])=>`${d} ${f}`).join("L");Ky.setAttribute("d",c),Qs.setAttribute("d",c),ko=Qs.getTotalLength(),Qs.style.strokeDasharray=ko;const u=4*t;Xp.style.setProperty("--bw",u+"px");const h=[-13,-7,-1,5,11];So=h.map((d,f)=>{let g=0;for(let _=0;_<o.length-1;_++){const[p,m]=o[_],[E,R]=o[_+1];if(m===R&&m===s[f]&&d>=Math.min(p,E)&&d<=Math.max(p,E))return g+Math.abs(d-p)*t;g+=Math.hypot(E-p,R-m)*t}return g}),Bo.forEach((d,f)=>{const g=n+(h[f]-1)*t,_=r+s[f]*t;d.style.left=g+"px",d.style.setProperty("--dx",t+"px"),d.classList.contains("up")?(d.style.bottom=e-(_-28)+"px",d.style.top="auto"):(d.style.top=_+28+"px",d.style.bottom="auto")})};Wp.forEach((i,e)=>{zr(Bo[e]),Ft(".sp-t",Bo[e]).forEach(t=>t.style.opacity=0)});jo();addEventListener("resize",jo);var Gh;(Gh=document.fonts)==null||Gh.ready.then(jo);const Zy=()=>{if(!vo||!So.length&&(jo(),!So.length))return;const i=vo.getBoundingClientRect(),e=vo.offsetHeight-innerHeight,t=ar(-i.top/Math.max(1,e)),r=ar((t-.04)/.86)*ko;Qs.style.strokeDashoffset=ko-r;const s=Qs.getPointAtLength(r);Dh.style.transform=`translate3d(${s.x.toFixed(1)}px, ${s.y.toFixed(1)}px, 0)`,Dh.style.opacity=t>.005?1:0,Bo.forEach((a,o)=>{const l=r>=So[o]-4;l!==a.classList.contains("on")&&(a.classList.toggle("on",l),l&&!Nh[o]&&(Nh[o]=1,ya(a,{delay:.25,speed:1.1})))})};let tc=!1;const no={};let Fh=0;const Oh=i=>{if(Un||tc)return;tc=!0;const e=n=>n.preventDefault(),t=n=>{["ArrowDown","ArrowUp","PageDown","PageUp","Home","End"," "].includes(n.key)&&n.preventDefault()};addEventListener("wheel",e,{passive:!1}),addEventListener("touchmove",e,{passive:!1}),addEventListener("keydown",t),setTimeout(()=>{removeEventListener("wheel",e),removeEventListener("touchmove",e),removeEventListener("keydown",t),tc=!1},i)},Jy=()=>{const i=scrollY>Fh+.5;if(Fh=scrollY,!i||document.body.classList.contains("is-splash"))return;const e=innerHeight,t=Vp.getBoundingClientRect().top;!no.e&&t<e*.08?(no.e=1,t>-e*.03&&scrollBy(0,t),Oh(5200)):!no.b&&vo.getBoundingClientRect().top<e*.1&&(no.b=1,Oh(1500))};Ce("#pgrid").innerHTML=Up.map(i=>`<button type="button" class="pt reveal" data-cur="View" data-id="${i.id}"><span class="im">${i.img?`<img src="${i.img}" alt="${Dt(i.t)}" loading="lazy">`:""}</span><span class="cp">${Dt(i.cap)} <b>${Dt(i.t)}</b></span></button>`).join("");const zo=Ce("#modal"),Bh=i=>{Ce("#mimg").innerHTML=i.img?`<img src="${i.img}" alt="${Dt(i.t)}">`:"",Ce("#mtxt").innerHTML=`<h4 class="ch" id="mt"></h4><p>${Dt(i.cat||"")}</p><p>${Dt(i.d)}</p><div class="kw">${i.k.map(e=>`<span>${Dt(e)}</span>`).join("")}</div>${i.href?`<a class="go" href="${Dt(i.href)}" target="_blank" rel="noopener noreferrer">Open case study ↗</a>`:'<p style="color:#777;font-size:11px;text-transform:uppercase">Coming soon</p>'}`,Uy(Ce("#mt"),i.t),zo.classList.add("on"),Ce("#mx").focus()},Nr=()=>{zo.classList.remove("on"),Ce("#amodal").classList.remove("on")};Ce("#mx").onclick=Nr;Ce("#ax").onclick=Nr;zo.addEventListener("click",i=>{i.target===zo&&Nr()});Ce("#amodal").addEventListener("click",i=>{i.target===Ce("#amodal")&&Nr()});addEventListener("keydown",i=>{i.key==="Escape"&&Nr()});document.addEventListener("click",i=>{const e=i.target.closest(".pt, .card[data-id]");if(e){const n=window.__VP_NAV&&Ip[e.dataset.id];if(n)try{top.location.href=new URL(n,top.location.origin).href;return}catch{}Bh(Np[e.dataset.id]);return}const t=i.target.closest(".xt .tag");if(t){const n=Gp[+t.closest(".xt").dataset.x];Bh({t:n.n,cat:"Side quest · "+n.tool,d:n.d,k:n.k})}});{const i=Ft(".ac"),e=()=>i.forEach(n=>{n.classList.remove("on"),n.setAttribute("aria-expanded","false")});i.forEach(n=>{const r=()=>{const s=n.classList.contains("on");e(),s||(n.classList.add("on"),n.setAttribute("aria-expanded","true"))};n.addEventListener("click",s=>{if(s.target.closest(".xb")){e();return}s.target.closest("a, canvas, .pb")||n.classList.contains("on")&&s.target.closest(".hv")||r()}),n.addEventListener("keydown",s=>{s.target===n&&(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),r())})}),addEventListener("keydown",n=>{n.key==="Escape"&&e()});const t=Ce('.ac[data-s="hello"] canvas');if(t){const n=t.closest(".pd"),r=t.getContext("2d"),s=Ce(".ps",n);let a=!1,o=!1;const l=s.textContent;r.lineWidth=2,r.lineCap="round",r.lineJoin="round",r.strokeStyle="#0a0a0a";const c=h=>{const d=t.getBoundingClientRect();return[(h.clientX-d.left)*t.width/d.width,(h.clientY-d.top)*t.height/d.height]};t.addEventListener("pointerdown",h=>{a=!0,o=!0,t.setPointerCapture(h.pointerId);const[d,f]=c(h);r.beginPath(),r.moveTo(d,f),r.lineTo(d+.1,f),r.stroke()}),t.addEventListener("pointermove",h=>{if(!a)return;const[d,f]=c(h);r.lineTo(d,f),r.stroke()});const u=()=>{a=!1};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u),Ce("[data-pc]",n).onclick=()=>{r.clearRect(0,0,t.width,t.height),o=!1,s.textContent=l},Ce("[data-ps]",n).onclick=async()=>{if(!o){s.textContent="Blank is bold, but draw something.";return}const h=document.createElement("canvas");h.width=t.width,h.height=t.height;const d=h.getContext("2d");d.fillStyle="#fff",d.fillRect(0,0,h.width,h.height),d.drawImage(t,0,0);const f=h.toDataURL("image/png");let g=!1;try{const _=window.claude&&await window.claude.use("db"),p=window.claude&&await window.claude.use("user");_&&p&&(await _.collection("doodles").doc(String(await p.id())).set({img:f,at:Date.now()}),g=!0)}catch{}if(!g)try{const _=JSON.parse(localStorage.getItem("vp-doodles")||"[]");_.push({img:f,at:Date.now()}),localStorage.setItem("vp-doodles",JSON.stringify(_.slice(-5)))}catch{}s.textContent=g?"Got it. Thank you.":"Saved on this device only.",r.clearRect(0,0,t.width,t.height),o=!1}}}const qp=[{n:"Public speaking",tip:"Mic in hand, slides behind me, mild panic inside. Still the best part of the job.",img:"photos/talk",x:38,y:13,s:.9},{n:"Panels & pitches",tip:"I will pitch anything, including this portfolio, to you. You are welcome.",img:"photos/call",x:62,y:24,s:-.8},{n:"Writing",tip:"I write on Medium. Mostly design, sometimes whatever is bugging me.",img:"photos/sketch",x:46,y:36,s:1.1,href:uu},{n:"Football",tip:"Weekends belong to football. The banter is bigger than the tackles.",img:"photos/football",x:10,y:38,s:-1},{n:"Table tennis",tip:"Professional paddler. Yes, the table-tennis kind. Ask me about my spin.",img:"photos/tt",x:14,y:63,s:.8},{n:"Chess",tip:"Tennis champion, chess champion, Elo in the 1800s. Humble about all of it.",obj:"objects/chess",x:31,y:54,s:-.7},{n:"Collectibles",tip:"Curated over the years. My shelf is a design system with feelings.",obj:"vf/pins",x:84,y:40,s:1},{n:"My space",tip:"I curate my space like a portfolio: nothing sits there by accident.",obj:"vf/lamp",x:71,y:57,s:-1.1},{n:"Ghazals",tip:"Music aficionado, ghazals on loop. Jagjit Singh gets more of my hours than any algorithm.",img:"photos/studio",x:38,y:84,s:.9},{n:"Andaz Apna Apna, but eggs",tip:"Latest article: I am experimenting with food. The eggs are winning.",blank:"🥚",x:61,y:79,s:-.9,href:uu}],Yp=Ce("#chart");qp.forEach((i,e)=>{const t=document.createElement("div");t.className="pi",t.tabIndex=0,t.dataset.i=e,t.style.left=i.x+"%",t.style.top=i.y+"%",t.addEventListener("pointerenter",()=>{_s.textContent=i.tip,_s.classList.add("on")}),t.addEventListener("pointerleave",()=>_s.classList.remove("on"));const n='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="1.5"/><circle cx="9" cy="10" r="1.8"/><path d="M3.5 17l5-4.5 4 3.5 3-2.5 5 4"/></svg><em>Image</em>';t.innerHTML=`<div class="in"><div class="th ph">${n}</div><b>${Dt(i.n)}</b></div>`,Yp.appendChild(t),i.href&&t.addEventListener("click",()=>window.open(i.href,"_blank","noopener"))});const Qy=Ft(".pi",Yp),jy=()=>{const i=innerHeight;Qy.forEach(e=>{const t=e.getBoundingClientRect();if(t.bottom<-400||t.top>i+400)return;const n=Ce(".in",e),r=qp[e.dataset.i],s=t.top+t.height/2,a=(s-i/2)*r.s*.18,o=s+a,l=ar(o/(i*.2)),c=ar((i*1.02-o)/(i*.22)),u=Math.min(l,c),h=u*u*(3-2*u);n.style.transform=`translate3d(0, ${a.toFixed(1)}px, 0) scale(${(.94+.06*h).toFixed(3)})`,n.style.opacity=h.toFixed(3),n.style.filter=h<.99?`blur(${((1-h)*9).toFixed(1)}px)`:"none"})};{const i=["Plot twist: there is a life outside Figma.","Now playing: football, badly narrated.","Breaking: designer discovers eggs.","Channel 3: a chess game I am definitely winning.","Static. Even I need a day off."];let e=0;const t=Ce("#tv"),n=Ce("#tvq");t.addEventListener("click",()=>{e=(e+1)%i.length,n.textContent=i[e],t.classList.remove("zap"),t.offsetWidth,t.classList.add("zap");try{Or(),ao==null||ao(1)}catch{}})}const eE={mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/>',linkedin:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V17M8 7.2v.01M12 17v-3.8a2.3 2.3 0 0 1 4.6 0V17M12 10.5V17"/>',behance:'<path d="M3 6.5h4.8a2.6 2.6 0 0 1 0 5.2H3zM3 11.7h5.4a2.7 2.7 0 0 1 0 5.4H3zM14.5 7.5h5M13.6 13.6h7a3.5 3.5 0 1 0-1.1 2.6"/>',medium:'<ellipse cx="7.5" cy="12" rx="4.5" ry="5"/><ellipse cx="16" cy="12" rx="2" ry="4.6"/><path d="M20.6 7.6v8.8"/>',instagram:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><path d="M17.2 6.8v.01"/>',topmate:'<circle cx="12" cy="12" r="8.5"/><path d="M15.8 9.3a4.6 4.6 0 1 0 0 5.4"/>',resume:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 15.5h5"/>'};Ce("#socials").innerHTML=[["Email","mail","mailto:harshvasaa@gmail.com"],["LinkedIn","linkedin","https://www.linkedin.com/in/harshvasa/"],["Behance","behance","https://www.behance.net/harshvasa"],["Medium","medium",uu],["Instagram","instagram","https://instagram.com/harshvasa"],["Topmate","topmate","https://topmate.io/harshvasa"],["Resume","resume","./HarshVasa_Resume.pdf"]].map(([i,e,t])=>`<a href="${t}" aria-label="${i}" title="${i}" data-cur="${i}"${/^https?:|\.pdf/.test(t)?' target="_blank" rel="noopener noreferrer"':""}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${eE[e]}</svg></a>`).join("<i></i>");const $p=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),$p.unobserve(e.target))}),{threshold:.12}),kh=()=>Ft(".reveal:not(.in)").forEach(i=>$p.observe(i)),Kp=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(Iy(e.target),Kp.unobserve(e.target))}),{threshold:.4}),Zp=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(Gy(e.target),Zp.unobserve(e.target))}),{threshold:.3}),Zu=new IntersectionObserver(i=>i.forEach(e=>{e.isIntersecting&&(ya(e.target,{speed:1}),Zu.unobserve(e.target))}),{threshold:.5});zr(Ce("#intro"));Ft("#intro [data-r]").forEach(i=>{Ft(".sp-t",i).forEach(e=>e.style.opacity=0),Zu.observe(i)});Ft("[data-fx]").forEach(i=>Zp.observe(i));zr(Ce("#aboutw"));zr(Ce("#quirks"));Ft("#aboutw [data-r], #quirks [data-r]").forEach(i=>{Ft(".sp-t",i).forEach(e=>e.style.opacity=0),Zu.observe(i)});const nc={space:Ce("#v-space"),work:Ce("#v-work")},Jp=i=>{const e=Ce("#aboutw");if(!e)return;const t=e.getBoundingClientRect().top+scrollY-24;scrollTo({top:t,behavior:i?"smooth":"auto"})};Ce("#nav").innerHTML='<button type="button" data-v="space">Space</button><a class="hp" href="#space" aria-label="Harsh Vasa, home" data-cur="Home"><img src="./assets/logo.webp" alt=""></a><button type="button" data-v="work">Work</button>';let Er="";const Ju=()=>{const i=(location.hash||(window.__VP_HASH?"#"+window.__VP_HASH:"")||"#space").slice(1),e=nc[i]?i:"space";if(i==="about"){e!==Er&&(Er=e,Object.entries(nc).forEach(([t,n])=>n.classList.toggle("on",t===e)),Ft("#nav button").forEach(t=>t.classList.toggle("is-current",t.dataset.v===e)),Nr(),kh(),fu()),setTimeout(()=>Jp(!1),650);return}e!==Er&&(Er=e,Object.entries(nc).forEach(([t,n])=>n.classList.toggle("on",t===e)),Ft("#nav button").forEach(t=>t.classList.toggle("is-current",t.dataset.v===e)),scrollTo(0,0),Nr(),kh(),Ft(".view.on .ch").forEach(t=>Kp.observe(t)),fu(),e==="space"&&Vy())};Ce("#nav").addEventListener("click",i=>{const e=i.target.closest("button");if(e){if(e.dataset.v==="about"){Er==="space"?Jp(!0):location.hash="#about";return}location.hash==="#"+e.dataset.v?scrollTo({top:0,behavior:"smooth"}):location.hash="#"+e.dataset.v}});addEventListener("hashchange",Ju);const Qp=()=>{Er==="space"&&(fu(),ky(),Zy(),Jy(),Xy(),Yy(),jy()),Oy(),requestAnimationFrame(Qp)};let zh=!1;const jp=()=>{zh||(zh=!0,requestAnimationFrame(Qp))},ws=document.body,Vo=Ce("#splash"),Mo=Ce('[data-action="mute"]'),em=()=>{const i=As();Mo.classList.toggle("is-off",i),Mo.title=i?"Sound off":"Sound on",Mo.setAttribute("aria-pressed",String(i))};em();Mo.addEventListener("click",()=>{Or(),aa(!As()),em()});const tm="vp-entered";let nm=!1;try{nm=sessionStorage.getItem(tm)==="1"}catch{}let gs=!1;const ma=()=>{if(!gs){gs=!0;try{sessionStorage.setItem(tm,"1")}catch{}ws.classList.remove("is-splash","is-sliding"),ws.classList.add("is-space"),Vo.style.display="none",Ju(),jp()}},tE=()=>{if(!gs){if(Un){ma();return}ws.classList.add("is-sliding"),Vo.classList.add("is-lifting"),ke.to(".intro-ui",{opacity:0,duration:.4}),ws.classList.remove("is-splash"),Ju(),jp(),ke.to(Vo,{yPercent:-100,duration:1.4,ease:"expo.inOut",delay:.25,onComplete:ma})}},Go=N0({reduced:Un,onDone:tE});nm&&(Vo.style.display="none",setTimeout(()=>{Go.skip(),ma()},0));{const i=Ce(".splash__lead");i&&(i.dataset.r="1",zr(i.parentNode),ke.delayedCall(.55,()=>ya(i,{speed:.9})))}Ce('[data-action="skip"]').addEventListener("click",()=>{Or(),Go.skip(),ma()});ke.from(".slot",{opacity:0,scale:.96,duration:Un?0:1.1,ease:"power3.out",delay:.1});document.addEventListener("pointerdown",()=>Or(),{passive:!0});const ic={},nE=(i,e)=>{var d;const t=(d=i.world.sprites)==null?void 0:d[/^cab_/.test(e)?"cab_body":e];if(!t||ic[e]||Un)return;ic[e]=1;const n=t.state,r=()=>t.apply(),s=()=>{ic[e]=0},a=()=>ke.timeline({onComplete:s}).to(n,{rot:.05,duration:.14,ease:"power2.out",onUpdate:r}).to(n,{rot:-.04,duration:.2,ease:"power2.inOut",onUpdate:r}).to(n,{rot:0,duration:.35,ease:"elastic.out(1,0.5)",onUpdate:r}),o=()=>ke.timeline({onComplete:s}).to(n,{rot:-.045,duration:.07,ease:"sine.inOut",onUpdate:r}).to(n,{rot:.045,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:-.03,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:.02,duration:.09,ease:"sine.inOut",onUpdate:r}).to(n,{rot:0,duration:.14,ease:"sine.out",onUpdate:r}),l=()=>ke.timeline({onComplete:s}).to(n,{sc:1.2,duration:.22,ease:"power2.out",onUpdate:r}).to(n,{sc:1,duration:.5,delay:.25,ease:"power2.inOut",onUpdate:r}),c=()=>ke.timeline({onComplete:s}).to(n,{sc:1.12,rot:.04,duration:.2,ease:"power2.out",onUpdate:r}).to(n,{sc:1,rot:0,duration:.5,delay:.2,ease:"elastic.out(1,0.6)",onUpdate:r}),u=()=>ke.timeline({onComplete:s}).to(t,{flip:-1,duration:.26,ease:"power2.inOut",onUpdate:r}).to(t,{flip:1,duration:.3,ease:"back.out(2)",delay:.4,onUpdate:r}),h=/^(knight|mug|plant)$/.test(e)?[u,a,l]:[a,o,l,c];h[Math.floor(Math.random()*h.length)]()};Dp(Ce(".sp-frame__canvas"),{reduced:Un}).then(i=>{const e=Ce(".sp-toast");i.setPose({X:1e3,Y:690,zoom:1.12,fx:.5,fy:.475}),i.world.auto.start("hello"),i.world.toast.fn=t=>{if(!t){e.classList.remove("on");return}e.textContent=t,e.classList.add("on")},i.onHover(t=>{pa=!!t&&Fo,pa&&(No=""),zp(),t&&Fo&&nE(i,t.name)}),window.__space=i});{const i=Ce("#footcv"),e=Ce("#foot"),t=Ce("#footstage");let n=!1,r=!1,s=!1,a=!1,o=null;const l=document.createElement("div");l.className="foot__tip",l.setAttribute("aria-hidden","true"),t.appendChild(l),zr(Ce("#footin")),Ft("#footin [data-r]").forEach(p=>Ft(".sp-t",p).forEach(m=>m.style.opacity=0));const c=()=>{a||(a=!0,e.classList.add("go"),Ft("#footin [data-r]").forEach(p=>ya(p,{delay:.35,speed:1})))},u=()=>{if(!(s||!(o!=null&&o.world))){if(s=!0,l.classList.remove("on"),h=null,Un){c();return}setTimeout(c,16e3);try{o.world.rollHold(()=>ke.delayedCall(.9,()=>{try{o.world.fadeSpill(()=>ke.delayedCall(.35,c))}catch{c()}}))}catch{c()}}};let h=null,d=0;const f=()=>{if(!h||!(o!=null&&o.project)){d=0;return}const p=o.project(h);l.style.left=p.x.toFixed(1)+"px",l.style.top=(p.y-4).toFixed(1)+"px",d=requestAnimationFrame(f)},g=()=>{!r||!(o!=null&&o.world)||s||Un||ke.delayedCall(1,()=>{s||(o.world.toast.fn=(p,m)=>{if(!p){l.classList.remove("on"),h=null;return}l.textContent=p,h=m,d||f(),l.classList.add("on")},o.world.say("football","Roll me. I dare you.",0))})},_=()=>Dp(i,{reduced:Un,parallax:!1}).then(p=>{o=p,p.setPose({X:1e3,Y:690,zoom:1.2,fx:.5,fy:.5}),window.__foot=p,requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("rdy")));const m=p.world;Object.keys(m.act).forEach(E=>{E!=="football"&&(m.act[E]=()=>{})}),Object.keys(m.drag||{}).forEach(E=>delete m.drag[E]),m.act.football=u,m.toast.fn=()=>{},g()}).catch(()=>{o={},c()});new IntersectionObserver(p=>{p[0].isIntersecting&&!n&&(n=!0,_())},{rootMargin:"2400px"}).observe(t),new IntersectionObserver(p=>{p[0].isIntersecting&&!r&&(r=!0,Un?c():g())},{threshold:.25}).observe(e)}{const i=(t,n,r=8)=>{if(!n)return!1;const s=n.getBoundingClientRect();return t.clientX>=s.left-r&&t.clientX<=s.right+r&&t.clientY>=s.top-r&&t.clientY<=s.bottom+r},e=()=>{gs||Go.pull()};document.addEventListener("click",t=>{if(!(gs||!ws.classList.contains("is-splash"))){if(i(t,Ce('[data-action="skip"]'),4)){Or(),Go.skip(),ma();return}(i(t,Ce(".splash__lead"),6)||i(t,Ce(".slot__lever"),6))&&e()}},!0),addEventListener("keydown",t=>{var n,r;!gs&&ws.classList.contains("is-splash")&&(t.key==="Enter"||t.key===" ")&&!((r=(n=t.target).closest)!=null&&r.call(n,'button, [role="button"]'))&&(t.preventDefault(),e())})}document.addEventListener("pointerdown",()=>B0(),{passive:!0});
