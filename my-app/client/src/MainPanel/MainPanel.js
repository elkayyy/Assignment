import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import './MainPanel.css';

export default function MainPanel() {
    const [email, setEmail] = useState('');
    const [breaches, setBreaches] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  

    const handleCheckBreaches = async () => {
        setLoading(true);
        setError(null);
        setBreaches([]);
     
        try {
            const response = await axios.post('http://localhost:8000/api/breachedaccount', { email })
            setBreaches(response.data);
        } catch (error) {
            console.error('Error sending email:', error);
            setError('An error occurred while sending the email.');
        } finally {

            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className='topBar'>
                <h1>Have I been Pwned?!</h1>
            </div>
            <div className='middleBar'>
                <div className='box'>
                    <Box sx={{ width: 500, maxWidth: '100%' }}>
                        <TextField
                            fullWidth
                            label="emailAddress"
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

            <div className='bottomBar'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {breaches.length > 0 && (
                    <div>
                        <h2>Breaches found:</h2>
                        <ul>
                            {breaches.map((breach) => (
                                <li key={breach.Name}>{breach.Name}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {breaches.length === 0 && !loading && !error && (
                    <p>No breaches found for this email.</p>
                )}
            </div>
        </div>
    );
}
