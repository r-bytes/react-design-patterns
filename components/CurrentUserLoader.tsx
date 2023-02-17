import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react'

type Props = {
    children: ReactNode
}

const CurrentUserLoader: FunctionComponent<Props> = ({ children }) => {
    const [user, setUser] = useState(null);
    // const [products, setProducts] = useState(null);
    // const [allUsers, setAllUsers] = useState(null);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user")
            setUser(response.data)
        })()
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get("/api/products")
    //         setProducts(response.data)
    //     })()
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         const response = await axios.get("/api/users")
    //         setAllUsers(response.data)
    //     })()
    // }, []);


    console.log("currentUser", user)
    // console.log("products", products)
    // console.log("allUsers", allUsers)
    
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