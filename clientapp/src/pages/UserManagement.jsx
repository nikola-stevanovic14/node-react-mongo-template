import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {userManagement} from '../requests/userRequests';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { rolesPrettyPrint } from '../constants/roles';
import {ROLES} from '../constants/roles';


const UserManagement = () => {
    const [data, setData] = useState([]);

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
        if(roles.includes(ROLES.BASIC_USER.value)) {
            return "#503D42";
        }
    }

    return (
        <div style={{height: "100%", backgroundColor: "#E8DB7D", marginTop: "15px", marginBottom: "15px", borderRadius: "6px"}}>
            <Typography variant="h5" gutterBottom component="div" sx={{marginTop: "15px", color: "#fff"}} align="center">
                User Management
            </Typography>
            <div style={{margin: "1% 3% 1% 3%"}}>  
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Enabled</TableCell>
                                <TableCell>Roles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                key={row.email}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>
                                        {row.email}
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox checked={row.enabled} color="success" />
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{
                                            backgroundColor: roleColor(row.roles), 
                                            color: "white", 
                                            textAlign: "center",
                                            padding: "5px 0px 5px 0px",
                                            width: "150px",
                                            fontSize: "12px"
                                        }}>
                                            {rolesPrettyPrint(row.roles).toUpperCase()}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default UserManagement