import React, { useEffect, useState } from "react";
import sidebarLogo from "../assets/sidebarLogo.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Sidebar = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const json = await data.json();
    setPrice(json.coins);
  };

  return (
    <div>
      <div className="bg-[#0052fe] p-9 my-5 rounded-xl ml-2 mr-8">
        <div className=" text-white">
          <div className="content flex flex-col justify-center text-center ">
            <h4 className="font-semibold text-xl items-center px-3 mb-3 flex justify-center">
              Get Started with KoinX for FREE
            </h4>
            <p className="text-sm items-center">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={sidebarLogo} alt="Logo" />
            <div className="bg-white w-fit px-4 py-2 rounded-lg items-center flex">
              <button className="text-black font-medium text-sm items-center">
                Get Started for FREE{" "}
                <ArrowForwardIcon style={{ height: "20px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 mr-8 rounded-xl p-5 bg-white">
        <div>
          <h1 className="text-xl text-[#0f1629] font-bold">
            Trending Coins (24h)
          </h1>
        </div>
        <div className="my-3">
          <ul className="space-y-2">
            <li className="flex justify-between">
              <div className="font-medium text-sm p-1">
                <span className="flex items-center">
                  <span className="">
                    <img
                      className="h-8 mr-2"
                      src={price[0]?.item?.small}
                      alt={price[0]?.item?.symbol}
                    />
                  </span>
                  <span className="text-[#0f1629]">{price[0]?.item?.name}</span>
                </span>
              </div>
              <div className="text-sm bg-[#ebf9f4] text-[#14b079] rounded-lg p-1 flex items-center font-medium">
                <ArrowDropUpIcon /> {price[0]?.item?.data?.price}
              </div>
            </li>
            <li className="flex justify-between">
              <div className="font-medium text-sm p-1">
                <span className="flex items-center">
                  <span>
                    <img
                      className="h-8 mr-2"
                      src={price[1]?.item?.small}
                      alt={price[1]?.item?.symbol}
                    />
                  </span>
                  <span className="text-[#0f1629]">
                  {price[1]?.item?.name}
                  </span>
                </span>
              </div>
              <div className="text-sm bg-[#ebf9f4] text-[#14b079] rounded-lg p-1 flex items-center font-medium">
                <ArrowDropUpIcon /> {price[1]?.item?.data?.price}
              </div>
            </li>
            <li className="flex justify-between">
              <div className="font-medium text-sm p-1">
                <span className="flex items-center">
                  <span>
                    <img
                      className="h-8 mr-2"
                      src={price[2]?.item?.small}
                      alt={price[2]?.item?.symbol}
                    />
                  </span>
                  <span className="text-[#0f1629]">

                  {price[2]?.item?.name}
                  </span>
                </span>
              </div>
              <div className="text-sm bg-[#ebf9f4] text-[#14b079] rounded-lg p-1 flex items-center font-medium">
                <ArrowDropUpIcon /> {price[2]?.item?.data?.price}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
