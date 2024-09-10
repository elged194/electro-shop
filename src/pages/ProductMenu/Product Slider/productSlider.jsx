import ProductCenter from "./ProductCenter";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

const ProductSlider = () => {
  return (
    <>
      {/* Product Left */}
      <div className="  max-lg:my-1 max-lg:w-full w-1/4 flex flex-wrap ">
        <ProductLeft />
      </div>

      {/* Product Center */}
      <div className=" relative overflow-hidden max-lg:w-full w-2/4 max-lg:my-1 ">
        <ProductCenter />
      </div>

      {/* Product Right */}
      <div className="  max-lg:my-1 max-lg:w-full w-1/4 flex flex-wrap">
        <ProductRight />
      </div>
    </>
  );
};

export default ProductSlider;
