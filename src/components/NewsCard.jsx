// src/components/NewsCard.jsx
import { CalendarDays, MapPin, Search } from "lucide-react";

export default function NewsCard({ item }) {
  return (
    <div className="bg-[#F8FAFC] rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between text-gray-500 text-sm mb-2">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4 text-[#0E375F]" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-[#FCA311]" />
            <span>{item.location}</span>
          </div>
        </div>

        <h3 className="text-[#0E375F] font-semibold text-lg mb-1">
          {item.title}
        </h3>

        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Search className="w-4 h-4 mr-1 text-gray-400" />
          {item.description}
        </div>

        <div className="flex items-center justify-between">
          <span className="border border-primary text-primary rounded-md text-xs px-3 py-1">
            {item.category}
          </span>
          <a
            href="#"
            className="text-accent/90 text-sm font-medium hover:underline">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
