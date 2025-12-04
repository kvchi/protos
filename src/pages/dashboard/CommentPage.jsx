import { useNavigate } from "react-router-dom";
import CommentCard from "../../components/CommentCard";
import SideBar from "./SideBar";
import { HiArrowLeft } from "react-icons/hi2";

export default function CommentPage() {
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
    <div className="flex flex-col md:flex-row">
      <SideBar />
      <div className="p-10 space-y-4 flex-1 w-full">
        <HiArrowLeft onClick={() => navigate("/dashboard/restaurantDetails")} className="text-2xl text-primary cursor-pointer" />
        <h2 className="font-semibold text-primary text-xl">
          {" "}
          Comment & Reviews
        </h2>
        <div className="flex items-center justify-between w-full ">

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-green">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <p className="text-gray-700">
              Overall rating:{" "}
              <span className="text-primary font-semibold">449 reviews</span>
            </p>
          </div>

          <div className="flex items-center gap-2 px-10 text-primary ">
            <p className="font-semibold">Sort by:</p>
            <select className="border-2 rounded-lg p-2">
              <option >Sort by</option>
            </select>
          </div>
        </div>
        <div>
          {
            reviews.map((review, index) => {
              return (
                 <CommentCard 
                 key={index}
                 avatar={review.avatar}
                 name={review.name}
                 stars={review.stars}
                 text={review.text}
                 date={review.date}
                 location={review.location}
                 
                 />
                 
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
}
