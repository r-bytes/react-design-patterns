import axios from "axios";
import React, { useState, useEffect } from 'react'


const CurrentUserLoading = ({ children }) => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState(null);
    const [allUsers, setAllUsers] = useState(null);
    
    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user")
            setUser(response.data)
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/products")
            setProducts(response.data)
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/users")
            setAllUsers(response.data)
        })()
    }, []);


    console.log("currentUser", user)
    console.log("products", products)
    console.log("allUsers", allUsers)
    
    // return (
    //     <div>
    //         {/* {user?.name} */}
    //         {products}
    //     </div>
    // )
}

export default CurrentUserLoading