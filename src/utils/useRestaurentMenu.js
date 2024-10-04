import { useEffect , useState } from "react";
import { Menu_URL } from "./constants";
const useRestaurentMenu = (resId)=>{
    useEffect(()=>{
        fetchData();
    },[])
     const [resInfo, setResInfo] = useState(null);
    
     const fetchData = async () => {
        const data = await fetch(
          Menu_URL  + resId +"&catalog_qa=undefined&query=Burger&submitAction=ENTER"
        );
        const json = await data.json();
        setResInfo(json?.data);
    };


    return resInfo;
}
export default useRestaurentMenu;