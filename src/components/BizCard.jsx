import { FaStar } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-[#878A8D] flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <img src={business.image} alt={business.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="text-[#0E375F] font-bold text-lg">{business.title}</h3>
          <div className="flex items-center space-x-1">
            {[...Array(business.rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" size={16} />
            ))}
          </div>
      <div className="flex items-center gap-1 text-gray-600 text-sm">
        <IoLocationOutline size={24} className="text-[#FFA500] mt-1" />
        <span>{business.address}</span>
      </div>
        </div>
      </div>

            <div>
        <span className="font-bold text-sm">Features:</span>{' '}
        <span className="text-sm text-gray-700">{business.features}</span>
      </div>
      <button className="text-[#CC8400] font-medium text-sm mt-auto underline">More Info</button>
    </div>
  );
};

export default BusinessCard;
