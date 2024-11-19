import React from "react";
import { Link } from "react-router-dom";

interface MainButtonLinkProps {
  text: string;
  textColor: string;
  bgColor: string;
  width: string;
  height: string;
  url: string;
  radius: string;
  textSize: string;
  hoverColor: string;
}

const MainButtonLink: React.FC<MainButtonLinkProps> = ({
  text,
  textColor,
  bgColor,
  width,
  height,
  url,
  radius,
  textSize,
  hoverColor,
}) => {
  return (
    <Link
      to={url}
      className={`flex items-center justify-center ${textSize} ${textColor} ${bgColor} ${width} ${height} ${radius} hover:${hoverColor} transition-all duration-300`}
    >
      {text}
    </Link>
  );
};

export default MainButtonLink;
