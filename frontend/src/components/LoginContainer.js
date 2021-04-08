import React, {useState} from 'react'
import styled from 'styled-components/macro'
import {useAuth} from "../auth/AuthContext";
import {loginUser} from "../service/loginService";
import {Redirect} from "react-router-dom";


export default function LoginContainer() {

    const {token, setToken} = useAuth()
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!userName && !userPassword) {
            return
        }
        loginUser(userName, userPassword).then(setToken)
        setUserName('')
        setUserPassword('')
    }

    if (token) {
        return <Redirect to="/"/>
    }

    return (
        <BoxWrapper>
            <div className="box">
                <img
                    src="/images/LoginPageLogo.svg"
                    alt="logo"
                    style={{
                        position: "absolute",
                        left: 2,
                        top: -10,
                        height: "100%",
                        width: "100%",
                        strokeOpacity: 30,
                    }}
                />
            <Form onSubmit={handleSubmit}>
                <span className="text-center">Login</span>
                <div className="input-container">
                    <input type="text" value={userName}
                           onChange={({target}) => setUserName(target.value)}/>
                    <label>Username</label>
                </div>
                <div className="input-container">
                    <input type="password" value={userPassword}
                           onChange={({target}) => setUserPassword(target.value)}/>
                    <label>Password</label>
                </div>
                <button type="submit" className="btn">submit</button>
            </Form>
            </div>
        </BoxWrapper>
    )

}

const BoxWrapper = styled.div`
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;

  .box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    padding: 70px 100px;
    font-family: "Glacial Indifference", serif;
    background-color: rgba(255, 255, 255, 0.5);
  }
  
  .img {
    display: flex;
    align-items: flex-start;
  }
`

const Form = styled.form`
  font-family: "Glacial Indifference", serif;
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;

  .text-center {
    text-transform: uppercase;
    font-size: 20px;
    margin: 20px 25px 30px 20px;
    display: block;
    text-align: center;
  }

  .input-container {
    position: relative;
    margin-bottom: 20px;
  }

  .input-container label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    transition: all 0.5s ease-in-out;
  }

  .input-container input {
    border: 0;
    border-bottom: 1px solid #555;
    background: transparent;
    width: 100%;
    padding: 8px 0 4px 0;
    font-size: 14px;
    font-weight: bold;
  }

  .input-container input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #e74c3c;
  }

  .btn {
    color: black;
    font-weight: bold;
    background-color: #e74c3c;
    outline: none;
    border: 0;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    text-align: center;
  }

  .input-container input:focus ~ label,
  .input-container input:valid ~ label {
    top: -12px;
    font-size: 12px;

  }
`