import { useContext } from "react"
import Layaout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { TiendaCartaContext } from "../../Context"

function Home() {
  const context = useContext(TiendaCartaContext)

  const renderView = () => {
    if (context.searchByTitle?.length > 0){
      if(context.filtroItem?.length > 0){
        return(
          context.filtroItem?.map( item => (
            <Card key={item.id} data={item}/>
          ))
        ) 
      }else{
        return(
          <div>No se encuentra el producto</div>
        )
      }        

    }else{
      return(
        context.items?.map( item => (
        <Card key={item.id} data={item}/>
      ))
      )
    }   
  }

  return (    
      <Layaout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Productos Principales</h1>
        </div>
        <input 
          type="text" 
          placeholder="Buscar producto"
          className="rounded-lg border-black w-80 p-4 mb-4 focus:outline-none" 
          onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'> 
          {renderView()}
        </div>
       <ProductDetail/>
      </Layaout>
  )
}

export default Home
