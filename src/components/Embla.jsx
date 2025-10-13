import { useEffect, useState, useRef } from "react";
import { image2, image3, image4 } from "../assets/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroSlide from "../components/HeroSlide";
import SearchBar from "../components/SearchBar";

export default function Embla() {
  // ✅ Create a ref to store the autoplay plugin
  const autoplay = useRef(Autoplay({ delay: 4000 })); 
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      image: image2,
      title: ["Discover and explore", "opportunities around you"],
      text: ["Easily plan your ideal ski trip from home", "with the help of professionals"],
    },
    {
      image: image3,
      title: ["Business opportunity and", "vast awareness"],
      text: ["Sushi restaurants, cozy bars, etc."],
    },
    {
      image: image4,
      title: ["Vacation opportunity is", "made easy"],
      text: ["Hotels, beach houses, and parties", "all at your convenience."],
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  // ✅ Functions to stop/resume autoplay
  const handleFocus = () => autoplay.current.stop();
  const handleBlur = () => autoplay.current.play();

  return (
    <div className="relative overflow-hidden w-full" ref={emblaRef}>
      {/* Slides */}
      <div className="flex">
        {slides.map((slide, i) => (
          <HeroSlide key={i} {...slide} />
        ))}
      </div>

      {/* Shared Search Bar */}
      <div className="absolute bottom-1/5 left-1/2 md:left-1/3 lg:left-1/4 transform -translate-x-1/2 -translate-y-0 md:-translate-y-1/2 z-20">
        <SearchBar onFocus={handleFocus} onBlur={handleBlur} />
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === i ? "w-4 h-4 bg-yellow-500" : "w-3 h-3 bg-gray-300"
            }`}
            onClick={() => emblaApi.scrollTo(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
