import Logo from "../../assets/images/logo.svg";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const languageList = [
    {
      name: "en",
    },
    {
      name: "ru",
    },
  ];

  return (
    <header>
      <div className="container py-5 flex">
        <div className="w-1/2">
          <Link to="/" className="flex h-[47.6px]">
            <img src={Logo} alt="Kapital Logo" className="w-[210px] h-[42px]" />
          </Link>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <ul className="flex text-sm gap-4 font-thin">
            <li className="font-bold flex items-center">
              <Link to="/">Fiziki şəxslər üçün</Link>
            </li>
            <li className="flex items-center">
              <Link to="/">Biznes üçün</Link>
            </li>
            <li className="flex items-center">
              <Link to="/" className="flex items-center gap-1">
                <span className="pb-1">
                  <FaLocationDot color="red" />
                </span>
                Xidmət şəbəkəsi
              </Link>
            </li>
            {languageList.map((item) => (
              <li key={item.name} className="uppercase flex items-center">
                {item.name}
              </li>
            ))}
            <li>
              <button className="flex items-center border border-red-700 w-[28px] h-[28px] justify-center rounded-lg text-[13px]">
                <FaSearch color="red" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
