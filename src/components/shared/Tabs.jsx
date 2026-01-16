export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-6 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`relative pb-2 ${
              activeTab === tab
                ? "text-accent font-semibold"
                : "text-gray-400 hover:text-gray-600"
            }`}
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
