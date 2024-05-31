import { useContext } from "react"
import Layaout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { TiendaCartaContext } from "../../Context"

function Home() {
  const context = useContext(TiendaCartaContext)

  return (    
      <Layaout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            context.items?.map( item => (
              <Card key={item.id} data={item}/>
            ))
          }
        </div>
       <ProductDetail/>
      </Layaout>
  )
}

export default Home
