import React, { Component } from 'react';
import elephant from './assets/img/animal/Elephant.svg';

function ImageContainer(props) {
    const imgStyle = {
        width : '100%',
        "grid-column" : "1",
      };
    return (
        <img src={elephant} style={imgStyle}/>
    );
    }

class ArtContainer extends Component {
    artStyle = {
        margin: 'auto',
        display: "grid",
        width : '500px',
        height : '300px',
        "grid-template-columns" : "repeat(2, 1fr)",
        border : "3px solid black",
      };
    
    renderImageContainer(image) {
        return <ImageContainer>
        </ImageContainer>;
    }
    
    render() {
      return (
        <div style={this.artStyle}>
        <p> Hello!</p>
        {this.renderImageContainer("")}
        </div>
      );
    }
  }

  export default ArtContainer;