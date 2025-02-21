import { MdArrowForwardIos } from "react-icons/md";
interface ArrowProps {
  onClick?: () => void;
}

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="w-[32px] h-[32px]  flex justify-center items-center rounded-full   text-gray-400 hover:text-gray-950  z-50 absolute right-0 top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <MdArrowForwardIos size={24} className="ml-1" />
  </button>
);
