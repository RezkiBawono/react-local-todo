import React from "react";
import Button from "./button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text = {'Add me'}></Button>
    </header>
    );
  }
    
export default Header
