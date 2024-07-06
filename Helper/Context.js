"use client"
import React, { createContext } from "react"
export const MyContext = createContext()
const Context = ({children}) =>{
    const username = "Uzair Ahmed"
    return(
        <MyContext.Provider value={username}>
            {children}
        </MyContext.Provider>
    )
}
export default Context;