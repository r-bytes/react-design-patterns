import type { NextPage } from 'next'
import { CurrentUserLoader, UserInfo, UserLoader } from "@components/index"

const Home: NextPage = () => {
    return (
        <UserLoader>
            <UserInfo />
        </UserLoader>
    )
}


export default Home