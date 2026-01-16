export default function BehaviorHeader({ title, tag, filterType }) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
  
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
          {tag}
        </span>
      </div>

      {filterType === "select" && (
        <div className="flex items-center gap-2 text-md  text-primary">
          <span className="font-semibold">view by:</span>
          <select className="border rounded-md px-2 py-1 shadow-md text-primary border-primary">
            <option>Last 12 months</option>
            <option>Last 30 days</option>
          </select>
        </div>
      )}

      {filterType === "tabs" && (
        <div className="flex items-center gap-2 text-xs">
          <button className="px-2 py-1 rounded  text-primary">
            Last 30 days
          </button>
          <button className="px-2 py-1 rounded  text-primary border border-primary shadow">
            Last 12 months
          </button>
        </div>
      )}
    </div>
  );
}
