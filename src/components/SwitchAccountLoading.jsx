import { useContext } from "react";
import { ClipboardCheck, CircleDollarSign } from "lucide-react";
import { hand } from "../assets/images";
import { SwitchAccountContext } from "../context/SwitchAccountContext";

export default function SwitchAccountLoading() {
  const { switchMode } = useContext(SwitchAccountContext);
  const isSwitchingToUser = switchMode === "user";
  const heading = isSwitchingToUser
    ? "Switching to user account"
    : "Switching to business account";

  return (
    <div
      className="fixed top-24 left-0 right-0 bottom-0 z-[10000] flex flex-col bg-white w-full"
      role="status"
      aria-live="polite"
      aria-label={heading}
    >
      <div className="flex-1 flex items-center justify-center ">
        <div className="relative w-full max-w-4xl">
          {/* IMAGE (background layer) */}
          <img
            src={hand}
            alt=""
            className="w-full object-contain opacity-50 -mt-30"
            aria-hidden
          />

          {/* TEXT OVERLAY */}
          <h2 className="absolute inset-0 flex items-center justify-center text-primary font-semibold text-lg sm:text-xl md:text-3xl text-center px-6 leading-snug">
            {isSwitchingToUser ? (
              <>
                Switching to user
                <br />
                account
              </>
            ) : (
              <>
                Switching to business
                <br />
                account
              </>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
