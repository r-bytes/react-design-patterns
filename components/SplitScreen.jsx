const SplitScreen = ({
    // left: Left,
    // right: Right,
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {
    const [left, right] = children
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