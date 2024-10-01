import { useState , useEffect } from "react";
import {LoGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
const Header = ()=>{
   const [btnLogin,setbtnLogin] = useState("Login");
   useEffect(()=>{
   },[btnLogin]);

    return (
      <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LoGO_URL}></img>
      </div>
      <div className="nav-items">
         <ul>
          <li>
          <Link to="/">Home</Link> 
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
         <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnLogin == "Login" ? setbtnLogin("Logout") : setbtnLogin("Login");
          }}>{btnLogin}</button>
         </ul>
      </div>
      </div>
    );
  };

  export default Header;