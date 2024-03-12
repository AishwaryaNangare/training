import React, { useState } from 'react'

type User={
name:string,
email:string
}

function LoggedIn() {
    // in typescript typescript is inferred from initial value
  const [isLoggedIn,setIsLoggedIn]= useState(false) 
// explicitelly add type 
const [user, setUser]=useState<User| null>(null)
const handleLogIn=()=>{
    setIsLoggedIn(true)
    setUser({
        name:"Kirti",
        email:'kt@gmail.com'
    })
}
   
  return (
    <div>
     <button onClick={handleLogIn}>Log In</button> 
     <button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
     <div>user is {isLoggedIn?'Logged In':'Logged Out'}</div>
     <div>{isLoggedIn ?<p>{user?.name} {user?.email}</p>:null}</div>
    </div>
  )
}

export default LoggedIn
