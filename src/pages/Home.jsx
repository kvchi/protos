import { businessData } from "../data/businessData";
import BusinessCard from "../components/BizCard";
import CatCard from "../components/CatCard";
import { categoriesData } from "../data/categoriesData";
import workData from '../data/workData';
import WorkCard from '../components/WorkCard';
import Testimonials from '../components/Testimonials';
import Embla from "../components/Embla";
import { useNavigate } from "react-router-dom"


export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="min-w-0 overflow-x-hidden">
      <Embla />
      <div className="hidden lg:block px-6 xl:px-24 py-8 xl:py-10 w-full max-w-[1600px] mx-auto">
        <h3 className="text-primary font-semibold text-2xl">
          Top Business Around
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-base font-medium leading-tight pt-0 lg:pt-2 max-w-2xl">
            We recommend these businesses based on your current location, they
            might be exactly what you need.
          </p>
          <button
            type="button"
            onClick={() => navigate("/searchResult")}
            className="bg-primary py-2 px-6 rounded-xl text-white shrink-0"
          >
            View more
          </button>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 px-6 xl:px-24 py-8 xl:py-10 w-full max-w-[1600px] mx-auto gap-5">
        {businessData.map((biz) => (
          <BusinessCard key={biz.id} business={biz} />
        ))}
      </div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4 w-full max-w-[1600px] mx-auto">
        <h2 className="text-primary font-bold text-xl sm:text-2xl">Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-6 sm:gap-y-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4 sm:py-6 w-full max-w-[1600px] mx-auto">
        {categoriesData.map((cate, index) => {
          const columns = 4;
          const row = Math.floor(index / columns);
          const col = index % columns;

          const isEvenRow = row % 2 === 0;
          const color = (isEvenRow ? col % 2 === 0 : col % 2 !== 0)
            ? "blue"
            : "yellow";

            const isLastCard = index === categoriesData.length - 1;
                        const route = isLastCard ? "/category" : `/category/${cate.id}`;
          return (
            <CatCard
              key={cate.id}
              image={cate.image}
              title={cate.title}
              color={color}
              onClick={() => navigate(route)}
            />
          );
        })}
      </div>
      <section className="bg-primary w-full min-w-0">
          <h2 className="text-white text-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 font-bold text-xl sm:text-2xl px-4">How we work</h2>
           <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pb-12 sm:pb-16 md:pb-20 px-4">
        {workData.map((item) => (
          <WorkCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onClick={() => navigate(item.link)}
            
          />
        ))}
      </div>
      </section>
      <section className="bg-white w-full min-w-0 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-14 lg:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-[1600px] mx-auto">
        <div className="w-full lg:max-w-xl">
          <h3 className="pb-6 sm:pb-8 lg:pb-10 font-semibold text-2xl sm:text-3xl lg:text-2xl">What out client <span className="block">say about us</span></h3>
          <p className="w-full text-sm sm:text-base"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non at nisi amet! Iste molestiae quo laborum. A vel enim eum sint natus vero, accusantium excepturi sapiente reprehenderit laudantium culpa consequatur.</p>
        </div>
        <div>
          <Testimonials />
        </div>

      </section>
    </div>
  );
}
