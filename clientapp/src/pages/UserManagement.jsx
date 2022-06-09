import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {userEnabled, userManagement} from '../requests/userRequests';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { rolesPrettyPrint } from '../constants/roles';
import {ROLES} from '../constants/roles';
import Button from '@mui/material/Button';
import RoleModal from '../components/UserManagement/RoleModal';
import {changeRoles} from '../requests/userRequests';
import InfoModal from '../components/Modals/InfoModal';
import Tooltip from '@mui/material/Tooltip';


const UserManagement = () => {
    const [data, setData] = useState([]);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserRoles, setSelectedUserRoles] = useState([]);
    const [showInfoModal, setShowInfoModal] = useState(false);

    useEffect(()=> {
        userManagement()
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            alert(err);
        })
    }, [])

    const roleColor = (roles) => {
        if(roles.includes(ROLES.ADMIN.value)) {
            return "#0C4767";
        }
        if(roles.includes(ROLES.ADVANCED_USER.value)) {
            return "#689689";
        }
        if(roles.includes(ROLES.BASIC_USER.value)) {
            return "#503D42";
        }
    }

    const handleEnabledChange = (userId, userRoles, value, index) => {
        if(!userRoles.includes(ROLES.ADMIN.value)) {
            userEnabled(userId, value)
            .then(() => {
                const users = [...data];
                const user = users[index];
                user.enabled = value;
                users[index] = user;
                setData(users);
            })
            .catch((err) => {
                alert(err);
            })
        }   
    }

    const handleRoleClick = (user) => {
        if(!user.roles.includes(ROLES.ADMIN.value)) {
            setSelectedUserName(user.name);
            setSelectedUserId(user.id);
            setSelectedUserRoles(user.roles);
            setShowRoleModal(true);
        }
    }

    const handleRolesChanged = (userId, newRoles) => {
        changeRoles(userId, newRoles)
        .then(() => {
            const users = [...data];
            const user = users.filter(x=>x.id === userId)[0];
            const index = users.indexOf(user);
            user.roles = newRoles;
            users[index] = user;
            setData(users);
            setShowInfoModal(true);
            setShowRoleModal(false);
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <>
            {showRoleModal ? 
                <RoleModal 
                    isOpen = {showRoleModal}
                    handleClose = {() => setShowRoleModal(false)}
                    handleRolesChanged = {handleRolesChanged} 
                    userId = {selectedUserId}
                    userName = {selectedUserName}
                    currentRoles = {selectedUserRoles}
                /> 
                : ''
            }
            {showInfoModal ? 
                <InfoModal 
                    isOpen = {showInfoModal}
                    handleClose = {() => setShowInfoModal(false)}
                    title = {"Role changed"}
                    message = {"The user role changed successfully."}
                /> 
                : ''
            }
            <div style={{height: "100%", backgroundColor: "#f5f5f5", marginTop: "15px", marginBottom: "15px", borderRadius: "1px"}}>
                <Typography variant="h5" gutterBottom component="div" sx={{marginTop: "2%"}} align="center">
                    User Management
                </Typography>
                <div style={{margin: "2% 7% 1% 7%", boxShadow: "0px 5px 15px 15px rgb(0, 0, 0, 0.17)", borderRadius: "3px"}}>  
                    <TableContainer sx={{borderRadius: "3px"}}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead sx={{backgroundColor: "#9cbbe3"}}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Enabled</TableCell>
                                    <TableCell>Roles</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, i) => (
                                    <TableRow
                                        className= {i%2? "even-row" : "odd-row"}
                                        key={row.email}
                                        sx={ i%2 ? { '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#eae9e9" } :
                                                   { '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#eee"}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {row.email}
                                        </TableCell>
                                        <TableCell>
                                            <Tooltip placement="top" title={row.enabled ? "Disable" : "Enable"} arrow>
                                                <Checkbox checked={row.enabled} color="success" onChange = {(e) => handleEnabledChange(row.id, row.roles, e.target.checked, i)}/>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell onClick={() => handleRoleClick(row)}>
                                            <Tooltip 
                                                placement="top" 
                                                title={row.roles.includes(ROLES.ADMIN.value) ? "You cannot change the administrator role" : "Click to change role"} 
                                                arrow
                                            >
                                                <Box 
                                                    sx={{
                                                        backgroundColor: roleColor(row.roles), 
                                                        color: "white", 
                                                        textAlign: "center",
                                                        padding: "5px 0px 5px 0px",
                                                        width: "150px",
                                                        fontSize: "12px",
                                                        cursor: "pointer"
                                                    }}    
                                                >
                                                    {row.roles && row.roles.length > 0 ? rolesPrettyPrint(row.roles).toUpperCase() : 
                                                        <Button color='success'>No Role</Button>
                                                    }
                                                </Box>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default UserManagement;