const ProductCard = () => {
  const productCart = [
    { id: 1, name: "Product 1", offer: "Shop now" },
    { id: 2, name: "Product 2", offer: "UP 70%" },
    { id: 3, name: "Product 3", offer: "Shop now" },
    // يمكنك إضافة المزيد من المنتجات هنا
  ];

  return (
    <div className="py-6 my-8  flex items-center justify-between max-lg:flex-col">
      {productCart.map((product) => (
        <div
          key={product.id}
          className="flex w-1/3 max-lg:w-full  overflow-hidden bg-slate-100 rounded-lg shadow-lg  mb-4 mx-3 "
        >
          <div
            className="w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://via.placeholder.com/200x150?text=200x150")',
            }}
          />
          <div className="w-1/2 p-4 md:p-4">
            <h1 className="text-xl font-bold text-gray-800 ">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur.
            </p>

            <div className="flex justify-between mt-3 item-center">
              <p className="text-lg font-bold text-gray-700  md:text-md">
                {product.offer}
              </p>
              <button className="px-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-yellow-400 rounded-full  hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ">
                <i className="bx bx-chevron-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
