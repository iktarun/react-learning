import React, { useContext } from "react";
import { userContext } from "../Contexts";

//Using useContext API
function Content() {
  let context = useContext(userContext);
  return (
    <div>
      <label>Name is: {context.name}</label>
      <br />
      <label>City is: {context.city}</label>
      <br />
    </div>
  );
}

//Using direct conumer API of React
function ContentMethod2() {
  return (
    <userContext.Consumer>
      {(context) => (
        <div>
          <label>Name is: {context.name}</label>
          <br />
          <label>City is: {context.city}</label>
          <br />
        </div>
      )}
    </userContext.Consumer>
  );
}

export default Content;
