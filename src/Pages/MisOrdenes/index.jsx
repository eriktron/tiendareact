
import { useContext } from "react"
import { Link } from "react-router-dom"
import Layaout from "../../Components/Layout"
import OrdersCard from '../../Components/OrdersCard'
import { TiendaCartaContext } from "../../Context"

function MisOrdenes() {
    const context = useContext(TiendaCartaContext)

    return (      
        <Layaout>
             <div className="flex item-center justify-center relative w-80">
                <h1>Mis Ordenes</h1>
            </div>
                      
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/misordenes/${index}`}>
                    <OrdersCard 
                        totalPrice={order.totalPrice} 
                        totalProducts={order.totalProducts} />
                </Link>  
                ))
            }
            <OrdersCard />       
        </Layaout>      
    )
  }
  
export default MisOrdenes