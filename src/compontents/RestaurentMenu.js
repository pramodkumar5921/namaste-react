import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    // console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
          Menu_URL  + resId +"&catalog_qa=undefined&query=Burger&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json?.data);
    };

    if(resInfo == null){
        return <Shimmer/>;
    }
    // Check if resInfo and necessary nested properties exist before destructuring
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
