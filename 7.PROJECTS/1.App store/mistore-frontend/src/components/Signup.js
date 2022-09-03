import React, { useState } from 'react';
import "../styles/Signup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import socialimg from '../img/social-0.jpg';




function Signup() {

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    

    async function register(event){
        event.preventDefault();

        
        const result = await fetch("http://localhost:4000/api/user/signup",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":'application/json'
                // "Accept":'application/json'
            }
        })
        const data = await result.json();
        

        if(data){
            alert("Congratualation..! You are successfully Register.");
            

        }else{
            alert("Please Enter Valid Email and Password");
        }
        console.log (data);
        setName([]);
        setPassword([]);
        setEmail([]);
    }

    return (
        <div className='body container'>
        
        <form onSubmit={register}>
            <div className='heading mb-3'>
            <img id='mi_logo' src="https://mk0bfsieletsonlt96u6.kinstacdn.com/wp-content/uploads/2018/05/mi-logo-e1527492959558.png" alt='logo'></img>    
            
            <h1 >Mi Account</h1>
            </div>
            <h2>Sign Up</h2>
            <div className="mb-3">
            <label  className="form-label" name="lblname" for="name">
                Name :</label>
            <input  className="form-control" placeholder="Enter Your Name" type="text" value={name} onChange={(event)=>setName(event.target.value)} name="name" id="name" autoComplete='off'></input>
            </div>
            <div className="mb-3">
            <label  className="form-label" name="lblemail" for="email">Email Address :</label>
            <input
                placeholder="Enter Your Email"
                className="form-control"
                type="email"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                name="email"
            />
            </div>
            <div className="mb-3">
            <label  className="form-label"  name="lblpassword" for="password">Password :</label>
            <input
                placeholder="Enter Your Password"
                className="form-control"
                type="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
                name="password"
            />
            </div>
            <div className="mb-3">
            <input className="btn btn-primary form-control" type="submit" value="Sign Up" />
            </div>

            <div className="mb-3">
                <img src={socialimg} className="socialImg"  alt=""/>
            </div>
        </form>
        
        </div>
    )
}

export default Signup