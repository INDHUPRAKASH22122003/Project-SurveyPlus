import React from 'react'
import { Link } from 'react-router-dom'

import './RegisterPage.css'
export default function SignUpPage() {

    return (
        <center>
        <div className="regback">
        <div className="text-center atom">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <div className='regform'>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" className="vagathan" placeholder='Enter your Username' name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" className="vagathan" placeholder='Enter your Email' name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" className="vagathan" placeholder='Enter Strong Password' name="password" requiredc />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" className="vagathan" placeholder='Enter Confirm Password' name="confirm password" requiredc />
                </p>
                <p>
                    <label>Mobile No</label><br/>
                    <input type="tel" className="vagathan" placeholder='Enter Mobile No'name="mobile" requiredc />
                </p>
                <b>
                <p>
                    <input type="checkbox"  className="vagathan" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                </b>
                <br/>
                <p>
                    <center><button id="sub" type="submit">Register</button></center>
                </p>
            </form>
            </div>
            <footer>
                <p>Already a member?<Link to="/login">Login</Link></p>
                <br/>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
        </center>
    )

}