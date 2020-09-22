(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{339:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"review-mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review-mysql"}},[s._v("#")]),s._v(" Review mysql")]),s._v(" "),a("h3",{attrs:{id:"插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入"}},[s._v("#")]),s._v(" 插入")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("一、方式一\n语法：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n特点：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、要求值的类型和字段的类型要一致或兼容\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、字段的个数和顺序不一定与原始表中的字段个数和顺序一致\n但必须保证值和字段一一对应\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、假如表中有可以为"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("的字段，注意可以通过以下两种方式插入"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("值\n①字段和值都省略\n②字段写上，值使用"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、字段和值的个数必须一致\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、字段名可以省略，默认所有列\n\n二、方式二\n语法：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n两种方式 的区别：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("方式一支持一次插入多行，语法如下：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 表名【"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("字段名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("】 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("值，"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("方式一支持子查询，语法如下：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" 表名\n查询语句"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("一、修改单表的记录 ★\n语法："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" 表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值 【"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选条件】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n二、修改多表的记录【补充】\n语法：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 连接条件  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" 字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字段"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("值 \n【"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选条件】"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除"}},[s._v("#")]),s._v(" 删除")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("方式一：使用"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n一、删除单表的记录★\n语法："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表名 【"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选条件】【"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" 条目数】\n二、级联删除"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("补充"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n语法：\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" 别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("别名"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 别名 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("inner")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("right")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" 表"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 别名 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" 连接条件\n 【"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 筛选条件】\n\n方式二：使用"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("\n语法："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" 表名\n\n两种方式的区别【面试题】★\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("删除后，如果再插入，标识列从"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("开始\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("删除后，如果再插入，标识列从断点开始\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("可以添加筛选条件\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("不可以添加筛选条件\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("效率较高\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("没有返回值\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("可以返回受影响的行数\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("truncate")]),s._v("不可以回滚\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("可以回滚\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);