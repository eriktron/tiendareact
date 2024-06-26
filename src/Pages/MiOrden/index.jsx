import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TiendaCartaContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layaout from "../../Components/Layout"

function MiOrden() {
  const context = useContext(TiendaCartaContext)
  // console.log(context.order?.slice(-1)[0])
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1

    return (      
        <Layaout>
             <div className="flex item-center justify-center relative w-80 mb-6">
                <h1 className='font-medium text-xl'>Mi Orden</h1>
                <Link to='/misordenes' className="absolute left-0">
                    <p>Atras</p>
                </Link>
            </div>
        {/* Mi Orden */}
            <div className='flex flex-col w-80'>  
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard 
                        key = {product.id}
                        id={product.id}                        
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