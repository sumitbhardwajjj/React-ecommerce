import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../style/Navbar.css";
import {Link} from "react-router-dom"
import {  useSelector } from "react-redux";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {

  const cartLength = useSelector((state) => state.cart.Cart);

  return (
    <div className="navbar">
    <div className="wrapper">
      <Link className="logo"  to='/'><h4>E-<span>commerce</span></h4></Link>   
      <div className="account">
        <div  className="input">
        <input
          type="text"
          placeholder="search"
        />
        <SearchIcon />
        </div>
        <div>
          <PersonSharpIcon className="ICON" />
        </div>
        <Link to="/cart">
          <div className="cart">
            <ShoppingCartIcon className="icon" />
            <div className="notification">{cartLength.length}</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Navbar
