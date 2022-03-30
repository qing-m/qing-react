import React from "react";

import style from "./Button.module.sass";

class Button extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <button className={style.button}>Hello React</button>
      </div>
    );
  }
}

export default Button;
