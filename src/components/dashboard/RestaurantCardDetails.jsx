import { useNavigate } from "react-router-dom";
import {  PhoneCallIcon } from "lucide-react";
import { food1, food2} from "../../assets/images";
import { CiGlobe, CiLocationOn } from "react-icons/ci";


const MenuCard = ({ title, price, description, features, image }) => {

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full border border-gray-200">
     <div className="flex gap-4">
        <img
          src={image}
          alt={title}
          className="w-20 h-20 md:w-24  md:h-24 object-cover"
        />

        <div className="flex flex-col justify-center">
          <h3 className="font-semibold text-md md:text-lg">{title}</h3>
          <p className="font-bold text-gray-800 text-sm md:text-lg">₦ {price.toLocaleString()}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-3">{description}</p>

      <p className="text-sm text-primary font-semibold mt-3">Feature</p>

      <ul className="mt-1 text-sm text-gray-700 space-y-1">
        {features.map((item, index) => (
          <li key={index} className="flex justify-between border-b border-gray-200">
            <span>{item.name}</span>
            <span className="font-semibold ">₦ {item.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactRow = ({ icon, text, link }) => {
  const Wrapper = link ? "a" : "div";
  return (
    <Wrapper
      href={link}
      className="flex items-center gap-3 py-3 border-b border-gray-200   cursor-pointer"
    >
      <span className="text-xl text-primary bg-secondary p-2 rounded-full">{icon}</span>
      <span className="text-sm text-gold font-semibold">{text}</span>
    </Wrapper>
  );
};

export default function RestaurantCardDetails() {
  const navigate = useNavigate()

  const cardData = {
    title: "Chicken & Roasts",
    price: 35000,
    description:
      "Sweet Asian chile marinated grilled chicken stuffed into crispy wonton shells topped with our signature coleslaw and cilantro.",
    features: [
      { name: "Chicken Periperi with sauce", amount: 35000 },
      { name: "Chicken Periperi with sauce", amount: 35000 },
      { name: "Chicken Periperi with sauce", amount: 35000 },
    ],
    
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button 
        className="px-4 py-2 bg-primary text-white rounded-xl text-sm cursor-pointer"
        onClick={() => 
          navigate("/dashboard/menuDetails")}>View Full Menu</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <MenuCard {...cardData} image={food1}/>
        <MenuCard {...cardData} image={food2}/>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 mt-8 border border-gray-200 ">
        <ContactRow icon={<PhoneCallIcon />} text="(+234) 900 - 000 - 000" />
        <ContactRow
          icon={<CiLocationOn />}
          text="365 Ikari village, Ikeja, Lagos state, Nigeria"
          link="https://maps.google.com"
        />
        <ContactRow icon={<CiGlobe />} text="www.yemkemo.com" link="https://www.yemkemo.com" />
      </div>
    </div>
  );
}
