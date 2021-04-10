import React from 'react'
import {Bars, Nav, NavLink, NavMenu} from "./NavBarElements";


export default function Navbar() {

    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/newroutepage" activeStyle>
                        Add new Route
                    </NavLink>
                    <NavLink to="/routesoverview" activeStyle>
                        Show all Routes
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}