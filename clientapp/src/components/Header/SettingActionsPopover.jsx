import * as React from 'react';
import Popover from '@mui/material/Popover';
import {ROUTES} from "../../routes";
import Link from '@mui/material/Link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PopoverContent, PopoverContentElement } from '../Popover/PopoverContent';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export default function SettingActionsPopover({user, iconsFontSize}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{marginRight: "20px"}}>
            <div aria-describedby={id} onClick={handleClick} style={{display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                <SettingsIcon color="success" sx={{ fontSize: iconsFontSize }} />
                <p style={{ marginRight: "3px", marginLeft: "7px" }}>Settings</p>
                <KeyboardArrowDownIcon color="success" sx={{ marginTop: 0.5 }}/>
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
                    title = "Settings"
                    width = "200px"
                    icon = {<SettingsIcon color = "disabled" sx={{ fontSize: 17 }}/>}
                    elements= {[
                        <PopoverContentElement
                            key={0}
                            Component = {
                                <Link href={ROUTES.USER_MANAGEMENT_PAGE} underline="none" style={{textAlign: "center"}} color="success">
                                    <div style={{display: "flex", height: "40px", alignItems: "center", marginLeft: "10px"}}>
                                        <PeopleAltIcon sx={{ fontSize: 15 }} color="action"/> 
                                        <p style={{marginLeft: "8px", paddingBottom: "3px"}}>User Management</p>                            
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
