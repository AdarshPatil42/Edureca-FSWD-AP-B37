import React, { useState } from 'react'

function Contactus (){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    

    async function sendMessage(event){
        event.preventDefault();

        
        const result = await fetch("http://localhost:4000/api/user/contactus",{
            method:"POST",
            body:JSON.stringify({name,email,message}),
            headers:{
                "Content-Type":'application/json'
                // "Accept":'application/json'
            }
        })
        const data = await result.json();
        

        if(data){
            alert("Message send succussefuly.");
            

        }else{
            alert("Message not send, Please Check detail");
        }
        console.log (data);
        setName([]);
        setEmail([]);
        setMessage([]);
    }

return (
    <div className='container border mt-5'>
        <form onSubmit={sendMessage}>
            <h2>LET'S STAY IN TOUCH</h2>
            <div className="mb-3">
            <label  className="form-label" name="lblname" for="name">
                Name :</label>
            <input  className="form-control" placeholder="Enter Your Name" type="text" value={name} onChange={(event)=>setName(event.target.value)}  name="name" id="name" ></input>
            </div>

            <div className="mb-3">
            <label  className="form-label" name="lblemail" for="email">Email Address :</label>
            <input
                placeholder="Enter Your Email"
                className="form-control"
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                type="email"
                name="email"
            />
            </div>

            <div className="mb-3">
                <label  className="form-label" name="lbladdress" for="address">Message :</label>
                <textarea  className="form-control" name="adress" 
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                id="address" cols="30" rows="5"></textarea>
            </div>

            <div className="mb-3 form-check">
                <input className="form-check-input" id="exampleCheck1" type="checkbox" name="term"/>
                <label className="form-check-label">Term & Conditions</label>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary">Submit</button>
            </div>

        </form>
    </div>
)
}

export default Contactus;