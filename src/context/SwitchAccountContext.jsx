import { useState, useCallback } from "react";
import { SwitchAccountContext } from "./SwitchAccountContext";

export function SwitchAccountProvider({ children }) {
  const [showSwitchLoading, setShowSwitchLoading] = useState(false);
  const [switchMode, setSwitchMode] = useState("business"); // 'business' | 'user'

  const setSwitchLoading = useCallback((show, mode = "business") => {
    setShowSwitchLoading(show);
    if (show) setSwitchMode(mode);
  }, []);

  return (
    <SwitchAccountContext.Provider
      value={{
        showSwitchLoading,
        setShowSwitchLoading: setSwitchLoading,
        switchMode,
      }}
    >
      {children}
    </SwitchAccountContext.Provider>
  );
}
