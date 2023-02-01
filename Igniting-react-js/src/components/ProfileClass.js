import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Profile Class Based Component</h1>
        <h5 key="abc">name:{this.props.name}</h5>
        <h6>count:{this.state.count}</h6>
        <h6>count1:{this.state.count1}</h6>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            })
          }
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Profile;
