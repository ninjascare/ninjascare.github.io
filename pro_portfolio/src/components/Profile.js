import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import AboutMe from "./AboutMe";
import ProjectsView from "./ProjectsView";

const StylePage = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export default class Profile extends Component {
  render() {
    return (
      <div>
        <StylePage>
          <Parallax>
            <h1>Welcome to my portfolio</h1>
          </Parallax>
          <Parallax>
            <AboutMe />
          </Parallax>
          <Parallax>
            <ProjectsView />
          </Parallax>
        </StylePage>
      </div>
    );
  }
}
