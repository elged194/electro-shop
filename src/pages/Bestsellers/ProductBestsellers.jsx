const ProductBestsellers = () => {
  const product = [
    { id: 1, name: "Tablets Air 3Wifi 64GB Gold 1", price: 100.89, img:`./img/bes1.png` },
    { id: 2, name: "Tablets Air 3Wifi 64GB Gold 2", price: 200.89, img:`./img/bes2.png` },
    { id: 3, name: "Tablets Air 3Wifi 64GB Gold 3", price: 300.89, img:`./img/bes3.png` },
    { id: 4, name: "Tablets Air 3Wifi 64GB Gold 4", price: 400.89, img:`./img/bes4.png` },
    { id: 5, name: "Tablets Air 3Wifi 64GB Gold 5", price: 500.89, img:`./img/bes5.png` },
    { id: 6, name: "Tablets Air 3Wifi 64GB Gold 6", price: 600.89, img:`./img/bes6.png` },
  ];

  return (
    <>
      {/* // --------/ product /----------- */}
      {product.map((item) => (
        <div
          className="SpecialOffCard max-sm:w-full max-lg:w-6/12 w-2/6  p-1 my-1 hover:my-0 flex items-center justify-between relative overflow-hidden cursor-pointer hover:border-2 rounded-md "
          key={item.id}
        >
          {/* images */}
          <div className="w-2/5 bg-white m-auto">
            <img
              src={item.img}
              className="mb-2 m-auto"
              alt=""
            />

            {/* images grop */}
            <div className="invisible flex items-center justify-evenly  ">
              <img
                src="https://via.placeholder.com/30x30?text=30x30"
                className="rounded-full"
                alt=""
              />
              <img
                src="https://via.placeholder.com/30x30?text=30x30"
                className="rounded-full"
                alt=""
              />
              <img
                src="https://via.placeholder.com/30x30?text=30x30"
                className="rounded-full"
                alt=""
              />
            </div>
          </div>

          {/* body */}
          <div className="w-3/5 px-2">
            {/* title */}
            <p className="text-gray-400">Tablets</p>
            <h3 className="font-bold text-blue-700">{item.name}</h3>

            {/* price */}
            <div className="flex items-center justify-between mt-5 mb-4">
              <p className="price text-lg font-semibold text-zinc-800">
                ${item.price}
                <span className="invisible ml-2 text-gray-500 text-xs">
                  1200.00
                </span>
              </p>
              <a href="" className=" flex items-center justify-center">
                <i className="add-cart bx bx-cart-add p-1.5 text-white bg-gray-300  rounded-full text-xl"></i>
              </a>
            </div>

            <div className="invisible flex items-center justify-between  text-gray-500">
              <p>
                <i className="bx bx-repost mr-1"></i> Compare
              </p>
              <p>
                <i className="bx bx-heart mr-1"></i> Wishlist
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductBestsellers;
