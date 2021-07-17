import {createContext, useContext, useState} from "react";

export const ThemeContext = createContext('white');
export const ThemeUpdateContext = createContext(() => {});

export function useTheme () {
    const theme = useContext(ThemeContext);
    const setTheme = useContext(ThemeUpdateContext);

    return [theme, setTheme];
}

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState<string>('white');

    function updateTheme(newTheme : string) {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={updateTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;