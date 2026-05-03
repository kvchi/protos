import { useContext } from "react";
import { SwitchAccountContext } from "./SwitchAccountContext";

export function useSwitchAccount() {
  const ctx = useContext(SwitchAccountContext);
  if (!ctx) {
    throw new Error("useSwitchAccount must be used within SwitchAccountProvider");
  }
  return ctx;
}

