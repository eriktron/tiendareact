import { useContext } from 'react'
import { TiendaCartaContext } from '../../Context'


const Card = (data) => {
  const context = useContext(TiendaCartaContext)
  
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }
  
  const addProductsToCart = (event, productData) =>{
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      // onClick={()=> context.openProductDetail()}>
      onClick={()=> showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category}</span> 
        <img 
          className='w-full h-full object-cover rounded-lg'  
          // src="https://www.aurum-informatica.es/images/easyblog_articles/93/disco-duro-daado.jpg" 
          src={data.data.image}
          alt={data.data.title} 
          // referrerpolicy="no-referrer" 
        />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductsToCart(event, data.data)} //aqui estamos pasando dos parametros la accion del evento y la data
        >+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card