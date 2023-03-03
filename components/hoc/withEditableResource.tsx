import axios from "axios"
import React, { useEffect, useState } from "react"

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const withEditableResource = (Component: React.ComponentType, resourcePath: string, resourceName: string) => {
    return (props: any) => {
        const initialState = {
            name: "",
            age: 0,
            hairColor: "",
            hobbies: ["guitar", "music"],
        }

        const [originalData, setOriginalData] = useState({})
        const [data, setData] = useState(initialState)

        useEffect(() => {
            (async () => {
                const response = await axios.get(resourcePath)
                setOriginalData(response.data)
                setData(response.data)
            })()
        },[])

        const onChange = (changes: React.SetStateAction<{}>) => {
            setData({ ...data,...changes })
        }

        const onSave = async () => {
            const response = await axios.post(resourcePath, { data })
            setData(response.data)
            setOriginalData(response.data)
        }

        const onReset = async () => {
            const response = await axios.delete(resourceName)
            setData(response.data)
            setOriginalData(response.data)
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalizeFirstLetter(resourceName)}`]: onChange,
            [`onSave${capitalizeFirstLetter(resourceName)}`]: onSave,
            [`onReset${capitalizeFirstLetter(resourceName)}`]: onReset,
        }

        return <Component {...props} {...resourceProps} />
    }
}
export default withEditableResource