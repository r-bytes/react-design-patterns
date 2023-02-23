import type { NextPage } from 'next'
import { CurrentUserLoader, DataSource, ResourceLoader, UserInfo, UserLoader } from "@components/index"
import ProductInfo from "@components/ProductInfo"
import axios from "axios"

const Home: NextPage = () => {
    type ServerData = (url: string) => () => Promise<any>
    type LocalStorageData = (key: string) => () => string | null

    const getServerData: ServerData = (url: string) => async () => {
        const response = await axios.get(url)
        return response.data
    }

    const getLocalStorageData: LocalStorageData = (key: string) =>  () => {
        if (localStorage.getItem(key)) {
            return localStorage.getItem(key)
        }
        return localStorage.setItem(key, key)
    }

    const Text = ({ message }) => <h1> {message} </h1>

    return (
        <>
            <h1 className="mt-10 text-md font-bold"> Basic ... </h1>
            <ResourceLoader resourceName="user" resourceUrl="/api/users/1">
                <UserInfo />
            </ResourceLoader>

            <ResourceLoader resourceName="product" resourceUrl="/api/products/1">
                <ProductInfo />
            </ResourceLoader>
            
            <h1 className="mt-10 text-md font-bold"> One step further... </h1>
            <DataSource getDataFunc={getServerData("/api/users/1")} resourceName="user">
                <UserInfo />
            </DataSource>

            <DataSource getDataFunc={getLocalStorageData("hello from local storage")} resourceName="message">
                <Text />
            </DataSource>
        </>
    )
}


export default Home