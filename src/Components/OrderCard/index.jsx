const OrderCard = props => {
    const { title, imageUrl, price } = props
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div>
                <p className='text-lg font-medium'>{price}</p>
            </div>
        </div>
    )
}

export default OrderCard