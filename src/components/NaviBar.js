import React from "react";
import { Navbar, Nav, NavLink} from 'react-bootstrap'

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink>Здоров'я</NavLink>
                    <NavLink>Профіль</NavLink>
                </Nav>
            </Navbar>
        </>
    )

}