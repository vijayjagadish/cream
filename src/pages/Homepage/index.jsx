import React from "react";

import { Button, Img, Input, PagerIndicator, Slider, Text } from "components";
import HomePageColumnarrowleft from "components/HomePageColumnarrowleft";
import { NavLink } from "react-router-dom";


const HomepagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] shadow-bs w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between p-4 w-full">
                <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-start mb-0.5 md:ml-[0] ml-[67px] w-auto sm:w-full">
                  <Img
                    className="h-[31px] w-[146px]"
                    src="images/img_group227.svg"
                    alt="group227"
                  />
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Button className="bg-transparent cursor-pointer font-semibold min-w-[53px] text-center text-gray-900 text-lg">
                      <p><NavLink to="/">Home</NavLink></p>
                    </Button>
                    <div className="flex flex-col items-end justify-start w-auto">
                      <Text
                        className="text-lg text-orange-700 w-auto"
                        size="txtOpenSansRomanSemiBold18"
                      >
                        <p><NavLink to="/homepage">About Us</NavLink></p>
                      </Text>
                    </div>
                    <Button className="bg-transparent cursor-pointer font-semibold min-w-[95px] text-center text-gray-900_01 text-lg">
                      <p><NavLink to="/homepagetwo">Contact Us</NavLink></p>
                    </Button>
                  </div>
                </div>
                <Img
                  className="h-8 mr-[67px] md:mt-0 mt-0.5 w-[84px]"
                  src="images/img_frame8471.svg"
                  alt="frame8471"
                />
              </div>
            </div>
          </header>
          <div className="md:px-5 relative w-full">
            <div className="absolute bottom-[17%] flex flex-col gap-3 items-start justify-start left-[6%] w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-[436px]"
                size="txtGothicA1Bold32"
              >
                Why we started CreamCollar
              </Text>
              <Text
                className="leading-[24.00px] max-w-[762px] md:max-w-full text-gray-800 text-lg"
                size="txtRobotoRomanRegular18Gray800"
              >
                With Software defined vehicle set to have a profound impact on
                Automotive Industry, we decided to take this as a challenge to
                help young graduates and experienced automotive industry
                professionals to re-imagine their careers with cloud, data,
                security and digital business solutions through creating the
                collaborative ecosystem between Industry and Academia.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start m-auto relative w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[250px] relative w-full">
                  <div className="h-[250px] m-auto w-full">
                    <Img
                      className="absolute h-[249px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_bg3_249x1366.png"
                      alt="bg3"
                    />
                    <Img
                      className="absolute h-[250px] inset-y-[0] left-[0] my-auto object-cover w-[62%]"
                      src="images/img_rectangle11736.png"
                      alt="rectangle11736"
                    />
                  </div>
                  <div className="absolute h-[250px] inset-y-[0] my-auto right-[0] w-[87%] md:w-full">
                    <Img
                      className="h-[250px] m-auto object-cover w-full"
                      src="images/img_image101.png"
                      alt="image101"
                    />
                    <PagerIndicator
                      className="absolute bottom-[2%] flex gap-3 h-[3px] md:h-auto left-[39%] w-[76px]"
                      count={4}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5 relative"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_4c w-2.5 relative"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] py-12 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 h-[291px] md:h-auto items-center justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-gray-100 rounded-[10px] w-full">
              <div className="bg-teal-50 flex flex-1 flex-col h-[291px] md:h-auto items-center justify-center w-full">
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <Img
                    className="h-[291px] sm:h-auto object-cover w-[620px] md:w-full"
                    src="images/img_image112.png"
                    alt="image112"
                  />
                </div>
              </div>
              <div className="bg-gray-100 flex flex-1 flex-col gap-4 h-full items-start justify-center md:px-10 px-12 sm:px-5 w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-auto"
                  size="txtRobotoRomanExtraLight36"
                >
                  Expertise
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[508px] md:max-w-full text-gray-900 text-lg"
                  size="txtInterRegular18"
                >
                  Career and Competencies research for enabling the SDV specific
                  capabilities in every aspiring industry player in the
                  automotive industry within three key innovation themes (i.e)
                  Autonomous, Electric and Connected Vehicle technologies
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-12 pt-4 md:px-10 sm:px-5 px-[71px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRobotoRomanExtraLight36"
            >
              Our Leadership
            </Text>
            <HomePageColumnarrowleft className="flex flex-col font-inter gap-6 items-center justify-start max-w-[1224px] mx-auto sm:px-5 w-full" />
            <PagerIndicator
              className="flex gap-3 h-2.5 items-start justify-start w-[54px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-400 w-2.5"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_7f w-2.5"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="flex flex-col font-helveticaneue gap-[-1px] items-start justify-start w-auto md:w-full">
            <div className="bg-gray-900 flex flex-col gap-12 items-center justify-start max-w-[1366px] pb-12 pt-16 md:px-10 sm:px-5 px-[71px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
                size="txtHelveticaNeueThin48WhiteA700"
              >
                Contact us
              </Text>
              <div className="flex md:flex-col flex-row font-opensans md:gap-10 gap-16 items-start justify-start max-w-[1224px] mx-auto w-full">
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[30%] md:w-full">
                  <Img
                    className="h-[39px]"
                    src="images/img_group227.svg"
                    alt="frame1000001795"
                  />
                  <div className="flex flex-col items-start justify-start w-[365px]">
                    <Text
                      className="max-w-[365px] md:max-w-full text-blue_gray-400 text-lg"
                      size="txtOpenSans18"
                    >
                      Lorem ipsum dolor sit amet consectetur. Enim penatibus eu
                      non elementum mauris vel tempor.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtRobotoRomanBold20"
                  >
                    CreamCollar
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtRobotoRomanRegular18"
                    >
                      <>
                        xyz, aaa
                        <br />
                        aaa, Bangalore{" "}
                      </>
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-lg w-auto"
                      size="txtRobotoRomanRegular18"
                    >
                      info@creamcollar.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col font-roboto gap-6 items-start justify-start pt-4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-white-A700 text-xl w-auto"
                      size="txtRobotoRomanBold20"
                    >
                      Subscribe
                    </Text>
                    <div className="flex flex-row gap-[-1px] items-start justify-start w-full">
                      <Input
                        name="frame15965"
                        placeholder="Email"
                        className="font-roboto leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left text-white-A700 w-full"
                        wrapClassName="bg-white-A700 border border-gray-300_01 border-solid pl-3 pr-[35px] py-[9px] rounded-bl-md rounded-tl-md w-[70%]"
                        type="email"
                      ></Input>
                      <Button className="bg-yellow-900 cursor-pointer font-semibold font-sfprotext min-w-[114px] py-[9px] rounded-br-md rounded-tr-md text-base text-center text-white-A700_01">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Button className="bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11">
                      <Img src="images/img_linkedin.svg" alt="linkedin" />
                    </Button>
                    <Button className="bg-gray-800 flex h-11 items-center justify-center p-[11px] rounded-[3px] w-11">
                      <Img
                        className="h-[21px]"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                    <Button className="bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11">
                      <Img
                        className="h-[21px]"
                        src="images/img_group.svg"
                        alt="group"
                      />
                    </Button>
                    <Button className="bg-gray-800 flex h-11 items-center justify-center p-2.5 rounded-[3px] w-11">
                      <Img
                        className="h-[21px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black-900_01 flex sm:flex-col flex-row font-roboto md:gap-10 items-end justify-between max-w-[1366px] md:px-10 sm:px-5 px-[71px] py-[30px] w-full">
              <Img
                className="h-[39px] w-[184px]"
                src="images/img_group228.svg"
                alt="group228"
              />
              <div className="flex flex-col gap-1 items-end justify-start w-auto">
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtRobotoRomanRegular16WhiteA700"
                >
                  Privacy | Terms of Service
                </Text>
                <Text
                  className="text-base text-blue_gray-400_01 text-center w-auto"
                  size="txtRobotoRomanBold16"
                >
                  <span className="text-blue_gray-400_01 font-roboto font-normal">
                    Copyright
                  </span>
                  <span className="text-blue_gray-400_01 font-roboto font-normal">
                    {" "}
                    © 2023, All Rights Reserved.
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
