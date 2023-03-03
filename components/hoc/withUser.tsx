import React, { useState, useEffect, Key } from "react"
import axios from "axios"

interface props {
    Component: React.ComponentType;
    userId: number;
}

const withUser = <P,>(Component: React.ComponentType<P>, userId: number) => {
    return (props: P) => {
        const [user, setUser] = useState(null)

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`)
                setUser(response.data)
            })()
        }, [])

        return <Component {...props} user={user} />
    }
}
export default withUser