import { Children, FC, FunctionComponent, PropsWithChildren, ReactElement, ReactNode, ReactNodeArray, cloneElement, isValidElement, useState } from "react"

type Props = {
    children?: ReactNode | ReactNode[] | undefined;
    onFinish: (data: any) => void
}

const UncontrolledOnboardingFlow = ({ children, onFinish }: Props) => {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const goToNext = (stepData: {}) => {
        const nextIndex = currentIndex + 1

        const updatedData = {
            ...onboardingData,
            ...stepData
        }
        
        if (nextIndex < (children as React.ReactNode[]).length) {
            setCurrentIndex(nextIndex)
        } else {
            onFinish(updatedData)
        }

        setOnboardingData(updatedData)
    }

    const currentChild = Children.toArray(children)[currentIndex]

    if (isValidElement(currentChild)) {
        return cloneElement(currentChild as ReactElement, {
            goToNext
        })
    }

    return currentChild as ReactElement
}
export default UncontrolledOnboardingFlow