import RestaurantCard from "./RestaurentCard";
import { Api_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [Listrestaurent, setListrestaurent] = useState([]);
  const [filterRestaurent,setfilterRestaurent]=useState([]);
  const [searchtext , setsearchtext] = useState("");

  // console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Api_URL);
    const json = await data.json();
    setListrestaurent(json?.data?.cards);
  };

  return Listrestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="index" className="search-box" value={searchtext}  onChange={(e)=>{
              setsearchtext(e.target.value);
          }}/>
          <button onClick={()=>{
            const filterList=[];
            for(let i=3;i<Listrestaurent.length;i++){
               const Restaurantitem = Listrestaurent[i];
               if(Restaurantitem?.card?.card?.info?.name.toLowerCase().includes(searchtext.toLowerCase())){
                filterList.push(Restaurantitem);
               }
            }
            setfilterRestaurent(filterList);
            // console.log("Listrestaurent.....",Listrestaurent)
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = [];
            // Filter restaurants with avgRating > 4
            for (let i = 1; i < Listrestaurent.length; i++) {
              const restaurantItem = Listrestaurent[i];
              if (
                restaurantItem?.card?.card?.info?.avgRating &&
                restaurantItem?.card?.card?.info?.avgRating > 4
              ) {
                filterList.push(restaurantItem);
              }
            }
            setfilterRestaurent(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">{
        (filterRestaurent.length)?(
          (
        filterRestaurent.map((restaurantItem) => (
          <Link to = {"/restaurents/"+ restaurantItem?.card?.card?.info?.id}>
          <RestaurantCard
            resData={restaurantItem}
          />
          </Link>
          
        ))
      )
        ):(
          (
          Listrestaurent.slice(3).map((restaurantItem) => (
            <Link to = {"/restaurents/"+ restaurantItem?.card?.card?.info?.id}>
          <RestaurantCard
            key={restaurantItem?.card?.card?.info?.id}
            resData={restaurantItem}
          />
             </Link>
        ))
      )
        )
    }    
      </div>
    </div>
  );
};

export default Body;
