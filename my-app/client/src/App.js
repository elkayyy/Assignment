import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/Login'
import RegistrationForm from './Components/RegistrationForm/Registration'
import MainPanel from './Components/MainPanel/MainPanel'
import ProtectedRoutes from './Utils/ProtectedRoutes';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/main" element={<MainPanel />} />
          <Route exact path="/" element={<LoginForm />} />
        </Route>

      </Routes>
    </Router>

  );
}

export default App;
