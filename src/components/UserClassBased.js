import React from "react";

class UserClassBased extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name, "child Constructor");
    this.state = {
      //count:0, count2:0
      userInfo: {
        name: "Dummy Name",
        location: "dummy Location",
        company: "dummy company",
        avatar_url: "url",
      },
    };
  }

  async componentDidMount() {
    console.log(this.props.name, "child Component Did Mount");

    const data = await fetch("https://api.github.com/users/anchalarora");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  render() {
    console.log(this.props.name, "Child render");

    const { name, location, avatar_url, company } = this.state.userInfo || {};

    return (
      <div className="flex flex-col items-center space-y-4 p-4">
        {/* <h1>Count : {this.state.count}</h1>
        <h1>Count2 : {this.state.count2}</h1>
        <button onClick={()=>{
          this.setState({count: this.state.count+1, count2:this.state.count2+3})
        }}>Increase Count</button> */}
        {/* <h1>{this.props.name}</h1>
        <h1>{this.props.location}</h1> */}

        <div className="flex space-x-5">
          <h1>{name}</h1>
          <h1>{company}</h1>
        </div>

        <img
          className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-md"
          src={avatar_url}
        />
      </div>
    );
  }
}

export default UserClassBased;
