import React, {createContext} from "react";

export const NotificationContext = createContext<(node: React.ReactNode) => void>(() => null)