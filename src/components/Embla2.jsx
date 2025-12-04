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

              <div className="absolute top-4 left-4 lg:top-10 lg:left-30 z-10 text-white">
                <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                  {slide.title.map((line, idx) => (
                    <span key={idx} className={`block ${idx > 0 ? "mt-5" : ""}`}>
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="text-base md:text-lg font-light leading-tight font-nunito mt-8">
                  {slide.text.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <p className="bg-primary p-4 inline-block mt-10 rounded-md">
                  {slide.button}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SearchBar stays on top – no change */}
      <div className="absolute bottom-10 left-1/4 -translate-x-1/2 z-20">
        <SearchBar />
      </div>
    </div>
  );
}
