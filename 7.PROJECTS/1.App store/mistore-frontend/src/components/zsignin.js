// import React, { useState } from 'react'
// import "../styles/Signup.css";

// function Signup() {

//     const [name,setName]=useState("")
//     const [password,setPassword]=useState("")
//     const [email,setEmail]=useState("")

//     async function register(){
//         let item ={name,email,password}
//         console.log(item);

//         let result = await fetch("http://localhost:4000/api/user/signup",{
//             method:"POST",
//             body:JSON.stringify(item),
//             headers:{
//                 "content-Type":'application/json',
//                 "Accept":'application/json'
//             }
//         })
//         result = await result.json();
//         console.log ("result", result);
        
//     }

//     return (
//         <div>
//             <div>
//             <img id='milogo' src="https://th.bing.com/th/id/R.75bb4de63fec327e410dabdc2ac71a14?rik=3IYTKgbm34Hung&riu=http%3a%2f%2fu01.appmifile.com%2fimages%2f2018%2f10%2f10%2f2e43b73d-b5f9-4da8-a4eb-3496600437e6.png&ehk=A9bnUnCAEkUZPCGUR9oqNaOxaBv0CzktDuWit08lRj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt='logo'></img>
//                 <h1 >Mi Account</h1>
//             </div>
//             <form action="/" method="POST">
//                 <h2>Sign Up</h2>
//                 <input placeholder="Enter Your Name" type="text" value={name} onChange={(event)=>setName(event.target.value)} name="name" id="name" />
//                 <input
//                     placeholder="Enter Your Email"
//                     type="email"
//                     value={email}
//                     onChange={(event)=>setEmail(event.target.value)}
//                     name="email"
//                     id="email"
//                 />
//                 <input
//                     placeholder="Enter Your Password"
//                     type="password"
//                     value={password}
//                     onChange={(event)=>setPassword(event.target.value)}
//                     name="password"
//                     id="password"
//                 />
//                 <input onClick={register} type="submit" value="Sign Up" />
//             </form>
//         </div>
//     )
// }

// export default Signup
















// import React, { useState } from 'react'
// import "../styles/Signin.css";

// function Signin() {
//     const [password,setPassword]=useState("")
//     const [email,setEmail]=useState("")

//     async function login(event){
//         event.preventDefault();

//         const result = await fetch("http://localhost:4000/api/user/signin",{
//             method:"POST",
//             body:JSON.stringify({email,password}),
//             headers:{
//                 "Content-Type":'application/json'
//                 // "Accept":'application/json'
//             }
//         })
//         const data = await result.json();
//         console.log (data);
        
//     }

//     return (
//         <div>
//             <div>
//             <img id='milogo' src="https://th.bing.com/th/id/R.75bb4de63fec327e410dabdc2ac71a14?rik=3IYTKgbm34Hung&riu=http%3a%2f%2fu01.appmifile.com%2fimages%2f2018%2f10%2f10%2f2e43b73d-b5f9-4da8-a4eb-3496600437e6.png&ehk=A9bnUnCAEkUZPCGUR9oqNaOxaBv0CzktDuWit08lRj4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt='logo'></img>
//                 <h1 >Mi Account</h1>
//             </div>
//             <form onSubmit={login}>
//                 <h2>Sign In</h2>
//                 <input
//                     placeholder="Enter Your Email"
//                     type="email"
//                     name="email"
//                     id="email"
//                 />
//                 <input
//                     placeholder="Enter Your Password"
//                     type="password"
//                     name="password"
//                     id="password"
//                 />
//                 <input type="submit" value="Sign In" />
//             </form>
//         </div>
//     )
// }

// export default Signin