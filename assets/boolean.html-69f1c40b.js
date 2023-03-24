import{_ as a,X as o,Y as e,a1 as t,$ as s,a0 as n,a3 as p}from"./framework-a91f7991.js";const c={},l=s("p",null,"布尔运算符用于将表达式转为布尔值，一共包含四个运算符。",-1),u=s("ul",null,[s("li",null,[n("取反运算符: "),s("code",null,"!")]),s("li",null,[n("且运算符: "),s("code",null,"&&")]),s("li",null,[n("或运算符: "),s("code",null,"||")]),s("li",null,[n("三元运算符: "),s("code",null,"?:")])],-1),r=p(`<h2 id="取反运算符" tabindex="-1"><a class="header-anchor" href="#取反运算符" aria-hidden="true">#</a> 取反运算符 <code>!</code></h2><p>取反运算符是一个感叹号，用于将布尔值变为相反值，即 <code>true</code> 变成 <code>false</code>，<code>false</code> 变成 <code>true</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><p>对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为 <code>true</code>，其他值都为 <code>false</code>。</p><ul><li><code>undefined</code></li><li><code>null</code></li><li><code>false</code></li><li><code>0</code></li><li><code>NaN</code></li><li>空字符串(<code>&#39;&#39;</code>)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token operator">!</span><span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token operator">!</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token operator">!</span><span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token operator">!</span><span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token operator">!</span><span class="token number">54</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token operator">!</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token operator">!</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管什么类型的值，经过取反运算后，都变成了布尔值。</p><p>如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与 <code>Boolean</code> 函数的作用相同。这是一种常用的类型转换的写法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span>x<span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token function">Boolean</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，不管 <code>x</code> 是什么类型的值，经过两次取反运算后，变成了与 <code>Boolean</code> 函数结果相同的布尔值。所以，两次取反就是将一个值转为布尔值的简便写法。</p><h2 id="且运算符" tabindex="-1"><a class="header-anchor" href="#且运算符" aria-hidden="true">#</a> 且运算符 <code>&amp;&amp;</code></h2><p>且运算符(<code>&amp;&amp;</code>)往往用于多个表达式的求值。</p><p>它的运算规则是: 如果第一个运算子的布尔值为 <code>true</code>，则返回第二个运算子的值(注意是值，不是布尔值)；如果第一个运算子的布尔值为 <code>false</code>，则直接返回第一个运算子的值，且不再对第二个运算子求值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>
<span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;f&quot;</span>
<span class="token string">&quot;t&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的最后一个例子，由于且运算符的第一个运算子的布尔值为 <code>false</code>，则直接返回它的值 <code>0</code>，而不再对第二个运算子求值，所以变量 <code>x</code> 的值没变。</p><p>这种跳过第二个运算子的机制，被称为“短路”。有些程序员喜欢用它取代 <code>if</code> 结构，比如下面是一段 <code>if</code> 结构的代码，就可以用且运算符改写。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等价于</span>

i <span class="token operator">&amp;&amp;</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码的两种写法是等价的，但是后一种不容易看出目的，也不容易除错，建议谨慎使用。</p><p>且运算符可以多个连用，这时返回第一个布尔值为 <code>false</code> 的表达式的值。如果所有表达式的布尔值都为 <code>true</code>，则返回最后一个表达式的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// &#39;&#39;</span>

<span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
</code></pre></div><p>上面代码中，例一里面，第一个布尔值为 <code>false</code> 的表达式为第三个表达式，所以得到一个空字符串。例二里面，所有表达式的布尔值都是 <code>true</code>，所有返回最后一个表达式的值 <code>3</code>。</p><h2 id="或运算符" tabindex="-1"><a class="header-anchor" href="#或运算符" aria-hidden="true">#</a> 或运算符 <code>||</code></h2><p>或运算符(<code>||</code>)也用于多个表达式的求值。它的运算规则是: 如果第一个运算子的布尔值为 <code>true</code>，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为 <code>false</code>，则返回第二个运算子的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;t&quot;</span>
<span class="token string">&quot;t&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;t&quot;</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;f&quot;</span>
<span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;&quot;</span>
</code></pre></div><p>短路规则对这个运算符也适用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token boolean">true</span> <span class="token operator">||</span> <span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
x<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码中，或运算符的第一个运算子为 <code>true</code>，所以直接返回 <code>true</code>，不再运行第二个运算子。所以，<code>x</code> 的值没有改变。这种只通过第一个表达式的值，控制是否运行第二个表达式的机制，就称为“短路”(short-cut)。</p><p>或运算符可以多个连用，这时返回第一个布尔值为 <code>true</code> 的表达式的值。如果所有表达式都为 <code>false</code>，则返回最后一个表达式的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span> <span class="token operator">||</span> <span class="token number">4</span> <span class="token operator">||</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// 4</span>

<span class="token boolean">false</span> <span class="token operator">||</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// &#39;&#39;</span>
</code></pre></div><p>上面代码中，例一里面，第一个布尔值为 <code>true</code> 的表达式是第四个表达式，所以得到数值 4。例二里面，所有表达式的布尔值都为 <code>false</code>，所以返回最后一个表达式的值。</p><p>或运算符常用于为一个变量设置默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">saveText</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  text <span class="token operator">=</span> text <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 或者写成</span>
<span class="token function">saveText</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码表示，如果函数调用时，没有提供参数，则该参数默认设置为空字符串。</p><h2 id="三元条件运算符" tabindex="-1"><a class="header-anchor" href="#三元条件运算符" aria-hidden="true">#</a> <code>? :</code> 三元条件运算符</h2><p>三元条件运算符由问号(<code>?</code>)和冒号(<code>:</code>)组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。如果第一个表达式的布尔值为 <code>true</code>，则返回第二个表达式的值，否则返回第三个表达式的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;t&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>
<span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// &quot;world&quot;</span>
</code></pre></div><p>上面代码的 <code>t</code> 和 <code>0</code> 的布尔值分别为 <code>true</code> 和 <code>false</code>，所以分别返回第二个和第三个表达式的值。</p><p>通常来说，三元条件表达式与 <code>if...else</code> 语句具有同样表达效果，前者可以表达的，后者也能表达。但是两者具有一个重大差别，<code>if...else</code> 是语句，没有返回值；三元条件表达式是表达式，具有返回值。所以，在需要返回值的场合，只能使用三元条件表达式，而不能使用 <code>if..else</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token operator">?</span> <span class="token string">&quot;T&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码中，<code>console.log</code> 方法的参数必须是一个表达式，这时就只能使用三元条件表达式。如果要用 <code>if...else</code> 语句，就必须改变整个代码写法了。</p>`,40);function i(d,k){return o(),e("div",null,[l,u,t(" more "),r])}const v=a(c,[["render",i],["__file","boolean.html.vue"]]);export{v as default};
