"use client";

import { createContext, useContext, useEffect } from "react";

// Simplified context since we only have dark mode
type ThemeContextType = {
  theme: "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always use dark mode
  useEffect(() => {
    // Always add dark class to document
    document.documentElement.classList.add("dark");

    // Save to localStorage for consistency
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
