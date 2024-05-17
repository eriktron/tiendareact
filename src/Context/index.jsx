import { createContext, useState } from 'react'

export const TiendaCartaContext = createContext()

export const TiendaCartaProvider = ( {children} ) => {
    const [count, setCount] = useState(0)
    console.log('COUNT:', count)
    
    return(
        <TiendaCartaContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </TiendaCartaContext.Provider>
    )
}
