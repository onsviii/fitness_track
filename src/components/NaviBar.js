import React from "react";
import { Navbar, Nav} from "react-bootstrap"
import { NavLink } from "react-router"


export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink to="/home">Здоров'я</NavLink>
                    <NavLink to="/profile">Профіль</NavLink>
                </Nav>
            </Navbar>
        </>
    )
}