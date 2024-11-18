import React from "react";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

// {
//     cardName: "Cashback",
//     cardContent:
//       "Birbank kartı sizə 30%-dək cashback, pulsuz köçürmə və çıxarma, ikiqat ƏDV və digər üstünlüklər verəcək. ",
//     cardDetailList: [
//       {
//         title: "Bonus",
//         subTitle: "30 % dək  keşbek və 2 qat ƏDV",
//       },
//       {
//         title: "Kartın qiyməti",
//         subTitle: "pulsuz",
//       },
//       {
//         title: "Güzəşt müddəti",
//         subTitle: "63 günədək",
//       },
//     ],
//     imgUrl:
//       "https://www.kapitalbank.az/images/cards/B/birbank-cashback-home.png?v=6",

//     buttonTitle: "Sifariş et",
//     buttonUrl: "/",
//   },
interface CardDetailList {
  title: string;
  subTitle: string;
}

interface CardCarouselItem {
  cardName: string;
  cardContent: string;
  cardDetailList: CardDetailList[];
  imgUrl: string;
  buttonTitle: string;
  buttonUrl: string;
}

interface CardCarouselItemProps {
  handlePrev: () => void;
  handleNext: () => void;
  item: CardCarouselItem;
}

const CardCarouselItem: React.FC<CardCarouselItemProps> = ({
  handlePrev,
  handleNext,
  item,
}) => {
  return (
    <div className="select-none">
      <CardHeader cardName={item.cardName} cardContent={item.cardContent} />
      <CardFooter
        handlePrev={handlePrev}
        handleNext={handleNext}
        imgUrl={item.imgUrl}
        buttonTitle={item.buttonTitle}
        buttonUrl={item.buttonUrl}
        cardDetailList={item.cardDetailList}
      />
    </div>
  );
};

export default CardCarouselItem;
