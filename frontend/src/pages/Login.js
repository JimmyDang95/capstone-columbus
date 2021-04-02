import {useState} from "react";
import {Redirect} from "react-router-dom";
import {loginUser} from "../service/loginService";
import {useAuth} from "../auth/AuthContext";
import styled from 'styled-components/macro'
import { Button} from "@material-ui/core";
import BackgroundLayout from "../components/BackgroundLayout";
import React from 'react';


export default function Login() {


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
        <BackgroundLayout>
            <WelcomeHeader>Welcome to Columbus</WelcomeHeader>
            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    value={userName}
                    onChange={({target}) => setUserName(target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={userPassword}
                    onChange={({target}) => setUserPassword(target.value)}
                />
                <Button type="submit">Login</Button>
            </Form>
            <JoinWrapper>
                Join Our Community And Explore More Places!
            </JoinWrapper>
        </BackgroundLayout>
    );
}


const WelcomeHeader = styled.h1`
    font-family: Playful Display, serif;
    font-style: italic;
    margin-top: 140px;
    font-size: 40px;
    font-weight: bold;
    color: black;
`
const JoinWrapper = styled.h1`
    font-family: Playful Display, serif;
    font-style: italic;
    margin-top: 150px;
    font-size: 20px;
    font-weight: bold;
    color: black;
`


const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    flex-grow: 1;
    text-align: center;
    margin: 8px;
  }

  button {
    padding: 8px;
    margin: 8px;
    background-color: white;
    font-family: 'Al Nile';
  }
`