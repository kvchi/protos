"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import cate from "../assets/images/cate.png";
import cate2 from "../assets/images/cate2.png";
import cate3 from "../assets/images/cate3.png";

export default function Embla3() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchSlides: false }, // disable translate-based sliding
    [Autoplay({ delay: 3000 })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect(); // set initial
  }, [emblaApi]);

  const images = [cate, cate2, cate3];

  return (
    <div className="relative w-full h-[600px] overflow-hidden" ref={emblaRef}>
      <div className="relative w-full h-full">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              selectedIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover scale-110 animate-zoomSlow"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-4 h-4 bg-yellow-500"
                : "w-3 h-3 bg-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
