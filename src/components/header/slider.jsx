import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

  // Update slide position every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <div className="w-full relative h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 flex justify-center items-center bg-indigo-50"
          style={{
            display: currentSlide === index ? "block" : "none",
            height: "100%", // Ensure each slide takes full height
          }}
        >
          {/* Placeholder for image */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-5xl text-zinc-700 font-sans bg-transparent z-10">
            <h1 className="mb-2">THE NEW</h1>
            <h1 className="text-5xl">STANDARD</h1>
            <p className="text-sm font-bold mt-2">
              UNDER FAVORABLE SMARTWATCHES
            </p>
            <h1 className="text-4xl font-bold text-zinc-900 mt-3">
              <sup>$</sup>794<sup>99</sup>
            </h1>
            <button className="bg-yellow-400 text-sm px-8 py-1.5 rounded-lg font-medium hover:bg-yellow-300 transition">
              Start Buying
            </button>
          </div>

          <img
            src={`https://via.placeholder.com/800x600?text=${slide}`}
            alt={slide}
            className="absolute inset-0 w-full h-full object-cover "
            style={{ opacity: 0.5 }} // Adjust opacity to make it less visible if needed
          />
        </div>
      ))}

      <div className="absolute right-10 top-1/3 flex flex-col space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-yellow-400 py-4" : "bg-indigo-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
