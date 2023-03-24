import{_ as i,X as s,Y as d,$ as e,a0 as t,Z as r,a3 as o,C as n}from"./framework-a91f7991.js";const c="/assets/color-picker-3f86fbb5.gif",p="/assets/layout-picker-83a7c99d.png",l="/assets/custom-layout-67e87071.png",h="/assets/svg-preview-2ef8e097.png",u="/assets/markdown-preview-c5ad66ff.png",g="/assets/image-resizer-6633a73d.gif",_="/assets/image-resizer-59b92c39.png",m="/assets/shortcut-guide-2bb2005b.png",f="/assets/power-toys-search-82fc8a74.png",b="/assets/shell-command-86f5fea5.png",y="/assets/calculator-814fec21.png",w={},v=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1),x={href:"https://github.com/microsoft/PowerToys/releases",target:"_blank",rel:"noopener noreferrer"},P=o(`<div class="hint-container info"><p class="hint-container-title">系统要求</p><p>Win10 版本 &gt; 1803，已安装 .NET Core 3.1 Desktop Runtime</p></div><p>或者使用 WinGet:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>WinGet <span class="token function">install</span> powertoys
</code></pre></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><p>Power toys 主要功能:</p><ul><li>图片取色</li><li>窗口布局管理</li><li>更多文件预览支持</li><li>图片尺寸调整</li><li>快捷键管理器</li><li>强大的文件重命名</li><li>快捷键指南</li><li>PowerToys Run</li></ul><h2 id="color-picker" tabindex="-1"><a class="header-anchor" href="#color-picker" aria-hidden="true">#</a> Color Picker</h2><p>Color Picker 是一个可以在 Win10 系统全场景下使用的颜色提取工具，通过按键 <code>Win + Shift + C</code> 启动。</p><p>您可以用光标在当前桌面上任意色块提取颜色，系统会自动复制颜色的 HEX 或 RGB 值。</p><p><img src="`+c+'" alt="取色器演示"></p><h3 id="fancyzones" tabindex="-1"><a class="header-anchor" href="#fancyzones" aria-hidden="true">#</a> FancyZones</h3><p>FancyZones 是一个实用的窗口增强管理器，它能让您快速地将程序窗口按照设置好的布局来调整大小和位置排布，快捷键为 <code>Win + `</code>。</p><p>FancyZones 实现了更高效地利用屏幕的面积，管理切换大量窗口而不杂乱，是大屏幕用户必备的效率工具。</p><p>当首次启动时，FancyZones 会要求您为当前显示器选择一个默认的布局。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意 FancyZones 布局是基于显示器的，所以如果您有多个显示器，您需要分别设置它们。</p></div><p><img src="'+p+'" alt="布局选择"></p><p>如果上述布局选择不能满足您的需求，您也可以点击 &quot;Custom&quot; 选项卡进行自定义。</p><p><img src="'+l+'" alt="自定义布局"></p>',18),k={class:"hint-container info"},T=e("p",{class:"hint-container-title"},"相关信息",-1),R={href:"https://github.com/microsoft/PowerToys/wiki/FancyZones-Overview",target:"_blank",rel:"noopener noreferrer"},W=o('<h2 id="资源管理器插件" tabindex="-1"><a class="header-anchor" href="#资源管理器插件" aria-hidden="true">#</a> 资源管理器插件</h2><p>Preview Panel(预览窗格) 是一个轻量快速 Win10 的文件资源管理器插件，它能让您在无需打开文件的情况下，直接在文件资源管理器通过<strong>预览窗格</strong>预览文件内容，目前 <code>.svg</code> 与 <code>.md</code>。</p><p><img src="'+h+'" alt="SVG 预览"></p><p><img src="'+u+'" alt="Markdown 预览"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这两个文件的预览对开发者是十分有用的。</p></div><h2 id="图片尺寸调整" tabindex="-1"><a class="header-anchor" href="#图片尺寸调整" aria-hidden="true">#</a> 图片尺寸调整</h2><p>Image Resizer 是一个右键菜单的快速图片尺寸大小调整工具，您只需右键点击图片文件，即可选择修改一张或批量修改多张图片的大小尺寸、旋转图片方向或者转换图片格式。</p><p><img src="'+g+'" alt="图片尺寸调整"></p><p>软件预设了大/中/小/手机等不同的常用模版，单击确定即可一键完成图片尺寸的批量调整。您也可以点击 Settings 进入设置，按自己需求的尺寸大小、是否转换格式等来配置自己的常用“模版”。</p><p><img src="'+_+'" alt="图片尺寸调整设置"></p><p>对于经常有多张图片的大小需要处理，而对专业性要求不高的用户来说，这款工具能替代专门的图像处理器软件。</p><p>同时，用户不仅可以导出为其他格式，也可以设置默认编码器(在不能保存为原始格式时)。</p><p>在导出时，也支持修改 PNG、JPEG 和 TIFF 的图片保存设置，与是否保留原来的最后修改日期。</p><h2 id="快捷键管理器" tabindex="-1"><a class="header-anchor" href="#快捷键管理器" aria-hidden="true">#</a> 快捷键管理器</h2><p>Keyboard Manager 是一款简单而又实用的键盘键位修改小工具。</p><p>它的主要作用能帮您将键盘上的某个按键映射为另一个按键，甚至还能将一组快捷键映射为另一组。在一些特殊的情况下，它能帮您的大忙。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Keyboard Manager 修改键位之后无需重启电脑即可立即生效。</p></div><h2 id="powerrename" tabindex="-1"><a class="header-anchor" href="#powerrename" aria-hidden="true">#</a> PowerRename</h2><p>PowerRename 是一个实用的右键菜单“批量重命名工具”，可以支持搜索/替换以及正则表达式匹配，可以添加文件名前缀后缀等。</p><p>为了避免出错，它在重命名之前可以让在界面上预览重命名后的结果，同时在重命名时，您可以很方便的选中全部您想要重命名的文件与文件夹，再排除指定的文件/文件夹。</p><div class="hint-container tip"><p class="hint-container-title">一些设置选项的解释</p><ul><li><strong>使用正则表达式</strong>: 默认搜索框中为文字匹配，启用后将认为搜索框中为正则表达式。</li><li><strong>匹配所有出现的对象</strong>: 默认情况下只匹配项目中搜索文本的第一个实例，勾选后匹配所有。</li><li><strong>枚举项</strong>: 勾选后，会在在操作中修改的文件名后追加一个数字后缀。例如: <code>mrhope.jpg</code> -&gt; <code>mrhope (1).jpg</code></li></ul></div><h2 id="快捷键指南" tabindex="-1"><a class="header-anchor" href="#快捷键指南" aria-hidden="true">#</a> 快捷键指南</h2><p>该工具负责提示您当前页面可用的 Windows 快捷键。(并不包含软件内的快捷键)。</p><p>长按 Windows 键即可呼出此工具。</p><p><img src="'+m+'" alt="快捷键指南"></p><h2 id="powertoys-run" tabindex="-1"><a class="header-anchor" href="#powertoys-run" aria-hidden="true">#</a> PowerToys Run</h2><p>PowerToys Run 是一款快速启动器工具，按下 <code>Alt + Space</code> 即可随时呼出输入框。</p><h3 id="powertoys-run-功能" tabindex="-1"><a class="header-anchor" href="#powertoys-run-功能" aria-hidden="true">#</a> PowerToys Run 功能</h3><ul><li><p>搜索</p><p>直接输入名字后，它能快速找到对应的软件、搜索文件/文件夹，并回车迅速打开它们。</p><p><img src="'+f+'" alt="搜索"></p></li><li><p>运行软件切换</p><p>PowerToys Run 也支持快速搜索当前正在运行的软件，并切换到它们的窗口去。</p></li><li><p>终端</p><p>输入 <code>&gt;</code> 加您需要执行的命令，即可快速调用终端执行。</p><p><img src="'+b+'" alt="终端命令"></p></li><li><p>简单计算</p><p>您可以直接输入简单的数学表达式，PowerToys Run 会直接返回结果。</p><p><img src="'+y+'" alt="简单计算"></p></li></ul><h3 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h3><table><thead><tr><th>捷径</th><th>行动</th></tr></thead><tbody><tr><td><code>Alt + Space</code></td><td>打开或隐藏 PowerToys Run</td></tr><tr><td><code>Esc</code></td><td>隐藏 PowerToys Run</td></tr><tr><td><code>Ctrl + Shift + Enter</code></td><td>(仅适用于应用程序)以管理员身份打开所选的应用程序</td></tr><tr><td><code>Ctrl + Shift + E</code></td><td>(仅适用于应用程序和文件)在文件资源管理器中打开包含文件夹</td></tr><tr><td><code>Ctrl + C</code></td><td>(仅适用于文件夹和文件)复制路径位置</td></tr><tr><td><code>Tab</code></td><td>浏览搜索结果和上下文菜单按钮</td></tr></tbody></table><h3 id="过滤符" tabindex="-1"><a class="header-anchor" href="#过滤符" aria-hidden="true">#</a> 过滤符</h3><p>这些将迫使 PowerToys 只运行目标插件。</p><table><thead><tr><th>过滤符</th><th>行动</th></tr></thead><tbody><tr><td><code>=</code></td><td>仅计算器。</td></tr><tr><td><code>?</code></td><td>仅文件搜索。</td></tr><tr><td><code>.</code></td><td>仅搜索安装应用</td></tr><tr><td><code>//</code></td><td>仅网址。</td></tr><tr><td><code>&lt;</code></td><td>仅运行进程。</td></tr><tr><td><code>&gt;</code></td><td>仅 Shell 命令。</td></tr></tbody></table><h2 id="视频音频静音" tabindex="-1"><a class="header-anchor" href="#视频音频静音" aria-hidden="true">#</a> 视频音频静音</h2><p>使用相机时，您会在屏幕上的特定位置看到一个摄像头与麦克风开启状态的对话框，您可以通过单机或一下快捷键改变它们的启用状态。</p><ul><li><code>Win + N</code>: 同时切换音频和视频</li><li><code>Win + Shift + O</code>: 切换视频</li><li><code>Win + Shift + A</code>: 切换麦克风</li></ul>',37);function C(S,E){const a=n("ExternalLinkIcon");return s(),d("div",null,[v,e("p",null,[t("您可以 "),e("a",x,[t("直接下载 exe"),r(a)]),t(" 进行安装。")]),P,e("div",k,[T,e("p",null,[t("更多详情，请见 "),e("a",R,[t("官方 Wiki"),r(a)])])]),W])}const N=i(w,[["render",C],["__file","power-toys.html.vue"]]);export{N as default};
