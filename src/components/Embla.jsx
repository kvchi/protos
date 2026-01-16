import { useEffect, useState } from "react";
import {
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
} from "../assets/images";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroSlide from "../components/HeroSlide";
import SearchBar from "../components/SearchBar";

export default function Embla() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="relative w-full overflow-hidden">
     
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2500}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="overflow-hidden"
      >
        {slidesToShow.map((slide, i) => (
          <SwiperSlide key={i}>
            <HeroSlide {...slide} isLoggedIn={isLoggedIn} />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isLoggedIn && (
        <div className="absolute bottom-15 md:bottom-30 lg:bottom-30 left-1/2 md:left-[19rem] lg:left-[30rem] -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] z-20">
          <SearchBar />
        </div>
      )}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slidesToShow.map((_, i) => (
          <button
            key={i}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "w-4 h-4 bg-yellow-500"
                : "w-3 h-3 bg-gray-300"
            }`}
            onClick={() => document.querySelector(".swiper").swiper.slideToLoop(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
