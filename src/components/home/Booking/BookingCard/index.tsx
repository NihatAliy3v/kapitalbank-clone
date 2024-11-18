import React from "react";
import { Link } from "react-router-dom";

interface BookingCardProps {
  preContent: string;
  postContent: string;
  imgUrl: string;
  alt: string;
  difWidth?: boolean;
}

const BookingCard: React.FC<{ data: BookingCardProps }> = ({ data }) => {
  return (
    <Link to="" className="p-6 bg-white rounded-lg shadow-booking w-[202px]">
      <div
        className={`mb-6 mx-auto  ${data?.difWidth ? "w-[50px]" : "w-[42px]"}`}
      >
        <img src={data.imgUrl} alt={data.alt} width="50"/>
      </div>
      <div className="">
        <p className="text-lg text-center leading-[27px]">
          <strong className="font-semibold">{data.preContent}</strong>{" "}
          {data.postContent}
        </p>
      </div>
    </Link>
  );
};

export default BookingCard;
