import React from 'react'
import {Container, Row} from "reactstrap";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
        <>
            <header>
                <Container>
                    <Row>
                        <ul>
                            <li>
                                <NavLink to="/new-product">New product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/search">Search</NavLink>
                            </li>
                        </ul>
                    </Row>
                </Container>
            </header>
        </>
  )
}

export default Header
