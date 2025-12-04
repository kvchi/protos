
import { FaStar } from 'react-icons/fa'

export default function CommentCard({avatar,name,stars,date,location,text}) {
  return (
    <div className="border-2 border-gray-300 pb-8 px-4 my-5 shadow-md">
                <div className="flex items-center gap-4 ">
                  <img
                    src={avatar}
                    alt="User avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-gray-500">{location}</p>
    
                    <div className="flex items-center gap-2 text-green">
                      {Array.from({ length: stars }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{date}</p>
                  </div>
                </div>
    
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {text}
                </p>
              </div>
  )
}
