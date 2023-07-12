import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './LandingPage'
import LoginPage from './LoginPage.js'
import RegisterPage from './RegisterPage'
import ForgetPasswordPage from './ForgetPasswordPage'
// import HomePage from './HomePage'
import Navbar from './Navbar'
import './App.css'


function App() {
    return (
        // <div><Navbar/></div>
        <Router>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <Navbar/> } />
                </Routes>
        </Router>
     )
}
export default App
