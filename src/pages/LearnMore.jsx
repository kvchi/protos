import React from "react";
import { useLocation } from "react-router-dom";
import { Frame6, rectangle136 } from "../assets/images";
import {
    Book,
  ClipboardList,
  EyeIcon,
  NotebookIcon,
  PlaneTakeoffIcon,
  Upload,
  Users,
} from "lucide-react";
import { FcManager } from "react-icons/fc";

export default function LearnMore() {
  const features = [
    {
      icon: <ClipboardList size={24} />,
      title: "Create a Protos Business Account",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores autem explicabo asperiores obcaecati ullam odit cum enim quidem recusandae dolorum.",
    },
    {
      icon: <NotebookIcon size={24} />,
      title: "Add Business information",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores autem explicabo asperiores obcaecati ullam odit cum enim quidem recusandae dolorum.",
    },
    {
      icon: <PlaneTakeoffIcon size={24} />,
      title: "Use the Ad Network",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem",
    },
    {
      icon: <Users size={24} />,
      title: "Consitent Updates",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem!",
    },
    {
      icon: <EyeIcon size={24} />,
      title: "Contact Accountability",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem!",
    },
  ];
  const feature = [
    {
      icon: <ClipboardList size={24} />,
      title: "Search Engine Marketing",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores autem explicabo asperiores obcaecati ullam odit cum enim quidem recusandae dolorum.",
    },
    {
      icon: <Book size={24} />,
      title: "Right Keywords",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores autem explicabo asperiores obcaecati ullam odit cum enim quidem recusandae dolorum.",
    },
    {
      icon: <PlaneTakeoffIcon size={24} />,
      title: "Use the Ad Network",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem",
    },
    {
      icon: <Upload size={24} />,
      title: "Frequent Image Uploads",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem!",
    },
    {
      icon: <FcManager size={24} />,
      title: "Good Brand Manager",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit, impedit provident soluta accusantium necessitatibus sed ullam itaque inventore fuga voluptates quae odio dolor ipsum praesentium, cum quas consequuntur rem!",
    },
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get("topic");

  return (
    <main className="px-4 lg:px-28 py-10 lg:py-20 bg-gray-50">
      {topic === "get-new-customers" && (
        <div>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div>
              <h1 className="text-lg md:text-3xl font-semibold mb-6 text-[#ffa500]">
                Get new customers for your
                <span className="block"> business</span>
              </h1>
              <p className="text-gray-700 leading-relaxed md:w-[80%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                architecto saepe iure? Quia, corporis ad? Corrupti vitae, maxime
                sequi aperiam ipsam fuga nam. Laudantium provident eveniet
                dolorum esse consectetur, nostrum nesciunt similique nemo
                exercitationem dolore. Ipsam atque nemo modi repudiandae,
                aliquid distinctio debitis eos maiores? Labore ipsam maxime
                temporibus harum accusantium aspernatur unde sunt quas sint
                numquam, delectus perferendis quod excepturi tempora sit
                consequatur quam pariatur, itaque perspiciatis saepe laudantium!
                Recusandae assumenda ea incidunt sapiente officiis amet nobis
                eligendi unde velit eveniet, accusamus consectetur eius
                architecto est ab earum ipsum molestiae ex quaerat minus placeat
                rerum adipisci? Beatae velit quaerat eligendi quam quas
                laboriosam? Vitae beatae ab quidem, accusantium ipsum laudantium
                deleniti quisquam qui laborum id velit atque incidunt
                perferendis rerum ex consequuntur quia. Sit excepturi accusamus
                distinctio, molestiae enim blanditiis ea perspiciatis
                laboriosam, alias aliquam voluptates quis inventore rem sequi
                quas atque, quibusdam ipsum ut facere similique ullam deserunt.
              </p>
            </div>
            <img src={rectangle136} alt="" />
          </div>
          <section className=" mt-10 lg:mt-20 ">
            <h2 className="text-lg lg:text-7xl text-center font-semibold">
              How to go about it?
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-10 lg:px-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 lg:p-6 ${
                    index === features.length - 1
                      ? "md:col-span-2 flex justify-center"
                      : ""
                  }`}
                >
                  <div className="bg-[#0E375F] text-white p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-lg font-semibold text-[#0E375F] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      {topic === "search-engine-marketing-ads" && (
        <div className="">
         <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
            <div>
              <h1 className="text-lg lg:text-3xl font-semibold mb-6 text-[#ffa500]">
                Advertise what you own
              </h1>
              <p className="text-gray-700 leading-relaxed lg:w-[80%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                architecto saepe iure? Quia, corporis ad? Corrupti vitae, maxime
                sequi aperiam ipsam fuga nam. Laudantium provident eveniet
                dolorum esse consectetur, nostrum nesciunt similique nemo
                exercitationem dolore. Ipsam atque nemo modi repudiandae,
                aliquid distinctio debitis eos maiores? Labore ipsam maxime
                temporibus harum accusantium aspernatur unde sunt quas sint
                numquam, delectus perferendis quod excepturi tempora sit
                consequatur quam pariatur, itaque perspiciatis saepe laudantium!
                Recusandae assumenda ea incidunt sapiente officiis amet nobis
                eligendi unde velit eveniet, accusamus consectetur eius
                architecto est ab earum ipsum molestiae ex quaerat minus placeat
                rerum adipisci? Beatae velit quaerat eligendi quam quas
                laboriosam? Vitae beatae ab quidem, accusantium ipsum laudantium
                deleniti quisquam qui laborum id velit atque incidunt
                perferendis rerum ex consequuntur quia. Sit excepturi accusamus
                distinctio, molestiae enim blanditiis ea perspiciatis
                laboriosam, alias aliquam voluptates quis inventore rem sequi
                quas atque, quibusdam ipsum ut facere similique ullam deserunt.
              </p>
            </div>
            <img src={Frame6} alt="" />
          </div>
          <section className=" mt-10 lg:mt-20 ">
            <h2 className="text-2xl lg:text-7xl text-center font-semibold">
              How to go about it?
            </h2>
            <div className="grid md:grid-cols-2 gap-10 mt-4 lg:mt-10 lg:px-10">
              {feature.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-2 lg:p-6 ${
                    index === features.length - 1
                      ? "md:col-span-2 flex justify-center"
                      : ""
                  }`}
                >
                  <div className="bg-[#0E375F] text-white p-4 rounded-full">
                    {feature.icon}
                  </div>
                  <div className="max-w-xl">
                    <h3 className="text-lg font-semibold text-[#0E375F] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      <section className="py-20 bg-gray-50 px-4">
        <div className="bg-[#0A3D62] text-white py-10 px-6 sm:px-10 shadow-[12px_12px_0px_#b0b0b0] max-w-2xl mx-auto text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            What are you waiting for?
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-6">
            Let’s help you rise right to the top, click the button below.
          </p>
          <button className="bg-[#F5A623] hover:bg-[#e69510] text-[#0A3D62] font-semibold py-2.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
            Create a Business Account
          </button>
        </div>
      </section>
    </main>
  );
}
