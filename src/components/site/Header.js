import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return(
      <div>
        <Navbar className="header" fixed="top">
          <NavbarBrand href="/" className="navText">Metal Gear Database</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={() => this.props.clickLogout()}>Logout</Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
};

export default Header;