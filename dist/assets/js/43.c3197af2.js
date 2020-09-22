(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{347:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_1-vue脚手架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue脚手架"}},[s._v("#")]),s._v(" 1. vue脚手架")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("用来创建vue项目的工具包\n创建项目:\n    npm install -g vue-cli\n    vue init webpack VueDemo\n开发环境运行:\n    cd VueDemo\n    npm install\n    npm run dev\n生产环境打包发布\n    npm run build\n    npm install -g serve\n    serve dist\n    http://localhost:5000\n")])])]),n("h2",{attrs:{id:"_2-eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-eslint"}},[s._v("#")]),s._v(" 2. eslint")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("用来做项目编码规范检查的工具\n基本原理: 定义了很多规则, 检查项目的代码一旦发现违背了某个规则就输出相应的提示信息\n有相应的配置, 可定制检查\n")])])]),n("h2",{attrs:{id:"_3-组件化编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件化编程"}},[s._v("#")]),s._v(" 3. 组件化编程")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("vue文件包含3个部分\n    <template>\n      <div></div>\n    </template>\n    <script>\n        export default {\n\t\t  props: []/{}\n          data(){},\n\t\t  computed: {}\n          methods: {},\n\t\t  \n\t\t  watch: {}\n\t\t  filters: {}\n\t\t  directives: {}\n\t\t  components: {}\n        }\n    <\/script>\n    <style>\n    </style>\n组件化编码的基本流程\n\t1). 拆分界面, 抽取组件\n\t2). 编写静态组件\n\t3). 编写动态组件\n    \t初始化数据, 动态显示初始化界面\n    \t实现与用户交互功能\n组件通信的5种方式\n\tprops\n\tvue的自定义事件\n\tpubsub第三方库\n\tslot\n\tvuex(后面单独讲)\nprops:\n    父子组件间通信的基本方式\n    属性值的2大类型: \n        一般: 父组件--\x3e子组件\n        函数: 子组件--\x3e父组件\n\t隔层组件间传递: 必须逐层传递(麻烦)\n\t兄弟组件间: 必须借助父组件(麻烦)\nvue自定义事件\n    子组件与父组件的通信方式\n    用来取代function props\n    不适合隔层组件和兄弟组件间的通信\npubsub第三方库(消息订阅与发布)\n    适合于任何关系的组件间通信\nslot\n    通信是带数据的标签\n    注意: 标签是在父组件中解析\nvuex\n    多组件共享状态(数据的管理)\n    组件间的关系也没有限制\n    功能比pubsub强大, 更适用于vue项目\n")])])]),n("h2",{attrs:{id:"_4-ajax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-ajax"}},[s._v("#")]),s._v(" 4. ajax")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("相关库"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("resource"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" vue插件"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 多用于vue1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\n    axios"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 第三方库"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 多用于vue2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\nvue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("resource使用\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入模块")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" VueResource "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue-resource'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用插件")]),s._v("\n    Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("VueResource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过vue/组件对象发送ajax请求")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/someUrl'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// success callback")]),s._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回结果数据")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("response")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error callback")]),s._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("statusText"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//错误信息")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\naxios使用\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入模块")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" axios "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'axios'")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送ajax请求")]),s._v("\n    axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("response")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("response"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 得到返回结果数据")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("catch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h2",{attrs:{id:"_5-vue-router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-router"}},[s._v("#")]),s._v(" 5. vue-router")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("vue用来实现SPA的插件\n使用vue-router\n    1. 创建路由器: router/index.js\n      new VueRouter({\n        routes: [\n          { // 一般路由\n            path: '/about',\n            component: about\n          },\n          { // 自动跳转路由\n            path: '/', \n            redirect: '/about'\n          }\n        ]\n      })\n    2. 注册路由器: main.js\n       import router from './router'\n       \tnew Vue({\n       \t\trouter\n       \t})\n    3. 使用路由组件标签:\n       \t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Go to XXX"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-link")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n       \t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n编写路由的3步\n    1. 定义路由组件    \n    2. 映射路由\n    3. 编写路由2个标签\n嵌套路由\n    children: [\n        {\n          path: '/home/news',\n          component: news\n        },\n        {\n          path: 'message',\n          component: message\n        }\n     ]\n向路由组件传递数据\n    params: "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-link")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("to")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/home/news/abc/123"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    props: "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-view")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("msg")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("abc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n缓存路由组件\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("keep-alive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("router-view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("router-view")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("keep-alive")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n路由的编程式导航\n\tthis.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)\n\tthis.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)\n\tthis.$router.back(): 请求(返回)上一个记录路由\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);