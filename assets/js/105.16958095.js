(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{732:function(e,t,a){"use strict";a.r(t);var r=a(7),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"apache虚拟主机配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache虚拟主机配置"}},[e._v("#")]),e._v(" apache虚拟主机配置")]),e._v(" "),a("p",[e._v("apache2.4的最终配置效果:")]),e._v(" "),a("p",[a("strong",[e._v("httpd.conf")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("Listen 19010\n# Virtual hosts\nInclude conf/extra/httpd-vhosts.conf\n")])])]),a("p",[a("strong",[e._v("httpd-vhosts.conf")])]),e._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("# IP:Port,以端口号配置虚拟机\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("VirtualHost")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("127.0.0.1:")]),e._v("19010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v('\n    # 网站错误时提示的联系管理员邮箱（可不配置）\n    ServerAdmin webmaster@dummy-host.example.com\n    # 虚拟主机根目录\n    DocumentRoot "${SRVROOT}"\n    # 服务器名称（可不配置）\n    ServerName dummy-host.example.com\n    # 服务器别名（可不配置）\n    ServerAlias www.dummy-host.example.com\n    # 错误日志\n    ErrorLog "logs/dummy-host.example.com-error.log"\n    # 访问日志\n    CustomLog "logs/dummy-host.example.com-access.log" common\n    # 访问目录的配置，可以是其的一个子文件夹\n    <Directory "${SRVROOT}/public">\n        # 控制特定目录将启用哪些服务器特性\n\t\tOptions FollowSymLinks\n        # 指明Apache服务器是否去找.htacess文件作为配置文件\n\t\tAllowOverride All\n        # 控制请求是否可以访问\n\t\tRequire all granted\n\t'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("VirtualHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("部分参数详细说明：")]),e._v(" "),a("p",[a("strong",[e._v("Options FollowSymLinks")])]),e._v(" "),a("p",[e._v("Options指令是Apache配置文件中一个比较常见也比较重要的指令，Options指令可以在Apache服务器核心配置(server config)、虚拟主机配置(virtual host)、特定目录配置(directory)以及.htaccess文件中使用。")]),e._v(" "),a("p",[e._v("Options指令的主要作用是控制特定目录将启用哪些服务器特性。")]),e._v(" "),a("p",[e._v("All")]),e._v(" "),a("p",[e._v("表示除 "),a("code",[e._v("MultiViews")]),e._v("之外的所有特性。这也是Options指令的默认设置。")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("p",[e._v("表示不启用任何的服务器特性。")]),e._v(" "),a("p",[e._v("FollowSymLinks")]),e._v(" "),a("p",[e._v("服务器允许在此目录中使用符号连接。如果该配置选项位于 "),a("code",[e._v("<Location>")]),e._v("配置段中，将会被忽略。")]),e._v(" "),a("p",[e._v("Indexes")]),e._v(" "),a("p",[e._v("如果输入的网址对应服务器上的一个文件目录，而此目录中又没有 "),a("code",[e._v("DirectoryIndex")]),e._v("指令(例如： "),a("code",[e._v("DirectoryIndex index.html index.php")]),e._v(")，那么服务器会返回由 "),a("code",[e._v("mod_autoindex")]),e._v("模块生成的一个格式化后的目录列表，并列出该目录下的所有文件。")]),e._v(" "),a("p",[e._v("MultiViews")]),e._v(" "),a("p",[e._v("允许使用 "),a("code",[e._v("mod_negotiation")]),e._v('模块提供内容协商的"多重视图"。')]),e._v(" "),a("p",[e._v("SymLinksIfOwnerMatch")]),e._v(" "),a("p",[e._v("服务器仅在符号连接与目标文件或目录的所有者具有相同的用户ID时才使用它。")]),e._v(" "),a("p",[e._v("ExecCGI")]),e._v(" "),a("p",[e._v("允许使用 "),a("code",[e._v("mod_cgi")]),e._v("模块执行CGI脚本。")]),e._v(" "),a("p",[e._v("Includes")]),e._v(" "),a("p",[e._v("允许使用 "),a("code",[e._v("mod_include")]),e._v("模块提供的服务器端包含功能。")]),e._v(" "),a("p",[e._v("IncludesNOEXEC")]),e._v(" "),a("p",[e._v('允许服务器端包含，但禁用"#exec cmd"和"#exec cgi"。但仍可以从 '),a("code",[e._v("ScriptAlias")]),e._v('目录使用"#include virtual"虚拟CGI脚本。')]),e._v(" "),a("p",[a("strong",[e._v("AllowOverride All")])]),e._v(" "),a("p",[e._v("AllowOverride参数就是指明Apache服务器是否去找.htacess文件作为配置文件，如果设置为none,那么服务器将忽略.htacess文件，如果设置为All,那么所有在.htaccess文件里有的指令都将被重写。对于AllowOverride，还可以对它指定如下一些能被重写的指令类型。")]),e._v(" "),a("p",[e._v("从安全性考虑，根目录的AllowOverride属性一般都配置成不允许任何Override 。")]),e._v(" "),a("p",[e._v("None")]),e._v(" "),a("p",[e._v("网站 .htaccess 文件将被完全忽略。")]),e._v(" "),a("p",[e._v("All")]),e._v(" "),a("p",[e._v("所有具有 .htaccess 作用域的指令都允许出现在 .htaccess 文件中。")]),e._v(" "),a("p",[e._v("AuthConfig")]),e._v(" "),a("p",[e._v("允许使用与认证授权相关的指令(AuthDBMGroupFile, AuthDBMUserFile, AuthGroupFile, AuthName, AuthType, AuthUserFile, Require, 等)。")]),e._v(" "),a("p",[e._v("FileInfo")]),e._v(" "),a("p",[e._v("允许使用控制文档类型的指令(DefaultType, ErrorDocument, ForceType, LanguagePriority, SetHandler, SetInputFilter, SetOutputFilter, mod_mime中的 Add* 和 Remove* 指令等等)、控制文档元数据的指令(Header, RequestHeader, SetEnvIf, SetEnvIfNoCase, BrowserMatch, CookieExpires, CookieDomain, CookieStyle, CookieTracking, CookieName)、mod_rewrite中的指令(RewriteEngine, RewriteOptions, RewriteBase, RewriteCond, RewriteRule)和mod_actions中的Action指令。")]),e._v(" "),a("p",[e._v("Indexes")]),e._v(" "),a("p",[e._v("允许使用控制目录索引的指令(AddDescription, AddIcon, AddIconByEncoding, AddIconByType, DefaultIcon, DirectoryIndex, FancyIndexing, HeaderName, IndexIgnore, IndexOptions, ReadmeName, 等)。")]),e._v(" "),a("p",[e._v("Limit")]),e._v(" "),a("p",[e._v("允许使用控制主机访问的指令(Allow, Deny, Order)。 一般 Apache 新安装 AllowOverride 默认为「None」。")]),e._v(" "),a("p",[e._v('一般都尽可能避免使用.htaccess文件，任何希望放在.htaccess文件中的配置，都可放在主配置的"'),a("Directory",[e._v("”段中。避免使用的原因主要有：")])],1),e._v(" "),a("p",[e._v("性能问题")]),e._v(" "),a("p",[e._v("如果AllowOverride启用.htaccess文件，则Apache会在每个目录中查找.htaccess文件，因此启用.htaccess都会导致性能的下降。")]),e._v(" "),a("p",[e._v("另外，对每一个请求，都需要读取一次.htaccess文件。")]),e._v(" "),a("p",[e._v("还有，Apache必须在所有上级的目录中查找.htaccess文件，以使所有有效的指令都起作用(参见指令的生效)")]),e._v(" "),a("p",[e._v("安全问题")]),e._v(" "),a("p",[e._v("允许用户自己修改apache的配置，可能会导致某些意想不到的修改，如果给予用户较少的特权而不能满足其需要，则会带来额外的技术支持请求，所以必须明确地告诉用户已经给予他们的权限，说明AllowOverride设置的值，并引导他们参阅相应的说明，以免日后生出许多麻烦。")]),e._v(" "),a("p",[a("strong",[e._v("Require all granted")])]),e._v(" "),a("p",[e._v("在Apache2.2版本中，访问控制是基于客户端的主机名、IP地址以及客户端请求中的其他特征，使用Order(排序), Allow(允许), Deny(拒绝),Satisfy(满足)指令来实现。")]),e._v(" "),a("p",[e._v("在Apache2.4版本中，使用mod_authz_host这个新的模块，来实现访问控制，其他授权检查也以同样的方式来完成。旧的访问控制语句应当被新的授权认证机制所取代，即便Apache已经提供了mod_access_compat这一新模块来兼容旧语句。")]),e._v(" "),a("p",[e._v("用新方法取代旧语句实现相同的访问控制示例：")]),e._v(" "),a("p",[e._v("1.所有请求都被拒绝")]),e._v(" "),a("p",[e._v("Apache2.2 配置:")]),e._v(" "),a("p",[e._v("Order deny,allow #排序，先拒绝后允许")]),e._v(" "),a("p",[e._v("Deny from all #拒绝所有")]),e._v(" "),a("p",[e._v("Apache2.4 配置:")]),e._v(" "),a("p",[e._v("Require all denied #拒绝所有")]),e._v(" "),a("p",[e._v("2.所有请求都被允许")]),e._v(" "),a("p",[e._v("Apache2.2 配置:")]),e._v(" "),a("p",[e._v("Order allow,deny #排序，先允许后拒绝")]),e._v(" "),a("p",[e._v("Allow from all #允许所有")]),e._v(" "),a("p",[e._v("Apache2.4 配置:")]),e._v(" "),a("p",[e._v("Require all granted #允许所有")]),e._v(" "),a("p",[e._v("http://3.example.com所有请求都被允许，其他拒绝")]),e._v(" "),a("p",[e._v("Apache2.2 配置:")]),e._v(" "),a("p",[e._v("Order Deny,Allow #排序，先拒绝后允许")]),e._v(" "),a("p",[e._v("Deny from all #拒绝所有")]),e._v(" "),a("p",[e._v("Allow from "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example Domain"),a("OutboundLink")],1),e._v(" #"),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//%E5%85%81%E8%AE%B8example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("允许example.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Apache2.4 配置:")]),e._v(" "),a("p",[e._v("Require host "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example Domain"),a("OutboundLink")],1),e._v(" #"),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//%E5%85%81%E8%AE%B8example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("允许example.com"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("附：常见访问控制指令")]),e._v(" "),a("p",[e._v("Require all granted #允许所有来源访问")]),e._v(" "),a("p",[e._v("Require all denied #拒绝所有来源访问")]),e._v(" "),a("p",[e._v("Require expr expression #允许表达式为true时访问")]),e._v(" "),a("p",[e._v("Require ip 10 172.1 192.168.2 #允许特定IP段访问，多个段之前用空格隔开，每个段使用开头几项表示")]),e._v(" "),a("p",[e._v("Require host "),a("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//example.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example Domain"),a("OutboundLink")],1),e._v(" #只允许来自域名example.com的主机访问")])])}),[],!1,null,null,null);t.default=v.exports}}]);