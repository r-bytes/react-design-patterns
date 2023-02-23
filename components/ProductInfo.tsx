import React, { FunctionComponent } from "react"

type Product  = {
    id: number;
    name: string;
    price: string;
    description: string;
    rating: number;
}

type Props = {
    product: Product
}

const ProductInfo: FunctionComponent<Props> = ({ product }) => {
    const { name, price, description, rating } = product || {}

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