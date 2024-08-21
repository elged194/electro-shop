import { useState, useEffect } from "react";

const Branding = () => {
  const [visibleImages, setVisibleImages] = useState(1);

  useEffect(() => {
    const updateVisibleImages = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setVisibleImages(5); // lg: 5 images
      } else if (screenWidth >= 768) {
        setVisibleImages(3); // md: 3 images
      } else {
        setVisibleImages(1); // sm and xs: 1 image
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);

  const images = [
    "https://via.placeholder.com/150x50?text=150x50",
    "https://via.placeholder.com/150x50?text=150x50",
    "https://via.placeholder.com/150x50?text=150x50",
    "https://via.placeholder.com/150x50?text=150x50",
    "https://via.placeholder.com/150x50?text=150x50",
  ];

  return (
    <>
      <section className="w-full my-8 p-2 border-y border-gray-400 flex items-center justify-between">
        {/* Prev Button */}
        <button className="mx-3">
          <i className="bx bx-chevron-left text-2xl text-gray-400"></i>
        </button>

        {/* Brand items */}
        <section className="w-11/12 flex items-center justify-between max-lg:justify-center">
          {images.slice(0, visibleImages).map((src, index) => (
            <img key={index} src={src} alt={`Brand ${index + 1}`} />
          ))}
        </section>

        {/* Next Button */}
        <button className="mx-3">
          <i className="bx bx-chevron-right text-2xl text-gray-400"></i>
        </button>
      </section>
    </>
  );
};

export default Branding;
