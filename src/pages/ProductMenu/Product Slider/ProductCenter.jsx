import { useState } from "react";

const ProductCenter = () => {
  const products = [
    { id: 1, name: "Product 1", img: "./img/sli1.png", price: 100.59 },
    { id: 2, name: "Product 2", img: "https://via.placeholder.com/800x600?text=800x600", price: 200.59 },
    { id: 3, name: "Product 3", img: "./img/sli1.png", price: 300.59 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {products.map((item, index) => (
        <div
          key={item.id}
          className="SpecialOffCard relative w-full"
          style={{ display: currentIndex === index ? "block" : "none" }}
        >
          <div className="bg-base-100 w-full mx-auto px-2 py-1  ">
            <p className="text-gray-400">Speakers</p>
            <h2 className="mb-2 text-blue-700 font-medium">{item.name}</h2>
            <figure className="w-full flex items-center justify-center">
              <img src={item.img} alt={item.name} className="rounded-xl" />
            </figure>
            <div className="flex items-center justify-between mt-1 px-2 py-1 text-lg font-medium">
                {/* price */}
              <div className="text-red-700 flex items-center text-xl">
                ${item.price}
                <p className=" text-gray-400 text-xs mx-2">$2.299.00</p>
              </div>

              {/* add cart */}
              <a
                href="#"
                className="add-cart bg-gray-300 text-white px-4 py-1.5 text-sm rounded-full hover:bg-yellow-400"
              >
                <i className="bx bx-cart-add text-lg"></i>
                Add to Cart
              </a>
            </div>
            
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {products.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
              currentIndex === index ? "bg-yellow-400 px-4" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCenter;
