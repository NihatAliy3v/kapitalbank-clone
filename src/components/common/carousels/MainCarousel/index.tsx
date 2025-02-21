import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { mainSlideList } from "../../../home/Main/data";
import MainCarouselCard from "./MainCarouselCard";
import { settings } from "./config";

const MainCarousel = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {mainSlideList.map((item) => (
        <MainCarouselCard
          item={item}
          handlePrev={handlePrev}
          handleNext={handleNext}
          key={item.id}
        />
      ))}
    </Slider>
  );
};

export default MainCarousel;
