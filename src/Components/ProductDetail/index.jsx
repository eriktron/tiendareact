import { useContext } from 'react'
import { TiendaCartaContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(TiendaCartaContext)
    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div>x</div>
            </div>
        </aside>
    )
}

export default ProductDetail