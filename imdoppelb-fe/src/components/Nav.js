import React from "react";

const Nav = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "baseline",
          alignItems: "baseline",
          borderBottom: "4px solid",
          paddingBottom: "5px"
        }}
      >
        <div style={{backgroundColor: "#f5c517", borderRadius: "10px", width: "200px", marginTop: "5px", marginLeft: "5px"}}>
          <h1 style={{ fontFamily: "impact", marginRight: "auto", paddingLeft: "10px", paddingTop: "8px"}}>IMDoppelB</h1>
        </div>
      </div>
    </>
  );
};

export default Nav;
