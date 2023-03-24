import{_ as t,X as p,Y as c,$ as n,a0 as s,Z as e,a1 as l,a3 as o,C as r}from"./framework-a91f7991.js";const i={},d={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"null",-1),k=n("code",null,"undefined",-1),m={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"Symbol",-1),g=n("p",null,[s("本节主要介绍"),n("strong",null,"前五种"),s("原始数据类型在 TypeScript 中的应用。")],-1),b=o(`<h2 id="布尔值" tabindex="-1"><a class="header-anchor" href="#布尔值" aria-hidden="true">#</a> 布尔值</h2><p>布尔值是最基础的数据类型，在 TypeScript 中，使用 <code>boolean</code> 定义布尔值类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// 编译通过</span>
<span class="token comment">// 后面约定，未强调编译错误的代码片段，默认为编译通过</span>
</code></pre></div><p>注意，使用构造函数 <code>Boolean</code> 创造的对象<strong>不是</strong>布尔值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Type &#39;Boolean&#39; is not assignable to type &#39;boolean&#39;.</span>
<span class="token comment">//   &#39;boolean&#39; is a primitive, but &#39;Boolean&#39; is a wrapper object. Prefer using &#39;boolean&#39; when possible.</span>
</code></pre></div><p>事实上 <code>new Boolean()</code> 返回的是一个 <code>Boolean</code> 对象:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByNewBoolean<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>直接调用 <code>Boolean</code> 也可以返回一个 <code>boolean</code> 类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> createdByBoolean<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在 TypeScript 中，<code>boolean</code> 是 JavaScript 中的基本类型，而 <code>Boolean</code> 是 JavaScript 中的构造函数。其他基本类型(除了 <code>null</code> 和 <code>undefined</code>)一样，不再赘述。</p><h2 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h2><p>使用 <code>number</code> 定义数值类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> decLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hexLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 中的二进制表示法</span>
<span class="token keyword">let</span> binaryLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 中的八进制表示法</span>
<span class="token keyword">let</span> octalLiteral<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0o744</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> notANumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> infinityNumber<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
</code></pre></div><p>编译结果:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> decLiteral <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> hexLiteral <span class="token operator">=</span> <span class="token number">0xf00d</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 中的二进制表示法</span>
<span class="token keyword">var</span> binaryLiteral <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// ES6 中的八进制表示法</span>
<span class="token keyword">var</span> octalLiteral <span class="token operator">=</span> <span class="token number">484</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> notANumber <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> infinityNumber <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
</code></pre></div>`,15),h=n("code",null,"0b1010",-1),_=n("code",null,"0o744",-1),f={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>使用 <code>string</code> 定义字符串类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> myName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myAge<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

<span class="token comment">// 模板字符串</span>
<span class="token keyword">let</span> sentence<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.
I&#39;ll be </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old next month.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><p>编译结果:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myAge <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token comment">// 模板字符串</span>
<span class="token keyword">var</span> sentence <span class="token operator">=</span>
  <span class="token string">&quot;Hello, my name is &quot;</span> <span class="token operator">+</span>
  myName <span class="token operator">+</span>
  <span class="token string">&quot;.\\nI&#39;ll be &quot;</span> <span class="token operator">+</span>
  <span class="token punctuation">(</span>myAge <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token string">&quot; years old next month.&quot;</span><span class="token punctuation">;</span>
</code></pre></div>`,5),w=n("code",null,"`",-1),B={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"${expr}",-1),x=o(`<h2 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h2><p>JavaScript 没有空值(Void)的概念，在 TypeScript 中，可以用 <code>void</code> 表示没有任何返回值的函数:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">alertName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;My name is Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>声明一个 <code>void</code> 类型的变量没有什么用，因为您只能将它赋值为 <code>undefined</code> 和 <code>null</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> unusable<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="null-和-undefined" tabindex="-1"><a class="header-anchor" href="#null-和-undefined" aria-hidden="true">#</a> Null 和 Undefined</h2><p>在 TypeScript 中，可以使用 <code>null</code> 和 <code>undefined</code> 来定义这两个原始数据类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><p>与 <code>void</code> 的区别是，<code>undefined</code> 和 <code>null</code> 是所有类型的子类型。也就是说 <code>undefined</code> 类型的变量，可以赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 这样不会报错</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 这样也不会报错</span>
<span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>
</code></pre></div><p>而 <code>void</code> 类型的变量不能赋值给 <code>number</code> 类型的变量:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> u<span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> u<span class="token punctuation">;</span>

<span class="token comment">// Type &#39;void&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,14),A={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive",target:"_blank",rel:"noopener noreferrer"},T={href:"http://es6.ruanyifeng.com/#docs/symbol",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"Symbol",-1),L={href:"http://es6.ruanyifeng.com/#docs/number#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%92%8C%E5%85%AB%E8%BF%9B%E5%88%B6%E8%A1%A8%E7%A4%BA%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},C={href:"http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2",target:"_blank",rel:"noopener noreferrer"};function j(D,F){const a=r("ExternalLinkIcon");return p(),c("div",null,[n("p",null,[s("JavaScript 的类型分为两种: 原始数据类型("),n("a",d,[s("Primitive data types"),e(a)]),s(")和对象类型(Object types)。")]),n("p",null,[s("原始数据类型包括: 布尔值、数值、字符串、"),u,s("、"),k,s(" 以及 "),n("a",m,[s("ES6 中的新类型 "),y,e(a)]),s("。")]),g,l(" more "),b,n("p",null,[s("其中 "),h,s(" 和 "),_,s(" 是 "),n("a",f,[s("ES6 中的二进制和八进制表示法"),e(a)]),s("，它们会被编译为十进制数字。")]),v,n("p",null,[s("其中 "),w,s(" 用来定义 "),n("a",B,[s("ES6 中的模板字符串"),e(a)]),s("，"),E,s(" 用来在模板字符串中嵌入表达式。")]),x,n("ul",null,[n("li",null,[n("a",A,[s("Basic Types"),e(a)]),s("("),n("a",S,[s("中文版"),e(a)]),s(")")]),n("li",null,[n("a",N,[s("Primitive data types"),e(a)])]),n("li",null,[n("a",T,[s("ES6 中的新类型 "),q,e(a)])]),n("li",null,[n("a",L,[s("ES6 中的二进制和八进制表示法"),e(a)])]),n("li",null,[n("a",C,[s("ES6 中的模板字符串"),e(a)])])])])}const V=t(i,[["render",j],["__file","primitive-data-types.html.vue"]]);export{V as default};
