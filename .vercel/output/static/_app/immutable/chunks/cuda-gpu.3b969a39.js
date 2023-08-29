import{s as z,n as F}from"./scheduler.be0e0057.js";import{S,i as K,g as l,s as a,H as Q,h as o,D as p,c as i,G as R,a as s,f as n}from"./index.c7c9b348.js";function J(V){let c,L='<img src="/images/nvidia-gpu.jpg" alt="NVIDIA graphics cards"/>',x,r,U="Contents",g,C,I='<li><a href="#introduction">Introduction</a></li> <li><a href="#compiling-for-the-cpu">Compiling for the CPU</a></li>',b,y,M='<a id="introduction">Introduction</a>',H,A,E="CUDA is a C/C++ API that allows developers to access the GPU for accelerated computing. For Python, the most performant option to target the GPU is the <code>pyCUDA</code> library, which exposes the entire CUDA API, but requires writing C code in docstrings. An attractive alternative is using the <code>Numba</code> library, which provides a <strong><em>just-in-time</em></strong> compiling function decorator. This allows the optimization of certain functions that handle data processing without changing the entire program, and without mixing C source code.",_,u,q="Requirements",B,D,N="<li>NVIDIA GPU with CUDA support</li> <li>Python ≥3.4</li> <li>NumPy ≥1.10</li>",P,m,j='<a id="compiling-for-the-cpu">Compiling for the CPU</a>',T,h,k="In addition to compiling Python functions for the GPU, by default, Numba targets the CPU.",w,f,O=`<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #5DE4C7">from</span><span style="color: #A6ACCD"> numba </span><span style="color: #5DE4C7">import</span><span style="color: #A6ACCD"> jit</span></span>
<span class="line"><span style="color: #5DE4C7">import</span><span style="color: #A6ACCD"> math</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A6ACCD">@</span><span style="color: #ADD7FF">jit</span></span>
<span class="line"><span style="color: #91B4D5">def</span><span style="color: #A6ACCD"> </span><span style="color: #ADD7FF">hypot</span><span style="color: #A6ACCD">(</span><span style="color: #E4F0FB">x</span><span style="color: #A6ACCD">, </span><span style="color: #E4F0FB">y</span><span style="color: #A6ACCD">):</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #767C9DB0; font-style: italic"># Implementation from https://en.wikipedia.org/wiki/Hypot</span></span>
<span class="line"><span style="color: #A6ACCD">    x </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> </span><span style="color: #E4F0FBD0">abs</span><span style="color: #A6ACCD">(x)</span></span>
<span class="line"><span style="color: #A6ACCD">    y </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> </span><span style="color: #E4F0FBD0">abs</span><span style="color: #A6ACCD">(y)</span></span>
<span class="line"><span style="color: #A6ACCD">    t </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> </span><span style="color: #E4F0FBD0">min</span><span style="color: #A6ACCD">(x, y)</span></span>
<span class="line"><span style="color: #A6ACCD">    x </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> </span><span style="color: #E4F0FBD0">max</span><span style="color: #A6ACCD">(x, y)</span></span>
<span class="line"><span style="color: #A6ACCD">    t </span><span style="color: #91B4D5">=</span><span style="color: #A6ACCD"> t </span><span style="color: #91B4D5">/</span><span style="color: #A6ACCD"> x</span></span>
<span class="line"><span style="color: #A6ACCD">    </span><span style="color: #5DE4C7C0">return</span><span style="color: #A6ACCD"> x </span><span style="color: #91B4D5">*</span><span style="color: #A6ACCD"> math.sqrt(</span><span style="color: #5DE4C7">1</span><span style="color: #91B4D5">+</span><span style="color: #A6ACCD">t</span><span style="color: #91B4D5">*</span><span style="color: #A6ACCD">t)</span></span></code></pre>`,v,d,G="<p><strong><em>NOTE:</em></strong> Depending on the GPU, the performance of calculations with <code>float32</code> and <code>float64</code> data types can be significantly different. If the calculation does not require 64-bit precision, NVIDIA recommends using <code>float32</code>. (Most modern operating systems default the value of floating point numbers to 64-bit!)</p>";return{c(){c=l("p"),c.innerHTML=L,x=a(),r=l("h2"),r.textContent=U,g=a(),C=l("ul"),C.innerHTML=I,b=a(),y=l("h2"),y.innerHTML=M,H=a(),A=l("p"),A.innerHTML=E,_=a(),u=l("h3"),u.textContent=q,B=a(),D=l("ul"),D.innerHTML=N,P=a(),m=l("h2"),m.innerHTML=j,T=a(),h=l("p"),h.textContent=k,w=a(),f=new Q(!1),v=a(),d=l("blockquote"),d.innerHTML=G,this.h()},l(t){c=o(t,"P",{"data-svelte-h":!0}),p(c)!=="svelte-hte7b2"&&(c.innerHTML=L),x=i(t),r=o(t,"H2",{"data-svelte-h":!0}),p(r)!=="svelte-jpxk5s"&&(r.textContent=U),g=i(t),C=o(t,"UL",{"data-svelte-h":!0}),p(C)!=="svelte-n2dl39"&&(C.innerHTML=I),b=i(t),y=o(t,"H2",{"data-svelte-h":!0}),p(y)!=="svelte-117zo8l"&&(y.innerHTML=M),H=i(t),A=o(t,"P",{"data-svelte-h":!0}),p(A)!=="svelte-1pga5c9"&&(A.innerHTML=E),_=i(t),u=o(t,"H3",{"data-svelte-h":!0}),p(u)!=="svelte-uvqqyo"&&(u.textContent=q),B=i(t),D=o(t,"UL",{"data-svelte-h":!0}),p(D)!=="svelte-1bwh0wc"&&(D.innerHTML=N),P=i(t),m=o(t,"H2",{"data-svelte-h":!0}),p(m)!=="svelte-1ji3g9s"&&(m.innerHTML=j),T=i(t),h=o(t,"P",{"data-svelte-h":!0}),p(h)!=="svelte-vpt7ip"&&(h.textContent=k),w=i(t),f=R(t,!1),v=i(t),d=o(t,"BLOCKQUOTE",{"data-svelte-h":!0}),p(d)!=="svelte-1cqqqms"&&(d.innerHTML=G),this.h()},h(){f.a=v},m(t,e){s(t,c,e),s(t,x,e),s(t,r,e),s(t,g,e),s(t,C,e),s(t,b,e),s(t,y,e),s(t,H,e),s(t,A,e),s(t,_,e),s(t,u,e),s(t,B,e),s(t,D,e),s(t,P,e),s(t,m,e),s(t,T,e),s(t,h,e),s(t,w,e),f.m(O,t,e),s(t,v,e),s(t,d,e)},p:F,i:F,o:F,d(t){t&&(n(c),n(x),n(r),n(g),n(C),n(b),n(y),n(H),n(A),n(_),n(u),n(B),n(D),n(P),n(m),n(T),n(h),n(w),f.d(),n(v),n(d))}}}const Y={title:"Accelerated computing with CUDA and Python",description:"Enhance data science with rapid parallel processing.",date:"2023-8-31",image:"/images/nvidia-gpu.jpg",categories:["NVIDIA","CUDA","Numba"],published:!0};class Z extends S{constructor(c){super(),K(this,c,null,J,z,{})}}export{Z as default,Y as metadata};