import { AppBar, Badge, Box, Grid, Link, Toolbar } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import '../css/header.css'

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
        <Toolbar className="header">
          <Link href="/home">
            <img src="images/logo.png" className="App-logo" alt="logo" />
          </Link>
          <Grid container alignItems="center">
            <Grid item xs></Grid>
            <Grid item>
              <Dropdown>
                <Link to="/cart" className="cart__link">
                  <i className="fas fa-shopping-cart"></i>
                  <span>
                    Cart{" "}
                    <span className="cartlogo__badge">{getCartCount()}</span>
                  </span>
                </Link>
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
  );
};

export default Header;
