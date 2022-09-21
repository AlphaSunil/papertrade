/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinListApi } from "../Config/Api";
import { CryptoState } from "../Config/CryptoContext";
import Search from "./Search";
import Pagination from "./Pagination";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";
const Table = () => {
  const { currency, numberWithCommas, symbol } = CryptoState();
  const [coinList, setCoinList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;
  const [searchItem, setSearchItem] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const coinsData = async () => {
    setIsLoading(true);
    const { data } = await axios.get(CoinListApi(currency));
    setCoinList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    coinsData();
  }, [currency]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  let coins = coinList.slice(firstPostIndex, lastPostIndex);
  let searchedCoin = coinList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchItem) ||
      item.symbol.toLowerCase().includes(searchItem)
  );

  const getSearchData = (data) => {
    setSearchItem(data);
  };

  const switcher = () => {
    if (searchItem === "") {
      return coins;
    } else {
      return searchedCoin;
    }
  };

  const tableBody = switcher().map((item) => {
    let profit = item.price_change_percentage_24h >= 0;
    return (
      <Link
        to={`/coin/${item.id}`}
        href={item.id}
        key={item.id}
        className="flex  md:mx-10  my-5  md:py-5 lg:py-5  border-b   hover:bg-gray-100 items-center"
      >
        <div className="w-full md:text-center lg:text-center text-center flex flex-col items-center  ">
          <img className="w-5 mb-1" src={item.image} alt="" />

          <h2>{item.name}</h2>
        </div>
        <div className="w-full text-center">
          {symbol} {numberWithCommas(item.current_price.toFixed(2))}
        </div>
        <div
          className={
            profit
              ? "text-green-400 w-full text-center"
              : "text-red-400 w-full text-center "
          }
        >
          ({profit && "+"}
          {item?.price_change_percentage_24h.toFixed(2)}%)
        </div>
        <div className="text-center w-full">
          {numberWithCommas(item.market_cap.toString().slice(0, -6))}M
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div id="toTop">
        <Search searchData={getSearchData} />
      </div>
      <div className="flex md:sticky md:top-0 bg-white md:mx-10 justify-between my-5  md:my-10 font-bold border-b text-lg md:xl lg:xxl">
        <div className="w-full text-center">Coin</div>
        <div className="w-full text-center">Price</div>
        <div className="w-full text-center">24h Change</div>
        <div className="w-full text-center">Market Cap</div>
      </div>
      {!isloading && tableBody}
      {isloading && <FadeLoader className="mx-auto " />}
      {!isloading && searchedCoin.length === 0 && (
        <h1 className="text-center m-8">
          No coin found ! Try typing the symbol.
        </h1>
      )}
      {!isloading && searchItem === "" && (
        <Pagination
          postPerPage={postPerPage}
          totalPost={coinList.length}
          firstPostIndex={firstPostIndex}
          lastPostIndex={lastPostIndex}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Table;
