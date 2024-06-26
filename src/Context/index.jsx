import { createContext, useState, useEffect } from 'react'

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
    const [filtroItem, setFiltroItem] = useState(null)    //modo array

    //enviar productos
    const [items, setItems] = useState(null)

    //enviar productos por titulo
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('buscador: ', searchByTitle)

    useEffect( ()=>{    
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
  
    const filteredItemByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect( ()=>{    
        if(searchByTitle) setFiltroItem(filteredItemByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    console.log('item filtrados: ', filtroItem)
    
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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filtroItem,
            setFiltroItem
        }}>
            {children}
        </TiendaCartaContext.Provider>
    )
}
