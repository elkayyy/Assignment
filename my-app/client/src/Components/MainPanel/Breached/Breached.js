import React, { useState, useEffect } from "react";
import axios from "axios";
import './Breached.css';

export default function Breached() {
  const [errorMessage, setErrorMessage] = useState("");
  const [pwnedWebsites, setPwnedWebsites] = useState(null); 
  const [pwnedAccounts, setPwnedAccounts] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/breachednumber") 
      .then((res) => {
        setPwnedWebsites(res.data.pwnedWebsites);
        setPwnedAccounts(res.data.formattedPwnedAccounts);
        setLoading(false); 
      })
      .catch((err) => {
        setErrorMessage("Couldn't fetch data");
        setLoading(false);
        console.error(err);
      });
  }, []); 

  if (loading) {
    return (
      <div className="breachedContainer">
        <div className="breachedContainerMessages">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="breachedContainer">
      <div className="breachedContainerMessages">
        {errorMessage && <p>{errorMessage}</p>}
        <h3>Pwned Websites: {pwnedWebsites}</h3>
        <h3>Pwned Accounts: {pwnedAccounts}</h3>
      </div>
    
    </div>
  );
}
