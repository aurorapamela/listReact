import React from "react";
import "./App.css";

const App = () => {
  const navlinkItems = [
    <li className="nav">
      <a className="nav-link" href="#">
        Link to google.com
      </a>
    </li>,
    <li className="nav">
      <a className="nav-link" href="#">
        Link to facebook.com
      </a>
    </li>,
    <li className="nav">
      <a className="nav-link" href="#">
        Link to amazon.com
      </a>
    </li>
  ];

  return <ul className="nav">{navlinkItems.map(item => item)}</ul>;
};

export default App;
