import { useEffect, useState, useRef } from "react";
import { cate, cate2, cate3 } from "../assets/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SearchBar from "../components/SearchBar"; // ✅ import it here

export default function Embla2() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      image: cate,
      title: ["Meet your fashion", "expectations"],
      text: [
        "Interesting fashion businesses and",
        "individuals ready to bring your fashion ideology to life.",
      ],
      button: "Explore fashion world",
    },
    {
      image: cate2,
      title: ["All technology gadgets", "are available"],
      text: ["Get the latest tech gadgets here with convenience."],
      button: "Explore technology world",
    },
    {
      image: cate3,
      title: ["Bring your dream", "furniture to life"],
      text: [
        "Do you have a dream furniture you want to bring to life?",
        "Get all you want here with ease.",
      ],
      button: "Check latest trends",
    },
  ];

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden w-full mt-[-20px]" ref={emblaRef}>
      {/* Slides */}
      <div className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full relative h-[80vh]">
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute top-4 left-4 lg:top-20 lg:left-30 z-10 text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                {slide.title.map((line, index) => (
                  <span key={index} className={`block ${index > 0 ? "mt-5" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>

              <p className="text-base md:text-lg font-light leading-tight font-nunito mt-8">
                {slide.text.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <p className="bg-[#0E375F] p-4 inline-block mt-10 rounded-md">
                {slide.button}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Shared Search Bar */}
      <div className="absolute bottom-30 left-1/4 -translate-x-1/2 z-20">
        <SearchBar
          onFocus={() => autoplay.current.stop()}
          onBlur={() => autoplay.current.play()}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
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
