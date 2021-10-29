import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import React from "react";

class Home extends React.Component {
  state = {
    uname: "Tarun",
    count: 1,
    numbers: [1, 2, 3, 4, 5],
  };
  btnClick = () => {
    let { count, uname, numbers } = this.state;
    // this.setState({ uname: uname === "Sapna" ? "Tarun" : "Sapna" });
    // this.setState({ count: count + 2 });
    // this.setState({ count: count + 2 });
    numbers.splice(2, 1, 9, 8, 7);
    // this.setState({ count: count++ });
    // this.setState((state) => {
    //   console.log("Insider state:", state.count);
    //   return { count: state.count + 1 };
    // });
    this.setState({ numbers });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate");
  //   return true;
  // }
  render() {
    console.log("state", this.state);
    return (
      <div className="App">
        <p>
          Parent component {this.state.uname}&nbsp;count:{this.state.count}
        </p>
        <Header name="Header" />
        <div>
          {this.state.numbers.map((number, index) => {
            return <p key={index}>{number}</p>;
          })}
          <button onClick={this.btnClick}>Click Me</button>
        </div>
        <Footer name="Footer" />
      </div>
    );
  }
}

export default Home;
