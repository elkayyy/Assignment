import * as React from "react";
import { useState } from "react";
import axios from "axios";
import "./MainPanel.css";
import NavrBar from "./NavrBar/NavBar";
import Results from "./Results/Results";
import InputBar from "./InputBar/InputBar";
import { useNavigate } from "react-router-dom";
import Breached from "./Breached/Breached";

export default function MainPanel() {
  const [email, setEmail] = useState("");
  const [breaches, setBreaches] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showtext, setShowtext] = useState(false);
  const navigate = useNavigate();

  const handleCheckBreaches = async () => {
    if (!email.trim()) {
      setError("Not valid account/email");
      setBreaches([]);
      return;
    }

    setLoading(true);
    setError(null);
    setBreaches([]);
    setShowtext(false);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/breachedaccount",
        { email }
      );
      setBreaches(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setShowtext(true);
      } else {
        setError("Rate limit is exceeded. Try again soon!");
      }
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="navContainer">
        <NavrBar onLogout={handleLogout} />
      </div>
      <div className="breachedContainer">
        <Breached/>
      </div>
      <div className="middleBar">

        <InputBar
          email={email}
          setEmail={setEmail}
          handleCheckBreaches={handleCheckBreaches}
          loading={loading}
        />
      </div>
      <div className="resultsContainer">
        <Results
          error={error}
          loading={loading}
          breaches={breaches}
          showtext={showtext}
        />
      </div>
    </div>
  );
}
