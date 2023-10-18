import React from "react";
import pic from "../../assets/profile.jpeg";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <h1 className="title">Martha Sharpe</h1>
      <img
        src={pic}
        className="profile-pic"
        alt="Martha Sharpe"
        loading="lazy"
      />
    </div>
  );
};

export default Title;
