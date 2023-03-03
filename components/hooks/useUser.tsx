import axios from "axios"
import { UserType } from "index"
import { useEffect, useState } from "react"

const useUser = (userId: number) => {
    const [user, setUser] = useState<UserType | null>(null)
    
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`)
            setUser(response.data)
        })()
    
        return () => {
            setUser(null)
        }
    }, [userId])
    
    return user
}
export default useUser