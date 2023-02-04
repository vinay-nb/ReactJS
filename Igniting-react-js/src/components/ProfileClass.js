import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy location",
      },
    };
    console.log("child- constructor", this.props.name);
  }

  async componentDidMount() {
    console.log("child-component did mount", this.props.name);
    const data = await fetch("https://api.github.com/users/vinay-nb");
    const json = await data.json();
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
      },
    });
    this.timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    console.log(json);
  }

  componentDidUpdate() {
    console.log("update component");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unomunt");
  }

  render() {
    console.log("child-render", this.props.name);
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <h5 key="abc">name:{this.state.userInfo.name}</h5>
        <h6>location:{this.state.userInfo.location}</h6>
        <img src={this.state.userInfo.avatarUrl} />
      </div>
    );
  }
}

export default Profile;

/**
 * Parent constructor
 * parent render
 * Child contructor
 * Child render
 * child did mount
 * parent did mount
 *
 * API call
 * set state
 * update cycle
 * child render
 *
 */
