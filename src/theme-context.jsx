import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function useTheme() {
    return useContext(themeContext)

}

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleTheme() {
        setIsDarkMode((prev) => !prev)
    }

    const theme = isDarkMode ? "dark" : "light";

    return <themeContext.Provider value={{ theme, toggleTheme }}>
        {children}

    </themeContext.Provider>

}

export default ThemeProvider;