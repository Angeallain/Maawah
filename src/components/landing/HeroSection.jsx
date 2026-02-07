import { useState, useEffect } from "react";

import hero1 from "../../images/hero_image1.png";
import hero2 from "../../images/hero_image2.png";
import hero3 from "../../images/hero_image3.png";

export default function HeroSection() {

  const images = [hero1, hero2, hero3];

  const [index, setIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">

      {/* Background Images */}
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-[56px] font-bold max-w-4xl leading-tight">
          Together, We Build
          <br />
          Stronger Communities
        </h1>

        <p className="mt-6 text-gray-200 max-w-2xl text-lg">
          Connecting local needs with global hearts through volunteers, tools,
          and shared resources for a sustainable future.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#6B8E23] px-8 py-3 rounded-xl font-semibold">
            Register Now
          </button>

          <button className="bg-white/20 px-8 py-3 rounded-xl backdrop-blur">
            Login
          </button>
        </div>

      </div>

    </section>
  );
}