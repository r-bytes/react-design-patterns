import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react'

type Props = {
    children: ReactNode;
    userId: number;
}

const UserLoader: FunctionComponent<Props> = ({ userId, children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`)
            setUser(response.data)
        })()
    }, [userId]);

    console.log("currentUser", user)
    
    return (
        <>
            {React.Children.map(children , child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {user})
                }

                return child;
            })}
        </>
    )
}

export default UserLoader