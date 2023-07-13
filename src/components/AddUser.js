import { Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";

import { useState } from 'react';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';


export default function AddUser() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    return (
        <Card sx={{ marginTop: '5%', width: '28%', float: 'left' }}>
            <CardContent>
                <form>
                    <input type="text" name="name" placeholder="Name" className="inputAdd"
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <input type="text" name="username" placeholder="username" className="inputAdd"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    {/* <TextField type="text" name="name" placeholder="Name" className="inputAdd" /><br />
                    <TextField type="text" name="username" placeholder="username" className="inputAdd" /> */}
                </form>
                <Button sx={{ width: '100%' }} variant="contained"
                    onClick={() => {
                        dispatch(addUser({ id: 0, name: name, username: username }));
                    }
                    }>Add User</Button>
            </CardContent>
        </Card>
    )
}