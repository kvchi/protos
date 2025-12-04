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
    <div className="">
      <Embla />
      <div className=" hidden lg:block px-24 py-10 w-full">
        <h3 className="text-primary font-semibold text-2xl">
          Top Business Around
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium leading-tight pt-2">
            We recommend these businesses based on your current location, they
            might be exactly what you need.
          </p>
          <button className="bg-primary py-2 px-6 rounded-xl text-white">
            View more
          </button>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-cols-3 px-24 py-10 w-full gap-5">
        {businessData.map((biz) => (
          <BusinessCard key={biz.id} business={biz} />
        ))}
      </div>
      <div className="px-10 lg:px-24 py-4 w-full">
        <h2 className="text-primary font-bold text-2xl">Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 px-10 lg:px-24 py-6">
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
      <section className="bg-primary w-full">
          <h2 className="text-white text-center pt-25 pb-20 font-bold text-2xl">How we work</h2>
           <div className="flex flex-wrap justify-center gap-8 pb-25 ">
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
      <section className="bg-white w-full px-10 py-16 flex lg:flex-row flex-col items-center">
        <div className="lg:px-24">
          <h3 className="pb-10 font-semibold text-3xl md:text-2xl">What out client <span className="block">say about us</span></h3>
          <p className="w-full"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non at nisi amet! Iste molestiae quo laborum. A vel enim eum sint natus vero, accusantium excepturi sapiente reprehenderit laudantium culpa consequatur.</p>
        </div>
        <div>
          <Testimonials />
        </div>

      </section>
    </div>
  );
}
