import type { ToastContextStructure } from "../components/UI/Toast/ContextProvider";
import { useContext } from "react";
import { ToastContext } from "../components/UI/Toast/ContextProvider";

export const useToast = (): ToastContextStructure => useContext<ToastContextStructure>(ToastContext);