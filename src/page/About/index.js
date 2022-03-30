import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="About">
        <p>Page About</p>
        {this.props.children}
      </div>
    );
  }
}

export default About;
