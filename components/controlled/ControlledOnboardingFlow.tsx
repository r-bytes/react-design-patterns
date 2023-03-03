import { Children, FC, FunctionComponent, PropsWithChildren, ReactElement, ReactNode, ReactNodeArray, cloneElement, isValidElement } from "react"

type Props = {
    children?: ReactNode | ReactNode[] | undefined;
    onNext: (data: {}) => void
    currentIndex: number;
}

type onBoardingData = {
    name: string;
    age: number;
    hairColor: string;
}

const ControlledOnboardingFlow = ({ children, currentIndex, onNext }: Props) => {

    const goToNext = (stepData: onBoardingData) => {
        onNext(stepData)
    }
    
    const currentChild = Children.toArray(children)[currentIndex]
    
    if (isValidElement(currentChild)) {
        return cloneElement(currentChild as ReactElement, {
            goToNext
        })
    }

    return currentChild as ReactElement
}
export default ControlledOnboardingFlow