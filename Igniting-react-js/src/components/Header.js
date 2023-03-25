import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const authenticateUser = () => {
  //Check authetication
  return true;
};

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [loggedin, setLoggedIn] = useState(false);

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gray-300 shadow-md">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <p className="text-red-600">{user.name}</p>
          </li>
          <li className="px-2">
            {loggedin ? (
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
