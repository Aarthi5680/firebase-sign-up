import React, { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import signin from "./signin";
import './App.css';

const auth = getAuth(app);

export default function App(){

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



  const createuser = () =>{
    createUserWithEmailAndPassword(auth,email,password).then(value => 
      alert('Register done')
    )
  };
  
  return (
    <div className="new">
      <h2 id="lk">Create Account</h2>
      <label>Email</label>
      <input 
      onChange={(e)=>setEmail(e.target.value)}
      value={email} 
      required placeholder="email" id="km"/><br/>

      <label>Password</label>
      <input 
      onChange={(e)=>setPassword(e.target.value)}
      type="password" required placeholder="password" id="km2" /> <br/>

      <button onClick={createuser} id="btn"> submit </button>

    

    </div>
    

    
  );
}