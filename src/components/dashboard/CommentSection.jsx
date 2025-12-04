import { useNavigate } from "react-router-dom";
import CommentCard from "../CommentCard";

export default function CommentSection({ comments = [], totalReviews }) {
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-full max-w-2xl">
   
      <div className="flex items-center justify-between">
        <h2 className="md:text-2xl font-semibold text-primary">Comment & Reviews</h2>
        <button 
        onClick={() => navigate("/dashboard/commentSection")}
        className="text-accent underline text-sm cursor-pointer">
          More comments
        </button>
      </div>

      <p className="mt-2 font-semibold hidden md:block">
        Overall rating:{" "}
        <span className="text-primary">{totalReviews}</span> reviews
      </p>

      <section className="mt-6 space-y-10">
        {comments.map(({avatar,name,stars,date,text,location}, index) => (

          <CommentCard
           key={index}
           avatar={avatar}
           name={name}
           stars={stars}
           date={date}
           text={text}
           location={location}
          />
        ))}
      </section>
    </div>
  );
}
