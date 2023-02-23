import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: number;
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
} | undefined

let users = [{
    id: 1,
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
    id: 2,
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
    id: 3,
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

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
    
        users = users.map(user => user.id === uId ? updatedUser : user);
        res.json(users.find(user => user.id === uId));
    }
}