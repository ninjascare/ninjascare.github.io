import React, { Component } from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import AboutMe from "./AboutMe";
import ProjectsView from "./ProjectsView";

const StylePage = styled.div`
  font-family: sans-serif;
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(225, 240, 255, 1) 0%,
    rgba(133, 190, 255, 1) 100%
  );
`;

const FooterStyle = styled.div`
  clear: both;
  position: relative;
  height: 40px;
  margin-top: -40px;
  background: black;
`;

export default class Profile extends Component {
  render() {
    return (
      <div>
        <StylePage>
          <Parallax>
            <div>
              <h1>Welcome to my portfolio</h1>
            </div>
          </Parallax>

          <Parallax>
            <AboutMe />
          </Parallax>

          <Parallax>
            <ProjectsView />
          </Parallax>
        </StylePage>
        <FooterStyle>
          <footer>jhgfdsadfn</footer>
        </FooterStyle>
      </div>
    );
  }
}
