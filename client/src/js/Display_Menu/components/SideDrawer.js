import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown } from "react-bootstrap";
import { AppBar, Badge, Box, Grid, Toolbar } from "@mui/material";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
        <Link to="/profile">
              <span>Profile</span>
          </Link>
        </li>
        <li>
        <Link to="/appointmentform">
              <span>Services</span>
          </Link>
        </li>
        <li>
        <Link to="/">
              <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
