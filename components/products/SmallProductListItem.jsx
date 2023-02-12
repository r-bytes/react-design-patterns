const SmallProductListItem = ({ product }) => {
    const { name, price } = products
    return (
        <h3 className="text-2xl">
            {price} - {name}
        </h3>
    )
}
export default SmallProductListItem