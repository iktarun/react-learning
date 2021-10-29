import React from "react";

function Header(props) {
  console.log("Header");
  return <p>{props.name}</p>;
}

export default React.memo(Header);
