import ProfileClass from "./ProfileClass";
import ProfileF from "./Profile";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent- constructor");
  }

  async componentDidMount() {
    console.log("parent-mount");
  }

  render() {
    console.log("parent- render");
    return (
      <>
        <h3>About class based component</h3>
        <ProfileF name={"vinay"} />
        <ProfileClass name={"first child"} />
      </>
    );
  }
}


export default About;
