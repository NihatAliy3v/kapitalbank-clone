import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const NewsHeader = () => {
  return (
    <div className="flex justify-between items-center border-b-[3px] border-white mb-10">
      <h2 className="pb-[15px] text-4xl font-semibold">Xəbərlər</h2>
      <Link
        to="/"
        className="text-mainColor font-light flex items-center gap-3"
      >
        Bütün xəbərlər
        <FaArrowRight />
      </Link>
    </div>
  );
};
