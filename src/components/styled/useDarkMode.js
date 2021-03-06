import { useState , useEffect} from "react"


export default function useDarkMode() {
    const [theme , setTheme] = useState('dark')

    const setMode = (mode) => {
        localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const toggleMode = () =>{
        theme === 'dark' ? setMode('light') : setMode('dark')
    }

    useEffect(()=>{
        const localTheme = localStorage.getItem('theme')
        localTheme ? setTheme(localTheme) : setMode('dark');
        },[])
        
    return [theme , toggleMode]
}

