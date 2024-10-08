const SpecialOffCard = () => {
  const product = [
    {
      id: 1,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro1.png",
      price: 685.88,
    },
    {
      id: 2,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro2.png",
      price: 685.98,
    },
    {
      id: 3,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro3.png",
      price: 685.99,
    },
    {
      id: 4,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro4.png",
      price: 685.99,
    },
    {
      id: 5,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro5.png",
      price: 685.99,
    },
    {
      id: 6,
      name: "Suartphone 6s 32GB LTE",
      img: "./img/pro6.png",
      price: 685.99,
    },
  ];

  return (
    <>
      {product.map((item) => (
        <div className="SpecialOffCard w-4/12 relative  max-lg:w-6/12 max-sm:w-full" key={item.id}>
          <div className="bg-base-100 w-full mx-auto hover:border-2 p-4 rounded-lg cursor-pointer ">
            {/* titele */}
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
              {/* my cart */}
              <a
                href="#"
                className="add-cart bg-gray-300 text-white px-2 py-1 rounded-full hover:bg-yellow-400"
              >
                <i className="bx bx-cart-add"></i>
              </a>
            </div>

            <div className="add-wishlist invisible w-full flex items-center justify-between p-2 text-base text-gray-600 font-medium">
              <a href="#">
                <i className="bx bx-repost"></i>Compare
              </a>
              <a href="#">
                <i className="bx bx-heart"></i> Add to Wishlist
              </a>
            </div>

            <div className="invisible w-full absolute left-0 inset-y-2/4	 px-2 z-0">
              <div className="flex items-center justify-between text-2xl text-gray-400">
                <i className="bx cursor-pointer bx-chevron-left"></i>
                <i className="bx cursor-pointer bx-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecialOffCard;
