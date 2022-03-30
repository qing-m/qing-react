import React from "react";

import Home from "./page/Home";
import About from "./page/About";
import Users from "./page/Users";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
        <About>Hello About</About>
        <Users></Users>
      </div>
    );
  }
}

export default App;
