import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <img
                  src="assets/images/logo1.png"
                  className="img-fluid image"
                  width="80%"
                />
              </div>
              <div className="col">
                <h1>
                  Hunter <span className="logo">Tennis</span> Coach
                </h1>
                <h4>Play hard, win easy</h4>
              </div>
            </div>
          </div>
        </Jumbotron>
        <hr />
        <Navbar dark sticky="top" expand="md">
          <div className="container">
           <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar navbar-dark>
                  <DropdownToggle nav caret>
    <i className="fa fa-book fa-lg" />{" "}Lessons
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink className="nav-link" to="/kidslessons">
                        Kids Lessons
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>Adults Lessons</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Hitting Lessons</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
