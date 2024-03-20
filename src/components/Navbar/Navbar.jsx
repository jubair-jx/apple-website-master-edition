import { navLists } from "../../constant";
import { appleImg, bagImg, searchImg } from "../../utils";

const Navbar = () => {
  return (
    <header className=" w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className=" flex w-full screen-max-width">
        <img src={appleImg} alt="Apple logo" height={18} width={14} />
        <div className=" flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <div
              className=" px-5 text-sm cursor-pointer text-gray hover:text-white transition-all duration-500"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>

        <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            className=" cursor-pointer"
            src={searchImg}
            alt="Search Image"
            height={18}
            width={14}
          />
          <img
            className=" cursor-pointer"
            src={bagImg}
            alt="Bag Image"
            height={18}
            width={14}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
