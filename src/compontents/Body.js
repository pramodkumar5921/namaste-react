import RestaurantCard from "./RestaurentCard";
import resList from "../utils/MockData";
import { useState } from "react";
const Body = ()=>{
  /**
   * Use State Variable - Super power Varible
   */
  const arr = useState(resList);
  // const [Listrestaurent,setListrestaurent] = arr;
  const Listrestaurent = arr[0];
  const setListrestaurent = arr[1];
    return (
      <div className="body">
       <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
          const filterList = Listrestaurent.filter(
            (res) => res.restaurant.data.rating > 4
          );
          // console.log(Listrestaurent);
          console.log("filterList......",filterList)
          setListrestaurent(filterList);
        }}
        >Top Rated Restaurant</button>
       </div>
       <div className="res-container">
        {Listrestaurent.map((restaurantItem) => (
          <RestaurantCard key = {restaurantItem?.restaurant?.data?.id} resData = {restaurantItem}/>
    
        ))}
       </div>
      </div>
    );
  };

  export default Body;