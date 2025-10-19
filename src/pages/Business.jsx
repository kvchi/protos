import React from "react";
import { eclipse, Frame6, rectangle135, rectangle136 } from "../assets/images";
import { ClipboardList, Lightbulb, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Business() {
  const features = [
    { icon: <ClipboardList size={24} />, text: "Get enlisted as a directory" },
    { icon: <Lightbulb size={24} />, text: "Update your business information" },
    {
      icon: <MessageSquare size={24} />,
      text: "Receive and respond to messages",
    },
    { icon: <Users size={24} />, text: "Get connections and awareness" },
  ];

  return (
    <main className="overflow-x-hidden">
      
      <div className="relative w-full">
        <img
          src={rectangle135}
          alt=""
          className="w-full h-[300px] sm:h-[400px] md:h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-start px-4 lg:px-30 -top-40">
          <h1 className="text-3xl sm:text-5xl md:text-9xl font-bold text-white">
            <span className="text-[#ffa500]">Protos</span> for Business
          </h1>
          <button className="bg-[#ffa500] px-4 py-2 rounded-md mt-8 sm:mt-10 text-sm sm:text-base md:text-lg font-medium ">
            Back to Business Dashboard
          </button>
        </div>
      </div>

      <div className="w-full bg-[#E7EBEF] px-6 sm:px-10 md:px-20 py-16 sm:py-24">
        <h1 className="mb-10 text-2xl sm:text-3xl text-[#0E375F] font-semibold text-center sm:text-left">
          Join the Protos for business
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="space-y-5 w-full md:w-1/2">
            {features.map((item, index) => (
              <div
                key={index}
                className={`
        flex items-center gap-4 sm:gap-6
        ${
          index === 0
            ? ""
            : "md:translate-x-[calc(2.5rem*var(--i))] md:translate-y-[calc(1.5rem*var(--i))]"
        }
      `}
                style={{
                  "--i": index,
                  transform: "none", 
                }}
              >
                <div className="bg-[#123C64] text-white p-5 rounded-full flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <p className="text-gray-800 text-base md:text-2xl font-semibold">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full  hidden md:flex justify-center">
            <img src={eclipse} alt="" className="w-[60%]  object-cover" />
          </div>
        </div>
      </div>

      <section className="px-6 sm:px-10 md:px-20 lg:px-40 py-16 bg-gray-50">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-center md:text-left">
            <span className="inline-block relative">
              Let’s help you grow
              <span className="block text-center w-full">your business</span>
            </span>
          </h1>
        </div>

        <div className="my-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <img
            src={rectangle136}
            alt=""
            className="w-full md:w-[45%] object-contain rounded-md"
          />
          <div className="w-full md:w-[50%] text-center md:text-left ">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Get new people to know you
            </h1>
            <p className="mt-5 font-medium text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quia pariatur magnam atque numquam consectetur possimus nisi at
              distinctio a, porro, dolores laudantium velit hic cumque corporis?
              Quae, quod delectus.
            </p>
            <Link
              to="/learnMore?topic=get-new-customers"
              className="bg-[#0E375F] py-3 px-6 text-white rounded-md mt-20 text-sm sm:text-base inline-block"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-10 md:px-20 lg:px-40 py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Search Engine Marketing & Ads
            </h1>
            <p className="font-medium text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quia pariatur magnam atque numquam consectetur possimus nisi at
              distinctio a, porro, dolores laudantium velit hic cumque corporis?
              Quae, quod delectus.
            </p>
            <Link
              to="/learnMore?topic=search-engine-marketing-ads"
              className="bg-[#0E375F] py-3 px-6 text-white rounded-md mt-20 text-sm sm:text-base inline-block"
            >
              Learn more
            </Link>
          </div>

          <div className="w-full md:w-[50%] flex justify-center">
            <img
              src={Frame6}
              alt=""
              className="object-contain w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-4">
        <div className="bg-[#0A3D62] text-white py-10 px-6 sm:px-8 shadow-[12px_12px_0px_#b0b0b0] max-w-2xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Let’s help you get started today
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6">
            It is an easy step, to gain the best experience with customers
            around Africa.
          </p>

          <button className="bg-[#F5A623] hover:bg-[#e69510] text-[#0A3D62] font-semibold py-2.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
            Create a Business Account
          </button>
        </div>
      </section>
    </main>
  );
}
