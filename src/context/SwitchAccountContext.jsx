import { createContext, useContext, useState, useCallback } from "react";

export const SwitchAccountContext = createContext(null);

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

// eslint-disable-next-line react-refresh/only-export-components -- hook is the public API for this context
export function useSwitchAccount() {
  const ctx = useContext(SwitchAccountContext);
  if (!ctx) {
    throw new Error("useSwitchAccount must be used within SwitchAccountProvider");
  }
  return ctx;
}
