import { createContext, useContext, useState } from "react";


const Context = createContext();

export const AppContext=(props)=>{

    const [darkTheme,setDark] = useState(true);
    const toggle =()=>{
        let changeDark = !darkTheme;
        setDark(changeDark);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme')
        console.log(body);
    }
    const[search,setSearch] = useState('dog')
    
    return(
        <Context.Provider value={{darkTheme, toggle, search, setSearch}}>
            {props.children}
        </Context.Provider>
    )
}

export const GlobalContext =()=> useContext(Context);