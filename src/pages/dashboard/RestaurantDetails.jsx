import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import SideBar from "./SideBar";
import CommentSection from "../../components/dashboard/CommentSection";

import { IoIosChatboxes, IoMdHeartEmpty } from "react-icons/io";
import { foodImages } from "../../assets/images";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RestaurantCardDetails from "../../components/dashboard/RestaurantCardDetails";
import PlaceOrder from "../../components/dashboard/PlaceOrder";

export default function RestaurantDetails() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  const reviews = [
    {
      name: "Jason Jerry",
      location: "Ikeja, Lagos state",
      stars: 5,
      date: "Jan 24, 2024",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      name: "Jason Jerry",
      location: "Ikeja, Lagos state",
      stars: 5,
      date: "Jan 24, 2024",
      avatar: "https://i.pravatar.cc/150?img=32",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-10">
        <div>
          <SideBar 
            type="user"
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            favorites={[]}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
        <div className="p-4 md:p-10 border-r-2 border-gray-300">
          <HiArrowLeft
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/dashboard")}
          />
          <div className="mt-4 space-y-6">
            <h2 className="text-gold font-semibold text-2xl">
              Yemkemo Restaurant & Bar
            </h2>
            <div className="flex items-center gap-2 flex-wrap ">
              <div className="flex items-center gap-1 text-green-600">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-red font-semibold px-2">
                  (122 ratings)
                </span>
              </div>
              <div className="flex items-center gap-2 text-red">
                <span className="text-[16px]">
                  <IoIosChatboxes className="text-tetiary" />
                </span>
                <p className="text-accent font-semibold">2444 Review</p>
              </div>

              <div className="flex items-center gap-2  cursor-pointer">
                <span className="text-[16px]">
                  <IoMdHeartEmpty className="text-tetiary" />
                </span>
                <p className="text-accent font-semibold">Add to favorite</p>
              </div>
            </div>
            <p className="font-semibold">
              Features:{" "}
              <span className="text-sm font-medium">
                Restaurant, bar, grills, sushi and raw fish, japanese restaurant
              </span>
            </p>
            <p className="font-semibold">
              Location:{" "}
              <span className="text-sm font-medium">
                365, Ikari village, Ikeja, Lagos state, Nigeria
              </span>
            </p>
          </div>
          <section className="relative lg:w-[600px] h-[250px] md:h-[450px] lg:h-[381px] mt-4 ">
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
          </section>
          <div>
            <RestaurantCardDetails />
          </div>
        <CommentSection comments={reviews} totalReviews={449} />
        </div>
        <div className="pr-20 ">
          <PlaceOrder />
        </div>
      </div>
    </main>
  );
}