import logoImage from "../../assets/images/logo.jpg"
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../routes";
import UserActionsPopover from "./UserActionsPopover";
import SettingActionsPopover from "./SettingActionsPopover";
import {ROLES} from "../../constants/roles"

function Header({ user }) {
    const iconsFontSize = 32;

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
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: "1 1 0" }}>
                    {user.roles.includes(ROLES.ADMIN.value) ? 
                        <SettingActionsPopover user= {user} iconsFontSize = {iconsFontSize}/>
                        : ''
                    }
                    <UserActionsPopover user= {user} iconsFontSize = {iconsFontSize}/>
                </div>
            </div>
        </>
    )
}

export default Header;
