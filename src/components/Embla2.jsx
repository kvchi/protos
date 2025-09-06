import { useEffect, useState } from "react";
import { cate, cate2, cate3 } from "../assets/images";
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
    <div className="relative overflow-hidden w-full mt-[-20px]" ref={emblaRef}>
        
      <div className="flex">
        <div className="min-w-full relative">
          <img
            src={cate}
            alt=""
            className="w-full  object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-80 lg:left-30 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">Meet your fashion</span>
                <span className="block mt-5">expectations</span>
              </h2>
              <p className="text-base md:text-lg font-light leading-tight font-nunito mt-8">
                <span className="block">
                  Interesting fashion businesses and
                </span>
                <span className="block">individual ready to bring your fashion</span>
                <span className="block">ideology to life.</span>
              </p>
              <p className="bg-[#0E375F] p-4 inline-block mt-10 rounded-md">Eplore fashion world</p>
            </div>
            <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-30 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
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
            src={cate2}
            alt=""
            className="w-full  object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-80 lg:left-30 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">All technology gadgets</span>
                <span className="block mt-5">are available</span>
              </h2>
              <p className="text-base md:text-lg font-light leading-tight font-nunito mt-8">
                <span className="block">
                  Get the latest tech gadgets here with
                </span>
                <span className="block">convenience</span>
                
              </p>
              <p className="bg-[#0E375F] p-4 inline-block mt-10 rounded-md">Explore technology world</p>
            </div>
            <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-30 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
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
        <div className="min-w-full  relative">
          <img
            src={cate3}
            alt=""
            className="w-full object-cover"
          />
          <div className=" absolute top-4 left-4 lg:top-80 lg:left-30 z-10">
            <div className="text-white">
              <h2 className="lg:text-[80px] font-extrabold leading-tight font-nunito">
                <span className="block">Bring your dream</span>
                <span className="block mt-5">furniture to live</span>
              </h2>
              <p className="text-base md:text-lg font-light leading-tight font-nunito mt-8">
                <span className="block">
                  Do you have a dream furniture you
                </span>
                <span className="block">want to bring to live you can get all</span>
                <span className="block">you want here with ease.</span>
              </p>
              <p className="bg-[#0E375F] p-4 inline-block mt-10 rounded-md">Check latest trends</p>
            </div>
            <div className="bg-[#E7EBEF] rounded-md md:rounded-xl mt-30 flex items-center gap-3 max-w-fit mr-20 lg:mr-0">
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
