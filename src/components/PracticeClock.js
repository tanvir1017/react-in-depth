import React from "react";

class PracticeClock extends React.Component {
  state = { time: new Date() };

  componentDidMount() {
    this.clearTimerInterval = setInterval(() => this.timerFunc(), 1980);
  }

  componentWillUnmount() {
    clearInterval(this.clearTimerInterval);
  }

  timerFunc() {
    this.setState({
      time: new Date(),
    });
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>{this.state.time.toLocaleTimeString(this.props.children)}</h2>
      </div>
    );
  }
}

export default PracticeClock;
