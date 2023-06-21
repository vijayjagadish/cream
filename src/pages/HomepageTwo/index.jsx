import React from "react";

import { Button, Img, Input, List, Text, TextArea } from "components";

import { NavLink } from "react-router-dom";

const Menu = () =>(
  <>
    <p><NavLink to="/">Home</NavLink></p>
    <p><NavLink to="/homepage">About Us</NavLink></p>
    <p><NavLink to="/homepagetwo">Contact Us</NavLink></p>
  </>
)

const HomepageTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 font-roboto h-[901px] mx-auto relative w-full">
        <div className="absolute md:h-[1075px] h-[869px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="absolute bg-gradient1  flex flex-col inset-x-[0] items-center justify-start mx-auto top-[6%] w-full">
            <Img
              className="h-[640px]"
              src="images/img_maskgroup_blue_gray_50.svg"
              alt="maskgroup"
            />
          </div>
          <Img
            className="absolute h-[630px] left-[0] object-cover top-[7%] w-[64%]"
            src="images/img_adobestock3785_630x868.png"
            alt="adobestock3785"
          />
          <div className="absolute md:h-[1075px] h-[869px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[869px] m-auto object-cover w-full"
              src="images/img_image15.png"
              alt="imageFifteen"
            />
            <div className="absolute flex flex-col gap-[31px] inset-x-[0] items-start justify-start mx-auto top-[10%] w-[90%]">
              <Text
                className="ml-0.5 md:ml-[0] sm:text-[32px] md:text-[38px] text-[42px] text-black-900"
                size="txtRobotoRomanBold42"
              >
                Contact Us
              </Text>
              <div className="bg-white-A700 flex md:flex-col flex-row font-montserrat md:gap-10 gap-[76px] items-start justify-evenly p-[47px] md:px-10 sm:px-5 rounded-[30px] shadow-bs2 w-full">
                <div className="flex sm:flex-1 flex-col gap-7 items-start justify-start mb-[5px] w-[440px] sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratBold20"
                    >
                      How can we help?
                    </Text>
                    <Text
                      className="max-w-[440px] md:max-w-full text-base text-black-900"
                      size="txtOpenSans16"
                    >
                      Lorem ipsum dolor sit amet consectetur. Enim ut porttitor
                      leo felis egestas ut purus Lorem ipsum dolor sit amet
                      consectetur.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Input
                      name="textfield"
                      placeholder="Name *"
                      className="font-montserrat p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full"
                      wrapClassName="border border-blue_gray-200 border-solid pl-4 pr-[35px] py-[9px] w-full"
                      type="text"
                    ></Input>
                    <Input
                      name="textfield_One"
                      placeholder="Email *"
                      className="font-roboto p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full"
                      wrapClassName="border border-blue_gray-200 border-solid pl-4 pr-[35px] py-2.5 w-full"
                      type="email"
                    ></Input>
                    <Input
                      name="language"
                      placeholder="Phone number "
                      className="font-roboto p-0 placeholder:text-gray-900 sm:pr-5 text-base text-gray-900 text-left tracking-[0.16px] w-full"
                      wrapClassName="border border-blue_gray-200 border-solid pl-4 pr-[35px] py-2.5 w-full"
                      type="number"
                    ></Input>
                    <TextArea
                      className="border border-blue_gray-200 border-solid flex h-[101px] px-4 py-2 w-full"
                      name="dropdown"
                      placeholder="Add your message"
                      
                      
                    ></TextArea>
                    <div className="flex flex-col font-montserrat items-start justify-start w-full">
                      <Button className="bg-yellow-900 capitalize cursor-pointer font-bold leading-[normal] py-[9px] text-base text-center text-white-A700 w-[116px]">
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-black-900 text-xl w-auto"
                      size="txtMontserratBold20"
                    >
                      Reach us
                    </Text>
                    <div className="flex sm:flex-col flex-row font-roboto gap-12 h-[60px] md:h-auto items-start justify-start w-auto sm:w-full">
                      <List
                        className="sm:flex-col flex-row gap-12 grid grid-cols-2 w-[63%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-row font-roboto gap-3 items-center justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <div className="flex flex-col items-start justify-start pt-1 w-auto">
                              <Text
                                className="text-gray-600_01 text-sm tracking-[0.28px] w-auto"
                                size="txtRobotoRomanSemiBold14"
                              >
                                Phone
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-yellow-900 w-auto"
                            size="txtOpenSans16Yellow900"
                          >
                            03 5432 1234
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-auto">
                          <div className="flex flex-row font-roboto gap-3 items-start justify-start w-auto">
                            <Img
                              className="h-5 w-5"
                              src="images/img_frame833.svg"
                              alt="frame833"
                            />
                            <div className="flex flex-col items-start justify-start pt-1 w-auto">
                              <Text
                                className="capitalize text-blue_gray-400 text-sm tracking-[0.28px] w-auto"
                                size="txtRobotoRomanSemiBold14Bluegray400"
                              >
                                Email
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-yellow-900 tracking-[0.32px] w-auto"
                            size="txtOpenSans16Yellow900"
                          >
                            info@creamcollar.com
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto">
                        <div className="flex flex-row gap-3 items-start justify-start w-auto">
                          <Img
                            className="h-5 w-5"
                            src="images/img_frame833.svg"
                            alt="frame833"
                          />
                          <div className="flex flex-col items-start justify-start pt-1 w-auto">
                            <Text
                              className="capitalize text-blue_gray-400 text-sm tracking-[0.28px] w-auto"
                              size="txtRobotoRomanSemiBold14Bluegray400"
                            >
                              Social Media
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-7 w-[148px]"
                          src="images/img_frame15973.svg"
                          alt="frame15973"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-[268px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[549px] sm:w-full"
                    src="images/img_component6.png"
                    alt="componentSix"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <header className="absolute flex font-opensans inset-x-[0] items-center justify-center mx-auto md:px-5 shadow-bs top-[0] w-full">
          <div className="bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] w-full">
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
                      className="text-gray-900 text-lg w-auto"
                      size="txtOpenSansRomanSemiBold18Gray900"
                    >
                      <p><NavLink to="/homepage">About Us</NavLink></p>
                    </Text>
                  </div>
                  <div className="flex flex-col items-end justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-lg text-orange-700 w-auto"
                    >
                      <Text size="txtOpenSansRomanSemiBold18">
                        <p><NavLink to="/homepagetwo">Contact Us</NavLink></p>  
                      </Text>
                    </a>
                  </div>
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
        <footer className="absolute bg-black-900_01 bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between ml-[49px] mr-[103px] my-[30px] w-[89%]">
            <Img className="h-8" src="images/img_group144.svg" alt="group144" />
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
        </footer>
      </div>
    </>
  );
};

export default HomepageTwoPage;
