import React from "react";
import { Button } from '@material-ui/core';
import "../css/Nav.css";


const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <h1 className="nav-header">IMDoppelB</h1>
        <div className="nav-content">
          <Button className="sign-up">Create User</Button>
        </div>
      </div>
    </>
  );
};

export default Nav;
