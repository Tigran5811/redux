const Settings = ({ changeToLight, changeToDark }) => {

    return (
        <div>
            <button type="button" onClick={changeToLight}>Light</button>
            <button type="button" onClick={changeToDark}>Dark</button>
        </div>
    )
}


export default Settings