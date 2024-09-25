const RestaurantCard = (props)=>{
    const {resData} = props;
    const {image,name,cuisines,costForTwo,deliveryTime} = resData?.restaurant.data;
    return (
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img 
        className="res-logo"
        alt="res-logo" 
        src={image}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} mintues</h4>
      </div>
    );
  };
  export default RestaurantCard;