import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./compontents/About";
import Contact from "./compontents/Contact";
import Error from "./compontents/Error";
import RestaurentMenu from "./compontents/RestaurentMenu";


const AppLayout = ()=>{
  return (
  <div className="app">
    <Header/>
    <Outlet/>
   </div>
   );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children :[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurents/:resId",
        element : <RestaurentMenu/>
      },
    ],
    errorElement:<Error/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
