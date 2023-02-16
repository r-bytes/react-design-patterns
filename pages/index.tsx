import type { NextPage } from 'next'
import { CurrentUserLoading, UserInfo } from "@components/index"


const Home: NextPage = () => {
    return (
        <CurrentUserLoading>
            {/* <UserInfo /> */}
        </CurrentUserLoading>
    )
}

export default Home