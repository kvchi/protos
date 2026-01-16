export default function Tabs({
  tabs,
  activeTab,
  onChange,
  className = "",
}) {
  return (
    <div className={`border-b border-gray-300 inline-flex ${className}`}>
      <div className="flex gap-1 lg:gap-16 text-[8.5px] md:text-[12px] lg:text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`
              relative pb-2 whitespace-nowrap
              ${
                activeTab === tab
                  ? "text-accent font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }
            `}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-accent" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
