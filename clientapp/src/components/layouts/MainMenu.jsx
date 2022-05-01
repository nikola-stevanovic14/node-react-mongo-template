import logoImage from "../../assets/images/logo.jpg"
import Button from '@mui/material/Button';
import jwt from 'jwt-decode'
import { LOCAL_STORAGE_NAMES } from "../../constants/localStorageNames";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";

function MainMenu({ Component }) {
    const navigate  = useNavigate();
    const user = jwt(localStorage.getItem(LOCAL_STORAGE_NAMES.JWT_TOKEN));

    const handleLogOut = () => {
        localStorage.removeItem(LOCAL_STORAGE_NAMES.JWT_TOKEN);
        navigate(ROUTES.LOGIN_PAGE);
    }

    return (
        <>
            <div style={{ padding: "5px 30px 5px 30px", flexGrow: "1", display: "flex", flexDirection: "column"}}>
                <div style={{borderBottom: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ flex: "1 1 0" }}>
                        <img src={logoImage} alt="logo" style={{ width: "70px", height: "70px", marginLeft: "10px"}} />
                    </div>
                    <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="text" color="success" >Page 1</Button>
                        <Button variant="text" color="success" >Page 2</Button>
                        <Button variant="text" color="success" >Page 3</Button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: "1 1 0" }}>
                        <p style={{ marginRight: "20px" }}>Hello, {user.name}</p>
                        <AccountCircleIcon color="success" sx={{ fontSize: 35 }} />
                        <Button 
                            style={{marginLeft: "20px" }} color="success" variant="outlined"
                            onClick={handleLogOut}
                        >
                            Log out
                        </Button>
                    </div>
                </div>
                <Component />
                <div style={{ marginTop: "auto", height: "50px", borderTop: "2px solid #ddd", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <label>&copy; Никола Стевановић 2022</label>
                </div>
            </div>
        </>
    )
}

export default MainMenu;
