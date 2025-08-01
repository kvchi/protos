


const WorkCard = ({ icon, title, description }) => {
  return (
     <div className="bg-white w-64 rounded-xl px-5 lg:px-4 py-5 flex flex-col items-center text-center shadow-lg relative">
      
      <div className="bg-[#0e375f] text-white w-14 h-14 flex items-center justify-center rounded-full mb-6 text-xl">
        {icon}
      </div>

      
      <h3 className="text-[#0e375f] text-xl font-semibold mb-6">
        {title}
      </h3>
      
      <p className="text-gray-600 text-md">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
