import {useState} from "react";
import {Redirect} from "react-router-dom";
import {loginUser} from "../service/loginService";
import {useAuth} from "../auth/AuthContext";
import styled from 'styled-components/macro'
import {Box, Button} from "@material-ui/core";
import BackgroundLayout from "../components/BackgroundLayout";


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
            <h1>Welcome to Columbus</h1>
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
        </BackgroundLayout>
    );
}

const LoginWrapper = styled.section`
  
  h1 {
    font-family: Playful Display;
    margin-top: 50px;
    font-size: 40px;
    font-weight: lighter;
    }
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