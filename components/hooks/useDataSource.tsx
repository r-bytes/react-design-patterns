import axios from "axios"
import { useEffect, useState } from "react"

interface ResouceType {
    (): Promise<any> | string | null;
}

const useDataSource = (getResource: ResouceType) => {
    const [resource, setResource] = useState()
    
    useEffect(() => {
        (async () => {
            const result = await getResource()
            setResource(result)
        })()
    },[])
    
    return resource
}

export default useDataSource