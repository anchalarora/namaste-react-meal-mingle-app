import React from "react";

class UserClassBased extends React.Component {

  constructor(props){
    super(props);

    console.log(this.props.name,"child Constructor")
    this.state ={
      //count:0, count2:0
      userInfo : {
        name:"Dummy Name",
        location:"dummy Location",
        company:"dummy company",
        avatar_url:"url"
      }
     
    }
  }

  async componentDidMount(){

    console.log(this.props.name,"child Component Did Mount")

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json)
    this.setState({userInfo : json})

    
  }

  render() {

    console.log(this.props.name,"Child render")

    const {name, location, avatar_url, company} = this.state.userInfo || {};
   
    return (
      <div className="user-card">
        {/* <h1>Count : {this.state.count}</h1>
        <h1>Count2 : {this.state.count2}</h1>
        <button onClick={()=>{
          this.setState({count: this.state.count+1, count2:this.state.count2+3})
        }}>Increase Count</button> */}
        {/* <h1>{this.props.name}</h1>
        <h1>{this.props.location}</h1> */}

        <h1>{name}</h1>
        <h1>{location}</h1>
        <h1>{company}</h1>
        <img src={avatar_url}/>
      </div>
    );
  }
}

export default UserClassBased;
