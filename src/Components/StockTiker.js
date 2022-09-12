/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { TrendingCoins } from "../Config/Api";
import { CryptoState } from "../Config/CryptoContext";
import AliceCarousel from "react-alice-carousel";
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

const StockTiker = () => {
  const { currency, symbol, numberWithCommas } = CryptoState();
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingCoins = async () => {
    setIsLoading(true);
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
    setIsLoading(false);
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
      <Link
        to={`/coin/${coin.id}`}
        key={coin.id}
        className=" text-white flex items-center justify-center  "
      >
        <div>
          <img className=" pr-1 w-5 " src={coin?.image} alt={coin?.name} />
        </div>

        <div>{coin?.symbol}</div>
        <div className=" p-1">
          {symbol}
          {numberWithCommas(coin.current_price.toFixed(2))}
        </div>
        <div className={profit ? "text-green-400" : "text-red-400"}>
          ({profit && "+"}
          {coin?.price_change_percentage_24h.toFixed(2)}%)
        </div>
      </Link>
    );
  });
  // console.log(items.name);
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div className="bg-black h-7 flex items-center justify-center">
      {!isLoading && (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlay
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlayInterval={400}
          animationDuration={3000}
          autoPlayStrategy={"all"}
        />
      )}

      <BeatLoader color={"white "} loading={isLoading} size={15} />
    </div>
  );
};

export default StockTiker;
