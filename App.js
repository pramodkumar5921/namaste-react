import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav items
 * Body
 * - Search Bar
 * - Restaurant Container
 *   - Restaurant Card
 *     - Img
 *     - Name of Res , Star rating , cuisine , deverily time
 * Footer
 * - copy Rights
 * - Links
 * - Address
 * - contact
 */
const Header = ()=>{
  return (
    <div className="header">
    <div className="logo-conatiner">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
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
const RestaurantCard = (props)=>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
      alt="res-logo" 
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi"></img>
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
    </div>
  );
};
const Body = ()=>{
  return (
    <div className="body">
     <div className="search">search</div>
     <div className="res-container">
      <RestaurantCard
        resName="Meghana Foods"
        cuisine="Biryani , North India , Asian"
      />
      <RestaurantCard
        resName="KFC"
        cuisine="Burgur Fast Food"
      />
     </div>
    </div>
  );
};
const AppLayout = ()=>{
  return (
  <div className="app">
    <Header/>
    <Body/>
   </div>
   );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
