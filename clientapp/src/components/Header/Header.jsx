import logoImage from "../../assets/images/logo.jpg"
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";
import UserActionsPopover from "./UserActionsPopover"
import SettingsIcon from '@mui/icons-material/Settings';

function Header({ user }) {
    const iconsFontSize = 35;

    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate(ROUTES.HOME_PAGE);
    }

    return (
        <>
            <div style={{borderBottom: "2px solid #ddd", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 0" }}>
                    <img onClick = {handleLogoClick} src={logoImage} alt="logo" style={{ width: "50px", height: "50px", marginLeft: "10px", cursor: "pointer"}} />
                </div>
                <div style={{ flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button variant="text" color="success" >Page 1</Button>
                    <Button variant="text" color="success" >Page 2</Button>
                    <Button variant="text" color="success" >Page 3</Button>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: "1 1 0" }}>
                    <SettingsIcon color = "success" sx={{ fontSize: iconsFontSize, marginRight: 2 }}/>
                    <UserActionsPopover user= {user} iconsFontSize = {iconsFontSize}/>
                </div>
            </div>
        </>
    )
}

export default Header;
