import jwt from 'jwt-decode'
import { LOCAL_STORAGE_NAMES } from "../../constants/localStorageNames";
import Header from "../Header/Header"

function MainMenu({ Component }) {
    const user = jwt(localStorage.getItem(LOCAL_STORAGE_NAMES.JWT_TOKEN));

    return (
        <>
            <div style={{ padding: "5px 30px 5px 30px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                <Header user = {user}/>
                <Component />
                <div style={{ marginTop: "auto", height: "50px", borderTop: "2px solid #ddd", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <label>&copy; Никола Стевановић 2022</label>
                </div>
            </div>
        </>
    )
}

export default MainMenu;
