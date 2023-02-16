// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  age: number,
  hairColor: string,
  hobbies: string[]
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
    res.status(200).send({
        name: 'John Doe',
        age: 54,
        hairColor: 'brown',
        hobbies: ['swimming', 'bicycling', 'video games'],
    })
}