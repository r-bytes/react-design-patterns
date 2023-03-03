import { products } from "@components/constants/products";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router'

type Data = {
    id: number;
    name: string;
    price: string;
    description: string;
    rating: number;
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(products)
}