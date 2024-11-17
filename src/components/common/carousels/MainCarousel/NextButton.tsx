import { MdArrowForwardIos } from "react-icons/md";
interface ArrowProps {
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-full   text-gray-500 hover:text-gray-700 z-50"
    onClick={onClick}
  >
    <MdArrowForwardIos size={24} className="ml-1" />
  </button>
);
