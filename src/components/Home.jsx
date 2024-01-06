import React, { useEffect, useState } from "react";
import '../style/Home.css'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { add } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";

const Home = ({name}) => {
  const cartLength = useSelector((state) => state.cart.Cart);

  const dispatch = useDispatch();

  const [lists, setlists] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((data) => data.json())
      .then((result) => setlists(result));
  }, []);

  const addHandler = (list) => {
    dispatch(add(list));
  };

  return (
    <div>
      <h1>{name}</h1>
      <div className="navbar">
        <div className="wrapper">
          <Link className="logo"  to='/'><h4>E-<span>commerce</span></h4></Link>   
          <div className="account">
            <div  className="input">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setsearch(e.target.value)}
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
      <div className="lists">
        {lists
          .filter((list) => {
            return search.toLowerCase() === ""
              ? list
              : list.name.toLowerCase().includes(search);
          })
          .map((list) => (
            <div key={list.id}>
              <div className="box">
                <h5>{list.name}</h5>
                <h6>{list.tagline}</h6>
                <img className="images" src={list.image_url} alt="" />
                <AddBoxIcon className="add" onClick={() => addHandler(list)} />
              </div>
              <div className="details">
                <Link to={`/details/${list.id}`}>
                  <button className="button">
                    <div className="click">
                      details
                      <ArrowForwardIosIcon id="icon" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
