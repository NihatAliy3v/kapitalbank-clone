import { useRef } from "react";
import CardCarouselItem from "./CardCarouselItem";
import Slider from "react-slick";
import { settings } from "./config";
import { cardData } from "../../../home/CardCollection/data";

const CardCarousel = () => {
  const sliderRef = useRef(null);
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <Slider ref={sliderRef} {...settings}>
      {cardData.map((item) => (
        <CardCarouselItem
          item={item}
          handlePrev={handlePrev}
          handleNext={handleNext}
          key={item.id}
        />
      ))}
    </Slider>
  );
};
export default CardCarousel;
