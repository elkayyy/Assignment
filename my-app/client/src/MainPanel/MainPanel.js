import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './MainPanel.css'

export default function MainPanel() {
    return (
        <div className='container'>
            <div className='topBar'> <h1>Have I been Pwned?!</h1> </div>
            <div className='middleBar'>
                <div className='box'><Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <TextField fullWidth label="emailAddress" id="fullWidth"  sx={{
                                backgroundColor: 'white',
                                borderRadius: '4px',
                            }}/>
                </Box></div>
                <div className='btton'>
                    <Stack direction="row" >
                    <Button variant="contained" size='large' sx={{
                        height: "55px"
                        }} endIcon={<SendIcon />}>
                        Pwned?
                    </Button>
                </Stack></div>


            </div>

            <div className='bottomBar'> </div>


        </div>
    );
}