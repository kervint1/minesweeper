(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(85)}])},85:function(e,s,i){"use strict";i.r(s);var n=i(5893),t=i(7294),l=i(2729),o=i.n(l);let a=()=>{let[e,s]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[i,l]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),a=[];function _(e,s){return Math.floor(Math.random()*(s+1-e)+e)}function r(s){let i=0;for(let n=0;n<=8;n++)for(let t=0;t<=8;t++)e[n][t]===s&&(i+=1);return i}function d(e){let s=0;for(let n=0;n<=8;n++)for(let t=0;t<=8;t++)i[n][t]===e&&s++;return s}a.push([0]);let c=(i,n)=>{console.log(i,n);let t=JSON.parse(JSON.stringify(e)),o=JSON.parse(JSON.stringify(x));for(let e=0;e<=8;e++)for(let s=0;s<=8;s++)t[e][s]=0,o[e][s]=0;s(t),l(o)},f=(i,n)=>{document.getElementsByTagName("html")[0].oncontextmenu=()=>!1,console.log(i,n);let t=JSON.parse(JSON.stringify(e));0===e[n][i]?t[n][i]=2:2===e[n][i]?t[n][i]=3:3===e[n][i]&&(t[n][i]=0),s(t)},x=[];for(let e=1;e<=9;e++)x.push([0,0,0,0,0,0,0,0,0]);for(;1===Number(r(1))&&10>Number(d(1));){let s=_(0,8),n=_(0,8);1!==e[s][n]&&(i[s][n]=1),l(i)}if(d(1)>=10)for(let s=1;s<=10;s+=1){for(let s=0;s<=8;s++)for(let i=0;i<=8;i++)if(9===x[s][i])for(let n=-1;n<=1;n++)for(let t=-1;t<=1;t++)0===i&&0===s?e[s][i]=1:void 0!==e[s+n]&&void 0!==e[i+t]&&(e[s+n][i+t]=1);for(let s=0;s<=8;s++)for(let n=0;n<=8;n++)if(1===e[s][n]&&1!==i[s][n]){let t=0;for(let l=-1;l<=1;l++)for(let o=-1;o<=1;o++)0===n&&0===s?e[s][n]=1:void 0!==i[s+l]&&void 0!==i[n+o]&&1===i[s+l][n+o]&&t++;0===t&&(t=9),x[s][n]=t}else 1===e[s][n]&&1===i[s][n]&&(x[s][n]=10)}let m=e.some((e,s)=>e.some((e,n)=>1===e&&1===i[s][n])),N=(i,n)=>{console.log(i,n);let t=JSON.parse(JSON.stringify(e));if(0!==e[n][i]||m){if(1===e[n][i]&&e.map(e=>e.slice(Math.max(0,i-1),Math.min(8,i+1)+1)).slice(Math.max(0,n-1),Math.min(8,n+1)+1).flat().filter(e=>2===e).length===x[n][i]&&!m)for(let s=-1;s<=1;s++)for(let l=-1;l<=1;l++)void 0!==e[n+s]&&void 0!==e[n+s][i+l]&&0===e[n+s][i+l]&&(t[n+s][i+l]=1)}else t[n][i]=1;s(t)};!0===m?a[0][0]=1:r(0)+r(2)+r(3)===10&&(a[0][0]=2);for(let s=0;s<=8;s++)for(let i=0;i<=8;i++)2===e[s][i]?x[s][i]=11:3===e[s][i]&&(x[s][i]=12);return(0,n.jsx)("div",{className:o().container,children:(0,n.jsxs)("div",{className:o().plate,children:[(0,n.jsx)("div",{className:o().reset,children:a.map((e,s)=>e.map((e,i)=>(0,n.jsxs)("div",{className:o().reset,onClick:()=>c(i,s),children:[0===e&&(0,n.jsx)("div",{className:o().smile}),1===e&&(0,n.jsx)("div",{className:o().dead}),2===e&&(0,n.jsx)("div",{className:o().cool})]},"".concat(i,"-").concat(s))))}),(0,n.jsx)("div",{className:o().board,children:x.map((e,s)=>e.map((e,i)=>(0,n.jsxs)("div",{className:o().cell,onClick:()=>N(i,s),onContextMenu:()=>f(i,s),children:[0===e&&(0,n.jsx)("div",{className:o().nopush}),1===e&&(0,n.jsx)("div",{className:o().one}),2===e&&(0,n.jsx)("div",{className:o().two}),3===e&&(0,n.jsx)("div",{className:o().three}),4===e&&(0,n.jsx)("div",{className:o().four}),5===e&&(0,n.jsx)("div",{className:o().five}),6===e&&(0,n.jsx)("div",{className:o().six}),7===e&&(0,n.jsx)("div",{className:o().seven}),8===e&&(0,n.jsx)("div",{className:o().eight}),9===e&&(0,n.jsx)("div",{className:o().nothing}),10===e&&(0,n.jsx)("div",{className:o().bomb}),11===e&&(0,n.jsx)("div",{className:o().flag}),12===e&&(0,n.jsx)("div",{className:o().question})]},"".concat(i,"-").concat(s))))})]})})};s.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",one:"index_one__t_D1A",two:"index_two__zdT0J",three:"index_three__Yy176",four:"index_four__qNbvB",five:"index_five__ser0q",six:"index_six__pTt20",seven:"index_seven__0ISW8",eight:"index_eight__3hv71",nothing:"index_nothing__h3fh1",bomb:"index_bomb__UtPjB",nopush:"index_nopush__8ZOl2",flag:"index_flag__Bsg_z",question:"index_question__EWplC",smile:"index_smile__Vibwt",cool:"index_cool__nL8ph",dead:"index_dead__pUNzq",plate:"index_plate__yfmEV",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",reset:"index_reset__pnorU"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);