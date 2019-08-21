import React, { Component } from "react";

class Project extends Component {
  render() {
    const inheritColor = { color: "inherit" };
    return (
      <div className="container-inner">
        <div className="copy-block">
          <h2 className="bold">{this.props.projData.name}</h2>
          <div className="spacer5" />
          <p>{this.props.projData.description}</p>
          <p className="bold">{this.props.projData.stack}</p>
          <div className="spacer10" />
          <button>
            {" "}
            <a href={this.props.projData.url} style={inheritColor}>
              Try It!
            </a>
          </button>
          <button>
            {" "}
            <a href={this.props.projData.gitHub} style={inheritColor}>
              GitHub Repo
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Project;
