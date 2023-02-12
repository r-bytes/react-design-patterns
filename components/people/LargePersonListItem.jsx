const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return (
        <>
            <h3 className="mt-4 text-3xl font-bold"> {name} </h3>
            
            <p> Age: {age} years </p>
            <p> Hair Color: {hairColor} </p>
            
            <h3 className="mt-4 text-2xl"> Hobbies: </h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}> {hobby} </li>)}
            </ul>
        </>
    )
}

export default LargePersonListItem