import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { useAuthcontext } from './hooks/useauthcontext';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Navbar from './components/navbar/navbar';

function App() {
  const {user}=useAuthcontext();
  return (
    <div className='App App-section'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;