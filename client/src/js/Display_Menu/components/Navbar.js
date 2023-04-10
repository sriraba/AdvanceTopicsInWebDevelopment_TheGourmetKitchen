import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../Images/logo.png";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <Link to="/home">
        <img src={Logo} alt="logo" style={{maxWidth: 200}} />
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
          <Grid container alignItems="center">
            <Grid item xs></Grid>
            <Grid item>
              <Dropdown >
                <Dropdown.Toggle className="cart__link">
                  <AccountCircleIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/appointmentform">
                    Appointment
                  </Dropdown.Item>
                  <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          </Grid>
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
