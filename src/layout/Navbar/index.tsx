import MainButtonLink from "../../components/ui/MainButtonLink";
import { navList } from "./navList";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-[#e8ecf1] border-y-2 border-white h-[66px]">
      <div className="container flex justify-between items-center">
        <ul className="flex">
          {navList.map((item) => (
            <li key={item.name} className="pr-5">
              <Link to={item.path} className="flex py-5 text-[13px] ">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <MainButtonLink
          text="birbank"
          url="/"
          width="w-[100px]"
          height="h-8"
          bgColor="bg-mainColor"
          textColor="text-white"
          radius="md"
          textSize="text-md"
          hoverColor="bg-mainColorHover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
