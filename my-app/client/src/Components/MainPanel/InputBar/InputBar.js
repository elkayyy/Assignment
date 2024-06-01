import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function InputBar({ email, setEmail, handleCheckBreaches, loading }) {
    return (
        <div className='middleBar'>
            <div className='box'>
                <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <TextField
                        fullWidth
                        label="Enter your emailAddress/account"
                        id="fullWidth"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ backgroundColor: 'white', borderRadius: '4px' }}
                    />
                </Box>
            </div>
            <div className='btton'>
                <Stack direction="row">
                    <Button
                        variant="contained"
                        size='large'
                        sx={{ height: "55px" }}
                        endIcon={<SendIcon />}
                        onClick={handleCheckBreaches}
                        disabled={loading}
                    >
                        {loading ? 'Checking...' : 'Pwned?'}
                    </Button>
                </Stack>
            </div>
        </div>
    );
}