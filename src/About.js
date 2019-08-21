import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Resume from "./J_Gary_CV_190430.pdf";

class About extends Component {
  state = { emailPanelOpen: false };

  toggleEmailPanel = e => {
    this.setState({ emailPanelOpen: !this.state.emailPanelOpen });
  };

  render() {
    const inheritColor = { color: "inherit" };
    const isEmailOpen = this.state.emailPanelOpen;
    return (
      <div className="container-inner dark">
        <h1 className="light">About Me</h1>
        <div className="container-inner">
          <div className="copy-block">
            <p>I build and design web apps. </p>
            <div className="spacer5" />
            <p>
              For twenty-five years, I've also been one of America's best-loved
              editorial illustrators. (My portfolio for
              <i>&nbsp;that&nbsp;</i>is at
              <a href="http://www.GiacomoMarchesi.com" style={inheritColor}>
                &nbsp;GiacomoMarchesi.com
              </a>
              .)
            </p>
            <div className="spacer5" />
            <p>
              I can be reached by phone at 646.549.0648, or by e-mail at the
              link below.
            </p>
          </div>

          <div className="spacer5" />
          <div className="button-row">
            <button>
              {" "}
              <a
                href={Resume}
                rel="noopener noreferrer"
                target="_blank"
                style={inheritColor}
              >
                My Resumé
              </a>
            </button>
            <button onClick={this.toggleEmailPanel}>Email me!</button>
            <button>
              {" "}
              <a
                href="https://www.linkedin.com/in/james-gary/"
                style={inheritColor}
              >
                LinkedIn
              </a>
            </button>
          </div>
          {isEmailOpen ? (
            <ContactForm closeEmailPanel={this.toggleEmailPanel} />
          ) : (
            <div className="spacer10" />
          )}
          <div className="spacer5" />
        </div>
        <div className="spacer5" />
        <button className="jg_button" onClick={this.props.closePanel}>
          Close
        </button>
      </div>
    );
  }
}

export default About;
