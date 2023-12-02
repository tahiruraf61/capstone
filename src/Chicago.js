
import React from "react";
import Banner from "./Banner";
import CallToAction from "./CallToAction";

const Chicago = () => {
  return (
    <div style={{ backgroundColor: "rgba(73, 94, 87, 1)", height: "70vh", width: "100%", display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: '80px', flex: 1 }}>
        <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
        <h2 style={{color:'white', marginTop:'-25px'}}>Chicago</h2>
        <h3 style={{color:'white'}}>We are a family-owned Mediterranean restaurant,<br/> focused on traditional recipes served with a modern<br/> twist.</h3>
        <CallToAction />
      </div>
      <div style={{ flex: 1 }}>
        <Banner />
      </div>
    </div>
  );
};

export default Chicago;
