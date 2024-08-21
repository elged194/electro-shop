import Slider from "./slider";

const Header = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-0  ">
        {/* Side Bar */}
        <div className="row-span-full shadow-2xl text-zinc-700">
          <h3 className="bg-yellow-400 rounded-t-lg  py-3 px-5 w-full text-lg flex items-center text-neutral-800 font-medium">
            <i className="bx bx-menu-alt-right text-2xl px-2"></i>
            All Departments
          </h3>

          <ul className="font-medium px-3">
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

        <div className=" col-span-10 row-span-full rounded-t-lg bg-white ">
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
          <div className="h-auto  ">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
