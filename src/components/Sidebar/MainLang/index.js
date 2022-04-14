import './index.scss'
import {React,createContext, useState} from 'react'
export const LanguageContext = createContext();
export const LanguageProvided =(props)=>{
    const [isEnglish,setIsEnglish]=useState(true)
    return (
        <LanguageContext.Provider value={{ isEnglish ,setIsEnglish}} >
            {props.children}
        </LanguageContext.Provider>
    )
}