import{_ as o}from"./ValaxyMd.f62e1738.js";import{u as c,o as u,c as l,w as p,a as n,m as i,b as a}from"./app.70085fd8.js";const r=n("div",null,[n("p",null,"You know what I mean."),i(" more "),n("p",null,[a("GitHub: "),n("a",{href:"https://github.com/fuck-xuexiqiangguo/Fuck-XueXiQiangGuo",target:"_blank",rel:"noopener"},"Fuck-XueXiQiangGuo")]),n("h2",{id:"install",tabindex:"-1"},[a("Install "),n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#")]),n("p",null,[n("a",{href:"https://github.com/fuck-xuexiqiangguo/Fuck-XueXiQiangGuo#%E7%9B%B4%E6%8E%A5%E5%9C%A8%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2%E8%BF%90%E8%A1%8C",target:"_blank",rel:"noopener"},"\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u754C\u9762\u8FD0\u884C")]),n("p",null,[n("code",null,"github"),a(" \u6E90\u4E0B\u8F7D\u5F88\u6162\uFF0C\u53EF\u4EE5\u8BD5\u8BD5"),n("a",{href:"https://cdn.staticaly.com/gh/fuck-xuexiqiangguo/Fuck-XueXiQiangGuo/master/Fuck%E5%AD%A6%E4%B9%A0%E5%BC%BA%E5%9B%BD-linux.zip",target:"_blank",rel:"noopener"},"\u955C\u50CF2"),a("\u3002")]),n("p",null,[a("\u7F51\u7AD9\u8BF4\u660E\u6587\u6863\u63D0\u4F9B\u7684\u662F "),n("code",null,"Ubuntu"),a(" \u7CFB\u5217\u5B89\u88C5\u65B9\u6CD5\uFF0C\u4E0E "),n("code",null,"CentOS"),a(" \u7CFB\u5217\u7565\u6709\u533A\u522B\u3002")]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token comment"},"# CentOS"),a(`
yum update
yum upgrade
yum `),n("span",{class:"token function"},"install"),a(" -y "),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token function"},"wget"),a(),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token function"},"unzip"),a(),n("span",{class:"token punctuation"},"\\"),a(`
    Xvfb `),n("span",{class:"token punctuation"},"\\"),a(`
    gtk3 `),n("span",{class:"token punctuation"},"\\"),a(`
    libXScrnSaver `),n("span",{class:"token punctuation"},"\\"),a(`
    `),n("span",{class:"token comment"},"# alsa-lib-devel.x86_64"),a(`

Xvfb -ac -screen scrn 1280x2000x24 :9.0 `),n("span",{class:"token operator"},"&"),a(`
`),n("span",{class:"token builtin class-name"},"export"),a(),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"DISPLAY")]),n("span",{class:"token operator"},"="),a(`:9.0

`),n("span",{class:"token comment"},"# \u4E0B\u8F7D\u5E76\u89E3\u538B\u7A0B\u5E8F"),a(`
`),n("span",{class:"token function"},"wget"),a(` -O fuck-xuexiqiangguo.zip https://cdn.staticaly.com/gh/fuck-xuexiqiangguo/Fuck-XueXiQiangGuo/master/Fuck\u5B66\u4E60\u5F3A\u56FD-linux.zip
`),n("span",{class:"token function"},"unzip"),a(` -q -d ./fuck-xuexiqiangguo/ fuck-xuexiqiangguo.zip

`),n("span",{class:"token builtin class-name"},"cd"),a(` fuck-xuexiqiangguo
`),n("span",{class:"token function"},"chmod"),a(` +x ./Fuck\u5B66\u4E60\u5F3A\u56FD

`),n("span",{class:"token comment"},"# \u8FD0\u884C\u7A0B\u5E8F"),a(`
./Fuck\u5B66\u4E60\u5F3A\u56FD --headless

`),n("span",{class:"token comment"},"# \u7B49\u5F85\u7247\u523B\uFF0C\u4F7F\u7528\u5B66\u4E60\u5F3A\u56FDAPP\u626B\u63CF\u5C4F\u5E55\u4E0A\u7684\u4E8C\u7EF4\u7801\u767B\u5F55"),a(`
`)])])]),n("h2",{id:"help",tabindex:"-1"},[a("Help "),n("a",{class:"header-anchor",href:"#help","aria-hidden":"true"},"#")]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},`./Fuck\u5B66\u4E60\u5F3A\u56FD --help
`)])]),n("h2",{id:"auto",tabindex:"-1"},[a("Auto "),n("a",{class:"header-anchor",href:"#auto","aria-hidden":"true"},"#")]),n("p",null,"\u7F16\u5199\u6BCF\u5929\u968F\u673A\u65F6\u95F4\u6267\u884C\u811A\u672C\u3002"),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token comment"},"# vim /etc/crontab"),a(`
`),n("span",{class:"token number"},"0"),a(),n("span",{class:"token number"},"8"),a(` * * * root /home/yunyou/bash/start-xxqg.sh
`)])])]),n("div",{class:"language-bash"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token comment"},"# vim /home/yunyou/bash/start-xxqg.sh"),a(`
`),n("span",{class:"token comment"},"# start-xxqg.sh"),a(`
python3 /home/yunyou/bash/close-xxqg.py
`),n("span",{class:"token function"},"screen"),a(` -r xxqg
`),n("span",{class:"token comment"},"# sleep ${RANDOM}'s'"),a(`
`),n("span",{class:"token builtin class-name"},"export"),a(),n("span",{class:"token assign-left variable"},[n("span",{class:"token environment constant"},"DISPLAY")]),n("span",{class:"token operator"},"="),a(`:9.0
`),n("span",{class:"token builtin class-name"},"cd"),a(` /home/yunyou/github/fuck-xuexiqiangguo
./Fuck\u5B66\u4E60\u5F3A\u56FD --headless
`)])])]),n("div",{class:"language-py"},[n("pre",null,[n("code",{"v-pre":""},[n("span",{class:"token comment"},"# kill xuexiqiangguo"),a(`
`),n("span",{class:"token comment"},"# vim /home/yunyou/bash/close-xxqg.py"),a(`
`),n("span",{class:"token comment"},"# close-xxqg.py"),a(`
`),n("span",{class:"token keyword"},"import"),a(` os
`),n("span",{class:"token keyword"},"import"),a(` signal
`),n("span",{class:"token builtin"},"list"),a(),n("span",{class:"token operator"},"="),a(" os"),n("span",{class:"token punctuation"},"."),a("popen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"ps -ef|grep ./Fuck|grep headless|grep -v grep|awk '{print $2}'"`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),a("readlines"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token keyword"},"for"),a(" pid "),n("span",{class:"token keyword"},"in"),a(),n("span",{class:"token builtin"},"list"),n("span",{class:"token punctuation"},":"),a(`
    os`),n("span",{class:"token punctuation"},"."),a("kill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"("),a("pid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a("signal"),n("span",{class:"token punctuation"},"."),a("SIGKILL"),n("span",{class:"token punctuation"},")"),a(`
`)])])])],-1),k={title:"Everyday Auto Xuexiqiangguo",date:"2019-05-16T21:51:55.000Z",updated:"2019-05-16T21:51:55.000Z",tags:["\u5B66\u4E60","\u7B14\u8BB0"],categories:["\u4E91\u6E38\u7684\u5C0F\u7B14\u8BB0"],excerpt:"You know what I mean.",meta:[{property:"og:title",content:"Everyday Auto Xuexiqiangguo"}]},b={setup(g,{expose:e}){c({title:"Everyday Auto Xuexiqiangguo",meta:[{property:"og:title",content:"Everyday Auto Xuexiqiangguo"}]}),e({frontmatter:{title:"Everyday Auto Xuexiqiangguo",date:"2019-05-16T21:51:55.000Z",updated:"2019-05-16T21:51:55.000Z",tags:["\u5B66\u4E60","\u7B14\u8BB0"],categories:["\u4E91\u6E38\u7684\u5C0F\u7B14\u8BB0"],excerpt:"You know what I mean.",meta:[{property:"og:title",content:"Everyday Auto Xuexiqiangguo"}]}});const s="You know what I mean.";return(d,h)=>{const t=o;return u(),l(t,{frontmatter:k,excerpt:s},{default:p(()=>[r]),_:1})}}};export{b as default,k as frontmatter};
