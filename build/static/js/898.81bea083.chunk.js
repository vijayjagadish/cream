"use strict";(self.webpackChunkcreamcollar=self.webpackChunkcreamcollar||[]).push([[898],{7974:function(e,t,s){s.d(t,{zx:function(){return n},Ei:function(){return c},II:function(){return f},x1:function(){return u},aV:function(){return g},h1:function(){return w},iR:function(){return R},xv:function(){return A},Kx:function(){return I}});var l=s(9593),a=s(3738),x=s(2791),o=s(184),r=["children","className","leftIcon","rightIcon","shape","size","variant","color"],n=function(e){var t=e.children,s=e.className,x=void 0===s?"":s,n=e.leftIcon,i=e.rightIcon,c=(e.shape,e.size,e.variant,e.color,(0,a.Z)(e,r));return(0,o.jsxs)("button",(0,l.Z)((0,l.Z)({className:"".concat(x)},c),{},{children:[!!n&&n,t,!!i&&i]}))},i=["className","src","alt"],c=function(e){var t=e.className,s=e.src,x=void 0===s?"defaultNoData.png":s,r=e.alt,n=void 0===r?"testImg":r,c=(0,a.Z)(e,i);return(0,o.jsx)("img",(0,l.Z)((0,l.Z)({className:t,src:x,alt:n},c),{},{loading:"lazy"}))},m=function(e){var t=e.errors,s=void 0===t?[]:t,l=e.className,a=void 0===l?"":l;return(null===s||void 0===s?void 0:s.length)>0&&(0,o.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(a),children:s.join(", ")})},d=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],f=x.forwardRef((function(e,t){var s=e.wrapClassName,x=void 0===s?"":s,r=e.className,n=void 0===r?"":r,i=e.name,c=void 0===i?"":i,f=e.placeholder,p=void 0===f?"":f,u=e.type,h=void 0===u?"text":u,g=(e.children,e.errors),j=void 0===g?[]:g,b=e.label,w=void 0===b?"":b,v=e.prefix,N=e.suffix,y=e.onChange,R=(e.shape,e.size,e.variant,e.color,(0,a.Z)(e,d));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"".concat(x," \n               \n               \n              "),children:[!!w&&w,!!v&&v,(0,o.jsx)("input",(0,l.Z)({ref:t,className:"".concat(n," bg-transparent border-0"),type:h,name:c,onChange:function(e){var t;y&&y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:p},R)),!!N&&N]}),!!j&&(0,o.jsx)(m,{errors:j})]})})),p=["className"],u=function(e){var t=e.className,s=(0,a.Z)(e,p);return(0,o.jsx)("div",(0,l.Z)({className:t},s))},h=["children","className"],g=function(e){var t=e.children,s=e.className,x=(0,a.Z)(e,h);return(0,o.jsx)("div",(0,l.Z)((0,l.Z)({className:s},x),{},{children:t}))},j=s(3430),b=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],w=function(e){var t=e.className,s=e.activeCss,r=e.inactiveCss,n=e.sliderRef,i=void 0===n?null:n,c=e.count,m=e.activeIndex,d=e.selectedWrapperCss,f=void 0===d?"":d,p=e.unselectedWrapperCss,u=void 0===p?"":p,h=(0,a.Z)(e,b),g=x.useState(0),w=(0,j.Z)(g,2),v=w[0],N=w[1];return x.useEffect((function(){var e,t,s=null===i||void 0===i||null===(e=i.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;N(s)}),[i]),(0,o.jsx)("div",(0,l.Z)((0,l.Z)({className:t},h),{},{children:Array(c).fill(0).map((function(e,t){var l=m>=t*v&&m<(t+1)*v;return(0,o.jsx)("div",{className:"".concat(l?f:u," "),children:(0,o.jsx)("span",{className:"".concat(l?s:r," slider-indicator"),onClick:function(){var e;return null===i||void 0===i||null===(e=i.current)||void 0===e?void 0:e.slideTo(t*v)}})},"indicator"+t)}))}))},v=s(1052),N=s.n(v),y=(s(967),["className","items","centerMode","magnifiedIndex","activeSlideCSS"]),R=x.forwardRef((function(e,t){var s=e.className,r=e.items,n=e.centerMode,i=e.magnifiedIndex,c=void 0===i?0:i,m=e.activeSlideCSS,d=void 0===m?"scale-75":m,f=(0,a.Z)(e,y),p=n?r.map((function(e,t){var s;return function(e){return(null===f||void 0===f?void 0:f.activeIndex)+c>=(null===r||void 0===r?void 0:r.length)?e!==(null===f||void 0===f?void 0:f.activeIndex)+c-(null===r||void 0===r?void 0:r.length):e!==f.activeIndex+c}(t)?x.cloneElement(e,(0,l.Z)((0,l.Z)({},e.props),{},{className:[null===(s=e.props)||void 0===s?void 0:s.className,d].filter(Boolean).join(" ")})):x.cloneElement(e)})):r;return(0,o.jsx)("div",{className:s,children:(0,o.jsx)(N(),(0,l.Z)((0,l.Z)({items:p,disableDotsControls:!0,touchTracking:!0},f),{},{disableButtonsControls:!0,infinite:!0,mouseTracking:!0,ref:t}))})})),_=["children","className","size","as"],z={txtRobotoRomanBold32:"font-bold font-roboto",txtRobotoRomanExtraLight36:"font-roboto font-thin",txtRobotoRomanRegular18Gray800:"font-normal font-roboto",txtInterBold20:"font-bold font-inter",txtOpenSans16Yellow900:"font-normal font-opensans",txtGothicA1Thin41:"font-gothica font-light",txtGothicA1Bold32:"font-bold font-gothica",txtOpenSans22:"font-normal font-opensans",txtRobotoRomanBold16:"font-bold font-roboto",txtRobotoRomanLight32:"font-light font-roboto",txtRobotoRomanBold24:"font-bold font-roboto",txtOpenSansRomanSemiBold18:"font-opensans font-semibold",txtRobotoRomanRegular16WhiteA700:"font-normal font-roboto",txtOpenSans16:"font-normal font-opensans",txtOpenSans18:"font-normal font-opensans",txtRobotoRomanBold20:"font-bold font-roboto",txtRobotoRomanBold42:"font-bold font-roboto",txtRobotoRomanExtraLight24:"font-roboto font-thin",txtMontserratBold20:"font-bold font-montserrat",txtInterBold16:"font-bold font-inter",txtRobotoRomanExtraBold48:"font-extrabold font-roboto",txtHelveticaNeueThin48:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14Bluegray400:"font-roboto font-semibold",txtRobotoRomanRegular16:"font-normal font-roboto",txtRobotoRomanRegular18:"font-normal font-roboto",txtRobotoRomanRegular17:"font-normal font-roboto",txtHelveticaNeueThin48WhiteA700:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14:"font-roboto font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal",txtOpenSansRomanSemiBold18Gray900:"font-opensans font-semibold"},A=function(e){var t=e.children,s=e.className,x=void 0===s?"":s,r=e.size,n=e.as,i=(0,a.Z)(e,_),c=n||"p";return(0,o.jsx)(c,(0,l.Z)((0,l.Z)({className:"text-left ".concat(x," ").concat(r&&z[r])},i),{},{children:t}))},E=["className","name","placeholder","children","errors","onChange"],I=x.forwardRef((function(e,t){var s=e.className,x=e.name,r=e.placeholder,n=e.children,i=e.errors,c=e.onChange,d=(0,a.Z)(e,E);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",(0,l.Z)({ref:t,className:"".concat(s),name:x,onChange:function(e){var t;c&&c(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:r},d)),!!i&&(0,o.jsx)(m,{errors:i}),n]})}));I.defaultProps={className:"",name:"",placeholder:""}},1885:function(e,t,s){s.r(t),s.d(t,{default:function(){return n}});s(2791);var l=s(3504),a=s(7974),x=s(184),o=function(e){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:e.className,children:(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsxs)("div",{className:"h-[649px] relative w-full",children:[(0,x.jsxs)("div",{className:"h-[649px] m-auto w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[649px] m-auto object-cover w-full",src:"images/img_bg3.png",alt:"bg3"}),(0,x.jsx)(a.Ei,{className:"absolute h-[577px] inset-[0] justify-center m-auto object-cover w-full",src:"images/img_bg4.png",alt:"bg4"})]}),(0,x.jsxs)("div",{className:"absolute h-[640px] inset-y-[0] left-[0] my-auto w-[64%] md:w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[640px] m-auto object-cover w-full",src:"images/img_adobestock3785.png",alt:"adobestock3785"}),(0,x.jsxs)("div",{className:"absolute bottom-[4%] flex flex-col md:gap-10 gap-[157px] justify-start left-[11%] w-[73%]",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start mr-2.5 w-[99%] md:w-full",children:(0,x.jsxs)("div",{className:"flex flex-col gap-[29px] items-start justify-start w-[617px] md:w-full",children:[(0,x.jsx)("div",{className:"flex flex-col h-[201px] md:h-auto items-start justify-start w-full",children:null===e||void 0===e?void 0:e.userdescription}),(0,x.jsx)(a.zx,{className:"bg-yellow-900 cursor-pointer font-semibold font-sfprotext min-w-[139px] py-[9px] rounded-md text-base text-center text-white-A700_01",children:null===e||void 0===e?void 0:e.learnmorebutton})]})}),(0,x.jsx)(a.h1,{className:"flex gap-3 h-2.5 items-start justify-start md:ml-[0] ml-[551px] w-[76px]",count:4,activeCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5",activeIndex:1,inactiveCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_4c w-2.5",selectedWrapperCss:"inline-block",unselectedWrapperCss:"inline-block"})]})]})]})})})})};o.defaultProps={userdescription:(0,x.jsxs)(a.xv,{className:"leading-[66.00px] max-w-[617px] md:max-w-full sm:text-[31px] md:text-[37px] text-[41px] text-white-A700",size:"txtGothicA1Thin41",children:[(0,x.jsx)("span",{className:"text-orange-400 font-gothica text-left font-bold",children:"Competency Research"}),(0,x.jsx)("span",{className:"text-white-A700 font-gothica text-left font-light",children:(0,x.jsxs)(x.Fragment,{children:[" ","for ",(0,x.jsx)("br",{}),"newer capabilities of ",(0,x.jsx)("br",{})]})}),(0,x.jsxs)("span",{className:"text-white-A700 font-gothica text-left font-bold",children:["Software defined Industries"," "]}),(0,x.jsx)("span",{className:"text-white-A700 font-gothica text-left font-light",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"Frictionless experience for Graduating students and Professionals to decide on building their careers of choice"]})})]}),learnmorebutton:"Learn More"};var r=o,n=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-auto sm:w-full md:w-full",children:(0,x.jsxs)("div",{className:"flex flex-col items-start justify-start w-auto md:w-full",children:[(0,x.jsx)("header",{className:"flex items-center justify-center md:px-5 shadow-bs w-full",children:(0,x.jsx)("div",{className:"bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] w-full",children:(0,x.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-center justify-between p-4 w-full",children:[(0,x.jsxs)("div",{className:"bg-white-A700 flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-start mb-0.5 md:ml-[0] ml-[67px] w-auto sm:w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[31px] w-[146px]",src:"images/img_group227.svg",alt:"group227"}),(0,x.jsxs)("div",{className:"flex flex-row gap-6 items-start justify-start w-auto",children:[(0,x.jsx)(a.zx,{className:"bg-transparent cursor-pointer font-semibold min-w-[53px] text-center text-lg text-orange-700_01",children:(0,x.jsx)("p",{children:(0,x.jsx)(l.OL,{to:"/",children:"Home"})})}),(0,x.jsx)(a.zx,{className:"common-pointer bg-transparent cursor-pointer font-semibold min-w-[80px] text-center text-gray-900 text-lg",children:(0,x.jsx)("p",{children:(0,x.jsx)(l.OL,{to:"/homepage",children:"About Us"})})}),(0,x.jsx)(a.zx,{className:"bg-transparent cursor-pointer font-semibold min-w-[95px] text-center text-gray-900_01 text-lg",children:(0,x.jsx)("p",{children:(0,x.jsx)(l.OL,{to:"/homepagetwo",children:"Contact Us"})})})]})]}),(0,x.jsx)(a.Ei,{className:"h-8 mr-[67px] md:mt-0 mt-0.5 w-[84px]",src:"images/img_frame8471.svg",alt:"frame8471"})]})})}),(0,x.jsx)(r,{className:"flex flex-col items-center justify-start w-full",userdescription:(0,x.jsxs)(a.xv,{className:"font-light leading-[66.00px] sm:text-[31px] md:text-[37px] text-[41px] text-white-A700",children:[(0,x.jsx)("span",{className:"text-orange-400 font-gothica text-left font-bold",children:"Competency Research"}),(0,x.jsx)("span",{className:"text-white-A700 font-gothica text-left",children:(0,x.jsxs)(x.Fragment,{children:[" ","for ",(0,x.jsx)("br",{}),"newer capabilities of ",(0,x.jsx)("br",{})]})}),(0,x.jsxs)("span",{className:"text-white-A700 font-gothica text-left font-bold",children:["Software defined Industries"," "]}),(0,x.jsx)("span",{className:"text-white-A700 font-gothica text-left",children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"Frictionless experience for Graduating students and Professionals to decide on building their careers of choice"]})})]})}),(0,x.jsxs)("div",{className:"bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,x.jsx)(a.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center",size:"txtRobotoRomanExtraLight36",children:(0,x.jsxs)(x.Fragment,{children:["Automotive industry is undergoing ",(0,x.jsx)("br",{}),"the disruption of a century in this decade"]})}),(0,x.jsx)("div",{className:"bg-gray-100 flex flex-col items-center justify-center max-w-[1224px] mx-auto md:px-5 px-8 py-6 rounded-[10px] w-full",children:(0,x.jsxs)("div",{className:"md:gap-5 gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full",children:[(0,x.jsxs)("div",{className:"border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"90%"})}),(0,x.jsx)(a.Ei,{className:"h-10 max-h-10",src:"images/img_group_gray_600.svg",alt:"group"})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsxs)(a.xv,{className:"leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:[(0,x.jsxs)("span",{className:"text-gray-900_02 font-opensans text-left font-normal",children:["Software will differentiate"," "]}),(0,x.jsx)("span",{className:"text-gray-900_02 font-opensans text-left font-bold",children:"Future cars"})]})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[31%]"})]})]}),(0,x.jsxs)("div",{className:"border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"$0.5-1T"})}),(0,x.jsx)(a.Ei,{className:"h-[66px] max-h-[66px]",src:"images/img_frame1000001790.svg",alt:"frame1000001790"})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsxs)(a.xv,{className:"leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:[(0,x.jsxs)("span",{className:"text-gray-900_02 font-opensans text-left font-normal",children:["software and data driven"," "]}),(0,x.jsx)("span",{className:"text-gray-900_02 font-opensans text-left font-bold",children:"market volume in 2035"})]})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[31%]"}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[31%]"})]})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-start sm:pr-5 pr-6 w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:pl-5 pl-6 pr-1 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"90%"})}),(0,x.jsx)(a.Ei,{className:"h-[70px] max-h-[70px]",src:"images/img_car.svg",alt:"car"})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsxs)(a.xv,{className:"leading-[28.00px] max-w-[314px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:[(0,x.jsxs)("span",{className:"text-gray-900_02 font-opensans text-left font-normal",children:["Autonomous vehicles can"," "]}),(0,x.jsx)("span",{className:"text-gray-900_02 font-opensans text-left font-bold",children:"Reduce Accidents"})]})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[33%]"})]})]}),(0,x.jsxs)("div",{className:"border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"300 mn"})}),(0,x.jsx)("div",{className:"flex flex-col h-[95px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[100px] py-12 w-[117px]",children:(0,x.jsx)(a.Ei,{className:"h-[73px] md:h-auto object-cover w-[117px] sm:w-full",src:"images/img_image81.png",alt:"imageEightyOne"})})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsx)(a.xv,{className:"leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:"lines of code involved for one vehicle within next few years"})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[31%]"})]})]}),(0,x.jsxs)("div",{className:"border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center pl-6 pr-[30px] sm:px-5 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"25 GB"})}),(0,x.jsx)(a.Ei,{className:"h-[60px] w-[60px]",src:"images/img_nounrenewableenergy4604079.svg",alt:"nounrenewableen"})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsx)(a.xv,{className:"leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:"of data generated by every connected car per hour"})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[31%]"})]})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-start sm:pr-5 pr-6 w-full",children:[(0,x.jsxs)("div",{className:"flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:pl-5 pl-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-1 flex-col h-full items-start justify-center w-full",children:(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto",size:"txtRobotoRomanExtraBold48",children:"50%"})}),(0,x.jsx)(a.Ei,{className:"h-[73px] max-h-[73px]",src:"images/img_nounsaving4354915.svg",alt:"nounsaving43549"})]}),(0,x.jsxs)("div",{className:"flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,x.jsxs)(a.xv,{className:"leading-[28.00px] max-w-[314px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl",size:"txtOpenSans22",children:["of the vehicle cost will be of software by 2030"," "]})}),(0,x.jsx)(a.x1,{className:"bg-yellow-900 h-[3px] w-[33%]"})]})]})]})})]}),(0,x.jsxs)("div",{className:"bg-gray-50 flex flex-col font-helveticaneue gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 w-full",children:[(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full",size:"txtHelveticaNeueThin48",children:"Challenge"}),(0,x.jsxs)("div",{className:"flex flex-col font-roboto gap-8 items-start justify-start w-auto md:w-full",children:[(0,x.jsx)("div",{className:"flex flex-col items-start justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] w-full",children:(0,x.jsx)(a.xv,{className:"leading-[21.00px] max-w-[1224px] md:max-w-full text-base text-gray-800",size:"txtRobotoRomanRegular16",children:"Industry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships and collaborationIndustry and Academia joint partnerships..."})}),(0,x.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] w-full",children:[(0,x.jsxs)("div",{className:"flex md:flex-col flex-row gap-0.5 h-[234px] md:h-auto items-center justify-start max-w-[1224px] mx-auto rounded-[10px] w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]",src:"images/img_image84.png",alt:"imageEightyFour"}),(0,x.jsx)(a.Ei,{className:"flex-1 md:flex-none md:h-[234px] sm:h-auto h-full max-h-[234px] object-cover sm:w-[] md:w-[]",src:"images/img_image82.png",alt:"imageEightyTwo"}),(0,x.jsx)("div",{className:"bg-gray-900 flex flex-1 flex-col h-full items-start justify-start px-5 w-full",children:(0,x.jsxs)(a.xv,{className:"max-w-[290px] md:max-w-full text-[17px] text-center text-white-A700",size:"txtRobotoRomanRegular17",children:[(0,x.jsxs)("span",{className:"md:text-[22px] sm:text-xl text-white-A700 font-roboto text-2xl font-bold",children:["Industry & Academia"," "]}),(0,x.jsxs)("span",{className:"md:text-xl sm:text-lg text-white-A700 font-roboto text-[22px] font-normal",children:["joint partnerships and collaboration"," "]})]})})]}),(0,x.jsxs)("div",{className:"flex md:flex-col flex-row gap-0.5 h-[234px] md:h-auto items-center justify-start max-w-[1224px] mx-auto rotate-[180deg] rounded-[10px] w-full",children:[(0,x.jsx)("div",{className:"bg-gray-900 flex flex-1 flex-col h-full items-start justify-start px-5 rotate-[180deg] w-full",children:(0,x.jsxs)(a.xv,{className:"max-w-[290px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl",size:"txtRobotoRomanBold24",children:["To help industry with continues Innovation & talent pipeline"," "]})}),(0,x.jsx)(a.Ei,{className:"flex-1 md:flex-none h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]",src:"images/img_image87.png",alt:"imageEightySeven"}),(0,x.jsx)(a.Ei,{className:"h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]",src:"images/img_image86.png",alt:"imageEightySix"})]})]})]})]}),(0,x.jsxs)("div",{className:"bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,x.jsxs)(a.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full",size:"txtRobotoRomanExtraLight36",children:["Building the collaborative ecosystem to win together"," "]}),(0,x.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-blue_gray-100_01 rounded-[10px] w-full",children:[(0,x.jsxs)("div",{className:"bg-gray-300 flex flex-col h-[555px] md:h-auto items-start justify-start",children:[(0,x.jsx)("div",{className:"flex flex-col h-full items-center justify-center w-full",children:(0,x.jsx)(a.Ei,{className:"h-[375px] sm:h-auto object-cover w-[408px] md:w-full",src:"images/img_maskgroup.png",alt:"maskgroup"})}),(0,x.jsx)("div",{className:"bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full",children:(0,x.jsxs)(a.xv,{className:"text-2xl md:text-[22px] text-black-900 text-center sm:text-xl",size:"txtRobotoRomanExtraLight24",children:[(0,x.jsx)("span",{className:"text-black-900 font-roboto font-thin",children:(0,x.jsxs)(x.Fragment,{children:["Industry and Academia joint ",(0,x.jsx)("br",{})]})}),(0,x.jsx)("span",{className:"text-black-900 font-roboto font-bold",children:"Partnerships & Collaboration"})]})})]}),(0,x.jsxs)("div",{className:"bg-gray-100 border-blue_gray-100_02 border-l border-solid flex flex-1 flex-col h-full items-start justify-start w-full",children:[(0,x.jsx)("div",{className:"bg-indigo-50 flex flex-col h-[451px] md:h-auto items-center justify-center w-full",children:(0,x.jsx)(a.Ei,{className:"h-[404px] sm:h-auto object-cover w-[525px] md:w-full",src:"images/img_maskgroup_404x525.png",alt:"maskgroup_One"})}),(0,x.jsx)("div",{className:"bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full",children:(0,x.jsxs)(a.xv,{className:"text-2xl md:text-[22px] text-black-900 text-center sm:text-xl",size:"txtRobotoRomanExtraLight24",children:[(0,x.jsx)("span",{className:"text-black-900 font-roboto font-thin",children:(0,x.jsxs)(x.Fragment,{children:["To help industry with continues ",(0,x.jsx)("br",{})]})}),(0,x.jsx)("span",{className:"text-black-900 font-roboto font-bold",children:"Innovation & Talent Pipeline"}),(0,x.jsx)("span",{className:"text-black-900 font-roboto font-thin",children:" "})]})})]})]})]}),(0,x.jsxs)("div",{className:"bg-gray-50 flex flex-col font-roboto gap-12 h-[709px] md:h-auto items-center justify-start pb-16 pt-12 w-full",children:[(0,x.jsxs)(a.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto",size:"txtRobotoRomanExtraLight36",children:["Building the collaborative ecosystem to win together"," "]}),(0,x.jsxs)(a.aV,{className:"sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-full justify-start md:px-10 sm:px-5 px-[71px] w-full",orientation:"horizontal",children:[(0,x.jsxs)("div",{className:"bg-white-A700 border-b-4 border-solid border-yellow-900 flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full",src:"images/img_screenshot20230610.png",alt:"screenshot20230"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full",children:[(0,x.jsx)(a.xv,{className:"md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full",size:"txtRobotoRomanBold32",children:"Industry"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start",children:[(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Access to highly skilled industry ready talent to reduce skill gap"}),(0,x.jsxs)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:["Optimize Research and Development cost through shared innovation"," "]}),(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Be the front runners in building new age capabilities in SDV\u2019s"})]})]})]}),(0,x.jsxs)("div",{className:"bg-white-A700 border-b-4 border-solid border-yellow-900 flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full",src:"images/img_image91.png",alt:"imageNinetyOne"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full",children:[(0,x.jsx)(a.xv,{className:"md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full",size:"txtRobotoRomanBold32",children:"Academia"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-start justify-start",children:[(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Access to industrial expertise for Academic Research and Incubations"}),(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Higher placements and better internships for the students"}),(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Introducing more Industry relevant electives"})]})]})]}),(0,x.jsxs)("div",{className:"bg-white-A700 border-b-4 border-orange-700_01 border-solid flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full",src:"images/img_image94.png",alt:"imageNinetyFour"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full",children:[(0,x.jsx)(a.xv,{className:"md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full",size:"txtRobotoRomanBold32",children:"Students"}),(0,x.jsxs)("div",{className:"flex flex-col gap-6 items-center justify-start",children:[(0,x.jsxs)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:["Career awareness and clarity from early stages of academic courses"," "]}),(0,x.jsxs)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:["Research oriented learning by solving real world industry problems"," "]}),(0,x.jsx)(a.xv,{className:"text-base text-gray-800 w-full",size:"txtRobotoRomanRegular16",children:"Community based learning through Industry and academic mentorship"})]})]})]})]})]}),(0,x.jsxs)("div",{className:"bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,x.jsxs)(a.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full",size:"txtRobotoRomanExtraLight36",children:["Join The Movement"," "]}),(0,x.jsx)("div",{className:"flex flex-col h-[291px] md:h-auto items-start justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-blue_gray-200 rounded-[10px] w-full",children:(0,x.jsx)("div",{className:"bg-teal-50 flex flex-col h-full items-center justify-center rounded-[10px] w-full",children:(0,x.jsxs)("div",{className:"relative rounded-[10px] w-[1224px] md:w-full",children:[(0,x.jsx)(a.Ei,{className:"absolute h-[291px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[1224px] md:w-full",src:"images/img_image97.png",alt:"imageNinetySeven"}),(0,x.jsxs)("div",{className:"bg-gradient  flex flex-col items-center justify-end m-auto p-[43px] md:px-10 sm:px-5 relative w-[86%] md:w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[49px] mt-1 w-[774px]",src:"images/img_frame1000001796.svg",alt:"frame1000001796"}),(0,x.jsx)("div",{className:"flex flex-col items-center justify-start mt-[25px]",children:(0,x.jsx)(a.xv,{className:"md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900",size:"txtRobotoRomanLight32",children:"Alone we can do so little, together we can do so much"})}),(0,x.jsxs)("div",{className:"flex flex-row flex-wrap font-sfprotext gap-8 items-center justify-center max-w-[774px] mt-12 w-full",children:[(0,x.jsx)(a.zx,{className:"bg-yellow-900 cursor-pointer font-semibold min-w-[136px] py-[9px] rounded-md text-base text-center text-white-A700_01",children:"Contact us"}),(0,x.jsx)(a.zx,{className:"bg-yellow-900 cursor-pointer font-semibold min-w-[120px] py-[9px] rounded-md text-base text-center text-white-A700_01",children:"About us"})]})]})]})})})]}),(0,x.jsxs)("div",{className:"flex flex-col font-helveticaneue gap-[-1px] items-start justify-start w-auto md:w-full",children:[(0,x.jsxs)("div",{className:"bg-gray-900 flex flex-col gap-12 items-center justify-start max-w-[1366px] pb-12 pt-16 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,x.jsx)(a.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full",size:"txtHelveticaNeueThin48WhiteA700",children:"Contact us"}),(0,x.jsxs)("div",{className:"flex md:flex-col flex-row font-opensans md:gap-10 gap-16 items-start justify-start max-w-[1224px] mx-auto w-full",children:[(0,x.jsxs)("div",{className:"flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[30%] md:w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[39px]",src:"images/img_group227.svg",alt:"frame1000001795"}),(0,x.jsx)("div",{className:"flex flex-col items-start justify-start w-[365px]",children:(0,x.jsx)(a.xv,{className:"max-w-[365px] md:max-w-full text-blue_gray-400 text-lg",size:"txtOpenSans18",children:"Lorem ipsum dolor sit amet consectetur. Enim penatibus eu non elementum mauris vel tempor."})})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full",children:[(0,x.jsx)(a.xv,{className:"text-white-A700 text-xl w-auto",size:"txtRobotoRomanBold20",children:"CreamCollar"}),(0,x.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-auto sm:w-full",children:[(0,x.jsx)(a.xv,{className:"text-blue_gray-400 text-lg",size:"txtRobotoRomanRegular18",children:(0,x.jsxs)(x.Fragment,{children:["xyz, aaa",(0,x.jsx)("br",{}),"aaa, Bangalore"," "]})}),(0,x.jsx)(a.xv,{className:"text-blue_gray-400 text-lg w-auto",size:"txtRobotoRomanRegular18",children:"info@creamcollar.com"})]})]}),(0,x.jsxs)("div",{className:"flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full",children:[(0,x.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-auto",children:[(0,x.jsx)(a.xv,{className:"text-white-A700 text-xl w-auto",size:"txtRobotoRomanBold20",children:"Subscribe"}),(0,x.jsxs)("div",{className:"flex flex-row gap-[-1px] items-start justify-start w-full",children:[(0,x.jsx)(a.II,{name:"frame15965",placeholder:"Email",className:"font-roboto leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full",wrapClassName:"bg-white-A700 border border-gray-300_01 border-solid pl-3 pr-[35px] py-[9px] rounded-bl-md rounded-tl-md w-[70%]",type:"email"}),(0,x.jsx)(a.zx,{className:"bg-yellow-900 cursor-pointer font-semibold font-sfprotext min-w-[114px] py-[9px] rounded-br-md rounded-tr-md text-base text-center text-white-A700_01",children:"Subscribe"})]})]}),(0,x.jsxs)("div",{className:"flex flex-row gap-3 items-start justify-start w-auto",children:[(0,x.jsx)(a.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,x.jsx)(a.Ei,{src:"images/img_linkedin.svg",alt:"linkedin"})}),(0,x.jsx)(a.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-[11px] rounded-[3px] w-11",children:(0,x.jsx)(a.Ei,{className:"h-[21px]",src:"images/img_twitter.svg",alt:"twitter"})}),(0,x.jsx)(a.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,x.jsx)(a.Ei,{className:"h-[21px]",src:"images/img_group.svg",alt:"group"})}),(0,x.jsx)(a.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,x.jsx)(a.Ei,{className:"h-[21px]",src:"images/img_facebook.svg",alt:"facebook"})})]})]})]})]}),(0,x.jsxs)("div",{className:"bg-black-900_01 flex sm:flex-col flex-row font-roboto md:gap-10 items-end justify-between max-w-[1366px] md:px-10 sm:px-5 px-[71px] py-[30px] w-full",children:[(0,x.jsx)(a.Ei,{className:"h-[39px] w-[184px]",src:"images/img_group228.svg",alt:"group228"}),(0,x.jsxs)("div",{className:"flex flex-col gap-1 items-end justify-start w-auto",children:[(0,x.jsx)(a.xv,{className:"text-base text-center text-white-A700 w-auto",size:"txtRobotoRomanRegular16WhiteA700",children:"Privacy | Terms of Service"}),(0,x.jsxs)(a.xv,{className:"text-base text-blue_gray-400_01 text-center w-auto",size:"txtRobotoRomanBold16",children:[(0,x.jsx)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:"Copyright"}),(0,x.jsxs)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:[" ","\xa9 2023, All Rights Reserved."]})]})]})]})]})]})})})}}}]);
//# sourceMappingURL=898.81bea083.chunk.js.map