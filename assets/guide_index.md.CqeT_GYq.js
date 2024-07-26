import{_ as a,c as s,o as i,a4 as n}from"./chunks/framework.DhooLXd5.js";const u=JSON.parse('{"title":"序章","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":1712105246000}'),e={name:"guide/index.md"},t=n(`<h1 id="序章" tabindex="-1">序章 <a class="header-anchor" href="#序章" aria-label="Permalink to &quot;序章&quot;">​</a></h1><blockquote><h3 id="🎐-千里之行始于足下" tabindex="-1">🎐 千里之行始于足下 <a class="header-anchor" href="#🎐-千里之行始于足下" aria-label="Permalink to &quot;🎐 千里之行始于足下&quot;">​</a></h3><p>本指南包含 archlinux 安装、配置、维护等，帮助新手快速上手。</p><p>让 archlinux 成为你的日常系统吧！</p></blockquote><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>🚧 文档施工中</p></div><p class="badges"><a href="https://actions-badge.atrox.dev/nakanomikuorg/arch-guide/goto?ref=main"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fnakanomikuorg%2Farch-guide%2Fbadge%3Fref%3Dmain&amp;style=flat"></a><a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fnakanomikuorg%2Farch-guide&amp;count_bg=%2379C83D&amp;title_bg=%23555555&amp;icon=&amp;icon_color=%23E7E7E7&amp;title=hits&amp;edge_flat=false"></a><a href="https://github.com/nakanomikuorg/arch-guide" target="_blank" rel="noopener noreferrer"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/nakanomikuorg/arch-guide"></a><a href="https://github.com/nakanomikuorg/arch-guide" target="_blank" rel="noopener noreferrer"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/nakanomikuorg/arch-guide?style=social"></a><a href="https://github.com/nakanomikuorg/arch-guide/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img alt="GitHub" src="https://img.shields.io/github/license/nakanomikuorg/arch-guide"></a><a href="https://arch.icekylin.online/postscript/contributor-covenant.html" target="_blank" rel="noopener noreferrer"><img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg"></a></p><h2 id="📕-相关信息" tabindex="-1">📕 相关信息 <a class="header-anchor" href="#📕-相关信息" aria-label="Permalink to &quot;📕 相关信息&quot;">​</a></h2><p>本指南派生自 <a href="https://github.com/ArchLinuxStudio/ArchLinuxTutorial" target="_blank" rel="noreferrer">Arch Linux 安装使用教程</a>。</p><h2 id="💻-本地运行" tabindex="-1">💻 本地运行 <a class="header-anchor" href="#💻-本地运行" aria-label="Permalink to &quot;💻 本地运行&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jt4da" id="tab-82CBTXO" checked="checked"><label for="tab-82CBTXO">Pacman</label><input type="radio" name="group-jt4da" id="tab-iPUREZj"><label for="tab-iPUREZj">HomeBrew</label><input type="radio" name="group-jt4da" id="tab-EXDQliz"><label for="tab-EXDQliz">Scoop</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装 nodejs 和 PnpM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/nakanomikuorg/arch-guide.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./arch-guide</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-zsh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 安装 PnpM</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/nakanomikuorg/arch-guide.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./arch-guide</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-powershell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scoop install nodejs </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 nodejs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scoop install pnpm </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装 PnpM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git clone https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">//</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">github.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nakanomikuorg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">guide.git</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cd .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">guide</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm i</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm docs:dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div></div><p>其它系统请参阅 <a href="https://pnpm.io/zh/installation" target="_blank" rel="noreferrer">PnpM 中文文档</a> 安装 <code>PnpM</code>。</p><h2 id="🔔-隐私提醒" tabindex="-1">🔔 隐私提醒 <a class="header-anchor" href="#🔔-隐私提醒" aria-label="Permalink to &quot;🔔 隐私提醒&quot;">​</a></h2><p>本站使用百度统计和 Google Analytics 分析流量。访问即同意它们的隐私政策。</p><h2 id="🌱-参与贡献" tabindex="-1">🌱 参与贡献 <a class="header-anchor" href="#🌱-参与贡献" aria-label="Permalink to &quot;🌱 参与贡献&quot;">​</a></h2><p>欢迎对指南内容以及网站源码做出贡献，也欢迎对本指南的上游文档做出贡献。</p><p>更多信息请参阅 <a href="./../postscript/contribute.html">贡献指南</a>。</p><h2 id="🍰-贡献者" tabindex="-1">🍰 贡献者 <a class="header-anchor" href="#🍰-贡献者" aria-label="Permalink to &quot;🍰 贡献者&quot;">​</a></h2><a href="https://github.com/nakanomikuorg/arch-guide/graphs/contributors"><img src="https://contrib.rocks/image?repo=nakanomikuorg/arch-guide" alt="contributors"></a><h2 id="💎-版权说明" tabindex="-1">💎 版权说明 <a class="header-anchor" href="#💎-版权说明" aria-label="Permalink to &quot;💎 版权说明&quot;">​</a></h2><p>网站源代码采用 MIT 许可证；未经特殊说明，本作品采用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" target="_blank" rel="noreferrer">知识共享署名-相同方式共享 4.0 国际许可协议</a> 进行许可。</p><p>更多信息请参阅 <a href="./../postscript/copyright.html">版权说明</a>。</p><h2 id="⭐-star-历史" tabindex="-1">⭐ Star 历史 <a class="header-anchor" href="#⭐-star-历史" aria-label="Permalink to &quot;⭐ Star 历史&quot;">​</a></h2><p><a href="https://starchart.cc/nakanomikuorg/arch-guide" target="_blank" rel="noreferrer"><img src="https://starchart.cc/nakanomikuorg/arch-guide.svg" alt="Star History"></a></p>`,21),r=[t];function l(h,p,o,d,k,c){return i(),s("div",null,r)}const b=a(e,[["render",l]]);export{u as __pageData,b as default};
