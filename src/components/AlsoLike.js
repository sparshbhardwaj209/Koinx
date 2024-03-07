import React, { useEffect, useState } from "react";
import CoinCard from "./CoinCard";

const AlsoLike = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const json = await data.json();
    // console.log(json.coins);
    setPrice(json.coins);
  };

  // console.log(price);

  return (
    <div>
      <style>
        {`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>
      <div className="bg-white px-6 mt-5 rounded-lg space-y-3">
        <div>
          <p className="text-2xl font-bold my-3 px-5 py-8 text-[#202020]">You May Also Like</p>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-12 md:ml-6 ml-5">
              {price.map((card) => (
                <CoinCard info={card} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold my-3 px-5 py-3 text-[#202020]">Trending Coins</p>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-12 md:ml-6 ml-5">
              {price.map((card) => (
                <CoinCard info={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlsoLike;
