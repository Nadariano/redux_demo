import { Button, Card, Container, Grid, IconButton, Input, Table, TableCell, TableRow } from "@mui/material";
import { UsersData } from '../shared/ListOfUsers';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';


export default function User() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const [newUsername, setNewUsername] = useState('');

    return (
        <Card sx={{ marginTop: '5%', width: '70%', float: 'left', marginLeft: '2%' }}>
            <Table>
                {userList.map((user) => (
                    <TableRow>
                        <TableCell sx={{ width: '20%' }}>
                            <Grid container sx={{ alignItems: 'center' }}>
                                <Grid item mr={2}>
                                    <AccountCircleIcon sx={{ fontSize: '500%' }} color="disabled" />
                                </Grid>
                                <Grid item>
                                    <p>{user.name}</p>
                                    <p style={{ color: 'grey' }}>{user.username}</p>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell sx={{ width: '80%' }}>
                            <Input className="inputUpdate" type="text" name="username" placeholder="Type new username"
                                onChange={(e) => setNewUsername(e.target.value)} />

                            <Button variant="contained"
                            onClick={() => {
                                dispatch(updateUsername({id: user.id, username: newUsername}))
                            }}>Update</Button>
                            
                            <IconButton color="error"
                            onClick={() => dispatch(deleteUser({id: user.id}))}>
                            <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                )
                )
                }
            </Table>
        </Card>

    )
}