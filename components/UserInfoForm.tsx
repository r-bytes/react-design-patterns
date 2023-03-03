import withEditableResource from "./hoc/withEditableResource";

const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {}
    const buttonStyle = "mx-auto justify-end px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
    return user ? (
        <>
            <label>
                Name:
                <input type="text" value={name} onChange={e => onChangeUser({ name: e.target.value})} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={e => onChangeUser({ age: e.target.value})} />
            </label>
            <label>
                Hair color:
                <input type="text" value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value})} />
            </label>
            <button className={buttonStyle} onClick={onSaveUser}> Save </button>
            <button className={buttonStyle} onClick={onResetUser}> Reset </button>
        </>
    ) : <p> ... Loading </p>
}, "/api/users/1", "user")

export default UserInfoForm