import React from "react";

class PracticeClock extends React.Component {
  state = { time: new Date(), locale: "bn-bd" };

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

  changeToUs = () => {
    this.setState({
      locale: "en-us",
    });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ display: "inline", marginRight: "20px" }}>
          {this.state.time.toLocaleTimeString(this.state.locale)}
        </h2>
        <button onClick={this.changeToUs}>English us</button>
      </div>
    );
  }
}

export default PracticeClock;
