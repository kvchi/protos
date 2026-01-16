const variants = {
  blue: "bg-gradient-to-b from-blue-500/90 via-blue-700 to-black/70",
  "blue-dark": "bg-gradient-to-b from-blue-700/90 via-blue-900 to-black/70",
  yellow: "bg-gradient-to-b from-yellow-400/90 via-yellow-600 to-black/70",
  green: "bg-gradient-to-b from-green-500/90 via-green-700 to-black/70",
};

export default function StatCard({ title, value, variant }) {
  return (
    <div className={`rounded-lg p-4 text-white ${variants[variant]}`}>
      <p className="text-sm opacity-90">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
