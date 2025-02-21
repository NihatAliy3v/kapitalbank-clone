import React from "react";
import { NewsData } from "../../../home/News/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import { settings } from "./config";
import { NewsCarouselItem } from "./NewsCaroueslItem";
import { NextArrow } from "./NextButton";
const NewsCarousel: React.FC<{ data: NewsData }> = ({ data }) => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="relative">
      <Slider className="w-[94%]" ref={sliderRef} {...settings}>
        {data.map((item) => (
          <NewsCarouselItem item={item} handleNext={handleNext} key={item.id} />
        ))}
      </Slider>
      <NextArrow onClick={handleNext}  />
    </div>
  );
};

export default NewsCarousel;
