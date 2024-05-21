import { useContext } from 'react'
import { TiendaCartaContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(TiendaCartaContext)
    console.log('product to show ', context.productToShow)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detalle</h2>
                <div
                    className='cursor-pointer'
                    onClick={() => context.closeProductDetail()}
                >x</div>
            </div>
            <figure className='px-11'>
                {/* <span>Imagen</span> */}
                <img 
                className='w-full h-full rounded-sm' 
                src={context.productToShow.image}
                alt={context.productToShow.title}
                />
            </figure>           
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>Precio {context.productToShow.price}</span>
                <span className='font-medium text-md'>Titulo {context.productToShow.title}</span>
                <span className='font-light text-sm'>Descripción {context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail