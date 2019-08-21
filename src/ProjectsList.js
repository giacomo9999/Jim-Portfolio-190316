import React, { Component } from "react";
import Project from "./Project";

class ProjectsList extends Component {
  render() {
    const projectsDisplay = this.props.projectList.map((entry, index) => {
      console.log("Here.");
      return <Project key={index} projData={entry} />;
    });
    return (
      <div className="container-inner dark">
        <h1 className="light">Apps I've Built</h1>
        {projectsDisplay}
        <div className="spacer5" />
        <button className="jg_button" onClick={this.props.closePanel}>
          Close
        </button>
      </div>
    );
  }
}

export default ProjectsList;
