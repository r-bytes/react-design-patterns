import React, { FunctionComponent } from "react"

interface Props {
    items: string[];
    itemResourceName: string;
    itemComponent: FunctionComponent;
}

const NumberedList = ({
    items,
    itemResourceName,
    itemComponent: ItemComponent
}:Props) => {
    return (
        items.map((item, i) => (
            <React.Fragment key={i}>
                <h3 className="text-3xl mt-4"> {i + 1} </h3>
                <ItemComponent {...{[itemResourceName]: item}} />
            </React.Fragment>
        ))
    )
}
export default NumberedList