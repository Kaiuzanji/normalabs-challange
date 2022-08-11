import { createContext } from 'react'

type DarkModeContextProps = {
  isDarkMode: boolean,
  setIsDarkMode: (value: boolean) => void,
}

export default createContext({} as DarkModeContextProps)