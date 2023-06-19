import React from "react";

const sizeClasses = {
  txtRobotoRomanBold32: "font-bold font-roboto",
  txtRobotoRomanExtraLight36: "font-roboto font-thin",
  txtRobotoRomanRegular18Gray800: "font-normal font-roboto",
  txtInterBold20: "font-bold font-inter",
  txtOpenSans16Yellow900: "font-normal font-opensans",
  txtGothicA1Thin41: "font-gothica font-light",
  txtGothicA1Bold32: "font-bold font-gothica",
  txtOpenSans22: "font-normal font-opensans",
  txtRobotoRomanBold16: "font-bold font-roboto",
  txtRobotoRomanLight32: "font-light font-roboto",
  txtRobotoRomanBold24: "font-bold font-roboto",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtRobotoRomanRegular16WhiteA700: "font-normal font-roboto",
  txtOpenSans16: "font-normal font-opensans",
  txtOpenSans18: "font-normal font-opensans",
  txtRobotoRomanBold20: "font-bold font-roboto",
  txtRobotoRomanBold42: "font-bold font-roboto",
  txtRobotoRomanExtraLight24: "font-roboto font-thin",
  txtMontserratBold20: "font-bold font-montserrat",
  txtInterBold16: "font-bold font-inter",
  txtRobotoRomanExtraBold48: "font-extrabold font-roboto",
  txtHelveticaNeueThin48: "font-helveticaneue font-thin",
  txtRobotoRomanSemiBold14Bluegray400: "font-roboto font-semibold",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtRobotoRomanRegular17: "font-normal font-roboto",
  txtHelveticaNeueThin48WhiteA700: "font-helveticaneue font-thin",
  txtRobotoRomanSemiBold14: "font-roboto font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
  txtOpenSansRomanSemiBold18Gray900: "font-opensans font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
