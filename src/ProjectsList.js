import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Project from "./Project";

class ProjectsList extends Component {
  render() {
    const projectsDisplay = this.props.projectList.map((entry, index) => {
      console.log("Here.");
      return <Project key={index} projData={entry} />;
    });
    return (
      <CSSTransition
        in={this.props.showProjectList}
        timeout={400}
        classNames="fade"
        unmountOnExit
        appear
        // onEntered={this.switch}
        // onExit={this.switch}
      >
        <div className="container-inner dark">
          <h1 className="light">Apps I've Built</h1>
          {projectsDisplay}
          <div className="spacer5" />
          <button className="jg_button" onClick={this.props.toggle}>
            Close
          </button>
        </div>
      </CSSTransition>
    );
  }
}

export default ProjectsList;
