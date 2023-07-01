import {Link} from "react-router-dom";
import React from "react";
import BackgroundLayout from "../components/BackgroundLayout";
import styled from "styled-components/macro";
import AppHeader from "../components/AppHeader";


export default function OverviewPage() {
    return (
        <BackgroundLayout>
            <AppHeader/>
            <BoxWrapper>
                <Link className="box1" to="/routesoverview">
                    Show all Routes
                </Link>
                <Link className="box2" to="/newroutepage">
                    Add new Route
                </Link>
            </BoxWrapper>
        </BackgroundLayout>
    )
}

const BoxWrapper = styled.div`
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;
  justify-content: center;
  text-align: center;

  a:visited {
    text-decoration: none;
    color: black;
  }


  .box1 {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    padding: 40px 50px;
    font-family: "Glacial Indifference", serif;
    background-color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    display: inline-block;
  }

  .box2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 12px;
    padding: 40px 50px;
    font-family: "Glacial Indifference", serif;
    background-color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    display: inline-block;
  }

  .img {
    display: flex;
    align-items: flex-start;
  }
`