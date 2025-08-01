import { useState } from "react";
import * as React from 'react';
import { useAuth } from '../context/AuthContext';
import { Box, TextField, Paper, Stack, Avatar, ButtonBase} from '@mui/material';

const UsersPage = () => {

    const {user} = useAuth();

    const [email] = useState(user?.email || '');
    const [role] = useState(user?.role || '');
    const [username] = useState(user?.username || '');

    const [avatarSrc, setAvatarSrc] = React.useState(undefined);

    const handleAvatarChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
    
        const reader = new FileReader();
        reader.onload = () => {
            setAvatarSrc(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                height: '80vh',
            }}

            >
            <Paper elevation={3} sx={{ p: 4, width: 400 }}>

                <Stack spacing={2}>

                        <ButtonBase
                            component="label"
                            role={undefined}
                            tabIndex={-1} // prevent label from tab focus
                            aria-label="Avatar image"
                            sx={{
                                borderRadius: '40px',
                                '&:has(:focus-visible)': {
                                outline: '2px solid',
                                outlineOffset: '2px',
                                },
                            }}
                            >
                            <Avatar alt="Upload new avatar" src={avatarSrc}  sx={{ width: 100, height: 100 }}/>
                            <input
                                type="file"
                                accept="image/*"
                                style={{
                                border: 0,
                                clip: 'rect(0 0 0 0)',
                                height: '1px',
                                margin: '-1px',
                                overflow: 'hidden',
                                padding: 0,
                                position: 'absolute',
                                whiteSpace: 'nowrap',
                                width: '1px',
                                }}
                                onChange={handleAvatarChange}
                            />
                        </ButtonBase>

                    <Stack spacing={2} direction={"row"}>

                        <TextField
                            variant="outlined"
                            label='Username'
                            fullWidth
                            slotProps={{
                                input: {
                                readOnly: true,
                                },
                            }}
                            margin="normal"
                            value={username}
                        />
                        <TextField
                            variant="outlined"
                            label='Email'
                            fullWidth
                            slotProps={{
                                input: {
                                readOnly: true,
                                },
                            }}
                            margin="normal"
                            value={email}
                        />
                        <TextField
                            variant="outlined"
                            label='Role'
                            fullWidth
                            slotProps={{
                                input: {
                                readOnly: true,
                                },
                            }}
                            margin="normal"
                            value={role}
                        />

                    </Stack>

                </Stack>

            </Paper>

        </Box>

    );

};

export default UsersPage