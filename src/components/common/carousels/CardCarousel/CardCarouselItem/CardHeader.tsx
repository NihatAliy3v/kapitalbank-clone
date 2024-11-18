import React from "react";

interface CardHeaderProps {
  cardName: string;
  cardContent: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ cardName, cardContent }) => {
  return (
    <div className="mb-[34px] h-[144px]">
      <div className="container text-textPrimaryColor">
        <h2 className="text-4xl mb-[14px]">
          Birbank <strong className="font-semibold">{cardName}</strong>
        </h2>
        <p className="text-lg mb-[16px] max-w-[580px] leading-[23px]">{cardContent}</p>
      </div>
    </div>
  );
};

export default CardHeader;
