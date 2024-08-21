import { useState } from "react";
import ProductBestsellers from "./ProductBestsellers";

const Bestsellers = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Bestsellers Section */}
      <section className="w-full flex flex-wrap my-5 max-lg:flex-col">
        {/* topbar */}
        <div className="w-full border-b border-gray-300 mb-2 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl">
              Bestsellers
            </h1>

            {/* border */}
            <div className="flex mx-auto mt-4">
              <span className="inline-block w-24 h-1 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* فتح وقفل المنيو في الشاشات الصغيره  */}
          <div className="block lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i
                className={`bx ${
                  isOpen ? "bx-x" : "bx-menu"
                } text-4xl text-blue-800`}
              ></i>
            </button>
          </div>

          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex items-center font-medium max-lg:flex-col`}
          >
            <li className="cursor-pointer border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Top 20
            </li>
            <li className="cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
            <li className="cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
            <li className="cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
          </ul>
        </div>

        {/* ProductBestsellers */}
        <section className=" flex justify-between flex-wrap w-full">
          <ProductBestsellers />
        </section>

        {/* -------/ baner /------ */}
        <div className="w-full relative overflow-hidden mt-5">
          <div className="w-full m-auto">
            <img
              src="https://via.placeholder.com/1300x200?text=1300x170"
              alt="Banner"
            />
          </div>

          <div className="absolute left-14 max-lg:left-0 inset-y-1/2 flex items-center">
            <div className="px-5 border-r border-gray-600 text-4xl max-lg:text-xl font-light leading-none">
              <h1 className="tracking-tighter">
                SHOP AND <span className="font-semibold">SAVE BIG</span>
              </h1>
              <h1 className="tracking-wide">ON HOTTEST TABLETS</h1>
            </div>

            <a
              href="#"
              className="ml-8 max-lg:ml-4 py-4 px-9 max-lg:px-3 max-lg:py-1 bg-yellow-400 rounded-xl text-2xl max-lg:text-base text-zinc-800 font-bold"
            >
              <sup>$</sup>79<sup>99</sup>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bestsellers;
