import React from "react";
import Button from "./button";

const Header = ({ title, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} text={"Add me"} />
    </header>
  );
};

export default Header;
