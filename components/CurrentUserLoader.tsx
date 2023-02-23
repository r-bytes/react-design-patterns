import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react'

type Props = {
    children: ReactNode
}

const CurrentUserLoader: FunctionComponent<Props> = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user")
            setUser(response.data)
        })()
    }, []);
    
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

export default CurrentUserLoader