import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Facebook, foodImages, Instagram, twitter } from "../assets/images";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../components/FilterModal";
import FilterImageModal from "../components/FilterImageModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { IoIosChatboxes, IoMdHeartEmpty } from "react-icons/io";
import MenuCard from "../components/MenuCard";
import { IoLocationOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function SearchDetails() {
  const navigate = useNavigate();
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const menuItems = [
    {
      title: "Chicken & Roasts",
      price: 35000,
      image: foodImages[0],
      description:
        "Sweet Asian chile marinated grilled chicken stuffed into crispy wonton shells topped with our signature coleslaw and cilantro.",
      features: [
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
      ],
    },
    {
      title: "Chicken & Roasts",
      price: 35000,
      image: foodImages[1],
      description:
        "Sweet Asian chile marinated grilled chicken stuffed into crispy wonton shells topped with our signature coleslaw and cilantro.",
      features: [
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
      ],
    },
    {
      title: "Chicken & Roasts",
      price: 35000,
      image: foodImages[2],
      description:
        "Sweet Asian chile marinated grilled chicken stuffed into crispy wonton shells topped with our signature coleslaw and cilantro.",
      features: [
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
        "Chicken Periperi with sauce",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <main className="bg-gray-50 min-h-screen pb-20 px-4 lg:px-30">
      <div className="flex justify-center py-10">
        <SearchBar />
      </div>
      <section className="relative w-full h-[250px] md:h-[450px] lg:h-[530px] mt-4 ">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            {
              swiper.params.navigation.prevEl = ".prev-btn";
              swiper.params.navigation.nextEl = ".next-btn";
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          onSlideChange={(swiper) =>
            setCurrentIndex((swiper.realIndex % foodImages.length) + 1)
          }
          className="w-full h-full"
        >
          {foodImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} className="w-full h-full object-cover " />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-4 left-0 right-0 text-center z-10 space-x-10">
          <span>
            <button className="prev-btn bg-white/90 hover:bg-white p-3 rounded-md shadow cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
          </span>
          <span className="px-3 py-1 text-white">
            Gallery {currentIndex} of {foodImages.length}
          </span>
          <span>
            <button className="next-btn bg-white/90 hover:bg-white p-3 rounded-md shadow cursor-pointer">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </span>
        </div>
        <div className="flex items-center justify-end pt-3 text-gray-600">
          <button
            type="button"
            onClick={() => setIsGalleryModalOpen(true)}
            className="text-lg lg:text-xl font-semibold border p-2 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            60+ More in Gallery
          </button>
        </div>
      </section>

      {isGalleryModalOpen && (
        <FilterModal
          isOpen={isGalleryModalOpen}
          onClose={() => setIsGalleryModalOpen(false)}
          showPrice={false}
        >
          <FilterImageModal />
        </FilterModal>
      )}
      <section className=" pt-20">
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Yekemo Restaurant & Bar
        </h2>
        <div className="flex flex-wrap items-center space-y-1 md:space-y-0">
          <div className="flex items-center gap-2 pr-2">
            <div className="text-green-500 text-xl">★★★★</div>
            <p className="text-red-500 font-semibold text-lg">(122 ratings)</p>
          </div>
          |
          <div className="flex items-center px-4 gap-2">
            <IoIosChatboxes className="text-red-500" />
            <p className="text-yellow-400 font-semibold">2444 review</p>
          </div>{" "}
          |
          <div className="flex items-center px-4 gap-2">
            <IoMdHeartEmpty className="text-red-500" />
            <p className="text-yellow-400 font-semibold">Add to favorite</p>
          </div>
          |
          <div className=" flex items-center gap-2 px-4">
            <img src={twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-lg font-bold mt-6">
            Features:{" "}
            <span className="text-gray-500 text-md font-light">
              Restaurant,bar,grills,sushi and raw fish,japanese restaurant...
            </span>
          </p>
          <p className="font-bold text-xl">
            Location:{" "}
              <span className="text-lg font-semibold">
              365 Ikari village, Ikeja, Lagos state, Nigeria{" "}
              <span
                role="button"
                tabIndex={0}
                onClick={() => navigate("/map")}
                onKeyDown={(e) => e.key === "Enter" && navigate("/map")}
                className="text-red-500 text-sm cursor-pointer hover:underline"
              >
                (Direction)
              </span>
            </span>
          </p>
        </div>
      </section>
      <section className="mt-10 border rounded-md border-gray-400">
        <div className="flex items-center justify-between py-4 px-8">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => navigate("/menu")}
           className="text-white bg-primary p-2 rounded-lg cursor-pointer">
            View Full Menu
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0 py-6 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="md:border-r lg:[&:nth-child(3n)]:border-r-0 lg:px-10 border-gray-300" >
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-4">Yemkemo Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-gray-300 rounded-xl p-3 lg:p-6  bg-white">
            <div className="flex items-center gap-3 mb-3 border-b border-gray-400   py-3">
              <span className="text-primary text-xl bg-secondary p-2 rounded-full">
                <Phone />
              </span>
              <p className="text-primary font-semibold">
                (+234) 900 - 000 - 000
              </p>
            </div>
            <div className="pl-11">
              <Link
                to="/map"
                className="text-accent hover:underline cursor-pointer inline-block border-b border-accent font-semibold"
              >
                Get direction
              </Link>
            </div>
            <p className="text-gray-600 flex items-center gap-2 mb-2 border-b border-gray-300 py-3">
              <span className="text-primary text-xl bg-secondary p-2 rounded-full">
                <IoLocationOutline />
              </span>
              <p>365 Ikari village, Ikeja, Lagos state, Nigeria</p>
            </p>
            <div className="flex items-center gap-2 py-3">
              <div className="text-primary text-xl bg-[#E7EBEF] p-2 rounded-full">
                <SlGlobe />
              </div>
              <a className="text-primary font-semibold hover:underline cursor-pointer">
                www.yemkemo.com
              </a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl p-2 lg:p-6 bg-white">
            <div className="px-4 lg:px-20 flex items-center justify-between">
              <h3 className="lg:text-lg font-semibold border-b text-accent">
                Place an Order
              </h3>
              <p className="lg:text-lg font-semibold text-primary">
                Make a reservation
              </p>
            </div>
            <input
              type="text"
              placeholder="Your location"
              className="border border-gray-300 mt-5 mx-10 p-2 rounded-lg w-5/6  "
            />
            <div className="lg:text-lg font-semibold space-y-2 px-10 mt-5">
              <p>Delivery fee: #2,500</p>
              <p>Delivery time: 25-30 mins</p>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-primary text-white font-semibold p-2 rounded-lg cursor-pointer">
                Place your Order
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex flex-col space-y-2 order-2 lg:order-1">
              <h2 className="text-xl font-semibold">Reviews</h2>

              <p className="font-semibold">
                Overall rating:
                <span className="text-primary text-2xl font-semibold ml-1">
                  449 reviews
                </span>
              </p>

              <div className="flex items-center text-green-500 text-xl">
                ★★★★☆
              </div>

              <div>
                <select className="mt-5 border border-gray-300 rounded-lg p-2">
                  <option value="Sort by">Sort by</option>
                </select>
              </div>
            </div>
            <div className="mt-10 flex flex-col space-y-8">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Jason Jerry</h3>
                  <p className="text-sm text-gray-500">Ikeja, Lagos state</p>
                  <p className="text-xs text-gray-500 mb-1">Jan 24, 2024</p>
                  <div className="flex text-green-500 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua…
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Jason Jerry</h3>
                  <p className="text-sm text-gray-500">Ikeja, Lagos state</p>
                  <p className="text-xs text-gray-500 mb-1">Jan 24, 2024</p>

                  <div className="flex text-green-500 text-sm mb-2">★★★★★</div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua…
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Jason Jerry</h3>
                  <p className="text-sm text-gray-500">Ikeja, Lagos state</p>
                  <p className="text-xs text-gray-500 mb-1">Jan 24, 2024</p>

                  <div className="flex text-green-500 text-sm mb-2">★★★★★</div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua…
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Jason Jerry</h3>
                  <p className="text-sm text-gray-500">Ikeja, Lagos state</p>
                  <p className="text-xs text-gray-500 mb-1">Jan 24, 2024</p>
                  <div className="flex text-green-500 text-sm mb-2">★★★★★</div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua…
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-8 border border-gray-300 rounded-md w-fit md:ml-20 ">
              <button className=" px-3 py-1 border-r border-gray-300 flex items-center gap-3">
                <span>
                  <ArrowLeft className="w-4 h-4" />
                </span>
                Previous
              </button>
              <button className=" px-3 py-1 border-r border-gray-300">1</button>
              <button className=" px-3 py-1 border-r border-gray-300">2</button>
              <button className=" px-3 py-1 border-r border-gray-300">3</button>
              <button className=" px-3 py-1 border-r border-gray-300">
                ...
              </button>
              <button className=" px-3 py-1 border-r border-gray-300">8</button>
              <button className=" px-3 py-1 border-r border-gray-300">9</button>
              <button className=" px-3 py-1 border-r border-gray-300">
                10
              </button>
              <button className=" px-3 py-1 flex items-center gap-3">
                Next
                <span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 order-1 lg:order-2">
            <div className="space-y-3 order-2 lg:order-1 mt-8 lg:mt-0">
              {[
                { stars: 5, value: 60 },
                { stars: 4, value: 80 },
                { stars: 3, value: 55 },
                { stars: 2, value: 40 },
                { stars: 1, value: 20 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <p className="text-sm w-14 text-gray-600 ">
                    {item.stars} <span> stars</span>
                  </p>

                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border rounded-xl p-2 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-semibold">Jason Racky</h3>
                  <p className="text-gray-500 text-sm">Ikeja, Lagos state</p>
                </div>
              </div>
              <p className="text-sm">Pick your rating:</p>
              <div className="text-green-600 text-xl mb-3 cursor-pointer">
                ☆☆☆☆☆
              </div>

              <textarea
                placeholder="Write your review"
                className="w-full border p-3 rounded-lg h-32 text-sm"
              ></textarea>

              <div className="flex justify-between mt-3">
                <button className="text-red-500 text-sm">Clear review</button>

                <button className="bg-primary text-sm md:text-base text-white px-2 md:px-4 py-2 rounded-lg">
                  Sign up to post your review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
