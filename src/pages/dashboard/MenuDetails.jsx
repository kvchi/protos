import MenuItems from "../../components/MenuItems";
import SideBar from "./SideBar";
import { food10, food11 } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

export default function MenuDetails() {
  const navigate = useNavigate();
  const menuItems = [
    {
      image: food10,
      title: "Sushi with sea water",
      rating: 122,
      comments: 2444,
      tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
      prices: [
        { feature: "Sushi with sauce", price: "₦ 25,000" },
        { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
        { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
      ],
    },
    {
      image: food10,
      title: "Sushi with sea water",
      rating: 122,
      comments: 2444,
      tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
      prices: [
        { feature: "Sushi with sauce", price: "₦ 25,000" },
        { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
        { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
      ],
    },
    {
      image: food10,
      title: "Sushi with sea water",
      rating: 122,
      comments: 2444,
      tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
      prices: [
        { feature: "Sushi with sauce", price: "₦ 25,000" },
        { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
        { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
      ],
    },
    {
      image: food11,
      title: "Sushi with sea water",
      rating: 122,
      comments: 2444,
      tags: ["Seaweed", "Raw fish", "Sushi", "Japanese", "Vegetable Salad"],
      prices: [
        { feature: "Sushi with sauce", price: "₦ 25,000" },
        { feature: "Sushi with spicy sauce", price: "₦ 26,500" },
        { feature: "Sushi with Chicken Periperi", price: "₦ 35,000" },
      ],
    },
  ];
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="space-y-6 flex-1 pr-20 py-10">
        <div className="">
        <HiArrowLeft
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/dashboard/restaurantDetails")}
        />
        <h2 className="text-2xl font-semibold text-primary mt-6">Menu List</h2>
      </div>
        {menuItems.map((item, i) => (
          <MenuItems key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
