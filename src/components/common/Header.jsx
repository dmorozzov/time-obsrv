import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

export default function () {
    return (<Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">TimeObserver</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to='/login'>
                <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>);
}
