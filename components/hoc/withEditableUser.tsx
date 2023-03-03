import axios from "axios"
import React, { useState, useEffect} from "react"

interface UserType {
    name: string;
    age: number;
    hairColor: string;
}

const withEditableUser = <T,>(Component: React.ComponentType<T>, userId: number) => {
    return (props: T) => {
        const initialState = {
            name: "",
            age: 0,
            hairColor: ""
        }

        const [originalUser, setOriginalUser] = useState()
        const [user, setUser] = useState<UserType>(initialState)

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`)
                setOriginalUser(response.data)
                setUser(response.data)
            })()
        },[])

        const onChangeUser = (changes: React.SetStateAction<{}>) => {
            setUser({ ...user,...changes})
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/api/users/${userId}`, { user })
            setUser(response.data)
            setOriginalUser(response.data)
        }

        const onResetUser = async () => {
            const response = await axios.delete(`/api/users/${userId}`)
            setUser(response.data)
            setOriginalUser(response.data)
        }

        return <Component {...props}
            user={user} 
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />
    }
}
export default withEditableUser