import { useEffect } from "react";

const Profile = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("interval");
    }, 1000);

    return () => {
      // to clear the interval after leaving the page
      clearInterval(timer);
      console.log("return useeffect");
    };
  }, []);

  return (
    <>
      <h3>Profile page</h3>
      <h5>Name: {props.name}</h5>
    </>
  );
};

export default Profile;
