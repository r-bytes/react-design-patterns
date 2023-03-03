import type { NextPage } from 'next'
import { ProductInfo, UserInfo, withProps, withUser } from "@components/index"
import UserInfoForm from "@components/UserInfoForm";

const Home: NextPage = () => {
    return (
        <>
            <UserInfo userId={1} />
            <ProductInfo productId={1} />
        </>
    )
}

export default Home