import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react'

type Props = {
    resourceUrl: string;
    resourceName: string;
    children: ReactNode;
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
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { [resourceName]: state })
                }

                return child;
            })}
        </>
    )
}

export default ResourceLoader