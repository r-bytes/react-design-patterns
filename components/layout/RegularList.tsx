import React from "react"

interface Props {
    items: string[],
    itemResourceName: string;
    itemComponent: React.FunctionComponent
}

const RegularList = ({
    items,
    itemResourceName,
    itemComponent: ItemComponent
}:Props) => {
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