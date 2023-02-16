import React from "react"

const NumberedList = ({
    items,
    itemResourceName,
    itemComponent: ItemComponent
}) => {
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