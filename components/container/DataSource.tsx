import axios from "axios";
import React, { useState, useEffect, ReactNode, FunctionComponent, ForwardRefRenderFunction } from 'react'

type Props = {
    children?: ReactNode | undefined;
    getDataFunc: () => Promise<any> | any;
    resourceName: string;
}

const DataSource: FunctionComponent<Props> = ({ getDataFunc = () => {}, resourceName, children }) => {
    const [state, setState] = useState(null);
    
    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data)
        })()
    }, [getDataFunc]);

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

export default DataSource