(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{757:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"haproxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy"}},[a._v("#")]),a._v(" HAProxy")]),a._v(" "),s("h2",{attrs:{id:"haproxy介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy介绍"}},[a._v("#")]),a._v(" HAProxy介绍")]),a._v(" "),s("p",[a._v("HAProxy: 是法国人Willy Tarreau开发的一个开源软件，是一款应对客户端10000以上的同时连接的高性能的TCP和 HTTP负载均衡器。其功能是用来提供基于cookie的持久性， 基于内容的交换，过载保护的高级流量管制，自动故障切换 ，以正则表达式为基础的标题控制运行时间，基于Web的报表，高级日志记录以帮助排除故‹@障的应用或网络及其他功能。")]),a._v(" "),s("h2",{attrs:{id:"相关概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关概念"}},[a._v("#")]),a._v(" 相关概念")]),a._v(" "),s("h3",{attrs:{id:"代理的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代理的作用"}},[a._v("#")]),a._v(" 代理的作用")]),a._v(" "),s("ol",[s("li",[a._v("正向代理，反向代理")]),a._v(" "),s("li",[a._v("代理服务器，可以提供缓存功能加速客户端访问，同时可以对缓存数据进行有效性检查")]),a._v(" "),s("li",[a._v("内容路由：根据流量以及内容类型将请求转发至特定的服务器")]),a._v(" "),s("li",[a._v("转码器：支持压缩功能，将数据以压缩形式发送给客户端")])]),a._v(" "),s("h3",{attrs:{id:"缓存的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存的作用"}},[a._v("#")]),a._v(" 缓存的作用")]),a._v(" "),s("ol",[s("li",[a._v("减少访冗余内容传输")]),a._v(" "),s("li",[a._v("节省带宽，缓解网络瓶颈")]),a._v(" "),s("li",[a._v("降低了对原始服务器的请求压力")]),a._v(" "),s("li",[a._v("降低了传输延迟")])]),a._v(" "),s("h3",{attrs:{id:"负载均衡集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡集群"}},[a._v("#")]),a._v(" 负载均衡集群：")]),a._v(" "),s("p",[a._v("四层：\nlvs, nginx(stream)，haproxy(mode tcp)\n七层：\nhttp: nginx(http, ngx_http_upstream_module), haproxy(mode http), httpd, ats, perlbal, pound...")]),a._v(" "),s("h3",{attrs:{id:"haproxy功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy功能"}},[a._v("#")]),a._v(" HAProxy功能")]),a._v(" "),s("p",[a._v("HAProxy是TCP / HTTP反向代理服务器，尤其适合于高可用性环境\n可以针对HTTP请求添加cookie，进行路由后端服务器\n可平衡负载至后端服务器，并支持持久连接\n支持基于cookie进行调度\n支持所有主服务器故障切换至备用服务器\n支持专用端口实现监控服务\n支持不影响现有连接情况下停止接受新连接请求\n可以在双向添加，修改或删除HTTP报文首部\n支持基于pattern实现连接请求的访问控制\n通过特定的URI为授权用户提供详细的状态信息\n版本：1.4 1.5 1.6 1.7 1.8\n"),s("img",{attrs:{src:"https://i.loli.net/2021/01/29/xjDWm63snTL48fG.png",alt:"img"}})]),a._v(" "),s("p",[a._v("支持http反向代理\n支持动态程序的反向代理\n支持基于数据库的反向代理")]),a._v(" "),s("h2",{attrs:{id:"haproxy组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#haproxy组成"}},[a._v("#")]),a._v(" HAproxy组成")]),a._v(" "),s("p",[a._v("包名：haproxy")]),a._v(" "),s("h3",{attrs:{id:"程序环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序环境"}},[a._v("#")]),a._v(" 程序环境")]),a._v(" "),s("p",[a._v("主程序：/usr/sbin/haproxy\n配置文件：/etc/haproxy/haproxy.cfg\nUnit file：/usr/lib/systemd/system/haproxy.service")]),a._v(" "),s("h3",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("p",[a._v("haproxy.cfg主要有两部分组成：global，和proxies配置段")]),a._v(" "),s("h4",{attrs:{id:"global-全局配置段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-全局配置段"}},[a._v("#")]),a._v(" global：全局配置段")]),a._v(" "),s("p",[a._v("进程及安全配置相关的参数\n性能调整相关参数\nDebug参数")]),a._v(" "),s("h4",{attrs:{id:"proxies-代理配置段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxies-代理配置段"}},[a._v("#")]),a._v(" proxies：代理配置段")]),a._v(" "),s("p",[a._v("defaults：为frontend, backend, listen提供默认配置\nfronted：前端，相当于nginx, server {}\nbackend：后端，相当于nginx, upstream {}\nlisten：同时拥有前端和后端,适用于一对一环境")]),a._v(" "),s("h3",{attrs:{id:"简单前端调度实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单前端调度实现"}},[a._v("#")]),a._v(" 简单前端调度实现")]),a._v(" "),s("p",[a._v("利用四台虚拟机实现简单的前端轮询调度。\n一台客户端，一台haproxy调度器，两台RS")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("首先在后端部署两台http服务")])]),a._v(" "),s("li",[s("p",[a._v("编辑haproxy配置文件/etc/haproxy/haproxy.cfg\n默认设置不做修改")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentOS6 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# vim /etc/haproxy/haproxy.cfg ")]),a._v("\nfrontend  main *:80     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置监听ip：端口")]),a._v("\ndefault_backend         websrvs     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#调用后端RS组名")]),a._v("\nbackend websrvs\nbalance     roundrobin      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#轮询算法")]),a._v("\nserver      web1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".45.11:80 check\nserver      web2 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".45.12:80 check\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("h3",{attrs:{id:"global配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global配置参数"}},[a._v("#")]),a._v(" global配置参数：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("global      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局参数的设置")]),a._v("\nlog         "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1   local2                      \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# log语法：log <address_1>[max_level_1] ")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全局的日志配置，使用log关键字，指定使用127.0.0.1上的syslog服务中的local0日志设备，记录日志等级为info的日志")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chroot")]),a._v("      /var/lib/haproxy        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#改变当前工作目录")]),a._v("\npidfile     /var/run/haproxy.pid    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#当前进程id文件")]),a._v("\nmaxconn     "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4000")]),a._v("                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#最大连接数")]),a._v("\nuser        haproxy                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#所属用户")]),a._v("\ngroup       haproxy                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#所属组")]),a._v("\ndaemon                              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#以守护进程方式运行haproxy")]),a._v("\nstats socket /var/lib/haproxy/stats "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#基于本地的文件传输")]),a._v("\n")])])]),s("p",[a._v("实现日志记录：\nhaproxy配置文件中默认定义了log 127.0.0.1 local2 说明日志将被记录在本机的local2设施中。\n编辑rsyslog配置文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@CentOS6 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#vim /etc/rsyslog.conf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Provides UDP syslog reception")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ModLoad")]),a._v(" imudp      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#取消注释")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$UDPServerRun")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("514")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#取消注释")]),a._v("\nlocal2.*            /var/log/haproxy.log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#指定设备local2日志存放位置")]),a._v("\n")])])]),s("p",[a._v("haproxy的日志信息可以设置存放在专门的日志服务器中")]),a._v(" "),s("h3",{attrs:{id:"proxies配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxies配置参数"}},[a._v("#")]),a._v(" proxies配置参数：")]),a._v(" "),s("p",[a._v("代理配置段：")]),a._v(" "),s("ul",[s("li",[a._v("defaults "),s("name")],1),a._v(" "),s("li",[a._v("frontend "),s("name")],1),a._v(" "),s("li",[a._v("backend "),s("name")],1),a._v(" "),s("li",[a._v("listen "),s("name")],1)]),a._v(" "),s("p",[a._v("Frontend段：指定接收客户端连接侦听套接字设置\nBackend段：指定将连接请求转发至后端服务器的相关设置\nListen段：指定完整的前后端设置，只对 TCP 有效\nproxy 名称：使用字母 数字 - _ . : 并区分字符大小写")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mode        http             \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#默认的模式mode { tcp|http|health }，tcp是4层，http是7层，health只会返回OK")]),a._v("\nlog         global        \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#应用全局的日志配置")]),a._v("\noption      httplog       \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用日志记录HTTP请求，默认haproxy日志记录是不记录HTTP请求日志")]),a._v("\noption      dontlognull   \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用该项，日志中将不会记录空连接。所谓空连接就是在上游的负载均衡器或者监控系统为了探测该服务是否存活可用时，需要定期的连接或者获取某一固定的组件或页面，或者探测扫描端口是否在监听或开放等动作被称为空连接；官方文档中标注，如果该服务上游没有其他的负载均衡器的话，建议不要使用该参数，因为互联网上的恶意扫描或其他动作就不会被记录下来")]),a._v("\noption      http-server-close  \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#每次请求完毕后主动关闭http通道")]),a._v("\noption      forwardfor       except "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.0/8   \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('#如果服务器上的应用程序想记录发起请求的客户端的IP地址，需要在HAProxy上配置此选项， 这样 HAProxy会把客户端的IP信息发送给服务器，在HTTP请求中添加"X-Forwarded-For"字段。启用X-Forwarded-For，在requests头部插入客户端IP发送给后端的server，使后端server获取到客户端的真实IP。 ')]),a._v("\noption        redispatch                      \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#当使用了cookie时，haproxy将会将其请求的后端服务器的serverID插入到cookie中，以保证会话的SESSION持久性；而此时，如果后端的服务器宕掉了， 但是客户端的cookie是不会刷新的，如果设置此参数，将会将客户的请求强制定向到另外一个后端server上，以保证服务的正常。")]),a._v("\nretries       "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("                             \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 定义连接后端服务器的失败重连次数，连接失败次数超过此值后将会将对应后端服务器标记为不可用")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" http-request    10s     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#http请求超时时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" queue           1m      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#一个请求在队列里的超时时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" connect         10s     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#连接超时")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" client          1m      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#客户端超时")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" server          1m      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#服务器端超时")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" http-keep-alive 10s     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置http-keep-alive的超时时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" check           10s     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#检测超时")]),a._v("\nmaxconn                 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#每个进程可用的最大连接数")]),a._v("\nfrontend  main *:80             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#监听地址为80")]),a._v("\nacl url_static       path_beg       -i /static /images /javascript /stylesheets\nacl url_static       path_end       -i .jpg .gif .png .css .js\nuse_backend static          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" url_static\ndefault_backend             my_webserver     \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定义一个名为my_app前端部分。此处将对应的请求转发给后端")]),a._v("\nbackend static                                       \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使用了静态动态分离（如果url_path匹配 .jpg .gif .png .css .js静态文件则访问此后端）")]),a._v("\nbalance             roundrobin                       \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#负载均衡算法（#banlance roundrobin 轮询，balance source 保存session值，支持static-rr，leastconn，first，uri等参数）")]),a._v("\nserver              static "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:80 check         \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#静态文件部署在本机（也可以部署在其他机器或者squid缓存服务器）")]),a._v("\nbackend my_webserver                                 \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定义一个名为my_webserver后端部分。PS：此处my_webserver只是一个自定义名字而已，但是需要与frontend里面配置项default_backend 值相一致")]),a._v("\nbalance     roundrobin          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#负载均衡算法")]),a._v("\nserver  web01 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.31")]),a._v(".2.33:80  check inter "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2000")]),a._v(" fall "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" weight "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定义的多个后端")]),a._v("\nserver  web02 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.31")]),a._v(".2.34:80  check inter "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2000")]),a._v(" fall "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" weight "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定义的多个后端")]),a._v("\nserver  web03 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.31")]),a._v(".2.35:80  check inter "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2000")]),a._v(" fall "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" weight "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定义的多个后端")]),a._v("\n")])])]),s("h3",{attrs:{id:"balance配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#balance配置"}},[a._v("#")]),a._v(" Balance配置")]),a._v(" "),s("p",[a._v("balance：后端服务器组内的服务器调度算法\nbalance "),s("algorithm",[a._v(" [ "),s("arguments",[a._v(" ]\nbalance url_param "),s("param"),a._v(" [check_post]\nhaproxy中调度算法同样分为动态调度算法和静态调度算法，与nginx调度算法中区分动静态调度算法的概念不同，nginx用能不能根据后端服务器的负载状况进行调度来区分动静态调度算法的差别，而haproxy中则根据该算法支不支持运行时即时生效来区分动静态算法。")])],1)],1),a._v(" "),s("p",[a._v("调度算法：\nroundrobin：基于权重轮询，动态算法，支持权重的运行时调整，支持慢启动；每个后端backend中最多支持4095个\nserver server options： weight #")]),a._v(" "),s("p",[a._v("static-rr：基于权重轮询，静态算法，不支持权重的运行时调整及慢启动；后端主机数量无上限")]),a._v(" "),s("p",[a._v("leastconn：加权最少连接，动态算法，最少连接的后端服务器优先分配接收新连接，相同连接时轮询，适用于长连接场景，例如 MySQL、LDAP等，不适合http")]),a._v(" "),s("p",[a._v("first：根据服务器在列表中的位置，自上而下进行调度；前面服务器的连接数达到上限，新请求才会分配给下一台服务")]),a._v(" "),s("p",[a._v("source：源地址hash，新连接先按权重分配，后续连接按source分配请求\n动静态取决于hash type\nhash-type：哈希算法\nhash-type "),s("method",[s("function",[s("modifier",[a._v("\nmethod:\nmap-based：除权取余法，哈希数据结构是静态数组（不支持权重动态调整）\nconsistent：一致性哈希，哈希数据结构是一棵树 （支持权重动态调整）\n"),s("function",[a._v(" : 哈希函数\nsdbm djb2 wt6")])],1)],1)],1)],1),a._v(" "),s("p",[a._v("uri：\n对URI的左半部分或整个uri做hash计算，并除以服务器总权重取模，以后派发至某挑出的服务器,适用于后端缓存服务器\n动静态取决于hash type")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hash-type\n    map-based\n    consistent\n")])])]),s("p",[s("scheme",[a._v("😕/"),s("user",[a._v(":"),s("password",[a._v("@"),s("host",[a._v(":"),s("port",[a._v("/"),s("path",[a._v(" ;"),s("params",[a._v("?"),s("query",[a._v("#"),s("frag",[a._v("\n左半部分：/"),s("path",[a._v(";"),s("params",[a._v("\n整个uri：/"),s("path",[a._v(";"),s("params",[a._v("?"),s("query",[a._v("#"),s("frag")],1)],1)],1)])],1)])],1)],1)],1)])],1)],1)],1)],1)],1),a._v(" "),s("p",[a._v("url_param：\n对用户请求的uri听"),s("params",[a._v("部分中的参数的值作hash计算， 并由服务器总权重相除以后派发至某挑出的服务器；通常用于追踪用户，以确保来自同一个用户的请求始终发往同一个Backend Server\n动静态取决于hash type")])],1),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hash-type\n    map-based\n    consistent\n")])])]),s("p",[a._v("hdr("),s("name",[a._v(")：根据请求报文中指定的header（如use_agent,referer,hostname）将该hesder做hash计算进行调度\n动静态取决于hash type")])],1),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hash-type\n    map-based\n    consistent\n")])])]),s("p",[a._v("hdr(Cookie)")]),a._v(" "),s("p",[a._v("rdp-cookie 远程桌面相关")]),a._v(" "),s("p",[a._v("rdp-cookie("),s("name",[a._v(")")])],1),a._v(" "),s("h3",{attrs:{id:"default-backend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-backend"}},[a._v("#")]),a._v(" default_backend "),s("backend")],1),a._v(" "),s("p",[a._v("无use_backend 匹配时，使用默认的backend，用于 frontend中")]),a._v(" "),s("h3",{attrs:{id:"server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[a._v("#")]),a._v(" server")]),a._v(" "),s("p",[a._v("server "),s("name",[s("address",[a._v("[:[port]] [param*]\n定义后端主机的各服务器及其选项 server "),s("name",[s("address",[a._v("[:port] [settings ...] default-server [settings ...]")])])],1)])],1),a._v(" "),s("p",[s("name",[a._v("：服务器在haproxy上的内部名称；出现在日志及警告信息")])],1),a._v(" "),s("address",[a._v("：服务器地址，支持使用主机名\n"),s("p",[a._v("[:[port]]：端口映射；省略时，表示同bind中绑定的端口")]),a._v(" "),s("p",[a._v("[param*]：参数\ncheck：对当前server做健康状态检测，只用于四层检测\n注意：httpchk，“smtpchk”, “mysql-check”, “pgsql-check” and “sslhello-chk” 用于定义应用层检测方法\naddr ：检测时使用的IP地址\nport ：针对此端口进行检测\ninter "),s("delay",[a._v("：连续两次检测之间的时间间隔，默认为2000ms\nrise "),s("count",[a._v("：连续多少次检测结果为“成功”才标记服务器为可用 ；默认为2\nfall "),s("count",[a._v("：连续多少次检测结果为“失败”才标记服务器为不可 用；默认为3\ncookie "),s("value",[a._v("：为当前server指定cookie值，实现基于cookie的会话黏性\ndisabled：标记为不可用\nredir "),s("prefix",[a._v("：将发往此server的所有GET和HEAD类的请求重定向至指 定的URL\nweight "),s("weight",[a._v("：权重，默认为1\nmaxconn "),s("maxconn",[a._v("：当前server的最大并发连接数\nbacklog "),s("backlog",[a._v("：当server的连接数达到上限后的后援队列长度\nbackup：设定当前server为备用服务器")])],1)],1)],1)],1)],1)],1)],1)],1),a._v(" "),s("p",[a._v("default-server [param*] 为backend中的各server设定默认选项")]),a._v(" "),s("h3",{attrs:{id:"bind配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bind配置"}},[a._v("#")]),a._v(" bind配置")]),a._v(" "),s("p",[a._v("bind：指定一个或多个前端侦听地址和端口\n只用于frountend配置段和listen配置段\nbind [")]),s("address",[a._v("]:<port_range> [, ...] [param*]\n示例："),s("p"),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("listen http_proxy \n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" :80,:443 \n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.1:10080,10.0.0.1:10443 \n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" /var/run/ssl-frontend.sock user root mode "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),a._v(" accept-proxy\n")])])]),s("h3",{attrs:{id:"maxconn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxconn"}},[a._v("#")]),a._v(" maxconn")]),a._v(" "),s("p",[a._v("maxconn "),s("conns",[a._v("：为指定的frontend定义其最大并发连接数；默认为2000")])],1),a._v(" "),s("h3",{attrs:{id:"mode-tcp-http-health"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode-tcp-http-health"}},[a._v("#")]),a._v(" mode { tcp|http|health }")]),a._v(" "),s("p",[a._v("定义haproxy的工作模式\ntcp：基于layer4实现代理；可代理mysql, pgsql, ssh, ssl等协议,https时使用此模式，默认模式\nhttp：仅当代理协议为http时使用,centos实际默认模式\nhealth：工作为健康状态检查的响应模式，当连接请求到达时回应“OK”后即断开连接，较少使用")]),a._v(" "),s("h3",{attrs:{id:"基于cookie的会话绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于cookie的会话绑定"}},[a._v("#")]),a._v(" 基于cookie的会话绑定")]),a._v(" "),s("p",[a._v("cookie "),s("name",[a._v(" [ rewrite | insert | prefix ] [ indirect ] [ nocache ] [ postonly ] [ preserve ] [ httponly ] [ secure ] [ domain "),s("domain",[a._v(" ]* [ maxidle "),s("idle",[a._v(" ] [ maxlife "),s("life",[a._v(" ]\n"),s("name",[a._v("：cookie名称，用于实现持久连接\nrewrite：重写\ninsert：插入\nprefix：前缀\n配置示例：")])],1)],1)],1)],1)],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("backend websrvs\n  balance     roundrobin\n  cookie WEBSRV insert nocache indirect\n  server   web1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".45.11:80 check cookie srv1\n  server   web2 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".45.12:80 check cookie srv2\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#每个server有自己的唯一的cookie标识")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在backend中为用户请求调度完成后操纵其cookie")]),a._v("\n")])])]),s("h3",{attrs:{id:"统计接口启用相关的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计接口启用相关的参数"}},[a._v("#")]),a._v(" 统计接口启用相关的参数")]),a._v(" "),s("p",[a._v("stats enable\n启用统计页；基于默认的参数启用stats page")]),a._v(" "),s("ul",[s("li",[a._v("stats uri : /haproxy?stats uri默认值")]),a._v(" "),s("li",[a._v("stats realm : HAProxy Statistics")]),a._v(" "),s("li",[a._v("stats auth : no authentication")])]),a._v(" "),s("p",[a._v("stats uri "),s("prefix",[a._v(" 自定义stats page uri")])],1),a._v(" "),s("p",[a._v("stats auth "),s("user",[a._v(":"),s("passwd",[a._v(" 认证时的账号和密码，可使用多次")])],1)],1),a._v(" "),s("p",[a._v("stats realm "),s("realm",[a._v(" 认证时的realm")])],1),a._v(" "),s("p",[a._v("stats hide-version 隐藏版本")]),a._v(" "),s("p",[a._v("stats refresh "),s("delay",[a._v(" 设定自动刷新时间间隔")])],1),a._v(" "),s("p",[a._v("stats admin { if | unless } "),s("cond",[a._v(" 启用stats page中的管理功能")])],1),a._v(" "),s("p",[a._v("配置示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("listen stats \n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" :9099 \n    stats "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" \n    stats realm HAPorxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" Page \n    stats auth 用户名：密码\n    stats admin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" TRUE\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#在frountend中单独定义一个stats服务，监听9099端口")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果认证成功就开启管理功能")]),a._v("\n")])])]),s("h3",{attrs:{id:"forwardfor配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#forwardfor配置"}},[a._v("#")]),a._v(" forwardfor配置")]),a._v(" "),s("p",[a._v("option forwardfor [ except "),s("network",[a._v(" ] [ header "),s("name",[a._v(" ] [ if-none ]\n在由haproxy发往后端主机的请求报文中添加“X-ForwardedFor”首部，其值为前端客户端的地址；用于向后端主发送真实的客户端IP")])],1)],1),a._v(" "),s("p",[a._v("[ except "),s("network",[a._v(" ]：请求报请来自此处指定的网络时不予添加此首部，如haproxy自身所在网络")])],1),a._v(" "),s("p",[a._v("[ header "),s("name",[a._v(" ]：使用自定义的首部名称，而非“XForwarded-For”")])],1),a._v(" "),s("p",[a._v("[ if-none ] 如果没有首部才添加首部，如果有使用默认值")]),a._v(" "),s("p",[a._v("为指定的MIME类型启用压缩传输功能\ncompression algo "),s("algorithm",[a._v(" ...：启用http协议的压缩机制，指明压缩算法gzip, deflate\ncompression type "),s("mime",{attrs:{type:""}},[a._v(" ...：指明压缩的MIMI类型")])],1)],1),a._v(" "),s("h3",{attrs:{id:"错误页配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误页配置"}},[a._v("#")]),a._v(" 错误页配置")]),a._v(" "),s("p",[a._v("errorfile "),s("code",[s("file",[a._v(" 自定义错误页\n"),s("code",[a._v("：HTTP status code.\n支持200, 400, 403, 408, 500, 502, 503, 504.\n"),s("file",[a._v("：错误页文件路径")])],1)])],1)]),a._v(" "),s("p",[a._v("示例：\n使用haproxy主机本地的文件进行响应")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("errorfile "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v(" /etc/haproxy/errorfiles/400badreq.http \nerrorfile "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("408")]),a._v(" /dev/null     "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# workaround Chrome preconnect bug ")]),a._v("\nerrorfile "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("403")]),a._v(" /etc/haproxy/errorfiles/403forbid.http \nerrorfile "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("503")]),a._v(" /etc/haproxy/errorfiles/503sorry.http \n")])])]),s("p",[a._v("使用url进行响应，响应状态码为302，不适用于GET以外的其他请求方法：\nerrorloc "),s("code",[s("url",[a._v(" 相当于errorloc302 "),s("code",[s("url",[a._v("，利用302重定向至指URL")])],1)])],1)]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("errorloc 503 http://www.a.com/error_pages/503.html\n")])])]),s("h3",{attrs:{id:"修改报文首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改报文首部"}},[a._v("#")]),a._v(" 修改报文首部")]),a._v(" "),s("p",[a._v("reqadd "),s("string",[a._v(" [{if | unless} "),s("cond",[a._v("]\n在请求报文尾部添加指定首部")])],1)],1),a._v(" "),s("p",[a._v("rspadd "),s("string",[a._v(" [{if | unless} "),s("cond",[a._v("]\n在响应报文尾部添加指定首部\n示例：")])],1)],1),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("rspadd X-Via:\\ HAPorxy  #字符串中的空格要转义\n")])])]),s("p",[a._v("reqdel "),s("search",[a._v(" [{if | unless} "),s("cond",[a._v("]\nreqidel "),s("search",[a._v(" [{if | unless} "),s("cond",[a._v("] (ignore case) 不分大小写\n从请求报文中删除匹配正则表达式的首部")])],1)],1)],1)],1),a._v(" "),s("p",[a._v("rspdel "),s("search",[a._v(" [{if | unless} "),s("cond",[a._v("]\nrspidel "),s("search",[a._v(" [{if | unless} "),s("cond",[a._v("] (ignore case) 不分大小写从响应报文中删除匹配正则表达式的首部 示例： rspidel Server.*")])],1)],1)],1)],1),a._v(" "),s("h3",{attrs:{id:"连接超时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接超时"}},[a._v("#")]),a._v(" 连接超时")]),a._v(" "),s("p",[a._v("timeout client "),s("timeout",[a._v(" 客户端最长空闲连接超时时长 默认单位是毫秒\ntimeout server "),s("timeout",[a._v(" 后端服务器最长空闲连接超时时长\ntimeout http-keep-alive "),s("timeout",[a._v(" 持久连接的持久时长\ntimeout http-request "),s("timeout",[a._v(" 一次完整的HTTP请求的最大等待时长\ntimeout connect "),s("timeout",[a._v(" 成功连接后端服务器的最大等待时长\ntimeout client-fin "),s("timeout",[a._v(" 客户端半连接的空闲时长\ntimeout server-fin "),s("timeout",[a._v(" 后端服务器半连接的空闲时长")])],1)],1)],1)],1)],1)],1)],1),a._v(" "),s("h2",{attrs:{id:"acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[a._v("#")]),a._v(" ACL")]),a._v(" "),s("p",[a._v("acl：haproxy的ACL用于实现基于请求报文的首部、响应报文的内容或其他的环境状态信息来做出转发决策，这大大增加了其配置弹性。其配置法则一般分为两部，首先定义ACL，既定义一个测试条件，而后在条件得到满足时执行某特定动作，如阻止访问或者转发至某特定的后端，\n定义ACL的语法格式如下：\nacl "),s("aclname",[s("criterion",[a._v(" [flags] [operator] ["),s("value",[a._v("] ...")])],1)],1)],1),a._v(" "),s("p",[s("aclname",[a._v("：ACL名称，可使用字母 数字 : . - _ 区分字符大小写")])],1),a._v(" "),s("p",[s("criterion",[a._v("： 指明检查条件\n各种条件 :\ndst 目标IP\ndst_port 目标PORT\nsrc 源IP\nsrc_port 源PORT\n示例：")])],1),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("acl invalid_src src 172.16.100.200\n")])])]),s("p",[s("value",[a._v("的类型：")])],1),a._v(" "),s("ul",[s("li",[a._v("boolean")]),a._v(" "),s("li",[a._v("integer or integer range")]),a._v(" "),s("li",[a._v("IP address / network")]),a._v(" "),s("li",[a._v("string (exact, substring, suffix, prefix, subdir, domain)")]),a._v(" "),s("li",[a._v("regular expression")]),a._v(" "),s("li",[a._v("hex block")])]),a._v(" "),s("flags",[a._v("\n-i 不区分大小写\n-m 使用指定的pattern匹配方法\n-n 不做DNS解析\n-u 强制每个ACL必须唯一ID，否则多个同名ACL或关系\n-- 强制flag结束. 当字符串和某个flag相似时使用\n"),s("p",[a._v("[operator]\n匹配整数值：eq、ge、gt、le、lt\n匹配字符串：")]),a._v(" "),s("ul",[s("li",[a._v("exact match (-m str) :字符串必须完全匹配模式")]),a._v(" "),s("li",[a._v("substring match (-m sub) :在提取的字符串中查找模式， 如果其中任何一个被发现，ACL将匹配")]),a._v(" "),s("li",[a._v("prefix match (-m beg) :在提取的字符串首部中查找模式 ，如果其中任何一个被发现，ACL将匹配")]),a._v(" "),s("li",[a._v("suffix match (-m end) :将模式与提取字符串的尾部进行比较，如果其中任何一个匹配，则ACL进行匹配")]),a._v(" "),s("li",[a._v("subdir match (-m dir) :查看提取出来的用斜线分隔（ “/”）的字符串，如果其中任何一个匹配，则ACL进行匹配")]),a._v(" "),s("li",[a._v("domain match (-m dom) :查找提取的用点（“.”）分隔 字符串，如果其中任何一个匹配，则ACL进行匹配")])]),a._v(" "),s("h3",{attrs:{id:"acl作为条件时的逻辑关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl作为条件时的逻辑关系"}},[a._v("#")]),a._v(" acl作为条件时的逻辑关系:")]),a._v(" "),s("ul",[s("li",[a._v("与：隐式（默认）使用")]),a._v(" "),s("li",[a._v("或：使用“or” 或 “||”表示")]),a._v(" "),s("li",[a._v("否定：使用“!“ 表示")])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" invalid_src invalid_port 与关系 \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" invalid_src "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" invalid_port 或 \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" invalid_src 非 \n")])])]),s("h3",{attrs:{id:"base-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-string"}},[a._v("#")]),a._v(" base : string")]),a._v(" "),s("p",[a._v("返回第一个主机头和请求的路径部分的连接，该请求从第一个斜杠开始，并在问号之前结束,对虚拟主机有用\n"),s("scheme",[a._v("😕/"),s("user",[a._v(":"),s("password",[a._v("@"),s("host",[a._v(":"),s("port",[a._v("/"),s("path",[a._v(";< params>?"),s("query",[a._v("#"),s("frag",[a._v("\nbase : exact string match\nbase_beg : prefix match\nbase_dir : subdir match\nbase_dom : domain match\nbase_end : suffix match\nbase_len : length match\nbase_reg : regex match\nbase_sub : substring match")])],1)],1)])],1)],1)],1)],1)],1),a._v(" "),s("h3",{attrs:{id:"path-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-string"}},[a._v("#")]),a._v(" path : string")]),a._v(" "),s("p",[a._v("提取请求的URL路径，该路径从第一个斜杠开始，并在问号之 前结束（无主机部分）\n"),s("scheme",[a._v("😕/"),s("user",[a._v(":"),s("password",[a._v("@"),s("host",[a._v(":"),s("port",[a._v("/"),s("path",[a._v(";< params>?"),s("query",[a._v("#"),s("frag",[a._v("\npath : exact string match\npath_beg : prefix match 匹配路径开头\npath_dir : subdir match\npath_dom : domain match\npath_end : suffix match 匹配路径结尾\npath_len : length match\npath_reg : regex match 正则表达式匹配一类PATH\npath_sub : substring match")])],1)],1)])],1)],1)],1)],1)],1),a._v(" "),s("h3",{attrs:{id:"url-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-string"}},[a._v("#")]),a._v(" url : string")]),a._v(" "),s("p",[a._v("提取请求中的URL。一个典型的应用是具有预取能力的缓存， 以及需要从数据库聚合多个信息并将它们保存在缓存中的网页门户入口\nurl : exact string match\nurl_beg : prefix match URL开头，匹配协议\nurl_dir : subdir match\nurl_dom : domain match\nurl_end : suffix match URL结尾\nurl_len : length match\nurl_reg : regex match 正则表达式匹配一类url\nurl_sub : substring match")]),a._v(" "),s("h3",{attrs:{id:"req-hdr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#req-hdr"}},[a._v("#")]),a._v(" req.hdr([")]),a._v(" "),s("p",[a._v("提取在一个HTTP请求报文的首部\nhdr(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : exact string match\nhdr_beg(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : prefix match 首部开头\nhdr_dir(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : subdir match\nhdr_dom(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : domain match\nhdr_end(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : suffix match 首部结尾\nhdr_len(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : length match\nhdr_reg(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : regex match\nhdr_sub(["),s("name",[a._v("[,"),s("occ",[a._v("]]) : substring match\n示例：")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("acl bad_curl hdr_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("User-Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" -i "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" \nblock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" bad_curl \n")])])]),s("h3",{attrs:{id:"status-integer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-integer"}},[a._v("#")]),a._v(" status : integer")]),a._v(" "),s("p",[a._v("返回在响应报文中的状态码")]),a._v(" "),s("h3",{attrs:{id:"预定义acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预定义acl"}},[a._v("#")]),a._v(" 预定义ACL")]),a._v(" "),s("p",[a._v("ACL名称 等价于 说明\nTRUE always_true 总是匹配\nFALSE always_false 从不匹配\nHTTP req_proto_http 匹配HTTP协议\nHTTP_1.0 req_ver 1.0 匹配HTTP协议1.0\nHTTP_1.1 req_ver 1.1 匹配HTTP协议1.1\nHTTP_CONTENT hdr_val(content-length) gt 0 匹配已存在内容长度\nHTTP_URL_ABS url_reg ^[^/:]"),s("em",[a._v('😕/ 匹配URL绝对路径\nHTTP_URL_SLASHurl_beg / 匹配URL相对路径\nHTTP_URL_STAR url * 匹配 URL 等于 "')]),a._v('"\nLOCALHOST src 127.0.0.1/8 匹配从localhost来的连接\nMETH_CONNECT method CONNECT 匹配HTTP CONNECT方法\nMETH_GETmethod GET HEAD #match HTTP GET or HEAD method\nMETH_HEAD method HEAD #match HTTP HEAD method\nMETH_OPTIONS method OPTIONS #match HTTP OPTIONS method\nMETH_POST method POST #match HTTP POST method\nMETH_TRACE method TRACE #match HTTP TRACE method\nRDP_COOKIE req_rdp_cookie_cnt gt 0 #match presence of an RDP cookie\nREQ_CONTENT req_len gt 0 #match data in the request buffer\nWAIT_ENDwait_end #wait for end of content analysis')]),a._v(" "),s("h3",{attrs:{id:"acl配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acl配置"}},[a._v("#")]),a._v(" acl配置")]),a._v(" "),s("h4",{attrs:{id:"基于ip的访问控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于ip的访问控制"}},[a._v("#")]),a._v(" 基于IP的访问控制")]),a._v(" "),s("p",[a._v("use_backend "),s("backend",[a._v(" [{if | unless} "),s("condition",[a._v("]\n当if/unless一个基于ACL的条件匹配时切换指定backend")])],1)],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("acl invalid_src src "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".200.2 \nblock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" invalid_src \nerrorfile "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("403")]),a._v(" /etc/fstab\n")])])]),s("h4",{attrs:{id:"七层请求的访问控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七层请求的访问控制"}},[a._v("#")]),a._v(" 七层请求的访问控制")]),a._v(" "),s("p",[a._v("http-request { allow | deny |add-header "),s("name",[s("fmt",[a._v(" |set-header "),s("name",[s("fmt",[a._v(" } [ { if | unless } "),s("condition",[a._v(" ]")])],1)],1)],1)],1)],1),a._v(" "),s("h4",{attrs:{id:"四层请求访问控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四层请求访问控制"}},[a._v("#")]),a._v(" 四层请求访问控制")]),a._v(" "),s("p",[a._v("tcp-request connection {accept|reject} [{if | unless} "),s("condition",[a._v("]\n示例：")])],1),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("listen "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" \n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" :22022 \nbalance leastconn \nacl invalid_src src "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".200.2 \ntcp-request connection reject "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" invalid_src \nmode tcp \nserver sshsrv1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".100.6:22 check \nserver sshsrv2 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".100.7:22 check backup\n")])])]),s("h4",{attrs:{id:"基于acl的动静分离示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于acl的动静分离示例"}},[a._v("#")]),a._v(" 基于ACL的动静分离示例")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("frontend  web *:80 \n    acl url_static       path_beg       -i /static /images /javascript /stylesheets \n    acl url_static       path_end       -i .jpg .gif .png .css .js .html .txt .htm \n    use_backend staticsrvs       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" url_static \n    default_backend             appsrvs \nbackend staticsrvs \n    balance     roundrobin \n    server      stcsrv1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".100.6:80 check \nbackend appsrvs \n    balance     roundrobin \n    server  app1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".100.7:80 check \n    server  app1 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".100.7:8080 check \nlisten stats \n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("bind")]),a._v(" :9091 \n    stats "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" \n    stats auth admin:admin \n    stats admin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" TRUE\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#一个ACL定义了两个条件，如果用户的请求满足PATH中带有/static /images /javascript /stylesheets 这些字符的，或者path是以.jpg .gif .png .css .js .html .txt .htm 这些字符结尾的就匹配ACL定义")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#满足ACL定义的请求为静态请求，被调度到后端的staticsrvs机组上")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#不满组以上两个条件的请求默认调度都后端包含两台服务器轮询的appsrvs机组上")]),a._v("\n")])])]),s("h3",{attrs:{id:"支持https协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持https协议"}},[a._v("#")]),a._v(" 支持https协议")]),a._v(" "),s("p",[a._v("配置HAProxy支持https协议：\n1 支持ssl会话；\nbind *:443 ssl crt /PATH/TO/SOME_PEM_FILE\ncrt 后证书文件为PEM格式，且同时包含证书和所有私钥\ncat demo.crt demo.key > demo.pem")]),a._v(" "),s("p",[a._v("2 把80端口的请求重向定443\nbind *:80\nredirect scheme https if !{ ssl_fc }")]),a._v(" "),s("p",[a._v("3 向后端传递用户请求的协议和端口（frontend或backend）\nhttp_request set-header X-Forwarded-Port %[dst_port]\nhttp_request add-header X-Forwared-Proto https if { ssl_fc }")])])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);