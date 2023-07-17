import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
function LoginPage() {   
    const navigate=useNavigate();
const [username,setUsername]=useState("");
  const dispatch=useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
            login(
                {
                    name:username
                }
            )
        )
        navigate('/home')
  }   
    return (
        <body>
        <div className='back'>
        <center>
        <div className='make'>
        <div className="auto">
            <h2>Sign in</h2>
            <div className='logform'>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input  className="logi" type="text" placeholder="Enter your username" name="username" value={username} onChange={(event)=> setUsername(event.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input className="logi" type="password" placeholder='Enter your password' name="password" required />
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
    );
};
export default LoginPage