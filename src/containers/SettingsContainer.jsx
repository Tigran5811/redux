import { useDispatch } from "react-redux";
import Settings from "../pages/Settings";
import { makeDark, makeLight } from "../redux/actions/theme";

const SettingsContainer = () => {
    const dispatch = useDispatch()

    const changeToLight = () => {
        dispatch(makeLight)
    }
    const changeToDark = () => {
        dispatch(makeDark)
    }
    return <Settings changeToLight={changeToLight} changeToDark={changeToDark} />
}

export default SettingsContainer