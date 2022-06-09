import * as React from 'react';
import Popover from '@mui/material/Popover';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LOCAL_STORAGE_NAMES } from "../../constants/localStorageNames";
import {ROUTES} from "../../routes";
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PopoverContent, PopoverContentElement } from '../Popover/PopoverContent';
import PersonIcon from '@mui/icons-material/Person';
import {rolesPrettyPrint} from '../../constants/roles';


export default function UserActionsPopover({user, iconsFontSize}) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleLogOut = () => {
        localStorage.removeItem(LOCAL_STORAGE_NAMES.JWT_TOKEN);
        navigate(ROUTES.LOGIN_PAGE);
    }

    return (
        <div style={{marginRight: "20px"}}>
            <div aria-describedby={id} onClick={handleClick} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <AccountCircleIcon color="success" sx={{ fontSize: iconsFontSize }} />
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "12px 3px 0px 7px"}}>
                    <span style={{textAlign: "center"}}>{user.name}</span>
                    <span style={{fontSize: "10px"}}>{rolesPrettyPrint(user.roles).toUpperCase()}</span>
                </div>  
                <KeyboardArrowDownIcon color="success" sx={{ marginTop: 0.4 }}/>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <PopoverContent
                    title = "User Actions"
                    width = "200px"
                    icon = {<PersonIcon color = "disabled" sx={{ fontSize: 17 }}/>}
                    elements= {[
                        <PopoverContentElement
                            key={0}
                            Component = {
                                <Link href="#" underline="none" onClick={handleLogOut} style={{textAlign: "center"}} color="success">
                                    <div style={{display: "flex", height: "40px", alignItems: "center", marginLeft: "10px"}}>
                                        <LogoutIcon sx={{ fontSize: 15 }} color="action"/> 
                                        <p style={{marginLeft: "8px", paddingBottom: "3px"}}>Log out</p>                            
                                    </div>
                                </Link>
                            }
                        />
                    ]} 
                />
            </Popover>
        </div>
    );
}
