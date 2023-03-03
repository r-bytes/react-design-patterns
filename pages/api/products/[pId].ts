import { products } from "@components/constants/products";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    name: string;
    price: string;
    description: string;
    rating: number;
} | undefined

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const { pId } = req.query
    const pId = parseInt(req.query.pId as string)

    if (pId) {
        const requestedProduct = products.find(product => product.id === pId)
        res.status(200).json(requestedProduct)
    }
}