import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import './LoginPage.css'
export default function LoginPage() {
    return (
        <body>
        <div className='back'>
        <center>
        <div className='make'>
        <div className="text-center m-5-auto">
            <h2>Sign in</h2>
            <div className='logform'>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" placeholder="Enter your username" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" placeholder='Enter your password' name="password" required />
                </p>
                <p>
                    <center><button id="sub_btn" type="submit">Login</button></center>
                </p>
            </form>
            </div>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link></p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
        </center>
        </div>
        </body>
    )
}