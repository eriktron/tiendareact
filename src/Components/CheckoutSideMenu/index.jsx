import { useContext } from 'react'
import { TiendaCartaContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(TiendaCartaContext)
    console.log('Carta: ', context.cartProducts)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Solicitud</h2>
                <div
                    className='cursor-pointer'
                    onClick={() => context.closeCheckoutSideMenu()}
                >x</div>
            </div>
            <div className='px-6 overflow-y-scroll'>  
            {
                context.cartProducts.map(product => (
                    <OrderCard 
                        id={product.id}
                        key = {product.id}
                        title = {product.title}
                        imageUrl = {product.image}
                        price={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>

        </aside>
    )
}

export default CheckoutSideMenu