"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slideshow/image1.jpg",
  "/slideshow/image2.jpg",
  "/slideshow/image3.jpg",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slideshow image ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
