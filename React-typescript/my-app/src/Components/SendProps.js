import React from 'react'


type GetProps = {
 heading:string,
 name:string,
 loginCount:Number,
 isLoggedIn:boolean
}

function SendProps(props:GetProps) {
  return (
    <div>
      {props.heading}
      <div style={{fontSize:"40px",fontWeight:"600"}}>      {props.isLoggedIn ?(
        <p> Welcome {props.name} ! You have logged in {props.loginCount} times </p>
      ):("Welcome Guest")}
      </div>

    </div>
  )
}

export default SendProps
