import MainButtonLink from "../../../../ui/MainButtonLink";
import { NextArrow } from "../NextButton";
import { PrevArrow } from "../PrevButton";

interface CardDetailList {
  title: string;
  subTitle: string;
}
interface CardFooterProps {
  handlePrev: () => void;
  handleNext: () => void;
  cardDetailList: CardDetailList[];
  imgUrl: string;
  buttonTitle: string;
  buttonUrl: string;
}


const CardFooter: React.FC<CardFooterProps> = ({
  handlePrev,
  handleNext,
  imgUrl,
  buttonTitle,
  buttonUrl,
  cardDetailList,
  
}) => {
  return (
    <div className="mt-[23px] py-[34px] bg-[#e9ecf0] text-textPrimaryColor">
      <div className="container flex relative">
        <div className="w-[63%]">
          <ul className="mb-6 flex justify-between">
            {cardDetailList.map((item) => (
              <li className="leading-[24px]">
                  <span className="text-mainColor text-[28px] leading-[35px] mb-[5px] font-semibold block">
                    {item.title}
                  </span>
                  {item.subTitle}
              </li>
            ))}
          </ul>
          <MainButtonLink
            text={buttonTitle}
            url={buttonUrl}
            width="w-[280px]"
            height="h-[55px]"
            bgColor="bg-mainColor"
            textColor="text-white"
            radius="rounded-lg"
            textSize="text-xl"
            hoverColor="bg-mainColorHover"
          />
        </div>
        <img
          className="w-80 h-80 object-contain absolute right-[145px] bottom-0"
          src={imgUrl}
          alt="card"
        />
        <div className="flex gap-[40px] absolute bottom-0 right-0">
          <PrevArrow onClick={handlePrev} />
          <NextArrow onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
