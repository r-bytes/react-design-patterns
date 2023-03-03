import axios from "axios"
import { useEffect, useState } from "react"

const useResource = (resourceUrl: string) => {
    const [resource, setResource] = useState()
    
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl)
            setResource(response.data)
        })()
    },[])
    
    return resource
}

export default useResource