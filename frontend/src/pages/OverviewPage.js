import {Link} from "react-router-dom";
import React from "react";
import styled from 'styled-components/macro'

export default function OverviewPage() {
    return (
        <Nav>
            <Link to="/routesoverview">
                Show all Routes
            </Link>
            <Link to="/newroutepage">
                Add new Route
            </Link>
        </Nav>
    )
}

const Nav = styled.div`
  margin: 0;
`