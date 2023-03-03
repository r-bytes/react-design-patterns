import axios from "axios"
import { UserType } from "index"
import { useEffect, useState } from "react"

const useCurrentUser = () => {
    const [user, setUser] = useState<UserType | null>()
    
    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/current-user')
            setUser(response.data)
        })()
    
        return () => {
            setUser(null)
        }
    }, [])
    
    return user
}
export default useCurrentUser