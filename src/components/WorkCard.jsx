
const WorkCard = ({ icon, title, description, onClick }) => {

  return (
     <div
     onClick={onClick}
     className="bg-white w-64 rounded-xl px-5 lg:px-4 py-5 flex flex-col items-center text-center shadow-lg relative cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-200">
      
      <div className="bg-primary text-white w-14 h-14 flex items-center justify-center rounded-full mb-6 text-xl">
        {icon}
      </div>

      
      <h3 className="text-primary text-xl font-semibold mb-6">
        {title}
      </h3>
      
      <p className="text-gray-600 text-md">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
