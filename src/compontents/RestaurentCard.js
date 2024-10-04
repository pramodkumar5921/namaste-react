import { Image_URL } from "../utils/constants";
const RestaurantCard = (props)=>{

    const {resData} = props;
    // if(resData.card.card.info.name){
      const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData.card.card.info;
    // }
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg h-[300px] bg-gray-200 hover:bg-gray-300">
        <img 
        className="rounded-lg w-[200px] h-[150px] shadow-lg justify-center"
        alt="res-logo" 
        src={Image_URL+cloudinaryImageId}></img>
        <h3 className="font-bold items-center py-[2px,0px,0px,0px]">{name}</h3>
        <h4 className="font-semibold ">{cuisines.join(" , ")}</h4>
        <h4 className="font-mono">{costForTwo}</h4>
        <h4>{avgRating}⭐</h4>
      </div>
    );
  };
  export default RestaurantCard;