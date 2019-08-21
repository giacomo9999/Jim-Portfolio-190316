import React, { Component } from "react";
import logo from "./JGary_logo.svg";
import About from "./About";
import ProjectsList from "./ProjectsList";
import "./App.css";
import "./media-queries.css";

class App extends Component {
  state = {
    projectList: [
      {
        name: "MonsterBase",
        description:
          "Build custom encounter tables for the various regions of your D&D\u00AE world! (Note: Due to my rather unfortunate decision to use the Semantic-UI-React CSS library at present, this app displays correctly only on non-mobile devices. I'm working on a fix right now.)\r\n",
        stack: "Node Express, React, MongoDB.",
        url: "https://monsterbase-190215.herokuapp.com/",
        gitHub: "https://github.com/giacomo9999/MonsterBase_Semantic_UI"
      },
      {
        name: "The Edgar Allan Poe-try Generator",
        description:
          "Creates short poems in the style of the celebrated 19th-Century American alcoholic.",
        stack: "JavaScript, HTML/CSS.",
        url: "https://suspicious-ride-259d70.netlify.com/",
        gitHub:
          "https://github.com/giacomo9999/Edgar-Allan-Poetry-Generator-190316"
      },
      {
        name: "Cubical Tic-Tac-Toe (n x n x n)",
        description:
          "Play tic-tac-toe on a 3D grid of any size you like (within reason, of course.)",
        stack: "JavaScript, HTML/CSS.",
        url: "https://blissful-benz-0629cb.netlify.com/",
        gitHub: "https://github.com/giacomo9999/3D-Tic-Tac-Toe-190316"
      },
      {
        name: "NYC Baby Name Scrutinizer",
        description:
          "Explore recent trends in New York City baby-naming! (Uses public API from https://opendata.cityofnewyork.us/)",
        stack: "Standalone React app.",
        url: "https://zealous-albattani-62870f.netlify.com/",
        gitHub: "https://github.com/giacomo9999/baby-name-scrutinizer"
      }
    ],
    aboutPanelOpen: false,
    projectsPanelOpen: false
  };

  toggleAboutPanel = e => {
    e.preventDefault();
    console.log("Toggling About Panel");
    this.setState({ aboutPanelOpen: !this.state.aboutPanelOpen });
  };
  toggleProjectsPanel = e => {
    this.setState({ projectsPanelOpen: !this.state.projectsPanelOpen });
  };

  render() {
    const isAboutOpen = this.state.aboutPanelOpen;
    const isProjectsOpen = this.state.projectsPanelOpen;
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="logo" alt="logo" />
        </div>

        <div className="container-invisible">
          {isAboutOpen ? (
            <About closePanel={this.toggleAboutPanel} />
          ) : (
            <button className="big" onClick={this.toggleAboutPanel}>
              About Me
            </button>
          )}
          <div className="spacer10" />
          {isProjectsOpen ? (
            <ProjectsList
              closePanel={this.toggleProjectsPanel}
              projectList={this.state.projectList}
            />
          ) : (
            <button className="big" onClick={this.toggleProjectsPanel}>
              Apps I've Built
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
