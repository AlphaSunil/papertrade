/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SingleCoin } from "../Config/Api";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import ReactHtmlParser from "react-html-parser";
import { CryptoState } from "../Config/CryptoContext";
import Chart from "./Chart";
const CoinPage = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  const { symbol, currency, numberWithCommas } = CryptoState();

  const FetchCoinData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    // console.log(data);
  };

  useEffect(() => {
    FetchCoinData();
  }, [id]);
  return (
    <div>
      {!coin ? (
        <MoonLoader size={100} className="mx-auto my-[10rem]" />
      ) : (
        <div className="md:flex-row lg:flex-row flex flex-col-reverse    ">
          <div className=" text-justify  flex-col  md:w-1/3 lg:w-1/3 border-r-2 px-5 shadow-inner ">
            <div className="flex justify-evenly  md:block lg:block pt-5 border-b-2">
              <img
                className="w-20   md:w-40 lg:w-40 md:h-auto lg:h-auto md:mx-auto lg:mx-auto drop-shadow-lg mb-1 "
                src={coin.image.large}
                alt=""
              />

              <h1 className="font-bold text-6xl  text-center drop-shadow-lg   my-auto mb-1">
                {coin.name}
              </h1>
            </div>

            <div className=" ">
              <div className="flex items-center pt-5 ">
                <h1 className="font-bold text-lg">Rank:&nbsp; </h1>
                {coin.market_cap_rank}
              </div>
              <div className="flex items-center ">
                <h1 className="font-bold text-lg">Market Cap:&nbsp;</h1>
                {symbol}
                {numberWithCommas(
                  coin.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </div>
              <div className="flex items-center ">
                <h1 className="font-bold text-lg">Current Price:&nbsp;</h1>
                {symbol}
                {coin.market_data.current_price[currency.toLowerCase()].toFixed(
                  2
                )}
              </div>

              <div className="flex items-center ">
                <h1 className="font-bold text-lg">
                  Percentage Change 24h:&nbsp;
                </h1>
                <h2
                  className={
                    coin.market_data.price_change_percentage_24h >= 0
                      ? "text-green-700"
                      : "text-red-700"
                  }
                >
                  {coin.market_data.price_change_percentage_24h >= 0
                    ? "+"
                    : " "}
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </h2>
              </div>
              <p className="text-xl mt-1 opacity-70">
                {ReactHtmlParser(coin.description.en.split(". ")[0])}
              </p>
            </div>
          </div>

          <Chart id={id} />
        </div>
      )}
    </div>
  );
};

export default CoinPage;
