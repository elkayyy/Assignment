import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  background: 'linear-gradient(45deg, #000000, #434343)',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  color: 'white', 
 
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Got Pwned?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Got Pwned? Look bellow
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We've detected that your email address was involved in a data breach. Here are some important steps you should take to protect your account and personal information:
            <ol>
              <li>Change Your Passwords Immediately</li>
              <li>Enable Two-Factor Authentication (2FA)</li>
              <li>Monitor Your Accounts</li>
              <li>Beware of Phishing Attempts</li>
              <li>Update Security Questions</li>
              <li>Use a Password Manager</li>
              <li>Stay Informed</li>
            </ol>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
