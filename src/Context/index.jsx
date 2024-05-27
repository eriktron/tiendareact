import { createContext, useState } from 'react'

export const TiendaCartaContext = createContext()

export const TiendaCartaProvider = ( {children} ) => {
    //Tienda - Incrementando items
    const [count, setCount] = useState(0)

    //Product Detail - Abrir/Cerrar
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Chekout Side Menu - Abrir/Cerrar
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail - Mostrar Productos
    const [productToShow, setProductToShow] = useState({}) // modo objeto
    //TiendaCarta - Agregando productos
    const [cartProducts, setCartProducts] = useState([])    //modo array de objetos
    
    //TiendaCarta - Ordenes
    const [order, setOrder] = useState([])    //modo array

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </TiendaCartaContext.Provider>
    )
}
