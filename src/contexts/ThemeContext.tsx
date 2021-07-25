import {createContext, useContext, useState, PropsWithChildren} from "react";

export const ThemeContext = createContext({theme: 'white', setTheme: (newTheme : string) => {}});

export function useTheme () {
    const {theme,setTheme} = useContext(ThemeContext);
    return [theme, setTheme];
}

const ThemeContextProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<string>('white');
    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;