import React from "react";
import User from "./User";
import UserClassBased from "./UserClassBased";
import UserContext from "./utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount called");
    this.timer = setInterval(() => {
      console.log("Interval of 1000 sec set");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent componentWillUnMount called");
  }
  render() {
    console.log("Parent render");
    return (
      <div className="flex justify-center">
        {/* <h1>About Us Page</h1> */}
        {/* <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div> */}
        {/* <User name="Functional Component" location="React" /> */}
        <UserClassBased name="Akshay" location="Uttarakhand" />
      </div>
    );
  }
}

export default About;
