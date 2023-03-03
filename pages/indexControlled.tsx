import type { NextPage } from 'next'
import { ControlledOnboardingFlow, Modal, UserInfo, printProps } from "@components/index"
import { FunctionComponent, useState } from "react";
import UncontrolledOnboardingFlow from "@components/UncontrolledOnboardingFlow";
import { onBoardingData } from "index";
import withUser from "@components/withUser";
import UserInfoForm from "@components/UserInfoForm";

const Home: NextPage = () => {
    type Props = {
        message: string;
    }
    
    type StepProps = {
        goToNext: (stepData: onBoardingData) => void;
    }

    const Text = ({ message }: Props) => <h1> {message} </h1>
    
    const [onboardingData, setOnboardingData] = useState({name: "", age: 0, hairColor: ""});
    const [currentIndex, setCurrentIndex] = useState(0)
    const [shouldShow, setShouldShow] = useState(false)
    
    const buttonStyle = "mx-auto justify-end px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"

    const onNext = (stepData: onBoardingData) => {
        setOnboardingData({...onboardingData, ...stepData})
        setCurrentIndex(currentIndex + 1)
    }

    const StepOne = ({ goToNext }: StepProps) => {
        console.log("STEP 1 => ", onboardingData)

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
    
    const StepTwo = ({ goToNext }: StepProps) => {
        console.log("STEP 2 => ", onboardingData)

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
    
    const StepThree = ({ goToNext }: StepProps) => {
        console.log("STEP 3 => ", onboardingData)

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

    const StepFour = ({ goToNext }: StepProps) => {
        console.log("STEP 4 => ", onboardingData)
        return (
            <>
                <h1> {"Step four: yaay good job"} </h1>
                <button 
                    className={buttonStyle} 
                    onClick={() => goToNext({})}
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

            <ControlledOnboardingFlow
                currentIndex={currentIndex}
                onNext={onNext}
            >
                <StepOne />
                <StepTwo />
                {onboardingData.age < 1 && <StepThree />}
                <StepFour />
            </ControlledOnboardingFlow>
        </>
    )
}

export default Home