"use strict";(self.webpackChunkcreamcollar=self.webpackChunkcreamcollar||[]).push([[650],{7974:function(e,t,a){a.d(t,{zx:function(){return i},Ei:function(){return x},II:function(){return f},x1:function(){return p},aV:function(){return g},h1:function(){return j},iR:function(){return R},xv:function(){return C},Kx:function(){return B}});var s=a(8489),o=a(3738),l=a(2791),r=a(184),n=["children","className","leftIcon","rightIcon","shape","size","variant","color"],i=function(e){var t=e.children,a=e.className,l=void 0===a?"":a,i=e.leftIcon,c=e.rightIcon,x=(e.shape,e.size,e.variant,e.color,(0,o.Z)(e,n));return(0,r.jsxs)("button",(0,s.Z)((0,s.Z)({className:"".concat(l)},x),{},{children:[!!i&&i,t,!!c&&c]}))},c=["className","src","alt"],x=function(e){var t=e.className,a=e.src,l=void 0===a?"defaultNoData.png":a,n=e.alt,i=void 0===n?"testImg":n,x=(0,o.Z)(e,c);return(0,r.jsx)("img",(0,s.Z)((0,s.Z)({className:t,src:l,alt:i},x),{},{loading:"lazy"}))},m=function(e){var t=e.errors,a=void 0===t?[]:t,s=e.className,o=void 0===s?"":s;return(null===a||void 0===a?void 0:a.length)>0&&(0,r.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(o),children:a.join(", ")})},d=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],f=l.forwardRef((function(e,t){var a=e.wrapClassName,l=void 0===a?"":a,n=e.className,i=void 0===n?"":n,c=e.name,x=void 0===c?"":c,f=e.placeholder,u=void 0===f?"":f,p=e.type,h=void 0===p?"text":p,g=(e.children,e.errors),v=void 0===g?[]:g,b=e.label,j=void 0===b?"":b,w=e.prefix,N=e.suffix,y=e.onChange,R=(e.shape,e.size,e.variant,e.color,(0,o.Z)(e,d));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"".concat(l," \n               \n               \n              "),children:[!!j&&j,!!w&&w,(0,r.jsx)("input",(0,s.Z)({ref:t,className:"".concat(i," bg-transparent border-0"),type:h,name:x,onChange:function(e){var t;y&&y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:u},R)),!!N&&N]}),!!v&&(0,r.jsx)(m,{errors:v})]})})),u=["className"],p=function(e){var t=e.className,a=(0,o.Z)(e,u);return(0,r.jsx)("div",(0,s.Z)({className:t},a))},h=["children","className"],g=function(e){var t=e.children,a=e.className,l=(0,o.Z)(e,h);return(0,r.jsx)("div",(0,s.Z)((0,s.Z)({className:a},l),{},{children:t}))},v=a(3430),b=["className","activeCss","inactiveCss","sliderRef","count","activeIndex","selectedWrapperCss","unselectedWrapperCss"],j=function(e){var t=e.className,a=e.activeCss,n=e.inactiveCss,i=e.sliderRef,c=void 0===i?null:i,x=e.count,m=e.activeIndex,d=e.selectedWrapperCss,f=void 0===d?"":d,u=e.unselectedWrapperCss,p=void 0===u?"":u,h=(0,o.Z)(e,b),g=l.useState(0),j=(0,v.Z)(g,2),w=j[0],N=j[1];return l.useEffect((function(){var e,t,a=null===c||void 0===c||null===(e=c.current)||void 0===e||null===(t=e.state)||void 0===t?void 0:t.itemsInSlide;N(a)}),[c]),(0,r.jsx)("div",(0,s.Z)((0,s.Z)({className:t},h),{},{children:Array(x).fill(0).map((function(e,t){var s=m>=t*w&&m<(t+1)*w;return(0,r.jsx)("div",{className:"".concat(s?f:p," "),children:(0,r.jsx)("span",{className:"".concat(s?a:n," slider-indicator"),onClick:function(){var e;return null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.slideTo(t*w)}})},"indicator"+t)}))}))},w=a(1052),N=a.n(w),y=(a(967),["className","items","centerMode","magnifiedIndex","activeSlideCSS"]),R=l.forwardRef((function(e,t){var a=e.className,n=e.items,i=e.centerMode,c=e.magnifiedIndex,x=void 0===c?0:c,m=e.activeSlideCSS,d=void 0===m?"scale-75":m,f=(0,o.Z)(e,y),u=i?n.map((function(e,t){var a;return function(e){return(null===f||void 0===f?void 0:f.activeIndex)+x>=(null===n||void 0===n?void 0:n.length)?e!==(null===f||void 0===f?void 0:f.activeIndex)+x-(null===n||void 0===n?void 0:n.length):e!==f.activeIndex+x}(t)?l.cloneElement(e,(0,s.Z)((0,s.Z)({},e.props),{},{className:[null===(a=e.props)||void 0===a?void 0:a.className,d].filter(Boolean).join(" ")})):l.cloneElement(e)})):n;return(0,r.jsx)("div",{className:a,children:(0,r.jsx)(N(),(0,s.Z)((0,s.Z)({items:u,disableDotsControls:!0,touchTracking:!0},f),{},{disableButtonsControls:!0,infinite:!0,mouseTracking:!0,ref:t}))})})),S=["children","className","size","as"],_={txtRobotoRomanBold32:"font-bold font-roboto",txtRobotoRomanExtraLight36:"font-roboto font-thin",txtRobotoRomanRegular18Gray800:"font-normal font-roboto",txtInterBold20:"font-bold font-inter",txtOpenSans16Yellow900:"font-normal font-opensans",txtGothicA1Thin41:"font-gothica font-light",txtGothicA1Bold32:"font-bold font-gothica",txtOpenSans22:"font-normal font-opensans",txtRobotoRomanBold16:"font-bold font-roboto",txtRobotoRomanLight32:"font-light font-roboto",txtRobotoRomanBold24:"font-bold font-roboto",txtOpenSansRomanSemiBold18:"font-opensans font-semibold",txtRobotoRomanRegular16WhiteA700:"font-normal font-roboto",txtOpenSans16:"font-normal font-opensans",txtOpenSans18:"font-normal font-opensans",txtRobotoRomanBold20:"font-bold font-roboto",txtRobotoRomanBold42:"font-bold font-roboto",txtRobotoRomanExtraLight24:"font-roboto font-thin",txtMontserratBold20:"font-bold font-montserrat",txtInterBold16:"font-bold font-inter",txtRobotoRomanExtraBold48:"font-extrabold font-roboto",txtHelveticaNeueThin48:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14Bluegray400:"font-roboto font-semibold",txtRobotoRomanRegular16:"font-normal font-roboto",txtRobotoRomanRegular18:"font-normal font-roboto",txtRobotoRomanRegular17:"font-normal font-roboto",txtHelveticaNeueThin48WhiteA700:"font-helveticaneue font-thin",txtRobotoRomanSemiBold14:"font-roboto font-semibold",txtInterRegular16:"font-inter font-normal",txtInterRegular18:"font-inter font-normal",txtOpenSansRomanSemiBold18Gray900:"font-opensans font-semibold"},C=function(e){var t=e.children,a=e.className,l=void 0===a?"":a,n=e.size,i=e.as,c=(0,o.Z)(e,S),x=i||"p";return(0,r.jsx)(x,(0,s.Z)((0,s.Z)({className:"text-left ".concat(l," ").concat(n&&_[n])},c),{},{children:t}))},Z=["className","name","placeholder","children","errors","onChange"],B=l.forwardRef((function(e,t){var a=e.className,l=e.name,n=e.placeholder,i=e.children,c=e.errors,x=e.onChange,d=(0,o.Z)(e,Z);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("textarea",(0,s.Z)({ref:t,className:"".concat(a),name:l,onChange:function(e){var t;x&&x(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:n},d)),!!c&&(0,r.jsx)(m,{errors:c}),i]})}));B.defaultProps={className:"",name:"",placeholder:""}},1443:function(e,t,a){a.r(t);var s=a(1916),o=(a(2791),a(7974)),l=a(184);t.default=function(){var e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"bg-white-A700 font-roboto h-[901px] mx-auto relative w-full",children:[(0,l.jsxs)("div",{className:"absolute md:h-[1075px] h-[869px] inset-[0] justify-center m-auto md:px-5 w-full",children:[(0,l.jsx)("div",{className:"absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-full",children:(0,l.jsx)(o.Ei,{className:"h-[640px]",src:"images/img_maskgroup_blue_gray_50.svg",alt:"maskgroup"})}),(0,l.jsx)(o.Ei,{className:"absolute h-[630px] left-[0] object-cover top-[7%] w-[64%]",src:"images/img_adobestock3785_630x868.png",alt:"adobestock3785"}),(0,l.jsxs)("div",{className:"absolute md:h-[1075px] h-[869px] inset-[0] justify-center m-auto w-full",children:[(0,l.jsx)(o.Ei,{className:"h-[869px] m-auto object-cover w-full",src:"images/img_image15.png",alt:"imageFifteen"}),(0,l.jsxs)("div",{className:"absolute flex flex-col gap-[31px] inset-x-[0] items-start justify-start mx-auto top-[10%] w-[90%]",children:[(0,l.jsx)(o.xv,{className:"ml-0.5 md:ml-[0] sm:text-[32px] md:text-[38px] text-[42px] text-black-900",size:"txtRobotoRomanBold42",children:"Contact Us"}),(0,l.jsxs)("div",{className:"bg-white-A700 flex md:flex-col flex-row font-montserrat md:gap-10 gap-[76px] items-start justify-evenly p-[47px] md:px-10 sm:px-5 rounded-[30px] shadow-bs2 w-full",children:[(0,l.jsxs)("div",{className:"flex sm:flex-1 flex-col gap-7 items-start justify-start mb-[5px] w-[440px] sm:w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-3 items-start justify-start w-full",children:[(0,l.jsx)(o.xv,{className:"text-black-900 text-xl w-auto",size:"txtMontserratBold20",children:"How can we help?"}),(0,l.jsx)(o.xv,{className:"max-w-[440px] md:max-w-full text-base text-black-900",size:"txtOpenSans16",children:"Lorem ipsum dolor sit amet consectetur. Enim ut porttitor leo felis egestas ut purus Lorem ipsum dolor sit amet consectetur."})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-full",children:[(0,l.jsx)(o.II,{name:"textfield",placeholder:"Name *",className:"font-montserrat p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full",wrapClassName:"border border-blue_gray-200 border-solid pl-4 pr-[35px] py-[9px] w-full",type:"text"}),(0,l.jsx)(o.II,{name:"textfield_One",placeholder:"Email *",className:"font-roboto p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full",wrapClassName:"border border-blue_gray-200 border-solid pl-4 pr-[35px] py-2.5 w-full",type:"email"}),(0,l.jsx)(o.II,{name:"language",placeholder:"Phone number ",className:"font-roboto p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full",wrapClassName:"border border-blue_gray-200 border-solid pl-4 pr-[35px] py-2.5 w-full",type:"number"}),(0,l.jsx)(o.Kx,(e={className:"border border-blue_gray-200 border-solid flex h-[101px] px-4 py-2 w-full",name:"dropdown",placeholder:"Add your message"},(0,s.Z)(e,"name","dropdown"),(0,s.Z)(e,"placeholder","Add your message"),e)),(0,l.jsx)("div",{className:"flex flex-col font-montserrat items-start justify-start w-full",children:(0,l.jsx)(o.zx,{className:"bg-yellow-900 capitalize cursor-pointer font-bold leading-[normal] py-[9px] text-base text-center text-white-A700 w-[116px]",children:"Send"})})]})]}),(0,l.jsxs)("div",{className:"flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-4 items-start justify-start w-auto sm:w-full",children:[(0,l.jsx)(o.xv,{className:"text-black-900 text-xl w-auto",size:"txtMontserratBold20",children:"Reach us"}),(0,l.jsxs)("div",{className:"flex sm:flex-col flex-row font-roboto gap-12 h-[60px] md:h-auto items-start justify-start w-auto sm:w-full",children:[(0,l.jsxs)(o.aV,{className:"sm:flex-col flex-row gap-12 grid grid-cols-2 w-[63%] sm:w-full",orientation:"horizontal",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-3 items-start justify-start w-auto",children:[(0,l.jsxs)("div",{className:"flex flex-row font-roboto gap-3 items-center justify-start w-auto",children:[(0,l.jsx)(o.Ei,{className:"h-5 w-5",src:"images/img_call.svg",alt:"call"}),(0,l.jsx)("div",{className:"flex flex-col items-start justify-start pt-1 w-auto",children:(0,l.jsx)(o.xv,{className:"text-gray-600_01 text-sm tracking-[0.28px] w-auto",size:"txtRobotoRomanSemiBold14",children:"Phone"})})]}),(0,l.jsx)(o.xv,{className:"text-base text-yellow-900 w-auto",size:"txtOpenSans16Yellow900",children:"03 5432 1234"})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 items-start justify-start w-auto",children:[(0,l.jsxs)("div",{className:"flex flex-row font-roboto gap-3 items-start justify-start w-auto",children:[(0,l.jsx)(o.Ei,{className:"h-5 w-5",src:"images/img_frame833.svg",alt:"frame833"}),(0,l.jsx)("div",{className:"flex flex-col items-start justify-start pt-1 w-auto",children:(0,l.jsx)(o.xv,{className:"capitalize text-blue_gray-400 text-sm tracking-[0.28px] w-auto",size:"txtRobotoRomanSemiBold14Bluegray400",children:"Email"})})]}),(0,l.jsx)(o.xv,{className:"text-base text-yellow-900 tracking-[0.32px] w-auto",size:"txtOpenSans16Yellow900",children:"info@creamcollar.com"})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 items-start justify-start w-auto",children:[(0,l.jsxs)("div",{className:"flex flex-row gap-3 items-start justify-start w-auto",children:[(0,l.jsx)(o.Ei,{className:"h-5 w-5",src:"images/img_frame833.svg",alt:"frame833"}),(0,l.jsx)("div",{className:"flex flex-col items-start justify-start pt-1 w-auto",children:(0,l.jsx)(o.xv,{className:"capitalize text-blue_gray-400 text-sm tracking-[0.28px] w-auto",size:"txtRobotoRomanSemiBold14Bluegray400",children:"Social Media"})})]}),(0,l.jsx)(o.Ei,{className:"h-7 w-[148px]",src:"images/img_frame15973.svg",alt:"frame15973"})]})]})]}),(0,l.jsx)(o.Ei,{className:"h-[268px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[549px] sm:w-full",src:"images/img_component6.png",alt:"componentSix"})]})]})]})]})]}),(0,l.jsx)("header",{className:"absolute flex font-opensans inset-x-[0] items-center justify-center mx-auto md:px-5 shadow-bs top-[0] w-full",children:(0,l.jsx)("div",{className:"bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] w-full",children:(0,l.jsxs)("div",{className:"flex md:flex-col flex-row md:gap-10 items-center justify-between p-4 w-full",children:[(0,l.jsxs)("div",{className:"bg-white-A700 flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-start mb-0.5 md:ml-[0] ml-[67px] w-auto sm:w-full",children:[(0,l.jsx)(o.Ei,{className:"h-[31px] w-[146px]",src:"images/img_group227.svg",alt:"group227"}),(0,l.jsxs)("div",{className:"flex flex-row gap-6 items-start justify-start w-auto",children:[(0,l.jsx)(o.zx,{className:"bg-transparent cursor-pointer font-semibold min-w-[53px] text-center text-gray-900 text-lg",children:"Home"}),(0,l.jsx)("div",{className:"flex flex-col items-end justify-start w-auto",children:(0,l.jsx)(o.xv,{className:"text-gray-900 text-lg w-auto",size:"txtOpenSansRomanSemiBold18Gray900",children:"About Us"})}),(0,l.jsx)("div",{className:"flex flex-col items-end justify-start w-auto",children:(0,l.jsx)("a",{href:"javascript:",className:"text-lg text-orange-700 w-auto",children:(0,l.jsx)(o.xv,{size:"txtOpenSansRomanSemiBold18",children:"Contact Us"})})})]})]}),(0,l.jsx)(o.Ei,{className:"h-8 mr-[67px] md:mt-0 mt-0.5 w-[84px]",src:"images/img_frame8471.svg",alt:"frame8471"})]})})}),(0,l.jsx)("footer",{className:"absolute bg-black-900_01 bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto md:px-5 w-full",children:(0,l.jsxs)("div",{className:"flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-[49px] mr-[103px] my-[30px] w-[89%]",children:[(0,l.jsx)(o.Ei,{className:"h-8",src:"images/img_group144.svg",alt:"group144"}),(0,l.jsxs)("div",{className:"flex flex-col gap-1 items-end justify-start w-auto",children:[(0,l.jsx)(o.xv,{className:"text-base text-center text-white-A700 w-auto",size:"txtRobotoRomanRegular16WhiteA700",children:"Privacy | Terms of Service"}),(0,l.jsxs)(o.xv,{className:"text-base text-blue_gray-400_01 text-center w-auto",size:"txtRobotoRomanBold16",children:[(0,l.jsx)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:"Copyright"}),(0,l.jsxs)("span",{className:"text-blue_gray-400_01 font-roboto font-normal",children:[" ","\xa9 2023, All Rights Reserved."]})]})]})]})})]})})}}}]);
//# sourceMappingURL=650.345d556e.chunk.js.map