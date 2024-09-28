import RestaurantCard from "./RestaurentCard";
import resList from "../utils/MockData";
import { useState } from "react";
const Body = ()=>{
  /**
   * Use State Variable - Super power Varible
   */
  const [Listrestaurent,setListrestaurent] = useState([{
    restaurant: {
      type: "restaurant",
      data: {
        id: "74453",
        rating : 4.2,
        name: "Domino's Pizza",
        image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fd8k5ksu1vhtrti4ndlc",
        cuisines: ["Pizzas","Burger"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
      },
      subtype: "basic"
    }
  },
  {
    restaurant: {
      type: "restaurant",
      data: {
        id: "74455",
        rating : 3.8,
        name: "Domino's Pizza",
        image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fd8k5ksu1vhtrti4ndlc",
        cuisines: ["Pizzas","Burger"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
      },
      subtype: "basic"
    }
  }]);
    return (
      <div className="body">
       <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          const filterList = Listrestaurent.filter(
            (res) => res.restaurant.data.rating > 4
          );
          // console.log(Listrestaurent);
          setListrestaurent(filterList);
        }}
        >Top Rated Restaurant</button>
       </div>
       <div className="res-container">
        {Listrestaurent.map((restaurant) => (
          <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
    
        ))}
       </div>
      </div>
    );
  };

  export default Body;