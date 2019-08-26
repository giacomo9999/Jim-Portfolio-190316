import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class DisplayComp extends Component {
  render() {
    return (
      <CSSTransition
        in={this.props.showDisplayComp}
        timeout={500}
        classNames="fade"
        unmountOnExit
        appear
        // onEntered={this.switch}
        // onExit={this.switch}
      >
        <div className="container-inner">
          <h1>I Appear and Disappear</h1>
          <div className="spacer10" />
          <button className="display" onClick={this.props.toggle}>
            Toggle Element
          </button>
          <div className="spacer10" />
        </div>
      </CSSTransition>
    );
  }
}

export default DisplayComp;
