import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const CURRENCIES = [
  { code: "NGN", symbol: "₦", label: "NGN - Naira" },
  { code: "USD", symbol: "$", label: "USD - Dollar" },
  { code: "GBP", symbol: "£", label: "GBP - Pound" },
  { code: "EUR", symbol: "€", label: "EUR - Euro" },
];

export default function CurrencyDropdown({
  wrapperClassName = "",
  triggerClassName = "flex items-center justify-between gap-3 border p-2 rounded-xl shadow-sm cursor-pointer min-w-[10rem] bg-white hover:bg-gray-50",
  listClassName = "absolute left-0 top-full mt-1 z-20 py-1 min-w-[10rem] bg-white border rounded-lg shadow-lg text-sm",
  size = "default",
}) {
  const [selectCurrency, setSelectCurrency] = useState("NGN - Naira");
  const [open, setOpen] = useState(false);

  const iconSize = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className={`relative ${wrapperClassName}`}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => e.key === "Enter" && setOpen((o) => !o)}
        className={triggerClassName}
      >
        <span className={textSize}>{selectCurrency}</span>
        <RiArrowDropDownLine
          className={`${iconSize} flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <ul className={`${listClassName} ${textSize}`} role="listbox">
            {CURRENCIES.map((curr) => (
              <li
                key={curr.code}
                role="option"
                aria-selected={selectCurrency === curr.label}
                onClick={() => {
                  setSelectCurrency(curr.label);
                  setOpen(false);
                }}
                className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectCurrency === curr.label
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-700"
                }`}
              >
                {curr.symbol} {curr.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
