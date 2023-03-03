import { FunctionComponent, ReactFragment, ReactNode } from "react";
import useCurrentUser from "./hooks/useCurrentUser";
import useResource from "./hooks/useResource";
import axios from "axios";
import useDataSource from "./hooks/useDataSource";

interface Props {
    userId: number
}

const serverResource = (resourceUrl: string) => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

const localStorageResource = (key: string) => () => {
    return localStorage.getItem(key);
}

const UserInfo = ({ userId }: Props) => {
    // const user = useResource(`/api/users/${userId}`);
    const user = useDataSource(serverResource(`/api/users/${userId}`));
    const message = useDataSource(localStorageResource(`message`));
    
    const { name, age, hairColor, hobbies } = user;

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