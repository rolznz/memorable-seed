(this["webpackJsonpmemorable-seed"]=this["webpackJsonpmemorable-seed"]||[]).push([[0],{53:function(e,n,t){},58:function(e,n){},60:function(e,n){},71:function(e,n){},73:function(e,n){},95:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t.n(a),s=t(46),c=t.n(s),o=(t(53),t(8)),i=t(47),l=t.n(i),d=t(48),b=t(17),j=t(0);function h(){var e=Object(a.useState)(""),n=Object(o.a)(e,2),t=n[0],r=n[1],s=Object(a.useState)(""),c=Object(o.a)(s,2),i=c[0],l=c[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ol",{className:"list-decimal",children:[Object(j.jsx)("li",{children:"Choose a place away from cameras and prying eyes"}),Object(j.jsx)("li",{children:"Access this page on either a device you can wipe, or has a readonly hard disk"}),Object(j.jsx)("li",{children:"Turn off your Internet Connection"}),Object(j.jsx)("li",{children:"Enter your pre-memorized 11 or 23 BIP-39 seed words"}),Object(j.jsx)("li",{children:"Press Generate"}),Object(j.jsx)("li",{children:"Choose and memorize one of the words"}),Object(j.jsx)("li",{children:"Immediately turn off and wipe your device"}),Object(j.jsxs)("li",{children:["Enter your seed using ",Object(j.jsx)("strong",{children:"advanced recovery"})," on a newly flashed hardware wallet."]}),Object(j.jsx)("li",{children:"Re-run the advanced recovery to ensure you made no errors in the input of your seed."})]}),Object(j.jsxs)("div",{className:"flex gap-4 w-full justify-center",children:[Object(j.jsx)("input",{type:"text",placeholder:"Mnemonic (minus last word)",className:"input input-bordered input-primary w-full max-w-md",value:t,onChange:function(e){return r(e.target.value)}}),t?Object(j.jsx)("button",{className:"btn",onClick:function(){var e,n=[],a=Object(d.a)(b.wordlists.english);try{for(a.s();!(e=a.n()).done;){var r=e.value;b.validateMnemonic(t+" "+r,b.wordlists.english)&&n.push(r)}}catch(s){a.e(s)}finally{a.f()}n.length||alert("Invalid seed"),l(n.join(" "))},children:"Generate"}):Object(j.jsx)("button",{className:"btn btn-secondary btn-outline",onClick:function(){return r("abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon")},children:"Use Example"})]}),i.length>0&&Object(j.jsx)("div",{className:"flex gap-4 flex-wrap",children:i.split(" ").map((function(e){return Object(j.jsx)("span",{className:"badge",children:e},e)}))})]})}function u(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ol",{className:"list-decimal",children:[Object(j.jsx)("li",{children:"Choose a place away from cameras and prying eyes"}),Object(j.jsxs)("li",{children:["Start ",Object(j.jsx)("strong",{children:"advanced recovery"})," on a newly flashed hardware wallet. Do not use your computer keyboard!"]}),Object(j.jsx)("li",{children:"Enter your pre-memorized 12 BIP-39 words"}),Object(j.jsxs)("li",{children:["If your recovery fails, restart the advanced recovery but instead of using the same final word, use the next word down the"," ",Object(j.jsx)("a",{className:"link",target:"_blank",href:"https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt",rel:"noreferrer",children:"list"}),"."]}),Object(j.jsx)("li",{children:"If your recovery succeeds, you have your final word."}),Object(j.jsx)("li",{children:"Re-run the advanced recovery to ensure you made no errors in the input of your seed."})]}),Object(j.jsxs)("p",{children:["Maximum attempts required: ",Object(j.jsx)("span",{className:"badge",children:"16"})," for a 12 word phrase, which should be sufficient for advanced recovery (no keyboard input)."]}),Object(j.jsx)("p",{children:"Estimated time required: 1-2 hours."})]})}var m=[{title:"BROWSER WIPEABLE",component:Object(j.jsx)(h,{})},{title:"HW TRIAL & ERROR",component:Object(j.jsx)(u,{})}];function x(){var e=Object(a.useState)(0),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs tabs-boxed mb-2",children:m.map((function(e,n){return Object(j.jsx)(a.Fragment,{children:Object(j.jsx)("button",{className:l()(["tab tab-sm md:tab-md",{"tab-active":n===t}]),onClick:function(){return r(n)},children:e.title})},e.title)}))}),Object(j.jsx)("div",{className:"flex flex-col items-center gap-y-4 w-full px-4",children:m[t].component})]})}var f=t.p+"static/media/logo512.1957eecb.png";var O=function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(j.jsxs)("div",{className:"flex flex-col items-center p-4",children:[Object(j.jsxs)("a",{"aria-label":"Github",rel:"noreferrer",target:"_blank",href:"https://github.com/rolznz/memorable-seed",className:"flex flex-col justify-center items-center",children:[Object(j.jsx)("img",{src:f,className:"w-32",alt:"logo"}),Object(j.jsx)("span",{children:"Memorable Seed"})]}),Object(j.jsx)("a",{"aria-label":"Github",rel:"noreferrer",target:"_blank",href:"https://github.com/rolznz/memorable-seed",className:"btn btn-ghost drawer-button btn-square normal-case absolute top-1 right-1",children:Object(j.jsx)("svg",{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"inline-block h-8 w-8 fill-current",children:Object(j.jsx)("path",{d:"M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"})})}),Object(j.jsx)("div",{className:"flex flex-col items-center justify-center my-4",children:t?Object(j.jsx)(x,{}):Object(j.jsxs)("div",{className:"alert shadow-lg",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"stroke-info-content flex-shrink-0 w-6 h-6",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(j.jsx)("span",{children:"Choosing your own seed is less secure than using a randomly generated seed."})]}),Object(j.jsx)("div",{className:"flex-none",children:Object(j.jsx)("button",{className:"btn btn-sm btn-primary",onClick:function(){return r(!0)},children:"I Understand"})})]})})]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.1b54f62d.chunk.js.map