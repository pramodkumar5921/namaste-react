import UserClass from "./UserClass.js";
import React  from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent class");
    }

    render(){
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name = {"Pramod Kumar"} location = {"Bihar"} />
            </div>
        );
    }
};
export default About;