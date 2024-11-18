import { MdArrowBackIos } from "react-icons/md";
interface ArrowProps {
  onClick?: () => void;
}
export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="w-[32px] h-[32px] flex justify-center items-center rounded-full  text-gray-500 hover:text-gray-700 z-50"
    onClick={onClick}
  >
    <MdArrowBackIos size={24} className="ml-2" />
  </button>
);
