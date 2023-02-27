import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent, cloneElement, isValidElement, ReactElement } from 'react'

type Props = {
    resourceUrl: string;
    resourceName: string;
    children?: ReactNode | undefined;
}

const ResourceLoader: FunctionComponent<Props> = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null);
    
    useEffect(() => {(async () => {
            const response = await axios.get(resourceUrl)
            setState(response.data)
        })()
    }, [resourceUrl]);

    return (
        <>
            {React.Children.map(children , child => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { [resourceName]: state })
                }

                return child;
            })}
        </>
    )
}

export default ResourceLoader