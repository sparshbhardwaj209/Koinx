import React, { useEffect, useState } from "react";
import bitcoinImage from "../assets/bitcoinImage.png";
import TradingViewWidget from "./TradingViewWidget";

const GraphComponent = () => {

  const [price, setPrice] = useState();

  useEffect(()=>{
      getData();
  },[])


  const getData = async ()=> {
    const data = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2C%20usd&include_24hr_change=true");
    const json = await data.json();
    setPrice(json.bitcoin);
  }

  return (
    <div className="py-2 px-6">
      <p className="text-xs my-1">
        Cryptocurrencies &gt;&gt; <span className="font-bold">Bitcoin</span>
      </p>
      <div className="bg-white p-3 rounded-lg">
        <div className="flex space-x-5 text-center">
          <div className="flex space-x-1 items-center"> 
            <img
              className="h-8 rounded-full"
              src={bitcoinImage}
              alt="Bitcoin Logo"
            />
            <span className="font-bold">
              Bitcoin <span className="text-xs relative top-[-2px] font-medium text-[#5d667b]">BTC</span>
            </span>
          </div>
          <span className="text-white bg-[#768396] text-sm font-medium px-2 py-1 rounded-lg">
            Rank #1
          </span>
        </div>
        <div className="border-b-2">
            <div className="space-x-5 mt-2 mb-1">
                <span className="font-bold text-xl">$46,953.04</span>
                <span className="text-xs px-2 bg-green-100 text-green-500 font-medium rounded-md">{Number(price?.inr_24h_change).toFixed(2)}%</span>
                <span className="text-xs">(24H)</span>
            </div>
            <div className="text-sm font-medium mb-3">
                ₹ {price?.inr}
            </div>
        </div>
        <div className="py-3">
            <TradingViewWidget />
        </div>
      </div>
    </div>
  );
};

export default GraphComponent;
