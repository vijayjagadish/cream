import React from "react";

import { Button, Img, PagerIndicator, Text } from "components";

const HomePageOneColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[649px] relative w-full">
            <div className="h-[649px] m-auto w-full">
              <Img
                className="h-[649px] m-auto object-cover w-full"
                src="images/img_bg3.png"
                alt="bg3"
              />
              <Img
                className="absolute h-[577px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_bg4.png"
                alt="bg4"
              />
            </div>
            <div className="absolute h-[640px] inset-y-[0] left-[0] my-auto w-[64%] md:w-full">
              <Img
                className="h-[640px] m-auto object-cover w-full"
                src="images/img_adobestock3785.png"
                alt="adobestock3785"
              />
              <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[157px] justify-start left-[11%] w-[73%]">
                <div className="flex flex-col items-center justify-start mr-2.5 w-[99%] md:w-full">
                  <div className="flex flex-col gap-[29px] items-start justify-start w-[617px] md:w-full">
                    <div className="flex flex-col h-[201px] md:h-auto items-start justify-start w-full">
                      {props?.userdescription}
                    </div>
                    <Button className="bg-yellow-900 cursor-pointer font-semibold font-sfprotext min-w-[139px] py-[9px] rounded-md text-base text-center text-white-A700_01">
                      {props?.learnmorebutton}
                    </Button>
                  </div>
                </div>
                <PagerIndicator
                  className="flex gap-3 h-2.5 items-start justify-start md:ml-[0] ml-[551px] w-[76px]"
                  count={4}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_4c w-2.5"
                  selectedWrapperCss="inline-block"
                  unselectedWrapperCss="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomePageOneColumnOne.defaultProps = {
  userdescription: (
    <Text
      className="leading-[66.00px] max-w-[617px] md:max-w-full sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
      size="txtGothicA1Thin41"
    >
      <span className="text-orange-400 font-gothica text-left font-bold">
        Competency Research
      </span>
      <span className="text-white-A700 font-gothica text-left font-light">
        <>
          {" "}
          for <br />
          newer capabilities of <br />
        </>
      </span>
      <span className="text-white-A700 font-gothica text-left font-bold">
        Software defined Industries{" "}
      </span>
      <span className="text-white-A700 font-gothica text-left font-light">
        <>
          <br />
          <br />
          Frictionless experience for Graduating students and Professionals to
          decide on building their careers of choice
        </>
      </span>
    </Text>
  ),
  learnmorebutton: "Learn More",
};

export default HomePageOneColumnOne;
