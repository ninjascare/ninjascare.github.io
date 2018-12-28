import React, { Component } from "react";
import styled from "styled-components";
import { Parallax } from "react-parallax";

const GridForAboutMe = styled.div`
  background: coral;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "aboutHeading aboutImg"
    "aboutContent  aboutImg";

  .aboutHeading {
    grid-area: aboutHeading;
  }
  .aboutContent {
    grid-area: aboutContent;
  }
  .aboutImg {
    grid-area: aboutImg;
  }
`;

const image1 =
  "https://static.toiimg.com/thumb/58475411/Kolkata-in-pictures.jpg?width=748&height=499";

export default class AboutMe extends Component {
  render() {
    return (
      <section id="aboutMe">
        <GridForAboutMe>
          <div className="aboutHeading">
            <h1>About:</h1>
          </div>
          <div className="aboutContent">
            <p>
              Hi! <br />
              I'm Kevin Rosales
            </p>
          </div>
          <div className="aboutImg">
            <Parallax bgImage={image1} strength={300} >
            <div style={{ height: 500 }}>

            </div>
              {/* <img
                src="https://static.toiimg.com/thumb/58475411/Kolkata-in-pictures.jpg?width=748&height=499"
                alt="pic"
              /> */}
            </Parallax>
          </div>
        </GridForAboutMe>
      </section>
      
    );
  }
}
