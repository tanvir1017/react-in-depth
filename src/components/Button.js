import React from "react";
class Button extends React.Component {
  /* 📝 shouldComponentUpdate method will received two parameter, 
        1️⃣ nextProps 
        2️⃣ nextStates */

  shouldComponentUpdate(nextProps) {
    const { change: currentChange, region: currentRegion } = this.props;
    const { change: nextChange, region: nextRegion } = nextProps;

    //✅ check is component reference or something else are changed or not

    if (currentRegion === nextRegion && currentChange === nextChange) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    console.log("Button component rendered ⚠️");
    const { change, region } = this.props;
    return (
      <button onClick={() => change(region)}>{this.props.children}</button>
    );
  }
}

export default Button;
