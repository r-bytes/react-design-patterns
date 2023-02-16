import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from 'next/router'

type Data = {
    name: string;
    price: string;
    description: string;
    rating: number;
} | undefined

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { pId } = req.query
    if (pId) {
        const requestedProduct = products.find(product => product.name === pId)
        res.status(200).json(requestedProduct)
    }
}