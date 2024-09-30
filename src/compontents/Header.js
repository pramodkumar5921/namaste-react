import { useState } from "react";
import {LoGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = ()=>{
   const [btnLogin,setbtnLogin] = useState("Login");
   
    return (
      <div className="header">
      <div className="logo-conatiner">
        <img className="logo" src={LoGO_URL}></img>
      </div>
      <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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