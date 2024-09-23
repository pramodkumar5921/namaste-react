import React from "react";
import ReactDOM from "react-dom/client";

const elem=(
  <span>
   React Element
  </span>
);
const Title = ()=> (
  <h1 className="head">Namaste React using jsx 🚀</h1>
);

const HeadingCompontent = ()=>(
  <div id="container">
   {Title()}
   <Title/>
   <Title></Title>
  <h1 className="headi"ng>Namaste React Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompontent/>);
