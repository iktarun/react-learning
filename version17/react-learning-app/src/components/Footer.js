import React from "react";

class Footer extends React.Component {
  state = {
    name: "Tarun",
  };
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Footer");

    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Footer;
