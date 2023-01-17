import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import './SignUpInForm.css';



function SignUpInForm() {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const [showHome, setShowHome] = useState(false)
  const [show, setShow] = useState(false)
  const localSignUp = localStorage.getItem("signUp")
  const localEmail = localStorage.getItem("email")
  const localPassword = localStorage.getItem("password")
  const localName = localStorage.getItem("name")

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true)
    }
    if (localEmail) {
      setShow(true)
    }
  })

  const click = () => {
    if (name.current.value && email.current.value && password.current.value)
    {
      localStorage.setItem("name", name.current.value)
      localStorage.setItem("email", email.current.value)
      localStorage.setItem("password", password.current.value)
      localStorage.setItem("signUp", email.current.value)
      alert("Account Successfully Created")
      window.location.reload();
      }
  }

  const SignIn = () => {
    if (email.current.value ==localEmail && password.current.value == localPassword) {
      localStorage.setItem("signUp", email.current.value)
      window.location.reload()
    } else {
      alert("Please Enter valid Email and Password")
    }
  }


  return (
    <>
      {showHome ? <Home /> :
        (show ?
          <div className="container">
            <h1>Hello {localName}</h1>
            <div className="input_space">
              <input placeholder="Email" type="email" ref={email} required/>
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} required/>
            </div>
            <button onClick={SignIn}>Sign In</button>
          </div>
          :
          <div className="container">
            <h1>Hello {localName}</h1>
            <div className="input_space">
              <input placeholder="Name" type="text" ref={name} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type="email" ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={click}>Sign up</button>
          </div>)
      }
    </>
  )
}

export default SignUpInForm;