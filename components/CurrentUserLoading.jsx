import axios from "axios";
import React, { useState, useEffect } from 'react'


const CurrentUserLoading = ({ children }) => {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState(null);
    useEffect(() => {
        // (async () => {
        //     const response = await axios.get("/api/current-user")
        //     setUser(response.data)
        // })()

        (async () => {
            const response = await axios.get("/api/products")
            setProducts(response.data)
        })()

    }, []);


    console.log("products", products)
    
    // return (
    //     <div>
    //         {/* {user?.name} */}
    //         {products}
    //     </div>
    // )
}

export default CurrentUserLoading