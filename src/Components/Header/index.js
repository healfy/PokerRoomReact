import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "../../Store/auth/mappers";
import {LinkContainer} from "react-router-bootstrap";

const Header = ({isAuth, client, updateAuthStatus}) => {
    useEffect(() => { client.isAuth().then(updateAuthStatus) }, [])
    console.log(isAuth)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/"><Navbar.Brand>PokerHome</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-lg-0 ">
                        {isAuth ?
                            <>
                                <LinkContainer to="/tables"><Nav.Link>Tables</Nav.Link></LinkContainer>
                                <LinkContainer to="/"><Nav.Link onClick={async()=> {await client.logOut()}}>Logout</Nav.Link></LinkContainer>
                            </> :
                            <>
                                <LinkContainer to="/sign"><Nav.Link>Sign</Nav.Link></LinkContainer>
                                <LinkContainer to="/register"><Nav.Link>Signup</Nav.Link></LinkContainer>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
