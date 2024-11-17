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
        <Link
          to="/"
          className="flex items-center justify-center h-8  p-[10px] bg-red-500 text-white rounded-md "
          title="BirBank"
          aria-label="BirBank"
          target="blank"
          rel="noopener"
        >
          birbank
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
