import React from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import InfoIcon from "@mui/icons-material/Info";
import { Progress } from "@chakra-ui/react";

const Sentiment = () => {
  return (
    <div className="py-2 px-6">
      <div>
        <div className="bg-white p-3 rounded-lg">
          <p className="text-2xl font-bold my-3 px-2">Sentiment</p>
          <div className="font-bold px-2 text-[#44475b]">
            Key Events <InfoIcon style={{ height: "18px", color: "#7c7e8c" }} />
          </div>
          <div className="flex flex-col lg:flex-row my-3 px-3">
            <div className="bg-green-100 rounded-2xl p-3 flex space-x-3 my-3 mx-2">
              <div className="bg-[#0082ff] p-2 rounded-full h-11">
                <NewspaperIcon style={{ color: "white" }} />
              </div>
              <div>
                <h4 className="text-sm font-medium my-1 text-[#191c1f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  assumenda maiores optio libero explicabo error.
                </h4>
                <p className="text-xs text-[#3e5765]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus minus, iusto laudantium praesentium fuga soluta
                  rerum recusandae eum aliquid fugit adipisci sit hic. Ducimus
                  repellendus, voluptatibus impedit error dicta, dolore optio
                  iusto laborum enim cupiditate fugiat eos, tempore quam
                  excepturi.
                </p>
              </div>
            </div>
            <div className="bg-green-100 rounded-2xl p-3 flex space-x-3 my-3 mx-2">
              <div className="bg-[#0fba83] p-2 rounded-full h-11">
                <ArrowOutwardIcon style={{ color: "white" }} />
              </div>
              <div>
                <h4 className="text-sm font-medium my-1 text-[#191c1f]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  assumenda maiores optio libero explicabo error.
                </h4>
                <p className="text-xs text-[#3e5765]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus minus, iusto laudantium praesentium fuga soluta
                  rerum recusandae eum aliquid fugit adipisci sit hic. Ducimus
                  repellendus, voluptatibus impedit error dicta, dolore optio
                  iusto laborum enim cupiditate fugiat eos, tempore quam
                  excepturi.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-[#44475b] font-medium px-4 text-lg">
              Analyst Estimates
              <InfoIcon style={{ height: "18px", color: "#7c7e8c" }} />
            </div>
            
            <div className="flex flex-col items-center space-y-2 md:flex-row my-5">
              <div className="h-auto p-8 bg-green-100 rounded-full items-center">
                <p className="font-medium text-3xl text-[#0fba83] items-center">
                  76%
                </p>
              </div>

              <div className="w-[80%]">
                <ul className="mx-1 px-2 md:mx-10 md:px-4">
                  <li className="flex justify-between items-center">
                    <span className="text-[#7c7e8c] my-1 font-medium">Buy</span>
                    <span className="items-center w-40">
                      <Progress
                        value={76}
                        size="sm"
                        colorScheme="blue"
                        style={{ height: "8px" }}
                      />
                    </span>
                    <span className="text-[#7c7e8c] my-1 font-medium">76%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-[#7c7e8c] my-1 font-medium">
                      Hold
                    </span>
                    <span className="items-center w-40">
                      <Progress
                        value={8}
                        size="sm"
                        colorScheme="gray"
                        style={{ height: "8px" }}
                      />
                    </span>
                    <span className="text-[#7c7e8c] my-1 font-medium">8%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-[#7c7e8c] my-1 font-medium">
                      Sell
                    </span>
                    <span className=" items-center w-40">
                      <Progress
                        value={16}
                        size="sm"
                        colorScheme="pink"
                        style={{ height: "8px" }}
                      />
                    </span>
                    <span className="text-[#7c7e8c] my-1 font-medium">16%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
