import { useEffect, useState } from "react";
import { image2, image3, image4 } from "../assets/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export function Embla() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        <div className="min-w-full relative">
          <img
            src={image2}
            alt=""
            className="w-full md:h-[50vh] lg:h-[80vh] object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-40 lg:left-26 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">Discover and explore</span>
                <span className="block">opportunities around you</span>
              </h2>
              <p className="text-base md:text-lg font-light leading-tight font-nunito mt-6">
                <span className="block">
                  Easily plan your ideal ski trip from home
                </span>
                <span className="block">with the help of professionals</span>
              </p>
            </div>
            <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-10 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
              <div className="flex items-center gap-3 px-2 py-1 lg:px-3 lg:py-2">
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Category</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.5px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Location</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.5px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>

                <div className="bg-white flex items-center gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-md shadow-sm w-full max-w-xs">
                  <IoSearch className="text-[#3A3A3A] lg:text-lg" />
                  <input
                    type="text"
                    placeholder="Search with keyword"
                    className="flex-1 outline-none border-none text-[#3A3A3A] placeholder-[#A0A0A0] text-sm"
                  />
                </div>

                <div className="bg-[#0E375F] px-6 py-1 lg:px-6 lg:py-5 rounded-md ml-3">
                  <button className="text-white text-center text-[12px] lg:text-[16px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="min-w-full relative">
          <img
            src={image3}
            alt=""
            className="w-full md:h-[50vh] lg:h-[80vh] object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-40 lg:left-26 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">Business opportunity and</span>
                <span className="block">vast awerness</span>
              </h2>
              <p className="text-base md:text-xl font-light leading-tight font-nunito mt-10">
                Sushi restaurants,cozy bars,etc.
              </p>
            </div>
             <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-10 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
              <div className="flex items-center gap-3 px-2 py-1 lg:px-3 lg:py-2">
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Category</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.3px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Location</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.3px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>

                <div className="bg-white flex items-center gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-md shadow-sm w-full max-w-xs">
                  <IoSearch className="text-[#3A3A3A] lg:text-lg" />
                  <input
                    type="text"
                    placeholder="Search with keyword"
                    className="flex-1 outline-none border-none text-[#3A3A3A] placeholder-[#A0A0A0] text-sm"
                  />
                </div>

                <div className="bg-[#0E375F] px-6 py-1 lg:px-6 lg:py-5 rounded-md ml-3">
                  <button className="text-white text-center text-[12px] lg:text-[16px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="min-w-full relative">
          <img
            src={image4}
            alt=""
            className="w-full md:h-[50vh] lg:h-[80vh] object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-40 lg:left-26 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">Vacation opportunity is</span>
                <span className="block">made easy</span>
              </h2>
              <p className="text-base md:text-xl font-light leading-tight font-nunito mt-10">
                <span className="block">Hotels and suite,beach house and</span>
                <span className="block">Parties, all at your convenience.</span>
              </p>
            </div>
             <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-10 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
              <div className="flex items-center gap-3 px-2 py-1 lg:px-3 lg:py-2">
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Category</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.3px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-[#3A3A3A]">Location</p>
                  <IoIosArrowDown />
                </div>
                <span className="hidden w-[0.3px] h-12 bg-[#3a3a3a] lg:inline-block ml-3"></span>

                <div className="bg-white flex items-center gap-2 px-1.5 py-1 lg:px-3 lg:py-2 rounded-lg lg:rounded-md shadow-sm w-full max-w-xs">
                  <IoSearch className="text-[#3A3A3A] lg:text-lg" />
                  <input
                    type="text"
                    placeholder="Search with keyword"
                    className="flex-1 outline-none border-none text-[#3A3A3A] placeholder-[#A0A0A0] text-sm"
                  />
                </div>

                <div className="bg-[#0E375F] px-6 py-1 lg:px-6 lg:py-5 rounded-md ml-3">
                  <button className="text-white text-center text-[12px] lg:text-[16px]">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {[0, 1, 2].map((i) => (
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
