import{d as $,S as b,x as A,U as E,e as F,K as I,a5 as q,L as z,v as d,r as R,T as j,M as D,z as H,o,c as v,w as n,J,B as a,l as t,a as u,t as i,j as h,A as K,F as M,m as U,N as G,I as O,E as Q,b as W}from"./app.70085fd8.js";import{_ as X}from"./YunPostCollapse.b5f6a57b.js";const Z={class:"yun-text-light",text:"center",p:"2"},tt={text:"center"},et=["onClick"],st={text:"xs"},ct=$({setup(ot){const y=b(),x=A(),C=E(),{t:_}=F(),r=I(),{tags:m,getTagStyle:T}=q({primary:C.value.colors.primary}),w=z(),s=d(()=>y.query.tag||""),B=d(()=>w.value.filter(e=>e.tags?typeof e.tags=="string"?e.tags===s.value:e.tags.includes(s.value):!1)),p=R(),{show:k}=j(p),N=c=>{x.push({query:{tag:c}}),k()},S=D(r);return(c,e)=>{const f=G,L=H("router-view"),P=X,V=O,Y=J;return o(),v(Y,null,{header:n(()=>[a(f,{title:t(S)||t(_)("menu.tags"),icon:t(r).icon||"i-ri-tag-line",color:t(r).color},null,8,["title","icon","color"])]),content:n(()=>[u("div",Z,i(t(_)("counter.tags",Array.from(t(m)).length)),1),u("div",tt,[(o(!0),h(M,null,K(Array.from(t(m)).sort(),([l,g])=>(o(),h("span",{key:l,class:"post-tag cursor-pointer",style:Q(t(T)(g.count)),p:"1",onClick:nt=>N(l.toString())},[W(" #"+i(l),1),u("span",st,"["+i(g.count)+"]",1)],12,et))),128))]),a(L)]),default:n(()=>[t(s)?(o(),v(V,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:n(()=>[a(f,{m:"t-4",title:t(s),icon:"i-ri-hashtag"},null,8,["title"]),a(P,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:t(B)},null,8,["posts"])]),_:1},512)):U("v-if",!0)]),_:1})}}});export{ct as default};
