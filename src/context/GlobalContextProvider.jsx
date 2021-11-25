import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [data, setData] = useState([]);

    const addData = (payload) => {
        setData([...data, payload])
    }
    const removeData = (id) => {
        const newData = data?.filter((item) => item.id !== id ? )
    } 
    const value = {
        data,
        addData,
        removeData
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;
