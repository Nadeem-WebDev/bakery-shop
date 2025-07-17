import { NavLink } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useContext } from "react";
import { Data2Send } from "../../assets/BakeryData";
import main from "../../assets/imgs/main.png";

const StickyNav = () => {
  const [inp, setInp] = useState("");
  console.log(inp);

  const { filterInp } = useContext(Data2Send);

  return (
    <header className="w-full flex flex-row flex-wrap justify-between items-center gap-2 shadow-[0_2px_4px_0_rgba(0,0,0,0.4)] bg-gray-200 sticky top-0 z-9999 p-2 pt-0">
      <section className="flex flex-row items-center justify-between gap-3 w-full sm:w-full md:w-full lg:w-fit mt-2">
        <NavLink
          to="/"
          className="flex flex-row items-center text-xl md:text-2xl hover:text-yellow-600 text-yellow-500 hover:cursor-pointer active:scale-95"
        >
          <img src={main} alt="home icon" className="h-10 w-10 md:h-25 md:w-25" />
          Honey's Bakery
        </NavLink>
        <NavLink
          to="/products"
          className="text-xl hover:text-purple-700 text-purple-400 text-center hover:cursor-pointer hover:scale-98 active:scale-95 border rounded-xl px-5 py-2"
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
          <NavLink to="/products">
            <IoSearchOutline
              className="text-3xl hover:cursor-pointer "
              onClick={() => filterInp(inp)}
            />
          </NavLink>
        </div>
        <div className="flex flex-row text-3xl gap-2">
          <IoMdHeart className="hover:cursor-pointer hover:text-red-500 active:text-red-500" />
          <AiOutlineShoppingCart className="hover:cursor-pointer hover:text-blue-400 active:text-blue-400" />
        </div>
      </section>
    </header>
  );
};

export default StickyNav;
