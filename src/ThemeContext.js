import {React, useState, createContext} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = props =>{
  const [toggleState, setToggleState] = useState(false);

  const toggleFunc = () => {
    setToggleState(!toggleState)

    localStorage.setItem("theme", JSON.stringify(toggleState))
  };
  const themeValue = JSON.parse(localStorage.getItem("theme"));

  return(
    <ThemeContext.Provider value={[toggleFunc, themeValue]}>
     <>{props.children}</>
    </ThemeContext.Provider> 
  )

}