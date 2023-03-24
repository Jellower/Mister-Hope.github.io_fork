import{_ as i,X as n,Y as p,a1 as d,$ as a,a0 as e,Z as t,a3 as r,C as h}from"./framework-a91f7991.js";const o="/assets/navbar1-3b2cfb35.jpg",c="/assets/navbar2-3736ab29.jpg",l="/assets/navbar3-329085b3.jpg",_="/assets/tab1-0ea3e4fb.jpg",g="/assets/tab2-9c2910a5.jpg",m="/assets/pc-1747f841.png",b="/assets/phone-d81a690f.png",u="/assets/phone1-8cab984a.png",f="/assets/phone2-5999f8f3.png",x="/assets/sider1-c484c325.jpg",P="/assets/sider2-7a7c5944.png",v="/assets/grid1-f7989f1c.jpg",k="/assets/grid2-34c45ef0.jpg",j={},A=a("p",null,"本文对应用程序设计中常见的组件及其作用进行了介绍。",-1),N=r('<h2 id="页面总体布局" tabindex="-1"><a class="header-anchor" href="#页面总体布局" aria-hidden="true">#</a> 页面总体布局</h2><ul><li><h3 id="navigationbar" tabindex="-1"><a class="header-anchor" href="#navigationbar" aria-hidden="true">#</a> navigationbar</h3><p>简称 Navbar 也就是导航栏。</p><p>主要负责承接页面的导航操作。</p><p>在内部界面上，一般左侧展示返回操作，居中显示页面标题，右侧展示更多操作。</p><p>在主页上，主要承载 tabpage 对应的功能展示与触发。</p><p>在 navbar 上，设计要突出质感，应该以简约为主。</p><p>使用不鲜明的颜色，可以使用 APP 或网页对的主体色。</p><p>可附以纯色 icon。</p><p>不能太吸睛导致用户对页面内容注意的分散。</p><p>有条件的情况下应该设计其切换动效。</p><p><img src="'+o+'" alt="图片"><img src="'+c+'" alt="图片"><img src="'+l+'" alt="图片"></p></li></ul>',2),w={href:"https://www.jianshu.com/p/6037e4f79f4d",target:"_blank",rel:"noopener noreferrer"},C=r('<ul><li><h3 id="tabbar" tabindex="-1"><a class="header-anchor" href="#tabbar" aria-hidden="true">#</a> Tabbar</h3><p>APP 打开后底部的操作栏叫 tabbar，一般设置 2-5 个模块，每个模块应该设计 logo 与文字，对应的界面叫 tabpage。</p><p>在 logo 上应以简约为主，应当设计设置点击与激活效果。</p><p>tabpage 的设置要慎重，分类展示 APP 最关键的几个分项设置，并在每个界面内展示具体内容。</p><p><img src="'+_+'" alt="图片"><img src="'+g+'" alt="图片"></p></li></ul><h3 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h3><p>App 每个页面的背景色，除了纯文章之外不应采用纯白色，设计可以向 APP 主题色靠拢。</p><p>应当针对不同设备造成的不同长宽比、分辨率设置不同的页面排版样式，并制作不同的 UI 布局。</p><p><img src="'+m+'" alt="图片"><img src="'+b+'" alt="图片"><img src="'+u+'" alt="图片"><img src="'+f+'" alt="图片"></p><ul><li><h3 id="sider" tabindex="-1"><a class="header-anchor" href="#sider" aria-hidden="true">#</a> Sider</h3><p>侧边栏，可以设置侧边固定按钮点击弹出或者从左向右滑动弹出式。</p><p>一般用于承载不需要展示的一些设置项、介绍项、个人信息项。</p><p><img src="'+x+'" alt="图片"><img src="'+P+'" alt="图片"></p></li></ul><h2 id="ui-元素" tabindex="-1"><a class="header-anchor" href="#ui-元素" aria-hidden="true">#</a> UI 元素</h2>',7),V=r('<li><h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h3><p>九宫格结构，实际使用的时候 3×3、4×2 都有广泛使用。</p><p>Gird 结构主要用于罗列展示各项功能，或者是各项板块。</p><p>各元素应该以上部的圆形或异形图标于下部的说明文字为主。</p><p>在移动设备上一般不显示边框、不设计点击动效，而在 PC 与 HD 恰好相反。</p><p><img src="'+v+'" alt="图片"><img src="'+k+'" alt="图片"></p></li><li><h3 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h3><p>菜单有多种表现方式，比如 float menu、pop-up menu、modal menu、dropdown 等。</p></li>',2),I={id:"其他元素可以参考ant-design",tabindex:"-1"},S=a("a",{class:"header-anchor",href:"#其他元素可以参考ant-design","aria-hidden":"true"},"#",-1),B={href:"https://vue.ant.design/docs/vue/introduce-cn/",target:"_blank",rel:"noopener noreferrer"},E=r('<h2 id="杂项" tabindex="-1"><a class="header-anchor" href="#杂项" aria-hidden="true">#</a> 杂项</h2><h3 id="mask-设计" tabindex="-1"><a class="header-anchor" href="#mask-设计" aria-hidden="true">#</a> Mask 设计</h3><p>灰色的半透明遮罩叫 mask</p><p>当透明度很高，感受很小的时候一般设计成可穿透，也就是说点击相当于直接点击蒙层下部区域。</p><p>透明度中等的一般式可触摸做取消热区的，也就是点击会取消。</p><p>不可穿透的 mask，也就是说点击没有反应，一般要给非常高的不透明度，用户只能点叉号取消。(一般用于弹出推广)</p><h3 id="设计趋势" tabindex="-1"><a class="header-anchor" href="#设计趋势" aria-hidden="true">#</a> 设计趋势</h3><p>目前以 iOS 特有的苹果风，Windows 上的 Aero 效果(毛玻璃效果)与安卓的 Material Design 设计为主。</p><h4 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h4><p>常用实心矢量图标</p><h4 id="移动端" tabindex="-1"><a class="header-anchor" href="#移动端" aria-hidden="true">#</a> 移动端</h4><p>分割线和边框目前采用已经比较少。</p><h4 id="pc" tabindex="-1"><a class="header-anchor" href="#pc" aria-hidden="true">#</a> PC</h4><p>增强鼠标移动与网页的交互带来沉浸式的体验。</p><h4 id="突出质感" tabindex="-1"><a class="header-anchor" href="#突出质感" aria-hidden="true">#</a> 突出质感</h4><p>因为不同机型现实效果不一样，普遍采用圆角、阴影、以及毛玻璃效果，还有避免用纯色背景转而用略蓝略灰的色调突出质感。</p><h4 id="增强反馈感" tabindex="-1"><a class="header-anchor" href="#增强反馈感" aria-hidden="true">#</a> 增强反馈感</h4><p>每次点击时和点击之后出发的效果都能在屏幕上让用户感知自己的操作(即我刚刚点了按钮，按钮生效产生了某种操作)</p>',18);function M(D,G){const s=h("ExternalLinkIcon");return n(),p("div",null,[A,d(" more "),N,a("p",null,[e("好文推荐: "),a("a",w,[e("iOS 导航栏动效设计思路"),t(s)])]),C,a("ul",null,[V,a("li",null,[a("h3",I,[S,e(" 其他元素可以参考"),a("a",B,[e("Ant-design"),t(s)])])])]),E])}const O=i(j,[["render",M],["__file","APP.html.vue"]]);export{O as default};
