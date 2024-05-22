import { createContext, useState } from 'react'

export const TiendaCartaContext = createContext()

export const TiendaCartaProvider = ( {children} ) => {
    //Tienda - Incrementando items
    const [count, setCount] = useState(0)

    //Product Detail - Abrir/Cerrar
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    // console.log('COUNT:', count)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail - Mostrar Productos
    const [productToShow, setProductToShow] = useState({}) // modo objeto
    //TiendaCarta - Agregando productos
    const [cartProducts, setCartProducts] = useState([])    //modo array de objetos
    
    return(
        <TiendaCartaContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </TiendaCartaContext.Provider>
    )
}
