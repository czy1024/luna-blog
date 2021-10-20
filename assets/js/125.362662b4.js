(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{749:function(r,t,e){"use strict";e.r(t);var s=e(7),n=Object(s.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"为什么需要内网穿透功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要内网穿透功能"}},[r._v("#")]),r._v(" 为什么需要内网穿透功能")]),r._v(" "),e("p",[e("strong",[r._v("从公网中访问自己的私有设备向来是一件难事儿。")]),r._v("\n自己的主力台式机、NAS等等设备，它们可能处于路由器后，或者运营商因为IP地址短缺不给你分配公网IP地址。如果我们想直接访问到这些设备（远程桌面，远程文件，SSH等等），一般来说要通过一些转发或者P2P组网软件的帮助。\n我有一台计算机位于一个很复杂的局域网中，我想要实现远程桌面和文件访问，目前来看其所处的网络环境很难通过简单的端口映射将其暴露在公网之中，我试过这么几种方法：")]),r._v(" "),e("ol",[e("li",[r._v("远程桌面使用TeamViewer。可用，但需要访问端也拥有TeamViewer软件，不是很方便，希望能使用Windows自带的远程桌面。且TeamViewer不易实现远程文件访问。")]),r._v(" "),e("li",[r._v("使用蒲公英VPN软件进行组网，可用，但免费版本网络速度极慢，体验不佳，几乎无法正常使用。")]),r._v(" "),e("li",[r._v("使用花生壳软件进行DDNS解析，可用，但同第二点所述，免费版本有带宽限制，无法实际使用。")]),r._v(" "),e("li",[e("strong",[r._v("搭建frp服务器进行内网穿透，可用且推荐，可以达到不错的速度，且理论上可以开放任何想要的端口，可以实现的功能远不止远程桌面或者文件共享。")])])]),r._v(" "),e("h2",{attrs:{id:"frp是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frp是什么"}},[r._v("#")]),r._v(" frp是什么")]),r._v(" "),e("p",[r._v("简单地说，"),e("a",{attrs:{href:"https://github.com/fatedier/frp/blob/master/README_zh.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("frp"),e("OutboundLink")],1),r._v("就是一个"),e("a",{attrs:{href:"https://www.zhihu.com/question/24723688",target:"_blank",rel:"noopener noreferrer"}},[r._v("反向代理软件"),e("OutboundLink")],1),r._v("，它体积轻量但功能很强大，可以"),e("strong",[r._v("使处于内网或防火墙后的设备对外界提供服务")]),r._v("，它支持HTTP、TCP、UDP等众多协议。我们今天仅讨论TCP和UDP相关的内容。\n截至本文完成，frp的最新版本为v0.22.0，本文使用最新版本。")]),r._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[r._v("#")]),r._v(" 准备工作")]),r._v(" "),e("p",[r._v("搭建一个完整的frp服务链，我们需要")]),r._v(" "),e("ol",[e("li",[r._v("VPS一台（也可以是具有公网IP的实体机）")]),r._v(" "),e("li",[r._v("访问目标设备（就是你最终要访问的设备）")]),r._v(" "),e("li",[r._v("简单的Linux基础（会用cp等几个简单命令即可）")])]),r._v(" "),e("h3",{attrs:{id:"vps相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vps相关"}},[r._v("#")]),r._v(" VPS相关")]),r._v(" "),e("ul",[e("li",[r._v("因为frp的原理是利用服务端（所准备的VPS）进行转发，因而VPS的速度直接决定了之后连接的质量，请根据自己的需要选择相应主机配置。")]),r._v(" "),e("li",[r._v("我使用了DigitalOcean的新加坡机房，北京移动、中国教育网下测试速度尚可。")]),r._v(" "),e("li",[r._v("系统使用Ubuntu 16.04.5 x64，frp客户端和服务端本身同时均支持Linux和Windows，且配置方法一样，请根据实际环境自行测试，如果你是新建的VPS，那选择Ubuntu 16.04.5 x64就可以了。")])]),r._v(" "),e("h2",{attrs:{id:"服务端设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端设置"}},[r._v("#")]),r._v(" 服务端设置")]),r._v(" "),e("p",[r._v("SSH连接到VPS之后运行如下命令查看处理器架构，根据架构下载不同版本的frp\n"),e("code",[r._v("arch")]),r._v("\n查看结果，如果是“X86_64“即可选择”amd64”，\n运行如下命令，根据架构不同，选择相应版本并进行下载\n"),e("code",[r._v("wget https://github.com/fatedier/frp/releases/download/v0.22.0/frp_0.22.0_linux_amd64.tar.gz")]),r._v("\n然后解压\n"),e("code",[r._v("tar -zxvf frp_0.22.0_linux_amd64.tar.gz")]),r._v("\n文件夹改个名，方便使用\n"),e("code",[r._v("cp -r frp_0.22.0_linux_amd64 frp")]),r._v("\n把解压出来的文件夹复制到你想要的目录下，为了方便我直接放在用户目录下了，进入该目录\n"),e("code",[r._v("cd frp")]),r._v("\n查看一下文件\n"),e("code",[r._v("ls -a")]),r._v("\n我们只需要关注如下几个文件")]),r._v(" "),e("ul",[e("li",[r._v("frps")]),r._v(" "),e("li",[r._v("frps.ini")]),r._v(" "),e("li",[r._v("frpc")]),r._v(" "),e("li",[r._v("frpc.ini")])]),r._v(" "),e("p",[r._v("前两个文件（s结尾代表server）分别是服务端程序和服务端配置文件，后两个文件（c结尾代表client）分别是客户端程序和客户端配置文件。\n因为我们正在配置服务端，可以删除客户端的两个文件\n"),e("code",[r._v("rm frpc")]),r._v(" "),e("code",[r._v("rm frpc.ini")]),r._v("\n然后修改frps.ini文件\n"),e("code",[r._v("vim frps.ini")]),r._v("\n这个文件应有如下格式")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("[common]\nbind_port = 7000\ndashboard_port = 7500\ntoken = 12345678\ndashboard_user = admin\ndashboard_pwd = admin\nvhost_http_port = 10080\nvhost_https_port = 10443\n")])])]),e("blockquote",[e("p",[r._v("如果没有必要，端口均可使用默认值，token、user和password项请自行设置。")])]),r._v(" "),e("ul",[e("li",[r._v("“bind_port”表示用于客户端和服务端连接的端口，这个端口号我们之后在配置客户端的时候要用到。")]),r._v(" "),e("li",[r._v("“dashboard_port”是服务端仪表板的端口，若使用7500端口，在配置完成服务启动后可以通过浏览器访问 x.x.x.x:7500 （其中x.x.x.x为VPS的IP）查看frp服务运行信息。")]),r._v(" "),e("li",[r._v("“token”是用于客户端和服务端连接的口令，请自行设置并记录，稍后会用到。")]),r._v(" "),e("li",[r._v("“dashboard_user”和“dashboard_pwd”表示打开仪表板页面登录的用户名和密码，自行设置即可。")]),r._v(" "),e("li",[r._v("“vhost_http_port”和“vhost_https_port”用于反向代理HTTP主机时使用，本文不涉及HTTP协议，因而照抄或者删除这两条均可。")])]),r._v(" "),e("p",[r._v("编辑完成后保存（vim保存如果不会请自行搜索）。\n之后我们就可以运行frps的服务端了\n"),e("code",[r._v("./frps -c frps.ini")]),r._v("\n如果看到屏幕输出这样一段内容，即表示运行正常，如果出现错误提示，请检查上面的步骤。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("2019/01/12 15:22:39 [I] [service.go:130] frps tcp listen on 0.0.0.0:7000\n2019/01/12 15:22:39 [I] [service.go:172] http service listen on 0.0.0.0:10080\n2019/01/12 15:22:39 [I] [service.go:193] https service listen on 0.0.0.0:10443\n2019/01/12 15:22:39 [I] [service.go:216] Dashboard listen on 0.0.0.0:7500\n2019/01/12 15:22:39 [I] [root.go:210] Start frps success\n")])])]),e("p",[r._v("此时访问 x.x.x.x:7500 并使用自己设置的用户名密码登录，即可看到仪表板界面")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/01/12/FjUf76.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"frp服务端仪表板界面"}}),r._v("frp服务端仪表板界面")]),r._v(" "),e("h2",{attrs:{id:"服务端后台运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端后台运行"}},[r._v("#")]),r._v(" 服务端后台运行")]),r._v(" "),e("p",[r._v("至此，我们的服务端仅运行在前台，如果Ctrl+C停止或者关闭SSH窗口后，frps均会停止运行，因而我们使用 "),e("a",{attrs:{href:"https://ehlxr.me/2017/01/18/Linux-%E7%9A%84-nohup-%E5%91%BD%E4%BB%A4%E7%9A%84%E7%94%A8%E6%B3%95/",target:"_blank",rel:"noopener noreferrer"}},[r._v("nohup命令"),e("OutboundLink")],1),r._v("将其运行在后台。")]),r._v(" "),e("blockquote",[e("p",[r._v("nohup后台程序管理或关闭相关命令可自行查询资料，上面这个连接中也有所提及。")])]),r._v(" "),e("p",[e("code",[r._v("nohup ./frps -c frps.ini &")]),r._v("\n输出如下内容即表示正常运行")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("nohup: ignoring input and appending output to 'nohup.out'\n")])])]),e("p",[r._v("此时可先使用Ctrl+C关闭nohup，frps依然会在后台运行，使用jobs命令查看后台运行的程序\n"),e("code",[r._v("jobs")]),r._v("\n在结果中我们可以看到frps正在后台正常运行")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("[1]+  Running                 nohup ./frps -c frps.ini &\n")])])]),e("p",[r._v("此时访问 x.x.x.x:7500 依然可以打开仪表板界面，至此，服务端即设置完成，你可以关闭SSH窗口了。")]),r._v(" "),e("h2",{attrs:{id:"客户端设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端设置"}},[r._v("#")]),r._v(" 客户端设置")]),r._v(" "),e("blockquote",[e("p",[r._v("frp的客户端就是我们想要真正进行访问的那台设备，大多数情况下应该会是一台Windows主机，因而本文使用Windows主机做例子；Linux配置方法类似，不再赘述。")])]),r._v(" "),e("p",[r._v("同样地，根据客户端设备的情况选择相应的frp程序进行"),e("a",{attrs:{href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[r._v("下载"),e("OutboundLink")],1),r._v("，Windows下下载和解压等步骤不再描述。\n假定你下载了“frp_0.22.0_windows_amd64.zip”，将其解压在了C盘根目录下，并且将文件夹重命名为“frp”，可以删除其中的frps和frps.ini文件。\n用文本编辑器打开frpc.ini，与服务端类似，内容如下。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("[common]\nserver_addr = x.x.x.x\nserver_port = 7000\ntoken = won517574356\n[rdp]\ntype = tcp\nlocal_ip = 127.0.0.1           \nlocal_port = 3389\nremote_port = 7001  \n[smb]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 445\nremote_port = 7002\n")])])]),e("p",[r._v("其中common字段下的三项即为服务端的设置。")]),r._v(" "),e("ul",[e("li",[r._v("“server_addr”为服务端IP地址，填入即可。")]),r._v(" "),e("li",[r._v("“server_port”为服务器端口，填入你设置的端口号即可，如果未改变就是7000")]),r._v(" "),e("li",[r._v("“token”是你在服务器上设置的连接口令，原样填入即可。")])]),r._v(" "),e("h2",{attrs:{id:"自定义规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义规则"}},[r._v("#")]),r._v(" 自定义规则")]),r._v(" "),e("p",[r._v("frp实际使用时，会按照端口号进行对应的转发，原理如下图所示。")]),r._v(" "),e("p",[e("img",{attrs:{src:"https://s2.ax1x.com/2019/01/12/FjUW0x.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1",alt:"frp的原理"}}),r._v("frp的原理")]),r._v(" "),e("p",[r._v("上面frpc.ini的rdp、smb字段都是自己定义的规则，自定义端口对应时格式如下。")]),r._v(" "),e("ul",[e("li",[r._v("“[xxx]”表示一个规则名称，自己定义，便于查询即可。")]),r._v(" "),e("li",[r._v("“type”表示转发的协议类型，有TCP和UDP等选项可以选择，如有需要请自行查询frp手册。")]),r._v(" "),e("li",[r._v("“local_port”是本地应用的端口号，按照实际应用工作在本机的端口号填写即可。")]),r._v(" "),e("li",[r._v("“remote_port”是该条规则在服务端开放的端口号，自己填写并记录即可。")])]),r._v(" "),e("blockquote",[e("p",[r._v("RDP，即Remote Desktop 远程桌面，Windows的RDP默认端口是3389，协议为TCP，建议使用frp远程连接前，在局域网中测试好，能够成功连接后再使用frp穿透连接。")]),r._v(" "),e("p",[r._v("SMB，即Windows文件共享所使用的协议，默认端口号445，协议TCP，本条规则可实现远程文件访问。")])]),r._v(" "),e("p",[r._v("配置完成frpc.ini后，就可以运行frpc了")]),r._v(" "),e("blockquote",[e("p",[r._v("frpc程序不能直接双击运行！")])]),r._v(" "),e("p",[r._v("使用命令提示符或Powershell进入该目录下\n"),e("code",[r._v("cd C:\\frp")]),r._v("\n并执行\n"),e("code",[r._v("./frpc -c frpc.ini")]),r._v("\n运行frpc程序，窗口中输出如下内容表示运行正常。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("2019/01/12 16:14:56 [I] [service.go:205] login to server success, get run id [2b65b4e58a5917ac], server udp port [0]\n2019/01/12 16:14:56 [I] [proxy_manager.go:136] [2b65b4e58a5917ac] proxy added: [rdp smb]\n2019/01/12 16:14:56 [I] [control.go:143] [smb] start proxy success\n2019/01/12 16:14:56 [I] [control.go:143] [rdp] start proxy success\n")])])]),e("p",[r._v("不要关闭命令行窗口，此时可以在局域网外使用相应程序访问 x.x.x.x:xxxx （IP为VPS的IP，端口为自定义的remote_port）即可访问到相应服务。")]),r._v(" "),e("h2",{attrs:{id:"客户端后台运行及开机自启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端后台运行及开机自启"}},[r._v("#")]),r._v(" 客户端后台运行及开机自启")]),r._v(" "),e("p",[r._v("frpc运行时始终有一个命令行窗口运行在前台，影响美观，我们可以使用一个批处理文件来将其运行在后台，而且可以双击执行，每次打开frpc不用再自己输命令了。\n在任何一个目录下新建一个文本文件并将其重命名为“frpc.bat”，编辑，粘贴如下内容并保存。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v('@echo off\nif "%1" == "h" goto begin\nmshta vbscript:createobject("wscript.shell").run("""%~nx0"" h",0)(window.close)&&exit\n:begin\nREM\ncd C:\\frp\nfrpc -c frpc.ini\nexit\n')])])]),e("blockquote",[e("p",[r._v("将cd后的路径更改为你的frpc实际存放的目录。")])]),r._v(" "),e("p",[r._v("之后直接运行这个 .bat 文件即可启动frpc并隐藏窗口（可在任务管理器中退出）。\n至于开机启动，把这个 .bat 文件直接扔进Windows的开机启动文件夹就好了 😃\n至此，客户端配置完成，之后就是你自己根据需要在frpc.ini后追加规则即可。\n强烈建议你在使用frp直接测试内网穿透前，先在局域网内测试好相关功能的正常使用，并配置好可能会影响的Windows防火墙等内容，在内网调试通过后再使用frp进行内网穿透测试。")])])}),[],!1,null,null,null);t.default=n.exports}}]);