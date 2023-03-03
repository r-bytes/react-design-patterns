import React, { FunctionComponent } from "react"
import useResource from "./hooks/useResource";

interface Props {
    productId: any;
}

const ProductInfo = ({ productId }: Props) => {
    const product = useResource(`/api/products/${productId}`)
    const { name, price, description, rating } = product
    
    return product ? (
        <>
            <h3 className="mt-4 text-lg font-bold"> {name} </h3>
            <p> {price} </p>
            <h3> Description: </h3>
            <p> {description} </p>
            <p> Average Rating: {rating} </p>
        </>
    ) : <p> Loading... </p>
}
export default ProductInfo