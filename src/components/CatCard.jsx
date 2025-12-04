const CatCard = ({ image, title, color, onClick }) => {
  const colorMap = {
    blue: { border: "border-primary", text: "text-primary" },
    yellow: { border: "border-accent", text: "text-accent" },
  };

  const { border, text } = colorMap[color] || colorMap.blue;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md overflow-hidden border w-full cursor-pointer hover:shadow-lg transition ${border}`}
    >
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
