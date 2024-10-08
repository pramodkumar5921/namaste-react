import { Image_URL } from "../utils/constants";
const RestaurantCard = (props)=>{

    const {resData} = props;
    // if(resData.card.card.info.name){
      const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} = resData.card.card.info;
    // }
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img 
        className="res-logo"
        alt="res-logo" 
        src={Image_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
    );
  };
  export default RestaurantCard;