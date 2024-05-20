import { createContext, useState } from 'react'

export const TiendaCartaContext = createContext()

export const TiendaCartaProvider = ( {children} ) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    console.log('COUNT:', count)

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    return(
        <TiendaCartaContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
        }}>
            {children}
        </TiendaCartaContext.Provider>
    )
}
