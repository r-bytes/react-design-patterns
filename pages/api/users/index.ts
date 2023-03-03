import { users } from "@components/constants/users";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}[]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(users)
}