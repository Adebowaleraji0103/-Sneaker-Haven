

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const images = [
  { src: "images/shoes (1).jpg", type: "mobile" },
  { src: "images/shoes (2).jpg", type: "mobile" },
  { src: "images/shoes (3).jpg", type: "mobile" },
  { src: "images/shoes (4).jpg", type: "mobile" },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // change every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
      <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt="slideshow images"
          className={`absolute ${img.type === "mobile" ? "" : "hidden"} inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
          ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Static Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-xl mb-6">Find your style. Elevate your look.</p>
        <button className="px-6 py-3 bg-[#2ecc71] rounded-full text-white font-semibold hover:bg-[#27ae60] transition duration-300">
          Shop Now
        </button>
      </div>
      <Navbar/>
    </div>
  );
};

export default Banner;
