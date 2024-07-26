import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DhooLXd5.js";const t="/assets/kdenlive.CWEUligZ.png",l="/assets/shotcut.D0WNgnpJ.png",n="/assets/mkvtoolnix-1.ByX2A2ns.png",p="/assets/mkvtoolnix-2.CdLFZQuR.png",r="/assets/obs-studio.TSyhP4Ru.png",h="/assets/bilibili-live-chat-1.CALzubNU.png",d="/assets/bilibili-live-chat-2.B1uhr8mm.png",o="/assets/bilibili-live-chat-3.C0rbE-N2.png",c="/assets/bilibili-live-chat-4.Bju7WoA5.png",k="/assets/bilibili-live-chat-5.DtScAipK.png",u="/assets/bilibili-live-chat-6.C5JaWWJZ.png",b="/assets/bilibili-live-chat-7.Bs98Xt7Z.png",g="/assets/danmaku-1.D8gAEAEf.png",v="/assets/danmaku-2.HGE30430.png",m="/assets/screenkey.2_UxRodh.png",N=JSON.parse('{"title":"视频制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"app/exclusive/video.md","filePath":"app/exclusive/video.md","lastUpdated":1712220647000}'),F={name:"app/exclusive/video.md"},y=e('<h1 id="视频制作" tabindex="-1">视频制作 <a class="header-anchor" href="#视频制作" aria-label="Permalink to &quot;视频制作&quot;">​</a></h1><blockquote><h3 id="💃🏻-云想衣裳花想容-春风拂槛露华浓" tabindex="-1">💃🏻 云想衣裳花想容，春风拂槛露华浓 <a class="header-anchor" href="#💃🏻-云想衣裳花想容-春风拂槛露华浓" aria-label="Permalink to &quot;💃🏻 云想衣裳花想容，春风拂槛露华浓&quot;">​</a></h3><p>本小节讨论如何在 archlinux 上制作视频以及直播推流。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🎬-制作软件">🎬 制作软件</a><ul><li><a href="#kdenlive">Kdenlive</a></li><li><a href="#shotcut">Shotcut</a></li><li><a href="#mkvtoolnix">MKVToolNix</a></li><li><a href="#davinci-resolve">DaVinci Resolve</a></li></ul></li><li><a href="#📡-录屏直播">📡 录屏直播</a><ul><li><a href="#obs-studio">OBS Studio</a></li><li><a href="#bilibili-live-chat-推荐">Bilibili Live Chat（推荐）</a></li><li><a href="#弹幕库-推荐">弹幕库（推荐）</a></li><li><a href="#screenkey">screenkey</a></li></ul></li><li><a href="#🔤-字幕制作">🔤 字幕制作</a><ul><li><a href="#ffmpeg">ffmpeg</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🎬-制作软件" tabindex="-1">🎬 制作软件 <a class="header-anchor" href="#🎬-制作软件" aria-label="Permalink to &quot;🎬 制作软件&quot;">​</a></h2><h3 id="kdenlive" tabindex="-1">Kdenlive <a class="header-anchor" href="#kdenlive" aria-label="Permalink to &quot;Kdenlive&quot;">​</a></h3><p><a href="https://kdenlive.org/zh/" target="_blank" rel="noreferrer">Kdenlive</a> 是由 KDE 开发的自由开源的免费视频编辑软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kdenlive/" target="_blank" rel="noreferrer">Kdenlive</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jblmT" id="tab-Lt31q4Y" checked="checked"><label for="tab-Lt31q4Y">extra</label><input type="radio" name="group-jblmT" id="tab-W0lbgLT"><label for="tab-W0lbgLT">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kdenlive</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kdenlive-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+t+'" alt="kdenlive"></p><h3 id="shotcut" tabindex="-1">Shotcut <a class="header-anchor" href="#shotcut" aria-label="Permalink to &quot;Shotcut&quot;">​</a></h3><p><a href="https://www.shotcut.org/" target="_blank" rel="noreferrer">Shotcut</a> 是一个免费开源的跨平台视频编辑软件。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/shotcut/" target="_blank" rel="noreferrer">Shotcut</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-T-6Qj" id="tab-XRU865s" checked="checked"><label for="tab-XRU865s">extra</label><input type="radio" name="group-T-6Qj" id="tab-vzd982l"><label for="tab-vzd982l">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shotcut</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shotcut-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+l+'" alt="shotcut"></p><h3 id="mkvtoolnix" tabindex="-1">MKVToolNix <a class="header-anchor" href="#mkvtoolnix" aria-label="Permalink to &quot;MKVToolNix&quot;">​</a></h3><p><a href="https://mkvtoolnix.download/index.html" target="_blank" rel="noreferrer">MKVToolNix</a> 是一套功能强大的 *.mkv 格式制作和处理的工具。支持将多种视频、音频、字幕等格式封装成 *.mkv 格式。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/mkvtoolnix-gui/" target="_blank" rel="noreferrer">MKVToolNix</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fTljj" id="tab-Np2BMlO" checked="checked"><label for="tab-Np2BMlO">extra</label><input type="radio" name="group-fTljj" id="tab-emxA7xn"><label for="tab-emxA7xn">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkvtoolnix-gui</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkvtoolnix-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+n+'" alt="mkvtoolnix-1"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>可在菜单栏 <code>MKVToolNix GUI</code> &gt; <code>Preferences</code> &gt; 侧边栏 <code>GUI</code> &gt; <code>Interface language</code> 中将语言更改为 <code>简体中文</code>：</p><p><img src="'+p+'" alt="mkvtoolnix-2"></p></div><h3 id="davinci-resolve" tabindex="-1">DaVinci Resolve <a class="header-anchor" href="#davinci-resolve" aria-label="Permalink to &quot;DaVinci Resolve&quot;">​</a></h3><p><a href="http://www.blackmagicdesign.com/cn/products/davinciresolve/" target="_blank" rel="noreferrer">DaVinci Resolve</a> 是一款将剪辑、调色、视觉特效、动态图形和音频后期制作融于一身的视频编辑软件。</p><p>安装 <a href="https://aur.archlinux.org/packages/davinci-resolve/" target="_blank" rel="noreferrer">DaVinci Resolve（免费版）</a><sup>EULA / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-e1aGo" id="tab-TS1v5Bi" checked="checked"><label for="tab-TS1v5Bi">aur</label><input type="radio" name="group-e1aGo" id="tab-tldJp2J"><label for="tab-tldJp2J">aur (beta)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> davinci-resolve</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> davinci-resolve-beta</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>DaVinci Resolve（免费版）在 Linux 下支持的编解码格式有限，详情请参阅此 <a href="https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_15_Supported_Codec_List.pdf" target="_blank" rel="noreferrer">📄 文档</a>。</p><p>DaVinci Resolve 没有编入 fcitx 模块，所以在 Linux 下不能输入中文，可以使用剪贴板解决。</p></div><p>另外还有 <a href="https://aur.archlinux.org/packages/davinci-resolve-studio/" target="_blank" rel="noreferrer">DaVinci Resolve Studio（付费版）</a><sup>EULA / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-iZUkG" id="tab-jZmM62z" checked="checked"><label for="tab-jZmM62z">aur</label><input type="radio" name="group-iZUkG" id="tab-dnfYV9-"><label for="tab-dnfYV9-">aur (beta)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> davinci-resolve-studio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> davinci-resolve-studio-beta</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="📡-录屏直播" tabindex="-1">📡 录屏直播 <a class="header-anchor" href="#📡-录屏直播" aria-label="Permalink to &quot;📡 录屏直播&quot;">​</a></h2><h3 id="obs-studio" tabindex="-1">OBS Studio <a class="header-anchor" href="#obs-studio" aria-label="Permalink to &quot;OBS Studio&quot;">​</a></h3><p><a href="https://obsproject.com/zh-cn" target="_blank" rel="noreferrer">OBS Studio</a> 是免费开源的用于视频录制以及直播串流的软件。Linux 下操作与 Windows 下基本一致。</p><p>安装 <a href="https://www.archlinux.org/packages/extra/x86_64/obs-studio/" target="_blank" rel="noreferrer">OBS Studio</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-lLtHF" id="tab-LnSx-pB" checked="checked"><label for="tab-LnSx-pB">aur (browser)</label><input type="radio" name="group-lLtHF" id="tab-JxEOM_K"><label for="tab-JxEOM_K">extra</label><input type="radio" name="group-lLtHF" id="tab-NwtHCmo"><label for="tab-NwtHCmo">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> obs-studio-browser</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 有浏览器插件集成的 OBS Studio。编译要很久（大约 15 min）</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> obs-studio</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> obs-studio-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+r+'" alt="obs-studio"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果你使用较新的 NVIDIA 显卡，可以使用 NVENC 编码器。这将大大降低直播或录制过程中 CPU 的压力。</p><p>详情请参阅 <a href="https://www.nvidia.cn/geforce/guides/broadcasting-guide/" target="_blank" rel="noreferrer">NVIDIA NVENC OBS 指南</a>。</p><p>如果想进一步优化直播或录制性能，可以安装<a href="https://github.com/keylase/nvidia-patch" target="_blank" rel="noreferrer">此仓库</a>中的 NvFBC 显卡驱动补丁，再安装<a href="https://aur.archlinux.org/packages/obs-nvfbc-git/" target="_blank" rel="noreferrer">OBS NvFBC 插件</a><sup>aur</sup>，然后使用 NvFBC 来源即可。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> obs-nvfbc-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h3 id="bilibili-live-chat-推荐" tabindex="-1">Bilibili Live Chat（推荐） <a class="header-anchor" href="#bilibili-live-chat-推荐" aria-label="Permalink to &quot;Bilibili Live Chat（推荐）&quot;">​</a></h3><p><a href="https://github.com/Tsuk1ko/bilibili-live-chat" target="_blank" rel="noreferrer">Bilibili Live Chat</a> 是一个无后端的、仿 YouTube Live Chat 的、箱都不用开就能食用的 Bilibili 直播弹幕姬。主要用于 OBS，为的是在低功能需求的情况下，不依靠任何第三方本地软件实现弹幕和礼物的展示。</p><p>可以直接使用部署在 Github Pages 的成品，也可以在本地运行一个服务器：</p><ol><li><p>克隆 <a href="https://github.com/Tsuk1ko/bilibili-live-chat" target="_blank" rel="noreferrer">Bilibili Live Chat repo</a> 到合适位置：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Tsuk1ko/bilibili-live-chat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/some/folder</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+h+`" alt="bilibili-live-chat-1"></p></li><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/nodejs/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://archlinux.org/packages/extra/any/yarn/" target="_blank" rel="noreferrer">Yarn</a>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>进入克隆仓库并安装项目的所有依赖项：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bilibili-live-chat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+d+'" alt="bilibili-live-chat-2"></p></li><li><p>运行本地服务器：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serve</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+'" alt="bilibili-live-chat-3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>也可以使用 <code>yarn build</code> 进行编译。这将在 <code>dist/</code> 目录产生一个可用于生产环境的包，再将其部署在服务器上。</p><p>更多信息可参阅 <a href="https://cli.vuejs.org/zh/guide/cli-service.html#cli-%E6%9C%8D%E5%8A%A1" target="_blank" rel="noreferrer">Vue CLI 官方文档</a>。</p></div></li><li><p>打开对应本地链接并设置 &gt; 点击 <code>Go!</code>：</p><p><img src="'+c+'" alt="bilibili-live-chat-4"></p><p><img src="'+k+'" alt="bilibili-live-chat-5"></p></li><li><p>打开 <a href="./video.html#obs-studio"><code>OBS Studio</code></a> &gt; 在 <code>来源</code> 中添加 <code>🌏 浏览器</code>（BrowserSource）&gt; 复制上方链接填写在 <code>URL</code>中。<code>宽度</code> 和 <code>高度</code> 可根据需要自行设置（不要在预览视图中拖拽缩放浏览器源的宽高），其它选项默认即可：</p><p><img src="'+u+'" alt="bilibili-live-chat-6"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>Bilibili Live Chat 需要使用 <a href="https://aur.archlinux.org/packages/obs-studio-browser" target="_blank" rel="noreferrer">有浏览器插件集成的 OBS Studio</a>。</p></div></li><li><p>在预览视图中将其移动至合适位置即可：</p><p><img src="'+b+'" alt="bilibili-live-chat-7"></p></li></ol><h3 id="弹幕库-推荐" tabindex="-1">弹幕库（推荐） <a class="header-anchor" href="#弹幕库-推荐" aria-label="Permalink to &quot;弹幕库（推荐）&quot;">​</a></h3><p><a href="https://www.danmaku.live/" target="_blank" rel="noreferrer">弹幕库</a> 是一个哔哩哔哩直播助手。目前已经 <a href="https://t.bilibili.com/378501835576827480" target="_blank" rel="noreferrer">停止更新</a>。</p><ol><li><p>安装 <a href="https://www.danmaku.live/" target="_blank" rel="noreferrer">弹幕库</a><sup>cn / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-oYcNu" id="tab-K4o5xQC" checked="checked"><label for="tab-K4o5xQC">cn</label><input type="radio" name="group-oYcNu" id="tab-evWN8uE"><label for="tab-evWN8uE">aur (git)</label><input type="radio" name="group-oYcNu" id="tab-0jjXnJU"><label for="tab-0jjXnJU">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bilibili-live-helper-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/bilibili-live-helper-bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bilibili-live-helper-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p><img src="'+g+'" alt="danmaku-1"></p></li><li><p>点击 <code>应用模块</code> 或 <code>OBS 模块</code> 所需功能即可开启 / 设置对应功能，按照提示操作即可：</p><p><img src="'+v+'" alt="danmaku-2"></p></li></ol><h3 id="screenkey" tabindex="-1">screenkey <a class="header-anchor" href="#screenkey" aria-label="Permalink to &quot;screenkey&quot;">​</a></h3><p><a href="https://www.thregr.org/~wavexx/software/screenkey/" target="_blank" rel="noreferrer">screenkey</a> 是一个用于显示键盘键入在屏幕上的工具，可用于录屏演示。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/any/screenkey/" target="_blank" rel="noreferrer">screenkey</a><sup>extra / aur</sup>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-g5C0K" id="tab--0w4eHG" checked="checked"><label for="tab--0w4eHG">extra</label><input type="radio" name="group-g5C0K" id="tab-f1xsaI5"><label for="tab-f1xsaI5">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> screenkey</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> screenkey-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>在终端输入 <code>screenkey</code> 以启动：</p><p><img src="'+m+`" alt="screenkey"></p></li><li><p>按下 <code>Ctrl</code> + <code>C</code> 即可退出</p></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>可以通过以下设置在录屏演示中突出显示鼠标位置与点击效果：</p><p>打开 <code>系统设置</code> &gt; 点击侧边栏 <code>工作区行为</code> &gt; <code>桌面特效</code> &gt; 在 <code>无障碍功能</code> 中勾选 <code>鼠标定位</code> 与 <code>鼠标点击动效</code> &gt; <code>应用</code>。</p></div><h2 id="🔤-字幕制作" tabindex="-1">🔤 字幕制作 <a class="header-anchor" href="#🔤-字幕制作" aria-label="Permalink to &quot;🔤 字幕制作&quot;">​</a></h2><p>视频字幕除了可以用上述视频编辑软件制作，还可以使用 <a href="https://ffmpeg.org/" target="_blank" rel="noreferrer">ffmpeg</a>（已经作为依赖安装）在命令行进行烧录。</p><h3 id="ffmpeg" tabindex="-1">ffmpeg <a class="header-anchor" href="#ffmpeg" aria-label="Permalink to &quot;ffmpeg&quot;">​</a></h3><p>一般情况来讲，一个视频加上外带的 *.srt 字幕是较为普遍的情况。这里描述如何为 YouTube 视频加入字幕。</p><ol><li><p>首先要进行视频字幕的下载。这里可以使用一个 Chromium 浏览器拓展 —— <a href="https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm" target="_blank" rel="noreferrer">YouTube™ 双字幕</a></p></li><li><p>接下来进行字幕与视频的重新烧录。<a href="./video.html#mkvtoolnix">MKVToolNix</a> 只能做那种分离的字幕，但是某些视频网站要上传烧录好的。为了更好的兼容性，建议始终将视频和文件重新烧录。使用 <code>ffmpeg</code> 进行操作：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subtitles=input.srt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mp4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果需要制作双语字幕（同时显示，而不是分字幕轨道），可以使用两次 <code>ffmpeg</code> 命令 —— 第一次添加主字幕，第二次添加副字幕。</p><ol><li>第一次添加主字幕。使用 MarginV 进行垂直方向的区分：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -strict</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subtitles=input_zh.srt:force_style=&#39;Fontsize=20\\,Fontname=FZYBKSJW--GB1-0\\,MarginV=30\\,Bold=-1\\,BorderStyle=1&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qscale:v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output_with_zh.mp4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>第二次添加副字幕：</li></ol><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output_with_zh.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -strict</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> subtitles=input_en.srt:force_style</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;Fontsize=15\\,Fontname=FZYBKSJW--GB1-0\\,Bold=-1\\,BorderStyle=1&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qscale:v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output_with_double_subtitles.mp4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>更多参数可以参阅 <a href="https://ffmpeg.org/ffmpeg.html" target="_blank" rel="noreferrer">ffmpeg 文档</a>。</p></div></li></ol>`,51),C=[y];function f(B,_,x,w,E,S){return a(),i("div",null,C)}const T=s(F,[["render",f]]);export{N as __pageData,T as default};
