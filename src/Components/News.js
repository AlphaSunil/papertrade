import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Newss } from "../Config/Api";
import axios from "axios";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const [healines, setHeadlines] = useState([]);
  const fetchNews = async () => {
    const { data } = await axios.get(Newss);
    setHeadlines(data.articles);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const articles = healines.map((article) => {
    let newsApiDate = article.publishedAt;

    let timestamp = new Date(newsApiDate).getTime();
    let Day = new Date(timestamp).getDate();
    let Month = new Date(timestamp).getMonth() + 1;
    let Year = new Date(timestamp).getFullYear();
    let OurNewDateFormat = `${Day}/${Month}/${Year}`;

    return (
      <div className="flex justify-center">
        <div className="flex flex-col  lg:flex-row md:max-w-xxl rounded-lg  bg-white shadow-lg">
          <img
            className=" w-full h-96 md:h-90 object-cover md:w-[50rem] rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={
              article.urlToImage ||
              `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png`
            }
            alt=""
          />
          <div className="p-6 flex flex-col justify-start ">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {article.title}
            </h5>
            <p className="text-gray-700 text-base mb-4 ">
              {article.description}
            </p>
            <div className="flex justify-between">
              <p className="text-gray-600 text-xs">
                Published on: {OurNewDateFormat}
              </p>
              <p className="text-gray-600 text-xs">
                Author: {article.author || "unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-5 mx-10  ">
      <Slider {...settings}>{articles}</Slider>
    </div>
  );
};
export default News;
