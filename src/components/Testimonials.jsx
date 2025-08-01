import testimonialData from '../data/testimonialData';
import { FaStar } from 'react-icons/fa';
import { BsQuote } from 'react-icons/bs';

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-6 py-8 ">
      {testimonialData.map((testimonial, index) => {
        const translateYClasses = [
          'translate-y-0',
          'translate-y-4',
          'translate-y-8'
        ];

        return (
          <div
            key={testimonial.id}
            className={`
              bg-[#E7EBEF] shadow-lg rounded-xl py-8 pl-8 pr-8
              w-[90%] sm:w-[47%] md:w-[30%] xl:w-[25%]
              transition hover:scale-[1.02] hover:shadow-xl 
              ${translateYClasses[index]}
            `}
          >
           
            <div className="flex items-center gap-4 mb-4 ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-md object-contain"
              />
              <div className="flex-1">
                <div className='flex items-center gap-4 '>
                    <h4 className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{testimonial.name}</h4>
              <BsQuote className="text-gray-400 text-5xl" />
                </div>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-sm text-gray-700 mb-4 ">
              {testimonial.text}
            </p>

            {/* Rating */}
            <div className="flex items-center text-yellow-500 ">
              {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                <FaStar key={i} />
              ))}
              {testimonial.rating % 1 !== 0 && (
                <FaStar className="opacity-50" />
              )}
              <span className="ml-auto text-gray-600 text-sm">{testimonial.rating}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
