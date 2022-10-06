import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  // Whenever component is mounted this function will work from there
  componentDidMount() {
    this.clearClock = setInterval(() => this.tick(), 1000);
  }

  // when component will unMount this function just stop the interval
  componentWillUnmount() {
    clearInterval(this.clearClock);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.date.toLocaleTimeString(this.props.region)}</h1>
      </div>
    );
  }
}

export default Clock;
