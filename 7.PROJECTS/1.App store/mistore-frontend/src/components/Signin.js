
import React, { useState } from 'react'
import "../styles/Signin.css";

function Signin() {
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

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
        
    }

    return (
        <div>
            <div>
            <img id='milogo' src="https://th.bing.com/th/id/R.75bb4de63fec327e410dabdc2ac71a14?rik=3IYTKgbm34Hung&riu=http%3a%2f%2fu01.appmifile.com%2fimages%2f2018%2f10%2f10%2f2e43b73d-b5f9-4da8-a4eb-3496600437e6.png&ehk=A9bnUnCAEkUZPCGUR9oqNaOxaBv0CzktDuWit08lRj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt='logo'></img>
                <h1 >Mi Account</h1>
            </div>
            <form onSubmit={login}>
                <h2>Sign In</h2>
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
                <div>
                <br></br>
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
                <input type="submit" value="Sign In" />
                </div>
            </form>
        </div>
    )
}

export default Signin