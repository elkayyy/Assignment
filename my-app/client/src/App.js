import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/Login'
import RegistrationForm from './RegistrationForm/Registration'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>

  );
}

export default App;
