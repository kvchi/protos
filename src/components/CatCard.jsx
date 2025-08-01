const colorMap = {
  blue: {
    border: "border-[#0E375F]",
    text: "text-[#0E375F]",
  },
  yellow: {
    border: "border-[#FFA500]",
    text: "text-[#FFA500]",
  },
};

const CatCard = ({ image, title, color }) => {
  const { border, text } = colorMap[color] || colorMap.blue;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border w-full ${border}`}>
      <img
        src={image}
        alt={title}
        className="w-full object-contain p-2 rounded-md"
      />
      <div className="p-2 text-center">
        <h4 className={`font-semibold text-base ${text}`}>{title}</h4>
      </div>
    </div>
  );
};

export default CatCard;
