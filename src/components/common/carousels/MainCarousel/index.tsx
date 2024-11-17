import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "./NextButton";
import { PrevArrow } from "./PrevButton";
import { useRef } from "react";

const MainCarousel = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    arrows: false,
  };
  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const slideList = [
    {
      title: "Birbank Star",
      content: "Daha çox qazanın, daha çox sərf edin",
      btnTitle: "Ətraflı",
      imgUrl:
        "https://www.kapitalbank.az/images/slider/version_10/birbank-star-ile1727248520.png",
      imgAlt: "Birbank Cashback",
    },
    {
      title: "Birbank Star",
      content: "Daha çox qazanın, daha çox sərf edin",
      btnTitle: "Ətraflı",
      imgUrl:
        "https://www.kapitalbank.az/images/slider/version_10/birbank-star-ile1727248520.png",
      imgAlt: "Birbank Cashback",
    },
    {
      title: "Birbank Star",
      content: "Daha çox qazanın, daha çox sərf edin",
      btnTitle: "Ətraflı",
      imgUrl:
        "https://www.kapitalbank.az/images/slider/version_10/birbank-star-ile1727248520.png",
      imgAlt: "Birbank Cashback",
    },
  ];
  return (
    <Slider ref={sliderRef} {...settings}>
      {/* Slide 2 */}
      {slideList.map((item) => (
        <div className="h-[425px] bg-[#e8ecf1]">
          <div className="container px-0">
            <div className="bg-[#e8ecf1] flex items-center justify-between">
              <div className="w-1/2 pt-[30px] px-[15px] pb-[10px]">
                <h2 className="text-4xl font-semibold leading-[46px]">
                  {item.title}
                </h2>
                <p className="text-[#2e3131]">{item.content} </p>
                <button className="w-[280px] h-[55px] my-5  bg-[#f45369] text-xl text-white rounded-md hover:bg-pink-600">
                  {item.btnTitle}
                </button>
              </div>
              <div className="w-1/2 flex justify-center items-end pt-[30px] px-[15px]">
                <img src={item.imgUrl} alt={item.imgAlt} className="w-3/7" />
                <div className="flex gap-3 pb-6">
                  <PrevArrow onClick={handlePrev} />
                  <NextArrow onClick={handleNext} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Daha çox slaydlar əlavə edə bilərsən */}
    </Slider>
  );
};

export default MainCarousel;
