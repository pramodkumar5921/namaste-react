import RestaurantCard from "./RestaurentCard";
import { Api_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Body = () => {
  const [Listrestaurent, setListrestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     Api_URL
    );
    const json = await data.json();
    setListrestaurent(json?.data?.cards);
  };

  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6624624&lng=77.0722759&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  //   const json = await data.json();

  //   console.log(json.data.cards[3].card.card.info.name);
  //   console.log(json.data.cards[4].card.card.info.name);
  //   console.log(json.data.cards[5].card.card.info.name);
  //   console.log(json.data.cards[6].card.card.info.name);
  //   console.log(json.data.cards[7].card.card.info.name);
  //   console.log(json.data.cards[8].card.card.info.name);
  //   console.log(json.data.cards[9].card.card.info.name);
  // };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = [];
            // const filterList = Listrestaurent.filter(
            //   (res) => res.restaurant.data.rating > 4
            // );
            // setListrestaurent(filterList);
            for(let i=3;i<Listrestaurent.length;i++){
              const restaurantItem = Listrestaurent[i];
             if(restaurantItem?.card?.card?.info?.avgRating > 4 ){
                filterList.push(restaurantItem);
             }
            }
            setListrestaurent(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* Convert the map function to for loop */}
        {(() => {
          const restaurantCards = [];
          for (let i = 3; i < Listrestaurent.length; i++) {
            const restaurantItem = Listrestaurent[i];
            restaurantCards.push(
              <RestaurantCard
                key={restaurantItem?.card?.card?.info?.id}
                resData={restaurantItem}
              />
            );
          }
          return restaurantCards;
        })()}
      </div>
    </div>
  );
};

export default Body;
