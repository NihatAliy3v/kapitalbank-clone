import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface ArrowButtonLinkProps {
  text: string;
  textColor: string;
  bgColor: string;
  width: string;
  height: string;
  url: string;
  radius: string;
  textSize: string;
  hoverColor: string;
  fontWeight:string;
}

const ArrowButtonLink: React.FC<ArrowButtonLinkProps> = ({
  text,
  textColor,
  bgColor,
  width,
  height,
  url,
  radius,
  textSize,
  hoverColor,
  fontWeight="font-extralight"
}) => {
  return (
    <Link
      to={url}
      className={`flex items-center justify-center gap-2 ${textSize} ${textColor} ${bgColor} ${width} ${height} ${radius} ${hoverColor} transition-all duration-300 ${fontWeight}`}
    >
      {text}
      <FaArrowRight size={15} className="mt-[3px]"/>
    </Link>
  );
};

export default ArrowButtonLink;
