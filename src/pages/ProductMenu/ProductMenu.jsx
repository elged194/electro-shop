import { useState } from "react";
import ProductSlider from "./Product Slider/productSlider";

const ProductMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full my-5">
        {/* menuo */}
        <nav className="w-full">
          {/* فتح وقفل المنيو في الشاشات الصغيره */}
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
            className={`w-full z-0 border-b-2 border-gray-300 flex items-center justify-between p-1 pb-0 ${
              isOpen ? "block" : "hidden"
            } lg:flex lg:flex-row flex-col`}
          >
            <li className="py-1 px-2 font-medium cursor-pointer border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500">
              Best Deals
            </li>
          </ul>
        </nav>

        {/* product */}
        <div className="flex items-start justify-between py-1 lg:flex-row flex-col">
          <ProductSlider />
        </div>
      </div>
    </>
  );
};

export default ProductMenu;
