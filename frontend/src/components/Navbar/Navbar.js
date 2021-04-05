import React, {useState} from 'react'
import {Bars, Nav, NavLink, NavMenu} from "./NavBarElements";
import { Fade as Hamburger } from 'hamburger-react'


export default function Navbar() {

    const [isOpen, setOpen] = useState(false)


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