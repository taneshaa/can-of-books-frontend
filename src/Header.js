import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/Bestbooks" className="nav-link">Profile</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user ? 
        <>
          <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
          <NavItem><Link to="/Logoutbutton" className="nav-link">Profile</Link></NavItem>
        </>
        :
        <></>
      }
      </Navbar>
    )
  }
}

export default Header;
