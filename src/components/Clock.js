import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "en-us" };
  }
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  // Whenever component is mounted this function/Method will work from there
  componentDidMount() {
    this.clearClock = setInterval(() => this.tick(), 1000);
  }

  // when component will unMount this function just stop the interval
  componentWillUnmount() {
    clearInterval(this.clearClock);
  }
  handleBnBd = () => {
    this.setState({
      locale: "bn-BD",
    });
  };
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    console.log("⚠️ Clock component rendered ");
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ display: "inline", marginRight: "20px" }}>
          {this.state.date.toLocaleTimeString(this.state.locale)}
        </h1>
        <Button change={this.handleBnBd} region="bn-BD">
          bn-BD
        </Button>
      </div>
    );
  }
}

export default Clock;
