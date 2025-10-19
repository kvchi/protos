import { useEffect, useState, useRef } from "react";
import {
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../assets/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroSlide from "../components/HeroSlide";
import SearchBar from "../components/SearchBar"; // ✅ import SearchBar

export default function Embla() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Detect login state
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const guestSlides = [
    {
      image: image2,
      title: ["Discover and explore", "opportunities around you"],
      text: [
        "Easily plan your ideal ski trip from home",
        "with the help of professionals",
      ],
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

  const loggedInSlides = [
    {
      image: image5,
      title: ["Yemkemo Bookshop"],
      text: [
        "Take your reading skills to another level. Explore Maserati",
        "Store for latest editions of your books.",
      ],
    },
    {
      image: image6,
      title: ["Yemkemo Reserve and Suite"],
      text: [
        "Take your reading skills to another level. Explore Maserati",
        "Store for latest editions of your books.",
      ],
    },
    {
      image: image7,
      title: ["Meserrati Automobile"],
      text: [
        "Take your reading skills to another level. Explore Maserati",
        "Store for latest editions of your books.",
      ],
    },
  ];

  const slidesToShow = isLoggedIn ? loggedInSlides : guestSlides;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  const handleFocus = () => autoplay.current.stop();
  const handleBlur = () => autoplay.current.play();

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slidesToShow.map((slide, i) => (
            <HeroSlide key={i} {...slide} isLoggedIn={isLoggedIn} />
          ))}
        </div>
      </div>

      {!isLoggedIn && (
        <div className="absolute bottom-15 md:bottom-30 lg:bottom-30 left-1/2 md:left-[19rem] lg:left-[24rem] -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] z-20">
          <SearchBar onFocus={handleFocus} onBlur={handleBlur} />
        </div>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slidesToShow.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-4 h-4 bg-yellow-500"
                : "w-3 h-3 bg-gray-300"
            }`}
            onClick={() => emblaApi.scrollTo(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
