import { useState, useEffect } from "react";
import TestimonialRecentlyViewed from "./Testimonial";

const RecentlyViewed = () => {
  const products = [
    { id: 1, img:'./img/rec4.png' },
    { id: 2, img:'./img/rec5.png' },
    { id: 3, img:'./img/rec6.png' },
    { id: 4, img:'./img/rec1.png' },
    { id: 5, img:'./img/rec2.png' },
    { id: 6, img:'./img/rec3.png' },
    { id: 7, img:'./img/rec4.png' },
    { id: 8, img:'./img/rec5.png' },
    { id: 9, img:'./img/rec6.png' },
    { id: 10, img:'./img/rec4.png' },
    { id: 11, img:'./img/rec5.png' },
    { id: 12, img:'./img/rec6.png' },
    { id: 13, img:'./img/rec1.png' },
    { id: 14, img:'./img/rec2.png' },
    { id: 15, img:'./img/rec3.png' },
    { id: 16, img:'./img/rec4.png' },
    { id: 17, img:'./img/rec5.png' },
    { id: 18, img:'./img/rec6.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(6);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setItemsPerSlide(6); // الشاشات الكبيرة
      } else if (screenWidth >= 768) {
        setItemsPerSlide(3); // الشاشات المتوسطة
      } else {
        setItemsPerSlide(1); // الشاشات الصغيرة جدًا والصغيرة
      }
    };

    // Set initial value
    updateItemsPerSlide();

    // Update on resize
    window.addEventListener("resize", updateItemsPerSlide);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(products.length / itemsPerSlide) - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(products.length / itemsPerSlide) - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-3 mx-auto">
          {/* topBar */}
          <div className="mt-6 md:flex md:items-center md:justify-between border-b border-gray-300">
            {/* title */}
            <div className="">
              <h1 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl">
                Recently Viewed
              </h1>

              {/* border */}
              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-yellow-400 rounded-full" />
              </div>
            </div>

            {/* arrow button */}
            <div className="flex justify-between mt-8 md:mt-0">
              <button
                onClick={handlePrev}
                title="left arrow"
                className="px-2 text-gray-800 transition-colors hover:text-yellow-400"
              >
                <i className="bx bx-chevron-left text-2xl"></i>
              </button>
              <button
                onClick={handleNext}
                title="right arrow"
                className="px-2 text-gray-800 transition-colors hover:text-yellow-400"
              >
                <i className="bx bx-chevron-right text-2xl"></i>
              </button>
            </div>
          </div>

          {/* content */}
          <TestimonialRecentlyViewed
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            products={products}
            itemsPerSlide={itemsPerSlide}
          />
        </div>
      </section>
    </>
  );
};

export default RecentlyViewed;
