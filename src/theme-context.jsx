import { createContext, useContext, useEffect, useState } from "react";

const themeContext = createContext();

export function useTheme() {
    return useContext(themeContext)

}

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    function toggleTheme() {
        setIsDarkMode((prev) => !prev)
    }

    const theme = isDarkMode ? "dark" : "light";

    useEffect(()=>
    {
        document.documentElement.setAttribute("data-theme", theme)

    },[isDarkMode])

    return <themeContext.Provider value={{ theme, toggleTheme }}>
        {children}

    </themeContext.Provider>

}

export default ThemeProvider;