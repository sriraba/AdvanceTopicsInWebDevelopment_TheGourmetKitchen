import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

// Components
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import FeedBack from "../../Feedback/FeedBack";
import Footer from "../../Footer";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    
  };

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="productscreen">
      
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <> 
            <div className="productscreen__left">
              <div className="left__image" >
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: 500 }} />
              </div>
              <div className="left__info">
                <p className="left__name">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
            </div>
            <div className="productscreen__right">
              <div className="right__info">
                <p>
                  Price:
                  <span>${product.price}</span>
                </p>
                <p>
                  Status:
                  <span>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Qty
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <FeedBack unique = {id} />
      <Footer style={{ zIndex: 1 }} />
    </div>
  );
};

export default ProductScreen;
