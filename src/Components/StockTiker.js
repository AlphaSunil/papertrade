import axios from "axios";
import React, { useState, useEffect } from "react";
import { TrendingCoins } from "../Config/Api";
import { CryptoState } from "../Config/CryptoContext";
import AliceCarousel from "react-alice-carousel";

const StockTiker = () => {
  const { currency, symbol } = CryptoState();
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1024: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <a
        href={coin.name}
        className=" text-white flex items-center justify-center  "
      >
        <img className="pr-1  h-4 " src={coin?.image} alt={coin?.name} />

        <div>{coin?.symbol}</div>
        <div className=" p-1">
          {symbol}
          {coin.current_price.toFixed(2)}
        </div>
        <div className={(profit && "text-green-400") || "text-red-400"}>
          ({profit && "+"}
          {coin?.price_change_percentage_24h.toFixed(2)}%)
        </div>
      </a>
    );
  });
  console.log(items.name);
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div className="bg-black h-7 ">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlayInterval={1}
        animationDuration={3000}
        autoPlayStrategy={"default"}
      />
    </div>
  );
};

export default StockTiker;
