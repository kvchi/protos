import { IoIosChatboxes } from "react-icons/io";

export default function MenuItems({
  image,
  title,
  rating,
  comments,
  tags = [],
  prices = [],
  onOrderClick
}) {
  
  return (
    <div className="border border-primary rounded-xl p-4 bg-white w-full flex flex-col gap-6 md:flex-row md:justify-between">

      <div className="flex gap-4 flex-1  sm:flex-row">
        <img
          src={image}
          alt={title}
          className="w-16 sm:w-32 md:w-40 h-16 sm:h-32 md:h-40 object-cover rounded-md"/>
        <div className="md:space-y-3">
          <h3 className="md:text-lg font-semibold text-primary">{title}</h3>

          <div className="flex  items-center md:gap-3 text-xs lg:text-sm mb-2">
            <div className="flex items-center text-green-600 md:gap-1">
              ★★★★ 
              <span className="text-gray-500">({rating} ratings)</span>
            </div>
            <div className="flex items-center gap-1 text-red-500">
              <IoIosChatboxes className="text-red-500" /> {comments} Comments
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="border text-xs px-2 md:px-3 py-1 rounded-md shadow-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block border-r border-gray-300"></div>

      <div className="flex flex-col justify-between w-full md:w-[30%]">
        <div className="text-sm">
          <p className="font-semibold mb-2 text-gray-700">Feature</p>

          {prices.map((item, i) => (
            <p
              key={i}
              className="text-gray-700 border-b border-gray-200 pb-1 mb-1"
            >
              {item.feature}
              <span className="float-right font-semibold text-primary">
                {item.price}
              </span>
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <a className="text-red-500 underline cursor-pointer text-sm">
            Visit website
          </a>
          <button className="bg-primary text-white px-6 py-2 rounded-md text-sm shadow"
          onClick={onOrderClick}>
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
}
