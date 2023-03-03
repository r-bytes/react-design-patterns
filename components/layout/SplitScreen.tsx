interface Props {
    children?: any;
    leftWeight?: number;
    rightWeight?: number;
}

const SplitScreen = ({
    // left: Left,
    // right: Right,
    children,
    leftWeight = 1,
    rightWeight = 1
}:  Props) => {
    const [left, right] = children
    console.log(children)
    return (
        <div className="flex">
            <div style={{ flex: leftWeight }}>
                {/* <Left /> */}
                {left}
            </div>
            <div style={{ flex: rightWeight }}>
                {/* <Right /> */}
                {right}
            </div>
        </div>
    )
}
export default SplitScreen