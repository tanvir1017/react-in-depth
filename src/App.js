import React from "react";
import Clock from "./components/Clock";
import PracticeClock from "./components/PracticeClock";
function App() {
  return (
    <div>
      <Clock region="bn-bd" />
      <PracticeClock>bn-bd</PracticeClock>
    </div>
  );
}

export default App;
