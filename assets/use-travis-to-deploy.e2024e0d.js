import{_ as o}from"./ValaxyMd.f62e1738.js";import{u as r,o as i,c as l,w as c,a as n,m as p,b as e}from"./app.70085fd8.js";const u=n("div",null,[n("blockquote",null,[n("p",null,"Travis CI - Test and Deploy Your Code with Confidence")]),n("p",null,[n("a",{href:"https://www.travis-ci.org/",target:"_blank",rel:"noopener"},"travis-ci.org")]),p(" more "),n("h2",{id:"intro",tabindex:"-1"},[e("Intro "),n("a",{class:"header-anchor",href:"#intro","aria-hidden":"true"},"#")]),n("p",null,"\u6B63\u5982\u5B57\u9762\u4E0A\u7684\u610F\u601D\uFF0CTravis \u53EF\u4EE5\u7528\u6765\u6D4B\u8BD5\u548C\u5E2E\u52A9\u81EA\u5DF1\u90E8\u7F72\u7F51\u7AD9\u3002"),n("p",null,[e("\u4E00\u822C\u81EA\u5DF1\u95F2\u6765\u4F1A\u5199\u4E9B\u5E76\u65E0\u5375\u7528\u7684\u5C0F\u73A9\u610F\u513F\uFF0C\u7EAF\u9759\u6001\u7684\u9875\u9762\u8BDD\uFF0C\u4FBF\u4F1A\u90E8\u7F72\u5728 "),n("a",{href:"https://pages.github.com/",target:"_blank",rel:"noopener"},"GitHub Pages"),e(" \u4E0A\u3002 \u800C\u52A8\u6001\u7F51\u7AD9\u5219\u90E8\u7F72\u5728\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u53C8\u6216\u662F\u5982\u4E0B\u6709\u4E00\u4E9B\u53EF\u4EE5\u90E8\u7F72\u6D4B\u8BD5\u7684\u52A8\u6001\u670D\u52A1\u3002\uFF08\u5F53\u7136\u90A3\u6837\u7684\u8BDD\uFF0C\u81EA\u5B9A\u4E49\u57DF\u540D\u4E4B\u7C7B\u7684\u670D\u52A1\u5C31\u8981\u6536\u8D39\u4E86\u3002\uFF09")]),n("ul",null,[n("li",null,[n("a",{href:"https://www.heroku.com/",target:"_blank",rel:"noopener"},"heroku")]),n("li",null,[n("a",{href:"https://zeit.co/now",target:"_blank",rel:"noopener"},"now.sh")])]),n("hr"),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[e(`language: node_js
node_js:
  - lts/*
cache:
  directories:
    - `),n("span",{class:"token string"},'"node_modules"'),e(`
branches:
  only:
  - master
addons:
  apt:
    packages:
    - sshpass
install:
  - `),n("span",{class:"token function"},"yarn"),e(),n("span",{class:"token function"},"install"),e(`
script:
  - `),n("span",{class:"token function"},"npm"),e(` run build
after_success:
  - `),n("span",{class:"token builtin class-name"},"export"),e(),n("span",{class:"token assign-left variable"},"SSHPASS"),n("span",{class:"token operator"},"="),n("span",{class:"token variable"},"$VPS_PWD"),e(`
  - sshpass -e `),n("span",{class:"token function"},"ssh"),e(" -o "),n("span",{class:"token assign-left variable"},"stricthostkeychecking"),n("span",{class:"token operator"},"="),e("no root@139.199.22.90 "),n("span",{class:"token string"},[e('"sh /data/wwwroot/coc.yunyoujun.cn/deploy-ci.sh '),n("span",{class:"token variable"},"$TOKEN"),e('"')]),e(`
`)])])]),n("h2",{id:"\u52A0\u5BC6-token",tabindex:"-1"},[e("\u52A0\u5BC6 Token "),n("a",{class:"header-anchor",href:"#\u52A0\u5BC6-token","aria-hidden":"true"},"#")]),n("p",null,[e("\u4F7F\u7528 "),n("a",{href:"https://github.com/travis-ci/travis.rb#readme",target:"_blank",rel:"noopener"},"Travis CI"),e(" \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u52A0\u5BC6 GitHub \u7684 Personal Access Token\u3002")]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[e("travis encrypt -r YunYouJun/repo "),n("span",{class:"token assign-left variable"},"GH_TOKEN"),n("span",{class:"token operator"},"="),e(`XXX
`)])])]),n("h2",{id:"token",tabindex:"-1"},[e("Token "),n("a",{class:"header-anchor",href:"#token","aria-hidden":"true"},"#")]),n("h3",{id:"github-pages",tabindex:"-1"},[e("GitHub Pages "),n("a",{class:"header-anchor",href:"#github-pages","aria-hidden":"true"},"#")]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token function"},"git"),e(" push --force "),n("span",{class:"token string"},[e('"https://'),n("span",{class:"token variable"},"${GH_TOKEN}"),e("@"),n("span",{class:"token variable"},"${GH_REF}"),e('"')]),e(` master:master
`)])])]),n("h3",{id:"coding-pages",tabindex:"-1"},[e("Coding Pages "),n("a",{class:"header-anchor",href:"#coding-pages","aria-hidden":"true"},"#")]),n("p",null,[e("Coding \u8FD8\u9700\u8981\u52A0 \u7528\u6237\u540D \u524D\u7F00 "),n("code",null,"https://xxx:${CODING_TOKEN}@${CD_REF}")]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token function"},"git"),e(" push --force "),n("span",{class:"token string"},[e('"https://yunyoujun:'),n("span",{class:"token variable"},"${CODING_TOKEN}"),e("@"),n("span",{class:"token variable"},"${CD_REF}"),e('"')]),e(` master:master
`)])])]),n("div",{class:"language-yaml"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token key atrule"},"env"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token key atrule"},"global"),n("span",{class:"token punctuation"},":"),e(`
    `),n("span",{class:"token punctuation"},"-"),e(),n("span",{class:"token key atrule"},"GH_REF"),n("span",{class:"token punctuation"},":"),e(` github.com/YunYouJun/yunyoujun.github.io.git
    `),n("span",{class:"token punctuation"},"-"),e(),n("span",{class:"token key atrule"},"CD_REF"),n("span",{class:"token punctuation"},":"),e(` git.dev.tencent.com/YunYouJun/yunyoujun.coding.me.git
`)])])]),n("hr"),n("p",null,"To Be Continued.")],-1),d={title:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72",date:"2018-05-24T15:04:42.000Z",updated:"2018-06-10T15:04:42.000Z",tags:["\u7B14\u8BB0"],categories:["\u4E91\u6E38\u7684\u5C0F\u7B14\u8BB0"],excerpt:`> Travis CI - Test and Deploy Your Code with Confidence

[travis-ci.org](https://www.travis-ci.org/)`,meta:[{property:"og:title",content:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72"}]},m={setup(h,{expose:a}){r({title:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72",meta:[{property:"og:title",content:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72"}]}),a({frontmatter:{title:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72",date:"2018-05-24T15:04:42.000Z",updated:"2018-06-10T15:04:42.000Z",tags:["\u7B14\u8BB0"],categories:["\u4E91\u6E38\u7684\u5C0F\u7B14\u8BB0"],excerpt:`> Travis CI - Test and Deploy Your Code with Confidence

[travis-ci.org](https://www.travis-ci.org/)`,meta:[{property:"og:title",content:"Travis-CI \u6301\u7EED\u96C6\u6210\u90E8\u7F72"}]}});const s=`> Travis CI - Test and Deploy Your Code with Confidence

[travis-ci.org](https://www.travis-ci.org/)`;return(k,v)=>{const t=o;return i(),l(t,{frontmatter:d,excerpt:s},{default:c(()=>[u]),_:1})}}};export{m as default,d as frontmatter};
