import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './components/LandingPage';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<Signup/>} path='/signUp'/>
      <Route element={<Login/>} path='/login'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
