import React from "react";

import { Button, Img, Slider, Text } from "components";

const HomePageColumnarrowleft = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="flex-1 gap-6 max-w-[1080px] w-full"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-gray-100 border border-blue_gray-200 border-solid flex flex-col gap-4 items-start justify-start mx-2.5 p-6 sm:px-5 rounded-lg shadow-bs">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-start w-full">
                    <div className="flex flex-col h-20 items-center justify-start w-20">
                      <Img
                        className="h-20 md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-20"
                        src="images/img_image109.png"
                        alt="image109"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl w-full"
                        size="txtInterBold20"
                      >
                        {props?.username1}
                      </Text>
                      <Text
                        className="text-base text-orange-700_01 w-full"
                        size="txtInterBold16"
                      >
                        {props?.userposition1}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[21.00px] max-w-[480px] md:max-w-full text-base text-gray-800"
                        size="txtInterRegular16"
                      >
                        {props?.userdescription1}
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-full">
                      <div className="flex flex-1 flex-row gap-3 items-start justify-start w-full">
                        <Button className="border border-blue_gray-200 border-solid flex flex-1 h-[37px] items-center justify-center p-[9px] rounded-lg w-[37px]">
                          <Img src="images/img_linkedin.svg" alt="linkedin" />
                        </Button>
                        <div className="border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start p-2 rounded-lg w-[37px]">
                          <div className="flex flex-col h-[21px] items-center justify-start w-[21px]">
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_twitter_blue_gray_200.svg"
                              alt="twitter"
                            />
                          </div>
                        </div>
                        <Button className="border border-blue_gray-200 border-solid flex flex-1 h-[37px] items-center justify-center p-2 rounded-lg w-[37px]">
                          <Img
                            className="h-[21px]"
                            src="images/img_facebook_blue_gray_200.svg"
                            alt="facebook"
                          />
                        </Button>
                      </div>
                      <Button className="bg-transparent cursor-pointer font-semibold font-sfprotext min-w-[90px] py-0.5 text-base text-center text-yellow-900">
                        {props?.readmorelabel1}
                      </Button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-400 w-2.5" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100_7f w-2.5"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <Img
            className="h-6 w-6"
            src="images/img_arrowright.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

HomePageColumnarrowleft.defaultProps = {
  username: "Kiran Kumar G J",
  userposition: "Chief Mentor",
  userdescription:
    "Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.",
  readmorelabel: "Read More",
  username1: "Kiran Kumar G J",
  userposition1: "Chief Mentor",
  userdescription1:
    "Kiran Kumar GJ is a business management graduate and highly connected strategy professional in the taxation, legal, and public affairs industry. His 14 years of rich experience includes marketing in banking, IT sales, taxation consulting, and public and policy affairs management. Kiran has more passion and experience towards institutional change management and administration. He is a professional with greater emphasis towards people empowerment and result-oriented leadership.",
  readmorelabel1: "Read More",
};

export default HomePageColumnarrowleft;
