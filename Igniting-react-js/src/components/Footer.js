import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4>Footer</h4>
      <span className="text-red-400">made with love by{user.name}</span>
    </div>
  );
};

export default Footer;
