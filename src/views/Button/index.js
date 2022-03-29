import React, {Component} from "react";

import style from "./Button.module.sass";

class Button extends Component {
  render() {
    return (
      <div>
        <button className={style.button}>Hello React</button>
      </div>
    );
  }
}

export default Button;
