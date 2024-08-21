const ProductFaveItem = () => {
  const product = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <>
      {product.map((item) => (
        <div className="p-2 flex items-center justify-between" key={item.id}>
          {/* image */}
          <div className="w-1/4">
            <img src="https://via.placeholder.com/85x100?text=85x100" alt="" />
          </div>

          {/* body card */}
          <div className="w-3/4">
            <h2 className="text-lg text-blue-800 font-bold">
              Purple Wireless Headphones Solo 2 HD
            </h2>

            {/* star */}
            <div className="text-base text-yellow-400 flex items-center ">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>

            <p className="text-gray-500 font-bold text-base mt-2">$1194.00 
                <span className="text-xs text-gray-400 ml-3">$250.00</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductFaveItem;
