import PropTypes from "prop-types";

const TestimonialRecentlyViewed = ({
  currentIndex,
  products,
  itemsPerSlide,
  setCurrentIndex,
}) => {
  return (
    <div className="relative w-full">
      <section className="flex overflow-x-scroll">
        {products
          .slice(
            currentIndex * itemsPerSlide,
            (currentIndex + 1) * itemsPerSlide
          )
          .map((item) => (
            <div
              className="SpecialOffCard w-auto p-2 hover:border-2 border-gray-300 hover:p-1.5 cursor-pointer"
              key={item.id}
            >
              {/* title */}
              <div>
                <p className="text-xs text-gray-400">Game Consoles</p>
                <h2 className="font-bold text-blue-800">
                  GameConsoles Destiny Special Edition
                </h2>
              </div>
              {/* image */}
              <div className="flex items-center mt-2 justify-center">
                <img
                  src="https://via.placeholder.com/130x100?text=130x100"
                  alt="Product"
                />
              </div>
              {/* price */}
              <div className="flex items-center justify-between py-2 mb-2">
                <p className="text-lg text-zinc-700 font-medium">$100.00</p>
                <i className="add-cart bx bx-cart-add text-xl text-white bg-gray-300 p-2 rounded-full hover:bg-yellow-400"></i>
              </div>
              {/* hover section */}
              <div className="invisible w-full text-xs flex items-center justify-between">
                <a href="#">
                  <i className="bx bx-repost"></i> Compare
                </a>
                <a href="#">
                  <i className="bx bx-heart"></i> Add to Wishlist
                </a>
              </div>
            </div>
          ))}
      </section>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(products.length / itemsPerSlide) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
                currentIndex === index ? "bg-yellow-400 px-4" : "bg-gray-300"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

// تصحيح نوع `propTypes`
TestimonialRecentlyViewed.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsPerSlide: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default TestimonialRecentlyViewed;