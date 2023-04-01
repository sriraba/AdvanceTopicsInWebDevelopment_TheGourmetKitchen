import "./CartScreen.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Components
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";

import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => { }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div id="grid">
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2 style={{ paddingBottom: 20 }}>Shopping Cart</h2>
            <div>
              {cartItems.length === 0 ? (
                <div>
                  Your Cart Is Empty <Link to="/home">Go Back</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))
              )}
            </div>
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
