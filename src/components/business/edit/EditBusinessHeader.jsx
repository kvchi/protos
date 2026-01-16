import { HiArrowLeft } from "react-icons/hi2";

export default function EditBusinessHeader({
  onBack,
  title = "Edit Business", 
}) {
  return (
    <div className="my-4 space-y-3 max-w-[21rem] md:max-w-lg lg:max-w-4xl">
      <button onClick={onBack} className="text-primary">
        <HiArrowLeft className="text-2xl" />
      </button>

      <div className="flex items-center gap-3">
        <h1 className="text-base md:text-xl font-semibold text-primary truncate">
          {title}
        </h1>

        <div className="flex-1" />

        <button
          className="
            bg-primary text-white
            px-3 md:px-4 py-2
            rounded-lg
            text-xs md:text-sm
            whitespace-nowrap
            flex-shrink-0
          "
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
