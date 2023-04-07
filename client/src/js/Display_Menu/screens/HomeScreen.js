import "./HomeScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import SideDrawer from "../components/SideDrawer";
import Backdrop from "../components/Backdrop";
import Footer from "../../Footer";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="homescreen">
        <h2 className="homescreen__title">Menus and Services</h2>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
          )}
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '0px', width: '100%' }} > <Footer />  </div>
    </div>
  );
};

export default HomeScreen;
