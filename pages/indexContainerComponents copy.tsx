import type { NextPage } from 'next'
import { CurrentUserLoader, DataSource, ResourceLoader, UserInfo, UserLoader } from "@components/index"
import ProductInfo from "@components/ProductInfo"
import axios from "axios"
import { FunctionComponent } from "react"

const Home: NextPage = () => {
    type Props = {
        message: string;
    }

    const getServerData = (url: string) => async () => {
        const response = await axios.get(url)
        return response.data
    }

    const getLocalStorageData = (key: string) =>  () => {
        if (localStorage.getItem(key)) {
            return localStorage.getItem(key)
        }
        return localStorage.setItem(key, key)
    }

    const Text: FunctionComponent<Props> = ({ message }) => <h1> {message} </h1>

    return (
        <>
            <h1 className="mt-10 text-md font-bold"> Basic ... </h1>
            <ResourceLoader resourceName="user" resourceUrl="/api/users/1">
                <UserInfo user={{
                    id: 0,
                    name: "",
                    age: 0,
                    hairColor: "",
                    hobbies: []
                }} />
            </ResourceLoader>

            <ResourceLoader resourceName="product" resourceUrl="/api/products/1">
                <ProductInfo product={{
                    id: 0,
                    name: "",
                    price: "",
                    description: "",
                    rating: 0
                }} />
            </ResourceLoader>
            
            <h1 className="mt-10 text-md font-bold"> One step further... </h1>
            <DataSource getDataFunc={getServerData("/api/users/1")} resourceName="user">
                <UserInfo user={{
                    id: 0,
                    name: "",
                    age: 0,
                    hairColor: "",
                    hobbies: []
                }} />
            </DataSource>

            <DataSource getDataFunc={getLocalStorageData("hello from local storage")} resourceName="message">
                <Text message={""} />
            </DataSource>
        </>
    )
}


export default Home