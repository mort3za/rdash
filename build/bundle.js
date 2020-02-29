var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){(null!=e||t.value)&&(t.value=e)}function v(t,e,n){t.classList[n?"add":"remove"](e)}let g;function y(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}function _(){const t=b();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const $=[],x=[],k=[],w=[],j=Promise.resolve();let O=!1;function S(t){k.push(t)}let P=!1;const E=new Set;function F(){if(!P){P=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];y(e),C(e.$$)}for($.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];E.has(e)||(E.add(e),e())}k.length=0}while($.length);for(;w.length;)w.pop()();O=!1,P=!1,E.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const z=new Set;let A;function T(){A={r:0,c:[],p:A}}function M(){A.r||o(A.c),A=A.p}function N(t,e){t&&t.i&&(z.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),A.c.push(()=>{z.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function L(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const s=t&&(e.current=t)(l);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(T(),R(t,1,1,()=>{e.blocks[n]=null}),M())}):e.block.d(1),s.c(),N(s,1),s.m(e.mount(),e.anchor),i=!0),e.block=s,e.blocks&&(e.blocks[o]=s),i&&F()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=b();if(t.then(t=>{y(n),o(e.then,1,e.value,t),y(null)},t=>{y(n),o(e.catch,2,e.error,t),y(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function U(t,e){R(t,1,1,()=>{e.delete(t.key)})}function I(t){t&&t.c()}function J(t,n,c){const{fragment:l,on_mount:s,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,c),S(()=>{const n=s.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),a.forEach(S)}function q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&($.push(t),O||(O=!0,j.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,r,c,l,s,i,a=[-1]){const u=g;y(e);const f=r.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:a};let p=!1;d.ctx=c?c(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&H(e,t)),n}):[],d.update(),p=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target&&(r.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(r.target)):d.fragment&&d.fragment.c(),r.intro&&N(e.$$.fragment),J(e,r.target,r.anchor),F()),y(u)}class D{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var G={exports:{}};if("undefined"==typeof self||!self.crypto&&!self.msCrypto)throw new Error("Your browser does not have secure random generator. If you don’t need unpredictable IDs, you can use nanoid/non-secure.");var B=self.crypto||self.msCrypto;G.exports=function(t){t=t||21;for(var e="",n=B.getRandomValues(new Uint8Array(t));0<t--;)e+="Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-"[63&n[t]];return e};var V=G.exports,Y="object"==typeof global&&global&&global.Object===Object&&global,K="object"==typeof self&&self&&self.Object===Object&&self,Q=Y||K||Function("return this")(),X=Q.Symbol,Z=Object.prototype,tt=Z.hasOwnProperty,et=Z.toString,nt=X?X.toStringTag:void 0;var ot=Object.prototype.toString;var rt=X?X.toStringTag:void 0;function ct(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":rt&&rt in Object(t)?function(t){var e=tt.call(t,nt),n=t[nt];try{t[nt]=void 0;var o=!0}catch(t){}var r=et.call(t);return o&&(e?t[nt]=n:delete t[nt]),r}(t):function(t){return ot.call(t)}(t)}function lt(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==ct(t)}var st=Array.isArray,it=X?X.prototype:void 0,at=it?it.toString:void 0;function ut(t){if("string"==typeof t)return t;if(st(t))return function(t,e){for(var n=-1,o=null==t?0:t.length,r=Array(o);++n<o;)r[n]=e(t[n],n,t);return r}(t,ut)+"";if(lt(t))return at?at.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function ft(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var dt,pt=Q["__core-js_shared__"],ht=(dt=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||""))?"Symbol(src)_1."+dt:"";var mt=Function.prototype.toString;var vt=/^\[object .+?Constructor\]$/,gt=Function.prototype,yt=Object.prototype,bt=gt.toString,_t=yt.hasOwnProperty,$t=RegExp("^"+bt.call(_t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function xt(t){return!(!ft(t)||(e=t,ht&&ht in e))&&(function(t){if(!ft(t))return!1;var e=ct(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}(t)?$t:vt).test(function(t){if(null!=t){try{return mt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function kt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(n)?n:void 0}var wt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jt=/^\w*$/;var Ot=kt(Object,"create");var St=Object.prototype.hasOwnProperty;var Pt=Object.prototype.hasOwnProperty;function Et(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}function Ft(t,e){for(var n,o,r=t.length;r--;)if((n=t[r][0])===(o=e)||n!=n&&o!=o)return r;return-1}Et.prototype.clear=function(){this.__data__=Ot?Ot(null):{},this.size=0},Et.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Et.prototype.get=function(t){var e=this.__data__;if(Ot){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return St.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return Ot?void 0!==e[t]:Pt.call(e,t)},Et.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ot&&void 0===e?"__lodash_hash_undefined__":e,this};var Ct=Array.prototype.splice;function zt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}zt.prototype.clear=function(){this.__data__=[],this.size=0},zt.prototype.delete=function(t){var e=this.__data__,n=Ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():Ct.call(e,n,1),--this.size,!0)},zt.prototype.get=function(t){var e=this.__data__,n=Ft(e,t);return n<0?void 0:e[n][1]},zt.prototype.has=function(t){return Ft(this.__data__,t)>-1},zt.prototype.set=function(t,e){var n=this.__data__,o=Ft(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this};var At=kt(Q,"Map");function Tt(t,e){var n,o,r=t.__data__;return("string"==(o=typeof(n=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?r["string"==typeof e?"string":"hash"]:r.map}function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}Mt.prototype.clear=function(){this.size=0,this.__data__={hash:new Et,map:new(At||zt),string:new Et}},Mt.prototype.delete=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},Mt.prototype.get=function(t){return Tt(this,t).get(t)},Mt.prototype.has=function(t){return Tt(this,t).has(t)},Mt.prototype.set=function(t,e){var n=Tt(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this};function Nt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var o=arguments,r=e?e.apply(this,o):o[0],c=n.cache;if(c.has(r))return c.get(r);var l=t.apply(this,o);return n.cache=c.set(r,l)||c,l};return n.cache=new(Nt.Cache||Mt),n}Nt.Cache=Mt;var Rt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/\\(\\)?/g,Ut=function(t){var e=Nt(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Rt,(function(t,n,o,r){e.push(o?r.replace(Lt,"$1"):n||t)})),e}));function It(t,e){return st(t)?t:function(t,e){if(st(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!lt(t))||(jt.test(t)||!wt.test(t)||null!=e&&t in Object(e))}(t,e)?[t]:Ut(function(t){return null==t?"":ut(t)}(t))}function Jt(t){if("string"==typeof t||lt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function qt(t,e,n){var o=null==t?void 0:function(t,e){for(var n=0,o=(e=It(e,t)).length;null!=t&&n<o;)t=t[Jt(e[n++])];return n&&n==o?t:void 0}(t,e);return void 0===o?n:o}function Ht(){let t=localStorage.getItem("widgets");return t=JSON.parse(t)||[],t}function Wt(t){localStorage.setItem("widgets",JSON.stringify(t))}function Dt(t){let e,n,o,r,c,u,h;return{c(){e=a("div"),n=a("label"),n.innerHTML="\n              JSON Path\n              <small>(Optional)</small>",o=f(),r=a("div"),c=a("input"),p(n,"class","label"),p(c,"class","input"),p(c,"type","text"),p(c,"placeholder",u="e.g. collections[0].products[2].price OR [0].jobUrl,[0].jobLocation"),p(r,"class","control"),p(e,"class","control")},m(i,a){s(i,e,a),l(e,n),l(e,o),l(e,r),l(r,c),m(c,t[1].jsonPath),h=d(c,"input",t[16])},p(t,e){2&e&&c.value!==t[1].jsonPath&&m(c,t[1].jsonPath)},d(t){t&&i(e),h()}}}function Gt(e){let n,r,c,h,g,y,b,_,$,x,k,w,j,O,S,P,E,F,C,z,A,T,M,N,R,L,U,I,J,q,H,W,D,G,B,V,Y,K,Q,X,Z,tt,et,nt,ot,rt,ct,lt,st,it,at,ut,ft="json"===e[1].responseFormat&&Dt(e);return{c(){n=a("div"),r=a("button"),r.textContent="Add Widget",c=f(),h=a("div"),g=a("div"),y=f(),b=a("div"),_=a("header"),$=a("p"),$.textContent="Widget info",x=f(),k=a("button"),w=f(),j=a("section"),O=a("div"),S=a("label"),S.textContent="Title",P=f(),E=a("div"),F=a("input"),C=f(),z=a("label"),z.textContent="Request URL",A=f(),T=a("div"),M=a("input"),N=f(),R=a("label"),R.innerHTML="\n          Request Config\n          <small>(Optional)</small>",L=f(),U=a("div"),I=a("input"),q=f(),H=a("div"),W=a("label"),W.textContent="Response Format",D=f(),G=a("div"),B=a("label"),V=a("input"),K=u("\n            Text"),Q=f(),X=a("label"),Z=a("input"),et=u("\n            JSON"),nt=f(),ft&&ft.c(),ot=f(),rt=a("label"),ct=a("input"),lt=u("\n          Use CORS Proxy (Enable if your request does not work)"),st=f(),it=a("footer"),at=a("button"),at.textContent="Save changes",p(r,"class","button is-primary is-small"),p(n,"class","control"),p(g,"class","modal-background"),p($,"class","modal-card-title"),p(k,"class","delete"),p(k,"aria-label","close"),p(_,"class","modal-card-head"),p(S,"class","label"),p(F,"class","input"),p(F,"type","text"),p(F,"placeholder","e.g. Shoot the atomic bomb"),p(E,"class","control"),p(z,"class","label"),p(M,"class","input"),p(M,"type","text"),p(M,"placeholder","e.g. https://api.example.com/bombs"),p(T,"class","control"),p(R,"class","label"),p(I,"class","input"),p(I,"type","text"),p(I,"placeholder",J='e.g. {"method": "POST", "data": {password: "p@ssw0rd"}}'),p(U,"class","control"),p(O,"class","field"),p(W,"class","label"),V.__value=Y="text",V.value=V.__value,p(V,"type","radio"),p(V,"name","responseFormat"),e[14][0].push(V),p(B,"class","radio mr-sm"),Z.__value=tt="json",Z.value=Z.__value,p(Z,"type","radio"),p(Z,"name","responseFormat"),e[14][0].push(Z),p(X,"class","radio"),p(G,"class","control"),p(ct,"type","checkbox"),p(rt,"class","checkbox"),p(H,"class","field"),p(j,"class","modal-card-body"),p(at,"class","button is-success"),p(it,"class","modal-card-foot"),p(b,"class","modal-card"),p(h,"id","modal"),p(h,"class","modal"),v(h,"is-active",e[0])},m(t,o){s(t,n,o),l(n,r),s(t,c,o),s(t,h,o),l(h,g),l(h,y),l(h,b),l(b,_),l(_,$),l(_,x),l(_,k),l(b,w),l(b,j),l(j,O),l(O,S),l(O,P),l(O,E),l(E,F),m(F,e[1].title),l(O,C),l(O,z),l(O,A),l(O,T),l(T,M),m(M,e[1].url),l(O,N),l(O,R),l(O,L),l(O,U),l(U,I),m(I,e[1].config),l(j,q),l(j,H),l(H,W),l(H,D),l(H,G),l(G,B),l(B,V),V.checked=V.__value===e[1].responseFormat,l(B,K),l(G,Q),l(G,X),l(X,Z),Z.checked=Z.__value===e[1].responseFormat,l(X,et),l(H,nt),ft&&ft.m(H,null),l(H,ot),l(H,rt),l(rt,ct),m(ct,e[1].useProxy),l(rt,lt),l(b,st),l(b,it),l(it,at),ut=[d(r,"click",e[7]),d(g,"click",e[8]),d(k,"click",e[9]),d(F,"input",e[10]),d(M,"input",e[11]),d(I,"input",e[12]),d(V,"change",e[13]),d(Z,"change",e[15]),d(ct,"change",e[17]),d(at,"click",e[3])]},p(t,[e]){2&e&&F.value!==t[1].title&&m(F,t[1].title),2&e&&M.value!==t[1].url&&m(M,t[1].url),2&e&&I.value!==t[1].config&&m(I,t[1].config),2&e&&(V.checked=V.__value===t[1].responseFormat),2&e&&(Z.checked=Z.__value===t[1].responseFormat),"json"===t[1].responseFormat?ft?ft.p(t,e):(ft=Dt(t),ft.c(),ft.m(H,ot)):ft&&(ft.d(1),ft=null),2&e&&m(ct,t[1].useProxy),1&e&&v(h,"is-active",t[0])},i:t,o:t,d(t){t&&i(n),t&&i(c),t&&i(h),e[14][0].splice(e[14][0].indexOf(V),1),e[14][0].splice(e[14][0].indexOf(Z),1),ft&&ft.d(),o(ut)}}}function Bt(t,e,n){const o=_();let r=!1;const c={responseFormat:"text",jsonPath:"",title:"",url:"",config:""};let l={...c};function s(t){n(0,r=t)}function i(){n(1,l={...c})}return[r,l,s,function(){const t=Ht();Wt([{type:"fetcher",id:V(8),content:l},...t]),i(),s(!1),o("add")},o,c,i,()=>s(!0),()=>s(!1),()=>s(!1),function(){l.title=this.value,n(1,l)},function(){l.url=this.value,n(1,l)},function(){l.config=this.value,n(1,l)},function(){l.responseFormat=this.__value,n(1,l)},[[]],function(){l.responseFormat=this.__value,n(1,l)},function(){l.jsonPath=this.value,n(1,l)},function(){l.useProxy=this.value,n(1,l)}]}class Vt extends D{constructor(t){super(),W(this,t,Bt,Gt,c,{})}}function Yt(t,e,n){const o=t.slice();return o[4]=e[n],o}function Kt(e){return{c:t,m:t,p:t,d:t}}function Qt(t){let e,n;function o(t,e){return(null==n||2&e)&&(n=!!st(t[3])),n?Zt:Xt}let r=o(t,-1),c=r(t);return{c(){e=a("div"),c.c()},m(t,n){s(t,e,n),c.m(e,null)},p(t,n){r===(r=o(t,n))&&c?c.p(t,n):(c.d(1),c=r(t),c&&(c.c(),c.m(e,null)))},d(t){t&&i(e),c.d()}}}function Xt(t){let e,n,o=t[3]+"";return{c(){e=a("span"),n=u(o)},m(t,o){s(t,e,o),l(e,n)},p(t,e){2&e&&o!==(o=t[3]+"")&&h(n,o)},d(t){t&&i(e)}}}function Zt(t){let e,n,o=t[3],r=[];for(let e=0;e<o.length;e+=1)r[e]=te(Yt(t,o,e));return{c(){e=a("table"),n=a("tr");for(let t=0;t<r.length;t+=1)r[t].c();p(e,"class","table is-bordered")},m(t,o){s(t,e,o),l(e,n);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,e){if(2&e){let c;for(o=t[3],c=0;c<o.length;c+=1){const l=Yt(t,o,c);r[c]?r[c].p(l,e):(r[c]=te(l),r[c].c(),r[c].m(n,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},d(t){t&&i(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}function te(t){let e,n,o=t[4]+"";return{c(){e=a("td"),n=u(o)},m(t,o){s(t,e,o),l(e,n)},p(t,e){2&e&&o!==(o=t[4]+"")&&h(n,o)},d(t){t&&i(e)}}}function ee(e){let n;return{c(){n=u("loading...")},m(t,e){s(t,n,e)},p:t,d(t){t&&i(n)}}}function ne(e){let n,o,r,c,m,v,g,y,b,_=(e[0].title||"Untitled")+"",$={ctx:e,current:null,token:null,pending:ee,then:Qt,catch:Kt,value:3};return L(y=e[1],$),{c(){n=a("div"),o=a("div"),r=a("span"),c=u(_),m=f(),v=a("div"),v.innerHTML='<ion-icon class="has-text-info is-block" size="small" src="icons/reload-circle-sharp.svg"></ion-icon>',g=f(),$.block.c(),p(r,"class","mr-sm"),p(v,"class","action svelte-8rbeva"),p(o,"class","widget--title mb-xs is-flex align-center svelte-8rbeva"),p(n,"class","widget--content")},m(t,i){s(t,n,i),l(n,o),l(o,r),l(r,c),l(o,m),l(o,v),l(n,g),$.block.m(n,$.anchor=null),$.mount=()=>n,$.anchor=null,b=d(v,"click",e[2])},p(t,[n]){if(e=t,1&n&&_!==(_=(e[0].title||"Untitled")+"")&&h(c,_),$.ctx=e,2&n&&y!==(y=e[1])&&L(y,$));else{const t=e.slice();t[3]=$.resolved,$.block.p(t,n)}},i:t,o:t,d(t){t&&i(n),$.block.d(),$.token=null,$=null,b()}}}async function oe({url:t,config:e,responseFormat:n,useProxy:o=!1,jsonPath:r=""}){const c={method:"GET"};let l;try{l=JSON.parse(e)}catch(t){l=c}const s=`${o?"https://cors-anywhere.herokuapp.com/":""}${t}`,i=await fetch(s,l);let a=await i[n]();return a="json"===n?function(t,e){return e.split(",").map(e=>qt(t,e))}(a,r):a,i.ok?a:"failed to load"}function re(t,e,n){let o,{content:r}=e;function c(){n(1,o=oe(r))}return c(),t.$set=t=>{"content"in t&&n(0,r=t.content)},[r,o,c]}class ce extends D{constructor(t){super(),W(this,t,re,ne,c,{content:0})}}function le(t,e,n){const o=t.slice();return o[6]=e[n],o}function se(e){let n,o;return{c(){n=a("button"),n.textContent="Edit Widgets",p(n,"class","button is-link is-small ml-xs")},m(t,r){s(t,n,r),o=d(n,"click",e[4])},p:t,d(t){t&&i(n),o()}}}function ie(t){let e;const n=new ce({props:{content:t[6].content}});return{c(){I(n.$$.fragment)},m(t,o){J(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.content=t[6].content),n.$set(o)},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){q(n,t)}}}function ae(t){let e,n;function o(...e){return t[5](t[6],...e)}return{c(){e=a("button"),p(e,"class","delete widget--delete svelte-5op0xy"),p(e,"aria-label","close")},m(t,r){s(t,e,r),n=d(e,"click",o)},p(e,n){t=e},d(t){t&&i(e),n()}}}function ue(t,e){let n,o,r,c,u,d="fetcher"===e[6].type&&ie(e),h=e[0]&&ae(e);return{key:t,first:null,c(){n=a("div"),o=a("div"),d&&d.c(),r=f(),h&&h.c(),c=f(),p(o,"class","card-content p-md"),p(n,"class","card"),this.first=n},m(t,e){s(t,n,e),l(n,o),d&&d.m(o,null),l(o,r),h&&h.m(o,null),l(n,c),u=!0},p(t,e){"fetcher"===t[6].type?d?(d.p(t,e),N(d,1)):(d=ie(t),d.c(),N(d,1),d.m(o,r)):d&&(T(),R(d,1,1,()=>{d=null}),M()),t[0]?h?h.p(t,e):(h=ae(t),h.c(),h.m(o,null)):h&&(h.d(1),h=null)},i(t){u||(N(d),u=!0)},o(t){R(d),u=!1},d(t){t&&i(n),d&&d.d(),h&&h.d()}}}function fe(t){let e,n,o,r,c,u=[],d=new Map;const h=new Vt({});h.$on("add",t[2]);let m=t[1].length>0&&se(t),v=t[1];const g=t=>t[6].id;for(let e=0;e<v.length;e+=1){let n=le(t,v,e),o=g(n);d.set(o,u[e]=ue(o,n))}return{c(){e=a("div"),n=a("div"),I(h.$$.fragment),o=f(),m&&m.c(),r=f();for(let t=0;t<u.length;t+=1)u[t].c();p(n,"class","toolbar is-flex justify-space-between py-sm"),p(e,"class","mx-sm")},m(t,i){s(t,e,i),l(e,n),J(h,n,null),l(n,o),m&&m.m(n,null),l(e,r);for(let t=0;t<u.length;t+=1)u[t].m(e,null);c=!0},p(t,[o]){if(t[1].length>0?m?m.p(t,o):(m=se(t),m.c(),m.m(n,null)):m&&(m.d(1),m=null),11&o){const n=t[1];T(),u=function(t,e,n,o,r,c,l,s,i,a,u,f){let d=t.length,p=c.length,h=d;const m={};for(;h--;)m[t[h].key]=h;const v=[],g=new Map,y=new Map;for(h=p;h--;){const t=f(r,c,h),s=n(t);let i=l.get(s);i?o&&i.p(t,e):(i=a(s,t),i.c()),g.set(s,v[h]=i),s in m&&y.set(s,Math.abs(h-m[s]))}const b=new Set,_=new Set;function $(t){N(t,1),t.m(s,u),l.set(t.key,t),u=t.first,p--}for(;d&&p;){const e=v[p-1],n=t[d-1],o=e.key,r=n.key;e===n?(u=e.first,d--,p--):g.has(r)?!l.has(o)||b.has(o)?$(e):_.has(r)?d--:y.get(o)>y.get(r)?(_.add(o),$(e)):(b.add(r),d--):(i(n,l),d--)}for(;d--;){const e=t[d];g.has(e.key)||i(e,l)}for(;p;)$(v[p-1]);return v}(u,o,g,1,t,n,d,e,U,ue,null,le),M()}},i(t){if(!c){N(h.$$.fragment,t);for(let t=0;t<v.length;t+=1)N(u[t]);c=!0}},o(t){R(h.$$.fragment,t);for(let t=0;t<u.length;t+=1)R(u[t]);c=!1},d(t){t&&i(e),q(h),m&&m.d();for(let t=0;t<u.length;t+=1)u[t].d()}}}function de(t,e,n){let o=!1,r=[];function c(){n(1,r=Ht())}function l(t){var e;confirm("Deleting widget, Are you sure?")&&(e=t,Wt(Ht().filter(t=>t.id!==e)),c())}c();return[o,r,c,l,()=>{n(0,o=!o)},t=>l(t.id)]}class pe extends D{constructor(t){super(),W(this,t,de,fe,c,{})}}function he(e){let n,o;const r=new pe({});return{c(){n=a("main"),I(r.$$.fragment)},m(t,e){s(t,n,e),J(r,n,null),o=!0},p:t,i(t){o||(N(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&i(n),q(r)}}}return new class extends D{constructor(t){super(),W(this,t,null,he,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
