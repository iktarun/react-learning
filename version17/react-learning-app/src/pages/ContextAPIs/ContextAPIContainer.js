import React from "react";
import Content from "./Components/Content";
import { userContext } from "./Contexts";

class ContextAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tarun",
      city: "Chandigarh",
    };
  }

  render() {
    return (
      <div className="container">
        <userContext.Provider value={this.state}>
          <Content />
        </userContext.Provider>
      </div>
    );
  }
}

export default ContextAPI;
