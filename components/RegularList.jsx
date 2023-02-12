import React from "react"

const RegularList = ({
    items,
    itemResourceName,
    itemComponent: ItemComponent
}) => {
    return (
        items.map((item, i) => (
            <React.Fragment key={i}>
                {/* console.log({...{ [itemResourceName]: item }}) */}
                <ItemComponent {...{ [itemResourceName]: item }} />
            </React.Fragment>
        ))
    )
}

export default RegularList