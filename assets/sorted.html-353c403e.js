import{_ as n,X as s,Y as a,a3 as p}from"./framework-a91f7991.js";const t={},o=p(`<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法" aria-hidden="true">#</a> 排序算法</h2><p>排序也是在程序中经常用到的算法。无论使用冒泡排序还是快速排序，排序的核心是比较两个元素的大小。如果是数字，我们可以直接比较，但如果是字符串或者两个 dict 呢? 直接比较数学上的大小是没有意义的，因此，比较的过程必须通过函数抽象出来。</p><p>Python 内置的 <code>sorted()</code> 函数就可以对 list 进行排序:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
</code></pre></div><p>此外，<code>sorted()</code> 函数也是一个高阶函数，它还可以接收一个 <code>key</code> 函数来实现自定义的排序，例如按绝对值大小排序:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">abs</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">]</span>
</code></pre></div><p>key 指定的函数将作用于 list 的每一个元素上，并根据 <code>key</code> 函数返回的结果进行排序。对比原始的 list 和经过 <code>key=abs</code> 处理过的 list:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token builtin">list</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">21</span><span class="token punctuation">]</span>

keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span>  <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span>  <span class="token number">21</span><span class="token punctuation">]</span>
</code></pre></div><p>然后 <code>sorted()</code> 函数按照 keys 进行排序，并按照对应关系返回 list 相应的元素:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>keys排序结果 =&gt; [5, 9,  12,  21, 36]
                |  |    |    |   |
最终结果     =&gt; [5, 9, -12, -21, 36]
</code></pre></div><p>我们再看一个字符串排序的例子:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>默认情况下，对字符串排序，是按照 ASCII 的大小比较的，由于 <code>&#39;Z&#39; &lt; &#39;a&#39;</code>，结果，大写字母 Z 会排在小写字母 a 的前面。</p><p>现在，我们提出排序应该忽略大小写，按照字母序排序。要实现这个算法，不必对现有代码大加改动，只要我们能用一个 key 函数把字符串映射为忽略大小写排序即可。忽略大小写来比较两个字符串，实际上就是先把字符串都变成大写(或者都变成小写)，再比较。</p><p>这样，我们给 <code>sorted</code> 传入 key 函数，即可实现忽略大小写的排序:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>lower<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>要进行反向排序，不必改动 key 函数，可以传入第三个参数 <code>reverse=True</code>:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token builtin">str</span><span class="token punctuation">.</span>lower<span class="token punctuation">,</span> reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;Zoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Credit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">]</span>
</code></pre></div><p>从上述例子可以看出，高阶函数的抽象能力是非常强大的，而且，核心代码可以保持得非常简洁。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p><code>sorted()</code> 也是一个高阶函数。用 <code>sorted()</code> 排序的关键在于实现一个映射函数。</p>`,21),e=[o];function c(u,l){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","sorted.html.vue"]]);export{r as default};
