import RestaurantCard from "./RestaurentCard";
import { Api_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [Listrestaurent, setListrestaurent] = useState([]);
  const [filterRestaurent,setfilterRestaurent]=useState([]);
  const [searchtext , setsearchtext] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Api_URL);
    const json = await data.json();
    setListrestaurent(json?.data?.cards);
  };



  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
 

  return Listrestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="index" className="border border-solid border-black" value={searchtext}  onChange={(e)=>{
              setsearchtext(e.target.value);
          }}/>
          <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
           onClick={()=>{
            const filterList=[];
            for(let i=3;i<Listrestaurent.length;i++){
               const Restaurantitem = Listrestaurent[i];
               if(Restaurantitem?.card?.card?.info?.name.toLowerCase().includes(searchtext.toLowerCase())){
                filterList.push(Restaurantitem);
               }
            }
            setfilterRestaurent(filterList);
          }}
          >Search</button>
        </div>

        <div className="m-4 p-4 flex items-center"> 
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
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
      </div>
      <div className="flex flex-wrap justify-evenly">{
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
