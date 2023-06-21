import React from "react";

import { NavLink } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import HomePageOneColumnOne from "components/HomePageOneColumnOne";

const Menu = () =>(
  <>
    <p><NavLink to="/">Home</NavLink></p>
    <p><NavLink to="/homepage">About</NavLink></p>
    <p><NavLink to="/homepagetwo">Contact</NavLink></p>
  </>
)

const HomepageOnePage = () => {

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-opensans items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <header className="flex items-center justify-center md:px-5 shadow-bs w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-center max-w-[1366px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between p-4 w-full">
                <div className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row sm:gap-10 gap-[100px] items-center justify-start mb-0.5 md:ml-[0] ml-[67px] w-auto sm:w-full">
                  <Img
                    className="h-[31px] w-[146px]"
                    src="images/img_group227.svg"
                    alt="group227"
                  />
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <Button className="bg-transparent cursor-pointer font-semibold min-w-[53px] text-center text-lg text-orange-700_01">
                      <p><NavLink to="/">Home</NavLink></p>
                    </Button>
                    <Button className="common-pointer bg-transparent cursor-pointer font-semibold min-w-[80px] text-center text-gray-900 text-lg">
                      <p><NavLink to="/homepage">About Us</NavLink></p>
                    </Button>
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
          <HomePageOneColumnOne
            className="flex flex-col items-center justify-start w-full"
            userdescription={
              <Text className="font-light leading-[66.00px] sm:text-[31px] md:text-[37px] text-[41px] text-white-A700">
                <span className="text-orange-400 font-gothica text-left font-bold">
                  Competency Research
                </span>
                <span className="text-white-A700 font-gothica text-left">
                  <>
                    {" "}
                    for <br />
                    newer capabilities of <br />
                  </>
                </span>
                <span className="text-white-A700 font-gothica text-left font-bold">
                  Software defined Industries{" "}
                </span>
                <span className="text-white-A700 font-gothica text-left">
                  <>
                    <br />
                    <br />
                    Frictionless experience for Graduating students and
                    Professionals to decide on building their careers of choice
                  </>
                </span>
              </Text>
            }
          />
          <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
              size="txtRobotoRomanExtraLight36"
            >
              <>
                Automotive industry is undergoing <br />
                the disruption of a century in this decade
              </>
            </Text>
            <div className="bg-gray-100 flex flex-col items-center justify-center max-w-[1224px] mx-auto md:px-5 px-8 py-6 rounded-[10px] w-full">
              <div className="md:gap-5 gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        90%
                      </Text>
                    </div>
                    <Img
                      className="h-10 max-h-10"
                      src="images/img_group_gray_600.svg"
                      alt="group"
                    />
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        <span className="text-gray-900_02 font-opensans text-left font-normal">
                          Software will differentiate{" "}
                        </span>
                        <span className="text-gray-900_02 font-opensans text-left font-bold">
                          Future cars
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[31%]" />
                  </div>
                </div>
                <div className="border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        $0.5-1T
                      </Text>
                    </div>
                    <Img
                      className="h-[66px] max-h-[66px]"
                      src="images/img_frame1000001790.svg"
                      alt="frame1000001790"
                    />
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        <span className="text-gray-900_02 font-opensans text-left font-normal">
                          software and data driven{" "}
                        </span>
                        <span className="text-gray-900_02 font-opensans text-left font-bold">
                          market volume in 2035
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[31%]" />
                    <Line className="bg-yellow-900 h-[3px] w-[31%]" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:pr-5 pr-6 w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:pl-5 pl-6 pr-1 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        90%
                      </Text>
                    </div>
                    <Img
                      className="h-[70px] max-h-[70px]"
                      src="images/img_car.svg"
                      alt="car"
                    />
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[314px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        <span className="text-gray-900_02 font-opensans text-left font-normal">
                          Autonomous vehicles can{" "}
                        </span>
                        <span className="text-gray-900_02 font-opensans text-left font-bold">
                          Reduce Accidents
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[33%]" />
                  </div>
                </div>
                <div className="border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:px-5 px-6 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        300 mn
                      </Text>
                    </div>
                    <div className="flex flex-col h-[95px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[100px] py-12 w-[117px]">
                      <Img
                        className="h-[73px] md:h-auto object-cover w-[117px] sm:w-full"
                        src="images/img_image81.png"
                        alt="imageEightyOne"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        lines of code involved for one vehicle within next few
                        years
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[31%]" />
                  </div>
                </div>
                <div className="border-blue_gray-200 border-r border-solid flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center pl-6 pr-[30px] sm:px-5 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        25 GB
                      </Text>
                    </div>
                    <Img
                      className="h-[60px] w-[60px]"
                      src="images/img_nounrenewableenergy4604079.svg"
                      alt="nounrenewableen"
                    />
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[338px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        of data generated by every connected car per hour
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[31%]" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start sm:pr-5 pr-6 w-full">
                  <div className="flex flex-row gap-2.5 h-[123px] md:h-auto items-center justify-center sm:pl-5 pl-6 w-full">
                    <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                        size="txtRobotoRomanExtraBold48"
                      >
                        50%
                      </Text>
                    </div>
                    <Img
                      className="h-[73px] max-h-[73px]"
                      src="images/img_nounsaving4354915.svg"
                      alt="nounsaving43549"
                    />
                  </div>
                  <div className="flex flex-col font-opensans gap-2 items-start justify-start pb-6 pt-3 sm:px-5 px-6 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[28.00px] max-w-[314px] md:max-w-full text-[22px] text-gray-900_02 sm:text-lg md:text-xl"
                        size="txtOpenSans22"
                      >
                        of the vehicle cost will be of software by 2030{" "}
                      </Text>
                    </div>
                    <Line className="bg-yellow-900 h-[3px] w-[33%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-helveticaneue gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtHelveticaNeueThin48"
            >
              Challenge
            </Text>
            <div className="flex flex-col font-roboto gap-8 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] w-full">
                <Text
                  className="leading-[21.00px] max-w-[1224px] md:max-w-full text-base text-gray-800"
                  size="txtRobotoRomanRegular16"
                >
                  Industry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships and
                  collaborationIndustry and Academia joint partnerships...
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start max-w-[1366px] md:px-10 sm:px-5 px-[71px] w-full">
                <div className="flex md:flex-col flex-row gap-0.5 h-[234px] md:h-auto items-center justify-start max-w-[1224px] mx-auto rounded-[10px] w-full">
                  <Img
                    className="h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]"
                    src="images/img_image84.png"
                    alt="imageEightyFour"
                  />
                  <Img
                    className="flex-1 md:flex-none md:h-[234px] sm:h-auto h-full max-h-[234px] object-cover sm:w-[] md:w-[]"
                    src="images/img_image82.png"
                    alt="imageEightyTwo"
                  />
                  <div className="bg-gray-900 flex flex-1 flex-col h-full items-start justify-start px-5 w-full">
                    <Text
                      className="max-w-[290px] md:max-w-full text-[17px] text-center text-white-A700"
                      size="txtRobotoRomanRegular17"
                    >
                      <span className="md:text-[22px] sm:text-xl text-white-A700 font-roboto text-2xl font-bold">
                        Industry & Academia{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-white-A700 font-roboto text-[22px] font-normal">
                        joint partnerships and collaboration{" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-0.5 h-[234px] md:h-auto items-center justify-start max-w-[1224px] mx-auto rotate-[180deg] rounded-[10px] w-full">
                  <div className="bg-gray-900 flex flex-1 flex-col h-full items-start justify-start px-5 rotate-[180deg] w-full">
                    <Text
                      className="max-w-[290px] md:max-w-full text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtRobotoRomanBold24"
                    >
                      To help industry with continues Innovation & talent
                      pipeline{" "}
                    </Text>
                  </div>
                  <Img
                    className="flex-1 md:flex-none h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]"
                    src="images/img_image87.png"
                    alt="imageEightySeven"
                  />
                  <Img
                    className="h-[234px] sm:h-auto max-h-[234px] object-cover sm:w-[] md:w-[]"
                    src="images/img_image86.png"
                    alt="imageEightySix"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRobotoRomanExtraLight36"
            >
              Building the collaborative ecosystem to win together{" "}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-blue_gray-100_01 rounded-[10px] w-full">
              <div className="bg-gray-300 flex flex-col h-[555px] md:h-auto items-start justify-start">
                <div className="flex flex-col h-full items-center justify-center w-full">
                  <Img
                    className="h-[375px] sm:h-auto object-cover w-[408px] md:w-full"
                    src="images/img_maskgroup.png"
                    alt="maskgroup"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanExtraLight24"
                  >
                    <span className="text-black-900 font-roboto font-thin">
                      <>
                        Industry and Academia joint <br />
                      </>
                    </span>
                    <span className="text-black-900 font-roboto font-bold">
                      Partnerships & Collaboration
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-gray-100 border-blue_gray-100_02 border-l border-solid flex flex-1 flex-col h-full items-start justify-start w-full">
                <div className="bg-indigo-50 flex flex-col h-[451px] md:h-auto items-center justify-center w-full">
                  <Img
                    className="h-[404px] sm:h-auto object-cover w-[525px] md:w-full"
                    src="images/img_maskgroup_404x525.png"
                    alt="maskgroup_One"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-center p-6 sm:px-5 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtRobotoRomanExtraLight24"
                  >
                    <span className="text-black-900 font-roboto font-thin">
                      <>
                        To help industry with continues <br />
                      </>
                    </span>
                    <span className="text-black-900 font-roboto font-bold">
                      Innovation & Talent Pipeline
                    </span>
                    <span className="text-black-900 font-roboto font-thin">
                      {" "}
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex flex-col font-roboto gap-12 h-[709px] md:h-auto items-center justify-start pb-16 pt-12 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-auto"
              size="txtRobotoRomanExtraLight36"
            >
              Building the collaborative ecosystem to win together{" "}
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 h-full justify-start md:px-10 sm:px-5 px-[71px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border-b-4 border-solid border-yellow-900 flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full">
                <Img
                  className="h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_screenshot20230610.png"
                  alt="screenshot20230"
                />
                <div className="flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtRobotoRomanBold32"
                  >
                    Industry
                  </Text>
                  <div className="flex flex-col gap-6 items-center justify-start">
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Access to highly skilled industry ready talent to reduce
                      skill gap
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Optimize Research and Development cost through shared
                      innovation{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Be the front runners in building new age capabilities in
                      SDV’s
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border-b-4 border-solid border-yellow-900 flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full">
                <Img
                  className="h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_image91.png"
                  alt="imageNinetyOne"
                />
                <div className="flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtRobotoRomanBold32"
                  >
                    Academia
                  </Text>
                  <div className="flex flex-col gap-6 items-start justify-start">
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Access to industrial expertise for Academic Research and
                      Incubations
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Higher placements and better internships for the students
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Introducing more Industry relevant electives
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border-b-4 border-orange-700_01 border-solid flex flex-1 flex-col gap-6 h-full items-center justify-start pb-6 md:px-5 rounded-[10px] shadow-bs1 w-full">
                <Img
                  className="h-[219px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_image94.png"
                  alt="imageNinetyFour"
                />
                <div className="flex flex-col gap-6 items-center justify-start sm:px-5 px-8 w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                    size="txtRobotoRomanBold32"
                  >
                    Students
                  </Text>
                  <div className="flex flex-col gap-6 items-center justify-start">
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Career awareness and clarity from early stages of academic
                      courses{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Research oriented learning by solving real world industry
                      problems{" "}
                    </Text>
                    <Text
                      className="text-base text-gray-800 w-full"
                      size="txtRobotoRomanRegular16"
                    >
                      Community based learning through Industry and academic
                      mentorship
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start max-w-[1366px] pb-16 pt-12 md:px-10 sm:px-5 px-[71px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRobotoRomanExtraLight36"
            >
              Join The Movement{" "}
            </Text>
            <div className="flex flex-col h-[291px] md:h-auto items-start justify-start max-w-[1224px] mx-auto outline outline-[1px] outline-blue_gray-200 rounded-[10px] w-full">
              <div className="bg-teal-50 flex flex-col h-full items-center justify-center rounded-[10px] w-full">
                <div className="relative rounded-[10px] w-[1224px] md:w-full">
                  <Img
                    className="absolute h-[291px] inset-[0] justify-center m-auto object-cover rounded-[10px] w-[1224px] md:w-full"
                    src="images/img_image97.png"
                    alt="imageNinetySeven"
                  />
                  <div className="bg-gradient  flex flex-col items-center justify-end m-auto p-[43px] md:px-10 sm:px-5 relative w-[86%] md:w-full">
                    <Img
                      className="h-[49px] mt-1 w-[774px]"
                      src="images/img_frame1000001796.svg"
                      alt="frame1000001796"
                    />
                    <div className="flex flex-col items-center justify-start mt-[25px]">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                        size="txtRobotoRomanLight32"
                      >
                        Alone we can do so little, together we can do so much
                      </Text>
                    </div>
                    <div className="flex flex-row flex-wrap font-sfprotext gap-8 items-center justify-center max-w-[774px] mt-12 w-full">
                      <Button className="bg-yellow-900 cursor-pointer font-semibold min-w-[136px] py-[9px] rounded-md text-base text-center text-white-A700_01">
                        Contact us
                      </Button>
                      <Button className="bg-yellow-900 cursor-pointer font-semibold min-w-[120px] py-[9px] rounded-md text-base text-center text-white-A700_01">
                        About us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default HomepageOnePage;
