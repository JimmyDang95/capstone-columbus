import React from "react";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/all";
import styled from "styled-components/macro";


export default function AppHeader() {

    return (
        <Wrapper>
            <Link to="/">
                <BiArrowBack className="arrow" size={30}/>
            </Link>
        </Wrapper>
    )

}



const Wrapper = styled.header`
  
  margin-right: 320px;
  margin-top: 5px;
  
  a:visited
  {
    text-decoration: none;
    color: black;
  }
    
`