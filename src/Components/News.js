import axios from "axios";
import React, { useEffect, useState } from "react";
import { NewsApi } from "../Config/Api";
import Slider from "react-slick";
import moment from "moment";
import { PuffLoader } from "react-spinners";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: false,
        },
      },
    ],
  };
  const [isloading, setIsLoading] = useState(false);
  const [healines, setHeadlines] = useState([]);
  const fetchNewsApis = async () => {
    setIsLoading(true);
    const { data } = await axios.get(NewsApi);
    setHeadlines(data.news);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewsApis();
  }, []);

  const articles = healines.map((article) => {
    const publishedAt = moment(article.published).format(
      `MMMM Do YYYY, h:mm a `
    );

    return (
      <div key={article.id} className="flex justify-center ">
        <div className="flex flex-col h-[42rem]  md:h-auto lg:h-auto  lg:flex-row md:max-w-xxl md:shadow-lg lg:shadow-lg  bg-white ">
          <img
            className=" w-full h-96 md:h-90 object-cover   "
            src={
              article.image ||
              `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png`
            }
            alt=""
          />
          <div className="p-2 md:p-5 lg-p-5 flex flex-col justify-start w-full ">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {article.title}
            </h5>
            <p className="text-gray-700 text-base mb-4 ">
              {article.description}
            </p>
            <div className="flex justify-between">
              <p className="text-gray-600 text-xs">
                Published on: {publishedAt}
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
    <div className=" overflow-hidden md:overflow-visible lg:overflow-visible md:mt-2 md:mx-10 mb-2  md:shadow-none lg:shadow-none shadow-lg ">
      {!isloading && <Slider {...settings}>{articles}</Slider>}
      {isloading && <PuffLoader className="mx-auto my-[10rem]" />}
    </div>
  );
};
export default News;
