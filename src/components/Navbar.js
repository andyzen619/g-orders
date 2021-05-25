import React from "react";

const Navbar = (props) => {
  const { title } = props;
  return (
    <div className="flex">
      <div>back</div>
      <div>{title}</div>
    </div>
  );
};

export default Navbar;
