import { createContext, useContext, useMemo, useState } from "react";

const DEFAULT_TAB_COLOR = "#7619ec";

type TabThemeContextType = {
    tabColor: string;
    setTabColor: (color: string) => void;
    resetTabColor: () => void;
}

const TabThemeContext = createContext<TabThemeContextType | null>(null);

export function TabThemeProvider({children}: {children: React.ReactNode}) {
    const [tabColor, setTabColor] = useState(DEFAULT_TAB_COLOR);

    const value = useMemo(() => ({
        tabColor,
        setTabColor,
        resetTabColor: () => setTabColor(DEFAULT_TAB_COLOR),
    }), [tabColor])

    return <TabThemeContext.Provider value={value}>{children}</TabThemeContext.Provider>
}

export function useTabTheme() {
    const ctx = useContext(TabThemeContext);
    if (!ctx) {
        throw new Error("useTabTheme must be used within a TabThemeProvider");
    }
    return ctx;
}