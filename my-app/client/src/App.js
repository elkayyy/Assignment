import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/Login'
import RegistrationForm from './RegistrationForm/Registration'
import MainPanel from './MainPanel/MainPanel'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/main" element={<MainPanel />} />
      </Routes>
    </Router>

  );
}

export default App;
