import React from "react";
import "../style/Home.css";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./CartSlice";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.Cart);

  const removeHandler = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <Navbar />
      <div>Shopping Cart</div>
      <div className="lists">
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="box">
              <h6>{item.name}</h6>
              <h6>{item.tagline}</h6>
              <img className="images" src={item.image_url} alt="" />
            </div>
            <div className="details">
                <DeleteIcon id="icons" onClick={() => removeHandler(item.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
