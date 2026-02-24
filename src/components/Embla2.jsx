import { cate, cate2, cate3 } from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SearchBar from "../components/SearchBar";

export default function Embla2() {
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

  return (
    <div className="relative w-full overflow-hidden mt-[-20px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop={true}
        effect="fade"
        speed={2500}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-300",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-accent",
        }}
        className="w-full h-[80vh]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt="slide"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute top-6 left-4 right-4 sm:top-4 sm:left-6 md:left-8 md:top-6 lg:top-10 lg:left-[7.5rem] z-10 text-white pr-2 sm:pr-0">
                <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-[80px] font-extrabold leading-tight font-nunito">
                  {slide.title.map((line, idx) => (
                    <span key={idx} className={`block ${idx > 0 ? "mt-1 sm:mt-2 md:mt-3 lg:mt-5" : ""}`}>
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="text-base md:text-lg font-light leading-tight font-nunito mt-3 sm:mt-4 md:mt-6 lg:mt-8 max-w-xl">
                  {slide.text.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <p className="bg-primary text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2.5 md:p-4 inline-block mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-md">
                  {slide.button}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SearchBar responsive: inset on mobile, centered with max-width on sm+ */}
      <div className="absolute bottom-13 left-4 right-4 sm:bottom-8 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 md:bottom-10 z-20 sm:w-full sm:max-w-xl md:max-w-2xl">
        <SearchBar />
      </div>
    </div>
  );
}
