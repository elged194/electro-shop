import ProductCenter from "./ProductCenter";
import ProductLeft from "./ProductLeft";
import ProductRight from "./ProductRight";

const ProductSlider = () => {
  return (
    <>
      {/* Product Left */}
      <div className="w-1/4">
        <ProductLeft />
      </div>

      {/* Product Center */}
      <div className="w-2/4 relative overflow-hidden">
        <ProductCenter />
      </div>

      {/* Product Right */}
      <div className="w-1/4">
        <ProductRight />
      </div>
    </>
  );
};

export default ProductSlider;
