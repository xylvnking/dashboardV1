(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{7880:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Components/Song",function(){return c(8750)}])},3158:function(a,b,c){"use strict";c.d(b,{Ap:function(){return k},I8:function(){return j},db:function(){return i}});var d=c(5503),e=c(7702),f=c(6257),g=c(1153),h=(0,d.ZF)({apiKey:"AIzaSyDI47qZP4b9OD7_WETHcLtQh3-6Dmu2T_Q",authDomain:"dashboardv1-b5220.firebaseapp.com",projectId:"dashboardv1-b5220",storageBucket:"dashboardv1-b5220.appspot.com",messagingSenderId:"198616744704",appId:"1:198616744704:web:988e3c34e54b7f7691a9e5"});(0,g.cF)(h);var i=(0,f.ad)(h),j=(0,e.v0)(h),k=new e.hJ},8750:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return C}});var d,e=c(5893),f=c(7294);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=f.useLayoutEffect,i=function(a){var b=f.useRef(a);return h(function(){b.current=a}),b},j=function(a,b){if("function"==typeof a){a(b);return}a.current=b},k=function(a,b){var c=(0,f.useRef)();return(0,f.useCallback)(function(d){a.current=d,c.current&&j(c.current,null),c.current=b,b&&j(b,d)},[b])},l={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},m=function(a){Object.keys(l).forEach(function(b){a.style.setProperty(b,l[b],"important")})},n=null,o=function(a,b){var c=a.scrollHeight;return"border-box"===b.sizingStyle.boxSizing?c+b.borderSize:c-b.paddingSize},p=function(){},q=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],r=!!document.documentElement.currentStyle,s=function(a){var b=window.getComputedStyle(a);if(null===b)return null;var c,d,e=(c=q,d=b,c.reduce(function(a,b){return a[b]=d[b],a},{})),f=e.boxSizing;if(""===f)return null;r&&"border-box"===f&&(e.width=parseFloat(e.width)+parseFloat(e.borderRightWidth)+parseFloat(e.borderLeftWidth)+parseFloat(e.paddingRight)+parseFloat(e.paddingLeft)+"px");var g=parseFloat(e.paddingBottom)+parseFloat(e.paddingTop),h=parseFloat(e.borderBottomWidth)+parseFloat(e.borderTopWidth);return{sizingStyle:e,paddingSize:g,borderSize:h}},t=function(a){var b=i(a);(0,f.useLayoutEffect)(function(){var a=function(a){b.current(a)};return window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[])},u=function(a,b){var c=a.cacheMeasurements,d=a.maxRows,e=a.minRows,h=a.onChange,i=void 0===h?p:h,j=a.onHeightChange,l=void 0===j?p:j,q=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(a,["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"]),r=void 0!==q.value,u=(0,f.useRef)(null),v=k(u,b),w=(0,f.useRef)(0),x=(0,f.useRef)(),y=function(){var a,b,f,g,h,i,j,k,p,q,r,t,v=u.current,y=c&&x.current?x.current:s(v);if(y){x.current=y;var z=(a=y,b=v.value||v.placeholder||"x",f=e,void 0===f&&(f=1),void 0===(g=d)&&(g=1/0),n||((n=document.createElement("textarea")).setAttribute("tabindex","-1"),n.setAttribute("aria-hidden","true"),m(n)),null===n.parentNode&&document.body.appendChild(n),h=a.paddingSize,i=a.borderSize,j=a.sizingStyle,k=j.boxSizing,Object.keys(j).forEach(function(a){var b=a;n.style[b]=j[b]}),m(n),n.value=b,p=o(n,a),n.value="x",q=n.scrollHeight-h,r=q*f,"border-box"===k&&(r=r+h+i),p=Math.max(r,p),t=q*g,"border-box"===k&&(t=t+h+i),[p=Math.min(t,p),q]),A=z[0],B=z[1];w.current!==A&&(w.current=A,v.style.setProperty("height",A+"px","important"),l(A,{rowHeight:B}))}},z=function(a){r||y(),i(a)};return(0,f.useLayoutEffect)(y),t(y),(0,f.createElement)("textarea",g({},q,{onChange:z,ref:v}))},v=(0,f.forwardRef)(u),w=c(3673),x=c.n(w),y=c(3158),z=c(6257),A=c(1664),B=c.n(A);function C(a){var b=(0,f.useState)(!1),c=b[0],g=b[1],h=(0,f.useState)(!1),i=(h[0],h[1]),j=(0,f.useState)(),k=(j[0],j[1]),l=function(b,c,e){g(!0);var f=JSON.parse(JSON.stringify(a.artistData));f.songs[c].fileVersions[e].revisionNote=b,a.setArtistData(f);var h=(0,z.JU)(y.db,"artists",a.artistData.metadata.artistName);clearTimeout(d),d=setTimeout(function(){(0,z.r7)(h,f),g(!1)},500)},m=function(a){i(!0),k(a)},n=function(){navigator.clipboard.writeText("http://localhost:3000/"+a.artistData.metadata.artistName+"/"+a.songData.songMetadata.songName)};return a.songData&&(0,e.jsx)("main",{className:x().song,children:(0,e.jsxs)("details",{open:0==a.songIndex,children:[(0,e.jsx)("summary",{style:{cursor:"pointer"},children:a.songData.songMetadata.songName}),(0,e.jsx)(B(),{href:"http://localhost:3000/"+a.artistData.metadata.artistName+"/"+a.songData.songMetadata.songName,children:(0,e.jsx)("a",{style:{color:"blue"},children:"go to shareable version"})}),(0,e.jsxs)("button",{className:x().shareButton,onClick:function(){return n()},children:["copy share link",(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",children:(0,e.jsx)("path",{d:"M5.25 17.188q-.521 0-.885-.365Q4 16.458 4 15.938V5.771h1v10.167q0 .083.083.166.084.084.167.084h8.208v1Zm2.417-2.417q-.521 0-.886-.365-.364-.364-.364-.885V4.167q0-.521.364-.886.365-.364.886-.364h7.395q.542 0 .907.364.364.365.364.886v9.354q0 .521-.364.885-.365.365-.907.365Zm0-1h7.395q.105 0 .188-.083.083-.084.083-.167V4.167q0-.105-.083-.177-.083-.073-.188-.073H7.667q-.084 0-.167.073-.083.072-.083.177v9.354q0 .083.083.167.083.083.167.083Zm-.25 0V3.917v9.854Z"})})]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("h2",{children:["song name: ",a.songData.songMetadata.songName]}),(0,e.jsxs)("li",{children:["paid for: ",a.songData.songMetadata.paidFor?"yes":"no"]}),(0,e.jsxs)("li",{children:["date raw files received: ",a.songData.songMetadata.dateRawFilesReceived]}),(0,e.jsxs)("li",{children:["date released: ",a.songData.songMetadata.dateReleased]}),(0,e.jsxs)("li",{children:["backup location: ",a.songData.songMetadata.backupLocation]}),(0,e.jsxs)("li",{children:["date of most recent edit: ",a.songData.songMetadata.dateOfMostRecentEdit]}),a.songData.fileVersions.map(function(b,d){return(0,e.jsxs)("details",{className:"".concat(d>0&&x().oldFileVersion),style:{cursor:"pointer"},open:0==d,children:[(0,e.jsx)("summary",{children:b.fileVersionName}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:["file version name: ",b.fileVersionName]}),(0,e.jsxs)("li",{children:["date added: ",b.dateAdded]}),(0,e.jsxs)("li",{children:["Job type: ",b.jobType]}),0==d?(0,e.jsx)(v,{defaultValue:b.revisionNote,onFocus:function(){return m(d)},className:"".concat(x().revisionTextArea," ").concat(c&&x().revisionTextAreaIsTyping),onChange:function(b){return l(b.target.value,a.songIndex,d)}}):(0,e.jsxs)("li",{children:["Revision note: ",b.revisionNote]})]})]},d)})]},a.songIndex)]})})}},3673:function(a){a.exports={revisionTextArea:"Artist_revisionTextArea__Rt4Em",revisionTextAreaIsTyping:"Artist_revisionTextAreaIsTyping__1_kmn",oldFileVersion:"Artist_oldFileVersion__SUn9V",song:"Artist_song__lkM_t",shareButton:"Artist_shareButton__nQl3z"}}},function(a){a.O(0,[16,976,921,664,774,888,179],function(){var b;return a(a.s=7880)}),_N_E=a.O()}])