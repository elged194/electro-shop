import ProductSlider from "./Product Slider/productSlider";

const ProductMenu = () => {
  return (
    <>
      <div className="w-full my-5">
        {/* menuo */}
        <nav className="w-full ">
          <ul className="w-full z-0 border-b-2 border-gray-300 flex items-center justify-between p-1 pb-0">
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 z-10 border-b-2 border-yellow-500">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
            <li className="py-1 px-2 font-medium cursor-pointer hover:border-b-2 border-yellow-500  ">
              Best Deals
            </li>
          </ul>
        </nav>

        {/* product */}
        <div className="flex items-start justify-between py-1">
            <ProductSlider/>
        </div>
      </div>
    </>
  );
};

export default ProductMenu;
