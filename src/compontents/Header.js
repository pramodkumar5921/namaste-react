import {LoGO_URL} from "../utils/constants";
const Header = ()=>{
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
         </ul>
      </div>
      </div>
    );
  };

  export default Header;