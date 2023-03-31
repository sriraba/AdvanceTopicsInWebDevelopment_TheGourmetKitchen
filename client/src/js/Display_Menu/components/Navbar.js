import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { AppBar, Badge, Box, Grid, Toolbar } from "@mui/material";
import React from "react";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <Link href="/home">
        <img src="images/logo.png" className="App-logo" alt="logo" />
      </Link>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
        <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
        <Toolbar className="header">
          
          <Grid container alignItems="center">
            <Grid item xs></Grid>
            <Grid item>
              <Dropdown>
                
                <Dropdown.Toggle
                  style={{ backgroundColor: "#4e888f", borderColor: "#4e888f" }}
                >
                  <AccountCircleIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/appointmentform">
                    Services
                  </Dropdown.Item>
                  <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
