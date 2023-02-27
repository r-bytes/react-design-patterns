import type { NextPage } from 'next'
import { Modal } from "@components/index"
import { FunctionComponent, useState } from "react";
import UncontrolledOnboardingFlow from "@components/UncontrolledOnboardingFlow";

const Home: NextPage = () => {
    type Props = {
        message: string;
    }

    const Text = ({ message }: Props) => <h1> {message} </h1>

    const [shouldShow, setShouldShow] = useState(false)
    const buttonStyle = "mx-auto justify-end px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"

    const StepOne = ({ goToNext }) => {
        return (
        <>
            <h1> {"Step one: What is your name?"} </h1>
            <button 
                className={buttonStyle} 
                onClick={() => goToNext({ name: "John Doe" })}
            >
                {"Next"}
            </button>
        </>
        )
    }
    
    const StepTwo = ({ goToNext }) => {
        return (
            <>
                <h1> {"Step two: what is your age?"} </h1>
                <button 
                    className={buttonStyle} 
                    onClick={() => goToNext({ age: 100 })}
                >
                    {"Next"}
                </button>
            </>
        )
    }
    
    const StepThree = ({ goToNext }) => {
        return (
            <>
                <h1> {"Step three: email user info and close the ticket"} </h1>
                <button 
                    className={buttonStyle} 
                    onClick={() => goToNext({ hairColor: "black" })}
                >
                    {"Next"}
                </button>
            </> 
        )
    }


    return (
        <>
            <Modal shouldShowModal={shouldShow} onRequestClose={() => setShouldShow(!shouldShow)}>
                <Text message="This is a modal" />
            </Modal>
            <button
                type="button"
                className={buttonStyle}
                onClick={() => setShouldShow(!shouldShow)}
            >
                {shouldShow ? "hide modal" : "show modal"}
            </button>

            <UncontrolledOnboardingFlow
                onFinish={data => {
                    console.log(data)
                    alert("Finished onboarding!")
                }}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
        </>
    )
}


export default Home