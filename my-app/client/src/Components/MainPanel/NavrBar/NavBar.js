import * as React from "react";
import Button from "@mui/material/Button";
import BasicModal from "./Modal/Modal";
import './NavBar.css'

export default function NarBar({ onLogout }) {
  return (
    <div className="navContainer">
      <h1>Have I been Pwned?!</h1>
      <Button
        variant="outlined"
        size="small"
        onClick={onLogout}
        sx={{ margin: "1rem" }}
      >
        Logout
      </Button>
      <BasicModal/>
    </div>
  );
}
