import { users } from "@components/constants/users";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
} | undefined

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // convert response to integer
    const uId:number = parseInt(req.query.uId as string)

    if (uId && req.method === "GET") {
        const requestedUser = users.find(user => user.id === uId)
        res.status(200).json(requestedUser)
    } else {
        const { user: updatedUser } = req.body;
        // const requestedUser = users.map(user => user.id === uId ? updatedUser : user);
        res.json(users.find(user => user.id === uId));
    }
}