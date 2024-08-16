import React from "react";
import User from "./User";
import UserClassBased from "./UserClassBased";

class About extends React.Component {

  constructor(props){

    super(props);
    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent componentDidMount called");
    this.timer = setInterval(()=>{
      console.log("Interval of 1000 sec set")
    }, 1000)
  }

  componentWillUnmount(){

      clearInterval(this.timer);
      console.log("Parent componentWillUnMount called");
  }
  render() {

    console.log("Parent render")
    return (
      <div className="about-container">
        <h1>About Us Page</h1>
         <User name="Second Child" location="Uttarakhand" />
        {/* <UserClassBased name="First Child" location="Uttarakhand" /> */}
        {/* <UserClassBased name="Second Child" location="Uttarakhand" /> */}
      </div>
    );
  }
}

export default About;
