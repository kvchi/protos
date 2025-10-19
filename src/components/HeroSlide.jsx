import { MapPin } from "lucide-react";

export default function HeroSlide({ image, title, text, isLoggedIn }) {
  return (
    <div className="min-w-full relative">
      <img
        src={image}
        alt=""
        className="w-full md:h-[50vh] lg:h-[80vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-10 left-6 md:top-20 md:left-20 lg:top-40 lg:left-24 z-10 text-white">
        <h2 className="md:text-[40px] lg:text-[80px] font-extrabold leading-tight font-nunito">
          {title.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="text-base md:text-lg font-light leading-tight font-nunito mt-5 md:mt-12">
          {text.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </p>

        {isLoggedIn && (
          <button
            className="mt-20 flex items-center gap-2 px-6 py-3 border-2 border-[#ffa500] text-white font-medium rounded-md transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-5 h-5 text-[#ffa500]" />
            Get Direction
          </button>
        )}
      </div>
    </div>
  );
}
