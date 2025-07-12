import { NavLink } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useContext } from "react";
import { Data2Send } from "../../assets/BakeryData";

const StickyNav = () => {
  const [inp, setInp] = useState("");
  console.log(inp);

  const { filterInp } = useContext(Data2Send);

  return (
    <header className="w-full flex flex-row flex-wrap justify-between items-center shadow-[0_2px_4px_0_rgba(0,0,0,0.4)] bg-gray-200 sticky top-0 z-9999 p-2 pt-0">
      <section className="flex flex-row items-center justify-between w-full sm:w-full md:w-full lg:w-fit">
        <div className="flex flex-row items-center">
          <img
            src="src/assets/imgs/main.png"
            alt="home icon"
            className="h-25 w-25"
          />
          <NavLink
            to="/"
            className="text-2xl  hover:text-yellow-600 text-yellow-500 hover:cursor-pointer"
          >
            Honey's Bakery
          </NavLink>
        </div>
        <NavLink
          to="/products"
          className="text-xl ml-4 hover:text-purple-700 w-50 text-purple-400 text-center hover:cursor-pointer hover:scale-98 border rounded-xl px-5 py-2"
        >
          Buy Now!!!
        </NavLink>
      </section>
      <section className="flex flex-row justify-between items-center w-full sm:w-full md:w-full lg:w-fit">
        <div className=" flex flex-row justify-between gap-1 items-center mr-3 p-2 rounded-sm bg-gray-300 w-full sm:w-fit md:w-fit">
          <input
            type="text"
            placeholder="search..."
            className=" focus:outline-none text-xl placeholder:text-gray-500 placeholder:italic "
            onChange={(e) => setInp(e.target.value)}
          />
          <IoSearchOutline
            className="text-3xl hover:cursor-pointer "
            onClick={() => filterInp(inp)}
          />
        </div>
        <div className="flex flex-row text-3xl ">
          <IoMdHeart className="hover:cursor-pointer hover:text-red-500" />
          <AiOutlineShoppingCart className="hover:cursor-pointer hover:text-blue-400" />
        </div>
      </section>
    </header>
  );
};

export default StickyNav;
