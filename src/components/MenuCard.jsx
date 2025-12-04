
export default function MenuCard({ image, title, price, description, features }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-400 hover:shadow-lg transition ">
        <div className="flex items-center gap-4">
        <img src={image}
        className="w-24 h-24 lg:w-28 lg:h-28 object-cover " alt="title" />
       <div className="space-y-2"> 
        <h3 className="text-lg text-[#ffa500] font-semibold mt-3">{title}</h3>
        <p className="text-red-500 font-bold text-lg">{price.toLocaleString()}</p></div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        <div className="mt-4">
        <h4 className="font-semibold text-gray-700">Feature</h4>
        <ul className="mt-1 space-y-1">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex justify-between text-gray-600 text-sm border-b pb-1"
            >
              <span>{item}</span>
              <span className="font-semibold">₦ {price.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
