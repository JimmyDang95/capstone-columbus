import styled from 'styled-components/macro'
import BackgroundLayout from "../components/BackgroundLayout";
import React from 'react';
import LoginContainer from "../components/LoginContainer";


export default function LoginPage() {
    return (
        <BackgroundLayout>
            <LoginContainer/>
            <JoinWrapper>
                Join our community and explore new places!
            </JoinWrapper>
        </BackgroundLayout>
    );
}


const WelcomeHeader = styled.h1`
  font-family: Playful Display, serif;
  font-style: italic;
  margin-top: 40px;
  margin-bottom: 90px;
  font-size: 40px;
  font-weight: bold;
  color: black;
`
const JoinWrapper = styled.h1`
  font-family: Playful Display, serif;
  font-style: italic;
  margin-top: 570px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`

