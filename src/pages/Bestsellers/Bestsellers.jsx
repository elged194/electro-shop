const Bestsellers = () => {
  const product = [
    { id: 1, name: "Tablets Air 3Wifi 64GB Gold 1", price: 100.89 },
    { id: 2, name: "Tablets Air 3Wifi 64GB Gold 2", price: 200.89 },
    { id: 3, name: "Tablets Air 3Wifi 64GB Gold 3", price: 300.89 },
    { id: 4, name: "Tablets Air 3Wifi 64GB Gold 4", price: 400.89 },
    { id: 5, name: "Tablets Air 3Wifi 64GB Gold 5", price: 500.89 },
    { id: 6, name: "Tablets Air 3Wifi 64GB Gold 6", price: 600.89 },
  ];
  return (
    <>
      {/* Bestsellers Section */}
      <section className="w-full flex flex-wrap my-5 ">
        {/* topbar */}
        <div className="w-full border-b border-gray-300 mb-2 flex items-center justify-between">
          <div >
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl  ">
              Bestsellers
            </h1>

            {/* border */}
            <div className="flex mx-auto mt-4 ">
              <span className="inline-block w-24 h-1 bg-yellow-400 rounded-full " />
            </div>
          </div>

          <ul className="flex items-center font-medium">
            <li className=" cursor-pointer border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Top 20
            </li>
            <li className=" cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
            <li className=" cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
            <li className=" cursor-pointer hover:border-2 border-yellow-400 rounded-full py-0.5 px-3 mx-3">
              Phones & Tablets
            </li>
          </ul>
        </div>

        {/* // --------/ product /----------- */}
        {product.map((item) => (
          <div
            className="SpecialOffCard w-2/6 p-1 my-1 hover:my-0 flex items-center justify-between relative overflow-hidden cursor-pointer hover:border-2 rounded-md "
            key={item.id}
          >
            {/* images */}
            <div className="w-2/5 bg-white m-auto">
              <img
                src="https://via.placeholder.com/150x100?text=150x100"
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

        {/* -------/ baner /------ */}
        <div className="w-full relative overflow-hidden mt-5">
          <div className="w-full m-auto">
            <img
              src="https://via.placeholder.com/1300x170?text=1300x170"
              alt=""
            />
          </div>

          <div className="absolute left-14 top-1/4	flex items-center">
            <div className="px-5 border-r border-gray-600 text-4xl font-light leading-none	">
              <h1 className="tracking-tighter">
                SHOP AND <span className="font-semibold">SASVE BIG</span>
              </h1>
              <h1 className="tracking-wide ">NO HOTTEST TABLETS</h1>
            </div>
            <a
              href=""
              className="ml-8 py-4 px-9  bg-yellow-400 rounded-xl text-2xl text-zinc-800 font-bold"
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
