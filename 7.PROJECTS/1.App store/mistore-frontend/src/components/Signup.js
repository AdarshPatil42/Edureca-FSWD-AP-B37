import React, { useState } from 'react'
import "../styles/Signup.css";

function Signup() {

    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

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
        
    }

    return (
        <div>
            <div>
            <img id='milogo' src="https://th.bing.com/th/id/R.75bb4de63fec327e410dabdc2ac71a14?rik=3IYTKgbm34Hung&riu=http%3a%2f%2fu01.appmifile.com%2fimages%2f2018%2f10%2f10%2f2e43b73d-b5f9-4da8-a4eb-3496600437e6.png&ehk=A9bnUnCAEkUZPCGUR9oqNaOxaBv0CzktDuWit08lRj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt='logo'></img>
                <h1 >Mi Account</h1>
            </div>
            <form onSubmit={register}>
                <h2>Sign Up</h2>
                <div>
                <input placeholder="Enter Your Name" type="text" value={name} onChange={(event)=>setName(event.target.value)} name="name" id="name" />
                </div>
                <br></br>
                <div>
                <input
                    placeholder="Enter Your Email"
                    type="email"
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    name="email"
                    id="email"
                />
                </div>
                <br></br>
                <div>
                <input
                    placeholder="Enter Your Password"
                    type="password"
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    name="password"
                    id="password"
                />
                </div>
                <br></br>
                <div>
                <input  type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default Signup