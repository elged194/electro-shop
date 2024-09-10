const ProductLeft = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone 6s 32GB LTE",
      img: "./img/sli2.png",
      price: 685.88,
    },
    {
      id: 2,
      name: "Smartphone 6s 32GB LTE",
      img: "./img/sli3.png",
      price: 685.98,
    },
  ];

  return (
    <>
      {products.map((item) => (
        <div className="SpecialOffCard relative  max-sm:w-full max-lg:w-6/12 w-full " key={item.id}>
          <div className="bg-base-100  mx-auto hover:border-2 p-4 rounded-lg cursor-pointer">
            {/* title */}
            <p className="text-gray-400">Speakers</p>
            <h2 className="mb-2 text-blue-700 font-medium">{item.name}</h2>

            {/* img */}
            <figure className="w-full flex items-center justify-center">
              <img src={item.img} alt={item.name} className="rounded-xl" />
            </figure>

            {/* price */}
            <div className="flex items-center justify-between px-2 py-1 text-lg font-medium">
              <div className="price text-gray-600">
                ${item.price}
                <p className="invisible text-gray-400 text-xs">$2.299.00</p>
              </div>

              {/* Add to Cart */}
              <a
                href="#"
                className="add-cart bg-gray-300 text-white px-2 py-1 rounded-full hover:bg-yellow-400"
              >
                <i className="bx bx-cart-add"></i>
              </a>
            </div>

            {/* Add to Wishlist */}
            <div className="add-wishlist invisible w-full flex items-center justify-between p-2 text-base text-gray-600 font-medium">
              <a href="#">
                <i className="bx bx-repost"></i> Compare
              </a>
              <a href="#">
                <i className="bx bx-heart"></i> Add to Wishlist
              </a>
            </div>
          </div>

          {/* Arrow Slider */}
          <div className="invisible w-full absolute inset-y-1/2 px-2">
            <div className="flex items-center justify-between text-2xl text-gray-400">
              <i className="bx cursor-pointer bx-chevron-left"></i>
              <i className="bx cursor-pointer bx-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductLeft;
