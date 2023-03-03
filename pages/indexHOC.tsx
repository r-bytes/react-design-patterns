import type { NextPage } from 'next'
import { ControlledOnboardingFlow, Modal, UserInfo, UserInfoForm, printProps, withEditableUser } from "@components/index"
import { useState } from "react";
import { onBoardingData } from "index";

const Home: NextPage = () => {

    const WrappedUserInfo = printProps(UserInfo)
    const WrappedUserInfoWithLoader = withEditableUser(UserInfo, 1)

    return (
        <>
          <WrappedUserInfo a={1} b={"string"} />
          {/* <WrappedUserInfoWithLoader /> */}

          <UserInfoForm />

        </>
    )
}

export default Home