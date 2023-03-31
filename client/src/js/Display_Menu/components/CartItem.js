import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
    <div className="cartitem__image">
      <img src={item.imageUrl} alt={item.name} style={{maxWidth: '100%', height: 'auto', borderRadius: 5}} />
    </div>
    <Link to={`/menuItems/${item.product}`} className="cartItem__name">
      <p style={{fontWeight: 'bold'}}>{item.name}</p>
    </Link>
    <p className="cartitem__price" style={{fontWeight: 'bold'}}>${item.price}</p>
    <select
      value={item.qty}
      onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      className="cartItem__select"
      style={{backgroundColor: '#f2f2f2', color: '#000', fontWeight: 'bold', padding: 5}}
    >
      {[...Array(item.countInStock).keys()].map((x) => (
        <option key={x + 1} value={x + 1}>
          {x + 1}
        </option>
      ))}
    </select>
    <button
      className="cartItem__deleteBtn"
      onClick={() => removeHandler(item.product)}
      style={{backgroundColor: '#f2f2f2', color: '#000', fontWeight: 'bold', padding: 5}}
    >
      <i className="fas fa-trash">Remove</i>
    </button>
  </div>
  );
};

export default CartItem;
