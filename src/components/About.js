// import React from "react";
// import User from "./User";
// import UserClassBased from "./UserClassBased";
// import UserContext from "./utils/UserContext";

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }

//   componentDidMount() {
//     console.log("Parent componentDidMount called");
//     this.timer = setInterval(() => {
//       console.log("Interval of 1000 sec set");
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//     console.log("Parent componentWillUnMount called");
//   }
//   render() {
//     console.log("Parent render");
//     return (
//       <div className="flex justify-center">
//         {/* <h1>About Us Page</h1> */}
//         {/* <div>
//           LoggedIn User :
//           <UserContext.Consumer>
//             {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
//           </UserContext.Consumer>
//         </div> */}
//         {/* <User name="Functional Component" location="React" /> */}
//         <UserClassBased name="Akshay" location="Uttarakhand" />
//       </div>
//     );
//   }
// }

// export default About;
// About.js
import "./About.css";
import { LANG } from "./utils/langConfig";

const About = ({ lang }) => {
  const data = LANG["en"].about;
  const {
    title,
    desc,
    whatWeDo,
    mission,
    descriptionTitle,
    whatWeDoTitle,
    missionTitle,
  } = data;

  return (
    <div className="about-container">
      <h2>{title}</h2>

      <div className="section">
        <h3>{descriptionTitle}</h3>
        <p>{desc}</p>
      </div>

      <div className="section">
        <h3>{whatWeDoTitle}</h3>
        <p>{whatWeDo}</p>
      </div>

      <div className="section">
        <h3>{missionTitle}</h3>
        <p>{mission}</p>
      </div>
    </div>
  );
};

export default About;
