import React from "react";
import { NewsItem } from "../../../../home/News/types";
import {Link} from "react-router-dom"
export const NewsCarouselItem: React.FC<{
  item: NewsItem;
  handleNext: () => void;
}> = ({ item }) => {
  console.log(item);
  return (
    <Link to="/" className="flex text-textPrimaryColor group gap-10">
      <div className="flex flex-col items-center">
        <span className="flex items-center justify-center rounded-full bg-white border border-mainColor hover:bg-mainColor w-[48px] h-[48px] text-2xl hover:text-white group-hover:bg-mainColor group-hover:text-white">
          {item.day}
        </span>
        <span>{item.month}</span>
      </div>
      <div>
        <p className="w-[215px] group-hover:text-mainColor">
          {item.content}
        </p>
      </div>
    </Link>
  );
};
