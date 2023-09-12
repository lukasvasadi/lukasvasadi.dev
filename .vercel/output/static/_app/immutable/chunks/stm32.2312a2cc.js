import{s as Ee,n as qt}from"./scheduler.be0e0057.js";import{S as Ge,i as Ue,g as a,s as o,H as J,h as l,D as i,c as p,j as Q,G as Y,f as e,k as V,a as s}from"./index.c7c9b348.js";function Ne(Ie){let u,Wt='<img src="/images/stm32.jpg" alt="STM32 Nucleo board"/>',Z,r,Xt="Contents",$,c,Bt='<li><a href="#introduction">Introduction</a></li> <li><a href="#setup">Setup</a></li> <li><a href="#interrupts">Interrupts</a></li>',tt,d,Kt='<a id="introduction">Introduction</a>',et,f,Ft='This guide details environment setup for programming <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html" rel="nofollow">STM32</a> microcontrollers (MCUs). It also covers general low-level functionality, such as configuring IO-based interrupts. The ST website provides a listing of various MCUs for special use cases, e.g., “High Performance,” “Ultra Low Power.” However, if you are unsure about the specific project requirements, simply choose an option from the “Mainstream MCUs.”',nt,m,Jt="Why use STM32?",st,h,Qt='STM32 microcontrollers are generally considered an industry standard technology, as opposed to Arduino, which, until the release of the <a href="https://www.arduino.cc/pro/" rel="nofollow">Pro</a> series, has served primarily an educational purpose. Compared to conventional Arduino boards, as well as the multitude of third-party MCU boards created for the Arduino platform, STM32 often provides more performance for substantially less cost. For example, the difference in processing speeds between ST and Arduino dev boards of similar costs can be upwards of 50 MHz.',at,k,Yt="What are the barriers to entry?",lt,v,Vt="Over the years, especially with the introduction of Arduino, MCU development has become simpler and streamlined. This is due to greater abstraction, which no longer requires users to understand the build process. In the case of the Arduino and STM32Cube IDEs, the developer usually selects a board from a preconfigured list and presses “play” to build and flash the chipset.",ot,_,Zt="However, while greater abstraction has certainly made STM32 development approachable, this platform still demands a greater level of understanding, both of the hardware and firmware, than Arduino. Specifically, STM32 development frequently involves configuring low-level pinout functions, clocks, and timers, as well as explicit reading and writing of registers. This can be a daunting task for inexperienced engineers and hobbyists, but with dedication and a little effort, the reward can be extraordinary.",pt,w,$t="<p><strong><em>NOTE:</em></strong> Even though the STM32 platform requires a deeper understanding of hardware development, I have found that programming more advanced features, such as interrupts, is easier than Arduino.</p>",it,C,te='<a id="setup">Setup</a>',ut,x,ee="This setup is suitable for Windows, Linux, and macOS. The main requirements are as follows:",rt,b,ne="<li><strong>STM32CubeMX</strong> Graphical tool for configuring STM32 microcontrollers</li> <li><strong>ST-LINK</strong> Software utility for flashing STM32 chips over USB</li> <li><strong>GNU ARM toolchain</strong> Cross-platform toolchain for compiling C/C++ source</li> <li><strong>OpenOCD</strong> Open-source debugger software for microcontrollers</li>",ct,T,se="STM32CubeMX",dt,g,ae="STM32CubeMX is a graphical tool that guides the user through a standard project setup procedure. First, the user selects the chipset or board, e.g., the Nucleo-G431KB, and presses “Start Project” in the upper right-hand corner.",ft,P,le='<img src="/images/stm32cubemx_board_selector.png" alt="STM32CubeMX IDE window"/>',mt,M,oe="Next, the user is directed to a graphical representation of the MCU pinout, where green highlighting indicates that the pin has an assigned function, e.g., USART, GPIO. When a function is assigned, the user can modify its behavior through various options in the left-hand pane. For example, the USART2 pins have a global interrupt that can be enabled to allow the program to interrupt the main thread and read serial input as needed.",ht,I,pe='<img src="/images/stm32cubemx_pin_config.png" alt="STM32CubeMX IDE window"/>',kt,H,ie="GNU Arm embedded toolchain",vt,S,ue='On Windows machines, the GNU embedded toolchain for Arm microcontrollers can be installed via the executable from <a href="https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads" rel="nofollow">armDeveloper</a>. Alternatively, install via Chocolatey:',_t,L,wt,He='<code class="language-ps1">choco install gcc-arm-embedded</code>',Ct,y,re="Linux users (Debian distros) can install the toolchain directly with the Advanced Package Tool, along with the GNU debugger:",xt,A,bt,Se='<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> gcc-arm-none-eabi gdb-multiarch</code>',Tt,O,ce="And macOS developers can install via Homebrew:",gt,E,Pt,Le='<code class="language-zsh">brew install --cask gcc-arm-embedded</code>',Mt,G,de="ST-LINK utility",It,U,fe="ST-LINK is a software interface for programming STM32 microcontrollers. It allows developers to read and write programs and flash the microcontroller with a full-featured GUI or CLI.",Ht,N,me='To install ST-LINK on Windows, download the executable from <a href="https://www.st.com/en/development-tools/stsw-link004.html" rel="nofollow">st.com</a> (an email address is required to download the software).',St,R,he="For Linux:",Lt,z,yt,ye='<code class="language-bash"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> st-utils</code>',At,D,ke="For macOS:",Ot,j,Et,Ae='<code class="language-zsh">brew install stlink</code>',Gt,q,ve="JetBrains CLion IDE",Ut,W,_e='ST provides an Eclipse-based IDE (<a href="https://www.st.com/en/development-tools/stm32cubeide.html" rel="nofollow">STM32CubeIDE</a>) for its microcontrollers and development boards. This IDE integrates with the STM32CubeMX graphical tool for initializing MCU pin configurations. Although the ST-supported IDE has many platform-specific features, I prefer JetBrains CLion for its stronger C/C++ language support and cleaner UI. In addition, the JetBrains developers created seemless integration with STM32CubeMX. You can download the software with a free 30-day trial from <a href="https://www.jetbrains.com/clion/" rel="nofollow">jetbrains.com/clion</a>.',Nt,X,we='A complete guide to configuring CLion for STM32 can be found at <a href="https://www.jetbrains.com/help/clion/embedded-development.html" rel="nofollow">STM32CubeMX projects</a>. Once you have installed the compiler toolchain and dependencies, and configured the IDE, you are ready to begin development!',Rt,B,Ce='<a id="interrupts">Interrupts</a>',zt,K,xe="The example below shows the source code for interrupting the main thread based on incoming serial data. This data is then used to determine the toggle state of two GPIO pins.",Dt,F,jt,Oe=`<code class="language-c"><span class="token comment">/*
    Serial pin control
    Toggle GPIO pins based on serial input
*/</span>

<span class="token keyword">const</span> <span class="token class-name">uint8_t</span> rx_data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token function">MX_GPIO_Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">MX_USART2_UART_Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">HAL_UART_Receive_IT</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>huart2<span class="token punctuation">,</span> rx_data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_9<span class="token punctuation">,</span> GPIO_PIN_RESET<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_10<span class="token punctuation">,</span> GPIO_PIN_RESET<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token function">HAL_Delay</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">HAL_UART_RxCpltCallback</span><span class="token punctuation">(</span>UART_HandleTypeDef <span class="token operator">*</span>huart<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// Prevent unused argument(s) compilation warnings</span>
    <span class="token function">UNUSED</span><span class="token punctuation">(</span>huart<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>huart<span class="token operator">-></span>Instance <span class="token operator">==</span> USART2<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// Receive with interrupt</span>
        <span class="token function">HAL_UART_Receive_IT</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>huart2<span class="token punctuation">,</span> rx_data<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Toggle pin 9 based on input from data buffer at position 0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rx_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">49</span><span class="token punctuation">)</span> <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_9<span class="token punctuation">,</span> GPIO_PIN_SET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_9<span class="token punctuation">,</span> GPIO_PIN_RESET<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Toggle pin 10 based on input from data buffer at position 1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rx_data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">49</span><span class="token punctuation">)</span> <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_10<span class="token punctuation">,</span> GPIO_PIN_SET<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token function">HAL_GPIO_WritePin</span><span class="token punctuation">(</span>GPIOA<span class="token punctuation">,</span> GPIO_PIN_10<span class="token punctuation">,</span> GPIO_PIN_RESET<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){u=a("p"),u.innerHTML=Wt,Z=o(),r=a("h2"),r.textContent=Xt,$=o(),c=a("ul"),c.innerHTML=Bt,tt=o(),d=a("h2"),d.innerHTML=Kt,et=o(),f=a("p"),f.innerHTML=Ft,nt=o(),m=a("h3"),m.textContent=Jt,st=o(),h=a("p"),h.innerHTML=Qt,at=o(),k=a("h3"),k.textContent=Yt,lt=o(),v=a("p"),v.textContent=Vt,ot=o(),_=a("p"),_.textContent=Zt,pt=o(),w=a("blockquote"),w.innerHTML=$t,it=o(),C=a("h2"),C.innerHTML=te,ut=o(),x=a("p"),x.textContent=ee,rt=o(),b=a("ul"),b.innerHTML=ne,ct=o(),T=a("h3"),T.textContent=se,dt=o(),g=a("p"),g.textContent=ae,ft=o(),P=a("p"),P.innerHTML=le,mt=o(),M=a("p"),M.textContent=oe,ht=o(),I=a("p"),I.innerHTML=pe,kt=o(),H=a("h3"),H.textContent=ie,vt=o(),S=a("p"),S.innerHTML=ue,_t=o(),L=a("pre"),wt=new J(!1),Ct=o(),y=a("p"),y.textContent=re,xt=o(),A=a("pre"),bt=new J(!1),Tt=o(),O=a("p"),O.textContent=ce,gt=o(),E=a("pre"),Pt=new J(!1),Mt=o(),G=a("h3"),G.textContent=de,It=o(),U=a("p"),U.textContent=fe,Ht=o(),N=a("p"),N.innerHTML=me,St=o(),R=a("p"),R.textContent=he,Lt=o(),z=a("pre"),yt=new J(!1),At=o(),D=a("p"),D.textContent=ke,Ot=o(),j=a("pre"),Et=new J(!1),Gt=o(),q=a("h3"),q.textContent=ve,Ut=o(),W=a("p"),W.innerHTML=_e,Nt=o(),X=a("p"),X.innerHTML=we,Rt=o(),B=a("h2"),B.innerHTML=Ce,zt=o(),K=a("p"),K.textContent=xe,Dt=o(),F=a("pre"),jt=new J(!1),this.h()},l(t){u=l(t,"P",{"data-svelte-h":!0}),i(u)!=="svelte-1x2jxcf"&&(u.innerHTML=Wt),Z=p(t),r=l(t,"H2",{"data-svelte-h":!0}),i(r)!=="svelte-jpxk5s"&&(r.textContent=Xt),$=p(t),c=l(t,"UL",{"data-svelte-h":!0}),i(c)!=="svelte-10czy6v"&&(c.innerHTML=Bt),tt=p(t),d=l(t,"H2",{"data-svelte-h":!0}),i(d)!=="svelte-117zo8l"&&(d.innerHTML=Kt),et=p(t),f=l(t,"P",{"data-svelte-h":!0}),i(f)!=="svelte-17tv8z7"&&(f.innerHTML=Ft),nt=p(t),m=l(t,"H3",{"data-svelte-h":!0}),i(m)!=="svelte-1ox5jh7"&&(m.textContent=Jt),st=p(t),h=l(t,"P",{"data-svelte-h":!0}),i(h)!=="svelte-kyw9z5"&&(h.innerHTML=Qt),at=p(t),k=l(t,"H3",{"data-svelte-h":!0}),i(k)!=="svelte-pglehj"&&(k.textContent=Yt),lt=p(t),v=l(t,"P",{"data-svelte-h":!0}),i(v)!=="svelte-ff6dr3"&&(v.textContent=Vt),ot=p(t),_=l(t,"P",{"data-svelte-h":!0}),i(_)!=="svelte-1vmdeoa"&&(_.textContent=Zt),pt=p(t),w=l(t,"BLOCKQUOTE",{"data-svelte-h":!0}),i(w)!=="svelte-1iac8fh"&&(w.innerHTML=$t),it=p(t),C=l(t,"H2",{"data-svelte-h":!0}),i(C)!=="svelte-1kkpotz"&&(C.innerHTML=te),ut=p(t),x=l(t,"P",{"data-svelte-h":!0}),i(x)!=="svelte-1n5c3d4"&&(x.textContent=ee),rt=p(t),b=l(t,"UL",{"data-svelte-h":!0}),i(b)!=="svelte-1pkeqnf"&&(b.innerHTML=ne),ct=p(t),T=l(t,"H3",{"data-svelte-h":!0}),i(T)!=="svelte-11sfqkb"&&(T.textContent=se),dt=p(t),g=l(t,"P",{"data-svelte-h":!0}),i(g)!=="svelte-w2w5vz"&&(g.textContent=ae),ft=p(t),P=l(t,"P",{"data-svelte-h":!0}),i(P)!=="svelte-1ipdc0e"&&(P.innerHTML=le),mt=p(t),M=l(t,"P",{"data-svelte-h":!0}),i(M)!=="svelte-y51dpv"&&(M.textContent=oe),ht=p(t),I=l(t,"P",{"data-svelte-h":!0}),i(I)!=="svelte-h10ohk"&&(I.innerHTML=pe),kt=p(t),H=l(t,"H3",{"data-svelte-h":!0}),i(H)!=="svelte-17a8ahz"&&(H.textContent=ie),vt=p(t),S=l(t,"P",{"data-svelte-h":!0}),i(S)!=="svelte-1vanu5b"&&(S.innerHTML=ue),_t=p(t),L=l(t,"PRE",{class:!0});var n=Q(L);wt=Y(n,!1),n.forEach(e),Ct=p(t),y=l(t,"P",{"data-svelte-h":!0}),i(y)!=="svelte-1s4vtuf"&&(y.textContent=re),xt=p(t),A=l(t,"PRE",{class:!0});var be=Q(A);bt=Y(be,!1),be.forEach(e),Tt=p(t),O=l(t,"P",{"data-svelte-h":!0}),i(O)!=="svelte-ax5wbf"&&(O.textContent=ce),gt=p(t),E=l(t,"PRE",{class:!0});var Te=Q(E);Pt=Y(Te,!1),Te.forEach(e),Mt=p(t),G=l(t,"H3",{"data-svelte-h":!0}),i(G)!=="svelte-96q1qk"&&(G.textContent=de),It=p(t),U=l(t,"P",{"data-svelte-h":!0}),i(U)!=="svelte-cm1xgg"&&(U.textContent=fe),Ht=p(t),N=l(t,"P",{"data-svelte-h":!0}),i(N)!=="svelte-b8j1wi"&&(N.innerHTML=me),St=p(t),R=l(t,"P",{"data-svelte-h":!0}),i(R)!=="svelte-38b54n"&&(R.textContent=he),Lt=p(t),z=l(t,"PRE",{class:!0});var ge=Q(z);yt=Y(ge,!1),ge.forEach(e),At=p(t),D=l(t,"P",{"data-svelte-h":!0}),i(D)!=="svelte-15zavxg"&&(D.textContent=ke),Ot=p(t),j=l(t,"PRE",{class:!0});var Pe=Q(j);Et=Y(Pe,!1),Pe.forEach(e),Gt=p(t),q=l(t,"H3",{"data-svelte-h":!0}),i(q)!=="svelte-168lvrd"&&(q.textContent=ve),Ut=p(t),W=l(t,"P",{"data-svelte-h":!0}),i(W)!=="svelte-1foz4h8"&&(W.innerHTML=_e),Nt=p(t),X=l(t,"P",{"data-svelte-h":!0}),i(X)!=="svelte-13xxkx3"&&(X.innerHTML=we),Rt=p(t),B=l(t,"H2",{"data-svelte-h":!0}),i(B)!=="svelte-wssnud"&&(B.innerHTML=Ce),zt=p(t),K=l(t,"P",{"data-svelte-h":!0}),i(K)!=="svelte-15zrrup"&&(K.textContent=xe),Dt=p(t),F=l(t,"PRE",{class:!0});var Me=Q(F);jt=Y(Me,!1),Me.forEach(e),this.h()},h(){wt.a=null,V(L,"class","language-ps1"),bt.a=null,V(A,"class","language-bash"),Pt.a=null,V(E,"class","language-zsh"),yt.a=null,V(z,"class","language-bash"),Et.a=null,V(j,"class","language-zsh"),jt.a=null,V(F,"class","language-c")},m(t,n){s(t,u,n),s(t,Z,n),s(t,r,n),s(t,$,n),s(t,c,n),s(t,tt,n),s(t,d,n),s(t,et,n),s(t,f,n),s(t,nt,n),s(t,m,n),s(t,st,n),s(t,h,n),s(t,at,n),s(t,k,n),s(t,lt,n),s(t,v,n),s(t,ot,n),s(t,_,n),s(t,pt,n),s(t,w,n),s(t,it,n),s(t,C,n),s(t,ut,n),s(t,x,n),s(t,rt,n),s(t,b,n),s(t,ct,n),s(t,T,n),s(t,dt,n),s(t,g,n),s(t,ft,n),s(t,P,n),s(t,mt,n),s(t,M,n),s(t,ht,n),s(t,I,n),s(t,kt,n),s(t,H,n),s(t,vt,n),s(t,S,n),s(t,_t,n),s(t,L,n),wt.m(He,L),s(t,Ct,n),s(t,y,n),s(t,xt,n),s(t,A,n),bt.m(Se,A),s(t,Tt,n),s(t,O,n),s(t,gt,n),s(t,E,n),Pt.m(Le,E),s(t,Mt,n),s(t,G,n),s(t,It,n),s(t,U,n),s(t,Ht,n),s(t,N,n),s(t,St,n),s(t,R,n),s(t,Lt,n),s(t,z,n),yt.m(ye,z),s(t,At,n),s(t,D,n),s(t,Ot,n),s(t,j,n),Et.m(Ae,j),s(t,Gt,n),s(t,q,n),s(t,Ut,n),s(t,W,n),s(t,Nt,n),s(t,X,n),s(t,Rt,n),s(t,B,n),s(t,zt,n),s(t,K,n),s(t,Dt,n),s(t,F,n),jt.m(Oe,F)},p:qt,i:qt,o:qt,d(t){t&&(e(u),e(Z),e(r),e($),e(c),e(tt),e(d),e(et),e(f),e(nt),e(m),e(st),e(h),e(at),e(k),e(lt),e(v),e(ot),e(_),e(pt),e(w),e(it),e(C),e(ut),e(x),e(rt),e(b),e(ct),e(T),e(dt),e(g),e(ft),e(P),e(mt),e(M),e(ht),e(I),e(kt),e(H),e(vt),e(S),e(_t),e(L),e(Ct),e(y),e(xt),e(A),e(Tt),e(O),e(gt),e(E),e(Mt),e(G),e(It),e(U),e(Ht),e(N),e(St),e(R),e(Lt),e(z),e(At),e(D),e(Ot),e(j),e(Gt),e(q),e(Ut),e(W),e(Nt),e(X),e(Rt),e(B),e(zt),e(K),e(Dt),e(F))}}}const De={title:"Programming STM32 microcontrollers",description:"Configure a development environment with CLion and learn basic MCU functions",date:"2023-8-31",image:"/images/stm32.jpg",categories:["STM32","Microcontrollers","Interrupts","Serial communication"],published:!0};class je extends Ge{constructor(u){super(),Ue(this,u,null,Ne,Ee,{})}}export{je as default,De as metadata};
