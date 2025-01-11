import { createContext, useContext } from "react";

export const Themecontext = createContext({
    
 
});

export const useTheme = () => {
  return useContext(Themecontext);
};

export const ThemeProvider = Themecontext.Provider;
