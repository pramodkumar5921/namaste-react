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
const resList = [{
  // Missing key, I am adding `restaurant` as a key for this inner object
  restaurant: {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fd8k5ksu1vhtrti4ndlc",
      cuisines: ["Pizzas","Burger"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat"
      },
      cityState: "21",
      address: "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  }
}];

const Body = ()=>{
  return (
    <div className="body">
     <div className="search">search</div>
     <div className="res-container">
      {resList.map((restaurant) => (
        <RestaurantCard key = {restaurant.restaurant.data.id} resData = {restaurant}/>
      ))}
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
