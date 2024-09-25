import RestaurantCard from "./RestaurentCard";
import resList from "../utils/MockData";
const Body = ()=>{
    return (
      <div className="body">
       <div className="search">search</div>
       <div className="res-container">
        {resList.map((restaurant) => (
          <>
          <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
          <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
          <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
          <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
          </>
        ))}
       </div>
      </div>
    );
  };

  export default Body;