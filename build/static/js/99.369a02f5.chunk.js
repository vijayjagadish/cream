"use strict";(self.webpackChunkcreamcollar=self.webpackChunkcreamcollar||[]).push([[99],{7974:function(e,t,s){s.d(t,{zx:function(){return i},Ei:function(){return x},II:function(){return f},x1:function(){return p},aV:function(){return g},h1:function(){return j},iR:function(){return R},xv:function(){return I},Kx:function(){return k}});var a=s(9593),l=s(3738),r=s(2791),o=s(184),n=["children","className","leftIcon","rightIcon","shape","size","variant","color"],i=function(e){var t=e.children,s=e.className,r=void 0===s?"":s,i=e.leftIcon,c=e.rightIcon,x=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,n));return(0,o.jsxs)("button",(0,a.Z)((0,a.Z)({className:"".concat(r)},x),{},{children:[!!i&&i,t,!!c&&c]}))},c=["className","src","alt"],x=function(e){var t=e.className,s=e.src,r=void 0===s?"defaultNoData.png":s,n=e.alt,i=void 0===n?"testImg":n,x=(0,l.Z)(e,c);return(0,o.jsx)("img",(0,a.Z)((0,a.Z)({className:t,src:r,alt:i},x),{},{loading:"lazy"}))},d=function(e){var t=e.errors,s=void 0===t?[]:t,a=e.className,l=void 0===a?"":a;return(null===s||void 0===s?void 0:s.length)>0&&(0,o.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(l),children:s.join(", ")})},m=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],f=r.forwardRef((function(e,t){var s=e.wrapClassName,r=void 0===s?"":s,n=e.className,i=void 0===n?"":n,c=e.name,x=void 0===c?"":c,f=e.placeholder,u=void 0===f?"":f,p=e.type,h=void 0===p?"text":p,g=(e.children,e.errors),v=void 0===g?[]:g,b=e.label,j=void 0===b?"":b,w=e.prefix,y=e.suffix,N=e.onChange,R=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,m));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"".concat(r," \n               \n               \n              "),children:[!!j&&j,!!w&&w,(0,o.jsx)("input",(0,a.Z)({ref:t,className:"".concat(i," bg-transparent border-0"),type:h,name:x,onChange:function(e){var t;N&&N(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:u},R)),!!y&&y]}),!!v&&(0,o.jsx)(d,{errors:v})]})})),u=["className"],p=function(e){var t=e.className,s=(0,l.Z)(e,u);return(0,o.jsx)("div",(0,a.Z)({className:t},s))},h=["children","className"],g=function(e){var t=e.children,s=e.className,r=(0,l.Z)(e,h);return(0,o.jsx)("div",(0,a.Z)((0,a.Z)({className:s},r),{},{children:t}))},v=s(3430),b=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],j=function(e){var t=e.className,s=e.activeCss,n=e.inactiveCss,i=e.sliderRef,c=void 0===i?null:i,x=e.count,d=e.activeIndex,m=e.selectedWrapperCss,f=void 0===m?"":m,u=e.unselectedWrapperCss,p=void 0===u?"":u,h=(0,l.Z)(e,b),g=r.useState(0),j=(0,v.Z)(g,2),w=j[0],y=j[1];return r.useEffect((function(){var e,t,s=null===c||void 0===c||null===(e=c.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;y(s)}),[c]),(0,o.jsx)("div",(0,a.Z)((0,a.Z)({className:t},h),{},{children:Array(x).fill(0).map((function(e,t){var a=d>=t*w&&d<(t+1)*w;return(0,o.jsx)("div",{className:"".concat(a?f:p," "),children:(0,o.jsx)("span",{className:"".concat(a?s:n," slider-indicator"),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.slideTo(t*w)}})},"indicator"+t)}))}))},w=s(1052),y=s.n(w),N=(s(967),["className","items","centerMode","magnifiedIndex","activeSlideCSS"]),R=r.forwardRef((function(e,t){var s=e.className,n=e.items,i=e.centerMode,c=e.magnifiedIndex,x=void 0===c?0:c,d=e.activeSlideCSS,m=void 0===d?"scale-75":d,f=(0,l.Z)(e,N),u=i?n.map((function(e,t){var s;return function(e){return(null===f||void 0===f?void 0:f.activeIndex)+x>=(null===n||void 0===n?void 0:n.length)?e!==(null===f||void 0===f?void 0:f.activeIndex)+x-(null===n||void 0===n?void 0:n.length):e!==f.activeIndex+x}(t)?r.cloneElement(e,(0,a.Z)((0,a.Z)({},e.props),{},{className:[null===(s=e.props)||void 0===s?void 0:s.className,m].filter(Boolean).join(" ")})):r.cloneElement(e)})):n;return(0,o.jsx)("div",{className:s,children:(0,o.jsx)(y(),(0,a.Z)((0,a.Z)({items:u,disableDotsControls:!0,touchTracking:!0},f),{},{disableButtonsControls:!0,infinite:!0,mouseTracking:!0,ref:t}))})})),_=["children","className","size","as"],C={txtRobotoRomanBold32:"font-bold font-roboto",txtRobotoRomanExtraLight36:"font-roboto font-thin",txtRobotoRomanRegular18Gray800:"font-normal font-roboto",txtInterBold20:"font-bold font-inter",txtOpenSans16Yellow900:"font-normal font-opensans",txtGothicA1Thin41:"font-gothica font-light",txtGothicA1Bold32:"font-bold font-gothica",txtOpenSans22:"font-normal font-opensans",txtRobotoRomanBold16:"font-bold font-roboto",txtRobotoRomanLight32:"font-light font-roboto",txtRobotoRomanBold24:"font-bold font-roboto",txtOpenSansRomanSemiBold18:"font-opensans font-semibold",txtRobotoRomanRegular16WhiteA700:"font-normal font-roboto",txtOpenSans16:"font-normal font-opensans",txtOpenSans18:"font-normal font-opensans",txtRobotoRomanBold20:"font-bold font-roboto",txtRobotoRomanBold42:"font-bold font-roboto",txtRobotoRomanExtraLight24:"font-roboto font-thin",txtMontserratBold20:"font-bold font-montserrat",txtInterBold16:"font-bold font-inter",txtRobotoRomanExtraBold48:"font-extrabold font-roboto",txtHelveticaNeueThin48:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14Bluegray400:"font-roboto font-semibold",txtRobotoRomanRegular16:"font-normal font-roboto",txtRobotoRomanRegular18:"font-normal font-roboto",txtRobotoRomanRegular17:"font-normal font-roboto",txtHelveticaNeueThin48WhiteA700:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14:"font-roboto font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal",txtOpenSansRomanSemiBold18Gray900:"font-opensans font-semibold"},I=function(e){var t=e.children,s=e.className,r=void 0===s?"":s,n=e.size,i=e.as,c=(0,l.Z)(e,_),x=i||"p";return(0,o.jsx)(x,(0,a.Z)((0,a.Z)({className:"text-left ".concat(r," ").concat(n&&C[n])},c),{},{children:t}))},z=["className","name","placeholder","children","errors","onChange"],k=r.forwardRef((function(e,t){var s=e.className,r=e.name,n=e.placeholder,i=e.children,c=e.errors,x=e.onChange,m=(0,l.Z)(e,z);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",(0,a.Z)({ref:t,className:"".concat(s),name:r,onChange:function(e){var t;x&&x(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:n},m)),!!c&&(0,o.jsx)(d,{errors:c}),i]})}));k.defaultProps={className:"",name:"",placeholder:""}},464:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(3430),l=s(2791),r=s(7974),o=s(4400);var n=s(2327);function i(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=s(184),x=function(e){var t=l.useRef(null),s=l.useState(0),o=(0,a.Z)(s,2),n=o[0],x=o[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:e.className,children:(0,c.jsxs)("div",{className:"flex md:flex-col flex-row gap-6 items-center justify-between w-full",children:[(0,c.jsx)(r.Ei,{className:"h-6 w-6",src:"images/img_arrowleft.svg",alt:"arrowleft"}),(0,c.jsx)(r.iR,{autoPlay:!0,autoPlayInterval:2e3,activeIndex:n,responsive:{0:{items:1},550:{items:1},1050:{items:2}},onSlideChanged:function(e){x(null===e||void 0===e?void 0:e.item)},ref:t,className:"flex-1 gap-6 max-w-[1080px] w-full",items:i(Array(6)).map((function(){return(0,c.jsx)(l.Fragment,{children:(0,c.jsxs)("div",{className:"bg-gray-100 border border-blue_gray-200 border-solid flex flex-col gap-4 items-start justify-start mx-2.5 p-6 sm:px-5 rounded-lg shadow-bs",children:[(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-4 items-center justify-start w-full",children:[(0,c.jsx)("div",{className:"flex flex-col h-20 items-center justify-start w-20",children:(0,c.jsx)(r.Ei,{className:"h-20 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-20",src:"images/img_image109.png",alt:"image109"})}),(0,c.jsxs)("div",{className:"flex flex-1 flex-col gap-4 items-start justify-start w-full",children:[(0,c.jsx)(r.xv,{className:"text-gray-900 text-xl w-full",size:"txtInterBold20",children:null===e||void 0===e?void 0:e.username1}),(0,c.jsx)(r.xv,{className:"text-base text-orange-700_01 w-full",size:"txtInterBold16",children:null===e||void 0===e?void 0:e.userposition1})]})]}),(0,c.jsxs)("div",{className:"flex flex-col gap-2 items-start justify-start w-full",children:[(0,c.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,c.jsx)(r.xv,{className:"leading-[21.00px] max-w-[480px] md:max-w-full text-base text-gray-800",size:"txtInterRegular16",children:null===e||void 0===e?void 0:e.userdescription1})}),(0,c.jsxs)("div",{className:"flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full",children:[(0,c.jsxs)("div",{className:"flex flex-1 flex-row gap-3 items-start justify-start w-full",children:[(0,c.jsx)(r.zx,{className:"border border-blue_gray-200 border-solid flex flex-1 h-[37px] items-center justify-center p-[9px] rounded-lg w-[37px]",children:(0,c.jsx)(r.Ei,{src:"images/img_linkedin.svg",alt:"linkedin"})}),(0,c.jsx)("div",{className:"border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start p-2 rounded-lg w-[37px]",children:(0,c.jsx)("div",{className:"flex flex-col h-[21px] items-center justify-start w-[21px]",children:(0,c.jsx)(r.Ei,{className:"h-[21px] w-[21px]",src:"images/img_twitter_blue_gray_200.svg",alt:"twitter"})})}),(0,c.jsx)(r.zx,{className:"border border-blue_gray-200 border-solid flex flex-1 h-[37px] items-center justify-center p-2 rounded-lg w-[37px]",children:(0,c.jsx)(r.Ei,{className:"h-[21px]",src:"images/img_facebook_blue_gray_200.svg",alt:"facebook"})})]}),(0,c.jsx)(r.zx,{className:"bg-transparent cursor-pointer font-semibold font-sfprotext min-w-[90px] py-0.5 text-base text-center text-yellow-900",children:null===e||void 0===e?void 0:e.readmorelabel1})]})]})]})},Math.random())})),renderDotsItem:function(e){return e.isActive?(0,c.jsx)("div",{className:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-400 w-2.5"}):(0,c.jsx)("div",{className:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_7f w-2.5",role:"button",tabIndex:0})}}),(0,c.jsx)(r.Ei,{className:"h-6 w-6",src:"images/img_arrowright.svg",alt:"arrowright"})]})})})};x.defaultProps={username:"Kiran Kumar G J",userposition:"Chief Mentor",userdescription:"Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.",readmorelabel:"Read More",username1:"Kiran Kumar G J",userposition1:"Chief Mentor",userdescription1:"Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.",readmorelabel1:"Read More"};var d=x,m=s(3504),f=function(){var e=l.useRef(null),t=l.useState(0),s=(0,a.Z)(t,2),o=s[0];s[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-auto sm:w-full md:w-full",children:(0,c.jsxs)("div",{className:"flex flex-col items-start justify-start w-auto md:w-full",children:[(0,c.jsx)("header",{className:"flex flex-col items-center justify-center md:px-5 w-full",children:(0,c.jsx)("div",{className:"bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] shadow-bs w-full",children:(0,c.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-center justify-between p-4 w-full",children:[(0,c.jsxs)("div",{className:"bg-white-A700 flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-start mb-0.5 md:ml-[0] ml-[67px] w-auto sm:w-full",children:[(0,c.jsx)(r.Ei,{className:"h-[31px] w-[146px]",src:"images/img_group227.svg",alt:"group227"}),(0,c.jsxs)("div",{className:"flex flex-row gap-6 items-start justify-start w-auto",children:[(0,c.jsx)(r.zx,{className:"bg-transparent cursor-pointer font-semibold min-w-[53px] text-center text-gray-900 text-lg",children:(0,c.jsx)("p",{children:(0,c.jsx)(m.OL,{to:"/",children:"Home"})})}),(0,c.jsx)("div",{className:"flex flex-col items-end justify-start w-auto",children:(0,c.jsx)(r.xv,{className:"text-lg text-orange-700 w-auto",size:"txtOpenSansRomanSemiBold18",children:(0,c.jsx)("p",{children:(0,c.jsx)(m.OL,{to:"/homepage",children:"About Us"})})})}),(0,c.jsx)(r.zx,{className:"bg-transparent cursor-pointer font-semibold min-w-[95px] text-center text-gray-900_01 text-lg",children:(0,c.jsx)("p",{children:(0,c.jsx)(m.OL,{to:"/homepagetwo",children:"Contact Us"})})})]})]}),(0,c.jsx)(r.Ei,{className:"h-8 mr-[67px] md:mt-0 mt-0.5 w-[84px]",src:"images/img_frame8471.svg",alt:"frame8471"})]})})}),(0,c.jsxs)("div",{className:"md:px-5 relative w-full",children:[(0,c.jsxs)("div",{className:"absolute bottom-[17%] flex flex-col gap-3 items-start justify-start left-[6%] w-auto",children:[(0,c.jsx)(r.xv,{className:"md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-[436px]",size:"txtGothicA1Bold32",children:"Why we started CreamCollar"}),(0,c.jsx)(r.xv,{className:"leading-[24.00px] max-w-[762px] md:max-w-full text-gray-800 text-lg",size:"txtRobotoRomanRegular18Gray800",children:"With Software defined vehicle set to have a profound impact on Automotive Industry, we decided to take this as a challenge to help young graduates and experienced automotive industry professionals to re-imagine their careers with cloud, data, security and digital business solutions through creating the collaborative ecosystem between Industry and Academia."})]}),(0,c.jsx)("div",{className:"flex flex-col items-center justify-start m-auto relative w-full",children:(0,c.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,c.jsxs)("div",{className:"h-[250px] relative w-full",children:[(0,c.jsxs)("div",{className:"h-[250px] m-auto w-full",children:[(0,c.jsx)(r.Ei,{className:"absolute h-[249px] inset-[0] justify-center m-auto object-cover w-full",src:"images/img_bg3_249x1366.png",alt:"bg3"}),(0,c.jsx)(r.Ei,{className:"absolute h-[250px] inset-y-[0] left-[0] my-auto object-cover w-[62%]",src:"images/img_rectangle11736.png",alt:"rectangle11736"})]}),(0,c.jsxs)("div",{className:"absolute h-[250px] inset-y-[0] my-auto right-[0] w-[87%] md:w-full",children:[(0,c.jsx)(r.Ei,{className:"h-[250px] m-auto object-cover w-full",src:"images/img_image101.png",alt:"image101"}),(0,c.jsx)(r.h1,{className:"absolute bottom-[2%] flex gap-3 h-[3px] md:h-auto left-[39%] w-[76px]",count:4,activeCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5 relative",activeIndex:1,inactiveCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_4c w-2.5 relative",selectedWrapperCss:"inline-block",unselectedWrapperCss:"inline-block"})]})]})})})]}),(0,c.jsx)("div",{className:"bg-white-A700 flex flex-col items-center justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] py-12 w-full",children:(0,c.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-5 h-[291px] md:h-auto items-center justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-gray-100 rounded-[10px] w-full",children:[(0,c.jsx)("div",{className:"bg-teal-50 flex flex-1 flex-col h-[291px] md:h-auto items-center justify-center w-full",children:(0,c.jsx)("div",{className:"flex flex-col items-center justify-start w-auto md:w-full",children:(0,c.jsx)(r.Ei,{className:"h-[291px] sm:h-auto object-cover w-[620px] md:w-full",src:"images/img_image112.png",alt:"image112"})})}),(0,c.jsxs)("div",{className:"bg-gray-100 flex flex-1 flex-col gap-4 h-full items-start justify-center md:px-10 px-12 sm:px-5 w-full",children:[(0,c.jsx)(r.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto",size:"txtRobotoRomanExtraLight36",children:"Expertise"}),(0,c.jsx)(r.xv,{className:"leading-[24.00px] max-w-[508px] md:max-w-full text-gray-900 text-lg",size:"txtInterRegular18",children:"Career and Competencies research for enabling the SDV specific capabilities in every aspiring industry player in the automotive industry within three key innovation themes (i.e) Autonomous, Electric and Connected Vehicle technologies"})]})]})}),(0,c.jsxs)("div",{className:"bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-12 pt-4 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,c.jsx)(r.xv,{className:"text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full",size:"txtRobotoRomanExtraLight36",children:"Our Leadership"}),(0,c.jsx)(d,{className:"flex flex-col font-inter gap-6 items-center justify-start max-w-[1224px] mx-auto sm:px-5 w-full"}),(0,c.jsx)(r.h1,{className:"flex gap-3 h-2.5 items-start justify-start w-[54px]",count:3,activeCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-400 w-2.5",activeIndex:o,inactiveCss:"inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_7f w-2.5",sliderRef:e,selectedWrapperCss:"inline-block",unselectedWrapperCss:"inline-block"})]}),(0,c.jsxs)("div",{className:"flex flex-col font-helveticaneue gap-[-1px] items-start justify-start w-auto md:w-full",children:[(0,c.jsxs)("div",{className:"bg-gray-900 flex flex-col gap-12 items-center justify-start max-w-[1366px] pb-12 pt-16 md:px-10 sm:px-5 px-[71px] w-full",children:[(0,c.jsx)(r.xv,{className:"text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full",size:"txtHelveticaNeueThin48WhiteA700",children:"Contact us"}),(0,c.jsxs)("div",{className:"flex md:flex-col flex-row font-opensans md:gap-10 gap-16 items-start justify-start max-w-[1224px] mx-auto w-full",children:[(0,c.jsxs)("div",{className:"flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[30%] md:w-full",children:[(0,c.jsx)(r.Ei,{className:"h-[39px]",src:"images/img_group227.svg",alt:"frame1000001795"}),(0,c.jsx)("div",{className:"flex flex-col items-start justify-start w-[365px]",children:(0,c.jsx)(r.xv,{className:"max-w-[365px] md:max-w-full text-blue_gray-400 text-lg",size:"txtOpenSans18",children:"Lorem ipsum dolor sit amet consectetur. Enim penatibus eu non elementum mauris vel tempor."})})]}),(0,c.jsxs)("div",{className:"flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full",children:[(0,c.jsx)(r.xv,{className:"text-white-A700 text-xl w-auto",size:"txtRobotoRomanBold20",children:"CreamCollar"}),(0,c.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-auto sm:w-full",children:[(0,c.jsx)(r.xv,{className:"text-blue_gray-400 text-lg",size:"txtRobotoRomanRegular18",children:(0,c.jsxs)(c.Fragment,{children:["xyz, aaa",(0,c.jsx)("br",{}),"aaa, Bangalore"," "]})}),(0,c.jsx)(r.xv,{className:"text-blue_gray-400 text-lg w-auto",size:"txtRobotoRomanRegular18",children:"info@creamcollar.com"})]})]}),(0,c.jsxs)("div",{className:"flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full",children:[(0,c.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-auto",children:[(0,c.jsx)(r.xv,{className:"text-white-A700 text-xl w-auto",size:"txtRobotoRomanBold20",children:"Subscribe"}),(0,c.jsxs)("div",{className:"flex flex-row gap-[-1px] items-start justify-start w-full",children:[(0,c.jsx)(r.II,{name:"frame15965",placeholder:"Email",className:"font-roboto leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full",wrapClassName:"bg-white-A700 border border-gray-300_01 border-solid pl-3 pr-[35px] py-[9px] rounded-bl-md rounded-tl-md w-[70%]",type:"email"}),(0,c.jsx)(r.zx,{className:"bg-yellow-900 cursor-pointer font-semibold font-sfprotext min-w-[114px] py-[9px] rounded-br-md rounded-tr-md text-base text-center text-white-A700_01",children:"Subscribe"})]})]}),(0,c.jsxs)("div",{className:"flex flex-row gap-3 items-start justify-start w-auto",children:[(0,c.jsx)(r.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,c.jsx)(r.Ei,{src:"images/img_linkedin.svg",alt:"linkedin"})}),(0,c.jsx)(r.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-[11px] rounded-[3px] w-11",children:(0,c.jsx)(r.Ei,{className:"h-[21px]",src:"images/img_twitter.svg",alt:"twitter"})}),(0,c.jsx)(r.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,c.jsx)(r.Ei,{className:"h-[21px]",src:"images/img_group.svg",alt:"group"})}),(0,c.jsx)(r.zx,{className:"bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11",children:(0,c.jsx)(r.Ei,{className:"h-[21px]",src:"images/img_facebook.svg",alt:"facebook"})})]})]})]})]}),(0,c.jsxs)("div",{className:"bg-black-900_01 flex sm:flex-col flex-row font-roboto md:gap-10 items-end justify-between max-w-[1366px] md:px-10 sm:px-5 px-[71px] py-[30px] w-full",children:[(0,c.jsx)(r.Ei,{className:"h-[39px] w-[184px]",src:"images/img_group228.svg",alt:"group228"}),(0,c.jsxs)("div",{className:"flex flex-col gap-1 items-end justify-start w-auto",children:[(0,c.jsx)(r.xv,{className:"text-base text-center text-white-A700 w-auto",size:"txtRobotoRomanRegular16WhiteA700",children:"Privacy | Terms of Service"}),(0,c.jsxs)(r.xv,{className:"text-base text-blue_gray-400_01 text-center w-auto",size:"txtRobotoRomanBold16",children:[(0,c.jsx)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:"Copyright"}),(0,c.jsxs)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:[" ","\xa9 2023, All Rights Reserved."]})]})]})]})]})]})})})}}}]);
//# sourceMappingURL=99.369a02f5.chunk.js.map