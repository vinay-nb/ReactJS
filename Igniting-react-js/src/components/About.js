import ProfileClass from "./ProfileClass";
import ProfileF from "./Profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";
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

        <UserContext.Consumer>
          {({ user }) => 
            <span className="text-red-600 text-xl p-2 m-2">{user.name}</span>
          }
        </UserContext.Consumer>
      </>
    );
  }
}

export default About;
