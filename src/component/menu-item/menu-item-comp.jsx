import React from "react";

import "./meny-item-style.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div style={{
    backgroundImage: `url(${imageUrl})`
  }}className="menu-item">
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default MenuItem;