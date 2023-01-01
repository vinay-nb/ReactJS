import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const Logo = <i className="fa fa-rss icon-blog"></i>;

const MainHeader = () => (
  <div className="header-container">
    {Logo}
    <input type="text" placeholder="search" className="input-search" />
    <i className="fa fa-regular fa-user icon-user"></i>
  </div>
);

const Header = () => {
  return (
    <div className="title">
      <MainHeader/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
