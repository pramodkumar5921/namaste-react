import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurentMenu(resId);

    if(resInfo == null){
        return <Shimmer/>;
    }
   
    const { name , cuisines , costForTwoMessage , locality, areaName } = resInfo?.cards?.[2]?.card?.card?.info || {};


  return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
            {cuisines.join(" , ")} - {costForTwoMessage};
            </p>
            <h2>{areaName}</h2>
            <h2>{locality}</h2>
        </div>
    );
};

export default RestaurentMenu;
