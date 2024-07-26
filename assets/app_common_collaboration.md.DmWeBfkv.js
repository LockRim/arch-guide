import{_ as e,c as t,o as l,a4 as i,m as s}from"./chunks/framework.DhooLXd5.js";const p="/assets/scrcpy-1.NHmd9X_6.jpg",n="/assets/scrcpy-2.B_zyYlLp.jpg",r="/assets/scrcpy-3.DtvSThMv.png",c="/assets/scrcpy-4.w_X3TB6B.png",d="/assets/scrcpy-5.DqaC8Ezs.png",o="/assets/scrcpy-6.y2m1RXiz.jpg",h="/assets/scrcpy-7.CuxrdRrC.png",k="/assets/scrcpy-8.B_4ez2fH.png",u="/assets/scrcpy-9.DB7Jmx4F.png",g="/assets/uxplay-1.w1Ml34GA.png",b="/assets/uxplay-2.BkfJD7lm.png",m="/assets/uxplay-3.D9c5K-9b.png",a="/assets/uxplay-4.CYLzcxtN.png",y="/assets/kdeconnect-1.ps2Ficlm.png",v="/assets/kdeconnect-2.96MxqCua.jpg",F="/assets/kdeconnect-3.DH4mV5zw.png",T=JSON.parse('{"title":"多屏协同","description":"","frontmatter":{"sidebarDepth":2},"headers":[],"relativePath":"app/common/collaboration.md","filePath":"app/common/collaboration.md","lastUpdated":1691049668000}'),C={name:"app/common/collaboration.md"},f=i('<h1 id="多屏协同" tabindex="-1">多屏协同 <a class="header-anchor" href="#多屏协同" aria-label="Permalink to &quot;多屏协同&quot;">​</a></h1><blockquote><h3 id="📲-二人同心-其利断金" tabindex="-1">📲 二人同心，其利断金 <a class="header-anchor" href="#📲-二人同心-其利断金" aria-label="Permalink to &quot;📲 二人同心，其利断金&quot;">​</a></h3><p>本小节内容讨论如何投屏安卓或苹果设备到 archlinux 上以及安卓设备如何和 archlinux 协同工作。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-label="Permalink to &quot;🔖 这一节将会讨论：&quot;">​</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🤖-安卓设备投屏-scrcpy">🤖 安卓设备投屏（scrcpy）</a><ul><li><a href="#有线连接">有线连接</a></li><li><a href="#无线连接">无线连接</a></li><li><a href="#快捷使用">快捷使用</a></li></ul></li><li><a href="#🍎-苹果设备投屏-uxplay">🍎 苹果设备投屏（UxPlay）</a></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🤖-安卓设备投屏-scrcpy" tabindex="-1">🤖 安卓设备投屏（scrcpy） <a class="header-anchor" href="#🤖-安卓设备投屏-scrcpy" aria-label="Permalink to &quot;🤖 安卓设备投屏（scrcpy）&quot;">​</a></h2><p><a href="https://github.com/Genymobile/scrcpy/blob/master/README.zh-Hans.md" target="_blank" rel="noreferrer">scrcpy</a> 可以显示并控制通过 USB 或无线连接的安卓设备，且不需要任何 root 权限。</p><p>scrcpy 有以下优点：</p><ul><li>轻量（原生，仅显示设备屏幕）</li><li>性能（30 ~ 60fps）</li><li>质量（分辨率可达 1920×1080 或更高）</li><li>低延迟（35 ~ 70ms）</li><li>快速启动（最快 1 秒内即可显示第一帧）</li><li>无侵入性（不会在设备上遗留任何程序）</li></ul><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>安卓版本要大于等于 5.0。</p></div><ol><li><p>安装 <a href="https://aur.archlinux.org/packages/scrcpy/" target="_blank" rel="noreferrer">scrcpy</a><sup>cn / aur</sup> 以及 <a href="https://archlinux.org/packages/extra/x86_64/android-tools/" target="_blank" rel="noreferrer">安卓工具包</a>：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OqMD4" id="tab-QEA0CDf" checked="checked"><label for="tab-QEA0CDf">cn</label><input type="radio" name="group-OqMD4" id="tab-TsKc_jI"><label for="tab-TsKc_jI">aur</label><input type="radio" name="group-OqMD4" id="tab-q0V9nr9"><label for="tab-q0V9nr9">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scrcpy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-tools</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/scrcpy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-tools</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scrcpy-git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> android-tools</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>打开安卓设备的 <code>设置</code> &gt; <code>开发人员选项</code>（多次点击 <code>关于手机（平板）</code> 中的 <code>版本号</code>，提示处在 <code>开发者模式</code> 后即可在设置中找到）&gt; 打开 <code>USB 调试</code>：</p><p><img src="'+p+'" alt="scrcpy-1"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>部分设备还需要开启 <code>USB 调试（安全设置）</code>。</p></div></li><li><p>通过数据线连接安卓设备和计算机 &gt; 将 <code>USB 连接方式</code> 改为 <code>传输文件</code>：</p><p><img src="'+n+'" alt="scrcpy-2"></p></li><li><p>在终端执行以下命令：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> devices</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>终端上也会显示连接的安卓设备号：</p><p><img src="'+r+'" alt="scrcpy-3"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>如果是第一次执行这条命令（或没有永远信任计算机），在安卓设备上应该会出现一个确认使用该电脑调试安卓设备的通知，确认即可。</p></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>有些设备可能会自动关闭 <code>USB 调试</code>，若没有显示请确认 <code>USB 调试</code> 开启。</p></div></li></ol><h3 id="有线连接" tabindex="-1">有线连接 <a class="header-anchor" href="#有线连接" aria-label="Permalink to &quot;有线连接&quot;">​</a></h3><ol><li><p>保持数据线连接，直接在终端执行以下命令即可：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrcpy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+c+'" alt="scrcpy-4"></p><p><img src="'+d+'" alt="scrcpy-5"></p></li><li><p>关闭窗口即可结束连接</p></li></ol><h3 id="无线连接" tabindex="-1">无线连接 <a class="header-anchor" href="#无线连接" aria-label="Permalink to &quot;无线连接&quot;">​</a></h3><ol><li><p>保持数据线连接，执行以下命令：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tcpip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8848</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 可自定义端口，默认为 5555</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>开启成功之后就可以拔掉数据线了</p></li><li><p>打开安卓设备的 <code>设置</code> &gt; <code>关于手机（平板）</code> &gt; <code>状态信息</code>（或类似位置）&gt; 查看手机（平板）的 <code>IP 地址</code>：</p><p><img src="'+o+'" alt="scrcpy-6"></p></li><li><p>在终端执行以下命令即可看到现在的安卓设备界面了：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ANDROID_IP:8848</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 刚刚自定义的端口</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>部分设备可能无法通过无线连接（断开数据线后会自动关闭 <code>USB 调试</code>），会显示以下错误信息：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 192.168.x.xxx:xxxx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></li><li><p>连接成功后在终端执行以下命令即可看到现在的安卓设备界面了：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrcpy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+h+'" alt="scrcpy-7"></p><p><img src="'+k+'" alt="scrcpy-8"></p><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若报以下错误：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> than</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> one</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device/emulator</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>请执行以下步骤后再尝试：</p><ol><li><p>通过 <code>adb devices</code> 命令查看信息，找到不存在的设备（因连接失败留下的，显示为 <code>offline</code>）</p></li><li><p>断开不存在的设备：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disconnect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HOST:PORT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+u+'" alt="scrcpy-9"></p></li></ol></div></li><li><p>关闭窗口即可结束连接</p></li></ol><h3 id="快捷使用" tabindex="-1">快捷使用 <a class="header-anchor" href="#快捷使用" aria-label="Permalink to &quot;快捷使用&quot;">​</a></h3><p>下面介绍一些快捷使用的方法。</p><h4 id="常用快捷键" tabindex="-1">常用快捷键 <a class="header-anchor" href="#常用快捷键" aria-label="Permalink to &quot;常用快捷键&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">作用</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">返回</td><td style="text-align:left;"><code>meta</code> + <code>B</code></td></tr><tr><td style="text-align:left;">主界面</td><td style="text-align:left;"><code>meta</code> + <code>H</code></td></tr><tr><td style="text-align:left;">多任务界面</td><td style="text-align:left;"><code>meta</code> + <code>S</code></td></tr><tr><td style="text-align:left;">关闭手机屏幕（电脑上的界面正常显示）</td><td style="text-align:left;"><code>meta</code> + <code>O</code></td></tr><tr><td style="text-align:left;">开启手机屏幕</td><td style="text-align:left;">右键单击</td></tr><tr><td style="text-align:left;">展开通知栏</td><td style="text-align:left;"><code>meta</code> + <code>N</code></td></tr><tr><td style="text-align:left;">折叠通知栏</td><td style="text-align:left;"><code>meta</code> + <code>Shift</code> + <code>N</code></td></tr></tbody></table><h4 id="文件传输" tabindex="-1">文件传输 <a class="header-anchor" href="#文件传输" aria-label="Permalink to &quot;文件传输&quot;">​</a></h4><p>若需要将计算机的文件传到安卓设备，直接将文件拖拽到计算机上的安卓设备界面即可。文件默认存放在用户的主目录下。</p><p>若感觉不太方便可使用 <a href="./collaboration.html#🔗-kde-connect">KDE Connect</a> 协同 scrcpy 使用。</p><h4 id="屏幕常亮" tabindex="-1">屏幕常亮 <a class="header-anchor" href="#屏幕常亮" aria-label="Permalink to &quot;屏幕常亮&quot;">​</a></h4><p>在连接到电脑之后很可能都希望手机息屏而计算机端的镜像可以常亮，虽然可以通过键盘快捷键 <code>meta</code> + <code>O</code> 来实现，但这种方式实现的亮屏会在达到手机屏幕休眠时间之后自动黑屏。</p><p>所以想要实现常亮的话需要在启动 scrcpy 的时候添加一个可以保持屏幕唤醒的参数：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">scrcpy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --turn-screen-off</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stay-awake</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>若亮屏是常用选项，可将这个命令设置为 scrcpy 的别名（alias）。只需要使用以下命令在 <code>~/.zshrc</code> 或者 <code>~/.bashrc</code> 中添加如下内容 &gt; 重新打开终端或者 <code>source</code> 该文件即可：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-DIp8G" id="tab-PlaXWcw" checked="checked"><label for="tab-PlaXWcw">bash</label><input type="radio" name="group-DIp8G" id="tab-7_ukGYT"><label for="tab-7_ukGYT">zsh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alias scrcpy=&quot;scrcpy --turn-screen-off --stay-awake&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alias scrcpy=&quot;scrcpy --turn-screen-off --stay-awake&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><h2 id="🍎-苹果设备投屏-uxplay" tabindex="-1">🍎 苹果设备投屏（UxPlay） <a class="header-anchor" href="#🍎-苹果设备投屏-uxplay" aria-label="Permalink to &quot;🍎 苹果设备投屏（UxPlay）&quot;">​</a></h2><p><a href="https://github.com/antimof/UxPlay" target="_blank" rel="noreferrer">UxPlay</a> 是一款将 iPadOS 或 IOS 投屏到 Linux 的软件。该项目是 UNIX / 类 UNIX 系统中 AirPlay 服务器的早期原型。</p><p>通过投屏到 archlinux 可以方便的在 <a href="./communication.html#zoom">Zoom</a> 等各种情景下将内容分享给他人（课堂演示等等）。</p>',30),B=s("details",{class:"details custom-block"},[s("summary",null,"视频指南（视频不清晰请前往哔哩哔哩观看）"),s("div",{style:{position:"relative",padding:"30% 45%","margin-top":"32px"}},[s("iframe",{style:{position:"absolute",width:"100%",height:"100%",left:"0",top:"0"},src:"//player.bilibili.com/player.html?aid=972705991&bvid=BV1fp4y1t71r&cid=328263624&page=1&as_wide=1&high_quality=1&danmaku=1&autoplay=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"})])],-1),_=i(`<ol><li><p>安装 <a href="https://aur.archlinux.org/packages/uxplay-git/" target="_blank" rel="noreferrer">UxPlay</a><sup>aur</sup>：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uxplay-git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>启动 <code>avahi-daemon</code> 服务：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-daemon.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-daemon.service</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复查一下</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>确保计算机和 iPad 或者 iPhone 连接至同一个 <strong>5Ghz</strong> 无线网络</p></li><li><p>在终端执行以下命令启动 UxPlay：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uxplay</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+g+'" alt="uxplay-1"></p></li><li><p>在 iPad 或 iPhone 中打开屏幕镜像，选择并连接 <code>Uxplay</code>，等待一会即可：</p><p><img src="'+b+'" alt="uxplay-2"></p><p><img src="'+m+'" alt="uxplay-3"></p></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>每次运行 UxPlay 之前都需要开启 <code>avahi-daemon</code> 服务，若觉得麻烦可将其添加到自动启动中：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> avahi-daemon.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>或者使用以下命令创建 <code>uxplay</code> 命令的别名（alias），只需要使用以下命令在 <code>~/.zshrc</code> 或者 <code>~/.bashrc</code> 中添加如下内容 &gt; 重新打开终端或者 <code>source</code> 该文件即可：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QhZd6" id="tab-0HJmY6u" checked="checked"><label for="tab-0HJmY6u">bash</label><input type="radio" name="group-QhZd6" id="tab-q_o0hbP"><label for="tab-q_o0hbP">zsh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alias uxplay=&quot;sudo systemctl start avahi-daemon.service &amp;&amp; uxplay&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;alias uxplay=&quot;sudo systemctl start avahi-daemon.service &amp;&amp; uxplay&quot;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若使用了 <a href="./../../guide/rookie/transparent.html#_7-配置-cgproxy">透明代理</a>，请将 <code>/usr/bin/uxplay</code> 添加到 <code>/etc/cgproxy/config.json</code> 中的 <code>program_noproxy</code> 一行（不使用透明代理的名单）：</p><p><img src="'+a+'" alt="uxplay-4"></p></div><h2 id="🔗-kde-connect" tabindex="-1">🔗 KDE Connect <a class="header-anchor" href="#🔗-kde-connect" aria-label="Permalink to &quot;🔗 KDE Connect&quot;">​</a></h2><p><a href="https://kdeconnect.kde.org/" target="_blank" rel="noreferrer">KDE Connect</a> 提供了各种用于整合移动设备和计算机的功能。它可以将文件发送到另一台设备、控制它的媒体播放、发送远程输入、查看它的通知，以及做许多其它事情。</p><ol><li><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kdeconnect/" target="_blank" rel="noreferrer">KDE Connect</a><sup>extra / cn / aur</sup> 及其相关可选依赖：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vyhtP" id="tab-4tLHeKk" checked="checked"><label for="tab-4tLHeKk">extra</label><input type="radio" name="group-vyhtP" id="tab-jkoCh9v"><label for="tab-jkoCh9v">cn (git)</label><input type="radio" name="group-vyhtP" id="tab-XfiC6Wo"><label for="tab-XfiC6Wo">aur (git)</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kdeconnect</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshfs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> skdeconnect-git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshfs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aur/kdeconnect-git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sshfs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></li><li><p>移动端可在 <a href="https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp" target="_blank" rel="noreferrer">Google Play</a> <a href="https://apps.apple.com/us/app/kde-connect/id1580245991" target="_blank" rel="noreferrer">App Store</a>下载并安装</p></li><li><p>将计算机和移动设备连接至同一个无线网络，根据提示信任并连接即可：</p><p><img src="'+y+'" alt="kdeconnect-1"></p></li><li><p>为了让计算机可以访问移动设备的文件系统，需要在移动设备点击对应计算机右上角的 <code>更多按钮</code>（三个点） &gt; <code>插件设置</code> &gt; 打开 <code>开放文件系统</code> &gt; 点击 <code>开放文件系统</code> 进入 <code>开放文件系统设置</code> &gt; <code>添加储存位置</code> &gt; 选择要共享的文件夹：</p><p><img src="'+v+'" alt="kdeconnect-2"></p></li><li><p>然后便可以在 Dolphin 中查看并操作移动设备的文件系统了：</p><p><img src="'+F+'" alt="kdeconnect-3"></p></li></ol><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>若使用了 <a href="./../../guide/rookie/transparent.html#_7-配置-cgproxy">透明代理</a>，请将 <code>/usr/lib/kdeconnectd</code> 添加到 <code>/etc/cgproxy/config.json</code> 中的 <code>program_noproxy</code> 一行（不使用透明代理的名单）：</p><p><img src="'+a+'" alt="uxplay-4"></p></div><hr><blockquote><p>📔 本节参考资料：</p><ul><li><a href="https://www.dianbanjiu.com/post/android-%E6%89%8B%E6%9C%BA%E6%8A%95%E5%B1%8F%E5%88%B0-linux-%E4%B8%8B/" target="_blank" rel="noreferrer">Android 手机投屏到 Linux 下</a></li></ul></blockquote></div>',2),x=[f,B,_];function E(q,w,P,D,A,S){return l(),t("div",null,x)}const z=e(C,[["render",E]]);export{T as __pageData,z as default};
