const withProps = (Component: React.FunctionComponent) => {
    return (props: any) => {
        console.log("PROPS => ", props)
        return <Component {...props} />
    }
}
export default withProps