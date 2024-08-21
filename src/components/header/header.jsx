import { useState } from "react";
import Slider from "./slider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex items-start justify-between max-lg:flex-col">
        {/* Side Bar */}
        <div className="w-1/5 shadow-2xl text-zinc-700 max-lg:w-full ">
          <h3
            onClick={() => setIsOpen(isOpen ? false : true)}
            className="bg-yellow-400  rounded-t-lg max-lg:cursor-pointer py-3 px-5 w-full text-lg flex items-center text-neutral-800 font-medium"
          >
            <i className="bx bx-menu-alt-right text-2xl px-2"></i>
            All Departments
          </h3>

          <ul
            className={`  font-medium px-3  ${
              isOpen ? "block" : "hidden"
            }  lg:block`}
          >
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 font-bold ">
              Valuo of the day
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 font-bold ">
              Top 100 Offers
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 font-bold ">
              New Arrivals
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              Laptops & Computers{" "}
              <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              Laptops & Computers{" "}
              <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              Laptops & Computers{" "}
              <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              Laptops & Computers{" "}
              <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              TV & Audio <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 border-b border-gray-400 flex items-center justify-between ">
              TV & Audio <i className="bx bx-chevron-right text-xl"></i>
            </li>
            <li className="py-2 px-3 cursor-pointer hover:bg-yellow-400 flex items-center justify-between ">
              TV & Audio <i className="bx bx-chevron-right text-xl"></i>
            </li>
          </ul>
        </div>

        <div className="w-4/5 rounded-t-lg bg-white max-lg:w-full">
          {/* menuo */}
          <div className=" row-span-1 h-12 px-2 py-3 text-zinc-700">
            <a
              className="mx-4 text-sm font-bold transition-colors text-red-700 "
              href="#"
            >
              Super Deals
            </a>

            <a
              className="mx-4 text-sm font-bold transition-colors hover:text-red-700 "
              href="#"
            >
              Featured Brands
            </a>
            <a
              className="mx-4 text-sm font-bold transition-colors hover:text-red-700 "
              href="#"
            >
              Trending Styles
            </a>
            <a
              className="mx-4 text-sm font-bold  transition-colors  hover:text-red-700"
              href="#"
            >
              Gift Cards
            </a>
            <a
              className="mx-4 text-sm font-bold transition-colors hover:text-red-700 "
              href="#"
            >
              Blog
            </a>
          </div>

          {/* slider */}
          <div className="h-auto max-lg:text-base ">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
