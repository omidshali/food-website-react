import { useState } from "react";
import {
  AiOutlineMenu,
  AiFillTag,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] flex mx-auto justify-between items center p-4 ">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(true)} className="cursor-pointer mr-4">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex bg-gray-200 rounded-full p-1 items-center text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* searchinput */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent w-full focus:outline-none p-2"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* card button */}
      <button className="hidden md:flex rounded-full items-center bg-black text-white py-2">
        <BsFillCartFill size={25} className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu overlay */}
      {nav && (
        <div className="fixed top-0 left-0 bg-black/80 w-full h-screen z-10"></div>
      )}

      {/* Side dtawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 z-10 bg-white w-[300px] h-screen duration-300"
            : "fixed top-0 left-[-100%] z-10 bg-white w-[300px] h-screen duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => {
            setNav(false);
          }}
          size={30}
          className="absolute cursor-pointer right-4 top-4"
        />
        <h2 className="p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl my-4 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="flex text-xl my-4 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
