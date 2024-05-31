
const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
           <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="font-light">Detalle</span>
                    <span className="font-light">{totalProducts} Productos</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className='font-medium text-2xl'>Bs.- {totalPrice}</span>
                    <p>Go</p>
                </p>                   
           </div>
        </div>
    )
}

export default OrdersCard