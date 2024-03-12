import React from 'react'


type GetProps = {
 heading:string,
 name:string,
 loginCount:number,
 isLoggedIn:boolean
}

function SendProps({heading,name,loginCount,isLoggedIn}:GetProps) {
  return (
    <div>
      {heading}
      <div style={{fontSize:"40px",fontWeight:"600"}}>      {isLoggedIn ?(
        <p> Welcome {name} ! You have logged in {loginCount} times </p>
      ):("Welcome Guest")}
      </div>

    </div>
  )
}

export default SendProps
