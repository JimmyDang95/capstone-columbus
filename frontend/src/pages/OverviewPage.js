import {Link} from "react-router-dom";
import React from "react";
import styled from 'styled-components/macro'
import BackgroundLayout from "../components/BackgroundLayout";

export default function OverviewPage() {
    return (
        <BackgroundLayout>
        <Nav>
            <Link to="/routesoverview">
                Show all Routes
            </Link>
            <Link to="/newroutepage">
                Add new Route
            </Link>
        </Nav>
        </BackgroundLayout>
    )
}

const Nav = styled.div`
  margin: 0;
`