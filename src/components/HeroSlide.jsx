// src/components/Embla/HeroSlide.jsx
export default function HeroSlide({ image, title, text }) {
  return (
    <div className="min-w-full relative">
      <img
        src={image}
        alt=""
        className="w-full md:h-[50vh] lg:h-[80vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute top-10 left-6 lg:top-40 lg:left-24 z-10 text-white">
        <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
          {title.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-base md:text-lg font-light leading-tight font-nunito mt-6">
          {text.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
