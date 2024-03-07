import React from "react";

const CoinCard = ({ info }) => {
  // console.log(info);

  const { item } = info;

  if(!info){
    return null;
  }

  return (
    <div className="card">
      <div className="inline-block px-3">
        <div className="w-64 h-52 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out px-3 py-4 flex flex-col">
          <div className="flex space-x-1 space-y-1 items-center">
            <img className="h-8 text-[#202020]" src={item?.small} alt="card" />
            <span className="font-medium">{item?.name}</span>
            <span className="text-xs text-green-500 bg-green-50 font-medium px-1 py-1 rounded-lg mb-2 ">
              {item?.data?.price}
            </span>
          </div>
          <div>
            <p className="text-lg font-medium my-2 px-3 text-[#171717]">{item?.data?.market_cap}</p>
          </div>
          <div className="flex justify-center my-2">
            <img src={item?.data?.sparkline} alt="I2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
