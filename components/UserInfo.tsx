import { FunctionComponent, ReactFragment, ReactNode } from "react";

type User  = {
    id: number;
    name: string;
    age: number;
    hairColor:  string;
    hobbies: string[]
}

type Props = {
    user: User
}

const UserInfo: FunctionComponent<Props> = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
        <>
            <h3 className="mt-4 text-3xl font-bold"> {name} </h3>
            <p> Age: {age} years </p>
            <p> Hair Color: {hairColor} </p>
            
            <h3 className="mt-4 text-lg font-bold underline"> Hobbies: </h3>
            <ul>
                {hobbies.map((hobby: string) => <li key={hobby}> {hobby} </li>)}
            </ul>
        </>
    ) : <p> Loading... </p>
}

export default UserInfo