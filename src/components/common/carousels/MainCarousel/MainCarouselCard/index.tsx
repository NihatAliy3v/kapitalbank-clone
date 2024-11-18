import React from "react";
import MainButtonLink from "../../../../ui/MainButtonLink";
import { PrevArrow } from "../PrevButton";
import { NextArrow } from "../NextButton";

interface MainCarouselCardItem {
  title: string;
  content: string;
  btnTitle: string;
  imgUrl: string;
  imgAlt: string;
}
interface MainCarouselCardProps {
  item: MainCarouselCardItem;
  handlePrev: () => void;
  handleNext: () => void;
}
const MainCarouselCard: React.FC<MainCarouselCardProps> = ({
  item,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className="h-[425px] bg-[#e8ecf1]">
      <div className="container px-0">
        <div className="bg-[#e8ecf1] flex items-center justify-between">
          <div className="w-1/2 pt-[30px] px-[15px] pb-[10px]">
            <h2 className="text-4xl font-semibold leading-[46px]">
              {item.title}
            </h2>
            <p className="text-[#2e3131]">{item.content} </p>
            <div className="py-5">
              <MainButtonLink
                text={item.btnTitle}
                url="/"
                width="w-[280px]"
                height="h-[55px]"
                bgColor="bg-mainColor"
                textColor="text-white"
                radius="md"
                textSize="text-xl"
                hoverColor="bg-mainColorHover"
              />
            </div>
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
  );
};

export default MainCarouselCard;
