const ProductSalesTracker = () => {
  const totalProducts = 6; // Total products available
  const soldProducts = 28; // Products sold

  // Calculate remaining products
  const remainingProducts =   soldProducts - totalProducts;

  // Calculate the percentage of remaining products
  const percentageRemaining = (  totalProducts /remainingProducts) * 100;

  return (
    <div className=" py-4 px-6">
      <div className="w-full mb-4">
        <label
          htmlFor="percentageRemaining"
          className="flex items-center justify-between font-bold"
        >
          <span>Availavle:6</span>
          <span>Alrady Sold:28</span>
        </label>
        <input
          type="range"
          id="percentageRemaining"
          value={percentageRemaining}
          readOnly
          className="w-full cursor-default"
          min="0"
          max="100"
        />
      </div>
      <div className="text-lg font-bold">
        {/* {percentageRemaining.toFixed(2)}% */}
      </div>
    </div>
  );
};

export default ProductSalesTracker;
