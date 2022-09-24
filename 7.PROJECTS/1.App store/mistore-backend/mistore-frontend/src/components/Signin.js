
import React, { useState } from 'react';
import "../styles/Signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import socialimg from '../img/social-0.jpg';
import miLogo from '../img/logo.jpg';



function Signin() {
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    async function login(event){
        event.preventDefault();

        const result = await fetch("http://localhost:4000/api/user/signin",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":'application/json'
                // "Accept":'application/json'
            }
        })
        const data = await result.json();
            if(data.user){
                alert("Congratualation..! You are successfully Login.");
                
            }else{
                alert("Enable to login..! Please check your Email and Password.");
            }
        console.log (data);
        setPassword([]);
        setEmail([]);
    }

    return (
        <div className='body container'>
            <form className='form' onSubmit={login}>
            <div className='heading mb-3'>
            <img id='mi_logo' src={miLogo} alt='logo'></img>
                <h1 >Mi Account</h1>
            </div>
                <h2>Sign In</h2>
                <div className='mb-3'>
                <label  className="form-label" name="lblemail" for="email">Email Address :</label>
                <input
                    placeholder="Enter Your Email"
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    name="email"
                    id="email"
                />
                </div>

                <div className='mb-3'>
                <label  className="form-label"  name="lblpassword" for="password">Password :</label>
                <input
                    placeholder="Enter Your Password"
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    name="password"
                    id="password"
                />
                </div>

                <div className='mb-3'>
                <input className="form-control btn btn-primary" type="submit" value="Sign In" />
                </div>

                <div className="mb-3">
                <img src={socialimg} className="socialImg"  alt=""/>
                </div>
            </form>
        </div>
    )
}

export default Signin