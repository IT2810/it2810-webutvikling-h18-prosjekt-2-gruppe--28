import React, { Component } from 'react';
import elephant from './assets/img/animal/Elephant.svg';
import laugh from './assets/sound/human/laugh.mp3';
const poem = "This is a poem"

function ImageContainer(props) {
    const imgStyle = {
        width : '100%',
        "grid-column" : "1",
      };
    return (
        <img src={props.src} style={imgStyle}/>
    );
    }

function PoemContainer(props) {
  const poemStyle = {
    width : '80%',
    border : '1px solid red',
    'grid-column' : '2',
  };
  return (
    <div style={poemStyle}>
    <h1>Poem Title</h1>
    <p>{props.poemContent}</p>
    </div>
  );
}

function AudioContainer(props) {
  //Add style and classname after merge with develop
  return ( 
    <div class="grid-item" id="item5">
            <div class="exhibit" id="sound">
                <audio controls>
                    <source src={props.audioSource} type="audio/ogg"></source>
                    <source src={props.audioSource} type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>  

  )
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
    
    renderImageContainer(image1) {
        return <ImageContainer src={image1}>
        </ImageContainer>;
    }

    renderPoemContainer(poemContent) {
      return <PoemContainer poemContent={poemContent}>
      </PoemContainer>;
    }

    renderAudioContainer(audioSource) {
      return <AudioContainer audioSource={audioSource}>
      </AudioContainer>;
    }
    
    render() {
      return (
        <div style={this.artStyle}>
        <p> Hello!</p>
        {this.renderImageContainer(elephant)}
        {this.renderPoemContainer(poem)}
        {this.renderAudioContainer(laugh)}
        </div>
      );
    }
  }

  export default ArtContainer;