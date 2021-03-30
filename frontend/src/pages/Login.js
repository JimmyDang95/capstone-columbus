import {useState} from "react";
import {Redirect} from "react-router-dom";
import {loginUser} from "../service/loginService";
import {useAuth} from "../auth/AuthContext";
import styled from 'styled-components/macro'

export default function Login() {
    const {token, setToken} = useAuth()
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!userName && !userPassword){
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
        <section>
            <p>Please login</p>

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
                onChange={({ target}) => setUserPassword(target.value)}
                />
                <button type="submit">Login</button>
            </Form>
        </section>
    )
}


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
    background-color: chocolate;
    font-family: 'Al Nile';
  }
`