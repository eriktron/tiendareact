const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props

    let renderX
    if(handleDelete){
        renderX = <p onClick={() => handleDelete(id)} className='cursor-pointer h-6 w-6 text-black'>X</p>
    }

    return (
        <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className='text-lg font-medium'>{price}</p>
                {renderX}
            </div>
        </div>
    )
}

export default OrderCard