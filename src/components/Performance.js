import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { MdGraphicEq } from "react-icons/md";
import InfoIcon from '@mui/icons-material/Info';

const Performance = () => {
  return (
    <div className="py-2 px-6">
      <div className="flex overflow-x-scroll hide-scroll-bar">
        <ul className="space-x-3 text-sm lg:text-base font-semibold my-2 py-2 flex flex-nowrap items-center text-[#3e424a]">
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Overview</li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Fundamentals </li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">News Insights</li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Sentiments</li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Team</li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Technicals</li>
          <li className=" hover:text-blue-700 hover:underline hover:underline-offset-8 hover:font-medium">Tokenomics</li>
        </ul>
      </div>
      <div>
        <div className="bg-white p-3 rounded-lg">
          <p className="text-2xl font-semibold my-2">Performance</p>
          <div className="flex items-center my-3 mx-4">
            <p className="flex flex-none flex-col pr-5 mr-3 ">
              <span className="text-sm font-medium text-[#44475b]">Today's Low</span>
              <span className="text-[#44475b] font-medium">46,930.22</span>
            </p>
            <div className="grow">
              <Slider
                aria-label="slider-ex-1"
                defaultValue={30}
                className="w-full"
              >
                <SliderTrack
                  style={{
                    background:
                      "linear-gradient(to right, red, orange, yellow, green)",
                  }}
                >
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={5}>
                  <MdGraphicEq color="tomato" size={24} />
                </SliderThumb>
              </Slider>
            </div>
            <p className="flex flex-none flex-col pl-5 ml-3">
              <span className="text-sm font-medium text-[#44475b]">Today's Low</span>
              <span className="text-[#44475b] font-medium">46,930.22</span>
            </p>
          </div>
          <div className="flex items-center my-5 mx-4">
            <p className="flex flex-none flex-col pr-5 mr-3 ">
              <span className="text-sm font-medium text-[#44475b]">Today's Low</span>
              <span className="text-[#44475b] font-medium">46,930.22</span>
            </p>
            <div className="grow">
              <Slider
                aria-label="slider-ex-1"
                defaultValue={30}
                className="w-full"
              >
                <SliderTrack
                  style={{
                    background:
                      "linear-gradient(to right, red, orange, yellow, green)",
                  }}
                >
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={5}>
                  <MdGraphicEq color="tomato" size={24} />
                </SliderThumb>
              </Slider>
            </div>
            <p className="flex flex-none flex-col pl-5 ml-3">
              <span className="text-sm font-medium text-[#44475b]">Today's Low</span>
              <span className="text-[#44475b] font-medium">46,930.22</span>
            </p>
          </div>
          <div>
            <div className="my-3">
              <p className="text-2xl font-medium text-[#44475b]">Fundamentals <InfoIcon style={{height:"18px", color:"#abb9bf"}}/></p>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between mx-4">
              <div className="my-2 px-1 lg:w-[45%] space-x-2">
                <ul className="space-y-3 text-sm font-medium ">
                  <li className="flex justify-between">
                    <span className="text-[#768396]">Bitcoin Price</span>
                    <span className="text-[#111827]">$16,815.46</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">24h Low / 24h High</span>
                    <span className="text-[#111827]">$16,382.07 / $16,874.12</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">7d Low / 7d High</span>
                    <span>$16382.07 / $16,874.12</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">Trading Volume</span>
                    <span className="text-[#111827]">$23,249,202,782</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">Market Cap Rank</span>
                    <span className="text-[#111827]">#1</span>
                  </li>
                  <li className="border"></li>
                </ul>
              </div>
              <div className="my-2 px-1  lg:w-[45%]">
                <ul className="space-y-3 text-sm font-medium">
                  <li className="flex justify-between">
                    <span>Market Cap</span>
                    <span>$323,507,290,047</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">Market Cap Dominance</span>
                    <span className="text-[#111827]">$38.343%</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">Volume / Market Cap</span>
                    <span className="text-[#111827]">0.0718</span>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">All-Time High</span>
                    <div className="flex justify-between flex-col items-end">
                      <p className="text-[#111827] font-medium">
                        $69,044.77 <span className="text-[#f7324c]">-75.6%</span>
                      </p>
                      <p className="text-xs ">Nov 10, 2021 (about 1 year )</p>
                    </div>
                  </li>
                  <li className="border"></li>
                  <li className="flex justify-between">
                    <span className="text-[#768396]">All-Time Low</span>
                    <div className="flex justify-between flex-col items-end">
                      <p className="text-[#111827] font-medium">
                        $67.81 <span className="text-[#0fba83]">24729.1%</span>
                      </p>
                      <p className="text-xs">Jul 06, 2013 (over 9 years)</p>
                    </div>
                  </li>
                  <li className="border"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
