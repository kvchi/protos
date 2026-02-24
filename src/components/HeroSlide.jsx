import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeroSlide({ image, title, text, isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <div className="min-w-full relative min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh]">
      <img
        src={image}
        alt=""
        className="w-full h-[45vh] min-h-[280px] sm:h-[50vh] md:h-[50vh] md:min-h-[320px] lg:h-[80vh] object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 md:top-12 md:left-12 lg:top-20 lg:left-24 max-w-[90%] sm:max-w-[85%] md:max-w-none z-10 text-white">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[80px] font-extrabold leading-tight font-nunito">
          {title.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="text-xs sm:text-sm md:text-lg font-light leading-tight font-nunito mt-1 sm:mt-2 md:mt-12">
          {text.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </p>

        {isLoggedIn && (
          <button
            type="button"
            onClick={() => navigate("/map")}
            className="mt-3 sm:mt-4 md:mt-12 lg:mt-20 flex items-center gap-2 p-2 sm:p-2 md:px-6 md:py-3 border-2 border-[#ffa500] text-white font-medium rounded-md transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffa500] shrink-0" />
            Get Direction
          </button>
        )}
      </div>
    </div>
  );
}
