import { useContext } from 'react'
import { TiendaCartaContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layaout from "../../Components/Layout"

function MiOrden() {
  const context = useContext(TiendaCartaContext)
  // console.log(context.order?.slice(-1)[0])
    return (      
        <Layaout>
        Mi Orden
        <div className='flex flex-col w-80'>  
            {
                context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard 
                        id={product.id}
                        key = {product.id}
                        title = {product.title}
                        imageUrl = {product.image}
                        price={product.price}
                        // handleDelete={handleDelete}
                    />
                ))
            }
            </div>
        </Layaout>      
    )
  }
  
export default MiOrden