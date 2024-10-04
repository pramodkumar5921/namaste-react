import { useState , useEffect } from "react";
import {LoGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from './Grocery';
const Header = ()=>{
   const [btnLogin,setbtnLogin] = useState("Login");
   useEffect(()=>{
   },[btnLogin]);
   const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-conatiner">
        <img className="w-32" src={LoGO_URL}></img>
      </div>
      <div className="flex items-center">
         <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
          <Link to="/">Home</Link> 
          </li>
          <li className="px-4">
          <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
         <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
         <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" onClick={()=>{
            btnLogin == "Login" ? setbtnLogin("Logout") : setbtnLogin("Login");
          }}>{btnLogin}</button>
         </ul>
      </div>
      </div>
    );
  };

  export default Header;