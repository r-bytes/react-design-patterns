import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    name: string;
    price: string;
    description: string;
    rating: number;
} | undefined

const products = [{
    id: 1,
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
    id: 12,
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
    id: 123,
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

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