import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar fixedTop={true} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Kevin Rosales</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <Link to="#aboutMe">
                <NavItem eventKey={1}>About Me </NavItem>
              </Link>
              <Link to="#projects">
                <NavItem eventKey={2}>Projects</NavItem>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
