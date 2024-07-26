import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DhooLXd5.js";const l="/assets/lolcat.DjShGkZg.png",n="/assets/cowsay.D30G_lmC.png",t="/assets/figlet.BLYzBwj4.png",p="/assets/boxes.3bxvyeMm.png",r="/assets/cmatrix.C6vfJ96g.png",h="/assets/asciiquarium.CEiaVrV9.png",d="/assets/sl.CSp0-azJ.png",f=JSON.parse('{"title":"archlinux 系统美化（终端篇）","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/beauty-3.md","filePath":"guide/advanced/beauty-3.md","lastUpdated":1721652288000}'),o={name:"guide/advanced/beauty-3.md"},c=e(`<h1 id="archlinux-系统美化-终端篇" tabindex="-1">archlinux 系统美化（终端篇） <a class="header-anchor" href="#archlinux-系统美化-终端篇" aria-label="Permalink to &quot;archlinux 系统美化（终端篇）&quot;">​</a></h1><blockquote><h3 id="🌺-爱美之心-人皆有之" tabindex="-1">🌺 爱美之心，人皆有之 <a class="header-anchor" href="#🌺-爱美之心-人皆有之" aria-label="Permalink to &quot;🌺 爱美之心，人皆有之&quot;">​</a></h3><p>美化这个话题是永恒的。有些人用 Linux 的原因就是一开始被美化后桌面的截图惊艳到了</p><p>这一小节将会介绍如何对 KDE 桌面环境进行美化。受限于篇幅，本小节分为上下篇</p></blockquote><h2 id="_1-设置-konsole-样式" tabindex="-1">1. 设置 Konsole 样式 <a class="header-anchor" href="#_1-设置-konsole-样式" aria-label="Permalink to &quot;1. 设置 Konsole 样式&quot;">​</a></h2><p>打开 Konsole， <em>设置</em> &gt; <em>编辑当前方案</em> &gt; <em>外观</em>，选择 <code>Red-Black</code> （或你喜欢的颜色主题），应用确认即可。</p><h2 id="_2-zsh-美化" tabindex="-1">2. zsh 美化 <a class="header-anchor" href="#_2-zsh-美化" aria-label="Permalink to &quot;2. zsh 美化&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>确保你安装过 zsh ，安装方法及相关配置可在 <a href="/guide/advanced/optional-cfg-1.html">可选配置（基础）</a> 一章中查看。</p><p><a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">oh-my-zsh</a> 实际上并没有那么好用，反而拖慢了 Zsh 的速度，本指南不会介绍。</p><p>若有需要请自行查阅相关资料。</p></div><h3 id="_2-1-powerlevel10k" tabindex="-1">2-1. powerlevel10k <a class="header-anchor" href="#_2-1-powerlevel10k" aria-label="Permalink to &quot;2-1. powerlevel10k&quot;">​</a></h3><p>由于本指南不使用 <code>oh-my-zsh</code> ,因此使用另一个 Zsh 框架 <code>zim</code> 安装 powerlevel10k。</p><ol><li>安装 <code>zim</code> 。</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/zimfw/install/master/install.zsh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> zsh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>编辑 Zsh 配置文件 <code>~/.zimrc</code> ：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zimrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>在文件最后加入下面的一行文字，以添加 <code>powerlevel10k</code> 模块，然后退出。</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>zmodule romkatv/powerlevel10k</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>安装 <code>powerlevel10k</code> 模块，在终端输入如下命令即可。</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zimfw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装之后，<code>powerlevel10k</code>会让你进行配置。</p><p>在此时配置时，很多图标符号看不到，因为 <code>powerlevel10k</code> 中包含许多特殊图标符号，需要与之兼容的字体。</p><ol start="5"><li>安装 Nerd Font 字体</li></ol><p>Nerd Fonts 是一系列打过补丁的字体，支持 <code>powerlevel10k</code> 中的图标。</p><p>AUR 和 ArchLinuxCN 源中都有很多 Nerd Font，在终端使用 yay 搜索安装即可。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Ss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nerd-font</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>个人推荐使用 <a href="https://archlinux.org/packages/extra/any/ttf-jetbrains-mono-nerd/" target="_blank" rel="noreferrer">ttf-jetbrains-mono-nerd</a> 字体，可在 aur 中安装</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ttf-jetbrains-mono-nerd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完任意一个 Nerd Font 字体后，打开 Konsole 的 <em>设置</em> &gt; <em>编辑当前方案</em> &gt; <em>外观</em>，把 <em>字体</em> 改为刚刚安装的 Nerd Font 即可。</p><p>现在再打开 <code>powerlevel10k</code> 配置（<code>p10k configure</code>），就可以看到图标符号，正常配置了。</p><h3 id="_2-2-grml-s-zsh-config" tabindex="-1">2-2. grml&#39;s zsh config <a class="header-anchor" href="#_2-2-grml-s-zsh-config" aria-label="Permalink to &quot;2-2. grml&#39;s zsh config&quot;">​</a></h3><p>如果你不想麻烦，想要一个看起来还算可以并且包含许多高级功能（如拼写纠错）的 zsh 配置，可以使用 grml&#39;s zsh config。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grml-zsh-config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后重新登录就可。如果出现了什么问题，请删除当前的 .zshrc 然后重新撰写一份。</p><h2 id="_3-vim-美化" tabindex="-1">3. vim 美化 <a class="header-anchor" href="#_3-vim-美化" aria-label="Permalink to &quot;3. vim 美化&quot;">​</a></h2><p>安装 Vim-plug。这是一个极简风的 vim 插件管理器。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fLo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim/autoload/plug.vim</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --create-dirs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后安装 Airline. 它是一个状态栏插件。</p><p>把下面的内容加入 .vimrc 中</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>call plug#begin()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Plug &#39;vim-airline/vim-airline&#39;</span></span>
<span class="line"><span>Plug &#39;vim-airline/vim-airline-themes&#39;</span></span>
<span class="line"><span>let g:airline_theme=&#39;ayu_dark&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>call plug#end()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然后进入 vim, 运行</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:PlugInstall</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_4-ascii-艺术与终端玩具" tabindex="-1">4. ASCII 艺术与终端玩具 <a class="header-anchor" href="#_4-ascii-艺术与终端玩具" aria-label="Permalink to &quot;4. ASCII 艺术与终端玩具&quot;">​</a></h2><h3 id="lolcat" tabindex="-1">lolcat <a class="header-anchor" href="#lolcat" aria-label="Permalink to &quot;lolcat&quot;">​</a></h3><p>用渐变为终端输出着色，看起来就像彩虹一样！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/lolcat/" target="_blank" rel="noreferrer">lolcat</a>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lolcat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将其它命令（如 <code>neofetch</code>）的输出传递给 <code>lolcat</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">neofetch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lolcat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+l+'" alt="lolcat"></p></li></ol><h3 id="cowsay" tabindex="-1">cowsay <a class="header-anchor" href="#cowsay" aria-label="Permalink to &quot;cowsay&quot;">​</a></h3><p>将文本作为 ASCII 艺术牛的讲话文本输出。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/cowsay/" target="_blank" rel="noreferrer">cowsay</a>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cowsay</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>cowsay</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;archlinux 简明指南&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cowsay</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+n+'" alt="cowsay"></p></li></ol><h3 id="figlet" tabindex="-1">figlet <a class="header-anchor" href="#figlet" aria-label="Permalink to &quot;figlet&quot;">​</a></h3><p>显示由不同风格的 ASCII 艺术字符组成的文本。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/figlet/" target="_blank" rel="noreferrer">figlet</a>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> figlet</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>figlet</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Love Live Linux&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> figlet</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt="figlet"></p><p>更多样式请参阅 <a href="http://www.figlet.org/" target="_blank" rel="noreferrer">figlet 官网</a>。</p></li></ol><h3 id="boxes" tabindex="-1">boxes <a class="header-anchor" href="#boxes" aria-label="Permalink to &quot;boxes&quot;">​</a></h3><p>使用 ASCII 艺术风格的字符形状框来包围文本。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/cowsay/" target="_blank" rel="noreferrer">boxes</a><sup>aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Fg_gL" id="tab-dro0S4G" checked="checked"><label for="tab-dro0S4G">aur</label><input type="radio" name="group-Fg_gL" id="tab-TtBEFl3"><label for="tab-TtBEFl3">aur (git)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boxes</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boxes-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>通过管道符（<code>|</code>）将简短的其它命令输出传递给 <code>boxes</code>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;archlinux 简明指南&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> boxes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diamonds</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="boxes"></p><p>更多样式请参阅 <a href="https://boxes.thomasjensen.com/" target="_blank" rel="noreferrer">boxes 官网</a> 以及 <a href="https://github.com/ascii-boxes/boxes" target="_blank" rel="noreferrer">boxes repo</a>。</p></li></ol><h3 id="cmatrix" tabindex="-1">cmatrix <a class="header-anchor" href="#cmatrix" aria-label="Permalink to &quot;cmatrix&quot;">​</a></h3><p>向下滚动的代码流如同黑客帝国一样！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/cmatrix/" target="_blank" rel="noreferrer">cmatrix</a>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hD8aC" id="tab-rYGH2xv" checked="checked"><label for="tab-rYGH2xv">extra</label><input type="radio" name="group-hD8aC" id="tab-7y6K_oQ"><label for="tab-7y6K_oQ">bash</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmatrix</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/cmatrix-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>输入以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmatrix</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+'" alt="cmatrix"></p></li><li><p>按下 <code>q</code> 即可退出</p></li></ol><h3 id="asciiquarium" tabindex="-1">asciiquarium <a class="header-anchor" href="#asciiquarium" aria-label="Permalink to &quot;asciiquarium&quot;">​</a></h3><p>将终端化身海洋馆！</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/asciiquarium/" target="_blank" rel="noreferrer">asciiquarium</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YbZls" id="tab-jesOWdX" checked="checked"><label for="tab-jesOWdX">extra</label><input type="radio" name="group-YbZls" id="tab-y5HAJj1"><label for="tab-y5HAJj1">aur (git)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> asciiquarium</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/asciiquarium-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>输入以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">asciiquarium</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+h+'" alt="asciiquarium"></p></li><li><p>按下 <code>q</code> 即可退出</p></li></ol><h3 id="sl" tabindex="-1">sl <a class="header-anchor" href="#sl" aria-label="Permalink to &quot;sl&quot;">​</a></h3><p>终端里的小火车。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/sl/" target="_blank" rel="noreferrer">sl</a>：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>输入以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sl</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+d+'" alt="sl"></p></li></ol><h2 id="_5-linux-彩蛋" tabindex="-1">5. Linux 彩蛋 <a class="header-anchor" href="#_5-linux-彩蛋" aria-label="Permalink to &quot;5. Linux 彩蛋&quot;">​</a></h2>',61),k=[c];function u(b,g,m,v,F,y){return i(),a("div",null,k)}const x=s(o,[["render",u]]);export{f as __pageData,x as default};
